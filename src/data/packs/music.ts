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
  triSpokes,
} from "../shared";

// Guitar: upright acoustic with pegged headstock, three strings, soundhole, bridge and plectrum
const GTR_HEAD = `<rect x="9.7" y="2.6" width="4.6" height="3.5" rx="1"/><circle cx="9.15" cy="3.5" r="0.62"/><circle cx="9.15" cy="5.2" r="0.62"/><circle cx="14.85" cy="3.5" r="0.62"/><circle cx="14.85" cy="5.2" r="0.62"/>`;
const GTR_NECK = `<path d="M10.5 6.1V11.3H13.5V6.1Z"/>`;
const GTR_BODY = "M12 10.1C10.4 10.1 9.1 11.2 8.9 12.7C8.8 13.9 9.3 14.9 10.1 15.5C8.7 16.2 7.8 17.5 7.8 18.9C7.8 20.7 9.7 22.1 12 22.1C14.3 22.1 16.2 20.7 16.2 18.9C16.2 17.5 15.3 16.2 13.9 15.5C14.7 14.9 15.2 13.9 15.1 12.7C14.9 11.2 13.6 10.1 12 10.1Z";
const GTR_HOLE = `<circle cx="12" cy="16.8" r="1.45"/>`;
const GTR_BRIDGE = `<rect x="10.5" y="19.3" width="3" height="1.1" rx="0.4"/>`;
const GTR_STRINGS = `<line x1="11.2" y1="6.3" x2="11.2" y2="19.5"/><line x1="12" y1="6.3" x2="12" y2="19.5"/><line x1="12.8" y1="6.3" x2="12.8" y2="19.5"/>`;
const GTR_PICK = `<path d="M13.9 13.2L15.5 13.9L14.3 15.2Z"/>`;

export const MUSIC_ICONS: IconDef[] = [
  // 101. GUITAR
  {
    name: "guitar",
    label: "Guitar",
    category: "Studio & Sound",
    motionSummary: "Plectrum strums across strings while acoustic body tilts with resonance",
    soundSummary: "Warm six-string acoustic chord strum with pick attack",
    svgs: {
      outline: `<g data-part="body" data-pivot="12 20" ${K}><path d="${GTR_BODY}"/>${GTR_HOLE}${GTR_BRIDGE}</g><g data-part="neck" data-pivot="12 10.5" ${K}>${GTR_HEAD}${GTR_NECK}</g><g data-part="strings" data-pivot="12 13" ${K_THIN}>${GTR_STRINGS}</g><path data-part="pick" data-pivot="14.6 14.2" d="${GTR_PICK}" fill="currentColor" stroke="none"/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><g fill="#000">${GTR_HOLE}${GTR_BRIDGE}</g><g stroke="#000" stroke-width="0.85" stroke-linecap="round">${GTR_STRINGS}</g></mask></defs><g data-part="neck" data-pivot="12 10.5" fill="currentColor" mask="url(#__GID__-m1)">${GTR_HEAD}${GTR_NECK}</g><path data-part="body" data-pivot="12 20" fill="currentColor" mask="url(#__GID__-m1)" d="${GTR_BODY}"/><path data-part="pick" data-pivot="14.6 14.2" d="${GTR_PICK}" fill="currentColor"/>`,
      duotone: `<g data-part="body" data-pivot="12 20"><path d="${GTR_BODY}" ${D}/><g ${DK_THIN}>${GTR_HOLE}${GTR_BRIDGE}</g></g><g data-part="neck" data-pivot="12 10.5"><g ${D}>${GTR_HEAD}${GTR_NECK}</g></g><g data-part="strings" data-pivot="12 13" ${DK_THIN}>${GTR_STRINGS}</g><path data-part="pick" data-pivot="14.6 14.2" d="${GTR_PICK}" fill="currentColor"/>`,
      glass: glassCompose(
        `<path d="${GTR_BODY}" ${GB}/><g ${GB}>${GTR_HEAD}${GTR_NECK}</g>`,
        ``,
        `<g data-part="body" data-pivot="12 20"><path d="${GTR_BODY}" ${GF}/><circle cx="12" cy="16.8" r="1.45" ${GB}/><rect x="10.5" y="19.3" width="3" height="1.1" rx="0.4" ${GB}/></g><g data-part="neck" data-pivot="12 10.5"><g ${GF}>${GTR_HEAD}${GTR_NECK}</g></g><g data-part="strings" data-pivot="12 13" ${GBS} stroke-width="1.2">${GTR_STRINGS}</g><path data-part="pick" data-pivot="14.6 14.2" d="${GTR_PICK}" ${GH}/>`
      ),
      stencil: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><g fill="#000">${GTR_HOLE}${GTR_BRIDGE}</g><g stroke="#000" stroke-width="0.9" stroke-linecap="round">${GTR_STRINGS}</g></mask></defs><g data-part="neck" data-pivot="12 10.5" fill="currentColor" mask="url(#__GID__-m1)">${GTR_HEAD}${GTR_NECK}</g><path data-part="body" data-pivot="12 20" fill="currentColor" mask="url(#__GID__-m1)" d="${GTR_BODY}"/><path data-part="pick" data-pivot="14.6 14.2" d="${GTR_PICK}" fill="currentColor"/>`,
      hardware: `<g data-part="body" data-pivot="12 20"><path d="${GTR_BODY}" ${HL}/><circle cx="12" cy="16.8" r="1.45" ${HD}/><rect x="10.5" y="19.3" width="3" height="1.1" rx="0.4" ${HA}/></g><g data-part="neck" data-pivot="12 10.5"><rect x="9.7" y="2.6" width="4.6" height="3.5" rx="1" ${HM}/><path d="M10.5 6.1V11.3H13.5V6.1Z" ${HD}/><g ${HA}><circle cx="9.15" cy="3.5" r="0.62"/><circle cx="9.15" cy="5.2" r="0.62"/><circle cx="14.85" cy="3.5" r="0.62"/><circle cx="14.85" cy="5.2" r="0.62"/></g></g><g data-part="strings" data-pivot="12 13" stroke="#52525b" stroke-width="1.1" stroke-linecap="round">${GTR_STRINGS}</g><path data-part="pick" data-pivot="14.6 14.2" d="${GTR_PICK}" ${HA}/>`,
      relief: `<g data-part="body" data-pivot="12 20"><path transform="translate(1.4,1.4)" d="${GTR_BODY}" ${RS}/><path d="${GTR_BODY}" ${RF}/><circle cx="12" cy="16.8" r="1.45" ${RS}/><rect x="10.5" y="19.3" width="3" height="1.1" rx="0.4" ${RF}/></g><g data-part="neck" data-pivot="12 10.5"><g transform="translate(1.4,1.4)" ${RS}>${GTR_HEAD}${GTR_NECK}</g><g ${RF}>${GTR_HEAD}${GTR_NECK}</g></g><g data-part="strings" data-pivot="12 13" ${RF_LINE} stroke-width="1.1">${GTR_STRINGS}</g><path data-part="pick" data-pivot="14.6 14.2" d="${GTR_PICK}" ${RF}/>`,
    },
  },
  // 102. DRUM
  {
    name: "drum",
    label: "Drum",
    category: "Studio & Sound",
    motionSummary: "Twin drumsticks strike drumhead in rapid left-right roll as membrane flexes",
    soundSummary: "Crisp twin snare-tom drum roll hit",
    svgs: {
      outline: `<line data-part="stick-l" data-pivot="4.5 4.5" x1="4.5" y1="4.5" x2="10.2" y2="9.2" ${K}/><line data-part="stick-r" data-pivot="19.5 4.5" x1="19.5" y1="4.5" x2="13.8" y2="9.2" ${K}/><ellipse data-part="head" data-pivot="12 10.8" cx="12" cy="10.8" rx="7.5" ry="2.6" ${K}/><g data-part="shell" ${K}><path d="M4.5 10.8V17.4C4.5 18.8 7.9 20 12 20C16.1 20 19.5 18.8 19.5 17.4V10.8"/><path d="M8 13.1V19.6M12 13.4V20M16 13.1V19.6" ${K_THIN}/></g>`,
      solid: `<line data-part="stick-l" data-pivot="4.5 4.5" x1="4.5" y1="4.5" x2="10.2" y2="9.2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line data-part="stick-r" data-pivot="19.5 4.5" x1="19.5" y1="4.5" x2="13.8" y2="9.2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><ellipse data-part="head" data-pivot="12 10.8" cx="12" cy="10.8" rx="7.6" ry="2.7" fill="currentColor"/><path data-part="shell" fill="currentColor" d="M4.4 12.6C6.1 13.8 8.9 14.3 12 14.3C15.1 14.3 17.9 13.8 19.6 12.6V17.5C19.6 19 16.2 20.2 12 20.2C7.8 20.2 4.4 19 4.4 17.5Z"/>`,
      duotone: `<line data-part="stick-l" data-pivot="4.5 4.5" x1="4.5" y1="4.5" x2="10.2" y2="9.2" ${DK}/><line data-part="stick-r" data-pivot="19.5 4.5" x1="19.5" y1="4.5" x2="13.8" y2="9.2" ${DK}/><ellipse data-part="head" data-pivot="12 10.8" cx="12" cy="10.8" rx="7.5" ry="2.6" ${D}/><g data-part="shell"><path d="M4.5 10.8V17.4C4.5 18.8 7.9 20 12 20C16.1 20 19.5 18.8 19.5 17.4V10.8" ${D}/><path d="M8 13.1V19.6M12 13.4V20M16 13.1V19.6" ${DK_THIN}/></g>`,
      glass: glassCompose(
        `<line data-part="stick-l" data-pivot="4.5 4.5" x1="4.5" y1="4.5" x2="10.2" y2="9.2" ${GBS}/><line data-part="stick-r" data-pivot="19.5 4.5" x1="19.5" y1="4.5" x2="13.8" y2="9.2" ${GBS}/><ellipse data-part="head" data-pivot="12 10.8" cx="12" cy="10.8" rx="7.5" ry="2.6" ${GB}/>`,
        `<path data-part="shell" data-pivot="12 16" d="M4.5 12.4C6.2 13.6 9 14.1 12 14.1C15 14.1 17.8 13.6 19.5 12.4V17.5C19.5 19 16.1 20.2 12 20.2C7.9 20.2 4.5 19 4.5 17.5Z"/>`
      ),
      stencil: `<line data-part="stick-l" data-pivot="4.5 4.5" x1="4.5" y1="4.5" x2="10.2" y2="9.2" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><line data-part="stick-r" data-pivot="19.5 4.5" x1="19.5" y1="4.5" x2="13.8" y2="9.2" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><ellipse data-part="head" data-pivot="12 10.8" cx="12" cy="10.8" rx="7.4" ry="2.4" fill="currentColor"/><g data-part="shell" fill="currentColor"><path d="M4.6 13.2C6.2 14.1 8.6 14.6 11.2 14.7V20C7.5 19.8 4.6 18.7 4.6 17.4Z"/><path d="M19.4 13.2C17.8 14.1 15.4 14.6 12.8 14.7V20C16.5 19.8 19.4 18.7 19.4 17.4Z"/></g>`,
      hardware: `<line data-part="stick-l" data-pivot="4.5 4.5" x1="4.5" y1="4.5" x2="10.2" y2="9.2" stroke="#52525b" stroke-width="2" stroke-linecap="round"/><line data-part="stick-r" data-pivot="19.5 4.5" x1="19.5" y1="4.5" x2="13.8" y2="9.2" stroke="#ff6b35" stroke-width="2" stroke-linecap="round"/><path data-part="shell" d="M4.4 12.6C6.1 13.8 8.9 14.3 12 14.3C15.1 14.3 17.9 13.8 19.6 12.6V17.5C19.6 19 16.2 20.2 12 20.2C7.8 20.2 4.4 19 4.4 17.5Z" ${HD}/><ellipse data-part="head" data-pivot="12 10.8" cx="12" cy="10.8" rx="7.6" ry="2.7" ${HL}/>`,
      relief: `<line data-part="stick-l" data-pivot="4.5 4.5" x1="4.5" y1="4.5" x2="10.2" y2="9.2" ${RF_LINE}/><line data-part="stick-r" data-pivot="19.5 4.5" x1="19.5" y1="4.5" x2="13.8" y2="9.2" ${RF_LINE}/><g data-part="shell"><path transform="translate(1.4,1.4)" d="M4.5 10.8V17.4C4.5 18.8 7.9 20 12 20C16.1 20 19.5 18.8 19.5 17.4V10.8Z" ${RS}/><path d="M4.5 10.8V17.4C4.5 18.8 7.9 20 12 20C16.1 20 19.5 18.8 19.5 17.4V10.8Z" ${RF}/></g><ellipse data-part="head" data-pivot="12 10.8" cx="12" cy="10.8" rx="7.5" ry="2.6" ${RF}/>`,
    },
  },
  // 103. PIANO
  {
    name: "piano",
    label: "Piano Keys",
    category: "Studio & Sound",
    motionSummary: "Three ivory piano keys depress in an ascending major arpeggio cascade",
    soundSummary: "Warm three-note grand piano triad arpeggio",
    svgs: {
      outline: `<rect x="3.5" y="4.5" width="17" height="15" rx="1.8" ${K}/><g data-part="key-1" data-pivot="6.3 5"><line x1="9.2" y1="4.5" x2="9.2" y2="19.5" ${K_THIN}/></g><g data-part="key-2" data-pivot="12 5"><line x1="14.8" y1="4.5" x2="14.8" y2="19.5" ${K_THIN}/></g><rect data-part="key-3" data-pivot="17.6 5" x="15.4" y="13.5" width="4.4" height="5" fill="currentColor" opacity="0.12"/><g data-part="sharps" fill="currentColor"><rect x="7.8" y="4.5" width="2.8" height="8.5" rx="0.6"/><rect x="13.4" y="4.5" width="2.8" height="8.5" rx="0.6"/></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><g data-part="sharps" fill="#000"><rect x="7.5" y="4.2" width="3" height="9" rx="0.8"/><rect x="13.5" y="4.2" width="3" height="9" rx="0.8"/></g></mask></defs><g mask="url(#__GID__-m1)" fill="currentColor"><rect data-part="key-1" data-pivot="6.3 5" x="3.5" y="4.5" width="5.2" height="15" rx="1.2"/><rect data-part="key-2" data-pivot="12 5" x="9.4" y="4.5" width="5.2" height="15" rx="1.2"/><rect data-part="key-3" data-pivot="17.6 5" x="15.3" y="4.5" width="5.2" height="15" rx="1.2"/></g>`,
      duotone: `<rect data-part="key-1" data-pivot="6.3 5" x="3.5" y="4.5" width="5.7" height="15" rx="1" ${D}/><rect data-part="key-2" data-pivot="12 5" x="9.2" y="4.5" width="5.6" height="15" rx="1" ${D}/><rect data-part="key-3" data-pivot="17.6 5" x="14.8" y="4.5" width="5.7" height="15" rx="1" ${D}/><g data-part="sharps" fill="currentColor"><rect x="7.8" y="4.5" width="2.8" height="8.5" rx="0.6"/><rect x="13.4" y="4.5" width="2.8" height="8.5" rx="0.6"/></g>`,
      glass: glassCompose(
        `<g data-part="sharps" ${GB}><rect x="7.6" y="4.5" width="2.8" height="8.6" rx="0.7"/><rect x="13.6" y="4.5" width="2.8" height="8.6" rx="0.7"/></g>`,
        `<g><rect data-part="key-1" data-pivot="6.3 5" x="3.5" y="4.5" width="5.2" height="15" rx="1.2"/><rect data-part="key-2" data-pivot="12 5" x="9.4" y="4.5" width="5.2" height="15" rx="1.2"/><rect data-part="key-3" data-pivot="17.6 5" x="15.3" y="4.5" width="5.2" height="15" rx="1.2"/></g>`
      ),
      stencil: `<g fill="currentColor"><rect data-part="key-1" data-pivot="6.3 5" x="3.5" y="13.6" width="5" height="5.8" rx="0.8"/><rect data-part="key-2" data-pivot="12 5" x="9.5" y="13.6" width="5" height="5.8" rx="0.8"/><rect data-part="key-3" data-pivot="17.6 5" x="15.5" y="13.6" width="5" height="5.8" rx="0.8"/></g><g data-part="sharps" fill="currentColor"><rect x="4" y="4.5" width="2.6" height="7.8" rx="0.5"/><rect x="7.8" y="4.5" width="2.8" height="8" rx="0.5"/><rect x="13.4" y="4.5" width="2.8" height="8" rx="0.5"/><rect x="17.4" y="4.5" width="2.6" height="7.8" rx="0.5"/></g>`,
      hardware: `<rect data-part="key-1" data-pivot="6.3 5" x="3.5" y="4.5" width="5.2" height="15" rx="1.1" ${HL}/><rect data-part="key-2" data-pivot="12 5" x="9.4" y="4.5" width="5.2" height="15" rx="1.1" ${HL}/><rect data-part="key-3" data-pivot="17.6 5" x="15.3" y="4.5" width="5.2" height="15" rx="1.1" ${HL}/><g data-part="sharps"><rect x="7.6" y="4.5" width="2.8" height="8.6" rx="0.7" ${HD}/><rect x="13.6" y="4.5" width="2.8" height="8.6" rx="0.7" ${HA}/></g>`,
      relief: `<rect transform="translate(1.4,1.4)" x="3.5" y="4.5" width="17" height="15" rx="1.8" ${RS}/><rect data-part="key-1" data-pivot="6.3 5" x="3.5" y="4.5" width="5.7" height="15" rx="1" ${RF}/><rect data-part="key-2" data-pivot="12 5" x="9.2" y="4.5" width="5.6" height="15" rx="1" ${RF}/><rect data-part="key-3" data-pivot="17.6 5" x="14.8" y="4.5" width="5.7" height="15" rx="1" ${RF}/><g data-part="sharps"><rect x="7.8" y="4.5" width="2.8" height="8.5" rx="0.6" ${RS}/><rect x="13.4" y="4.5" width="2.8" height="8.5" rx="0.6" ${RS}/></g>`,
    },
  },
  // 104. TRUMPET
  {
    name: "trumpet",
    label: "Trumpet",
    category: "Studio & Sound",
    motionSummary: "Brass horn lifts as piston valves depress and sound rays flare",
    soundSummary: "Bright brass jazz fanfare fifth",
    svgs: {
      outline: `<g data-part="horn" data-pivot="6 13" ${K}><path d="M3 13H12.2C14.6 13 16.8 10.6 18.2 8.2V17.8C16.8 15.4 14.6 13 12.2 13"/><path d="M7.5 13V15.5A1.8 1.8 0 0 0 9.3 17.3H12A1.8 1.8 0 0 0 13.8 15.5V13"/></g><g data-part="valves" ${K_THIN}><line x1="9" y1="13" x2="9" y2="9.4"/><line x1="11" y1="13" x2="11" y2="9.4"/><line x1="13" y1="13" x2="13" y2="9.4"/></g><g data-part="blast" data-pivot="19.5 13" ${K_THIN}><line x1="20.2" y1="10.5" x2="22" y2="9.2"/><line x1="20.4" y1="13" x2="22.4" y2="13"/><line x1="20.2" y1="15.5" x2="22" y2="16.8"/></g>`,
      solid: `<g data-part="horn" data-pivot="6 13" fill="currentColor"><path d="M2.8 12.1H12.2C14.6 12.1 16.8 9.8 18.5 7.6V18.4C16.8 16.2 14.6 13.9 12.2 13.9H2.8Z"/><path d="M7.4 13.5V15.6A2 2 0 0 0 9.4 17.6H12A2 2 0 0 0 14 15.6V13.5" fill="none" stroke="currentColor" stroke-width="1.7"/></g><g data-part="valves" fill="currentColor"><rect x="8.3" y="9" width="1.4" height="3.6" rx="0.6"/><rect x="10.3" y="9" width="1.4" height="3.6" rx="0.6"/><rect x="12.3" y="9" width="1.4" height="3.6" rx="0.6"/></g><g data-part="blast" data-pivot="19.5 13" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><line x1="20.2" y1="10.5" x2="22" y2="9.2"/><line x1="20.4" y1="13" x2="22.4" y2="13"/><line x1="20.2" y1="15.5" x2="22" y2="16.8"/></g>`,
      duotone: `<g data-part="horn" data-pivot="6 13"><path d="M12.2 13C14.6 13 16.8 10.6 18.2 8.2V17.8C16.8 15.4 14.6 13 12.2 13Z" ${D}/><path d="M3 13H12.2M7.5 13V15.5A1.8 1.8 0 0 0 9.3 17.3H12A1.8 1.8 0 0 0 13.8 15.5V13" ${DK}/></g><g data-part="valves" ${DK_THIN}><line x1="9" y1="13" x2="9" y2="9.4"/><line x1="11" y1="13" x2="11" y2="9.4"/><line x1="13" y1="13" x2="13" y2="9.4"/></g><g data-part="blast" data-pivot="19.5 13" ${DK_THIN}><line x1="20.2" y1="10.5" x2="22" y2="9.2"/><line x1="20.4" y1="13" x2="22.4" y2="13"/><line x1="20.2" y1="15.5" x2="22" y2="16.8"/></g>`,
      glass: glassCompose(
        `<g data-part="valves" ${GB}><rect x="8.3" y="9" width="1.4" height="3.8" rx="0.6"/><rect x="10.3" y="9" width="1.4" height="3.8" rx="0.6"/><rect x="12.3" y="9" width="1.4" height="3.8" rx="0.6"/></g><g data-part="blast" data-pivot="19.5 13" ${GBS}><line x1="20.2" y1="10.5" x2="22" y2="9.2"/><line x1="20.4" y1="13" x2="22.4" y2="13"/><line x1="20.2" y1="15.5" x2="22" y2="16.8"/></g>`,
        `<path data-part="horn" data-pivot="6 13" d="M2.8 12H12.2C14.6 12 16.8 9.8 18.5 7.6V18.4C16.8 16.2 14.6 14 12.2 14H2.8Z"/>`
      ),
      stencil: `<g data-part="horn" data-pivot="6 13" fill="currentColor"><rect x="2.8" y="12.1" width="9.2" height="1.8" rx="0.7"/><path d="M13.2 11.8C15.2 11.2 17 9.4 18.4 7.8V18.2C17 16.6 15.2 14.8 13.2 14.2Z"/><rect x="7.8" y="15.4" width="5.2" height="1.8" rx="0.8"/></g><g data-part="valves" fill="currentColor"><rect x="8.3" y="9" width="1.4" height="2.6" rx="0.5"/><rect x="10.3" y="9" width="1.4" height="2.6" rx="0.5"/><rect x="12.3" y="9" width="1.4" height="2.6" rx="0.5"/></g><g data-part="blast" data-pivot="19.5 13" ${K_THIN}><line x1="20.2" y1="10.5" x2="22" y2="9.2"/><line x1="20.4" y1="13" x2="22.4" y2="13"/><line x1="20.2" y1="15.5" x2="22" y2="16.8"/></g>`,
      hardware: `<g data-part="valves"><rect x="8.3" y="9" width="1.4" height="3.8" rx="0.5" ${HA}/><rect x="10.3" y="9" width="1.4" height="3.8" rx="0.5" ${HA}/><rect x="12.3" y="9" width="1.4" height="3.8" rx="0.5" ${HA}/></g><g data-part="horn" data-pivot="6 13"><path d="M7.4 13.5V15.6A2 2 0 0 0 9.4 17.6H12A2 2 0 0 0 14 15.6V13.5" fill="none" stroke="#52525b" stroke-width="1.7"/><path d="M2.8 12.1H12.2C14.6 12.1 16.8 9.8 18.5 7.6V18.4C16.8 16.2 14.6 13.9 12.2 13.9H2.8Z" ${HL}/></g><g data-part="blast" data-pivot="19.5 13" stroke="#ff6b35" stroke-width="1.8" stroke-linecap="round"><line x1="20.2" y1="10.5" x2="22" y2="9.2"/><line x1="20.4" y1="13" x2="22.4" y2="13"/><line x1="20.2" y1="15.5" x2="22" y2="16.8"/></g>`,
      relief: `<g data-part="horn" data-pivot="6 13"><path transform="translate(1.4,1.4)" d="M12.2 13C14.6 13 16.8 10.6 18.2 8.2V17.8C16.8 15.4 14.6 13 12.2 13Z" ${RS}/><path d="M3 13H12.2M7.5 13V15.5A1.8 1.8 0 0 0 9.3 17.3H12A1.8 1.8 0 0 0 13.8 15.5V13" ${RF_LINE}/><path d="M12.2 13C14.6 13 16.8 10.6 18.2 8.2V17.8C16.8 15.4 14.6 13 12.2 13Z" ${RF}/></g><g data-part="valves" ${RF_LINE}><line x1="9" y1="13" x2="9" y2="9.4"/><line x1="11" y1="13" x2="11" y2="9.4"/><line x1="13" y1="13" x2="13" y2="9.4"/></g><g data-part="blast" data-pivot="19.5 13" ${RF_LINE}><line x1="20.2" y1="10.5" x2="22" y2="9.2"/><line x1="20.4" y1="13" x2="22.4" y2="13"/><line x1="20.2" y1="15.5" x2="22" y2="16.8"/></g>`,
    },
  },
  // 105. METRONOME
  {
    name: "metronome",
    label: "Metronome",
    category: "Studio & Sound",
    motionSummary: "Weighted pendulum arm ticks rhythmically left then swings right",
    soundSummary: "Crisp wooden metronome tick-tock",
    svgs: {
      outline: `<path d="M6.8 20A1.2 1.2 0 0 1 5.6 18.5L9.1 5A1.4 1.4 0 0 1 10.5 4H13.5A1.4 1.4 0 0 1 14.9 5L18.4 18.5A1.2 1.2 0 0 1 17.2 20Z" ${K}/><line x1="7.4" y1="15" x2="16.6" y2="15" ${K_THIN}/><g data-part="pendulum" data-pivot="12 17.5" ${K}><line x1="12" y1="17.5" x2="16.2" y2="7.5"/><rect x="13.4" y="9.2" width="2.8" height="2" rx="0.5" fill="currentColor" stroke="none"/></g>`,
      solid: `<path fill="currentColor" fill-rule="evenodd" d="M10.4 3.8H13.6A1.5 1.5 0 0 1 15 4.9L18.5 18.6A1.3 1.3 0 0 1 17.2 20.2H6.8A1.3 1.3 0 0 1 5.5 18.6L9 4.9A1.5 1.5 0 0 1 10.4 3.8ZM10.4 6.2L8.1 15.4H15.9L13.6 6.2Z"/><g data-part="pendulum" data-pivot="12 17.5"><line x1="12" y1="17.5" x2="16.4" y2="7.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="14.8" cy="10.8" r="1.4" fill="currentColor"/></g>`,
      duotone: `<path d="M6.8 20A1.2 1.2 0 0 1 5.6 18.5L9.1 5A1.4 1.4 0 0 1 10.5 4H13.5A1.4 1.4 0 0 1 14.9 5L18.4 18.5A1.2 1.2 0 0 1 17.2 20Z" ${D}/><line x1="7.4" y1="15" x2="16.6" y2="15" ${DK_THIN}/><g data-part="pendulum" data-pivot="12 17.5"><line x1="12" y1="17.5" x2="16.2" y2="7.5" ${DK}/><circle cx="14.8" cy="10.8" r="1.4" fill="currentColor"/></g>`,
      glass: glassCompose(
        `<path d="M6.8 20A1.2 1.2 0 0 1 5.6 18.5L9.1 5A1.4 1.4 0 0 1 10.5 4H13.5A1.4 1.4 0 0 1 14.9 5L18.4 18.5A1.2 1.2 0 0 1 17.2 20Z" ${GB}/>`,
        `<path d="M8.6 18A1 1 0 0 1 7.6 16.8L10 6A1 1 0 0 1 11 5.2H13A1 1 0 0 1 14 6L16.4 16.8A1 1 0 0 1 15.4 18Z"/>`,
        `<path d="M6.8 20A1.2 1.2 0 0 1 5.6 18.5L9.1 5A1.4 1.4 0 0 1 10.5 4H13.5A1.4 1.4 0 0 1 14.9 5L18.4 18.5A1.2 1.2 0 0 1 17.2 20Z" ${GF}/><g data-part="pendulum" data-pivot="12 17.5"><line x1="12" y1="17.5" x2="16.2" y2="7.2" ${GBS}/><circle cx="14.8" cy="10.6" r="1.45" ${GB}/></g>`
      ),
      stencil: `<g fill="currentColor"><polygon points="9.4 4 11.2 4 11.2 15.2 6.6 15.2"/><polygon points="14.6 4 12.8 4 12.8 15.2 17.4 15.2"/><rect x="5.4" y="16.8" width="13.2" height="3.2" rx="1"/></g><g data-part="pendulum" data-pivot="12 17.5"><line x1="12" y1="17.5" x2="16.5" y2="7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="14.8" cy="10.8" r="1.3" fill="currentColor"/></g>`,
      hardware: `<path d="M6.8 20A1.2 1.2 0 0 1 5.6 18.5L9.1 5A1.4 1.4 0 0 1 10.5 4H13.5A1.4 1.4 0 0 1 14.9 5L18.4 18.5A1.2 1.2 0 0 1 17.2 20Z" ${HD}/><rect x="7.8" y="15.2" width="8.4" height="3.2" rx="0.8" ${HM}/><g data-part="pendulum" data-pivot="12 17.5"><line x1="12" y1="17.5" x2="16.4" y2="7.2" stroke="#f4f4f5" stroke-width="1.8" stroke-linecap="round"/><circle cx="14.8" cy="10.8" r="1.5" ${HA}/></g>`,
      relief: `<path transform="translate(1.4,1.4)" d="M6.8 20A1.2 1.2 0 0 1 5.6 18.5L9.1 5A1.4 1.4 0 0 1 10.5 4H13.5A1.4 1.4 0 0 1 14.9 5L18.4 18.5A1.2 1.2 0 0 1 17.2 20Z" ${RS}/><path d="M6.8 20A1.2 1.2 0 0 1 5.6 18.5L9.1 5A1.4 1.4 0 0 1 10.5 4H13.5A1.4 1.4 0 0 1 14.9 5L18.4 18.5A1.2 1.2 0 0 1 17.2 20Z" ${RF}/><line x1="7.4" y1="15" x2="16.6" y2="15" ${RF_LINE}/><g data-part="pendulum" data-pivot="12 17.5"><line x1="12" y1="17.5" x2="16.2" y2="7.5" ${RF_LINE}/><circle cx="14.8" cy="10.8" r="1.4" ${RS}/></g>`,
    },
  },
  // 106. EQUALIZER
  {
    name: "equalizer",
    label: "Equalizer",
    category: "Studio & Sound",
    motionSummary: "Four frequency level bars bounce asynchronously from bottom baseline",
    soundSummary: "Punchy synth bass pulse + resonant filter sweep",
    svgs: {
      outline: `<line data-part="bar-1" data-pivot="5.5 19.5" x1="5.5" y1="19.5" x2="5.5" y2="11.5" ${K}/><line data-part="bar-2" data-pivot="9.8 19.5" x1="9.8" y1="19.5" x2="9.8" y2="5.5" ${K}/><line data-part="bar-3" data-pivot="14.2 19.5" x1="14.2" y1="19.5" x2="14.2" y2="9.5" ${K}/><line data-part="bar-4" data-pivot="18.5 19.5" x1="18.5" y1="19.5" x2="18.5" y2="6.5" ${K}/>`,
      solid: `<g fill="currentColor"><rect data-part="bar-1" data-pivot="5.5 19.5" x="4" y="11" width="3" height="8.5" rx="1.5"/><rect data-part="bar-2" data-pivot="9.8 19.5" x="8.3" y="5" width="3" height="14.5" rx="1.5"/><rect data-part="bar-3" data-pivot="14.2 19.5" x="12.7" y="9" width="3" height="10.5" rx="1.5"/><rect data-part="bar-4" data-pivot="18.5 19.5" x="17" y="6" width="3" height="13.5" rx="1.5"/></g>`,
      duotone: `<g ${D}><rect data-part="bar-1" data-pivot="5.5 19.5" x="4.2" y="11.2" width="2.6" height="8.3" rx="1.3"/><rect data-part="bar-2" data-pivot="9.8 19.5" x="8.5" y="5.2" width="2.6" height="14.3" rx="1.3"/><rect data-part="bar-3" data-pivot="14.2 19.5" x="12.9" y="9.2" width="2.6" height="10.3" rx="1.3"/><rect data-part="bar-4" data-pivot="18.5 19.5" x="17.2" y="6.2" width="2.6" height="13.3" rx="1.3"/></g>`,
      glass: glassCompose(
        `<rect data-part="bar-1" data-pivot="5.5 19.5" x="4" y="11" width="3" height="8.5" rx="1.5" ${GB}/><rect data-part="bar-3" data-pivot="14.2 19.5" x="12.7" y="9" width="3" height="10.5" rx="1.5" ${GB}/>`,
        `<g><rect data-part="bar-2" data-pivot="9.8 19.5" x="8.3" y="5" width="3" height="14.5" rx="1.5"/><rect data-part="bar-4" data-pivot="18.5 19.5" x="17" y="6" width="3" height="13.5" rx="1.5"/></g>`
      ),
      stencil: `<g fill="currentColor"><g data-part="bar-1" data-pivot="5.5 19.5"><rect x="4" y="11.5" width="3" height="3.2" rx="0.8"/><rect x="4" y="16" width="3" height="3.5" rx="0.8"/></g><g data-part="bar-2" data-pivot="9.8 19.5"><rect x="8.3" y="5" width="3" height="5.5" rx="0.8"/><rect x="8.3" y="11.8" width="3" height="7.7" rx="0.8"/></g><g data-part="bar-3" data-pivot="14.2 19.5"><rect x="12.7" y="9" width="3" height="4.8" rx="0.8"/><rect x="12.7" y="15" width="3" height="4.5" rx="0.8"/></g><g data-part="bar-4" data-pivot="18.5 19.5"><rect x="17" y="6.5" width="3" height="5" rx="0.8"/><rect x="17" y="12.8" width="3" height="6.7" rx="0.8"/></g></g>`,
      hardware: `<rect data-part="bar-1" data-pivot="5.5 19.5" x="4" y="11" width="3" height="8.5" rx="1.4" ${HD}/><rect data-part="bar-2" data-pivot="9.8 19.5" x="8.3" y="5" width="3" height="14.5" rx="1.4" ${HA}/><rect data-part="bar-3" data-pivot="14.2 19.5" x="12.7" y="9" width="3" height="10.5" rx="1.4" ${HM}/><rect data-part="bar-4" data-pivot="18.5 19.5" x="17" y="6" width="3" height="13.5" rx="1.4" ${HL}/>`,
      relief: `<g><g data-part="bar-1" data-pivot="5.5 19.5"><rect transform="translate(1.2,1.2)" x="4.2" y="11.2" width="2.6" height="8.3" rx="1.2" ${RS}/><rect x="4.2" y="11.2" width="2.6" height="8.3" rx="1.2" ${RF}/></g><g data-part="bar-2" data-pivot="9.8 19.5"><rect transform="translate(1.2,1.2)" x="8.5" y="5.2" width="2.6" height="14.3" rx="1.2" ${RS}/><rect x="8.5" y="5.2" width="2.6" height="14.3" rx="1.2" ${RF}/></g><g data-part="bar-3" data-pivot="14.2 19.5"><rect transform="translate(1.2,1.2)" x="12.9" y="9.2" width="2.6" height="10.3" rx="1.2" ${RS}/><rect x="12.9" y="9.2" width="2.6" height="10.3" rx="1.2" ${RF}/></g><g data-part="bar-4" data-pivot="18.5 19.5"><rect transform="translate(1.2,1.2)" x="17.2" y="6.2" width="2.6" height="13.3" rx="1.2" ${RS}/><rect x="17.2" y="6.2" width="2.6" height="13.3" rx="1.2" ${RF}/></g></g>`,
    },
  },
  // 107. CASSETTE
  {
    name: "cassette",
    label: "Cassette",
    category: "Studio & Sound",
    motionSummary: "Twin spoked tape reels spin synchronously inside cassette housing",
    soundSummary: "Cassette deck latch clack + warm analog tape chord",
    svgs: {
      outline: `<g data-part="shell" ${K}><rect x="2.8" y="6.2" width="18.4" height="11.6" rx="1.8"/><path d="M6.5 17.8L7.8 14.8H16.2L17.5 17.8" ${K_THIN}/></g><g data-part="reel-l" data-pivot="8.2 11.2"><circle cx="8.2" cy="11.2" r="2.2" ${K_THIN}/>${triSpokes(8.2, 11.2, 1.9, K_THIN)}</g><g data-part="reel-r" data-pivot="15.8 11.2"><circle cx="15.8" cy="11.2" r="2.2" ${K_THIN}/>${triSpokes(15.8, 11.2, 1.9, K_THIN)}</g>`,
      solid: `<path data-part="shell" fill="currentColor" fill-rule="evenodd" d="M4.6 6H19.4A2 2 0 0 1 21.4 8V16A2 2 0 0 1 19.4 18H4.6A2 2 0 0 1 2.6 16V8A2 2 0 0 1 4.6 6ZM8.2 8.8A2.4 2.4 0 1 0 8.2 13.6A2.4 2.4 0 1 0 8.2 8.8ZM15.8 8.8A2.4 2.4 0 1 0 15.8 13.6A2.4 2.4 0 1 0 15.8 8.8ZM7.6 15.2L6.8 17.4H17.2L16.4 15.2Z"/><g data-part="reel-l" data-pivot="8.2 11.2">${triSpokes(8.2, 11.2, 1.9, 'stroke="currentColor" stroke-width="1.2" stroke-linecap="round"')}</g><g data-part="reel-r" data-pivot="15.8 11.2">${triSpokes(15.8, 11.2, 1.9, 'stroke="currentColor" stroke-width="1.2" stroke-linecap="round"')}</g>`,
      duotone: `<g data-part="shell"><rect x="2.8" y="6.2" width="18.4" height="11.6" rx="1.8" ${D}/><path d="M6.5 17.8L7.8 14.8H16.2L17.5 17.8" ${DK_THIN}/></g><g data-part="reel-l" data-pivot="8.2 11.2"><circle cx="8.2" cy="11.2" r="2.2" ${DK_THIN}/>${triSpokes(8.2, 11.2, 1.9, DK_THIN)}</g><g data-part="reel-r" data-pivot="15.8 11.2"><circle cx="15.8" cy="11.2" r="2.2" ${DK_THIN}/>${triSpokes(15.8, 11.2, 1.9, DK_THIN)}</g>`,
      glass: glassCompose(
        `<g data-part="reel-l" data-pivot="8.2 11.2"><circle cx="8.2" cy="11.2" r="2.3" ${GB}/>${triSpokes(8.2, 11.2, 1.7, 'stroke="#fff" stroke-opacity="0.7" stroke-width="1" stroke-linecap="round"')}</g><g data-part="reel-r" data-pivot="15.8 11.2"><circle cx="15.8" cy="11.2" r="2.3" ${GB}/>${triSpokes(15.8, 11.2, 1.7, 'stroke="#fff" stroke-opacity="0.7" stroke-width="1" stroke-linecap="round"')}</g><path data-part="shell" d="M6.5 18L7.8 14.8H16.2L17.5 18Z" ${GB}/>`,
        `<rect data-part="shell" x="2.8" y="6.2" width="18.4" height="11.6" rx="1.9"/>`
      ),
      stencil: `<g data-part="shell" fill="currentColor" fill-rule="evenodd"><path d="M4.6 6.2H11.2V17.8H7.8L8.4 15.2H11.2V14H7.2L5.8 17.8H4.6A1.8 1.8 0 0 1 2.8 16V8A1.8 1.8 0 0 1 4.6 6.2ZM8.2 9A2.2 2.2 0 1 0 8.2 13.4A2.2 2.2 0 1 0 8.2 9Z"/><path d="M12.8 6.2H19.4A1.8 1.8 0 0 1 21.2 8V16A1.8 1.8 0 0 1 19.4 17.8H18.2L16.8 14H12.8V15.2H15.6L16.2 17.8H12.8ZM15.8 9A2.2 2.2 0 1 0 15.8 13.4A2.2 2.2 0 1 0 15.8 9Z"/></g><g data-part="reel-l" data-pivot="8.2 11.2">${triSpokes(8.2, 11.2, 1.8, 'stroke="currentColor" stroke-width="1.2" stroke-linecap="round"')}</g><g data-part="reel-r" data-pivot="15.8 11.2">${triSpokes(15.8, 11.2, 1.8, 'stroke="currentColor" stroke-width="1.2" stroke-linecap="round"')}</g>`,
      hardware: `<g data-part="shell"><rect x="2.8" y="6.2" width="18.4" height="11.6" rx="2" ${HL}/><path d="M6.5 17.8L7.8 14.8H16.2L17.5 17.8Z" ${HD}/></g><g data-part="reel-l" data-pivot="8.2 11.2"><circle cx="8.2" cy="11.2" r="2.3" ${HD}/>${triSpokes(8.2, 11.2, 1.7, 'stroke="#ff6b35" stroke-width="1.1" stroke-linecap="round"')}</g><g data-part="reel-r" data-pivot="15.8 11.2"><circle cx="15.8" cy="11.2" r="2.3" ${HD}/>${triSpokes(15.8, 11.2, 1.7, 'stroke="#ff6b35" stroke-width="1.1" stroke-linecap="round"')}</g>`,
      relief: `<g data-part="shell"><rect transform="translate(1.4,1.4)" x="2.8" y="6.2" width="18.4" height="11.6" rx="1.8" ${RS}/><rect x="2.8" y="6.2" width="18.4" height="11.6" rx="1.8" ${RF}/><path d="M6.5 17.8L7.8 14.8H16.2L17.5 17.8" ${RF_LINE}/></g><g data-part="reel-l" data-pivot="8.2 11.2"><circle cx="8.2" cy="11.2" r="2.2" ${RF}/>${triSpokes(8.2, 11.2, 1.9, RF_LINE)}</g><g data-part="reel-r" data-pivot="15.8 11.2"><circle cx="15.8" cy="11.2" r="2.2" ${RF}/>${triSpokes(15.8, 11.2, 1.9, RF_LINE)}</g>`,
    },
  },
  // 108. RADIO
  {
    name: "radio",
    label: "Radio",
    category: "Studio & Sound",
    motionSummary: "Tuning dial rotates as telescopic whip antenna perks up and speaker pulses",
    soundSummary: "FM static tuning sweep locking onto clear chime",
    svgs: {
      outline: `<line data-part="antenna" data-pivot="6.5 8.5" x1="6.5" y1="8.5" x2="17.5" y2="3.8" ${K}/><rect x="3.5" y="8.5" width="17" height="11.5" rx="2.2" ${K}/><circle data-part="speaker" cx="8.5" cy="14.2" r="2.7" ${K_THIN}/><g data-part="dial" data-pivot="16.2 14.8"><circle cx="16.2" cy="14.8" r="1.9" ${K_THIN}/><line x1="16.2" y1="14.8" x2="17.3" y2="13.7" ${K_THIN}/></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><circle data-part="speaker" cx="8.5" cy="14.2" r="2.8" fill="#000"/><circle data-part="dial" data-pivot="16.2 14.8" cx="16.2" cy="14.8" r="2.1" fill="#000"/></mask></defs><line data-part="antenna" data-pivot="6.5 8.5" x1="6.5" y1="8.5" x2="17.5" y2="3.8" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><rect x="3.3" y="8.3" width="17.4" height="11.9" rx="2.4" fill="currentColor" mask="url(#__GID__-m1)"/><line data-part="dial" data-pivot="16.2 14.8" x1="16.2" y1="14.8" x2="17.5" y2="13.5" stroke="currentColor" stroke-width="1.35" stroke-linecap="round"/>`,
      duotone: `<line data-part="antenna" data-pivot="6.5 8.5" x1="6.5" y1="8.5" x2="17.5" y2="3.8" ${DK}/><rect x="3.5" y="8.5" width="17" height="11.5" rx="2.2" ${D}/><circle data-part="speaker" cx="8.5" cy="14.2" r="2.7" ${D}/><g data-part="dial" data-pivot="16.2 14.8"><circle cx="16.2" cy="14.8" r="1.9" ${DK_THIN}/><line x1="16.2" y1="14.8" x2="17.3" y2="13.7" ${DK_THIN}/></g>`,
      glass: glassCompose(
        `<line data-part="antenna" data-pivot="6.5 8.5" x1="6.5" y1="8.5" x2="17.5" y2="3.8" ${GBS}/><circle data-part="speaker" cx="8.5" cy="14.2" r="2.8" ${GB}/><g data-part="dial" data-pivot="16.2 14.8"><circle cx="16.2" cy="14.8" r="2.1" ${GB}/><line x1="16.2" y1="14.8" x2="17.4" y2="13.6" stroke="#fff" stroke-opacity="0.78" stroke-width="1.2" stroke-linecap="round"/></g>`,
        `<rect x="3.3" y="8.3" width="17.4" height="11.9" rx="2.4"/>`
      ),
      stencil: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><circle data-part="speaker" cx="7.8" cy="14.2" r="2.4" fill="#000"/><circle data-part="dial" data-pivot="16.5" cy="14.8" r="1.95" fill="#000" cx="16.5"/></mask></defs><line data-part="antenna" data-pivot="6.5 8.5" x1="6.5" y1="8.5" x2="17.5" y2="3.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><g fill="currentColor" mask="url(#__GID__-m1)"><path d="M5.5 8.5H11.5V20H5.5A2 2 0 0 1 3.5 18V10.5A2 2 0 0 1 5.5 8.5Z"/><path d="M13 8.5H18.5A2 2 0 0 1 20.5 10.5V18A2 2 0 0 1 18.5 20H13Z"/></g><line data-part="dial" data-pivot="16.5 14.8" x1="16.5" y1="14.8" x2="17.7" y2="13.6" stroke="currentColor" stroke-width="1.35" stroke-linecap="round"/>`,
      hardware: `<line data-part="antenna" data-pivot="6.5 8.5" x1="6.5" y1="8.5" x2="17.5" y2="3.8" stroke="#52525b" stroke-width="2" stroke-linecap="round"/><rect x="3.3" y="8.3" width="17.4" height="11.9" rx="2.4" ${HL}/><circle data-part="speaker" cx="8.5" cy="14.2" r="2.9" ${HD}/><g data-part="dial" data-pivot="16.2 14.8"><circle cx="16.2" cy="14.8" r="2.1" ${HA}/><line x1="16.2" y1="14.8" x2="17.4" y2="13.6" stroke="#ffffff" stroke-width="1.3" stroke-linecap="round"/></g>`,
      relief: `<line data-part="antenna" data-pivot="6.5 8.5" x1="6.5" y1="8.5" x2="17.5" y2="3.8" ${RF_LINE}/><rect transform="translate(1.4,1.4)" x="3.5" y="8.5" width="17" height="11.5" rx="2.2" ${RS}/><rect x="3.5" y="8.5" width="17" height="11.5" rx="2.2" ${RF}/><circle data-part="speaker" cx="8.5" cy="14.2" r="2.7" ${RS}/><g data-part="dial" data-pivot="16.2 14.8"><circle cx="16.2" cy="14.8" r="1.9" ${RF}/><line x1="16.2" y1="14.8" x2="17.3" y2="13.7" ${RF_LINE}/></g>`,
    },
  },
  // 109. PROJECTOR
  {
    name: "projector",
    label: "Film Projector",
    category: "Studio & Sound",
    motionSummary: "Twin spoked film reels spin synchronously as projector beam flares",
    soundSummary: "24fps cinema sprocket rattle + warm projector lamp swell",
    svgs: {
      outline: `<g data-part="reel-l" data-pivot="7.2 7"><circle cx="7.2" cy="7" r="3" ${K}/>${triSpokes(7.2, 7, 2.5, K_THIN)}</g><g data-part="reel-r" data-pivot="14.2 7"><circle cx="14.2" cy="7" r="3" ${K}/>${triSpokes(14.2, 7, 2.5, K_THIN)}</g><rect x="4.5" y="11.5" width="11.8" height="7.5" rx="1.8" ${K}/><path data-part="beam" data-pivot="16.5 15.2" d="M16.3 13.6L20.8 11.7A0.7 0.7 0 0 1 21.8 12.3V18.1A0.7 0.7 0 0 1 20.8 18.7L16.3 16.8Z" ${K_THIN}/>`,
      solid: `<g data-part="reel-l" data-pivot="7.2 7"><path fill="currentColor" fill-rule="evenodd" d="M7.2 3.9A3.1 3.1 0 1 0 7.2 10.1A3.1 3.1 0 1 0 7.2 3.9ZM7.2 5.15A1.85 1.85 0 1 1 7.2 8.85A1.85 1.85 0 1 1 7.2 5.15Z"/>${triSpokes(7.2, 7, 2.1, 'stroke="currentColor" stroke-width="1.2" stroke-linecap="round"')}</g><g data-part="reel-r" data-pivot="14.2 7"><path fill="currentColor" fill-rule="evenodd" d="M14.2 3.9A3.1 3.1 0 1 0 14.2 10.1A3.1 3.1 0 1 0 14.2 3.9ZM14.2 5.15A1.85 1.85 0 1 1 14.2 8.85A1.85 1.85 0 1 1 14.2 5.15Z"/>${triSpokes(14.2, 7, 2.1, 'stroke="currentColor" stroke-width="1.2" stroke-linecap="round"')}</g><rect x="4.2" y="11.3" width="12.2" height="7.9" rx="1.9" fill="currentColor"/><path data-part="beam" data-pivot="16.5 15.2" d="M16.4 13.5L21 11.5A0.8 0.8 0 0 1 22 12.2V18.2A0.8 0.8 0 0 1 21 18.9L16.4 16.9Z" fill="currentColor" opacity="0.55"/>`,
      duotone: `<g data-part="reel-l" data-pivot="7.2 7"><circle cx="7.2" cy="7" r="3" ${D}/>${triSpokes(7.2, 7, 2.5, DK_THIN)}</g><g data-part="reel-r" data-pivot="14.2 7"><circle cx="14.2" cy="7" r="3" ${D}/>${triSpokes(14.2, 7, 2.5, DK_THIN)}</g><rect x="4.5" y="11.5" width="11.8" height="7.5" rx="1.8" ${D}/><path data-part="beam" data-pivot="16.5 15.2" d="M16.3 13.6L20.8 11.7A0.7 0.7 0 0 1 21.8 12.3V18.1A0.7 0.7 0 0 1 20.8 18.7L16.3 16.8Z" ${D}/>`,
      glass: glassCompose(
        `<g data-part="reel-l" data-pivot="7.2 7"><circle cx="7.2" cy="7" r="3.1" ${GB}/>${triSpokes(7.2, 7, 2, 'stroke="#fff" stroke-opacity="0.7" stroke-width="1.1" stroke-linecap="round"')}</g><g data-part="reel-r" data-pivot="14.2 7"><circle cx="14.2" cy="7" r="3.1" ${GB}/>${triSpokes(14.2, 7, 2, 'stroke="#fff" stroke-opacity="0.7" stroke-width="1.1" stroke-linecap="round"')}</g><path data-part="beam" data-pivot="16.5 15.2" d="M16.4 13.5L21 11.5A0.8 0.8 0 0 1 22 12.2V18.2A0.8 0.8 0 0 1 21 18.9L16.4 16.9Z" ${GB}/>`,
        `<rect x="4.3" y="11.3" width="12.2" height="7.9" rx="1.9"/>`
      ),
      stencil: `<g data-part="reel-l" data-pivot="7.2 7"><path fill="currentColor" fill-rule="evenodd" d="M7.2 4A3 3 0 1 0 7.2 10A3 3 0 1 0 7.2 4ZM7.2 5.2A1.8 1.8 0 1 1 7.2 8.8A1.8 1.8 0 1 1 7.2 5.2Z"/>${triSpokes(7.2, 7, 2, 'stroke="currentColor" stroke-width="1.2" stroke-linecap="round"')}</g><g data-part="reel-r" data-pivot="14.2 7"><path fill="currentColor" fill-rule="evenodd" d="M14.2 4A3 3 0 1 0 14.2 10A3 3 0 1 0 14.2 4ZM14.2 5.2A1.8 1.8 0 1 1 14.2 8.8A1.8 1.8 0 1 1 14.2 5.2Z"/>${triSpokes(14.2, 7, 2, 'stroke="currentColor" stroke-width="1.2" stroke-linecap="round"')}</g><g fill="currentColor"><rect x="4.5" y="11.5" width="5.2" height="7.5" rx="1.2"/><rect x="11.1" y="11.5" width="5.2" height="7.5" rx="1.2"/></g><path data-part="beam" data-pivot="16.5 15.2" d="M16.8 13.8L20.8 11.9A0.6 0.6 0 0 1 21.7 12.5V17.9A0.6 0.6 0 0 1 20.8 18.5L16.8 16.6Z" fill="currentColor" opacity="0.6"/>`,
      hardware: `<g data-part="reel-l" data-pivot="7.2 7"><circle cx="7.2" cy="7" r="3.1" ${HD}/>${triSpokes(7.2, 7, 2, 'stroke="#d4d4d8" stroke-width="1.1" stroke-linecap="round"')}</g><g data-part="reel-r" data-pivot="14.2 7"><circle cx="14.2" cy="7" r="3.1" ${HD}/>${triSpokes(14.2, 7, 2, 'stroke="#d4d4d8" stroke-width="1.1" stroke-linecap="round"')}</g><rect x="4.2" y="11.3" width="12.2" height="7.9" rx="1.9" ${HL}/><path data-part="beam" data-pivot="16.5 15.2" d="M16.4 13.5L21 11.5A0.8 0.8 0 0 1 22 12.2V18.2A0.8 0.8 0 0 1 21 18.9L16.4 16.9Z" ${HA}/>`,
      relief: `<g data-part="reel-l" data-pivot="7.2 7"><circle cx="7.2" cy="7" r="3" ${RF}/>${triSpokes(7.2, 7, 2.4, RF_LINE)}</g><g data-part="reel-r" data-pivot="14.2 7"><circle cx="14.2" cy="7" r="3" ${RF}/>${triSpokes(14.2, 7, 2.4, RF_LINE)}</g><rect transform="translate(1.4,1.4)" x="4.5" y="11.5" width="11.8" height="7.5" rx="1.8" ${RS}/><rect x="4.5" y="11.5" width="11.8" height="7.5" rx="1.8" ${RF}/><path data-part="beam" data-pivot="16.5 15.2" d="M16.3 13.6L20.8 11.7A0.7 0.7 0 0 1 21.8 12.3V18.1A0.7 0.7 0 0 1 20.8 18.7L16.3 16.8Z" ${RS}/>`,
    },
  },
  // 110. CLAPPERBOARD
  {
    name: "clapperboard",
    label: "Clapperboard",
    category: "Studio & Sound",
    motionSummary: "Hinged striped slate bar lifts and slams shut onto scene board",
    soundSummary: "Sharp wooden cinema slate clack",
    svgs: {
      outline: `<g data-part="clap" data-pivot="4 10"><rect x="3.5" y="5.2" width="17" height="4.2" rx="1" ${K}/><line x1="7.5" y1="5.2" x2="9.5" y2="9.4" ${K_THIN}/><line x1="12" y1="5.2" x2="14" y2="9.4" ${K_THIN}/><line x1="16.5" y1="5.2" x2="18.5" y2="9.4" ${K_THIN}/></g><g data-part="slate" ${K}><rect x="3.5" y="9.4" width="17" height="10.6" rx="1.6"/><line x1="7" y1="13.5" x2="17" y2="13.5" ${K_THIN}/><line x1="7" y1="16.5" x2="13.5" y2="16.5" ${K_THIN}/></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="-4" y="0" width="32" height="24"><rect x="-4" y="0" width="32" height="24" fill="#fff"/><g data-part="clap" data-pivot="4 10" stroke="#000" stroke-width="1.5" stroke-linecap="round"><line x1="7.4" y1="5" x2="9.4" y2="9.2"/><line x1="12" y1="5" x2="14" y2="9.2"/><line x1="16.6" y1="5" x2="18.6" y2="9.2"/></g></mask><mask id="__GID__-m2" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><g data-part="slate" stroke="#000" stroke-width="1.5" stroke-linecap="round"><line x1="7" y1="14" x2="17" y2="14"/><line x1="7" y1="17" x2="13.5" y2="17"/></g></mask></defs><rect data-part="clap" data-pivot="4 10" x="3.3" y="5" width="17.4" height="4.2" rx="1.1" fill="currentColor" mask="url(#__GID__-m1)"/><rect data-part="slate" x="3.3" y="10" width="17.4" height="10.2" rx="1.7" fill="currentColor" mask="url(#__GID__-m2)"/>`,
      duotone: `<g data-part="clap" data-pivot="4 10"><rect x="3.5" y="5.2" width="17" height="4.2" rx="1" ${D}/><line x1="7.5" y1="5.2" x2="9.5" y2="9.4" ${DK_THIN}/><line x1="12" y1="5.2" x2="14" y2="9.4" ${DK_THIN}/><line x1="16.5" y1="5.2" x2="18.5" y2="9.4" ${DK_THIN}/></g><g data-part="slate"><rect x="3.5" y="9.4" width="17" height="10.6" rx="1.6" ${D}/><line x1="7" y1="13.5" x2="17" y2="13.5" ${DK_THIN}/><line x1="7" y1="16.5" x2="13.5" y2="16.5" ${DK_THIN}/></g>`,
      glass: glassCompose(
        `<g data-part="clap" data-pivot="4 10"><rect x="3.3" y="5" width="17.4" height="4.2" rx="1.1" ${GB}/><line x1="7.5" y1="5.4" x2="9.4" y2="9" stroke="#fff" stroke-opacity="0.6" stroke-width="1.1"/><line x1="12" y1="5.4" x2="13.9" y2="9" stroke="#fff" stroke-opacity="0.6" stroke-width="1.1"/><line x1="16.5" y1="5.4" x2="18.4" y2="9" stroke="#fff" stroke-opacity="0.6" stroke-width="1.1"/></g>`,
        `<rect data-part="slate" x="3.3" y="9.8" width="17.4" height="10.4" rx="1.7"/>`,
        `<g data-part="slate" ${GF}><rect x="3.3" y="9.8" width="17.4" height="10.4" rx="1.7"/></g><line data-part="slate" x1="7" y1="14" x2="17" y2="14" ${GBS}/><line data-part="slate" x1="7" y1="17" x2="13.5" y2="17" ${GBS}/>`
      ),
      stencil: `<g data-part="clap" data-pivot="4 10" fill="currentColor"><path d="M4.5 5.2H7L8.8 9.2H3.5V6.2A1 1 0 0 1 4.5 5.2Z"/><polygon points="8.6 5.2 12 5.2 13.8 9.2 10.4 9.2"/><path d="M13.6 5.2H19.5A1 1 0 0 1 20.5 6.2V9.2H15.4Z"/></g><g data-part="slate" fill="currentColor"><rect x="3.5" y="10.4" width="7.7" height="9.6" rx="1.1"/><rect x="12.8" y="10.4" width="7.7" height="9.6" rx="1.1"/></g>`,
      hardware: `<g data-part="clap" data-pivot="4 10"><rect x="3.3" y="5" width="17.4" height="4.2" rx="1.1" ${HD}/><rect x="7.5" y="5.4" width="2.2" height="3.4" rx="0.5" ${HA}/><rect x="12.5" y="5.4" width="2.2" height="3.4" rx="0.5" ${HL}/></g><g data-part="slate"><rect x="3.3" y="10" width="17.4" height="10.2" rx="1.7" ${HL}/><line x1="7" y1="14" x2="17" y2="14" stroke="#52525b" stroke-width="1.6" stroke-linecap="round"/><line x1="7" y1="17" x2="13.5" y2="17" stroke="#52525b" stroke-width="1.6" stroke-linecap="round"/></g>`,
      relief: `<g data-part="clap" data-pivot="4 10"><rect transform="translate(1.3,1.3)" x="3.5" y="5.2" width="17" height="4.2" rx="1" ${RS}/><rect x="3.5" y="5.2" width="17" height="4.2" rx="1" ${RF}/><line x1="8" y1="5.4" x2="9.8" y2="9.2" ${RF_LINE}/><line x1="13" y1="5.4" x2="14.8" y2="9.2" ${RF_LINE}/></g><g data-part="slate"><rect transform="translate(1.4,1.4)" x="3.5" y="9.4" width="17" height="10.6" rx="1.6" ${RS}/><rect x="3.5" y="9.4" width="17" height="10.6" rx="1.6" ${RF}/><line x1="7" y1="13.5" x2="17" y2="13.5" ${RF_LINE}/><line x1="7" y1="16.5" x2="13.5" y2="16.5" ${RF_LINE}/></g>`,
    },
  },
];
