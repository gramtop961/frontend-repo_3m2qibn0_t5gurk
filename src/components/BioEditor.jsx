import { Plus, Trash2, Save, FileDown, RefreshCw, ArrowUp, ArrowDown } from "lucide-react";
import { useState } from "react";

export default function BioEditor({ profile, links, onChange, onAddLink, onUpdateLink, onRemoveLink, onMoveLink, onSave, onReset, onExport, savedBios, onSelectSaved, onDeleteSaved }) {
  const [localProfile, setLocalProfile] = useState(profile);

  // Keep local state in sync if outer profile changes
  if (localProfile !== profile) {
    setLocalProfile(profile);
  }

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-5">
        <h3 className="text-sm font-semibold mb-4">Profile</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-neutral-500 mb-1">Display Name</label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => onChange({ ...profile, name: e.target.value })}
              className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-950 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/20"
              placeholder="Your premium name"
            />
          </div>
          <div>
            <label className="block text-xs text-neutral-500 mb-1">Avatar URL</label>
            <input
              type="url"
              value={profile.avatar}
              onChange={(e) => onChange({ ...profile, avatar: e.target.value })}
              className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-950 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/20"
              placeholder="https://... (optional)"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-xs text-neutral-500 mb-1">Bio</label>
          <textarea
            rows={3}
            value={profile.bio}
            onChange={(e) => onChange({ ...profile, bio: e.target.value })}
            className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-950 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/20"
            placeholder="Short description about you"
          />
        </div>
      </section>

      <section className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold">Links</h3>
          <button
            onClick={onAddLink}
            className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-lg bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            <Plus className="h-4 w-4" /> Add link
          </button>
        </div>
        <div className="space-y-3">
          {links.length === 0 && (
            <p className="text-sm text-neutral-500">No links yet. Add your first link.</p>
          )}
          {links.map((link, idx) => (
            <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
              <input
                type="text"
                value={link.title}
                onChange={(e) => onUpdateLink(idx, "title", e.target.value)}
                placeholder="Title (e.g. Website, Instagram)"
                className="sm:col-span-4 rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-950 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/20"
              />
              <input
                type="url"
                value={link.url}
                onChange={(e) => onUpdateLink(idx, "url", e.target.value)}
                placeholder="https://"
                className="sm:col-span-6 rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-950 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/20"
              />
              <div className="sm:col-span-2 flex items-center gap-2">
                <button
                  onClick={() => onMoveLink(idx, -1)}
                  className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 px-2.5 py-2 hover:bg-black/5 dark:hover:bg-white/5"
                  aria-label="Move up"
                >
                  <ArrowUp className="h-4 w-4" />
                </button>
                <button
                  onClick={() => onMoveLink(idx, 1)}
                  className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 px-2.5 py-2 hover:bg-black/5 dark:hover:bg-white/5"
                  aria-label="Move down"
                >
                  <ArrowDown className="h-4 w-4" />
                </button>
                <button
                  onClick={() => onRemoveLink(idx)}
                  className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 px-2.5 py-2 hover:bg-black/5 dark:hover:bg-white/5"
                  aria-label="Remove link"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-5">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={onSave}
            className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            <Save className="h-4 w-4" /> Save Bio
          </button>
          <button
            onClick={onExport}
            className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5"
          >
            <FileDown className="h-4 w-4" /> Export JSON
          </button>
          <button
            onClick={onReset}
            className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5"
          >
            <RefreshCw className="h-4 w-4" /> New Bio
          </button>
        </div>
      </section>

      <section className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-5">
        <h3 className="text-sm font-semibold mb-3">Saved Bios</h3>
        {savedBios.length === 0 ? (
          <p className="text-sm text-neutral-500">No saved bios yet.</p>
        ) : (
          <ul className="space-y-2">
            {savedBios.map((b) => (
              <li key={b.id} className="flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectSaved(b.id)}
                  className="flex-1 text-left px-3 py-2 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-black/10 to-black/0 dark:from-white/10 dark:to-white/0" />
                    <div className="truncate">
                      <p className="text-sm font-medium truncate">{b.profile.name || "Untitled"}</p>
                      <p className="text-xs text-neutral-500 truncate">{b.links.length} links • {new Date(b.createdAt).toLocaleString()}</p>
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => onDeleteSaved(b.id)}
                  className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5"
                  aria-label="Delete saved bio"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
