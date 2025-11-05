import { Rocket, Sparkles } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Header() {
  return (
    <header className="w-full z-20">
      {/* Top bar */}
      <div className="sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
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
      </div>

      {/* Hero with Spline */}
      <div className="relative h-[420px] sm:h-[520px]">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: "100%", height: "100%" }} />
        </div>
        {/* Soft gradient overlays for readability - never block Spline interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80 dark:from-neutral-950/60 dark:via-neutral-950/20 dark:to-neutral-950/80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white dark:from-neutral-950" />

        <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
              A holographic way to showcase your digital identity
            </h1>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300 text-sm sm:text-base">
              Build a beautiful link-in-bio page with themes, custom buttons, and a live preview. Save, export, and share instantly.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
