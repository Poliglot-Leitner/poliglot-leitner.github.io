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
  const [sessionResults, setSessionResults] = useState<SessionResult[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const { speak, isSpeaking, isSupported: speechSupported } = useSpeech();

  const currentCard = cards[currentIndex];
  const langCode = deck?.languageCode || 'en-US';

  const handleSpeak = useCallback((text: string) => {
    speak(text, langCode);
  }, [speak, langCode]);

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
      // Trigger subtle celebration confetti
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

  // Global Keyboard listener for spacebar, 1, 2, S
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isCompleted) return;

      // Avoid capturing shortcuts if user is typing in an input
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
          handleSpeak(isFlipped ? currentCard.back : currentCard.front);
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
  }, [handleFlip, handleGrade, handleSpeak, isFlipped, isCompleted, currentCard, onExit]);

  // If no cards due
  if (!cards || cards.length === 0) {
    return (
      <div className="max-w-xl mx-auto py-16 text-center">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          No Cards Due for Review!
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 max-w-md mx-auto">
          You are all caught up with your Leitner schedule for this deck. Check back when the next interval arrives or add new cards.
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

  // Completed Session Screen
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
          Session Complete!
        </h2>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-8">
          Great job reinforcing your memory through spaced repetition.
        </p>

        {/* Stats card */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 mb-8 text-left shadow-xs space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-zinc-500 dark:text-zinc-400">Cards Reviewed</span>
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
              {advanced} cards
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={onFinish}
            className="w-full py-2.5 rounded-lg text-xs font-semibold bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 shadow-xs cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  const progressPercent = Math.round(((currentIndex + 1) / cards.length) * 100);

  return (
    <div className="max-w-2xl mx-auto py-4 px-3 flex flex-col min-h-[580px]">
      {/* Top Header / Progress */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onExit}
          className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Exit Session</span>
        </button>

        <div className="flex items-center gap-3 text-xs">
          <span className="font-mono text-zinc-500 dark:text-zinc-400">
            {currentIndex + 1} / {cards.length}
          </span>
          <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold uppercase bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
            Current: Box {currentCard.box}
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
      <div className="perspective-1000 flex-1 flex flex-col justify-center my-auto min-h-[360px]">
        <div
          onClick={handleFlip}
          className={`w-full min-h-[340px] rounded-2xl border transition-all duration-300 cursor-pointer p-8 flex flex-col justify-between relative shadow-sm hover:shadow-md select-none ${
            isFlipped
              ? 'bg-zinc-50/90 dark:bg-zinc-900/90 border-zinc-300 dark:border-zinc-700 ring-1 ring-zinc-400/20'
              : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800'
          }`}
        >
          {/* Card Meta & Badges */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              {isFlipped ? 'Answer / Solution' : 'Prompt / Question'}
            </span>

            <div className="flex items-center gap-2" onClick={e => e.stopPropagation()}>
              {currentCard.phonetic && (
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  {currentCard.phonetic}
                </span>
              )}

              {speechSupported && (
                <button
                  type="button"
                  title="Pronounce with speech synthesis (Shortcut: S)"
                  onClick={() => handleSpeak(isFlipped ? currentCard.back : currentCard.front)}
                  className={`p-1.5 rounded-lg border transition-colors ${
                    isSpeaking
                      ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 border-indigo-300'
                      : 'text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              )}

              {currentCard.hint && !isFlipped && (
                <button
                  type="button"
                  title="Toggle Hint (Shortcut: H)"
                  onClick={() => setShowHint(prev => !prev)}
                  className={`p-1.5 rounded-lg border transition-colors ${
                    showHint
                      ? 'bg-amber-50 dark:bg-amber-950 text-amber-600 border-amber-300'
                      : 'text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  <HelpCircle className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Card Body with KaTeX & Markdown */}
          <div className="my-auto py-4">
            {!isFlipped ? (
              <div>
                <FormattedContent
                  content={currentCard.front}
                  className="text-lg sm:text-xl font-medium text-zinc-900 dark:text-zinc-100"
                />
                {showHint && currentCard.hint && (
                  <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-300 animate-in fade-in">
                    <strong>Hint:</strong> {currentCard.hint}
                  </div>
                )}
              </div>
            ) : (
              <div className="animate-in fade-in duration-200">
                <FormattedContent
                  content={currentCard.back}
                  className="text-base sm:text-lg text-zinc-800 dark:text-zinc-200"
                />
              </div>
            )}
          </div>

          {/* Bottom Flip Hint */}
          <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400 dark:text-zinc-500">
            <span className="flex items-center gap-1">
              <RotateCw className="w-3.5 h-3.5" />
              <span>Tap card or press <kbd className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded text-[10px]">Space</kbd> to {isFlipped ? 'flip back' : 'reveal'}</span>
            </span>
            <span className="font-mono text-[11px]">
              Box {currentCard.box}
            </span>
          </div>
        </div>
      </div>

      {/* Control Buttons Bar */}
      <div className="mt-6 flex items-center gap-3">
        {!isFlipped ? (
          <button
            type="button"
            onClick={handleFlip}
            className="w-full py-3 rounded-xl text-xs font-semibold tracking-wide bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 transition-opacity cursor-pointer shadow-xs flex items-center justify-center gap-2"
          >
            <span>Show Answer</span>
            <kbd className="font-mono bg-white/20 dark:bg-black/10 px-1.5 py-0.5 rounded text-[10px]">Space</kbd>
          </button>
        ) : (
          <div className="w-full grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => handleGrade(false)}
              className="py-3 px-4 rounded-xl border border-red-200 dark:border-red-950/60 bg-red-500/5 hover:bg-red-500/10 text-red-700 dark:text-red-400 text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <XCircle className="w-4 h-4" />
              <span>Review Again (Box 1)</span>
              <kbd className="font-mono bg-red-500/10 px-1.5 py-0.5 rounded text-[10px]">1</kbd>
            </button>

            <button
              type="button"
              onClick={() => handleGrade(true)}
              className="py-3 px-4 rounded-xl border border-emerald-200 dark:border-emerald-950/60 bg-emerald-500/10 hover:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <CheckCircle className="w-4 h-4" />
              <span>I Know This (+1 Box)</span>
              <kbd className="font-mono bg-emerald-500/15 px-1.5 py-0.5 rounded text-[10px]">2</kbd>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
