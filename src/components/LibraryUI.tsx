import {
  memo,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { ICONS, ICON_CATEGORIES, STYLES, IconDef, StyleId, getSvg } from "../data/icons";
import { getMasterDefsInner } from "./SvgDefs";
import { Icon } from "./Icon";
import {
  getAudioStatus,
  initAudio,
  subscribeAudioStatus,
  toggleSound,
  triggerSound,
} from "../audio/foley";
import { triggerChoreography } from "../physics/spring";
import { copyText } from "../clipboard";
import "../library.css";

export function standaloneSvg(icon: IconDef, style: StyleId): string {
  let inner = getSvg(icon, style).replace(/__GID__/g, "kg");
  inner = inner
    .replace(/(id="|url\(#)([^"-]+)-(out|in|m\d+)/g, "$1kg-$3")
    .replace(/var\(--rel-shadow\)/g, "#1e293b")
    .replace(/var\(--rel-face\)/g, "#ffffff")
    .replace(/var\(--rel-stroke\)/g, "#0f172a")
    .replace(/var\(--surface-elevated\)/g, "#ffffff")
    .replace(/var\(--g-back-stroke\)/g, "rgba(15, 23, 42, 0.15)");
  if (style === "glass" || style === "hardware") {
    inner = `<defs>\n${getMasterDefsInner(false).trim()}\n</defs>\n${inner}`;
  }
  return `<svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">\n${inner}\n</svg>`;
}

interface TileProps {
  icon: IconDef;
  style: StyleId;
  onCopied: (message: string) => void;
}

const LibTile = memo(function LibTile({ icon, style, onCopied }: TileProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const gid = useId().replace(/:/g, "");
  const markup = useMemo(
    () => getSvg(icon, style).replace(/__GID__/g, gid),
    [icon, style, gid]
  );

  const animate = useCallback(() => {
    triggerChoreography(icon.name, svgRef.current);
  }, [icon.name]);

  const copy = useCallback(async () => {
    initAudio();
    animate();
    triggerSound(icon.name, btnRef.current);
    const ok = await copyText(standaloneSvg(icon, style));
    onCopied(ok ? `Copied ${icon.label} (${style}) SVG` : "Clipboard unavailable in this browser");
  }, [animate, icon, onCopied, style]);

  return (
    <li>
      <button
        ref={btnRef}
        type="button"
        className="lib-icon"
        onClick={copy}
        onPointerEnter={() => {
          initAudio();
          animate();
          triggerSound(icon.name, btnRef.current);
        }}
        aria-label={`Copy ${icon.label} in ${style} style`}
        title={`${icon.label}, click to copy SVG`}
      >
        <svg
          ref={svgRef}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: markup }}
        />
      </button>
    </li>
  );
});

export default function LibraryUI({ showFooter = false }: { showFooter?: boolean }) {
  const [style, setStyle] = useState<StyleId>("duotone");
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [size, setSize] = useState(32);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [armed, setArmed] = useState(() => getAudioStatus() === "ready");
  const [audioStatus, setAudioStatus] = useState(getAudioStatus());
  const timer = useRef<number | null>(null);

  useEffect(() => subscribeAudioStatus(() => setAudioStatus(getAudioStatus())), []);
  useEffect(() => {
    initAudio();
  }, []);
  useEffect(() => {
    if (window.location.hash === "#library") {
      window.setTimeout(() => {
        const el = document.getElementById("library");
        el?.scrollIntoView({ behavior: "instant", block: "start" });
      }, 0);
    }
  }, []);
  useEffect(() => {
    if (audioStatus === "ready") setArmed(true);
  }, [audioStatus]);
  useEffect(() => () => {
    if (timer.current) window.clearTimeout(timer.current);
  }, []);

  const onCopied = useCallback((message: string) => {
    setToast(message);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setToast(null), 1600);
  }, []);

  const categories = useMemo(
    () => ["All", ...ICON_CATEGORIES.filter((c) => c !== "All")],
    []
  );
  const counts = useMemo(() => {
    const map: Record<string, number> = { All: ICONS.length };
    for (const c of ICON_CATEGORIES) {
      if (c !== "All") map[c] = ICONS.filter((ic) => ic.category === c).length;
    }
    return map;
  }, []);

  const filtered = useMemo(() => {
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

  return (
    <div className="lib-root">
      <aside className="lib-side" aria-label="Library settings">
        <div className="lib-side-head">
          <a href="#top" className="lib-brand">
            <span className="lib-brand-mark" aria-hidden="true">w</span>
            wiggle icons
          </a>
          <button
            type="button"
            className="lib-sound"
            onClick={toggleSound}
            aria-pressed={audioStatus === "ready"}
          >
            <Icon name="volume" size={15} animate sound bare />
            {audioStatus === "idle" ? "Enable sound" : audioStatus === "muted" ? "Sound off" : "Sound on"}
          </button>
        </div>

        <div className="lib-group">
          <h2 className="lib-label">Style</h2>
          <div className="lib-options" role="group" aria-label="Style">
            {STYLES.map((s) => (
              <button
                key={s.id}
                type="button"
                aria-pressed={style === s.id}
                onClick={() => setStyle(s.id)}
                title={s.label}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="lib-group">
          <h2 className="lib-label">Category</h2>
          <div className="lib-list" role="group" aria-label="Category">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {c}
                <span>{counts[c] ?? 0}</span>
              </button>
            ))}
          </div>
        </div>

        <nav className="lib-legal" aria-label="More">
          <a href="#top">Home</a>
          <a href="#sponsors">Sponsors</a>
          <a href="#pricing">Pricing</a>
        </nav>
      </aside>

      <main className="lib-main" aria-label="Icons" style={{ "--icon-size": `${size}px` } as CSSProperties}>
        <div className="lib-top">
          <label className="lib-search">
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="m16 16 4.5 4.5" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${ICONS.length} icons`}
              aria-label="Search icons"
            />
          </label>

          <div className="lib-size">
            <button
              type="button"
              className="lib-size-button"
              onClick={() => setSizeOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={sizeOpen}
            >
              {size} px
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m7 10 5 5 5-5" />
              </svg>
            </button>
            {sizeOpen && (
              <div className="lib-size-list" role="menu" aria-label="Icon size">
                {[24, 32, 40, 48].map((s) => (
                  <button
                    key={s}
                    type="button"
                    role="menuitemradio"
                    aria-checked={size === s}
                    onClick={() => {
                      setSize(s);
                      setSizeOpen(false);
                    }}
                  >
                    {s} px
                  </button>
                ))}
              </div>
            )}
          </div>

          <a className="lib-buy" href="#sponsors">
            Sponsor <span>$30</span>
          </a>
        </div>

        <p className="lib-count" aria-live="polite">
          {filtered.length} {category === "All" ? "" : `${category} `}icons · click any icon to copy its SVG{!armed ? " · click once to enable sound" : " · hover to hear them"}
        </p>

        <ul className="lib-grid">
          {filtered.map((icon) => (
            <LibTile
              key={icon.name}
              icon={icon}
              style={style}
              onCopied={onCopied}
            />
          ))}
        </ul>

        {filtered.length === 0 && (
          <p className="lib-count" style={{ padding: "64px 0", textAlign: "center" }}>
            No icons found. Try a different search or category.
          </p>
        )}
      </main>

      {showFooter && (
        <footer className="lib-footer">
          <span>© 2026 Wiggle Icons</span>
          <span>Built with spring physics and Web Audio.</span>
          <span>
            <a href="/">Home</a>
            <a href="/#sponsors">Sponsors</a>
          </span>
        </footer>
      )}

      {toast && <div className="lib-toast" role="status">{toast}</div>}
    </div>
  );
}
