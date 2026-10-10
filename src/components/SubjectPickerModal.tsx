import React, { useState } from 'react';
import type { SubjectCategory } from '../types';
import { AVAILABLE_SUBJECTS } from '../data/subjects';
import {
  Sparkles,
  Landmark,
  Atom,
  Binary,
  Code2,
  HeartHandshake,
  Compass,
  BookOpen,
  Languages,
  MessageSquareText,
  Globe2,
  Check,
  X,
  BookMarked
} from 'lucide-react';

interface SubjectPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeSubjectIds: string[];
  onSaveSubjects: (newSelectedIds: string[]) => Promise<void>;
  isFirstTime?: boolean;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Landmark,
  Atom,
  Binary,
  Code2,
  HeartHandshake,
  Compass,
  BookOpen,
  Languages,
  MessageSquareText,
  Globe2,
};

export const SubjectPickerModal: React.FC<SubjectPickerModalProps> = ({
  isOpen,
  onClose,
  activeSubjectIds,
  onSaveSubjects,
  isFirstTime = false,
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>(activeSubjectIds);
  const [filterCategory, setFilterCategory] = useState<SubjectCategory | 'all'>('all');
  const [isSaving, setIsSaving] = useState(false);

  if (!isOpen) return null;

  const handleToggle = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(item => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleSelectAll = () => {
    setSelectedIds(AVAILABLE_SUBJECTS.map(s => s.id));
  };

  const handleClearAll = () => {
    setSelectedIds([]);
  };

  const handleConfirm = async () => {
    if (selectedIds.length === 0) {
      alert('Please select at least one subject to start learning!');
      return;
    }
    setIsSaving(true);
    try {
      await onSaveSubjects(selectedIds);
      onClose();
    } finally {
      setIsSaving(false);
    }
  };

  const filteredSubjects = filterCategory === 'all'
    ? AVAILABLE_SUBJECTS
    : AVAILABLE_SUBJECTS.filter(s => s.category === filterCategory);

  const categories: Array<{ id: SubjectCategory | 'all'; label: string }> = [
    { id: 'all', label: 'All Subjects' },
    { id: 'knowledge', label: 'General Knowledge' },
    { id: 'stem', label: 'STEM & Math' },
    { id: 'languages', label: 'Languages' },
    { id: 'life', label: 'Life & Survival' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-zinc-100 dark:border-zinc-800 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 mb-2">
              <BookMarked className="w-3.5 h-3.5" />
              <span>Subject Catalog</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              {isFirstTime ? 'Choose What You Want to Learn' : 'Manage Learning Subjects'}
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              Select the topics you are interested in. Decks and starter cards will be added to your Leitner library.
            </p>
          </div>
          {!isFirstTime && (
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Category Filter Pills & Selection Controls */}
        <div className="px-6 py-3 border-b border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-2 bg-zinc-50/50 dark:bg-zinc-900/50">
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilterCategory(cat.id)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  filterCategory === cat.id
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/60 dark:hover:bg-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs">
            <button
              onClick={handleSelectAll}
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline decoration-zinc-300"
            >
              Select All
            </button>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <button
              onClick={handleClearAll}
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline decoration-zinc-300"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Subject Grid */}
        <div className="p-6 overflow-y-auto flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filteredSubjects.map(subject => {
            const isSelected = selectedIds.includes(subject.id);
            const IconComponent = ICON_MAP[subject.icon] || Sparkles;

            return (
              <div
                key={subject.id}
                onClick={() => handleToggle(subject.id)}
                className={`group p-4 rounded-xl border text-left cursor-pointer transition-all duration-150 flex items-start gap-3.5 relative ${
                  isSelected
                    ? 'bg-zinc-900/5 dark:bg-zinc-100/10 border-zinc-900/30 dark:border-zinc-100/30 ring-1 ring-zinc-900/20 dark:ring-zinc-100/20'
                    : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>

                <div className="flex-1 min-w-0 pr-6">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 truncate">
                      {subject.name}
                    </span>
                    {subject.defaultLanguageCode && (
                      <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                        {subject.defaultLanguageCode.split('-')[0]}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                    {subject.description}
                  </p>
                </div>

                {/* Checkmark indicator */}
                <div
                  className={`absolute top-4 right-4 w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                      : 'border border-zinc-300 dark:border-zinc-700 group-hover:border-zinc-400'
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-900/50">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            <strong>{selectedIds.length}</strong> subject{selectedIds.length === 1 ? '' : 's'} selected
          </span>

          <div className="flex items-center gap-2.5">
            {!isFirstTime && (
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                Cancel
              </button>
            )}
            <button
              type="button"
              onClick={handleConfirm}
              disabled={isSaving}
              className="px-5 py-2 rounded-lg text-xs font-medium bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50 shadow-xs"
            >
              {isSaving ? 'Updating...' : isFirstTime ? 'Start Learning' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
