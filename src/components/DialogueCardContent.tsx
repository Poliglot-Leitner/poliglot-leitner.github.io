import React, { useState } from 'react';
import { Volume2, Play, CheckCircle2, MessageSquare } from 'lucide-react';
import { FormattedContent } from './FormattedContent';

interface DialogueTurn {
  speaker: string;
  target: string;
  translation?: string;
  phonetic?: string;
}

interface DialogueCardContentProps {
  front: string;
  back?: string;
  phonetic?: string;
  isFlipped?: boolean;
  languageCode: string;
  onSpeak?: (text: string, langCode?: string) => void;
  className?: string;
  compact?: boolean;
}

function parseTurns(front: string, back?: string, phonetic?: string): DialogueTurn[] {
  const frontLines = front.split('\n').map(l => l.trim()).filter(Boolean);
  const backLines = back ? back.split('\n').map(l => l.trim()).filter(Boolean) : [];
  const phoneticLines = phonetic ? phonetic.split('\n').map(l => l.trim()).filter(Boolean) : [];

  const parseLine = (line: string): { speaker: string; text: string } => {
    const match = line.match(/^([A-Za-z0-9\u4e00-\u9fa5\s]+)[:：]\s*(.*)$/);
    if (match) {
      return { speaker: match[1].trim(), text: match[2].trim() };
    }
    return { speaker: '', text: line };
  };

  return frontLines.map((fLine, idx) => {
    const { speaker, text: target } = parseLine(fLine);
    const bLine = backLines[idx];
    const pLine = phoneticLines[idx];

    const translation = bLine ? parseLine(bLine).text : undefined;
    const pText = pLine ? parseLine(pLine).text : undefined;

    return {
      speaker: speaker || (idx % 2 === 0 ? 'A' : 'B'),
      target,
      translation,
      phonetic: pText,
    };
  });
}

export const DialogueCardContent: React.FC<DialogueCardContentProps> = ({
  front,
  back,
  phonetic,
  isFlipped = false,
  languageCode,
  onSpeak,
  className = '',
  compact = false,
}) => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const turns = parseTurns(front, back, phonetic);

  const handlePlayTurn = (turnIndex: number, text: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!onSpeak) return;
    setPlayingIndex(turnIndex);
    onSpeak(text, languageCode);
    setTimeout(() => {
      setPlayingIndex(null);
    }, 2500);
  };

  const handlePlayAll = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!onSpeak) return;
    const fullText = turns.map(t => t.target).join('. ');
    onSpeak(fullText, languageCode);
  };

  const getSpeakerStyle = (speaker: string) => {
    const s = speaker.toUpperCase();
    if (s === 'A' || s.startsWith('A')) {
      return {
        badgeBg: 'bg-indigo-600 text-white shadow-xs ring-2 ring-indigo-500/20',
        bubbleBg: 'bg-indigo-50/70 dark:bg-indigo-950/30 border-indigo-200/80 dark:border-indigo-800/60',
        textColor: 'text-indigo-950 dark:text-indigo-100',
        nameColor: 'text-indigo-600 dark:text-indigo-400',
      };
    }
    if (s === 'B' || s.startsWith('B')) {
      return {
        badgeBg: 'bg-emerald-600 text-white shadow-xs ring-2 ring-emerald-500/20',
        bubbleBg: 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-200/80 dark:border-emerald-800/60',
        textColor: 'text-emerald-950 dark:text-emerald-100',
        nameColor: 'text-emerald-600 dark:text-emerald-400',
      };
    }
    return {
      badgeBg: 'bg-purple-600 text-white shadow-xs ring-2 ring-purple-500/20',
      bubbleBg: 'bg-purple-50/70 dark:bg-purple-950/30 border-purple-200/80 dark:border-purple-800/60',
      textColor: 'text-purple-950 dark:text-purple-100',
      nameColor: 'text-purple-600 dark:text-purple-400',
    };
  };

  if (compact) {
    return (
      <div className={`space-y-2 ${className}`}>
        {turns.map((turn, idx) => {
          const style = getSpeakerStyle(turn.speaker);
          return (
            <div key={idx} className="flex items-start gap-2 text-xs leading-relaxed">
              <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold shrink-0 ${style.badgeBg}`}>
                {turn.speaker}
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-zinc-900 dark:text-zinc-100">
                  {turn.target}
                </div>
                {turn.phonetic && (
                  <div className="text-[11px] font-mono text-amber-700 dark:text-amber-400 mt-0.5">
                    {turn.phonetic}
                  </div>
                )}
                {turn.translation && (
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400 italic mt-0.5">
                    {turn.translation}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`w-full space-y-3.5 ${className}`}>
      {/* Dialogue Header Controls */}
      <div className="flex items-center justify-between gap-2 pb-1 border-b border-zinc-100 dark:border-zinc-800/80">
        <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
          <MessageSquare className="w-3.5 h-3.5 text-purple-500" />
          <span>Interactive Two-Person Dialogue ({turns.length} turns)</span>
        </div>
        {onSpeak && (
          <button
            type="button"
            onClick={handlePlayAll}
            title="Play entire conversation natively"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/80 hover:bg-purple-100 dark:hover:bg-purple-900/50 cursor-pointer transition-all active:scale-95 shadow-2xs"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>Play Dialogue</span>
          </button>
        )}
      </div>

      {/* Turns message bubbles */}
      <div className="space-y-3">
        {turns.map((turn, idx) => {
          const style = getSpeakerStyle(turn.speaker);
          const isA = turn.speaker.toUpperCase().startsWith('A');
          const isTurnPlaying = playingIndex === idx;

          return (
            <div
              key={idx}
              className={`flex items-start gap-2.5 sm:gap-3 transition-all ${
                isA ? 'flex-row' : 'flex-row'
              }`}
            >
              {/* Speaker Avatar / Badge */}
              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 select-none ${style.badgeBg}`}
                title={`Speaker ${turn.speaker}`}
              >
                {turn.speaker}
              </div>

              {/* Message Bubble */}
              <div
                className={`flex-1 rounded-2xl p-3 sm:p-3.5 border transition-all text-left relative group ${style.bubbleBg} ${
                  isTurnPlaying ? 'ring-2 ring-purple-400 scale-[1.01]' : ''
                }`}
              >
                {/* Speaker Tag & Turn Listen Trigger */}
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${style.nameColor}`}>
                    Speaker {turn.speaker}
                  </span>
                  {onSpeak && (
                    <button
                      type="button"
                      onClick={(e) => handlePlayTurn(idx, turn.target, e)}
                      title={`Listen to Speaker ${turn.speaker}`}
                      className="p-1 rounded-md text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white/80 dark:hover:bg-zinc-900/80 transition-all cursor-pointer"
                    >
                      <Volume2 className={`w-3.5 h-3.5 ${isTurnPlaying ? 'animate-pulse text-purple-600' : ''}`} />
                    </button>
                  )}
                </div>

                {/* Target Language Speech */}
                <div className={`text-base sm:text-lg font-semibold leading-relaxed ${style.textColor}`}>
                  <FormattedContent content={turn.target} />
                </div>

                {/* Phonetic / Pinyin line */}
                {turn.phonetic && (
                  <div className="mt-1">
                    <span className="inline-block text-xs font-mono px-2 py-0.5 rounded bg-amber-400/15 text-amber-900 dark:text-amber-200 border border-amber-400/30">
                      {turn.phonetic}
                    </span>
                  </div>
                )}

                {/* Revealed Translation on Back / Flipped */}
                {isFlipped && turn.translation && (
                  <div className="mt-2 pt-2 border-t border-zinc-200/60 dark:border-zinc-700/60 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-normal leading-relaxed flex items-start gap-1.5 animate-in fade-in">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{turn.translation}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
