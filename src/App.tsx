import React, { useState, useEffect, useCallback } from 'react';
import type { Profile, Deck, Flashcard, LeitnerBoxSummary } from './types';
import {
  getAllProfiles,
  createProfile,
  getDecksForProfile,
  getAllCardsForProfile,
  getCardsForDeck,
  getDueCards,
  seedSubjectsForProfile,
  computeBoxSummaries,
  createCustomDeck,
  deleteDeck,
} from './db/database';
import { Navbar } from './components/Navbar';
import { LeitnerVisualizer } from './components/LeitnerVisualizer';
import { DeckManager } from './components/DeckManager';
import { StudySession } from './components/StudySession';
import { SubjectPickerModal } from './components/SubjectPickerModal';
import { ProfileModal } from './components/ProfileModal';
import {
  BookMarked,
  Plus,
  Play,
  Layers,
  ArrowRight,
  Trash2,
} from 'lucide-react';

export function App() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [activeProfile, setActiveProfile] = useState<Profile | null>(null);
  const [decks, setDecks] = useState<Deck[]>([]);
  const [selectedDeckId, setSelectedDeckId] = useState<string | null>(null);
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [boxSummaries, setBoxSummaries] = useState<LeitnerBoxSummary[]>([]);
  const [activeBoxFilter, setActiveBoxFilter] = useState<number | null>(null);

  // Modals & Navigation states
  const [isStudyMode, setIsStudyMode] = useState(false);
  const [studyQueue, setStudyQueue] = useState<Flashcard[]>([]);
  const [isSubjectModalOpen, setIsSubjectModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isCustomDeckModalOpen, setIsCustomDeckModalOpen] = useState(false);
  const [customTitle, setCustomTitle] = useState('');
  const [customDesc, setCustomDesc] = useState('');
  const [customLang, setCustomLang] = useState('');

  // Theme
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('leitner_theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('leitner_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Load or Initialize Profile
  const loadInitialData = useCallback(async () => {
    let allProf = await getAllProfiles();
    if (allProf.length === 0) {
      // First time onboarding: seed default profile with fun-facts, science, history
      const initial = await createProfile('Learner', '🌱', ['fun-facts', 'science', 'math', 'lang-spanish']);
      allProf = [initial];
    }

    setProfiles(allProf);
    const current = allProf[0];
    setActiveProfile(current);
  }, []);

  useEffect(() => {
    loadInitialData();
  }, [loadInitialData]);

  // Load Decks & Cards for the Active Profile
  const refreshProfileData = useCallback(async () => {
    if (!activeProfile) return;

    const profDecks = await getDecksForProfile(activeProfile.id);
    setDecks(profDecks);

    let activeCards: Flashcard[] = [];
    if (selectedDeckId) {
      activeCards = await getCardsForDeck(selectedDeckId);
    } else {
      activeCards = await getAllCardsForProfile(activeProfile.id);
    }

    setCards(activeCards);
    setBoxSummaries(computeBoxSummaries(activeCards));
  }, [activeProfile, selectedDeckId]);

  useEffect(() => {
    refreshProfileData();
  }, [refreshProfileData]);

  const handleSelectDeck = (deckId: string | null) => {
    setSelectedDeckId(deckId);
    setActiveBoxFilter(null);
  };

  // Start Study Session
  const handleStartStudy = async (deckId?: string) => {
    if (!activeProfile) return;

    const dueCards = await getDueCards(activeProfile.id, deckId || selectedDeckId || undefined);

    if (dueCards.length > 0) {
      setStudyQueue(dueCards);
    } else {
      // If no cards are strictly due, allow practice review of all cards in this selection
      const targetCards = deckId
        ? await getCardsForDeck(deckId)
        : selectedDeckId
        ? await getCardsForDeck(selectedDeckId)
        : await getAllCardsForProfile(activeProfile.id);

      setStudyQueue(targetCards);
    }

    setIsStudyMode(true);
  };

  // Save Subjects selected from modal
  const handleSaveSubjects = async (subjectIds: string[]) => {
    if (!activeProfile) return;

    await seedSubjectsForProfile(activeProfile.id, subjectIds);
    // Update profile
    activeProfile.selectedSubjects = subjectIds;
    setActiveProfile({ ...activeProfile });

    await refreshProfileData();
  };

  // Create Custom Deck
  const handleCreateCustomDeck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeProfile || !customTitle.trim()) return;

    const newDeck = await createCustomDeck(
      activeProfile.id,
      customTitle.trim(),
      customDesc.trim(),
      customLang.trim() || undefined
    );

    setCustomTitle('');
    setCustomDesc('');
    setCustomLang('');
    setIsCustomDeckModalOpen(false);
    await refreshProfileData();
    setSelectedDeckId(newDeck.id);
  };

  const handleDeleteDeck = async (deckId: string) => {
    if (confirm('Delete this entire deck and all its flashcards?')) {
      await deleteDeck(deckId);
      if (selectedDeckId === deckId) {
        setSelectedDeckId(null);
      }
      await refreshProfileData();
    }
  };

  if (!activeProfile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 text-zinc-400 text-xs font-mono">
        Loading Leitner system...
      </div>
    );
  }

  const selectedDeck = decks.find(d => d.id === selectedDeckId);
  const totalDueCards = cards.filter(c => c.nextReviewDate <= Date.now()).length;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col font-sans transition-colors duration-150">
      <Navbar
        activeProfile={activeProfile}
        decks={decks}
        selectedDeckId={selectedDeckId}
        onSelectDeck={handleSelectDeck}
        onOpenProfileModal={() => setIsProfileModalOpen(true)}
        onOpenSubjectModal={() => setIsSubjectModalOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
        totalDueToday={totalDueCards}
      />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8">
        {isStudyMode ? (
          <StudySession
            deck={selectedDeck}
            cards={studyQueue}
            onFinish={() => {
              setIsStudyMode(false);
              refreshProfileData();
            }}
            onExit={() => {
              setIsStudyMode(false);
              refreshProfileData();
            }}
          />
        ) : (
          <div>
            {/* Visualizer Header */}
            <LeitnerVisualizer
              summaries={boxSummaries}
              activeBoxFilter={activeBoxFilter}
              onSelectBox={setActiveBoxFilter}
              totalCards={cards.length}
              totalDue={totalDueCards}
            />

            {/* If viewing a single deck */}
            {selectedDeck ? (
              <div>
                <div className="mb-4">
                  <button
                    onClick={() => setSelectedDeckId(null)}
                    className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center gap-1 cursor-pointer"
                  >
                    <span>&larr; View All Subjects</span>
                  </button>
                </div>

                <DeckManager
                  deck={selectedDeck}
                  cards={cards}
                  activeBoxFilter={activeBoxFilter}
                  onRefresh={refreshProfileData}
                  onStartStudy={() => handleStartStudy(selectedDeck.id)}
                  dueCount={totalDueCards}
                />
              </div>
            ) : (
              /* All Decks Overview */
              <div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                      Active Learning Decks
                    </h2>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                      Review cards on schedule to commit knowledge to permanent long-term memory.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsSubjectModalOpen(true)}
                      className="px-3.5 py-2 rounded-lg text-xs font-medium border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <BookMarked className="w-3.5 h-3.5" />
                      <span>Browse Subjects</span>
                    </button>

                    <button
                      onClick={() => setIsCustomDeckModalOpen(true)}
                      className="px-3.5 py-2 rounded-lg text-xs font-medium border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Create Deck</span>
                    </button>

                    {cards.length > 0 && (
                      <button
                        onClick={() => handleStartStudy()}
                        className="px-4 py-2 rounded-lg text-xs font-semibold bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-xs cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Study All ({totalDueCards} Due)</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Deck Cards Grid */}
                {decks.length === 0 ? (
                  <div className="py-16 text-center border border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900">
                    <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 mx-auto mb-3">
                      <Layers className="w-6 h-6" />
                    </div>
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                      No subjects added yet
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto mb-5">
                      Choose from curated subjects like Science, Programming, Languages, or Fun Facts to get starter flashcards.
                    </p>
                    <button
                      onClick={() => setIsSubjectModalOpen(true)}
                      className="px-4 py-2 rounded-lg text-xs font-semibold bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 cursor-pointer shadow-xs"
                    >
                      Explore Subject Catalog
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {decks.map(deck => {
                      return (
                        <DeckCard
                          key={deck.id}
                          deck={deck}
                          onOpen={() => setSelectedDeckId(deck.id)}
                          onStudy={() => handleStartStudy(deck.id)}
                          onDelete={() => handleDeleteDeck(deck.id)}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Modals */}
      <SubjectPickerModal
        isOpen={isSubjectModalOpen}
        onClose={() => setIsSubjectModalOpen(false)}
        activeSubjectIds={decks.map(d => d.subjectId).filter(s => s !== 'custom')}
        onSaveSubjects={handleSaveSubjects}
      />

      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        profiles={profiles}
        activeProfile={activeProfile}
        onSelectProfile={prof => {
          setActiveProfile(prof);
          setSelectedDeckId(null);
        }}
        onRefreshProfiles={loadInitialData}
        onOpenSubjectCatalog={() => setIsSubjectModalOpen(true)}
      />

      {/* Create Custom Deck Modal */}
      {isCustomDeckModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl w-full max-w-md p-6 shadow-2xl">
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1">
              Create Custom Deck
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">
              Add your own topic for studying with Leitner boxes.
            </p>

            <form onSubmit={handleCreateCustomDeck} className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  Deck Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Organic Chemistry, Medical Terminology"
                  value={customTitle}
                  onChange={e => setCustomTitle(e.target.value)}
                  required
                  className="w-full text-xs p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  Description
                </label>
                <input
                  type="text"
                  placeholder="Brief summary or focus area"
                  value={customDesc}
                  onChange={e => setCustomDesc(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  Speech Language Code (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. en-US, es-ES, fr-FR, de-DE, ja-JP"
                  value={customLang}
                  onChange={e => setCustomLang(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-mono"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setIsCustomDeckModalOpen(false)}
                  className="px-3 py-1.5 rounded-lg text-xs text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                >
                  Create Deck
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// Sub-component for individual Deck overview card
function DeckCard({
  deck,
  onOpen,
  onStudy,
  onDelete,
}: {
  deck: Deck;
  onOpen: () => void;
  onStudy: () => void;
  onDelete: () => void;
}) {
  const [deckCards, setDeckCards] = useState<Flashcard[]>([]);

  useEffect(() => {
    getCardsForDeck(deck.id).then(setDeckCards);
  }, [deck.id]);

  const dueCount = deckCards.filter(c => c.nextReviewDate <= Date.now()).length;

  return (
    <div
      onClick={onOpen}
      className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between cursor-pointer group shadow-2xs hover:shadow-xs relative"
    >
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {deck.title}
          </h3>

          {deck.isCustom && (
            <button
              onClick={e => {
                e.stopPropagation();
                onDelete();
              }}
              title="Delete deck"
              className="opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-red-500 transition-opacity p-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed mb-4">
          {deck.description || 'Spaced repetition flashcards with Leitner intervals.'}
        </p>
      </div>

      <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
            {deckCards.length} cards
          </span>
          {dueCount > 0 && (
            <span className="text-[10px] font-medium px-2 py-0.2 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
              {dueCount} due
            </span>
          )}
        </div>

        <button
          onClick={e => {
            e.stopPropagation();
            onStudy();
          }}
          className="px-3 py-1 rounded-md text-xs font-medium bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 transition-colors flex items-center gap-1 cursor-pointer"
        >
          <span>Study</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}

export default App;
