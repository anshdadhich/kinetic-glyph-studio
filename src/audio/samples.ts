export type SoundMode = "synth" | "real";

const STORAGE_KEY = "kinetic-glyph-sound-mode";
const listeners = new Set<() => void>();
const buffers = new Map<string, AudioBuffer | null>();

let mode: SoundMode = "synth";

if (typeof window !== "undefined") {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "real" || stored === "synth") mode = stored;
  } catch {
    // Storage can be unavailable (private browsing, blocked cookies).
  }
}

function notify() {
  listeners.forEach((fn) => fn());
}

export function getSoundMode(): SoundMode {
  return mode;
}

export function setSoundMode(next: SoundMode): void {
  if (mode === next) return;
  mode = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Ignore storage failures; the mode still applies for this session.
  }
  notify();
}

export function subscribeSoundMode(fn: () => void): () => void {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

/**
 * Plays the CC0 recording for an icon. Samples live at /sfx/<icon>.mp3 and are
 * fetched/decoded once, then cached. Returns false when no recording exists so
 * the caller can fall back to the procedural engine.
 */
export async function playSample(
  name: string,
  ctx: AudioContext,
  dest: AudioNode
): Promise<boolean> {
  let buffer = buffers.get(name);
  if (buffer === undefined) {
    try {
      const url = `${import.meta.env.BASE_URL}sfx/${encodeURIComponent(name)}.mp3`;
      const response = await fetch(url);
      if (!response.ok) {
        buffers.set(name, null);
        return false;
      }
      buffer = await ctx.decodeAudioData(await response.arrayBuffer());
      buffers.set(name, buffer);
    } catch {
      buffers.set(name, null);
      return false;
    }
  }
  if (!buffer) return false;

  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.connect(dest);
  source.start();
  return true;
}
