import React, { useState } from 'react';
import type { Profile } from '../types';
import {
  createProfile,
  deleteProfile,
  exportProfileBackup,
  importProfileBackup,
  type BackupData,
} from '../db/database';
import {
  Users,
  Plus,
  Trash2,
  Download,
  Upload,
  X,
  ShieldCheck,
} from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profiles: Profile[];
  activeProfile: Profile;
  onSelectProfile: (profile: Profile) => void;
  onRefreshProfiles: () => Promise<void>;
  onOpenSubjectCatalog: () => void;
}

const AVATAR_OPTIONS = ['🌱', '🦉', '🚀', '🧠', '⚡', '☕', '📚', '🎯', '✨', '🌊'];

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  profiles,
  activeProfile,
  onSelectProfile,
  onRefreshProfiles,
  onOpenSubjectCatalog,
}) => {
  const [isCreating, setIsCreating] = useState(false);
  const [newProfileName, setNewProfileName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('🌱');
  const [isExporting, setIsExporting] = useState(false);

  if (!isOpen) return null;

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProfileName.trim()) return;

    // By default, seed with Fun Facts and Science
    const created = await createProfile(newProfileName.trim(), selectedAvatar, ['fun-facts', 'science']);
    await onRefreshProfiles();
    onSelectProfile(created);
    setIsCreating(false);
    setNewProfileName('');
    onClose();
    // Offer them to configure subjects for their new profile
    onOpenSubjectCatalog();
  };

  const handleDelete = async (profileId: string) => {
    if (profiles.length <= 1) {
      alert('Cannot delete the last remaining profile.');
      return;
    }
    if (confirm('Delete this local profile and all its flashcards? This cannot be undone.')) {
      await deleteProfile(profileId);
      await onRefreshProfiles();
      const remaining = profiles.filter(p => p.id !== profileId);
      if (remaining.length > 0) {
        onSelectProfile(remaining[0]);
      }
    }
  };

  const handleExport = async () => {
    setIsExporting(true);
    try {
      const backup = await exportProfileBackup(activeProfile.id);
      if (!backup) return;

      const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `leitner_backup_${activeProfile.name.toLowerCase().replace(/\s+/g, '_')}_${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setIsExporting(false);
    }
  };

  const handleImportFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const parsed: BackupData = JSON.parse(text);

      if (!parsed.profile || !parsed.decks || !parsed.cards) {
        throw new Error('Invalid Leitner backup format');
      }

      const imported = await importProfileBackup(parsed);
      await onRefreshProfiles();
      onSelectProfile(imported);
      alert(`Imported "${imported.name}" with ${parsed.decks.length} decks and ${parsed.cards.length} cards.`);
      onClose();
    } catch (err) {
      alert('Failed to import backup: ' + (err instanceof Error ? err.message : String(err)));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                Local Device Profiles
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Private, in-browser data isolated per user profile.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Profiles List */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Saved Profiles
              </span>
              <button
                type="button"
                onClick={() => setIsCreating(true)}
                className="text-xs font-medium text-zinc-900 dark:text-zinc-100 flex items-center gap-1 hover:underline"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>New Profile</span>
              </button>
            </div>

            <div className="space-y-2">
              {profiles.map(p => {
                const isActive = p.id === activeProfile.id;
                return (
                  <div
                    key={p.id}
                    onClick={() => {
                      onSelectProfile(p);
                      onClose();
                    }}
                    className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      isActive
                        ? 'border-zinc-900 dark:border-zinc-100 bg-zinc-50 dark:bg-zinc-800/80 shadow-2xs'
                        : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl select-none">{p.avatar}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                            {p.name}
                          </span>
                          {isActive && (
                            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900">
                              Active
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-zinc-400">
                          {p.selectedSubjects?.length || 0} subjects chosen
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      {profiles.length > 1 && (
                        <button
                          type="button"
                          onClick={e => {
                            e.stopPropagation();
                            handleDelete(p.id);
                          }}
                          className="p-1.5 rounded-lg text-zinc-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Create Profile Sub-form */}
          {isCreating && (
            <form onSubmit={handleCreate} className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 space-y-3">
              <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 block">
                Create New Profile
              </span>

              <div className="flex gap-1.5 flex-wrap">
                {AVATAR_OPTIONS.map(emoji => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => setSelectedAvatar(emoji)}
                    className={`w-8 h-8 rounded-lg text-sm flex items-center justify-center transition-all ${
                      selectedAvatar === emoji
                        ? 'bg-zinc-900 text-white dark:bg-zinc-100 ring-2 ring-zinc-400'
                        : 'bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800'
                    }`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>

              <input
                type="text"
                placeholder="Profile Name (e.g. Alex, Math Focus)"
                value={newProfileName}
                onChange={e => setNewProfileName(e.target.value)}
                required
                className="w-full text-xs p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-900"
              />

              <div className="flex items-center justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setIsCreating(false)}
                  className="px-3 py-1.5 rounded-lg text-xs text-zinc-500 hover:text-zinc-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                >
                  Create
                </button>
              </div>
            </form>
          )}

          {/* Backup / Export / Import Section */}
          <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block">
              Data Sovereignty & Backups
            </span>

            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={handleExport}
                disabled={isExporting}
                className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 text-left transition-colors flex items-center gap-2.5 cursor-pointer"
              >
                <Download className="w-4 h-4 text-zinc-500 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                    Export JSON
                  </div>
                  <div className="text-[10px] text-zinc-400">
                    Download complete cards backup
                  </div>
                </div>
              </button>

              <label className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 text-left transition-colors flex items-center gap-2.5 cursor-pointer">
                <Upload className="w-4 h-4 text-zinc-500 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                    Import JSON
                  </div>
                  <div className="text-[10px] text-zinc-400">
                    Restore from backup file
                  </div>
                </div>
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImportFile}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 flex items-center justify-between text-[11px] text-zinc-400">
          <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>100% In-Browser &bull; Zero Server Tracking</span>
          </div>
          <button
            onClick={onClose}
            className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
