import React, { useState } from 'react';
import type { Deck, Flashcard } from '../types';
import { addCard, updateCard, deleteCard, resetCardProgress } from '../db/database';
import { FormattedContent } from './FormattedContent';
import {
  Plus,
  Trash2,
  Edit3,
  RotateCcw,
  Eye,
  Sparkles,
} from 'lucide-react';

interface DeckManagerProps {
  deck: Deck;
  cards: Flashcard[];
  activeBoxFilter: number | null;
  onRefresh: () => void;
  onStartStudy: () => void;
  dueCount: number;
}

export const DeckManager: React.FC<DeckManagerProps> = ({
  deck,
  cards,
  activeBoxFilter,
  onRefresh,
  onStartStudy,
  dueCount,
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [editingCardId, setEditingCardId] = useState<string | null>(null);

  // Form states
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');
  const [hint, setHint] = useState('');
  const [phonetic, setPhonetic] = useState('');
  const [showLivePreview, setShowLivePreview] = useState(false);

  const resetForm = () => {
    setFront('');
    setBack('');
    setHint('');
    setPhonetic('');
    setIsAdding(false);
    setEditingCardId(null);
    setShowLivePreview(false);
  };

  const handleStartEdit = (card: Flashcard) => {
    setEditingCardId(card.id);
    setFront(card.front);
    setBack(card.back);
    setHint(card.hint || '');
    setPhonetic(card.phonetic || '');
    setIsAdding(true);
    setShowLivePreview(false);
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
          hint: hint.trim() || undefined,
          phonetic: phonetic.trim() || undefined,
        });
      }
    } else {
      await addCard(deck.id, deck.profileId, front, back, hint, phonetic);
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

  const displayedCards = activeBoxFilter !== null
    ? cards.filter(c => c.box === activeBoxFilter)
    : cards;

  return (
    <div className="w-full">
      {/* Deck Action Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-6 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              {deck.title}
            </h1>
            {deck.languageCode && (
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                {deck.languageCode}
              </span>
            )}
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
            {deck.description || 'Spaced repetition flashcards with Leitner intervals.'}
          </p>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <button
            onClick={() => {
              resetForm();
              setIsAdding(true);
            }}
            className="flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-medium border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Card</span>
          </button>

          <button
            onClick={onStartStudy}
            disabled={cards.length === 0}
            className="flex-1 sm:flex-initial px-5 py-2 rounded-lg text-xs font-semibold bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-xs"
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
              {editingCardId ? 'Edit Flashcard' : 'Create New Flashcard'}
            </h3>
            <button
              type="button"
              onClick={() => setShowLivePreview(prev => !prev)}
              className="text-xs flex items-center gap-1.5 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{showLivePreview ? 'Hide Preview' : 'Show LaTeX Preview'}</span>
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  Front (Prompt / Question / Math $...$)
                </label>
                <textarea
                  value={front}
                  onChange={e => setFront(e.target.value)}
                  placeholder="e.g. State Euler's formula: $e^{i\pi} + 1 = 0$"
                  rows={4}
                  required
                  className="w-full text-xs font-mono p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-100"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  Back (Answer / Explanation / Math $$...$$)
                </label>
                <textarea
                  value={back}
                  onChange={e => setBack(e.target.value)}
                  placeholder="e.g. The formula links e, i, pi, 1, and 0."
                  rows={4}
                  required
                  className="w-full text-xs font-mono p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-100"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  Optional Hint
                </label>
                <input
                  type="text"
                  value={hint}
                  onChange={e => setHint(e.target.value)}
                  placeholder="e.g. Think about trigonometric coordinates"
                  className="w-full text-xs p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  Optional Phonetic / Pinyin
                </label>
                <input
                  type="text"
                  value={phonetic}
                  onChange={e => setPhonetic(e.target.value)}
                  placeholder="e.g. Nǐ hǎo or [pronunciation]"
                  className="w-full text-xs p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                />
              </div>
            </div>

            {/* Live Preview Panel */}
            {showLivePreview && (
              <div className="p-4 rounded-lg bg-zinc-100/70 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-2">
                  Live Preview
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-white dark:bg-zinc-900 rounded-md border border-zinc-200 dark:border-zinc-800">
                    <span className="text-[10px] text-zinc-400 block mb-1">Front</span>
                    <FormattedContent content={front || '(empty)'} />
                  </div>
                  <div className="p-3 bg-white dark:bg-zinc-900 rounded-md border border-zinc-200 dark:border-zinc-800">
                    <span className="text-[10px] text-zinc-400 block mb-1">Back</span>
                    <FormattedContent content={back || '(empty)'} />
                  </div>
                </div>
              </div>
            )}

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
                {editingCardId ? 'Update Card' : 'Add Card'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Cards List */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 px-1 mb-1">
          <span>{displayedCards.length} card{displayedCards.length === 1 ? '' : 's'}</span>
          <span className="text-[11px]">Leitner Box System (1 to 5)</span>
        </div>

        {displayedCards.length === 0 ? (
          <div className="py-12 text-center rounded-xl border border-dashed border-zinc-200 dark:border-zinc-800 text-zinc-400 text-xs">
            No cards found in this box. Add a new card or clear the box filter.
          </div>
        ) : (
          displayedCards.map(card => {
            const isDue = card.nextReviewDate <= Date.now();

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
                    {isDue && (
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400">
                        Due for review
                      </span>
                    )}
                    {card.phonetic && (
                      <span className="text-[10px] font-mono text-zinc-400">
                        {card.phonetic}
                      </span>
                    )}
                  </div>

                  <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    <FormattedContent content={card.front} />
                  </div>

                  <div className="text-xs text-zinc-600 dark:text-zinc-400 pt-1 border-t border-zinc-100 dark:border-zinc-800/60">
                    <FormattedContent content={card.back} />
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-1 shrink-0 opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => handleReset(card.id)}
                    title="Reset to Box 1"
                    className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleStartEdit(card)}
                    title="Edit card"
                    className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDelete(card.id)}
                    title="Delete card"
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
