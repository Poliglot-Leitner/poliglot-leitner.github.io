import React from 'react';
import type { Profile, Deck, LanguageId } from '../types';
import { SUPPORTED_LANGUAGES } from '../data/languages';
import {
  Globe2,
  Sun,
  Moon,
  ChevronDown,
  Sparkles,
  SlidersHorizontal,
} from 'lucide-react';

interface NavbarProps {
  activeProfile: Profile;
  decks: Deck[];
  onSelectDeck: (deckId: string | null) => void;
  selectedLanguageFilter: LanguageId | 'all';
  onSelectLanguageFilter: (lang: LanguageId | 'all') => void;
  onOpenProfileModal: () => void;
  onOpenCurriculumModal: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  totalDueToday: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeProfile,
  decks,
  onSelectDeck,
  selectedLanguageFilter,
  onSelectLanguageFilter,
  onOpenProfileModal,
  onOpenCurriculumModal,
  theme,
  onToggleTheme,
  totalDueToday,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-3">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <div
            onClick={() => {
              onSelectDeck(null);
              onSelectLanguageFilter('all');
            }}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 flex items-center justify-center font-bold text-xs shadow-xs">
              <Globe2 className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-none">
                Polyglot
              </span>
              <span className="text-[10px] text-zinc-400 font-mono tracking-wider uppercase">
                Leitner Languages
              </span>
            </div>
          </div>

          {/* Language Filter Pills */}
          <div className="hidden sm:flex items-center ml-3 pl-3 border-l border-zinc-200 dark:border-zinc-800 gap-1">
            <button
              onClick={() => onSelectLanguageFilter('all')}
              className={`px-2 py-0.5 rounded-md text-xs font-medium transition-colors ${
                selectedLanguageFilter === 'all'
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                  : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
              }`}
            >
              All
            </button>
            {SUPPORTED_LANGUAGES.map(lang => (
              <button
                key={lang.id}
                onClick={() => onSelectLanguageFilter(lang.id)}
                className={`px-2 py-0.5 rounded-md text-xs font-medium transition-colors flex items-center gap-1 ${
                  selectedLanguageFilter === lang.id
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                    : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
                }`}
              >
                <span>{lang.flag}</span>
                <span className="hidden md:inline">{lang.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Curriculum Builder Trigger */}
          <button
            onClick={onOpenCurriculumModal}
            className="px-2.5 py-1.5 rounded-lg text-xs font-medium border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Configure target languages, topics & difficulty"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Curriculum</span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 capitalize">
              {activeProfile.selectedDifficulty} &bull; {decks.length}
            </span>
          </button>

          {/* Due Count Badge */}
          {totalDueToday > 0 && (
            <div className="hidden xs:flex items-center gap-1 px-2 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-[11px] font-medium">
              <Sparkles className="w-3 h-3" />
              <span>{totalDueToday} Due</span>
            </div>
          )}

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Profile Switcher Trigger */}
          <button
            onClick={onOpenProfileModal}
            className="flex items-center gap-1.5 pl-2 pr-2.5 py-1 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all cursor-pointer shadow-2xs"
            title="Manage profiles & backup data"
          >
            <span className="text-sm select-none">{activeProfile.avatar}</span>
            <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 max-w-[85px] truncate">
              {activeProfile.name}
            </span>
            <ChevronDown className="w-3 h-3 text-zinc-400" />
          </button>
        </div>
      </div>
    </header>
  );
};
