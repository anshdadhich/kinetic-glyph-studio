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

export const CORE2_ICONS: IconDef[] = [
  // 121. MENU
  {
    name: "menu",
    label: "Menu",
    category: "Core UI",
    motionSummary: "Three navigation bars cascade outward in crisp staggered rhythm",
    soundSummary: "Drawer slide swish + staggered soft wooden taps",
    svgs: {
      outline: `<line data-part="bar-1" x1="4.5" y1="7" x2="19.5" y2="7" ${K}/><line data-part="bar-2" x1="4.5" y1="12" x2="19.5" y2="12" ${K}/><line data-part="bar-3" x1="4.5" y1="17" x2="19.5" y2="17" ${K}/>`,
      solid: `<g fill="currentColor"><rect data-part="bar-1" x="4" y="5.8" width="16" height="2.4" rx="1.2"/><rect data-part="bar-2" x="4" y="10.8" width="16" height="2.4" rx="1.2"/><rect data-part="bar-3" x="4" y="15.8" width="16" height="2.4" rx="1.2"/></g>`,
      duotone: `<rect x="3.5" y="4.5" width="17" height="15" rx="3" ${D}/><line data-part="bar-1" x1="6.5" y1="8.2" x2="17.5" y2="8.2" ${DK}/><line data-part="bar-2" x1="6.5" y1="12" x2="17.5" y2="12" ${DK}/><line data-part="bar-3" x1="6.5" y1="15.8" x2="17.5" y2="15.8" ${DK}/>`,
      glass: glassCompose(
        `<rect data-part="bar-1" x="4" y="5.6" width="16" height="2.6" rx="1.3" ${GB}/><rect data-part="bar-3" x="4" y="15.8" width="16" height="2.6" rx="1.3" ${GB}/>`,
        `<g><rect data-part="bar-1" x="4.6" y="6" width="15" height="2.4" rx="1.2"/><rect data-part="bar-2" x="4.6" y="10.8" width="15" height="2.4" rx="1.2"/><rect data-part="bar-3" x="4.6" y="15.6" width="15" height="2.4" rx="1.2"/></g>`
      ),
      stencil: `<g fill="currentColor"><g data-part="bar-1"><rect x="4" y="5.8" width="4" height="2.4" rx="1.2"/><rect x="9.5" y="5.8" width="10.5" height="2.4" rx="1.2"/></g><g data-part="bar-2"><rect x="4" y="10.8" width="10.5" height="2.4" rx="1.2"/><rect x="16" y="10.8" width="4" height="2.4" rx="1.2"/></g><g data-part="bar-3"><rect x="4" y="15.8" width="4" height="2.4" rx="1.2"/><rect x="9.5" y="15.8" width="10.5" height="2.4" rx="1.2"/></g></g>`,
      hardware: `<rect x="3.5" y="4.2" width="17" height="15.6" rx="3" ${HD}/><rect data-part="bar-1" x="6" y="7" width="12" height="2" rx="1" ${HL}/><rect data-part="bar-2" x="6" y="11" width="12" height="2" rx="1" ${HA}/><rect data-part="bar-3" x="6" y="15" width="12" height="2" rx="1" ${HL}/>`,
      relief: `<g transform="translate(1.3,1.3)"><rect data-part="bar-1" x="4.2" y="5.8" width="15.6" height="2.4" rx="1.2" ${RS}/><rect data-part="bar-2" x="4.2" y="10.8" width="15.6" height="2.4" rx="1.2" ${RS}/><rect data-part="bar-3" x="4.2" y="15.8" width="15.6" height="2.4" rx="1.2" ${RS}/></g><rect data-part="bar-1" x="4.2" y="5.8" width="15.6" height="2.4" rx="1.2" ${RF}/><rect data-part="bar-2" x="4.2" y="10.8" width="15.6" height="2.4" rx="1.2" ${RF}/><rect data-part="bar-3" x="4.2" y="15.8" width="15.6" height="2.4" rx="1.2" ${RF}/>`,
    },
  },
  // 122. CLOSE
  {
    name: "close",
    label: "Close",
    category: "Core UI",
    motionSummary: "Diagonal cross blades scissor cleanly and snap tight at center",
    soundSummary: "Crisp modal dismiss snap + descending mute click",
    svgs: {
      outline: `<line data-part="arm-1" data-pivot="12 12" x1="6" y1="6" x2="18" y2="18" ${K}/><line data-part="arm-2" data-pivot="12 12" x1="18" y1="6" x2="6" y2="18" ${K}/>`,
      solid: `<g fill="currentColor"><rect data-part="arm-1" data-pivot="12 12" x="10.7" y="4" width="2.6" height="16" rx="1.3" transform="rotate(-45 12 12)"/><rect data-part="arm-2" data-pivot="12 12" x="10.7" y="4" width="2.6" height="16" rx="1.3" transform="rotate(45 12 12)"/></g>`,
      duotone: `<circle cx="12" cy="12" r="8.5" ${D}/><line data-part="arm-1" data-pivot="12 12" x1="8" y1="8" x2="16" y2="16" ${DK}/><line data-part="arm-2" data-pivot="12 12" x1="16" y1="8" x2="8" y2="16" ${DK}/>`,
      glass: glassCompose(
        `<circle cx="10.8" cy="10.8" r="7.5" ${GB}/>`,
        `<circle cx="12.2" cy="12.2" r="8.4"/>`,
        `<g ${GF}><circle cx="12.2" cy="12.2" r="8.4"/></g><line data-part="arm-1" data-pivot="12.2 12.2" x1="8.6" y1="8.6" x2="15.8" y2="15.8" ${GBS}/><line data-part="arm-2" data-pivot="12.2 12.2" x1="15.8" y1="8.6" x2="8.6" y2="15.8" ${GBS}/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="arm-1" data-pivot="12 12"><rect x="10.8" y="4" width="2.4" height="6.2" rx="1.2" transform="rotate(-45 12 12)"/><rect x="10.8" y="13.8" width="2.4" height="6.2" rx="1.2" transform="rotate(-45 12 12)"/></g><g data-part="arm-2" data-pivot="12 12"><rect x="10.8" y="4" width="2.4" height="6.2" rx="1.2" transform="rotate(45 12 12)"/><rect x="10.8" y="13.8" width="2.4" height="6.2" rx="1.2" transform="rotate(45 12 12)"/></g><circle cx="12" cy="12" r="1.4"/></g>`,
      hardware: `<circle cx="12" cy="12" r="9" ${HD}/><circle cx="12" cy="12" r="6.8" ${HM}/><line data-part="arm-1" data-pivot="12 12" x1="8.8" y1="8.8" x2="15.2" y2="15.2" stroke="#ff6b35" stroke-width="2" stroke-linecap="round"/><line data-part="arm-2" data-pivot="12 12" x1="15.2" y1="8.8" x2="8.8" y2="15.2" stroke="#ff6b35" stroke-width="2" stroke-linecap="round"/>`,
      relief: `<g transform="translate(1.3,1.3)"><line data-part="arm-1" data-pivot="12 12" x1="6.5" y1="6.5" x2="17.5" y2="17.5" ${RS_LINE}/><line data-part="arm-2" data-pivot="12 12" x1="17.5" y1="6.5" x2="6.5" y2="17.5" ${RS_LINE}/></g><line data-part="arm-1" data-pivot="12 12" x1="6.5" y1="6.5" x2="17.5" y2="17.5" ${RF_LINE}/><line data-part="arm-2" data-pivot="12 12" x1="17.5" y1="6.5" x2="6.5" y2="17.5" ${RF_LINE}/>`,
    },
  },
  // 123. FILTER
  {
    name: "filter",
    label: "Filter",
    category: "Core UI",
    motionSummary: "Funnel cone tilts gently while filtered droplet falls from spout",
    soundSummary: "Porcelain funnel swirl + clean liquid filter plink",
    svgs: {
      outline: `<path data-part="funnel" data-pivot="12 10" d="M4 5.2A1 1 0 0 1 4.8 4.2H19.2A1 1 0 0 1 20 5.8L14 12.6V17.4L10 19.6V12.6Z" ${K}/><circle data-part="drop" cx="12" cy="20.6" r="1" fill="currentColor"/>`,
      solid: `<path data-part="funnel" data-pivot="12 10" fill="currentColor" d="M4.5 4.2H19.5A1 1 0 0 1 20.3 5.9L14.2 12.6V17.6L9.8 19.8V12.6L3.7 5.9A1 1 0 0 1 4.5 4.2Z"/><circle data-part="drop" cx="12" cy="20.8" r="1.2" fill="currentColor"/>`,
      duotone: `<path data-part="funnel" data-pivot="12 10" d="M4.2 4.5H19.8L13.8 12.4V17.6L10.2 19.5V12.4Z" ${D}/><circle data-part="drop" cx="12" cy="20.8" r="1" fill="currentColor"/>`,
      glass: glassCompose(
        `<rect data-part="funnel" data-pivot="12 10" x="5.2" y="3.8" width="13.6" height="2.4" rx="1.2" ${GB}/><circle data-part="drop" cx="12" cy="20.6" r="1.2" ${GB}/>`,
        `<path data-part="funnel" data-pivot="12 10" d="M4.5 4.5H19.5L14 12.4V17.8L10 19.6V12.4Z"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="funnel" data-pivot="12 10"><path d="M4.2 4.4H19.8L17.4 7.6H6.6Z"/><path d="M7.8 9H16.2L13.8 12.4V17.6L10.2 19.4V12.4Z"/></g><circle data-part="drop" cx="12" cy="20.8" r="1.15"/></g>`,
      hardware: `<path data-part="funnel" data-pivot="12 10" d="M4.5 4.2H19.5L14 12.4V17.6L10 19.6V12.4Z" ${HL}/><rect x="6" y="4.2" width="12" height="1.8" rx="0.9" ${HD}/><circle data-part="drop" cx="12" cy="20.8" r="1.2" ${HA}/>`,
      relief: `<g data-part="funnel" data-pivot="12 10"><path transform="translate(1.3,1.3)" d="M4.5 4.4H19.5L14 12.4V17.6L10 19.6V12.4Z" ${RS}/><path d="M4.5 4.4H19.5L14 12.4V17.6L10 19.6V12.4Z" ${RF}/></g><circle data-part="drop" cx="12" cy="20.8" r="1.1" ${RS}/>`,
    },
  },
  // 124. SORT
  {
    name: "sort",
    label: "Sort",
    category: "Core UI",
    motionSummary: "Ascending and descending arrows glide past each other in opposite strokes",
    soundSummary: "Dual crisp ascending & descending pitch swap ticks",
    svgs: {
      outline: `<g data-part="up" ${K}><line x1="8" y1="19" x2="8" y2="5"/><polyline points="4.8 8.2 8 5 11.2 8.2"/></g><g data-part="down" ${K}><line x1="16" y1="5" x2="16" y2="19"/><polyline points="12.8 15.8 16 19 19.2 15.8"/></g>`,
      solid: `<path data-part="up" fill="currentColor" d="M8 4.2L11.8 8.4A0.8 0.8 0 0 1 11.2 9.8H9.2V18.8A1.2 1.2 0 0 1 6.8 18.8V9.8H4.8A0.8 0.8 0 0 1 4.2 8.4Z"/><path data-part="down" fill="currentColor" d="M16 19.8L12.2 15.6A0.8 0.8 0 0 1 12.8 14.2H14.8V5.2A1.2 1.2 0 0 1 17.2 5.2V14.2H19.2A0.8 0.8 0 0 1 19.8 15.6Z"/>`,
      duotone: `<g data-part="up"><polygon points="8 4.6 11.4 8.6 4.6 8.6" ${D}/><line x1="8" y1="8.6" x2="8" y2="19" ${DK}/></g><g data-part="down"><polygon points="16 19.4 12.6 15.4 19.4 15.4" ${D}/><line x1="16" y1="5" x2="16" y2="15.4" ${DK}/></g>`,
      glass: glassCompose(
        `<path data-part="down" d="M16 19.8L12.2 15.6H14.8V5.2A1.2 1.2 0 0 1 17.2 5.2V15.6H19.8Z" ${GB}/>`,
        `<path data-part="up" d="M8 4.2L11.8 8.4H9.2V18.8A1.2 1.2 0 0 1 6.8 18.8V8.4H4.2Z"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="up"><polygon points="8 4.4 11.6 8.6 4.4 8.6"/><rect x="6.9" y="10" width="2.2" height="9" rx="1.1"/></g><g data-part="down"><rect x="14.9" y="5" width="2.2" height="9" rx="1.1"/><polygon points="16 19.6 12.4 15.4 19.6 15.4"/></g></g>`,
      hardware: `<rect x="3" y="3.5" width="18" height="17" rx="3" ${HD}/><path data-part="up" d="M8 5L11.4 8.8H9.1V18.2A1.1 1.1 0 0 1 6.9 18.2V8.8H4.6Z" ${HL}/><path data-part="down" d="M16 19L12.6 15.2H14.9V5.8A1.1 1.1 0 0 1 17.1 5.8V15.2H19.4Z" ${HA}/>`,
      relief: `<g transform="translate(1.3,1.3)"><path data-part="up" d="M8 4.5L11.5 8.5H9.1V18.6A1.1 1.1 0 0 1 6.9 18.6V8.5H4.5Z" ${RS}/><path data-part="down" d="M16 19.5L12.5 15.5H14.9V5.4A1.1 1.1 0 0 1 17.1 5.4V15.5H19.5Z" ${RS}/></g><path data-part="up" d="M8 4.5L11.5 8.5H9.1V18.6A1.1 1.1 0 0 1 6.9 18.6V8.5H4.5Z" ${RF}/><path data-part="down" d="M16 19.5L12.5 15.5H14.9V5.4A1.1 1.1 0 0 1 17.1 5.4V15.5H19.5Z" ${RF}/>`,
    },
  },
  // 125. REFRESH
  {
    name: "refresh",
    label: "Refresh",
    category: "Core UI",
    motionSummary: "Twin curved sync arrows spin a full 360° loop around center pivot",
    soundSummary: "Spring-wound rotary release whoosh + sync chime",
    svgs: {
      outline: `<g data-part="arrows" data-pivot="12 12" ${K}><path d="M19.5 10A7.8 7.8 0 0 0 6.2 6.8L4.5 8.5"/><polyline points="4.5 4.8 4.5 8.5 8.2 8.5"/><path d="M4.5 14A7.8 7.8 0 0 0 17.8 17.2L19.5 15.5"/><polyline points="19.5 19.2 19.5 15.5 15.8 15.5"/></g>`,
      solid: `<g data-part="arrows" data-pivot="12 12" fill="currentColor"><path d="M12 3.8A8.2 8.2 0 0 0 5.4 7.2L3.8 5.6V10.4H8.6L6.9 8.7A6.1 6.1 0 0 1 17.7 10.2A1 1 0 1 0 19.6 9.6A8.2 8.2 0 0 0 12 3.8Z"/><path d="M12 20.2A8.2 8.2 0 0 0 18.6 16.8L20.2 18.4V13.6H15.4L17.1 15.3A6.1 6.1 0 0 1 6.3 13.8A1 1 0 1 0 4.4 14.4A8.2 8.2 0 0 0 12 20.2Z"/></g>`,
      duotone: `<circle cx="12" cy="12" r="8" ${D}/><g data-part="arrows" data-pivot="12 12" ${DK}><path d="M18.6 9.8A7 7 0 0 0 6.5 7.4L5 8.8"/><polyline points="5 5.4 5 8.8 8.4 8.8"/><path d="M5.4 14.2A7 7 0 0 0 17.5 16.6L19 15.2"/><polyline points="19 18.6 19 15.2 15.6 15.2"/></g>`,
      glass: glassCompose(
        `<circle cx="11" cy="11" r="7.5" ${GBS}/>`,
        `<circle data-part="arrows" data-pivot="12 12" cx="12" cy="12" r="8.2"/>`,
        `<g ${GF}><circle cx="12" cy="12" r="8.2"/></g><g data-part="arrows" data-pivot="12 12" ${GBS}><path d="M16.6 10A5 5 0 0 0 8.2 8.4"/><polyline points="7.6 6.4 7.8 9 10.4 8.8"/><path d="M7.4 14A5 5 0 0 0 15.8 15.6"/><polyline points="16.4 17.6 16.2 15 13.6 15.2"/></g>`
      ),
      stencil: `<g data-part="arrows" data-pivot="12 12" fill="currentColor"><path d="M4.6 9.5L4.6 4.8L8.8 6.4L7.4 7.7A6.2 6.2 0 0 1 17.8 9.8L15.9 10.4A4.2 4.2 0 0 0 8.8 9.2L9.8 10.2Z"/><path d="M19.4 14.5L19.4 19.2L15.2 17.6L16.6 16.3A6.2 6.2 0 0 1 6.2 14.2L8.1 13.6A4.2 4.2 0 0 0 15.2 14.8L14.2 13.8Z"/></g>`,
      hardware: `<circle cx="12" cy="12" r="9" ${HD}/><g data-part="arrows" data-pivot="12 12"><path d="M17.5 10.2A5.8 5.8 0 0 0 7.2 8.1" fill="none" stroke="#e4e4e7" stroke-width="1.8" stroke-linecap="round"/><polygon points="5.6 9.4 6.2 6 9.2 7.4" ${HA}/><path d="M6.5 13.8A5.8 5.8 0 0 0 16.8 15.9" fill="none" stroke="#e4e4e7" stroke-width="1.8" stroke-linecap="round"/><polygon points="18.4 14.6 17.8 18 14.8 16.6" ${HA}/></g>`,
      relief: `<g data-part="arrows" data-pivot="12 12"><g transform="translate(1.3,1.3)" ${RS_LINE}><path d="M19 10A7.4 7.4 0 0 0 6.4 7L4.8 8.5"/><polyline points="4.8 5 4.8 8.5 8.3 8.5"/><path d="M5 14A7.4 7.4 0 0 0 17.6 17L19.2 15.5"/><polyline points="19.2 19 19.2 15.5 15.7 15.5"/></g><g ${RF_LINE}><path d="M19 10A7.4 7.4 0 0 0 6.4 7L4.8 8.5"/><polyline points="4.8 5 4.8 8.5 8.3 8.5"/><path d="M5 14A7.4 7.4 0 0 0 17.6 17L19.2 15.5"/><polyline points="19.2 19 19.2 15.5 15.7 15.5"/></g></g>`,
    },
  },
  // 126. SHARE
  {
    name: "share",
    label: "Share",
    category: "Core UI",
    motionSummary: "Origin node pulses as twin destination nodes bloom outward along stems",
    soundSummary: "Harmonic 3-node network broadcast arpeggio",
    svgs: {
      outline: `<line x1="8.4" y1="10.7" x2="15.2" y2="7"/><line x1="8.4" y1="13.3" x2="15.2" y2="17"/><path d="M8.4 10.7L15.2 7M8.4 13.3L15.2 17" ${K}/><circle data-part="hub" cx="6" cy="12" r="2.7" ${K}/><circle data-part="node-top" cx="17.5" cy="5.8" r="2.7" ${K}/><circle data-part="node-bot" cx="17.5" cy="18.2" r="2.7" ${K}/>`,
      solid: `<path d="M8 10.9L15.6 6.8M8 13.1L15.6 17.2" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><circle data-part="hub" cx="6" cy="12" r="3" fill="currentColor"/><circle data-part="node-top" cx="17.6" cy="5.8" r="3" fill="currentColor"/><circle data-part="node-bot" cx="17.6" cy="18.2" r="3" fill="currentColor"/>`,
      duotone: `<path d="M8.4 10.7L15.2 7M8.4 13.3L15.2 17" ${DK}/><circle data-part="hub" cx="6" cy="12" r="2.7" ${D}/><circle data-part="node-top" cx="17.5" cy="5.8" r="2.7" ${D}/><circle data-part="node-bot" cx="17.5" cy="18.2" r="2.7" ${D}/>`,
      glass: glassCompose(
        `<path d="M8 10.9L15.6 6.8M8 13.1L15.6 17.2" ${GBS}/><circle data-part="node-top" cx="17.5" cy="5.8" r="2.8" ${GB}/><circle data-part="node-bot" cx="17.5" cy="18.2" r="2.8" ${GB}/>`,
        `<circle data-part="hub" cx="6.2" cy="12" r="3.4"/>`
      ),
      stencil: `<g fill="currentColor"><path d="M8.9 10.4L14.8 7.2L15.5 8.5L9.6 11.7Z"/><path d="M9.6 12.3L15.5 15.5L14.8 16.8L8.9 13.6Z"/><circle data-part="hub" cx="6" cy="12" r="2.7"/><circle data-part="node-top" cx="17.5" cy="5.8" r="2.7"/><circle data-part="node-bot" cx="17.5" cy="18.2" r="2.7"/></g>`,
      hardware: `<path d="M8 10.9L15.6 6.8M8 13.1L15.6 17.2" stroke="#52525b" stroke-width="2" stroke-linecap="round"/><circle data-part="hub" cx="6" cy="12" r="3" ${HD}/><circle cx="6" cy="12" r="1.2" ${HA}/><circle data-part="node-top" cx="17.5" cy="5.8" r="2.8" ${HL}/><circle data-part="node-bot" cx="17.5" cy="18.2" r="2.8" ${HL}/>`,
      relief: `<g transform="translate(1.3,1.3)"><path d="M8.4 10.7L15.2 7M8.4 13.3L15.2 17" ${RS_LINE}/><circle data-part="hub" cx="6" cy="12" r="2.7" ${RS}/><circle data-part="node-top" cx="17.5" cy="5.8" r="2.7" ${RS}/><circle data-part="node-bot" cx="17.5" cy="18.2" r="2.7" ${RS}/></g><path d="M8.4 10.7L15.2 7M8.4 13.3L15.2 17" ${RF_LINE}/><circle data-part="hub" cx="6" cy="12" r="2.7" ${RF}/><circle data-part="node-top" cx="17.5" cy="5.8" r="2.7" ${RF}/><circle data-part="node-bot" cx="17.5" cy="18.2" r="2.7" ${RF}/>`,
    },
  },
  // 127. COPY
  {
    name: "copy",
    label: "Copy",
    category: "Core UI",
    motionSummary: "Foreground sheet peels upward and offsets smoothly from back card",
    soundSummary: "Crisp duplicate sheet slide + double paper tap",
    svgs: {
      outline: `<path data-part="back" d="M8.5 7.5V5.5A1.8 1.8 0 0 1 10.3 3.7H18.5A1.8 1.8 0 0 1 20.3 5.5V14.2A1.8 1.8 0 0 1 18.5 16H16.5" ${K}/><rect data-part="front" x="4" y="8" width="12" height="12.5" rx="2" ${K}/>`,
      solid: `<path data-part="back" fill="currentColor" opacity="0.55" d="M10.2 3.5H18.4A2 2 0 0 1 20.4 5.5V14.2A2 2 0 0 1 18.4 16.2H17.2V9.6A2.6 2.6 0 0 0 14.6 7H8.2V5.5A2 2 0 0 1 10.2 3.5Z"/><rect data-part="front" x="3.8" y="8.2" width="12.2" height="12.4" rx="2.2" fill="currentColor"/>`,
      duotone: `<path data-part="back" d="M8.5 7.5V5.5A1.8 1.8 0 0 1 10.3 3.7H18.5A1.8 1.8 0 0 1 20.3 5.5V14.2A1.8 1.8 0 0 1 18.5 16H16.5" ${DK}/><rect data-part="front" x="4" y="8" width="12" height="12.5" rx="2" ${D}/>`,
      glass: glassCompose(
        `<rect data-part="back" x="8.2" y="3.5" width="12" height="12.5" rx="2.2" ${GB}/>`,
        `<rect data-part="front" x="3.8" y="8" width="12.2" height="12.6" rx="2.2"/>`,
        `<g data-part="front" ${GF}><rect x="3.8" y="8" width="12.2" height="12.6" rx="2.2"/></g><line data-part="front" x1="6.4" y1="12" x2="13.4" y2="12" ${GH}/>`
      ),
      stencil: `<g fill="currentColor"><path data-part="back" d="M9.6 3.6H18.4A2 2 0 0 1 20.4 5.6V14.4A1.6 1.6 0 0 1 18.8 16H17.6V6.2H8V5.2A1.6 1.6 0 0 1 9.6 3.6Z"/><g data-part="front"><rect x="3.8" y="8.2" width="12" height="4.8" rx="1.6"/><rect x="3.8" y="14.4" width="12" height="6" rx="1.6"/></g></g>`,
      hardware: `<rect data-part="back" x="8.2" y="3.5" width="12" height="12.5" rx="2" ${HD}/><g data-part="front"><rect x="3.8" y="8" width="12.2" height="12.5" rx="2" ${HL}/><circle cx="13.2" cy="11" r="0.9" ${HA}/></g>`,
      relief: `<g data-part="back"><path transform="translate(1.3,1.3)" d="M8.5 7.5V5.5A1.8 1.8 0 0 1 10.3 3.7H18.5A1.8 1.8 0 0 1 20.3 5.5V14.2A1.8 1.8 0 0 1 18.5 16H16.5" ${RS_LINE}/><path d="M8.5 7.5V5.5A1.8 1.8 0 0 1 10.3 3.7H18.5A1.8 1.8 0 0 1 20.3 5.5V14.2A1.8 1.8 0 0 1 18.5 16H16.5" ${RF_LINE}/></g><g data-part="front"><rect transform="translate(1.3,1.3)" x="4" y="8" width="12" height="12.5" rx="2" ${RS}/><rect x="4" y="8" width="12" height="12.5" rx="2" ${RF}/></g>`,
    },
  },
  // 128. LAYERS
  {
    name: "layers",
    label: "Layers",
    category: "Core UI",
    motionSummary: "Three stacked isometric planes fan vertically into exploded view",
    soundSummary: "Three-card layered deck fan flutter",
    svgs: {
      outline: `<polygon data-part="top" points="12 3.8 20.2 8.2 12 12.6 3.8 8.2" ${K}/><polyline data-part="mid" points="3.8 12.2 12 16.6 20.2 12.2" ${K}/><polyline data-part="bot" points="3.8 16.2 12 20.6 20.2 16.2" ${K}/>`,
      solid: `<g fill="currentColor"><polygon data-part="top" points="12 3.6 20.5 8 12 12.4 3.5 8"/><path data-part="mid" d="M3.6 12.1L12 16.5L20.4 12.1L19.1 10.9L12 14.6L4.9 10.9Z"/><path data-part="bot" d="M3.6 16.1L12 20.5L20.4 16.1L19.1 14.9L12 18.6L4.9 14.9Z"/></g>`,
      duotone: `<polygon data-part="top" points="12 3.8 20.2 8.2 12 12.6 3.8 8.2" ${D}/><polyline data-part="mid" points="3.8 12.2 12 16.6 20.2 12.2" ${DK}/><polyline data-part="bot" points="3.8 16.2 12 20.6 20.2 16.2" ${DK}/>`,
      glass: glassCompose(
        `<polygon data-part="bot" points="12 12.6 20 16.5 12 20.5 4 16.5" ${GB}/><polygon data-part="mid" points="12 8.4 20 12.3 12 16.3 4 12.3" ${GB}/>`,
        `<polygon data-part="top" points="12 3.6 20.2 7.8 12 12 3.8 7.8"/>`
      ),
      stencil: `<g fill="currentColor"><polygon data-part="top" points="12 3.8 20 8 12 12.2 4 8"/><g data-part="mid"><polygon points="4 12.2 11.2 16 11.2 14.2 5.4 11.2"/><polygon points="20 12.2 12.8 16 12.8 14.2 18.6 11.2"/></g><g data-part="bot"><polygon points="4 16.4 11.2 20.2 11.2 18.4 5.4 15.4"/><polygon points="20 16.4 12.8 20.2 12.8 18.4 18.6 15.4"/></g></g>`,
      hardware: `<polygon data-part="bot" points="12 12.2 20 16.2 12 20.2 4 16.2" ${HD}/><polygon data-part="mid" points="12 8.2 20 12.2 12 16.2 4 12.2" ${HM}/><polygon data-part="top" points="12 4 20 8 12 12 4 8" ${HL}/><circle cx="12" cy="8" r="0.9" ${HA}/>`,
      relief: `<g transform="translate(1.3,1.3)"><polygon data-part="top" points="12 3.8 20.2 8.2 12 12.6 3.8 8.2" ${RS}/><polyline data-part="mid" points="3.8 12.2 12 16.6 20.2 12.2" ${RS_LINE}/><polyline data-part="bot" points="3.8 16.2 12 20.6 20.2 16.2" ${RS_LINE}/></g><polygon data-part="top" points="12 3.8 20.2 8.2 12 12.6 3.8 8.2" ${RF}/><polyline data-part="mid" points="3.8 12.2 12 16.6 20.2 12.2" ${RF_LINE}/><polyline data-part="bot" points="3.8 16.2 12 20.6 20.2 16.2" ${RF_LINE}/>`,
    },
  },
  // 129. GRID
  {
    name: "grid",
    label: "Grid",
    category: "Core UI",
    motionSummary: "Four rounded dashboard tiles pop sequentially in a clockwise wave",
    soundSummary: "Clockwise 4-tile marimba blip cascade",
    svgs: {
      outline: `<rect data-part="tl" x="4" y="4" width="6.8" height="6.8" rx="1.6" ${K}/><rect data-part="tr" x="13.2" y="4" width="6.8" height="6.8" rx="1.6" ${K}/><rect data-part="br" x="13.2" y="13.2" width="6.8" height="6.8" rx="1.6" ${K}/><rect data-part="bl" x="4" y="13.2" width="6.8" height="6.8" rx="1.6" ${K}/>`,
      solid: `<g fill="currentColor"><rect data-part="tl" x="3.8" y="3.8" width="7.2" height="7.2" rx="1.8"/><rect data-part="tr" x="13" y="3.8" width="7.2" height="7.2" rx="1.8"/><rect data-part="br" x="13" y="13" width="7.2" height="7.2" rx="1.8"/><rect data-part="bl" x="3.8" y="13" width="7.2" height="7.2" rx="1.8"/></g>`,
      duotone: `<rect data-part="tl" x="4" y="4" width="6.8" height="6.8" rx="1.6" ${D}/><rect data-part="tr" x="13.2" y="4" width="6.8" height="6.8" rx="1.6" ${D}/><rect data-part="br" x="13.2" y="13.2" width="6.8" height="6.8" rx="1.6" ${D}/><rect data-part="bl" x="4" y="13.2" width="6.8" height="6.8" rx="1.6" ${D}/>`,
      glass: glassCompose(
        `<rect data-part="tr" x="13" y="3.8" width="7.2" height="7.2" rx="1.8" ${GB}/><rect data-part="bl" x="3.8" y="13" width="7.2" height="7.2" rx="1.8" ${GB}/>`,
        `<g><rect data-part="tl" x="3.8" y="3.8" width="7.2" height="7.2" rx="1.8"/><rect data-part="br" x="13" y="13" width="7.2" height="7.2" rx="1.8"/></g>`
      ),
      stencil: `<g fill="currentColor"><path data-part="tl" fill-rule="evenodd" d="M3.8 3.8H11V11H3.8ZM5.8 5.8V9H9V5.8Z"/><path data-part="tr" fill-rule="evenodd" d="M13 3.8H20.2V11H13ZM15 5.8V9H18.2V5.8Z"/><path data-part="br" fill-rule="evenodd" d="M13 13H20.2V20.2H13ZM15 15V18.2H18.2V15Z"/><path data-part="bl" fill-rule="evenodd" d="M3.8 13H11V20.2H3.8ZM5.8 15V18.2H9V15Z"/></g>`,
      hardware: `<rect data-part="tl" x="3.8" y="3.8" width="7.2" height="7.2" rx="1.6" ${HL}/><rect data-part="tr" x="13" y="3.8" width="7.2" height="7.2" rx="1.6" ${HA}/><rect data-part="br" x="13" y="13" width="7.2" height="7.2" rx="1.6" ${HL}/><rect data-part="bl" x="3.8" y="13" width="7.2" height="7.2" rx="1.6" ${HM}/>`,
      relief: `<g transform="translate(1.3,1.3)"><rect data-part="tl" x="4" y="4" width="6.8" height="6.8" rx="1.6" ${RS}/><rect data-part="tr" x="13.2" y="4" width="6.8" height="6.8" rx="1.6" ${RS}/><rect data-part="br" x="13.2" y="13.2" width="6.8" height="6.8" rx="1.6" ${RS}/><rect data-part="bl" x="4" y="13.2" width="6.8" height="6.8" rx="1.6" ${RS}/></g><rect data-part="tl" x="4" y="4" width="6.8" height="6.8" rx="1.6" ${RF}/><rect data-part="tr" x="13.2" y="4" width="6.8" height="6.8" rx="1.6" ${RF}/><rect data-part="br" x="13.2" y="13.2" width="6.8" height="6.8" rx="1.6" ${RF}/><rect data-part="bl" x="4" y="13.2" width="6.8" height="6.8" rx="1.6" ${RF}/>`,
    },
  },
  // 130. DASHBOARD
  {
    name: "dashboard",
    label: "Dashboard",
    category: "Core UI",
    motionSummary: "Dial arc expands smoothly while indicator needle sweeps into redline",
    soundSummary: "Analog speedometer needle sweep + telemetry lock tone",
    svgs: {
      outline: `<path data-part="arc" d="M4.2 16.5A8.5 8.5 0 1 1 19.8 16.5" ${K}/><path d="M5.5 18.8H18.5" ${K_THIN}/><g data-part="needle" data-pivot="12 15.5" ${K}><line x1="12" y1="15.5" x2="15.8" y2="10.2"/><circle cx="12" cy="15.5" r="1.4" fill="currentColor"/></g>`,
      solid: `<path data-part="arc" fill="currentColor" d="M3.6 16.8A8.8 8.8 0 1 1 20.4 16.8A1.1 1.1 0 0 1 18.5 15.7A6.6 6.6 0 1 0 5.5 15.7A1.1 1.1 0 0 1 3.6 16.8Z"/><g data-part="needle" data-pivot="12 15.5" fill="currentColor"><path d="M11.2 15L15.6 9.6A0.7 0.7 0 0 1 16.7 10.5L12.8 16.1Z"/><circle cx="12" cy="15.5" r="2"/></g>`,
      duotone: `<path data-part="arc" d="M4.2 16.5A8.5 8.5 0 1 1 19.8 16.5Z" ${D}/><g data-part="needle" data-pivot="12 15.5"><line x1="12" y1="15.5" x2="15.8" y2="10.2" ${DK}/><circle cx="12" cy="15.5" r="1.5" fill="currentColor"/></g>`,
      glass: glassCompose(
        `<path data-part="arc" d="M4.2 16.5A8.5 8.5 0 1 1 19.8 16.5" ${GBS}/>`,
        `<path data-part="arc" d="M4 16.5A8.5 8.5 0 1 1 20 16.5Z"/>`,
        `<g data-part="arc" ${GF}><path d="M4 16.5A8.5 8.5 0 1 1 20 16.5Z"/></g><g data-part="needle" data-pivot="12 15.5"><line x1="12" y1="15.5" x2="15.8" y2="10.2" ${GBS}/><circle cx="12" cy="15.5" r="1.6" ${GB}/></g>`
      ),
      stencil: `<g data-part="arc" fill="currentColor"><path d="M3.8 16A8.6 8.6 0 0 1 11.2 6.8V8.9A6.5 6.5 0 0 0 5.8 15.6Z"/><path d="M12.8 6.8A8.6 8.6 0 0 1 20.2 16L18.2 15.6A6.5 6.5 0 0 0 12.8 8.9Z"/></g><g data-part="needle" data-pivot="12 15.5" fill="currentColor"><path d="M11.3 15L15.4 9.8A0.65 0.65 0 0 1 16.5 10.7L12.7 16Z"/><circle cx="12" cy="15.5" r="1.9"/></g>`,
      hardware: `<path data-part="arc" d="M4.2 16.5A8.5 8.5 0 1 1 19.8 16.5Z" ${HD}/><g data-part="needle" data-pivot="12 15.5"><line x1="12" y1="15.5" x2="15.8" y2="10.2" stroke="#ff6b35" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="15.5" r="1.8" ${HL}/></g>`,
      relief: `<g data-part="arc"><path transform="translate(1.3,1.3)" d="M4.2 16.5A8.5 8.5 0 1 1 19.8 16.5Z" ${RS}/><path d="M4.2 16.5A8.5 8.5 0 1 1 19.8 16.5Z" ${RF}/></g><g data-part="needle" data-pivot="12 15.5"><line x1="12" y1="15.5" x2="15.8" y2="10.2" ${RF_LINE}/><circle cx="12" cy="15.5" r="1.4" ${RF}/></g>`,
    },
  },
];
