import {
  IconDef,
  K,
  K_THIN,
  D,
  DK,
  DK_THIN,
  GF,
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

// Helix geometry: two counter-phase waves + base-pair rungs
const DNA_A =
  "M12 3C16.8 4.5 16.8 6 12 7.5C7.2 9 7.2 10.5 12 12C16.8 13.5 16.8 15 12 16.5C7.2 18 7.2 19.5 12 21";
const DNA_B =
  "M12 3C7.2 4.5 7.2 6 12 7.5C16.8 9 16.8 10.5 12 12C7.2 13.5 7.2 15 12 16.5C16.8 18 16.8 19.5 12 21";
const DNA_RUNGS = `<line x1="8.4" y1="5.25" x2="15.6" y2="5.25"/><line x1="8.4" y1="9.75" x2="15.6" y2="9.75"/><line x1="8.4" y1="14.25" x2="15.6" y2="14.25"/><line x1="8.4" y1="18.75" x2="15.6" y2="18.75"/>`;

export const WORLD2_ICONS: IconDef[] = [
  // 161. SATELLITE
  {
    name: "satellite",
    label: "Satellite",
    category: "World & Energy",
    motionSummary: "Solar wings tilt smoothly while downlink dish pulses signal downward",
    soundSummary: "Orbital telemetry beep-boop + radio carrier ping",
    svgs: {
      outline: `<g data-part="wings" data-pivot="12 12" ${K}><rect x="4" y="9.2" width="4.5" height="5.6" rx="0.8" transform="rotate(-45 6.2 12)"/><rect x="15.5" y="9.2" width="4.5" height="5.6" rx="0.8" transform="rotate(-45 17.8 12)"/><rect x="9.8" y="9.8" width="4.4" height="4.4" rx="1" transform="rotate(-45 12 12)"/></g><path data-part="dish" data-pivot="10 14" d="M6.8 14.5A3.8 3.8 0 0 0 9.5 17.2" ${K_THIN}/><path data-part="beam" d="M4.5 16.5A6.5 6.5 0 0 0 7.5 19.5" ${K_THIN}/>`,
      solid: `<g data-part="wings" data-pivot="12 12" fill="currentColor"><rect x="3.8" y="9" width="4.8" height="6" rx="1" transform="rotate(-45 6.2 12)"/><rect x="15.4" y="9" width="4.8" height="6" rx="1" transform="rotate(-45 17.8 12)"/><rect x="9.6" y="9.6" width="4.8" height="4.8" rx="1.1" transform="rotate(-45 12 12)"/></g><path data-part="dish" data-pivot="10 14" d="M6.6 14.2A4 4 0 0 0 9.8 17.4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path data-part="beam" d="M4.4 16.4A6.5 6.5 0 0 0 7.6 19.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`,
      duotone: `<g data-part="wings" data-pivot="12 12"><rect x="4" y="9.2" width="4.5" height="5.6" rx="0.8" transform="rotate(-45 6.2 12)" ${D}/><rect x="15.5" y="9.2" width="4.5" height="5.6" rx="0.8" transform="rotate(-45 17.8 12)" ${D}/><rect x="9.8" y="9.8" width="4.4" height="4.4" rx="1" transform="rotate(-45 12 12)" ${D}/></g><path data-part="dish" data-pivot="10 14" d="M6.8 14.5A3.8 3.8 0 0 0 9.5 17.2" ${DK}/><path data-part="beam" d="M4.5 16.5A6.5 6.5 0 0 0 7.5 19.5" ${DK_THIN}/>`,
      glass: glassCompose(
        `<g data-part="wings" data-pivot="12 12" ${GB}><rect x="3.8" y="9" width="4.8" height="6" rx="1" transform="rotate(-45 6.2 12)"/><rect x="15.4" y="9" width="4.8" height="6" rx="1" transform="rotate(-45 17.8 12)"/></g><path data-part="dish" data-pivot="10 14" d="M6.6 14.2A4 4 0 0 0 9.8 17.4" ${GBS}/><path data-part="beam" d="M4.4 16.4A6.5 6.5 0 0 0 7.6 19.6" ${GBS}/>`,
        `<rect data-part="wings" data-pivot="12 12" x="9.4" y="9.4" width="5.2" height="5.2" rx="1.2" transform="rotate(-45 12 12)"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="wings" data-pivot="12 12"><rect x="4" y="9.2" width="4.4" height="5.6" rx="0.8" transform="rotate(-45 6.2 12)"/><rect x="15.6" y="9.2" width="4.4" height="5.6" rx="0.8" transform="rotate(-45 17.8 12)"/><rect x="9.8" y="9.8" width="4.4" height="4.4" rx="0.9" transform="rotate(-45 12 12)"/></g><path data-part="dish" data-pivot="10 14" d="M6.8 14.5A3.8 3.8 0 0 0 9.5 17.2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path data-part="beam" d="M4.5 16.5A6.5 6.5 0 0 0 7.5 19.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></g>`,
      hardware: `<g data-part="wings" data-pivot="12 12"><rect x="3.8" y="9" width="4.8" height="6" rx="1" transform="rotate(-45 6.2 12)" ${HD}/><rect x="15.4" y="9" width="4.8" height="6" rx="1" transform="rotate(-45 17.8 12)" ${HD}/><rect x="9.6" y="9.6" width="4.8" height="4.8" rx="1.1" transform="rotate(-45 12 12)" ${HL}/></g><path data-part="dish" data-pivot="10 14" d="M6.6 14.2A4 4 0 0 0 9.8 17.4" fill="none" stroke="#ff6b35" stroke-width="1.6" stroke-linecap="round"/><path data-part="beam" d="M4.4 16.4A6.5 6.5 0 0 0 7.6 19.6" fill="none" stroke="#ff6b35" stroke-width="1.6" stroke-linecap="round"/>`,
      relief: `<g data-part="wings" data-pivot="12 12"><rect transform="translate(1.2,1.2)" x="9.6" y="9.6" width="4.8" height="4.8" rx="1" transform-origin="12 12" ${RS}/><rect x="4" y="9.2" width="4.5" height="5.6" rx="0.8" transform="rotate(-45 6.2 12)" ${RF}/><rect x="15.5" y="9.2" width="4.5" height="5.6" rx="0.8" transform="rotate(-45 17.8 12)" ${RF}/><rect x="9.8" y="9.8" width="4.4" height="4.4" rx="1" transform="rotate(-45 12 12)" ${RF}/></g><path data-part="dish" data-pivot="10 14" d="M6.8 14.5A3.8 3.8 0 0 0 9.5 17.2" ${RF_LINE}/><path data-part="beam" d="M4.5 16.5A6.5 6.5 0 0 0 7.5 19.5" ${RF_LINE}/>`,
    },
  },
  // 162. ATOM
  {
    name: "atom",
    label: "Atom",
    category: "World & Energy",
    motionSummary: "Twin elliptical electron orbits counter-rotate around pulsing nucleus",
    soundSummary: "Quantum orbital shimmer + resonant atomic hum",
    svgs: {
      outline: `<circle data-part="core" data-pivot="12 12" cx="12" cy="12" r="1.7" fill="currentColor"/><ellipse data-part="orbit-1" data-pivot="12 12" cx="12" cy="12" rx="9" ry="3.8" transform="rotate(45 12 12)" ${K}/><ellipse data-part="orbit-2" data-pivot="12 12" cx="12" cy="12" rx="9" ry="3.8" transform="rotate(-45 12 12)" ${K}/>`,
      solid: `<circle data-part="core" data-pivot="12 12" cx="12" cy="12" r="2.2" fill="currentColor"/><ellipse data-part="orbit-1" data-pivot="12 12" cx="12" cy="12" rx="9" ry="3.8" transform="rotate(45 12 12)" fill="none" stroke="currentColor" stroke-width="1.9"/><ellipse data-part="orbit-2" data-pivot="12 12" cx="12" cy="12" rx="9" ry="3.8" transform="rotate(-45 12 12)" fill="none" stroke="currentColor" stroke-width="1.9"/>`,
      duotone: `<circle data-part="core" data-pivot="12 12" cx="12" cy="12" r="2" fill="currentColor"/><ellipse data-part="orbit-1" data-pivot="12 12" cx="12" cy="12" rx="9" ry="3.8" transform="rotate(45 12 12)" ${D}/><ellipse data-part="orbit-2" data-pivot="12 12" cx="12" cy="12" rx="9" ry="3.8" transform="rotate(-45 12 12)" ${D}/>`,
      glass: glassCompose(
        `<ellipse data-part="orbit-1" data-pivot="12 12" cx="12" cy="12" rx="9" ry="3.8" transform="rotate(45 12 12)" ${GBS}/><ellipse data-part="orbit-2" data-pivot="12 12" cx="12" cy="12" rx="9" ry="3.8" transform="rotate(-45 12 12)" ${GBS}/>`,
        `<circle data-part="core" data-pivot="12 12" cx="12" cy="12" r="3.4"/>`
      ),
      stencil: `<circle data-part="core" data-pivot="12 12" cx="12" cy="12" r="2" fill="currentColor"/><ellipse data-part="orbit-1" data-pivot="12 12" cx="12" cy="12" rx="9" ry="3.8" transform="rotate(45 12 12)" fill="none" stroke="currentColor" stroke-width="1.7" stroke-dasharray="10 3"/><ellipse data-part="orbit-2" data-pivot="12 12" cx="12" cy="12" rx="9" ry="3.8" transform="rotate(-45 12 12)" fill="none" stroke="currentColor" stroke-width="1.7" stroke-dasharray="10 3"/>`,
      hardware: `<ellipse data-part="orbit-1" data-pivot="12 12" cx="12" cy="12" rx="9" ry="3.8" transform="rotate(45 12 12)" fill="none" stroke="#52525b" stroke-width="1.8"/><ellipse data-part="orbit-2" data-pivot="12 12" cx="12" cy="12" rx="9" ry="3.8" transform="rotate(-45 12 12)" fill="none" stroke="#71717a" stroke-width="1.8"/><circle data-part="core" data-pivot="12 12" cx="12" cy="12" r="2.4" ${HA}/>`,
      relief: `<g transform="translate(1.2,1.2)"><ellipse data-part="orbit-1" data-pivot="12 12" cx="12" cy="12" rx="9" ry="3.8" transform="rotate(45 12 12)" ${RS_LINE}/><ellipse data-part="orbit-2" data-pivot="12 12" cx="12" cy="12" rx="9" ry="3.8" transform="rotate(-45 12 12)" ${RS_LINE}/></g><ellipse data-part="orbit-1" data-pivot="12 12" cx="12" cy="12" rx="9" ry="3.8" transform="rotate(45 12 12)" ${RF_LINE}/><ellipse data-part="orbit-2" data-pivot="12 12" cx="12" cy="12" rx="9" ry="3.8" transform="rotate(-45 12 12)" ${RF_LINE}/><circle data-part="core" data-pivot="12 12" cx="12" cy="12" r="2.1" ${RF}/>`,
    },
  },
  // 163. PLANET
  {
    name: "planet",
    label: "Ringed Planet",
    category: "World & Energy",
    motionSummary: "Saturn sphere floats softly as tilted planetary ring tilts & orbits",
    soundSummary: "Deep warm celestial synth pad swell",
    svgs: {
      outline: `<circle data-part="globe" cx="12" cy="12" r="5.5" ${K}/><path data-part="ring" data-pivot="12 12" d="M3.5 14.8C2.4 12.6 5.6 9.2 10.6 7.4C15.6 5.6 20 6 20.8 8.2C21.6 10.4 18.2 14.2 13.4 16C8.6 17.8 4.4 17 3.5 14.8Z" ${K_THIN}/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><path data-part="ring" data-pivot="12 12" d="M3.2 15C2.4 13.2 6.2 9.8 11.4 7.8C16.6 5.8 20.6 6.4 21 8.4" fill="none" stroke="#000" stroke-width="3.2" stroke-linecap="round"/></mask></defs><circle data-part="globe" cx="12" cy="12" r="5.8" fill="currentColor" mask="url(#__GID__-m1)"/><path data-part="ring" data-pivot="12 12" d="M3 15.2C4.2 17.4 8.8 17.4 13.8 15.4C18.8 13.4 21.8 10.4 21 8.2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
      duotone: `<circle data-part="globe" cx="12" cy="12" r="5.5" ${D}/><path data-part="ring" data-pivot="12 12" d="M3.2 14.8C4.3 17.2 8.7 17.3 13.6 15.4C18.5 13.5 21.5 10.3 20.6 8.2C19.8 6.4 16.4 6.2 12.4 7.4" ${DK}/>`,
      glass: glassCompose(
        `<path data-part="ring" data-pivot="12 12" d="M3 15.2C4.2 17.4 8.8 17.4 13.8 15.4C18.8 13.4 21.8 10.4 21 8.2" ${GBS}/>`,
        `<circle data-part="globe" cx="12" cy="12" r="5.8"/>`,
        `<g data-part="globe" ${GF}><circle cx="12" cy="12" r="5.8"/></g><path data-part="ring" data-pivot="12 12" d="M3.2 14.8C4.4 17 8.8 17 13.6 15.1C18.4 13.2 21.3 10.4 20.6 8.4" ${GH}/>`
      ),
      stencil: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><path data-part="ring" data-pivot="12 12" d="M3.2 15C4.5 17.2 8.8 17.2 13.6 15.2C18.4 13.2 21.4 10.4 20.8 8.4" fill="none" stroke="#000" stroke-width="3.4" stroke-linecap="round"/></mask></defs><circle data-part="globe" cx="12" cy="12" r="5.7" fill="currentColor" mask="url(#__GID__-m1)"/><path data-part="ring" data-pivot="12 12" d="M3.2 15C4.5 17.2 8.8 17.2 13.6 15.2C18.4 13.2 21.4 10.4 20.8 8.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`,
      hardware: `<circle data-part="globe" cx="12" cy="12" r="5.6" ${HL}/><path data-part="ring" data-pivot="12 12" d="M3.2 15C4.5 17.2 8.8 17.2 13.6 15.2C18.4 13.2 21.4 10.4 20.8 8.4" fill="none" stroke="#ff6b35" stroke-width="2" stroke-linecap="round"/>`,
      relief: `<g data-part="globe"><circle transform="translate(1.3,1.3)" cx="12" cy="12" r="5.5" ${RS}/><circle cx="12" cy="12" r="5.5" ${RF}/></g><path data-part="ring" data-pivot="12 12" d="M3.2 15C4.5 17.2 8.8 17.2 13.6 15.2C18.4 13.2 21.4 10.4 20.8 8.4" ${RF_LINE}/>`,
    },
  },
  // 164. UFO
  {
    name: "ufo",
    label: "UFO",
    category: "World & Energy",
    motionSummary: "Flying saucer hovers & banks smoothly while tractor beam shimmers downward",
    soundSummary: "Classic sci-fi theremin UFO warble + tractor beam hum",
    svgs: {
      outline: `<g data-part="saucer" data-pivot="12 10" ${K}><path d="M8.5 9.2A3.5 3.5 0 0 1 15.5 9.2"/><ellipse cx="12" cy="11.2" rx="8.2" ry="2.6"/></g><g data-part="beam" ${K_THIN}><line x1="9" y1="14.2" x2="7.5" y2="19.5"/><line x1="12" y1="14.4" x2="12" y2="20"/><line x1="15" y1="14.2" x2="16.5" y2="19.5"/></g>`,
      solid: `<g data-part="saucer" data-pivot="12 10" fill="currentColor"><path d="M8.4 9A3.6 3.6 0 0 1 15.6 9Z"/><ellipse cx="12" cy="11.4" rx="8.6" ry="2.6"/></g><path data-part="beam" fill="currentColor" opacity="0.45" d="M8.6 14.5H15.4L17.4 20.2H6.6Z"/>`,
      duotone: `<g data-part="saucer" data-pivot="12 10"><path d="M8.5 9.2A3.5 3.5 0 0 1 15.5 9.2Z" ${D}/><ellipse cx="12" cy="11.2" rx="8.2" ry="2.6" ${D}/></g><polygon data-part="beam" points="8.8 14.2 15.2 14.2 17 20 7 20" ${D}/>`,
      glass: glassCompose(
        `<polygon data-part="beam" points="8.6 14.2 15.4 14.2 17.4 20.2 6.6 20.2" ${GB}/>`,
        `<g data-part="saucer" data-pivot="12 10"><path d="M8.4 9A3.6 3.6 0 0 1 15.6 9Z"/><ellipse cx="12" cy="11.4" rx="8.6" ry="2.6"/></g>`
      ),
      stencil: `<g fill="currentColor"><g data-part="saucer" data-pivot="12 10"><path d="M8.6 8.4A3.5 3.5 0 0 1 15.4 8.4Z"/><rect x="3.5" y="9.8" width="17" height="3.2" rx="1.6"/></g><g data-part="beam"><polygon points="8.6 14.4 10.6 14.4 9 20 7 20"/><polygon points="13.4 14.4 15.4 14.4 17 20 15 20"/></g></g>`,
      hardware: `<polygon data-part="beam" points="8.6 14.2 15.4 14.2 17 20 7 20" ${HA} opacity="0.75"/><g data-part="saucer" data-pivot="12 10"><path d="M8.4 9A3.6 3.6 0 0 1 15.6 9Z" ${HD}/><ellipse cx="12" cy="11.4" rx="8.6" ry="2.6" ${HL}/></g>`,
      relief: `<polygon data-part="beam" points="8.8 14.2 15.2 14.2 17 20 7 20" ${RS}/><g data-part="saucer" data-pivot="12 10"><ellipse transform="translate(1.3,1.3)" cx="12" cy="11.2" rx="8.2" ry="2.6" ${RS}/><path d="M8.5 9.2A3.5 3.5 0 0 1 15.5 9.2Z" ${RF}/><ellipse cx="12" cy="11.2" rx="8.2" ry="2.6" ${RF}/></g>`,
    },
  },
  // 165. VOLCANO
  {
    name: "volcano",
    label: "Volcano",
    category: "World & Energy",
    motionSummary: "Mountain cone rumbles as molten lava plume and ash spark erupt upward",
    soundSummary: "Deep seismic rumble + erupting magma burst pop",
    svgs: {
      outline: `<path data-part="cone" d="M3.5 19.5L9.2 11H14.8L20.5 19.5Z" ${K}/><path data-part="plume" data-pivot="12 11" d="M10.5 9.5C10.5 7 8 6.5 8 4.8M13.5 9.5C13.5 7 16 6.5 16 4.8" ${K}/><circle data-part="spark" cx="12" cy="5.5" r="1.2" fill="currentColor"/>`,
      solid: `<path data-part="cone" fill="currentColor" d="M3.5 19.6L9 11.2H15L20.5 19.6Z"/><path data-part="plume" data-pivot="12 11" d="M10.5 9.8C10.2 7.2 8 6.5 8 4.6M13.5 9.8C13.8 7.2 16 6.5 16 4.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle data-part="spark" cx="12" cy="5.2" r="1.4" fill="currentColor"/>`,
      duotone: `<polygon data-part="cone" points="3.5 19.5 9.2 11 14.8 11 20.5 19.5" ${D}/><path data-part="plume" data-pivot="12 11" d="M10.5 9.5C10.5 7 8 6.5 8 4.8M13.5 9.5C13.5 7 16 6.5 16 4.8" ${DK}/><circle data-part="spark" cx="12" cy="5.5" r="1.2" fill="currentColor"/>`,
      glass: glassCompose(
        `<path data-part="plume" data-pivot="12 11" d="M10.5 9.8C10.2 7.2 8 6.5 8 4.6M13.5 9.8C13.8 7.2 16 6.5 16 4.6" ${GBS}/><circle data-part="spark" cx="12" cy="5.2" r="1.4" ${GB}/>`,
        `<polygon data-part="cone" points="3.5 19.6 9.2 11 14.8 11 20.5 19.6"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="cone"><polygon points="3.6 19.5 9.2 11.2 11.3 11.2 11.3 19.5"/><polygon points="12.7 11.2 14.8 11.2 20.4 19.5 12.7 19.5"/></g><path data-part="plume" data-pivot="12 11" d="M10.5 9.6C10.2 7.2 8 6.5 8 4.8M13.5 9.6C13.8 7.2 16 6.5 16 4.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle data-part="spark" cx="12" cy="5.2" r="1.3"/></g>`,
      hardware: `<polygon data-part="cone" points="3.5 19.5 9.2 11 14.8 11 20.5 19.5" ${HD}/><path data-part="plume" data-pivot="12 11" d="M10.5 9.6C10.2 7.2 8 6.5 8 4.8M13.5 9.6C13.8 7.2 16 6.5 16 4.8" fill="none" stroke="#ff6b35" stroke-width="1.8" stroke-linecap="round"/><circle data-part="spark" cx="12" cy="5.2" r="1.4" ${HA}/>`,
      relief: `<g data-part="cone"><polygon transform="translate(1.3,1.3)" points="3.5 19.5 9.2 11 14.8 11 20.5 19.5" ${RS}/><polygon points="3.5 19.5 9.2 11 14.8 11 20.5 19.5" ${RF}/></g><path data-part="plume" data-pivot="12 11" d="M10.5 9.5C10.5 7 8 6.5 8 4.8M13.5 9.5C13.5 7 16 6.5 16 4.8" ${RF_LINE}/><circle data-part="spark" cx="12" cy="5.5" r="1.2" ${RS}/>`,
    },
  },
  // 166. PLUG
  {
    name: "plug",
    label: "Power Plug",
    category: "World & Energy",
    motionSummary: "Twin brass prongs thrust upward cleanly as molded plug body seats",
    soundSummary: "Crisp electrical wall outlet plug-in snap + 60Hz hum",
    svgs: {
      outline: `<g data-part="prongs" ${K}><line x1="9.2" y1="4" x2="9.2" y2="8.2"/><line x1="14.8" y1="4" x2="14.8" y2="8.2"/></g><g data-part="body" ${K}><path d="M6.8 8.2H17.2V12A5.2 5.2 0 0 1 6.8 12Z"/><line x1="12" y1="17.2" x2="12" y2="20.5"/></g>`,
      solid: `<g data-part="prongs" fill="currentColor"><rect x="8.2" y="3.8" width="2" height="4.4" rx="1"/><rect x="13.8" y="3.8" width="2" height="4.4" rx="1"/></g><g data-part="body" fill="currentColor"><path d="M6.4 8.2H17.6V12.2A5.6 5.6 0 0 1 6.4 12.2Z"/><rect x="11" y="16.8" width="2" height="3.8" rx="1"/></g>`,
      duotone: `<g data-part="prongs" ${DK}><line x1="9.2" y1="4" x2="9.2" y2="8.2"/><line x1="14.8" y1="4" x2="14.8" y2="8.2"/></g><g data-part="body"><path d="M6.8 8.2H17.2V12A5.2 5.2 0 0 1 6.8 12Z" ${D}/><line x1="12" y1="17.2" x2="12" y2="20.5" ${DK}/></g>`,
      glass: glassCompose(
        `<g data-part="prongs" ${GB}><rect x="8.2" y="3.8" width="2" height="4.8" rx="1"/><rect x="13.8" y="3.8" width="2" height="4.8" rx="1"/></g><rect data-part="body" x="11" y="16.8" width="2" height="3.8" rx="1" ${GB}/>`,
        `<path data-part="body" d="M6.4 8.2H17.6V12.2A5.6 5.6 0 0 1 6.4 12.2Z"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="prongs"><rect x="8.2" y="3.8" width="2" height="3.6" rx="1"/><rect x="13.8" y="3.8" width="2" height="3.6" rx="1"/></g><g data-part="body"><path d="M6.6 8.4H11.3V17.4A5.4 5.4 0 0 1 6.6 12.2Z"/><path d="M12.7 8.4H17.4V12.2A5.4 5.4 0 0 1 12.7 17.4Z"/><rect x="11" y="17.6" width="2" height="3" rx="1"/></g></g>`,
      hardware: `<g data-part="prongs"><rect x="8.2" y="3.8" width="2" height="4.6" rx="0.9" ${HA}/><rect x="13.8" y="3.8" width="2" height="4.6" rx="0.9" ${HA}/></g><g data-part="body"><path d="M6.4 8.2H17.6V12.2A5.6 5.6 0 0 1 6.4 12.2Z" ${HD}/><rect x="11" y="16.8" width="2" height="3.8" rx="1" ${HM}/></g>`,
      relief: `<g data-part="prongs" ${RF_LINE}><line x1="9.2" y1="4" x2="9.2" y2="8.2"/><line x1="14.8" y1="4" x2="14.8" y2="8.2"/></g><g data-part="body"><path transform="translate(1.3,1.3)" d="M6.8 8.2H17.2V12A5.2 5.2 0 0 1 6.8 12Z" ${RS}/><path d="M6.8 8.2H17.2V12A5.2 5.2 0 0 1 6.8 12Z" ${RF}/><line x1="12" y1="17.2" x2="12" y2="20.5" ${RF_LINE}/></g>`,
    },
  },
  // 167. WINDMILL
  {
    name: "windmill",
    label: "Wind Turbine",
    category: "World & Energy",
    motionSummary: "Three aerodynamic rotor blades sweep a smooth +360° turn on tower mast",
    soundSummary: "Airy aerodynamic turbine blade whoosh-whoosh-whoosh",
    svgs: {
      outline: `<g data-part="tower" ${K}><line x1="12" y1="9.5" x2="12" y2="20.5"/><line x1="8" y1="20.5" x2="16" y2="20.5"/></g><g data-part="blades" class="kg-rotor" style="--kg-ox:12px;--kg-oy:9.5px;--kg-dur:6s" data-pivot="12 9.5" ${K}><circle cx="12" cy="9.5" r="1.2" fill="currentColor"/><path d="M12 8.3L12 3.5"/><path d="M13 10.1L17.2 12.5"/><path d="M11 10.1L6.8 12.5"/></g>`,
      solid: `<g data-part="tower" fill="currentColor"><path d="M11 10.5H13L13.5 20.2H10.5Z"/><rect x="8" y="19.2" width="8" height="1.6" rx="0.8"/></g><g data-part="blades" class="kg-rotor" style="--kg-ox:12px;--kg-oy:9.5px;--kg-dur:6s" data-pivot="12 9.5" fill="currentColor"><circle cx="12" cy="9.5" r="1.6"/><path d="M11.1 8.5L12 3.2L12.9 8.5Z"/><path d="M11.1 8.5L12 3.2L12.9 8.5Z" transform="rotate(120 12 9.5)"/><path d="M11.1 8.5L12 3.2L12.9 8.5Z" transform="rotate(240 12 9.5)"/></g>`,
      duotone: `<g data-part="tower" ${DK}><line x1="12" y1="9.5" x2="12" y2="20.5"/><line x1="8" y1="20.5" x2="16" y2="20.5"/></g><g data-part="blades" class="kg-rotor" style="--kg-ox:12px;--kg-oy:9.5px;--kg-dur:6s" data-pivot="12 9.5"><circle cx="12" cy="9.5" r="1.5" ${D}/><path d="M11.1 8.5L12 3.4L12.9 8.5Z" ${D}/><path d="M11.1 8.5L12 3.4L12.9 8.5Z" transform="rotate(120 12 9.5)" ${D}/><path d="M11.1 8.5L12 3.4L12.9 8.5Z" transform="rotate(240 12 9.5)" ${D}/></g>`,
      glass: glassCompose(
        `<g data-part="tower" ${GBS}><line x1="12" y1="9.5" x2="12" y2="20.5"/><line x1="8" y1="20.5" x2="16" y2="20.5"/></g>`,
        `<g data-part="blades" class="kg-rotor" style="--kg-ox:12px;--kg-oy:9.5px;--kg-dur:6s" data-pivot="12 9.5"><circle cx="12" cy="9.5" r="1.8"/><path d="M11 8.5L12 3.2L13 8.5Z"/><path d="M11 8.5L12 3.2L13 8.5Z" transform="rotate(120 12 9.5)"/><path d="M11 8.5L12 3.2L13 8.5Z" transform="rotate(240 12 9.5)"/></g>`
      ),
      stencil: `<g fill="currentColor"><g data-part="tower"><rect x="11.1" y="11.4" width="1.8" height="7.6" rx="0.8"/><rect x="8" y="19.4" width="8" height="1.5" rx="0.75"/></g><g data-part="blades" class="kg-rotor" style="--kg-ox:12px;--kg-oy:9.5px;--kg-dur:6s" data-pivot="12 9.5"><circle cx="12" cy="9.5" r="1.4"/><path d="M11.2 7.8L12 3.4L12.8 7.8Z"/><path d="M11.2 7.8L12 3.4L12.8 7.8Z" transform="rotate(120 12 9.5)"/><path d="M11.2 7.8L12 3.4L12.8 7.8Z" transform="rotate(240 12 9.5)"/></g></g>`,
      hardware: `<g data-part="tower"><rect x="11" y="10.5" width="2" height="9" ${HD}/><rect x="8" y="19" width="8" height="1.8" rx="0.9" ${HM}/></g><g data-part="blades" class="kg-rotor" style="--kg-ox:12px;--kg-oy:9.5px;--kg-dur:6s" data-pivot="12 9.5"><path d="M11.1 8.5L12 3.2L12.9 8.5Z" ${HL}/><path d="M11.1 8.5L12 3.2L12.9 8.5Z" transform="rotate(120 12 9.5)" ${HL}/><path d="M11.1 8.5L12 3.2L12.9 8.5Z" transform="rotate(240 12 9.5)" ${HL}/><circle cx="12" cy="9.5" r="1.6" ${HA}/></g>`,
      relief: `<g data-part="tower" ${RF_LINE}><line x1="12" y1="9.5" x2="12" y2="20.5"/><line x1="8" y1="20.5" x2="16" y2="20.5"/></g><g data-part="blades" class="kg-rotor" style="--kg-ox:12px;--kg-oy:9.5px;--kg-dur:6s" data-pivot="12 9.5"><circle cx="12" cy="9.5" r="1.4" ${RF}/><path d="M12 8.2V3.5M13 10.1L17.2 12.5M11 10.1L6.8 12.5" ${RF_LINE}/></g>`,
    },
  },
  // 168. SOLAR
  {
    name: "solar",
    label: "Solar Panel",
    category: "World & Energy",
    motionSummary: "Photovoltaic array tilts toward warm sunbeams to harvest clean energy",
    soundSummary: "Warm solar charge harmonic swell",
    svgs: {
      outline: `<g data-part="panel" data-pivot="12 17.8" ${K}><polygon points="3.2 17.8 6.2 10.4 17.8 10.4 20.8 17.8"/><line x1="9.4" y1="10.4" x2="9.4" y2="17.8" ${K_THIN}/><line x1="14.6" y1="10.4" x2="14.6" y2="17.8" ${K_THIN}/><line x1="4.6" y1="14.3" x2="19.4" y2="14.3" ${K_THIN}/><line x1="12" y1="17.8" x2="12" y2="20.4"/><line x1="9.2" y1="20.4" x2="14.8" y2="20.4"/></g><g data-part="rays" data-pivot="12 4.3" ${K_THIN}><circle cx="12" cy="4.3" r="1.8"/><line x1="7.3" y1="4.3" x2="8.3" y2="4.3"/><line x1="15.7" y1="4.3" x2="16.7" y2="4.3"/></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><g fill="none" stroke="#000" stroke-width="1.1"><line x1="9.4" y1="10.4" x2="9.4" y2="17.8"/><line x1="14.6" y1="10.4" x2="14.6" y2="17.8"/><line x1="4.6" y1="14.3" x2="19.4" y2="14.3"/></g></mask></defs><g data-part="panel" data-pivot="12 17.8" fill="currentColor"><polygon points="3.2 17.8 6.2 10.4 17.8 10.4 20.8 17.8" mask="url(#__GID__-m1)"/><rect x="11" y="17.8" width="2" height="2.8" rx="1"/><rect x="9.2" y="19.8" width="5.6" height="1.5" rx="0.75"/></g><g data-part="rays" data-pivot="12 4.3" fill="currentColor"><circle cx="12" cy="4.3" r="2"/><rect x="7" y="3.6" width="2" height="1.4" rx="0.7"/><rect x="15" y="3.6" width="2" height="1.4" rx="0.7"/></g>`,
      duotone: `<g data-part="panel" data-pivot="12 17.8"><polygon points="3.2 17.8 6.2 10.4 17.8 10.4 20.8 17.8" ${D}/><line x1="9.4" y1="10.4" x2="9.4" y2="17.8" ${DK_THIN}/><line x1="14.6" y1="10.4" x2="14.6" y2="17.8" ${DK_THIN}/><line x1="4.6" y1="14.3" x2="19.4" y2="14.3" ${DK_THIN}/><line x1="12" y1="17.8" x2="12" y2="20.4" ${DK}/><line x1="9.2" y1="20.4" x2="14.8" y2="20.4" ${DK}/></g><g data-part="rays" data-pivot="12 4.3"><circle cx="12" cy="4.3" r="1.8" ${D}/><line x1="7.3" y1="4.3" x2="8.3" y2="4.3" ${DK_THIN}/><line x1="15.7" y1="4.3" x2="16.7" y2="4.3" ${DK_THIN}/></g>`,
      glass: glassCompose(
        `<circle cx="12" cy="4.3" r="2.7" ${GB}/>`,
        ``,
        `<g data-part="rays" data-pivot="12 4.3"><circle cx="12" cy="4.3" r="1.9" ${GB}/><g ${GBS}><line x1="7.3" y1="4.3" x2="8.3" y2="4.3"/><line x1="15.7" y1="4.3" x2="16.7" y2="4.3"/></g></g><g data-part="panel" data-pivot="12 17.8"><polygon points="3.2 17.8 6.2 10.4 17.8 10.4 20.8 17.8" ${GF}/><g ${GBS}><line x1="9.4" y1="10.4" x2="9.4" y2="17.8"/><line x1="14.6" y1="10.4" x2="14.6" y2="17.8"/><line x1="4.6" y1="14.3" x2="19.4" y2="14.3"/><line x1="12" y1="17.8" x2="12" y2="20.4"/><line x1="9.2" y1="20.4" x2="14.8" y2="20.4"/></g></g>`
      ),
      stencil: `<g fill="currentColor"><g data-part="panel" data-pivot="12 17.8"><polygon points="6.2 10.4 9.2 10.4 9.1 13.7 5 13.7"/><polygon points="10.1 10.4 13.9 10.4 14.3 13.7 10 13.7"/><polygon points="14.9 10.4 17.8 10.4 19 13.7 15.2 13.7"/><polygon points="4.7 14.6 9.2 14.6 8.7 17.8 3.2 17.8"/><polygon points="10.1 14.6 13.9 14.6 14.7 17.8 9.5 17.8"/><polygon points="14.9 14.6 19.3 14.6 20.8 17.8 15.5 17.8"/><rect x="11" y="17.8" width="2" height="2.8" rx="1"/><rect x="9.2" y="19.8" width="5.6" height="1.5" rx="0.75"/></g><g data-part="rays" data-pivot="12 4.3"><circle cx="12" cy="4.3" r="2"/><rect x="7" y="3.6" width="2" height="1.4" rx="0.7"/><rect x="15" y="3.6" width="2" height="1.4" rx="0.7"/></g></g>`,
      hardware: `<g data-part="panel" data-pivot="12 17.8"><polygon points="3.2 17.8 6.2 10.4 17.8 10.4 20.8 17.8" ${HD}/><g stroke="#52525b" stroke-width="1.15"><line x1="9.4" y1="10.4" x2="9.4" y2="17.8"/><line x1="14.6" y1="10.4" x2="14.6" y2="17.8"/><line x1="4.6" y1="14.3" x2="19.4" y2="14.3"/></g><rect x="11" y="17.8" width="2" height="2.8" ${HM}/><rect x="9.2" y="19.8" width="5.6" height="1.5" rx="0.75" ${HM}/></g><g data-part="rays" data-pivot="12 4.3"><circle cx="12" cy="4.3" r="2" ${HA}/></g>`,
      relief: `<g data-part="panel" data-pivot="12 17.8"><polygon transform="translate(1.3,1.3)" points="3.2 17.8 6.2 10.4 17.8 10.4 20.8 17.8" ${RS}/><polygon points="3.2 17.8 6.2 10.4 17.8 10.4 20.8 17.8" ${RF}/><line x1="9.4" y1="10.4" x2="9.4" y2="17.8" ${RF_LINE}/><line x1="14.6" y1="10.4" x2="14.6" y2="17.8" ${RF_LINE}/><line x1="4.6" y1="14.3" x2="19.4" y2="14.3" ${RF_LINE}/><line x1="12" y1="17.8" x2="12" y2="20.4" ${RF_LINE}/><line x1="9.2" y1="20.4" x2="14.8" y2="20.4" ${RF_LINE}/></g><g data-part="rays" data-pivot="12 4.3"><circle cx="12" cy="4.3" r="1.8" ${RF}/><line x1="7.3" y1="4.3" x2="8.3" y2="4.3" ${RF_LINE}/><line x1="15.7" y1="4.3" x2="16.7" y2="4.3" ${RF_LINE}/></g>`,
    },
  },
  // 169. RADAR
  {
    name: "radar",
    label: "Radar",
    category: "World & Energy",
    motionSummary: "Rotating sweep beam circles 360° revealing flashing target blip",
    soundSummary: "Classic sweeping sonar radar ping + target echo",
    svgs: {
      outline: `<circle cx="12" cy="12" r="8.5" ${K}/><circle cx="12" cy="12" r="4.5" ${K_THIN}/><line data-part="sweep" class="kg-rotor" style="--kg-ox:12px;--kg-oy:12px;--kg-dur:5s" data-pivot="12 12" x1="12" y1="12" x2="17.8" y2="6.2" ${K}/><circle data-part="blip" cx="15.5" cy="9" r="1.2" fill="currentColor"/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><circle cx="12" cy="12" r="4.8" fill="none" stroke="#000" stroke-width="1.2"/><line data-part="sweep" class="kg-rotor" style="--kg-ox:12px;--kg-oy:12px;--kg-dur:5s" data-pivot="12 12" x1="12" y1="12" x2="18" y2="6" stroke="#000" stroke-width="1.8" stroke-linecap="round"/><circle data-part="blip" cx="15.5" cy="9" r="1.3" fill="#000"/></mask></defs><circle cx="12" cy="12" r="8.6" fill="currentColor" mask="url(#__GID__-m1)"/>`,
      duotone: `<circle cx="12" cy="12" r="8.5" ${D}/><circle cx="12" cy="12" r="4.5" ${DK_THIN}/><line data-part="sweep" class="kg-rotor" style="--kg-ox:12px;--kg-oy:12px;--kg-dur:5s" data-pivot="12 12" x1="12" y1="12" x2="17.8" y2="6.2" ${DK}/><circle data-part="blip" cx="15.5" cy="9" r="1.2" fill="currentColor"/>`,
      glass: glassCompose(
        `<circle cx="12" cy="12" r="4.5" ${GBS}/>`,
        `<circle cx="12" cy="12" r="8.6"/>`,
        `<g ${GF}><circle cx="12" cy="12" r="8.6"/></g><line data-part="sweep" class="kg-rotor" style="--kg-ox:12px;--kg-oy:12px;--kg-dur:5s" data-pivot="12 12" x1="12" y1="12" x2="17.8" y2="6.2" ${GBS}/><circle data-part="blip" cx="15.5" cy="9" r="1.3" ${GB}/>`
      ),
      stencil: `<g fill="currentColor"><path d="M5.6 5.6A9 9 0 0 1 18.4 5.6L16.9 7.1A6.9 6.9 0 0 0 7.1 7.1Z"/><path d="M18.4 18.4A9 9 0 0 1 5.6 18.4L7.1 16.9A6.9 6.9 0 0 0 16.9 16.9Z"/><line data-part="sweep" class="kg-rotor" style="--kg-ox:12px;--kg-oy:12px;--kg-dur:5s" data-pivot="12 12" x1="12" y1="12" x2="17.5" y2="6.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle data-part="blip" cx="15.5" cy="9" r="1.3"/></g>`,
      hardware: `<circle cx="12" cy="12" r="8.8" ${HD}/><circle cx="12" cy="12" r="4.8" fill="none" stroke="#52525b" stroke-width="1.1"/><line data-part="sweep" class="kg-rotor" style="--kg-ox:12px;--kg-oy:12px;--kg-dur:5s" data-pivot="12 12" x1="12" y1="12" x2="17.8" y2="6.2" stroke="#e4e4e7" stroke-width="1.8" stroke-linecap="round"/><circle data-part="blip" cx="15.5" cy="9" r="1.4" ${HA}/>`,
      relief: `<circle transform="translate(1.3,1.3)" cx="12" cy="12" r="8.5" ${RS}/><circle cx="12" cy="12" r="8.5" ${RF}/><circle cx="12" cy="12" r="4.5" ${RF_LINE}/><line data-part="sweep" class="kg-rotor" style="--kg-ox:12px;--kg-oy:12px;--kg-dur:5s" data-pivot="12 12" x1="12" y1="12" x2="17.8" y2="6.2" ${RF_LINE}/><circle data-part="blip" cx="15.5" cy="9" r="1.2" ${RS}/>`,
    },
  },
  // 170. DNA
  {
    name: "dna",
    label: "DNA Helix",
    category: "World & Energy",
    motionSummary: "Intertwined double-helix strands twist and shimmer in counter-wave",
    soundSummary: "Crystalline ascending bio-synth arpeggio",
    svgs: {
      outline: `<g data-part="rungs" ${K_THIN}>${DNA_RUNGS}</g><g data-part="strand-2" ${K}><path d="${DNA_B}"/></g><g data-part="strand-1" ${K}><path d="${DNA_A}"/></g>`,
      solid: `<g data-part="rungs" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">${DNA_RUNGS}</g><g data-part="strand-2" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="${DNA_B}"/></g><g data-part="strand-1" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="${DNA_A}"/></g>`,
      duotone: `<g data-part="rungs" ${DK_THIN}>${DNA_RUNGS}</g><g data-part="strand-2" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" opacity="0.45"><path d="${DNA_B}"/></g><g data-part="strand-1" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="${DNA_A}"/></g>`,
      glass: glassCompose(
        `<g fill="none" stroke="url(#g-back)" stroke-width="4" stroke-linecap="round"><path d="${DNA_A}"/><path d="${DNA_B}"/></g>`,
        ``,
        `<g data-part="rungs" ${GBS}>${DNA_RUNGS}</g><g data-part="strand-2" ${GBS}><path d="${DNA_B}"/></g><g data-part="strand-1"><path d="${DNA_A}" stroke="#fff" stroke-width="2.8" fill="none" stroke-linecap="round"/><path d="${DNA_A}" stroke="url(#g-rim)" stroke-width="2" fill="none" stroke-linecap="round"/></g>`
      ),
      stencil: `<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><g data-part="rungs" stroke-width="1.5" stroke-dasharray="2 1.6">${DNA_RUNGS}</g><g data-part="strand-2" stroke-dasharray="5 2.4"><path d="${DNA_B}"/></g><g data-part="strand-1" stroke-dasharray="5 2.4"><path d="${DNA_A}"/></g></g>`,
      hardware: `<g data-part="rungs" fill="none" stroke="#52525b" stroke-width="1.4" stroke-linecap="round">${DNA_RUNGS}</g><g data-part="strand-2" fill="none" stroke="#52525b" stroke-width="2.4" stroke-linecap="round"><path d="${DNA_B}"/></g><g data-part="strand-1" fill="none" stroke="#ff6b35" stroke-width="2.4" stroke-linecap="round"><path d="${DNA_A}"/></g>`,
      relief: `<g transform="translate(1.2,1.2)"><path d="${DNA_A}" ${RS_LINE}/><path d="${DNA_B}" ${RS_LINE}/></g><g data-part="rungs" fill="none" stroke="var(--rel-stroke)" stroke-width="1.4" stroke-linecap="round">${DNA_RUNGS}</g><g data-part="strand-2" ${RF_LINE}><path d="${DNA_B}"/></g><g data-part="strand-1" ${RF_LINE}><path d="${DNA_A}"/></g>`,
    },
  },
];
