import { useMemo, useState } from "react";
import Header from "./components/Header";
import ThemePicker, { themes } from "./components/ThemePicker";
import BioEditor from "./components/BioEditor";
import BioPreview from "./components/BioPreview";

export default function App() {
  const [theme, setTheme] = useState({ key: "Royale", ...themes.Royale });
  const [profile, setProfile] = useState({ name: "", bio: "", avatar: "" });
  const [links, setLinks] = useState([]);
  const [savedBios, setSavedBios] = useState([]);
  const [settings, setSettings] = useState({
    buttonStyle: "solid",
    radius: "xl",
    shadow: true,
    bgType: "gradient",
    solidColor: "#ffffff",
    font: "Inter",
  });

  const addLink = () => setLinks((prev) => [...prev, { title: "", url: "" }]);
  const updateLink = (idx, field, value) =>
    setLinks((prev) => prev.map((l, i) => (i === idx ? { ...l, [field]: value } : l)));
  const removeLink = (idx) => setLinks((prev) => prev.filter((_, i) => i !== idx));
  const moveLink = (idx, dir) =>
    setLinks((prev) => {
      const next = [...prev];
      const to = idx + dir;
      if (to < 0 || to >= next.length) return next;
      const temp = next[idx];
      next[idx] = next[to];
      next[to] = temp;
      return next;
    });

  const reset = () => {
    setProfile({ name: "", bio: "", avatar: "" });
    setLinks([]);
  };

  const saveBio = () => {
    const id = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
    const payload = {
      id,
      profile: { ...profile },
      links: [...links],
      theme,
      settings,
      createdAt: Date.now(),
    };
    setSavedBios((prev) => [payload, ...prev]);
  };

  const selectSaved = (id) => {
    const found = savedBios.find((b) => b.id === id);
    if (!found) return;
    setProfile(found.profile);
    setLinks(found.links);
    setTheme(found.theme);
    if (found.settings) setSettings(found.settings);
  };

  const deleteSaved = (id) => setSavedBios((prev) => prev.filter((b) => b.id !== id));

  const exportJSON = () => {
    const data = { profile, links, theme, settings };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${profile.name || "bio"}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const pageBg = useMemo(() => {
    if (settings.bgType === "solid") return ""; // solid controlled inline
    const g = theme?.gradient || "from-neutral-100 via-neutral-50 to-white";
    return `bg-gradient-to-br ${g}`;
  }, [theme, settings.bgType]);

  const fontStyle = useMemo(() => ({ fontFamily: settings.font }), [settings.font]);

  return (
    <div className={`min-h-screen ${pageBg}`} style={settings.bgType === "solid" ? { background: settings.solidColor } : undefined}>
      <div style={fontStyle}>
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <ThemePicker selected={theme} onSelect={setTheme} settings={settings} onChangeSettings={setSettings} />
              <BioEditor
                profile={profile}
                links={links}
                onChange={setProfile}
                onAddLink={addLink}
                onUpdateLink={updateLink}
                onRemoveLink={removeLink}
                onMoveLink={moveLink}
                onSave={saveBio}
                onReset={reset}
                onExport={exportJSON}
                savedBios={savedBios}
                onSelectSaved={selectSaved}
                onDeleteSaved={deleteSaved}
              />
            </div>
            <div className="lg:sticky lg:top-20 h-fit">
              <BioPreview theme={theme} profile={profile} links={links} settings={settings} />
            </div>
          </div>
        </main>
        <footer className="px-4 py-8 text-center text-sm text-neutral-600 dark:text-neutral-400">
          Crafted with love • Make unlimited bios and share them anywhere
        </footer>
      </div>
    </div>
  );
}
