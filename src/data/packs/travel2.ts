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

export const TRAVEL2_ICONS: IconDef[] = [
  // 211. HELICOPTER
  {
    name: "helicopter",
    label: "Helicopter",
    category: "Travel & Play",
    motionSummary: "Overhead rotor blades spin rapidly as fuselage hovers & pitches slightly",
    soundSummary: "Rhythmic helicopter main-rotor thump-thump-thump",
    svgs: {
      outline: `<g data-part="rotor" data-pivot="11.5 6" ${K}><line x1="4" y1="6" x2="19" y2="6"/><line x1="11.5" y1="6" x2="11.5" y2="9"/></g><g data-part="body" data-pivot="12 13" ${K}><path d="M5.5 14C5.5 10.8 8 9 11.5 9H15.5C17.8 9 19.5 10.6 19.5 12.8C19.5 14.8 18 16 15.5 16H9.5A4 4 0 0 1 5.5 14Z"/><path d="M18 12.5H21.2M7 18.8H17.5M10 16L9 18.8M15 16L16 18.8" ${K_THIN}/></g>`,
      solid: `<g data-part="rotor" data-pivot="11.5 6" fill="currentColor"><rect x="3.8" y="5" width="15.4" height="1.9" rx="0.95"/><rect x="10.6" y="6.4" width="1.8" height="3"/></g><g data-part="body" data-pivot="12 13" fill="currentColor"><path d="M5.4 13.8C5.4 10.6 8 8.8 11.5 8.8H15.6A4 4 0 0 1 19.6 12.8C19.6 15 18 16.2 15.5 16.2H9.2A3.8 3.8 0 0 1 5.4 13.8Z"/><rect x="18" y="11.8" width="3.5" height="1.5" rx="0.7"/><rect x="6.8" y="18.2" width="11" height="1.5" rx="0.7"/></g>`,
      duotone: `<g data-part="rotor" data-pivot="11.5 6" ${DK}><line x1="4" y1="6" x2="19" y2="6"/><line x1="11.5" y1="6" x2="11.5" y2="9"/></g><g data-part="body" data-pivot="12 13"><path d="M5.5 14C5.5 10.8 8 9 11.5 9H15.5C17.8 9 19.5 10.6 19.5 12.8C19.5 14.8 18 16 15.5 16H9.5A4 4 0 0 1 5.5 14Z" ${D}/><path d="M18 12.5H21.2M7 18.8H17.5M10 16L9 18.8M15 16L16 18.8" ${DK_THIN}/></g>`,
      glass: glassCompose(
        `<g data-part="rotor" data-pivot="11.5 6" ${GB}><rect x="3.8" y="5" width="15.4" height="2" rx="1"/><rect x="10.6" y="6.4" width="1.8" height="3"/></g><rect data-part="body" data-pivot="12 13" x="6.8" y="18" width="11" height="1.6" rx="0.8" ${GB}/>`,
        `<path data-part="body" data-pivot="12 13" d="M5.4 13.8C5.4 10.6 8 8.8 11.5 8.8H15.6A4 4 0 0 1 19.6 12.8C19.6 15 18 16.2 15.5 16.2H9.2A3.8 3.8 0 0 1 5.4 13.8Z"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="rotor" data-pivot="11.5 6"><rect x="3.8" y="5" width="7" height="1.8" rx="0.9"/><rect x="12.2" y="5" width="7" height="1.8" rx="0.9"/><rect x="10.7" y="6.6" width="1.6" height="2.4"/></g><g data-part="body" data-pivot="12 13"><path d="M5.6 13.8C5.6 10.6 8.2 9 11.4 9H15.6A3.6 3.6 0 0 1 19.2 12.6C19.2 14.8 17.6 16 15.4 16H9.2A3.6 3.6 0 0 1 5.6 13.8Z"/><rect x="6.8" y="18.2" width="10.8" height="1.5" rx="0.7"/></g></g>`,
      hardware: `<g data-part="rotor" data-pivot="11.5 6"><rect x="3.8" y="5" width="15.4" height="1.9" rx="0.95" ${HA}/><rect x="10.6" y="6.4" width="1.8" height="3" ${HD}/></g><g data-part="body" data-pivot="12 13"><path d="M5.4 13.8C5.4 10.6 8 8.8 11.5 8.8H15.6A4 4 0 0 1 19.6 12.8C19.6 15 18 16.2 15.5 16.2H9.2A3.8 3.8 0 0 1 5.4 13.8Z" ${HL}/><rect x="6.8" y="18.2" width="11" height="1.6" rx="0.8" ${HD}/></g>`,
      relief: `<g data-part="rotor" data-pivot="11.5 6" ${RF_LINE}><line x1="4" y1="6" x2="19" y2="6"/><line x1="11.5" y1="6" x2="11.5" y2="9"/></g><g data-part="body" data-pivot="12 13"><path transform="translate(1.3,1.3)" d="M5.5 14C5.5 10.8 8 9 11.5 9H15.5C17.8 9 19.5 10.6 19.5 12.8C19.5 14.8 18 16 15.5 16H9.5A4 4 0 0 1 5.5 14Z" ${RS}/><path d="M5.5 14C5.5 10.8 8 9 11.5 9H15.5C17.8 9 19.5 10.6 19.5 12.8C19.5 14.8 18 16 15.5 16H9.5A4 4 0 0 1 5.5 14Z" ${RF}/><line x1="7" y1="18.8" x2="17.5" y2="18.8" ${RF_LINE}/></g>`,
    },
  },
  // 212. SUBMARINE
  {
    name: "submarine",
    label: "Submarine",
    category: "Travel & Play",
    motionSummary: "Periscope extends upward from conning tower while steel hull submerges slightly",
    soundSummary: "Classic submarine sonar ping + deep underwater bubbles",
    svgs: {
      outline: `<path data-part="scope" d="M12 10.5V5.5H14.5" ${K}/><g data-part="hull" data-pivot="12 14.5" ${K}><rect x="4" y="10.8" width="16" height="7" rx="3.5"/><circle cx="9.2" cy="14.3" r="0.9" fill="currentColor"/><circle cx="13.5" cy="14.3" r="0.9" fill="currentColor"/></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><circle cx="9.2" cy="14.3" r="1.1" fill="#000"/><circle cx="13.5" cy="14.3" r="1.1" fill="#000"/></mask></defs><path data-part="scope" d="M12 11V5.4H14.8" ${K}/><rect data-part="hull" data-pivot="12 14.5" x="3.8" y="10.6" width="16.4" height="7.4" rx="3.7" fill="currentColor" mask="url(#__GID__-m1)"/>`,
      duotone: `<path data-part="scope" d="M12 10.5V5.5H14.5" ${DK}/><g data-part="hull" data-pivot="12 14.5"><rect x="4" y="10.8" width="16" height="7" rx="3.5" ${D}/><circle cx="9.2" cy="14.3" r="0.9" fill="currentColor"/><circle cx="13.5" cy="14.3" r="0.9" fill="currentColor"/></g>`,
      glass: glassCompose(
        `<path data-part="scope" d="M12 11V5.4H14.8" ${GBS}/>`,
        `<rect data-part="hull" data-pivot="12 14.5" x="3.8" y="10.6" width="16.4" height="7.4" rx="3.7"/>`,
        `<g data-part="hull" data-pivot="12 14.5" ${GF}><rect x="3.8" y="10.6" width="16.4" height="7.4" rx="3.7"/></g><circle data-part="hull" data-pivot="12 14.5" cx="9.2" cy="14.3" r="1.1" ${GB}/><circle data-part="hull" data-pivot="12 14.5" cx="13.5" cy="14.3" r="1.1" ${GB}/>`
      ),
      stencil: `<g fill="currentColor"><path data-part="scope" d="M11.1 10V5.2H14.8V6.8H12.7V10Z"/><g data-part="hull" data-pivot="12 14.5"><path d="M7.5 10.8H11.3V17.8H7.5A3.5 3.5 0 0 1 7.5 10.8Z"/><path d="M12.7 10.8H16.5A3.5 3.5 0 0 1 16.5 17.8H12.7Z"/></g></g>`,
      hardware: `<path data-part="scope" d="M12 11V5.4H14.8" fill="none" stroke="#52525b" stroke-width="2" stroke-linecap="round"/><g data-part="hull" data-pivot="12 14.5"><rect x="3.8" y="10.6" width="16.4" height="7.4" rx="3.7" ${HL}/><circle cx="9.2" cy="14.3" r="1.2" ${HA}/><circle cx="13.5" cy="14.3" r="1.2" ${HA}/></g>`,
      relief: `<path data-part="scope" d="M12 10.5V5.5H14.5" ${RF_LINE}/><g data-part="hull" data-pivot="12 14.5"><rect transform="translate(1.3,1.3)" x="4" y="10.8" width="16" height="7" rx="3.5" ${RS}/><rect x="4" y="10.8" width="16" height="7" rx="3.5" ${RF}/></g>`,
    },
  },
  // 213. SAILBOAT
  {
    name: "sailboat",
    label: "Sailboat",
    category: "Travel & Play",
    motionSummary: "Triangular mainsail billows in wind while boat hull rocks on gentle wave",
    soundSummary: "Canvas sail wind flap + gentle lake hull water lap",
    svgs: {
      outline: `<path data-part="sail" data-pivot="12 14" d="M12 4V14H18.5Z" ${K}/><path data-part="hull" data-pivot="12 16" d="M4.5 15.5H19.5L17.2 19.2H6.8Z" ${K}/><path data-part="wave" d="M3.5 20.8Q7.8 19.3 12 20.8T20.5 20.8" ${K_THIN}/>`,
      solid: `<path data-part="sail" data-pivot="12 14" fill="currentColor" d="M11.6 3.6L19 14.2H11.6Z"/><path data-part="hull" data-pivot="12 16" fill="currentColor" d="M4.4 15.4H19.6L17.3 19H6.7Z"/><path data-part="wave" d="M3.5 20.8Q7.8 19.3 12 20.8T20.5 20.8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`,
      duotone: `<path data-part="sail" data-pivot="12 14" d="M12 4V14H18.5Z" ${D}/><path data-part="hull" data-pivot="12 16" d="M4.5 15.5H19.5L17.2 19.2H6.8Z" ${D}/><path data-part="wave" d="M3.5 20.8Q7.8 19.3 12 20.8T20.5 20.8" ${DK_THIN}/>`,
      glass: glassCompose(
        `<path data-part="hull" data-pivot="12 16" d="M4.4 15.4H19.6L17.3 19H6.7Z" ${GB}/><path data-part="wave" d="M3.5 20.8Q7.8 19.3 12 20.8T20.5 20.8" ${GBS}/>`,
        `<polygon data-part="sail" data-pivot="12 14" points="11.6 3.6 19 14.2 11.6 14.2"/>`
      ),
      stencil: `<g fill="currentColor"><polygon data-part="sail" data-pivot="12 14" points="11.6 3.8 18.8 14 11.6 14"/><g data-part="hull" data-pivot="12 16"><polygon points="4.5 15.2 11.3 15.2 11.3 18.8 6.8 18.8"/><polygon points="12.7 15.2 19.5 15.2 17.2 18.8 12.7 18.8"/></g><path data-part="wave" d="M3.5 20.8Q7.8 19.3 12 20.8T20.5 20.8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></g>`,
      hardware: `<polygon data-part="sail" data-pivot="12 14" points="11.6 3.6 19 14.2 11.6 14.2" ${HA}/><polygon data-part="hull" data-pivot="12 16" points="4.4 15.4 19.6 15.4 17.3 19 6.7 19" ${HL}/><path data-part="wave" d="M3.5 20.8Q7.8 19.3 12 20.8T20.5 20.8" fill="none" stroke="#52525b" stroke-width="1.6" stroke-linecap="round"/>`,
      relief: `<g data-part="sail" data-pivot="12 14"><polygon transform="translate(1.3,1.3)" points="12 4 18.5 14 12 14" ${RS}/><polygon points="12 4 18.5 14 12 14" ${RF}/></g><g data-part="hull" data-pivot="12 16"><polygon transform="translate(1.3,1.3)" points="4.5 15.5 19.5 15.5 17.2 19.2 6.8 19.2" ${RS}/><polygon points="4.5 15.5 19.5 15.5 17.2 19.2 6.8 19.2" ${RF}/></g><path data-part="wave" d="M3.5 20.8Q7.8 19.3 12 20.8T20.5 20.8" ${RF_LINE}/>`,
    },
  },
  // 214. BALLOON
  {
    name: "balloon",
    label: "Air Balloon",
    category: "Travel & Play",
    motionSummary: "Hot air balloon envelope lifts buoyantly lifting wicker basket below",
    soundSummary: "Propane burner roar whoosh + rising warm air drift",
    svgs: {
      outline: `<g data-part="envelope" data-pivot="12 10" ${K}><path d="M12 3.5A5.8 5.8 0 0 0 6.2 9.3C6.2 12.2 8.8 15 10 16H14C15.2 15 17.8 12.2 17.8 9.3A5.8 5.8 0 0 0 12 3.5Z"/><path d="M12 3.5V16" ${K_THIN}/></g><rect data-part="basket" x="9.8" y="17.8" width="4.4" height="2.8" rx="0.6" ${K}/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><line x1="12" y1="3.4" x2="12" y2="16.2" stroke="#000" stroke-width="1.1"/></mask></defs><path data-part="envelope" data-pivot="12 10" fill="currentColor" mask="url(#__GID__-m1)" d="M12 3.4A6 6 0 0 0 6 9.4C6 12.4 8.7 15.2 10 16.2H14C15.3 15.2 18 12.4 18 9.4A6 6 0 0 0 12 3.4Z"/><rect data-part="basket" x="9.8" y="17.6" width="4.4" height="3" rx="0.7" fill="currentColor"/>`,
      duotone: `<g data-part="envelope" data-pivot="12 10"><path d="M12 3.5A5.8 5.8 0 0 0 6.2 9.3C6.2 12.2 8.8 15 10 16H14C15.2 15 17.8 12.2 17.8 9.3A5.8 5.8 0 0 0 12 3.5Z" ${D}/><path d="M12 3.5V16" ${DK_THIN}/></g><rect data-part="basket" x="9.8" y="17.8" width="4.4" height="2.8" rx="0.6" ${D}/>`,
      glass: glassCompose(
        `<rect data-part="basket" x="9.8" y="17.6" width="4.4" height="3" rx="0.7" ${GB}/>`,
        `<path data-part="envelope" data-pivot="12 10" d="M12 3.4A6 6 0 0 0 6 9.4C6 12.4 8.7 15.2 10 16.2H14C15.3 15.2 18 12.4 18 9.4A6 6 0 0 0 12 3.4Z"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="envelope" data-pivot="12 10"><path d="M11.3 3.5A5.8 5.8 0 0 0 6.2 9.3C6.2 12.2 8.6 14.8 9.8 16H11.3Z"/><path d="M12.7 3.5A5.8 5.8 0 0 1 17.8 9.3C17.8 12.2 15.4 14.8 14.2 16H12.7Z"/></g><rect data-part="basket" x="9.8" y="17.6" width="4.4" height="2.8" rx="0.6"/></g>`,
      hardware: `<path data-part="envelope" data-pivot="12 10" d="M12 3.4A6 6 0 0 0 6 9.4C6 12.4 8.7 15.2 10 16.2H14C15.3 15.2 18 12.4 18 9.4A6 6 0 0 0 12 3.4Z" ${HA}/><rect data-part="basket" x="9.8" y="17.6" width="4.4" height="3" rx="0.7" ${HD}/>`,
      relief: `<g data-part="envelope" data-pivot="12 10"><path transform="translate(1.3,1.3)" d="M12 3.5A5.8 5.8 0 0 0 6.2 9.3C6.2 12.2 8.8 15 10 16H14C15.2 15 17.8 12.2 17.8 9.3A5.8 5.8 0 0 0 12 3.5Z" ${RS}/><path d="M12 3.5A5.8 5.8 0 0 0 6.2 9.3C6.2 12.2 8.8 15 10 16H14C15.2 15 17.8 12.2 17.8 9.3A5.8 5.8 0 0 0 12 3.5Z" ${RF}/></g><rect data-part="basket" x="9.8" y="17.8" width="4.4" height="2.8" rx="0.6" ${RF}/>`,
    },
  },
  // 215. SKATEBOARD
  {
    name: "skateboard",
    label: "Skateboard",
    category: "Travel & Play",
    motionSummary: "Maple deck pops into sharp kickflip angle while urethane wheels spin",
    soundSummary: "Maple tail ollie snap + urethane street wheel roll",
    svgs: {
      outline: `<path data-part="deck" data-pivot="12 12" d="M3.5 11L5.8 12.8H18.2L20.5 11" ${K}/><circle data-part="wheel-l" data-pivot="7.5 16" cx="7.5" cy="16" r="1.8" ${K}/><circle data-part="wheel-r" data-pivot="16.5" cy="16" r="1.8" ${K}/>`.replace('data-pivot="16.5" cy', 'data-pivot="16.5 16" cx="16.5" cy'),
      solid: `<path data-part="deck" data-pivot="12 12" d="M3.5 11L5.8 12.8H18.2L20.5 11" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><circle data-part="wheel-l" data-pivot="7.5 16" cx="7.5" cy="16" r="2" fill="currentColor"/><circle data-part="wheel-r" data-pivot="16.5 16" cx="16.5" cy="16" r="2" fill="currentColor"/>`,
      duotone: `<path data-part="deck" data-pivot="12 12" d="M3.5 11L5.8 12.8H18.2L20.5 11" ${DK}/><circle data-part="wheel-l" data-pivot="7.5 16" cx="7.5" cy="16" r="1.8" ${D}/><circle data-part="wheel-r" data-pivot="16.5 16" cx="16.5" cy="16" r="1.8" ${D}/>`,
      glass: glassCompose(
        `<circle data-part="wheel-l" data-pivot="7.5 16" cx="7.5" cy="16" r="2" ${GB}/><circle data-part="wheel-r" data-pivot="16.5 16" cx="16.5" cy="16" r="2" ${GB}/>`,
        `<path data-part="deck" data-pivot="12 12" d="M3.5 11L5.8 12.8H18.2L20.5 11" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
        `<path data-part="deck" data-pivot="12 12" d="M3.5 11L5.8 12.8H18.2L20.5 11" stroke="url(#g-rim)" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="deck" data-pivot="12 12"><rect x="4" y="11.4" width="7.2" height="2" rx="1"/><rect x="12.8" y="11.4" width="7.2" height="2" rx="1"/></g><circle data-part="wheel-l" data-pivot="7.5 16" cx="7.5" cy="16" r="1.9"/><circle data-part="wheel-r" data-pivot="16.5 16" cx="16.5" cy="16" r="1.9"/></g>`,
      hardware: `<path data-part="deck" data-pivot="12 12" d="M3.5 11L5.8 12.8H18.2L20.5 11" fill="none" stroke="#3f3f46" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><circle data-part="wheel-l" data-pivot="7.5 16" cx="7.5" cy="16" r="2" ${HA}/><circle data-part="wheel-r" data-pivot="16.5 16" cx="16.5" cy="16" r="2" ${HA}/>`,
      relief: `<path data-part="deck" data-pivot="12 12" d="M3.5 11L5.8 12.8H18.2L20.5 11" ${RF_LINE}/><g transform="translate(1.2,1.2)"><circle data-part="wheel-l" data-pivot="7.5 16" cx="7.5" cy="16" r="1.8" ${RS}/><circle data-part="wheel-r" data-pivot="16.5 16" cx="16.5" cy="16" r="1.8" ${RS}/></g><circle data-part="wheel-l" data-pivot="7.5 16" cx="7.5" cy="16" r="1.8" ${RF}/><circle data-part="wheel-r" data-pivot="16.5 16" cx="16.5" cy="16" r="1.8" ${RF}/>`,
    },
  },
  // 216. BOWLING
  {
    name: "bowling",
    label: "Bowling",
    category: "Travel & Play",
    motionSummary: "Heavy bowling ball rolls into hardwood pin knocking it backward",
    soundSummary: "Lane ball roll rumble + sharp wooden bowling pin strike",
    svgs: {
      outline: `<g data-part="ball" data-pivot="8.5 15"><circle cx="8.5" cy="15" r="4.5" ${K}/><circle cx="7.4" cy="13.6" r="0.6" fill="currentColor"/><circle cx="9.6" cy="13.6" r="0.6" fill="currentColor"/></g><path data-part="pin" data-pivot="17 19" d="M16.5 4.5A1.5 1.5 0 0 1 18 6C18 7.5 17.2 8.5 17.2 9.5C17.2 11 19 13 19 15.8C19 18 18 19.5 16.5 19.5C15 19.5 14 18 14 15.8C14 13 15.8 11 15.8 9.5C15.8 8.5 15 7.5 15 6A1.5 1.5 0 0 1 16.5 4.5Z" ${K}/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><circle cx="7.4" cy="13.6" r="0.8" fill="#000"/><circle cx="9.6" cy="13.6" r="0.8" fill="#000"/></mask></defs><circle data-part="ball" data-pivot="8.5 15" cx="8.5" cy="15" r="4.6" fill="currentColor" mask="url(#__GID__-m1)"/><path data-part="pin" data-pivot="17 19" fill="currentColor" d="M16.5 4.2A1.6 1.6 0 0 1 18.1 5.8C18.1 7.4 17.2 8.4 17.2 9.5C17.2 11 19.2 13 19.2 15.8C19.2 18.1 18.1 19.6 16.5 19.6C14.9 19.6 13.8 18.1 13.8 15.8C13.8 13 15.8 11 15.8 9.5C15.8 8.4 14.9 7.4 14.9 5.8A1.6 1.6 0 0 1 16.5 4.2Z"/>`,
      duotone: `<g data-part="ball" data-pivot="8.5 15"><circle cx="8.5" cy="15" r="4.5" ${D}/><circle cx="7.4" cy="13.6" r="0.6" fill="currentColor"/><circle cx="9.6" cy="13.6" r="0.6" fill="currentColor"/></g><path data-part="pin" data-pivot="17 19" d="M16.5 4.5A1.5 1.5 0 0 1 18 6C18 7.5 17.2 8.5 17.2 9.5C17.2 11 19 13 19 15.8C19 18 18 19.5 16.5 19.5C15 19.5 14 18 14 15.8C14 13 15.8 11 15.8 9.5C15.8 8.5 15 7.5 15 6A1.5 1.5 0 0 1 16.5 4.5Z" ${D}/>`,
      glass: glassCompose(
        `<path data-part="pin" data-pivot="17 19" d="M16.5 4.2A1.6 1.6 0 0 1 18.1 5.8C18.1 7.4 17.2 8.4 17.2 9.5C17.2 11 19.2 13 19.2 15.8C19.2 18.1 18.1 19.6 16.5 19.6C14.9 19.6 13.8 18.1 13.8 15.8C13.8 13 15.8 11 15.8 9.5C15.8 8.4 14.9 7.4 14.9 5.8A1.6 1.6 0 0 1 16.5 4.2Z" ${GB}/>`,
        `<circle data-part="ball" data-pivot="8.5 15" cx="8.5" cy="15" r="4.6"/>`
      ),
      stencil: `<g fill="currentColor"><circle data-part="ball" data-pivot="8.5 15" cx="8.5" cy="15" r="4.5"/><g data-part="pin" data-pivot="17 19"><circle cx="16.5" cy="6" r="1.6"/><path d="M15.4 9H17.6L19 15.8C19 18 18 19.5 16.5 19.5C15 19.5 14 18 14 15.8Z"/></g></g>`,
      hardware: `<g data-part="ball" data-pivot="8.5 15"><circle cx="8.5" cy="15" r="4.6" ${HD}/><circle cx="7.4" cy="13.6" r="0.7" ${HA}/><circle cx="9.6" cy="13.6" r="0.7" ${HA}/></g><path data-part="pin" data-pivot="17 19" d="M16.5 4.2A1.6 1.6 0 0 1 18.1 5.8C18.1 7.4 17.2 8.4 17.2 9.5C17.2 11 19.2 13 19.2 15.8C19.2 18.1 18.1 19.6 16.5 19.6C14.9 19.6 13.8 18.1 13.8 15.8C13.8 13 15.8 11 15.8 9.5C15.8 8.4 14.9 7.4 14.9 5.8A1.6 1.6 0 0 1 16.5 4.2Z" ${HL}/>`,
      relief: `<g data-part="ball" data-pivot="8.5 15"><circle transform="translate(1.2,1.2)" cx="8.5" cy="15" r="4.5" ${RS}/><circle cx="8.5" cy="15" r="4.5" ${RF}/></g><g data-part="pin" data-pivot="17 19"><path transform="translate(1.2,1.2)" d="M16.5 4.5A1.5 1.5 0 0 1 18 6C18 7.5 17.2 8.5 17.2 9.5C17.2 11 19 13 19 15.8C19 18 18 19.5 16.5 19.5C15 19.5 14 18 14 15.8C14 13 15.8 11 15.8 9.5C15.8 8.5 15 7.5 15 6A1.5 1.5 0 0 1 16.5 4.5Z" ${RS}/><path d="M16.5 4.5A1.5 1.5 0 0 1 18 6C18 7.5 17.2 8.5 17.2 9.5C17.2 11 19 13 19 15.8C19 18 18 19.5 16.5 19.5C15 19.5 14 18 14 15.8C14 13 15.8 11 15.8 9.5C15.8 8.5 15 7.5 15 6A1.5 1.5 0 0 1 16.5 4.5Z" ${RF}/></g>`,
    },
  },
  // 217. BASKETBALL
  {
    name: "basketball",
    label: "Basketball",
    category: "Travel & Play",
    motionSummary: "Ribbed basketball drops & squashes cleanly on hardwood court bounce",
    soundSummary: "Hollow rubber basketball court dribble thump",
    svgs: {
      outline: `<g data-part="ball" data-pivot="12 12" ${K}><circle cx="12" cy="12" r="8.2"/><line x1="3.8" y1="12" x2="20.2" y2="12" ${K_THIN}/><line x1="12" y1="3.8" x2="12" y2="20.2" ${K_THIN}/><path d="M6.4 6A7.2 7.2 0 0 1 6.4 18M17.6 6A7.2 7.2 0 0 0 17.6 18" ${K_THIN}/></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><g fill="none" stroke="#000" stroke-width="1.25"><line x1="3.4" y1="12" x2="20.6" y2="12"/><line x1="12" y1="3.4" x2="12" y2="20.6"/><path d="M6.4 6A7.2 7.2 0 0 1 6.4 18M17.6 6A7.2 7.2 0 0 0 17.6 18"/></g></mask></defs><circle data-part="ball" data-pivot="12 12" cx="12" cy="12" r="8.4" fill="currentColor" mask="url(#__GID__-m1)"/>`,
      duotone: `<g data-part="ball" data-pivot="12 12"><circle cx="12" cy="12" r="8.2" ${D}/><line x1="3.8" y1="12" x2="20.2" y2="12" ${DK_THIN}/><line x1="12" y1="3.8" x2="12" y2="20.2" ${DK_THIN}/><path d="M6.4 6A7.2 7.2 0 0 1 6.4 18M17.6 6A7.2 7.2 0 0 0 17.6 18" ${DK_THIN}/></g>`,
      glass: glassCompose(
        `<g data-part="ball" data-pivot="12 12" ${GBS}><line x1="3.8" y1="12" x2="20.2" y2="12"/><line x1="12" y1="3.8" x2="12" y2="20.2"/></g>`,
        `<circle data-part="ball" data-pivot="12 12" cx="12" cy="12" r="8.4"/>`
      ),
      stencil: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><g fill="none" stroke="#000" stroke-width="1.4"><line x1="3.4" y1="12" x2="20.6" y2="12"/><line x1="12" y1="3.4" x2="12" y2="20.6"/></g></mask></defs><circle data-part="ball" data-pivot="12 12" cx="12" cy="12" r="8.3" fill="currentColor" mask="url(#__GID__-m1)"/>`,
      hardware: `<g data-part="ball" data-pivot="12 12"><circle cx="12" cy="12" r="8.4" ${HA}/><g fill="none" stroke="#18181b" stroke-width="1.3"><line x1="3.8" y1="12" x2="20.2" y2="12"/><line x1="12" y1="3.8" x2="12" y2="20.2"/></g></g>`,
      relief: `<g data-part="ball" data-pivot="12 12"><circle transform="translate(1.3,1.3)" cx="12" cy="12" r="8.2" ${RS}/><circle cx="12" cy="12" r="8.2" ${RF}/><line x1="3.8" y1="12" x2="20.2" y2="12" ${RF_LINE}/><line x1="12" y1="3.8" x2="12" y2="20.2" ${RF_LINE}/></g>`,
    },
  },
  // 218. CHESS
  {
    name: "chess",
    label: "Chess Rook",
    category: "Travel & Play",
    motionSummary: "Staunton rook lifts smoothly and slams firmly onto chessboard square",
    soundSummary: "Weighted wooden chess piece board clack",
    svgs: {
      outline: `<path data-part="piece" data-pivot="12 19" d="M7.5 4.5H9.5V6.5H11V4.5H13V6.5H14.5V4.5H16.5V8.5L15 10.5V16.5L17.5 19.5H6.5L9 16.5V10.5L7.5 8.5Z" ${K}/>`,
      solid: `<path data-part="piece" data-pivot="12 19" fill="currentColor" d="M7.4 4.2H9.6V6.4H10.9V4.2H13.1V6.4H14.4V4.2H16.6V8.6L15 10.6V16.4L17.8 19.8H6.2L9 16.4V10.6L7.4 8.6Z"/>`,
      duotone: `<path data-part="piece" data-pivot="12 19" d="M7.5 4.5H9.5V6.5H11V4.5H13V6.5H14.5V4.5H16.5V8.5L15 10.5V16.5L17.5 19.5H6.5L9 16.5V10.5L7.5 8.5Z" ${D}/>`,
      glass: glassCompose(
        `<rect data-part="piece" data-pivot="12 19" x="6.4" y="17.8" width="11.2" height="2" rx="1" ${GB}/>`,
        `<path data-part="piece" data-pivot="12 19" d="M7.4 4.2H9.6V6.4H10.9V4.2H13.1V6.4H14.4V4.2H16.6V8.6L15 10.6V16.4L17.8 19.8H6.2L9 16.4V10.6L7.4 8.6Z"/>`
      ),
      stencil: `<g data-part="piece" data-pivot="12 19" fill="currentColor"><polygon points="7.5 4.4 9.5 4.4 9.5 6.4 11 6.4 11 4.4 13 4.4 13 6.4 14.5 6.4 14.5 4.4 16.5 4.4 16.5 8.8 7.5 8.8"/><polygon points="9 10.2 15 10.2 15 16.2 9 16.2"/><polygon points="7.6 17.4 16.4 17.4 17.8 19.6 6.2 19.6"/></g>`,
      hardware: `<g data-part="piece" data-pivot="12 19"><path d="M7.4 4.2H9.6V6.4H10.9V4.2H13.1V6.4H14.4V4.2H16.6V8.6L15 10.6V16.4L17.8 19.8H6.2L9 16.4V10.6L7.4 8.6Z" ${HL}/><rect x="6.6" y="17.8" width="10.8" height="2" rx="0.8" ${HA}/></g>`,
      relief: `<g data-part="piece" data-pivot="12 19"><path transform="translate(1.3,1.3)" d="M7.5 4.5H9.5V6.5H11V4.5H13V6.5H14.5V4.5H16.5V8.5L15 10.5V16.5L17.5 19.5H6.5L9 16.5V10.5L7.5 8.5Z" ${RS}/><path d="M7.5 4.5H9.5V6.5H11V4.5H13V6.5H14.5V4.5H16.5V8.5L15 10.5V16.5L17.5 19.5H6.5L9 16.5V10.5L7.5 8.5Z" ${RF}/></g>`,
    },
  },
  // 219. TENT
  {
    name: "tent",
    label: "Camping Tent",
    category: "Travel & Play",
    motionSummary: "Canvas A-frame pitches slightly as triangular tent flap parts open",
    soundSummary: "Canvas tent zipper zip + campsite breeze",
    svgs: {
      outline: `<path data-part="canopy" d="M12 4.8L3.5 19.2H20.5Z" ${K}/><path data-part="door" data-pivot="12 19" d="M9.5 19.2L12 13L14.5 19.2" ${K}/>`,
      solid: `<path data-part="canopy" fill="currentColor" fill-rule="evenodd" d="M12 4.4L20.8 19.4H15L12 12.6L9 19.4H3.2Z"/><polygon data-part="door" data-pivot="12 19" points="9.6 19.4 12 13.8 14.4 19.4" fill="currentColor" opacity="0.5"/>`,
      duotone: `<polygon data-part="canopy" points="12 4.8 3.5 19.2 20.5 19.2" ${D}/><polygon data-part="door" data-pivot="12 19" points="9.5 19.2 12 13 14.5 19.2" ${DK}/>`,
      glass: glassCompose(
        `<polygon data-part="door" data-pivot="12 19" points="9.5 19.4 12 13.2 14.5 19.4" ${GB}/>`,
        `<polygon data-part="canopy" points="12 4.5 3.4 19.4 20.6 19.4"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="canopy"><polygon points="12 4.6 3.5 19.2 8.8 19.2 11.4 12.4"/><polygon points="12.6 12.4 15.2 19.2 20.5 19.2"/></g><polygon data-part="door" data-pivot="12 19" points="9.8 19.2 12 14 14.2 19.2"/></g>`,
      hardware: `<polygon data-part="canopy" points="12 4.5 3.4 19.4 20.6 19.4" ${HL}/><polygon data-part="door" data-pivot="12 19" points="9.5 19.4 12 13.2 14.5 19.4" ${HA}/>`,
      relief: `<g data-part="canopy"><polygon transform="translate(1.3,1.3)" points="12 4.8 3.5 19.2 20.5 19.2" ${RS}/><polygon points="12 4.8 3.5 19.2 20.5 19.2" ${RF}/></g><polygon data-part="door" data-pivot="12 19" points="9.5 19.2 12 13 14.5 19.2" ${RF}/>`,
    },
  },
  // 220. LUGGAGE
  {
    name: "luggage",
    label: "Suitcase",
    category: "Travel & Play",
    motionSummary: "Telescoping luggage handle pops upward as caster wheels roll forward",
    soundSummary: "Telescoping handle click-lock + caster wheel roll",
    svgs: {
      outline: `<path data-part="handle" d="M9.5 7.5V4.8A1 1 0 0 1 10.5 3.8H13.5A1 1 0 0 1 14.5 4.8V7.5" ${K}/><g data-part="case" ${K}><rect x="6.2" y="7.5" width="11.6" height="11.2" rx="1.8"/><line x1="10" y1="10.2" x2="10" y2="16" ${K_THIN}/><line x1="14" y1="10.2" x2="14" y2="16" ${K_THIN}/></g><g data-part="wheels" fill="currentColor"><circle cx="8.5" cy="20.2" r="1.2"/><circle cx="15.5" cy="20.2" r="1.2"/></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><line x1="9.8" y1="10" x2="9.8" y2="16.2" stroke="#000" stroke-width="1.2"/><line x1="14.2" y1="10" x2="14.2" y2="16.2" stroke="#000" stroke-width="1.2"/></mask></defs><path data-part="handle" d="M9.5 7.6V4.8A1 1 0 0 1 10.5 3.8H13.5A1 1 0 0 1 14.5 4.8V7.6" ${K}/><rect data-part="case" x="6" y="7.4" width="12" height="11.4" rx="2" fill="currentColor" mask="url(#__GID__-m1)"/><g data-part="wheels" fill="currentColor"><circle cx="8.5" cy="20.2" r="1.3"/><circle cx="15.5" cy="20.2" r="1.3"/></g>`,
      duotone: `<path data-part="handle" d="M9.5 7.5V4.8A1 1 0 0 1 10.5 3.8H13.5A1 1 0 0 1 14.5 4.8V7.5" ${DK}/><g data-part="case"><rect x="6.2" y="7.5" width="11.6" height="11.2" rx="1.8" ${D}/><line x1="10" y1="10.2" x2="10" y2="16" ${DK_THIN}/><line x1="14" y1="10.2" x2="14" y2="16" ${DK_THIN}/></g><g data-part="wheels" fill="currentColor"><circle cx="8.5" cy="20.2" r="1.2"/><circle cx="15.5" cy="20.2" r="1.2"/></g>`,
      glass: glassCompose(
        `<path data-part="handle" d="M9.5 7.8V4.8A1 1 0 0 1 10.5 3.8H13.5A1 1 0 0 1 14.5 4.8V7.8" ${GBS}/><g data-part="wheels" ${GB}><circle cx="8.5" cy="20.2" r="1.3"/><circle cx="15.5" cy="20.2" r="1.3"/></g>`,
        `<rect data-part="case" x="6" y="7.4" width="12" height="11.4" rx="2"/>`
      ),
      stencil: `<g fill="currentColor"><path data-part="handle" d="M9.5 7.5V4.8A1 1 0 0 1 10.5 3.8H13.5A1 1 0 0 1 14.5 4.8V7.5" ${K}/><g data-part="case"><rect x="6.2" y="7.5" width="11.6" height="4.8" rx="1.4"/><rect x="6.2" y="13.5" width="11.6" height="5.2" rx="1.4"/></g><g data-part="wheels"><circle cx="8.5" cy="20.2" r="1.2"/><circle cx="15.5" cy="20.2" r="1.2"/></g></g>`,
      hardware: `<path data-part="handle" d="M9.5 7.6V4.8A1 1 0 0 1 10.5 3.8H13.5A1 1 0 0 1 14.5 4.8V7.6" fill="none" stroke="#52525b" stroke-width="1.8"/><g data-part="case"><rect x="6" y="7.4" width="12" height="11.4" rx="2" ${HL}/><rect x="9.4" y="10.2" width="1.2" height="5.8" rx="0.5" ${HD}/><rect x="13.4" y="10.2" width="1.2" height="5.8" rx="0.5" ${HD}/></g><g data-part="wheels" ${HA}><circle cx="8.5" cy="20.2" r="1.3"/><circle cx="15.5" cy="20.2" r="1.3"/></g>`,
      relief: `<path data-part="handle" d="M9.5 7.5V4.8A1 1 0 0 1 10.5 3.8H13.5A1 1 0 0 1 14.5 4.8V7.5" ${RF_LINE}/><g data-part="case"><rect transform="translate(1.3,1.3)" x="6.2" y="7.5" width="11.6" height="11.2" rx="1.8" ${RS}/><rect x="6.2" y="7.5" width="11.6" height="11.2" rx="1.8" ${RF}/></g><g data-part="wheels" ${RS}><circle cx="8.5" cy="20.2" r="1.2"/><circle cx="15.5" cy="20.2" r="1.2"/></g>`,
    },
  },
];
