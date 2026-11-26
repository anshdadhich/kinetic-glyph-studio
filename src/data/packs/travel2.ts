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

// Submarine: hull + conning tower, periscope, three portholes, stern propeller
const SUB_HULL = `<rect x="3.8" y="10.6" width="16.4" height="7.4" rx="3.7"/>`;
const SUB_TOWER = `<rect x="9.4" y="8.2" width="5.2" height="3" rx="1.2"/>`;
const SUB_SCOPE = "M12 8.2V4.8H14.8";
const SUB_PORTS = `<circle cx="8.4" cy="14.3" r="1"/><circle cx="12" cy="14.3" r="1"/><circle cx="15.6" cy="14.3" r="1"/>`;
const SUB_SHAFT = `<line x1="19.6" y1="14.3" x2="21" y2="14.3"/>`;
const SUB_BLADES = `<path d="M21 12.3V16.3M19.2 14.3H22.8"/>`;
const SUB_HUB = `<circle cx="21" cy="14.3" r="0.9"/>`;

// Hot-air balloon: envelope + suspension ropes + wicker basket as one rig
const BALLOON_ENV = "M12 3.5A5.8 5.8 0 0 0 6.2 9.3C6.2 12.2 8.8 15 10 16H14C15.2 15 17.8 12.2 17.8 9.3A5.8 5.8 0 0 0 12 3.5Z";
const BALLOON_ROPES = `<path d="M10 15.8L10.3 17.8M14 15.8L13.7 17.8"/>`;

// Chess rook: three merlons, crown band, tapered body, stepped plinth
const ROOK = "M7 4.2H9.2V6.4H10.9V4.2H13.1V6.4H14.8V4.2H17V8.4L15.4 9.6V16.2H17.6V19.6H6.4V16.2H8.6V9.6L7 8.4Z";
const ROOK_BAND = `<line x1="7.7" y1="8.7" x2="16.3" y2="8.7"/>`;
const ROOK_BASE = `<line x1="8" y1="17" x2="16" y2="17"/>`;

export const TRAVEL2_ICONS: IconDef[] = [
  // 211. HELICOPTER
  {
    name: "helicopter",
    label: "Helicopter",
    category: "Travel & Play",
    motionSummary: "Overhead rotor blades spin rapidly as fuselage hovers & pitches slightly",
    soundSummary: "Rhythmic helicopter main-rotor thump-thump-thump",
    svgs: {
      outline: `<line x1="11.5" y1="6" x2="11.5" y2="9.2" ${K_THIN}/><g data-part="rotor" data-pivot="11.5 6" ${K}><line x1="3.8" y1="6" x2="19.2" y2="6"/></g><g data-part="body" data-pivot="12 13" ${K}><path d="M5.5 14C5.5 10.8 8 9 11.5 9H15.5C17.8 9 19.5 10.6 19.5 12.8C19.5 14.8 18 16 15.5 16H9.5A4 4 0 0 1 5.5 14Z"/><path d="M18 12.5H21.4M21 10.6V13.6M7 18.8H17.5M10 16L9 18.8M15 16L16 18.8" ${K_THIN}/></g>`,
      solid: `<rect x="10.6" y="6.2" width="1.8" height="3.2" rx="0.9" fill="currentColor"/><g data-part="rotor" data-pivot="11.5 6" fill="currentColor"><rect x="3.8" y="5" width="15.4" height="1.9" rx="0.95"/></g><g data-part="body" data-pivot="12 13" fill="currentColor"><path d="M5.4 13.8C5.4 10.6 8 8.8 11.5 8.8H15.6A4 4 0 0 1 19.6 12.8C19.6 15 18 16.2 15.5 16.2H9.2A3.8 3.8 0 0 1 5.4 13.8Z"/><rect x="18" y="11.8" width="3.4" height="1.5" rx="0.7"/><line x1="21" y1="10.4" x2="21" y2="13.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><rect x="6.8" y="18.2" width="11" height="1.5" rx="0.7"/><path d="M10 16.2L9 18.2M15 16.2L16 18.2" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></g>`,
      duotone: `<rect x="10.6" y="6.2" width="1.8" height="3.2" rx="0.9" ${D}/><g data-part="rotor" data-pivot="11.5 6" ${DK}><line x1="4" y1="6" x2="19" y2="6"/></g><g data-part="body" data-pivot="12 13"><path d="M5.5 14C5.5 10.8 8 9 11.5 9H15.5C17.8 9 19.5 10.6 19.5 12.8C19.5 14.8 18 16 15.5 16H9.5A4 4 0 0 1 5.5 14Z" ${D}/><path d="M18 12.5H21.4M21 10.6V13.6M7 18.8H17.5M10 16L9 18.8M15 16L16 18.8" ${DK_THIN}/></g>`,
      glass: glassCompose(
        `<rect x="10.6" y="6.2" width="1.8" height="3.2" rx="0.9" ${GB}/><rect x="3.8" y="5" width="15.4" height="1.9" rx="0.95" ${GB}/><path d="M5.4 13.8C5.4 10.6 8 8.8 11.5 8.8H15.6A4 4 0 0 1 19.6 12.8C19.6 15 18 16.2 15.5 16.2H9.2A3.8 3.8 0 0 1 5.4 13.8Z" ${GB}/>`,
        ``,
        `<rect x="10.6" y="6.2" width="1.8" height="3.2" rx="0.9" ${GB}/><g data-part="rotor" data-pivot="11.5 6"><rect x="3.8" y="5" width="15.4" height="1.9" rx="0.95" ${GF}/></g><g data-part="body" data-pivot="12 13"><path d="M5.4 13.8C5.4 10.6 8 8.8 11.5 8.8H15.6A4 4 0 0 1 19.6 12.8C19.6 15 18 16.2 15.5 16.2H9.2A3.8 3.8 0 0 1 5.4 13.8Z" ${GF}/><path d="M18 12.5H21.4M21 10.6V13.6M7 18.8H17.5M10 16L9 18.8M15 16L16 18.8" fill="none" stroke="url(#g-back)" stroke-width="1.3" stroke-linecap="round"/><rect x="6.8" y="18.2" width="11" height="1.5" rx="0.7" ${GB}/></g>`
      ),
      stencil: `<g fill="currentColor"><rect x="10.7" y="6.4" width="1.6" height="2.8" rx="0.8"/><g data-part="rotor" data-pivot="11.5 6"><rect x="3.8" y="5" width="7" height="1.8" rx="0.9"/><rect x="12.2" y="5" width="7" height="1.8" rx="0.9"/></g><g data-part="body" data-pivot="12 13"><path d="M5.6 13.8C5.6 10.6 8.2 9 11.4 9H15.6A3.6 3.6 0 0 1 19.2 12.6C19.2 14.8 17.6 16 15.4 16H9.2A3.6 3.6 0 0 1 5.6 13.8Z"/><rect x="6.8" y="18.2" width="10.8" height="1.5" rx="0.7"/><rect x="18" y="11.8" width="3.2" height="1.4" rx="0.7"/></g></g>`,
      hardware: `<rect x="10.6" y="6.2" width="1.8" height="3.2" rx="0.9" ${HD}/><g data-part="rotor" data-pivot="11.5 6"><rect x="3.8" y="5" width="15.4" height="1.9" rx="0.95" ${HA}/></g><g data-part="body" data-pivot="12 13"><path d="M5.4 13.8C5.4 10.6 8 8.8 11.5 8.8H15.6A4 4 0 0 1 19.6 12.8C19.6 15 18 16.2 15.5 16.2H9.2A3.8 3.8 0 0 1 5.4 13.8Z" ${HL}/><rect x="6.8" y="18.2" width="11" height="1.6" rx="0.8" ${HD}/><path d="M18 12.5H21.4M21 10.6V13.6M10 16L9 18.8M15 16L16 18.8" fill="none" stroke="#3f3f46" stroke-width="1.4" stroke-linecap="round"/></g>`,
      relief: `<line x1="11.5" y1="6" x2="11.5" y2="9.2" ${RF_LINE}/><g data-part="rotor" data-pivot="11.5 6" ${RF_LINE}><line x1="4" y1="6" x2="19" y2="6"/></g><g data-part="body" data-pivot="12 13"><path transform="translate(1.3,1.3)" d="M5.5 14C5.5 10.8 8 9 11.5 9H15.5C17.8 9 19.5 10.6 19.5 12.8C19.5 14.8 18 16 15.5 16H9.5A4 4 0 0 1 5.5 14Z" ${RS}/><path d="M5.5 14C5.5 10.8 8 9 11.5 9H15.5C17.8 9 19.5 10.6 19.5 12.8C19.5 14.8 18 16 15.5 16H9.5A4 4 0 0 1 5.5 14Z" ${RF}/><line x1="7" y1="18.8" x2="17.5" y2="18.8" ${RF_LINE}/><line x1="21" y1="10.6" x2="21" y2="13.6" ${RF_LINE}/></g>`,
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
      outline: `<g data-part="hull" data-pivot="12 14.5" ${K}><path d="${SUB_SCOPE}" stroke-width="1.3"/>${SUB_TOWER}${SUB_HULL}<g fill="currentColor" stroke="none">${SUB_PORTS}</g><g stroke-width="1.3">${SUB_SHAFT}${SUB_BLADES}</g><circle cx="21" cy="14.3" r="0.9" fill="currentColor" stroke="none"/></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><g fill="#000">${SUB_PORTS}</g></mask></defs><g data-part="hull" data-pivot="12 14.5"><path d="${SUB_SCOPE}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><g fill="currentColor">${SUB_TOWER}</g><g fill="currentColor" mask="url(#__GID__-m1)">${SUB_HULL}</g><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">${SUB_SHAFT}${SUB_BLADES}</g><circle cx="21" cy="14.3" r="1" fill="currentColor"/></g>`,
      duotone: `<g data-part="hull" data-pivot="12 14.5"><path d="${SUB_SCOPE}" ${DK_THIN}/><g ${D}>${SUB_TOWER}${SUB_HULL}</g><g fill="currentColor" stroke="none">${SUB_PORTS}</g><g ${DK_THIN}>${SUB_SHAFT}${SUB_BLADES}</g><circle cx="21" cy="14.3" r="0.9" fill="currentColor"/></g>`,
      glass: glassCompose(
        `<g ${GB}>${SUB_TOWER}${SUB_HULL}</g><path d="${SUB_SCOPE}" fill="none" stroke="url(#g-back)" stroke-width="2"/>`,
        ``,
        `<g data-part="hull" data-pivot="12 14.5"><path d="${SUB_SCOPE}" fill="none" stroke="url(#g-back)" stroke-width="1.4" stroke-linecap="round"/><g ${GF}>${SUB_TOWER}${SUB_HULL}</g><g ${GB}>${SUB_PORTS}</g><g fill="none" stroke="url(#g-back)" stroke-width="1.4" stroke-linecap="round">${SUB_SHAFT}${SUB_BLADES}</g><circle cx="21" cy="14.3" r="0.9" ${GF}/></g>`
      ),
      stencil: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><g fill="#000">${SUB_PORTS}</g></mask></defs><g data-part="hull" data-pivot="12 14.5" fill="currentColor"><path d="M11.2 8.4V4.6H15V6.2H12.8V8.4Z"/>${SUB_TOWER}<g mask="url(#__GID__-m1)">${SUB_HULL}</g><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">${SUB_SHAFT}${SUB_BLADES}</g><circle cx="21" cy="14.3" r="0.9"/></g>`,
      hardware: `<g data-part="hull" data-pivot="12 14.5"><path d="${SUB_SCOPE}" fill="none" stroke="#52525b" stroke-width="1.8" stroke-linecap="round"/><rect x="9.4" y="8.2" width="5.2" height="3" rx="1.2" ${HD}/><rect x="3.8" y="10.6" width="16.4" height="7.4" rx="3.7" ${HL}/><g ${HA}>${SUB_PORTS}</g><g fill="none" stroke="#3f3f46" stroke-width="1.5" stroke-linecap="round">${SUB_SHAFT}${SUB_BLADES}</g><circle cx="21" cy="14.3" r="1" ${HA}/></g>`,
      relief: `<g data-part="hull" data-pivot="12 14.5"><path d="${SUB_SCOPE}" ${RF_LINE}/><g><rect transform="translate(1.3,1.3)" x="9.4" y="8.2" width="5.2" height="3" rx="1.2" ${RS}/><rect x="9.4" y="8.2" width="5.2" height="3" rx="1.2" ${RF}/></g><g><rect transform="translate(1.3,1.3)" x="3.8" y="10.6" width="16.4" height="7.4" rx="3.7" ${RS}/><rect x="3.8" y="10.6" width="16.4" height="7.4" rx="3.7" ${RF}/></g><g transform="translate(1.3,1.3)" fill="var(--rel-shadow)">${SUB_PORTS}</g><g fill="var(--rel-face)" stroke="var(--rel-stroke)" stroke-width="1">${SUB_PORTS}</g><g ${RF_LINE}>${SUB_SHAFT}${SUB_BLADES}</g><circle cx="21" cy="14.3" r="0.9" fill="var(--rel-face)" stroke="var(--rel-stroke)" stroke-width="1"/></g>`,
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
      outline: `<g data-part="balloon" data-pivot="12 15" ${K}><path d="${BALLOON_ENV}"/><path d="M12 3.5V16" stroke-width="1.3"/><g stroke-width="1.2">${BALLOON_ROPES}</g><rect x="9.8" y="17.8" width="4.4" height="2.8" rx="0.6"/></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><line x1="12" y1="3.4" x2="12" y2="16.2" stroke="#000" stroke-width="1.1"/></mask></defs><g data-part="balloon" data-pivot="12 15"><path d="${BALLOON_ENV}" fill="currentColor" mask="url(#__GID__-m1)"/><g fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round">${BALLOON_ROPES}</g><rect x="9.8" y="17.6" width="4.4" height="3" rx="0.7" fill="currentColor"/></g>`,
      duotone: `<g data-part="balloon" data-pivot="12 15"><path d="${BALLOON_ENV}" ${D}/><path d="M12 3.5V16" ${DK_THIN}/><g ${DK_THIN}>${BALLOON_ROPES}</g><rect x="9.8" y="17.8" width="4.4" height="2.8" rx="0.6" ${D}/></g>`,
      glass: glassCompose(
        `<path d="${BALLOON_ENV}" ${GB}/><rect x="9.8" y="17.6" width="4.4" height="3" rx="0.7" ${GB}/>`,
        ``,
        `<g data-part="balloon" data-pivot="12 15"><path d="${BALLOON_ENV}" ${GF}/><path d="${BALLOON_ENV}" fill="none" stroke="url(#g-back)" stroke-width="1.5"/><path d="M12 3.5V16" fill="none" stroke="url(#g-back)" stroke-width="1.3"/><g fill="none" stroke="url(#g-back)" stroke-width="1.3" stroke-linecap="round">${BALLOON_ROPES}</g><rect x="9.8" y="17.6" width="4.4" height="3" rx="0.7" ${GF}/></g>`
      ),
      stencil: `<g data-part="balloon" data-pivot="12 15"><g fill="currentColor"><path d="M11.3 3.5A5.8 5.8 0 0 0 6.2 9.3C6.2 12.2 8.6 14.8 9.8 16H11.3Z"/><path d="M12.7 3.5A5.8 5.8 0 0 1 17.8 9.3C17.8 12.2 15.4 14.8 14.2 16H12.7Z"/><rect x="9.8" y="17.6" width="4.4" height="2.8" rx="0.6"/></g><g fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round">${BALLOON_ROPES}</g></g>`,
      hardware: `<g data-part="balloon" data-pivot="12 15"><path d="${BALLOON_ENV}" ${HA}/><g fill="none" stroke="#3f3f46" stroke-width="1.4" stroke-linecap="round"><path d="M12 3.5V16"/>${BALLOON_ROPES}</g><rect x="9.8" y="17.6" width="4.4" height="3" rx="0.7" ${HD}/></g>`,
      relief: `<g data-part="balloon" data-pivot="12 15"><g><path transform="translate(1.3,1.3)" d="${BALLOON_ENV}" ${RS}/><path d="${BALLOON_ENV}" ${RF}/></g><g ${RF_LINE}>${BALLOON_ROPES}</g><g><rect transform="translate(1.3,1.3)" x="9.8" y="17.8" width="4.4" height="2.8" rx="0.6" ${RS}/><rect x="9.8" y="17.8" width="4.4" height="2.8" rx="0.6" ${RF}/></g></g>`,
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
      stencil: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><g fill="none" stroke="#000" stroke-width="1.4"><line x1="3.4" y1="12" x2="20.6" y2="12"/><line x1="12" y1="3.4" x2="12" y2="20.6"/><path d="M6.4 6A7.2 7.2 0 0 1 6.4 18M17.6 6A7.2 7.2 0 0 0 17.6 18"/></g></mask></defs><circle data-part="ball" data-pivot="12 12" cx="12" cy="12" r="8.3" fill="currentColor" mask="url(#__GID__-m1)"/>`,
      hardware: `<g data-part="ball" data-pivot="12 12"><circle cx="12" cy="12" r="8.4" ${HA}/><g fill="none" stroke="#18181b" stroke-width="1.3"><line x1="3.8" y1="12" x2="20.2" y2="12"/><line x1="12" y1="3.8" x2="12" y2="20.2"/><path d="M6.4 6A7.2 7.2 0 0 1 6.4 18M17.6 6A7.2 7.2 0 0 0 17.6 18"/></g></g>`,
      relief: `<g data-part="ball" data-pivot="12 12"><circle transform="translate(1.3,1.3)" cx="12" cy="12" r="8.2" ${RS}/><circle cx="12" cy="12" r="8.2" ${RF}/><line x1="3.8" y1="12" x2="20.2" y2="12" ${RF_LINE}/><line x1="12" y1="3.8" x2="12" y2="20.2" ${RF_LINE}/><path d="M6.4 6A7.2 7.2 0 0 1 6.4 18M17.6 6A7.2 7.2 0 0 0 17.6 18" ${RF_LINE}/></g>`,
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
      outline: `<g data-part="piece" data-pivot="12 19" ${K}><path d="${ROOK}"/><g stroke-width="1.3">${ROOK_BAND}${ROOK_BASE}</g></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><g stroke="#000" stroke-width="1.3" stroke-linecap="round">${ROOK_BAND}${ROOK_BASE}</g></mask></defs><path data-part="piece" data-pivot="12 19" fill="currentColor" mask="url(#__GID__-m1)" d="${ROOK}"/>`,
      duotone: `<g data-part="piece" data-pivot="12 19"><path d="${ROOK}" ${D}/><g ${DK_THIN}>${ROOK_BAND}${ROOK_BASE}</g></g>`,
      glass: glassCompose(
        `<path d="${ROOK}" ${GB}/>`,
        ``,
        `<g data-part="piece" data-pivot="12 19"><path d="${ROOK}" ${GF}/><path d="${ROOK}" fill="none" stroke="url(#g-back)" stroke-width="1.5"/><g fill="none" stroke="url(#g-back)" stroke-width="1.3" stroke-linecap="round">${ROOK_BAND}${ROOK_BASE}</g></g>`
      ),
      stencil: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><g stroke="#000" stroke-width="1.5" stroke-linecap="round">${ROOK_BAND}${ROOK_BASE}</g></mask></defs><path data-part="piece" data-pivot="12 19" fill="currentColor" mask="url(#__GID__-m1)" d="${ROOK}"/>`,
      hardware: `<g data-part="piece" data-pivot="12 19"><path d="${ROOK}" ${HL}/><rect x="6.6" y="18.4" width="10.8" height="1.2" rx="0.6" ${HA}/><g fill="none" stroke="#3f3f46" stroke-width="1.3" stroke-linecap="round">${ROOK_BAND}${ROOK_BASE}</g></g>`,
      relief: `<g data-part="piece" data-pivot="12 19"><path transform="translate(1.3,1.3)" d="${ROOK}" ${RS}/><path d="${ROOK}" ${RF}/><g ${RF_LINE} stroke-width="1.2">${ROOK_BAND}${ROOK_BASE}</g></g>`,
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
