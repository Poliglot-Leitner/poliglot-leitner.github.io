import React, { useState } from 'react';
import type { Flashcard, Deck, CardType } from '../types';
import { SUPPORTED_LANGUAGES } from '../data/languages';
import { FormattedContent } from './FormattedContent';
import { DialogueCardContent } from './DialogueCardContent';
import { useSpeech } from '../hooks/useSpeech';
import {
  Star,
  Volume2,
  Type,
  MessageSquareQuote,
  MessagesSquare,
  BookOpen,
  Eye,
  EyeOff,
  Sparkles,
  Clock,
  Layers,
} from 'lucide-react';

interface CardListViewProps {
  cards: Flashcard[];
  decks: Deck[];
  cardTypeFilter: CardType | 'all';
  onToggleFavorite: (cardId: string) => void;
  onStartStudyWithCards?: () => void;
}

export const CardListView: React.FC<CardListViewProps> = ({
  cards,
  decks,
  cardTypeFilter,
  onToggleFavorite,
  onStartStudyWithCards,
}) => {
  const [revealedCardIds, setRevealedCardIds] = useState<Set<string>>(new Set());
  const [showAllTranslations, setShowAllTranslations] = useState<boolean>(true);
  const { speak, isSupported: speechSupported } = useSpeech();

  const toggleReveal = (cardId: string) => {
    setRevealedCardIds(prev => {
      const next = new Set(prev);
      if (next.has(cardId)) {
        next.delete(cardId);
      } else {
        next.add(cardId);
      }
      return next;
    });
  };

  const getLangMeta = (langId: string) => {
    return SUPPORTED_LANGUAGES.find(l => l.id === langId);
  };

  const getDeckForCard = (card: Flashcard): Deck | undefined => {
    return decks.find(d => d.id === card.deckId);
  };

  const isCardRevealed = (cardId: string) => {
    if (showAllTranslations) return true;
    return revealedCardIds.has(cardId);
  };

  const dueCardsCount = cards.filter(c => c.nextReviewDate <= Date.now()).length;

  return (
    <div className="w-full space-y-4">
      {/* Controls & summary bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xs">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center">
            {cardTypeFilter === 'dialogue' ? (
              <MessagesSquare className="w-4 h-4" />
            ) : cardTypeFilter === 'word' ? (
              <Type className="w-4 h-4" />
            ) : (
              <MessageSquareQuote className="w-4 h-4" />
            )}
          </div>
          <div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <span>
                {cardTypeFilter === 'dialogue'
                  ? 'Interactive Dialogues'
                  : cardTypeFilter === 'word'
                  ? 'Words & Expressions'
                  : cardTypeFilter === 'sentence'
                  ? 'Conversational Sentences'
                  : 'Flashcard Collection'}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                {cards.length}
              </span>
            </h3>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
              {cardTypeFilter === 'dialogue'
                ? 'Realistic two-person conversations for practical fluency in Chinese, German & more.'
                : 'Spaced repetition flashcards organized by Leitner mastery boxes.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            type="button"
            onClick={() => setShowAllTranslations(prev => !prev)}
            className="px-3 py-1.5 rounded-xl text-xs font-medium border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all cursor-pointer flex items-center gap-1.5"
            title="Toggle showing translations across all cards"
          >
            {showAllTranslations ? (
              <>
                <EyeOff className="w-3.5 h-3.5" />
                <span>Hide Translations</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5" />
                <span>Show All Translations</span>
              </>
            )}
          </button>

          {onStartStudyWithCards && cards.length > 0 && (
            <button
              type="button"
              onClick={onStartStudyWithCards}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-all cursor-pointer shadow-xs active:scale-95 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>Study ({dueCardsCount} Due)</span>
            </button>
          )}
        </div>
      </div>

      {/* Cards Grid */}
      {cards.length === 0 ? (
        <div className="py-16 text-center border border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900">
          <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 mx-auto mb-3">
            <Layers className="w-6 h-6" />
          </div>
          <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
            No cards found in this section
          </h4>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto">
            Try switching language filters or open the Curriculum builder to seed more content.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map(card => {
            const langMeta = getLangMeta(card.languageId);
            const deck = getDeckForCard(card);
            const langCode = deck?.languageCode || (card.languageId === 'chinese' ? 'zh-CN' : card.languageId === 'german' ? 'de-DE' : card.languageId === 'spanish' ? 'es-ES' : 'en-US');
            const isDue = card.nextReviewDate <= Date.now();
            const isRevealed = isCardRevealed(card.id);
            const isDialogue = card.cardType === 'dialogue';
            const isWord = card.cardType === 'word';

            return (
              <div
                key={card.id}
                className="p-4 sm:p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-2xs flex flex-col justify-between group relative"
              >
                <div>
                  {/* Card Meta Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 flex items-center gap-1">
                        <span>{langMeta?.flag || '🌐'}</span>
                        <span>{langMeta?.name || card.languageId}</span>
                      </span>

                      <span className={`inline-flex items-center gap-1 text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full border ${
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

                      {card.difficulty && (
                        <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                          {card.difficulty}
                        </span>
                      )}

                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-semibold text-zinc-700 dark:text-zinc-300">
                        Box {card.box}
                      </span>

                      {isDue && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                          Due
                        </span>
                      )}
                    </div>

                    {/* Star favorite toggle */}
                    <button
                      type="button"
                      onClick={() => onToggleFavorite(card.id)}
                      className={`p-1.5 rounded-xl border transition-all cursor-pointer active:scale-90 ${
                        card.isFavorite
                          ? 'bg-amber-400 text-amber-950 border-amber-500 shadow-2xs'
                          : 'text-zinc-400 hover:text-amber-500 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                      }`}
                      title="Toggle star favorite"
                    >
                      <Star className={`w-3.5 h-3.5 ${card.isFavorite ? 'fill-amber-950 text-amber-950' : ''}`} />
                    </button>
                  </div>

                  {/* Card Main Body */}
                  {isDialogue ? (
                    <div className="my-2">
                      <DialogueCardContent
                        front={card.front}
                        back={card.back}
                        phonetic={card.phonetic}
                        isFlipped={isRevealed}
                        languageCode={langCode}
                        onSpeak={speechSupported ? (text, code) => speak(text, code || langCode) : undefined}
                        compact={false}
                      />
                    </div>
                  ) : (
                    <div className="space-y-2.5 my-2">
                      {card.phonetic && (
                        <div>
                          <span className="inline-block text-xs font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20 whitespace-pre-line">
                            {card.phonetic}
                          </span>
                        </div>
                      )}

                      <div className="flex items-start justify-between gap-2">
                        <div className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
                          <FormattedContent content={card.front} />
                        </div>
                        {speechSupported && (
                          <button
                            type="button"
                            onClick={() => speak(card.front, langCode)}
                            title="Pronounce natively"
                            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors shrink-0"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      {isRevealed && (
                        <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 pt-2 border-t border-zinc-100 dark:border-zinc-800/80 animate-in fade-in">
                          <FormattedContent content={card.back} />
                        </div>
                      )}
                    </div>
                  )}

                  {/* Grammar notes if present */}
                  {card.grammarNotes && isRevealed && (
                    <div className="mt-3 p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                      <div className="leading-relaxed">
                        <strong className="font-semibold text-zinc-800 dark:text-zinc-200">Notes: </strong>
                        {card.grammarNotes}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Footer */}
                <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <Clock className="w-3 h-3 text-zinc-400" />
                    <span>Interval: Box {card.box} ({card.box === 1 ? '1d' : card.box === 2 ? '3d' : card.box === 3 ? '7d' : card.box === 4 ? '14d' : '30d'})</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleReveal(card.id)}
                    className="text-[11px] font-medium text-purple-600 dark:text-purple-400 hover:underline cursor-pointer"
                  >
                    {isRevealed ? 'Hide Notes' : 'Show Translation'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
