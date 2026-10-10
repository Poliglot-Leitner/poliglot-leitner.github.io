import React from 'react';
import type { Profile, Deck } from '../types';
import {
  Layers,
  BookMarked,
  Sun,
  Moon,
  ChevronDown,
  Sparkles,
} from 'lucide-react';

interface NavbarProps {
  activeProfile: Profile;
  decks: Deck[];
  selectedDeckId: string | null;
  onSelectDeck: (deckId: string | null) => void;
  onOpenProfileModal: () => void;
  onOpenSubjectModal: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  totalDueToday: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeProfile,
  decks,
  selectedDeckId,
  onSelectDeck,
  onOpenProfileModal,
  onOpenSubjectModal,
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
            onClick={() => onSelectDeck(null)}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 flex items-center justify-center font-bold text-xs tracking-wider shadow-xs">
              <Layers className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-none">
                Leitner
              </span>
              <span className="text-[10px] text-zinc-400 font-mono tracking-wider uppercase">
                Spaced Repetition
              </span>
            </div>
          </div>

          {/* Quick Deck Switcher */}
          {decks.length > 0 && (
            <div className="hidden sm:flex items-center ml-4 pl-4 border-l border-zinc-200 dark:border-zinc-800">
              <select
                value={selectedDeckId || 'all'}
                onChange={e => onSelectDeck(e.target.value === 'all' ? null : e.target.value)}
                className="text-xs bg-transparent border-none text-zinc-600 dark:text-zinc-300 font-medium py-1 pr-6 focus:outline-none cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                <option value="all" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
                  All Decks ({decks.length})
                </option>
                {decks.map(d => (
                  <option key={d.id} value={d.id} className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
                    {d.title}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Right Navigation Actions */}
        <div className="flex items-center gap-2">
          {/* Subjects Button */}
          <button
            onClick={onOpenSubjectModal}
            className="px-2.5 py-1.5 rounded-lg text-xs font-medium border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Browse and select learning subjects"
          >
            <BookMarked className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Subjects</span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
              {decks.length}
            </span>
          </button>

          {/* Due Badge if any */}
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
            <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 max-w-[90px] truncate">
              {activeProfile.name}
            </span>
            <ChevronDown className="w-3 h-3 text-zinc-400" />
          </button>
        </div>
      </div>
    </header>
  );
};
