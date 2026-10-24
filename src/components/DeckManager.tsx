import React, { useState } from 'react';
import type { Deck, Flashcard, CardType } from '../types';
import { addCard, updateCard, deleteCard, resetCardProgress, toggleCardFavorite } from '../db/database';
import { FormattedContent } from './FormattedContent';
import { DialogueCardContent } from './DialogueCardContent';
import { useSpeech } from '../hooks/useSpeech';
import {
  Plus,
  Trash2,
  Edit3,
  RotateCcw,
  Volume2,
  Sparkles,
  BookOpen,
  Star,
  Type,
  MessageSquareQuote,
  MessagesSquare,
} from 'lucide-react';

interface DeckManagerProps {
  deck: Deck;
  cards: Flashcard[];
  activeBoxFilter: number | null;
  onRefresh: () => void;
  onStartStudy: () => void;
  onStudyFavorites?: () => void;
  dueCount: number;
}

export const DeckManager: React.FC<DeckManagerProps> = ({
  deck,
  cards,
  activeBoxFilter,
  onRefresh,
  onStartStudy,
  onStudyFavorites,
  dueCount,
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [editingCardId, setEditingCardId] = useState<string | null>(null);

  // Form states
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');
  const [cardType, setCardType] = useState<CardType>('word');
  const [phonetic, setPhonetic] = useState('');
  const [exampleTarget, setExampleTarget] = useState('');
  const [exampleTranslation, setExampleTranslation] = useState('');
  const [grammarNotes, setGrammarNotes] = useState('');
  const [hint, setHint] = useState('');

  const [cardTypeFilter, setCardTypeFilter] = useState<'all' | 'word' | 'sentence' | 'dialogue'>('all');

  const { speak, isSupported: speechSupported } = useSpeech();

  const resetForm = () => {
    setFront('');
    setBack('');
    setCardType('word');
    setPhonetic('');
    setExampleTarget('');
    setExampleTranslation('');
    setGrammarNotes('');
    setHint('');
    setIsAdding(false);
    setEditingCardId(null);
  };

  const handleStartEdit = (card: Flashcard) => {
    setEditingCardId(card.id);
    setFront(card.front);
    setBack(card.back);
    setCardType(card.cardType || 'sentence');
    setPhonetic(card.phonetic || '');
    setExampleTarget(card.exampleTarget || '');
    setExampleTranslation(card.exampleTranslation || '');
    setGrammarNotes(card.grammarNotes || '');
    setHint(card.hint || '');
    setIsAdding(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!front.trim() || !back.trim()) return;

    if (editingCardId) {
      const existing = cards.find(c => c.id === editingCardId);
      if (existing) {
        await updateCard({
          ...existing,
          front: front.trim(),
          back: back.trim(),
          cardType,
          phonetic: phonetic.trim() || undefined,
          exampleTarget: exampleTarget.trim() || undefined,
          exampleTranslation: exampleTranslation.trim() || undefined,
          grammarNotes: grammarNotes.trim() || undefined,
          hint: hint.trim() || undefined,
        });
      }
    } else {
      await addCard(
        deck.id,
        deck.profileId,
        deck.languageId,
        deck.difficulty,
        front,
        back,
        phonetic,
        exampleTarget,
        exampleTranslation,
        grammarNotes,
        hint,
        cardType
      );
    }

    resetForm();
    onRefresh();
  };

  const handleDelete = async (cardId: string) => {
    if (confirm('Delete this card permanently?')) {
      await deleteCard(cardId);
      onRefresh();
    }
  };

  const handleReset = async (cardId: string) => {
    await resetCardProgress(cardId);
    onRefresh();
  };

  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const handleToggleFav = async (cardId: string) => {
    await toggleCardFavorite(cardId);
    onRefresh();
  };

  const displayedCards = cards.filter(c => {
    if (activeBoxFilter !== null && c.box !== activeBoxFilter) return false;
    if (showFavoritesOnly && !c.isFavorite) return false;
    if (cardTypeFilter !== 'all') {
      const effectiveType = c.cardType || 'sentence';
      if (effectiveType !== cardTypeFilter) return false;
    }
    return true;
  });

  const favoritesCount = cards.filter(c => c.isFavorite).length;
  const wordsCount = cards.filter(c => (c.cardType || 'sentence') === 'word').length;
  const sentencesCount = cards.filter(c => (c.cardType || 'sentence') === 'sentence').length;
  const dialoguesCount = cards.filter(c => c.cardType === 'dialogue').length;

  return (
    <div className="w-full">
      {/* Deck Action Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-6 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              {deck.title}
            </h1>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-semibold">
              {deck.difficulty}
            </span>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
            {deck.description}
          </p>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full sm:w-auto">
          {favoritesCount > 0 && onStudyFavorites && (
            <button
              onClick={onStudyFavorites}
              className="flex-1 sm:flex-initial px-3.5 py-2 rounded-lg text-xs font-semibold bg-amber-400 hover:bg-amber-300 text-amber-950 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              title="Quickly review all starred favorite sentences in this deck"
            >
              <Star className="w-3.5 h-3.5 fill-amber-950 text-amber-950" />
              <span>Review ({favoritesCount})</span>
            </button>
          )}

          <button
            onClick={() => {
              resetForm();
              setIsAdding(true);
            }}
            className="flex-1 sm:flex-initial px-3.5 py-2 rounded-lg text-xs font-medium border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Phrase</span>
          </button>

          <button
            onClick={onStartStudy}
            disabled={cards.length === 0}
            className="flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-semibold bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {dueCount > 0 ? `Study Due (${dueCount})` : 'Practice All'}
            </span>
          </button>
        </div>
      </div>

      {/* Add / Edit Card Form Panel */}
      {isAdding && (
        <div className="mb-6 p-5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 shadow-sm animate-in fade-in">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {editingCardId ? 'Edit Language Phrase' : 'Add New Language Phrase'}
            </h3>
            <span className="text-xs text-zinc-400 uppercase font-mono">
              {deck.languageId} &bull; {deck.difficulty}
            </span>
          </div>

          <form onSubmit={handleSave} className="space-y-4">
            {/* Card Type Selector */}
            <div>
              <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                Card Category
              </label>
              <div className="grid grid-cols-3 gap-2 max-w-md">
                <button
                  type="button"
                  onClick={() => setCardType('word')}
                  className={`p-2 rounded-lg border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    cardType === 'word'
                      ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 shadow-xs'
                      : 'bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300'
                  }`}
                >
                  <Type className="w-3.5 h-3.5" />
                  <span>Word</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCardType('sentence')}
                  className={`p-2 rounded-lg border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    cardType === 'sentence'
                      ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 shadow-xs'
                      : 'bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300'
                  }`}
                >
                  <MessageSquareQuote className="w-3.5 h-3.5" />
                  <span>Sentence</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCardType('dialogue')}
                  className={`p-2 rounded-lg border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    cardType === 'dialogue'
                      ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                      : 'bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300'
                  }`}
                >
                  <MessagesSquare className="w-3.5 h-3.5" />
                  <span>Dialogue</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  {cardType === 'word' ? 'Target Word / Expression' : cardType === 'dialogue' ? 'Target Dialogue (e.g. A: ... \\n B: ...)' : 'Target Sentence'}
                </label>
                <textarea
                  value={front}
                  onChange={e => setFront(e.target.value)}
                  placeholder={
                    cardType === 'word'
                      ? 'e.g. la sobremesa or 早上好'
                      : cardType === 'dialogue'
                      ? 'A: 你好！请问洗手间在哪里？\nB: 就在前面右拐。'
                      : 'e.g. ¿Dónde está la estación de tren?'
                  }
                  rows={cardType === 'dialogue' ? 4 : 2}
                  required
                  className="w-full text-xs font-sans p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  English Translation / Meaning
                </label>
                <textarea
                  value={back}
                  onChange={e => setBack(e.target.value)}
                  placeholder="e.g. The post-meal conversation at the table with friends"
                  rows={2}
                  required
                  className="w-full text-xs font-sans p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  Phonetic / Pinyin
                </label>
                <input
                  type="text"
                  value={phonetic}
                  onChange={e => setPhonetic(e.target.value)}
                  placeholder="e.g. Nǐ hǎo or [pronunciation]"
                  className="w-full text-xs p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  Grammar & Nuance Notes
                </label>
                <input
                  type="text"
                  value={grammarNotes}
                  onChange={e => setGrammarNotes(e.target.value)}
                  placeholder="e.g. Feminine noun, uses subjunctive"
                  className="w-full text-xs p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  Recall Hint
                </label>
                <input
                  type="text"
                  value={hint}
                  onChange={e => setHint(e.target.value)}
                  placeholder="e.g. Think about physical location"
                  className="w-full text-xs p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  Example Sentence (Target Language)
                </label>
                <input
                  type="text"
                  value={exampleTarget}
                  onChange={e => setExampleTarget(e.target.value)}
                  placeholder="e.g. Disculpe, ¿dónde está la estación de tren más cercana?"
                  className="w-full text-xs p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  Example Sentence Translation
                </label>
                <input
                  type="text"
                  value={exampleTranslation}
                  onChange={e => setExampleTranslation(e.target.value)}
                  placeholder="e.g. Excuse me, where is the nearest train station?"
                  className="w-full text-xs p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                type="button"
                onClick={resetForm}
                className="px-3.5 py-1.5 rounded-lg text-xs text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/50 dark:hover:bg-zinc-800 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 shadow-xs cursor-pointer"
              >
                {editingCardId ? 'Save Changes' : 'Add Phrase'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Cards List */}
      <div className="space-y-2.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-zinc-500 dark:text-zinc-400 px-1 mb-1">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {/* Type Filter Pills: All / Words / Sentences / Dialogues */}
            <div className="inline-flex items-center p-0.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
              <button
                type="button"
                onClick={() => setCardTypeFilter('all')}
                className={`px-2 py-0.5 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                  cardTypeFilter === 'all'
                    ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-2xs'
                    : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
                }`}
              >
                All ({cards.length})
              </button>
              <button
                type="button"
                onClick={() => setCardTypeFilter('word')}
                className={`px-2 py-0.5 rounded-md text-[11px] font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                  cardTypeFilter === 'word'
                    ? 'bg-white dark:bg-zinc-900 text-indigo-600 dark:text-indigo-400 shadow-2xs'
                    : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
                }`}
              >
                <Type className="w-3 h-3" />
                <span>Words ({wordsCount})</span>
              </button>
              <button
                type="button"
                onClick={() => setCardTypeFilter('sentence')}
                className={`px-2 py-0.5 rounded-md text-[11px] font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                  cardTypeFilter === 'sentence'
                    ? 'bg-white dark:bg-zinc-900 text-emerald-600 dark:text-emerald-400 shadow-2xs'
                    : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
                }`}
              >
                <MessageSquareQuote className="w-3 h-3" />
                <span>Sentences ({sentencesCount})</span>
              </button>
              <button
                type="button"
                onClick={() => setCardTypeFilter('dialogue')}
                className={`px-2 py-0.5 rounded-md text-[11px] font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                  cardTypeFilter === 'dialogue'
                    ? 'bg-white dark:bg-zinc-900 text-purple-600 dark:text-purple-400 shadow-2xs'
                    : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
                }`}
              >
                <MessagesSquare className="w-3 h-3" />
                <span>Dialogues ({dialoguesCount})</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => setShowFavoritesOnly(prev => !prev)}
              className={`px-2 py-1 rounded-lg text-[11px] font-medium transition-all flex items-center gap-1 cursor-pointer border ${
                showFavoritesOnly
                  ? 'bg-amber-400 text-amber-950 border-amber-500 shadow-2xs font-semibold'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:text-amber-600 dark:hover:text-amber-400'
              }`}
              title="Filter by favorite sentences"
            >
              <Star className={`w-3 h-3 ${showFavoritesOnly ? 'fill-amber-950 text-amber-950' : 'text-zinc-400'}`} />
              <span>Favorites ({favoritesCount})</span>
            </button>
          </div>
          <span className="text-[11px] font-mono text-zinc-400">
            Showing {displayedCards.length} of {cards.length}
          </span>
        </div>

        {displayedCards.length === 0 ? (
          <div className="py-12 text-center rounded-xl border border-dashed border-zinc-200 dark:border-zinc-800 text-zinc-400 text-xs">
            {showFavoritesOnly
              ? 'No favorite phrases found in this deck. Click the star icon on any card to add it to your favorites!'
              : cardTypeFilter !== 'all'
              ? `No ${cardTypeFilter === 'word' ? 'words/expressions' : cardTypeFilter === 'dialogue' ? 'dialogues' : 'sentences'} match the current filter.`
              : 'No phrases found in this box. Add a new phrase or clear the filter.'}
          </div>
        ) : (
          displayedCards.map(card => {
            const isDue = card.nextReviewDate <= Date.now();
            const isWord = card.cardType === 'word';
            const isDialogue = card.cardType === 'dialogue';

            return (
              <div
                key={card.id}
                className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-2xs flex flex-col sm:flex-row items-start justify-between gap-4 group"
              >
                <div className="flex-1 min-w-0 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-semibold text-zinc-700 dark:text-zinc-300">
                      Box {card.box}
                    </span>
                    <span className={`inline-flex items-center gap-1 text-[9px] font-semibold uppercase px-2 py-0.5 rounded-full border ${
                      isWord
                        ? 'bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800'
                        : isDialogue
                        ? 'bg-purple-50 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
                        : 'bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                    }`}>
                      {isWord ? (
                        <>
                          <Type className="w-2.5 h-2.5" />
                          <span>Word</span>
                        </>
                      ) : isDialogue ? (
                        <>
                          <MessagesSquare className="w-2.5 h-2.5" />
                          <span>Dialogue</span>
                        </>
                      ) : (
                        <>
                          <MessageSquareQuote className="w-2.5 h-2.5" />
                          <span>Sentence</span>
                        </>
                      )}
                    </span>
                    {isDue && (
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400">
                        Due for recall
                      </span>
                    )}
                    {card.phonetic && (
                      <span className="text-[11px] font-mono px-2 py-0.2 rounded bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20">
                        {card.phonetic}
                      </span>
                    )}
                  </div>

                  {isDialogue ? (
                    <div className="pt-1">
                      <DialogueCardContent
                        front={card.front}
                        back={card.back}
                        phonetic={card.phonetic}
                        isFlipped={true}
                        languageCode={deck.languageCode}
                        onSpeak={speechSupported ? (text, code) => speak(text, code || deck.languageCode) : undefined}
                        compact={true}
                      />
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-2">
                        <div className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                          <FormattedContent content={card.front} />
                        </div>

                        {speechSupported && (
                          <button
                            type="button"
                            onClick={() => speak(card.front, deck.languageCode)}
                            title="Pronounce"
                            className="p-1 rounded text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>

                      <div className="text-xs text-zinc-600 dark:text-zinc-400">
                        <FormattedContent content={card.back} />
                      </div>
                    </>
                  )}

                  {card.exampleSentences && card.exampleSentences.length > 0 ? (
                    <div className="space-y-1.5 pt-1">
                      {card.exampleSentences.map((ex, exIdx) => (
                        <div key={exIdx} className="text-xs text-zinc-500 dark:text-zinc-400 flex items-start gap-1.5 bg-zinc-50 dark:bg-zinc-800/40 p-2 rounded-lg border border-zinc-100 dark:border-zinc-800">
                          <BookOpen className="w-3.5 h-3.5 shrink-0 mt-0.5 text-indigo-500" />
                          <div>
                            <span className="font-medium text-zinc-800 dark:text-zinc-200">{ex.target}</span>{' '}
                            {ex.translation && <span className="italic">({ex.translation})</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : card.exampleTarget ? (
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 pt-1 flex items-start gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 shrink-0 mt-0.5 text-zinc-400" />
                      <span>
                        <strong>Context:</strong> {card.exampleTarget}{' '}
                        {card.exampleTranslation && <span className="italic">({card.exampleTranslation})</span>}
                      </span>
                    </div>
                  ) : null}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => handleToggleFav(card.id)}
                    title={card.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    className={`p-1.5 rounded-md transition-all cursor-pointer ${
                      card.isFavorite
                        ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/40 hover:bg-amber-100'
                        : 'text-zinc-400 hover:text-amber-500 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                    }`}
                  >
                    <Star className={`w-3.5 h-3.5 ${card.isFavorite ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={() => handleReset(card.id)}
                    title="Reset to Box 1"
                    className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleStartEdit(card)}
                    title="Edit phrase"
                    className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDelete(card.id)}
                    title="Delete phrase"
                    className="p-1.5 rounded-md text-zinc-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
