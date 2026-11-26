import { memo, useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { Search, Volume2, VolumeX, Check } from "lucide-react";
import {
  ICONS,
  ICON_CATEGORIES,
  STYLES,
  IconDef,
  StyleDef,
  StyleId,
} from "./data/icons";
import { SvgDefs, getMasterDefsInner } from "./components/SvgDefs";
import { SpotlightStage } from "./components/SpotlightStage";
import LandingPage from "./components/LandingPage";
import {
  AudioStatus,
  getAudioStatus,
  initAudio,
  subscribeAudioStatus,
  toggleSound,
  triggerSound,
} from "./audio/foley";
import {
  getSoundMode,
  setSoundMode,
  subscribeSoundMode,
  SoundMode,
} from "./audio/samples";
import { triggerChoreography } from "./physics/spring";

type ViewMode = "style" | "icon";
type ClickMode = "play" | "copy";
type ThemeMode = "light" | "gray" | "dark";
type CategoryFilter = (typeof ICON_CATEGORIES)[number];

interface IconTileProps {
  icon: IconDef;
  styleDef: StyleDef;
  clickMode: ClickMode;
  isSelected: boolean;
  showLabel?: string;
  onSelect: (icon: IconDef, styleDef: StyleDef) => void;
  onCopySvg: (svgEl: SVGSVGElement | null, styleId: StyleId, label: string) => void;
}

const IconTile = memo(function IconTile({
  icon,
  styleDef,
  clickMode,
  isSelected,
  showLabel,
  onSelect,
  onCopySvg,
}: IconTileProps) {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const gid = useId().replace(/:/g, "");
  const svgMarkup = useMemo(
    () => icon.svgs[styleDef.id].replace(/__GID__/g, gid),
    [icon.svgs, styleDef.id, gid]
  );

  const playAction = () => {
    triggerChoreography(icon.name, svgRef.current);
    triggerSound(icon.name, btnRef.current);
  };

  const handlePointerEnter = () => {
    if (clickMode === "play") {
      playAction();
    }
  };

  const handleClick = () => {
    initAudio();
    onSelect(icon, styleDef);
    if (clickMode === "copy") {
      onCopySvg(svgRef.current, styleDef.id, `${icon.label} (${styleDef.label})`);
    } else {
      playAction();
    }
  };

  return (
    <button
      ref={btnRef}
      type="button"
      onPointerEnter={handlePointerEnter}
      onClick={handleClick}
      title={`${icon.label} — ${styleDef.label}`}
      aria-label={`${icon.label} in ${styleDef.label} style`}
      aria-pressed={isSelected}
      className={`group flex flex-col items-center justify-center gap-1.5 rounded-xl border p-2 text-[var(--icon-color)] cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] ${
        showLabel ? "min-h-[64px]" : "aspect-square min-h-[48px]"
      } ${
        isSelected
          ? "border-[var(--text)] bg-[var(--surface-elevated)]"
          : "border-transparent bg-transparent hover:border-[var(--border)] hover:bg-[var(--surface-elevated)]"
      }`}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="icon-svg h-7 w-7 overflow-visible pointer-events-none"
        dangerouslySetInnerHTML={{ __html: svgMarkup }}
      />
      {showLabel && (
        <span className="text-[11px] font-medium text-[var(--muted)] group-hover:text-[var(--text)] truncate max-w-full">
          {showLabel}
        </span>
      )}
    </button>
  );
});

const SHORT_STYLE_LABELS: Record<StyleId, string> = {
  outline: "Outline",
  solid: "Solid",
  duotone: "Duotone",
  glass: "Glass",
  stencil: "Stencil",
  hardware: "Hardware",
  relief: "3D Relief",
};

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>("style");
  const [clickMode, setClickMode] = useState<ClickMode>("play");
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [query, setQuery] = useState("");
  const [audioStatus, setAudioStatus] = useState<AudioStatus>(() => getAudioStatus());
  const [soundMode, setSoundModeState] = useState<SoundMode>(() => getSoundMode());
  const [selected, setSelected] = useState<{ iconName: string; styleId: StyleId }>({
    iconName: "bicycle",
    styleId: "glass",
  });
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const toastTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const unsub = subscribeAudioStatus(() => {
      setAudioStatus(getAudioStatus());
    });
    const unsubMode = subscribeSoundMode(() => setSoundModeState(getSoundMode()));
    const unlockOnPointer = () => {
      if (getAudioStatus() === "idle") {
        initAudio();
      }
    };
    window.addEventListener("pointerdown", unlockOnPointer, { passive: true });
    return () => {
      unsub();
      unsubMode();
      window.removeEventListener("pointerdown", unlockOnPointer);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const filteredIcons = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ICONS.filter((ic) => {
      if (category !== "All" && ic.category !== category) return false;
      if (!q) return true;
      return (
        ic.name.includes(q) ||
        ic.label.toLowerCase().includes(q) ||
        ic.category.toLowerCase().includes(q) ||
        ic.motionSummary.toLowerCase().includes(q) ||
        ic.soundSummary.toLowerCase().includes(q)
      );
    });
  }, [category, query]);

  const activeIcon = useMemo(
    () => ICONS.find((ic) => ic.name === selected.iconName) ?? ICONS[0],
    [selected.iconName]
  );

  const activeStyle = useMemo(
    () => STYLES.find((st) => st.id === selected.styleId) ?? STYLES[0],
    [selected.styleId]
  );

  const showToast = useCallback((msg: string) => {
    setToastMsg(msg);
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(() => setToastMsg(null), 1800);
  }, []);

  const handleSelect = useCallback((ic: IconDef, st: StyleDef) => {
    setSelected({ iconName: ic.name, styleId: st.id });
  }, []);

  const handleCopySvg = useCallback((svgEl: SVGSVGElement | null, styleId: StyleId, label: string) => {
    if (!svgEl) return;
    const clone = svgEl.cloneNode(true) as SVGSVGElement;
    clone.querySelectorAll("[data-part]").forEach((el) => {
      el.removeAttribute("style");
    });
    let inner = clone.innerHTML.trim();
    const isDark = theme === "dark";
    inner = inner
      .replace(/(id="|url\(#)([^"-]+)-(out|in|m[0-9]+)/g, "$1glyph-$3")
      .replace(/var\(--rel-shadow\)/g, isDark ? "#52525b" : "#1e293b")
      .replace(/var\(--rel-face\)/g, isDark ? "#18181b" : "#ffffff")
      .replace(/var\(--rel-stroke\)/g, isDark ? "#f4f4f5" : "#0f172a")
      .replace(/var\(--surface-elevated\)/g, isDark ? "#18181b" : "#ffffff")
      .replace(
        /var\(--g-back-stroke\)/g,
        isDark ? "rgba(255, 255, 255, 0.14)" : "rgba(15, 23, 42, 0.15)"
      );
    if (styleId === "glass" || styleId === "hardware") {
      inner = `<defs>\n${getMasterDefsInner(isDark).trim()}\n</defs>\n${inner}`;
    }
    const standalone = `<svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">\n${inner}\n</svg>`;
    void navigator.clipboard.writeText(standalone).then(() => {
      showToast(`Copied ${label} SVG`);
    });
  }, [theme, showToast]);

  const soundButtonLabel =
    audioStatus === "muted"
      ? "Sound Muted"
      : audioStatus === "ready"
        ? "Sound Active"
        : "Enable Sound";

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors">
      <SvgDefs />

      {/* Top Bar Contract: 3 zones (wordmark — clean nav links — 1 primary action) */}
      <header className="border-b border-[var(--border)] bg-[var(--bg)]">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6 py-4">
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight text-[var(--text)] whitespace-nowrap shrink-0"
          >
            wiggle icons
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--muted)]"
          >
            <a
              href="#sampler"
              className="transition-colors hover:text-[var(--text)] hover:underline underline-offset-4 whitespace-nowrap shrink-0"
            >
              Sampler
            </a>
            <a
              href="#library"
              className="transition-colors hover:text-[var(--text)] hover:underline underline-offset-4 whitespace-nowrap shrink-0"
            >
              Library
            </a>
            <a
              href="#sponsors"
              className="transition-colors hover:text-[var(--text)] hover:underline underline-offset-4 whitespace-nowrap shrink-0"
            >
              Sponsors
            </a>
            <button
              type="button"
              onClick={() => setViewMode("style")}
              className={`cursor-pointer transition-colors hover:text-[var(--text)] hover:underline underline-offset-4 whitespace-nowrap shrink-0 ${
                viewMode === "style" ? "text-[var(--text)] underline" : ""
              }`}
            >
              By Style
            </button>
            <button
              type="button"
              onClick={() => setViewMode("icon")}
              className={`cursor-pointer transition-colors hover:text-[var(--text)] hover:underline underline-offset-4 whitespace-nowrap shrink-0 ${
                viewMode === "icon" ? "text-[var(--text)] underline" : ""
              }`}
            >
              Compare Icons
            </button>
            <a
              href="#stage"
              className="transition-colors hover:text-[var(--text)] hover:underline underline-offset-4 whitespace-nowrap shrink-0"
            >
              Stage Inspector
            </a>
            <a
              href="#matrix"
              className="transition-colors hover:text-[var(--text)] hover:underline underline-offset-4 whitespace-nowrap shrink-0"
            >
              Glyph Matrix
            </a>
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <div
              role="group"
              aria-label="Sound engine"
              className="inline-flex rounded-lg border border-[var(--border)] bg-[var(--surface)] p-0.5 gap-0.5"
            >
              {(["synth", "real"] as SoundMode[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setSoundMode(m)}
                  aria-pressed={soundMode === m}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium cursor-pointer transition-colors whitespace-nowrap shrink-0 ${
                    soundMode === m
                      ? "bg-[var(--accent)] text-[var(--accent-text)]"
                      : "text-[var(--muted)] hover:text-[var(--text)]"
                  }`}
                >
                  {m === "synth" ? "Synth" : "Real"}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={toggleSound}
              aria-pressed={audioStatus === "ready"}
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-4 py-2 text-xs font-medium text-[var(--accent-text)] cursor-pointer transition-opacity hover:opacity-90 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)]"
            >
              {audioStatus === "muted" ? (
                <VolumeX className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <Volume2 className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              <span>{soundButtonLabel}</span>
            </button>
          </div>
        </div>
      </header>

      <LandingPage />

      <main id="library" className="mx-auto max-w-[1200px] px-6 py-8 space-y-6">
        {/* Editorial Intro + Workspace Controls */}
        <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text)] text-balance">
              {ICONS.length} Kinetic Icons Across {STYLES.length} Craft Styles
            </h1>
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[var(--muted)] tabular-nums">
              <span>{ICONS.length * STYLES.length} articulated SVGs</span>
              <span aria-hidden="true">·</span>
              <span>{ICONS.length} semantic spring animations</span>
              <span aria-hidden="true">·</span>
              <span>{ICONS.length} procedural Web Audio foley engines</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <label className="relative flex items-center">
              <Search
                className="pointer-events-none absolute left-3 h-3.5 w-3.5 text-[var(--muted)]"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search ${ICONS.length} icons...`}
                aria-label="Search icons"
                className="w-44 rounded-lg border border-[var(--border)] bg-[var(--surface)] py-1.5 pl-8 pr-3 text-xs text-[var(--text)] placeholder:text-[var(--muted)] focus:border-[var(--text)] focus:outline-none"
              />
            </label>

            <div
              role="group"
              aria-label="Layout view"
              className="inline-flex rounded-lg border border-[var(--border)] bg-[var(--surface)] p-0.5 gap-0.5"
            >
              <button
                type="button"
                onClick={() => setViewMode("style")}
                className={`rounded-md px-3 py-1.5 text-xs font-medium cursor-pointer transition-colors whitespace-nowrap shrink-0 ${
                  viewMode === "style"
                    ? "bg-[var(--accent)] text-[var(--accent-text)]"
                    : "text-[var(--muted)] hover:text-[var(--text)]"
                }`}
              >
                By Style
              </button>
              <button
                type="button"
                onClick={() => setViewMode("icon")}
                className={`rounded-md px-3 py-1.5 text-xs font-medium cursor-pointer transition-colors whitespace-nowrap shrink-0 ${
                  viewMode === "icon"
                    ? "bg-[var(--accent)] text-[var(--accent-text)]"
                    : "text-[var(--muted)] hover:text-[var(--text)]"
                }`}
              >
                Compare Icon
              </button>
            </div>

            <div
              role="group"
              aria-label="Click behavior"
              className="inline-flex rounded-lg border border-[var(--border)] bg-[var(--surface)] p-0.5 gap-0.5"
            >
              <button
                type="button"
                onClick={() => setClickMode("play")}
                className={`rounded-md px-3 py-1.5 text-xs font-medium cursor-pointer transition-colors whitespace-nowrap shrink-0 ${
                  clickMode === "play"
                    ? "bg-[var(--accent)] text-[var(--accent-text)]"
                    : "text-[var(--muted)] hover:text-[var(--text)]"
                }`}
              >
                Play
              </button>
              <button
                type="button"
                onClick={() => setClickMode("copy")}
                className={`rounded-md px-3 py-1.5 text-xs font-medium cursor-pointer transition-colors whitespace-nowrap shrink-0 ${
                  clickMode === "copy"
                    ? "bg-[var(--accent)] text-[var(--accent-text)]"
                    : "text-[var(--muted)] hover:text-[var(--text)]"
                }`}
              >
                Copy SVG
              </button>
            </div>

            <div
              role="group"
              aria-label="Canvas surface theme"
              className="inline-flex rounded-lg border border-[var(--border)] bg-[var(--surface)] p-0.5 gap-0.5"
            >
              {(["light", "gray", "dark"] as ThemeMode[]).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTheme(t)}
                  className={`rounded-md px-2.5 py-1.5 text-xs font-medium capitalize cursor-pointer transition-colors whitespace-nowrap shrink-0 ${
                    theme === t
                      ? "bg-[var(--accent)] text-[var(--accent-text)]"
                      : "text-[var(--muted)] hover:text-[var(--text)]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Icon categories"
          className="flex flex-wrap items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-1 w-fit"
        >
          {ICON_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={category === cat}
              onClick={() => setCategory(cat)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium cursor-pointer transition-colors whitespace-nowrap shrink-0 ${
                category === cat
                  ? "bg-[var(--accent)] text-[var(--accent-text)]"
                  : "text-[var(--muted)] hover:text-[var(--text)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Active Icon Spotlight Inspector */}
        <SpotlightStage
          icon={activeIcon}
          styleDef={activeStyle}
          onCopySvg={handleCopySvg}
        />

        {/* 7 Styles × 100 Icons Showcase Grid */}
        <section id="matrix" aria-label="Icon matrix">
          {filteredIcons.length === 0 ? (
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-12 text-center">
              <p className="text-sm font-medium text-[var(--text)]">
                No icons matched “{query}”
              </p>
              <p className="mt-1 text-xs text-[var(--muted)]">
                Try another search term or switch back to the All category.
              </p>
            </div>
          ) : viewMode === "style" ? (
            <div className="space-y-5">
              {STYLES.map((styleDef) => (
                <article
                  key={styleDef.id}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors"
                >
                  <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                    <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
                      <h2 className="font-display text-base font-semibold tracking-tight text-[var(--text)]">
                        {styleDef.label}
                      </h2>
                      <span className="text-xs text-[var(--muted)]" aria-hidden="true">
                        ·
                      </span>
                      <p className="text-xs text-[var(--muted)]">{styleDef.rule}</p>
                    </div>
                    <span className="text-xs text-[var(--muted)] tabular-nums">
                      {filteredIcons.length} icons
                    </span>
                  </div>

                  <div className="grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-10 gap-1.5">
                    {filteredIcons.map((icon) => (
                      <IconTile
                        key={`${styleDef.id}-${icon.name}`}
                        icon={icon}
                        styleDef={styleDef}
                        clickMode={clickMode}
                        isSelected={
                          selected.iconName === icon.name &&
                          selected.styleId === styleDef.id
                        }
                        showLabel={icon.label}
                        onSelect={handleSelect}
                        onCopySvg={handleCopySvg}
                      />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredIcons.map((icon) => (
                <article
                  key={icon.name}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors"
                >
                  <div className="mb-3.5 space-y-0.5">
                    <div className="flex items-baseline justify-between gap-2">
                      <h2 className="font-display text-sm font-semibold tracking-tight text-[var(--text)]">
                        {icon.label}
                      </h2>
                      <span className="text-xs text-[var(--muted)]">
                        {icon.category}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--muted)]">
                      {icon.motionSummary}
                    </p>
                  </div>

                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5">
                    {STYLES.map((styleDef) => (
                      <IconTile
                        key={`${icon.name}-${styleDef.id}`}
                        icon={icon}
                        styleDef={styleDef}
                        clickMode={clickMode}
                        isSelected={
                          selected.iconName === icon.name &&
                          selected.styleId === styleDef.id
                        }
                        showLabel={SHORT_STYLE_LABELS[styleDef.id]}
                        onSelect={handleSelect}
                        onCopySvg={handleCopySvg}
                      />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Clipboard Toast */}
      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-medium text-[var(--accent-text)] shadow-lg transition-all duration-200 pointer-events-none ${
          toastMsg ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <Check className="h-3.5 w-3.5" aria-hidden="true" />
        <span>{toastMsg ?? ""}</span>
      </div>
    </div>
  );
}
