const themes = {
  Aurora: {
    name: "Aurora",
    gradient: "from-teal-400 via-cyan-500 to-blue-600",
    accent: "bg-cyan-600 hover:bg-cyan-700",
    ring: "ring-cyan-400/40",
    text: "text-cyan-600",
  },
  Royale: {
    name: "Royale",
    gradient: "from-fuchsia-500 via-purple-500 to-indigo-600",
    accent: "bg-fuchsia-600 hover:bg-fuchsia-700",
    ring: "ring-fuchsia-400/40",
    text: "text-fuchsia-600",
  },
  Sunset: {
    name: "Sunset",
    gradient: "from-amber-400 via-orange-500 to-rose-500",
    accent: "bg-orange-600 hover:bg-orange-700",
    ring: "ring-orange-400/40",
    text: "text-orange-600",
  },
  Emerald: {
    name: "Emerald",
    gradient: "from-emerald-400 via-green-500 to-teal-600",
    accent: "bg-emerald-600 hover:bg-emerald-700",
    ring: "ring-emerald-400/40",
    text: "text-emerald-600",
  },
};

const radiusOptions = [
  { key: "md", label: "Subtle", class: "rounded-md" },
  { key: "xl", label: "Modern", class: "rounded-xl" },
  { key: "full", label: "Pill", class: "rounded-full" },
];

export default function ThemePicker({ selected, onSelect, settings, onChangeSettings }) {
  return (
    <div className="w-full space-y-5">
      <div>
        <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-2">Theme</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {Object.entries(themes).map(([key, value]) => (
            <button
              key={key}
              onClick={() => onSelect({ key, ...value })}
              className={`group relative rounded-xl overflow-hidden border transition-all shadow-sm ${
                selected?.key === key
                  ? "border-black/10 dark:border-white/20 ring-2 " + value.ring
                  : "border-black/5 dark:border-white/10"
              }`}
            >
              <div className={`h-16 w-full bg-gradient-to-br ${value.gradient}`} />
              <div className="absolute inset-0" />
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[11px] font-medium bg-white/80 dark:bg-neutral-900/80 px-2 py-0.5 rounded-full backdrop-blur">
                {value.name}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-5">
        <h4 className="text-sm font-semibold mb-4">Advanced customization</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-neutral-500 mb-1">Button style</label>
            <select
              value={settings.buttonStyle}
              onChange={(e) => onChangeSettings({ ...settings, buttonStyle: e.target.value })}
              className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-950 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/20"
            >
              <option value="solid">Solid</option>
              <option value="outline">Outline</option>
              <option value="soft">Soft</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-neutral-500 mb-1">Corner radius</label>
            <select
              value={settings.radius}
              onChange={(e) => onChangeSettings({ ...settings, radius: e.target.value })}
              className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-950 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/20"
            >
              {radiusOptions.map((r) => (
                <option key={r.key} value={r.key}>{r.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs text-neutral-500 mb-1">Background</label>
            <div className="flex items-center gap-3">
              <select
                value={settings.bgType}
                onChange={(e) => onChangeSettings({ ...settings, bgType: e.target.value })}
                className="flex-1 rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-950 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/20"
              >
                <option value="gradient">Theme Gradient</option>
                <option value="solid">Solid</option>
              </select>
              <input
                type="color"
                value={settings.solidColor}
                onChange={(e) => onChangeSettings({ ...settings, solidColor: e.target.value })}
                className="h-10 w-12 rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-950"
                title="Pick solid color"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs text-neutral-500 mb-1">Font</label>
            <select
              value={settings.font}
              onChange={(e) => onChangeSettings({ ...settings, font: e.target.value })}
              className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-950 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/20"
            >
              <option value="Inter">Inter</option>
              <option value="Manrope">Manrope</option>
              <option value="IBM Plex Sans">IBM Plex Sans</option>
              <option value="Geist Sans">Geist Sans</option>
            </select>
          </div>
          <div className="sm:col-span-2 flex items-center gap-3">
            <input
              id="shadow"
              type="checkbox"
              checked={settings.shadow}
              onChange={(e) => onChangeSettings({ ...settings, shadow: e.target.checked })}
              className="h-4 w-4 rounded border-black/20 dark:border-white/20"
            />
            <label htmlFor="shadow" className="text-sm">Enable elevated shadows</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export { themes };
