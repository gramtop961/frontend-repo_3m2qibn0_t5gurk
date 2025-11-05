import { ExternalLink } from "lucide-react";

export default function BioPreview({ theme, profile, links }) {
  const accent = theme?.accent || "bg-black hover:bg-black/90";
  const gradient = theme?.gradient || "from-neutral-200 via-neutral-300 to-white";

  return (
    <div className="relative overflow-hidden rounded-3xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-60`} />
      <div className="relative p-8 flex flex-col items-center text-center">
        <div className="h-28 w-28 rounded-2xl bg-white/70 dark:bg-neutral-950/70 ring-1 ring-black/5 dark:ring-white/10 overflow-hidden flex items-center justify-center shadow-lg">
          {profile.avatar ? (
            <img src={profile.avatar} alt="avatar" className="h-full w-full object-cover" />
          ) : (
            <span className="text-3xl font-bold">{profile.name ? profile.name.charAt(0).toUpperCase() : "★"}</span>
          )}
        </div>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight">{profile.name || "Your Name"}</h2>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300 max-w-md">{profile.bio || "Introduce yourself in a premium way."}</p>

        <div className="mt-6 w-full max-w-sm space-y-3">
          {links.length === 0 ? (
            <button className={`w-full ${accent} text-white rounded-xl px-4 py-3 font-medium shadow-lg shadow-black/10 dark:shadow-white/5`}>Add your first link</button>
          ) : (
            links.map((l, idx) => (
              <a
                key={idx}
                href={l.url || "#"}
                target="_blank"
                rel="noreferrer"
                className={`group w-full ${accent} text-white rounded-xl px-4 py-3 font-medium flex items-center justify-between shadow-lg shadow-black/10 dark:shadow-white/5`}
              >
                <span>{l.title || "Link"}</span>
                <ExternalLink className="h-4 w-4 opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
