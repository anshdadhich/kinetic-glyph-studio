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
    motionSummary: "Overhead rotor blades spin rapidly as aircraft fuselage hovers & pitches slightly",
    soundSummary: "Rhythmic helicopter main-rotor thump-thump-thump",
    svgs: {
      outline: `<g data-part="rotor" data-pivot="10.5 5" ${K}><line x1="3.2" y1="5" x2="17.8" y2="5"/><line x1="10.5" y1="5" x2="10.5" y2="8.4"/></g><g data-part="body" data-pivot="11 13" ${K}><path d="M3.4 13.2C3.4 10 5.9 8.4 9.6 8.4H12.4C14.1 8.4 15.1 9.8 15.5 11.4H19.6L21.2 9.2V14.4L19.6 13.6H15.4C14.7 15.1 13.4 16 11.6 16H6.8A3.4 3.4 0 0 1 3.4 13.2Z"/><path d="M6.4 12.6C6.4 10.9 7.6 10 9.6 10H11.6V12.8H6.4Z" ${K_THIN}/><path d="M5 19H14.6M7.8 16L6.8 19M12 16L13 19" ${K_THIN}/></g>`,
      solid: `<g data-part="rotor" data-pivot="10.5 5" fill="currentColor"><rect x="3" y="4.1" width="15" height="1.8" rx="0.9"/><rect x="9.6" y="5.4" width="1.8" height="3.2"/></g><g data-part="body" data-pivot="11 13" fill="currentColor"><path fill-rule="evenodd" d="M3.2 13.2C3.2 9.9 5.8 8.2 9.6 8.2H12.4C14.2 8.2 15.2 9.6 15.6 11.3H19.5L21.4 8.8V14.8L19.5 13.8H15.4C14.7 15.4 13.4 16.2 11.6 16.2H6.8A3.6 3.6 0 0 1 3.2 13.2ZM6.2 12.7H11.6V9.9H9.6C7.5 9.9 6.2 10.9 6.2 12.7Z"/><path d="M7.8 16.1L6.8 18.8M12 16.1L13 18.8M4.8 19H14.8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></g>`,
      duotone: `<g data-part="rotor" data-pivot="10.5 5" ${DK}><line x1="3.2" y1="5" x2="17.8" y2="5"/><line x1="10.5" y1="5" x2="10.5" y2="8.4"/></g><g data-part="body" data-pivot="11 13"><path d="M3.4 13.2C3.4 10 5.9 8.4 9.6 8.4H12.4C14.1 8.4 15.1 9.8 15.5 11.4H19.6L21.2 9.2V14.4L19.6 13.6H15.4C14.7 15.1 13.4 16 11.6 16H6.8A3.4 3.4 0 0 1 3.4 13.2Z" ${D}/><path d="M6.4 12.6C6.4 10.9 7.6 10 9.6 10H11.6V12.8H6.4Z" ${DK_THIN}/><path d="M5 19H14.6M7.8 16L6.8 19M12 16L13 19" ${DK_THIN}/></g>`,
      glass: glassCompose(
        `<g data-part="rotor" data-pivot="10.5 5" ${GB}><rect x="3" y="4.1" width="15" height="1.8" rx="0.9"/><rect x="9.6" y="5.4" width="1.8" height="3.2"/></g><g data-part="body" data-pivot="11 13"><path d="M15.4 11.4H19.6L21.4 8.8V14.8L19.5 13.8H15.4Z" ${GB}/><path d="M5 19H14.6M7.8 16L6.8 19M12 16L13 19" ${GBS}/></g>`,
        `<path data-part="body" data-pivot="11 13" d="M3.2 13.2C3.2 9.9 5.8 8.2 9.6 8.2H12.4C14.6 8.2 15.8 10 15.8 12.2C15.8 14.6 14.2 16.2 11.8 16.2H6.8A3.6 3.6 0 0 1 3.2 13.2Z"/>`,
        `<g data-part="body" data-pivot="11 13" ${GF}><path d="M3.2 13.2C3.2 9.9 5.8 8.2 9.6 8.2H12.4C14.6 8.2 15.8 10 15.8 12.2C15.8 14.6 14.2 16.2 11.8 16.2H6.8A3.6 3.6 0 0 1 3.2 13.2Z"/></g><path data-part="body" data-pivot="11 13" d="M6.2 12.6C6.2 10.9 7.5 10 9.5 10H11.5V12.6Z" ${GB}/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="rotor" data-pivot="10.5 5"><rect x="3" y="4.2" width="6.8" height="1.7" rx="0.85"/><rect x="11.2" y="4.2" width="6.8" height="1.7" rx="0.85"/><rect x="9.7" y="5.8" width="1.6" height="2.4"/></g><g data-part="body" data-pivot="11 13"><path fill-rule="evenodd" d="M3.4 13.2C3.4 10 5.9 8.4 9.6 8.4H12.4C14.1 8.4 15.1 9.8 15.5 11.4H19.6L21.2 9.2V14.4L19.6 13.6H15.4C14.7 15.1 13.4 16 11.6 16H6.8A3.4 3.4 0 0 1 3.4 13.2ZM6.4 12.6H11.4V10.1H9.5C7.6 10.1 6.4 11 6.4 12.6Z"/><rect x="4.8" y="18.2" width="10" height="1.5" rx="0.7"/></g></g>`,
      hardware: `<g data-part="rotor" data-pivot="10.5 5"><rect x="3" y="4.1" width="15" height="1.9" rx="0.95" ${HA}/><rect x="9.6" y="5.4" width="1.8" height="3.2" ${HD}/></g><g data-part="body" data-pivot="11 13"><path d="M15.4 11.4H19.6L21.4 8.8V14.8L19.5 13.8H15.4Z" ${HD}/><path d="M5 19H14.6M7.8 16L6.8 19M12 16L13 19" stroke="#52525b" stroke-width="1.5" stroke-linecap="round"/><path d="M3.2 13.2C3.2 9.9 5.8 8.2 9.6 8.2H12.4C14.6 8.2 15.8 10 15.8 12.2C15.8 14.6 14.2 16.2 11.8 16.2H6.8A3.6 3.6 0 0 1 3.2 13.2Z" ${HL}/><path d="M6.2 12.6C6.2 10.9 7.5 10 9.5 10H11.5V12.6Z" ${HD}/></g>`,
      relief: `<g data-part="rotor" data-pivot="10.5 5" ${RF_LINE}><line x1="3.2" y1="5" x2="17.8" y2="5"/><line x1="10.5" y1="5" x2="10.5" y2="8.4"/></g><g data-part="body" data-pivot="11 13"><path transform="translate(1.2,1.2)" d="M3.4 13.2C3.4 10 5.9 8.4 9.6 8.4H12.4C14.1 8.4 15.1 9.8 15.5 11.4H19.6L21.2 9.2V14.4L19.6 13.6H15.4C14.7 15.1 13.4 16 11.6 16H6.8A3.4 3.4 0 0 1 3.4 13.2Z" ${RS}/><path d="M3.4 13.2C3.4 10 5.9 8.4 9.6 8.4H12.4C14.1 8.4 15.1 9.8 15.5 11.4H19.6L21.2 9.2V14.4L19.6 13.6H15.4C14.7 15.1 13.4 16 11.6 16H6.8A3.4 3.4 0 0 1 3.4 13.2Z" ${RF}/><path d="M6.4 12.6C6.4 10.9 7.6 10 9.6 10H11.6V12.8H6.4Z" ${RS}/><path d="M5 19H14.6M7.8 16L6.8 19M12 16L13 19" ${RF_LINE}/></g>`,
    },
  },
  // 212. SUBMARINE
  {
    name: "submarine",
    label: "Submarine",
    category: "Travel & Play",
    motionSummary: "Periscope rises from conning tower sail as torpedo hull glides forward",
    soundSummary: "Classic submarine sonar ping + deep underwater bubbles",
    svgs: {
      outline: `<path data-part="scope" d="M11.2 7.8V4.8A0.9 0.9 0 0 1 12.1 3.9H14.4" ${K}/><g data-part="hull" data-pivot="11.5 14" ${K}><path d="M8.6 11V8.8A1 1 0 0 1 9.6 7.8H13A1 1 0 0 1 14 8.8V11"/><path d="M3.4 14.4A3.4 3.4 0 0 1 6.8 11H15C17.2 11 18.8 12.4 19.3 14.4C18.8 16.4 17.2 17.8 15 17.8H6.8A3.4 3.4 0 0 1 3.4 14.4Z"/><path d="M19.3 14.4L21.2 11.6V17.2L19.3 14.4" ${K_THIN}/><circle cx="7.4" cy="14.4" r="0.9" fill="currentColor" stroke="none"/><circle cx="10.9" cy="14.4" r="0.9" fill="currentColor" stroke="none"/><circle cx="14.4" cy="14.4" r="0.9" fill="currentColor" stroke="none"/></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><circle cx="7.4" cy="14.4" r="1.05" fill="#000"/><circle cx="10.9" cy="14.4" r="1.05" fill="#000"/><circle cx="14.4" cy="14.4" r="1.05" fill="#000"/></mask></defs><path data-part="scope" fill="currentColor" d="M10.4 7.8V4.8A1.6 1.6 0 0 1 12 3.2H14.4A0.9 0.9 0 0 1 14.4 5H12.2V7.8Z"/><g data-part="hull" data-pivot="11.5 14" fill="currentColor"><path d="M8.6 11.2V8.8A1 1 0 0 1 9.6 7.8H13A1 1 0 0 1 14 8.8V11.2Z"/><path mask="url(#__GID__-m1)" d="M3.2 14.4A3.6 3.6 0 0 1 6.8 10.8H15C17.2 10.8 18.8 12.2 19.3 14L21.4 11.2V17.6L19.3 14.8C18.8 16.6 17.2 18 15 18H6.8A3.6 3.6 0 0 1 3.2 14.4Z"/></g>`,
      duotone: `<path data-part="scope" d="M11.2 7.8V4.8A0.9 0.9 0 0 1 12.1 3.9H14.4" ${DK}/><g data-part="hull" data-pivot="11.5 14"><path d="M8.6 11V8.8A1 1 0 0 1 9.6 7.8H13A1 1 0 0 1 14 8.8V11Z" ${D}/><path d="M3.4 14.4A3.4 3.4 0 0 1 6.8 11H15C17.2 11 18.8 12.4 19.3 14.4C18.8 16.4 17.2 17.8 15 17.8H6.8A3.4 3.4 0 0 1 3.4 14.4Z" ${D}/><path d="M19.3 14.4L21.2 11.6V17.2Z" ${DK_THIN}/><circle cx="7.4" cy="14.4" r="0.9" fill="currentColor"/><circle cx="10.9" cy="14.4" r="0.9" fill="currentColor"/><circle cx="14.4" cy="14.4" r="0.9" fill="currentColor"/></g>`,
      glass: glassCompose(
        `<path data-part="scope" d="M11.2 7.8V4.8A0.9 0.9 0 0 1 12.1 3.9H14.4" ${GBS}/><g data-part="hull" data-pivot="11.5 14" ${GB}><path d="M8.6 11.2V8.8A1 1 0 0 1 9.6 7.8H13A1 1 0 0 1 14 8.8V11.2Z"/><polygon points="19 14.4 21.4 11.2 21.4 17.6"/></g>`,
        `<path data-part="hull" data-pivot="11.5 14" d="M3.2 14.4A3.6 3.6 0 0 1 6.8 10.8H15C17.4 10.8 19.2 12.4 19.2 14.4C19.2 16.4 17.4 18 15 18H6.8A3.6 3.6 0 0 1 3.2 14.4Z"/>`,
        `<g data-part="hull" data-pivot="11.5 14" ${GF}><path d="M3.2 14.4A3.6 3.6 0 0 1 6.8 10.8H15C17.4 10.8 19.2 12.4 19.2 14.4C19.2 16.4 17.4 18 15 18H6.8A3.6 3.6 0 0 1 3.2 14.4Z"/></g><g data-part="hull" data-pivot="11.5 14" ${GB}><circle cx="7.4" cy="14.4" r="1"/><circle cx="10.9" cy="14.4" r="1"/><circle cx="14.4" cy="14.4" r="1"/></g>`
      ),
      stencil: `<g fill="currentColor"><path data-part="scope" d="M10.4 7.8V4.8A1.4 1.4 0 0 1 11.8 3.4H14.4V5H12V7.8Z"/><g data-part="hull" data-pivot="11.5 14"><rect x="8.6" y="8" width="5.2" height="2.2" rx="0.8"/><path d="M6.8 11H11V17.8H6.8A3.4 3.4 0 0 1 6.8 11Z"/><path d="M12.5 11H15C17.2 11 18.8 12.4 19.2 14.4C18.8 16.4 17.2 17.8 15 17.8H12.5Z"/><polygon points="19.6 14.4 21.4 11.4 21.4 17.4"/></g></g>`,
      hardware: `<path data-part="scope" d="M11.2 7.8V4.8A0.9 0.9 0 0 1 12.1 3.9H14.4" fill="none" stroke="#52525b" stroke-width="1.9" stroke-linecap="round"/><g data-part="hull" data-pivot="11.5 14"><path d="M8.6 11.2V8.8A1 1 0 0 1 9.6 7.8H13A1 1 0 0 1 14 8.8V11.2Z" ${HD}/><polygon points="19 14.4 21.4 11.2 21.4 17.6" ${HD}/><path d="M3.2 14.4A3.6 3.6 0 0 1 6.8 10.8H15C17.4 10.8 19.2 12.4 19.2 14.4C19.2 16.4 17.4 18 15 18H6.8A3.6 3.6 0 0 1 3.2 14.4Z" ${HL}/><circle cx="7.4" cy="14.4" r="1.05" ${HA}/><circle cx="10.9" cy="14.4" r="1.05" ${HA}/><circle cx="14.4" cy="14.4" r="1.05" ${HA}/></g>`,
      relief: `<path data-part="scope" d="M11.2 7.8V4.8A0.9 0.9 0 0 1 12.1 3.9H14.4" ${RF_LINE}/><g data-part="hull" data-pivot="11.5 14"><path transform="translate(1.2,1.2)" d="M3.4 14.4A3.4 3.4 0 0 1 6.8 11H15C17.2 11 18.8 12.4 19.3 14.4C18.8 16.4 17.2 17.8 15 17.8H6.8A3.4 3.4 0 0 1 3.4 14.4Z" ${RS}/><path d="M8.6 11V8.8A1 1 0 0 1 9.6 7.8H13A1 1 0 0 1 14 8.8V11Z" ${RF}/><path d="M3.4 14.4A3.4 3.4 0 0 1 6.8 11H15C17.2 11 18.8 12.4 19.3 14.4C18.8 16.4 17.2 17.8 15 17.8H6.8A3.4 3.4 0 0 1 3.4 14.4Z" ${RF}/><circle cx="7.4" cy="14.4" r="0.9" ${RS}/><circle cx="10.9" cy="14.4" r="0.9" ${RS}/><circle cx="14.4" cy="14.4" r="0.9" ${RS}/></g>`,
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
    motionSummary: "Paneled hot air balloon envelope lifts buoyantly with suspended wicker basket",
    soundSummary: "Propane burner roar whoosh + rising warm air drift",
    svgs: {
      outline: `<g data-part="envelope" data-pivot="12 10" ${K}><path d="M12 2.6C7.2 2.6 4.4 5.5 4.4 9C4.4 11.8 7 13.7 9.1 14.9H14.9C17 13.7 19.6 11.8 19.6 9C19.6 5.5 16.8 2.6 12 2.6Z"/><path d="M12 2.6C9.3 6 9.3 11.2 10.4 14.9M12 2.6C14.7 6 14.7 11.2 13.6 14.9" ${K_THIN}/></g><g data-part="basket" data-pivot="12 10" ${K}><line x1="9.5" y1="14.9" x2="10.2" y2="17.8" ${K_THIN}/><line x1="14.5" y1="14.9" x2="13.8" y2="17.8" ${K_THIN}/><rect x="9.3" y="17.8" width="5.4" height="3" rx="0.7"/></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><path d="M12 2.4C9.2 5.9 9.2 11.2 10.3 15.1M12 2.4C14.8 5.9 14.8 11.2 13.7 15.1" fill="none" stroke="#000" stroke-width="1.2"/></mask></defs><path data-part="envelope" data-pivot="12 10" fill="currentColor" mask="url(#__GID__-m1)" d="M12 2.4C7 2.4 4.2 5.4 4.2 9C4.2 11.9 6.9 13.8 9 15.1H15C17.1 13.8 19.8 11.9 19.8 9C19.8 5.4 17 2.4 12 2.4Z"/><g data-part="basket" data-pivot="12 10"><line x1="9.5" y1="14.9" x2="10.2" y2="17.8" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><line x1="14.5" y1="14.9" x2="13.8" y2="17.8" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><rect x="9.3" y="17.6" width="5.4" height="3.2" rx="0.8" fill="currentColor"/></g>`,
      duotone: `<g data-part="envelope" data-pivot="12 10"><path d="M12 2.6C7.2 2.6 4.4 5.5 4.4 9C4.4 11.8 7 13.7 9.1 14.9H14.9C17 13.7 19.6 11.8 19.6 9C19.6 5.5 16.8 2.6 12 2.6Z" ${D}/><path d="M12 2.6C9.3 6 9.3 11.2 10.4 14.9M12 2.6C14.7 6 14.7 11.2 13.6 14.9" ${DK_THIN}/></g><g data-part="basket" data-pivot="12 10"><line x1="9.5" y1="14.9" x2="10.2" y2="17.8" ${DK_THIN}/><line x1="14.5" y1="14.9" x2="13.8" y2="17.8" ${DK_THIN}/><rect x="9.3" y="17.8" width="5.4" height="3" rx="0.7" ${D}/></g>`,
      glass: glassCompose(
        `<g data-part="basket" data-pivot="12 10"><line x1="9.5" y1="14.9" x2="10.2" y2="17.8" ${GBS}/><line x1="14.5" y1="14.9" x2="13.8" y2="17.8" ${GBS}/><rect x="9.3" y="17.6" width="5.4" height="3.2" rx="0.8" ${GB}/></g>`,
        `<path data-part="envelope" data-pivot="12 10" d="M12 2.4C7 2.4 4.2 5.4 4.2 9C4.2 11.9 6.9 13.8 9 15.1H15C17.1 13.8 19.8 11.9 19.8 9C19.8 5.4 17 2.4 12 2.4Z"/>`,
        `<g data-part="envelope" data-pivot="12 10" ${GF}><path d="M12 2.4C7 2.4 4.2 5.4 4.2 9C4.2 11.9 6.9 13.8 9 15.1H15C17.1 13.8 19.8 11.9 19.8 9C19.8 5.4 17 2.4 12 2.4Z"/></g><path data-part="envelope" data-pivot="12 10" d="M12 2.6C9.3 6 9.3 11.2 10.4 14.9M12 2.6C14.7 6 14.7 11.2 13.6 14.9" fill="none" stroke="url(#g-rim)" stroke-width="1.2" stroke-opacity="0.82"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="envelope" data-pivot="12 10"><path d="M9.5 2.9C6.4 3.8 4.4 6.1 4.4 9C4.4 11.7 6.8 13.7 8.9 14.9H10.1C9.2 11.2 9.1 6.3 9.5 2.9Z"/><path d="M11 2.7H13C13.4 6.2 13.3 11.2 12.6 14.9H11.4C10.7 11.2 10.6 6.2 11 2.7Z"/><path d="M14.5 2.9C14.9 6.3 14.8 11.2 13.9 14.9H15.1C17.2 13.7 19.6 11.7 19.6 9C19.6 6.1 17.6 3.8 14.5 2.9Z"/></g><g data-part="basket" data-pivot="12 10"><line x1="9.5" y1="14.9" x2="10.2" y2="17.8" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><line x1="14.5" y1="14.9" x2="13.8" y2="17.8" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><rect x="9.3" y="17.6" width="5.4" height="3.1" rx="0.7"/></g></g>`,
      hardware: `<g data-part="envelope" data-pivot="12 10"><path d="M12 2.4C7 2.4 4.2 5.4 4.2 9C4.2 11.9 6.9 13.8 9 15.1H15C17.1 13.8 19.8 11.9 19.8 9C19.8 5.4 17 2.4 12 2.4Z" ${HA}/><path d="M12 2.6C9.3 6 9.3 11.2 10.4 14.9H13.6C14.7 11.2 14.7 6 12 2.6Z" ${HL}/></g><g data-part="basket" data-pivot="12 10"><line x1="9.5" y1="14.9" x2="10.2" y2="17.8" stroke="#52525b" stroke-width="1.4"/><line x1="14.5" y1="14.9" x2="13.8" y2="17.8" stroke="#52525b" stroke-width="1.4"/><rect x="9.3" y="17.6" width="5.4" height="3.2" rx="0.8" ${HD}/></g>`,
      relief: `<g data-part="envelope" data-pivot="12 10"><path transform="translate(1.2,1.2)" d="M12 2.6C7.2 2.6 4.4 5.5 4.4 9C4.4 11.8 7 13.7 9.1 14.9H14.9C17 13.7 19.6 11.8 19.6 9C19.6 5.5 16.8 2.6 12 2.6Z" ${RS}/><path d="M12 2.6C7.2 2.6 4.4 5.5 4.4 9C4.4 11.8 7 13.7 9.1 14.9H14.9C17 13.7 19.6 11.8 19.6 9C19.6 5.5 16.8 2.6 12 2.6Z" ${RF}/><path d="M12 2.6C9.3 6 9.3 11.2 10.4 14.9M12 2.6C14.7 6 14.7 11.2 13.6 14.9" ${RF_LINE}/></g><g data-part="basket" data-pivot="12 10"><line x1="9.5" y1="14.9" x2="10.2" y2="17.8" ${RF_LINE}/><line x1="14.5" y1="14.9" x2="13.8" y2="17.8" ${RF_LINE}/><rect x="9.3" y="17.8" width="5.4" height="3" rx="0.7" ${RF}/></g>`,
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
      outline: `<path data-part="deck" data-pivot="12 12" d="M3.5 11L5.8 12.8H18.2L20.5 11" ${K}/><circle data-part="wheel-l" data-pivot="7.5 16" cx="7.5" cy="16" r="1.8" ${K}/><circle data-part="wheel-r" data-pivot="16.5 16" cx="16.5" cy="16" r="1.8" ${K}/>`,
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
        `<g data-part="ball" data-pivot="12 12" ${GBS}><line x1="3.8" y1="12" x2="20.2" y2="12"/><line x1="12" y1="3.8" x2="12" y2="20.2"/><path d="M6.4 6A7.2 7.2 0 0 1 6.4 18M17.6 6A7.2 7.2 0 0 0 17.6 18"/></g>`,
        `<circle data-part="ball" data-pivot="12 12" cx="12" cy="12" r="8.4"/>`,
        `<g data-part="ball" data-pivot="12 12" ${GF}><circle cx="12" cy="12" r="8.4"/></g><g data-part="ball" data-pivot="12 12" fill="none" stroke="url(#g-rim)" stroke-width="1.25" stroke-opacity="0.82"><line x1="3.8" y1="12" x2="20.2" y2="12"/><line x1="12" y1="3.8" x2="12" y2="20.2"/><path d="M6.4 6A7.2 7.2 0 0 1 6.4 18M17.6 6A7.2 7.2 0 0 0 17.6 18"/></g>`
      ),
      stencil: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><g fill="none" stroke="#000" stroke-width="1.35"><line x1="3.4" y1="12" x2="20.6" y2="12"/><line x1="12" y1="3.4" x2="12" y2="20.6"/><path d="M6.4 6A7.2 7.2 0 0 1 6.4 18M17.6 6A7.2 7.2 0 0 0 17.6 18"/></g></mask></defs><circle data-part="ball" data-pivot="12 12" cx="12" cy="12" r="8.3" fill="currentColor" mask="url(#__GID__-m1)"/>`,
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
      outline: `<g data-part="piece" data-pivot="12 19.5" ${K}><path d="M6.8 3.8H9V6H10.9V3.8H13.1V6H15V3.8H17.2V8.2L15.2 10.2L16.2 16.8L18.4 19.8H5.6L7.8 16.8L8.8 10.2L6.8 8.2Z"/><line x1="8.8" y1="10.2" x2="15.2" y2="10.2" ${K_THIN}/><line x1="7.4" y1="17" x2="16.6" y2="17" ${K_THIN}/></g>`,
      solid: `<path data-part="piece" data-pivot="12 19.5" fill="currentColor" d="M6.6 3.6H9V5.8H10.8V3.6H13.2V5.8H15V3.6H17.4V8.2L15.4 10.2L16.4 16.8L18.6 19.8H5.4L7.6 16.8L8.6 10.2L6.6 8.2Z"/>`,
      duotone: `<g data-part="piece" data-pivot="12 19.5"><path d="M6.8 3.8H9V6H10.9V3.8H13.1V6H15V3.8H17.2V8.2L15.2 10.2L16.2 16.8L18.4 19.8H5.6L7.8 16.8L8.8 10.2L6.8 8.2Z" ${D}/><line x1="8.8" y1="10.2" x2="15.2" y2="10.2" ${DK_THIN}/><line x1="7.4" y1="17" x2="16.6" y2="17" ${DK_THIN}/></g>`,
      glass: glassCompose(
        `<rect data-part="piece" data-pivot="12 19.5" x="5.4" y="17.8" width="13.2" height="2.2" rx="1" ${GB}/>`,
        `<path data-part="piece" data-pivot="12 19.5" d="M6.6 3.6H9V5.8H10.8V3.6H13.2V5.8H15V3.6H17.4V8.2L15.4 10.2L16.4 16.8L18.6 19.8H5.4L7.6 16.8L8.6 10.2L6.6 8.2Z"/>`,
        `<g data-part="piece" data-pivot="12 19.5" ${GF}><path d="M6.6 3.6H9V5.8H10.8V3.6H13.2V5.8H15V3.6H17.4V8.2L15.4 10.2L16.4 16.8L18.6 19.8H5.4L7.6 16.8L8.6 10.2L6.6 8.2Z"/></g><line data-part="piece" data-pivot="12 19.5" x1="8.8" y1="10.2" x2="15.2" y2="10.2" stroke="url(#g-rim)" stroke-width="1.2" stroke-opacity="0.82"/>`
      ),
      stencil: `<g data-part="piece" data-pivot="12 19.5" fill="currentColor"><polygon points="6.8 3.8 9 3.8 9 6 10.9 6 10.9 3.8 13.1 3.8 13.1 6 15 6 15 3.8 17.2 3.8 17.2 8.4 6.8 8.4"/><polygon points="8.8 9.8 15.2 9.8 16.1 16.2 7.9 16.2"/><polygon points="7.2 17.5 16.8 17.5 18.4 19.8 5.6 19.8"/></g>`,
      hardware: `<g data-part="piece" data-pivot="12 19.5"><path d="M6.6 3.6H9V5.8H10.8V3.6H13.2V5.8H15V3.6H17.4V8.2L15.4 10.2L16.4 16.8L18.6 19.8H5.4L7.6 16.8L8.6 10.2L6.6 8.2Z" ${HL}/><rect x="5.8" y="17.6" width="12.4" height="2.2" rx="0.8" ${HA}/></g>`,
      relief: `<g data-part="piece" data-pivot="12 19.5"><path transform="translate(1.2,1.2)" d="M6.8 3.8H9V6H10.9V3.8H13.1V6H15V3.8H17.2V8.2L15.2 10.2L16.2 16.8L18.4 19.8H5.6L7.8 16.8L8.8 10.2L6.8 8.2Z" ${RS}/><path d="M6.8 3.8H9V6H10.9V3.8H13.1V6H15V3.8H17.2V8.2L15.2 10.2L16.2 16.8L18.4 19.8H5.6L7.8 16.8L8.8 10.2L6.8 8.2Z" ${RF}/><line x1="8.8" y1="10.2" x2="15.2" y2="10.2" ${RF_LINE}/></g>`,
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
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><line x1="9.8" y1="10" x2="9.8" y2="16.2" stroke="#000" stroke-width="1.2"/><line x1="14.2" y1="10" x2="14.2" y2="16.2" stroke="#000" stroke-width="1.2"/></mask></defs><path data-part="handle" fill="currentColor" d="M8.8 7.6V4.8A1.5 1.5 0 0 1 10.3 3.3H13.7A1.5 1.5 0 0 1 15.2 4.8V7.6H13.6V4.9A0.2 0.2 0 0 0 13.4 4.7H10.6A0.2 0.2 0 0 0 10.4 4.9V7.6Z"/><rect data-part="case" x="6" y="7.4" width="12" height="11.4" rx="2" fill="currentColor" mask="url(#__GID__-m1)"/><g data-part="wheels" fill="currentColor"><circle cx="8.5" cy="20.2" r="1.3"/><circle cx="15.5" cy="20.2" r="1.3"/></g>`,
      duotone: `<path data-part="handle" d="M9.5 7.5V4.8A1 1 0 0 1 10.5 3.8H13.5A1 1 0 0 1 14.5 4.8V7.5" ${DK}/><g data-part="case"><rect x="6.2" y="7.5" width="11.6" height="11.2" rx="1.8" ${D}/><line x1="10" y1="10.2" x2="10" y2="16" ${DK_THIN}/><line x1="14" y1="10.2" x2="14" y2="16" ${DK_THIN}/></g><g data-part="wheels" fill="currentColor"><circle cx="8.5" cy="20.2" r="1.2"/><circle cx="15.5" cy="20.2" r="1.2"/></g>`,
      glass: glassCompose(
        `<path data-part="handle" d="M9.5 7.8V4.8A1 1 0 0 1 10.5 3.8H13.5A1 1 0 0 1 14.5 4.8V7.8" ${GBS}/><g data-part="wheels" ${GB}><circle cx="8.5" cy="20.2" r="1.3"/><circle cx="15.5" cy="20.2" r="1.3"/></g>`,
        `<rect data-part="case" x="6" y="7.4" width="12" height="11.4" rx="2"/>`
      ),
      stencil: `<g fill="currentColor"><path data-part="handle" d="M8.8 7.5V4.8A1.5 1.5 0 0 1 10.3 3.3H13.7A1.5 1.5 0 0 1 15.2 4.8V7.5H13.6V4.9A0.2 0.2 0 0 0 13.4 4.7H10.6A0.2 0.2 0 0 0 10.4 4.9V7.5Z"/><g data-part="case"><rect x="6.2" y="7.5" width="11.6" height="4.8" rx="1.4"/><rect x="6.2" y="13.5" width="11.6" height="5.2" rx="1.4"/></g><g data-part="wheels"><circle cx="8.5" cy="20.2" r="1.2"/><circle cx="15.5" cy="20.2" r="1.2"/></g></g>`,
      hardware: `<path data-part="handle" d="M9.5 7.6V4.8A1 1 0 0 1 10.5 3.8H13.5A1 1 0 0 1 14.5 4.8V7.6" fill="none" stroke="#52525b" stroke-width="1.8"/><g data-part="case"><rect x="6" y="7.4" width="12" height="11.4" rx="2" ${HL}/><rect x="9.4" y="10.2" width="1.2" height="5.8" rx="0.5" ${HD}/><rect x="13.4" y="10.2" width="1.2" height="5.8" rx="0.5" ${HD}/></g><g data-part="wheels" ${HA}><circle cx="8.5" cy="20.2" r="1.3"/><circle cx="15.5" cy="20.2" r="1.3"/></g>`,
      relief: `<path data-part="handle" d="M9.5 7.5V4.8A1 1 0 0 1 10.5 3.8H13.5A1 1 0 0 1 14.5 4.8V7.5" ${RF_LINE}/><g data-part="case"><rect transform="translate(1.3,1.3)" x="6.2" y="7.5" width="11.6" height="11.2" rx="1.8" ${RS}/><rect x="6.2" y="7.5" width="11.6" height="11.2" rx="1.8" ${RF}/></g><g data-part="wheels" ${RS}><circle cx="8.5" cy="20.2" r="1.2"/><circle cx="15.5" cy="20.2" r="1.2"/></g>`,
    },
  },
];
