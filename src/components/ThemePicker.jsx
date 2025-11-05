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

export default function ThemePicker({ selected, onSelect }) {
  return (
    <div className="w-full">
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
  );
}

export { themes };
