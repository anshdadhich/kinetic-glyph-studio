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

export const TOOLS2_ICONS: IconDef[] = [
  // 151. SAW
  {
    name: "saw",
    label: "Hand Saw",
    category: "Kinetic Tools",
    motionSummary: "Serrated steel blade saws back and forth smoothly from wooden handle",
    soundSummary: "Rhythmic carpenter hand-saw wood rasp strokes",
    svgs: {
      outline: `<g data-part="saw" data-pivot="16 8" ${K}><path d="M14.5 5.2L19.2 9.9A1.5 1.5 0 0 1 19.2 12L17.4 13.8L10.6 7L12.4 5.2A1.5 1.5 0 0 1 14.5 5.2Z"/><path d="M10.6 7L4 13.6L5.5 15L4.8 16.5L6.8 16.3L6.5 18.2L8.5 17.8L8.4 19.6L17.4 13.8" ${K_THIN}/></g>`,
      solid: `<g data-part="saw" data-pivot="16 8" fill="currentColor"><path fill-rule="evenodd" d="M14.6 4.8L19.6 9.8A1.6 1.6 0 0 1 19.6 12.1L17.4 14.3L10.2 7.1L12.4 4.8A1.6 1.6 0 0 1 14.6 4.8ZM13.8 7.5A0.8 0.8 0 0 0 12.7 8.6L15.8 11.7A0.8 0.8 0 0 0 16.9 10.6Z"/><path d="M10.5 7.4L4 13.9L5.4 15.2L4.8 16.8L6.8 16.6L6.6 18.4L8.6 18L8.4 19.8L17.1 14Z" opacity="0.72"/></g>`,
      duotone: `<g data-part="saw" data-pivot="16 8"><path d="M10.6 7L4 13.6L5.5 15L4.8 16.5L6.8 16.3L6.5 18.2L8.5 17.8L8.4 19.6L17.4 13.8Z" ${D}/><path d="M14.5 5.2L19.2 9.9A1.5 1.5 0 0 1 19.2 12L17.4 13.8L10.6 7L12.4 5.2A1.5 1.5 0 0 1 14.5 5.2Z" ${DK}/></g>`,
      glass: glassCompose(
        `<path data-part="saw" data-pivot="16 8" d="M14.6 4.8L19.6 9.8A1.6 1.6 0 0 1 19.6 12.1L17.4 14.3L10.2 7.1L12.4 4.8A1.6 1.6 0 0 1 14.6 4.8Z" ${GB}/>`,
        `<path data-part="saw" data-pivot="16 8" d="M10.5 7.4L4 13.9L5.4 15.2L4.8 16.8L6.8 16.6L6.6 18.4L8.6 18L8.4 19.8L17.1 14Z"/>`
      ),
      stencil: `<g data-part="saw" data-pivot="16 8" fill="currentColor"><path d="M14.6 4.8L19.6 9.8A1.5 1.5 0 0 1 19.6 12L18 13.6L10.8 6.4L12.4 4.8A1.5 1.5 0 0 1 14.6 4.8Z"/><path d="M10 7.6L4 13.6L5.4 15L4.8 16.6L6.8 16.4L6.6 18.2L8.6 17.8L8.4 19.6L16.6 14.2Z"/></g>`,
      hardware: `<g data-part="saw" data-pivot="16 8"><path d="M10.5 7.4L4 13.9L5.4 15.2L4.8 16.8L6.8 16.6L6.6 18.4L8.6 18L8.4 19.8L17.1 14Z" ${HL}/><path d="M14.6 4.8L19.6 9.8A1.6 1.6 0 0 1 19.6 12.1L17.4 14.3L10.2 7.1L12.4 4.8A1.6 1.6 0 0 1 14.6 4.8Z" ${HA}/></g>`,
      relief: `<g data-part="saw" data-pivot="16 8"><path transform="translate(1.3,1.3)" d="M10.6 7L4 13.6L5.5 15L4.8 16.5L6.8 16.3L6.5 18.2L8.5 17.8L8.4 19.6L17.4 13.8Z" ${RS}/><path d="M10.6 7L4 13.6L5.5 15L4.8 16.5L6.8 16.3L6.5 18.2L8.5 17.8L8.4 19.6L17.4 13.8Z" ${RF}/><path d="M14.5 5.2L19.2 9.9A1.5 1.5 0 0 1 19.2 12L17.4 13.8L10.6 7L12.4 5.2A1.5 1.5 0 0 1 14.5 5.2Z" ${RF}/></g>`,
    },
  },
  // 152. DRILL
  {
    name: "drill",
    label: "Power Drill",
    category: "Kinetic Tools",
    motionSummary: "Drill chassis kicks lightly while spiral bit thrusts forward",
    soundSummary: "Variable-speed cordless electric drill chuck whir",
    svgs: {
      outline: `<g data-part="body" ${K}><path d="M4.5 7.5H13.2A1.5 1.5 0 0 1 14.7 9V11.8A1.5 1.5 0 0 1 13.2 13.3H6.5L5.4 18.5H8.5"/><path d="M4.5 7.5A2.2 2.2 0 0 0 4.5 13.3H6.5"/></g><g data-part="bit" ${K}><line x1="14.7" y1="10.4" x2="21" y2="10.4"/><line x1="17" y1="8.8" x2="17" y2="12" ${K_THIN}/></g>`,
      solid: `<path data-part="body" fill="currentColor" d="M5.6 7H13.4A1.6 1.6 0 0 1 15 8.6V12.2A1.6 1.6 0 0 1 13.4 13.8H9.2L7.8 19.2H4.6L6 13.8H5.6A3.4 3.4 0 0 1 5.6 7Z"/><path data-part="bit" fill="currentColor" d="M15.4 8.6H17.2V9.5H21A0.9 0.9 0 0 1 21 11.3H17.2V12.2H15.4Z"/>`,
      duotone: `<g data-part="body"><path d="M5.5 7.4H13.4A1.5 1.5 0 0 1 14.9 8.9V12A1.5 1.5 0 0 1 13.4 13.5H8.8L7.6 18.8H4.8L6 13.5H5.5A3 3 0 0 1 5.5 7.4Z" ${D}/></g><g data-part="bit" ${DK}><line x1="14.9" y1="10.4" x2="21" y2="10.4"/><line x1="17" y1="8.8" x2="17" y2="12"/></g>`,
      glass: glassCompose(
        `<path data-part="bit" d="M15.2 8.6H17.2V9.5H21A0.9 0.9 0 0 1 21 11.3H17.2V12.2H15.2Z" ${GB}/>`,
        `<path data-part="body" d="M5.6 7H13.4A1.6 1.6 0 0 1 15 8.6V12.2A1.6 1.6 0 0 1 13.4 13.8H9.2L7.8 19.2H4.6L6 13.8H5.6A3.4 3.4 0 0 1 5.6 7Z"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="body"><path d="M5.6 7.2H14.6V13.4H5.6A3.1 3.1 0 0 1 5.6 7.2Z"/><polygon points="6.2 14.4 9 14.4 7.8 19.2 5 19.2"/></g><path data-part="bit" d="M15.8 8.8H17.6V9.7H21V11.1H17.6V12H15.8Z"/></g>`,
      hardware: `<g data-part="body"><rect x="4.8" y="13.2" width="3.8" height="5.8" rx="1" transform="rotate(10 6 15)" ${HD}/><rect x="3" y="7" width="12" height="6.6" rx="2.6" ${HL}/><circle cx="6.2" cy="10.3" r="1.2" ${HA}/></g><g data-part="bit"><rect x="15" y="8.6" width="2.2" height="3.4" rx="0.6" ${HD}/><rect x="17.2" y="9.6" width="4" height="1.5" rx="0.7" ${HM}/></g>`,
      relief: `<g data-part="body"><path transform="translate(1.3,1.3)" d="M5.6 7.2H13.4A1.5 1.5 0 0 1 14.9 8.7V12A1.5 1.5 0 0 1 13.4 13.5H8.8L7.6 18.8H4.8L6 13.5H5.6A3.1 3.1 0 0 1 5.6 7.2Z" ${RS}/><path d="M5.6 7.2H13.4A1.5 1.5 0 0 1 14.9 8.7V12A1.5 1.5 0 0 1 13.4 13.5H8.8L7.6 18.8H4.8L6 13.5H5.6A3.1 3.1 0 0 1 5.6 7.2Z" ${RF}/></g><g data-part="bit" ${RF_LINE}><line x1="14.9" y1="10.4" x2="21" y2="10.4"/><line x1="17" y1="8.8" x2="17" y2="12"/></g>`,
    },
  },
  // 153. SCREWDRIVER
  {
    name: "screwdriver",
    label: "Screwdriver",
    category: "Kinetic Tools",
    motionSummary: "Fluted driver turns with crisp rotational twist and downward drive",
    soundSummary: "Triple ratchet screwdriver turn clicks",
    svgs: {
      outline: `<g data-part="driver" data-pivot="12 12" ${K}><path d="M14.8 4.4L19.6 9.2L17.6 11.2A1.4 1.4 0 0 1 15.6 11.2L12.8 8.4A1.4 1.4 0 0 1 12.8 6.4Z"/><line x1="14.2" y1="9.8" x2="6" y2="18"/><polygon points="4.5 19.5 7 19 5 17" fill="currentColor"/></g>`,
      solid: `<g data-part="driver" data-pivot="12 12" fill="currentColor"><path d="M15.2 4.2L19.8 8.8L17.6 11A1.6 1.6 0 0 1 15.3 11L13 8.7A1.6 1.6 0 0 1 13 6.4Z"/><path d="M13.5 9.3L14.7 10.5L6.8 18.4L4.4 19.6L5.6 17.2Z"/></g>`,
      duotone: `<g data-part="driver" data-pivot="12 12"><path d="M14.8 4.4L19.6 9.2L17.6 11.2A1.4 1.4 0 0 1 15.6 11.2L12.8 8.4A1.4 1.4 0 0 1 12.8 6.4Z" ${D}/><line x1="14.2" y1="9.8" x2="5.4" y2="18.6" ${DK}/></g>`,
      glass: glassCompose(
        `<path data-part="driver" data-pivot="12 12" d="M13.5 9.3L14.7 10.5L6.8 18.4L4.4 19.6L5.6 17.2Z" ${GB}/>`,
        `<path data-part="driver" data-pivot="12 12" d="M15.2 4.2L19.8 8.8L17.6 11A1.6 1.6 0 0 1 15.3 11L13 8.7A1.6 1.6 0 0 1 13 6.4Z"/>`
      ),
      stencil: `<g data-part="driver" data-pivot="12 12" fill="currentColor"><path d="M15.2 4.2L19.8 8.8L17.6 11L13 6.4Z"/><polygon points="12.6 10.2 13.8 11.4 6.6 18.6 4.4 19.6 5.4 17.4"/></g>`,
      hardware: `<g data-part="driver" data-pivot="12 12"><path d="M13.5 9.3L14.7 10.5L6.8 18.4L4.4 19.6L5.6 17.2Z" ${HL}/><path d="M15.2 4.2L19.8 8.8L17.6 11A1.6 1.6 0 0 1 15.3 11L13 8.7A1.6 1.6 0 0 1 13 6.4Z" ${HA}/></g>`,
      relief: `<g data-part="driver" data-pivot="12 12"><path transform="translate(1.3,1.3)" d="M15.2 4.2L19.8 8.8L17.6 11A1.6 1.6 0 0 1 15.3 11L13 8.7A1.6 1.6 0 0 1 13 6.4Z" ${RS}/><path d="M15.2 4.2L19.8 8.8L17.6 11A1.6 1.6 0 0 1 15.3 11L13 8.7A1.6 1.6 0 0 1 13 6.4Z" ${RF}/><line x1="14.2" y1="9.8" x2="5.4" y2="18.6" ${RF_LINE}/></g>`,
    },
  },
  // 154. AXE
  {
    name: "axe",
    label: "Axe",
    category: "Kinetic Tools",
    motionSummary: "Forged axe swings down in chopping arc sending wood chip flying",
    soundSummary: "Sharp timber chop crack + flying wood splinter",
    svgs: {
      outline: `<g data-part="axe" data-pivot="6 18" ${K}><line x1="5.5" y1="18.5" x2="15" y2="9"/><path d="M12 6L17.8 4.2A6.5 6.5 0 0 1 19.8 11.8L14 10Z"/></g><polygon data-part="chip" points="5.5 7 7.5 6 7 8.2" fill="currentColor"/>`,
      solid: `<g data-part="axe" data-pivot="6 18" fill="currentColor"><path d="M14.3 8.3L15.7 9.7L6.5 18.9A1 1 0 0 1 5.1 17.5Z"/><path d="M11.8 6L17.8 4A6.8 6.8 0 0 1 20 12L13.8 10.2Z"/></g><polygon data-part="chip" points="5.5 7 7.8 5.8 7.2 8.4" fill="currentColor"/>`,
      duotone: `<g data-part="axe" data-pivot="6 18"><line x1="5.5" y1="18.5" x2="15" y2="9" ${DK}/><path d="M12 6L17.8 4.2A6.5 6.5 0 0 1 19.8 11.8L14 10Z" ${D}/></g><polygon data-part="chip" points="5.5 7 7.5 6 7 8.2" fill="currentColor"/>`,
      glass: glassCompose(
        `<path data-part="axe" data-pivot="6 18" d="M14.3 8.3L15.7 9.7L6.5 18.9A1 1 0 0 1 5.1 17.5Z" ${GB}/><circle data-part="chip" cx="6.5" cy="7" r="1.2" ${GB}/>`,
        `<path data-part="axe" data-pivot="6 18" d="M11.8 6L17.8 4A6.8 6.8 0 0 1 20 12L13.8 10.2Z"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="axe" data-pivot="6 18"><path d="M13.5 9.1L14.9 10.5L6.5 18.9A1 1 0 0 1 5.1 17.5Z"/><path d="M12 6L17.8 4.1A6.6 6.6 0 0 1 19.9 11.9L14.2 10.2Z"/></g><polygon data-part="chip" points="5.5 7 7.8 5.8 7.2 8.4"/></g>`,
      hardware: `<g data-part="axe" data-pivot="6 18"><path d="M14.3 8.3L15.7 9.7L6.5 18.9A1 1 0 0 1 5.1 17.5Z" ${HD}/><path d="M11.8 6L17.8 4A6.8 6.8 0 0 1 20 12L13.8 10.2Z" ${HL}/></g><polygon data-part="chip" points="5.5 7 7.8 5.8 7.2 8.4" ${HA}/>`,
      relief: `<g data-part="axe" data-pivot="6 18"><path transform="translate(1.3,1.3)" d="M12 6L17.8 4.2A6.5 6.5 0 0 1 19.8 11.8L14 10Z" ${RS}/><line x1="5.5" y1="18.5" x2="15" y2="9" ${RF_LINE}/><path d="M12 6L17.8 4.2A6.5 6.5 0 0 1 19.8 11.8L14 10Z" ${RF}/></g><polygon data-part="chip" points="5.5 7 7.8 5.8 7.2 8.4" ${RS}/>`,
    },
  },
  // 155. SHOVEL
  {
    name: "shovel",
    label: "Shovel",
    category: "Kinetic Tools",
    motionSummary: "Steel spade digs downward and lifts smoothly with scooping tilt",
    soundSummary: "Gritty gravel shovel scoop crunch",
    svgs: {
      outline: `<g data-part="spade" data-pivot="12 12" ${K}><path d="M15.8 4.4L19.6 8.2L17.8 10L14 6.2Z"/><line x1="15.8" y1="8.2" x2="9.5" y2="14.5"/><path d="M7.8 12.2L11.8 16.2L8.4 19.6A2.2 2.2 0 0 1 4.8 18.4L4.4 15.6Z"/></g>`,
      solid: `<g data-part="spade" data-pivot="12 12" fill="currentColor"><path d="M15.8 4.2L19.8 8.2L18 10L16.5 8.5L10.4 14.6L9.4 13.6L15.5 7.5L14 6Z"/><path d="M7.6 12L12 16.4L8.6 19.8A2.2 2.2 0 0 1 4.6 18.6L4.2 15.4Z"/></g>`,
      duotone: `<g data-part="spade" data-pivot="12 12"><path d="M15.8 4.4L19.6 8.2L17.8 10L14 6.2Z" ${DK}/><line x1="15.8" y1="8.2" x2="9.5" y2="14.5" ${DK}/><path d="M7.8 12.2L11.8 16.2L8.4 19.6A2.2 2.2 0 0 1 4.8 18.4L4.4 15.6Z" ${D}/></g>`,
      glass: glassCompose(
        `<path data-part="spade" data-pivot="12 12" d="M15.8 4.2L19.8 8.2L18 10L16.5 8.5L10.4 14.6L9.4 13.6L15.5 7.5L14 6Z" ${GB}/>`,
        `<path data-part="spade" data-pivot="12 12" d="M7.6 12L12 16.4L8.6 19.8A2.2 2.2 0 0 1 4.6 18.6L4.2 15.4Z"/>`
      ),
      stencil: `<g data-part="spade" data-pivot="12 12" fill="currentColor"><path d="M15.8 4.2L19.8 8.2L18.2 9.8L14.2 5.8Z"/><path d="M15.4 7.4L16.6 8.6L11.2 14L10 12.8Z"/><path d="M7.6 12.2L11.8 16.4L8.6 19.6A2.1 2.1 0 0 1 4.8 18.4L4.4 15.4Z"/></g>`,
      hardware: `<g data-part="spade" data-pivot="12 12"><path d="M15.8 4.2L19.8 8.2L18 10L16.5 8.5L10.4 14.6L9.4 13.6L15.5 7.5L14 6Z" ${HD}/><path d="M7.6 12L12 16.4L8.6 19.8A2.2 2.2 0 0 1 4.6 18.6L4.2 15.4Z" ${HL}/></g>`,
      relief: `<g data-part="spade" data-pivot="12 12"><path transform="translate(1.3,1.3)" d="M7.8 12.2L11.8 16.2L8.4 19.6A2.2 2.2 0 0 1 4.8 18.4L4.4 15.6Z" ${RS}/><path d="M15.8 4.4L19.6 8.2L17.8 10L14 6.2Z" ${RF}/><line x1="15.8" y1="8.2" x2="9.5" y2="14.5" ${RF_LINE}/><path d="M7.8 12.2L11.8 16.2L8.4 19.6A2.2 2.2 0 0 1 4.8 18.4L4.4 15.6Z" ${RF}/></g>`,
    },
  },
  // 156. RULER
  {
    name: "ruler",
    label: "Ruler",
    category: "Kinetic Tools",
    motionSummary: "Graduated straightedge lifts while sliding caliper jaw glides across",
    soundSummary: "Precision vernier caliper tick-tick clicks",
    svgs: {
      outline: `<g data-part="scale" ${K}><rect x="3.5" y="8" width="17" height="8" rx="1.4"/><line x1="7.5" y1="8" x2="7.5" y2="11.2" ${K_THIN}/><line x1="12" y1="8" x2="12" y2="12" ${K_THIN}/><line x1="16.5" y1="8" x2="16.5" y2="11.2" ${K_THIN}/></g><line data-part="slider" x1="12" y1="6" x2="12" y2="18" ${K}/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><g fill="#000"><rect x="6.9" y="8" width="1.2" height="3.2"/><rect x="11.4" y="8" width="1.2" height="4"/><rect x="15.9" y="8" width="1.2" height="3.2"/></g></mask></defs><rect data-part="scale" x="3.4" y="8" width="17.2" height="8" rx="1.6" fill="currentColor" mask="url(#__GID__-m1)"/><rect data-part="slider" x="11.1" y="5.8" width="1.8" height="12.4" rx="0.9" fill="currentColor"/>`,
      duotone: `<g data-part="scale"><rect x="3.5" y="8" width="17" height="8" rx="1.4" ${D}/><line x1="7.5" y1="8" x2="7.5" y2="11.2" ${DK_THIN}/><line x1="16.5" y1="8" x2="16.5" y2="11.2" ${DK_THIN}/></g><line data-part="slider" x1="12" y1="6" x2="12" y2="18" ${DK}/>`,
      glass: glassCompose(
        `<rect data-part="slider" x="11" y="5.8" width="2" height="12.4" rx="1" ${GB}/>`,
        `<rect data-part="scale" x="3.5" y="8" width="17" height="8" rx="1.6"/>`,
        `<g data-part="scale" ${GF}><rect x="3.5" y="8" width="17" height="8" rx="1.6"/></g><g data-part="scale" ${GB}><rect x="7" y="8.4" width="1.2" height="2.8"/><rect x="15.8" y="8.4" width="1.2" height="2.8"/></g>`
      ),
      stencil: `<g fill="currentColor"><g data-part="scale"><rect x="3.5" y="8" width="4.4" height="8" rx="1"/><rect x="8.8" y="8" width="6.4" height="8" rx="1"/><rect x="16.1" y="8" width="4.4" height="8" rx="1"/></g><rect data-part="slider" x="11.1" y="5.8" width="1.8" height="12.4" rx="0.9"/></g>`,
      hardware: `<g data-part="scale"><rect x="3.5" y="8" width="17" height="8" rx="1.4" ${HL}/><rect x="7" y="8.2" width="1.2" height="3" ${HD}/><rect x="15.8" y="8.2" width="1.2" height="3" ${HD}/></g><rect data-part="slider" x="11.1" y="5.8" width="1.8" height="12.4" rx="0.9" ${HA}/>`,
      relief: `<g data-part="scale"><rect transform="translate(1.3,1.3)" x="3.5" y="8" width="17" height="8" rx="1.4" ${RS}/><rect x="3.5" y="8" width="17" height="8" rx="1.4" ${RF}/><line x1="7.5" y1="8" x2="7.5" y2="11.2" ${RF_LINE}/><line x1="16.5" y1="8" x2="16.5" y2="11.2" ${RF_LINE}/></g><line data-part="slider" x1="12" y1="6" x2="12" y2="18" ${RF_LINE}/>`,
    },
  },
  // 157. ERASER
  {
    name: "eraser",
    label: "Eraser",
    category: "Kinetic Tools",
    motionSummary: "Angled rubber eraser scrubs side-to-side sweeping dust from paper",
    soundSummary: "Soft rubber-on-paper scrub rub + dust puff",
    svgs: {
      outline: `<g data-part="body" data-pivot="11 14" ${K}><path d="M7.8 18.8L4.2 15.2A1.6 1.6 0 0 1 4.2 12.9L12.6 4.5A1.6 1.6 0 0 1 14.9 4.5L19.5 9.1A1.6 1.6 0 0 1 19.5 11.4L12.1 18.8Z"/><line x1="8.2" y1="8.9" x2="15.1" y2="15.8" ${K_THIN}/></g><line data-part="dust" x1="13" y1="19" x2="20" y2="19" ${K}/>`,
      solid: `<g data-part="body" data-pivot="11 14" fill="currentColor"><path d="M12.6 4.5A1.6 1.6 0 0 1 14.9 4.5L19.5 9.1A1.6 1.6 0 0 1 19.5 11.4L15.4 15.5L8.5 8.6Z"/><path d="M7.6 9.5L14.5 16.4L12.1 18.8H7.8L4.2 15.2A1.6 1.6 0 0 1 4.2 12.9Z" opacity="0.58"/></g><rect data-part="dust" x="12.5" y="18.2" width="7.8" height="1.6" rx="0.8" fill="currentColor"/>`,
      duotone: `<g data-part="body" data-pivot="11 14"><path d="M7.8 18.8L4.2 15.2A1.6 1.6 0 0 1 4.2 12.9L12.6 4.5A1.6 1.6 0 0 1 14.9 4.5L19.5 9.1A1.6 1.6 0 0 1 19.5 11.4L12.1 18.8Z" ${D}/><line x1="8.2" y1="8.9" x2="15.1" y2="15.8" ${DK_THIN}/></g><line data-part="dust" x1="13" y1="19" x2="20" y2="19" ${DK}/>`,
      glass: glassCompose(
        `<path data-part="body" data-pivot="11 14" d="M7.6 9.5L14.5 16.4L12.1 18.8H7.8L4.2 15.2A1.6 1.6 0 0 1 4.2 12.9Z" ${GB}/><rect data-part="dust" x="12.5" y="18.2" width="7.8" height="1.6" rx="0.8" ${GB}/>`,
        `<path data-part="body" data-pivot="11 14" d="M12.6 4.5A1.6 1.6 0 0 1 14.9 4.5L19.5 9.1A1.6 1.6 0 0 1 19.5 11.4L15.4 15.5L8.5 8.6Z"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="body" data-pivot="11 14"><path d="M12.6 4.5A1.6 1.6 0 0 1 14.9 4.5L19.5 9.1A1.6 1.6 0 0 1 19.5 11.4L15.8 15.1L8.9 8.2Z"/><path d="M7.8 9.3L14.7 16.2L12.1 18.8H7.8L4.2 15.2A1.6 1.6 0 0 1 4.2 12.9Z"/></g><rect data-part="dust" x="12.5" y="18.2" width="7.8" height="1.6" rx="0.8"/></g>`,
      hardware: `<g data-part="body" data-pivot="11 14"><path d="M12.6 4.5A1.6 1.6 0 0 1 14.9 4.5L19.5 9.1A1.6 1.6 0 0 1 19.5 11.4L15.4 15.5L8.5 8.6Z" ${HL}/><path d="M7.6 9.5L14.5 16.4L12.1 18.8H7.8L4.2 15.2A1.6 1.6 0 0 1 4.2 12.9Z" ${HA}/></g><rect data-part="dust" x="12.5" y="18.2" width="7.8" height="1.6" rx="0.8" ${HD}/>`,
      relief: `<g data-part="body" data-pivot="11 14"><path transform="translate(1.3,1.3)" d="M7.8 18.8L4.2 15.2A1.6 1.6 0 0 1 4.2 12.9L12.6 4.5A1.6 1.6 0 0 1 14.9 4.5L19.5 9.1A1.6 1.6 0 0 1 19.5 11.4L12.1 18.8Z" ${RS}/><path d="M7.8 18.8L4.2 15.2A1.6 1.6 0 0 1 4.2 12.9L12.6 4.5A1.6 1.6 0 0 1 14.9 4.5L19.5 9.1A1.6 1.6 0 0 1 19.5 11.4L12.1 18.8Z" ${RF}/><line x1="8.2" y1="8.9" x2="15.1" y2="15.8" ${RF_LINE}/></g><line data-part="dust" x1="13" y1="19" x2="20" y2="19" ${RF_LINE}/>`,
    },
  },
  // 158. PIPETTE
  {
    name: "pipette",
    label: "Eyedropper",
    category: "Kinetic Tools",
    motionSummary: "Rubber dropper bulb squeezes inward releasing a crisp color droplet",
    soundSummary: "Pipette rubber squeeze + liquid color droplet bloop",
    svgs: {
      outline: `<g data-part="bulb" data-pivot="16 8" ${K}><path d="M13.5 6.8L15.8 4.5A2.1 2.1 0 0 1 18.8 7.5L16.5 9.8"/><line x1="11.8" y1="6.4" x2="17" y2="11.6"/></g><path d="M15.2 9.8L8.4 16.6L5.5 17.5L6.4 14.6L13.2 7.8" ${K}/><circle data-part="drop" cx="4.5" cy="19.5" r="1.1" fill="currentColor"/>`,
      solid: `<path data-part="bulb" data-pivot="16 8" fill="currentColor" d="M15.4 4.2A2.3 2.3 0 0 1 19.2 7.2L17.2 9.2L18 10L16.8 11.2L12.2 6.6L13.4 5.4L14.2 6.2Z"/><path fill="currentColor" opacity="0.65" d="M13 8.2L15.2 10.4L8.6 17L5.2 18L6.2 14.6Z"/><circle data-part="drop" cx="4.5" cy="19.6" r="1.2" fill="currentColor"/>`,
      duotone: `<path data-part="bulb" data-pivot="16 8" d="M13.5 6.8L15.8 4.5A2.1 2.1 0 0 1 18.8 7.5L16.5 9.8Z" ${D}/><path d="M11.8 6.4L17 11.6M15.2 9.8L8.4 16.6L5.5 17.5L6.4 14.6L13.2 7.8" ${DK}/><circle data-part="drop" cx="4.5" cy="19.5" r="1.1" fill="currentColor"/>`,
      glass: glassCompose(
        `<path data-part="bulb" data-pivot="16 8" d="M15.4 4.2A2.3 2.3 0 0 1 19.2 7.2L17.2 9.2L14.2 6.2Z" ${GB}/><circle data-part="drop" cx="4.5" cy="19.6" r="1.2" ${GB}/>`,
        `<path d="M13 8.2L15.2 10.4L8.6 17L5.2 18L6.2 14.6Z"/>`
      ),
      stencil: `<g fill="currentColor"><path data-part="bulb" data-pivot="16 8" d="M15.6 4.2A2.2 2.2 0 0 1 19.1 7.3L16.6 9.8L13.5 6.7Z"/><path d="M12.6 7.8L15.6 10.8L8.6 17.2L5.4 18L6.2 14.8Z"/><circle data-part="drop" cx="4.5" cy="19.6" r="1.15"/></g>`,
      hardware: `<path d="M13 8.2L15.2 10.4L8.6 17L5.2 18L6.2 14.6Z" ${HL}/><path data-part="bulb" data-pivot="16 8" d="M15.4 4.2A2.3 2.3 0 0 1 19.2 7.2L17.2 9.2L14.2 6.2Z" ${HD}/><circle data-part="drop" cx="4.5" cy="19.6" r="1.2" ${HA}/>`,
      relief: `<g transform="translate(1.3,1.3)"><path d="M13.5 6.8L15.8 4.5A2.1 2.1 0 0 1 18.8 7.5L16.5 9.8L8.4 16.6L5.5 17.5L6.4 14.6Z" ${RS}/></g><path data-part="bulb" data-pivot="16 8" d="M13.5 6.8L15.8 4.5A2.1 2.1 0 0 1 18.8 7.5L16.5 9.8Z" ${RF}/><path d="M15.2 9.8L8.4 16.6L5.5 17.5L6.4 14.6L13.2 7.8" ${RF}/><circle data-part="drop" cx="4.5" cy="19.5" r="1.1" ${RS}/>`,
    },
  },
  // 159. CROP
  {
    name: "crop",
    label: "Crop",
    category: "Kinetic Tools",
    motionSummary: "Opposing corner brackets slide inward cleanly to frame subject",
    soundSummary: "Camera blade framing snick-snick",
    svgs: {
      outline: `<path data-part="corner-tl" d="M6.5 3.5V15.5A1.5 1.5 0 0 0 8 17H20" ${K}/><path data-part="corner-br" d="M3.5 6.5H15.5A1.5 1.5 0 0 1 17 8V20" ${K}/>`,
      solid: `<g fill="currentColor"><path data-part="corner-tl" d="M5.6 3.5A1.1 1.1 0 0 1 7.8 3.5V16.2H20.5A1.1 1.1 0 0 1 20.5 18.4H7.2A1.6 1.6 0 0 1 5.6 16.8Z"/><path data-part="corner-br" d="M3.5 5.6H16.8A1.6 1.6 0 0 1 18.4 7.2V20.5A1.1 1.1 0 0 1 16.2 20.5V7.8H3.5A1.1 1.1 0 0 1 3.5 5.6Z"/></g>`,
      duotone: `<rect x="7" y="7" width="10" height="10" rx="1" ${D}/><path data-part="corner-tl" d="M6.5 3.5V15.5A1.5 1.5 0 0 0 8 17H20" ${DK}/><path data-part="corner-br" d="M3.5 6.5H15.5A1.5 1.5 0 0 1 17 8V20" ${DK}/>`,
      glass: glassCompose(
        `<path data-part="corner-br" d="M3.5 5.8H16.8A1.4 1.4 0 0 1 18.2 7.2V20.5H16V8H3.5Z" ${GB}/>`,
        `<path data-part="corner-tl" d="M5.8 3.5H8V16H20.5V18.2H7.2A1.4 1.4 0 0 1 5.8 16.8Z"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="corner-tl"><rect x="5.6" y="3.5" width="2.2" height="11" rx="1.1"/><rect x="5.6" y="16.2" width="14.9" height="2.2" rx="1.1"/></g><g data-part="corner-br"><rect x="3.5" y="5.6" width="14.9" height="2.2" rx="1.1"/><rect x="16.2" y="9.5" width="2.2" height="11" rx="1.1"/></g></g>`,
      hardware: `<path data-part="corner-br" d="M3.5 5.6H16.8A1.6 1.6 0 0 1 18.4 7.2V20.5A1.1 1.1 0 0 1 16.2 20.5V7.8H3.5A1.1 1.1 0 0 1 3.5 5.6Z" ${HM}/><path data-part="corner-tl" d="M5.6 3.5A1.1 1.1 0 0 1 7.8 3.5V16.2H20.5A1.1 1.1 0 0 1 20.5 18.4H7.2A1.6 1.6 0 0 1 5.6 16.8Z" ${HA}/>`,
      relief: `<g transform="translate(1.3,1.3)"><path data-part="corner-tl" d="M6.5 3.5V15.5A1.5 1.5 0 0 0 8 17H20" ${RS_LINE}/><path data-part="corner-br" d="M3.5 6.5H15.5A1.5 1.5 0 0 1 17 8V20" ${RS_LINE}/></g><path data-part="corner-tl" d="M6.5 3.5V15.5A1.5 1.5 0 0 0 8 17H20" ${RF_LINE}/><path data-part="corner-br" d="M3.5 6.5H15.5A1.5 1.5 0 0 1 17 8V20" ${RF_LINE}/>`,
    },
  },
  // 160. WAND
  {
    name: "wand",
    label: "Magic Wand",
    category: "Kinetic Tools",
    motionSummary: "Wand flicks upward casting twin twinkling magic sparkles",
    soundSummary: "Crystalline magic wand shimmer glissando",
    svgs: {
      outline: `<line data-part="stick" data-pivot="5 19" x1="4.5" y1="19.5" x2="15" y2="9" ${K}/><g data-part="spark-1" ${K_THIN}><line x1="16.5" y1="4" x2="16.5" y2="8"/><line x1="14.5" y1="6" x2="18.5" y2="6"/></g><g data-part="spark-2" ${K_THIN}><line x1="19.2" y1="10.2" x2="19.2" y2="13.4"/><line x1="17.6" y1="11.8" x2="20.8" y2="11.8"/></g>`,
      solid: `<path data-part="stick" data-pivot="5 19" fill="currentColor" d="M14.2 8.2A1.2 1.2 0 0 1 15.9 9.9L5.9 19.9A1.2 1.2 0 0 1 4.2 18.2Z"/><polygon data-part="spark-1" points="16.5 3.2 17.4 5.5 19.7 6.4 17.4 7.3 16.5 9.6 15.6 7.3 13.3 6.4 15.6 5.5" fill="currentColor"/><polygon data-part="spark-2" points="19.2 9.6 19.9 11.3 21.6 12 19.9 12.7 19.2 14.4 18.5 12.7 16.8 12 18.5 11.3" fill="currentColor"/>`,
      duotone: `<line data-part="stick" data-pivot="5 19" x1="4.5" y1="19.5" x2="15" y2="9" ${DK}/><polygon data-part="spark-1" points="16.5 3.6 17.3 5.7 19.4 6.5 17.3 7.3 16.5 9.4 15.7 7.3 13.6 6.5 15.7 5.7" ${D}/><polygon data-part="spark-2" points="19.2 9.8 19.8 11.4 21.4 12 19.8 12.6 19.2 14.2 18.6 12.6 17 12 18.6 11.4" ${D}/>`,
      glass: glassCompose(
        `<polygon data-part="spark-1" points="16.5 3.4 17.4 5.6 19.6 6.5 17.4 7.4 16.5 9.6 15.6 7.4 13.4 6.5 15.6 5.6" ${GB}/><polygon data-part="spark-2" points="19.2 9.6 19.9 11.3 21.6 12 19.9 12.7 19.2 14.4 18.5 12.7 16.8 12 18.5 11.3" ${GB}/>`,
        `<path data-part="stick" data-pivot="5 19" d="M14.2 8.2A1.2 1.2 0 0 1 15.9 9.9L5.9 19.9A1.2 1.2 0 0 1 4.2 18.2Z"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="stick" data-pivot="5 19"><path d="M14.2 8.2A1.1 1.1 0 0 1 15.8 9.8L13.5 12.1L11.9 10.5Z"/><path d="M10.7 11.7L12.3 13.3L5.8 19.8A1.1 1.1 0 0 1 4.2 18.2Z"/></g><polygon data-part="spark-1" points="16.5 3.4 17.4 5.6 19.6 6.5 17.4 7.4 16.5 9.6 15.6 7.4 13.4 6.5 15.6 5.6"/><circle data-part="spark-2" cx="19.2" cy="12" r="1.4"/></g>`,
      hardware: `<g data-part="stick" data-pivot="5 19"><path d="M11.5 10.9L13.1 12.5L5.8 19.8A1.1 1.1 0 0 1 4.2 18.2Z" ${HD}/><path d="M14.2 8.2A1.1 1.1 0 0 1 15.8 9.8L13.1 12.5L11.5 10.9Z" ${HL}/></g><polygon data-part="spark-1" points="16.5 3.4 17.4 5.6 19.6 6.5 17.4 7.4 16.5 9.6 15.6 7.4 13.4 6.5 15.6 5.6" ${HA}/><circle data-part="spark-2" cx="19.2" cy="12" r="1.4" ${HA}/>`,
      relief: `<line data-part="stick" data-pivot="5 19" x1="4.5" y1="19.5" x2="15" y2="9" ${RF_LINE}/><polygon data-part="spark-1" points="16.5 3.6 17.3 5.7 19.4 6.5 17.3 7.3 16.5 9.4 15.7 7.3 13.6 6.5 15.7 5.7" ${RF}/><polygon data-part="spark-2" points="19.2 9.8 19.8 11.4 21.4 12 19.8 12.6 19.2 14.2 18.6 12.6 17 12 18.6 11.4" ${RF}/>`,
    },
  },
];
