import {
  IconDef,
  K,
  K_THIN,
  D,
  DK,
  DK_THIN,
  GF,
  GFS,
  GB,
  GBS,
  GH,
  glassCompose,
  HL,
  HM,
  HD,
  HA,
  RS,
  RF,
  RS_LINE,
  RF_LINE,
} from "../shared";

const SUN_RAYS_LINES = [0, 45, 90, 135, 180, 225, 270, 315]
  .map((deg) => {
    const a = (deg * Math.PI) / 180;
    const x1 = +(12 + Math.cos(a) * 6.5).toFixed(2);
    const y1 = +(12 + Math.sin(a) * 6.5).toFixed(2);
    const x2 = +(12 + Math.cos(a) * 9.2).toFixed(2);
    const y2 = +(12 + Math.sin(a) * 9.2).toFixed(2);
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
  })
  .join("");

const SUN_RAYS_PILLS = [0, 45, 90, 135, 180, 225, 270, 315]
  .map((deg) => `<rect x="11.2" y="2.6" width="1.6" height="2.8" rx="0.8" transform="rotate(${deg} 12 12)"/>`)
  .join("");

const FLAKE_ARMS = [0, 60, 120]
  .map((deg) => `<line x1="12" y1="3.4" x2="12" y2="20.6" transform="rotate(${deg} 12 12)"/>`)
  .join("");

const FLAKE_CHEVRONS = [0, 60, 120, 180, 240, 300]
  .map((deg) => `<polyline points="9.6 5.6 12 7.6 14.4 5.6" transform="rotate(${deg} 12 12)"/>`)
  .join("");

export const NATURE_ICONS: IconDef[] = [
  // 51. SUN
  {
    name: "sun",
    label: "Sun",
    category: "Weather & Nature",
    motionSummary: "Solar core pulses while 8 radial rays rotate +45°",
    soundSummary: "Warm golden shimmer + solar chord bloom",
    svgs: {
      outline: `<circle data-part="core" cx="12" cy="12" r="4.2" ${K}/><g data-part="rays" data-pivot="12 12" ${K}>${SUN_RAYS_LINES}</g>`,
      solid: `<circle data-part="core" cx="12" cy="12" r="4.6" fill="currentColor"/><g data-part="rays" data-pivot="12 12" fill="currentColor">${SUN_RAYS_PILLS}</g>`,
      duotone: `<circle data-part="core" cx="12" cy="12" r="4.2" ${D}/><g data-part="rays" data-pivot="12 12" ${DK}>${SUN_RAYS_LINES}</g>`,
      glass: glassCompose(
        `<g data-part="rays" data-pivot="12 12" ${GB}>${SUN_RAYS_PILLS}</g><circle data-part="core" data-pivot="12 12" cx="10.7" cy="10.8" r="4.3" ${GB}/>`,
        `<circle data-part="core" data-pivot="12 12" cx="12" cy="12" r="5.2"/>`
      ),
      stencil: `<circle data-part="core" cx="12" cy="12" r="4" fill="currentColor"/><g data-part="rays" data-pivot="12 12" fill="currentColor">${SUN_RAYS_PILLS}</g>`,
      hardware: `<g data-part="rays" data-pivot="12 12" fill="#52525b">${SUN_RAYS_PILLS}</g><circle data-part="core" cx="12" cy="12" r="4.6" ${HA}/>`,
      relief: `<g data-part="rays" data-pivot="12 12"><g transform="translate(1.2,1.2)" ${RS_LINE}>${SUN_RAYS_LINES}</g><g ${RF_LINE}>${SUN_RAYS_LINES}</g></g><g data-part="core"><circle transform="translate(1.5,1.5)" cx="12" cy="12" r="4.2" ${RS}/><circle cx="12" cy="12" r="4.2" ${RF}/></g>`,
    },
  },
  // 52. MOON (Matches ref organic crescent + sparkle)
  {
    name: "moon",
    label: "Moon",
    category: "Weather & Nature",
    motionSummary: "Crescent rocks gently while twin stars twinkle",
    soundSummary: "Hushed nocturnal bell + high starlight ping",
    svgs: {
      outline: `<path data-part="crescent" data-pivot="11 12" d="M16.5 15.8A6.8 6.8 0 0 1 9.8 5.2A7.5 7.5 0 1 0 19 15.4A6.8 6.8 0 0 1 16.5 15.8Z" ${K}/><path data-part="star-a" d="M17.5 4.2V7.2M16 5.7H19" ${K_THIN}/><path data-part="star-b" d="M19.8 9.2V11.2M18.8 10.2H20.8" ${K_THIN}/>`,
      solid: `<path data-part="crescent" data-pivot="11 12" fill="currentColor" d="M16.6 15.9A6.9 6.9 0 0 1 9.7 5.1A7.6 7.6 0 1 0 19.2 15.5A6.9 6.9 0 0 1 16.6 15.9Z"/><path data-part="star-a" d="M17.5 3.8Q17.8 5.4 19.4 5.7Q17.8 6 17.5 7.6Q17.2 6 15.6 5.7Q17.2 5.4 17.5 3.8Z" fill="currentColor"/><circle data-part="star-b" cx="19.8" cy="10.2" r="1.1" fill="currentColor"/>`,
      duotone: `<path data-part="crescent" data-pivot="11 12" d="M16.5 15.8A6.8 6.8 0 0 1 9.8 5.2A7.5 7.5 0 1 0 19 15.4A6.8 6.8 0 0 1 16.5 15.8Z" ${D}/><path data-part="star-a" d="M17.5 3.8Q17.8 5.4 19.4 5.7Q17.8 6 17.5 7.6Q17.2 6 15.6 5.7Q17.2 5.4 17.5 3.8Z" fill="currentColor"/><circle data-part="star-b" cx="19.8" cy="10.2" r="1" fill="currentColor"/>`,
      glass: glassCompose(
        `<g data-part="crescent" data-pivot="11 12"><path transform="translate(-1.5,-1)" d="M16.6 15.9A6.9 6.9 0 0 1 9.7 5.1A7.6 7.6 0 1 0 19.2 15.5A6.9 6.9 0 0 1 16.6 15.9Z" ${GB}/></g><path data-part="star-a" data-pivot="17.5 5.7" d="M17.5 3.8Q17.8 5.4 19.4 5.7Q17.8 6 17.5 7.6Q17.2 6 15.6 5.7Q17.2 5.4 17.5 3.8Z" ${GB}/><circle data-part="star-b" data-pivot="19.8 10.2" cx="19.8" cy="10.2" r="1.1" ${GB}/>`,
        `<path data-part="crescent" data-pivot="11 12" d="M16.6 15.9A6.9 6.9 0 0 1 9.7 5.1A7.6 7.6 0 1 0 19.2 15.5A6.9 6.9 0 0 1 16.6 15.9Z"/>`
      ),
      stencil: `<g data-part="crescent" data-pivot="11 12" fill="currentColor"><path d="M9.6 5.1A7.6 7.6 0 0 0 4.5 13.8L7.1 13A5.2 5.2 0 0 1 9.6 5.1Z"/><path d="M5.6 16A7.6 7.6 0 0 0 19.1 15.6A6.8 6.8 0 0 1 8.4 14.3Z"/></g><path data-part="star-a" d="M17.5 3.8Q17.8 5.4 19.4 5.7Q17.8 6 17.5 7.6Q17.2 6 15.6 5.7Q17.2 5.4 17.5 3.8Z" fill="currentColor"/><circle data-part="star-b" cx="19.8" cy="10.2" r="1" fill="currentColor"/>`,
      hardware: `<path data-part="crescent" data-pivot="11 12" d="M16.6 15.9A6.9 6.9 0 0 1 9.7 5.1A7.6 7.6 0 1 0 19.2 15.5A6.9 6.9 0 0 1 16.6 15.9Z" ${HL}/><circle data-part="star-a" cx="17.5" cy="5.7" r="1.3" ${HA}/><circle data-part="star-b" cx="19.8" cy="10.2" r="0.9" ${HM}/>`,
      relief: `<g data-part="crescent" data-pivot="11 12"><path transform="translate(1.5,1.5)" d="M16.5 15.8A6.8 6.8 0 0 1 9.8 5.2A7.5 7.5 0 1 0 19 15.4A6.8 6.8 0 0 1 16.5 15.8Z" ${RS}/><path d="M16.5 15.8A6.8 6.8 0 0 1 9.8 5.2A7.5 7.5 0 1 0 19 15.4A6.8 6.8 0 0 1 16.5 15.8Z" ${RF}/></g><path data-part="star-a" d="M17.5 3.8Q17.8 5.4 19.4 5.7Q17.8 6 17.5 7.6Q17.2 6 15.6 5.7Q17.2 5.4 17.5 3.8Z" ${RS}/><circle data-part="star-b" cx="19.8" cy="10.2" r="1" ${RS}/>`,
    },
  },
  // 53. CLOUD
  {
    name: "cloud",
    label: "Cloud",
    category: "Weather & Nature",
    motionSummary: "Cumulus cloud drifts smoothly sideways with soft billow",
    soundSummary: "Airy atmospheric breeze swell",
    svgs: {
      outline: `<path data-part="cloud" d="M6.8 17.8H17.4A3.4 3.4 0 0 0 17.9 11.1A5.2 5.2 0 0 0 7.9 9.5A4.1 4.1 0 0 0 6.8 17.8Z" ${K}/>`,
      solid: `<path data-part="cloud" fill="currentColor" d="M6.8 18H17.4A3.6 3.6 0 0 0 18 10.9A5.4 5.4 0 0 0 7.7 9.3A4.3 4.3 0 0 0 6.8 18Z"/>`,
      duotone: `<path data-part="cloud" d="M6.8 17.8H17.4A3.4 3.4 0 0 0 17.9 11.1A5.2 5.2 0 0 0 7.9 9.5A4.1 4.1 0 0 0 6.8 17.8Z" ${D}/>`,
      glass: glassCompose(
        `<g data-part="cloud" data-pivot="12 13"><path transform="translate(-1.6,-1.1)" d="M6.8 18H17.4A3.6 3.6 0 0 0 18 10.9A5.4 5.4 0 0 0 7.7 9.3A4.3 4.3 0 0 0 6.8 18Z" ${GB}/></g>`,
        `<path data-part="cloud" data-pivot="12 13" d="M6.8 18H17.4A3.6 3.6 0 0 0 18 10.9A5.4 5.4 0 0 0 7.7 9.3A4.3 4.3 0 0 0 6.8 18Z"/>`
      ),
      stencil: `<g data-part="cloud" fill="currentColor"><path d="M6.8 17.8H11.1V6A5.2 5.2 0 0 0 7.9 9.5A4.1 4.1 0 0 0 6.8 17.8Z"/><path d="M12.7 17.8H17.4A3.4 3.4 0 0 0 17.9 11.1A5.2 5.2 0 0 0 12.7 6Z"/></g>`,
      hardware: `<g data-part="cloud"><path d="M6.8 18H17.4A3.6 3.6 0 0 0 18 10.9A5.4 5.4 0 0 0 7.7 9.3A4.3 4.3 0 0 0 6.8 18Z" ${HL}/><circle cx="10.2" cy="13.5" r="1.1" ${HA}/></g>`,
      relief: `<g data-part="cloud"><path transform="translate(1.5,1.5)" d="M6.8 17.8H17.4A3.4 3.4 0 0 0 17.9 11.1A5.2 5.2 0 0 0 7.9 9.5A4.1 4.1 0 0 0 6.8 17.8Z" ${RS}/><path d="M6.8 17.8H17.4A3.4 3.4 0 0 0 17.9 11.1A5.2 5.2 0 0 0 7.9 9.5A4.1 4.1 0 0 0 6.8 17.8Z" ${RF}/></g>`,
    },
  },
  // 54. RAIN
  {
    name: "rain",
    label: "Rain",
    category: "Weather & Nature",
    motionSummary: "Rain cloud hovers as three slanted droplets cascade",
    soundSummary: "Triple staggered water droplet plinks",
    svgs: {
      outline: `<path data-part="cloud" d="M6.8 14.5H17.2A3.2 3.2 0 0 0 17.7 8.2A4.8 4.8 0 0 0 8.2 6.8A3.8 3.8 0 0 0 6.8 14.5Z" ${K}/><line data-part="drop-1" x1="8.5" y1="17" x2="7.3" y2="20" ${K}/><line data-part="drop-2" x1="12.5" y1="17" x2="11.3" y2="20" ${K}/><line data-part="drop-3" x1="16.5" y1="17" x2="15.3" y2="20" ${K}/>`,
      solid: `<path data-part="cloud" fill="currentColor" d="M6.8 14.6H17.2A3.3 3.3 0 0 0 17.8 8A5 5 0 0 0 8 6.6A4 4 0 0 0 6.8 14.6Z"/><g fill="currentColor"><g data-part="drop-1"><rect x="7" y="16.8" width="1.8" height="3.8" rx="0.9" transform="rotate(20 7.9 18.7)"/></g><g data-part="drop-2"><rect x="11.2" y="16.8" width="1.8" height="3.8" rx="0.9" transform="rotate(20 12.1 18.7)"/></g><g data-part="drop-3"><rect x="15.4" y="16.8" width="1.8" height="3.8" rx="0.9" transform="rotate(20 16.3 18.7)"/></g></g>`,
      duotone: `<path data-part="cloud" d="M6.8 14.5H17.2A3.2 3.2 0 0 0 17.7 8.2A4.8 4.8 0 0 0 8.2 6.8A3.8 3.8 0 0 0 6.8 14.5Z" ${D}/><line data-part="drop-1" x1="8.5" y1="17" x2="7.3" y2="20" ${DK}/><line data-part="drop-2" x1="12.5" y1="17" x2="11.3" y2="20" ${DK}/><line data-part="drop-3" x1="16.5" y1="17" x2="15.3" y2="20" ${DK}/>`,
      glass: glassCompose(
        `<line data-part="drop-1" data-pivot="8 18.5" x1="8.8" y1="16.2" x2="7.2" y2="20.4" ${GBS}/><line data-part="drop-2" data-pivot="12 18.5" x1="12.8" y1="16.2" x2="11.2" y2="20.4" ${GBS}/><line data-part="drop-3" data-pivot="16 18.5" x1="16.8" y1="16.2" x2="15.2" y2="20.4" ${GBS}/>`,
        `<path data-part="cloud" data-pivot="12 9.5" d="M6.8 14.6H17.2A3.3 3.3 0 0 0 17.8 8A5 5 0 0 0 8 6.6A4 4 0 0 0 6.8 14.6Z"/>`
      ),
      stencil: `<g data-part="cloud" fill="currentColor"><path d="M6.8 14.5H11.1V3.6A4.8 4.8 0 0 0 8.2 6.8A3.8 3.8 0 0 0 6.8 14.5Z"/><path d="M12.7 14.5H17.2A3.2 3.2 0 0 0 17.7 8.2A4.8 4.8 0 0 0 12.7 3.6Z"/></g><g stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><line data-part="drop-1" x1="8.5" y1="17" x2="7.3" y2="20"/><line data-part="drop-2" x1="12.5" y1="17" x2="11.3" y2="20"/><line data-part="drop-3" x1="16.5" y1="17" x2="15.3" y2="20"/></g>`,
      hardware: `<path data-part="cloud" d="M6.8 14.6H17.2A3.3 3.3 0 0 0 17.8 8A5 5 0 0 0 8 6.6A4 4 0 0 0 6.8 14.6Z" ${HL}/><g stroke="#ff6b35" stroke-width="1.8" stroke-linecap="round"><line data-part="drop-1" x1="8.5" y1="17" x2="7.3" y2="20"/><line data-part="drop-2" x1="12.5" y1="17" x2="11.3" y2="20"/><line data-part="drop-3" x1="16.5" y1="17" x2="15.3" y2="20"/></g>`,
      relief: `<g data-part="cloud"><path transform="translate(1.5,1.5)" d="M6.8 14.5H17.2A3.2 3.2 0 0 0 17.7 8.2A4.8 4.8 0 0 0 8.2 6.8A3.8 3.8 0 0 0 6.8 14.5Z" ${RS}/><path d="M6.8 14.5H17.2A3.2 3.2 0 0 0 17.7 8.2A4.8 4.8 0 0 0 8.2 6.8A3.8 3.8 0 0 0 6.8 14.5Z" ${RF}/></g><g ${RF_LINE}><line data-part="drop-1" x1="8.5" y1="17" x2="7.3" y2="20"/><line data-part="drop-2" x1="12.5" y1="17" x2="11.3" y2="20"/><line data-part="drop-3" x1="16.5" y1="17" x2="15.3" y2="20"/></g>`,
    },
  },
  // 55. FLAME (Puffy organic flame + crossed logs matching ref Campfire)
  {
    name: "flame",
    label: "Flame",
    category: "Weather & Nature",
    motionSummary: "Flame tongue dances upward while inner ember core flickers",
    soundSummary: "Warm crackling hearth fire whoosh",
    svgs: {
      outline: `<path data-part="flame" data-pivot="12 19" d="M13.4 2.8C14.8 5.4 17.3 7.8 17.3 11.7A5.2 5.2 0 0 1 6.9 11.7C6.9 9.8 7.8 8.7 8.2 6.8C9.5 10.1 12.2 7.5 13.4 2.8Z" ${K}/><path data-part="core" data-pivot="12 19" d="M12 11.8C13.3 13.1 14 14.3 14 15.5A2 2 0 0 1 10 15.5C10 14.3 10.7 13.1 12 11.8Z" ${K_THIN}/><path d="M5 18L19 20.5M19 18L5 20.5" ${K_THIN}/>`,
      solid: `<path data-part="flame" data-pivot="12 19" fill="currentColor" fill-rule="evenodd" d="M13.4 2.6C14.9 5.3 17.5 7.8 17.5 11.8A5.4 5.4 0 0 1 6.7 11.8C6.7 9.8 7.7 8.6 8.1 6.6C9.5 10 12.2 7.3 13.4 2.6ZM12 11.6C10.6 13 9.9 14.2 9.9 15.5A2.1 2.1 0 0 0 14.1 15.5C14.1 14.2 13.4 13 12 11.6Z"/><path data-part="core" data-pivot="12 19" fill="currentColor" opacity="0.5" d="M12 12.6C12.8 13.6 13.3 14.5 13.3 15.4A1.3 1.3 0 0 1 10.7 15.4C10.7 14.5 11.2 13.6 12 12.6Z"/><g fill="currentColor"><rect x="4.5" y="18.2" width="15" height="2" rx="1" transform="rotate(9.5 12 19.2)"/><rect x="4.5" y="18.2" width="15" height="2" rx="1" transform="rotate(-9.5 12 19.2)"/></g>`,
      duotone: `<path data-part="flame" data-pivot="12 19" d="M13.4 2.8C14.8 5.4 17.3 7.8 17.3 11.7A5.2 5.2 0 0 1 6.9 11.7C6.9 9.8 7.8 8.7 8.2 6.8C9.5 10.1 12.2 7.5 13.4 2.8Z" ${D}/><path data-part="core" data-pivot="12 19" d="M12 11.8C13.3 13.1 14 14.3 14 15.5A2 2 0 0 1 10 15.5C10 14.3 10.7 13.1 12 11.8Z" fill="currentColor"/><path d="M5 18L19 20.5M19 18L5 20.5" ${DK}/>`,
      glass: glassCompose(
        `<g ${GB}><rect x="4.5" y="18.1" width="15" height="2.2" rx="1.1" transform="rotate(-9.5 12 19.2)"/><rect x="4.5" y="18.1" width="15" height="2.2" rx="1.1" transform="rotate(9.5 12 19.2)"/></g>`,
        `<path data-part="flame" data-pivot="12 17" d="M13.4 2.6C14.9 5.3 17.5 7.8 17.5 11.8A5.4 5.4 0 0 1 6.7 11.8C6.7 9.8 7.7 8.6 8.1 6.6C9.5 10 12.2 7.3 13.4 2.6Z"/>`,
        `<g data-part="flame" data-pivot="12 17" ${GF}><path d="M13.4 2.6C14.9 5.3 17.5 7.8 17.5 11.8A5.4 5.4 0 0 1 6.7 11.8C6.7 9.8 7.7 8.6 8.1 6.6C9.5 10 12.2 7.3 13.4 2.6Z"/></g><path data-part="core" data-pivot="12 17" d="M12 11.6C13.2 12.8 13.8 13.9 13.8 15A1.8 1.8 0 0 1 10.2 15C10.2 13.9 10.8 12.8 12 11.6Z" ${GH}/>`
      ),
      stencil: `<g data-part="flame" data-pivot="12 19" fill="currentColor"><path d="M11.3 5.4V16.8A5.2 5.2 0 0 1 6.9 11.7C6.9 9.8 7.8 8.7 8.2 6.8C9.1 9 10.4 8.2 11.3 5.4Z"/><path d="M12.7 4.4C14.4 6.5 17.3 8.4 17.3 11.7A5.2 5.2 0 0 1 12.7 16.8Z"/></g><circle data-part="core" data-pivot="12 19" cx="12" cy="14.6" r="1.4" fill="currentColor"/><g fill="currentColor"><rect x="4.5" y="18.2" width="15" height="2" rx="0.9" transform="rotate(9.5 12 19.2)"/><rect x="4.5" y="18.2" width="15" height="2" rx="0.9" transform="rotate(-9.5 12 19.2)"/></g>`,
      hardware: `<g ${HD}><rect x="4.5" y="18.2" width="15" height="2.2" rx="1.1" transform="rotate(-9.5 12 19.3)"/><rect x="4.5" y="18.2" width="15" height="2.2" rx="1.1" transform="rotate(9.5 12 19.3)"/></g><path data-part="flame" data-pivot="12 17" d="M13.4 2.6C14.9 5.3 17.5 7.8 17.5 11.8A5.4 5.4 0 0 1 6.7 11.8C6.7 9.8 7.7 8.6 8.1 6.6C9.5 10 12.2 7.3 13.4 2.6Z" ${HA}/><path data-part="core" data-pivot="12 17" d="M12 11.6C13.2 12.8 13.8 13.9 13.8 15A1.8 1.8 0 0 1 10.2 15C10.2 13.9 10.8 12.8 12 11.6Z" ${HL}/>`,
      relief: `<g data-part="flame" data-pivot="12 19"><path transform="translate(1.5,1.5)" d="M13.4 2.8C14.8 5.4 17.3 7.8 17.3 11.7A5.2 5.2 0 0 1 6.9 11.7C6.9 9.8 7.8 8.7 8.2 6.8C9.5 10.1 12.2 7.5 13.4 2.8Z" ${RS}/><path d="M13.4 2.8C14.8 5.4 17.3 7.8 17.3 11.7A5.2 5.2 0 0 1 6.9 11.7C6.9 9.8 7.8 8.7 8.2 6.8C9.5 10.1 12.2 7.5 13.4 2.8Z" ${RF}/></g><path data-part="core" data-pivot="12 19" d="M12 11.8C13.3 13.1 14 14.3 14 15.5A2 2 0 0 1 10 15.5C10 14.3 10.7 13.1 12 11.8Z" ${RS}/><path d="M5 18L19 20.5M19 18L5 20.5" ${RF_LINE}/>`,
    },
  },
  // 56. SNOWFLAKE
  {
    name: "snowflake",
    label: "Snowflake",
    category: "Weather & Nature",
    motionSummary: "Six-point ice crystal rotates 60° and expands cleanly",
    soundSummary: "Crystalline frost bell chime",
    svgs: {
      outline: `<g data-part="flake" data-pivot="12 12" ${K}>${FLAKE_ARMS}<g ${K_THIN}>${FLAKE_CHEVRONS}</g></g>`,
      solid: `<g data-part="flake" data-pivot="12 12" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" fill="none">${FLAKE_ARMS}${FLAKE_CHEVRONS}<circle cx="12" cy="12" r="2.2" fill="currentColor"/></g>`,
      duotone: `<circle cx="12" cy="12" r="7.5" ${D}/><g data-part="flake" data-pivot="12 12" ${DK}>${FLAKE_ARMS}${FLAKE_CHEVRONS}</g>`,
      glass: glassCompose(
        `<g data-part="flake" data-pivot="12 12" ${GBS}>${FLAKE_ARMS}${FLAKE_CHEVRONS}</g>`,
        `<circle data-part="flake" data-pivot="12 12" cx="12" cy="12" r="5.4"/>`,
        `<circle data-part="flake" data-pivot="12 12" cx="12" cy="12" r="5.4" ${GF}/><circle data-part="flake" data-pivot="12 12" cx="12" cy="12" r="2.1" ${GH}/>`
      ),
      stencil: `<g data-part="flake" data-pivot="12 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="butt" fill="none">${FLAKE_CHEVRONS}<circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none"/></g>`,
      hardware: `<circle cx="12" cy="12" r="8.8" ${HD}/><g data-part="flake" data-pivot="12 12" stroke="#f4f4f5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none">${FLAKE_ARMS}${FLAKE_CHEVRONS}<circle cx="12" cy="12" r="1.8" ${HA} stroke="none"/></g>`,
      relief: `<g data-part="flake" data-pivot="12 12"><g transform="translate(1.2,1.2)" ${RS_LINE}>${FLAKE_ARMS}${FLAKE_CHEVRONS}</g><g ${RF_LINE}>${FLAKE_ARMS}${FLAKE_CHEVRONS}</g><circle cx="12" cy="12" r="2" ${RF}/></g>`,
    },
  },
  // 57. WIND
  {
    name: "wind",
    label: "Wind",
    category: "Weather & Nature",
    motionSummary: "Three wind ribbons stream forward into their curls with a weightless breeze drift",
    soundSummary: "Filtered sweeping breeze rush",
    svgs: {
      outline: `<path data-part="gust-1" d="M3 8.5H13.8A2.3 2.3 0 1 0 11.5 6.2" ${K}/><path data-part="gust-2" d="M2.8 12H18.2A2.5 2.5 0 1 1 15.7 14.5" ${K}/><path data-part="gust-3" d="M4.2 15.8H11.5A2 2 0 1 1 9.5 17.8" ${K}/>`,
      solid: `<g fill="currentColor"><path data-part="gust-1" d="M3 7.45H13.8A1.25 1.25 0 1 0 12.55 6.2A1.05 1.05 0 0 1 10.45 6.2A3.35 3.35 0 1 1 13.8 9.55H3A1.05 1.05 0 0 1 3 7.45Z"/><path data-part="gust-2" d="M2.8 10.95H18.2A3.55 3.55 0 1 1 14.65 14.5A1.05 1.05 0 0 1 16.75 14.5A1.45 1.45 0 1 0 18.2 13.05H2.8A1.05 1.05 0 0 1 2.8 10.95Z"/><path data-part="gust-3" d="M4.2 14.75H11.5A3.05 3.05 0 1 1 8.45 17.8A1.05 1.05 0 0 1 10.55 17.8A0.95 0.95 0 1 0 11.5 16.85H4.2A1.05 1.05 0 0 1 4.2 14.75Z"/></g>`,
      duotone: `<path data-part="gust-1" d="M3 8.5H13.8A2.3 2.3 0 1 0 11.5 6.2" ${DK}/><path data-part="gust-2" d="M2.8 12H18.2A2.5 2.5 0 1 1 15.7 14.5" ${DK}/><path data-part="gust-3" d="M4.2 15.8H11.5A2 2 0 1 1 9.5 17.8" ${DK}/>`,
      glass: glassCompose(
        `<path data-part="gust-1" d="M3 8.5H13.8A2.3 2.3 0 1 0 11.5 6.2" ${GBS}/><path transform="translate(-0.8,-0.9)" d="M2.8 12H18.2A2.5 2.5 0 1 1 15.7 14.5" ${GBS}/><path data-part="gust-3" d="M4.2 15.8H11.5A2 2 0 1 1 9.5 17.8" ${GBS}/>`,
        `<path d="M2.8 12H18.2A2.5 2.5 0 1 1 15.7 14.5" fill="none" stroke-width="2.6" stroke-linecap="round"/>`,
        `<path data-part="gust-2" d="M2.8 12H18.2A2.5 2.5 0 1 1 15.7 14.5" ${GFS}/>`
      ),
      stencil: `<g stroke="currentColor" stroke-width="1.8" stroke-linecap="butt" fill="none"><path data-part="gust-1" d="M3 8.5H13.8A2.3 2.3 0 1 0 11.5 6.2"/><path data-part="gust-2" d="M2.8 12H18.2A2.5 2.5 0 1 1 15.7 14.5"/><path data-part="gust-3" d="M4.2 15.8H11.5A2 2 0 1 1 9.5 17.8"/></g>`,
      hardware: `<path data-part="gust-1" d="M3 8.5H13.8A2.3 2.3 0 1 0 11.5 6.2" fill="none" stroke="#52525b" stroke-width="1.9" stroke-linecap="round"/><path data-part="gust-2" d="M2.8 12H18.2A2.5 2.5 0 1 1 15.7 14.5" fill="none" stroke="#ff6b35" stroke-width="2" stroke-linecap="round"/><path data-part="gust-3" d="M4.2 15.8H11.5A2 2 0 1 1 9.5 17.8" fill="none" stroke="#52525b" stroke-width="1.9" stroke-linecap="round"/>`,
      relief: `<g transform="translate(1.4,1.4)" ${RS_LINE}><path data-part="gust-1" d="M3 8.5H13.8A2.3 2.3 0 1 0 11.5 6.2"/><path data-part="gust-2" d="M2.8 12H18.2A2.5 2.5 0 1 1 15.7 14.5"/><path data-part="gust-3" d="M4.2 15.8H11.5A2 2 0 1 1 9.5 17.8"/></g><g ${RF_LINE}><path data-part="gust-1" d="M3 8.5H13.8A2.3 2.3 0 1 0 11.5 6.2"/><path data-part="gust-2" d="M2.8 12H18.2A2.5 2.5 0 1 1 15.7 14.5"/><path data-part="gust-3" d="M4.2 15.8H11.5A2 2 0 1 1 9.5 17.8"/></g>`,
    },
  },
  // 58. LEAF (Matches ref curved botanical silhouette)
  {
    name: "leaf",
    label: "Leaf",
    category: "Weather & Nature",
    motionSummary: "Botanical leaf sways back and forth from stem",
    soundSummary: "Crisp foliage rustle + gentle wooden chime",
    svgs: {
      outline: `<g data-part="leaf" data-pivot="5.5 18.5" ${K}><path d="M20.6 3.4C19.8 7.3 19.3 12.5 16.6 15.2C13.9 17.9 10.1 18.3 7.2 16.8C5.7 13.9 6.1 10.1 8.8 7.4C11.5 4.7 16.7 4.2 20.6 3.4Z"/><path d="M3.4 20.6L15.1 8.9"/></g>`,
      solid: `<g data-part="leaf" data-pivot="5.5 18.5" fill="currentColor"><path d="M20.8 3.2C20 7.2 19.5 12.5 16.7 15.3C13.9 18.1 10.1 18.5 7.1 16.9C5.5 13.9 5.9 10.1 8.7 7.3C11.5 4.5 16.8 4 20.8 3.2Z"/><path d="M2.55 20.1L7.75 14.9A0.95 0.95 0 0 1 9.1 16.25L3.9 21.45A0.95 0.95 0 0 1 2.55 20.1Z"/></g>`,
      duotone: `<g data-part="leaf" data-pivot="5.5 18.5"><path d="M20.6 3.4C19.8 7.3 19.3 12.5 16.6 15.2C13.9 17.9 10.1 18.3 7.2 16.8C5.7 13.9 6.1 10.1 8.8 7.4C11.5 4.7 16.7 4.2 20.6 3.4Z" ${D}/><path d="M3.4 20.6L15.1 8.9" ${DK}/></g>`,
      glass: glassCompose(
        `<g data-part="leaf" data-pivot="5.5 18.5"><path transform="translate(-1.5,-1)" d="M20.8 3.2C20 7.2 19.5 12.5 16.7 15.3C13.9 18.1 10.1 18.5 7.1 16.9C5.5 13.9 5.9 10.1 8.7 7.3C11.5 4.5 16.8 4 20.8 3.2Z" ${GB}/><line x1="3.4" y1="20.6" x2="8.8" y2="15.2" ${GBS}/></g>`,
        `<path data-part="leaf" data-pivot="5.5 18.5" d="M20.8 3.2C20 7.2 19.5 12.5 16.7 15.3C13.9 18.1 10.1 18.5 7.1 16.9C5.5 13.9 5.9 10.1 8.7 7.3C11.5 4.5 16.8 4 20.8 3.2Z"/>`,
        `<g data-part="leaf" data-pivot="5.5 18.5" ${GF}><path d="M20.8 3.2C20 7.2 19.5 12.5 16.7 15.3C13.9 18.1 10.1 18.5 7.1 16.9C5.5 13.9 5.9 10.1 8.7 7.3C11.5 4.5 16.8 4 20.8 3.2Z"/></g><path data-part="leaf" data-pivot="5.5 18.5" d="M8.5 15.5L15 9" stroke="url(#g-highlight)" stroke-width="1.35" stroke-linecap="round" fill="none"/>`
      ),
      stencil: `<g data-part="leaf" data-pivot="5.5 18.5" fill="currentColor"><path d="M19.8 3.6C16 4.4 11.4 4.8 8.8 7.4C6.1 10.1 5.7 13.8 7.2 16.6L19.8 3.6Z"/><path d="M20.6 4.4L7.8 17.2C10.6 18.3 14.1 17.7 16.6 15.2C19.2 12.6 19.8 7.9 20.6 4.4Z"/><path d="M3.4 20.6L7.6 16.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></g>`,
      hardware: `<g data-part="leaf" data-pivot="5.5 18.5"><line x1="3.4" y1="20.6" x2="8.8" y2="15.2" stroke="#3f3f46" stroke-width="2" stroke-linecap="round"/><path d="M20.8 3.2C20 7.2 19.5 12.5 16.7 15.3C13.9 18.1 10.1 18.5 7.1 16.9C5.5 13.9 5.9 10.1 8.7 7.3C11.5 4.5 16.8 4 20.8 3.2Z" ${HL}/><circle cx="13.5" cy="10.5" r="1.25" ${HA}/></g>`,
      relief: `<g data-part="leaf" data-pivot="5.5 18.5"><path transform="translate(1.5,1.5)" d="M20.6 3.4C19.8 7.3 19.3 12.5 16.6 15.2C13.9 17.9 10.1 18.3 7.2 16.8C5.7 13.9 6.1 10.1 8.8 7.4C11.5 4.7 16.7 4.2 20.6 3.4Z" ${RS}/><path d="M20.6 3.4C19.8 7.3 19.3 12.5 16.6 15.2C13.9 17.9 10.1 18.3 7.2 16.8C5.7 13.9 6.1 10.1 8.8 7.4C11.5 4.7 16.7 4.2 20.6 3.4Z" ${RF}/><path d="M3.4 20.6L15.1 8.9" ${RF_LINE}/></g>`,
    },
  },
  // 59. DROPLET (Matches ref smooth teardrop + specular arc)
  {
    name: "droplet",
    label: "Droplet",
    category: "Weather & Nature",
    motionSummary: "Water drop stretches into fall and plops back round",
    soundSummary: "Resonant liquid droplet bloop",
    svgs: {
      outline: `<g data-part="drop"><path d="M12 2.6C14.4 6.1 18.5 9.2 18.5 14.3A6.5 6.5 0 0 1 5.5 14.3C5.5 9.2 9.6 6.1 12 2.6Z" ${K}/><path d="M8.7 14.3A3.3 3.3 0 0 0 10.35 17.15" ${K_THIN}/></g>`,
      solid: `<path data-part="drop" fill="currentColor" fill-rule="evenodd" d="M12 2.5C14.5 6.1 18.7 9.2 18.7 14.4A6.7 6.7 0 0 1 5.3 14.4C5.3 9.2 9.5 6.1 12 2.5ZM8.3 14.2A3.7 3.7 0 0 0 10.2 17.4A0.7 0.7 0 0 0 10.9 16.2A2.4 2.4 0 0 1 9.7 14.2A0.7 0.7 0 0 0 8.3 14.2Z"/>`,
      duotone: `<g data-part="drop"><path d="M12 2.6C14.4 6.1 18.5 9.2 18.5 14.3A6.5 6.5 0 0 1 5.5 14.3C5.5 9.2 9.6 6.1 12 2.6Z" ${D}/><path d="M8.7 14.3A3.3 3.3 0 0 0 10.35 17.15" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" fill="none"/></g>`,
      glass: glassCompose(
        `<g data-part="drop" data-pivot="12 12"><path transform="translate(-1.6,-1)" d="M12 2.6C14.4 6.1 18.5 9.2 18.5 14.3A6.5 6.5 0 0 1 5.5 14.3C5.5 9.2 9.6 6.1 12 2.6Z" ${GB}/></g>`,
        `<path data-part="drop" data-pivot="12 12" d="M12 2.6C14.4 6.1 18.5 9.2 18.5 14.3A6.5 6.5 0 0 1 5.5 14.3C5.5 9.2 9.6 6.1 12 2.6Z"/>`,
        `<g data-part="drop" data-pivot="12 12" ${GF}><path d="M12 2.6C14.4 6.1 18.5 9.2 18.5 14.3A6.5 6.5 0 0 1 5.5 14.3C5.5 9.2 9.6 6.1 12 2.6Z"/></g><path data-part="drop" data-pivot="12 12" d="M8.7 14.3A3.3 3.3 0 0 0 10.35 17.15" stroke="url(#g-highlight)" stroke-width="1.45" stroke-linecap="round" fill="none"/>`
      ),
      stencil: `<g data-part="drop" fill="currentColor"><path d="M11.2 3.6V20.8A6.5 6.5 0 0 1 5.5 14.3C5.5 10.4 9.1 6.3 11.2 3.6Z"/><path d="M12.8 3.6C14.9 6.3 18.5 10.4 18.5 14.3A6.5 6.5 0 0 1 12.8 20.8Z"/></g>`,
      hardware: `<g data-part="drop"><path d="M12 2.6C14.4 6.1 18.5 9.2 18.5 14.3A6.5 6.5 0 0 1 5.5 14.3C5.5 9.2 9.6 6.1 12 2.6Z" ${HL}/><circle cx="10.2" cy="14.2" r="1.4" ${HA}/></g>`,
      relief: `<g data-part="drop"><path transform="translate(1.5,1.5)" d="M12 2.6C14.4 6.1 18.5 9.2 18.5 14.3A6.5 6.5 0 0 1 5.5 14.3C5.5 9.2 9.6 6.1 12 2.6Z" ${RS}/><path d="M12 2.6C14.4 6.1 18.5 9.2 18.5 14.3A6.5 6.5 0 0 1 5.5 14.3C5.5 9.2 9.6 6.1 12 2.6Z" ${RF}/></g>`,
    },
  },
  // 60. MOUNTAIN
  {
    name: "mountain",
    label: "Mountain",
    category: "Weather & Nature",
    motionSummary: "Twin alpine snow-capped peaks settle while dawn sun rises cleanly above ridge",
    soundSummary: "Crisp mountain wind gust + echoing alpine chime",
    svgs: {
      outline: `<circle data-part="sun" cx="17.2" cy="6.6" r="2.1" ${K}/><g data-part="peaks"><path d="M2.8 19.6L9.1 8.4A0.7 0.7 0 0 1 10.3 8.4L13.8 14.5L15.6 11.6A0.7 0.7 0 0 1 16.8 11.6L21.2 19.6Z" ${K}/><path d="M6.8 12.6L8.6 13.8L9.8 12.5L11.2 13.7L12.5 12.4" ${K_THIN}/></g>`,
      solid: `<circle data-part="sun" cx="17.2" cy="6.6" r="2.2" fill="currentColor"/><path data-part="peaks" fill="currentColor" fill-rule="evenodd" d="M2.6 19.8L9.1 8.3A0.75 0.75 0 0 1 10.4 8.3L13.8 14.3L15.6 11.4A0.75 0.75 0 0 1 16.9 11.4L21.4 19.8ZM7.1 13.1L8.6 14L9.8 12.6L11 13.9L12.3 13.1L9.7 9.4Z"/>`,
      duotone: `<circle data-part="sun" cx="17.2" cy="6.6" r="2.1" ${D}/><g data-part="peaks"><path d="M2.8 19.6L9.1 8.4A0.7 0.7 0 0 1 10.3 8.4L13.8 14.5L15.6 11.6A0.7 0.7 0 0 1 16.8 11.6L21.2 19.6Z" ${D}/><path d="M6.8 12.6L8.6 13.8L9.8 12.5L11.2 13.7L12.5 12.4" ${DK_THIN}/></g>`,
      glass: glassCompose(
        `<circle data-part="sun" cx="17.2" cy="6.6" r="2.4" ${GH}/>`,
        `<path data-part="peaks" d="M2.6 19.8L9.1 8.3A0.75 0.75 0 0 1 10.4 8.3L13.8 14.3L15.6 11.4A0.75 0.75 0 0 1 16.9 11.4L21.4 19.8Z"/>`,
        `<g data-part="peaks" ${GF}><path d="M2.6 19.8L9.1 8.3A0.75 0.75 0 0 1 10.4 8.3L13.8 14.3L15.6 11.4A0.75 0.75 0 0 1 16.9 11.4L21.4 19.8Z"/></g><path data-part="peaks" d="M7.1 13L8.6 13.9L9.8 12.5L11 13.8L12.2 13" ${GH}/>`
      ),
      stencil: `<circle data-part="sun" cx="17.2" cy="6.6" r="2.1" fill="currentColor"/><g data-part="peaks" fill="currentColor"><polygon points="2.8 19.6 9.7 8.2 13 13.9 9.7 19.6"/><polygon points="11.3 19.6 16.2 11.2 21.2 19.6"/></g>`,
      hardware: `<circle data-part="sun" cx="17.2" cy="6.6" r="2.2" ${HA}/><g data-part="peaks"><path d="M2.6 19.8L9.1 8.3A0.75 0.75 0 0 1 10.4 8.3L13.8 14.3L15.6 11.4A0.75 0.75 0 0 1 16.9 11.4L21.4 19.8Z" ${HL}/><path d="M7 13L8.6 13.9L9.8 12.6L11 13.9L12.4 13" fill="none" stroke="#52525b" stroke-width="1.2" stroke-linecap="round"/></g>`,
      relief: `<circle data-part="sun" cx="17.2" cy="6.6" r="2.1" ${RF}/><g data-part="peaks"><path transform="translate(1.5,1.5)" d="M2.8 19.6L9.1 8.4A0.7 0.7 0 0 1 10.3 8.4L13.8 14.5L15.6 11.6A0.7 0.7 0 0 1 16.8 11.6L21.2 19.6Z" ${RS}/><path d="M2.8 19.6L9.1 8.4A0.7 0.7 0 0 1 10.3 8.4L13.8 14.5L15.6 11.6A0.7 0.7 0 0 1 16.8 11.6L21.2 19.6Z" ${RF}/><path d="M6.8 12.6L8.6 13.8L9.8 12.5L11.2 13.7L12.5 12.4" ${RF_LINE}/></g>`,
    },
  },
];
