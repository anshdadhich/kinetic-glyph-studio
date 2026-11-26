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
    motionSummary: "Horizontal serrated handsaw strokes back and forth cleanly from ergonomic D-handle",
    soundSummary: "Rhythmic carpenter hand-saw wood rasp strokes",
    svgs: {
      outline: `<g data-part="saw" data-pivot="18 11" ${K}><path d="M15.6 7.4L2.8 9.2V12.4L4 11.3L5.1 12.6L6.3 11.4L7.4 12.7L8.6 11.5L9.7 12.9L10.9 11.6L12 13L13.2 11.7L14.3 13.1L15.6 12.2"/><path d="M15.6 7H19.4C20.5 7 21.3 7.8 21.3 8.9L20.6 14.4A1.5 1.5 0 0 1 19.1 15.7H17.6A1.3 1.3 0 0 1 16.4 14.5L16.5 12.6H15.6Z"/><path d="M17.5 8.8H19.4L19 13.2H17.5Z" ${K_THIN}/></g>`,
      solid: `<g data-part="saw" data-pivot="18 11" fill="currentColor"><path fill-rule="evenodd" d="M15.4 6.9H19.5C20.7 6.9 21.6 7.8 21.5 9L20.7 14.5A1.6 1.6 0 0 1 19.1 15.9H17.5A1.4 1.4 0 0 1 16.2 14.5L16.3 12.7H15.4ZM17.4 8.7V13.3H19.1L19.5 8.7Z"/><path d="M15.5 7.4L2.8 9.2V12.5L4 11.3L5.1 12.7L6.3 11.4L7.4 12.8L8.6 11.5L9.7 13L10.9 11.6L12 13.1L13.2 11.7L14.3 13.2L15.5 12.2Z" opacity="0.8"/></g>`,
      duotone: `<g data-part="saw" data-pivot="18 11"><path d="M15.6 7.4L2.8 9.2V12.4L4 11.3L5.1 12.6L6.3 11.4L7.4 12.7L8.6 11.5L9.7 12.9L10.9 11.6L12 13L13.2 11.7L14.3 13.1L15.6 12.2Z" ${D}/><path fill-rule="evenodd" d="M15.6 7H19.4C20.5 7 21.3 7.8 21.3 8.9L20.6 14.4A1.5 1.5 0 0 1 19.1 15.7H17.6A1.3 1.3 0 0 1 16.4 14.5L16.5 12.6H15.6Z" ${D}/></g>`,
      glass: glassCompose(
        `<path data-part="saw" data-pivot="18 11" fill-rule="evenodd" d="M15.4 6.9H19.5C20.7 6.9 21.6 7.8 21.5 9L20.7 14.5A1.6 1.6 0 0 1 19.1 15.9H17.5A1.4 1.4 0 0 1 16.2 14.5L16.3 12.7H15.4ZM17.4 8.7V13.3H19.1L19.5 8.7Z" ${GB}/>`,
        `<path data-part="saw" data-pivot="18 11" d="M15.6 7.4L2.8 9.2V12.5L4 11.3L5.1 12.7L6.3 11.4L7.4 12.8L8.6 11.5L9.7 13L10.9 11.6L12 13.1L13.2 11.7L14.3 13.2L15.6 12.2Z"/>`,
        `<g data-part="saw" data-pivot="18 11" ${GF}><path d="M15.6 7.4L2.8 9.2V12.5L4 11.3L5.1 12.7L6.3 11.4L7.4 12.8L8.6 11.5L9.7 13L10.9 11.6L12 13.1L13.2 11.7L14.3 13.2L15.6 12.2Z"/></g><line data-part="saw" data-pivot="18 11" x1="4" y1="9.6" x2="14.4" y2="8.2" ${GH}/>`
      ),
      stencil: `<g data-part="saw" data-pivot="18 11" fill="currentColor"><path fill-rule="evenodd" d="M15.8 6.9H19.5C20.7 6.9 21.6 7.8 21.5 9L20.7 14.5A1.6 1.6 0 0 1 19.1 15.9H17.5A1.4 1.4 0 0 1 16.2 14.5L16.3 12.7H15.8ZM17.4 8.7V13.3H19.1L19.5 8.7Z"/><path d="M14.7 7.5L2.8 9.2V12.5L4 11.3L5.1 12.7L6.3 11.4L7.4 12.8L8.6 11.5L9.7 13L10.9 11.6L12 13.1L13.2 11.7L14.3 13.2L14.7 12.8Z"/></g>`,
      hardware: `<g data-part="saw" data-pivot="18 11"><path d="M15.6 7.4L2.8 9.2V12.5L4 11.3L5.1 12.7L6.3 11.4L7.4 12.8L8.6 11.5L9.7 13L10.9 11.6L12 13.1L13.2 11.7L14.3 13.2L15.6 12.2Z" ${HL}/><path fill-rule="evenodd" d="M15.4 6.9H19.5C20.7 6.9 21.6 7.8 21.5 9L20.7 14.5A1.6 1.6 0 0 1 19.1 15.9H17.5A1.4 1.4 0 0 1 16.2 14.5L16.3 12.7H15.4ZM17.4 8.7V13.3H19.1L19.5 8.7Z" ${HA}/></g>`,
      relief: `<g data-part="saw" data-pivot="18 11"><path transform="translate(1.3,1.3)" d="M15.6 7.4L2.8 9.2V12.5L4 11.3L5.1 12.7L6.3 11.4L7.4 12.8L8.6 11.5L9.7 13L10.9 11.6L12 13.1L13.2 11.7L14.3 13.2L15.6 12.2Z" ${RS}/><path d="M15.6 7.4L2.8 9.2V12.5L4 11.3L5.1 12.7L6.3 11.4L7.4 12.8L8.6 11.5L9.7 13L10.9 11.6L12 13.1L13.2 11.7L14.3 13.2L15.6 12.2Z" ${RF}/><path fill-rule="evenodd" d="M15.6 7H19.4C20.5 7 21.3 7.8 21.3 8.9L20.6 14.4A1.5 1.5 0 0 1 19.1 15.7H17.6A1.3 1.3 0 0 1 16.4 14.5L16.5 12.6H15.6Z" ${RF}/></g>`,
    },
  },
  // 152. DRILL
  {
    name: "drill",
    label: "Power Drill",
    category: "Kinetic Tools",
    motionSummary: "Drill chassis kicks lightly while spiral bit bores forward",
    soundSummary: "Electric drill chuck spin + helical bit bore",
    svgs: {
      outline: `<g data-part="body" ${K}><path d="M4.8 6.8H13.4A1.4 1.4 0 0 1 14.8 8.2V11.6A1.4 1.4 0 0 1 13.4 13H9.2L7.8 19H4.6L5.8 13H4.8A2.8 2.8 0 0 1 4.8 6.8Z"/><path d="M9 13L10.4 14.6" ${K_THIN}/><line x1="6.6" y1="9.9" x2="10.4" y2="9.9" ${K_THIN}/><line x1="3.8" y1="19" x2="9" y2="19"/></g><g data-part="bit" ${K}><rect x="14.8" y="8.2" width="2.4" height="3.4" rx="0.6"/><line x1="17.2" y1="9.9" x2="21.6" y2="9.9"/></g>`,
      solid: `<path data-part="body" fill="currentColor" d="M5.2 6.6H13.6A1.4 1.4 0 0 1 15 8V11.8A1.4 1.4 0 0 1 13.6 13.2H9.2L8.2 18.2H9.4V19.6H3.8V18.2H5L6 13.2H5.2A3.3 3.3 0 0 1 5.2 6.6Z"/><path data-part="bit" fill="currentColor" d="M15.4 8H17.5V9.2H21.6A0.7 0.7 0 0 1 21.6 10.6H17.5V11.8H15.4Z"/>`,
      duotone: `<g data-part="body"><path d="M4.8 6.8H13.4A1.4 1.4 0 0 1 14.8 8.2V11.6A1.4 1.4 0 0 1 13.4 13H9.2L7.8 19H4.6L5.8 13H4.8A2.8 2.8 0 0 1 4.8 6.8Z" ${D}/><line x1="3.8" y1="19" x2="9" y2="19" ${DK}/></g><g data-part="bit" ${DK}><rect x="14.8" y="8.2" width="2.4" height="3.4" rx="0.6" ${D}/><line x1="17.2" y1="9.9" x2="21.6" y2="9.9"/></g>`,
      glass: glassCompose(
        `<path data-part="bit" d="M15.2 8.2H17.5V9.2H21.6A0.7 0.7 0 0 1 21.6 10.6H17.5V11.6H15.2Z" ${GB}/>`,
        `<path data-part="body" d="M5.2 6.6H13.6A1.4 1.4 0 0 1 15 8V11.8A1.4 1.4 0 0 1 13.6 13.2H9.2L8.2 18.2H9.4V19.6H3.8V18.2H5L6 13.2H5.2A3.3 3.3 0 0 1 5.2 6.6Z"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="body"><path d="M5.2 6.8H14.6V13H5.2A3.1 3.1 0 0 1 5.2 6.8Z"/><polygon points="6.1 14 8.9 14 7.7 19.2 4.9 19.2"/></g><path data-part="bit" d="M15.8 8.2H17.6V9.2H21.6V10.6H17.6V11.6H15.8Z"/></g>`,
      hardware: `<g data-part="body"><polygon points="6 13 8.8 13 7.6 19.2 4.6 19.2" ${HD}/><rect x="2.8" y="6.6" width="12.2" height="6.6" rx="2.7" ${HL}/><circle cx="6.2" cy="9.9" r="1.2" ${HA}/></g><g data-part="bit"><rect x="15" y="8.1" width="2.4" height="3.6" rx="0.6" ${HD}/><rect x="17.4" y="9.2" width="4.2" height="1.4" rx="0.7" ${HM}/></g>`,
      relief: `<g data-part="body"><path transform="translate(1.3,1.3)" d="M5.2 6.6H13.6A1.4 1.4 0 0 1 15 8V11.8A1.4 1.4 0 0 1 13.6 13.2H9.2L7.8 19H4.6L6 13.2H5.2A3.3 3.3 0 0 1 5.2 6.6Z" ${RS}/><path d="M5.2 6.6H13.6A1.4 1.4 0 0 1 15 8V11.8A1.4 1.4 0 0 1 13.6 13.2H9.2L7.8 19H4.6L6 13.2H5.2A3.3 3.3 0 0 1 5.2 6.6Z" ${RF}/></g><g data-part="bit" ${RF_LINE}><rect x="15" y="8.2" width="2.2" height="3.4" rx="0.5" ${RF}/><line x1="17.2" y1="9.9" x2="21.6" y2="9.9"/></g>`,
    },
  },
  // 153. SCREWDRIVER
  {
    name: "screwdriver",
    label: "Screwdriver",
    category: "Kinetic Tools",
    motionSummary: "Fluted driver turns with crisp rotational twist and downward drive",
    soundSummary: "Fine mechanical ratchet clicks + seated screw snap",
    svgs: {
      outline: `<g data-part="driver" data-pivot="12 12" ${K}><path d="M16.2 3.8A1.7 1.7 0 0 1 18.6 3.8L20.2 5.4A1.7 1.7 0 0 1 20.2 7.8L16.9 11.1L12.9 7.1Z"/><line x1="14.5" y1="9.5" x2="6.6" y2="17.4"/><path d="M6.6 17.4L4.2 19.8L3.7 19.3L5.6 16.4Z" fill="currentColor" stroke="none"/><path d="M7.6 18.4L4.7 20.3L4.2 19.8L6.6 17.4Z" fill="currentColor" stroke="none"/></g>`,
      solid: `<g data-part="driver" data-pivot="12 12" fill="currentColor"><path d="M16.2 3.6A1.8 1.8 0 0 1 18.7 3.6L20.4 5.3A1.8 1.8 0 0 1 20.4 7.8L16.9 11.3L12.7 7.1Z"/><path d="M13.5 9.4L14.6 10.5L7.4 17.7L6.7 19.2L4.2 20.2L5.2 17.7L6.3 16.6Z"/></g>`,
      duotone: `<g data-part="driver" data-pivot="12 12"><path d="M16.2 3.8A1.7 1.7 0 0 1 18.6 3.8L20.2 5.4A1.7 1.7 0 0 1 20.2 7.8L16.9 11.1L12.9 7.1Z" ${D}/><line x1="14.5" y1="9.5" x2="6.4" y2="17.6" ${DK}/><path d="M6.4 17.6L4.2 19.8L5.2 16.4Z" fill="currentColor"/></g>`,
      glass: glassCompose(
        `<path data-part="driver" data-pivot="12 12" d="M13.5 9.4L14.6 10.5L7.4 17.7L4.2 19.8L6.3 16.6Z" ${GB}/>`,
        `<path data-part="driver" data-pivot="12 12" d="M16.2 3.6A1.8 1.8 0 0 1 18.7 3.6L20.4 5.3A1.8 1.8 0 0 1 20.4 7.8L16.9 11.3L12.7 7.1Z"/>`
      ),
      stencil: `<g data-part="driver" data-pivot="12 12" fill="currentColor"><path d="M16.2 3.6A1.8 1.8 0 0 1 18.7 3.6L20.4 5.3A1.8 1.8 0 0 1 20.4 7.8L17.3 10.9L13.1 6.7Z"/><polygon points="12.5 10.2 13.8 11.5 6.8 18.5 4.2 19.8 5.5 17.2"/></g>`,
      hardware: `<g data-part="driver" data-pivot="12 12"><path d="M13.5 9.4L14.6 10.5L7.4 17.7L4.2 19.8L6.3 16.6Z" ${HL}/><path d="M16.2 3.6A1.8 1.8 0 0 1 18.7 3.6L20.4 5.3A1.8 1.8 0 0 1 20.4 7.8L16.9 11.3L12.7 7.1Z" ${HA}/></g>`,
      relief: `<g data-part="driver" data-pivot="12 12"><path transform="translate(1.3,1.3)" d="M16.2 3.6A1.8 1.8 0 0 1 18.7 3.6L20.4 5.3A1.8 1.8 0 0 1 20.4 7.8L16.9 11.3L12.7 7.1Z" ${RS}/><path d="M16.2 3.6A1.8 1.8 0 0 1 18.7 3.6L20.4 5.3A1.8 1.8 0 0 1 20.4 7.8L16.9 11.3L12.7 7.1Z" ${RF}/><line x1="14.5" y1="9.5" x2="5.2" y2="18.8" ${RF_LINE}/></g>`,
    },
  },
  // 154. AXE
  {
    name: "axe",
    label: "Axe",
    category: "Kinetic Tools",
    motionSummary: "Forged axe winds up and swings down sharply sending wood chip flying",
    soundSummary: "Crisp timber chop impact + flying wood splinter",
    svgs: {
      outline: `<g data-part="axe" data-pivot="6 18" ${K}><path d="M4.1 18.7L14.4 8.4L15.9 9.9L5.6 20.2A1.05 1.05 0 0 1 4.1 18.7Z"/><path d="M12.1 7.6L14.7 3.7C17.9 5.1 20.1 7.9 20.8 11.6L16.9 14.3C16.2 12 14.9 10.4 13.1 9.7Z"/></g><polygon data-part="chip" points="16.4 16 19.5 15 18.2 18" fill="currentColor"/>`,
      solid: `<g data-part="axe" data-pivot="6 18" fill="currentColor"><path d="M4 18.6L14.4 8.2L16 9.8L5.6 20.2A1.1 1.1 0 0 1 4 18.6Z"/><path d="M11.9 7.6L14.6 3.5C18.1 5 20.3 7.9 21 11.8L16.9 14.6C16.2 12.1 14.8 10.4 13 9.7Z"/></g><polygon data-part="chip" points="16.4 16 19.5 15 18.2 18" fill="currentColor"/>`,
      duotone: `<g data-part="axe" data-pivot="6 18"><path d="M4.1 18.7L14.4 8.4L15.9 9.9L5.6 20.2A1.05 1.05 0 0 1 4.1 18.7Z" ${DK}/><path d="M12.1 7.6L14.7 3.7C17.9 5.1 20.1 7.9 20.8 11.6L16.9 14.3C16.2 12 14.9 10.4 13.1 9.7Z" ${D}/></g><polygon data-part="chip" points="16.4 16 19.5 15 18.2 18" fill="currentColor"/>`,
      glass: glassCompose(
        `<path data-part="axe" data-pivot="6 18" d="M4 18.6L14.4 8.2L16 9.8L5.6 20.2A1.1 1.1 0 0 1 4 18.6Z" ${GB}/><polygon data-part="chip" points="16.4 16 19.5 15 18.2 18" ${GB}/>`,
        `<path data-part="axe" data-pivot="6 18" d="M11.9 7.6L14.6 3.5C18.1 5 20.3 7.9 21 11.8L16.9 14.6C16.2 12.1 14.8 10.4 13 9.7Z"/>`,
        `<g data-part="axe" data-pivot="6 18" ${GF}><path d="M11.9 7.6L14.6 3.5C18.1 5 20.3 7.9 21 11.8L16.9 14.6C16.2 12.1 14.8 10.4 13 9.7Z"/></g><path data-part="axe" data-pivot="6 18" d="M18.6 6.2C19.6 7.5 20.1 9.1 20.3 10.8" ${GH}/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="axe" data-pivot="6 18"><path d="M4 18.6L12 10.6L13.6 12.2L5.6 20.2A1.1 1.1 0 0 1 4 18.6Z"/><path d="M11.9 7.6L14.6 3.5C18.1 5 20.3 7.9 21 11.8L16.9 14.6C16.2 12.1 14.8 10.4 13 9.7Z"/></g><polygon data-part="chip" points="16.4 16 19.5 15 18.2 18"/></g>`,
      hardware: `<g data-part="axe" data-pivot="6 18"><path d="M4 18.6L14.4 8.2L16 9.8L5.6 20.2A1.1 1.1 0 0 1 4 18.6Z" ${HD}/><path d="M11.9 7.6L14.6 3.5C18.1 5 20.3 7.9 21 11.8L16.9 14.6C16.2 12.1 14.8 10.4 13 9.7Z" ${HL}/></g><polygon data-part="chip" points="16.4 16 19.5 15 18.2 18" ${HA}/>`,
      relief: `<g data-part="axe" data-pivot="6 18"><path transform="translate(1.3,1.3)" d="M11.9 7.6L14.6 3.5C18.1 5 20.3 7.9 21 11.8L16.9 14.6C16.2 12.1 14.8 10.4 13 9.7Z" ${RS}/><path d="M4 18.6L14.4 8.2L16 9.8L5.6 20.2A1.1 1.1 0 0 1 4 18.6Z" ${RF}/><path d="M11.9 7.6L14.6 3.5C18.1 5 20.3 7.9 21 11.8L16.9 14.6C16.2 12.1 14.8 10.4 13 9.7Z" ${RF}/></g><polygon data-part="chip" points="16.4 16 19.5 15 18.2 18" ${RS}/>`,
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
