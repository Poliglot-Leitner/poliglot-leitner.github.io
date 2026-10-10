import React, { useState, useEffect, useCallback } from 'react';
import type { Flashcard, Deck, SessionResult } from '../types';
import { processCardReview } from '../db/database';
import { FormattedContent } from './FormattedContent';
import { useSpeech } from '../hooks/useSpeech';
import confetti from 'canvas-confetti';
import {
  Volume2,
  HelpCircle,
  RotateCw,
  CheckCircle,
  XCircle,
  Trophy,
  ArrowLeft,
  Sparkles,
  Repeat,
  BookOpen,
} from 'lucide-react';

interface StudySessionProps {
  deck?: Deck;
  cards: Flashcard[];
  onFinish: () => void;
  onExit: () => void;
}

export const StudySession: React.FC<StudySessionProps> = ({
  deck,
  cards,
  onFinish,
  onExit,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isReverseMode, setIsReverseMode] = useState(false); // Practice Native -> Target
  const [sessionResults, setSessionResults] = useState<SessionResult[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const { speak, isSpeaking, isSupported: speechSupported } = useSpeech();

  const currentCard = cards[currentIndex];

  // Dynamically resolve exact language code from current card or deck
  const getCardLanguageCode = useCallback((card?: Flashcard, currentDeck?: Deck): string => {
    if (currentDeck?.languageCode) return currentDeck.languageCode;
    if (card?.languageId) {
      const map: Record<string, string> = {
        chinese: 'zh-CN',
        spanish: 'es-ES',
        german: 'de-DE',
        english: 'en-US',
      };
      if (map[card.languageId]) return map[card.languageId];
    }
    return 'zh-CN';
  }, []);

  const targetLangCode = getCardLanguageCode(currentCard, deck);

  const handleSpeak = useCallback((text: string, forceLang?: string) => {
    const langToUse = forceLang || (isReverseMode ? 'en-US' : targetLangCode);
    speak(text, langToUse);
  }, [speak, isReverseMode, targetLangCode]);

  const handleFlip = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);

  const handleGrade = useCallback(async (wasCorrect: boolean) => {
    if (!currentCard) return;

    const { oldBox, newBox } = await processCardReview(currentCard, wasCorrect);

    const result: SessionResult = {
      cardId: currentCard.id,
      wasCorrect,
      oldBox,
      newBox,
    };

    const nextResults = [...sessionResults, result];
    setSessionResults(nextResults);

    if (currentIndex + 1 < cards.length) {
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false);
      setShowHint(false);
    } else {
      setIsCompleted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.65 },
          colors: ['#10b981', '#6366f1', '#f59e0b', '#3b82f6'],
        });
      } catch {
        // Fallback silently if canvas not available
      }
    }
  }, [currentCard, currentIndex, cards.length, sessionResults]);

  // Global Keyboard listener for spacebar, 1, 2, S, H
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isCompleted) return;

      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        handleFlip();
      } else if (e.key === '1' || e.key === 'ArrowLeft') {
        if (isFlipped) {
          e.preventDefault();
          handleGrade(false);
        }
      } else if (e.key === '2' || e.key === 'ArrowRight') {
        if (isFlipped) {
          e.preventDefault();
          handleGrade(true);
        }
      } else if (e.key.toLowerCase() === 's') {
        if (currentCard) {
          e.preventDefault();
          handleSpeak(isReverseMode ? currentCard.back : currentCard.front);
        }
      } else if (e.key.toLowerCase() === 'h') {
        if (currentCard?.hint) {
          e.preventDefault();
          setShowHint(prev => !prev);
        }
      } else if (e.key === 'Escape') {
        onExit();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleFlip, handleGrade, handleSpeak, isFlipped, isCompleted, currentCard, isReverseMode, onExit]);

  if (!cards || cards.length === 0) {
    return (
      <div className="max-w-xl mx-auto py-16 text-center">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          All Caught Up!
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 max-w-md mx-auto">
          No cards currently due in this deck according to your Leitner review schedule.
        </p>
        <button
          onClick={onExit}
          className="px-5 py-2.5 rounded-lg text-xs font-semibold bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90"
        >
          Return to Deck
        </button>
      </div>
    );
  }

  if (isCompleted) {
    const total = sessionResults.length;
    const correctCount = sessionResults.filter(r => r.wasCorrect).length;
    const accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const advanced = sessionResults.filter(r => r.newBox > r.oldBox).length;

    return (
      <div className="max-w-md mx-auto py-12 px-4 text-center animate-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center mb-4">
          <Trophy className="w-8 h-8" />
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-1">
          Review Session Complete!
        </h2>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-8">
          Excellent work reinforcing your language retention with spaced repetition.
        </p>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 mb-8 text-left shadow-xs space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-zinc-500 dark:text-zinc-400">Phrases Practiced</span>
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">{total}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-zinc-500 dark:text-zinc-400">Recall Accuracy</span>
            <span className={`font-semibold ${accuracy >= 70 ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-900 dark:text-zinc-100'}`}>
              {accuracy}%
            </span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-zinc-500 dark:text-zinc-400">Promoted to Higher Box</span>
            <span className="font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              {advanced} phrases
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={onFinish}
            className="w-full py-2.5 rounded-lg text-xs font-semibold bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 shadow-xs cursor-pointer"
          >
            Finish Session
          </button>
        </div>
      </div>
    );
  }

  const progressPercent = Math.round(((currentIndex + 1) / cards.length) * 100);

  // Content display according to reverse mode
  const promptText = isReverseMode ? currentCard.back : currentCard.front;
  const answerText = isReverseMode ? currentCard.front : currentCard.back;

  return (
    <div className="max-w-2xl mx-auto py-4 px-3 flex flex-col min-h-[580px]">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onExit}
          className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Exit Session</span>
        </button>

        <div className="flex items-center gap-2">
          {/* Reverse Mode Toggle */}
          <button
            type="button"
            onClick={() => setIsReverseMode(prev => !prev)}
            title="Toggle prompt direction (Target Language &harr; Translation)"
            className={`px-2.5 py-1 rounded-md text-xs font-medium border flex items-center gap-1.5 transition-colors ${
              isReverseMode
                ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-transparent hover:text-zinc-900'
            }`}
          >
            <Repeat className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isReverseMode ? 'Reverse (EN → Target)' : 'Standard (Target → EN)'}</span>
          </button>

          <span className="px-2 py-1 rounded-md text-[11px] font-mono uppercase bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold">
            Box {currentCard.box}
          </span>
          <span className="text-xs font-mono text-zinc-400">
            {currentIndex + 1} / {cards.length}
          </span>
        </div>
      </div>

      {/* Progress Line */}
      <div className="w-full h-1 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden mb-6">
        <div
          className="h-full bg-zinc-900 dark:bg-zinc-100 transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* 3D Flashcard Container */}
      <div className="perspective-1000 flex-1 flex flex-col justify-center my-auto min-h-[380px]">
        <div
          onClick={handleFlip}
          className={`w-full min-h-[360px] rounded-2xl border transition-all duration-300 cursor-pointer p-8 flex flex-col justify-between relative shadow-sm hover:shadow-md select-none ${
            isFlipped
              ? 'bg-zinc-50/90 dark:bg-zinc-900/90 border-zinc-300 dark:border-zinc-700 ring-1 ring-zinc-400/20'
              : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800'
          }`}
        >
          {/* Card Top Meta */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                {isFlipped ? 'Meaning & Usage' : 'Target Phrase'}
              </span>
              {currentCard.difficulty && (
                <span className="text-[10px] font-medium uppercase px-2 py-0.2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                  {currentCard.difficulty}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2" onClick={e => e.stopPropagation()}>
              {/* Phonetic / Pinyin */}
              {currentCard.phonetic && (
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20">
                  {currentCard.phonetic}
                </span>
              )}

              {/* Speech Audio Button */}
              {speechSupported && (
                <button
                  type="button"
                  title="Pronounce with native accent (Shortcut: S)"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSpeak(isReverseMode ? answerText : promptText);
                  }}
                  className={`w-9 h-9 sm:w-8 sm:h-8 flex items-center justify-center rounded-xl border transition-all cursor-pointer active:scale-95 shrink-0 ${
                    isSpeaking
                      ? 'bg-amber-400 text-zinc-950 border-amber-500 ring-2 ring-amber-400/40 scale-105 shadow-sm'
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50'
                  }`}
                  aria-label="Listen to pronunciation"
                >
                  <Volume2 className={`w-4 h-4 ${isSpeaking ? 'animate-pulse text-zinc-950' : ''}`} />
                </button>
              )}

              {/* Hint Toggle */}
              {currentCard.hint && !isFlipped && (
                <button
                  type="button"
                  title="Toggle Hint (Shortcut: H)"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowHint(prev => !prev);
                  }}
                  className={`w-9 h-9 sm:w-8 sm:h-8 flex items-center justify-center rounded-xl border transition-colors cursor-pointer active:scale-95 shrink-0 ${
                    showHint
                      ? 'bg-amber-50 dark:bg-amber-950 text-amber-600 border-amber-300'
                      : 'text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50'
                  }`}
                  aria-label="Toggle hint"
                >
                  <HelpCircle className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Card Body */}
          <div className="my-auto py-3 sm:py-4">
            {!isFlipped ? (
              <div>
                <FormattedContent
                  content={promptText}
                  className="text-xl sm:text-3xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight leading-snug"
                />

                {/* Mobile-Friendly Quick Audio Trigger */}
                {speechSupported && (
                  <div className="mt-3 flex items-center gap-2" onClick={e => e.stopPropagation()}>
                    <button
                      type="button"
                      onClick={() => handleSpeak(promptText)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer active:scale-95 ${
                        isSpeaking
                          ? 'bg-amber-400 text-zinc-950 border-amber-500 ring-2 ring-amber-400/30'
                          : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200/80 dark:border-zinc-700/80 hover:bg-zinc-200/70 dark:hover:bg-zinc-700'
                      }`}
                    >
                      <Volume2 className={`w-3.5 h-3.5 ${isSpeaking ? 'animate-pulse' : ''}`} />
                      <span>{isSpeaking ? 'Speaking...' : 'Tap to Listen'}</span>
                    </button>
                  </div>
                )}

                {showHint && currentCard.hint && (
                  <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-300 animate-in fade-in">
                    <strong>Hint:</strong> {currentCard.hint}
                  </div>
                )}
              </div>
            ) : (
              <div className="animate-in fade-in duration-200 space-y-3.5 sm:space-y-4">
                <div>
                  <span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider block mb-1">
                    Translation
                  </span>
                  <FormattedContent
                    content={answerText}
                    className="text-lg sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 leading-snug"
                  />

                  {/* Audio button for revealed translation if target is on back */}
                  {speechSupported && isReverseMode && (
                    <div className="mt-2.5 flex items-center gap-2" onClick={e => e.stopPropagation()}>
                      <button
                        type="button"
                        onClick={() => handleSpeak(answerText, targetLangCode)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/80 active:scale-95 cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Listen ({targetLangCode})</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Example sentence & translation */}
                {currentCard.exampleTarget && (
                  <div className="p-3 sm:p-3.5 rounded-xl bg-zinc-100/70 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-zinc-400 font-medium">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>In Context:</span>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSpeak(currentCard.exampleTarget!, targetLangCode);
                        }}
                        title="Pronounce example sentence"
                        className="p-1 rounded text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-200/60 dark:hover:bg-zinc-700 cursor-pointer active:scale-95"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200">
                      {currentCard.exampleTarget}
                    </p>
                    {currentCard.exampleTranslation && (
                      <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 italic">
                        "{currentCard.exampleTranslation}"
                      </p>
                    )}
                  </div>
                )}

                {/* Grammar & cultural notes */}
                {currentCard.grammarNotes && (
                  <div className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 border-l-2 border-indigo-400 pl-3">
                    <strong>Notes:</strong> {currentCard.grammarNotes}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Bottom Flip Reminder */}
          <div className="pt-3.5 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400 dark:text-zinc-500">
            <span className="flex items-center gap-1">
              <RotateCw className="w-3.5 h-3.5" />
              <span>Tap to {isFlipped ? 'flip back' : 'reveal'}</span>
              <span className="hidden sm:inline"> (or press <kbd className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded text-[10px]">Space</kbd>)</span>
            </span>
            <span className="font-mono text-[11px] uppercase">
              {deck?.languageId}
            </span>
          </div>
        </div>
      </div>

      {/* Control Buttons Bar */}
      <div className="mt-4 sm:mt-6 flex items-center gap-2 sm:gap-3">
        {!isFlipped ? (
          <button
            type="button"
            onClick={handleFlip}
            className="w-full py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 active:scale-[0.99] transition-all cursor-pointer shadow-xs flex items-center justify-center gap-2"
          >
            <span>Show Translation</span>
            <kbd className="hidden sm:inline-block font-mono bg-white/20 dark:bg-black/10 px-1.5 py-0.5 rounded text-[10px]">Space</kbd>
          </button>
        ) : (
          <div className="w-full grid grid-cols-2 gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => handleGrade(false)}
              className="py-3 sm:py-3.5 px-3 sm:px-4 rounded-xl border border-red-200 dark:border-red-950/60 bg-red-500/10 hover:bg-red-500/15 text-red-700 dark:text-red-400 text-xs sm:text-sm font-semibold active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer"
            >
              <XCircle className="w-4 h-4 shrink-0" />
              <span>Review Again</span>
              <kbd className="hidden sm:inline-block font-mono bg-red-500/10 px-1.5 py-0.5 rounded text-[10px]">1</kbd>
            </button>

            <button
              type="button"
              onClick={() => handleGrade(true)}
              className="py-3 sm:py-3.5 px-3 sm:px-4 rounded-xl border border-emerald-200 dark:border-emerald-950/60 bg-emerald-500/15 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-semibold active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer shadow-xs"
            >
              <CheckCircle className="w-4 h-4 shrink-0" />
              <span>I Know This</span>
              <kbd className="hidden sm:inline-block font-mono bg-emerald-500/15 px-1.5 py-0.5 rounded text-[10px]">2</kbd>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
