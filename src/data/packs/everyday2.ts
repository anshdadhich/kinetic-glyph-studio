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

export const EVERYDAY2_ICONS: IconDef[] = [
  // 231. LAMP
  {
    name: "lamp",
    label: "Desk Lamp",
    category: "Home & Lab",
    motionSummary: "Articulated lamp shade nods downward casting warm desk light cone",
    soundSummary: "Brass pull-chain switch click + warm lamp glow",
    svgs: {
      outline: `<path d="M12 13V19.5M8 19.5H16" ${K}/><polygon data-part="shade" data-pivot="12 12" points="7.5 5.5 16.5 5.5 19 12.5 5 12.5" ${K}/><line data-part="beam" x1="15" y1="12.5" x2="15" y2="15.5" ${K_THIN}/>`,
      solid: `<path fill="currentColor" d="M11 12.8H13V19.2H16A0.9 0.9 0 0 1 16 21H8A0.9 0.9 0 0 1 8 19.2H11Z"/><polygon data-part="shade" data-pivot="12 12" points="7.4 5.2 16.6 5.2 19.2 12.6 4.8 12.6" fill="currentColor"/><line data-part="beam" x1="15" y1="12.6" x2="15" y2="15.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`,
      duotone: `<path d="M12 13V19.5M8 19.5H16" ${DK}/><polygon data-part="shade" data-pivot="12 12" points="7.5 5.5 16.5 5.5 19 12.5 5 12.5" ${D}/><line data-part="beam" x1="15" y1="12.5" x2="15" y2="15.5" ${DK_THIN}/>`,
      glass: glassCompose(
        `<path d="M11 12.8H13V19.2H16A0.9 0.9 0 0 1 16 21H8A0.9 0.9 0 0 1 8 19.2H11Z" ${GB}/><line data-part="beam" x1="15" y1="12.6" x2="15" y2="15.6" ${GBS}/>`,
        `<polygon data-part="shade" data-pivot="12 12" points="7.4 5.2 16.6 5.2 19.2 12.6 4.8 12.6"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="shade" data-pivot="12 12"><polygon points="7.6 5.2 16.4 5.2 17.6 8.4 6.4 8.4"/><polygon points="6 9.6 18 9.6 19 12.6 5 12.6"/></g><rect x="11" y="13.6" width="2" height="5.4"/><rect x="8" y="19.2" width="8" height="1.6" rx="0.8"/><line data-part="beam" x1="15" y1="12.6" x2="15" y2="15.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></g>`,
      hardware: `<path d="M11 12.8H13V19.2H16A0.9 0.9 0 0 1 16 21H8A0.9 0.9 0 0 1 8 19.2H11Z" ${HD}/><polygon data-part="shade" data-pivot="12 12" points="7.4 5.2 16.6 5.2 19.2 12.6 4.8 12.6" ${HL}/><circle data-part="beam" cx="15" cy="14.6" r="1.1" ${HA}/>`,
      relief: `<path d="M12 13V19.5M8 19.5H16" ${RF_LINE}/><g data-part="shade" data-pivot="12 12"><polygon transform="translate(1.3,1.3)" points="7.5 5.5 16.5 5.5 19 12.5 5 12.5" ${RS}/><polygon points="7.5 5.5 16.5 5.5 19 12.5 5 12.5" ${RF}/></g><line data-part="beam" x1="15" y1="12.5" x2="15" y2="15.5" ${RF_LINE}/>`,
    },
  },
  // 232. KETTLE
  {
    name: "kettle",
    label: "Kettle",
    category: "Home & Lab",
    motionSummary: "Tea kettle rumbles gently on base as whistling steam curls out of spout",
    soundSummary: "Boiling water rumble + rising whistling tea kettle",
    svgs: {
      outline: `<g data-part="body" data-pivot="12 15" ${K}><path d="M6.5 11.5C6.5 8.5 8.8 7 12 7C15.2 7 17.5 8.5 17.5 11.5V17.8A1.5 1.5 0 0 1 16 19.3H8A1.5 1.5 0 0 1 6.5 17.8Z"/><path d="M17.5 11.5H19.6A1.4 1.4 0 0 1 19.6 15.5H17.5"/><path d="M6.5 13L4.2 10.5"/></g><path data-part="steam" d="M4.2 8.2C3.5 6.8 5.2 6 4.4 4.5" ${K_THIN}/>`,
      solid: `<g data-part="body" data-pivot="12 15" fill="currentColor"><path d="M6.4 11.4C6.4 8.2 8.8 6.8 12 6.8C15.2 6.8 17.6 8.2 17.6 11.4V17.8A1.7 1.7 0 0 1 15.9 19.5H8.1A1.7 1.7 0 0 1 6.4 17.8Z"/><path d="M17.6 11.5H19.6A1.6 1.6 0 0 1 19.6 15.5H17.6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M6.6 13.2L4 10.4" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></g><path data-part="steam" d="M4.2 8.2C3.5 6.8 5.2 6 4.4 4.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`,
      duotone: `<g data-part="body" data-pivot="12 15"><path d="M6.5 11.5C6.5 8.5 8.8 7 12 7C15.2 7 17.5 8.5 17.5 11.5V17.8A1.5 1.5 0 0 1 16 19.3H8A1.5 1.5 0 0 1 6.5 17.8Z" ${D}/><path d="M17.5 11.5H19.6A1.4 1.4 0 0 1 19.6 15.5H17.5M6.5 13L4.2 10.5" ${DK}/></g><path data-part="steam" d="M4.2 8.2C3.5 6.8 5.2 6 4.4 4.5" ${DK_THIN}/>`,
      glass: glassCompose(
        `<path data-part="steam" d="M4.2 8.2C3.5 6.8 5.2 6 4.4 4.5" ${GBS}/><path data-part="body" data-pivot="12 15" d="M17.6 11.5H19.6A1.6 1.6 0 0 1 19.6 15.5H17.6" ${GBS}/>`,
        `<path data-part="body" data-pivot="12 15" d="M6.4 11.4C6.4 8.2 8.8 6.8 12 6.8C15.2 6.8 17.6 8.2 17.6 11.4V17.8A1.7 1.7 0 0 1 15.9 19.5H8.1A1.7 1.7 0 0 1 6.4 17.8Z"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="body" data-pivot="12 15"><path d="M6.5 11.4C6.5 8.4 8.8 7 12 7C15.2 7 17.5 8.4 17.5 11.4V12.5H6.5Z"/><rect x="6.5" y="13.8" width="11" height="5.5" rx="1.4"/><path d="M6.6 13.2L4.2 10.6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></g><path data-part="steam" d="M4.2 8.2C3.5 6.8 5.2 6 4.4 4.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></g>`,
      hardware: `<g data-part="body" data-pivot="12 15"><path d="M6.4 11.4C6.4 8.2 8.8 6.8 12 6.8C15.2 6.8 17.6 8.2 17.6 11.4V17.8A1.7 1.7 0 0 1 15.9 19.5H8.1A1.7 1.7 0 0 1 6.4 17.8Z" ${HL}/><path d="M17.6 11.5H19.6A1.6 1.6 0 0 1 19.6 15.5H17.6" fill="none" stroke="#3f3f46" stroke-width="1.8"/></g><path data-part="steam" d="M4.2 8.2C3.5 6.8 5.2 6 4.4 4.5" fill="none" stroke="#ff6b35" stroke-width="1.7" stroke-linecap="round"/>`,
      relief: `<g data-part="body" data-pivot="12 15"><path transform="translate(1.3,1.3)" d="M6.5 11.5C6.5 8.5 8.8 7 12 7C15.2 7 17.5 8.5 17.5 11.5V17.8A1.5 1.5 0 0 1 16 19.3H8A1.5 1.5 0 0 1 6.5 17.8Z" ${RS}/><path d="M6.5 11.5C6.5 8.5 8.8 7 12 7C15.2 7 17.5 8.5 17.5 11.5V17.8A1.5 1.5 0 0 1 16 19.3H8A1.5 1.5 0 0 1 6.5 17.8Z" ${RF}/></g><path data-part="steam" d="M4.2 8.2C3.5 6.8 5.2 6 4.4 4.5" ${RF_LINE}/>`,
    },
  },
  // 233. MICROWAVE
  {
    name: "microwave",
    label: "Microwave",
    category: "Home & Lab",
    motionSummary: "Side timer dial rotates as glass turntable dish spins inside cavity",
    soundSummary: "Microwave transformer hum + crisp timer bell ding",
    svgs: {
      outline: `<rect x="3.5" y="6" width="17" height="12" rx="2" ${K}/><rect x="5.8" y="8.4" width="9" height="7.2" rx="1" ${K_THIN}/><path data-part="dish" data-pivot="10.3 14.5" d="M7.5 14.2H13.1" ${K_THIN}/><circle data-part="dial" data-pivot="17.8 11" cx="17.8" cy="11" r="1.2" ${K_THIN}/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><rect x="5.6" y="8.2" width="9.2" height="7.6" rx="1" fill="#000"/><circle cx="17.6" cy="11" r="1.3" fill="#000"/></mask></defs><rect x="3.4" y="5.8" width="17.2" height="12.4" rx="2.2" fill="currentColor" mask="url(#__GID__-m1)"/><rect data-part="dish" data-pivot="10.2 14.2" x="7.2" y="13.4" width="6" height="1.5" rx="0.75" fill="currentColor"/><circle data-part="dial" data-pivot="17.6" cx="17.6" cy="11" r="0.8" fill="currentColor"/>`.replace('data-pivot="17.6" cx', 'data-pivot="17.6 11" cx'),
      duotone: `<rect x="3.5" y="6" width="17" height="12" rx="2" ${D}/><rect x="5.8" y="8.4" width="9" height="7.2" rx="1" ${D}/><line data-part="dish" data-pivot="10.3 14.5" x1="7.5" y1="14.2" x2="13.1" y2="14.2" ${DK_THIN}/><circle data-part="dial" data-pivot="17.8 11" cx="17.8" cy="11" r="1.2" ${DK_THIN}/>`,
      glass: glassCompose(
        `<circle data-part="dial" data-pivot="17.8 11" cx="17.8" cy="11" r="1.3" ${GB}/>`,
        `<rect x="3.4" y="5.8" width="17.2" height="12.4" rx="2.2"/>`,
        `<g ${GF}><rect x="3.4" y="5.8" width="17.2" height="12.4" rx="2.2"/></g><rect data-part="dish" data-pivot="10.2 14.2" x="7.2" y="13.4" width="6" height="1.5" rx="0.75" ${GB}/>`
      ),
      stencil: `<g fill="currentColor"><path d="M5.4 6H15.4V8.2H5.6V15.8H15.4V18H5.4A2 2 0 0 1 3.4 16V8A2 2 0 0 1 5.4 6Z"/><rect data-part="dish" data-pivot="10.2 14.2" x="7.4" y="13.4" width="5.6" height="1.5" rx="0.75"/><rect x="16.6" y="6" width="4" height="12" rx="1.4"/><circle data-part="dial" data-pivot="18.6 11" cx="18.6" cy="11" r="1"/></g>`,
      hardware: `<rect x="3.4" y="5.8" width="17.2" height="12.4" rx="2" ${HL}/><rect x="5.6" y="8.2" width="9.2" height="7.6" rx="1" ${HD}/><rect data-part="dish" data-pivot="10.2 14.2" x="7.2" y="13.4" width="6" height="1.5" rx="0.75" ${HA}/><circle data-part="dial" data-pivot="17.6 11" cx="17.6" cy="11" r="1.3" ${HA}/>`,
      relief: `<rect transform="translate(1.3,1.3)" x="3.5" y="6" width="17" height="12" rx="2" ${RS}/><rect x="3.5" y="6" width="17" height="12" rx="2" ${RF}/><rect x="5.8" y="8.4" width="9" height="7.2" rx="1" ${RF}/><line data-part="dish" data-pivot="10.3 14.5" x1="7.5" y1="14.2" x2="13.1" y2="14.2" ${RF_LINE}/><circle data-part="dial" data-pivot="17.8 11" cx="17.8" cy="11" r="1.2" ${RF}/>`,
    },
  },
  // 234. FRIDGE
  {
    name: "fridge",
    label: "Fridge",
    category: "Home & Lab",
    motionSummary: "Freezer and fresh-food doors swing slightly ajar on left hinges",
    soundSummary: "Rubber fridge gasket suction pop + cold compressor hum",
    svgs: {
      outline: `<g data-part="door-top" data-pivot="6.5 7"><rect x="6.5" y="3.8" width="11" height="5.6" rx="1.4" ${K}/><line x1="8.8" y1="6" x2="8.8" y2="7.5" ${K_THIN}/></g><g data-part="door-bot" data-pivot="6.5 15"><rect x="6.5" y="9.4" width="11" height="11" rx="1.6" ${K}/><line x1="8.8" y1="12" x2="8.8" y2="15" ${K_THIN}/></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><rect x="8.3" y="11.6" width="1.2" height="3.6" rx="0.6" fill="#000"/></mask></defs><g data-part="door-top" data-pivot="6.5 7" fill="currentColor"><rect x="6.4" y="3.6" width="11.2" height="5.6" rx="1.5"/></g><g data-part="door-bot" data-pivot="6.5 15" fill="currentColor"><rect x="6.4" y="10" width="11.2" height="10.4" rx="1.6" mask="url(#__GID__-m1)"/></g>`,
      duotone: `<g data-part="door-top" data-pivot="6.5 7"><rect x="6.5" y="3.8" width="11" height="5.6" rx="1.4" ${D}/><line x1="8.8" y1="6" x2="8.8" y2="7.5" ${DK_THIN}/></g><g data-part="door-bot" data-pivot="6.5 15"><rect x="6.5" y="9.4" width="11" height="11" rx="1.6" ${D}/><line x1="8.8" y1="12" x2="8.8" y2="15" ${DK_THIN}/></g>`,
      glass: glassCompose(
        `<rect data-part="door-top" data-pivot="6.5 7" x="6.4" y="3.6" width="11.2" height="5.6" rx="1.5" ${GB}/>`,
        `<rect data-part="door-bot" data-pivot="6.5 15" x="6.4" y="10" width="11.2" height="10.4" rx="1.6"/>`
      ),
      stencil: `<g fill="currentColor"><rect data-part="door-top" data-pivot="6.5 7" x="6.5" y="3.8" width="11" height="5.2" rx="1.3"/><rect data-part="door-bot" data-pivot="6.5 15" x="6.5" y="10.2" width="11" height="10" rx="1.4"/></g>`,
      hardware: `<rect data-part="door-top" data-pivot="6.5 7" x="6.4" y="3.6" width="11.2" height="5.6" rx="1.5" ${HL}/><g data-part="door-bot" data-pivot="6.5 15"><rect x="6.4" y="10" width="11.2" height="10.4" rx="1.6" ${HL}/><rect x="8.3" y="11.8" width="1.3" height="3.6" rx="0.6" ${HA}/></g>`,
      relief: `<g transform="translate(1.2,1.2)"><rect data-part="door-top" data-pivot="6.5 7" x="6.5" y="3.8" width="11" height="5.6" rx="1.4" ${RS}/><rect data-part="door-bot" data-pivot="6.5 15" x="6.5" y="9.4" width="11" height="11" rx="1.6" ${RS}/></g><rect data-part="door-top" data-pivot="6.5 7" x="6.5" y="3.8" width="11" height="5.6" rx="1.4" ${RF}/><rect data-part="door-bot" data-pivot="6.5 15" x="6.5" y="9.4" width="11" height="11" rx="1.6" ${RF}/>`,
    },
  },
  // 235. SOFA
  {
    name: "sofa",
    label: "Sofa",
    category: "Home & Lab",
    motionSummary: "Plush seat cushions compress gently then bounce back smoothly",
    soundSummary: "Cozy upholstered sofa cushion spring whoosh-thump",
    svgs: {
      outline: `<path data-part="cushions" d="M5.5 12V8.2A1.8 1.8 0 0 1 7.3 6.4H16.7A1.8 1.8 0 0 1 18.5 8.2V12" ${K}/><path data-part="frame" d="M4 12.2A1.5 1.5 0 0 1 5.5 13.7V16.8H18.5V13.7A1.5 1.5 0 0 1 20 12.2A1.5 1.5 0 0 1 21 13.6V17.6A1.4 1.4 0 0 1 19.6 19H4.4A1.4 1.4 0 0 1 3 17.6V13.6A1.5 1.5 0 0 1 4 12.2Z" ${K}/>`,
      solid: `<path data-part="cushions" fill="currentColor" opacity="0.65" d="M5.6 8.2A2 2 0 0 1 7.6 6.2H16.4A2 2 0 0 1 18.4 8.2V12.5H5.6Z"/><path data-part="frame" fill="currentColor" d="M4.2 11.4A1.8 1.8 0 0 1 6 13.2V14.4H18V13.2A1.8 1.8 0 0 1 21.6 13.2V17.4A1.8 1.8 0 0 1 19.8 19.2H4.2A1.8 1.8 0 0 1 2.4 17.4V13.2A1.8 1.8 0 0 1 4.2 11.4Z"/>`,
      duotone: `<path data-part="cushions" d="M5.5 12V8.2A1.8 1.8 0 0 1 7.3 6.4H16.7A1.8 1.8 0 0 1 18.5 8.2V12Z" ${D}/><path data-part="frame" d="M4.2 11.4A1.8 1.8 0 0 1 6 13.2V14.4H18V13.2A1.8 1.8 0 0 1 21.6 13.2V17.4A1.8 1.8 0 0 1 19.8 19.2H4.2A1.8 1.8 0 0 1 2.4 17.4V13.2A1.8 1.8 0 0 1 4.2 11.4Z" ${D}/>`,
      glass: glassCompose(
        `<path data-part="cushions" d="M5.6 8.2A2 2 0 0 1 7.6 6.2H16.4A2 2 0 0 1 18.4 8.2V13H5.6Z" ${GB}/>`,
        `<path data-part="frame" d="M4.2 11.4A1.8 1.8 0 0 1 6 13.2V14.4H18V13.2A1.8 1.8 0 0 1 21.6 13.2V17.4A1.8 1.8 0 0 1 19.8 19.2H4.2A1.8 1.8 0 0 1 2.4 17.4V13.2A1.8 1.8 0 0 1 4.2 11.4Z"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="cushions"><rect x="5.6" y="6.4" width="5.8" height="6" rx="1.4"/><rect x="12.6" y="6.4" width="5.8" height="6" rx="1.4"/></g><rect data-part="frame" x="3" y="13.6" width="18" height="5.4" rx="1.8"/></g>`,
      hardware: `<path data-part="cushions" d="M5.6 8.2A2 2 0 0 1 7.6 6.2H16.4A2 2 0 0 1 18.4 8.2V12.5H5.6Z" ${HL}/><path data-part="frame" d="M4.2 11.4A1.8 1.8 0 0 1 6 13.2V14.4H18V13.2A1.8 1.8 0 0 1 21.6 13.2V17.4A1.8 1.8 0 0 1 19.8 19.2H4.2A1.8 1.8 0 0 1 2.4 17.4V13.2A1.8 1.8 0 0 1 4.2 11.4Z" ${HD}/>`,
      relief: `<g data-part="cushions"><path transform="translate(1.2,1.2)" d="M5.5 12V8.2A1.8 1.8 0 0 1 7.3 6.4H16.7A1.8 1.8 0 0 1 18.5 8.2V12Z" ${RS}/><path d="M5.5 12V8.2A1.8 1.8 0 0 1 7.3 6.4H16.7A1.8 1.8 0 0 1 18.5 8.2V12Z" ${RF}/></g><g data-part="frame"><path transform="translate(1.2,1.2)" d="M4.2 11.4A1.8 1.8 0 0 1 6 13.2V14.4H18V13.2A1.8 1.8 0 0 1 21.6 13.2V17.4A1.8 1.8 0 0 1 19.8 19.2H4.2A1.8 1.8 0 0 1 2.4 17.4V13.2A1.8 1.8 0 0 1 4.2 11.4Z" ${RS}/><path d="M4.2 11.4A1.8 1.8 0 0 1 6 13.2V14.4H18V13.2A1.8 1.8 0 0 1 21.6 13.2V17.4A1.8 1.8 0 0 1 19.8 19.2H4.2A1.8 1.8 0 0 1 2.4 17.4V13.2A1.8 1.8 0 0 1 4.2 11.4Z" ${RF}/></g>`,
    },
  },
  // 236. BED
  {
    name: "bed",
    label: "Bed",
    category: "Home & Lab",
    motionSummary: "Soft pillow plumps upward as duvet blanket settles onto bedframe",
    soundSummary: "Soft cotton pillow fluff + cozy mattress spring settle",
    svgs: {
      outline: `<path d="M4 7V19M20 12V19M4 16H20" ${K}/><rect data-part="pillow" x="6.5" y="9" width="4.2" height="3.2" rx="1.2" ${K}/><path data-part="blanket" d="M11 12H18A2 2 0 0 1 20 14V16H11Z" ${K}/>`,
      solid: `<path fill="currentColor" d="M3.2 7A0.9 0.9 0 0 1 5 7V15.2H19V13A0.9 0.9 0 0 1 20.8 13V19A0.9 0.9 0 0 1 19 19V17.4H5V19A0.9 0.9 0 0 1 3.2 19Z"/><rect data-part="pillow" x="6" y="8.8" width="4.4" height="3.6" rx="1.3" fill="currentColor"/><path data-part="blanket" fill="currentColor" d="M11.2 10.6H18.2A2.2 2.2 0 0 1 20.4 12.8V16.4H11.2Z"/>`,
      duotone: `<path d="M4 7V19M20 12V19M4 16H20" ${DK}/><rect data-part="pillow" x="6.5" y="9" width="4.2" height="3.2" rx="1.2" ${D}/><path data-part="blanket" d="M11 12H18A2 2 0 0 1 20 14V16H11Z" ${D}/>`,
      glass: glassCompose(
        `<path d="M4 7V19M20 13V19M4 16.5H20" ${GBS}/><rect data-part="pillow" x="6.2" y="8.8" width="4.4" height="3.6" rx="1.3" ${GB}/>`,
        `<path data-part="blanket" d="M11.4 10.6H18.2A2.2 2.2 0 0 1 20.4 12.8V16.4H11.4Z"/>`
      ),
      stencil: `<g fill="currentColor"><rect x="3.5" y="7" width="1.8" height="12" rx="0.9"/><rect x="3.5" y="16.4" width="17" height="2" rx="0.9"/><rect data-part="pillow" x="6.4" y="8.8" width="4.2" height="3.4" rx="1.2"/><path data-part="blanket" d="M11.6 10.8H18.2A2 2 0 0 1 20.2 12.8V15.4H11.6Z"/></g>`,
      hardware: `<path d="M4 7V19M20 13V19M4 16.5H20" stroke="#52525b" stroke-width="2" stroke-linecap="round"/><rect data-part="pillow" x="6.2" y="8.8" width="4.4" height="3.6" rx="1.3" ${HA}/><path data-part="blanket" d="M11.4 10.6H18.2A2.2 2.2 0 0 1 20.4 12.8V16.4H11.4Z" ${HL}/>`,
      relief: `<path d="M4 7V19M20 12V19M4 16H20" ${RF_LINE}/><rect data-part="pillow" x="6.5" y="9" width="4.2" height="3.2" rx="1.2" ${RF}/><path data-part="blanket" d="M11 12H18A2 2 0 0 1 20 14V16H11Z" ${RF}/>`,
    },
  },
  // 237. BATHTUB
  {
    name: "bathtub",
    label: "Bathtub",
    category: "Home & Lab",
    motionSummary: "Chrome faucet nods slightly as warm bath soap bubble floats upward",
    soundSummary: "Porcelain tub water splash + delicate soap bubble pop",
    svgs: {
      outline: `<path data-part="faucet" d="M6 12V6.5A2 2 0 0 1 10 6.5V7.5" ${K}/><path d="M3.5 12H20.5V15A3.5 3.5 0 0 1 17 18.5H7A3.5 3.5 0 0 1 3.5 15Z" ${K}/><circle data-part="bubble" cx="15.5" cy="8.5" r="1.5" ${K_THIN}/>`,
      solid: `<path data-part="faucet" fill="currentColor" d="M5.2 12.2V6.5A2.8 2.8 0 0 1 10.8 6.5V7.5A0.85 0.85 0 0 1 9.1 7.5V6.5A1.1 1.1 0 0 0 6.9 6.5V12.2Z"/><path fill="currentColor" d="M3.4 12H20.6V15A3.8 3.8 0 0 1 16.8 18.8H7.2A3.8 3.8 0 0 1 3.4 15Z"/><circle data-part="bubble" cx="15.5" cy="8.5" r="1.6" fill="currentColor"/>`,
      duotone: `<path data-part="faucet" d="M6 12V6.5A2 2 0 0 1 10 6.5V7.5" ${DK}/><path d="M3.5 12H20.5V15A3.5 3.5 0 0 1 17 18.5H7A3.5 3.5 0 0 1 3.5 15Z" ${D}/><circle data-part="bubble" cx="15.5" cy="8.5" r="1.5" ${D}/>`,
      glass: glassCompose(
        `<path data-part="faucet" d="M6 12.2V6.5A2 2 0 0 1 10 6.5V7.5" ${GBS}/><circle data-part="bubble" cx="15.5" cy="8.5" r="1.6" ${GB}/>`,
        `<path d="M3.4 12H20.6V15A3.8 3.8 0 0 1 16.8 18.8H7.2A3.8 3.8 0 0 1 3.4 15Z"/>`
      ),
      stencil: `<g fill="currentColor"><path data-part="faucet" d="M5.2 11.4V6.5A2.8 2.8 0 0 1 10.8 6.5V7.5A0.85 0.85 0 0 1 9.1 7.5V6.5A1.1 1.1 0 0 0 6.9 6.5V11.4Z"/><path d="M3.5 12H11.3V18.6H7A3.5 3.5 0 0 1 3.5 15.1Z"/><path d="M12.7 12H20.5V15.1A3.5 3.5 0 0 1 17 18.6H12.7Z"/><circle data-part="bubble" cx="15.5" cy="8.5" r="1.5"/></g>`,
      hardware: `<path data-part="faucet" d="M6 12.2V6.5A2 2 0 0 1 10 6.5V7.5" fill="none" stroke="#52525b" stroke-width="1.8"/><path d="M3.4 12H20.6V15A3.8 3.8 0 0 1 16.8 18.8H7.2A3.8 3.8 0 0 1 3.4 15Z" ${HL}/><circle data-part="bubble" cx="15.5" cy="8.5" r="1.6" ${HA}/>`,
      relief: `<path data-part="faucet" d="M6 12V6.5A2 2 0 0 1 10 6.5V7.5" ${RF_LINE}/><path transform="translate(1.3,1.3)" d="M3.5 12H20.5V15A3.5 3.5 0 0 1 17 18.5H7A3.5 3.5 0 0 1 3.5 15Z" ${RS}/><path d="M3.5 12H20.5V15A3.5 3.5 0 0 1 17 18.5H7A3.5 3.5 0 0 1 3.5 15Z" ${RF}/><circle data-part="bubble" cx="15.5" cy="8.5" r="1.5" ${RF}/>`,
    },
  },
  // 238. TEST TUBE
  {
    name: "test-tube",
    label: "Test Tube",
    category: "Home & Lab",
    motionSummary: "Tilted reagent tube rocks gently while effervescent bubble rises",
    soundSummary: "Glass test tube rack clink + reagent bubble fizz",
    svgs: {
      outline: `<g data-part="tube" data-pivot="12 12" ${K}><path d="M13.8 4.4L19.6 10.2M15.6 6.2L7.4 14.4A2.5 2.5 0 0 0 10.9 17.9L19.1 9.7"/><line x1="10.2" y1="12.5" x2="13.5" y2="15.8" ${K_THIN}/></g><circle data-part="bubble" cx="15.8" cy="4.8" r="1.1" fill="currentColor"/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><line x1="10.2" y1="12.2" x2="13.8" y2="15.8" stroke="#000" stroke-width="1.3"/></mask></defs><path data-part="tube" data-pivot="12 12" fill="currentColor" mask="url(#__GID__-m1)" d="M13.6 4.2L19.8 10.4L18.6 11.6L17.8 10.8L11.2 17.4A2.7 2.7 0 0 1 7.4 13.6L14 7L13.2 6.2Z"/><circle data-part="bubble" cx="16" cy="4.6" r="1.2" fill="currentColor"/>`,
      duotone: `<g data-part="tube" data-pivot="12 12"><path d="M13.8 4.4L19.6 10.2" ${DK}/><path d="M15.6 6.2L7.4 14.4A2.5 2.5 0 0 0 10.9 17.9L19.1 9.7Z" ${D}/><line x1="10.2" y1="12.5" x2="13.5" y2="15.8" ${DK_THIN}/></g><circle data-part="bubble" cx="15.8" cy="4.8" r="1.1" fill="currentColor"/>`,
      glass: glassCompose(
        `<circle data-part="bubble" cx="16" cy="4.6" r="1.2" ${GB}/>`,
        `<path data-part="tube" data-pivot="12 12" d="M15.6 6.2L7.4 14.4A2.5 2.5 0 0 0 10.9 17.9L19.1 9.7Z"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="tube" data-pivot="12 12"><path d="M13.6 4.2L19.8 10.4L18.2 12L12 5.8Z"/><path d="M13.8 9.2L16.6 12L11.2 17.4A2.6 2.6 0 0 1 7.5 13.7Z"/></g><circle data-part="bubble" cx="16" cy="4.6" r="1.2"/></g>`,
      hardware: `<g data-part="tube" data-pivot="12 12"><path d="M13.6 4.2L19.8 10.4L18.6 11.6L17.8 10.8L11.2 17.4A2.7 2.7 0 0 1 7.4 13.6L14 7L13.2 6.2Z" ${HL}/></g><circle data-part="bubble" cx="16" cy="4.6" r="1.3" ${HA}/>`,
      relief: `<g data-part="tube" data-pivot="12 12"><path transform="translate(1.2,1.2)" d="M15.6 6.2L7.4 14.4A2.5 2.5 0 0 0 10.9 17.9L19.1 9.7Z" ${RS}/><path d="M15.6 6.2L7.4 14.4A2.5 2.5 0 0 0 10.9 17.9L19.1 9.7Z" ${RF}/></g><circle data-part="bubble" cx="15.8" cy="4.8" r="1.1" ${RS}/>`,
    },
  },
  // 239. SYRINGE
  {
    name: "syringe",
    label: "Syringe",
    category: "Home & Lab",
    motionSummary: "Plunger stem presses smoothly into barrel ejecting clear droplet at needle",
    soundSummary: "Smooth syringe plunger glide + crisp liquid squirt",
    svgs: {
      outline: `<g data-part="plunger" ${K}><line x1="16.2" y1="3.8" x2="20.2" y2="7.8"/><line x1="18.2" y1="5.8" x2="15.2" y2="8.8"/></g><g data-part="barrel" ${K}><path d="M12.4 6.2L17.8 11.6" ${K}/><path d="M13.2 7.2L16.8 10.8L10.4 17.2L6.8 13.6Z"/><line x1="9.6" y1="11.2" x2="11.2" y2="12.8" ${K_THIN}/><line x1="8.6" y1="15.4" x2="5.2" y2="18.8"/></g><circle data-part="drop" cx="4" cy="20" r="1.05" fill="currentColor"/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><line x1="9.6" y1="11.2" x2="11.4" y2="13" stroke="#000" stroke-width="1.3" stroke-linecap="round"/></mask></defs><g data-part="plunger" fill="currentColor"><rect x="14.6" y="4.9" width="6.2" height="1.9" rx="0.95" transform="rotate(45 17.7 5.8)"/><rect x="15.2" y="6.2" width="2.2" height="3.2" transform="rotate(45 16.3 7.8)"/></g><g data-part="barrel" fill="currentColor"><rect x="11.6" y="7.8" width="7.4" height="1.9" rx="0.95" transform="rotate(45 15.3 8.8)"/><polygon mask="url(#__GID__-m1)" points="13.2 7 17 10.8 10.4 17.4 6.6 13.6"/><polygon points="8.1 14.9 9.1 15.9 5.5 19.5 4.5 18.5"/></g><circle data-part="drop" cx="4" cy="20" r="1.15" fill="currentColor"/>`,
      duotone: `<g data-part="plunger" ${DK}><line x1="16.2" y1="3.8" x2="20.2" y2="7.8"/><line x1="18.2" y1="5.8" x2="15.2" y2="8.8"/></g><g data-part="barrel"><path d="M12.4 6.2L17.8 11.6" ${DK}/><polygon points="13.2 7.2 16.8 10.8 10.4 17.2 6.8 13.6" ${D}/><line x1="8.6" y1="15.4" x2="5.2" y2="18.8" ${DK}/></g><circle data-part="drop" cx="4" cy="20" r="1.05" fill="currentColor"/>`,
      glass: glassCompose(
        `<g data-part="plunger" ${GB}><rect x="14.6" y="4.9" width="6.2" height="1.9" rx="0.95" transform="rotate(45 17.7 5.8)"/><rect x="15.2" y="6.2" width="2.2" height="3.2" transform="rotate(45 16.3 7.8)"/></g><path data-part="barrel" d="M8.6 15.4L5.2 18.8" ${GBS}/><circle data-part="drop" cx="4" cy="20" r="1.15" ${GB}/>`,
        `<polygon data-part="barrel" points="13.2 7 17 10.8 10.4 17.4 6.6 13.6"/>`,
        `<g data-part="barrel" ${GF}><polygon points="13.2 7 17 10.8 10.4 17.4 6.6 13.6"/></g><line data-part="barrel" x1="12.4" y1="6.2" x2="17.8" y2="11.6" ${GBS}/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="plunger"><rect x="14.6" y="4.9" width="6" height="1.8" rx="0.9" transform="rotate(45 17.6 5.8)"/></g><g data-part="barrel"><rect x="11.8" y="7.9" width="7" height="1.7" rx="0.85" transform="rotate(45 15.3 8.8)"/><polygon points="13 7.2 16.8 11 10.4 17.4 6.6 13.6"/><polygon points="8.1 14.9 9.1 15.9 5.5 19.5 4.5 18.5"/></g><circle data-part="drop" cx="4" cy="20" r="1.15"/></g>`,
      hardware: `<g data-part="plunger"><rect x="14.6" y="4.9" width="6.2" height="1.9" rx="0.95" transform="rotate(45 17.7 5.8)" ${HD}/></g><g data-part="barrel"><polygon points="13.2 7 17 10.8 10.4 17.4 6.6 13.6" ${HL}/><polygon points="8.1 14.9 9.1 15.9 5.5 19.5 4.5 18.5" ${HD}/></g><circle data-part="drop" cx="4" cy="20" r="1.25" ${HA}/>`,
      relief: `<g data-part="plunger" ${RF_LINE}><line x1="16.2" y1="3.8" x2="20.2" y2="7.8"/><line x1="18.2" y1="5.8" x2="15.2" y2="8.8"/></g><g data-part="barrel"><polygon transform="translate(1.2,1.2)" points="13.2 7.2 16.8 10.8 10.4 17.2 6.8 13.6" ${RS}/><polygon points="13.2 7.2 16.8 10.8 10.4 17.2 6.8 13.6" ${RF}/><line x1="8.6" y1="15.4" x2="5.2" y2="18.8" ${RF_LINE}/></g><circle data-part="drop" cx="4" cy="20" r="1.05" ${RS}/>`,
    },
  },
  // 240. PETRI DISH
  {
    name: "petri-dish",
    label: "Petri Dish",
    category: "Home & Lab",
    motionSummary: "Glass culture dish lid lifts cleanly while microbial colonies pulse inside",
    soundSummary: "Delicate borosilicate petri dish clink + lab ping",
    svgs: {
      outline: `<circle data-part="lid" cx="12" cy="12" r="8" ${K}/><g data-part="colony" fill="currentColor"><circle cx="9.8" cy="10.2" r="1.2"/><circle cx="14.5" cy="11.5" r="1"/><circle cx="11.5" cy="14.8" r="1.3"/></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><circle cx="12" cy="12" r="6.2" fill="#000"/></mask></defs><circle data-part="lid" cx="12" cy="12" r="8.4" fill="currentColor" mask="url(#__GID__-m1)"/><g data-part="colony" fill="currentColor"><circle cx="9.8" cy="10.2" r="1.3"/><circle cx="14.5" cy="11.5" r="1.1"/><circle cx="11.5" cy="14.8" r="1.4"/></g>`,
      duotone: `<circle data-part="lid" cx="12" cy="12" r="8" ${D}/><g data-part="colony"><circle cx="9.8" cy="10.2" r="1.2" ${D}/><circle cx="14.5" cy="11.5" r="1" ${D}/><circle cx="11.5" cy="14.8" r="1.3" ${D}/></g>`,
      glass: glassCompose(
        `<g data-part="colony" ${GB}><circle cx="9.8" cy="10.2" r="1.4"/><circle cx="14.5" cy="11.5" r="1.2"/><circle cx="11.5" cy="14.8" r="1.5"/></g>`,
        `<circle data-part="lid" cx="12" cy="12" r="8.2"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="lid"><path d="M5.8 6.2A8.2 8.2 0 0 1 18.2 6.2L16.7 7.7A6.2 6.2 0 0 0 7.3 7.7Z"/><path d="M18.2 17.8A8.2 8.2 0 0 1 5.8 17.8L7.3 16.3A6.2 6.2 0 0 0 16.7 16.3Z"/></g><g data-part="colony"><circle cx="9.8" cy="10.2" r="1.3"/><circle cx="14.5" cy="11.5" r="1.1"/><circle cx="11.5" cy="14.8" r="1.4"/></g></g>`,
      hardware: `<circle data-part="lid" cx="12" cy="12" r="8.4" ${HL}/><circle cx="12" cy="12" r="6.4" ${HD}/><g data-part="colony" ${HA}><circle cx="9.8" cy="10.2" r="1.3"/><circle cx="14.5" cy="11.5" r="1.1"/><circle cx="11.5" cy="14.8" r="1.4"/></g>`,
      relief: `<g data-part="lid"><circle transform="translate(1.3,1.3)" cx="12" cy="12" r="8" ${RS}/><circle cx="12" cy="12" r="8" ${RF}/></g><g data-part="colony" ${RS}><circle cx="9.8" cy="10.2" r="1.2"/><circle cx="14.5" cy="11.5" r="1"/><circle cx="11.5" cy="14.8" r="1.3"/></g>`,
    },
  },
];
