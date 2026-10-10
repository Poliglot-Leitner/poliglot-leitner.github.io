export type SubjectCategory = 'knowledge' | 'languages' | 'stem' | 'life';

export interface SubjectOption {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: SubjectCategory;
  defaultLanguageCode?: string;
  sampleDeckTitle: string;
}

export interface Profile {
  id: string;
  name: string;
  avatar: string;
  selectedSubjects: string[];
  createdAt: number;
}

export interface Deck {
  id: string;
  profileId: string;
  subjectId: string;
  title: string;
  description: string;
  languageCode?: string;
  isCustom?: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface Flashcard {
  id: string;
  deckId: string;
  profileId: string;
  front: string;
  back: string;
  hint?: string;
  phonetic?: string;
  box: 1 | 2 | 3 | 4 | 5;
  nextReviewDate: number; // Unix timestamp in ms
  lastReviewedDate?: number;
  totalReviews: number;
  correctCount: number;
  incorrectCount: number;
  createdAt: number;
}

export interface LeitnerBoxSummary {
  box: 1 | 2 | 3 | 4 | 5;
  intervalDays: number;
  label: string;
  cardCount: number;
  dueCount: number;
}

export interface SessionResult {
  cardId: string;
  wasCorrect: boolean;
  oldBox: number;
  newBox: number;
}
