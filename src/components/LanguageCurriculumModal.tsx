import React, { useState } from 'react';
import type { LanguageId, DifficultyLevel } from '../types';
import {
  SUPPORTED_LANGUAGES,
  LANGUAGE_TOPICS,
  DIFFICULTY_LEVELS,
} from '../data/languages';
import {
  Globe2,
  Check,
  X,
  Plane,
  HeartHandshake,
  Landmark,
  Atom,
  Briefcase,
  Sparkles,
  ArrowRight,
  SlidersHorizontal,
} from 'lucide-react';

interface LanguageCurriculumModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialLanguages: LanguageId[];
  initialTopics: string[];
  initialDifficulty: DifficultyLevel;
  onSaveCurriculum: (
    languages: LanguageId[],
    topics: string[],
    difficulty: DifficultyLevel
  ) => Promise<void>;
  isFirstTime?: boolean;
}

const TOPIC_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Plane,
  HeartHandshake,
  Landmark,
  Atom,
  Briefcase,
  Sparkles,
};

export const LanguageCurriculumModal: React.FC<LanguageCurriculumModalProps> = ({
  isOpen,
  onClose,
  initialLanguages,
  initialTopics,
  initialDifficulty,
  onSaveCurriculum,
  isFirstTime = false,
}) => {
  const [selectedLangs, setSelectedLangs] = useState<LanguageId[]>(
    initialLanguages.length > 0 ? initialLanguages : ['spanish']
  );
  const [selectedTopics, setSelectedTopics] = useState<string[]>(
    initialTopics.length > 0 ? initialTopics : ['daily-travel', 'manners-etiquette', 'idioms-expressions']
  );
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel>(
    initialDifficulty || 'beginner'
  );
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSaving, setIsSaving] = useState(false);

  if (!isOpen) return null;

  const toggleLanguage = (id: LanguageId) => {
    if (selectedLangs.includes(id)) {
      if (selectedLangs.length > 1) {
        setSelectedLangs(selectedLangs.filter(l => l !== id));
      } else {
        alert('Please choose at least one language.');
      }
    } else {
      setSelectedLangs([...selectedLangs, id]);
    }
  };

  const toggleTopic = (id: string) => {
    if (selectedTopics.includes(id)) {
      if (selectedTopics.length > 1) {
        setSelectedTopics(selectedTopics.filter(t => t !== id));
      } else {
        alert('Please choose at least one subject topic.');
      }
    } else {
      setSelectedTopics([...selectedTopics, id]);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await onSaveCurriculum(selectedLangs, selectedTopics, selectedDifficulty);
      onClose();
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-zinc-100 dark:border-zinc-800 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 mb-2">
              <Globe2 className="w-3.5 h-3.5" />
              <span>Language Curriculum Builder</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Customize Your Learning Journey
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              Choose target languages, subjects of interest, and your target difficulty level.
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

        {/* Steps Navigation */}
        <div className="px-6 py-3 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-900/50 text-xs">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className={`flex items-center gap-1.5 font-medium transition-colors ${
                step === 1 ? 'text-zinc-900 dark:text-zinc-100 font-bold' : 'text-zinc-400 hover:text-zinc-600'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                step === 1 ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600'
              }`}>1</span>
              <span>Languages ({selectedLangs.length})</span>
            </button>

            <span className="text-zinc-300 dark:text-zinc-700">&rarr;</span>

            <button
              type="button"
              onClick={() => setStep(2)}
              className={`flex items-center gap-1.5 font-medium transition-colors ${
                step === 2 ? 'text-zinc-900 dark:text-zinc-100 font-bold' : 'text-zinc-400 hover:text-zinc-600'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                step === 2 ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600'
              }`}>2</span>
              <span>Subjects ({selectedTopics.length})</span>
            </button>

            <span className="text-zinc-300 dark:text-zinc-700">&rarr;</span>

            <button
              type="button"
              onClick={() => setStep(3)}
              className={`flex items-center gap-1.5 font-medium transition-colors ${
                step === 3 ? 'text-zinc-900 dark:text-zinc-100 font-bold' : 'text-zinc-400 hover:text-zinc-600'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                step === 3 ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600'
              }`}>3</span>
              <span className="capitalize">Difficulty ({selectedDifficulty})</span>
            </button>
          </div>
        </div>

        {/* Step Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {/* STEP 1: LANGUAGES */}
          {step === 1 && (
            <div>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Step 1: Select Your Target Languages
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Pick one or more languages you want to master using spaced repetition.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SUPPORTED_LANGUAGES.map(lang => {
                  const isSelected = selectedLangs.includes(lang.id);

                  return (
                    <div
                      key={lang.id}
                      onClick={() => toggleLanguage(lang.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3.5 relative ${
                        isSelected
                          ? 'bg-zinc-900/5 dark:bg-zinc-100/10 border-zinc-900/40 dark:border-zinc-100/40 ring-1 ring-zinc-900/20 dark:ring-zinc-100/20'
                          : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                      }`}
                    >
                      <span className="text-3xl select-none shrink-0">{lang.flag}</span>
                      <div className="flex-1 min-w-0 pr-6">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                            {lang.name}
                          </span>
                          <span className="text-xs text-zinc-400 font-medium">
                            {lang.nativeName}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">
                          {lang.description}
                        </p>
                      </div>

                      <div
                        className={`absolute top-4 right-4 w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                            : 'border border-zinc-300 dark:border-zinc-700'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: TOPICS / SUBJECTS */}
          {step === 2 && (
            <div>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Step 2: Choose Learning Subjects & Topics
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Learn your chosen languages through themes that genuinely interest you.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {LANGUAGE_TOPICS.map(topic => {
                  const isSelected = selectedTopics.includes(topic.id);
                  const IconComp = TOPIC_ICONS[topic.icon] || Sparkles;

                  return (
                    <div
                      key={topic.id}
                      onClick={() => toggleTopic(topic.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3.5 relative ${
                        isSelected
                          ? 'bg-zinc-900/5 dark:bg-zinc-100/10 border-zinc-900/40 dark:border-zinc-100/40 ring-1 ring-zinc-900/20 dark:ring-zinc-100/20'
                          : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                          : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                      }`}>
                        <IconComp className="w-4 h-4" />
                      </div>

                      <div className="flex-1 min-w-0 pr-6">
                        <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 block">
                          {topic.name}
                        </span>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">
                          {topic.description}
                        </p>
                      </div>

                      <div
                        className={`absolute top-4 right-4 w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                            : 'border border-zinc-300 dark:border-zinc-700'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: DIFFICULTY */}
          {step === 3 && (
            <div>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Step 3: Select Your Difficulty Level
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Pick the proficiency tier that matches your current learning goals.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DIFFICULTY_LEVELS.map(diff => {
                  const isSelected = selectedDifficulty === diff.id;

                  return (
                    <div
                      key={diff.id}
                      onClick={() => setSelectedDifficulty(diff.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between relative ${
                        isSelected
                          ? 'bg-zinc-900/5 dark:bg-zinc-100/10 border-zinc-900/40 dark:border-zinc-100/40 ring-1 ring-zinc-900/20 dark:ring-zinc-100/20'
                          : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                              {diff.name}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-semibold">
                              {diff.cefr}
                            </span>
                          </div>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                            {diff.description}
                          </p>
                        </div>

                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                            isSelected
                              ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                              : 'border border-zinc-300 dark:border-zinc-700'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="p-4 px-6 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>
              {selectedLangs.length} Language{selectedLangs.length > 1 ? 's' : ''} &bull;{' '}
              {selectedTopics.length} Subject{selectedTopics.length > 1 ? 's' : ''} &bull;{' '}
              <strong className="capitalize">{selectedDifficulty}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(prev => (prev - 1) as 1 | 2 | 3)}
                className="px-3.5 py-2 rounded-lg text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors"
              >
                Back
              </button>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep(prev => (prev + 1) as 1 | 2 | 3)}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSave}
                disabled={isSaving}
                className="px-5 py-2 rounded-lg text-xs font-semibold bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 cursor-pointer disabled:opacity-50 shadow-xs"
              >
                {isSaving ? 'Configuring Decks...' : 'Apply & Build Decks'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
