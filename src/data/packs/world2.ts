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

export const WORLD2_ICONS: IconDef[] = [
  // 161. SATELLITE
  {
    name: "satellite",
    label: "Satellite",
    category: "World & Energy",
    motionSummary: "Solar wings bank smoothly while parabolic dish pulses downlink signal",
    soundSummary: "Orbital telemetry chirp + resonant space dish ping",
    svgs: {
      outline: `<g data-part="wings" data-pivot="12 12"><g transform="rotate(-45 12 12)" ${K}><rect x="1.8" y="8.4" width="6.2" height="6.4" rx="0.8"/><line x1="4.9" y1="8.4" x2="4.9" y2="14.8" ${K_THIN}/><line x1="1.8" y1="11.6" x2="8" y2="11.6" ${K_THIN}/><rect x="16" y="8.4" width="6.2" height="6.4" rx="0.8"/><line x1="19.1" y1="8.4" x2="19.1" y2="14.8" ${K_THIN}/><line x1="16" y1="11.6" x2="22.2" y2="11.6" ${K_THIN}/><line x1="8" y1="11.6" x2="9.6" y2="11.6"/><line x1="14.4" y1="11.6" x2="16" y2="11.6"/><rect x="9.6" y="8.1" width="4.8" height="7" rx="1"/></g></g><g data-part="dish" data-pivot="14 14"><path d="M12.2 16.8A3.4 3.4 0 0 0 16.8 12.2" ${K_THIN}/><line x1="15.1" y1="15.1" x2="16.9" y2="16.9" ${K_THIN}/></g><g data-part="beam" ${K_THIN}><path d="M13.8 19.2A4.8 4.8 0 0 0 19.2 13.8"/><path d="M15.8 21.2A7.2 7.2 0 0 0 21.2 15.8"/></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><g transform="rotate(-45 12 12)" stroke="#000" stroke-width="1.05"><line x1="4.9" y1="8.2" x2="4.9" y2="15"/><line x1="1.6" y1="11.6" x2="8.2" y2="11.6"/><line x1="19.1" y1="8.2" x2="19.1" y2="15"/><line x1="15.8" y1="11.6" x2="22.4" y2="11.6"/></g></mask></defs><g data-part="wings" data-pivot="12 12" fill="currentColor"><g transform="rotate(-45 12 12)"><rect x="1.8" y="8.4" width="6.2" height="6.4" rx="0.9" mask="url(#__GID__-m1)"/><rect x="16" y="8.4" width="6.2" height="6.4" rx="0.9" mask="url(#__GID__-m1)"/><rect x="7.8" y="10.9" width="8.4" height="1.4"/><rect x="9.4" y="8" width="5.2" height="7.2" rx="1.2"/></g></g><g data-part="dish" data-pivot="14 14" fill="currentColor"><path d="M11.6 16.2A4 4 0 0 0 16.2 11.6L17.4 12.8A5.7 5.7 0 0 1 12.8 17.4Z"/><rect x="15.3" y="14.4" width="1.4" height="2.8" rx="0.7" transform="rotate(-45 16 15.8)"/></g><g data-part="beam" fill="currentColor"><path d="M13.3 18.6A4.8 4.8 0 0 0 18.6 13.3L19.8 14.3A6.3 6.3 0 0 1 14.3 19.8Z"/><path d="M15.3 20.6A7.2 7.2 0 0 0 20.6 15.3L21.7 16.3A8.7 8.7 0 0 1 16.3 21.7Z"/></g>`,
      duotone: `<g data-part="wings" data-pivot="12 12"><g transform="rotate(-45 12 12)"><rect x="1.8" y="8.4" width="6.2" height="6.4" rx="0.8" ${D}/><line x1="4.9" y1="8.4" x2="4.9" y2="14.8" ${DK_THIN}/><line x1="1.8" y1="11.6" x2="8" y2="11.6" ${DK_THIN}/><rect x="16" y="8.4" width="6.2" height="6.4" rx="0.8" ${D}/><line x1="19.1" y1="8.4" x2="19.1" y2="14.8" ${DK_THIN}/><line x1="16" y1="11.6" x2="22.2" y2="11.6" ${DK_THIN}/><line x1="8" y1="11.6" x2="9.6" y2="11.6" ${DK}/><line x1="14.4" y1="11.6" x2="16" y2="11.6" ${DK}/><rect x="9.6" y="8.1" width="4.8" height="7" rx="1" ${D}/></g></g><g data-part="dish" data-pivot="14 14" ${DK}><path d="M12.2 16.8A3.4 3.4 0 0 0 16.8 12.2"/><line x1="15.1" y1="15.1" x2="16.9" y2="16.9"/></g><g data-part="beam" ${DK_THIN}><path d="M13.8 19.2A4.8 4.8 0 0 0 19.2 13.8"/><path d="M15.8 21.2A7.2 7.2 0 0 0 21.2 15.8"/></g>`,
      glass: glassCompose(
        `<g data-part="wings" data-pivot="12 12"><g transform="rotate(-45 12 12)" ${GB}><rect x="1.8" y="8.4" width="6.2" height="6.4" rx="0.9"/><rect x="16" y="8.4" width="6.2" height="6.4" rx="0.9"/><rect x="7.8" y="10.9" width="8.4" height="1.4"/></g></g><g data-part="beam" ${GBS}><path d="M13.8 19.2A4.8 4.8 0 0 0 19.2 13.8"/><path d="M15.8 21.2A7.2 7.2 0 0 0 21.2 15.8"/></g>`,
        `<g data-part="wings" data-pivot="12 12"><g transform="rotate(-45 12 12)"><rect x="9.4" y="8" width="5.2" height="7.2" rx="1.2"/></g></g>`,
        `<g data-part="wings" data-pivot="12 12" ${GF}><g transform="rotate(-45 12 12)"><rect x="9.4" y="8" width="5.2" height="7.2" rx="1.2"/></g></g><path data-part="dish" data-pivot="14 14" d="M12.2 16.8A3.4 3.4 0 0 0 16.8 12.2" ${GBS}/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="wings" data-pivot="12 12"><g transform="rotate(-45 12 12)"><rect x="1.8" y="8.4" width="2.6" height="6.4" rx="0.6"/><rect x="5.2" y="8.4" width="2.6" height="6.4" rx="0.6"/><rect x="16.2" y="8.4" width="2.6" height="6.4" rx="0.6"/><rect x="19.6" y="8.4" width="2.6" height="6.4" rx="0.6"/><rect x="9.5" y="8" width="5" height="7.2" rx="1.1"/></g></g><path data-part="dish" data-pivot="14 14" d="M12.2 16.8A3.4 3.4 0 0 0 16.8 12.2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><g data-part="beam" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M13.8 19.2A4.8 4.8 0 0 0 19.2 13.8"/><path d="M15.8 21.2A7.2 7.2 0 0 0 21.2 15.8"/></g></g>`,
      hardware: `<g data-part="wings" data-pivot="12 12"><g transform="rotate(-45 12 12)"><rect x="1.8" y="8.4" width="6.2" height="6.4" rx="0.9" ${HD}/><rect x="16" y="8.4" width="6.2" height="6.4" rx="0.9" ${HD}/><rect x="7.8" y="10.9" width="8.4" height="1.4" ${HM}/><rect x="9.4" y="8" width="5.2" height="7.2" rx="1.2" ${HL}/></g></g><g data-part="dish" data-pivot="14 14"><path d="M12.2 16.8A3.4 3.4 0 0 0 16.8 12.2" fill="none" stroke="#52525b" stroke-width="1.7" stroke-linecap="round"/></g><g data-part="beam" fill="none" stroke="#ff6b35" stroke-width="1.6" stroke-linecap="round"><path d="M13.8 19.2A4.8 4.8 0 0 0 19.2 13.8"/><path d="M15.8 21.2A7.2 7.2 0 0 0 21.2 15.8"/></g>`,
      relief: `<g data-part="wings" data-pivot="12 12"><g transform="translate(1.2,1.2)"><g transform="rotate(-45 12 12)"><rect x="1.8" y="8.4" width="6.2" height="6.4" rx="0.8" ${RS}/><rect x="16" y="8.4" width="6.2" height="6.4" rx="0.8" ${RS}/><rect x="9.6" y="8.1" width="4.8" height="7" rx="1" ${RS}/></g></g><g transform="rotate(-45 12 12)"><rect x="1.8" y="8.4" width="6.2" height="6.4" rx="0.8" ${RF}/><rect x="16" y="8.4" width="6.2" height="6.4" rx="0.8" ${RF}/><line x1="8" y1="11.6" x2="9.6" y2="11.6" ${RF_LINE}/><line x1="14.4" y1="11.6" x2="16" y2="11.6" ${RF_LINE}/><rect x="9.6" y="8.1" width="4.8" height="7" rx="1" ${RF}/></g></g><path data-part="dish" data-pivot="14 14" d="M12.2 16.8A3.4 3.4 0 0 0 16.8 12.2" ${RF_LINE}/><g data-part="beam" ${RF_LINE}><path d="M13.8 19.2A4.8 4.8 0 0 0 19.2 13.8"/><path d="M15.8 21.2A7.2 7.2 0 0 0 21.2 15.8"/></g>`,
    },
  },
  // 162. ATOM
  {
    name: "atom",
    label: "Atom",
    category: "World & Energy",
    motionSummary: "Three balanced orbital shells sweep smoothly around pulsing nucleus",
    soundSummary: "Clean harmonic orbital shimmer + soft atomic chime",
    svgs: {
      outline: `<circle data-part="core" data-pivot="12 12" cx="12" cy="12" r="1.8" fill="currentColor"/><g data-part="orbit-1" data-pivot="12 12"><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" ${K_THIN}/><circle cx="7.5" cy="4.2" r="1.2" fill="currentColor"/></g><g data-part="orbit-2" data-pivot="12 12"><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-60 12 12)" ${K_THIN}/><circle cx="7.5" cy="19.8" r="1.2" fill="currentColor"/></g><g data-part="orbit-3" data-pivot="12 12"><ellipse cx="12" cy="12" rx="9" ry="3.5" ${K_THIN}/><circle cx="21" cy="12" r="1.2" fill="currentColor"/></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><circle cx="12" cy="12" r="3.2" fill="#000"/></mask></defs><circle data-part="core" data-pivot="12 12" cx="12" cy="12" r="2.2" fill="currentColor"/><g mask="url(#__GID__-m1)"><g data-part="orbit-1" data-pivot="12 12"><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" fill="none" stroke="currentColor" stroke-width="1.65"/><circle cx="7.5" cy="4.2" r="1.4" fill="currentColor"/></g><g data-part="orbit-2" data-pivot="12 12"><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-60 12 12)" fill="none" stroke="currentColor" stroke-width="1.65"/><circle cx="7.5" cy="19.8" r="1.4" fill="currentColor"/></g><g data-part="orbit-3" data-pivot="12 12"><ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" stroke-width="1.65"/><circle cx="21" cy="12" r="1.4" fill="currentColor"/></g></g>`,
      duotone: `<g data-part="core" data-pivot="12 12"><circle cx="12" cy="12" r="2.9" fill="currentColor" fill-opacity="0.22"/><circle cx="12" cy="12" r="1.65" fill="currentColor"/></g><g data-part="orbit-1" data-pivot="12 12"><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" ${DK}/><circle cx="7.5" cy="4.2" r="1.2" fill="currentColor"/></g><g data-part="orbit-2" data-pivot="12 12"><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-60 12 12)" ${DK}/><circle cx="7.5" cy="19.8" r="1.2" fill="currentColor"/></g><g data-part="orbit-3" data-pivot="12 12"><ellipse cx="12" cy="12" rx="9" ry="3.5" ${DK}/><circle cx="21" cy="12" r="1.2" fill="currentColor"/></g>`,
      glass: glassCompose(
        `<g data-part="orbit-1" data-pivot="12 12"><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" fill="none" stroke="url(#g-back)" stroke-width="1.55"/><circle cx="7.5" cy="4.2" r="1.35" ${GB}/></g><g data-part="orbit-2" data-pivot="12 12"><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-60 12 12)" fill="none" stroke="url(#g-back)" stroke-width="1.55"/><circle cx="7.5" cy="19.8" r="1.35" ${GB}/></g>`,
        `<g data-part="orbit-3" data-pivot="12 12"><ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke-width="2.1"/><circle cx="21" cy="12" r="1.4"/></g><circle data-part="core" data-pivot="12 12" cx="12" cy="12" r="2.9"/>`,
        `<g data-part="orbit-3" data-pivot="12 12"><ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="url(#g-frost)" stroke-width="2.1"/><path d="M3.2 11.4A9 3.5 0 0 1 20.8 11.4" fill="none" stroke="url(#g-highlight)" stroke-width="0.85" stroke-linecap="round" opacity="0.82"/><circle cx="21" cy="12" r="1.4" ${GH}/></g><g data-part="core" data-pivot="12 12"><circle cx="12" cy="12" r="2.9" ${GF}/><circle cx="11.3" cy="11.2" r="1.0" ${GH}/></g>`
      ),
      stencil: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><circle cx="12" cy="12" r="3.2" fill="#000"/></mask></defs><circle data-part="core" data-pivot="12 12" cx="12" cy="12" r="2.05" fill="currentColor"/><g mask="url(#__GID__-m1)"><g data-part="orbit-1" data-pivot="12 12"><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="14 3.4"/><circle cx="7.5" cy="4.2" r="1.3" fill="currentColor"/></g><g data-part="orbit-2" data-pivot="12 12"><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-60 12 12)" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="14 3.4"/><circle cx="7.5" cy="19.8" r="1.3" fill="currentColor"/></g><g data-part="orbit-3" data-pivot="12 12"><ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="14 3.4"/><circle cx="21" cy="12" r="1.3" fill="currentColor"/></g></g>`,
      hardware: `<g data-part="orbit-1" data-pivot="12 12"><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" fill="none" stroke="#52525b" stroke-width="1.55"/><circle cx="7.5" cy="4.2" r="1.35" ${HL}/></g><g data-part="orbit-2" data-pivot="12 12"><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-60 12 12)" fill="none" stroke="#71717a" stroke-width="1.55"/><circle cx="7.5" cy="19.8" r="1.35" ${HL}/></g><g data-part="orbit-3" data-pivot="12 12"><ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#a1a1aa" stroke-width="1.55"/><circle cx="21" cy="12" r="1.4" ${HA}/></g><g data-part="core" data-pivot="12 12"><circle cx="12" cy="12" r="2.8" ${HD}/><circle cx="12" cy="12" r="1.65" ${HA}/></g>`,
      relief: `<g data-part="orbit-1" data-pivot="12 12"><g transform="translate(1.1,1.1)"><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" ${RS_LINE}/><circle cx="7.5" cy="4.2" r="1.2" ${RS}/></g><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" ${RF_LINE}/><circle cx="7.5" cy="4.2" r="1.2" ${RF}/></g><g data-part="orbit-2" data-pivot="12 12"><g transform="translate(1.1,1.1)"><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-60 12 12)" ${RS_LINE}/><circle cx="7.5" cy="19.8" r="1.2" ${RS}/></g><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-60 12 12)" ${RF_LINE}/><circle cx="7.5" cy="19.8" r="1.2" ${RF}/></g><g data-part="orbit-3" data-pivot="12 12"><g transform="translate(1.1,1.1)"><ellipse cx="12" cy="12" rx="9" ry="3.5" ${RS_LINE}/><circle cx="21" cy="12" r="1.2" ${RS}/></g><ellipse cx="12" cy="12" rx="9" ry="3.5" ${RF_LINE}/><circle cx="21" cy="12" r="1.2" ${RF}/></g><g data-part="core" data-pivot="12 12"><circle transform="translate(1.1,1.1)" cx="12" cy="12" r="2.1" ${RS}/><circle cx="12" cy="12" r="2.1" ${RF}/></g>`,
    },
  },
  // 163. PLANET
  {
    name: "planet",
    label: "Ringed Planet",
    category: "World & Energy",
    motionSummary: "Saturn sphere banks gently while tilted planetary ring glides in sync",
    soundSummary: "Soft filtered cosmic chord + warm orbital chime",
    svgs: {
      outline: `<g data-part="globe" data-pivot="12 12"><circle cx="12" cy="12" r="5.4" ${K}/><path d="M7.6 10.2C9.8 11 13.6 9.6 16 8.5" ${K_THIN}/></g><path data-part="ring" data-pivot="12 12" d="M6.8 10C3.3 11.9 2 14 2.8 15.5C3.8 17.4 8.6 17.1 13.8 14.9C19 12.7 22 9.6 21.1 7.8C20.4 6.4 17.9 6.3 14.8 7.2" ${K_THIN}/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><path d="M2.6 15.5C3.7 17.5 8.6 17.3 13.8 15C19 12.7 22.1 9.6 21.1 7.7" fill="none" stroke="#000" stroke-width="3.4" stroke-linecap="round"/></mask></defs><circle data-part="globe" data-pivot="12 12" cx="12" cy="12" r="5.6" fill="currentColor" mask="url(#__GID__-m1)"/><path data-part="ring" data-pivot="12 12" d="M6.8 10C3.3 11.9 2 14 2.8 15.5C3.8 17.4 8.6 17.1 13.8 14.9C19 12.7 22 9.6 21.1 7.8C20.4 6.4 17.9 6.3 14.8 7.2" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>`,
      duotone: `<g data-part="globe" data-pivot="12 12"><circle cx="12" cy="12" r="5.4" ${D}/><path d="M7.6 10.2C9.8 11 13.6 9.6 16 8.5" ${DK_THIN}/></g><path data-part="ring" data-pivot="12 12" d="M6.8 10C3.3 11.9 2 14 2.8 15.5C3.8 17.4 8.6 17.1 13.8 14.9C19 12.7 22 9.6 21.1 7.8C20.4 6.4 17.9 6.3 14.8 7.2" ${DK}/>`,
      glass: glassCompose(
        `<path data-part="ring" data-pivot="12 12" d="M6.8 10C3.3 11.9 2 14 2.8 15.5C3.8 17.4 8.6 17.1 13.8 14.9C19 12.7 22 9.6 21.1 7.8C20.4 6.4 17.9 6.3 14.8 7.2" ${GBS}/>`,
        `<circle data-part="globe" data-pivot="12 12" cx="12" cy="12" r="5.5"/>`,
        `<g data-part="globe" data-pivot="12 12" ${GF}><circle cx="12" cy="12" r="5.5"/></g><path data-part="globe" data-pivot="12 12" d="M7.8 10C9.8 10.8 13.4 9.5 15.6 8.5" ${GH}/><path data-part="ring" data-pivot="12 12" d="M3 15.4C4 17.2 8.7 16.9 13.8 14.8C18.8 12.6 21.8 9.8 21 7.9" stroke="url(#g-highlight)" stroke-width="1.9" stroke-linecap="round" fill="none"/>`
      ),
      stencil: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><path d="M2.8 15.3C3.9 17.3 8.6 17.1 13.7 14.9C18.8 12.7 21.9 9.6 21 7.8" fill="none" stroke="#000" stroke-width="3.6" stroke-linecap="round"/></mask></defs><circle data-part="globe" data-pivot="12 12" cx="12" cy="12" r="5.5" fill="currentColor" mask="url(#__GID__-m1)"/><path data-part="ring" data-pivot="12 12" d="M3 15.4C4 17.2 8.7 16.9 13.8 14.8C18.8 12.6 21.8 9.8 21 7.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`,
      hardware: `<g data-part="globe" data-pivot="12 12"><circle cx="12" cy="12" r="5.5" ${HL}/><path d="M7.6 10.2C9.8 11 13.6 9.6 16 8.5" fill="none" stroke="#52525b" stroke-width="1.15" stroke-linecap="round"/></g><path data-part="ring" data-pivot="12 12" d="M3 15.4C4 17.2 8.7 16.9 13.8 14.8C18.8 12.6 21.8 9.8 21 7.9" fill="none" stroke="#ff6b35" stroke-width="2" stroke-linecap="round"/>`,
      relief: `<g data-part="globe" data-pivot="12 12"><circle transform="translate(1.3,1.3)" cx="12" cy="12" r="5.4" ${RS}/><circle cx="12" cy="12" r="5.4" ${RF}/><path d="M7.6 10.2C9.8 11 13.6 9.6 16 8.5" ${RF_LINE}/></g><path data-part="ring" data-pivot="12 12" d="M3 15.4C4 17.2 8.7 16.9 13.8 14.8C18.8 12.6 21.8 9.8 21 7.9" ${RF_LINE}/>`,
    },
  },
  // 164. UFO
  {
    name: "ufo",
    label: "UFO",
    category: "World & Energy",
    motionSummary: "Flying saucer banks effortlessly while tractor beam cone pulses below",
    soundSummary: "Smooth sci-fi saucer glide + warm tractor beam hum",
    svgs: {
      outline: `<g data-part="saucer" data-pivot="12 10" ${K}><path d="M8 9A4 3.8 0 0 1 16 9"/><ellipse cx="12" cy="11.2" rx="8.8" ry="2.6"/><circle cx="7.4" cy="11.3" r="0.65" fill="currentColor" stroke="none"/><circle cx="12" cy="11.6" r="0.65" fill="currentColor" stroke="none"/><circle cx="16.6" cy="11.3" r="0.65" fill="currentColor" stroke="none"/></g><g data-part="beam" data-pivot="12 14" ${K_THIN}><path d="M8.6 14.1L6.6 20.2M15.4 14.1L17.4 20.2"/><line x1="12" y1="14.3" x2="12" y2="20.2" stroke-dasharray="1.6 1.8"/></g>`,
      solid: `<g data-part="saucer" data-pivot="12 10" fill="currentColor"><path d="M8 9A4 3.8 0 0 1 16 9Z"/><path fill-rule="evenodd" d="M12 8.6A9 2.8 0 1 0 12 14.2A9 2.8 0 1 0 12 8.6ZM7.4 10.6A0.8 0.8 0 1 0 7.4 12.2A0.8 0.8 0 1 0 7.4 10.6ZM12 10.9A0.8 0.8 0 1 0 12 12.5A0.8 0.8 0 1 0 12 10.9ZM16.6 10.6A0.8 0.8 0 1 0 16.6 12.2A0.8 0.8 0 1 0 16.6 10.6Z"/></g><polygon data-part="beam" data-pivot="12 14" points="8.6 14.5 15.4 14.5 17.6 20.4 6.4 20.4" fill="currentColor" opacity="0.38"/>`,
      duotone: `<g data-part="saucer" data-pivot="12 10"><path d="M8 9A4 3.8 0 0 1 16 9Z" ${D}/><ellipse cx="12" cy="11.2" rx="8.8" ry="2.6" ${D}/><circle cx="7.4" cy="11.3" r="0.7" fill="currentColor"/><circle cx="12" cy="11.6" r="0.7" fill="currentColor"/><circle cx="16.6" cy="11.3" r="0.7" fill="currentColor"/></g><polygon data-part="beam" data-pivot="12 14" points="8.6 14.2 15.4 14.2 17.4 20.2 6.6 20.2" ${D}/>`,
      glass: glassCompose(
        `<polygon data-part="beam" data-pivot="12 14" points="8.6 14.4 15.4 14.4 17.6 20.4 6.4 20.4" ${GB}/>`,
        `<g data-part="saucer" data-pivot="12 10"><path d="M8 9A4 3.8 0 0 1 16 9Z"/><ellipse cx="12" cy="11.3" rx="8.9" ry="2.7"/></g>`,
        `<g data-part="saucer" data-pivot="12 10" ${GF}><path d="M8 9A4 3.8 0 0 1 16 9Z"/><ellipse cx="12" cy="11.3" rx="8.9" ry="2.7"/></g><circle data-part="saucer" data-pivot="12 10" cx="7.4" cy="11.3" r="0.7" ${GH}/><circle data-part="saucer" data-pivot="12 10" cx="12" cy="11.6" r="0.7" ${GH}/><circle data-part="saucer" data-pivot="12 10" cx="16.6" cy="11.3" r="0.7" ${GH}/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="saucer" data-pivot="12 10"><path d="M8.1 8.5A3.9 3.6 0 0 1 15.9 8.5Z"/><rect x="3" y="9.8" width="18" height="3.4" rx="1.7"/></g><g data-part="beam" data-pivot="12 14"><polygon points="8.6 14.4 10.6 14.4 8.8 20.2 6.6 20.2"/><polygon points="13.4 14.4 15.4 14.4 17.4 20.2 15.2 20.2"/></g></g>`,
      hardware: `<polygon data-part="beam" data-pivot="12 14" points="8.6 14.2 15.4 14.2 17.4 20.2 6.6 20.2" ${HA} opacity="0.68"/><g data-part="saucer" data-pivot="12 10"><path d="M8 9A4 3.8 0 0 1 16 9Z" ${HD}/><ellipse cx="12" cy="11.3" rx="8.9" ry="2.7" ${HL}/><circle cx="7.5" cy="11.3" r="0.7" ${HA}/><circle cx="12" cy="11.6" r="0.7" ${HA}/><circle cx="16.5" cy="11.3" r="0.7" ${HA}/></g>`,
      relief: `<polygon data-part="beam" data-pivot="12 14" points="8.6 14.2 15.4 14.2 17.2 20.2 6.8 20.2" ${RS}/><g data-part="saucer" data-pivot="12 10"><ellipse transform="translate(1.3,1.3)" cx="12" cy="11.2" rx="8.8" ry="2.6" ${RS}/><path d="M8 9A4 3.8 0 0 1 16 9Z" ${RF}/><ellipse cx="12" cy="11.2" rx="8.8" ry="2.6" ${RF}/></g>`,
    },
  },
  // 165. VOLCANO
  {
    name: "volcano",
    label: "Volcano",
    category: "World & Energy",
    motionSummary: "Volcanic cone trembles subtly while smoke plume and embers erupt skyward",
    soundSummary: "Deep volcanic rumble + crisp magma pop",
    svgs: {
      outline: `<g data-part="cone" ${K}><path d="M2.8 19.8C5.4 17.6 7.4 14.5 8.5 11.4H15.5C16.6 14.5 18.6 17.6 21.2 19.8Z"/><path d="M10.4 11.4L11.5 14.6L13 13.2L13.9 16.2" ${K_THIN}/></g><path data-part="plume" data-pivot="12 10" d="M8.8 9.6A2.2 2.2 0 0 1 9.6 5.8A2.5 2.5 0 0 1 14.4 5.8A2.2 2.2 0 0 1 15.2 9.6" ${K}/><g data-part="spark" fill="currentColor"><circle cx="12" cy="3.1" r="1.1"/><circle cx="16.1" cy="4.4" r="0.85"/></g>`,
      solid: `<path data-part="cone" fill="currentColor" fill-rule="evenodd" d="M2.8 19.8C5.4 17.6 7.4 14.5 8.5 11.4H15.5C16.6 14.5 18.6 17.6 21.2 19.8ZM10.4 11.4L11.8 15.2L13 13.4L14 16.5L13.6 11.4Z"/><path data-part="plume" data-pivot="12 10" fill="currentColor" opacity="0.72" d="M8.8 9.8A2.3 2.3 0 0 1 9.6 5.8A2.6 2.6 0 0 1 14.4 5.8A2.3 2.3 0 0 1 15.2 9.8Z"/><g data-part="spark" fill="currentColor"><circle cx="12" cy="3.1" r="1.2"/><circle cx="16.1" cy="4.4" r="0.85"/></g>`,
      duotone: `<g data-part="cone"><path d="M2.8 19.8C5.4 17.6 7.4 14.5 8.5 11.4H15.5C16.6 14.5 18.6 17.6 21.2 19.8Z" ${D}/><path d="M10.4 11.4L11.5 14.6L13 13.2L13.9 16.2" ${DK_THIN}/></g><path data-part="plume" data-pivot="12 10" d="M8.8 9.6A2.2 2.2 0 0 1 9.6 5.8A2.5 2.5 0 0 1 14.4 5.8A2.2 2.2 0 0 1 15.2 9.6Z" ${D}/><g data-part="spark" fill="currentColor"><circle cx="12" cy="3.1" r="1.15"/><circle cx="16.1" cy="4.4" r="0.85"/></g>`,
      glass: glassCompose(
        `<path data-part="plume" data-pivot="12 10" d="M8.8 9.8A2.3 2.3 0 0 1 9.6 5.8A2.6 2.6 0 0 1 14.4 5.8A2.3 2.3 0 0 1 15.2 9.8Z" ${GB}/><g data-part="spark" ${GB}><circle cx="12" cy="3.1" r="1.2"/><circle cx="16.1" cy="4.4" r="0.85"/></g>`,
        `<path data-part="cone" d="M2.8 19.8C5.4 17.6 7.4 14.5 8.5 11.4H15.5C16.6 14.5 18.6 17.6 21.2 19.8Z"/>`,
        `<g data-part="cone" ${GF}><path d="M2.8 19.8C5.4 17.6 7.4 14.5 8.5 11.4H15.5C16.6 14.5 18.6 17.6 21.2 19.8Z"/></g><path data-part="cone" d="M10.6 11.6L11.6 14.8L13 13.4L13.8 16.2" ${GH}/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="cone"><path d="M2.8 19.8C5.4 17.6 7.4 14.5 8.5 11.4H11.2V19.8Z"/><path d="M12.8 11.4H15.5C16.6 14.5 18.6 17.6 21.2 19.8H12.8Z"/></g><path data-part="plume" data-pivot="12 10" d="M8.8 9.8A2.2 2.2 0 0 1 9.6 5.8A2.5 2.5 0 0 1 14.4 5.8A2.2 2.2 0 0 1 15.2 9.8Z"/><g data-part="spark"><circle cx="12" cy="3.1" r="1.15"/><circle cx="16.1" cy="4.4" r="0.85"/></g></g>`,
      hardware: `<g data-part="cone"><path d="M2.8 19.8C5.4 17.6 7.4 14.5 8.5 11.4H15.5C16.6 14.5 18.6 17.6 21.2 19.8Z" ${HD}/><path d="M10.4 11.4L11.6 14.6L13 13.2L13.8 16.2" fill="none" stroke="#ff6b35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><path data-part="plume" data-pivot="12 10" d="M8.8 9.8A2.3 2.3 0 0 1 9.6 5.8A2.6 2.6 0 0 1 14.4 5.8A2.3 2.3 0 0 1 15.2 9.8Z" ${HL}/><g data-part="spark" ${HA}><circle cx="12" cy="3.1" r="1.25"/><circle cx="16.1" cy="4.4" r="0.85"/></g>`,
      relief: `<g data-part="cone"><path transform="translate(1.3,1.3)" d="M2.8 19.8C5.4 17.6 7.4 14.5 8.5 11.4H15.5C16.6 14.5 18.6 17.6 21.2 19.8Z" ${RS}/><path d="M2.8 19.8C5.4 17.6 7.4 14.5 8.5 11.4H15.5C16.6 14.5 18.6 17.6 21.2 19.8Z" ${RF}/><path d="M10.4 11.4L11.6 14.6L13 13.2L13.8 16.2" ${RF_LINE}/></g><path data-part="plume" data-pivot="12 10" d="M8.8 9.6A2.2 2.2 0 0 1 9.6 5.8A2.5 2.5 0 0 1 14.4 5.8A2.2 2.2 0 0 1 15.2 9.6Z" ${RF}/><circle data-part="spark" cx="12" cy="3.1" r="1.15" ${RS}/>`,
    },
  },
  // 166. PLUG
  {
    name: "plug",
    label: "Power Plug",
    category: "World & Energy",
    motionSummary: "Twin brass prongs thrust upward cleanly as molded plug body seats",
    soundSummary: "Solid wall-outlet plug snap + warm power-on hum",
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
    motionSummary: "Cantilevered rotor blades sweep a smooth +360° turn on tower mast",
    soundSummary: "Airy aerodynamic turbine blade whoosh-whoosh-whoosh",
    svgs: {
      outline: `<g data-part="tower" ${K}><line x1="12" y1="10.2" x2="12" y2="20.6"/><line x1="7.8" y1="20.6" x2="16.2" y2="20.6"/></g><g data-part="blades" data-pivot="12 9.5"><g transform="rotate(26 12 9.5)" ${K}><circle cx="12" cy="9.5" r="1.35" fill="currentColor"/><path d="M11.3 8.2C11.3 5.5 11.6 3.2 12 3.2C12.4 3.2 12.7 5.5 12.7 8.2" ${K_THIN}/><path d="M11.3 8.2C11.3 5.5 11.6 3.2 12 3.2C12.4 3.2 12.7 5.5 12.7 8.2" transform="rotate(120 12 9.5)" ${K_THIN}/><path d="M11.3 8.2C11.3 5.5 11.6 3.2 12 3.2C12.4 3.2 12.7 5.5 12.7 8.2" transform="rotate(240 12 9.5)" ${K_THIN}/></g></g>`,
      solid: `<g data-part="tower" fill="currentColor"><path d="M11.1 10.6H12.9L13.6 20.2H10.4Z"/><rect x="7.8" y="19.3" width="8.4" height="1.6" rx="0.8"/></g><g data-part="blades" data-pivot="12 9.5" fill="currentColor"><g transform="rotate(26 12 9.5)"><circle cx="12" cy="9.5" r="1.65"/><path d="M11.1 8.4C11.1 5.4 11.5 3.1 12 3.1C12.5 3.1 12.9 5.4 12.9 8.4Z"/><path d="M11.1 8.4C11.1 5.4 11.5 3.1 12 3.1C12.5 3.1 12.9 5.4 12.9 8.4Z" transform="rotate(120 12 9.5)"/><path d="M11.1 8.4C11.1 5.4 11.5 3.1 12 3.1C12.5 3.1 12.9 5.4 12.9 8.4Z" transform="rotate(240 12 9.5)"/></g></g>`,
      duotone: `<g data-part="tower" ${DK}><line x1="12" y1="10.2" x2="12" y2="20.6"/><line x1="7.8" y1="20.6" x2="16.2" y2="20.6"/></g><g data-part="blades" data-pivot="12 9.5"><g transform="rotate(26 12 9.5)"><circle cx="12" cy="9.5" r="1.5" ${D}/><path d="M11.1 8.4C11.1 5.4 11.5 3.1 12 3.1C12.5 3.1 12.9 5.4 12.9 8.4Z" ${D}/><path d="M11.1 8.4C11.1 5.4 11.5 3.1 12 3.1C12.5 3.1 12.9 5.4 12.9 8.4Z" transform="rotate(120 12 9.5)" ${D}/><path d="M11.1 8.4C11.1 5.4 11.5 3.1 12 3.1C12.5 3.1 12.9 5.4 12.9 8.4Z" transform="rotate(240 12 9.5)" ${D}/></g></g>`,
      glass: glassCompose(
        `<g data-part="tower" ${GBS}><line x1="12" y1="10.2" x2="12" y2="20.6"/><line x1="7.8" y1="20.6" x2="16.2" y2="20.6"/></g>`,
        `<g data-part="blades" data-pivot="12 9.5"><g transform="rotate(26 12 9.5)"><circle cx="12" cy="9.5" r="1.8"/><path d="M11 8.4C11 5.4 11.5 3 12 3C12.5 3 13 5.4 13 8.4Z"/><path d="M11 8.4C11 5.4 11.5 3 12 3C12.5 3 13 5.4 13 8.4Z" transform="rotate(120 12 9.5)"/><path d="M11 8.4C11 5.4 11.5 3 12 3C12.5 3 13 5.4 13 8.4Z" transform="rotate(240 12 9.5)"/></g></g>`
      ),
      stencil: `<g fill="currentColor"><g data-part="tower"><rect x="11.1" y="11.6" width="1.8" height="7.4" rx="0.8"/><rect x="7.8" y="19.4" width="8.4" height="1.5" rx="0.75"/></g><g data-part="blades" data-pivot="12 9.5"><g transform="rotate(26 12 9.5)"><circle cx="12" cy="9.5" r="1.45"/><path d="M11.2 7.8C11.2 5.2 11.6 3.2 12 3.2C12.4 3.2 12.8 5.2 12.8 7.8Z"/><path d="M11.2 7.8C11.2 5.2 11.6 3.2 12 3.2C12.4 3.2 12.8 5.2 12.8 7.8Z" transform="rotate(120 12 9.5)"/><path d="M11.2 7.8C11.2 5.2 11.6 3.2 12 3.2C12.4 3.2 12.8 5.2 12.8 7.8Z" transform="rotate(240 12 9.5)"/></g></g></g>`,
      hardware: `<g data-part="tower"><rect x="11" y="10.6" width="2" height="9" ${HD}/><rect x="7.8" y="19" width="8.4" height="1.8" rx="0.9" ${HM}/></g><g data-part="blades" data-pivot="12 9.5"><g transform="rotate(26 12 9.5)"><path d="M11.1 8.4C11.1 5.4 11.5 3.1 12 3.1C12.5 3.1 12.9 5.4 12.9 8.4Z" ${HL}/><path d="M11.1 8.4C11.1 5.4 11.5 3.1 12 3.1C12.5 3.1 12.9 5.4 12.9 8.4Z" transform="rotate(120 12 9.5)" ${HL}/><path d="M11.1 8.4C11.1 5.4 11.5 3.1 12 3.1C12.5 3.1 12.9 5.4 12.9 8.4Z" transform="rotate(240 12 9.5)" ${HL}/><circle cx="12" cy="9.5" r="1.65" ${HA}/></g></g>`,
      relief: `<g data-part="tower" ${RF_LINE}><line x1="12" y1="10.2" x2="12" y2="20.6"/><line x1="7.8" y1="20.6" x2="16.2" y2="20.6"/></g><g data-part="blades" data-pivot="12 9.5"><g transform="rotate(26 12 9.5)"><circle cx="12" cy="9.5" r="1.4" ${RF}/><path d="M11.2 8.2C11.2 5.4 11.6 3.2 12 3.2C12.4 3.2 12.8 5.4 12.8 8.2Z" ${RF}/><path d="M11.2 8.2C11.2 5.4 11.6 3.2 12 3.2C12.4 3.2 12.8 5.4 12.8 8.2Z" transform="rotate(120 12 9.5)" ${RF}/><path d="M11.2 8.2C11.2 5.4 11.6 3.2 12 3.2C12.4 3.2 12.8 5.4 12.8 8.2Z" transform="rotate(240 12 9.5)" ${RF}/></g></g>`,
    },
  },
  // 168. SOLAR
  {
    name: "solar",
    label: "Solar Panel",
    category: "World & Energy",
    motionSummary: "Photovoltaic array tilts toward radiant sunbeams to harvest clean energy",
    soundSummary: "Warm solar charge harmonic swell",
    svgs: {
      outline: `<g data-part="panel" data-pivot="12 16" ${K}><path d="M5.4 9.6A1.1 1.1 0 0 1 6.4 8.8H17.6A1.1 1.1 0 0 1 18.6 9.6L20.8 16.4A1 1 0 0 1 19.8 17.7H4.2A1 1 0 0 1 3.2 16.4Z"/><line x1="9.6" y1="8.8" x2="8.8" y2="17.7" ${K_THIN}/><line x1="14.4" y1="8.8" x2="15.2" y2="17.7" ${K_THIN}/><line x1="4.4" y1="13.2" x2="19.6" y2="13.2" ${K_THIN}/><line x1="12" y1="17.7" x2="12" y2="20.8"/><line x1="8.2" y1="20.8" x2="15.8" y2="20.8"/></g><g data-part="rays" data-pivot="12 5" ${K_THIN}><circle cx="12" cy="5.4" r="1.8"/><line x1="12" y1="1.8" x2="12" y2="2.6"/><line x1="7.8" y1="3.4" x2="8.8" y2="4.1"/><line x1="16.2" y1="3.4" x2="15.2" y2="4.1"/></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><g fill="none" stroke="#000" stroke-width="1.25"><line x1="9.6" y1="8.6" x2="8.8" y2="17.9"/><line x1="14.4" y1="8.6" x2="15.2" y2="17.9"/><line x1="4" y1="13.2" x2="20" y2="13.2"/></g></mask></defs><g data-part="panel" data-pivot="12 16" fill="currentColor"><path d="M5.4 9.5A1.1 1.1 0 0 1 6.4 8.7H17.6A1.1 1.1 0 0 1 18.6 9.5L20.9 16.5A1 1 0 0 1 19.9 17.8H4.1A1 1 0 0 1 3.1 16.5Z" mask="url(#__GID__-m1)"/><rect x="11" y="17.6" width="2" height="2.6"/><rect x="8.2" y="19.6" width="7.6" height="1.5" rx="0.75"/></g><g data-part="rays" data-pivot="12 5" fill="currentColor"><circle cx="12" cy="5.4" r="2"/><rect x="11.3" y="1.7" width="1.4" height="1.3" rx="0.65"/><rect x="7.4" y="3.2" width="1.4" height="1.6" rx="0.7" transform="rotate(-48 8.1 4)"/><rect x="15.2" y="3.2" width="1.4" height="1.6" rx="0.7" transform="rotate(48 15.9 4)"/></g>`,
      duotone: `<g data-part="panel" data-pivot="12 16"><path d="M5.4 9.6A1.1 1.1 0 0 1 6.4 8.8H17.6A1.1 1.1 0 0 1 18.6 9.6L20.8 16.4A1 1 0 0 1 19.8 17.7H4.2A1 1 0 0 1 3.2 16.4Z" ${D}/><line x1="9.6" y1="8.8" x2="8.8" y2="17.7" ${DK_THIN}/><line x1="14.4" y1="8.8" x2="15.2" y2="17.7" ${DK_THIN}/><line x1="4.4" y1="13.2" x2="19.6" y2="13.2" ${DK_THIN}/><line x1="12" y1="17.7" x2="12" y2="20.8" ${DK}/><line x1="8.2" y1="20.8" x2="15.8" y2="20.8" ${DK}/></g><g data-part="rays" data-pivot="12 5"><circle cx="12" cy="5.4" r="1.8" ${D}/><g ${DK_THIN}><line x1="12" y1="1.8" x2="12" y2="2.6"/><line x1="7.8" y1="3.4" x2="8.8" y2="4.1"/><line x1="16.2" y1="3.4" x2="15.2" y2="4.1"/></g></g>`,
      glass: glassCompose(
        `<g data-part="rays" data-pivot="12 5" ${GB}><circle cx="12" cy="5.4" r="2"/><rect x="11.3" y="1.7" width="1.4" height="1.3" rx="0.65"/></g><rect x="11" y="17.6" width="2" height="2.6" ${GB}/><rect x="8.2" y="19.6" width="7.6" height="1.5" rx="0.75" ${GB}/>`,
        `<path data-part="panel" data-pivot="12 16" d="M5.4 9.5A1.1 1.1 0 0 1 6.4 8.7H17.6A1.1 1.1 0 0 1 18.6 9.5L20.9 16.5A1 1 0 0 1 19.9 17.8H4.1A1 1 0 0 1 3.1 16.5Z"/>`,
        `<g data-part="panel" data-pivot="12 16" ${GF}><path d="M5.4 9.5A1.1 1.1 0 0 1 6.4 8.7H17.6A1.1 1.1 0 0 1 18.6 9.5L20.9 16.5A1 1 0 0 1 19.9 17.8H4.1A1 1 0 0 1 3.1 16.5Z"/></g><g data-part="panel" data-pivot="12 16" ${GBS}><line x1="9.6" y1="9" x2="8.8" y2="17.5"/><line x1="14.4" y1="9" x2="15.2" y2="17.5"/><line x1="4.4" y1="13.2" x2="19.6" y2="13.2"/></g>`
      ),
      stencil: `<g fill="currentColor"><g data-part="panel" data-pivot="12 16"><polygon points="6.2 8.8 9.2 8.8 8.9 12.7 4.6 12.7"/><polygon points="10.3 8.8 13.7 8.8 14 12.7 10 12.7"/><polygon points="14.8 8.8 17.8 8.8 19.4 12.7 15.1 12.7"/><polygon points="4.3 13.8 8.8 13.8 8.5 17.7 3.2 17.7"/><polygon points="9.9 13.8 14.1 13.8 14.4 17.7 9.6 17.7"/><polygon points="15.2 13.8 19.7 13.8 20.8 17.7 15.5 17.7"/><rect x="8.2" y="19.4" width="7.6" height="1.5" rx="0.75"/></g><g data-part="rays" data-pivot="12 5"><circle cx="12" cy="5.4" r="1.9"/><rect x="11.3" y="1.7" width="1.4" height="1.3" rx="0.65"/></g></g>`,
      hardware: `<g data-part="panel" data-pivot="12 16"><rect x="11" y="17.6" width="2" height="2.6" ${HM}/><rect x="8.2" y="19.6" width="7.6" height="1.5" rx="0.75" ${HM}/><path d="M5.4 9.5A1.1 1.1 0 0 1 6.4 8.7H17.6A1.1 1.1 0 0 1 18.6 9.5L20.9 16.5A1 1 0 0 1 19.9 17.8H4.1A1 1 0 0 1 3.1 16.5Z" ${HD}/><line x1="9.6" y1="9" x2="8.8" y2="17.6" stroke="#52525b" stroke-width="1.15"/><line x1="14.4" y1="9" x2="15.2" y2="17.6" stroke="#52525b" stroke-width="1.15"/><line x1="4.4" y1="13.2" x2="19.6" y2="13.2" stroke="#52525b" stroke-width="1.15"/></g><g data-part="rays" data-pivot="12 5"><circle cx="12" cy="5.4" r="2" ${HA}/><rect x="11.3" y="1.7" width="1.4" height="1.3" rx="0.65" ${HA}/></g>`,
      relief: `<g data-part="panel" data-pivot="12 16"><path transform="translate(1.3,1.3)" d="M5.4 9.6A1.1 1.1 0 0 1 6.4 8.8H17.6A1.1 1.1 0 0 1 18.6 9.6L20.8 16.4A1 1 0 0 1 19.8 17.7H4.2A1 1 0 0 1 3.2 16.4Z" ${RS}/><path d="M5.4 9.6A1.1 1.1 0 0 1 6.4 8.8H17.6A1.1 1.1 0 0 1 18.6 9.6L20.8 16.4A1 1 0 0 1 19.8 17.7H4.2A1 1 0 0 1 3.2 16.4Z" ${RF}/><line x1="9.6" y1="8.8" x2="8.8" y2="17.7" ${RF_LINE}/><line x1="14.4" y1="8.8" x2="15.2" y2="17.7" ${RF_LINE}/><line x1="4.4" y1="13.2" x2="19.6" y2="13.2" ${RF_LINE}/><line x1="12" y1="17.7" x2="12" y2="20.8" ${RF_LINE}/><line x1="8.2" y1="20.8" x2="15.8" y2="20.8" ${RF_LINE}/></g><g data-part="rays" data-pivot="12 5"><circle cx="12" cy="5.4" r="1.8" ${RF}/><line x1="12" y1="1.8" x2="12" y2="2.6" ${RF_LINE}/></g>`,
    },
  },
  // 169. RADAR
  {
    name: "radar",
    label: "Radar",
    category: "World & Energy",
    motionSummary: "Rotating sweep beam circles continuously revealing pulsing target blip",
    soundSummary: "Classic sweeping sonar radar ping + target echo",
    svgs: {
      outline: `<circle data-part="ring" cx="12" cy="12" r="8.5" ${K}/><circle cx="12" cy="12" r="4.5" ${K_THIN}/><g class="radar-spin"><path d="M12 12L17.8 6.2A8.2 8.2 0 0 0 12 3.8Z" fill="currentColor" fill-opacity="0.16"/><line x1="12" y1="12" x2="17.8" y2="6.2" ${K}/></g><circle data-part="blip" cx="15.5" cy="9" r="1.25" fill="currentColor"/>`,
      solid: `<path data-part="ring" fill="currentColor" fill-rule="evenodd" d="M12 3.2A8.8 8.8 0 1 0 12 20.8A8.8 8.8 0 1 0 12 3.2ZM12 5A7 7 0 1 0 12 19A7 7 0 1 0 12 5Z"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="1.1" opacity="0.45"/><g class="radar-spin"><path d="M12 12L17 7A7 7 0 0 0 12 5Z" fill="currentColor" fill-opacity="0.28"/><line x1="12" y1="12" x2="17" y2="7" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></g><circle data-part="blip" cx="15.2" cy="9.2" r="1.35" fill="currentColor"/>`,
      duotone: `<circle data-part="ring" cx="12" cy="12" r="8.5" ${D}/><circle cx="12" cy="12" r="4.5" ${DK_THIN}/><g class="radar-spin"><path d="M12 12L17.8 6.2A8.2 8.2 0 0 0 12 3.8Z" fill="currentColor" fill-opacity="0.18"/><line x1="12" y1="12" x2="17.8" y2="6.2" ${DK}/></g><circle data-part="blip" cx="15.5" cy="9" r="1.25" fill="currentColor"/>`,
      glass: glassCompose(
        `<circle cx="12" cy="12" r="4.5" ${GBS}/>`,
        `<circle data-part="ring" cx="12" cy="12" r="8.6"/>`,
        `<g data-part="ring" ${GF}><circle cx="12" cy="12" r="8.6"/></g><g class="radar-spin"><path d="M12 12L17.8 6.2A8.2 8.2 0 0 0 12 3.8Z" fill="currentColor" fill-opacity="0.16"/><line x1="12" y1="12" x2="17.8" y2="6.2" ${GBS}/></g><circle data-part="blip" cx="15.5" cy="9" r="1.3" ${GB}/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="ring"><path d="M5.6 5.6A9 9 0 0 1 18.4 5.6L16.9 7.1A6.9 6.9 0 0 0 7.1 7.1Z"/><path d="M18.4 18.4A9 9 0 0 1 5.6 18.4L7.1 16.9A6.9 6.9 0 0 0 16.9 16.9Z"/></g><g class="radar-spin"><path d="M12 12L17.5 6.5A7.8 7.8 0 0 0 12 4.2Z" fill-opacity="0.2"/><line x1="12" y1="12" x2="17.5" y2="6.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></g><circle data-part="blip" cx="15.5" cy="9" r="1.3"/></g>`,
      hardware: `<circle data-part="ring" cx="12" cy="12" r="8.8" ${HD}/><circle cx="12" cy="12" r="4.8" fill="none" stroke="#52525b" stroke-width="1.1"/><g class="radar-spin"><path d="M12 12L17.8 6.2A8.2 8.2 0 0 0 12 3.8Z" fill="#ff6b35" fill-opacity="0.22"/><line x1="12" y1="12" x2="17.8" y2="6.2" stroke="#e4e4e7" stroke-width="1.8" stroke-linecap="round"/></g><circle data-part="blip" cx="15.5" cy="9" r="1.4" ${HA}/>`,
      relief: `<g data-part="ring"><circle transform="translate(1.3,1.3)" cx="12" cy="12" r="8.5" ${RS}/><circle cx="12" cy="12" r="8.5" ${RF}/><circle cx="12" cy="12" r="4.5" ${RF_LINE}/></g><g class="radar-spin"><line x1="12" y1="12" x2="17.8" y2="6.2" ${RF_LINE}/></g><circle data-part="blip" cx="15.5" cy="9" r="1.25" ${RS}/>`,
    },
  },
  // 170. DNA
  {
    name: "dna",
    label: "DNA Helix",
    category: "World & Energy",
    motionSummary: "Twin double-helix strands pulse and shift in smooth bio-rhythm without tearing rungs",
    soundSummary: "Soft filtered ascending harmonic helix chime",
    svgs: {
      outline: `<g data-part="strand-1" data-pivot="12 12" ${K}><path d="M7.2 3.5C7.2 7.2 16.8 7.8 16.8 12C16.8 16.2 7.2 16.8 7.2 20.5"/><line x1="7.8" y1="5.5" x2="16.2" y2="5.5" ${K_THIN}/><line x1="9.6" y1="8.6" x2="14.4" y2="8.6" ${K_THIN}/></g><g data-part="strand-2" data-pivot="12 12" ${K}><path d="M16.8 3.5C16.8 7.2 7.2 7.8 7.2 12C7.2 16.2 16.8 16.8 16.8 20.5"/><line x1="9.6" y1="15.4" x2="14.4" y2="15.4" ${K_THIN}/><line x1="7.8" y1="18.5" x2="16.2" y2="18.5" ${K_THIN}/></g>`,
      solid: `<g data-part="strand-1" data-pivot="12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7.2 3.5C7.2 7.2 16.8 7.8 16.8 12C16.8 16.2 7.2 16.8 7.2 20.5"/><line x1="7.8" y1="5.5" x2="16.2" y2="5.5" stroke-width="1.5"/><line x1="9.6" y1="8.6" x2="14.4" y2="8.6" stroke-width="1.5"/></g><g data-part="strand-2" data-pivot="12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M16.8 3.5C16.8 7.2 7.2 7.8 7.2 12C7.2 16.2 16.8 16.8 16.8 20.5"/><line x1="9.6" y1="15.4" x2="14.4" y2="15.4" stroke-width="1.5"/><line x1="7.8" y1="18.5" x2="16.2" y2="18.5" stroke-width="1.5"/></g>`,
      duotone: `<g data-part="strand-1" data-pivot="12 12" ${DK}><path d="M7.2 3.5C7.2 7.2 16.8 7.8 16.8 12C16.8 16.2 7.2 16.8 7.2 20.5"/><line x1="7.8" y1="5.5" x2="16.2" y2="5.5" ${DK_THIN}/><line x1="9.6" y1="8.6" x2="14.4" y2="8.6" ${DK_THIN}/></g><g data-part="strand-2" data-pivot="12 12" ${DK}><path d="M16.8 3.5C16.8 7.2 7.2 7.8 7.2 12C7.2 16.2 16.8 16.8 16.8 20.5"/><line x1="9.6" y1="15.4" x2="14.4" y2="15.4" ${DK_THIN}/><line x1="7.8" y1="18.5" x2="16.2" y2="18.5" ${DK_THIN}/></g>`,
      glass: glassCompose(
        `<g data-part="strand-2" data-pivot="12 12" ${GBS}><path d="M16.8 3.5C16.8 7.2 7.2 7.8 7.2 12C7.2 16.2 16.8 16.8 16.8 20.5"/><line x1="9.6" y1="15.4" x2="14.4" y2="15.4"/><line x1="7.8" y1="18.5" x2="16.2" y2="18.5"/></g>`,
        `<g data-part="strand-1" data-pivot="12 12"><path d="M7.2 3.5C7.2 7.2 16.8 7.8 16.8 12C16.8 16.2 7.2 16.8 7.2 20.5" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round"/></g>`,
        `<g data-part="strand-1" data-pivot="12 12" stroke="url(#g-rim)" stroke-width="1.9" fill="none" stroke-linecap="round"><path d="M7.2 3.5C7.2 7.2 16.8 7.8 16.8 12C16.8 16.2 7.2 16.8 7.2 20.5"/><line x1="7.8" y1="5.5" x2="16.2" y2="5.5"/><line x1="9.6" y1="8.6" x2="14.4" y2="8.6"/></g>`
      ),
      stencil: `<g fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round"><g data-part="strand-1" data-pivot="12 12"><path d="M7.2 3.5C7.2 6.8 14.8 7.5 16.4 10.5"/><path d="M16.4 13.5C14.8 16.5 7.2 17.2 7.2 20.5"/><line x1="8.4" y1="5.5" x2="15.6" y2="5.5" stroke-width="1.35"/><line x1="10" y1="8.6" x2="14" y2="8.6" stroke-width="1.35"/></g><g data-part="strand-2" data-pivot="12 12"><path d="M16.8 3.5C16.8 6.8 9.2 7.5 7.6 10.5"/><path d="M7.6 13.5C9.2 16.5 16.8 17.2 16.8 20.5"/><line x1="10" y1="15.4" x2="14" y2="15.4" stroke-width="1.35"/><line x1="8.4" y1="18.5" x2="15.6" y2="18.5" stroke-width="1.35"/></g></g>`,
      hardware: `<g data-part="strand-2" data-pivot="12 12" fill="none" stroke="#52525b" stroke-width="2" stroke-linecap="round"><path d="M16.8 3.5C16.8 7.2 7.2 7.8 7.2 12C7.2 16.2 16.8 16.8 16.8 20.5"/><line x1="9.6" y1="15.4" x2="14.4" y2="15.4" stroke-width="1.4"/><line x1="7.8" y1="18.5" x2="16.2" y2="18.5" stroke-width="1.4"/></g><g data-part="strand-1" data-pivot="12 12" fill="none" stroke="#ff6b35" stroke-width="2" stroke-linecap="round"><path d="M7.2 3.5C7.2 7.2 16.8 7.8 16.8 12C16.8 16.2 7.2 16.8 7.2 20.5"/><line x1="7.8" y1="5.5" x2="16.2" y2="5.5" stroke-width="1.4"/><line x1="9.6" y1="8.6" x2="14.4" y2="8.6" stroke-width="1.4"/></g>`,
      relief: `<g transform="translate(1.2,1.2)"><path data-part="strand-1" data-pivot="12 12" d="M7.2 3.5C7.2 7.2 16.8 7.8 16.8 12C16.8 16.2 7.2 16.8 7.2 20.5" ${RS_LINE}/><path data-part="strand-2" data-pivot="12 12" d="M16.8 3.5C16.8 7.2 7.2 7.8 7.2 12C7.2 16.2 16.8 16.8 16.8 20.5" ${RS_LINE}/></g><g data-part="strand-1" data-pivot="12 12" ${RF_LINE}><path d="M7.2 3.5C7.2 7.2 16.8 7.8 16.8 12C16.8 16.2 7.2 16.8 7.2 20.5"/><line x1="7.8" y1="5.5" x2="16.2" y2="5.5"/><line x1="9.6" y1="8.6" x2="14.4" y2="8.6"/></g><g data-part="strand-2" data-pivot="12 12" ${RF_LINE}><path d="M16.8 3.5C16.8 7.2 7.2 7.8 7.2 12C7.2 16.2 16.8 16.8 16.8 20.5"/><line x1="9.6" y1="15.4" x2="14.4" y2="15.4"/><line x1="7.8" y1="18.5" x2="16.2" y2="18.5"/></g>`,
    },
  },
];
