import { memo, useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { ArrowRight, Check, Code2, Palette, Sparkles, Volume2, X, Zap } from "lucide-react";
import { ICONS, STYLES, IconDef, StyleId } from "../data/icons";
import { initAudio, triggerSound } from "../audio/foley";
import { triggerChoreography } from "../physics/spring";

/* ------------------------------------------------------------------ */
/* Animated sample tile — click to play motion + procedural sound      */
/* ------------------------------------------------------------------ */

const SampleIcon = memo(function SampleIcon({
  icon,
  style,
  large = false,
}: {
  icon: IconDef;
  style: StyleId;
  large?: boolean;
}) {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const gid = useId().replace(/:/g, "");
  const markup = useMemo(
    () => icon.svgs[style].replace(/__GID__/g, gid),
    [icon, style, gid]
  );

  const play = useCallback(() => {
    initAudio();
    triggerChoreography(icon.name, svgRef.current);
    triggerSound(icon.name, btnRef.current);
  }, [icon.name]);

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={play}
      aria-label={`Play ${icon.label} in ${style} style`}
      title={`${icon.label} — click to move and hear it`}
      className={`group flex flex-col items-center justify-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--icon-color)] cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--text)] hover:shadow-[0_12px_30px_-18px_rgba(15,23,42,0.55)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] ${
        large ? "min-h-[300px] p-10 sm:min-h-[340px]" : "aspect-square p-3"
      }`}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={`icon-svg pointer-events-none overflow-visible ${large ? "h-32 w-32 sm:h-40 sm:w-40" : "h-8 w-8 sm:h-10 sm:w-10"}`}
        dangerouslySetInnerHTML={{ __html: markup }}
      />
      {large && (
        <div className="mt-4 text-center">
          <p className="font-display text-xl font-semibold">{icon.label}</p>
          <p className="mt-1 max-w-xs text-sm text-[var(--muted)]">{icon.motionSummary}</p>
          <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[var(--surface)] px-3 py-1 text-xs text-[var(--muted)]">
            <Volume2 className="h-3 w-3" aria-hidden="true" /> {icon.soundSummary}
          </p>
        </div>
      )}
    </button>
  );
});

/* ------------------------------------------------------------------ */
/* Sponsors — 10 slots at $30 each, demo checkout                      */
/* ------------------------------------------------------------------ */

interface Sponsor {
  name: string;
  url: string;
  tagline: string;
  emoji: string;
}

const SLOT_COUNT = 10;
const SLOT_PRICE = 30;
const STORAGE_KEY = "wiggle-icons-sponsors-v1";
const EMPTY_FORM: Sponsor = { name: "", url: "", tagline: "", emoji: "✦" };

function readSponsors(): (Sponsor | null)[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return Array(SLOT_COUNT).fill(null);
    const parsed = JSON.parse(raw) as (Sponsor | null)[];
    return Array.from({ length: SLOT_COUNT }, (_, i) => parsed[i] ?? null);
  } catch {
    return Array(SLOT_COUNT).fill(null);
  }
}

function SponsorSection() {
  const [sponsors, setSponsors] = useState<(Sponsor | null)[]>(readSponsors);
  const [activeSlot, setActiveSlot] = useState<number | null>(null);
  const [form, setForm] = useState<Sponsor>(EMPTY_FORM);
  const [phase, setPhase] = useState<"form" | "processing" | "done">("form");

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sponsors));
    } catch {
      /* storage may be unavailable; the demo still works in memory */
    }
  }, [sponsors]);

  useEffect(() => {
    if (activeSlot === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveSlot(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeSlot]);

  const openSlot = (index: number) => {
    setActiveSlot(index);
    setForm(EMPTY_FORM);
    setPhase("form");
  };

  const closeModal = () => {
    if (phase === "processing") return;
    setActiveSlot(null);
  };

  const pay = () => {
    if (!form.name.trim() || activeSlot === null) return;
    const slot = activeSlot;
    setPhase("processing");
    window.setTimeout(() => {
      const entry: Sponsor = {
        name: form.name.trim().slice(0, 40),
        url: form.url.trim(),
        tagline: form.tagline.trim().slice(0, 80),
        emoji: form.emoji.trim().slice(0, 4) || "✦",
      };
      setSponsors((prev) => {
        const next = [...prev];
        next[slot] = entry;
        return next;
      });
      setPhase("done");
      window.setTimeout(() => {
        setActiveSlot(null);
        setPhase("form");
      }, 1300);
    }, 900);
  };

  const claimed = sponsors.filter(Boolean).length;

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            Sponsor wall
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Put your name in front of icon people.
          </h2>
          <p className="text-sm leading-relaxed text-[var(--muted)]">
            Ten slots, ${SLOT_PRICE} each, yours for life. Claim an empty block, add your
            name and link, and it appears right here.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--muted)]">
            {claimed} / {SLOT_COUNT} claimed
          </span>
          {claimed > 0 && (
            <button
              type="button"
              onClick={() => setSponsors(Array(SLOT_COUNT).fill(null))}
              className="text-xs text-[var(--muted)] underline underline-offset-4 cursor-pointer hover:text-[var(--text)]"
            >
              Reset demo
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {sponsors.map((sponsor, index) =>
          sponsor ? (
            <div
              key={index}
              className="kg-sponsor-card flex min-h-[150px] flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] p-4"
            >
              <div className="flex items-start justify-between">
                <span className="text-2xl" aria-hidden="true">{sponsor.emoji}</span>
                <span className="rounded-full bg-[var(--surface)] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[var(--muted)]">
                  Sponsor
                </span>
              </div>
              <div className="mt-4 min-w-0">
                {sponsor.url ? (
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block truncate font-display text-sm font-semibold text-[var(--text)] underline decoration-transparent underline-offset-4 hover:decoration-current"
                  >
                    {sponsor.name}
                  </a>
                ) : (
                  <p className="truncate font-display text-sm font-semibold">{sponsor.name}</p>
                )}
                <p className="mt-0.5 line-clamp-2 text-[11px] text-[var(--muted)]">
                  {sponsor.tagline || "Supporting independent icon craft."}
                </p>
              </div>
            </div>
          ) : (
            <button
              key={index}
              type="button"
              onClick={() => openSlot(index)}
              className="group flex min-h-[150px] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface)] p-4 text-center cursor-pointer transition-all hover:-translate-y-0.5 hover:border-[var(--text)] hover:bg-[var(--surface-elevated)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] text-lg text-[var(--muted)] transition-colors group-hover:border-[var(--text)] group-hover:text-[var(--text)]">
                +
              </span>
              <span className="text-xs font-semibold">Slot {index + 1}</span>
              <span className="text-[11px] text-[var(--muted)]">Your logo here · ${SLOT_PRICE}</span>
            </button>
          )
        )}
      </div>

      {activeSlot !== null && (
        <div
          className="kg-modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="sponsor-dialog-title"
            className="w-full max-w-md rounded-3xl border border-[var(--border)] bg-[var(--bg)] p-6 shadow-2xl"
          >
            {phase === "done" ? (
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-text)]">
                  <Check className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 id="sponsor-dialog-title" className="font-display text-xl font-bold">
                  You’re on the wall!
                </h3>
                <p className="text-sm text-[var(--muted)]">
                  Slot {activeSlot + 1} is now yours. Thanks for supporting Wiggle Icons.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                      Sponsor slot {activeSlot + 1}
                    </p>
                    <h3 id="sponsor-dialog-title" className="mt-1 font-display text-2xl font-bold">
                      Claim for ${SLOT_PRICE}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={closeModal}
                    aria-label="Close sponsor checkout"
                    className="rounded-lg p-1.5 text-[var(--muted)] cursor-pointer hover:bg-[var(--surface)] hover:text-[var(--text)]"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="mt-5 space-y-3">
                  <label className="block text-xs font-medium">
                    Name or brand
                    <input
                      autoFocus
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Acme Studio"
                      className="mt-1 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-sm text-[var(--text)] outline-none focus:border-[var(--text)]"
                    />
                  </label>
                  <label className="block text-xs font-medium">
                    Website <span className="font-normal text-[var(--muted)]">(optional)</span>
                    <input
                      value={form.url}
                      onChange={(e) => setForm({ ...form, url: e.target.value })}
                      placeholder="https://example.com"
                      className="mt-1 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-sm text-[var(--text)] outline-none focus:border-[var(--text)]"
                    />
                  </label>
                  <label className="block text-xs font-medium">
                    One-line note <span className="font-normal text-[var(--muted)]">(optional)</span>
                    <input
                      value={form.tagline}
                      onChange={(e) => setForm({ ...form, tagline: e.target.value })}
                      placeholder="We make tiny things feel alive."
                      className="mt-1 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-sm text-[var(--text)] outline-none focus:border-[var(--text)]"
                    />
                  </label>
                  <label className="block text-xs font-medium">
                    Emoji or initial
                    <input
                      value={form.emoji}
                      onChange={(e) => setForm({ ...form, emoji: e.target.value })}
                      maxLength={4}
                      className="mt-1 w-20 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-center text-sm outline-none focus:border-[var(--text)]"
                    />
                  </label>
                </div>

                <div className="mt-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--muted)]">Sponsor slot · lifetime</span>
                    <span className="font-semibold">${SLOT_PRICE}.00</span>
                  </div>
                  <p className="mt-2 text-[11px] text-[var(--muted)]">
                    Demo checkout — no real charge is made. Details are saved in this browser only.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={pay}
                  disabled={!form.name.trim() || phase === "processing"}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-[var(--accent-text)] cursor-pointer transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {phase === "processing" ? (
                    <>
                      <span className="kg-spinner h-4 w-4 rounded-full border-2 border-current border-t-transparent" aria-hidden="true" />
                      Processing demo payment…
                    </>
                  ) : (
                    <>
                      Pay ${SLOT_PRICE} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Landing page                                                        */
/* ------------------------------------------------------------------ */

const FEATURES = [
  {
    icon: Sparkles,
    title: "Motion with meaning",
    body: "A bell swings with lag, a heart thumps twice, a flag ripples. Every icon moves like the thing it shows.",
  },
  {
    icon: Volume2,
    title: "Procedural sound",
    body: "Short synth foley generated in the browser. No samples, no downloads — just a tiny voice for every icon.",
  },
  {
    icon: Palette,
    title: "Seven distinct styles",
    body: "Outline, Solid, Duotone, Glass, Stencil, Hardware and 3D Relief. One drawing, seven personalities.",
  },
  {
    icon: Code2,
    title: "Ready to lift",
    body: "Clean inline SVGs with named parts, so you can copy one and wire up your own interaction.",
  },
  {
    icon: Zap,
    title: "Spring physics",
    body: "Transitions settle naturally instead of snapping. Reduced-motion preferences are respected.",
  },
  {
    icon: Check,
    title: "Free to explore",
    body: "Browse every icon, flip between styles, and click anything to see and hear what it does.",
  },
];

export default function LandingPage() {
  const heroIcon = useMemo(
    () => ICONS.find((ic) => ic.name === "guitar") ?? ICONS[0],
    []
  );
  const showcaseIcon = useMemo(
    () => ICONS.find((ic) => ic.name === "bicycle") ?? ICONS[1] ?? ICONS[0],
    []
  );
  const sampler = useMemo(() => ICONS.slice(0, 40), []);

  return (
    <>
      <div id="top" className="kg-announce">
        <span className="kg-announce-dot" aria-hidden="true" />
        240 icons · 7 styles · every one moves and sounds
        <a href="#library" className="ml-1 underline underline-offset-4">
          Explore free
        </a>
      </div>

      {/* Hero */}
      <section className="kg-hero relative overflow-hidden border-b border-[var(--border)]">
        <div className="kg-hero-glow" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1200px] gap-10 px-6 py-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-20">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Kinetic icon library
            </span>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl">
              Icons that <span className="kg-gradient-text">wiggle</span>. And make a sound.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              240 hand-built pictograms in seven visual styles. Each one has its own spring
              animation and its own little synthesized voice. Click an icon and it comes alive.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#library"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent-text)] transition-opacity hover:opacity-90"
              >
                Explore the library <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#sponsors"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-5 py-3 text-sm font-semibold transition-colors hover:border-[var(--text)]"
              >
                Become a sponsor
              </a>
            </div>
            <p className="text-xs text-[var(--muted)]">
              No account, no install. Sound switches on with your first click.
            </p>
          </div>

          <div className="kg-hero-stage">
            <SampleIcon icon={heroIcon} style="glass" large />
          </div>
        </div>
      </section>

      {/* Sampler */}
      <section id="sampler" className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Sampler
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {sampler.length} icons, {sampler.length * STYLES.length} variants.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-[var(--muted)]">
            Click any icon to see its motion and hear its sound. They are real inline SVGs —
            nothing is pre-recorded.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-4 gap-2.5 sm:grid-cols-6 lg:grid-cols-8">
          {sampler.map((icon, i) => (
            <SampleIcon key={icon.name} icon={icon} style={STYLES[i % STYLES.length].id} />
          ))}
        </div>
      </section>

      {/* What you get */}
      <section id="what-you-get" className="border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            What you get
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Small details, big difference.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] p-5"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--text)]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Style comparison */}
      <section id="styles" className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              One icon, seven personalities
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Pick the style that fits.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-[var(--muted)]">
            The {showcaseIcon.label.toLowerCase()} below is the same drawing in every style —
            outline, solid, duotone, glass, stencil, hardware and relief.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {STYLES.map((style) => (
            <div
              key={style.id}
              className="flex flex-col items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] p-4"
            >
              <SampleIcon icon={showcaseIcon} style={style.id} />
              <span className="text-center text-xs font-semibold">{style.label}</span>
              <span className="text-center text-[10px] leading-tight text-[var(--muted)]">
                {style.rule}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsors */}
      <section id="sponsors" className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <SponsorSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg font-bold">wiggle icons</p>
            <p className="mt-1 text-xs text-[var(--muted)]">
              240 icons that move and make a sound. Made with spring physics and web audio.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-xs font-medium text-[var(--muted)]">
            <a href="#library" className="hover:text-[var(--text)]">Library</a>
            <a href="#styles" className="hover:text-[var(--text)]">Styles</a>
            <a href="#sponsors" className="hover:text-[var(--text)]">Sponsors</a>
          </div>
        </div>
      </footer>
    </>
  );
}
