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

export const TECH_ICONS: IconDef[] = [
  // 71. WIFI
  {
    name: "wifi",
    label: "Wi-Fi",
    category: "Tech & Controls",
    motionSummary: "Concentric signal arcs ripple outward sequentially from beacon dot",
    soundSummary: "Wireless handshake ping + ascending harmonic chirp",
    svgs: {
      outline: `<path data-part="arc-3" data-pivot="12 18.2" d="M2.5 8.8A13.5 13.5 0 0 1 21.5 8.8" ${K}/><path data-part="arc-2" data-pivot="12 18.2" d="M5.5 11.8A9.2 9.2 0 0 1 18.5 11.8" ${K}/><path data-part="arc-1" data-pivot="12 18.2" d="M8.6 14.8A4.8 4.8 0 0 1 15.4 14.8" ${K}/><circle data-part="dot" data-pivot="12 18.2" cx="12" cy="18.2" r="1.4" fill="currentColor"/>`,
      solid: `<path data-part="arc-3" data-pivot="12 18.2" d="M2.2 8.6A13.8 13.8 0 0 1 21.8 8.6L20.1 10.4A11.4 11.4 0 0 0 3.9 10.4Z" fill="currentColor"/><path data-part="arc-2" data-pivot="12 18.2" d="M5.2 11.6A9.6 9.6 0 0 1 18.8 11.6L17.1 13.4A7.2 7.2 0 0 0 6.9 13.4Z" fill="currentColor"/><path data-part="arc-1" data-pivot="12 18.2" d="M8.3 14.6A5.2 5.2 0 0 1 15.7 14.6L14 16.4A2.9 2.9 0 0 0 10 16.4Z" fill="currentColor"/><circle data-part="dot" data-pivot="12 18.2" cx="12" cy="18.2" r="1.7" fill="currentColor"/>`,
      duotone: `<path data-part="arc-3" data-pivot="12 18.2" d="M2.5 8.8A13.5 13.5 0 0 1 21.5 8.8" ${DK}/><path data-part="arc-2" data-pivot="12 18.2" d="M5.5 11.8A9.2 9.2 0 0 1 18.5 11.8" ${DK}/><path data-part="arc-1" data-pivot="12 18.2" d="M8.6 14.8A4.8 4.8 0 0 1 15.4 14.8" ${DK}/><circle data-part="dot" data-pivot="12 18.2" cx="12" cy="18.2" r="1.7" ${D}/>`,
      glass: glassCompose(
        `<path data-part="arc-3" data-pivot="12 18.2" d="M2.2 8.6A13.8 13.8 0 0 1 21.8 8.6L20.1 10.4A11.4 11.4 0 0 0 3.9 10.4Z" ${GB}/><path data-part="arc-1" data-pivot="12 18.2" d="M8.3 14.6A5.2 5.2 0 0 1 15.7 14.6L14 16.4A2.9 2.9 0 0 0 10 16.4Z" ${GB}/><circle data-part="dot" data-pivot="12 18.2" cx="12" cy="18.2" r="1.8" ${GB}/>`,
        `<path data-part="arc-2" data-pivot="12 18.2" d="M4.8 11.4A10.2 10.2 0 0 1 19.2 11.4L17 13.7A7 7 0 0 0 7 13.7Z"/>`
      ),
      stencil: `<g data-part="arc-3" data-pivot="12 18.2" fill="currentColor"><path d="M2.2 8.6A13.8 13.8 0 0 1 11.1 4.6V7A11.4 11.4 0 0 0 3.9 10.4Z"/><path d="M21.8 8.6A13.8 13.8 0 0 0 12.9 4.6V7A11.4 11.4 0 0 1 20.1 10.4Z"/></g><g data-part="arc-2" data-pivot="12 18.2" fill="currentColor"><path d="M5.2 11.6A9.6 9.6 0 0 1 11.1 8.8V11.2A7.2 7.2 0 0 0 6.9 13.4Z"/><path d="M18.8 11.6A9.6 9.6 0 0 0 12.9 8.8V11.2A7.2 7.2 0 0 1 17.1 13.4Z"/></g><path data-part="arc-1" data-pivot="12 18.2" d="M8.3 14.6A5.2 5.2 0 0 1 15.7 14.6L14 16.4A2.9 2.9 0 0 0 10 16.4Z" fill="currentColor"/><circle data-part="dot" data-pivot="12 18.2" cx="12" cy="18.2" r="1.7" fill="currentColor"/>`,
      hardware: `<path data-part="arc-3" data-pivot="12 18.2" d="M2.2 8.6A13.8 13.8 0 0 1 21.8 8.6L20.1 10.4A11.4 11.4 0 0 0 3.9 10.4Z" ${HD}/><path data-part="arc-2" data-pivot="12 18.2" d="M5.2 11.6A9.6 9.6 0 0 1 18.8 11.6L17.1 13.4A7.2 7.2 0 0 0 6.9 13.4Z" ${HM}/><path data-part="arc-1" data-pivot="12 18.2" d="M8.3 14.6A5.2 5.2 0 0 1 15.7 14.6L14 16.4A2.9 2.9 0 0 0 10 16.4Z" ${HL}/><circle data-part="dot" data-pivot="12 18.2" cx="12" cy="18.2" r="1.9" ${HA}/>`,
      relief: `<g data-part="arc-3" data-pivot="12 18.2"><path transform="translate(1.3,1.3)" d="M2.5 8.8A13.5 13.5 0 0 1 21.5 8.8" ${RS_LINE}/><path d="M2.5 8.8A13.5 13.5 0 0 1 21.5 8.8" ${RF_LINE}/></g><g data-part="arc-2" data-pivot="12 18.2"><path transform="translate(1.3,1.3)" d="M5.5 11.8A9.2 9.2 0 0 1 18.5 11.8" ${RS_LINE}/><path d="M5.5 11.8A9.2 9.2 0 0 1 18.5 11.8" ${RF_LINE}/></g><g data-part="arc-1" data-pivot="12 18.2"><path transform="translate(1.3,1.3)" d="M8.6 14.8A4.8 4.8 0 0 1 15.4 14.8" ${RS_LINE}/><path d="M8.6 14.8A4.8 4.8 0 0 1 15.4 14.8" ${RF_LINE}/></g><g data-part="dot" data-pivot="12 18.2"><circle transform="translate(1.3,1.3)" cx="12" cy="18.2" r="1.6" ${RS}/><circle cx="12" cy="18.2" r="1.6" ${RF}/></g>`,
    },
  },
  // 72. BLUETOOTH
  {
    name: "bluetooth",
    label: "Bluetooth",
    category: "Tech & Controls",
    motionSummary: "Nordic rune pulses outward with crisp pairing snap",
    soundSummary: "Dual-tone BLE pairing chime",
    svgs: {
      outline: `<path data-part="rune" d="M7 7.5L16.5 16L12 20V4L16.5 8L7 16.5" ${K}/>`,
      solid: `<path data-part="rune" d="M7 7.5L16.5 16L12 20V4L16.5 8L7 16.5" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>`,
      duotone: `<g data-part="rune"><polygon points="12 4 16.5 8 12 12" ${D}/><polygon points="12 12 16.5 16 12 20" ${D}/><path d="M7 7.5L16.5 16L12 20V4L16.5 8L7 16.5" ${DK}/></g>`,
      glass: glassCompose(
        `<path data-part="rune" data-pivot="12 12" d="M6.8 7.5L16.2 16L11.8 20V4L16.2 8L6.8 16.5" ${GBS}/>`,
        `<path data-part="rune" data-pivot="12 12" d="M12 3.8L17.2 8.2L13 12L17.2 15.8L12 20.2Z"/>`
      ),
      stencil: `<g data-part="rune" fill="currentColor"><polygon points="11.2 4 16.8 8.2 12.6 11.4 11.2 11.4"/><polygon points="11.2 12.6 12.6 12.6 16.8 15.8 11.2 20"/><path d="M7 7.5L10.2 10.4" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><path d="M7 16.5L10.2 13.6" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></g>`,
      hardware: `<g data-part="rune"><polygon points="12 4 16.8 8.2 12 12" ${HA}/><polygon points="12 12 16.8 15.8 12 20" ${HL}/><path d="M7 7.5L12 12L7 16.5" fill="none" stroke="#3f3f46" stroke-width="1.9" stroke-linecap="round"/></g>`,
      relief: `<g data-part="rune"><path transform="translate(1.5,1.5)" d="M7 7.5L16.5 16L12 20V4L16.5 8L7 16.5" ${RS_LINE}/><path d="M7 7.5L16.5 16L12 20V4L16.5 8L7 16.5" ${RF_LINE}/></g>`,
    },
  },
  // 73. BATTERY
  {
    name: "battery",
    label: "Battery",
    category: "Tech & Controls",
    motionSummary: "Charge cells cascade upward as terminal cap clicks",
    soundSummary: "Power-cell lock + rising charge hum",
    svgs: {
      outline: `<rect x="3" y="7" width="16" height="10" rx="2.2" ${K}/><line data-part="cap" x1="21" y1="10.2" x2="21" y2="13.8" ${K}/><line data-part="bar-1" x1="7" y1="10" x2="7" y2="14" ${K}/><line data-part="bar-2" x1="11" y1="10" x2="11" y2="14" ${K}/>`,
      solid: `<path fill="currentColor" fill-rule="evenodd" d="M5 6.8H17A2.2 2.2 0 0 1 19.2 9V15A2.2 2.2 0 0 1 17 17.2H5A2.2 2.2 0 0 1 2.8 15V9A2.2 2.2 0 0 1 5 6.8ZM5.5 9.2V14.8H16.5V9.2Z"/><rect data-part="cap" x="20" y="9.8" width="2" height="4.4" rx="0.9" fill="currentColor"/><rect data-part="bar-1" x="6.5" y="10" width="2.4" height="4" rx="0.7" fill="currentColor"/><rect data-part="bar-2" x="10.2" y="10" width="2.4" height="4" rx="0.7" fill="currentColor"/>`,
      duotone: `<rect x="3" y="7" width="16" height="10" rx="2.2" ${D}/><line data-part="cap" x1="21" y1="10.2" x2="21" y2="13.8" ${DK}/><rect data-part="bar-1" x="6" y="9.8" width="2.2" height="4.4" rx="0.6" fill="currentColor"/><rect data-part="bar-2" x="9.6" y="9.8" width="2.2" height="4.4" rx="0.6" fill="currentColor"/>`,
      glass: glassCompose(
        `<rect data-part="cap" data-pivot="20.5 12" x="18.6" y="9.6" width="3" height="4.8" rx="1" ${GB}/>`,
        `<rect x="3" y="7" width="16" height="10" rx="2.4"/>`,
        `<g ${GF}><rect x="3" y="7" width="16" height="10" rx="2.4"/></g><rect data-part="bar-1" x="6" y="9.6" width="2.4" height="4.8" rx="0.7" ${GB}/><rect data-part="bar-2" x="9.6" y="9.6" width="2.4" height="4.8" rx="0.7" ${GB}/>`
      ),
      stencil: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><rect data-part="bar-1" x="6.4" y="9.8" width="2.2" height="4.4" rx="0.6" fill="#000"/><rect data-part="bar-2" x="13.2" y="9.8" width="2.2" height="4.4" rx="0.6" fill="#000"/></mask></defs><g fill="currentColor" mask="url(#__GID__-m1)"><path d="M5.2 7H10.2V17H5.2A2.2 2.2 0 0 1 3 14.8V9.2A2.2 2.2 0 0 1 5.2 7Z"/><path d="M11.8 7H16.8A2.2 2.2 0 0 1 19 9.2V14.8A2.2 2.2 0 0 1 16.8 17H11.8Z"/></g><rect data-part="cap" x="20" y="9.8" width="2" height="4.4" rx="0.8" fill="currentColor"/>`,
      hardware: `<rect data-part="cap" x="19.6" y="9.6" width="2.4" height="4.8" rx="0.8" ${HL}/><rect x="3" y="7" width="16.4" height="10" rx="2.2" ${HD}/><rect data-part="bar-1" x="5.8" y="9.5" width="2.6" height="5" rx="0.6" ${HA}/><rect data-part="bar-2" x="9.6" y="9.5" width="2.6" height="5" rx="0.6" ${HA}/>`,
      relief: `<rect data-part="cap" x="20" y="9.8" width="2" height="4.4" rx="0.8" ${RF}/><rect transform="translate(1.5,1.5)" x="3" y="7" width="16" height="10" rx="2.2" ${RS}/><rect x="3" y="7" width="16" height="10" rx="2.2" ${RF}/><rect data-part="bar-1" x="6.2" y="9.8" width="2.2" height="4.4" rx="0.6" ${RS}/><rect data-part="bar-2" x="9.8" y="9.8" width="2.2" height="4.4" rx="0.6" ${RS}/>`,
    },
  },
  // 74. CPU
  {
    name: "cpu",
    label: "Processor",
    category: "Tech & Controls",
    motionSummary: "Silicon core pulses inside expanding copper pin array",
    soundSummary: "Clock-cycle crystal tick + logic hum",
    svgs: {
      outline: `<g data-part="pins" ${K}><path d="M9 2.5V5M15 2.5V5M9 19V21.5M15 19V21.5M2.5 9H5M2.5 15H5M19 9H21.5M19 15H21.5"/><rect x="5" y="5" width="14" height="14" rx="2.2"/></g><rect data-part="die" x="9" y="9" width="6" height="6" rx="0.9" ${K}/>`,
      solid: `<path data-part="pins" d="M9 2.5V5M15 2.5V5M9 19V21.5M15 19V21.5M2.5 9H5M2.5 15H5M19 9H21.5M19 15H21.5" ${K}/><path fill="currentColor" fill-rule="evenodd" d="M7 5H17A2 2 0 0 1 19 7V17A2 2 0 0 1 17 19H7A2 2 0 0 1 5 17V7A2 2 0 0 1 7 5ZM8.5 8.5V15.5H15.5V8.5Z"/><rect data-part="die" x="9.6" y="9.6" width="4.8" height="4.8" rx="0.7" fill="currentColor"/>`,
      duotone: `<g data-part="pins"><path d="M9 2.5V5M15 2.5V5M9 19V21.5M15 19V21.5M2.5 9H5M2.5 15H5M19 9H21.5M19 15H21.5" ${DK}/><rect x="5" y="5" width="14" height="14" rx="2.2" ${D}/></g><rect data-part="die" x="9" y="9" width="6" height="6" rx="0.9" ${D}/>`,
      glass: glassCompose(
        `<g data-part="pins" data-pivot="12 12" ${GBS}><path d="M9 2.5V6M15 2.5V6M9 18V21.5M15 18V21.5M2.5 9H6M2.5 15H6M18 9H21.5M18 15H21.5"/></g><rect data-part="die" data-pivot="12 12" x="8.8" y="8.8" width="6.4" height="6.4" rx="1.1" ${GB}/>`,
        `<rect x="5" y="5" width="14" height="14" rx="2.4"/>`
      ),
      stencil: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><rect data-part="die" x="9.4" y="9.4" width="5.2" height="5.2" rx="0.7" fill="#000"/></mask></defs><path data-part="pins" d="M9 2.5V4.8M15 2.5V4.8M9 19.2V21.5M15 19.2V21.5M2.5 9H4.8M2.5 15H4.8M19.2 9H21.5M19.2 15H21.5" ${K}/><g fill="currentColor" mask="url(#__GID__-m1)"><path d="M7 5H11.2V19H7A2 2 0 0 1 5 17V7A2 2 0 0 1 7 5Z"/><path d="M12.8 5H17A2 2 0 0 1 19 7V17A2 2 0 0 1 17 19H12.8Z"/></g>`,
      hardware: `<g data-part="pins"><path d="M9 2.4V5.2M15 2.4V5.2M9 18.8V21.6M15 18.8V21.6M2.4 9H5.2M2.4 15H5.2M18.8 9H21.6M18.8 15H21.6" stroke="#a1a1aa" stroke-width="1.8" stroke-linecap="round"/><rect x="5" y="5" width="14" height="14" rx="2.2" ${HD}/></g><rect data-part="die" x="8.8" y="8.8" width="6.4" height="6.4" rx="1" ${HA}/>`,
      relief: `<g data-part="pins"><path d="M9 2.5V5M15 2.5V5M9 19V21.5M15 19V21.5M2.5 9H5M2.5 15H5M19 9H21.5M19 15H21.5" ${RF_LINE}/><rect transform="translate(1.5,1.5)" x="5" y="5" width="14" height="14" rx="2.2" ${RS}/><rect x="5" y="5" width="14" height="14" rx="2.2" ${RF}/></g><rect data-part="die" x="9" y="9" width="6" height="6" rx="0.9" ${RS}/>`,
    },
  },
  // 75. TERMINAL
  {
    name: "terminal",
    label: "Terminal",
    category: "Tech & Controls",
    motionSummary: "Command chevron nudges forward as cursor blinks",
    soundSummary: "Mechanical enter-key thock + terminal bell",
    svgs: {
      outline: `<rect x="3" y="4.5" width="18" height="15" rx="2.4" ${K}/><path data-part="prompt" d="M7.2 9.5L10.5 12.2L7.2 15" ${K}/><line data-part="cursor" x1="12.5" y1="15" x2="16.8" y2="15" ${K}/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><path data-part="prompt" d="M7 9.4L10.5 12.2L7 15" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line data-part="cursor" x1="12.5" y1="15" x2="17" y2="15" stroke="#000" stroke-width="2" stroke-linecap="round"/></mask></defs><rect x="2.8" y="4.3" width="18.4" height="15.4" rx="2.5" fill="currentColor" mask="url(#__GID__-m1)"/>`,
      duotone: `<rect x="3" y="4.5" width="18" height="15" rx="2.4" ${D}/><path data-part="prompt" d="M7.2 9.5L10.5 12.2L7.2 15" ${DK}/><line data-part="cursor" x1="12.5" y1="15" x2="16.8" y2="15" ${DK}/>`,
      glass: glassCompose(
        `<rect x="1.8" y="3.5" width="18" height="14.6" rx="2.5" ${GB}/>`,
        `<rect x="3" y="4.5" width="18" height="15" rx="2.5"/>`,
        `<g ${GF}><rect x="3" y="4.5" width="18" height="15" rx="2.5"/></g><path data-part="prompt" d="M7.2 9.5L10.5 12.2L7.2 15" ${GBS}/><line data-part="cursor" x1="12.5" y1="15" x2="16.8" y2="15" ${GBS}/>`
      ),
      stencil: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><path data-part="prompt" d="M6.8 9.6L9.8 12.2L6.8 14.8" fill="none" stroke="#000" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><line data-part="cursor" x1="14" y1="15" x2="17.8" y2="15" stroke="#000" stroke-width="1.9" stroke-linecap="round"/></mask></defs><g fill="currentColor" mask="url(#__GID__-m1)"><path d="M5.4 4.5H11.2V19.5H5.4A2.4 2.4 0 0 1 3 17.1V6.9A2.4 2.4 0 0 1 5.4 4.5Z"/><path d="M12.8 4.5H18.6A2.4 2.4 0 0 1 21 6.9V17.1A2.4 2.4 0 0 1 18.6 19.5H12.8Z"/></g>`,
      hardware: `<rect x="3" y="4.5" width="18" height="15" rx="2.4" ${HD}/><path data-part="prompt" d="M7.2 9.5L10.5 12.2L7.2 15" fill="none" stroke="#ff6b35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line data-part="cursor" x1="12.5" y1="15" x2="16.8" y2="15" stroke="#e4e4e7" stroke-width="2" stroke-linecap="round"/>`,
      relief: `<rect transform="translate(1.5,1.5)" x="3" y="4.5" width="18" height="15" rx="2.4" ${RS}/><rect x="3" y="4.5" width="18" height="15" rx="2.4" ${RF}/><path data-part="prompt" d="M7.2 9.5L10.5 12.2L7.2 15" ${RF_LINE}/><line data-part="cursor" x1="12.5" y1="15" x2="16.8" y2="15" ${RF_LINE}/>`,
    },
  },
  // 76. CODE
  {
    name: "code",
    label: "Code",
    category: "Tech & Controls",
    motionSummary: "Angle brackets spread outward as divider slash tilts",
    soundSummary: "Crisp bracket double-click + slash chime",
    svgs: {
      outline: `<path data-part="left" d="M8.5 7.5L3.5 12L8.5 16.5" ${K}/><path data-part="right" d="M15.5 7.5L20.5 12L15.5 16.5" ${K}/><line data-part="slash" x1="13.5" y1="5.5" x2="10.5" y2="18.5" ${K}/>`,
      solid: `<path data-part="left" d="M8.5 7.5L3.5 12L8.5 16.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path data-part="right" d="M15.5 7.5L20.5 12L15.5 16.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><line data-part="slash" x1="13.6" y1="5.2" x2="10.4" y2="18.8" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>`,
      duotone: `<path data-part="left" d="M8.5 7.5L3.5 12L8.5 16.5" ${DK}/><path data-part="right" d="M15.5 7.5L20.5 12L15.5 16.5" ${DK}/><line data-part="slash" x1="13.5" y1="5.5" x2="10.5" y2="18.5" ${DK}/>`,
      glass: glassCompose(
        `<path data-part="left" data-pivot="6 12" d="M8.5 7.5L3.5 12L8.5 16.5" ${GBS}/><path data-part="right" data-pivot="18 12" d="M15.5 7.5L20.5 12L15.5 16.5" ${GBS}/>`,
        `<path data-part="slash" data-pivot="12 12" d="M12.9 4.8A1.2 1.2 0 0 1 15.1 5.6L11.5 19.2A1.2 1.2 0 0 1 9.3 18.4Z"/>`
      ),
      stencil: `<g fill="currentColor"><path data-part="left" d="M8.2 6.8L9.6 8.3L5.6 12L9.6 15.7L8.2 17.2L2.6 12Z"/><path data-part="right" d="M15.8 6.8L21.4 12L15.8 17.2L14.4 15.7L18.4 12L14.4 8.3Z"/><polygon data-part="slash" points="12.8 5 14.8 5.5 11.2 19 9.2 18.5"/></g>`,
      hardware: `<path data-part="left" d="M8.5 7.5L3.5 12L8.5 16.5" fill="none" stroke="#3f3f46" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path data-part="right" d="M15.5 7.5L20.5 12L15.5 16.5" fill="none" stroke="#3f3f46" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><line data-part="slash" x1="13.6" y1="5.2" x2="10.4" y2="18.8" stroke="#ff6b35" stroke-width="2.4" stroke-linecap="round"/>`,
      relief: `<g data-part="left"><path transform="translate(1.4,1.4)" d="M8.5 7.5L3.5 12L8.5 16.5" ${RS_LINE}/><path d="M8.5 7.5L3.5 12L8.5 16.5" ${RF_LINE}/></g><g data-part="right"><path transform="translate(1.4,1.4)" d="M15.5 7.5L20.5 12L15.5 16.5" ${RS_LINE}/><path d="M15.5 7.5L20.5 12L15.5 16.5" ${RF_LINE}/></g><g data-part="slash"><line transform="translate(1.4,1.4)" x1="13.5" y1="5.5" x2="10.5" y2="18.5" ${RS_LINE}/><line x1="13.5" y1="5.5" x2="10.5" y2="18.5" ${RF_LINE}/></g>`,
    },
  },
  // 77. DATABASE
  {
    name: "database",
    label: "Database",
    category: "Tech & Controls",
    motionSummary: "Stacked storage platters separate and settle back",
    soundSummary: "Server rack platter seek + data lock",
    svgs: {
      outline: `<ellipse data-part="top" cx="12" cy="6.2" rx="7" ry="2.6" ${K}/><path data-part="mid" d="M5 6.2V12C5 13.4 8.1 14.6 12 14.6C15.9 14.6 19 13.4 19 12V6.2" ${K}/><path data-part="bot" d="M5 12V17.8C5 19.2 8.1 20.4 12 20.4C15.9 20.4 19 19.2 19 17.8V12" ${K}/>`,
      solid: `<ellipse data-part="top" cx="12" cy="6" rx="7.2" ry="2.7" fill="currentColor"/><path data-part="mid" d="M4.8 8.2C6.4 9.5 9.1 10 12 10C14.9 10 17.6 9.5 19.2 8.2V11.8C19.2 13.3 16 14.5 12 14.5C8 14.5 4.8 13.3 4.8 11.8Z" fill="currentColor"/><path data-part="bot" d="M4.8 13.8C6.4 15.1 9.1 15.6 12 15.6C14.9 15.6 17.6 15.1 19.2 13.8V17.6C19.2 19.1 16 20.3 12 20.3C8 20.3 4.8 19.1 4.8 17.6Z" fill="currentColor"/>`,
      duotone: `<ellipse data-part="top" cx="12" cy="6.2" rx="7" ry="2.6" ${D}/><path data-part="mid" d="M5 6.2V12C5 13.4 8.1 14.6 12 14.6C15.9 14.6 19 13.4 19 12V6.2" ${D}/><path data-part="bot" d="M5 12V17.8C5 19.2 8.1 20.4 12 20.4C15.9 20.4 19 19.2 19 17.8V12" ${DK}/>`,
      glass: glassCompose(
        `<ellipse cx="12" cy="6" rx="7" ry="2.6" ${GB}/><path d="M5 8.2C6.6 9.5 9.2 10 12 10C14.8 10 17.4 9.5 19 8.2V12.2C19 13.7 15.9 14.9 12 14.9C8.1 14.9 5 13.7 5 12.2Z" ${GB}/><path d="M5 13.8C6.6 15.1 9.2 15.6 12 15.6C14.8 15.6 17.4 15.1 19 13.8V17.6C19 19.1 15.9 20.3 12 20.3C8.1 20.3 5 19.1 5 17.6Z" ${GB}/>`,
        ``,
        `<g data-part="bot" data-pivot="12 17"><path d="M5 13.8C6.6 15.1 9.2 15.6 12 15.6C14.8 15.6 17.4 15.1 19 13.8V17.6C19 19.1 15.9 20.3 12 20.3C8.1 20.3 5 19.1 5 17.6Z" ${GB}/><path d="M6.5 15.4C8 16.1 9.9 16.4 12 16.4" stroke="url(#g-highlight)" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.55"/></g><g data-part="mid" data-pivot="12 11.4"><path d="M5 8.2C6.6 9.5 9.2 10 12 10C14.8 10 17.4 9.5 19 8.2V12.2C19 13.7 15.9 14.9 12 14.9C8.1 14.9 5 13.7 5 12.2Z" ${GB}/><path d="M6.5 9.6C8 10.3 9.9 10.6 12 10.6" stroke="url(#g-highlight)" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.55"/></g><g data-part="top" data-pivot="12 6"><ellipse cx="12" cy="6" rx="7" ry="2.6" ${GF}/><ellipse cx="12" cy="6" rx="7" ry="2.6" ${GBS}/><path d="M7.4 5.4C8.6 4.9 10.2 4.7 12 4.7" stroke="url(#g-highlight)" stroke-width="0.9" stroke-linecap="round" fill="none"/></g>`
      ),
      stencil: `<ellipse data-part="top" cx="12" cy="6" rx="7" ry="2.4" fill="currentColor"/><g data-part="mid" fill="currentColor"><path d="M5 8.5C6.4 9.5 8.8 10 11.2 10.1V14.4C7.8 14.3 5 13.2 5 11.8Z"/><path d="M19 8.5C17.6 9.5 15.2 10 12.8 10.1V14.4C16.2 14.3 19 13.2 19 11.8Z"/></g><g data-part="bot" fill="currentColor"><path d="M5 14C6.4 15 8.8 15.5 11.2 15.6V20C7.8 19.9 5 18.8 5 17.4Z"/><path d="M19 14C17.6 15 15.2 15.5 12.8 15.6V20C16.2 19.9 19 18.8 19 17.4Z"/></g>`,
      hardware: `<ellipse data-part="top" cx="12" cy="6" rx="7.2" ry="2.7" ${HL}/><path data-part="mid" d="M4.8 8.2C6.4 9.5 9.1 10 12 10C14.9 10 17.6 9.5 19.2 8.2V11.8C19.2 13.3 16 14.5 12 14.5C8 14.5 4.8 13.3 4.8 11.8Z" ${HM}/><path data-part="bot" d="M4.8 13.8C6.4 15.1 9.1 15.6 12 15.6C14.9 15.6 17.6 15.1 19.2 13.8V17.6C19.2 19.1 16 20.3 12 20.3C8 20.3 4.8 19.1 4.8 17.6Z" ${HD}/>`,
      relief: `<g data-part="bot"><path transform="translate(1.5,1.5)" d="M5 12V17.8C5 19.2 8.1 20.4 12 20.4C15.9 20.4 19 19.2 19 17.8V12Z" ${RS}/><path d="M5 12V17.8C5 19.2 8.1 20.4 12 20.4C15.9 20.4 19 19.2 19 17.8V12Z" ${RF}/></g><g data-part="mid"><path transform="translate(1.5,1.5)" d="M5 6.2V12C5 13.4 8.1 14.6 12 14.6C15.9 14.6 19 13.4 19 12V6.2Z" ${RS}/><path d="M5 6.2V12C5 13.4 8.1 14.6 12 14.6C15.9 14.6 19 13.4 19 12V6.2Z" ${RF}/></g><ellipse data-part="top" cx="12" cy="6.2" rx="7" ry="2.6" ${RF}/>`,
    },
  },
  // 78. POWER
  {
    name: "power",
    label: "Power",
    category: "Tech & Controls",
    motionSummary: "Center actuator stem depresses inside expanding power ring",
    soundSummary: "Heavy tactile mains toggle + boot chime",
    svgs: {
      outline: `<path data-part="ring" d="M17.2 6.8A7.8 7.8 0 1 1 6.8 6.8" ${K}/><line data-part="stem" x1="12" y1="3.5" x2="12" y2="11.5" ${K}/>`,
      solid: `<path data-part="ring" d="M17.2 6.8A7.8 7.8 0 1 1 6.8 6.8" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><line data-part="stem" x1="12" y1="3.5" x2="12" y2="11.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>`,
      duotone: `<circle cx="12" cy="12.5" r="7.5" ${D} stroke="none"/><path data-part="ring" d="M17.2 6.8A7.8 7.8 0 1 1 6.8 6.8" ${DK}/><line data-part="stem" x1="12" y1="3.5" x2="12" y2="11.5" ${DK}/>`,
      glass: glassCompose(
        `<circle cx="10.5" cy="11.2" r="7.8" ${GB}/>`,
        `<circle cx="12" cy="12.5" r="8"/>`,
        `<g ${GF}><circle cx="12" cy="12.5" r="8"/></g><path data-part="ring" data-pivot="12 12.5" d="M16 8A5.8 5.8 0 1 1 8 8" ${GBS}/><g data-part="stem"><rect x="11" y="5.2" width="2.2" height="6.8" rx="1.1" ${GB}/><rect x="11.5" y="5.6" width="0.6" height="5.4" rx="0.3" ${GH} opacity="0.9"/></g>`
      ),
      stencil: `<g data-part="ring" fill="currentColor"><path d="M6.8 6.6A7.8 7.8 0 0 0 11 19.9V17.4A5.4 5.4 0 0 1 8.4 8.3Z"/><path d="M17.2 6.6A7.8 7.8 0 0 1 13 19.9V17.4A5.4 5.4 0 0 0 15.6 8.3Z"/></g><rect data-part="stem" x="10.9" y="3.5" width="2.2" height="8" rx="1.1" fill="currentColor"/>`,
      hardware: `<circle cx="12" cy="12.5" r="8.8" ${HD}/><path data-part="ring" d="M15.8 8.2A5.6 5.6 0 1 1 8.2 8.2" fill="none" stroke="#e4e4e7" stroke-width="2" stroke-linecap="round"/><line data-part="stem" x1="12" y1="5.8" x2="12" y2="12" stroke="#ff6b35" stroke-width="2.2" stroke-linecap="round"/>`,
      relief: `<g data-part="ring"><path transform="translate(1.4,1.4)" d="M17.2 6.8A7.8 7.8 0 1 1 6.8 6.8" ${RS_LINE}/><path d="M17.2 6.8A7.8 7.8 0 1 1 6.8 6.8" ${RF_LINE}/></g><g data-part="stem"><line transform="translate(1.4,1.4)" x1="12" y1="3.5" x2="12" y2="11.5" ${RS_LINE}/><line x1="12" y1="3.5" x2="12" y2="11.5" ${RF_LINE}/></g>`,
    },
  },
  // 79. SHIELD
  {
    name: "shield",
    label: "Shield",
    category: "Tech & Controls",
    motionSummary: "Armor crest fortifies forward as verification tick pops",
    soundSummary: "Resonant armor deflection + security verify chime",
    svgs: {
      outline: `<path data-part="shield" d="M12 3.2L19 6.2V11.8C19 16.2 15.8 19.4 12 20.8C8.2 19.4 5 16.2 5 11.8V6.2Z" ${K}/><path data-part="core" d="M9.2 12L11.2 14L15 9.8" ${K}/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><path data-part="core" d="M9 12L11.1 14.1L15.2 9.7" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></mask></defs><path data-part="shield" fill="currentColor" mask="url(#__GID__-m1)" d="M12 3L19.2 6.1V11.8C19.2 16.4 15.9 19.6 12 21C8.1 19.6 4.8 16.4 4.8 11.8V6.1Z"/>`,
      duotone: `<path data-part="shield" d="M12 3.2L19 6.2V11.8C19 16.2 15.8 19.4 12 20.8C8.2 19.4 5 16.2 5 11.8V6.2Z" ${D}/><path data-part="core" d="M9.2 12L11.2 14L15 9.8" ${DK}/>`,
      glass: glassCompose(
        `<path data-part="shield" data-pivot="12 12" transform="translate(-1.5,-1)" d="M12 3L19.2 6.1V11.8C19.2 16.4 15.9 19.6 12 21C8.1 19.6 4.8 16.4 4.8 11.8V6.1Z" ${GB}/>`,
        `<path data-part="shield" data-pivot="12 12" d="M12 3L19.2 6.1V11.8C19.2 16.4 15.9 19.6 12 21C8.1 19.6 4.8 16.4 4.8 11.8V6.1Z"/>`,
        `<g data-part="shield" data-pivot="12 12" ${GF}><path d="M12 3L19.2 6.1V11.8C19.2 16.4 15.9 19.6 12 21C8.1 19.6 4.8 16.4 4.8 11.8V6.1Z"/></g><path data-part="core" d="M9 12L11.1 14.1L15.2 9.7" ${GBS}/>`
      ),
      stencil: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><path data-part="core" d="M9 12L11.1 14.1L15.2 9.7" fill="none" stroke="#000" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></mask></defs><g data-part="shield" fill="currentColor" mask="url(#__GID__-m1)"><path d="M11.2 3.4V20.5C7.8 19 5 15.9 5 11.8V6.2Z"/><path d="M12.8 3.4L19 6.2V11.8C19 15.9 16.2 19 12.8 20.5Z"/></g>`,
      hardware: `<g data-part="shield"><path d="M12 3L19.2 6.1V11.8C19.2 16.4 15.9 19.6 12 21C8.1 19.6 4.8 16.4 4.8 11.8V6.1Z" ${HD}/></g><path data-part="core" d="M9 12L11.1 14.1L15.2 9.7" fill="none" stroke="#ff6b35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
      relief: `<g data-part="shield"><path transform="translate(1.5,1.5)" d="M12 3.2L19 6.2V11.8C19 16.2 15.8 19.4 12 20.8C8.2 19.4 5 16.2 5 11.8V6.2Z" ${RS}/><path d="M12 3.2L19 6.2V11.8C19 16.2 15.8 19.4 12 20.8C8.2 19.4 5 16.2 5 11.8V6.2Z" ${RF}/></g><path data-part="core" d="M9.2 12L11.2 14L15 9.8" ${RF_LINE}/>`,
    },
  },
  // 80. KEY (Ref Key rounded bow + diagonal shaft & teeth)
  {
    name: "key",
    label: "Key",
    category: "Tech & Controls",
    motionSummary: "Brass key turns 45° clockwise from bow pivot",
    soundSummary: "Pin-tumbler key slide + deadbolt turn",
    svgs: {
      outline: `<g data-part="key" data-pivot="12 12" ${K}><circle cx="16.4" cy="6.6" r="4.4"/><circle cx="16.4" cy="6.6" r="1.3" fill="currentColor" stroke="none"/><path d="M13.2 9.8L3.8 19.2M5.9 17.1L7.6 18.8M4.2 18.8L5.6 20.2"/></g>`,
      solid: `<path data-part="key" data-pivot="12 12" fill="currentColor" fill-rule="evenodd" d="M16.35 2.45A4.5 4.5 0 0 0 12.1 8.4L3.2 17.3A1 1 0 0 0 3.2 18.7L5.1 20.6A0.95 0.95 0 0 0 6.45 20.6L7.3 19.75L5.7 18.15L6.8 17.05L8.4 18.65L9.5 17.55L7.9 15.95L13.6 10.25A4.5 4.5 0 1 0 16.35 2.45ZM16.35 5.65A1.3 1.3 0 1 1 16.35 8.25A1.3 1.3 0 1 1 16.35 5.65Z"/>`,
      duotone: `<g data-part="key" data-pivot="12 12"><circle cx="16.4" cy="6.6" r="4.4" ${D}/><circle cx="16.4" cy="6.6" r="1.3" fill="currentColor"/><path d="M13.2 9.8L3.8 19.2M5.9 17.1L7.6 18.8M4.2 18.8L5.6 20.2" ${DK}/></g>`,
      glass: glassCompose(
        `<circle cx="16.4" cy="6.6" r="4.5" ${GB}/><path d="M13.2 9.8L3.8 19.2M5.9 17.1L7.6 18.8M4.2 18.8L5.6 20.2" fill="none" stroke="url(#g-back)" stroke-width="3.4" stroke-linecap="round"/>`,
        ``,
        `<g data-part="key" data-pivot="12 12"><path d="M13.2 9.8L3.8 19.2M5.9 17.1L7.6 18.8M4.2 18.8L5.6 20.2" ${GBS}/><circle cx="16.4" cy="6.6" r="4.5" ${GF}/><circle cx="16.4" cy="6.6" r="4.5" ${GBS}/><circle cx="16.4" cy="6.6" r="1.3" ${GB}/></g>`
      ),
      stencil: `<defs><mask id="__GID__-keygap" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><g stroke="#000" stroke-width="1.2" stroke-linecap="round"><line x1="9.5" y1="10.1" x2="11.6" y2="12.2"/><line x1="7.3" y1="12.3" x2="9.4" y2="14.4"/></g></mask></defs><g data-part="key" data-pivot="12 12" fill="currentColor" mask="url(#__GID__-keygap)"><path fill-rule="evenodd" d="M16.35 2.45A4.5 4.5 0 0 0 12.1 8.4L3.2 17.3A1 1 0 0 0 3.2 18.7L5.1 20.6A0.95 0.95 0 0 0 6.45 20.6L7.3 19.75L5.7 18.15L6.8 17.05L8.4 18.65L9.5 17.55L7.9 15.95L13.6 10.25A4.5 4.5 0 1 0 16.35 2.45ZM16.35 5.65A1.3 1.3 0 1 1 16.35 8.25A1.3 1.3 0 1 1 16.35 5.65Z"/></g>`,
      hardware: `<g data-part="key" data-pivot="12 12"><path d="M13.2 9.8L3.8 19.2M5.9 17.1L7.6 18.8M4.2 18.8L5.6 20.2" fill="none" stroke="#52525b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="16.4" cy="6.6" r="4.5" ${HL}/><circle cx="16.4" cy="6.6" r="1.4" ${HA}/></g>`,
      relief: `<g data-part="key" data-pivot="12 12"><path transform="translate(1.4,1.4)" d="M16.35 2.45A4.5 4.5 0 1 1 16.35 11.45A4.5 4.5 0 1 1 16.35 2.45ZM16.35 5.65A1.3 1.3 0 1 0 16.35 8.25A1.3 1.3 0 1 0 16.35 5.65Z" fill-rule="evenodd" ${RS}/><path transform="translate(1.4,1.4)" d="M13.2 9.8L3.8 19.2M5.9 17.1L7.6 18.8M4.2 18.8L5.6 20.2" ${RS_LINE}/><path d="M13.2 9.8L3.8 19.2M5.9 17.1L7.6 18.8M4.2 18.8L5.6 20.2" ${RF_LINE}/><path d="M16.35 2.45A4.5 4.5 0 1 1 16.35 11.45A4.5 4.5 0 1 1 16.35 2.45ZM16.35 5.65A1.3 1.3 0 1 0 16.35 8.25A1.3 1.3 0 1 0 16.35 5.65Z" fill-rule="evenodd" ${RF}/></g>`,
    },
  },
];
