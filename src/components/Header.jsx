import { Rocket, Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-fuchsia-500/30">
            <Rocket className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight">Premium Bio Maker</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 -mt-1">Create gorgeous link-in-bio pages</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
          <Sparkles className="h-4 w-4 text-yellow-500" />
          <span>Luxury design • Zero code</span>
        </div>
      </div>
    </header>
  );
}
