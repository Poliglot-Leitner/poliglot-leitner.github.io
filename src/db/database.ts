import Dexie, { type Table } from 'dexie';
import type { Profile, Deck, Flashcard, LeitnerBoxSummary } from '../types';
import { AVAILABLE_SUBJECTS, INITIAL_SEEDS } from '../data/subjects';

export const BOX_INTERVALS_DAYS = {
  1: 1,
  2: 3,
  3: 7,
  4: 14,
  5: 30,
} as const;

export class LeitnerDatabase extends Dexie {
  profiles!: Table<Profile, string>;
  decks!: Table<Deck, string>;
  cards!: Table<Flashcard, string>;

  constructor() {
    super('LeitnerLearningAppDB');
    this.version(1).stores({
      profiles: 'id, name, createdAt',
      decks: 'id, profileId, subjectId, createdAt',
      cards: 'id, deckId, profileId, box, nextReviewDate, lastReviewedDate',
    });
  }
}

export const db = new LeitnerDatabase();

// --- Profile Helpers ---

export async function getAllProfiles(): Promise<Profile[]> {
  return await db.profiles.toArray();
}

export async function createProfile(name: string, avatar: string, selectedSubjects: string[]): Promise<Profile> {
  const newProfile: Profile = {
    id: 'prof_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
    name: name.trim() || 'Learner',
    avatar: avatar || '🌱',
    selectedSubjects: selectedSubjects,
    createdAt: Date.now(),
  };

  await db.profiles.add(newProfile);
  await seedSubjectsForProfile(newProfile.id, selectedSubjects);
  return newProfile;
}

export async function deleteProfile(profileId: string): Promise<void> {
  await db.transaction('rw', db.profiles, db.decks, db.cards, async () => {
    await db.cards.where('profileId').equals(profileId).delete();
    await db.decks.where('profileId').equals(profileId).delete();
    await db.profiles.delete(profileId);
  });
}

// --- Deck & Subject Helpers ---

export async function getDecksForProfile(profileId: string): Promise<Deck[]> {
  return await db.decks.where('profileId').equals(profileId).toArray();
}

export async function seedSubjectsForProfile(profileId: string, subjectIds: string[]): Promise<void> {
  const existingDecks = await db.decks.where('profileId').equals(profileId).toArray();
  const existingSubjectIds = new Set(existingDecks.map(d => d.subjectId));

  for (const subjectId of subjectIds) {
    if (existingSubjectIds.has(subjectId)) continue;

    const subjectDef = AVAILABLE_SUBJECTS.find(s => s.id === subjectId);
    if (!subjectDef) continue;

    const deckId = 'deck_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
    const newDeck: Deck = {
      id: deckId,
      profileId,
      subjectId,
      title: subjectDef.sampleDeckTitle || subjectDef.name,
      description: subjectDef.description,
      languageCode: subjectDef.defaultLanguageCode,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    await db.decks.add(newDeck);

    // Seed cards for this subject
    const seedCards = INITIAL_SEEDS[subjectId] || [];
    const now = Date.now();
    const flashcards: Flashcard[] = seedCards.map((card, idx) => ({
      id: 'card_' + deckId + '_' + idx + '_' + Math.random().toString(36).slice(2, 5),
      deckId,
      profileId,
      front: card.front,
      back: card.back,
      hint: card.hint,
      phonetic: card.phonetic,
      box: 1,
      nextReviewDate: now, // Ready for review immediately
      totalReviews: 0,
      correctCount: 0,
      incorrectCount: 0,
      createdAt: now,
    }));

    if (flashcards.length > 0) {
      await db.cards.bulkAdd(flashcards);
    }
  }
}

export async function createCustomDeck(
  profileId: string,
  title: string,
  description: string,
  languageCode?: string
): Promise<Deck> {
  const deckId = 'deck_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
  const newDeck: Deck = {
    id: deckId,
    profileId,
    subjectId: 'custom',
    title: title.trim(),
    description: description.trim(),
    languageCode,
    isCustom: true,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
  await db.decks.add(newDeck);
  return newDeck;
}

export async function deleteDeck(deckId: string): Promise<void> {
  await db.transaction('rw', db.decks, db.cards, async () => {
    await db.cards.where('deckId').equals(deckId).delete();
    await db.decks.delete(deckId);
  });
}

// --- Flashcard & Leitner Review Helpers ---

export async function getCardsForDeck(deckId: string): Promise<Flashcard[]> {
  return await db.cards.where('deckId').equals(deckId).toArray();
}

export async function getAllCardsForProfile(profileId: string): Promise<Flashcard[]> {
  return await db.cards.where('profileId').equals(profileId).toArray();
}

export async function getDueCards(profileId: string, deckId?: string): Promise<Flashcard[]> {
  const now = Date.now();
  let query = db.cards.where('profileId').equals(profileId);

  const allProfileCards = await query.toArray();
  return allProfileCards.filter(card => {
    const matchesDeck = deckId ? card.deckId === deckId : true;
    const isDue = card.nextReviewDate <= now;
    return matchesDeck && isDue;
  });
}

export async function processCardReview(card: Flashcard, wasCorrect: boolean): Promise<{ oldBox: number; newBox: number; nextDate: number }> {
  const now = Date.now();
  const oldBox = card.box;
  let newBox: 1 | 2 | 3 | 4 | 5 = 1;

  if (wasCorrect) {
    newBox = Math.min(5, oldBox + 1) as 1 | 2 | 3 | 4 | 5;
  } else {
    // Leitner system resets card back to Box 1 for reinforcement
    newBox = 1;
  }

  const intervalDays = BOX_INTERVALS_DAYS[newBox];
  const nextDate = now + intervalDays * 24 * 60 * 60 * 1000;

  const updated: Flashcard = {
    ...card,
    box: newBox,
    nextReviewDate: nextDate,
    lastReviewedDate: now,
    totalReviews: card.totalReviews + 1,
    correctCount: card.correctCount + (wasCorrect ? 1 : 0),
    incorrectCount: card.incorrectCount + (wasCorrect ? 0 : 1),
  };

  await db.cards.put(updated);

  return { oldBox, newBox, nextDate };
}

export async function addCard(deckId: string, profileId: string, front: string, back: string, hint?: string, phonetic?: string): Promise<Flashcard> {
  const newCard: Flashcard = {
    id: 'card_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
    deckId,
    profileId,
    front: front.trim(),
    back: back.trim(),
    hint: hint?.trim() || undefined,
    phonetic: phonetic?.trim() || undefined,
    box: 1,
    nextReviewDate: Date.now(),
    totalReviews: 0,
    correctCount: 0,
    incorrectCount: 0,
    createdAt: Date.now(),
  };

  await db.cards.add(newCard);
  return newCard;
}

export async function updateCard(card: Flashcard): Promise<void> {
  await db.cards.put(card);
}

export async function deleteCard(cardId: string): Promise<void> {
  await db.cards.delete(cardId);
}

export async function resetCardProgress(cardId: string): Promise<void> {
  const card = await db.cards.get(cardId);
  if (card) {
    card.box = 1;
    card.nextReviewDate = Date.now();
    card.totalReviews = 0;
    card.correctCount = 0;
    card.incorrectCount = 0;
    await db.cards.put(card);
  }
}

// --- Box Summary & Statistics ---

export function computeBoxSummaries(cards: Flashcard[]): LeitnerBoxSummary[] {
  const now = Date.now();
  const boxes: Array<1 | 2 | 3 | 4 | 5> = [1, 2, 3, 4, 5];

  const labels: Record<1 | 2 | 3 | 4 | 5, string> = {
    1: 'Daily Review',
    2: 'Every 3 Days',
    3: 'Weekly',
    4: 'Fortnightly',
    5: 'Mastered (Monthly)',
  };

  return boxes.map(box => {
    const boxCards = cards.filter(c => c.box === box);
    const dueCount = boxCards.filter(c => c.nextReviewDate <= now).length;
    return {
      box,
      intervalDays: BOX_INTERVALS_DAYS[box],
      label: labels[box],
      cardCount: boxCards.length,
      dueCount,
    };
  });
}

// --- Export / Import ---

export interface BackupData {
  version: number;
  exportedAt: number;
  profile: Profile;
  decks: Deck[];
  cards: Flashcard[];
}

export async function exportProfileBackup(profileId: string): Promise<BackupData | null> {
  const profile = await db.profiles.get(profileId);
  if (!profile) return null;

  const decks = await db.decks.where('profileId').equals(profileId).toArray();
  const cards = await db.cards.where('profileId').equals(profileId).toArray();

  return {
    version: 1,
    exportedAt: Date.now(),
    profile,
    decks,
    cards,
  };
}

export async function importProfileBackup(backup: BackupData): Promise<Profile> {
  // If importing, create a new profile copy or overwrite
  const profileId = 'prof_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6);
  const importedProfile: Profile = {
    ...backup.profile,
    id: profileId,
    name: backup.profile.name + ' (Imported)',
    createdAt: Date.now(),
  };

  await db.transaction('rw', db.profiles, db.decks, db.cards, async () => {
    await db.profiles.add(importedProfile);

    const oldToNewDeckMap = new Map<string, string>();

    for (const d of backup.decks) {
      const newDeckId = 'deck_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6);
      oldToNewDeckMap.set(d.id, newDeckId);
      await db.decks.add({
        ...d,
        id: newDeckId,
        profileId,
      });
    }

    for (const c of backup.cards) {
      const newDeckId = oldToNewDeckMap.get(c.deckId);
      if (newDeckId) {
        await db.cards.add({
          ...c,
          id: 'card_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
          deckId: newDeckId,
          profileId,
        });
      }
    }
  });

  return importedProfile;
}
