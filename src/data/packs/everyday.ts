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

export const EVERYDAY_ICONS: IconDef[] = [
  // 111. WINDOW
  {
    name: "window",
    label: "Window",
    category: "Home & Lab",
    motionSummary: "Twin divided-light casement panes swing open cleanly on side hinges",
    soundSummary: "Brass sash latch click + hinged casement swing",
    svgs: {
      outline: `<rect x="3.8" y="3.8" width="16.4" height="15.4" rx="1.4" ${K}/><line x1="2.4" y1="19.2" x2="21.6" y2="19.2" ${K}/><g data-part="pane-l" data-pivot="4.8 11.5" ${K_THIN}><rect x="5" y="5" width="6.4" height="13" rx="0.4"/><line x1="5" y1="11.5" x2="11.4" y2="11.5"/></g><g data-part="pane-r" data-pivot="19.2 11.5" ${K_THIN}><rect x="12.6" y="5" width="6.4" height="13" rx="0.4"/><line x1="12.6" y1="11.5" x2="19" y2="11.5"/></g>`,
      solid: `<path fill="currentColor" fill-rule="evenodd" d="M4.2 3.4H19.8A1.4 1.4 0 0 1 21.2 4.8V18.4H21.6A0.9 0.9 0 0 1 21.6 20.2H2.4A0.9 0.9 0 0 1 2.4 18.4H2.8V4.8A1.4 1.4 0 0 1 4.2 3.4ZM4.8 5V17.6H19.2V5Z"/><g data-part="pane-l" data-pivot="4.8 11.5" fill="currentColor" opacity="0.58"><path fill-rule="evenodd" d="M5.4 5.5H11.4V17.1H5.4ZM6.6 6.7V10.7H10.2V6.7ZM6.6 11.9V15.9H10.2V11.9Z"/></g><g data-part="pane-r" data-pivot="19.2 11.5" fill="currentColor" opacity="0.58"><path fill-rule="evenodd" d="M12.6 5.5H18.6V17.1H12.6ZM13.8 6.7V10.7H17.4V6.7ZM13.8 11.9V15.9H17.4V11.9Z"/></g>`,
      duotone: `<rect x="3.8" y="3.8" width="16.4" height="15.4" rx="1.4" ${DK}/><line x1="2.4" y1="19.2" x2="21.6" y2="19.2" ${DK}/><g data-part="pane-l" data-pivot="4.8 11.5"><rect x="5" y="5" width="6.4" height="13" rx="0.4" ${D}/><line x1="5" y1="11.5" x2="11.4" y2="11.5" ${DK_THIN}/></g><g data-part="pane-r" data-pivot="19.2 11.5"><rect x="12.6" y="5" width="6.4" height="13" rx="0.4" ${D}/><line x1="12.6" y1="11.5" x2="19" y2="11.5" ${DK_THIN}/></g>`,
      glass: glassCompose(
        `<rect x="3.8" y="3.8" width="16.4" height="15.4" rx="1.4" ${GBS}/><rect x="2.4" y="18.6" width="19.2" height="1.8" rx="0.9" ${GB}/>`,
        `<g><rect data-part="pane-l" data-pivot="4.8 11.5" x="5.2" y="5" width="6.2" height="12.8" rx="0.6"/><rect data-part="pane-r" data-pivot="19.2 11.5" x="12.6" y="5" width="6.2" height="12.8" rx="0.6"/></g>`,
        `<g data-part="pane-l" data-pivot="4.8 11.5"><rect x="5.2" y="5" width="6.2" height="12.8" rx="0.6" ${GF}/><line x1="5.4" y1="11.4" x2="11.2" y2="11.4" ${GBS}/></g><g data-part="pane-r" data-pivot="19.2 11.5"><rect x="12.6" y="5" width="6.2" height="12.8" rx="0.6" ${GF}/><line x1="12.8" y1="11.4" x2="18.6" y2="11.4" ${GBS}/></g>`
      ),
      stencil: `<rect x="2.4" y="18.8" width="19.2" height="1.7" rx="0.85" fill="currentColor"/><g fill="currentColor"><path data-part="pane-l" data-pivot="4.8 11.5" fill-rule="evenodd" d="M4.2 4H11.3V17.6H4.2ZM5.8 5.6V10.4H9.7V5.6ZM5.8 11.8V16H9.7V11.8Z"/><path data-part="pane-r" data-pivot="19.2 11.5" fill-rule="evenodd" d="M12.7 4H19.8V17.6H12.7ZM14.3 5.6V10.4H18.2V5.6ZM14.3 11.8V16H18.2V11.8Z"/></g>`,
      hardware: `<rect x="3.8" y="3.8" width="16.4" height="15.4" rx="1.4" ${HD}/><rect x="2.4" y="18.6" width="19.2" height="1.8" rx="0.9" ${HM}/><g data-part="pane-l" data-pivot="4.8 11.5"><rect x="5.2" y="5" width="6.2" height="12.8" rx="0.6" ${HL}/><line x1="5.4" y1="11.4" x2="11.2" y2="11.4" stroke="#52525b" stroke-width="1.1"/></g><g data-part="pane-r" data-pivot="19.2 11.5"><rect x="12.6" y="5" width="6.2" height="12.8" rx="0.6" ${HL}/><line x1="12.8" y1="11.4" x2="18.6" y2="11.4" stroke="#52525b" stroke-width="1.1"/></g>`,
      relief: `<rect transform="translate(1.3,1.3)" x="3.8" y="3.8" width="16.4" height="15.4" rx="1.4" ${RS}/><rect x="3.8" y="3.8" width="16.4" height="15.4" rx="1.4" ${RF}/><line x1="2.4" y1="19.2" x2="21.6" y2="19.2" ${RF_LINE}/><g data-part="pane-l" data-pivot="4.8 11.5"><rect x="5" y="5" width="6.4" height="13" rx="0.4" ${RF}/><line x1="5" y1="11.5" x2="11.4" y2="11.5" ${RF_LINE}/></g><g data-part="pane-r" data-pivot="19.2 11.5"><rect x="12.6" y="5" width="6.4" height="13" rx="0.4" ${RF}/><line x1="12.6" y1="11.5" x2="19" y2="11.5" ${RF_LINE}/></g>`,
    },
  },
  // 112. DOOR
  {
    name: "door",
    label: "Door",
    category: "Home & Lab",
    motionSummary: "Brass lever handle turns as hinged wooden door swings inward",
    soundSummary: "Brass doorknob latch click + wooden door swing",
    svgs: {
      outline: `<path d="M5.5 20.5V5A1.2 1.2 0 0 1 6.7 3.8H17.3A1.2 1.2 0 0 1 18.5 5V20.5" ${K}/><line x1="3.5" y1="20.5" x2="20.5" y2="20.5" ${K}/><g data-part="panel" data-pivot="6 12"><rect x="6.8" y="5.2" width="10.4" height="15.3" rx="0.7" ${K_THIN}/><path data-part="knob" data-pivot="15.2 13" d="M13.2 13H15.4" ${K}/></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><rect data-part="knob" data-pivot="15.2 13" x="12.8" y="12.25" width="2.8" height="1.5" rx="0.75" fill="#000"/></mask></defs><path fill="currentColor" fill-rule="evenodd" d="M5.2 4.8A1.2 1.2 0 0 1 6.4 3.6H17.6A1.2 1.2 0 0 1 18.8 4.8V19.6H20.6V21.2H3.4V19.6H5.2ZM7.2 5.4V19.6H16.8V5.4Z"/><g data-part="panel" data-pivot="6.5 12" mask="url(#__GID__-m1)"><rect x="7.4" y="5.6" width="9.2" height="14" rx="0.6" fill="currentColor" opacity="0.65"/></g>`,
      duotone: `<path d="M5.5 20.5V5A1.2 1.2 0 0 1 6.7 3.8H17.3A1.2 1.2 0 0 1 18.5 5V20.5M3.5 20.5H20.5" ${DK}/><g data-part="panel" data-pivot="6 12"><rect x="6.8" y="5.2" width="10.4" height="15.3" rx="0.7" ${D}/><path data-part="knob" data-pivot="15.2 13" d="M13.2 13H15.4" ${DK}/></g>`,
      glass: glassCompose(
        `<path d="M5.5 20.5V5A1.2 1.2 0 0 1 6.7 3.8H17.3A1.2 1.2 0 0 1 18.5 5V20.5M3.5 20.5H20.5" ${GBS}/>`,
        `<rect data-part="panel" data-pivot="6.5 12" x="7" y="5.4" width="10" height="14.8" rx="0.9"/>`,
        `<g data-part="panel" data-pivot="6.5 12" ${GF}><rect x="7" y="5.4" width="10" height="14.8" rx="0.9"/></g><rect data-part="knob" data-pivot="15.2 13" x="13" y="12.2" width="2.6" height="1.6" rx="0.8" ${GB}/>`
      ),
      stencil: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><rect data-part="knob" data-pivot="15.8 12.6" x="13.6" y="11.9" width="2.8" height="1.4" rx="0.7" fill="#000"/></mask></defs><rect x="3.5" y="19.6" width="17" height="1.5" rx="0.7" fill="currentColor"/><g data-part="panel" data-pivot="6 12" fill="currentColor" mask="url(#__GID__-m1)"><rect x="6.2" y="4.5" width="5.2" height="14.2" rx="0.7"/><rect x="12.6" y="4.5" width="5.2" height="14.2" rx="0.7"/></g>`,
      hardware: `<rect x="5.2" y="3.8" width="13.6" height="16.6" rx="1.2" ${HD}/><rect x="3.5" y="19.5" width="17" height="1.6" rx="0.7" ${HM}/><g data-part="panel" data-pivot="6.5 12"><rect x="7" y="5.4" width="10" height="14.4" rx="0.7" ${HL}/><rect data-part="knob" data-pivot="15.2 13" x="12.8" y="12.2" width="2.8" height="1.6" rx="0.8" ${HA}/></g>`,
      relief: `<g data-part="panel" data-pivot="6 12"><rect transform="translate(1.4,1.4)" x="6.8" y="5.2" width="10.4" height="15.3" rx="0.7" ${RS}/><rect x="6.8" y="5.2" width="10.4" height="15.3" rx="0.7" ${RF}/><path data-part="knob" data-pivot="15.2 13" d="M13.2 13H15.4" ${RF_LINE}/></g><path d="M5.5 20.5V5A1.2 1.2 0 0 1 6.7 3.8H17.3A1.2 1.2 0 0 1 18.5 5V20.5M3.5 20.5H20.5" ${RF_LINE}/>`,
    },
  },
  // 113. TOASTER
  {
    name: "toaster",
    label: "Toaster",
    category: "Home & Lab",
    motionSummary: "Side lever springs upward launching crisp toast slices out of top slots",
    soundSummary: "Spring-loaded lever clunk + bright toaster pop ding",
    svgs: {
      outline: `<g data-part="toast" data-pivot="12 10" ${K}><path d="M7 10V7.6A2.2 2.2 0 0 1 11.4 7.6V10"/><path d="M12.6 10V7.6A2.2 2.2 0 0 1 17 7.6V10"/></g><rect data-part="body" x="4" y="10" width="16" height="9.5" rx="2.4" ${K}/><path data-part="lever" data-pivot="20 13.5" d="M20 13.5H22" ${K}/><line x1="6.5" y1="19.5" x2="6.5" y2="21" ${K}/><line x1="17.5" y1="19.5" x2="17.5" y2="21" ${K}/>`,
      solid: `<g data-part="toast" data-pivot="12 10" fill="currentColor" opacity="0.6"><path d="M6.8 10.2V7.6A2.4 2.4 0 0 1 11.6 7.6V10.2Z"/><path d="M12.4 10.2V7.6A2.4 2.4 0 0 1 17.2 7.6V10.2Z"/></g><rect data-part="body" x="3.8" y="9.8" width="16.4" height="9.8" rx="2.6" fill="currentColor"/><rect data-part="lever" data-pivot="20 13.5" x="19.8" y="12.5" width="2.6" height="2" rx="0.9" fill="currentColor"/><rect x="5.8" y="19.2" width="2" height="1.8" rx="0.7" fill="currentColor"/><rect x="16.2" y="19.2" width="2" height="1.8" rx="0.7" fill="currentColor"/>`,
      duotone: `<g data-part="toast" data-pivot="12 10"><path d="M7 10V7.6A2.2 2.2 0 0 1 11.4 7.6V10Z" ${D}/><path d="M12.6 10V7.6A2.2 2.2 0 0 1 17 7.6V10Z" ${D}/></g><rect data-part="body" x="4" y="10" width="16" height="9.5" rx="2.4" ${D}/><line data-part="lever" data-pivot="20 13.5" x1="20" y1="13.5" x2="22" y2="13.5" ${DK}/><line x1="6.5" y1="19.5" x2="6.5" y2="21" ${DK}/><line x1="17.5" y1="19.5" x2="17.5" y2="21" ${DK}/>`,
      glass: glassCompose(
        `<g data-part="toast" data-pivot="12 10" ${GB}><path d="M6.8 10.6V7.6A2.4 2.4 0 0 1 11.6 7.6V10.6Z"/><path d="M12.4 10.6V7.6A2.4 2.4 0 0 1 17.2 7.6V10.6Z"/></g><rect data-part="lever" data-pivot="20 13.5" x="19.6" y="12.6" width="2.6" height="2" rx="0.9" ${GB}/>`,
        `<rect data-part="body" x="3.8" y="9.8" width="16.4" height="9.8" rx="2.6"/>`,
        `<g data-part="body" ${GF}><rect x="3.8" y="9.8" width="16.4" height="9.8" rx="2.6"/></g><rect data-part="body" x="6.5" y="11.6" width="11" height="1.2" rx="0.6" ${GH}/>`
      ),
      stencil: `<g data-part="toast" data-pivot="12 10" fill="currentColor"><path d="M7 9.4V7.5A2.1 2.1 0 0 1 11.2 7.5V9.4Z"/><path d="M12.8 9.4V7.5A2.1 2.1 0 0 1 17 7.5V9.4Z"/></g><g data-part="body" fill="currentColor"><path d="M6.4 10.2H11.2V19.6H6.4A2.4 2.4 0 0 1 4 17.2V12.6A2.4 2.4 0 0 1 6.4 10.2Z"/><path d="M12.8 10.2H17.6A2.4 2.4 0 0 1 20 12.6V17.2A2.4 2.4 0 0 1 17.6 19.6H12.8Z"/></g><rect data-part="lever" data-pivot="20 13.5" x="20.4" y="12.6" width="2" height="2" rx="0.8" fill="currentColor"/>`,
      hardware: `<g data-part="toast" data-pivot="12 10" ${HM}><path d="M6.8 10.2V7.6A2.4 2.4 0 0 1 11.6 7.6V10.2Z"/><path d="M12.4 10.2V7.6A2.4 2.4 0 0 1 17.2 7.6V10.2Z"/></g><rect data-part="body" x="3.8" y="9.8" width="16.4" height="9.8" rx="2.6" ${HL}/><rect data-part="lever" data-pivot="20 13.5" x="19.6" y="12.4" width="2.8" height="2.2" rx="0.9" ${HA}/><rect x="6" y="19.2" width="2" height="1.8" rx="0.6" ${HD}/><rect x="16" y="19.2" width="2" height="1.8" rx="0.6" ${HD}/>`,
      relief: `<g data-part="toast" data-pivot="12 10"><path d="M7 10V7.6A2.2 2.2 0 0 1 11.4 7.6V10Z" ${RF}/><path d="M12.6 10V7.6A2.2 2.2 0 0 1 17 7.6V10Z" ${RF}/></g><g data-part="body"><rect transform="translate(1.4,1.4)" x="4" y="10" width="16" height="9.5" rx="2.4" ${RS}/><rect x="4" y="10" width="16" height="9.5" rx="2.4" ${RF}/></g><line data-part="lever" data-pivot="20 13.5" x1="20" y1="13.5" x2="22" y2="13.5" ${RF_LINE}/>`,
    },
  },
  // 114. BLENDER
  {
    name: "blender",
    label: "Blender",
    category: "Home & Lab",
    motionSummary: "Cross-blade rotor spins +540° at pitcher base while motor chassis vibrates",
    soundSummary: "High-speed electric blender motor whir + ice crush",
    svgs: {
      outline: `<g data-part="jar" ${K}><path d="M8.5 3.8H15.5"/><path d="M6.8 5.8H17.2L15.8 14.8H8.2Z"/><path d="M16.9 7.8H19A1.5 1.5 0 0 1 19 11.8H16.3" ${K_THIN}/></g><g data-part="blade" data-pivot="12 12.2" ${K_THIN}><line x1="9.8" y1="12.2" x2="14.2" y2="12.2"/><line x1="12" y1="10.4" x2="12" y2="13.6"/></g><rect data-part="base" x="7" y="14.8" width="10" height="5.4" rx="1.4" ${K}/>`,
      solid: `<g data-part="jar" fill="currentColor"><rect x="8.2" y="3.2" width="7.6" height="1.8" rx="0.9"/><path fill-rule="evenodd" d="M6.5 5.6H17.5L16 14.8H8ZM9 7.4L9.8 13.2H14.2L15 7.4Z"/><path d="M17 7.6H19A1.6 1.6 0 0 1 19 11.8H16.4" fill="none" stroke="currentColor" stroke-width="1.6"/></g><g data-part="blade" data-pivot="12 11.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><line x1="10" y1="11.2" x2="14" y2="11.2"/><line x1="12" y1="9.2" x2="12" y2="13.2"/></g><rect data-part="base" x="6.8" y="15.2" width="10.4" height="5.2" rx="1.4" fill="currentColor"/>`,
      duotone: `<g data-part="jar"><path d="M8.5 3.8H15.5" ${DK}/><path d="M6.8 5.8H17.2L15.8 14.8H8.2Z" ${D}/><path d="M16.9 7.8H19A1.5 1.5 0 0 1 19 11.8H16.3" ${DK_THIN}/></g><g data-part="blade" data-pivot="12 12.2" ${DK_THIN}><line x1="9.8" y1="12.2" x2="14.2" y2="12.2"/><line x1="12" y1="10.4" x2="12" y2="13.6"/></g><rect data-part="base" x="7" y="14.8" width="10" height="5.4" rx="1.4" ${D}/>`,
      glass: glassCompose(
        `<g data-part="jar"><rect x="8.2" y="3.2" width="7.6" height="1.8" rx="0.9" ${GB}/><path d="M16.9 7.8H19A1.5 1.5 0 0 1 19 11.8H16.3" ${GBS}/></g><g data-part="blade" data-pivot="12 11.2" stroke="#18181b" stroke-width="1.7" stroke-linecap="round"><line x1="9.8" y1="11.2" x2="14.2" y2="11.2"/><line x1="12" y1="9.2" x2="12" y2="13.2"/></g><rect data-part="base" x="6.8" y="15" width="10.4" height="5.4" rx="1.4" ${GB}/>`,
        `<path data-part="jar" d="M6.8 5.6H17.2L15.8 14.8H8.2Z"/>`
      ),
      stencil: `<g data-part="jar" fill="currentColor"><rect x="8.5" y="3.4" width="7" height="1.6" rx="0.8"/><path d="M6.6 5.8H9.8L10.2 14.4H8Z"/><path d="M14.2 5.8H17.4L16 14.4H13.8Z"/></g><g data-part="blade" data-pivot="12 11.2" stroke="currentColor" stroke-width="1.45" stroke-linecap="round"><line x1="10.3" y1="11.2" x2="13.7" y2="11.2"/><line x1="12" y1="9.5" x2="12" y2="12.9"/></g><rect data-part="base" x="6.8" y="15.2" width="10.4" height="5" rx="1.3" fill="currentColor"/>`,
      hardware: `<g data-part="jar"><rect x="8.2" y="3.2" width="7.6" height="1.8" rx="0.8" ${HD}/><path d="M16.9 7.8H19A1.5 1.5 0 0 1 19 11.8H16.3" fill="none" stroke="#52525b" stroke-width="1.8"/><path d="M6.8 5.6H17.2L15.8 14.8H8.2Z" ${HL}/></g><g data-part="blade" data-pivot="12 11.6" stroke="#ff6b35" stroke-width="1.7" stroke-linecap="round"><line x1="9.8" y1="11.6" x2="14.2" y2="11.6"/><line x1="12" y1="9.6" x2="12" y2="13.6"/></g><g data-part="base"><rect x="6.8" y="14.8" width="10.4" height="5.4" rx="1.4" ${HD}/><circle cx="12" cy="17.5" r="1.1" ${HA}/></g>`,
      relief: `<g data-part="jar"><path transform="translate(1.4,1.4)" d="M6.8 5.8H17.2L15.8 14.8H8.2Z" ${RS}/><path d="M8.5 3.8H15.5" ${RF_LINE}/><path d="M6.8 5.8H17.2L15.8 14.8H8.2Z" ${RF}/></g><g data-part="blade" data-pivot="12 11.5" ${RF_LINE}><line x1="9.8" y1="11.5" x2="14.2" y2="11.5"/><line x1="12" y1="9.8" x2="12" y2="13.2"/></g><rect data-part="base" x="7" y="14.8" width="10" height="5.4" rx="1.4" ${RF}/>`,
    },
  },
  // 115. WASHER
  {
    name: "washer",
    label: "Washer",
    category: "Home & Lab",
    motionSummary: "Front-load drum spins 360° with swirling wash water as cabinet hums",
    soundSummary: "Swirling wash drum water slosh + spin-cycle hum",
    svgs: {
      outline: `<g data-part="cabinet" ${K}><rect x="4" y="3.5" width="16" height="17" rx="1.8"/><line x1="4" y1="7.5" x2="20" y2="7.5" ${K_THIN}/><circle cx="7.2" cy="5.5" r="0.6" fill="currentColor" stroke="none"/></g><g data-part="drum" data-pivot="12 13.8"><circle cx="12" cy="13.8" r="4.4" ${K}/><path d="M8.6 13.8Q10.3 12.2 12 13.8T15.4 13.8" ${K_THIN}/></g>`,
      solid: `<path data-part="cabinet" fill="currentColor" fill-rule="evenodd" d="M5.8 3.3H18.2A2 2 0 0 1 20.2 5.3V18.7A2 2 0 0 1 18.2 20.7H5.8A2 2 0 0 1 3.8 18.7V5.3A2 2 0 0 1 5.8 3.3ZM7.2 4.8A0.8 0.8 0 1 0 7.2 6.4A0.8 0.8 0 1 0 7.2 4.8ZM12 9.2A4.6 4.6 0 1 0 12 18.4A4.6 4.6 0 1 0 12 9.2Z"/><g data-part="drum" data-pivot="12 13.8"><path d="M8.8 13.8Q10.4 12.2 12 13.8T15.2 13.8A3.2 3.2 0 0 1 8.8 13.8Z" fill="currentColor" opacity="0.58"/></g>`,
      duotone: `<g data-part="cabinet"><rect x="4" y="3.5" width="16" height="17" rx="1.8" ${D}/><line x1="4" y1="7.5" x2="20" y2="7.5" ${DK_THIN}/><circle cx="7.2" cy="5.5" r="0.7" fill="currentColor"/></g><g data-part="drum" data-pivot="12 13.8"><circle cx="12" cy="13.8" r="4.4" ${D}/><path d="M8.6 13.8Q10.3 12.2 12 13.8T15.4 13.8" ${DK_THIN}/></g>`,
      glass: glassCompose(
        `<g data-part="drum" data-pivot="12 13.8"><circle cx="12" cy="13.8" r="4.4" ${GB}/><path d="M8.6 13.8Q10.3 12.2 12 13.8T15.4 13.8" stroke="#fff" stroke-opacity="0.72" stroke-width="1.3" stroke-linecap="round" fill="none"/></g>`,
        `<rect data-part="cabinet" x="3.8" y="3.3" width="16.4" height="17.4" rx="2"/>`,
        `<g data-part="cabinet" ${GF}><rect x="3.8" y="3.3" width="16.4" height="17.4" rx="2"/></g><line data-part="cabinet" x1="4.2" y1="7.4" x2="19.8" y2="7.4" ${GBS}/><g data-part="drum" data-pivot="12 13.8"><circle cx="12" cy="13.8" r="4.2" ${GB}/><path d="M8.8 13.8Q10.4 12.2 12 13.8T15.2 13.8" stroke="#fff" stroke-opacity="0.8" stroke-width="1.2" stroke-linecap="round" fill="none"/></g>`
      ),
      stencil: `<g data-part="cabinet" fill="currentColor" fill-rule="evenodd"><rect x="4" y="3.5" width="16" height="3.4" rx="1"/><path d="M4 8H11.2V9.6A4.2 4.2 0 0 0 11.2 18V20.5H5.8A1.8 1.8 0 0 1 4 18.7Z"/><path d="M12.8 8H20V18.7A1.8 1.8 0 0 1 18.2 20.5H12.8V18A4.2 4.2 0 0 0 12.8 9.6Z"/></g><g data-part="drum" data-pivot="12 13.8"><path d="M8.8 13.8Q10.4 12.1 12 13.8T15.2 13.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></g>`,
      hardware: `<g data-part="cabinet"><rect x="3.8" y="3.3" width="16.4" height="17.4" rx="2" ${HL}/><line x1="4.2" y1="7.4" x2="19.8" y2="7.4" stroke="#52525b" stroke-width="1.4"/><circle cx="7.2" cy="5.4" r="0.9" ${HA}/></g><g data-part="drum" data-pivot="12 13.8"><circle cx="12" cy="13.8" r="4.6" ${HD}/><path d="M8.6 13.8Q10.3 12.1 12 13.8T15.4 13.8" fill="none" stroke="#ff6b35" stroke-width="1.6" stroke-linecap="round"/></g>`,
      relief: `<g data-part="cabinet"><rect transform="translate(1.4,1.4)" x="4" y="3.5" width="16" height="17" rx="1.8" ${RS}/><rect x="4" y="3.5" width="16" height="17" rx="1.8" ${RF}/><line x1="4" y1="7.5" x2="20" y2="7.5" ${RF_LINE}/></g><g data-part="drum" data-pivot="12 13.8"><circle cx="12" cy="13.8" r="4.4" ${RF}/><path d="M8.6 13.8Q10.3 12.2 12 13.8T15.4 13.8" ${RF_LINE}/></g>`,
    },
  },
  // 116. MICROSCOPE
  {
    name: "microscope",
    label: "Microscope",
    category: "Home & Lab",
    motionSummary: "Vertical optical barrel focuses downward toward illuminated specimen stage",
    soundSummary: "Precision focus rack clicks + lab discovery chime",
    svgs: {
      outline: `<g data-part="tube" data-pivot="10 8" ${K}><rect x="7.8" y="3" width="3.8" height="1.8" rx="0.6"/><rect x="8.3" y="4.8" width="2.8" height="5.6" rx="0.4"/><path d="M8.8 10.4H10.6L10.2 12.6H9.2Z" ${K_THIN}/></g><line data-part="slide" x1="5.2" y1="15.4" x2="13" y2="15.4" ${K}/><g data-part="base" ${K}><path d="M11.1 8.2A5.8 5.8 0 0 1 13.8 19.6H5M13.8 19.6H19"/><circle cx="15.6" cy="12" r="1.15" fill="currentColor" stroke="none"/></g>`,
      solid: `<g data-part="tube" data-pivot="10 8" fill="currentColor"><rect x="7.6" y="2.8" width="4.2" height="2" rx="0.7"/><rect x="8.2" y="4.8" width="3" height="5.6" rx="0.4"/><path d="M8.7 10.4H10.7L10.2 12.6H9.2Z"/></g><rect data-part="slide" x="5" y="14.5" width="8.2" height="1.8" rx="0.9" fill="currentColor"/><g data-part="base" fill="currentColor"><path fill-rule="evenodd" d="M11.2 7A6.8 6.8 0 0 1 18 13.8C18 16 17 17.8 15.6 19H18.4A0.9 0.9 0 0 1 18.4 20.8H5.4A0.9 0.9 0 0 1 5.4 19H12.2A4.6 4.6 0 0 0 11.2 9.2ZM15.5 11A1.1 1.1 0 1 0 15.5 13.2A1.1 1.1 0 1 0 15.5 11Z"/></g>`,
      duotone: `<g data-part="tube" data-pivot="10 8"><rect x="7.8" y="3" width="3.8" height="1.8" rx="0.6" ${D}/><rect x="8.3" y="4.8" width="2.8" height="5.6" rx="0.4" ${D}/><path d="M8.8 10.4H10.6L10.2 12.6H9.2Z" ${DK_THIN}/></g><line data-part="slide" x1="5.2" y1="15.4" x2="13" y2="15.4" ${DK}/><g data-part="base"><path d="M11.1 8.2A5.8 5.8 0 0 1 13.8 19.6H5M13.8 19.6H19" ${DK}/><circle cx="15.6" cy="12" r="1.2" fill="currentColor"/></g>`,
      glass: glassCompose(
        `<g data-part="base" ${GBS}><path d="M11.1 8.2A5.8 5.8 0 0 1 13.8 19.6H5M13.8 19.6H19"/></g><circle data-part="base" cx="15.6" cy="12" r="1.4" ${GB}/><rect data-part="slide" x="5" y="14.5" width="8.2" height="1.8" rx="0.9" ${GB}/>`,
        `<g data-part="tube" data-pivot="10 8"><rect x="7.6" y="2.8" width="4.2" height="2" rx="0.7"/><rect x="8.2" y="4.8" width="3" height="5.6" rx="0.4"/><path d="M8.7 10.4H10.7L10.2 12.6H9.2Z"/></g>`,
        `<g data-part="tube" data-pivot="10 8" ${GF}><rect x="7.6" y="2.8" width="4.2" height="2" rx="0.7"/><rect x="8.2" y="4.8" width="3" height="5.6" rx="0.4"/></g>`
      ),
      stencil: `<g data-part="tube" data-pivot="10 8" fill="currentColor"><rect x="7.7" y="2.8" width="4" height="1.9" rx="0.6"/><rect x="8.3" y="5.4" width="2.8" height="4.8" rx="0.4"/><path d="M8.8 10.7H10.6L10.1 12.6H9.3Z"/></g><rect data-part="slide" x="5" y="14.5" width="8.2" height="1.8" rx="0.9" fill="currentColor"/><g data-part="base" fill="currentColor"><path d="M11.4 7.2A6.2 6.2 0 0 1 17 18.2L15.3 16.9A4.1 4.1 0 0 0 11.2 9.2Z"/><rect x="5" y="18.8" width="14" height="2" rx="1"/></g>`,
      hardware: `<g data-part="base"><path d="M11.1 8.2A5.8 5.8 0 0 1 13.8 19.6H5M13.8 19.6H19" fill="none" stroke="#3f3f46" stroke-width="2.2" stroke-linecap="round"/><circle cx="15.6" cy="12" r="1.5" ${HA}/></g><rect data-part="slide" x="5" y="14.5" width="8.2" height="1.8" rx="0.8" ${HA}/><g data-part="tube" data-pivot="10 8"><rect x="7.6" y="2.8" width="4.2" height="2" rx="0.6" ${HL}/><rect x="8.2" y="4.8" width="3" height="5.6" rx="0.4" ${HL}/><path d="M8.7 10.4H10.7L10.2 12.6H9.2Z" ${HM}/></g>`,
      relief: `<g data-part="base"><path transform="translate(1.3,1.3)" d="M11.1 8.2A5.8 5.8 0 0 1 13.8 19.6H5M13.8 19.6H19" ${RS_LINE}/><path d="M11.1 8.2A5.8 5.8 0 0 1 13.8 19.6H5M13.8 19.6H19" ${RF_LINE}/><circle cx="15.6" cy="12" r="1.2" ${RS}/></g><line data-part="slide" x1="5.2" y1="15.4" x2="13" y2="15.4" ${RF_LINE}/><g data-part="tube" data-pivot="10 8"><g transform="translate(1.3,1.3)"><rect x="7.8" y="3" width="3.8" height="1.8" rx="0.5" ${RS}/><rect x="8.3" y="4.8" width="2.8" height="5.6" rx="0.4" ${RS}/></g><rect x="7.8" y="3" width="3.8" height="1.8" rx="0.5" ${RF}/><rect x="8.3" y="4.8" width="2.8" height="5.6" rx="0.4" ${RF}/></g>`,
    },
  },
  // 117. TELESCOPE
  {
    name: "telescope",
    label: "Telescope",
    category: "Home & Lab",
    motionSummary: "Optical barrel tilts skyward on tripod legs as distant star sparkles",
    soundSummary: "Brass barrel slide + celestial starlight chime",
    svgs: {
      outline: `<g data-part="legs" data-pivot="11.5 13.5" ${K}><line x1="11.5" y1="13.5" x2="7.5" y2="20.5"/><line x1="11.5" y1="13.5" x2="15.5" y2="20.5"/><line x1="11.5" y1="13.5" x2="11.5" y2="20.5" ${K_THIN}/></g><g data-part="barrel" data-pivot="11.5 12"><path d="M4.2 13.8L16.2 7L18.4 10.8L5.4 15.8Z" ${K}/><line x1="17.2" y1="6.4" x2="19.2" y2="10" ${K_THIN}/></g><path data-part="star" d="M19.5 3.5V6.5M18 5H21" ${K_THIN}/>`,
      solid: `<g data-part="legs" data-pivot="11.5 13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="11.5" y1="13.5" x2="7.5" y2="20.5"/><line x1="11.5" y1="13.5" x2="15.5" y2="20.5"/><line x1="11.5" y1="13.5" x2="11.5" y2="20.5"/></g><path data-part="barrel" data-pivot="11.5 12" d="M4.3 13.4L16 6.8A0.9 0.9 0 0 1 17.2 7.1L18.7 9.8A0.9 0.9 0 0 1 18.2 11L5.6 15.8A0.8 0.8 0 0 1 4.5 15.4L4 14.4A0.8 0.8 0 0 1 4.3 13.4Z" fill="currentColor"/><circle data-part="star" cx="19.5" cy="5" r="1.3" fill="currentColor"/>`,
      duotone: `<g data-part="legs" data-pivot="11.5 13.5" ${DK}><line x1="11.5" y1="13.5" x2="7.5" y2="20.5"/><line x1="11.5" y1="13.5" x2="15.5" y2="20.5"/></g><polygon data-part="barrel" data-pivot="11.5 12" points="4.2 13.8 16.2 7 18.4 10.8 5.4 15.8" ${D}/><circle data-part="star" cx="19.5" cy="5" r="1.2" fill="currentColor"/>`,
      glass: glassCompose(
        `<g data-part="legs" data-pivot="11.5 13.5" ${GBS}><line x1="11.5" y1="13.5" x2="7.5" y2="20.5"/><line x1="11.5" y1="13.5" x2="15.5" y2="20.5"/></g><circle data-part="star" cx="19.5" cy="5" r="1.3" ${GB}/>`,
        `<path data-part="barrel" data-pivot="11.5 12" d="M4.3 13.4L16 6.8A0.9 0.9 0 0 1 17.2 7.1L18.7 9.8A0.9 0.9 0 0 1 18.2 11L5.6 15.8A0.8 0.8 0 0 1 4.5 15.4L4 14.4A0.8 0.8 0 0 1 4.3 13.4Z"/>`
      ),
      stencil: `<g data-part="legs" data-pivot="11.5 13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="11.5" y1="13.5" x2="7.5" y2="20.5"/><line x1="11.5" y1="13.5" x2="15.5" y2="20.5"/></g><g data-part="barrel" data-pivot="11.5 12" fill="currentColor"><polygon points="4 13.8 10.4 10.2 11.6 13.2 5.2 15.8"/><polygon points="11.8 9.4 16.5 6.6 18.8 10.8 13.2 12.8"/></g><circle data-part="star" cx="19.5" cy="5" r="1.2" fill="currentColor"/>`,
      hardware: `<g data-part="legs" data-pivot="11.5 13.5" stroke="#52525b" stroke-width="1.8" stroke-linecap="round"><line x1="11.5" y1="13.5" x2="7.5" y2="20.5"/><line x1="11.5" y1="13.5" x2="15.5" y2="20.5"/></g><g data-part="barrel" data-pivot="11.5 12"><path d="M4.3 13.4L16 6.8A0.9 0.9 0 0 1 17.2 7.1L18.7 9.8A0.9 0.9 0 0 1 18.2 11L5.6 15.8A0.8 0.8 0 0 1 4.5 15.4L4 14.4A0.8 0.8 0 0 1 4.3 13.4Z" ${HL}/><circle cx="17.2" cy="8.8" r="1.3" ${HA}/></g><circle data-part="star" cx="19.5" cy="5" r="1.3" ${HA}/>`,
      relief: `<g data-part="legs" data-pivot="11.5 13.5" ${RF_LINE}><line x1="11.5" y1="13.5" x2="7.5" y2="20.5"/><line x1="11.5" y1="13.5" x2="15.5" y2="20.5"/></g><g data-part="barrel" data-pivot="11.5 12"><polygon transform="translate(1.4,1.4)" points="4.2 13.8 16.2 7 18.4 10.8 5.4 15.8" ${RS}/><polygon points="4.2 13.8 16.2 7 18.4 10.8 5.4 15.8" ${RF}/></g><circle data-part="star" cx="19.5" cy="5" r="1.2" ${RS}/>`,
    },
  },
  // 118. FLASK
  {
    name: "flask",
    label: "Lab Flask",
    category: "Home & Lab",
    motionSummary: "Erlenmeyer flask swirls gently as chemical bubbles fizz upward",
    soundSummary: "Fizzy effervescent lab bubbles + glass clink",
    svgs: {
      outline: `<g data-part="flask" data-pivot="12 14" ${K}><path d="M9.5 4H14.5M10.2 4V9L5.2 17.8A1.8 1.8 0 0 0 6.8 20.5H17.2A1.8 1.8 0 0 0 18.8 17.8L13.8 9V4"/><line x1="7.2" y1="15.2" x2="16.8" y2="15.2" ${K_THIN}/></g><circle data-part="bubble-1" cx="10.5" cy="17.6" r="1" fill="currentColor"/><circle data-part="bubble-2" cx="13.8" cy="12.5" r="0.9" fill="currentColor"/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><path data-part="flask" data-pivot="12 14" d="M7.2 14.8Q9.6 13.9 12 14.8T16.8 14.8" fill="none" stroke="#000" stroke-width="1.35" stroke-linecap="round"/><circle data-part="bubble-1" cx="10.5" cy="17.6" r="1.05" fill="#000"/><circle data-part="bubble-2" cx="13.6" cy="12.5" r="0.95" fill="#000"/></mask></defs><path data-part="flask" data-pivot="12 14" fill="currentColor" mask="url(#__GID__-m1)" d="M9 3.6H15V5.2H14V8.8L19 17.6A2 2 0 0 1 17.2 20.6H6.8A2 2 0 0 1 5 17.6L10 8.8V5.2H9Z"/>`,
      duotone: `<g data-part="flask" data-pivot="12 14"><path d="M10.2 4V9L5.2 17.8A1.8 1.8 0 0 0 6.8 20.5H17.2A1.8 1.8 0 0 0 18.8 17.8L13.8 9V4Z" ${D}/><line x1="9.5" y1="4" x2="14.5" y2="4" ${DK}/><line x1="7.2" y1="15.2" x2="16.8" y2="15.2" ${DK_THIN}/></g><circle data-part="bubble-1" cx="10.5" cy="17.6" r="1" fill="currentColor"/><circle data-part="bubble-2" cx="13.8" cy="12.5" r="0.9" fill="currentColor"/>`,
      glass: glassCompose(
        `<path data-part="flask" data-pivot="12 14" d="M7 15L5.2 18A1.8 1.8 0 0 0 6.8 20.5H17.2A1.8 1.8 0 0 0 18.8 18L17 15Z" ${GB}/>`,
        `<path data-part="flask" data-pivot="12 14" d="M9.5 4H14.5V9L18.8 17.8A1.8 1.8 0 0 1 17.2 20.5H6.8A1.8 1.8 0 0 1 5.2 17.8L9.5 9Z"/>`,
        `<g data-part="flask" data-pivot="12 14" ${GF}><path d="M9.5 4H14.5V9L18.8 17.8A1.8 1.8 0 0 1 17.2 20.5H6.8A1.8 1.8 0 0 1 5.2 17.8L9.5 9Z"/></g><circle data-part="bubble-1" cx="10.5" cy="17.4" r="1.1" ${GB}/><circle data-part="bubble-2" cx="13.6" cy="12.6" r="1" ${GB}/>`
      ),
      stencil: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><circle data-part="bubble-1" cx="9.6" cy="17.4" r="1.05" fill="#000"/><circle data-part="bubble-2" cx="14.4" cy="13.2" r="0.95" fill="#000"/></mask></defs><g data-part="flask" data-pivot="12 14" fill="currentColor" mask="url(#__GID__-m1)"><path d="M9.5 4H11.2V20.5H6.8A1.8 1.8 0 0 1 5.2 17.8L10.2 9V5.4H9.5Z"/><path d="M14.5 4H12.8V20.5H17.2A1.8 1.8 0 0 0 18.8 17.8L13.8 9V5.4H14.5Z"/></g>`,
      hardware: `<g data-part="flask" data-pivot="12 14"><path d="M10.2 4V9L5.2 17.8A1.8 1.8 0 0 0 6.8 20.5H17.2A1.8 1.8 0 0 0 18.8 17.8L13.8 9V4Z" ${HL}/><path d="M7.1 15L5.2 18A1.8 1.8 0 0 0 6.8 20.5H17.2A1.8 1.8 0 0 0 18.8 18L16.9 15Z" ${HD}/></g><circle data-part="bubble-1" cx="10.5" cy="17.6" r="1.1" ${HA}/><circle data-part="bubble-2" cx="13.6" cy="12.5" r="0.95" ${HA}/>`,
      relief: `<g data-part="flask" data-pivot="12 14"><path transform="translate(1.4,1.4)" d="M10.2 4V9L5.2 17.8A1.8 1.8 0 0 0 6.8 20.5H17.2A1.8 1.8 0 0 0 18.8 17.8L13.8 9V4Z" ${RS}/><path d="M10.2 4V9L5.2 17.8A1.8 1.8 0 0 0 6.8 20.5H17.2A1.8 1.8 0 0 0 18.8 17.8L13.8 9V4Z" ${RF}/><line x1="7.2" y1="15.2" x2="16.8" y2="15.2" ${RF_LINE}/></g><circle data-part="bubble-1" cx="10.5" cy="17.6" r="1" ${RS}/><circle data-part="bubble-2" cx="13.8" cy="12.5" r="0.9" ${RS}/>`,
    },
  },
  // 119. CAMPFIRE
  {
    name: "campfire",
    label: "Campfire",
    category: "Home & Lab",
    motionSummary: "Flame dances over crossed firewood logs as glowing spark floats skyward",
    soundSummary: "Cozy firewood hearth crackle + ember pop",
    svgs: {
      outline: `<g data-part="logs" ${K}><line x1="5" y1="16.8" x2="19" y2="20.4"/><line x1="19" y1="16.8" x2="5" y2="20.4"/></g><path data-part="flame" data-pivot="12 16" d="M12 4.2C14.8 7 16.5 9.6 16.5 12.6A4.5 4.5 0 0 1 7.5 12.6C7.5 10.4 8.7 8.7 9.8 7.8C10.1 9.1 10.8 9.8 11.4 9.8C11.1 7.8 11.5 5.8 12 4.2Z" ${K}/><path data-part="ember" data-pivot="12 16" d="M12 11.6C13.1 12.7 13.7 13.8 13.7 14.8A1.7 1.7 0 0 1 10.3 14.8C10.3 13.8 10.9 12.7 12 11.6Z" ${K_THIN}/><circle data-part="spark" cx="16.8" cy="6.2" r="1" fill="currentColor"/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><path data-part="ember" data-pivot="12 16" fill="#000" d="M12 11.4C13.1 12.5 13.7 13.6 13.7 14.7A1.7 1.7 0 0 1 10.3 14.7C10.3 13.6 10.9 12.5 12 11.4Z"/></mask></defs><g data-part="logs" fill="currentColor"><rect x="4.5" y="17.6" width="15" height="2.2" rx="1.1" transform="rotate(12 12 18.7)"/><rect x="4.5" y="17.6" width="15" height="2.2" rx="1.1" transform="rotate(-12 12 18.7)"/></g><path data-part="flame" data-pivot="12 16" fill="currentColor" mask="url(#__GID__-m1)" d="M12 4C14.9 6.9 16.7 9.6 16.7 12.6A4.7 4.7 0 0 1 7.3 12.6C7.3 10.3 8.6 8.6 9.8 7.6C10.1 9 10.8 9.7 11.4 9.7C11.1 7.7 11.5 5.6 12 4Z"/><circle data-part="spark" cx="16.8" cy="6" r="1.1" fill="currentColor"/>`,
      duotone: `<g data-part="logs" ${DK}><line x1="5" y1="16.8" x2="19" y2="20.4"/><line x1="19" y1="16.8" x2="5" y2="20.4"/></g><path data-part="flame" data-pivot="12 16" d="M12 4.2C14.8 7 16.5 9.6 16.5 12.6A4.5 4.5 0 0 1 7.5 12.6C7.5 10.4 8.7 8.7 9.8 7.8C10.1 9.1 10.8 9.8 11.4 9.8C11.1 7.8 11.5 5.8 12 4.2Z" ${D}/><path data-part="ember" data-pivot="12 16" d="M12 11.6C13.1 12.7 13.7 13.8 13.7 14.8A1.7 1.7 0 0 1 10.3 14.8C10.3 13.8 10.9 12.7 12 11.6Z" fill="currentColor"/><circle data-part="spark" cx="16.8" cy="6.2" r="1" fill="currentColor"/>`,
      glass: glassCompose(
        `<g data-part="logs" ${GB}><rect x="4.5" y="17.6" width="15" height="2.2" rx="1.1" transform="rotate(12 12 18.7)"/><rect x="4.5" y="17.6" width="15" height="2.2" rx="1.1" transform="rotate(-12 12 18.7)"/></g><circle data-part="spark" cx="16.8" cy="6" r="1.15" ${GB}/>`,
        `<path data-part="flame" data-pivot="12 16" d="M12 4C14.9 6.9 16.7 9.6 16.7 12.6A4.7 4.7 0 0 1 7.3 12.6C7.3 10.3 8.6 8.6 9.8 7.6C10.1 9 10.8 9.7 11.4 9.7C11.1 7.7 11.5 5.6 12 4Z"/>`,
        `<g data-part="flame" data-pivot="12 16" ${GF}><path d="M12 4C14.9 6.9 16.7 9.6 16.7 12.6A4.7 4.7 0 0 1 7.3 12.6C7.3 10.3 8.6 8.6 9.8 7.6C10.1 9 10.8 9.7 11.4 9.7C11.1 7.7 11.5 5.6 12 4Z"/></g><path data-part="ember" data-pivot="12 16" d="M12 11.4C13.1 12.5 13.7 13.6 13.7 14.7A1.7 1.7 0 0 1 10.3 14.7C10.3 13.6 10.9 12.5 12 11.4Z" ${GB} opacity="0.55"/>`
      ),
      stencil: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><circle data-part="ember" data-pivot="12 16" cx="12" cy="14.5" r="1.25" fill="#000"/></mask></defs><g data-part="logs" fill="currentColor"><rect x="4.5" y="17.6" width="15" height="2.1" rx="1.05" transform="rotate(12 12 18.6)"/><rect x="4.5" y="17.6" width="15" height="2.1" rx="1.05" transform="rotate(-12 12 18.6)"/></g><g data-part="flame" data-pivot="12 16" fill="currentColor" mask="url(#__GID__-m1)"><path d="M11.3 4.2V16.8A4.6 4.6 0 0 1 7.4 12.4C7.4 10.2 8.7 8.5 9.8 7.6C10.1 9 10.8 9.7 11.3 9.7Z"/><path d="M12.7 4.6C15 7.2 16.6 9.6 16.6 12.4A4.6 4.6 0 0 1 12.7 16.8Z"/></g><circle data-part="spark" cx="16.8" cy="6" r="1" fill="currentColor"/>`,
      hardware: `<g data-part="logs"><rect x="4.5" y="17.6" width="15" height="2.2" rx="1.1" transform="rotate(12 12 18.6)" ${HD}/><rect x="4.5" y="17.6" width="15" height="2.2" rx="1.1" transform="rotate(-12 12 18.6)" ${HD}/></g><path data-part="flame" data-pivot="12 16" d="M12 4C14.9 6.9 16.7 9.6 16.7 12.6A4.7 4.7 0 0 1 7.3 12.6C7.3 10.3 8.6 8.6 9.8 7.6C10.1 9 10.8 9.7 11.4 9.7C11.1 7.7 11.5 5.6 12 4Z" ${HA}/><path data-part="ember" data-pivot="12 16" d="M12 11.4C13.1 12.5 13.7 13.6 13.7 14.7A1.7 1.7 0 0 1 10.3 14.7C10.3 13.6 10.9 12.5 12 11.4Z" ${HL}/><circle data-part="spark" cx="16.8" cy="6" r="1.1" ${HA}/>`,
      relief: `<g data-part="logs" ${RF_LINE}><line x1="5" y1="16.8" x2="19" y2="20.4"/><line x1="19" y1="16.8" x2="5" y2="20.4"/></g><g data-part="flame" data-pivot="12 16"><path transform="translate(1.4,1.4)" d="M12 4.2C14.8 7 16.5 9.6 16.5 12.6A4.5 4.5 0 0 1 7.5 12.6C7.5 10.4 8.7 8.7 9.8 7.8C10.1 9.1 10.8 9.8 11.4 9.8C11.1 7.8 11.5 5.8 12 4.2Z" ${RS}/><path d="M12 4.2C14.8 7 16.5 9.6 16.5 12.6A4.5 4.5 0 0 1 7.5 12.6C7.5 10.4 8.7 8.7 9.8 7.8C10.1 9.1 10.8 9.8 11.4 9.8C11.1 7.8 11.5 5.8 12 4.2Z" ${RF}/></g><path data-part="ember" data-pivot="12 16" d="M12 11.6C13.1 12.7 13.7 13.8 13.7 14.8A1.7 1.7 0 0 1 10.3 14.8C10.3 13.8 10.9 12.7 12 11.6Z" ${RS}/><circle data-part="spark" cx="16.8" cy="6.2" r="1" ${RS}/>`,
    },
  },
  // 120. PARACHUTE
  {
    name: "parachute",
    label: "Parachute",
    category: "Home & Lab",
    motionSummary: "Domed canopy billows upward while suspended harness sways side-to-side",
    soundSummary: "Nylon chute air-catch snap + breezy descent whoosh",
    svgs: {
      outline: `<g data-part="chute" data-pivot="12 10" ${K}><path d="M3.6 11.4A8.4 7.8 0 0 1 20.4 11.4C18 10.2 15.8 10.2 14.2 11.2C12.8 10.2 11.2 10.2 9.8 11.2C8.2 10.2 6 10.2 3.6 11.4Z"/><path d="M9.6 3.8C8.4 6.2 8.2 8.8 8.4 10.9M14.4 3.8C15.6 6.2 15.8 8.8 15.6 10.9" ${K_THIN}/><line x1="4.4" y1="11.4" x2="10.1" y2="17" ${K_THIN}/><line x1="9.6" y1="11.2" x2="11" y2="17" ${K_THIN}/><line x1="14.4" y1="11.2" x2="13" y2="17" ${K_THIN}/><line x1="19.6" y1="11.4" x2="13.9" y2="17" ${K_THIN}/></g><rect data-part="cargo" data-pivot="12 11" x="9.8" y="17" width="4.4" height="3.6" rx="1" ${K}/>`,
      solid: `<g data-part="chute" data-pivot="12 10" fill="currentColor"><path d="M3.4 11.4A8.6 8 0 0 1 20.6 11.4C18.2 10.1 15.8 10.1 14.2 11.2C12.8 10.2 11.2 10.2 9.8 11.2C8.2 10.1 5.8 10.1 3.4 11.4Z"/><polygon points="3.9 11.2 5.3 11.2 10.8 17 9.6 17"/><polygon points="18.7 11.2 20.1 11.2 14.4 17 13.2 17"/><rect x="11.3" y="10.8" width="1.4" height="6.2"/></g><rect data-part="cargo" data-pivot="12 11" x="9.6" y="17" width="4.8" height="3.8" rx="1.1" fill="currentColor"/>`,
      duotone: `<g data-part="chute" data-pivot="12 10"><path d="M3.6 11.4A8.4 7.8 0 0 1 20.4 11.4C18 10.2 15.8 10.2 14.2 11.2C12.8 10.2 11.2 10.2 9.8 11.2C8.2 10.2 6 10.2 3.6 11.4Z" ${D}/><g ${DK_THIN}><line x1="4.4" y1="11.4" x2="10.1" y2="17"/><line x1="12" y1="10.8" x2="12" y2="17"/><line x1="19.6" y1="11.4" x2="13.9" y2="17"/></g></g><rect data-part="cargo" data-pivot="12 11" x="9.8" y="17" width="4.4" height="3.6" rx="1" ${D}/>`,
      glass: glassCompose(
        `<g data-part="chute" data-pivot="12 10" ${GBS}><line x1="4.4" y1="11.4" x2="10.1" y2="17"/><line x1="12" y1="10.8" x2="12" y2="17"/><line x1="19.6" y1="11.4" x2="13.9" y2="17"/></g><rect data-part="cargo" data-pivot="12 11" x="9.6" y="17" width="4.8" height="3.8" rx="1.1" ${GB}/>`,
        `<path data-part="chute" data-pivot="12 10" d="M3.4 11.4A8.6 8 0 0 1 20.6 11.4C18.2 10.1 15.8 10.1 14.2 11.2C12.8 10.2 11.2 10.2 9.8 11.2C8.2 10.1 5.8 10.1 3.4 11.4Z"/>`,
        `<g data-part="chute" data-pivot="12 10" ${GF}><path d="M3.4 11.4A8.6 8 0 0 1 20.6 11.4C18.2 10.1 15.8 10.1 14.2 11.2C12.8 10.2 11.2 10.2 9.8 11.2C8.2 10.1 5.8 10.1 3.4 11.4Z"/></g><path data-part="chute" data-pivot="12 10" d="M9.6 4C8.5 6.4 8.3 8.8 8.5 10.8M14.4 4C15.5 6.4 15.7 8.8 15.5 10.8" ${GBS} opacity="0.7"/>`
      ),
      stencil: `<g data-part="chute" data-pivot="12 10" fill="currentColor"><path d="M3.6 11.4A8.4 7.6 0 0 1 9.5 4.2C9 6.6 8.8 8.8 8.9 10.9C7.2 10.3 5.4 10.5 3.6 11.4Z"/><path d="M10.7 3.8A8.4 7.6 0 0 1 13.3 3.8C13.6 6.4 13.7 8.8 13.6 11C12.5 10.6 11.5 10.6 10.4 11C10.3 8.8 10.4 6.4 10.7 3.8Z"/><path d="M14.5 4.2A8.4 7.6 0 0 1 20.4 11.4C18.6 10.5 16.8 10.3 15.1 10.9C15.2 8.8 15 6.6 14.5 4.2Z"/><polygon points="4.1 11.4 5.4 11.4 10.7 17 9.6 17"/><polygon points="18.6 11.4 19.9 11.4 14.4 17 13.3 17"/><rect x="11.3" y="10.8" width="1.4" height="6.2"/></g><rect data-part="cargo" data-pivot="12 11" x="9.8" y="17" width="4.4" height="3.6" rx="1" fill="currentColor"/>`,
      hardware: `<g data-part="chute" data-pivot="12 10"><g stroke="#52525b" stroke-width="1.4" stroke-linecap="round"><line x1="4.4" y1="11.4" x2="10.1" y2="17"/><line x1="12" y1="10.8" x2="12" y2="17"/><line x1="19.6" y1="11.4" x2="13.9" y2="17"/></g><path d="M3.4 11.4A8.6 8 0 0 1 20.6 11.4C18.2 10.1 15.8 10.1 14.2 11.2C12.8 10.2 11.2 10.2 9.8 11.2C8.2 10.1 5.8 10.1 3.4 11.4Z" ${HL}/></g><rect data-part="cargo" data-pivot="12 11" x="9.6" y="17" width="4.8" height="3.8" rx="1.1" ${HA}/>`,
      relief: `<g data-part="chute" data-pivot="12 10"><path transform="translate(1.4,1.4)" d="M3.6 11.4A8.4 7.8 0 0 1 20.4 11.4C18 10.2 15.8 10.2 14.2 11.2C12.8 10.2 11.2 10.2 9.8 11.2C8.2 10.2 6 10.2 3.6 11.4Z" ${RS}/><path d="M3.6 11.4A8.4 7.8 0 0 1 20.4 11.4C18 10.2 15.8 10.2 14.2 11.2C12.8 10.2 11.2 10.2 9.8 11.2C8.2 10.2 6 10.2 3.6 11.4Z" ${RF}/><g ${RF_LINE}><line x1="4.4" y1="11.4" x2="10.1" y2="17"/><line x1="12" y1="10.8" x2="12" y2="17"/><line x1="19.6" y1="11.4" x2="13.9" y2="17"/></g></g><rect data-part="cargo" data-pivot="12 11" x="9.8" y="17" width="4.4" height="3.6" rx="1" ${RF}/>`,
    },
  },
];
