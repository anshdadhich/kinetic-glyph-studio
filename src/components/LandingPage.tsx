import { memo, useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { Check, Volume2, VolumeX } from "lucide-react";
import { ICONS, STYLES, IconDef, StyleId } from "../data/icons";
import {
  AudioStatus,
  getAudioStatus,
  initAudio,
  subscribeAudioStatus,
  toggleSound,
  triggerSound,
} from "../audio/foley";
import { triggerChoreography } from "../physics/spring";
import "../landing.css";

/* ------------------------------------------------------------------ */
/* Glyphs                                                              */
/* ------------------------------------------------------------------ */

function useGlyph(icon: IconDef, style: StyleId) {
  const gid = useId().replace(/:/g, "");
  return useMemo(
    () => icon.svgs[style].replace(/__GID__/g, gid),
    [icon, style, gid]
  );
}

function StaticGlyph({ icon, style }: { icon: IconDef; style: StyleId }) {
  const markup = useGlyph(icon, style);
  return (
    <svg
      className="wig-glyph"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}

interface IconButtonProps {
  icon: IconDef;
  style: StyleId;
  onArm: () => void;
  className?: string;
}

const IconButton = memo(function IconButton({
  icon,
  style,
  onArm,
  className = "",
}: IconButtonProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const markup = useGlyph(icon, style);

  const animate = useCallback(() => {
    triggerChoreography(icon.name, svgRef.current);
  }, [icon.name]);

  const play = useCallback(() => {
    initAudio();
    animate();
    triggerSound(icon.name, btnRef.current);
    onArm();
  }, [icon.name, animate, onArm]);

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={play}
      onPointerEnter={() => {
        initAudio();
        animate();
        triggerSound(icon.name, btnRef.current);
      }}
      aria-label={`Play ${icon.label}, ${icon.soundSummary}`}
      title={`${icon.label} — ${icon.soundSummary}`}
      className={`wig-icon ${className}`}
    >
      <svg
        ref={svgRef}
        className="wig-glyph"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: markup }}
      />
    </button>
  );
});

/* ------------------------------------------------------------------ */
/* Sponsors — ten $30 slots with a demo checkout                       */
/* ------------------------------------------------------------------ */

interface Sponsor {
  name: string;
  url: string;
  tagline: string;
  emoji: string;
}

const SLOTS = 10;
const PRICE = 30;
const STORE = "wiggle-icons-sponsors-v1";
const BLANK: Sponsor = { name: "", url: "", tagline: "", emoji: "✦" };

function loadSponsors(): (Sponsor | null)[] {
  try {
    const raw = window.localStorage.getItem(STORE);
    const parsed = raw ? (JSON.parse(raw) as (Sponsor | null)[]) : [];
    return Array.from({ length: SLOTS }, (_, i) => parsed[i] ?? null);
  } catch {
    return Array(SLOTS).fill(null);
  }
}

function SponsorCheckout({
  slot,
  onClose,
  onPaid,
}: {
  slot: number;
  onClose: () => void;
  onPaid: (entry: Sponsor) => void;
}) {
  const [form, setForm] = useState<Sponsor>(BLANK);
  const [phase, setPhase] = useState<"form" | "processing" | "done">("form");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && phase !== "processing") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, phase]);

  const pay = () => {
    if (!form.name.trim()) return;
    setPhase("processing");
    const entry: Sponsor = {
      name: form.name.trim().slice(0, 40),
      url: form.url.trim(),
      tagline: form.tagline.trim().slice(0, 80),
      emoji: form.emoji.trim().slice(0, 4) || "✦",
    };
    window.setTimeout(() => {
      onPaid(entry);
      setPhase("done");
      window.setTimeout(onClose, 1300);
    }, 900);
  };

  return (
    <>
      <div className="wig-sheet-backdrop" onMouseDown={onClose} />
      <div className="wig-sheet" role="dialog" aria-modal="true" aria-label={`Claim sponsor slot ${slot + 1}`}>
        <button type="button" className="wig-sheet-close" onClick={onClose} aria-label="Close checkout">
          <span aria-hidden="true">✕</span>
        </button>
        {phase === "done" ? (
          <div style={{ textAlign: "center", padding: "24px 0" }}>
            <div className="wig-sponsor-icon" style={{ margin: "0 auto 16px", background: "#111", color: "#fff" }}>
              <Check size={20} />
            </div>
            <h2 style={{ fontWeight: 600 }}>You’re on the wall.</h2>
            <p style={{ color: "var(--muted)", marginTop: 8 }}>Slot {slot + 1} is yours. Thanks for supporting Wiggle Icons.</p>
          </div>
        ) : (
          <>
            <p style={{ color: "var(--faint)", fontSize: 12 }}>SPONSOR SLOT {slot + 1}</p>
            <h2 style={{ fontWeight: 600, fontSize: 24, marginTop: 4 }}>Claim for ${PRICE}</h2>
            <div style={{ display: "grid", gap: 12, marginTop: 20 }}>
              <div className="wig-field">
                <label htmlFor="wig-name">Name or brand</label>
                <input id="wig-name" autoFocus value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Acme Studio" />
              </div>
              <div className="wig-field">
                <label htmlFor="wig-url">Website (optional)</label>
                <input id="wig-url" value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} placeholder="https://example.com" />
              </div>
              <div className="wig-field">
                <label htmlFor="wig-note">One-line note (optional)</label>
                <input id="wig-note" value={form.tagline} onChange={(e) => setForm({ ...form, tagline: e.target.value })} placeholder="We make tiny things feel alive." />
              </div>
              <div className="wig-field" style={{ maxWidth: 96 }}>
                <label htmlFor="wig-emoji">Emoji</label>
                <input id="wig-emoji" value={form.emoji} maxLength={4} onChange={(e) => setForm({ ...form, emoji: e.target.value })} style={{ textAlign: "center" }} />
              </div>
            </div>
            <div style={{ background: "var(--tile)", borderRadius: 14, padding: 14, marginTop: 18, display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "var(--muted)" }}>Sponsor slot · lifetime</span>
              <strong>${PRICE}.00</strong>
            </div>
            <p style={{ color: "var(--faint)", fontSize: 12, marginTop: 8 }}>
              Demo checkout — no real charge. Your details are saved in this browser only.
            </p>
            <button
              type="button"
              onClick={pay}
              disabled={!form.name.trim() || phase === "processing"}
              className="wig-capsule wig-capsule-buy"
              style={{ width: "100%", justifyContent: "center", marginTop: 16, opacity: !form.name.trim() || phase === "processing" ? 0.5 : 1 }}
            >
              {phase === "processing" ? (
                <><span className="wig-spinner" style={{ width: 15, height: 15, borderRadius: "50%", border: "2px solid currentColor", borderTopColor: "transparent" }} /> Processing…</>
              ) : (
                <>Pay ${PRICE} <span aria-hidden="true">→</span></>
              )}
            </button>
          </>
        )}
      </div>
    </>
  );
}

function SponsorWall() {
  const [sponsors, setSponsors] = useState<(Sponsor | null)[]>(loadSponsors);
  const [slot, setSlot] = useState<number | null>(null);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORE, JSON.stringify(sponsors));
    } catch {
      /* in-memory fallback */
    }
  }, [sponsors]);

  const claimed = sponsors.filter(Boolean).length;

  return (
    <>
      <div className="wig-sponsors">
        {sponsors.map((s, i) =>
          s ? (
            s.url ? (
              <a key={i} className="wig-sponsor" href={s.url} target="_blank" rel="noreferrer">
                <div className="wig-sponsor-head">
                  <span className="wig-sponsor-icon" aria-hidden="true">{s.emoji}</span>
                  <span className="wig-sponsor-names">
                    <strong>{s.name}</strong>
                    <span>Sponsor · slot {i + 1}</span>
                  </span>
                </div>
                <p className="wig-sponsor-note">{s.tagline || "Supporting independent icon craft."}</p>
              </a>
            ) : (
              <div key={i} className="wig-sponsor">
                <div className="wig-sponsor-head">
                  <span className="wig-sponsor-icon" aria-hidden="true">{s.emoji}</span>
                  <span className="wig-sponsor-names">
                    <strong>{s.name}</strong>
                    <span>Sponsor · slot {i + 1}</span>
                  </span>
                </div>
                <p className="wig-sponsor-note">{s.tagline || "Supporting independent icon craft."}</p>
              </div>
            )
          ) : (
            <button key={i} type="button" className="wig-sponsor" onClick={() => setSlot(i)}>
              <div className="wig-sponsor-head">
                <span className="wig-sponsor-icon wig-empty-icon" aria-hidden="true">+</span>
                <span className="wig-sponsor-names">
                  <strong>Your logo here</strong>
                  <span>Slot {i + 1} · ${PRICE}</span>
                </span>
              </div>
              <p className="wig-sponsor-note">Click to claim this block for ${PRICE}.</p>
            </button>
          )
        )}
      </div>
      <div className="wig-wall-status">
        <span>{claimed} of {SLOTS} slots claimed · ${PRICE} each</span>
        {claimed > 0 && (
          <button type="button" className="wig-reset" onClick={() => setSponsors(Array(SLOTS).fill(null))}>
            Reset demo
          </button>
        )}
      </div>
      {slot !== null && (
        <SponsorCheckout
          slot={slot}
          onClose={() => setSlot(null)}
          onPaid={(entry) =>
            setSponsors((prev) => {
              const next = [...prev];
              next[slot] = entry;
              return next;
            })
          }
        />
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Landing page                                                        */
/* ------------------------------------------------------------------ */

const FAQ = [
  ["Is this a subscription?", "No. Browse the library for free, and a sponsor slot is a one-time $30 placement."],
  ["What do I get as a sponsor?", "Your name, link and one-line note live on this page in a permanent 10-slot wall."],
  ["Can I change my details later?", "Yes. Clear the demo wall with Reset demo and claim the same slot again with new details."],
  ["How many icons are there?", "240 icons, each in seven styles: outline, solid, duotone, glass, stencil, hardware and relief."],
  ["Do the icons really make sound?", "Every icon has its own procedural Web Audio foley, generated in the browser — no sample files."],
  ["Does reduced motion work?", "Yes. All choreography respects prefers-reduced-motion."],
];

export default function LandingPage() {
  const [armed, setArmed] = useState(false);
  const [audioStatus, setAudioStatus] = useState<AudioStatus>(() => getAudioStatus());
  const heroIcons = useMemo(() => ICONS.slice(0, 16), []);
  const sampleIcons = useMemo(() => ICONS.slice(0, 40), []);
  const mosaicIcons = useMemo(() => ICONS.slice(40, 96), []);
  const showcase = useMemo(() => ICONS.slice(96, 112), []);
  const styles = useMemo(() => STYLES, []);

  useEffect(() => subscribeAudioStatus(() => setAudioStatus(getAudioStatus())), []);
  useEffect(() => {
    initAudio();
  }, []);
  useEffect(() => {
    if (audioStatus === "ready") setArmed(true);
  }, [audioStatus]);

  const arm = useCallback(() => setArmed(true), []);

  return (
    <div id="top" className="wig-root">
      <a className="wig-launch" href="#sponsors">
        <span className="wig-launch-full">Sponsor wall · ten blocks at $30 each · </span>
        <strong>Put your name on it</strong>
        <span className="wig-launch-go" aria-hidden="true">→</span>
      </a>
      <div className="wig-band" aria-hidden="true" />
      <div className="wig-blur" aria-hidden="true">
        <div /><div /><div /><div /><div /><div /><div />
      </div>

      <main className="wig-main">
        <header className="wig-header">
          <a href="#top" className="wig-brand" aria-label="Wiggle icons, back to top">
            <span className="wig-brand-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 18c1.3 1 4.7 1 6 0M6.6 15.6c1-1 1.1-2.2 1.2-4.2.1-2.5 1.5-4.4 4.2-4.4s4.1 1.9 4.2 4.4c.1 2 .2 3.2 1.2 4.2.6.6.2 1.6-.7 1.7-1.7.2-4.5.2-6.2.2s-4.5 0-6.2-.2c-.9-.1-1.3-1.1-.7-1.7Z" />
              </svg>
            </span>
            wiggle icons
          </a>
          <nav className="wig-nav" aria-label="Site">
            <a className="wig-nav-link" href="#library">Library</a>
            <button type="button" className="wig-sound" onClick={toggleSound} aria-pressed={audioStatus === "ready"}>
              {audioStatus === "muted" ? <VolumeX /> : <Volume2 />}
              Sound {audioStatus === "muted" ? "off" : "on"}
            </button>
          </nav>
        </header>

        <ul className="wig-hero-icons" aria-label="A few of the icons">
          {heroIcons.map((icon, i) => (
            <li key={icon.name}>
              <IconButton icon={icon} style={STYLES[i % STYLES.length].id} onArm={arm} />
            </li>
          ))}
        </ul>
        <p className="wig-hint">
          <span>{armed ? "Now just hover over any icon — each one sounds different" : "Click an icon to turn on its sound"}</span>
        </p>

        <div className="wig-copy">
          <p>
            <strong className="wig-lead">Make your app feel alive. 240 animated SVG icons in seven styles.</strong>{" "}
            Each one moves and sounds like the thing it shows. A bell swings and its clapper lags
            behind, a heart thumps twice, a gift lid pops and lands. Every motion runs on spring
            physics, and every sound is generated in the browser.
          </p>
          <p>
            <strong className="wig-lead">Built for tinkerers.</strong> Clean inline SVGs with named
            moving parts, so you can copy any icon and wire up your own interaction. React-ready,
            no dependencies on the icons themselves.
          </p>
          <p>
            Try all 240 free in the <a href="#library">library</a>, or{" "}
            <a className="wig-offer" href="#sponsors"><strong>claim a sponsor slot</strong> $30</a>{" "}
            to put your name on the wall.
          </p>
        </div>

        <div className="wig-actions">
          <a className="wig-capsule wig-capsule-buy" href="#library">
            <span>Explore the library</span><span className="wig-capsule-price">240 icons</span>
          </a>
          <a className="wig-capsule wig-capsule-quiet" href="#sponsors">
            Become a sponsor <span aria-hidden="true">→</span>
          </a>
        </div>
        <p className="wig-guarantee">No account. No install. Every sound is generated live in the browser.</p>

        <section id="sponsors" className="wig-sponsor-strip" aria-labelledby="sponsor-title">
          <div className="wig-sponsor-strip-head">
            <div>
              <p className="wig-eyebrow">Sponsor wall</p>
              <h2 id="sponsor-title">10 blocks · $30 each</h2>
            </div>
            <p>Your name, link and one line, right here under the intro.</p>
          </div>
          <SponsorWall />
        </section>

        <section className="wig-sampler" id="sampler" aria-label="Sampler">
          <div className="wig-sampler-head">
            <h2>Icons</h2>
            <span className="wig-sampler-meta">
              <span className="wig-now">{sampleIcons.length} of {ICONS.length} · {STYLES.length} styles</span>
              <a href="#library">View all {ICONS.length} →</a>
            </span>
          </div>
          <div className="wig-panels">
            {styles.map((style) => (
              <div className="wig-panel" key={style.id}>
                <ul className="wig-panel-grid">
                  {sampleIcons.map((icon) => (
                    <li key={icon.name}>
                      <IconButton icon={icon} style={style.id} onArm={arm} />
                    </li>
                  ))}
                </ul>
                <p className="wig-panel-name">{style.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="wig-section" aria-labelledby="what-title">
          <h2 id="what-title">What you get</h2>
          <p className="wig-section-lead">A tiny library with an unreasonable amount of attention to detail.</p>
          <div className="wig-features" style={{ marginTop: 24 }}>
            <div className="wig-feature">
              <div className="wig-feature-art">
                <div className="wig-mosaic">
                  {mosaicIcons.map((icon, i) => (
                    <span key={icon.name}><StaticGlyph icon={icon} style={STYLES[i % STYLES.length].id} /></span>
                  ))}
                </div>
              </div>
              <h3>{ICONS.length} icons</h3>
              <p>Everyday objects, interface, nature, travel and more, all on a 24px grid.</p>
            </div>
            <div className="wig-feature">
              <div className="wig-feature-art">
                <div className="wig-mosaic">
                  {showcase.map((icon, i) => (
                    <span key={icon.name}><StaticGlyph icon={icon} style={STYLES[(i + 2) % STYLES.length].id} /></span>
                  ))}
                </div>
              </div>
              <h3>{STYLES.length} styles</h3>
              <p>Outline, solid, duotone, glass, stencil, hardware and 3D relief.</p>
            </div>
            <div className="wig-feature">
              <div className="wig-feature-art">
                <div className="wig-mosaic">
                  {ICONS.slice(112, 152).map((icon, i) => (
                    <span key={icon.name}><StaticGlyph icon={icon} style={STYLES[(i + 1) % STYLES.length].id} /></span>
                  ))}
                </div>
              </div>
              <h3>A motion for each one</h3>
              <p>A bell swings, a rocket lifts off, a heart thumps. Spring physics, never a stock wiggle.</p>
            </div>
            <div className="wig-feature">
              <div className="wig-feature-art">
                <div className="wig-mosaic">
                  {ICONS.slice(152, 192).map((icon, i) => (
                    <span key={icon.name}><StaticGlyph icon={icon} style={STYLES[(i + 3) % STYLES.length].id} /></span>
                  ))}
                </div>
              </div>
              <h3>Procedural sound</h3>
              <p>Short synth voices built on the fly. No audio files, no downloads, no subscriptions.</p>
            </div>
          </div>
        </section>

        <section className="wig-section wig-pricing" id="pricing" aria-labelledby="pricing-title">
          <h2 id="pricing-title">One wall, ten places.</h2>
          <p className="wig-section-lead">A one-time placement. No subscription, no renewal, no fine print.</p>
          <div className="wig-plans">
            <div className="wig-plan">
              <p className="wig-plan-name">Just looking</p>
              <p className="wig-plan-who">Free, forever</p>
              <div className="wig-plan-price"><span className="wig-plan-now">$0</span></div>
              <ul className="wig-included">
                <li><Check size={20} /><span>All 240 icons in every style</span></li>
                <li><Check size={20} /><span>Every animation and sound</span></li>
                <li><Check size={20} /><span>Copy any SVG you like</span></li>
              </ul>
              <a className="wig-capsule wig-capsule-quiet" href="#library" style={{ marginTop: 20 }}>Open the library</a>
            </div>
            <div className="wig-plan wig-plan-featured">
              <p className="wig-plan-name">Sponsor slot</p>
              <p className="wig-plan-who">One block on the wall</p>
              <div className="wig-plan-price"><span className="wig-plan-now">$30</span><span className="wig-plan-terms">one time</span></div>
              <ul className="wig-included">
                <li><Check size={20} /><span>Your name and link on this page</span></li>
                <li><Check size={20} /><span>One-line note for your product</span></li>
                <li><Check size={20} /><span>Yours for life, no renewal</span></li>
              </ul>
              <a className="wig-capsule wig-capsule-buy" href="#sponsors" style={{ marginTop: 20 }}>
                <span>Claim a slot</span><span className="wig-capsule-price">$30</span>
              </a>
            </div>
          </div>
        </section>

        <section className="wig-section" aria-labelledby="faq-title">
          <h2 id="faq-title">Questions</h2>
          <div className="wig-faq" style={{ marginTop: 24 }}>
            {FAQ.map(([q, a]) => (
              <details className="wig-faq-item" key={q}>
                <summary>{q}<span className="wig-faq-mark" aria-hidden="true" /></summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <footer className="wig-footer">
          <div className="wig-footer-top">
            <div className="wig-footer-brand">
              <a href="#top" className="wig-brand">wiggle icons</a>
              <p>240 icons that move and make a sound, drawn one at a time.</p>
            </div>
            <div className="wig-footer-groups">
              <div className="wig-footer-group">
                <p className="wig-footer-title">Explore</p>
                <ul>
                  <li><a href="#sampler">Icons</a></li>
                  <li><a href="#library">Library</a></li>
                  <li><a href="#sponsors">Sponsors</a></li>
                </ul>
              </div>
              <div className="wig-footer-group">
                <p className="wig-footer-title">Styles</p>
                <ul>
                  {STYLES.map((s) => <li key={s.id}><a href="#library">{s.label}</a></li>)}
                </ul>
              </div>
              <div className="wig-footer-group">
                <p className="wig-footer-title">More</p>
                <ul>
                  <li><a href="#pricing">Pricing</a></li>
                  <li><a href="#faq-title">Questions</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="wig-footer-bottom">
            <span>© 2026 Wiggle Icons</span>
            <span>Built with spring physics and Web Audio.</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
