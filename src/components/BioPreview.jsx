import { ExternalLink } from "lucide-react";

function classForRadius(radiusKey) {
  if (radiusKey === "md") return "rounded-md";
  if (radiusKey === "full") return "rounded-full";
  return "rounded-xl"; // xl default
}

function borderFromText(textClass) {
  // Converts text-cyan-600 -> border-cyan-600
  return textClass?.replace("text-", "border-") || "border-black";
}

export default function BioPreview({ theme, profile, links, settings }) {
  const gradient = theme?.gradient || "from-neutral-200 via-neutral-300 to-white";
  const textColor = theme?.text || "text-black";
  const radiusClass = classForRadius(settings?.radius);
  const shadowBase = settings?.shadow ? "shadow-lg shadow-black/10 dark:shadow-white/5" : "shadow-none";

  const buttonClass = (() => {
    if (settings?.buttonStyle === "outline") {
      return `${textColor} bg-transparent border ${borderFromText(textColor)} hover:bg-black/5 dark:hover:bg-white/5`;
    }
    if (settings?.buttonStyle === "soft") {
      return `${textColor} bg-white/70 dark:bg-neutral-800/60 hover:bg-white/80 dark:hover:bg-neutral-800/70 border border-black/10 dark:border-white/10`;
    }
    // solid
    return `${theme?.accent || "bg-black hover:bg-black/90"} text-white`;
  })();

  const bgStyle = settings?.bgType === "solid" ? { background: settings?.solidColor || "#ffffff" } : undefined;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
      {settings?.bgType !== "solid" && (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-60`} />
      )}
      <div className="relative p-8 flex flex-col items-center text-center" style={bgStyle}>
        <div className={`h-28 w-28 ${classForRadius("xl")} bg-white/70 dark:bg-neutral-950/70 ring-1 ring-black/5 dark:ring-white/10 overflow-hidden flex items-center justify-center ${shadowBase}`}>
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
            <button className={`w-full ${buttonClass} ${radiusClass} px-4 py-3 font-medium flex items-center justify-center ${shadowBase}`}>Add your first link</button>
          ) : (
            links.map((l, idx) => (
              <a
                key={idx}
                href={l.url || "#"}
                target="_blank"
                rel="noreferrer"
                className={`group w-full ${buttonClass} ${radiusClass} px-4 py-3 font-medium flex items-center justify-between ${shadowBase}`}
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
