import {
  IconDef,
  K,
  D,
  DK,
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
  gearPts,
} from "../shared";

const GEAR_P = gearPts(12, 12, 8, 9.2, 6.8);
const GEAR_PATH = `M${GEAR_P.replace(/ /g, "L")}Z`;

export const CORE_ICONS: IconDef[] = [
  // 1. HOME
  {
    name: "home",
    label: "Home",
    category: "Core UI",
    motionSummary: "Roof lifts while rounded front door swings inward",
    soundSummary: "Wooden door latch thud + warm hearth chime",
    svgs: {
      outline: `<path d="M4.2 10.6V18.2A2.6 2.6 0 0 0 6.8 20.8H17.2A2.6 2.6 0 0 0 19.8 18.2V10.6" ${K}/><path data-part="roof" d="M2.8 11L11.1 4.1A1.4 1.4 0 0 1 12.9 4.1L21.2 11" ${K}/><path data-part="door" data-pivot="9.8 20.8" d="M9.8 20.8V15.5A1.5 1.5 0 0 1 11.3 14H12.7A1.5 1.5 0 0 1 14.2 15.5V20.8" ${K}/>`,
      solid: `<path fill="currentColor" d="M4.2 10.4L12 4.2L19.8 10.4V18.2A2.6 2.6 0 0 1 17.2 20.8H14.5V15.4A2.1 2.1 0 0 0 12.4 13.3H11.6A2.1 2.1 0 0 0 9.5 15.4V20.8H6.8A2.6 2.6 0 0 1 4.2 18.2Z"/><path data-part="roof" fill="currentColor" d="M2.6 10.7L11 3.7A1.6 1.6 0 0 1 13 3.7L21.4 10.7A0.85 0.85 0 0 1 20.3 12L12 5.1L3.7 12A0.85 0.85 0 0 1 2.6 10.7Z"/><path data-part="door" data-pivot="10 20.8" fill="currentColor" d="M10.4 15.4A1.2 1.2 0 0 1 11.6 14.2H12.4A1.2 1.2 0 0 1 13.6 15.4V20.8H10.4Z"/>`,
      duotone: `<path d="M4.2 10.6V18.2A2.6 2.6 0 0 0 6.8 20.8H17.2A2.6 2.6 0 0 0 19.8 18.2V10.6L12 4.3Z" ${D}/><path data-part="roof" d="M2.8 11L11.1 4.1A1.4 1.4 0 0 1 12.9 4.1L21.2 11" ${DK}/><path data-part="door" data-pivot="9.8 20.8" d="M9.8 20.8V15.5A1.5 1.5 0 0 1 11.3 14H12.7A1.5 1.5 0 0 1 14.2 15.5V20.8" ${DK}/>`,
      glass: glassCompose(
        `<path data-part="roof" data-pivot="12 7" d="M2.6 10.8L11 3.6A1.6 1.6 0 0 1 13 3.6L21.4 10.8H19.4V12H4.6V10.8Z" ${GB}/><path data-part="door" data-pivot="9.8 21" d="M9.8 15.4A1.7 1.7 0 0 1 11.5 13.7H12.5A1.7 1.7 0 0 1 14.2 15.4V21H9.8Z" ${GB}/>`,
        `<path d="M11 3.8A1.6 1.6 0 0 1 13 3.8L19.8 9.4A1.6 1.6 0 0 1 20.4 10.6V18.2A2.8 2.8 0 0 1 17.6 21H6.4A2.8 2.8 0 0 1 3.6 18.2V10.6A1.6 1.6 0 0 1 4.2 9.4Z"/>`,
        `<g ${GF}><path d="M11 3.8A1.6 1.6 0 0 1 13 3.8L19.8 9.4A1.6 1.6 0 0 1 20.4 10.6V18.2A2.8 2.8 0 0 1 17.6 21H6.4A2.8 2.8 0 0 1 3.6 18.2V10.6A1.6 1.6 0 0 1 4.2 9.4Z"/></g><path data-part="door" data-pivot="9.8 21" d="M9.8 15.5A1.7 1.7 0 0 1 11.5 13.8H12.5A1.7 1.7 0 0 1 14.2 15.5V21H9.8Z" ${GB}/>`
      ),
      stencil: `<g fill="currentColor"><path data-part="roof" d="M2.8 10.8L11.2 3.8V6.4L4.4 12Z"/><path data-part="roof" d="M21.2 10.8L12.8 3.8V6.4L19.6 12Z"/><path d="M4.6 12.2H8.6V20.6H6.6A2 2 0 0 1 4.6 18.6Z"/><path d="M15.4 12.2H19.4V18.6A2 2 0 0 1 17.4 20.6H15.4Z"/><path data-part="door" data-pivot="10.1 20.6" d="M10.1 15.5A1.4 1.4 0 0 1 11.5 14.1H12.5A1.4 1.4 0 0 1 13.9 15.5V20.6H10.1Z"/></g>`,
      hardware: `<path d="M4.2 10.4L12 4.2L19.8 10.4V18.2A2.6 2.6 0 0 1 17.2 20.8H6.8A2.6 2.6 0 0 1 4.2 18.2Z" ${HL}/><path data-part="roof" d="M2.4 11L11.1 3.8A1.4 1.4 0 0 1 12.9 3.8L21.6 11H18.5L12 5.6L5.5 11Z" ${HD}/><g data-part="door" data-pivot="9.8 20.8"><path d="M9.8 15.5A1.5 1.5 0 0 1 11.3 14H12.7A1.5 1.5 0 0 1 14.2 15.5V20.8H9.8Z" ${HM}/><circle cx="12.8" cy="17.5" r="0.55" ${HA}/></g>`,
      relief: `<g transform="translate(1.5,1.5)"><path d="M4.2 10.6V18.2A2.6 2.6 0 0 0 6.8 20.8H17.2A2.6 2.6 0 0 0 19.8 18.2V10.6L12 4.3Z" ${RS}/><path data-part="roof" d="M2.8 11L11.1 4.1A1.4 1.4 0 0 1 12.9 4.1L21.2 11" ${RS_LINE}/></g><path d="M4.2 10.6V18.2A2.6 2.6 0 0 0 6.8 20.8H17.2A2.6 2.6 0 0 0 19.8 18.2V10.6L12 4.3Z" ${RF}/><path data-part="roof" d="M2.8 11L11.1 4.1A1.4 1.4 0 0 1 12.9 4.1L21.2 11" ${RF_LINE}/><path data-part="door" data-pivot="9.8 20.8" d="M9.8 20.8V15.5A1.5 1.5 0 0 1 11.3 14H12.7A1.5 1.5 0 0 1 14.2 15.5V20.8" ${RF}/>`,
    },
  },
  // 2. SEARCH
  {
    name: "search",
    label: "Search",
    category: "Core UI",
    motionSummary: "Magnifying lens sweeps & zooms in to inspect",
    soundSummary: "Optical focus sweep whoosh + lock-on ping",
    svgs: {
      outline: `<g data-part="lens" ${K}><circle cx="10.5" cy="10.5" r="6.5"/><line x1="15.3" y1="15.3" x2="20.5" y2="20.5"/></g>`,
      solid: `<g data-part="lens" fill="currentColor"><path fill-rule="evenodd" d="M10.5 3.5A7 7 0 1 0 10.5 17.5A7 7 0 1 0 10.5 3.5ZM10.5 6.1A4.4 4.4 0 1 0 10.5 14.9A4.4 4.4 0 1 0 10.5 6.1Z"/><path d="M14.7 16.5L16.5 14.7L21.2 19.4A1.2 1.2 0 0 1 19.4 21.2Z"/></g>`,
      duotone: `<g data-part="lens"><circle cx="10.5" cy="10.5" r="6.5" ${D}/><line x1="15.3" y1="15.3" x2="20.5" y2="20.5" ${DK}/></g>`,
      glass: glassCompose(
        `<g data-part="lens" data-pivot="11 11"><path d="M14.2 16L16 14.2L21 19.2A1.3 1.3 0 0 1 19.2 21Z" ${GB}/><circle cx="9.6" cy="9.6" r="6" ${GB}/></g>`,
        `<circle data-part="lens" data-pivot="11 11" cx="10.8" cy="10.8" r="6.6"/>`
      ),
      stencil: `<g data-part="lens" fill="currentColor"><path d="M5.4 5.4A7.2 7.2 0 0 1 15.6 5.4L14.2 6.8A5.2 5.2 0 0 0 6.8 6.8Z"/><path d="M5.4 15.6A7.2 7.2 0 0 1 4.1 6.9L5.8 7.9A5.2 5.2 0 0 0 6.8 14.2Z"/><path d="M16.9 6.9A7.2 7.2 0 0 1 6.9 16.9L7.9 15.2A5.2 5.2 0 0 0 15.2 7.9Z"/><path d="M16 14.6L21 19.6A1 1 0 0 1 19.6 21L14.6 16Z"/></g>`,
      hardware: `<g data-part="lens"><path d="M14.5 16.3L16.3 14.5L21 19.2A1.3 1.3 0 0 1 19.2 21Z" ${HD}/><circle cx="10.5" cy="10.5" r="6.8" ${HL}/><circle cx="10.5" cy="10.5" r="4.3" ${HM}/><circle cx="8.5" cy="8.5" r="0.85" ${HA}/></g>`,
      relief: `<g data-part="lens"><g transform="translate(1.5,1.5)"><circle cx="10.5" cy="10.5" r="6.5" ${RS}/><line x1="15.3" y1="15.3" x2="20.5" y2="20.5" ${RS_LINE}/></g><circle cx="10.5" cy="10.5" r="6.5" ${RF}/><line x1="15.3" y1="15.3" x2="20.5" y2="20.5" ${RF_LINE}/></g>`,
    },
  },
  // 3. USER
  {
    name: "user",
    label: "User",
    category: "Core UI",
    motionSummary: "Head gives a friendly nod while shoulders lift",
    soundSummary: "Warm two-note greeting chime",
    svgs: {
      outline: `<circle data-part="head" cx="12" cy="7.5" r="3.5" ${K}/><path data-part="body" d="M4.5 20.5C4.5 16.2 7.8 13.5 12 13.5C16.2 13.5 19.5 16.2 19.5 20.5" ${K}/>`,
      solid: `<circle data-part="head" cx="12" cy="7.5" r="3.8" fill="currentColor"/><path data-part="body" fill="currentColor" d="M4.2 20.5C4.2 16 7.7 13.2 12 13.2C16.3 13.2 19.8 16 19.8 20.5Z"/>`,
      duotone: `<circle data-part="head" cx="12" cy="7.5" r="3.5" ${D}/><path data-part="body" d="M4.5 20.5C4.5 16.2 7.8 13.5 12 13.5C16.2 13.5 19.5 16.2 19.5 20.5Z" ${D}/>`,
      glass: glassCompose(
        `<path data-part="body" data-pivot="12 17" d="M4.2 20.5C4.2 15.8 7.7 13 12 13C16.3 13 19.8 15.8 19.8 20.5Z" ${GB}/>`,
        `<circle data-part="head" data-pivot="12 8.2" cx="12" cy="8.2" r="4.3"/>`
      ),
      stencil: `<circle data-part="head" cx="12" cy="7.5" r="3.6" fill="currentColor"/><g data-part="body" fill="currentColor"><path d="M4.5 20.5C4.5 16.8 7.2 14.1 10.9 13.5V20.5Z"/><path d="M19.5 20.5C19.5 16.8 16.8 14.1 13.1 13.5V20.5Z"/></g>`,
      hardware: `<path data-part="body" d="M4.2 20.5C4.2 16 7.7 13.2 12 13.2C16.3 13.2 19.8 16 19.8 20.5Z" ${HD}/><circle data-part="head" cx="12" cy="7.5" r="3.8" ${HL}/><circle cx="15.2" cy="17" r="0.85" ${HA}/>`,
      relief: `<g data-part="body"><path transform="translate(1.5,1.5)" d="M4.5 20.5C4.5 16.2 7.8 13.5 12 13.5C16.2 13.5 19.5 16.2 19.5 20.5Z" ${RS}/><path d="M4.5 20.5C4.5 16.2 7.8 13.5 12 13.5C16.2 13.5 19.5 16.2 19.5 20.5Z" ${RF}/></g><g data-part="head"><circle transform="translate(1.5,1.5)" cx="12" cy="7.5" r="3.5" ${RS}/><circle cx="12" cy="7.5" r="3.5" ${RF}/></g>`,
    },
  },
  // 4. SETTINGS
  {
    name: "settings",
    label: "Settings",
    category: "Core UI",
    motionSummary: "8-tooth gear rotates 60° around center axle",
    soundSummary: "Precision 4-tooth mechanical gear ratchet",
    svgs: {
      outline: `<g data-part="gear" data-pivot="12 12" ${K}><polygon points="${GEAR_P}"/><circle cx="12" cy="12" r="2.8"/></g>`,
      solid: `<path data-part="gear" data-pivot="12 12" fill="currentColor" fill-rule="evenodd" d="${GEAR_PATH}M12 9.2A2.8 2.8 0 1 0 12 14.8A2.8 2.8 0 1 0 12 9.2Z"/>`,
      duotone: `<path data-part="gear" data-pivot="12 12" fill-rule="evenodd" d="${GEAR_PATH}M12 9.2A2.8 2.8 0 1 0 12 14.8A2.8 2.8 0 1 0 12 9.2Z" ${D}/>`,
      glass: glassCompose(
        `<g data-part="gear" data-pivot="12 12"><polygon transform="translate(-1.5,-1.1)" points="${GEAR_P}" ${GB}/></g>`,
        `<path data-part="gear" data-pivot="12 12" fill-rule="evenodd" d="${GEAR_PATH}M12 9.3A2.7 2.7 0 1 0 12 14.7A2.7 2.7 0 1 0 12 9.3Z"/>`,
        `<g data-part="gear" data-pivot="12 12"><path fill-rule="evenodd" d="${GEAR_PATH}M12 9.3A2.7 2.7 0 1 0 12 14.7A2.7 2.7 0 1 0 12 9.3Z" ${GF}/><circle cx="12" cy="12" r="1.4" ${GH}/></g>`
      ),
      stencil: `<g data-part="gear" data-pivot="12 12" fill="currentColor"><path d="M5.5 7.5A8 8 0 0 1 18.5 7.5L16.5 9.2A5.2 5.2 0 0 0 7.5 9.2Z"/><path d="M18.5 16.5A8 8 0 0 1 5.5 16.5L7.5 14.8A5.2 5.2 0 0 0 16.5 14.8Z"/><circle cx="12" cy="3.3" r="1.2"/><circle cx="12" cy="20.7" r="1.2"/><circle cx="3.3" cy="12" r="1.2"/><circle cx="20.7" cy="12" r="1.2"/><circle cx="12" cy="12" r="2.2"/></g>`,
      hardware: `<g data-part="gear" data-pivot="12 12"><polygon points="${GEAR_P}" ${HL}/><circle cx="12" cy="12" r="3.4" ${HD}/><circle cx="12" cy="12" r="1.3" ${HA}/></g>`,
      relief: `<g data-part="gear" data-pivot="12 12"><path transform="translate(1.5,1.5)" fill-rule="evenodd" d="${GEAR_PATH}M12 9.2A2.8 2.8 0 1 0 12 14.8A2.8 2.8 0 1 0 12 9.2Z" ${RS}/><path fill-rule="evenodd" d="${GEAR_PATH}M12 9.2A2.8 2.8 0 1 0 12 14.8A2.8 2.8 0 1 0 12 9.2Z" ${RF}/></g>`,
    },
  },
  // 5. BELL
  {
    name: "bell",
    label: "Bell",
    category: "Core UI",
    motionSummary: "Curved bell pivots from crown while clapper swings across lip",
    soundSummary: "Resonant bronze bell harmonics",
    svgs: {
      outline: `<g data-part="bell" data-pivot="12 3.5" ${K}><path d="M10.5 4.4V4A1.5 1.5 0 0 1 13.5 4V4.4"/><path d="M12 4.5C8.5 4.5 6.3 6.9 6.1 10.3C5.9 12.5 5.6 13.6 4.4 15.2C3.6 16.3 4.1 17.4 5.5 17.6C9.4 18.2 14.6 18.2 18.5 17.6C19.9 17.4 20.4 16.3 19.6 15.2C18.4 13.6 18.1 12.5 17.9 10.3C17.7 6.9 15.5 4.5 12 4.5Z"/></g><path data-part="clapper" d="M9.8 19.6Q12 22.1 14.2 19.6" ${K}/>`,
      solid: `<path data-part="bell" data-pivot="12 3.5" fill="currentColor" d="M12 2.4A1.5 1.5 0 0 1 13.5 3.9V4.5C16.3 5 18.2 7.2 18.4 10.3C18.6 12.3 18.9 13.3 20 14.8C20.9 16.1 20.2 17.8 18.6 18C14.5 18.7 9.5 18.7 5.4 18C3.8 17.8 3.1 16.1 4 14.8C5.1 13.3 5.4 12.3 5.6 10.3C5.8 7.2 7.7 5 10.5 4.5V3.9A1.5 1.5 0 0 1 12 2.4Z"/><path data-part="clapper" fill="currentColor" d="M9.6 19.3A2.6 2.6 0 0 0 14.4 19.3Z"/>`,
      duotone: `<g data-part="bell" data-pivot="12 3.5"><path d="M10.5 4.4V4A1.5 1.5 0 0 1 13.5 4V4.4" ${DK}/><path d="M12 4.5C8.5 4.5 6.3 6.9 6.1 10.3C5.9 12.5 5.6 13.6 4.4 15.2C3.6 16.3 4.1 17.4 5.5 17.6C9.4 18.2 14.6 18.2 18.5 17.6C19.9 17.4 20.4 16.3 19.6 15.2C18.4 13.6 18.1 12.5 17.9 10.3C17.7 6.9 15.5 4.5 12 4.5Z" ${D}/></g><path data-part="clapper" d="M9.8 19.6Q12 22.1 14.2 19.6" ${DK}/>`,
      glass: glassCompose(
        `<path data-part="clapper" data-pivot="12 18.8" d="M9.2 18A2.8 2.8 0 0 0 14.8 18Z" ${GB}/><path data-part="bell" data-pivot="12 3.5" d="M10.4 4.8V3.9A1.6 1.6 0 0 1 13.6 3.9V4.8Z" ${GB}/>`,
        `<path data-part="bell" data-pivot="12 3.5" d="M12 4.4C8.4 4.4 6.1 6.9 5.9 10.3C5.7 12.5 5.4 13.6 4.2 15.2C3.4 16.4 4 17.8 5.4 18C9.4 18.6 14.6 18.6 18.6 18C20 17.8 20.6 16.4 19.8 15.2C18.6 13.6 18.3 12.5 18.1 10.3C17.9 6.9 15.6 4.4 12 4.4Z"/>`
      ),
      stencil: `<g data-part="bell" data-pivot="12 3.5" fill="currentColor"><path d="M11.2 4.6V14.8H5.4C5.9 13.3 6.2 12 6.3 10.2C6.5 7 8.4 4.9 11.2 4.6Z"/><path d="M12.8 4.6C15.6 4.9 17.5 7 17.7 10.2C17.8 12 18.1 13.3 18.6 14.8H12.8Z"/><rect x="4" y="16.2" width="16" height="1.8" rx="0.9"/></g><path data-part="clapper" fill="currentColor" d="M9.8 19A2.3 2.3 0 0 0 14.2 19Z"/>`,
      hardware: `<path data-part="clapper" d="M9.6 18.3A2.4 2.4 0 0 0 14.4 18.3Z" ${HA}/><g data-part="bell" data-pivot="12 3.5"><rect x="10.8" y="2.6" width="2.4" height="2.2" rx="0.8" ${HD}/><path d="M12 4.5C8.5 4.5 6.3 6.9 6.1 10.3C5.9 12.5 5.6 13.6 4.4 15.2C3.6 16.3 4.1 17.4 5.5 17.6C9.4 18.2 14.6 18.2 18.5 17.6C19.9 17.4 20.4 16.3 19.6 15.2C18.4 13.6 18.1 12.5 17.9 10.3C17.7 6.9 15.5 4.5 12 4.5Z" ${HL}/></g>`,
      relief: `<g data-part="clapper"><path transform="translate(1.5,1.5)" d="M9.6 18.8A2.4 2.4 0 0 0 14.4 18.8Z" ${RS}/><path d="M9.6 18.8A2.4 2.4 0 0 0 14.4 18.8Z" ${RF}/></g><g data-part="bell" data-pivot="12 3.5"><path transform="translate(1.5,1.5)" d="M12 4.5C8.5 4.5 6.3 6.9 6.1 10.3C5.9 12.5 5.6 13.6 4.4 15.2C3.6 16.3 4.1 17.4 5.5 17.6C9.4 18.2 14.6 18.2 18.5 17.6C19.9 17.4 20.4 16.3 19.6 15.2C18.4 13.6 18.1 12.5 17.9 10.3C17.7 6.9 15.5 4.5 12 4.5Z" ${RS}/><path d="M10.5 4.4V4A1.5 1.5 0 0 1 13.5 4V4.4" ${RF_LINE}/><path d="M12 4.5C8.5 4.5 6.3 6.9 6.1 10.3C5.9 12.5 5.6 13.6 4.4 15.2C3.6 16.3 4.1 17.4 5.5 17.6C9.4 18.2 14.6 18.2 18.5 17.6C19.9 17.4 20.4 16.3 19.6 15.2C18.4 13.6 18.1 12.5 17.9 10.3C17.7 6.9 15.5 4.5 12 4.5Z" ${RF}/></g>`,
    },
  },
  // 6. LOCK
  {
    name: "lock",
    label: "Lock",
    category: "Core UI",
    motionSummary: "Steel shackle pops upward and snaps into locked body",
    soundSummary: "Heavy deadbolt mechanical double-clack",
    svgs: {
      outline: `<path data-part="shackle" d="M7.5 10.5V7.5A4.5 4.5 0 0 1 16.5 7.5V10.5" ${K}/><g data-part="body" ${K}><rect x="4.8" y="10.5" width="14.4" height="10.2" rx="3"/><circle cx="12" cy="15.2" r="0.9"/><line x1="12" y1="16.1" x2="12" y2="17.8"/></g>`,
      solid: `<path data-part="shackle" fill="currentColor" d="M6.6 10.5V7.5A5.4 5.4 0 0 1 17.4 7.5V10.5H15.5V7.5A3.5 3.5 0 0 0 8.5 7.5V10.5Z"/><path data-part="body" fill="currentColor" fill-rule="evenodd" d="M7.8 10.2H16.2A3.2 3.2 0 0 1 19.4 13.4V17.6A3.2 3.2 0 0 1 16.2 20.8H7.8A3.2 3.2 0 0 1 4.6 17.6V13.4A3.2 3.2 0 0 1 7.8 10.2ZM12 13.4A1.4 1.4 0 0 0 10.6 14.8A1.4 1.4 0 0 0 11.3 16V17.5A0.7 0.7 0 0 0 12.7 17.5V16A1.4 1.4 0 0 0 13.4 14.8A1.4 1.4 0 0 0 12 13.4Z"/>`,
      duotone: `<path data-part="shackle" d="M7.5 10.5V7.5A4.5 4.5 0 0 1 16.5 7.5V10.5" ${DK}/><g data-part="body"><rect x="4.8" y="10.5" width="14.4" height="10.2" rx="3" ${D}/><path fill="currentColor" d="M12 13.8A1.2 1.2 0 0 0 11.3 15.9V17.4A0.7 0.7 0 0 0 12.7 17.4V15.9A1.2 1.2 0 0 0 12 13.8Z"/></g>`,
      glass: glassCompose(
        `<path data-part="shackle" data-pivot="12 8" d="M7.5 12.5V7.2A4.5 4.5 0 0 1 16.5 7.2V12.5" ${GBS}/>`,
        `<rect data-part="body" data-pivot="12 15.5" x="4.6" y="10.2" width="14.8" height="10.6" rx="3.2"/>`,
        `<g data-part="body" data-pivot="12 15.5"><rect x="4.6" y="10.2" width="14.8" height="10.6" rx="3.2" ${GF}/><path d="M12 13.6A1.3 1.3 0 0 0 11.25 15.9V17.6A0.75 0.75 0 0 0 12.75 17.6V15.9A1.3 1.3 0 0 0 12 13.6Z" ${GB}/></g>`
      ),
      stencil: `<g data-part="shackle" fill="currentColor"><path d="M7 10V7.5A5 5 0 0 1 11.2 2.6V4.5A3.1 3.1 0 0 0 8.9 7.5V10Z"/><path d="M17 10V7.5A5 5 0 0 0 12.8 2.6V4.5A3.1 3.1 0 0 1 15.1 7.5V10Z"/></g><g data-part="body" fill="currentColor"><path d="M7.8 10.8H11.2V14A1.4 1.4 0 0 0 11.2 16.7V20.6H7.8A3 3 0 0 1 4.8 17.6V13.8A3 3 0 0 1 7.8 10.8Z"/><path d="M12.8 10.8H16.2A3 3 0 0 1 19.2 13.8V17.6A3 3 0 0 1 16.2 20.6H12.8V16.7A1.4 1.4 0 0 0 12.8 14Z"/></g>`,
      hardware: `<path data-part="shackle" d="M7.5 11V7.5A4.5 4.5 0 0 1 16.5 7.5V11" fill="none" stroke="#71717a" stroke-width="2" stroke-linecap="round"/><g data-part="body"><rect x="4.8" y="10.4" width="14.4" height="10.4" rx="3" ${HD}/><circle cx="12" cy="15.5" r="1.4" ${HA}/></g>`,
      relief: `<g data-part="shackle"><path transform="translate(1.5,1.5)" d="M7.5 10.5V7.5A4.5 4.5 0 0 1 16.5 7.5V10.5" ${RS_LINE}/><path d="M7.5 10.5V7.5A4.5 4.5 0 0 1 16.5 7.5V10.5" ${RF_LINE}/></g><g data-part="body"><rect transform="translate(1.5,1.5)" x="4.8" y="10.5" width="14.4" height="10.2" rx="3" ${RS}/><rect x="4.8" y="10.5" width="14.4" height="10.2" rx="3" ${RF}/><circle cx="12" cy="15.4" r="1.2" ${RS}/></g>`,
    },
  },
  // 7. UNLOCK
  {
    name: "unlock",
    label: "Unlock",
    category: "Core UI",
    motionSummary: "Open shackle springs upward & tilts clear of latch",
    soundSummary: "Ascending spring-release shackle pop",
    svgs: {
      outline: `<path data-part="shackle" data-pivot="7.5 10.5" d="M7.5 10.5V7.5A4.5 4.5 0 0 1 16.2 6" ${K}/><g data-part="body" ${K}><rect x="4.8" y="10.5" width="14.4" height="10.2" rx="3"/><circle cx="12" cy="15.2" r="0.9"/><line x1="12" y1="16.1" x2="12" y2="17.8"/></g>`,
      solid: `<path data-part="shackle" data-pivot="7.5 10.5" fill="currentColor" d="M6.6 10.5V7.5A5.4 5.4 0 0 1 17 5.5A0.95 0.95 0 0 1 15.3 6.35A3.5 3.5 0 0 0 8.5 7.5V10.5Z"/><path data-part="body" fill="currentColor" fill-rule="evenodd" d="M7.8 10.2H16.2A3.2 3.2 0 0 1 19.4 13.4V17.6A3.2 3.2 0 0 1 16.2 20.8H7.8A3.2 3.2 0 0 1 4.6 17.6V13.4A3.2 3.2 0 0 1 7.8 10.2ZM12 13.4A1.4 1.4 0 0 0 10.6 14.8A1.4 1.4 0 0 0 11.3 16V17.5A0.7 0.7 0 0 0 12.7 17.5V16A1.4 1.4 0 0 0 13.4 14.8A1.4 1.4 0 0 0 12 13.4Z"/>`,
      duotone: `<path data-part="shackle" data-pivot="7.5 10.5" d="M7.5 10.5V7.5A4.5 4.5 0 0 1 16.2 6" ${DK}/><g data-part="body"><rect x="4.8" y="10.5" width="14.4" height="10.2" rx="3" ${D}/><path fill="currentColor" d="M12 13.8A1.2 1.2 0 0 0 11.3 15.9V17.4A0.7 0.7 0 0 0 12.7 17.4V15.9A1.2 1.2 0 0 0 12 13.8Z"/></g>`,
      glass: glassCompose(
        `<path data-part="shackle" data-pivot="7.5 10.5" d="M7.5 12.5V7.2A4.5 4.5 0 0 1 16.2 6" ${GBS}/>`,
        `<rect data-part="body" data-pivot="12 15.5" x="4.6" y="10.2" width="14.8" height="10.6" rx="3.2"/>`,
        `<g data-part="body" data-pivot="12 15.5"><rect x="4.6" y="10.2" width="14.8" height="10.6" rx="3.2" ${GF}/><path d="M12 13.6A1.3 1.3 0 0 0 11.25 15.9V17.6A0.75 0.75 0 0 0 12.75 17.6V15.9A1.3 1.3 0 0 0 12 13.6Z" ${GB}/></g>`
      ),
      stencil: `<g data-part="shackle" data-pivot="7.5 10.5" fill="currentColor"><path d="M7 10V7.5A5 5 0 0 1 11.2 2.6V4.5A3.1 3.1 0 0 0 8.9 7.5V10Z"/><path d="M12.8 2.6A5 5 0 0 1 16.6 5.8L14.9 6.7A3.1 3.1 0 0 0 12.8 4.5Z"/></g><g data-part="body" fill="currentColor"><path d="M7.8 10.8H11.2V14A1.4 1.4 0 0 0 11.2 16.7V20.6H7.8A3 3 0 0 1 4.8 17.6V13.8A3 3 0 0 1 7.8 10.8Z"/><path d="M12.8 10.8H16.2A3 3 0 0 1 19.2 13.8V17.6A3 3 0 0 1 16.2 20.6H12.8V16.7A1.4 1.4 0 0 0 12.8 14Z"/></g>`,
      hardware: `<path data-part="shackle" data-pivot="7.5 10.5" d="M7.5 11V7.5A4.5 4.5 0 0 1 16.2 6" fill="none" stroke="#71717a" stroke-width="2" stroke-linecap="round"/><g data-part="body"><rect x="4.8" y="10.4" width="14.4" height="10.4" rx="3" ${HD}/><circle cx="12" cy="15.5" r="1.4" ${HA}/></g>`,
      relief: `<g data-part="shackle" data-pivot="7.5 10.5"><path transform="translate(1.5,1.5)" d="M7.5 10.5V7.5A4.5 4.5 0 0 1 16.2 6" ${RS_LINE}/><path d="M7.5 10.5V7.5A4.5 4.5 0 0 1 16.2 6" ${RF_LINE}/></g><g data-part="body"><rect transform="translate(1.5,1.5)" x="4.8" y="10.5" width="14.4" height="10.2" rx="3" ${RS}/><rect x="4.8" y="10.5" width="14.4" height="10.2" rx="3" ${RF}/><circle cx="12" cy="15.4" r="1.2" ${RS}/></g>`,
    },
  },
  // 8. TRASH
  {
    name: "trash",
    label: "Trash",
    category: "Core UI",
    motionSummary: "Hinged lid flips open while bin rattles slightly",
    soundSummary: "Pedal-lid metallic clatter + hollow drop thump",
    svgs: {
      outline: `<path data-part="lid" data-pivot="5 7" d="M4 7H20M9.5 7V4.5H14.5V7" ${K}/><path data-part="bin" d="M6 7L7 19.2A1.5 1.5 0 0 0 8.5 20.5H15.5A1.5 1.5 0 0 0 17 19.2L18 7M10 11V17M14 11V17" ${K}/>`,
      solid: `<path data-part="lid" data-pivot="5 7" fill="currentColor" d="M9 4.5A1 1 0 0 1 10 3.5H14A1 1 0 0 1 15 4.5V6H20A0.8 0.8 0 0 1 20 7.6H4A0.8 0.8 0 0 1 4 6H9Z"/><path data-part="bin" fill="currentColor" fill-rule="evenodd" d="M6.2 8.5H17.8L16.9 19.3A1.5 1.5 0 0 1 15.4 20.7H8.6A1.5 1.5 0 0 1 7.1 19.3ZM9.4 11.2V17.3H10.9V11.2ZM13.1 11.2V17.3H14.6V11.2Z"/>`,
      duotone: `<path data-part="lid" data-pivot="5 7" d="M4 7H20M9.5 7V4.5H14.5V7" ${DK}/><g data-part="bin"><path d="M6 7L7 19.2A1.5 1.5 0 0 0 8.5 20.5H15.5A1.5 1.5 0 0 0 17 19.2L18 7Z" ${D}/><path d="M10 11V17M14 11V17" ${DK}/></g>`,
      glass: glassCompose(
        `<path data-part="lid" data-pivot="5 7" d="M9 4H15V5.8H20V8H4V5.8H9Z" ${GB}/>`,
        `<path data-part="bin" data-pivot="12 14" d="M6.2 7.8H17.8L16.9 19.3A1.5 1.5 0 0 1 15.4 20.7H8.6A1.5 1.5 0 0 1 7.1 19.3Z"/>`,
        `<g data-part="bin" data-pivot="12 14"><path d="M6.2 7.8H17.8L16.9 19.3A1.5 1.5 0 0 1 15.4 20.7H8.6A1.5 1.5 0 0 1 7.1 19.3Z" ${GF}/><rect x="9.4" y="10.4" width="1.5" height="7" rx="0.75" ${GB}/><rect x="13.1" y="10.4" width="1.5" height="7" rx="0.75" ${GB}/></g>`
      ),
      stencil: `<path data-part="lid" data-pivot="5 7" fill="currentColor" d="M9.5 4.2H14.5V5.8H19.5V7.3H4.5V5.8H9.5Z"/><g data-part="bin" fill="currentColor"><path d="M6.2 8.5H8.8L9.5 20.5H7.2Z"/><path d="M11 8.5H13V20.5H11Z"/><path d="M15.2 8.5H17.8L16.8 20.5H14.5Z"/></g>`,
      hardware: `<g data-part="bin"><path d="M6.2 8H17.8L16.9 19.3A1.5 1.5 0 0 1 15.4 20.7H8.6A1.5 1.5 0 0 1 7.1 19.3Z" ${HL}/><rect x="9.5" y="11" width="1.4" height="6.5" rx="0.7" ${HM}/><rect x="13.1" y="11" width="1.4" height="6.5" rx="0.7" ${HM}/></g><g data-part="lid" data-pivot="5 7"><path d="M9 4.5H15V6.2H20V7.8H4V6.2H9Z" ${HD}/><rect x="11" y="4.8" width="2" height="1" rx="0.3" ${HA}/></g>`,
      relief: `<g data-part="bin"><path transform="translate(1.5,1.5)" d="M6 7.5L7 19.2A1.5 1.5 0 0 0 8.5 20.5H15.5A1.5 1.5 0 0 0 17 19.2L18 7.5Z" ${RS}/><path d="M6 7.5L7 19.2A1.5 1.5 0 0 0 8.5 20.5H15.5A1.5 1.5 0 0 0 17 19.2L18 7.5Z" ${RF}/><path d="M10 11V17M14 11V17" ${RF_LINE}/></g><g data-part="lid" data-pivot="5 7"><path transform="translate(1.5,1.5)" d="M9.5 4.5H14.5V6.2H19.5V7.8H4.5V6.2H9.5Z" ${RS}/><path d="M9.5 4.5H14.5V6.2H19.5V7.8H4.5V6.2H9.5Z" ${RF}/></g>`,
    },
  },
  // 9. CHECK
  {
    name: "check",
    label: "Check",
    category: "Core UI",
    motionSummary: "Checkmark snaps with energetic confirmation pop",
    soundSummary: "Crisp ascending two-note confirmation ding",
    svgs: {
      outline: `<circle cx="12" cy="12" r="9" ${K}/><polyline data-part="check" points="8.2 12.4 10.8 15 16 9.5" ${K}/>`,
      solid: `<path data-part="check" fill="currentColor" fill-rule="evenodd" d="M12 2.8A9.2 9.2 0 1 0 12 21.2A9.2 9.2 0 1 0 12 2.8ZM16.9 9.7L11.2 15.8A1 1 0 0 1 9.8 15.8L7.2 13.2A1 1 0 1 1 8.6 11.8L10.5 13.7L15.4 8.3A1 1 0 1 1 16.9 9.7Z"/>`,
      duotone: `<circle cx="12" cy="12" r="9" ${D}/><polyline data-part="check" points="8.2 12.4 10.8 15 16 9.5" ${DK}/>`,
      glass: glassCompose(
        `<circle cx="10.4" cy="10.4" r="8" ${GB}/>`,
        `<circle cx="12.5" cy="12.5" r="8.6"/>`,
        `<g ${GF}><circle cx="12.5" cy="12.5" r="8.6"/></g><polyline data-part="check" points="8.6 12.8 11.2 15.3 16.4 9.8" ${GBS}/>`
      ),
      stencil: `<g fill="currentColor"><path d="M5.6 5.6A9 9 0 0 1 18.4 5.6L17 7A7 7 0 0 0 7 7Z"/><path d="M18.4 18.4A9 9 0 0 1 5.6 18.4L7 17A7 7 0 0 0 17 17Z"/></g><polyline data-part="check" points="8.2 12.4 10.8 15 16 9.5" ${K}/>`,
      hardware: `<circle cx="12" cy="12" r="9.2" ${HD}/><circle cx="12" cy="12" r="7" ${HL}/><polyline data-part="check" points="8.2 12.4 10.8 15 16 9.5" fill="none" stroke="#ea3800" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>`,
      relief: `<circle transform="translate(1.5,1.5)" cx="12" cy="12" r="9" ${RS}/><circle cx="12" cy="12" r="9" ${RF}/><polyline data-part="check" points="8.2 12.4 10.8 15 16 9.5" ${RF_LINE}/>`,
    },
  },
  // 10. PLUS
  {
    name: "plus",
    label: "Plus",
    category: "Core UI",
    motionSummary: "Crosshair arms rotate 90° and snap outward",
    soundSummary: "Crisp additive snap-in pop tone",
    svgs: {
      outline: `<g data-part="plus" data-pivot="12 12" ${K}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></g>`,
      solid: `<path data-part="plus" data-pivot="12 12" fill="currentColor" d="M10.8 4.8A1.2 1.2 0 0 1 13.2 4.8V10.8H19.2A1.2 1.2 0 0 1 19.2 13.2H13.2V19.2A1.2 1.2 0 0 1 10.8 19.2V13.2H4.8A1.2 1.2 0 0 1 4.8 10.8H10.8Z"/>`,
      duotone: `<circle cx="12" cy="12" r="8.5" ${D}/><g data-part="plus" data-pivot="12 12" ${DK}><line x1="12" y1="7" x2="12" y2="17"/><line x1="7" y1="12" x2="17" y2="12"/></g>`,
      glass: glassCompose(
        `<g data-part="plus" data-pivot="12 12"><path transform="translate(-1.6,-1.3)" d="M10.6 4.8A1.4 1.4 0 0 1 13.4 4.8V10.6H19.2A1.4 1.4 0 0 1 19.2 13.4H13.4V19.2A1.4 1.4 0 0 1 10.6 19.2V13.4H4.8A1.4 1.4 0 0 1 4.8 10.6H10.6Z" ${GB}/></g>`,
        `<path data-part="plus" data-pivot="12 12" d="M10.6 4.8A1.4 1.4 0 0 1 13.4 4.8V10.6H19.2A1.4 1.4 0 0 1 19.2 13.4H13.4V19.2A1.4 1.4 0 0 1 10.6 19.2V13.4H4.8A1.4 1.4 0 0 1 4.8 10.6H10.6Z"/>`
      ),
      stencil: `<g data-part="plus" data-pivot="12 12" fill="currentColor"><rect x="10.9" y="4.5" width="2.2" height="5.5" rx="0.8"/><rect x="10.9" y="14" width="2.2" height="5.5" rx="0.8"/><rect x="4.5" y="10.9" width="5.5" height="2.2" rx="0.8"/><rect x="14" y="10.9" width="5.5" height="2.2" rx="0.8"/></g>`,
      hardware: `<rect x="4" y="4" width="16" height="16" rx="4" ${HL}/><path data-part="plus" data-pivot="12 12" ${HA} d="M11 7.2A1 1 0 0 1 13 7.2V11H16.8A1 1 0 0 1 16.8 13H13V16.8A1 1 0 0 1 11 16.8V13H7.2A1 1 0 0 1 7.2 11H11Z"/>`,
      relief: `<g data-part="plus" data-pivot="12 12"><path transform="translate(1.5,1.5)" d="M10.6 4.8A1.4 1.4 0 0 1 13.4 4.8V10.6H19.2A1.4 1.4 0 0 1 19.2 13.4H13.4V19.2A1.4 1.4 0 0 1 10.6 19.2V13.4H4.8A1.4 1.4 0 0 1 4.8 10.6H10.6Z" ${RS}/><path d="M10.6 4.8A1.4 1.4 0 0 1 13.4 4.8V10.6H19.2A1.4 1.4 0 0 1 19.2 13.4H13.4V19.2A1.4 1.4 0 0 1 10.6 19.2V13.4H4.8A1.4 1.4 0 0 1 4.8 10.6H10.6Z" ${RF}/></g>`,
    },
  },
];
