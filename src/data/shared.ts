export type StyleId =
  | "outline"
  | "solid"
  | "duotone"
  | "glass"
  | "stencil"
  | "hardware"
  | "relief";

export type IconCategory =
  | "Core UI"
  | "Comms & Files"
  | "Media & Audio"
  | "Kinetic Tools"
  | "World & Energy"
  | "Weather & Nature"
  | "Commerce & Finance"
  | "Tech & Controls"
  | "Time & Everyday"
  | "Travel & Play"
  | "Studio & Sound"
  | "Home & Lab";

export interface StyleDef {
  id: StyleId;
  label: string;
  rule: string;
}

export interface IconDef {
  name: string;
  label: string;
  category: IconCategory;
  motionSummary: string;
  soundSummary: string;
  svgs: Record<StyleId, string>;
}

export const STYLES: StyleDef[] = [
  {
    id: "outline",
    label: "Outline",
    rule: "Uniform 1.75px rounded monoline",
  },
  {
    id: "solid",
    label: "Solid",
    rule: "Optical silhouettes + evenodd cutouts",
  },
  {
    id: "duotone",
    label: "Duotone",
    rule: "Refined 1.2px contour + 20% tonal plane",
  },
  {
    id: "glass",
    label: "Glass",
    rule: "Optical frosted blur over dark charcoal + white rim",
  },
  {
    id: "stencil",
    label: "Swiss Stencil",
    rule: "Laser-cut physical bridges; zero floating islands",
  },
  {
    id: "hardware",
    label: "Tactile Hardware",
    rule: "Brushed aluminum/matte ABS + orange signal accent",
  },
  {
    id: "relief",
    label: "3D Relief",
    rule: "Crisp foreground face + offset architectural shadow extrusion",
  },
];

// Shared attribute presets
export const K =
  'fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"';
export const K_THIN =
  'fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"';

// Refined thin-outline Duotone presets (1.2px outer contour)
export const D =
  'fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"';
export const DK =
  'fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"';
export const DK_THIN =
  'fill="none" stroke="currentColor" stroke-width="0.95" stroke-linecap="round" stroke-linejoin="round"';

// Glass: frosted acrylic over dark charcoal + top-lit specular white rim + bright acrylic highlights
export const GF =
  'fill="url(#g-frost)" stroke="url(#g-rim)" stroke-width="0.75" stroke-linejoin="round" stroke-linecap="round"';
export const GFS =
  'fill="none" stroke="url(#g-frost)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"';
export const GB = 'fill="url(#g-back)" stroke="none"';
export const GBS =
  'fill="none" stroke="url(#g-back)" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round"';
export const GH = 'fill="url(#g-highlight)" stroke="none"';
export const GHS =
  'fill="none" stroke="url(#g-highlight)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"';

/**
 * Composes a true optical frosted-glass SVG:
 * - Sharp charcoal back layer outside the glass silhouette (`-out` mask)
 * - Gaussian-blurred charcoal back layer strictly behind the glass (`-in` mask + `#g-blur`)
 * - Translucent frosted acrylic + top-lit white specular rim layer on top
 */
export function glassCompose(
  backSvg: string,
  frontMaskSvg: string,
  frontGlassSvg?: string
): string {
  const top = frontGlassSvg ?? `<g ${GF}>${frontMaskSvg}</g>`;
  return `<defs><mask id="__GID__-out" maskUnits="userSpaceOnUse" x="-12" y="-12" width="48" height="48"><rect x="-12" y="-12" width="48" height="48" fill="#fff"/><g fill="#000" stroke="#000" stroke-width="0.3">${frontMaskSvg}</g></mask><mask id="__GID__-in" maskUnits="userSpaceOnUse" x="-12" y="-12" width="48" height="48"><g fill="#fff" stroke="#fff" stroke-width="0.3">${frontMaskSvg}</g></mask></defs><g mask="url(#__GID__-out)">${backSvg}</g><g mask="url(#__GID__-in)"><g filter="url(#g-blur)">${backSvg}</g></g>${top}`;
}

// Tactile Hardware
export const HL = 'fill="url(#hw-light)" stroke="#52525b" stroke-width="0.45"';
export const HM = 'fill="url(#hw-mid)" stroke="#3f3f46" stroke-width="0.45"';
export const HD = 'fill="url(#hw-dark)" stroke="#09090b" stroke-width="0.45"';
export const HA = 'fill="url(#hw-accent)"';

// 3D Relief (offset shadow extrusion + crisp foreground face)
export const RS =
  'fill="var(--rel-shadow)" stroke="var(--rel-shadow)" stroke-width="1" stroke-linejoin="round" stroke-linecap="round"';
export const RF =
  'fill="var(--rel-face)" stroke="var(--rel-stroke)" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"';
export const RF_LINE =
  'fill="none" stroke="var(--rel-stroke)" stroke-width="1.65" stroke-linejoin="round" stroke-linecap="round"';
export const RS_LINE =
  'fill="none" stroke="var(--rel-shadow)" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" opacity="0.4"';

export function gearPts(cx: number, cy: number, n: number, r1: number, r2: number): string {
  const pts: string[] = [];
  const st = (Math.PI * 2) / n;
  for (let i = 0; i < n; i++) {
    const a = i * st;
    (
      [
        [-0.17, r2],
        [-0.1, r1],
        [0.1, r1],
        [0.17, r2],
      ] as [number, number][]
    ).forEach(([off, r]) => {
      pts.push(
        `${+(cx + Math.cos(a + off * st) * r).toFixed(2)},${+(
          cy +
          Math.sin(a + off * st) * r
        ).toFixed(2)}`
      );
    });
  }
  return pts.join(" ");
}

export function starPts(cx: number, cy: number, n: number, r1: number, r2: number): string {
  const pts: string[] = [];
  for (let i = 0; i < n * 2; i++) {
    const a = -Math.PI / 2 + (i * Math.PI) / n;
    const r = i % 2 === 0 ? r1 : r2;
    pts.push(`${+(cx + Math.cos(a) * r).toFixed(2)},${+(cy + Math.sin(a) * r).toFixed(2)}`);
  }
  return pts.join(" ");
}

// Clean, airy 3-spoke Y geometry so bicycle tires never look stuffed
export function triSpokes(cx: number, cy: number, r: number, attrs: string): string {
  return [0, 120, 240]
    .map((deg) => {
      const rad = ((deg - 90) * Math.PI) / 180;
      const x2 = +(cx + Math.cos(rad) * r).toFixed(2);
      const y2 = +(cy + Math.sin(rad) * r).toFixed(2);
      return `<line x1="${cx}" y1="${cy}" x2="${x2}" y2="${y2}" ${attrs}/>`;
    })
    .join("");
}

export function fanBlades(cx: number, cy: number, attrs: string): string {
  return [0, 90, 180, 270]
    .map(
      (deg) =>
        `<path d="M${cx} ${cy}C${cx + 1.1} ${cy - 2.6} ${cx + 3.8} ${cy - 4.8} ${cx + 2.1} ${cy - 6.1}C${cx + 0.6} ${cy - 7} ${cx - 1.2} ${cy - 4.4} ${cx} ${cy}Z" transform="rotate(${deg} ${cx} ${cy})" ${attrs}/>`
    )
    .join("");
}
