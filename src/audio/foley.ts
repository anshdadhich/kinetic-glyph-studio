export type AudioStatus = "idle" | "ready" | "muted";

let audioCtx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let noiseBuffer: AudioBuffer | null = null;
let soundEnabled = true;

const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((fn) => fn());
}

export function subscribeAudioStatus(fn: () => void): () => void {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

export function getAudioStatus(): AudioStatus {
  if (!soundEnabled) return "muted";
  if (audioCtx && audioCtx.state === "running") return "ready";
  return "idle";
}

export function initAudio(): void {
  if (typeof window === "undefined") return;
  if (!audioCtx) {
    const AC =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    audioCtx = new AC();
    const comp = audioCtx.createDynamicsCompressor();
    comp.threshold.value = -14;
    comp.ratio.value = 6;
    masterGain = audioCtx.createGain();
    masterGain.gain.value = 0.72;
    masterGain.connect(comp);
    comp.connect(audioCtx.destination);

    noiseBuffer = audioCtx.createBuffer(1, audioCtx.sampleRate, audioCtx.sampleRate);
    const d = noiseBuffer.getChannelData(0);
    for (let i = 0; i < d.length; i++) {
      d[i] = Math.random() * 2 - 1;
    }
  }
  if (audioCtx.state === "suspended") {
    void audioCtx.resume().then(notify);
  } else {
    notify();
  }
}

export function toggleSound(): void {
  if (!audioCtx || audioCtx.state === "suspended") {
    soundEnabled = true;
    initAudio();
    return;
  }
  soundEnabled = !soundEnabled;
  notify();
}

function tone(
  dest: AudioNode,
  type: OscillatorType,
  f1: number,
  f2: number,
  t: number,
  dur: number,
  peak: number,
  atk = 0.004
) {
  if (!audioCtx) return;
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(f1, t);
  if (f2 !== f1) {
    o.frequency.exponentialRampToValueAtTime(Math.max(20, f2), t + dur);
  }
  g.gain.setValueAtTime(0.0001, t);
  g.gain.linearRampToValueAtTime(peak, t + atk);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g);
  g.connect(dest);
  o.start(t);
  o.stop(t + dur + 0.03);
}

function noise(
  dest: AudioNode,
  type: BiquadFilterType,
  f1: number,
  f2: number,
  q: number,
  t: number,
  dur: number,
  peak: number,
  atk = 0.004
) {
  if (!audioCtx || !noiseBuffer) return;
  const s = audioCtx.createBufferSource();
  const f = audioCtx.createBiquadFilter();
  const g = audioCtx.createGain();
  s.buffer = noiseBuffer;
  f.type = type;
  f.Q.value = q;
  f.frequency.setValueAtTime(f1, t);
  if (f2 !== f1) {
    f.frequency.exponentialRampToValueAtTime(Math.max(40, f2), t + dur);
  }
  g.gain.setValueAtTime(0.0001, t);
  g.gain.linearRampToValueAtTime(peak, t + atk);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  s.connect(f);
  f.connect(g);
  g.connect(dest);
  s.start(t);
  s.stop(t + dur + 0.03);
}

export const SOUND_FX: Record<string, (dest: AudioNode, t: number) => void> = {
  // === 1. CORE UI ===
  home(d, t) {
    // Solid wooden door latch thud + warm hearth chime
    tone(d, "sine", 185, 92, t, 0.075, 0.22, 0.002);
    tone(d, "sine", 523.25, 523.25, t + 0.045, 0.22, 0.09);
    tone(d, "sine", 783.99, 783.99, t + 0.08, 0.2, 0.05);
  },
  search(d, t) {
    // Optical lens sweep whoosh + focus lock-on harmonic
    noise(d, "bandpass", 650, 2400, 3.0, t, 0.1, 0.13);
    tone(d, "sine", 880, 1318.5, t + 0.025, 0.09, 0.08);
  },
  user(d, t) {
    // Friendly two-note human greeting chime
    tone(d, "sine", 440, 440, t, 0.09, 0.1);
    tone(d, "sine", 587.33, 659.25, t + 0.065, 0.14, 0.09);
  },
  settings(d, t) {
    // Precision 4-tooth mechanical gear ratchet
    for (let i = 0; i < 4; i++) {
      noise(d, "bandpass", 2900, 2200, 5.2, t + i * 0.036, 0.014, 0.2, 0.001);
      tone(d, "triangle", 460, 190, t + i * 0.036, 0.018, 0.08, 0.001);
    }
  },
  bell(d, t) {
    // Resonant bronze bell with overtone partials
    tone(d, "sine", 987.77, 987.77, t, 0.36, 0.13);
    tone(d, "sine", 1975.5, 1975.5, t, 0.24, 0.06);
    tone(d, "sine", 2740, 2740, t, 0.15, 0.035);
  },
  lock(d, t) {
    // Heavy deadbolt engagement double-clack
    noise(d, "bandpass", 2400, 1700, 4.5, t, 0.02, 0.26, 0.001);
    tone(d, "triangle", 340, 115, t, 0.035, 0.15, 0.001);
    noise(d, "bandpass", 3500, 2500, 5.0, t + 0.055, 0.024, 0.26, 0.001);
  },
  unlock(d, t) {
    // Ascending spring-release shackle pop
    noise(d, "bandpass", 2200, 3800, 3.8, t, 0.022, 0.22, 0.001);
    tone(d, "sine", 420, 880, t + 0.015, 0.08, 0.1);
  },
  trash(d, t) {
    // Pedal bin lid clatter + hollow drop thump
    noise(d, "bandpass", 1100, 3200, 1.6, t, 0.075, 0.18);
    tone(d, "triangle", 240, 105, t + 0.045, 0.095, 0.15);
  },
  check(d, t) {
    // Crisp ascending double confirmation ping
    tone(d, "sine", 659.25, 659.25, t, 0.08, 0.1);
    tone(d, "sine", 987.77, 987.77, t + 0.055, 0.16, 0.11);
  },
  plus(d, t) {
    // Snap-in additive UI pop
    tone(d, "sine", 390, 780, t, 0.065, 0.12, 0.002);
  },

  // === 2. COMMS & FILES ===
  mail(d, t) {
    // Crisp paper envelope open rip + gentle arrival tone
    noise(d, "bandpass", 1800, 4600, 1.7, t, 0.075, 0.18);
    tone(d, "sine", 660, 880, t + 0.045, 0.1, 0.065);
  },
  send(d, t) {
    // Aerodynamic paper-plane dart whoosh
    noise(d, "bandpass", 700, 3800, 1.4, t, 0.14, 0.2, 0.01);
    tone(d, "sine", 480, 1120, t + 0.02, 0.11, 0.07);
  },
  chat(d, t) {
    // Bouncy bubble pop-bloop triad
    tone(d, "sine", 520, 760, t, 0.05, 0.1);
    tone(d, "sine", 660, 920, t + 0.05, 0.05, 0.09);
    tone(d, "sine", 820, 1100, t + 0.1, 0.06, 0.08);
  },
  phone(d, t) {
    // Classic dual-tone metallic telephone bell ring
    [0, 0.085].forEach((off) => {
      tone(d, "sine", 1180, 1180, t + off, 0.065, 0.09, 0.002);
      tone(d, "sine", 1420, 1420, t + off, 0.065, 0.07, 0.002);
    });
  },
  folder(d, t) {
    // Manila cardstock rustle + tab snap
    noise(d, "bandpass", 1400, 3500, 1.6, t, 0.075, 0.18);
    tone(d, "triangle", 310, 460, t + 0.025, 0.06, 0.07);
  },
  document(d, t) {
    // Crisp paper sheet page flip
    noise(d, "highpass", 2400, 5200, 1.3, t, 0.08, 0.17, 0.006);
    tone(d, "sine", 420, 320, t + 0.02, 0.04, 0.05);
  },
  bookmark(d, t) {
    // Silk ribbon pull + page tuck chime
    noise(d, "bandpass", 2600, 4200, 2.5, t, 0.04, 0.16);
    tone(d, "sine", 784, 1046.5, t + 0.02, 0.13, 0.085);
  },
  calendar(d, t) {
    // Desk calendar tear-off snap + ring clink
    noise(d, "bandpass", 2100, 4800, 1.9, t, 0.06, 0.19);
    tone(d, "sine", 540, 390, t + 0.03, 0.055, 0.085);
  },
  download(d, t) {
    // Descending glide + heavy tray settle click
    tone(d, "sine", 980, 320, t, 0.11, 0.11);
    noise(d, "bandpass", 2400, 1800, 4.0, t + 0.1, 0.025, 0.2, 0.001);
  },
  upload(d, t) {
    // Ascending launch whoosh + crisp high confirmation
    noise(d, "bandpass", 900, 3400, 1.6, t, 0.1, 0.14);
    tone(d, "sine", 360, 1080, t + 0.015, 0.12, 0.11);
  },

  // === 3. MEDIA & AUDIO ===
  camera(d, t) {
    // Mechanical SLR mirror slap + shutter curtain snap
    noise(d, "highpass", 2400, 1800, 1.0, t, 0.016, 0.28, 0.001);
    tone(d, "sine", 1400, 420, t, 0.02, 0.12, 0.001);
    noise(d, "bandpass", 3100, 2200, 3.5, t + 0.048, 0.022, 0.25, 0.001);
  },
  vinyl(d, t) {
    // Needle drop pop + surface crackle + warm analog chord
    tone(d, "sine", 140, 55, t, 0.035, 0.22, 0.001);
    noise(d, "bandpass", 2800, 4200, 2.8, t + 0.02, 0.02, 0.14, 0.001);
    noise(d, "highpass", 3500, 3500, 1.0, t + 0.05, 0.3, 0.04, 0.01);
    tone(d, "triangle", 220, 220, t + 0.06, 0.34, 0.085, 0.02);
    tone(d, "sine", 329.63, 329.63, t + 0.07, 0.32, 0.065, 0.02);
    tone(d, "sine", 554.37, 554.37, t + 0.08, 0.28, 0.04, 0.02);
  },
  play(d, t) {
    // Punchy tape transport engage clack + bright harmonic
    noise(d, "bandpass", 1800, 1200, 3.0, t, 0.018, 0.2, 0.001);
    tone(d, "triangle", 330, 523.25, t + 0.015, 0.12, 0.12);
  },
  pause(d, t) {
    // Twin magnetic solenoid brake tap
    tone(d, "sine", 440, 220, t, 0.04, 0.12, 0.001);
    tone(d, "sine", 392, 196, t + 0.045, 0.045, 0.1, 0.001);
  },
  volume(d, t) {
    // Speaker cone sub-thump + radiating harmonic sweep
    tone(d, "sine", 110, 52, t, 0.09, 0.24, 0.002);
    tone(d, "sine", 440, 660, t + 0.025, 0.15, 0.09);
  },
  mic(d, t) {
    // Studio mic pop-filter tap + clean condenser test ping
    tone(d, "sine", 150, 75, t, 0.05, 0.2, 0.002);
    tone(d, "sine", 880, 880, t + 0.04, 0.12, 0.075);
  },
  headphones(d, t) {
    // Warm L/R stereo ear-cup cushion seal + test tone
    tone(d, "sine", 392, 523.25, t, 0.12, 0.09, 0.01);
    tone(d, "sine", 659.25, 659.25, t + 0.06, 0.16, 0.07, 0.01);
  },
  music(d, t) {
    // Bright major triad arpeggio (C5 - E5 - G5)
    tone(d, "triangle", 523.25, 523.25, t, 0.14, 0.085);
    tone(d, "triangle", 659.25, 659.25, t + 0.055, 0.15, 0.08);
    tone(d, "sine", 783.99, 783.99, t + 0.11, 0.2, 0.075);
  },
  image(d, t) {
    // Polaroid frame slide + soft sun-rise shimmer
    noise(d, "bandpass", 1600, 3200, 1.8, t, 0.06, 0.13);
    tone(d, "sine", 740, 987.77, t + 0.03, 0.14, 0.07);
  },
  video(d, t) {
    // Cinema gate click + tally beep
    noise(d, "bandpass", 2600, 1900, 4.0, t, 0.018, 0.2, 0.001);
    tone(d, "sine", 1046.5, 1046.5, t + 0.035, 0.1, 0.085);
  },

  // === 4. KINETIC OBJECTS & TOOLS ===
  bicycle(d, t) {
    // Freewheel hub coasting ratchet ticks + two-stroke brass bicycle bell
    for (let i = 0; i < 6; i++) {
      const offset = i * 0.048;
      noise(d, "bandpass", 3400, 2600, 5.5, t + offset, 0.012, 0.14, 0.001);
      tone(d, "triangle", 520, 240, t + offset, 0.015, 0.05, 0.001);
    }
    [0.01, 0.12].forEach((delay) => {
      tone(d, "sine", 1567.98, 1567.98, t + delay, 0.24, 0.11, 0.002);
      tone(d, "sine", 3135.96, 3135.96, t + delay, 0.15, 0.045, 0.002);
    });
  },
  scissors(d, t) {
    // Double high-Q steel blade shear snick-snick
    [0, 0.115].forEach((delay) => {
      noise(d, "bandpass", 4200, 6800, 3.2, t + delay, 0.042, 0.26, 0.001);
      tone(d, "triangle", 2200, 980, t + delay, 0.032, 0.11, 0.001);
      tone(d, "sine", 3450, 1900, t + delay + 0.01, 0.035, 0.06, 0.001);
    });
  },
  wrench(d, t) {
    // Heavy chrome socket wrench ratchet clicks
    for (let i = 0; i < 3; i++) {
      noise(d, "bandpass", 2400, 1500, 5.0, t + i * 0.052, 0.018, 0.24, 0.001);
      tone(d, "triangle", 380, 160, t + i * 0.052, 0.025, 0.1, 0.001);
    }
  },
  hammer(d, t) {
    // Heavy wooden-handle anvil strike thud + steel ring
    tone(d, "sine", 150, 48, t, 0.12, 0.3, 0.001);
    noise(d, "bandpass", 1800, 900, 2.5, t, 0.03, 0.26, 0.001);
    tone(d, "sine", 1480, 1460, t + 0.005, 0.18, 0.055, 0.002);
  },
  paintbrush(d, t) {
    // Soft bristle sweep across textured canvas
    noise(d, "bandpass", 900, 2800, 1.3, t, 0.13, 0.18, 0.015);
    noise(d, "bandpass", 2400, 1200, 1.4, t + 0.11, 0.1, 0.12, 0.01);
  },
  pen(d, t) {
    // Crisp fountain nib scribble across paper
    noise(d, "bandpass", 3000, 5200, 2.2, t, 0.045, 0.16, 0.003);
    noise(d, "bandpass", 3600, 4800, 2.4, t + 0.06, 0.04, 0.14, 0.003);
    noise(d, "bandpass", 2800, 4400, 2.0, t + 0.11, 0.05, 0.12, 0.003);
  },
  sliders(d, t) {
    // Smooth studio console fader glide + center detent click
    noise(d, "bandpass", 1400, 2600, 2.0, t, 0.08, 0.12, 0.008);
    noise(d, "bandpass", 3200, 2200, 5.0, t + 0.075, 0.014, 0.2, 0.001);
    tone(d, "sine", 620, 740, t + 0.075, 0.05, 0.07);
  },
  link(d, t) {
    // Carabiner chain link metallic snap-lock
    noise(d, "bandpass", 3200, 2400, 4.5, t, 0.02, 0.24, 0.001);
    tone(d, "triangle", 920, 1240, t + 0.015, 0.07, 0.1);
  },
  eye(d, t) {
    // Soft optical iris blink + quiet focus tick
    noise(d, "bandpass", 1600, 800, 2.0, t, 0.035, 0.12, 0.002);
    tone(d, "sine", 540, 360, t, 0.045, 0.07);
    tone(d, "sine", 420, 620, t + 0.08, 0.05, 0.06);
  },
  pin(d, t) {
    // Rubberized map pin bounce-drop plop
    tone(d, "sine", 620, 240, t, 0.055, 0.16, 0.002);
    tone(d, "sine", 340, 580, t + 0.055, 0.07, 0.12, 0.002);
  },

  // === 5. NATURE, ENERGY, TIME & COMMERCE ===
  rocket(d, t) {
    // Ignition spark + ascending thruster exhaust roar
    noise(d, "bandpass", 2600, 900, 1.5, t, 0.05, 0.2, 0.002);
    noise(d, "lowpass", 180, 760, 0.9, t + 0.02, 0.36, 0.32, 0.025);
    tone(d, "sawtooth", 78, 148, t + 0.02, 0.32, 0.11, 0.03);
    tone(d, "sine", 54, 92, t + 0.02, 0.34, 0.22, 0.02);
  },
  compass(d, t) {
    // Precision brass detent click + magnetic harmonic ping
    noise(d, "bandpass", 3200, 2100, 6.0, t, 0.016, 0.22, 0.001);
    tone(d, "triangle", 640, 280, t, 0.022, 0.08, 0.001);
    tone(d, "sine", 1318.5, 1324, t + 0.03, 0.26, 0.09, 0.004);
  },
  umbrella(d, t) {
    // Tensioned canopy whoosh-pop + two gentle raindrop taps
    noise(d, "bandpass", 520, 2200, 1.4, t, 0.11, 0.24, 0.008);
    tone(d, "sine", 190, 420, t + 0.02, 0.075, 0.14, 0.004);
    tone(d, "sine", 1180, 940, t + 0.14, 0.045, 0.055, 0.002);
    tone(d, "sine", 1480, 1220, t + 0.22, 0.04, 0.045, 0.002);
  },
  hourglass(d, t) {
    // Frame turn thud + fine granular cascading sand hiss
    tone(d, "sine", 160, 78, t, 0.06, 0.22, 0.002);
    noise(d, "bandpass", 3600, 5200, 1.8, t + 0.04, 0.34, 0.14, 0.04);
    for (let i = 0; i < 4; i++) {
      noise(d, "highpass", 4400, 6200, 2.2, t + 0.09 + i * 0.06, 0.025, 0.07, 0.003);
    }
  },
  coffee(d, t) {
    // Porcelain saucer clink + hot espresso steam hiss
    tone(d, "sine", 2180, 2180, t, 0.14, 0.09, 0.002);
    tone(d, "sine", 3490, 3490, t, 0.09, 0.055, 0.002);
    noise(d, "bandpass", 2400, 4800, 1.3, t + 0.04, 0.26, 0.12, 0.05);
  },
  fan(d, t) {
    // Electric motor hum + smooth swept aerodynamic airflow
    tone(d, "sine", 110, 165, t, 0.32, 0.11, 0.04);
    noise(d, "bandpass", 420, 1450, 1.6, t + 0.01, 0.34, 0.18, 0.05);
    noise(d, "bandpass", 1450, 620, 1.8, t + 0.18, 0.22, 0.11, 0.02);
  },
  anchor(d, t) {
    // Staggered chain link clinks + deep bottom splash thud
    for (let i = 0; i < 3; i++) {
      const off = i * 0.045;
      noise(d, "bandpass", 2600, 1800, 4.5, t + off, 0.022, 0.2, 0.001);
      tone(d, "triangle", 740 - i * 90, 420, t + off, 0.03, 0.08, 0.001);
    }
    tone(d, "sine", 115, 42, t + 0.14, 0.18, 0.3, 0.003);
    noise(d, "lowpass", 900, 240, 1.1, t + 0.14, 0.2, 0.18, 0.006);
  },
  heart(d, t) {
    // Double cardiac lub-dub pulse
    tone(d, "sine", 95, 48, t, 0.09, 0.28);
    tone(d, "sine", 115, 52, t + 0.11, 0.1, 0.24);
  },
  star(d, t) {
    // Sparkling crystalline celestial chime triad
    tone(d, "sine", 1046.5, 1046.5, t, 0.16, 0.09);
    tone(d, "sine", 1568, 1568, t + 0.04, 0.18, 0.08);
    tone(d, "sine", 2093, 2093, t + 0.08, 0.2, 0.06);
  },
  zap(d, t) {
    // High-voltage electrical arc snap + crackle
    noise(d, "bandpass", 1200, 5200, 1.2, t, 0.065, 0.22, 0.001);
    tone(d, "sawtooth", 340, 75, t, 0.09, 0.11, 0.001);
  },

  // === 6. WEATHER & NATURE ===
  sun(d, t) {
    // Warm radiant solar shimmer chord
    tone(d, "sine", 523.25, 523.25, t, 0.22, 0.09);
    tone(d, "sine", 659.25, 659.25, t + 0.03, 0.22, 0.075);
    tone(d, "triangle", 1046.5, 1046.5, t + 0.06, 0.24, 0.055);
  },
  moon(d, t) {
    // Tranquil nocturnal bell shimmer
    tone(d, "sine", 784, 740, t, 0.24, 0.085);
    tone(d, "sine", 1174.6, 1174.6, t + 0.055, 0.22, 0.065);
  },
  cloud(d, t) {
    // Soft airy sky breeze whoosh
    noise(d, "bandpass", 320, 780, 1.2, t, 0.22, 0.09, 0.03);
    tone(d, "sine", 240, 290, t, 0.16, 0.045);
  },
  rain(d, t) {
    // Crisp multi-drop water plinks + soft shower hiss
    noise(d, "highpass", 1800, 1400, 1.0, t, 0.18, 0.06, 0.01);
    tone(d, "sine", 980, 1360, t, 0.055, 0.09, 0.002);
    tone(d, "sine", 1140, 1580, t + 0.05, 0.055, 0.085, 0.002);
    tone(d, "sine", 860, 1220, t + 0.1, 0.06, 0.08, 0.002);
  },
  flame(d, t) {
    // Warm fire whoosh + crackling ember pops
    noise(d, "lowpass", 650, 1400, 1.4, t, 0.2, 0.14, 0.015);
    noise(d, "highpass", 2800, 4200, 3.5, t + 0.04, 0.03, 0.12, 0.001);
    noise(d, "highpass", 3400, 4800, 3.5, t + 0.11, 0.025, 0.1, 0.001);
  },
  snowflake(d, t) {
    // Frosty crystalline ice chime
    tone(d, "sine", 1760, 1760, t, 0.14, 0.07, 0.002);
    tone(d, "sine", 2349, 2349, t + 0.035, 0.15, 0.06, 0.002);
    noise(d, "highpass", 4200, 5600, 2.0, t, 0.08, 0.05, 0.005);
  },
  wind(d, t) {
    // Aerodynamic swirling wind gust
    noise(d, "bandpass", 420, 1550, 2.6, t, 0.24, 0.13, 0.025);
    noise(d, "bandpass", 900, 520, 2.4, t + 0.08, 0.18, 0.08, 0.02);
  },
  leaf(d, t) {
    // Crisp dry-leaf botanical rustle
    noise(d, "bandpass", 2200, 3600, 2.2, t, 0.07, 0.11, 0.004);
    noise(d, "bandpass", 1800, 2900, 2.0, t + 0.075, 0.065, 0.085, 0.004);
  },
  droplet(d, t) {
    // Pure resonant water droplet bloop
    tone(d, "sine", 540, 1320, t, 0.085, 0.15, 0.003);
    tone(d, "sine", 1320, 1480, t + 0.055, 0.05, 0.06, 0.002);
  },
  mountain(d, t) {
    // Alpine breeze + crisp summit chime
    noise(d, "bandpass", 480, 920, 1.8, t, 0.18, 0.08, 0.02);
    tone(d, "triangle", 659.25, 659.25, t + 0.04, 0.22, 0.08);
  },

  // === 7. COMMERCE & FINANCE ===
  cart(d, t) {
    // Caster wheel roll + metallic wire basket clink
    noise(d, "bandpass", 600, 1100, 2.0, t, 0.14, 0.09, 0.005);
    tone(d, "triangle", 1180, 940, t + 0.03, 0.06, 0.09, 0.001);
    tone(d, "sine", 1620, 1480, t + 0.08, 0.06, 0.07, 0.001);
  },
  bag(d, t) {
    // Crisp boutique paper tote crinkle
    noise(d, "bandpass", 1700, 3400, 1.8, t, 0.09, 0.14, 0.003);
    tone(d, "triangle", 340, 210, t, 0.05, 0.07);
  },
  card(d, t) {
    // Contactless POS tap + dual-note approval ping
    noise(d, "highpass", 2400, 2400, 1.4, t, 0.025, 0.12, 0.001);
    tone(d, "sine", 880, 880, t + 0.03, 0.08, 0.11);
    tone(d, "sine", 1318.5, 1318.5, t + 0.085, 0.14, 0.12);
  },
  wallet(d, t) {
    // Soft leather fold thud + crisp bill snap
    tone(d, "triangle", 195, 78, t, 0.065, 0.16, 0.002);
    noise(d, "bandpass", 1500, 2800, 1.6, t + 0.04, 0.065, 0.1, 0.003);
  },
  tag(d, t) {
    // Crisp cardstock swing tick + bright price chime
    noise(d, "highpass", 2200, 2600, 1.6, t, 0.025, 0.11, 0.001);
    tone(d, "sine", 1046.5, 1174.6, t + 0.035, 0.11, 0.09);
  },
  gift(d, t) {
    // Ribbon untie whoosh + celebratory 3-note chime
    noise(d, "bandpass", 1400, 3000, 1.5, t, 0.07, 0.1, 0.003);
    tone(d, "sine", 587.3, 587.3, t + 0.03, 0.12, 0.1);
    tone(d, "sine", 880, 880, t + 0.075, 0.16, 0.1);
    tone(d, "sine", 1174.6, 1174.6, t + 0.12, 0.18, 0.09);
  },
  trophy(d, t) {
    // Triumphant brass fanfare triad
    tone(d, "triangle", 523.25, 523.25, t, 0.1, 0.12);
    tone(d, "triangle", 659.25, 659.25, t + 0.06, 0.1, 0.12);
    tone(d, "triangle", 783.99, 783.99, t + 0.12, 0.22, 0.14);
  },
  crown(d, t) {
    // Bright royal harp flourish
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
      tone(d, "sine", f, f, t + i * 0.035, 0.18, 0.085);
    });
  },
  coin(d, t) {
    // High-Q spinning brass coin ring
    tone(d, "sine", 2093, 2040, t, 0.22, 0.1, 0.001);
    tone(d, "sine", 3136, 3080, t + 0.01, 0.18, 0.06, 0.001);
  },
  receipt(d, t) {
    // Thermal printer zip + crisp paper tear-off
    noise(d, "bandpass", 1900, 3200, 3.0, t, 0.08, 0.11, 0.003);
    noise(d, "highpass", 2600, 4200, 1.5, t + 0.09, 0.055, 0.14, 0.002);
  },

  // === 8. TECH & CONTROLS ===
  wifi(d, t) {
    // Ascending 3-step wireless beacon ping
    tone(d, "sine", 660, 660, t, 0.06, 0.09);
    tone(d, "sine", 880, 880, t + 0.045, 0.07, 0.09);
    tone(d, "sine", 1320, 1320, t + 0.09, 0.12, 0.1);
  },
  bluetooth(d, t) {
    // Crisp dual-tone Bluetooth pairing chirp
    tone(d, "sine", 784, 784, t, 0.07, 0.1);
    tone(d, "sine", 1174.6, 1174.6, t + 0.055, 0.11, 0.11);
  },
  battery(d, t) {
    // Rising electrical charge hum + full-charge beep
    tone(d, "sawtooth", 220, 660, t, 0.13, 0.06, 0.008);
    tone(d, "sine", 987.77, 987.77, t + 0.11, 0.12, 0.11);
  },
  cpu(d, t) {
    // Crisp high-tech silicon clock ticks
    [0, 0.04, 0.08, 0.12].forEach((dt, i) => {
      tone(d, "square", 1100 + i * 240, 900 + i * 240, t + dt, 0.025, 0.055, 0.001);
    });
  },
  terminal(d, t) {
    // Mechanical keystroke clack + ASCII prompt beep
    noise(d, "bandpass", 1800, 2600, 2.2, t, 0.025, 0.15, 0.001);
    tone(d, "square", 740, 740, t + 0.035, 0.07, 0.065, 0.002);
  },
  code(d, t) {
    // Dual crisp bracket keystrokes + syntax chime
    noise(d, "highpass", 2200, 2400, 2.0, t, 0.02, 0.13, 0.001);
    noise(d, "highpass", 2500, 2700, 2.0, t + 0.05, 0.02, 0.13, 0.001);
    tone(d, "triangle", 988, 988, t + 0.07, 0.09, 0.08);
  },
  database(d, t) {
    // Rapid storage platter seek clicks
    [0, 0.04, 0.085].forEach((dt, i) => {
      tone(d, "triangle", 480 + i * 90, 220, t + dt, 0.03, 0.12, 0.001);
      noise(d, "bandpass", 2000, 2800, 2.5, t + dt, 0.018, 0.09, 0.001);
    });
  },
  power(d, t) {
    // Latching power switch clunk + clean boot chime
    tone(d, "triangle", 190, 65, t, 0.06, 0.2, 0.001);
    tone(d, "sine", 523.25, 783.99, t + 0.04, 0.16, 0.1);
  },
  shield(d, t) {
    // Resonant metallic armor block thud
    tone(d, "triangle", 160, 58, t, 0.11, 0.22, 0.002);
    tone(d, "sine", 620, 480, t, 0.14, 0.1, 0.002);
  },
  key(d, t) {
    // Brass tumbler pin clicks + lock turn snap
    noise(d, "bandpass", 2800, 3600, 4.0, t, 0.02, 0.12, 0.001);
    tone(d, "sine", 1480, 1480, t + 0.04, 0.05, 0.08, 0.001);
    tone(d, "triangle", 320, 140, t + 0.075, 0.05, 0.14, 0.001);
  },

  // === 9. TIME & EVERYDAY ===
  clock(d, t) {
    // Crisp Swiss escapement tick-tock
    tone(d, "sine", 1420, 960, t, 0.022, 0.14, 0.001);
    tone(d, "sine", 1120, 740, t + 0.11, 0.022, 0.12, 0.001);
  },
  alarm(d, t) {
    // Twin-bell brass hammer ring
    [0, 0.045, 0.09, 0.135].forEach((dt) => {
      tone(d, "sine", 1860, 1840, t + dt, 0.06, 0.1, 0.001);
      tone(d, "sine", 2790, 2760, t + dt, 0.05, 0.06, 0.001);
    });
  },
  globe(d, t) {
    // Smooth orbital whoosh + latitude chime
    noise(d, "bandpass", 360, 1100, 1.8, t, 0.16, 0.08, 0.02);
    tone(d, "sine", 587.3, 880, t + 0.03, 0.18, 0.08);
  },
  lightbulb(d, t) {
    // Glass filament ping + warm electric hum
    tone(d, "sine", 1318.5, 1318.5, t, 0.14, 0.1, 0.002);
    tone(d, "triangle", 220, 220, t + 0.01, 0.14, 0.06, 0.01);
  },
  megaphone(d, t) {
    // Punchy PA horn squawk + bright burst
    tone(d, "sawtooth", 440, 580, t, 0.12, 0.085, 0.004);
    tone(d, "triangle", 660, 720, t + 0.02, 0.12, 0.09, 0.004);
  },
  book(d, t) {
    // Crisp hardcover page flutter
    noise(d, "bandpass", 1500, 3200, 1.5, t, 0.08, 0.13, 0.003);
    noise(d, "bandpass", 1200, 2600, 1.5, t + 0.07, 0.075, 0.1, 0.003);
  },
  paperclip(d, t) {
    // Springy steel wire twang
    tone(d, "triangle", 760, 1180, t, 0.11, 0.1, 0.002);
    tone(d, "sine", 1420, 1280, t + 0.04, 0.09, 0.07, 0.002);
  },
  magnet(d, t) {
    // Heavy magnetic snap + low inductive hum
    tone(d, "sine", 140, 70, t, 0.1, 0.2, 0.002);
    noise(d, "highpass", 2400, 3600, 2.0, t + 0.02, 0.03, 0.12, 0.001);
  },
  palette(d, t) {
    // Wooden palette tap + colorful triad chord
    tone(d, "triangle", 280, 150, t, 0.045, 0.13, 0.002);
    tone(d, "sine", 659.25, 659.25, t + 0.03, 0.15, 0.08);
    tone(d, "sine", 987.77, 987.77, t + 0.06, 0.16, 0.07);
  },
  dice(d, t) {
    // Wooden tabletop dice clatter
    [0, 0.05, 0.095].forEach((dt, i) => {
      tone(d, "triangle", 420 - i * 45, 190, t + dt, 0.032, 0.15 - i * 0.03, 0.001);
      noise(d, "bandpass", 1400, 2200, 2.2, t + dt, 0.022, 0.08, 0.001);
    });
  },

  // === 10. TRAVEL, MOTION & PLAY ===
  plane(d, t) {
    // Smooth jet turbine doppler whoosh
    noise(d, "bandpass", 420, 2100, 1.5, t, 0.24, 0.14, 0.02);
    tone(d, "sine", 340, 520, t, 0.18, 0.05);
  },
  car(d, t) {
    // Classic double car horn beep-beep
    tone(d, "sawtooth", 440, 440, t, 0.07, 0.065, 0.003);
    tone(d, "sawtooth", 554.37, 554.37, t, 0.07, 0.055, 0.003);
    tone(d, "sawtooth", 440, 440, t + 0.1, 0.09, 0.065, 0.003);
    tone(d, "sawtooth", 554.37, 554.37, t + 0.1, 0.09, 0.055, 0.003);
  },
  train(d, t) {
    // Rail track clack-clack + classic locomotive whistle chord
    noise(d, "bandpass", 1400, 2200, 2.5, t, 0.025, 0.1, 0.001);
    noise(d, "bandpass", 1200, 2000, 2.5, t + 0.075, 0.025, 0.09, 0.001);
    tone(d, "triangle", 392, 392, t + 0.02, 0.2, 0.1, 0.008);
    tone(d, "triangle", 493.88, 493.88, t + 0.02, 0.2, 0.08, 0.008);
    tone(d, "sine", 587.33, 587.33, t + 0.02, 0.2, 0.07, 0.008);
  },
  ship(d, t) {
    // Deep harbor foghorn + gentle water lap
    tone(d, "sawtooth", 146.83, 142, t, 0.28, 0.085, 0.02);
    noise(d, "lowpass", 680, 320, 1.4, t + 0.04, 0.22, 0.08, 0.02);
  },
  gamepad(d, t) {
    // Retro 8-bit chiptune powerup arpeggio
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
      tone(d, "square", f, f, t + i * 0.038, 0.055, 0.05, 0.002);
    });
  },
  target(d, t) {
    // Bowstring twang + crisp bullseye arrow thwack
    tone(d, "triangle", 320, 180, t, 0.06, 0.14, 0.002);
    tone(d, "sine", 140, 52, t + 0.05, 0.08, 0.22, 0.001);
    noise(d, "highpass", 1800, 2600, 1.8, t + 0.05, 0.03, 0.14, 0.001);
  },
  flag(d, t) {
    // Crisp fabric snap in brisk wind
    noise(d, "bandpass", 900, 2200, 1.8, t, 0.075, 0.14, 0.003);
    noise(d, "bandpass", 1100, 2600, 1.8, t + 0.08, 0.07, 0.11, 0.003);
  },
  sparkles(d, t) {
    // Shimmering fairy-dust harp glissando
    [1046.5, 1318.5, 1567.98, 2093].forEach((f, i) => {
      tone(d, "sine", f, f, t + i * 0.035, 0.14, 0.075);
    });
  },
  puzzle(d, t) {
    // Satisfying wooden jigsaw snap-fit
    tone(d, "triangle", 260, 110, t, 0.055, 0.17, 0.002);
    tone(d, "sine", 880, 1046.5, t + 0.04, 0.09, 0.09, 0.002);
  },
  award(d, t) {
    // Satin ribbon rustle + crisp medal clink
    noise(d, "bandpass", 1800, 3200, 1.8, t, 0.07, 0.1, 0.003);
    tone(d, "sine", 1760, 1740, t + 0.03, 0.18, 0.09, 0.001);
    tone(d, "sine", 2637, 2610, t + 0.06, 0.16, 0.06, 0.001);
  },

  // === 11. STUDIO & SOUND ===
  guitar(d, t) {
    // Soft plectrum brush + warm 5-string acoustic chord strum (E-A-D-G-B)
    noise(d, "bandpass", 1800, 3400, 1.8, t, 0.075, 0.09, 0.003);
    [164.81, 220, 293.66, 392, 493.88].forEach((freq, i) => {
      const off = i * 0.022;
      tone(d, "triangle", freq, freq, t + off, 0.28 - i * 0.02, 0.075, 0.003);
      tone(d, "sine", freq * 2, freq * 2, t + off, 0.16, 0.028, 0.003);
    });
  },
  drum(d, t) {
    // Twin snare-tom drum roll hit synced to left and right sticks
    tone(d, "sine", 190, 88, t, 0.085, 0.24, 0.001);
    noise(d, "bandpass", 1600, 3400, 1.8, t, 0.055, 0.19, 0.001);
    tone(d, "sine", 230, 102, t + 0.075, 0.09, 0.23, 0.001);
    noise(d, "bandpass", 1900, 4100, 1.8, t + 0.075, 0.065, 0.2, 0.001);
  },
  piano(d, t) {
    // Warm 3-note grand piano triad arpeggio synced to depressed keys
    [523.25, 659.25, 783.99].forEach((freq, i) => {
      const off = i * 0.055;
      tone(d, "sine", 140, 85, t + off, 0.025, 0.07, 0.001);
      tone(d, "triangle", freq, freq, t + off, 0.22, 0.09, 0.003);
      tone(d, "sine", freq * 2, freq * 2, t + off, 0.15, 0.04, 0.003);
    });
  },
  trumpet(d, t) {
    // Brassy jazz fanfare fifth with lip-scoop attack
    tone(d, "sawtooth", 360, 392, t, 0.09, 0.065, 0.008);
    tone(d, "triangle", 392, 392, t, 0.09, 0.09, 0.008);
    tone(d, "sawtooth", 540, 587.33, t + 0.07, 0.18, 0.07, 0.008);
    tone(d, "triangle", 587.33, 587.33, t + 0.07, 0.19, 0.1, 0.008);
  },
  metronome(d, t) {
    // Crisp wooden metronome tick-tock blocks synced to pendulum swing
    tone(d, "sine", 1480, 960, t, 0.024, 0.17, 0.001);
    noise(d, "bandpass", 2400, 1800, 4.5, t, 0.015, 0.14, 0.001);
    tone(d, "sine", 1180, 760, t + 0.115, 0.024, 0.15, 0.001);
    noise(d, "bandpass", 1900, 1400, 4.5, t + 0.115, 0.015, 0.12, 0.001);
  },
  equalizer(d, t) {
    // Punchy synth bass thump + resonant filter sweep
    tone(d, "sine", 125, 52, t, 0.11, 0.25, 0.002);
    tone(d, "sawtooth", 220, 440, t + 0.02, 0.14, 0.055, 0.006);
    noise(d, "bandpass", 650, 3600, 2.6, t + 0.02, 0.15, 0.12, 0.008);
  },
  cassette(d, t) {
    // Mechanical deck latch clack + warm analog tape chord
    noise(d, "bandpass", 2300, 1500, 4.2, t, 0.02, 0.22, 0.001);
    tone(d, "triangle", 280, 120, t, 0.032, 0.14, 0.001);
    noise(d, "highpass", 3400, 3400, 1.0, t + 0.035, 0.22, 0.035, 0.01);
    tone(d, "triangle", 261.63, 260, t + 0.04, 0.24, 0.08, 0.015);
    tone(d, "sine", 329.63, 328, t + 0.05, 0.22, 0.06, 0.015);
  },
  radio(d, t) {
    // FM tuning static sweep locking onto clear broadcast chime
    noise(d, "bandpass", 900, 4200, 2.2, t, 0.1, 0.14, 0.005);
    tone(d, "sine", 1420, 880, t + 0.03, 0.06, 0.04, 0.004);
    tone(d, "sine", 880, 880, t + 0.095, 0.16, 0.1, 0.003);
    tone(d, "sine", 1318.5, 1318.5, t + 0.12, 0.14, 0.06, 0.003);
  },
  projector(d, t) {
    // 24fps cinema sprocket clicks + warm halogen lamp swell
    [0, 0.042, 0.084, 0.126].forEach((off) => {
      noise(d, "bandpass", 2800, 1900, 4.6, t + off, 0.014, 0.16, 0.001);
      tone(d, "triangle", 480, 210, t + off, 0.016, 0.07, 0.001);
    });
    tone(d, "sine", 160, 220, t + 0.02, 0.2, 0.075, 0.03);
  },
  clapperboard(d, t) {
    // Slate lift tap + sharp hardwood cinema clack at t+75ms
    tone(d, "triangle", 320, 460, t, 0.03, 0.07, 0.002);
    noise(d, "bandpass", 1800, 950, 2.0, t + 0.075, 0.032, 0.34, 0.001);
    tone(d, "triangle", 760, 190, t + 0.075, 0.045, 0.24, 0.001);
  },

  // === 12. HOME & LAB ===
  window(d, t) {
    // Brass sash latch click + twin casements opening to gentle breeze
    noise(d, "bandpass", 3200, 2100, 4.8, t, 0.016, 0.2, 0.001);
    tone(d, "triangle", 580, 320, t, 0.028, 0.09, 0.001);
    noise(d, "bandpass", 460, 1550, 2.2, t + 0.035, 0.24, 0.13, 0.025);
  },
  door(d, t) {
    // Doorknob latch click + wooden door swing resonance
    noise(d, "bandpass", 2800, 1900, 4.5, t, 0.018, 0.22, 0.001);
    tone(d, "triangle", 520, 260, t, 0.026, 0.1, 0.001);
    tone(d, "sine", 145, 78, t + 0.045, 0.11, 0.18, 0.004);
    noise(d, "bandpass", 380, 740, 1.5, t + 0.045, 0.14, 0.09, 0.015);
  },
  toaster(d, t) {
    // Spring lever clunk + crisp pop-up bell ding synced to toast launch
    tone(d, "triangle", 220, 95, t, 0.045, 0.18, 0.001);
    noise(d, "bandpass", 2200, 1400, 3.6, t + 0.068, 0.025, 0.22, 0.001);
    tone(d, "sine", 1318.5, 1318.5, t + 0.072, 0.22, 0.11, 0.002);
    tone(d, "sine", 2637, 2637, t + 0.072, 0.14, 0.045, 0.002);
  },
  blender(d, t) {
    // Electric motor whir + high-speed ice crush crackles
    tone(d, "sawtooth", 140, 360, t, 0.22, 0.07, 0.02);
    tone(d, "sine", 110, 240, t, 0.24, 0.12, 0.02);
    noise(d, "bandpass", 2400, 5200, 1.8, t + 0.03, 0.18, 0.15, 0.01);
  },
  washer(d, t) {
    // Swirling wash water slosh + smooth drum spin hum
    tone(d, "sine", 95, 185, t, 0.26, 0.13, 0.03);
    noise(d, "bandpass", 360, 1180, 1.6, t, 0.14, 0.14, 0.015);
    noise(d, "bandpass", 980, 420, 1.8, t + 0.12, 0.14, 0.11, 0.015);
  },
  microscope(d, t) {
    // Fine brass focus rack clicks + illuminated specimen chime
    [0, 0.034, 0.068].forEach((off) => {
      noise(d, "bandpass", 3400, 2400, 5.2, t + off, 0.012, 0.16, 0.001);
    });
    tone(d, "sine", 1174.66, 1318.5, t + 0.06, 0.16, 0.09, 0.003);
  },
  telescope(d, t) {
    // Brass optical barrel slide + celestial starlight chime
    noise(d, "bandpass", 1200, 2800, 2.2, t, 0.09, 0.13, 0.008);
    tone(d, "sine", 1174.66, 1174.66, t + 0.05, 0.18, 0.085, 0.002);
    tone(d, "sine", 1760, 1760, t + 0.085, 0.18, 0.07, 0.002);
  },
  flask(d, t) {
    // Glass Erlenmeyer clink + rising effervescent chemical bubbles
    tone(d, "sine", 1860, 1840, t, 0.09, 0.08, 0.001);
    noise(d, "highpass", 3200, 5600, 1.6, t + 0.02, 0.18, 0.07, 0.01);
    tone(d, "sine", 520, 960, t + 0.02, 0.06, 0.11, 0.002);
    tone(d, "sine", 680, 1240, t + 0.07, 0.06, 0.1, 0.002);
    tone(d, "sine", 840, 1480, t + 0.12, 0.06, 0.085, 0.002);
  },
  campfire(d, t) {
    // Warm hearth whoosh + crackling firewood ember pops
    noise(d, "lowpass", 620, 1300, 1.3, t, 0.24, 0.15, 0.02);
    [0.025, 0.075, 0.135].forEach((off, i) => {
      noise(d, "highpass", 2900 + i * 500, 4800, 3.6, t + off, 0.024, 0.13 - i * 0.02, 0.001);
    });
    tone(d, "sine", 1380, 1680, t + 0.1, 0.07, 0.05, 0.002);
  },
  parachute(d, t) {
    // Ripstop nylon canopy snap + breezy descent whoosh
    noise(d, "bandpass", 900, 2600, 1.5, t, 0.06, 0.22, 0.002);
    tone(d, "sine", 145, 72, t, 0.07, 0.18, 0.002);
    noise(d, "bandpass", 380, 920, 1.8, t + 0.05, 0.22, 0.12, 0.02);
  },

  // === 13. CORE UI II ===
  menu(d, t) {
    // Staggered 3-bar drawer slide ticks
    [520, 660, 820].forEach((f, i) => {
      noise(d, "bandpass", 2200 + i * 400, 1800, 3.8, t + i * 0.042, 0.016, 0.14, 0.001);
      tone(d, "sine", f, f * 1.1, t + i * 0.042, 0.04, 0.065, 0.002);
    });
  },
  close(d, t) {
    // Crisp cross-blade snap shut
    tone(d, "sine", 620, 310, t, 0.065, 0.12, 0.002);
    noise(d, "highpass", 2400, 1800, 2.2, t, 0.025, 0.14, 0.001);
  },
  filter(d, t) {
    // Liquid funnel pour + single filtered drop plink
    noise(d, "bandpass", 900, 2600, 2.5, t, 0.07, 0.12, 0.006);
    tone(d, "sine", 540, 1180, t + 0.055, 0.08, 0.12, 0.002);
  },
  sort(d, t) {
    // Twin opposing elevator swaps (low-to-high & high-to-low)
    tone(d, "triangle", 440, 740, t, 0.075, 0.09, 0.002);
    tone(d, "triangle", 740, 440, t + 0.045, 0.075, 0.08, 0.002);
  },
  refresh(d, t) {
    // Smooth circular whoosh + crisp reset chime
    noise(d, "bandpass", 520, 2200, 1.8, t, 0.16, 0.14, 0.015);
    tone(d, "sine", 587.33, 880, t + 0.08, 0.12, 0.09, 0.003);
  },
  share(d, t) {
    // Outbound node broadcast triad
    tone(d, "sine", 523.25, 523.25, t, 0.07, 0.09);
    tone(d, "sine", 783.99, 783.99, t + 0.04, 0.08, 0.085);
    tone(d, "sine", 1046.5, 1046.5, t + 0.08, 0.12, 0.08);
  },
  copy(d, t) {
    // crisp double-sheet photocopy snap
    noise(d, "bandpass", 1900, 3600, 2.0, t, 0.045, 0.15, 0.002);
    tone(d, "sine", 784, 784, t, 0.05, 0.075, 0.001);
    tone(d, "sine", 987.77, 987.77, t + 0.05, 0.07, 0.085, 0.001);
  },
  layers(d, t) {
    // Stacked cardstock fan-out cascade
    [0, 0.042, 0.084].forEach((off, i) => {
      noise(d, "bandpass", 1500 + i * 450, 2900, 2.0, t + off, 0.035, 0.12, 0.002);
      tone(d, "sine", 480 + i * 160, 520 + i * 160, t + off, 0.06, 0.065, 0.002);
    });
  },
  grid(d, t) {
    // 4-tile matrix lock ticks
    [523.25, 659.25, 783.99, 987.77].forEach((f, i) => {
      tone(d, "triangle", f, f, t + i * 0.034, 0.045, 0.08, 0.001);
    });
  },
  dashboard(d, t) {
    // Revving analog tachometer sweep + detent click
    tone(d, "sawtooth", 140, 420, t, 0.13, 0.055, 0.01);
    tone(d, "sine", 280, 680, t, 0.14, 0.08, 0.01);
    noise(d, "bandpass", 2800, 2000, 4.5, t + 0.13, 0.016, 0.16, 0.001);
  },

  // === 14. COMMS & FILES II ===
  inbox(d, t) {
    // Envelope drop swoosh + tray settle thud
    noise(d, "bandpass", 1400, 3200, 1.8, t, 0.06, 0.14);
    tone(d, "sine", 240, 110, t + 0.05, 0.07, 0.18, 0.002);
    tone(d, "sine", 660, 880, t + 0.07, 0.1, 0.07);
  },
  archive(d, t) {
    // Cardboard banker-box lid thud + clasp latch
    tone(d, "triangle", 190, 88, t, 0.075, 0.18, 0.002);
    noise(d, "bandpass", 1400, 2600, 2.0, t + 0.02, 0.055, 0.14, 0.002);
  },
  reply(d, t) {
    // Quick return zip swoosh
    noise(d, "bandpass", 2400, 900, 1.6, t, 0.09, 0.14);
    tone(d, "sine", 780, 520, t + 0.015, 0.09, 0.09);
  },
  forward(d, t) {
    // Twin forward zip pips
    tone(d, "sine", 540, 840, t, 0.055, 0.09);
    tone(d, "sine", 720, 1120, t + 0.048, 0.065, 0.095);
  },
  voicemail(d, t) {
    // Micro-cassette reel spin + dual answering-machine beep
    noise(d, "bandpass", 1800, 2800, 3.0, t, 0.08, 0.08, 0.005);
    tone(d, "sine", 940, 940, t + 0.03, 0.11, 0.1, 0.002);
  },
  broadcast(d, t) {
    // Radio mast static chirp + radiating beacon harmonic
    noise(d, "bandpass", 2200, 4200, 2.4, t, 0.035, 0.11, 0.002);
    tone(d, "sine", 880, 880, t + 0.02, 0.12, 0.09);
    tone(d, "sine", 1318.5, 1318.5, t + 0.07, 0.14, 0.08);
  },
  stamp(d, t) {
    // Heavy rubber-stamp desk thump at t+65ms
    noise(d, "bandpass", 1100, 600, 1.8, t + 0.065, 0.04, 0.24, 0.001);
    tone(d, "sine", 160, 54, t + 0.065, 0.09, 0.28, 0.001);
  },
  newspaper(d, t) {
    // Crisp broadsheet snap-fold rustle
    noise(d, "bandpass", 1600, 4400, 1.5, t, 0.095, 0.18, 0.004);
    noise(d, "bandpass", 1200, 3000, 1.7, t + 0.06, 0.065, 0.12, 0.004);
  },
  notebook(d, t) {
    // Wire spiral spring twang + paper cover flap
    tone(d, "triangle", 820, 1240, t, 0.06, 0.08, 0.002);
    noise(d, "bandpass", 1700, 3400, 1.8, t + 0.02, 0.07, 0.14, 0.003);
  },
  signature(d, t) {
    // Smooth fountain pen ink flourish across parchment
    noise(d, "bandpass", 2800, 4900, 2.4, t + 0.02, 0.07, 0.14, 0.004);
    noise(d, "bandpass", 3400, 5400, 2.4, t + 0.1, 0.08, 0.13, 0.004);
    tone(d, "sine", 880, 1174.66, t + 0.11, 0.1, 0.045);
  },

  // === 15. MEDIA & AUDIO II ===
  stop(d, t) {
    // Heavy tape transport stop clunk
    noise(d, "bandpass", 1500, 800, 3.2, t, 0.024, 0.22, 0.001);
    tone(d, "triangle", 210, 82, t, 0.055, 0.18, 0.001);
  },
  rewind(d, t) {
    // High-speed reverse tape chirp
    tone(d, "sawtooth", 980, 340, t, 0.11, 0.065, 0.003);
    noise(d, "bandpass", 2600, 1100, 2.2, t, 0.11, 0.11, 0.004);
  },
  "fast-forward"(d, t) {
    // High-speed forward tape chirp
    tone(d, "sawtooth", 340, 980, t, 0.11, 0.065, 0.003);
    noise(d, "bandpass", 1100, 2600, 2.2, t, 0.11, 0.11, 0.004);
  },
  shuffle(d, t) {
    // Riffle-card shuffle flutter + playful chime
    for (let i = 0; i < 4; i++) {
      noise(d, "bandpass", 2200 + i * 300, 3600, 2.6, t + i * 0.025, 0.018, 0.13, 0.001);
    }
    tone(d, "sine", 659.25, 987.77, t + 0.06, 0.1, 0.075);
  },
  repeat(d, t) {
    // Seamless loop whoosh + octave lock chime
    noise(d, "bandpass", 700, 1800, 2.0, t, 0.11, 0.1, 0.01);
    tone(d, "sine", 440, 880, t + 0.03, 0.13, 0.085);
  },
  film(d, t) {
    // 35mm film sprocket advance clatter
    [0, 0.04, 0.08, 0.12].forEach((off) => {
      noise(d, "bandpass", 2600, 1800, 4.2, t + off, 0.015, 0.16, 0.001);
      tone(d, "triangle", 420, 200, t + off, 0.018, 0.07, 0.001);
    });
  },
  tv(d, t) {
    // CRT power-on static burst + warm phosphor hum
    noise(d, "highpass", 2200, 5400, 1.4, t, 0.06, 0.16, 0.002);
    tone(d, "sine", 140, 180, t + 0.02, 0.15, 0.1, 0.01);
    tone(d, "sine", 1560, 1560, t + 0.03, 0.09, 0.04, 0.005);
  },
  speaker(d, t) {
    // Punchy subwoofer excursion thump-thump
    tone(d, "sine", 95, 42, t, 0.1, 0.3, 0.001);
    tone(d, "sine", 110, 46, t + 0.085, 0.11, 0.25, 0.001);
  },
  record(d, t) {
    // Studio recording tally pre-roll beep
    tone(d, "sine", 1000, 1000, t, 0.12, 0.1, 0.002);
    tone(d, "sine", 2000, 2000, t, 0.08, 0.04, 0.002);
  },
  captions(d, t) {
    // Soft broadcast teletype caption pops
    [0, 0.045, 0.09].forEach((off, i) => {
      tone(d, "triangle", 680 + i * 110, 520, t + off, 0.025, 0.075, 0.001);
    });
  },

  // === 16. KINETIC TOOLS II ===
  saw(d, t) {
    // Crisp wood hand-saw push & pull rasp
    noise(d, "bandpass", 1600, 3400, 2.2, t, 0.07, 0.18, 0.004);
    noise(d, "bandpass", 2400, 1400, 2.2, t + 0.08, 0.07, 0.16, 0.004);
  },
  drill(d, t) {
    // High-RPM cordless drill motor whine
    tone(d, "sawtooth", 240, 580, t, 0.18, 0.08, 0.01);
    noise(d, "bandpass", 1800, 3800, 2.4, t + 0.01, 0.17, 0.13, 0.01);
  },
  screwdriver(d, t) {
    // Ratcheting driver clicks + snug torque finish
    for (let i = 0; i < 3; i++) {
      noise(d, "bandpass", 3000, 2100, 5.0, t + i * 0.042, 0.014, 0.18, 0.001);
      tone(d, "triangle", 540, 240, t + i * 0.042, 0.018, 0.075, 0.001);
    }
  },
  axe(d, t) {
    // Heavy timber chop thud at t+75ms + flying wood chip snap
    tone(d, "sine", 165, 52, t + 0.075, 0.11, 0.28, 0.001);
    noise(d, "bandpass", 1400, 750, 2.0, t + 0.075, 0.045, 0.24, 0.001);
    noise(d, "highpass", 2600, 3800, 2.5, t + 0.1, 0.03, 0.12, 0.001);
  },
  shovel(d, t) {
    // Gritty earth scoop crunch + toss whoosh
    noise(d, "bandpass", 700, 2100, 1.5, t, 0.09, 0.2, 0.005);
    noise(d, "bandpass", 1400, 800, 1.8, t + 0.095, 0.09, 0.14, 0.005);
  },
  ruler(d, t) {
    // Caliper slider zip + millimeter detent ticks
    for (let i = 0; i < 4; i++) {
      noise(d, "highpass", 3200, 4400, 3.0, t + i * 0.028, 0.012, 0.12, 0.001);
    }
    tone(d, "sine", 880, 1046.5, t + 0.08, 0.06, 0.07);
  },
  eraser(d, t) {
    // Soft rubber friction rub-rub across paper
    noise(d, "bandpass", 800, 1600, 1.8, t, 0.07, 0.16, 0.006);
    noise(d, "bandpass", 1400, 900, 1.8, t + 0.085, 0.07, 0.14, 0.006);
  },
  pipette(d, t) {
    // Rubber bulb squeeze + clean lab glass drop plink
    noise(d, "bandpass", 900, 1800, 2.0, t, 0.045, 0.1, 0.004);
    tone(d, "sine", 620, 1380, t + 0.055, 0.075, 0.13, 0.002);
  },
  crop(d, t) {
    // Precision guillotine frame snap
    noise(d, "bandpass", 2800, 1900, 4.0, t, 0.02, 0.18, 0.001);
    tone(d, "triangle", 520, 280, t + 0.01, 0.04, 0.11, 0.001);
  },
  wand(d, t) {
    // Magical sweeping chime + twin high glockenspiel sparkles
    noise(d, "bandpass", 1400, 4200, 1.6, t, 0.12, 0.1, 0.01);
    [1046.5, 1318.5, 1567.98, 2093, 2637].forEach((f, i) => {
      tone(d, "sine", f, f, t + i * 0.032, 0.16, 0.075);
    });
  },

  // === 17. WORLD & ENERGY II ===
  satellite(d, t) {
    // Telemetry chirp + orbital relay ping
    tone(d, "sine", 1320, 1760, t, 0.05, 0.08, 0.002);
    tone(d, "sine", 1760, 1320, t + 0.055, 0.06, 0.08, 0.002);
    tone(d, "sine", 2093, 2093, t + 0.11, 0.14, 0.065, 0.002);
  },
  atom(d, t) {
    // Quantum harmonic shimmer + sub-atomic resonance
    tone(d, "sine", 660, 990, t, 0.16, 0.08);
    tone(d, "sine", 1320, 1980, t + 0.02, 0.18, 0.05);
    tone(d, "triangle", 220, 330, t, 0.14, 0.07);
  },
  planet(d, t) {
    // Deep cosmic synth swell
    tone(d, "sine", 164.81, 220, t, 0.26, 0.14, 0.02);
    tone(d, "triangle", 329.63, 440, t + 0.03, 0.24, 0.07, 0.02);
  },
  ufo(d, t) {
    // Classic sci-fi saucer vibrato beam warble
    tone(d, "sine", 420, 760, t, 0.09, 0.1, 0.005);
    tone(d, "sine", 760, 480, t + 0.09, 0.09, 0.09, 0.005);
    tone(d, "sine", 480, 920, t + 0.18, 0.1, 0.07, 0.005);
  },
  volcano(d, t) {
    // Deep subterranean rumble + pyroclastic burst
    tone(d, "sine", 82, 36, t, 0.24, 0.28, 0.004);
    noise(d, "lowpass", 420, 1400, 1.0, t + 0.02, 0.24, 0.24, 0.01);
    noise(d, "highpass", 2400, 4200, 2.0, t + 0.06, 0.08, 0.1, 0.002);
  },
  plug(d, t) {
    // Solid wall-outlet prong insertion snap + 60Hz hum blip
    noise(d, "bandpass", 2200, 1400, 4.0, t, 0.02, 0.22, 0.001);
    tone(d, "triangle", 240, 110, t, 0.04, 0.15, 0.001);
    tone(d, "sine", 120, 120, t + 0.03, 0.09, 0.09, 0.004);
  },
  windmill(d, t) {
    // Cyclic airy turbine blade whoosh
    noise(d, "bandpass", 320, 960, 1.8, t, 0.16, 0.13, 0.02);
    noise(d, "bandpass", 880, 380, 1.8, t + 0.14, 0.16, 0.1, 0.02);
  },
  solar(d, t) {
    // Clean photovoltaic power-up chime
    tone(d, "sine", 587.33, 587.33, t, 0.14, 0.085);
    tone(d, "sine", 880, 880, t + 0.04, 0.16, 0.08);
    tone(d, "triangle", 1174.66, 1174.66, t + 0.08, 0.18, 0.06);
  },
  radar(d, t) {
    // Classic submarine sonar sweep ping + echo
    tone(d, "sine", 1380, 1360, t + 0.08, 0.24, 0.12, 0.002);
    tone(d, "sine", 1380, 1360, t + 0.22, 0.16, 0.045, 0.002);
  },
  dna(d, t) {
    // Cascading double-helix marimba arpeggio
    [523.25, 659.25, 783.99, 987.77, 1174.66].forEach((f, i) => {
      tone(d, "sine", f, f, t + i * 0.036, 0.11, 0.075, 0.002);
    });
  },

  // === 18. WEATHER & NATURE II ===
  tornado(d, t) {
    // Swirling funnel vortex wind roar
    noise(d, "bandpass", 340, 1650, 2.4, t, 0.16, 0.2, 0.015);
    noise(d, "bandpass", 1500, 460, 2.4, t + 0.12, 0.18, 0.16, 0.015);
  },
  rainbow(d, t) {
    // Luminous 6-note pentatonic harp arc
    [523.25, 587.33, 659.25, 783.99, 880, 1046.5].forEach((f, i) => {
      tone(d, "sine", f, f, t + i * 0.032, 0.18, 0.07, 0.003);
    });
  },
  sunrise(d, t) {
    // Ascending warm dawn chord swell
    tone(d, "sine", 392, 523.25, t, 0.22, 0.09, 0.02);
    tone(d, "sine", 587.33, 659.25, t + 0.04, 0.22, 0.075, 0.02);
    tone(d, "triangle", 783.99, 1046.5, t + 0.08, 0.22, 0.055, 0.02);
  },
  sunset(d, t) {
    // Gentle descending twilight fifth
    tone(d, "sine", 659.25, 493.88, t, 0.22, 0.09, 0.015);
    tone(d, "sine", 440, 329.63, t + 0.04, 0.24, 0.08, 0.015);
  },
  waves(d, t) {
    // Rolling ocean surf wash + ebb
    noise(d, "lowpass", 420, 1250, 1.2, t, 0.15, 0.16, 0.025);
    noise(d, "lowpass", 1150, 320, 1.2, t + 0.12, 0.18, 0.13, 0.02);
  },
  tree(d, t) {
    // Gentle wind rustling leafy canopy
    noise(d, "bandpass", 1200, 2800, 1.6, t, 0.12, 0.13, 0.012);
    noise(d, "bandpass", 1800, 1000, 1.6, t + 0.1, 0.12, 0.1, 0.012);
  },
  flower(d, t) {
    // Delicate blooming petal chime
    tone(d, "sine", 783.99, 987.77, t, 0.14, 0.085, 0.004);
    tone(d, "sine", 1174.66, 1318.51, t + 0.045, 0.16, 0.07, 0.004);
  },
  cactus(d, t) {
    // Crisp woody desert tap + bright blossom pop
    tone(d, "triangle", 340, 190, t, 0.04, 0.12, 0.002);
    tone(d, "sine", 987.77, 1318.5, t + 0.04, 0.1, 0.08, 0.002);
  },
  sprout(d, t) {
    // Fresh botanical pop + two-leaf unfurl tone
    tone(d, "sine", 480, 880, t, 0.08, 0.1, 0.003);
    tone(d, "sine", 880, 1174.66, t + 0.045, 0.1, 0.075, 0.003);
  },
  feather(d, t) {
    // Weightless airy flutter
    noise(d, "bandpass", 1200, 2400, 2.2, t, 0.1, 0.08, 0.01);
    noise(d, "bandpass", 1800, 1100, 2.2, t + 0.09, 0.1, 0.065, 0.01);
  },

  // === 19. COMMERCE & FINANCE II ===
  "piggy-bank"(d, t) {
    // Ceramic coin drop clink + cheerful jingle
    tone(d, "sine", 2093, 2040, t, 0.14, 0.09, 0.001);
    tone(d, "triangle", 220, 110, t + 0.065, 0.07, 0.16, 0.002);
    tone(d, "sine", 1568, 1540, t + 0.08, 0.15, 0.08, 0.002);
  },
  bank(d, t) {
    // Marble vault door thud + solemn major chord
    tone(d, "sine", 140, 64, t, 0.1, 0.22, 0.002);
    tone(d, "triangle", 392, 392, t + 0.03, 0.18, 0.09);
    tone(d, "sine", 587.33, 587.33, t + 0.06, 0.18, 0.075);
  },
  diamond(d, t) {
    // Brilliant high-carat crystal bell shimmer
    tone(d, "sine", 1760, 1760, t, 0.2, 0.08, 0.001);
    tone(d, "sine", 2637, 2637, t + 0.035, 0.2, 0.065, 0.001);
    tone(d, "sine", 3520, 3520, t + 0.07, 0.18, 0.045, 0.001);
  },
  barcode(d, t) {
    // Laser checkout scanner beep
    tone(d, "square", 2100, 2100, t + 0.03, 0.075, 0.065, 0.001);
  },
  "qr-code"(d, t) {
    // Optical camera scan lock double-chirp
    tone(d, "sine", 1174.66, 1174.66, t + 0.02, 0.05, 0.09, 0.001);
    tone(d, "sine", 1567.98, 1567.98, t + 0.075, 0.08, 0.1, 0.001);
  },
  scale(d, t) {
    // Brass balance beam fulcrum clink + equilibrium chime
    noise(d, "bandpass", 2800, 2000, 4.5, t, 0.018, 0.15, 0.001);
    tone(d, "sine", 880, 784, t + 0.02, 0.12, 0.08);
    tone(d, "sine", 784, 880, t + 0.12, 0.14, 0.08);
  },
  briefcase(d, t) {
    // Twin chrome briefcase latch snaps
    noise(d, "bandpass", 3200, 2200, 4.5, t, 0.018, 0.2, 0.001);
    noise(d, "bandpass", 3400, 2400, 4.5, t + 0.065, 0.018, 0.2, 0.001);
    tone(d, "triangle", 260, 120, t + 0.01, 0.05, 0.11, 0.002);
  },
  "chart-up"(d, t) {
    // Rising 4-step stock ticker climb
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
      tone(d, "triangle", f, f, t + i * 0.04, 0.09, 0.08, 0.002);
    });
  },
  percent(d, t) {
    // Crisp discount register ping
    tone(d, "sine", 987.77, 987.77, t, 0.07, 0.09, 0.002);
    tone(d, "sine", 1479.98, 1479.98, t + 0.05, 0.12, 0.09, 0.002);
  },
  ticket(d, t) {
    // Crisp perforated ticket stub tear-off
    noise(d, "bandpass", 2200, 4800, 1.8, t, 0.075, 0.19, 0.003);
    tone(d, "sine", 784, 987.77, t + 0.045, 0.09, 0.075);
  },

  // === 20. TECH & CONTROLS II ===
  keyboard(d, t) {
    // Tactile 3-keystroke mechanical switch clack
    [0, 0.045, 0.09].forEach((off, i) => {
      noise(d, "bandpass", 2100 + i * 250, 1400, 3.2, t + off, 0.018, 0.2, 0.001);
      tone(d, "triangle", 360 + i * 35, 160, t + off, 0.022, 0.1, 0.001);
    });
  },
  mouse(d, t) {
    // Crisp micro-switch click + scroll wheel notch
    noise(d, "bandpass", 3400, 2200, 4.5, t, 0.014, 0.22, 0.001);
    tone(d, "sine", 920, 420, t, 0.022, 0.1, 0.001);
    noise(d, "highpass", 3600, 4200, 3.5, t + 0.045, 0.012, 0.14, 0.001);
  },
  router(d, t) {
    // Packet burst chirp + wireless carrier lock
    noise(d, "bandpass", 2400, 4200, 2.8, t, 0.03, 0.12, 0.001);
    tone(d, "sine", 880, 1318.5, t + 0.025, 0.09, 0.09);
    tone(d, "sine", 1760, 1760, t + 0.075, 0.1, 0.07);
  },
  server(d, t) {
    // Enterprise blade rack seek clicks + status LED beep
    [0, 0.038].forEach((off) => {
      noise(d, "bandpass", 2400, 1600, 3.8, t + off, 0.018, 0.16, 0.001);
      tone(d, "triangle", 420, 180, t + off, 0.025, 0.1, 0.001);
    });
    tone(d, "sine", 1174.66, 1174.66, t + 0.06, 0.09, 0.075);
  },
  bug(d, t) {
    // Quick insectoid skitter ticks
    for (let i = 0; i < 4; i++) {
      noise(d, "highpass", 3200, 4800, 3.5, t + i * 0.028, 0.014, 0.14, 0.001);
      tone(d, "triangle", 640 - i * 40, 340, t + i * 0.028, 0.016, 0.06, 0.001);
    }
  },
  usb(d, t) {
    // Metallic USB-C plug click + host chime
    noise(d, "bandpass", 2800, 1900, 4.2, t, 0.018, 0.2, 0.001);
    tone(d, "sine", 587.33, 880, t + 0.03, 0.1, 0.095);
  },
  fingerprint(d, t) {
    // Biometric ridge scan sweep + unlock approval ping
    tone(d, "sine", 480, 960, t, 0.12, 0.075, 0.008);
    tone(d, "sine", 1046.5, 1318.5, t + 0.1, 0.12, 0.095, 0.002);
  },
  "sd-card"(d, t) {
    // Spring-loaded card slot click-lock
    noise(d, "bandpass", 3100, 2100, 4.8, t, 0.018, 0.22, 0.001);
    tone(d, "triangle", 520, 260, t, 0.028, 0.11, 0.001);
    tone(d, "sine", 880, 1046.5, t + 0.03, 0.07, 0.07);
  },
  toggle(d, t) {
    // Crisp tactile rocker switch snap-clack
    noise(d, "bandpass", 2600, 1800, 4.2, t, 0.018, 0.22, 0.001);
    tone(d, "sine", 420, 760, t + 0.01, 0.06, 0.11, 0.001);
  },
  webcam(d, t) {
    // Motorized lens autofocus ticks + tally chime
    noise(d, "bandpass", 2600, 1900, 4.5, t, 0.014, 0.16, 0.001);
    tone(d, "sine", 987.77, 1318.5, t + 0.03, 0.1, 0.085);
  },

  // === 21. TIME & EVERYDAY II ===
  stopwatch(d, t) {
    // Mechanical crown push + crisp split-second ticks
    noise(d, "bandpass", 3400, 2200, 4.8, t, 0.016, 0.22, 0.001);
    tone(d, "sine", 1480, 1020, t + 0.04, 0.02, 0.12, 0.001);
    tone(d, "sine", 1480, 1020, t + 0.11, 0.02, 0.1, 0.001);
  },
  watch(d, t) {
    // Delicate wristwatch quartz tick-tick
    tone(d, "sine", 1760, 1240, t, 0.016, 0.11, 0.001);
    tone(d, "sine", 1560, 1080, t + 0.09, 0.016, 0.095, 0.001);
  },
  glasses(d, t) {
    // Soft frame hinge tap + bright optical glint chime
    tone(d, "triangle", 480, 260, t, 0.03, 0.08, 0.001);
    tone(d, "sine", 1568, 2093, t + 0.035, 0.14, 0.075, 0.002);
  },
  backpack(d, t) {
    // Nylon zipper zip + canvas pack bounce
    noise(d, "bandpass", 2200, 4600, 3.0, t, 0.085, 0.17, 0.003);
    tone(d, "sine", 190, 95, t + 0.04, 0.06, 0.14, 0.003);
  },
  flashlight(d, t) {
    // Heavy tactical tail-switch click + bright beam hum
    noise(d, "bandpass", 2800, 1700, 4.5, t, 0.02, 0.24, 0.001);
    tone(d, "triangle", 360, 140, t, 0.035, 0.12, 0.001);
    tone(d, "sine", 880, 1174.66, t + 0.025, 0.11, 0.08);
  },
  candle(d, t) {
    // Match strike hiss + soft warm hearth flicker
    noise(d, "highpass", 2600, 4800, 1.8, t, 0.065, 0.14, 0.003);
    tone(d, "sine", 523.25, 587.33, t + 0.04, 0.18, 0.06, 0.015);
  },
  broom(d, t) {
    // Brisk twin straw bristle sweeps across floor
    noise(d, "bandpass", 1000, 2400, 1.4, t, 0.09, 0.16, 0.006);
    noise(d, "bandpass", 1200, 2600, 1.4, t + 0.105, 0.09, 0.14, 0.006);
  },
  spray(d, t) {
    // Trigger squeeze click + pressurized fine atomized mist hiss
    noise(d, "bandpass", 2400, 1600, 3.8, t, 0.018, 0.16, 0.001);
    noise(d, "highpass", 3200, 5800, 1.2, t + 0.025, 0.13, 0.2, 0.008);
  },
  soap(d, t) {
    // Pump squish + bubbly lather bloop
    noise(d, "bandpass", 900, 1900, 2.2, t, 0.055, 0.14, 0.005);
    tone(d, "sine", 420, 940, t + 0.05, 0.08, 0.12, 0.002);
  },
  mirror(d, t) {
    // Pure crystal glass ping + specular gleam shimmer
    tone(d, "sine", 1975.5, 1960, t, 0.18, 0.08, 0.001);
    tone(d, "sine", 2960, 2940, t + 0.035, 0.16, 0.055, 0.001);
  },

  // === 22. TRAVEL & PLAY II ===
  helicopter(d, t) {
    // Rhythmic twin-blade rotor chop + turbine whine
    [0, 0.055, 0.11, 0.165].forEach((off) => {
      noise(d, "lowpass", 520, 180, 1.5, t + off, 0.042, 0.2, 0.003);
      tone(d, "sine", 110, 62, t + off, 0.038, 0.14, 0.002);
    });
  },
  submarine(d, t) {
    // Periscope hydraulic hiss + deep underwater sonar ping
    noise(d, "bandpass", 1200, 2400, 2.2, t, 0.06, 0.1, 0.005);
    tone(d, "sine", 1244.5, 1235, t + 0.045, 0.26, 0.11, 0.002);
  },
  sailboat(d, t) {
    // Canvas sail billow snap + gentle hull water wake
    noise(d, "bandpass", 650, 1800, 1.6, t, 0.09, 0.16, 0.008);
    noise(d, "lowpass", 680, 280, 1.4, t + 0.05, 0.2, 0.1, 0.02);
  },
  balloon(d, t) {
    // Burner flame whoosh + airy buoyant ascent chime
    noise(d, "lowpass", 420, 1100, 1.3, t, 0.16, 0.14, 0.015);
    tone(d, "sine", 440, 659.25, t + 0.03, 0.18, 0.08, 0.01);
  },
  skateboard(d, t) {
    // Crisp wooden tail-pop ollie + urethane wheel roll
    noise(d, "bandpass", 1800, 900, 2.4, t, 0.03, 0.22, 0.001);
    tone(d, "triangle", 260, 120, t, 0.045, 0.16, 0.001);
    noise(d, "bandpass", 700, 1300, 2.0, t + 0.09, 0.1, 0.12, 0.005);
  },
  bowling(d, t) {
    // Heavy lane roll + wooden pin strike clatter at t+85ms
    noise(d, "lowpass", 360, 220, 1.4, t, 0.085, 0.14, 0.005);
    tone(d, "sine", 140, 58, t + 0.085, 0.09, 0.22, 0.001);
    [0.085, 0.11, 0.135].forEach((off, i) => {
      tone(d, "triangle", 760 + i * 140, 380, t + off, 0.045, 0.14, 0.001);
      noise(d, "bandpass", 1800, 2800, 2.5, t + off, 0.025, 0.12, 0.001);
    });
  },
  basketball(d, t) {
    // Hollow rubber hardwood dribble bounce-bounce
    tone(d, "sine", 175, 68, t, 0.08, 0.26, 0.001);
    tone(d, "sine", 195, 76, t + 0.11, 0.075, 0.2, 0.001);
  },
  chess(d, t) {
    // Weighted Staunton wood piece lift & solid board thud
    tone(d, "triangle", 280, 160, t, 0.035, 0.1, 0.002);
    tone(d, "sine", 160, 58, t + 0.095, 0.08, 0.24, 0.001);
    noise(d, "bandpass", 1200, 700, 2.2, t + 0.095, 0.025, 0.16, 0.001);
  },
  tent(d, t) {
    // Canvas tent zipper unzip + warm campfire night cricket chirp
    noise(d, "bandpass", 2400, 4400, 3.0, t, 0.08, 0.14, 0.003);
    tone(d, "sine", 659.25, 783.99, t + 0.06, 0.12, 0.065);
  },
  luggage(d, t) {
    // Telescoping handle latch click + rolling spinner wheel hum
    noise(d, "bandpass", 2800, 1900, 4.5, t, 0.018, 0.18, 0.001);
    noise(d, "lowpass", 480, 240, 1.5, t + 0.03, 0.16, 0.14, 0.008);
  },

  // === 23. STUDIO & SOUND II ===
  violin(d, t) {
    // Expressive bowed string legato fifth
    tone(d, "sawtooth", 440, 444, t, 0.2, 0.055, 0.03);
    tone(d, "triangle", 440, 444, t, 0.2, 0.08, 0.03);
    tone(d, "sawtooth", 659.25, 663, t + 0.07, 0.18, 0.05, 0.03);
    tone(d, "triangle", 659.25, 663, t + 0.07, 0.18, 0.075, 0.03);
  },
  saxophone(d, t) {
    // Smooth brassy reed scoop into bluesy note
    tone(d, "sawtooth", 293.66, 329.63, t, 0.14, 0.065, 0.012);
    tone(d, "triangle", 329.63, 392, t + 0.05, 0.18, 0.095, 0.012);
  },
  accordion(d, t) {
    // Airy bellows breath + warm reed squeeze chord
    noise(d, "bandpass", 900, 1800, 1.8, t, 0.12, 0.08, 0.01);
    tone(d, "sawtooth", 261.63, 261.63, t + 0.01, 0.18, 0.045, 0.015);
    tone(d, "sawtooth", 329.63, 329.63, t + 0.01, 0.18, 0.04, 0.015);
    tone(d, "triangle", 392, 392, t + 0.01, 0.18, 0.06, 0.015);
  },
  tambourine(d, t) {
    // Twin bright metallic zill jingle shakes
    [0, 0.085].forEach((off) => {
      noise(d, "highpass", 4200, 6800, 2.5, t + off, 0.055, 0.22, 0.001);
      tone(d, "sine", 2800, 2400, t + off, 0.04, 0.06, 0.001);
      tone(d, "sine", 3900, 3500, t + off, 0.04, 0.05, 0.001);
    });
  },
  turntable(d, t) {
    // Cue lever drop + stylus crackle + DJ groove chord
    tone(d, "sine", 130, 54, t, 0.035, 0.2, 0.001);
    noise(d, "highpass", 3400, 3400, 1.0, t + 0.02, 0.24, 0.045, 0.008);
    tone(d, "triangle", 196, 196, t + 0.05, 0.26, 0.09, 0.015);
    tone(d, "sine", 293.66, 293.66, t + 0.06, 0.24, 0.065, 0.015);
  },
  synthesizer(d, t) {
    // Resonant analog filter sweep + bright synth pluck
    tone(d, "sawtooth", 220, 440, t, 0.16, 0.065, 0.004);
    tone(d, "triangle", 440, 880, t + 0.03, 0.14, 0.08, 0.004);
  },
  mixer(d, t) {
    // Smooth 3-channel fader glides + console click
    noise(d, "bandpass", 1200, 2400, 2.2, t, 0.11, 0.11, 0.008);
    tone(d, "sine", 440, 587.33, t + 0.03, 0.1, 0.075);
  },
  boombox(d, t) {
    // Heavy street-beat 808 kick double-punch + snare snap
    tone(d, "sine", 135, 42, t, 0.11, 0.3, 0.001);
    tone(d, "sine", 135, 42, t + 0.09, 0.11, 0.26, 0.001);
    noise(d, "highpass", 1800, 3600, 1.6, t + 0.09, 0.05, 0.14, 0.001);
  },
  spotlight(d, t) {
    // Heavy theatrical breaker switch clunk + warm halogen swell
    noise(d, "bandpass", 2200, 1200, 3.8, t, 0.022, 0.22, 0.001);
    tone(d, "triangle", 220, 95, t, 0.04, 0.14, 0.001);
    tone(d, "sine", 330, 660, t + 0.03, 0.16, 0.075, 0.01);
  },
  "tuning-fork"(d, t) {
    // Pure crystal-clear A440 Hz tuning fork strike + octave overtone
    noise(d, "bandpass", 3200, 2400, 5.0, t, 0.012, 0.14, 0.001);
    tone(d, "sine", 440, 440, t, 0.38, 0.14, 0.002);
    tone(d, "sine", 880, 880, t, 0.26, 0.05, 0.002);
  },

  // === 24. HOME & LAB II ===
  lamp(d, t) {
    // Crisp pull-chain brass switch click + warm bulb glow
    noise(d, "bandpass", 3400, 2300, 4.8, t, 0.016, 0.2, 0.001);
    tone(d, "sine", 659.25, 880, t + 0.02, 0.14, 0.08);
  },
  kettle(d, t) {
    // Rising teakettle steam whistle
    noise(d, "bandpass", 2200, 4400, 1.8, t, 0.16, 0.1, 0.02);
    tone(d, "sine", 1180, 1760, t + 0.02, 0.2, 0.085, 0.025);
  },
  microwave(d, t) {
    // Magnetron hum + classic end-of-cycle microwave ding
    tone(d, "sine", 120, 120, t, 0.1, 0.1, 0.01);
    tone(d, "sine", 1567.98, 1567.98, t + 0.08, 0.24, 0.1, 0.002);
  },
  fridge(d, t) {
    // Magnetic gasket suction pop + crisp compressor hum
    noise(d, "bandpass", 800, 1600, 2.0, t, 0.055, 0.16, 0.003);
    tone(d, "sine", 160, 110, t + 0.02, 0.14, 0.12, 0.008);
  },
  sofa(d, t) {
    // Soft plush cushion bounce thud
    tone(d, "sine", 135, 58, t, 0.09, 0.2, 0.004);
    noise(d, "lowpass", 650, 280, 1.4, t, 0.09, 0.14, 0.006);
  },
  bed(d, t) {
    // Soft pillow fluff whoosh + gentle lullaby chime
    noise(d, "lowpass", 750, 340, 1.5, t, 0.1, 0.12, 0.006);
    tone(d, "sine", 523.25, 440, t + 0.04, 0.18, 0.07, 0.01);
  },
  bathtub(d, t) {
    // Faucet tap turn + bubbly bath splash pops
    tone(d, "sine", 480, 880, t + 0.03, 0.06, 0.1, 0.002);
    tone(d, "sine", 680, 1240, t + 0.08, 0.06, 0.09, 0.002);
    noise(d, "bandpass", 1200, 2600, 1.6, t + 0.02, 0.12, 0.09, 0.01);
  },
  "test-tube"(d, t) {
    // Lab borosilicate clink + fizzing reagent bubbles
    tone(d, "sine", 1975.5, 1960, t, 0.09, 0.08, 0.001);
    tone(d, "sine", 560, 1080, t + 0.03, 0.06, 0.09, 0.002);
    tone(d, "sine", 740, 1380, t + 0.08, 0.06, 0.08, 0.002);
  },
  syringe(d, t) {
    // Smooth plunger slide + crisp droplet squirt
    noise(d, "bandpass", 1600, 3200, 2.2, t, 0.065, 0.12, 0.004);
    tone(d, "sine", 720, 1480, t + 0.055, 0.07, 0.11, 0.002);
  },
  "petri-dish"(d, t) {
    // Glass lid lift clink + subtle bio-bloom chime
    tone(d, "sine", 2093, 2070, t, 0.1, 0.075, 0.001);
    tone(d, "sine", 659.25, 880, t + 0.04, 0.14, 0.075, 0.004);
  },
};

export function triggerSound(name: string, anchorEl?: HTMLElement | null): void {
  if (!soundEnabled || !audioCtx || audioCtx.state !== "running") return;
  const fn = SOUND_FX[name];
  if (!fn || !masterGain) return;

  const pan = audioCtx.createStereoPanner();
  if (anchorEl && typeof window !== "undefined") {
    const r = anchorEl.getBoundingClientRect();
    const center = (r.left + r.width / 2) / window.innerWidth;
    pan.pan.value = Math.max(-0.8, Math.min(0.8, center * 2 - 1));
  } else {
    pan.pan.value = 0;
  }
  pan.connect(masterGain);
  fn(pan, audioCtx.currentTime);
}
