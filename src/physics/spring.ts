export interface SpringProps {
  tx?: number;
  ty?: number;
  rot?: number;
  sx?: number;
  sy?: number;
  op?: number;
}

export interface SpringConfig {
  stiffness?: number;
  damping?: number;
  holdMs?: number;
  snapBack?: boolean;
}

interface ChannelState {
  value: number;
  target: number;
  velocity: number;
  rest: number;
}

interface SpringState {
  els: SVGElement[];
  stiffness: number;
  damping: number;
  channels: Record<string, ChannelState>;
  snapBack: boolean;
}

const activeSprings = new Set<SpringState>();
const timers = new WeakMap<SVGElement, number[]>();
let rafId: number | null = null;
let prevTime = typeof performance !== "undefined" ? performance.now() : 0;

function clearElTimers(el: SVGElement) {
  const existing = timers.get(el);
  if (existing) {
    existing.forEach((id) => window.clearTimeout(id));
    timers.delete(el);
  }
}

function addElTimer(el: SVGElement, id: number) {
  const list = timers.get(el) ?? [];
  list.push(id);
  timers.set(el, list);
}

function applyPivot(el: SVGElement) {
  const pivot = el.getAttribute("data-pivot");
  if (pivot) {
    const [x, y] = pivot.split(/[\s,]+/);
    el.style.transformBox = "view-box";
    el.style.transformOrigin = `${x}px ${y}px`;
  } else {
    el.style.transformBox = "fill-box";
    el.style.transformOrigin = "center";
  }
}

type PartTarget = SVGElement | SVGElement[] | null;

function toEls(target: PartTarget): SVGElement[] {
  if (!target) return [];
  return Array.isArray(target) ? target : [target];
}

export function animatePart(
  target: PartTarget,
  props: SpringProps,
  cfg: SpringConfig = {}
): void {
  const els = toEls(target);
  if (els.length === 0) return;
  if (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  const { stiffness = 360, damping = 15, holdMs = 110, snapBack = true } = cfg;
  const primary = els[0] as SVGElement & { _springState?: SpringState };
  const prevState = primary._springState;
  if (prevState) activeSprings.delete(prevState);

  els.forEach((el) => {
    const holder = el as SVGElement & { _springState?: SpringState };
    if (holder._springState) activeSprings.delete(holder._springState);
    clearElTimers(el);
    applyPivot(el);
  });

  const channels: Record<string, ChannelState> = {};
  (Object.keys(props) as (keyof SpringProps)[]).forEach((k) => {
    const targetVal = props[k];
    if (typeof targetVal !== "number") return;
    const def = k === "sx" || k === "sy" || k === "op" ? 1 : 0;
    const curVal = prevState?.channels[k]?.value ?? def;
    const curVel = prevState?.channels[k]?.velocity ?? 0;
    channels[k] = { value: curVal, target: targetVal, velocity: curVel, rest: def };
  });

  const state: SpringState = { els, stiffness, damping, channels, snapBack };
  els.forEach((el) => {
    (el as SVGElement & { _springState?: SpringState })._springState = state;
  });
  activeSprings.add(state);

  if (snapBack) {
    const tId = window.setTimeout(() => {
      Object.keys(state.channels).forEach((k) => {
        state.channels[k].target = state.channels[k].rest;
      });
    }, holdMs);
    addElTimer(primary, tId);
  }

  if (!rafId) {
    prevTime = performance.now();
    rafId = requestAnimationFrame(stepSprings);
  }
}

function schedulePart(
  target: PartTarget,
  delayMs: number,
  props: SpringProps,
  cfg: SpringConfig = {}
) {
  const els = toEls(target);
  if (els.length === 0) return;
  const id = window.setTimeout(() => animatePart(els, props, cfg), delayMs);
  addElTimer(els[0], id);
}

const strokeAnims = new WeakMap<SVGElement, Animation>();

function streamStroke(target: PartTarget, delayMs = 0, durationMs = 520, gapRatio = 0.42): void {
  const els = toEls(target);
  if (els.length === 0) return;
  if (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  const shapes: SVGGeometryElement[] = [];
  els.forEach((el) => {
    if (el.closest("mask")) return;
    if ("getTotalLength" in el && typeof (el as SVGGeometryElement).getTotalLength === "function") {
      shapes.push(el as SVGGeometryElement);
    } else {
      el.querySelectorAll<SVGGeometryElement>("path, line, polyline, circle, rect").forEach((child) => {
        if (!child.closest("mask")) shapes.push(child);
      });
    }
  });

  shapes.forEach((shape) => {
    const strokeAttr = shape.getAttribute("stroke") ?? getComputedStyle(shape).stroke;
    if (!strokeAttr || strokeAttr === "none") return;

    let len = 0;
    try {
      len = shape.getTotalLength();
    } catch {
      len = 0;
    }
    if (!len || !Number.isFinite(len)) return;

    const prevAnim = strokeAnims.get(shape);
    if (prevAnim) prevAnim.cancel();

    const gap = Math.max(6.5, len * gapRatio);
    const period = len + gap;
    shape.style.strokeDasharray = `${len.toFixed(2)} ${gap.toFixed(2)}`;
    shape.style.strokeDashoffset = "0";

    if (typeof shape.animate === "function") {
      const anim = shape.animate(
        [{ strokeDashoffset: "0" }, { strokeDashoffset: `${(-period).toFixed(2)}` }],
        {
          duration: durationMs,
          delay: delayMs,
          easing: "cubic-bezier(0.28, 0.08, 0.24, 1)",
          fill: "both",
        }
      );
      strokeAnims.set(shape, anim);
      const cleanup = () => {
        if (strokeAnims.get(shape) === anim) {
          shape.style.strokeDasharray = "";
          shape.style.strokeDashoffset = "";
          strokeAnims.delete(shape);
        }
      };
      anim.onfinish = cleanup;
      anim.oncancel = cleanup;
    }
  });
}

function stepSprings(now: number) {
  const dt = Math.min(0.032, (now - prevTime) / 1000 || 0.016);
  prevTime = now;

  for (const s of activeSprings) {
    let settled = true;
    for (const k in s.channels) {
      const c = s.channels[k];
      const force = -s.stiffness * (c.value - c.target) - s.damping * c.velocity;
      c.velocity += force * dt;
      c.value += c.velocity * dt;

      if (
        Math.abs(c.value - c.target) > 0.01 ||
        Math.abs(c.velocity) > 0.02 ||
        (s.snapBack && Math.abs(c.value - c.rest) > 0.004)
      ) {
        settled = false;
      }
    }

    const ch = s.channels;
    const tx = ch.tx ? ch.tx.value : 0;
    const ty = ch.ty ? ch.ty.value : 0;
    const rot = ch.rot ? ch.rot.value : 0;
    const sx = ch.sx ? ch.sx.value : 1;
    const sy = ch.sy ? ch.sy.value : 1;
    const tr = `translate(${tx.toFixed(3)}px, ${ty.toFixed(3)}px) rotate(${rot.toFixed(2)}deg) scale(${sx.toFixed(3)}, ${sy.toFixed(3)})`;
    const opStr = ch.op ? Math.max(0.1, Math.min(1, ch.op.value)).toFixed(3) : null;

    for (let i = 0; i < s.els.length; i++) {
      const el = s.els[i];
      el.style.transform = tr;
      if (opStr !== null) el.style.opacity = opStr;
    }

    if (settled) {
      if (s.snapBack) {
        for (let i = 0; i < s.els.length; i++) {
          s.els[i].style.transform = "";
          if (ch.op) s.els[i].style.opacity = "";
        }
      }
      activeSprings.delete(s);
    }
  }

  rafId = activeSprings.size > 0 ? requestAnimationFrame(stepSprings) : null;
}

const q = (svg: SVGSVGElement, part: string): SVGElement[] =>
  Array.from(svg.querySelectorAll<SVGElement>(`[data-part="${part}"]`));

export const CHOREO: Record<string, (svg: SVGSVGElement) => void> = {
  // === 1. CORE UI ===
  home(svg) {
    animatePart(q(svg, "roof"), { ty: -2.0 }, { stiffness: 400, damping: 14 });
    animatePart(q(svg, "door"), { sx: 0.72, ty: 0.3, op: 0.65 }, { stiffness: 360, damping: 14 });
  },
  search(svg) {
    animatePart(q(svg, "lens"), { sx: 1.18, sy: 1.18, rot: -12, tx: 1.0, ty: -0.8 }, { stiffness: 360, damping: 13 });
  },
  user(svg) {
    animatePart(q(svg, "head"), { ty: -2.0, rot: 4 }, { stiffness: 380, damping: 13 });
    animatePart(q(svg, "body"), { ty: -0.6, sx: 1.04 }, { stiffness: 360, damping: 14 });
  },
  settings(svg) {
    animatePart(q(svg, "gear"), { rot: 60 }, { stiffness: 250, damping: 14, holdMs: 140 });
  },
  bell(svg) {
    animatePart(q(svg, "bell"), { rot: -18 }, { stiffness: 320, damping: 10, holdMs: 120 });
    animatePart(q(svg, "clapper"), { tx: 2.5 }, { stiffness: 280, damping: 9, holdMs: 130 });
  },
  lock(svg) {
    animatePart(q(svg, "shackle"), { ty: -2.6 }, { stiffness: 450, damping: 14 });
    animatePart(q(svg, "body"), { ty: 0.8 }, { stiffness: 380, damping: 15 });
  },
  unlock(svg) {
    animatePart(q(svg, "shackle"), { ty: -2.8, rot: -16 }, { stiffness: 440, damping: 13 });
    animatePart(q(svg, "body"), { ty: 0.6 }, { stiffness: 380, damping: 15 });
  },
  trash(svg) {
    animatePart(q(svg, "lid"), { ty: -2.3, rot: -20 }, { stiffness: 380, damping: 13 });
    animatePart(q(svg, "bin"), { rot: 3 }, { stiffness: 340, damping: 14 });
  },
  check(svg) {
    animatePart(q(svg, "check"), { sx: 1.24, sy: 1.24, rot: -5 }, { stiffness: 440, damping: 12, holdMs: 100 });
  },
  plus(svg) {
    animatePart(q(svg, "plus"), { rot: 90, sx: 1.18, sy: 1.18 }, { stiffness: 340, damping: 14, holdMs: 120 });
  },

  // === 2. COMMS & FILES ===
  mail(svg) {
    animatePart(q(svg, "flap"), { ty: -2.0, sy: 0.68 }, { stiffness: 420, damping: 14 });
    animatePart(q(svg, "letter"), { ty: -2.0 }, { stiffness: 360, damping: 13 });
  },
  send(svg) {
    animatePart(q(svg, "plane"), { tx: 3.2, ty: -3.2, rot: -6, sx: 0.92, sy: 0.92 }, { stiffness: 320, damping: 13, holdMs: 130 });
  },
  chat(svg) {
    animatePart(q(svg, "bubble"), { sx: 1.08, sy: 1.08 }, { stiffness: 360, damping: 13 });
    const d1 = q(svg, "dot-1");
    const d2 = q(svg, "dot-2");
    const d3 = q(svg, "dot-3");
    animatePart(d1, { ty: -1.8 }, { stiffness: 460, damping: 12, holdMs: 80 });
    schedulePart(d2, 50, { ty: -1.8 }, { stiffness: 460, damping: 12, holdMs: 80 });
    schedulePart(d3, 100, { ty: -1.8 }, { stiffness: 460, damping: 12, holdMs: 80 });
  },
  phone(svg) {
    const h = q(svg, "handset");
    animatePart(h, { rot: -15, ty: -1.6 }, { stiffness: 520, damping: 11, holdMs: 80 });
    schedulePart(h, 85, { rot: 14, ty: -1.4 }, { stiffness: 520, damping: 11, holdMs: 80 });
  },
  folder(svg) {
    animatePart(q(svg, "flap"), { ty: 0.8, sy: 0.85 }, { stiffness: 380, damping: 14 });
    animatePart(q(svg, "doc"), { ty: -2.3 }, { stiffness: 360, damping: 13 });
  },
  document(svg) {
    animatePart(q(svg, "corner"), { sx: 1.26, sy: 1.26 }, { stiffness: 400, damping: 13 });
    animatePart(q(svg, "lines"), { tx: 1.4, sx: 1.08 }, { stiffness: 340, damping: 14 });
  },
  bookmark(svg) {
    animatePart(q(svg, "ribbon"), { ty: 2.5, sy: 1.12 }, { stiffness: 400, damping: 13 });
  },
  calendar(svg) {
    animatePart(q(svg, "rings"), { ty: -1.8 }, { stiffness: 380, damping: 14 });
    animatePart(q(svg, "page"), { rot: -7, ty: -1.0 }, { stiffness: 350, damping: 14 });
  },
  download(svg) {
    animatePart(q(svg, "arrow"), { ty: 3.0 }, { stiffness: 420, damping: 13, holdMs: 115 });
    animatePart(q(svg, "tray"), { ty: 0.9, sx: 1.08 }, { stiffness: 380, damping: 15 });
  },
  upload(svg) {
    animatePart(q(svg, "arrow"), { ty: -3.2 }, { stiffness: 420, damping: 13, holdMs: 115 });
    animatePart(q(svg, "tray"), { ty: 0.7 }, { stiffness: 380, damping: 15 });
  },

  // === 3. MEDIA & AUDIO ===
  camera(svg) {
    animatePart(q(svg, "lens"), { sx: 0.7, sy: 0.7 }, { stiffness: 520, damping: 16, holdMs: 80 });
    animatePart(q(svg, "body"), { ty: -1.0 }, { stiffness: 420, damping: 15 });
    animatePart(q(svg, "flash"), { sx: 1.5, sy: 1.5, op: 0.3 }, { stiffness: 460, damping: 14, holdMs: 90 });
  },
  vinyl(svg) {
    animatePart(q(svg, "disc"), { rot: 360 }, { stiffness: 140, damping: 14, holdMs: 280 });
    animatePart(q(svg, "tonearm"), { rot: 16 }, { stiffness: 320, damping: 15, holdMs: 240 });
  },
  play(svg) {
    animatePart(q(svg, "tri"), { tx: 2.2, sx: 1.16, sy: 1.16 }, { stiffness: 420, damping: 13 });
  },
  pause(svg) {
    animatePart(q(svg, "bar-l"), { tx: -1.3, sy: 1.12 }, { stiffness: 440, damping: 14 });
    animatePart(q(svg, "bar-r"), { tx: 1.3, sy: 1.12 }, { stiffness: 440, damping: 14 });
  },
  volume(svg) {
    animatePart(q(svg, "cone"), { sx: 1.15, sy: 1.12, tx: -0.6 }, { stiffness: 460, damping: 13 });
    animatePart(q(svg, "wave-1"), { tx: 1.4, sx: 1.12, sy: 1.12 }, { stiffness: 400, damping: 13 });
    schedulePart(q(svg, "wave-2"), 45, { tx: 2.2, sx: 1.18, sy: 1.18 }, { stiffness: 400, damping: 13 });
  },
  mic(svg) {
    animatePart(q(svg, "capsule"), { ty: -1.8, sx: 1.14, sy: 1.14 }, { stiffness: 420, damping: 13 });
    animatePart(q(svg, "stand"), { ty: 0.5 }, { stiffness: 360, damping: 15 });
  },
  headphones(svg) {
    animatePart(q(svg, "cup-l"), { tx: 1.3, rot: -8 }, { stiffness: 420, damping: 13 });
    animatePart(q(svg, "cup-r"), { tx: -1.3, rot: 8 }, { stiffness: 420, damping: 13 });
    animatePart(q(svg, "band"), { ty: -1.0, sy: 0.94 }, { stiffness: 380, damping: 14 });
  },
  music(svg) {
    animatePart(q(svg, "note-1"), { ty: -2.4, rot: -8 }, { stiffness: 420, damping: 12 });
    schedulePart(q(svg, "note-2"), 60, { ty: -2.2, rot: 8 }, { stiffness: 420, damping: 12 });
  },
  image(svg) {
    animatePart(q(svg, "sun"), { ty: -2.2, sx: 1.24, sy: 1.24 }, { stiffness: 360, damping: 13 });
    animatePart(q(svg, "mountain"), { ty: 0.6 }, { stiffness: 360, damping: 15 });
  },
  video(svg) {
    animatePart(q(svg, "cam"), { rot: -5, tx: -0.6 }, { stiffness: 380, damping: 14 });
    animatePart(q(svg, "lens"), { tx: 1.4, sx: 1.18 }, { stiffness: 420, damping: 13 });
  },

  // === 4. KINETIC OBJECTS & TOOLS ===
  bicycle(svg) {
    animatePart(q(svg, "wheel-back"), { rot: 360 }, { stiffness: 160, damping: 14, holdMs: 280 });
    animatePart(q(svg, "wheel-front"), { rot: 360 }, { stiffness: 160, damping: 14, holdMs: 280 });
    animatePart(q(svg, "crank"), { rot: 360 }, { stiffness: 160, damping: 14, holdMs: 280 });
  },
  scissors(svg) {
    const a = q(svg, "blade-a");
    const b = q(svg, "blade-b");
    animatePart(a, { rot: -20 }, { stiffness: 520, damping: 16, holdMs: 75 });
    animatePart(b, { rot: 20 }, { stiffness: 520, damping: 16, holdMs: 75 });
    schedulePart(a, 120, { rot: -16 }, { stiffness: 520, damping: 16, holdMs: 70 });
    schedulePart(b, 120, { rot: 16 }, { stiffness: 520, damping: 16, holdMs: 70 });
  },
  wrench(svg) {
    animatePart(q(svg, "wrench"), { rot: -42 }, { stiffness: 300, damping: 12, holdMs: 140 });
  },
  hammer(svg) {
    const h = q(svg, "hammer");
    animatePart(h, { rot: 18 }, { stiffness: 380, damping: 14, holdMs: 65 });
    schedulePart(h, 75, { rot: -42 }, { stiffness: 520, damping: 14, holdMs: 85 });
  },
  paintbrush(svg) {
    animatePart(q(svg, "brush"), { rot: -24, tx: 1.8, ty: -1.2 }, { stiffness: 320, damping: 13, holdMs: 130 });
  },
  pen(svg) {
    const p = q(svg, "pen");
    animatePart(p, { tx: 2.2, ty: -1.2, rot: -10 }, { stiffness: 460, damping: 14, holdMs: 70 });
    schedulePart(p, 80, { tx: -1.2, ty: 0.6, rot: 8 }, { stiffness: 460, damping: 14, holdMs: 70 });
  },
  sliders(svg) {
    animatePart(q(svg, "knob-1"), { tx: 3.0 }, { stiffness: 360, damping: 14 });
    animatePart(q(svg, "knob-2"), { tx: -3.0 }, { stiffness: 360, damping: 14 });
    animatePart(q(svg, "knob-3"), { tx: 2.6 }, { stiffness: 360, damping: 14 });
  },
  link(svg) {
    animatePart(q(svg, "link-a"), { tx: 1.4, ty: -1.4 }, { stiffness: 440, damping: 14 });
    animatePart(q(svg, "link-b"), { tx: -1.4, ty: 1.4 }, { stiffness: 440, damping: 14 });
  },
  eye(svg) {
    animatePart(q(svg, "lid"), { sy: 0.14 }, { stiffness: 560, damping: 18, holdMs: 65 });
    animatePart(q(svg, "pupil"), { sx: 1.25, sy: 0.25 }, { stiffness: 560, damping: 18, holdMs: 65 });
  },
  pin(svg) {
    animatePart(q(svg, "pin"), { ty: -3.4 }, { stiffness: 420, damping: 11, holdMs: 100 });
    animatePart(q(svg, "shadow"), { sx: 0.55, op: 0.4 }, { stiffness: 420, damping: 11, holdMs: 100 });
  },

  // === 5. WORLD & ENERGY ===
  rocket(svg) {
    const flame = q(svg, "flame");
    const core = q(svg, "flame-core");
    animatePart(flame, { sy: 1.65, sx: 1.18, rot: -6, ty: 0.4 }, { stiffness: 520, damping: 10, holdMs: 85 });
    schedulePart(flame, 95, { sy: 1.3, sx: 0.9, rot: 7, ty: 0.2 }, { stiffness: 520, damping: 10, holdMs: 85 });
    schedulePart(flame, 190, { sy: 1.75, sx: 1.22, rot: -4, ty: 0.5 }, { stiffness: 480, damping: 11, holdMs: 95 });
    animatePart(core, { sy: 1.45, sx: 1.15, rot: 5 }, { stiffness: 560, damping: 10, holdMs: 80 });
    schedulePart(core, 95, { sy: 1.7, sx: 0.88, rot: -6 }, { stiffness: 560, damping: 10, holdMs: 90 });
  },
  compass(svg) {
    animatePart(q(svg, "needle"), { rot: 145 }, { stiffness: 210, damping: 8, holdMs: 135 });
    animatePart(q(svg, "bezel"), { rot: -8 }, { stiffness: 360, damping: 16, holdMs: 90 });
  },
  umbrella(svg) {
    animatePart(q(svg, "canopy"), { sx: 1.16, sy: 0.88, ty: -1.7 }, { stiffness: 420, damping: 12, holdMs: 140 });
    animatePart(q(svg, "shaft"), { ty: 1.2 }, { stiffness: 380, damping: 14, holdMs: 130 });
  },
  hourglass(svg) {
    animatePart(q(svg, "frame"), { rot: 180 }, { stiffness: 190, damping: 14, holdMs: 260 });
    animatePart(q(svg, "sand-top"), { sy: 0.35, ty: 1.4 }, { stiffness: 260, damping: 16, holdMs: 240 });
    animatePart(q(svg, "sand-bottom"), { sy: 1.3, ty: -0.5 }, { stiffness: 260, damping: 16, holdMs: 240 });
  },
  coffee(svg) {
    animatePart(q(svg, "cup"), { ty: -1.2 }, { stiffness: 340, damping: 14, holdMs: 120 });
    animatePart(q(svg, "steam-1"), { ty: -2.6, tx: -0.9, op: 0.35 }, { stiffness: 220, damping: 12, holdMs: 160 });
    schedulePart(q(svg, "steam-2"), 45, { ty: -3.0, tx: 0.9, op: 0.35 }, { stiffness: 220, damping: 12, holdMs: 170 });
    schedulePart(q(svg, "steam-3"), 90, { ty: -2.5, tx: -0.7, op: 0.35 }, { stiffness: 220, damping: 12, holdMs: 160 });
  },
  fan(svg) {
    animatePart(q(svg, "blades"), { rot: 540 }, { stiffness: 150, damping: 13, holdMs: 280 });
    animatePart(q(svg, "cage"), { rot: -4, ty: -0.6 }, { stiffness: 420, damping: 15, holdMs: 140 });
  },
  anchor(svg) {
    animatePart(q(svg, "anchor"), { ty: 3.0, rot: -10 }, { stiffness: 320, damping: 11, holdMs: 150 });
  },
  heart(svg) {
    const h = q(svg, "heart");
    animatePart(h, { sx: 1.24, sy: 1.24 }, { stiffness: 480, damping: 12, holdMs: 75 });
    schedulePart(h, 110, { sx: 1.16, sy: 1.16 }, { stiffness: 480, damping: 12, holdMs: 75 });
  },
  star(svg) {
    animatePart(q(svg, "star"), { sx: 1.2, sy: 1.2, rot: 36 }, { stiffness: 360, damping: 12 });
  },
  zap(svg) {
    animatePart(q(svg, "bolt"), { ty: -1.8, sx: 1.18, sy: 1.18, rot: -6 }, { stiffness: 460, damping: 13 });
  },

  // === 6. WEATHER & NATURE ===
  sun(svg) {
    animatePart(q(svg, "core"), { sx: 1.22, sy: 1.22 }, { stiffness: 380, damping: 12, holdMs: 130 });
    animatePart(q(svg, "rays"), { rot: 45, sx: 1.14, sy: 1.14 }, { stiffness: 260, damping: 13, holdMs: 160 });
  },
  moon(svg) {
    animatePart(q(svg, "crescent"), { rot: -16, ty: -0.8 }, { stiffness: 300, damping: 13, holdMs: 140 });
    animatePart(q(svg, "star-a"), { sx: 1.45, sy: 1.45, rot: 45 }, { stiffness: 420, damping: 11, holdMs: 110 });
    schedulePart(q(svg, "star-b"), 60, { sx: 1.35, sy: 1.35, rot: -35 }, { stiffness: 420, damping: 11, holdMs: 110 });
  },
  cloud(svg) {
    animatePart(q(svg, "cloud"), { tx: 2.2, sx: 1.09, sy: 0.94 }, { stiffness: 260, damping: 13, holdMs: 150 });
  },
  rain(svg) {
    animatePart(q(svg, "cloud"), { ty: -1.0 }, { stiffness: 320, damping: 14, holdMs: 130 });
    animatePart(q(svg, "drop-1"), { tx: -0.9, ty: 2.8, op: 0.35 }, { stiffness: 420, damping: 14, holdMs: 90 });
    schedulePart(q(svg, "drop-2"), 45, { tx: -0.9, ty: 3.0, op: 0.35 }, { stiffness: 420, damping: 14, holdMs: 90 });
    schedulePart(q(svg, "drop-3"), 90, { tx: -0.9, ty: 2.8, op: 0.35 }, { stiffness: 420, damping: 14, holdMs: 90 });
  },
  flame(svg) {
    const f = q(svg, "flame");
    const c = q(svg, "core");
    animatePart(f, { sy: 1.2, sx: 0.92, rot: -7 }, { stiffness: 440, damping: 11, holdMs: 85 });
    schedulePart(f, 95, { sy: 1.12, sx: 1.08, rot: 8 }, { stiffness: 440, damping: 11, holdMs: 90 });
    animatePart(c, { sy: 1.32, rot: 6 }, { stiffness: 500, damping: 10, holdMs: 80 });
    schedulePart(c, 90, { sy: 0.9, rot: -7 }, { stiffness: 500, damping: 10, holdMs: 90 });
  },
  snowflake(svg) {
    animatePart(q(svg, "flake"), { rot: 60, sx: 1.15, sy: 1.15 }, { stiffness: 240, damping: 13, holdMs: 180 });
  },
  wind(svg) {
    const g1 = q(svg, "gust-1");
    const g2 = q(svg, "gust-2");
    const g3 = q(svg, "gust-3");
    streamStroke(g1, 0, 520, 0.42);
    streamStroke(g2, 55, 560, 0.4);
    streamStroke(g3, 110, 500, 0.44);
    animatePart(g1, { tx: 1.4, ty: -0.3 }, { stiffness: 150, damping: 13, holdMs: 250 });
    schedulePart(g2, 55, { tx: 1.7, ty: -0.2 }, { stiffness: 150, damping: 13, holdMs: 260 });
    schedulePart(g3, 110, { tx: 1.2, ty: 0.25 }, { stiffness: 150, damping: 13, holdMs: 240 });
  },
  leaf(svg) {
    const l = q(svg, "leaf");
    animatePart(l, { rot: -18, ty: -1.4 }, { stiffness: 300, damping: 11, holdMs: 100 });
    schedulePart(l, 105, { rot: 14, ty: -0.6 }, { stiffness: 300, damping: 11, holdMs: 100 });
  },
  droplet(svg) {
    animatePart(q(svg, "drop"), { ty: 2.4, sx: 0.88, sy: 1.18 }, { stiffness: 440, damping: 12, holdMs: 110 });
  },
  mountain(svg) {
    animatePart(q(svg, "sun"), { ty: -2.4, sx: 1.2 }, { stiffness: 320, damping: 13, holdMs: 150 });
    animatePart(q(svg, "flag"), { rot: 16, sx: 1.15 }, { stiffness: 460, damping: 11, holdMs: 120 });
  },

  // === 7. COMMERCE & FINANCE ===
  cart(svg) {
    animatePart(q(svg, "basket"), { tx: 2.2, rot: -5 }, { stiffness: 340, damping: 13, holdMs: 130 });
    animatePart(q(svg, "wheel-l"), { tx: 2.2, rot: 220 }, { stiffness: 260, damping: 13, holdMs: 160 });
    animatePart(q(svg, "wheel-r"), { tx: 2.2, rot: 220 }, { stiffness: 260, damping: 13, holdMs: 160 });
  },
  bag(svg) {
    animatePart(q(svg, "bag"), { ty: -1.5, rot: 4 }, { stiffness: 380, damping: 13, holdMs: 110 });
    animatePart(q(svg, "handles"), { ty: -2.2, sy: 1.12 }, { stiffness: 420, damping: 12, holdMs: 110 });
  },
  card(svg) {
    animatePart(q(svg, "card"), { ty: -1.8, rot: -6 }, { stiffness: 400, damping: 14, holdMs: 110 });
    animatePart(q(svg, "chip"), { sx: 1.35, sy: 1.35 }, { stiffness: 460, damping: 13, holdMs: 120 });
  },
  wallet(svg) {
    animatePart(q(svg, "clasp"), { tx: 2.2, sx: 1.15 }, { stiffness: 420, damping: 13, holdMs: 110 });
    animatePart(q(svg, "bill"), { ty: -2.6, rot: -4 }, { stiffness: 360, damping: 13, holdMs: 120 });
  },
  tag(svg) {
    const t = q(svg, "tag");
    animatePart(t, { rot: 18 }, { stiffness: 320, damping: 10, holdMs: 100 });
    schedulePart(t, 110, { rot: -12 }, { stiffness: 320, damping: 10, holdMs: 100 });
  },
  gift(svg) {
    animatePart(q(svg, "lid"), { ty: -2.8, rot: -8 }, { stiffness: 420, damping: 12, holdMs: 120 });
    animatePart(q(svg, "box"), { sy: 0.92, ty: 0.8 }, { stiffness: 420, damping: 14, holdMs: 110 });
  },
  trophy(svg) {
    animatePart(q(svg, "cup"), { ty: -2.4, rot: -7, sx: 1.08, sy: 1.08 }, { stiffness: 380, damping: 11, holdMs: 140 });
    animatePart(q(svg, "base"), { ty: -0.6 }, { stiffness: 380, damping: 14, holdMs: 130 });
  },
  crown(svg) {
    animatePart(q(svg, "crown"), { ty: -2.2, sx: 1.12, sy: 1.12, rot: -4 }, { stiffness: 380, damping: 12, holdMs: 130 });
    animatePart(q(svg, "jewel"), { sx: 1.45, sy: 1.45 }, { stiffness: 460, damping: 11, holdMs: 130 });
  },
  coin(svg) {
    animatePart(q(svg, "coin"), { sx: 0.18, ty: -2.4 }, { stiffness: 360, damping: 13, holdMs: 105 });
  },
  receipt(svg) {
    animatePart(q(svg, "paper"), { ty: 2.2, sy: 1.08 }, { stiffness: 360, damping: 13, holdMs: 120 });
    animatePart(q(svg, "lines"), { tx: 1.2 }, { stiffness: 380, damping: 14, holdMs: 120 });
  },

  // === 8. TECH & CONTROLS ===
  wifi(svg) {
    animatePart(q(svg, "dot"), { sx: 1.35, sy: 1.35 }, { stiffness: 480, damping: 13, holdMs: 90 });
    schedulePart(q(svg, "arc-1"), 45, { op: 0.2, sx: 0.9, sy: 0.9 }, { stiffness: 420, damping: 14, holdMs: 95 });
    schedulePart(q(svg, "arc-2"), 95, { op: 0.2, sx: 0.92, sy: 0.92 }, { stiffness: 420, damping: 14, holdMs: 95 });
    schedulePart(q(svg, "arc-3"), 145, { op: 0.2, sx: 0.94, sy: 0.94 }, { stiffness: 420, damping: 14, holdMs: 95 });
  },
  bluetooth(svg) {
    animatePart(q(svg, "rune"), { sx: 1.22, sy: 1.22, rot: 8 }, { stiffness: 420, damping: 12, holdMs: 110 });
  },
  battery(svg) {
    animatePart(q(svg, "bar-1"), { sx: 1.15, sy: 1.2 }, { stiffness: 460, damping: 13, holdMs: 120 });
    schedulePart(q(svg, "bar-2"), 55, { sx: 1.15, sy: 1.24 }, { stiffness: 460, damping: 13, holdMs: 120 });
    animatePart(q(svg, "cap"), { tx: 0.8 }, { stiffness: 440, damping: 14, holdMs: 110 });
  },
  cpu(svg) {
    animatePart(q(svg, "die"), { sx: 1.2, sy: 1.2 }, { stiffness: 440, damping: 13, holdMs: 110 });
    animatePart(q(svg, "pins"), { sx: 1.12, sy: 1.12 }, { stiffness: 400, damping: 14, holdMs: 110 });
  },
  terminal(svg) {
    animatePart(q(svg, "prompt"), { tx: 1.8, sx: 1.12 }, { stiffness: 460, damping: 13, holdMs: 95 });
    animatePart(q(svg, "cursor"), { op: 0.15, sx: 1.2 }, { stiffness: 520, damping: 15, holdMs: 115 });
  },
  code(svg) {
    animatePart(q(svg, "left"), { tx: -2.0 }, { stiffness: 440, damping: 13, holdMs: 110 });
    animatePart(q(svg, "right"), { tx: 2.0 }, { stiffness: 440, damping: 13, holdMs: 110 });
    animatePart(q(svg, "slash"), { rot: 14, sy: 1.14 }, { stiffness: 400, damping: 13, holdMs: 110 });
  },
  database(svg) {
    animatePart(q(svg, "top"), { ty: -1.8 }, { stiffness: 400, damping: 14, holdMs: 120 });
    animatePart(q(svg, "mid"), { tx: 1.2 }, { stiffness: 400, damping: 14, holdMs: 120 });
    animatePart(q(svg, "bot"), { ty: 1.4 }, { stiffness: 400, damping: 14, holdMs: 120 });
  },
  power(svg) {
    animatePart(q(svg, "stem"), { ty: 2.0, sy: 1.15 }, { stiffness: 480, damping: 14, holdMs: 100 });
    animatePart(q(svg, "ring"), { sx: 1.1, sy: 1.1 }, { stiffness: 400, damping: 14, holdMs: 110 });
  },
  shield(svg) {
    animatePart(q(svg, "shield"), { sx: 1.14, sy: 1.14, ty: -1.0 }, { stiffness: 440, damping: 13, holdMs: 110 });
    animatePart(q(svg, "core"), { sx: 1.25, sy: 1.25 }, { stiffness: 480, damping: 12, holdMs: 110 });
  },
  key(svg) {
    animatePart(q(svg, "key"), { rot: 45, tx: 1.5 }, { stiffness: 360, damping: 13, holdMs: 130 });
  },

  // === 9. TIME & EVERYDAY ===
  clock(svg) {
    animatePart(q(svg, "minute"), { rot: 90 }, { stiffness: 280, damping: 14, holdMs: 150 });
    animatePart(q(svg, "hour"), { rot: 20 }, { stiffness: 300, damping: 15, holdMs: 150 });
  },
  alarm(svg) {
    const bellL = q(svg, "bell-l");
    const bellR = q(svg, "bell-r");
    animatePart(bellL, { ty: -1.6, rot: -16 }, { stiffness: 540, damping: 10, holdMs: 80 });
    animatePart(bellR, { ty: -1.6, rot: 16 }, { stiffness: 540, damping: 10, holdMs: 80 });
    schedulePart(q(svg, "face"), 20, { rot: 6 }, { stiffness: 560, damping: 10, holdMs: 75 });
    schedulePart(q(svg, "face"), 95, { rot: -6 }, { stiffness: 560, damping: 10, holdMs: 75 });
  },
  globe(svg) {
    animatePart(q(svg, "meridian"), { sx: 0.45 }, { stiffness: 240, damping: 13, holdMs: 150 });
    animatePart(q(svg, "equator"), { sy: 1.15 }, { stiffness: 280, damping: 14, holdMs: 150 });
  },
  lightbulb(svg) {
    animatePart(q(svg, "bulb"), { sx: 1.12, sy: 1.12, ty: -1.0 }, { stiffness: 420, damping: 12, holdMs: 120 });
    animatePart(q(svg, "rays"), { sx: 1.32, sy: 1.32, op: 0.4 }, { stiffness: 460, damping: 12, holdMs: 120 });
  },
  megaphone(svg) {
    animatePart(q(svg, "horn"), { rot: -10, tx: -1.2 }, { stiffness: 440, damping: 12, holdMs: 110 });
    animatePart(q(svg, "wave"), { tx: 2.6, sx: 1.22, sy: 1.22 }, { stiffness: 420, damping: 12, holdMs: 120 });
  },
  book(svg) {
    animatePart(q(svg, "page-l"), { ty: 0.45, sx: 0.97 }, { stiffness: 320, damping: 16, holdMs: 170 });
    animatePart(q(svg, "page-r"), { ty: 0.45, sx: 0.97 }, { stiffness: 320, damping: 16, holdMs: 170 });
    animatePart(q(svg, "leaf"), { sx: -1, ty: -1.0 }, { stiffness: 210, damping: 15, holdMs: 175 });
  },
  paperclip(svg) {
    animatePart(q(svg, "clip"), { rot: -18, ty: -1.6, sx: 1.1 }, { stiffness: 380, damping: 12, holdMs: 120 });
  },
  magnet(svg) {
    animatePart(q(svg, "magnet"), { ty: -1.8, sx: 1.1 }, { stiffness: 420, damping: 13, holdMs: 120 });
    animatePart(q(svg, "sparks"), { ty: 1.8, sx: 1.25 }, { stiffness: 460, damping: 12, holdMs: 110 });
  },
  palette(svg) {
    animatePart(q(svg, "board"), { rot: -14, sx: 1.08, sy: 1.08 }, { stiffness: 340, damping: 13, holdMs: 130 });
    animatePart(q(svg, "dot"), { sx: 1.4, sy: 1.4 }, { stiffness: 460, damping: 12, holdMs: 120 });
  },
  dice(svg) {
    animatePart(q(svg, "cube"), { rot: 90, ty: -2.4, sx: 1.1, sy: 1.1 }, { stiffness: 320, damping: 12, holdMs: 130 });
  },

  // === 10. TRAVEL, MOTION & PLAY ===
  plane(svg) {
    animatePart(q(svg, "jet"), { tx: 2.8, ty: -2.4, rot: -8 }, { stiffness: 300, damping: 13, holdMs: 150 });
  },
  car(svg) {
    animatePart(q(svg, "body"), { tx: 1.8, ty: -0.85, rot: -2.2 }, { stiffness: 320, damping: 12, holdMs: 185 });
    animatePart(q(svg, "wheel-l"), { tx: 1.8, rot: 360 }, { stiffness: 185, damping: 14, holdMs: 220 });
    animatePart(q(svg, "wheel-r"), { tx: 1.8, rot: 360 }, { stiffness: 185, damping: 14, holdMs: 220 });
    animatePart(q(svg, "beam"), { tx: 2.5, sx: 1.35, op: 0.35 }, { stiffness: 440, damping: 13, holdMs: 140 });
  },
  train(svg) {
    animatePart(q(svg, "loco"), { tx: 2.0, ty: -0.7, rot: -1.8 }, { stiffness: 300, damping: 13, holdMs: 185 });
    animatePart(q(svg, "wheel-l"), { tx: 2.0, rot: 360 }, { stiffness: 185, damping: 14, holdMs: 220 });
    animatePart(q(svg, "wheel-r"), { tx: 2.0, rot: 360 }, { stiffness: 185, damping: 14, holdMs: 220 });
    animatePart(q(svg, "puff"), { tx: -2.2, ty: -2.5, sx: 1.35, sy: 1.35, op: 0.25 }, { stiffness: 230, damping: 13, holdMs: 180 });
  },
  ship(svg) {
    const s = q(svg, "hull");
    const w1 = q(svg, "wave-1");
    const w2 = q(svg, "wave-2");
    animatePart(s, { rot: -6.5, ty: -1.4, tx: 0.9 }, { stiffness: 220, damping: 11, holdMs: 125 });
    schedulePart(s, 135, { rot: 5.5, ty: 0.6, tx: 1.8 }, { stiffness: 220, damping: 11, holdMs: 125 });
    animatePart(q(svg, "puff"), { tx: -2.2, ty: -2.0, sx: 1.3, sy: 1.3, op: 0.25 }, { stiffness: 220, damping: 13, holdMs: 170 });
    animatePart(w1, { tx: -3.2, ty: -0.45 }, { stiffness: 210, damping: 13, holdMs: 130 });
    schedulePart(w1, 135, { tx: 1.8, ty: 0.3 }, { stiffness: 210, damping: 13, holdMs: 130 });
    animatePart(w2, { tx: 2.8, ty: 0.4 }, { stiffness: 210, damping: 13, holdMs: 130 });
    schedulePart(w2, 135, { tx: -2.0, ty: -0.35 }, { stiffness: 210, damping: 13, holdMs: 130 });
  },
  gamepad(svg) {
    animatePart(q(svg, "dpad"), { tx: -1.0, rot: -8 }, { stiffness: 460, damping: 13, holdMs: 100 });
    animatePart(q(svg, "btn-a"), { sx: 1.4, sy: 1.4 }, { stiffness: 500, damping: 12, holdMs: 95 });
    schedulePart(q(svg, "btn-b"), 55, { sx: 1.4, sy: 1.4 }, { stiffness: 500, damping: 12, holdMs: 95 });
  },
  target(svg) {
    animatePart(q(svg, "outer"), { sx: 0.86, sy: 0.86 }, { stiffness: 440, damping: 14, holdMs: 100 });
    animatePart(q(svg, "bull"), { sx: 1.45, sy: 1.45 }, { stiffness: 500, damping: 12, holdMs: 110 });
  },
  flag(svg) {
    const c = q(svg, "cloth");
    animatePart(c, { sx: 1.16, rot: -8 }, { stiffness: 400, damping: 11, holdMs: 100 });
    schedulePart(c, 105, { sx: 0.92, rot: 7 }, { stiffness: 400, damping: 11, holdMs: 100 });
  },
  sparkles(svg) {
    animatePart(q(svg, "main"), { rot: 45, sx: 1.22, sy: 1.22 }, { stiffness: 360, damping: 12, holdMs: 120 });
    schedulePart(q(svg, "mini"), 55, { rot: -45, sx: 1.45, sy: 1.45 }, { stiffness: 420, damping: 11, holdMs: 110 });
  },
  puzzle(svg) {
    animatePart(q(svg, "piece"), { tx: 1.6, ty: -1.6, rot: -6 }, { stiffness: 420, damping: 12, holdMs: 110 });
  },
  award(svg) {
    const m = q(svg, "medal");
    animatePart(m, { rot: -14, ty: -1.2 }, { stiffness: 360, damping: 11, holdMs: 110 });
    schedulePart(m, 115, { rot: 10 }, { stiffness: 360, damping: 11, holdMs: 100 });
    animatePart(q(svg, "ribbons"), { sy: 1.14 }, { stiffness: 360, damping: 13, holdMs: 120 });
  },

  // === 11. STUDIO & SOUND ===
  guitar(svg) {
    const s = q(svg, "strings");
    animatePart(q(svg, "body"), { rot: -6, ty: -0.8 }, { stiffness: 320, damping: 13, holdMs: 140 });
    animatePart(q(svg, "pick"), { tx: -1.8, ty: 1.8, rot: -20 }, { stiffness: 500, damping: 13, holdMs: 110 });
    animatePart(s, { tx: 0.65, ty: -0.4, sx: 1.18 }, { stiffness: 620, damping: 10, holdMs: 70 });
    schedulePart(s, 75, { tx: -0.65, ty: 0.4, sx: 0.9 }, { stiffness: 620, damping: 10, holdMs: 70 });
  },
  drum(svg) {
    const sl = q(svg, "stick-l");
    const sr = q(svg, "stick-r");
    const h = q(svg, "head");
    animatePart(sl, { rot: 20, ty: 0.9 }, { stiffness: 520, damping: 13, holdMs: 70 });
    animatePart(h, { sy: 0.85, ty: 0.9 }, { stiffness: 500, damping: 13, holdMs: 70 });
    schedulePart(sr, 75, { rot: -20, ty: 0.9 }, { stiffness: 520, damping: 13, holdMs: 75 });
    schedulePart(h, 75, { sy: 0.88, ty: 0.7 }, { stiffness: 500, damping: 13, holdMs: 75 });
    animatePart(q(svg, "shell"), { ty: 0.6 }, { stiffness: 380, damping: 15, holdMs: 120 });
  },
  piano(svg) {
    animatePart(q(svg, "key-1"), { ty: 1.6, sy: 0.94 }, { stiffness: 520, damping: 14, holdMs: 80 });
    schedulePart(q(svg, "key-2"), 55, { ty: 1.6, sy: 0.94 }, { stiffness: 520, damping: 14, holdMs: 80 });
    schedulePart(q(svg, "key-3"), 110, { ty: 1.6, sy: 0.94 }, { stiffness: 520, damping: 14, holdMs: 85 });
  },
  trumpet(svg) {
    animatePart(q(svg, "horn"), { rot: -9, ty: -0.8 }, { stiffness: 360, damping: 13, holdMs: 140 });
    animatePart(q(svg, "valves"), { ty: 1.3 }, { stiffness: 500, damping: 14, holdMs: 110 });
    animatePart(q(svg, "blast"), { tx: 2.2, sx: 1.25, sy: 1.25 }, { stiffness: 440, damping: 12, holdMs: 130 });
  },
  metronome(svg) {
    const p = q(svg, "pendulum");
    animatePart(p, { rot: -32 }, { stiffness: 380, damping: 12, holdMs: 85 });
    schedulePart(p, 115, { rot: 14 }, { stiffness: 380, damping: 12, holdMs: 95 });
  },
  equalizer(svg) {
    animatePart(q(svg, "bar-1"), { sy: 1.45 }, { stiffness: 460, damping: 12, holdMs: 95 });
    schedulePart(q(svg, "bar-2"), 35, { sy: 0.65 }, { stiffness: 460, damping: 12, holdMs: 95 });
    schedulePart(q(svg, "bar-3"), 70, { sy: 1.38 }, { stiffness: 460, damping: 12, holdMs: 95 });
    schedulePart(q(svg, "bar-4"), 105, { sy: 0.72 }, { stiffness: 460, damping: 12, holdMs: 95 });
  },
  cassette(svg) {
    animatePart(q(svg, "shell"), { ty: 0.6, rot: -1.5 }, { stiffness: 380, damping: 15, holdMs: 120 });
    animatePart(q(svg, "reel-l"), { rot: 360 }, { stiffness: 170, damping: 14, holdMs: 260 });
    animatePart(q(svg, "reel-r"), { rot: 360 }, { stiffness: 170, damping: 14, holdMs: 260 });
  },
  radio(svg) {
    animatePart(q(svg, "antenna"), { rot: -10, sy: 1.12 }, { stiffness: 360, damping: 12, holdMs: 130 });
    animatePart(q(svg, "dial"), { rot: 75 }, { stiffness: 280, damping: 14, holdMs: 160 });
    animatePart(q(svg, "speaker"), { sx: 1.2, sy: 1.2 }, { stiffness: 460, damping: 12, holdMs: 110 });
  },
  projector(svg) {
    animatePart(q(svg, "reel-l"), { rot: 360 }, { stiffness: 175, damping: 14, holdMs: 250 });
    animatePart(q(svg, "reel-r"), { rot: 360 }, { stiffness: 175, damping: 14, holdMs: 250 });
    animatePart(q(svg, "beam"), { sx: 1.24, sy: 1.16, op: 0.45 }, { stiffness: 420, damping: 13, holdMs: 140 });
  },
  clapperboard(svg) {
    const c = q(svg, "clap");
    animatePart(c, { rot: -26 }, { stiffness: 420, damping: 14, holdMs: 65 });
    schedulePart(c, 75, { rot: 4 }, { stiffness: 560, damping: 14, holdMs: 85 });
    schedulePart(q(svg, "slate"), 95, { ty: 0.9 }, { stiffness: 480, damping: 14, holdMs: 80 });
  },

  // === 12. HOME & LAB ===
  window(svg) {
    animatePart(q(svg, "pane-l"), { sx: 0.42, rot: -4 }, { stiffness: 260, damping: 14, holdMs: 210 });
    animatePart(q(svg, "pane-r"), { sx: 0.42, rot: 4 }, { stiffness: 260, damping: 14, holdMs: 210 });
    const b = q(svg, "breeze");
    streamStroke(b, 40, 460, 0.42);
    schedulePart(b, 40, { tx: 1.4, ty: -0.3 }, { stiffness: 170, damping: 13, holdMs: 200 });
  },
  door(svg) {
    const k = q(svg, "knob");
    const p = q(svg, "panel");
    animatePart(k, { rot: -36 }, { stiffness: 480, damping: 14, holdMs: 90 });
    schedulePart(p, 45, { sx: 0.52 }, { stiffness: 250, damping: 14, holdMs: 200 });
  },
  toaster(svg) {
    animatePart(q(svg, "lever"), { ty: 2.2 }, { stiffness: 440, damping: 14, holdMs: 70 });
    schedulePart(q(svg, "toast"), 70, { ty: -3.6 }, { stiffness: 390, damping: 10, holdMs: 140 });
    schedulePart(q(svg, "body"), 70, { ty: 0.8 }, { stiffness: 420, damping: 14, holdMs: 100 });
  },
  blender(svg) {
    animatePart(q(svg, "blade"), { rot: 540 }, { stiffness: 145, damping: 13, holdMs: 280 });
    animatePart(q(svg, "jar"), { ty: -0.7, rot: -2.5 }, { stiffness: 480, damping: 11, holdMs: 140 });
    animatePart(q(svg, "base"), { ty: 0.5 }, { stiffness: 460, damping: 14, holdMs: 120 });
  },
  washer(svg) {
    animatePart(q(svg, "drum"), { rot: 360 }, { stiffness: 170, damping: 14, holdMs: 260 });
    animatePart(q(svg, "cabinet"), { rot: -2.5, ty: -0.5 }, { stiffness: 360, damping: 13, holdMs: 140 });
  },
  microscope(svg) {
    animatePart(q(svg, "tube"), { ty: 2.0, rot: -3 }, { stiffness: 320, damping: 14, holdMs: 160 });
    schedulePart(q(svg, "slide"), 55, { sx: 1.18, op: 0.5 }, { stiffness: 460, damping: 13, holdMs: 120 });
  },
  telescope(svg) {
    animatePart(q(svg, "barrel"), { rot: -16, ty: -0.8 }, { stiffness: 290, damping: 13, holdMs: 160 });
    schedulePart(q(svg, "star"), 50, { sx: 1.45, sy: 1.45, rot: 45 }, { stiffness: 420, damping: 11, holdMs: 130 });
  },
  flask(svg) {
    const f = q(svg, "flask");
    animatePart(f, { rot: -13 }, { stiffness: 300, damping: 12, holdMs: 100 });
    schedulePart(f, 105, { rot: 11 }, { stiffness: 300, damping: 12, holdMs: 100 });
    animatePart(q(svg, "bubble-1"), { ty: -3.2, sx: 1.25, sy: 1.25, op: 0.35 }, { stiffness: 260, damping: 13, holdMs: 150 });
    schedulePart(q(svg, "bubble-2"), 55, { ty: -3.4, sx: 1.35, sy: 1.35, op: 0.3 }, { stiffness: 260, damping: 13, holdMs: 160 });
  },
  campfire(svg) {
    const f = q(svg, "flame");
    const e = q(svg, "ember");
    animatePart(f, { sy: 1.22, sx: 0.92, rot: -7 }, { stiffness: 440, damping: 11, holdMs: 85 });
    schedulePart(f, 95, { sy: 1.12, sx: 1.08, rot: 8 }, { stiffness: 440, damping: 11, holdMs: 90 });
    animatePart(e, { sy: 1.32, rot: 6 }, { stiffness: 500, damping: 10, holdMs: 80 });
    animatePart(q(svg, "spark"), { ty: -3.2, tx: 1.0, op: 0.25 }, { stiffness: 240, damping: 12, holdMs: 160 });
  },
  parachute(svg) {
    animatePart(q(svg, "chute"), { ty: -1.8, sx: 1.12, sy: 0.9 }, { stiffness: 220, damping: 12, holdMs: 160 });
    const c = q(svg, "cargo");
    animatePart(c, { rot: -15, ty: -1.4 }, { stiffness: 220, damping: 11, holdMs: 115 });
    schedulePart(c, 120, { rot: 14, ty: -0.6 }, { stiffness: 220, damping: 11, holdMs: 115 });
  },

  // === 13. CORE UI II ===
  menu(svg) {
    animatePart(q(svg, "bar-1"), { tx: 2.0, sx: 0.88 }, { stiffness: 460, damping: 13, holdMs: 100 });
    schedulePart(q(svg, "bar-2"), 45, { tx: -1.6, sx: 1.08 }, { stiffness: 460, damping: 13, holdMs: 100 });
    schedulePart(q(svg, "bar-3"), 90, { tx: 2.2, sx: 0.85 }, { stiffness: 460, damping: 13, holdMs: 100 });
  },
  close(svg) {
    animatePart(q(svg, "arm-1"), { rot: 90, sx: 1.14, sy: 1.14 }, { stiffness: 440, damping: 13, holdMs: 110 });
    animatePart(q(svg, "arm-2"), { rot: 90, sx: 1.14, sy: 1.14 }, { stiffness: 440, damping: 13, holdMs: 110 });
  },
  filter(svg) {
    animatePart(q(svg, "funnel"), { ty: -1.1, sx: 1.08, sy: 0.94 }, { stiffness: 420, damping: 13, holdMs: 110 });
    schedulePart(q(svg, "drop"), 55, { ty: 3.0, sy: 1.2 }, { stiffness: 420, damping: 12, holdMs: 110 });
  },
  sort(svg) {
    animatePart(q(svg, "up"), { ty: -2.4 }, { stiffness: 440, damping: 13, holdMs: 110 });
    animatePart(q(svg, "down"), { ty: 2.4 }, { stiffness: 440, damping: 13, holdMs: 110 });
  },
  refresh(svg) {
    animatePart(q(svg, "arrows"), { rot: 360, sx: 1.08, sy: 1.08 }, { stiffness: 200, damping: 14, holdMs: 220 });
  },
  share(svg) {
    animatePart(q(svg, "hub"), { sx: 1.24, sy: 1.24 }, { stiffness: 480, damping: 12, holdMs: 110 });
    schedulePart(q(svg, "node-top"), 40, { tx: 1.8, ty: -1.6, sx: 1.2, sy: 1.2 }, { stiffness: 420, damping: 12, holdMs: 115 });
    schedulePart(q(svg, "node-bot"), 80, { tx: 1.8, ty: 1.6, sx: 1.2, sy: 1.2 }, { stiffness: 420, damping: 12, holdMs: 115 });
  },
  copy(svg) {
    animatePart(q(svg, "back"), { tx: -1.4, ty: -1.4 }, { stiffness: 420, damping: 13, holdMs: 120 });
    animatePart(q(svg, "front"), { tx: 1.6, ty: 1.6, sx: 1.06, sy: 1.06 }, { stiffness: 420, damping: 13, holdMs: 120 });
  },
  layers(svg) {
    animatePart(q(svg, "top"), { ty: -2.5, sx: 1.08 }, { stiffness: 420, damping: 13, holdMs: 120 });
    schedulePart(q(svg, "mid"), 45, { ty: -0.6, sx: 1.04 }, { stiffness: 420, damping: 13, holdMs: 120 });
    schedulePart(q(svg, "bot"), 90, { ty: 1.8 }, { stiffness: 420, damping: 13, holdMs: 120 });
  },
  grid(svg) {
    animatePart(q(svg, "tl"), { tx: -1.2, ty: -1.2, sx: 1.12, sy: 1.12 }, { stiffness: 460, damping: 13, holdMs: 100 });
    schedulePart(q(svg, "tr"), 35, { tx: 1.2, ty: -1.2, sx: 1.12, sy: 1.12 }, { stiffness: 460, damping: 13, holdMs: 100 });
    schedulePart(q(svg, "br"), 70, { tx: 1.2, ty: 1.2, sx: 1.12, sy: 1.12 }, { stiffness: 460, damping: 13, holdMs: 100 });
    schedulePart(q(svg, "bl"), 105, { tx: -1.2, ty: 1.2, sx: 1.12, sy: 1.12 }, { stiffness: 460, damping: 13, holdMs: 100 });
  },
  dashboard(svg) {
    const n = q(svg, "needle");
    animatePart(n, { rot: 72 }, { stiffness: 260, damping: 10, holdMs: 130 });
    schedulePart(n, 140, { rot: 46 }, { stiffness: 320, damping: 13, holdMs: 100 });
    animatePart(q(svg, "arc"), { sx: 1.06, sy: 1.06 }, { stiffness: 360, damping: 14, holdMs: 140 });
  },

  // === 14. COMMS & FILES II ===
  inbox(svg) {
    animatePart(q(svg, "card"), { ty: 2.6, sx: 0.92 }, { stiffness: 400, damping: 13, holdMs: 120 });
    schedulePart(q(svg, "tray"), 55, { ty: 0.9, sx: 1.06 }, { stiffness: 420, damping: 14, holdMs: 110 });
  },
  archive(svg) {
    animatePart(q(svg, "lid"), { ty: -2.2, rot: -8 }, { stiffness: 420, damping: 13, holdMs: 120 });
    animatePart(q(svg, "box"), { ty: 0.8, sy: 0.94 }, { stiffness: 420, damping: 14, holdMs: 110 });
  },
  reply(svg) {
    animatePart(q(svg, "arrow"), { tx: -2.6, rot: -10, sx: 1.1 }, { stiffness: 420, damping: 13, holdMs: 120 });
  },
  forward(svg) {
    animatePart(q(svg, "chev-1"), { tx: 2.2 }, { stiffness: 460, damping: 13, holdMs: 105 });
    schedulePart(q(svg, "chev-2"), 50, { tx: 2.8, sx: 1.1 }, { stiffness: 460, damping: 13, holdMs: 105 });
  },
  voicemail(svg) {
    animatePart(q(svg, "reel-l"), { rot: 360 }, { stiffness: 170, damping: 14, holdMs: 250 });
    animatePart(q(svg, "reel-r"), { rot: 360 }, { stiffness: 170, damping: 14, holdMs: 250 });
    animatePart(q(svg, "tape"), { sy: 1.15, ty: -0.4 }, { stiffness: 380, damping: 14, holdMs: 150 });
  },
  broadcast(svg) {
    animatePart(q(svg, "tower"), { ty: -0.9, sx: 1.08 }, { stiffness: 440, damping: 13, holdMs: 110 });
    schedulePart(q(svg, "arc-1"), 40, { sx: 1.18, sy: 1.18, op: 0.3 }, { stiffness: 380, damping: 13, holdMs: 115 });
    schedulePart(q(svg, "arc-2"), 90, { sx: 1.24, sy: 1.24, op: 0.25 }, { stiffness: 380, damping: 13, holdMs: 120 });
  },
  stamp(svg) {
    const h = q(svg, "handle");
    animatePart(h, { ty: -2.0 }, { stiffness: 440, damping: 14, holdMs: 55 });
    schedulePart(h, 65, { ty: 2.2, sy: 0.9 }, { stiffness: 560, damping: 14, holdMs: 95 });
    schedulePart(q(svg, "pad"), 75, { sx: 1.14, sy: 0.85, ty: 0.6 }, { stiffness: 520, damping: 14, holdMs: 95 });
  },
  newspaper(svg) {
    animatePart(q(svg, "page"), { rot: -7, ty: -1.4 }, { stiffness: 360, damping: 13, holdMs: 120 });
    animatePart(q(svg, "lines"), { tx: 1.4, sx: 1.08 }, { stiffness: 380, damping: 14, holdMs: 120 });
  },
  notebook(svg) {
    animatePart(q(svg, "spiral"), { ty: -1.4, sx: 1.12 }, { stiffness: 420, damping: 13, holdMs: 115 });
    animatePart(q(svg, "cover"), { rot: -6, tx: 1.0 }, { stiffness: 360, damping: 14, holdMs: 120 });
  },
  signature(svg) {
    const nib = q(svg, "nib");
    const stroke = q(svg, "stroke");
    streamStroke(stroke, 20, 480, 0.42);
    animatePart(nib, { tx: 2.2, ty: -1.0, rot: -10 }, { stiffness: 440, damping: 13, holdMs: 80 });
    schedulePart(nib, 95, { tx: 3.4, ty: 0.4, rot: 6 }, { stiffness: 440, damping: 13, holdMs: 90 });
  },

  // === 15. MEDIA & AUDIO II ===
  stop(svg) {
    animatePart(q(svg, "btn"), { sx: 0.84, sy: 0.84 }, { stiffness: 540, damping: 15, holdMs: 95 });
  },
  rewind(svg) {
    animatePart(q(svg, "tri-r"), { tx: -2.0, sx: 1.1 }, { stiffness: 480, damping: 13, holdMs: 95 });
    schedulePart(q(svg, "tri-l"), 40, { tx: -2.6, sx: 1.12 }, { stiffness: 480, damping: 13, holdMs: 95 });
  },
  "fast-forward"(svg) {
    animatePart(q(svg, "tri-l"), { tx: 2.0, sx: 1.1 }, { stiffness: 480, damping: 13, holdMs: 95 });
    schedulePart(q(svg, "tri-r"), 40, { tx: 2.6, sx: 1.12 }, { stiffness: 480, damping: 13, holdMs: 95 });
  },
  shuffle(svg) {
    const p1 = q(svg, "path-1");
    const p2 = q(svg, "path-2");
    streamStroke(p1, 0, 440, 0.4);
    streamStroke(p2, 45, 440, 0.4);
    animatePart(p1, { tx: 1.6, ty: -1.1 }, { stiffness: 380, damping: 13, holdMs: 120 });
    schedulePart(p2, 45, { tx: 1.6, ty: 1.1 }, { stiffness: 380, damping: 13, holdMs: 120 });
  },
  repeat(svg) {
    animatePart(q(svg, "loop"), { rot: 180, sx: 1.1, sy: 1.1 }, { stiffness: 240, damping: 14, holdMs: 180 });
  },
  film(svg) {
    animatePart(q(svg, "strip"), { tx: -2.2 }, { stiffness: 360, damping: 14, holdMs: 130 });
    animatePart(q(svg, "frame"), { sx: 1.15, sy: 1.15 }, { stiffness: 440, damping: 13, holdMs: 120 });
  },
  tv(svg) {
    animatePart(q(svg, "ant-l"), { rot: -16 }, { stiffness: 400, damping: 11, holdMs: 120 });
    animatePart(q(svg, "ant-r"), { rot: 16 }, { stiffness: 400, damping: 11, holdMs: 120 });
    animatePart(q(svg, "screen"), { sx: 1.08, sy: 0.92 }, { stiffness: 480, damping: 14, holdMs: 110 });
  },
  speaker(svg) {
    const cone = q(svg, "cone");
    animatePart(cone, { sx: 1.28, sy: 1.28 }, { stiffness: 560, damping: 11, holdMs: 75 });
    schedulePart(cone, 85, { sx: 1.16, sy: 1.16 }, { stiffness: 560, damping: 11, holdMs: 80 });
    animatePart(q(svg, "tweeter"), { sx: 1.24, sy: 1.24 }, { stiffness: 520, damping: 12, holdMs: 100 });
  },
  record(svg) {
    animatePart(q(svg, "core"), { sx: 1.38, sy: 1.38, op: 0.4 }, { stiffness: 460, damping: 12, holdMs: 140 });
    animatePart(q(svg, "ring"), { sx: 1.12, sy: 1.12 }, { stiffness: 360, damping: 13, holdMs: 140 });
  },
  captions(svg) {
    animatePart(q(svg, "frame"), { ty: -0.9, sx: 1.06 }, { stiffness: 400, damping: 14, holdMs: 115 });
    animatePart(q(svg, "lines"), { tx: 1.5, sx: 1.12 }, { stiffness: 440, damping: 13, holdMs: 115 });
  },

  // === 16. KINETIC TOOLS II ===
  saw(svg) {
    const s = q(svg, "saw");
    animatePart(s, { tx: 2.6, ty: 1.4, rot: 4 }, { stiffness: 520, damping: 14, holdMs: 70 });
    schedulePart(s, 80, { tx: -2.2, ty: -1.1, rot: -4 }, { stiffness: 520, damping: 14, holdMs: 75 });
  },
  drill(svg) {
    animatePart(q(svg, "bit"), { tx: 2.4, sy: 0.85 }, { stiffness: 620, damping: 10, holdMs: 140 });
    animatePart(q(svg, "body"), { tx: -0.9, rot: -3 }, { stiffness: 540, damping: 11, holdMs: 120 });
  },
  screwdriver(svg) {
    const d = q(svg, "driver");
    animatePart(d, { rot: 42, tx: 0.8, ty: 0.8 }, { stiffness: 360, damping: 13, holdMs: 90 });
    schedulePart(d, 100, { rot: -24, tx: 0.4, ty: 0.4 }, { stiffness: 360, damping: 13, holdMs: 90 });
  },
  axe(svg) {
    const a = q(svg, "axe");
    animatePart(a, { rot: 20 }, { stiffness: 380, damping: 14, holdMs: 65 });
    schedulePart(a, 75, { rot: -44 }, { stiffness: 540, damping: 13, holdMs: 90 });
    schedulePart(q(svg, "chip"), 95, { tx: 2.4, ty: -2.4, rot: 38, op: 0.35 }, { stiffness: 340, damping: 13, holdMs: 130 });
  },
  shovel(svg) {
    const sp = q(svg, "spade");
    animatePart(sp, { tx: -1.4, ty: 2.2, rot: -12 }, { stiffness: 400, damping: 13, holdMs: 85 });
    schedulePart(sp, 95, { tx: 1.8, ty: -2.0, rot: 16 }, { stiffness: 380, damping: 13, holdMs: 105 });
  },
  ruler(svg) {
    animatePart(q(svg, "slider"), { tx: 3.0 }, { stiffness: 360, damping: 13, holdMs: 130 });
    animatePart(q(svg, "scale"), { ty: 0.6 }, { stiffness: 380, damping: 15, holdMs: 110 });
  },
  eraser(svg) {
    const b = q(svg, "body");
    animatePart(b, { tx: -2.0, ty: 0.9, rot: -10 }, { stiffness: 460, damping: 14, holdMs: 75 });
    schedulePart(b, 85, { tx: 2.0, ty: -0.6, rot: 8 }, { stiffness: 460, damping: 14, holdMs: 75 });
    schedulePart(q(svg, "dust"), 70, { tx: 2.2, ty: -1.8, op: 0.3 }, { stiffness: 300, damping: 13, holdMs: 140 });
  },
  pipette(svg) {
    animatePart(q(svg, "bulb"), { sx: 0.82, sy: 0.82, ty: 0.8 }, { stiffness: 480, damping: 14, holdMs: 90 });
    schedulePart(q(svg, "drop"), 55, { ty: 3.0, sx: 1.2, sy: 1.2, op: 0.35 }, { stiffness: 380, damping: 12, holdMs: 120 });
  },
  crop(svg) {
    animatePart(q(svg, "corner-tl"), { tx: 1.5, ty: 1.5 }, { stiffness: 440, damping: 14, holdMs: 115 });
    animatePart(q(svg, "corner-br"), { tx: -1.5, ty: -1.5 }, { stiffness: 440, damping: 14, holdMs: 115 });
  },
  wand(svg) {
    animatePart(q(svg, "stick"), { rot: -24, ty: -1.2 }, { stiffness: 360, damping: 12, holdMs: 120 });
    schedulePart(q(svg, "spark-1"), 45, { rot: 45, sx: 1.45, sy: 1.45 }, { stiffness: 440, damping: 11, holdMs: 120 });
    schedulePart(q(svg, "spark-2"), 90, { rot: -45, sx: 1.45, sy: 1.45 }, { stiffness: 440, damping: 11, holdMs: 120 });
  },

  // === 17. WORLD & ENERGY II ===
  satellite(svg) {
    animatePart(q(svg, "wings"), { rot: -10, ty: -0.8 }, { stiffness: 260, damping: 13, holdMs: 150 });
    animatePart(q(svg, "dish"), { rot: 14 }, { stiffness: 320, damping: 13, holdMs: 140 });
    schedulePart(q(svg, "beam"), 50, { sx: 1.28, sy: 1.28, op: 0.3 }, { stiffness: 420, damping: 12, holdMs: 130 });
  },
  atom(svg) {
    animatePart(q(svg, "core"), { sx: 1.38, sy: 1.38 }, { stiffness: 460, damping: 12, holdMs: 130 });
    animatePart(q(svg, "orbit-1"), { rot: 180 }, { stiffness: 190, damping: 13, holdMs: 220 });
    animatePart(q(svg, "orbit-2"), { rot: -180 }, { stiffness: 190, damping: 13, holdMs: 220 });
  },
  planet(svg) {
    animatePart(q(svg, "ring"), { rot: -18, sx: 1.12 }, { stiffness: 280, damping: 13, holdMs: 160 });
    animatePart(q(svg, "globe"), { rot: 12, ty: -0.7 }, { stiffness: 300, damping: 14, holdMs: 150 });
  },
  ufo(svg) {
    animatePart(q(svg, "saucer"), { ty: -2.0, rot: -7 }, { stiffness: 320, damping: 12, holdMs: 140 });
    schedulePart(q(svg, "beam"), 40, { sy: 1.32, sx: 1.18, op: 0.35 }, { stiffness: 360, damping: 12, holdMs: 150 });
  },
  volcano(svg) {
    animatePart(q(svg, "cone"), { ty: 0.7, sx: 1.04 }, { stiffness: 460, damping: 13, holdMs: 100 });
    animatePart(q(svg, "plume"), { ty: -2.8, sx: 1.26, sy: 1.26 }, { stiffness: 360, damping: 11, holdMs: 140 });
    schedulePart(q(svg, "spark"), 50, { ty: -3.2, tx: 1.4, sx: 1.35, op: 0.3 }, { stiffness: 340, damping: 11, holdMs: 140 });
  },
  plug(svg) {
    animatePart(q(svg, "prongs"), { ty: -2.2 }, { stiffness: 480, damping: 14, holdMs: 100 });
    animatePart(q(svg, "body"), { ty: -1.4 }, { stiffness: 440, damping: 14, holdMs: 105 });
  },
  windmill(svg) {
    animatePart(q(svg, "blades"), { rot: 360 }, { stiffness: 150, damping: 13, holdMs: 280 });
    animatePart(q(svg, "tower"), { ty: 0.4 }, { stiffness: 360, damping: 15, holdMs: 140 });
  },
  solar(svg) {
    animatePart(q(svg, "panel"), { rot: -8, ty: 0.4 }, { stiffness: 340, damping: 14, holdMs: 130 });
    animatePart(q(svg, "rays"), { rot: 40, sx: 1.24, sy: 1.24 }, { stiffness: 320, damping: 12, holdMs: 140 });
  },
  radar(svg) {
    animatePart(q(svg, "sweep"), { rot: 270 }, { stiffness: 180, damping: 14, holdMs: 240 });
    schedulePart(q(svg, "blip"), 95, { sx: 1.65, sy: 1.65, op: 0.35 }, { stiffness: 480, damping: 11, holdMs: 130 });
  },
  dna(svg) {
    animatePart(q(svg, "strand-1"), { sx: 0.55, ty: -0.9 }, { stiffness: 280, damping: 13, holdMs: 150 });
    animatePart(q(svg, "strand-2"), { sx: 0.55, ty: 0.9 }, { stiffness: 280, damping: 13, holdMs: 150 });
  },

  // === 18. WEATHER & NATURE II ===
  tornado(svg) {
    animatePart(q(svg, "ring-1"), { tx: -2.0, sx: 1.1 }, { stiffness: 420, damping: 11, holdMs: 95 });
    schedulePart(q(svg, "ring-2"), 45, { tx: 2.2, sx: 1.12 }, { stiffness: 420, damping: 11, holdMs: 95 });
    schedulePart(q(svg, "ring-3"), 90, { tx: -1.8, sx: 1.14 }, { stiffness: 420, damping: 11, holdMs: 95 });
    schedulePart(q(svg, "tip"), 125, { tx: 1.6, rot: 12 }, { stiffness: 420, damping: 11, holdMs: 95 });
  },
  rainbow(svg) {
    const a1 = q(svg, "arc-1");
    const a2 = q(svg, "arc-2");
    const a3 = q(svg, "arc-3");
    streamStroke(a1, 0, 480, 0.42);
    streamStroke(a2, 45, 480, 0.42);
    streamStroke(a3, 90, 480, 0.42);
    animatePart(a1, { ty: -1.2, sx: 1.06 }, { stiffness: 320, damping: 13, holdMs: 140 });
    schedulePart(a2, 45, { ty: -1.0, sx: 1.06 }, { stiffness: 320, damping: 13, holdMs: 140 });
    schedulePart(a3, 90, { ty: -0.8, sx: 1.06 }, { stiffness: 320, damping: 13, holdMs: 140 });
  },
  sunrise(svg) {
    animatePart(q(svg, "sun"), { ty: -2.8, sx: 1.16, sy: 1.16 }, { stiffness: 300, damping: 13, holdMs: 160 });
    animatePart(q(svg, "rays"), { ty: -2.4, rot: 25, sx: 1.18, sy: 1.18 }, { stiffness: 300, damping: 13, holdMs: 160 });
    animatePart(q(svg, "horizon"), { sx: 1.08 }, { stiffness: 340, damping: 14, holdMs: 140 });
  },
  sunset(svg) {
    animatePart(q(svg, "sun"), { ty: 2.4, sx: 0.92, sy: 0.92 }, { stiffness: 300, damping: 14, holdMs: 150 });
    animatePart(q(svg, "arrow"), { ty: 2.2 }, { stiffness: 400, damping: 13, holdMs: 130 });
    animatePart(q(svg, "horizon"), { sx: 1.08 }, { stiffness: 340, damping: 14, holdMs: 140 });
  },
  waves(svg) {
    const c1 = q(svg, "crest-1");
    const c2 = q(svg, "crest-2");
    streamStroke(c1, 0, 500, 0.4);
    streamStroke(c2, 60, 520, 0.4);
    animatePart(c1, { tx: 2.0, ty: -0.7 }, { stiffness: 220, damping: 13, holdMs: 180 });
    schedulePart(c2, 60, { tx: -2.0, ty: 0.7 }, { stiffness: 220, damping: 13, holdMs: 180 });
  },
  tree(svg) {
    const c = q(svg, "canopy");
    animatePart(c, { rot: -9, sx: 1.08, sy: 1.06 }, { stiffness: 320, damping: 11, holdMs: 105 });
    schedulePart(c, 110, { rot: 7 }, { stiffness: 320, damping: 11, holdMs: 105 });
    animatePart(q(svg, "trunk"), { sy: 0.96, ty: 0.4 }, { stiffness: 360, damping: 14, holdMs: 120 });
  },
  flower(svg) {
    animatePart(q(svg, "petals"), { rot: 45, sx: 1.16, sy: 1.16 }, { stiffness: 300, damping: 12, holdMs: 150 });
    animatePart(q(svg, "center"), { sx: 1.28, sy: 1.28 }, { stiffness: 420, damping: 12, holdMs: 140 });
  },
  cactus(svg) {
    animatePart(q(svg, "body"), { rot: -4, sy: 1.06 }, { stiffness: 360, damping: 13, holdMs: 120 });
    animatePart(q(svg, "bloom"), { ty: -1.8, sx: 1.45, sy: 1.45, rot: 25 }, { stiffness: 440, damping: 11, holdMs: 130 });
  },
  sprout(svg) {
    animatePart(q(svg, "stem"), { sy: 1.16, ty: -1.2 }, { stiffness: 360, damping: 13, holdMs: 140 });
    schedulePart(q(svg, "leaf-l"), 45, { rot: -18, sx: 1.18, sy: 1.18 }, { stiffness: 380, damping: 12, holdMs: 130 });
    schedulePart(q(svg, "leaf-r"), 45, { rot: 18, sx: 1.18, sy: 1.18 }, { stiffness: 380, damping: 12, holdMs: 130 });
  },
  feather(svg) {
    const p = q(svg, "plume");
    animatePart(p, { rot: -16, tx: -1.4, ty: -1.2 }, { stiffness: 260, damping: 11, holdMs: 110 });
    schedulePart(p, 115, { rot: 12, tx: 1.4, ty: -0.4 }, { stiffness: 260, damping: 11, holdMs: 110 });
  },

  // === 19. COMMERCE & FINANCE II ===
  "piggy-bank"(svg) {
    animatePart(q(svg, "coin"), { ty: 3.4, sx: 0.75 }, { stiffness: 460, damping: 14, holdMs: 95 });
    schedulePart(q(svg, "pig"), 65, { ty: 1.1, sx: 1.08, sy: 0.92 }, { stiffness: 440, damping: 12, holdMs: 120 });
  },
  bank(svg) {
    animatePart(q(svg, "roof"), { ty: -1.6 }, { stiffness: 380, damping: 14, holdMs: 120 });
    animatePart(q(svg, "columns"), { sy: 1.1, ty: -0.4 }, { stiffness: 380, damping: 14, holdMs: 120 });
  },
  diamond(svg) {
    animatePart(q(svg, "gem"), { sx: 1.18, sy: 1.18, rot: -6 }, { stiffness: 380, damping: 12, holdMs: 130 });
    schedulePart(q(svg, "spark"), 45, { sx: 1.5, sy: 1.5, rot: 45 }, { stiffness: 460, damping: 11, holdMs: 120 });
  },
  barcode(svg) {
    animatePart(q(svg, "beam"), { ty: 5.5, sx: 1.1 }, { stiffness: 280, damping: 14, holdMs: 160 });
    animatePart(q(svg, "bars"), { sx: 1.06 }, { stiffness: 400, damping: 14, holdMs: 130 });
  },
  "qr-code"(svg) {
    animatePart(q(svg, "beam"), { ty: 6.0, sx: 1.08 }, { stiffness: 260, damping: 14, holdMs: 165 });
    animatePart(q(svg, "grid"), { sx: 1.06, sy: 1.06 }, { stiffness: 420, damping: 14, holdMs: 120 });
  },
  scale(svg) {
    const beam = q(svg, "beam");
    const pl = q(svg, "pan-l");
    const pr = q(svg, "pan-r");
    animatePart(beam, { rot: -12 }, { stiffness: 260, damping: 10, holdMs: 110 });
    animatePart(pl, { ty: 1.8 }, { stiffness: 260, damping: 10, holdMs: 110 });
    animatePart(pr, { ty: -1.8 }, { stiffness: 260, damping: 10, holdMs: 110 });
    schedulePart(beam, 120, { rot: 9 }, { stiffness: 280, damping: 11, holdMs: 100 });
    schedulePart(pl, 120, { ty: -1.2 }, { stiffness: 280, damping: 11, holdMs: 100 });
    schedulePart(pr, 120, { ty: 1.2 }, { stiffness: 280, damping: 11, holdMs: 100 });
  },
  briefcase(svg) {
    animatePart(q(svg, "handle"), { ty: -1.8 }, { stiffness: 420, damping: 13, holdMs: 115 });
    animatePart(q(svg, "case"), { ty: -0.9, rot: -4 }, { stiffness: 380, damping: 13, holdMs: 120 });
  },
  "chart-up"(svg) {
    const line = q(svg, "line");
    streamStroke(line, 0, 480, 0.4);
    animatePart(line, { ty: -0.8 }, { stiffness: 340, damping: 13, holdMs: 140 });
    schedulePart(q(svg, "arrow"), 65, { tx: 2.0, ty: -2.0, sx: 1.25, sy: 1.25 }, { stiffness: 440, damping: 12, holdMs: 125 });
  },
  percent(svg) {
    animatePart(q(svg, "slash"), { rot: 14, sy: 1.12 }, { stiffness: 400, damping: 13, holdMs: 115 });
    animatePart(q(svg, "dot-tl"), { tx: -1.2, ty: -1.2, sx: 1.3, sy: 1.3 }, { stiffness: 460, damping: 12, holdMs: 115 });
    animatePart(q(svg, "dot-br"), { tx: 1.2, ty: 1.2, sx: 1.3, sy: 1.3 }, { stiffness: 460, damping: 12, holdMs: 115 });
  },
  ticket(svg) {
    animatePart(q(svg, "body"), { rot: -4, tx: -0.8 }, { stiffness: 400, damping: 13, holdMs: 120 });
    animatePart(q(svg, "stub"), { tx: 2.2, rot: 12, ty: -0.8 }, { stiffness: 420, damping: 12, holdMs: 130 });
  },

  // === 20. TECH & CONTROLS II ===
  keyboard(svg) {
    animatePart(q(svg, "key-1"), { ty: 1.4, sx: 0.9 }, { stiffness: 560, damping: 14, holdMs: 75 });
    schedulePart(q(svg, "key-2"), 45, { ty: 1.4, sx: 0.9 }, { stiffness: 560, damping: 14, holdMs: 75 });
    schedulePart(q(svg, "key-3"), 90, { ty: 1.4, sx: 0.9 }, { stiffness: 560, damping: 14, holdMs: 75 });
  },
  mouse(svg) {
    animatePart(q(svg, "btn-l"), { ty: 1.2, sy: 0.85 }, { stiffness: 560, damping: 14, holdMs: 85 });
    schedulePart(q(svg, "wheel"), 35, { ty: 1.4, sy: 1.2 }, { stiffness: 520, damping: 14, holdMs: 95 });
    animatePart(q(svg, "body"), { ty: 0.5 }, { stiffness: 440, damping: 15, holdMs: 95 });
  },
  router(svg) {
    animatePart(q(svg, "ant-l"), { rot: -12 }, { stiffness: 420, damping: 12, holdMs: 120 });
    animatePart(q(svg, "ant-r"), { rot: 12 }, { stiffness: 420, damping: 12, holdMs: 120 });
    schedulePart(q(svg, "wave"), 45, { ty: -1.6, sx: 1.25, sy: 1.25, op: 0.35 }, { stiffness: 400, damping: 12, holdMs: 130 });
  },
  server(svg) {
    animatePart(q(svg, "rack-1"), { ty: -0.8 }, { stiffness: 440, damping: 14, holdMs: 110 });
    animatePart(q(svg, "rack-2"), { ty: 0.8 }, { stiffness: 440, damping: 14, holdMs: 110 });
    schedulePart(q(svg, "led"), 40, { sx: 1.6, sy: 1.6, op: 0.3 }, { stiffness: 520, damping: 12, holdMs: 130 });
  },
  bug(svg) {
    const l = q(svg, "legs");
    animatePart(q(svg, "body"), { ty: -1.4, rot: -6 }, { stiffness: 460, damping: 12, holdMs: 100 });
    animatePart(l, { rot: 10, sx: 1.12 }, { stiffness: 540, damping: 11, holdMs: 75 });
    schedulePart(l, 80, { rot: -10, sx: 0.94 }, { stiffness: 540, damping: 11, holdMs: 80 });
  },
  usb(svg) {
    animatePart(q(svg, "plug"), { ty: -2.4 }, { stiffness: 480, damping: 14, holdMs: 110 });
    animatePart(q(svg, "body"), { ty: -1.2 }, { stiffness: 440, damping: 14, holdMs: 110 });
  },
  fingerprint(svg) {
    const r1 = q(svg, "ring-1");
    const r2 = q(svg, "ring-2");
    const c = q(svg, "core");
    streamStroke(r1, 0, 440, 0.4);
    streamStroke(r2, 45, 440, 0.4);
    streamStroke(c, 90, 420, 0.4);
    animatePart(c, { sx: 1.24, sy: 1.24 }, { stiffness: 440, damping: 13, holdMs: 120 });
    schedulePart(r2, 40, { sx: 1.12, sy: 1.12 }, { stiffness: 400, damping: 13, holdMs: 120 });
    schedulePart(r1, 80, { sx: 1.08, sy: 1.08 }, { stiffness: 380, damping: 13, holdMs: 120 });
  },
  "sd-card"(svg) {
    animatePart(q(svg, "card"), { ty: 2.6, sx: 0.95 }, { stiffness: 440, damping: 14, holdMs: 115 });
  },
  toggle(svg) {
    animatePart(q(svg, "knob"), { tx: 4.8, sx: 1.12, sy: 1.12 }, { stiffness: 460, damping: 13, holdMs: 135 });
    animatePart(q(svg, "track"), { sx: 1.06 }, { stiffness: 400, damping: 14, holdMs: 135 });
  },
  webcam(svg) {
    animatePart(q(svg, "head"), { rot: -10, ty: -0.9 }, { stiffness: 360, damping: 13, holdMs: 130 });
    animatePart(q(svg, "lens"), { sx: 1.32, sy: 1.32 }, { stiffness: 480, damping: 12, holdMs: 110 });
  },

  // === 21. TIME & EVERYDAY II ===
  stopwatch(svg) {
    animatePart(q(svg, "button"), { ty: 1.5, sy: 0.85 }, { stiffness: 540, damping: 14, holdMs: 85 });
    schedulePart(q(svg, "hand"), 40, { rot: 180 }, { stiffness: 220, damping: 13, holdMs: 180 });
  },
  watch(svg) {
    animatePart(q(svg, "dial"), { sx: 1.08, sy: 1.08 }, { stiffness: 400, damping: 14, holdMs: 130 });
    animatePart(q(svg, "hands"), { rot: 90 }, { stiffness: 280, damping: 14, holdMs: 160 });
  },
  glasses(svg) {
    animatePart(q(svg, "frame"), { ty: -1.2, rot: -5 }, { stiffness: 380, damping: 13, holdMs: 120 });
    schedulePart(q(svg, "glint"), 40, { tx: 2.6, sx: 1.3, op: 0.3 }, { stiffness: 420, damping: 13, holdMs: 130 });
  },
  backpack(svg) {
    animatePart(q(svg, "flap"), { ty: -1.8, sy: 0.84 }, { stiffness: 420, damping: 13, holdMs: 120 });
    animatePart(q(svg, "pocket"), { ty: 0.9, sx: 1.06 }, { stiffness: 380, damping: 14, holdMs: 115 });
  },
  flashlight(svg) {
    animatePart(q(svg, "body"), { rot: -8, tx: -0.8 }, { stiffness: 420, damping: 14, holdMs: 120 });
    schedulePart(q(svg, "beam"), 35, { tx: 2.2, sx: 1.32, sy: 1.24, op: 0.45 }, { stiffness: 460, damping: 12, holdMs: 135 });
  },
  candle(svg) {
    const f = q(svg, "flame");
    animatePart(f, { sy: 1.24, sx: 0.88, rot: -9 }, { stiffness: 420, damping: 11, holdMs: 85 });
    schedulePart(f, 95, { sy: 1.1, sx: 1.08, rot: 9 }, { stiffness: 420, damping: 11, holdMs: 90 });
    animatePart(q(svg, "wax"), { sy: 0.95, ty: 0.4 }, { stiffness: 340, damping: 14, holdMs: 120 });
  },
  broom(svg) {
    const b = q(svg, "broom");
    animatePart(b, { rot: -22, tx: -1.8 }, { stiffness: 380, damping: 12, holdMs: 95 });
    schedulePart(b, 105, { rot: 18, tx: 1.8 }, { stiffness: 380, damping: 12, holdMs: 95 });
  },
  spray(svg) {
    animatePart(q(svg, "trigger"), { rot: 18, tx: -0.8 }, { stiffness: 520, damping: 14, holdMs: 85 });
    schedulePart(q(svg, "mist"), 35, { tx: 2.8, sx: 1.38, sy: 1.38, op: 0.3 }, { stiffness: 360, damping: 12, holdMs: 130 });
  },
  soap(svg) {
    animatePart(q(svg, "pump"), { ty: 2.0 }, { stiffness: 500, damping: 14, holdMs: 85 });
    schedulePart(q(svg, "drop"), 55, { ty: 2.8, sx: 1.2, sy: 1.2, op: 0.35 }, { stiffness: 380, damping: 12, holdMs: 125 });
  },
  mirror(svg) {
    animatePart(q(svg, "glass"), { rot: -6, sx: 1.06, sy: 1.06 }, { stiffness: 360, damping: 13, holdMs: 130 });
    schedulePart(q(svg, "glint"), 40, { tx: 2.4, ty: -1.8, sx: 1.35, op: 0.3 }, { stiffness: 420, damping: 12, holdMs: 135 });
  },

  // === 22. TRAVEL & PLAY II ===
  helicopter(svg) {
    animatePart(q(svg, "rotor"), { sx: 0.25 }, { stiffness: 620, damping: 10, holdMs: 140 });
    schedulePart(q(svg, "rotor"), 110, { sx: 1.15 }, { stiffness: 620, damping: 10, holdMs: 110 });
    animatePart(q(svg, "body"), { ty: -2.0, rot: -6 }, { stiffness: 300, damping: 13, holdMs: 160 });
  },
  submarine(svg) {
    animatePart(q(svg, "scope"), { ty: -2.4 }, { stiffness: 420, damping: 13, holdMs: 130 });
    animatePart(q(svg, "hull"), { tx: 2.2, ty: 0.8, rot: 3 }, { stiffness: 260, damping: 13, holdMs: 160 });
  },
  sailboat(svg) {
    animatePart(q(svg, "sail"), { rot: -10, sx: 1.08 }, { stiffness: 260, damping: 12, holdMs: 145 });
    animatePart(q(svg, "hull"), { tx: 2.0, rot: -5 }, { stiffness: 240, damping: 12, holdMs: 155 });
    animatePart(q(svg, "wave"), { tx: -2.4, ty: 0.4 }, { stiffness: 220, damping: 13, holdMs: 160 });
  },
  balloon(svg) {
    animatePart(q(svg, "envelope"), { ty: -2.8, sx: 1.12, sy: 1.12 }, { stiffness: 240, damping: 12, holdMs: 170 });
    animatePart(q(svg, "basket"), { ty: -2.2, rot: -8 }, { stiffness: 240, damping: 11, holdMs: 160 });
  },
  skateboard(svg) {
    animatePart(q(svg, "deck"), { ty: -2.6, rot: -18, tx: 1.8 }, { stiffness: 380, damping: 12, holdMs: 130 });
    animatePart(q(svg, "wheel-l"), { ty: -2.2, tx: 1.8, rot: 360 }, { stiffness: 220, damping: 13, holdMs: 180 });
    animatePart(q(svg, "wheel-r"), { ty: -2.2, tx: 1.8, rot: 360 }, { stiffness: 220, damping: 13, holdMs: 180 });
  },
  bowling(svg) {
    animatePart(q(svg, "ball"), { tx: 3.4, rot: 220 }, { stiffness: 340, damping: 13, holdMs: 110 });
    schedulePart(q(svg, "pin"), 85, { tx: 2.0, ty: -1.4, rot: 34 }, { stiffness: 400, damping: 11, holdMs: 140 });
  },
  basketball(svg) {
    const b = q(svg, "ball");
    animatePart(b, { ty: -3.2, sy: 1.12, sx: 0.92, rot: 90 }, { stiffness: 360, damping: 11, holdMs: 100 });
    schedulePart(b, 110, { ty: 1.2, sy: 0.84, sx: 1.14, rot: 140 }, { stiffness: 520, damping: 13, holdMs: 75 });
  },
  chess(svg) {
    const p = q(svg, "piece");
    animatePart(p, { ty: -2.8, rot: -8 }, { stiffness: 400, damping: 13, holdMs: 85 });
    schedulePart(p, 95, { tx: 2.2, ty: 0.6, rot: 4 }, { stiffness: 480, damping: 14, holdMs: 95 });
  },
  tent(svg) {
    animatePart(q(svg, "canopy"), { sx: 1.08, sy: 0.94, ty: -0.8 }, { stiffness: 360, damping: 13, holdMs: 130 });
    animatePart(q(svg, "door"), { sx: 0.65, op: 0.6 }, { stiffness: 380, damping: 14, holdMs: 135 });
  },
  luggage(svg) {
    animatePart(q(svg, "handle"), { ty: -2.4 }, { stiffness: 420, damping: 13, holdMs: 120 });
    animatePart(q(svg, "case"), { tx: 1.8, rot: -5 }, { stiffness: 340, damping: 13, holdMs: 140 });
    animatePart(q(svg, "wheels"), { tx: 1.8, rot: 240 }, { stiffness: 240, damping: 13, holdMs: 160 });
  },

  // === 23. STUDIO & SOUND II ===
  violin(svg) {
    const bow = q(svg, "bow");
    animatePart(q(svg, "body"), { rot: -5, ty: -0.6 }, { stiffness: 320, damping: 13, holdMs: 140 });
    animatePart(bow, { tx: 2.6, ty: -0.8, rot: -6 }, { stiffness: 420, damping: 13, holdMs: 85 });
    schedulePart(bow, 95, { tx: -2.2, ty: 0.6, rot: 4 }, { stiffness: 420, damping: 13, holdMs: 90 });
  },
  saxophone(svg) {
    animatePart(q(svg, "horn"), { rot: -10, ty: -1.0 }, { stiffness: 340, damping: 12, holdMs: 135 });
    schedulePart(q(svg, "note"), 45, { ty: -3.0, tx: 1.6, sx: 1.3, sy: 1.3 }, { stiffness: 380, damping: 11, holdMs: 140 });
  },
  accordion(svg) {
    animatePart(q(svg, "side-l"), { tx: -1.8, rot: -6 }, { stiffness: 400, damping: 13, holdMs: 115 });
    animatePart(q(svg, "side-r"), { tx: 1.8, rot: 6 }, { stiffness: 400, damping: 13, holdMs: 115 });
    animatePart(q(svg, "bellows"), { sx: 1.28, sy: 0.94 }, { stiffness: 400, damping: 13, holdMs: 115 });
  },
  tambourine(svg) {
    const f = q(svg, "frame");
    animatePart(f, { rot: -18, ty: -1.2 }, { stiffness: 500, damping: 11, holdMs: 75 });
    schedulePart(f, 85, { rot: 16, ty: -0.6 }, { stiffness: 500, damping: 11, holdMs: 80 });
    animatePart(q(svg, "jingle"), { sx: 1.35, sy: 1.35 }, { stiffness: 540, damping: 11, holdMs: 110 });
  },
  turntable(svg) {
    animatePart(q(svg, "platter"), { rot: 360 }, { stiffness: 145, damping: 14, holdMs: 270 });
    animatePart(q(svg, "arm"), { rot: 18 }, { stiffness: 320, damping: 14, holdMs: 220 });
  },
  synthesizer(svg) {
    animatePart(q(svg, "knob"), { rot: 110, sx: 1.18, sy: 1.18 }, { stiffness: 340, damping: 13, holdMs: 140 });
    animatePart(q(svg, "keys"), { ty: 1.3, sy: 0.94 }, { stiffness: 480, damping: 14, holdMs: 100 });
  },
  mixer(svg) {
    animatePart(q(svg, "fader-1"), { ty: -2.8 }, { stiffness: 420, damping: 13, holdMs: 120 });
    schedulePart(q(svg, "fader-2"), 45, { ty: 2.6 }, { stiffness: 420, damping: 13, holdMs: 120 });
    schedulePart(q(svg, "fader-3"), 90, { ty: -2.4 }, { stiffness: 420, damping: 13, holdMs: 120 });
  },
  boombox(svg) {
    const wl = q(svg, "woofer-l");
    const wr = q(svg, "woofer-r");
    animatePart(wl, { sx: 1.26, sy: 1.26 }, { stiffness: 560, damping: 11, holdMs: 75 });
    animatePart(wr, { sx: 1.26, sy: 1.26 }, { stiffness: 560, damping: 11, holdMs: 75 });
    schedulePart(wl, 90, { sx: 1.18, sy: 1.18 }, { stiffness: 560, damping: 11, holdMs: 80 });
    schedulePart(wr, 90, { sx: 1.18, sy: 1.18 }, { stiffness: 560, damping: 11, holdMs: 80 });
    animatePart(q(svg, "deck"), { ty: -0.9 }, { stiffness: 440, damping: 13, holdMs: 110 });
  },
  spotlight(svg) {
    animatePart(q(svg, "lamp"), { rot: 12, ty: -0.6 }, { stiffness: 360, damping: 13, holdMs: 130 });
    schedulePart(q(svg, "beam"), 35, { sx: 1.25, sy: 1.2, op: 0.4 }, { stiffness: 400, damping: 12, holdMs: 145 });
  },
  "tuning-fork"(svg) {
    const f = q(svg, "fork");
    animatePart(f, { rot: -10, sx: 1.08 }, { stiffness: 620, damping: 9, holdMs: 75 });
    schedulePart(f, 80, { rot: 9, sx: 0.94 }, { stiffness: 620, damping: 9, holdMs: 80 });
    schedulePart(q(svg, "ring"), 30, { sx: 1.38, sy: 1.38, op: 0.3 }, { stiffness: 420, damping: 11, holdMs: 140 });
  },

  // === 24. HOME & LAB II ===
  lamp(svg) {
    animatePart(q(svg, "shade"), { ty: -1.4, rot: -6 }, { stiffness: 400, damping: 13, holdMs: 120 });
    schedulePart(q(svg, "beam"), 35, { sy: 1.28, sx: 1.18, op: 0.4 }, { stiffness: 420, damping: 12, holdMs: 140 });
  },
  kettle(svg) {
    animatePart(q(svg, "body"), { rot: -7, ty: -1.0 }, { stiffness: 360, damping: 12, holdMs: 130 });
    schedulePart(q(svg, "steam"), 40, { ty: -2.8, sx: 1.25, op: 0.3 }, { stiffness: 260, damping: 12, holdMs: 155 });
  },
  microwave(svg) {
    animatePart(q(svg, "dish"), { sx: 0.35 }, { stiffness: 240, damping: 13, holdMs: 180 });
    animatePart(q(svg, "dial"), { rot: 120 }, { stiffness: 320, damping: 13, holdMs: 140 });
  },
  fridge(svg) {
    animatePart(q(svg, "door-top"), { sx: 0.65, rot: -6 }, { stiffness: 340, damping: 13, holdMs: 150 });
    schedulePart(q(svg, "door-bot"), 50, { sx: 0.72, rot: -4 }, { stiffness: 340, damping: 13, holdMs: 150 });
  },
  sofa(svg) {
    animatePart(q(svg, "cushions"), { ty: 1.2, sy: 0.86, sx: 1.06 }, { stiffness: 360, damping: 11, holdMs: 125 });
    animatePart(q(svg, "frame"), { ty: 0.5 }, { stiffness: 380, damping: 14, holdMs: 115 });
  },
  bed(svg) {
    animatePart(q(svg, "pillow"), { ty: 1.0, sy: 0.82, sx: 1.12 }, { stiffness: 380, damping: 12, holdMs: 120 });
    animatePart(q(svg, "blanket"), { ty: 0.7, sy: 0.94 }, { stiffness: 340, damping: 13, holdMs: 130 });
  },
  bathtub(svg) {
    animatePart(q(svg, "faucet"), { rot: -12 }, { stiffness: 420, damping: 13, holdMs: 110 });
    schedulePart(q(svg, "bubble"), 45, { ty: -2.8, sx: 1.4, sy: 1.4, op: 0.35 }, { stiffness: 300, damping: 12, holdMs: 145 });
  },
  "test-tube"(svg) {
    animatePart(q(svg, "tube"), { rot: -14, ty: -0.8 }, { stiffness: 340, damping: 12, holdMs: 135 });
    schedulePart(q(svg, "bubble"), 45, { ty: -3.2, sx: 1.35, sy: 1.35, op: 0.3 }, { stiffness: 280, damping: 12, holdMs: 150 });
  },
  syringe(svg) {
    animatePart(q(svg, "plunger"), { ty: 2.6 }, { stiffness: 460, damping: 14, holdMs: 105 });
    schedulePart(q(svg, "drop"), 55, { ty: 2.8, sx: 1.22, sy: 1.22, op: 0.35 }, { stiffness: 380, damping: 12, holdMs: 125 });
  },
  "petri-dish"(svg) {
    animatePart(q(svg, "lid"), { ty: -2.4, rot: -6 }, { stiffness: 360, damping: 13, holdMs: 140 });
    schedulePart(q(svg, "colony"), 45, { sx: 1.28, sy: 1.28 }, { stiffness: 400, damping: 12, holdMs: 140 });
  },
};

export function triggerChoreography(name: string, svg: SVGSVGElement | null): void {
  if (!svg) return;
  const fn = CHOREO[name];
  if (fn) fn(svg);
}
