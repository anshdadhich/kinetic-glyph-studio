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
  HD,
  HA,
  RS,
  RF,
  RS_LINE,
  RF_LINE,
} from "../shared";

export const COMMS_ICONS: IconDef[] = [
  // 11. MAIL
  {
    name: "mail",
    label: "Mail",
    category: "Comms & Files",
    motionSummary: "Envelope flap flips open while inner letter peeks up",
    soundSummary: "Paper envelope rip-open + gentle arrival tone",
    svgs: {
      outline: `<rect x="2.8" y="5.2" width="18.4" height="13.6" rx="2.8" ${K}/><line data-part="letter" x1="7" y1="8.4" x2="17" y2="8.4" ${K_THIN} opacity="0.45"/><path data-part="flap" data-pivot="12 5.4" d="M5.5 8.6L11.1 12.5A1.5 1.5 0 0 0 12.9 12.5L18.5 8.6" ${K}/>`,
      solid: `<path fill="currentColor" d="M2.8 8.3L11.1 14A1.6 1.6 0 0 0 12.9 14L21.2 8.3V16.1A2.8 2.8 0 0 1 18.4 18.9H5.6A2.8 2.8 0 0 1 2.8 16.1Z"/><path data-part="letter" fill="currentColor" d="M6.4 6.2H17.6A0.9 0.9 0 0 1 18.5 7.1V8.4L12 12.5L5.5 8.4V7.1A0.9 0.9 0 0 1 6.4 6.2Z" opacity="0.45"/><path data-part="flap" data-pivot="12 5.4" fill="currentColor" d="M5.6 5.1H18.4A2.8 2.8 0 0 1 21 7L12.7 12.6A1.2 1.2 0 0 1 11.3 12.6L3 7A2.8 2.8 0 0 1 5.6 5.1Z"/>`,
      duotone: `<rect x="2.8" y="5.2" width="18.4" height="13.6" rx="2.8" ${D}/><line data-part="letter" x1="7" y1="8.4" x2="17" y2="8.4" ${DK_THIN} opacity="0.5"/><path data-part="flap" data-pivot="12 5.4" d="M5.5 8.6L11.1 12.5A1.5 1.5 0 0 0 12.9 12.5L18.5 8.6" ${DK}/>`,
      glass: glassCompose(
        `<rect x="2.8" y="5.2" width="18.4" height="13.6" rx="2.8" ${GB}/><rect data-part="letter" data-pivot="12 11" x="6" y="7.5" width="12" height="7" rx="1" ${GH}/>`,
        `<path data-part="flap" data-pivot="12 5.4" d="M6 10.2A2.9 2.9 0 0 1 8.1 5.2H15.9A2.9 2.9 0 0 1 18 10.2L14 13.2A3 3 0 0 1 10 13.2Z"/>`
      ),
      stencil: `<g fill="currentColor"><path d="M2.8 8.8L10.8 14.2V18.8H5.6A2.8 2.8 0 0 1 2.8 16Z"/><path d="M21.2 8.8V16A2.8 2.8 0 0 1 18.4 18.8H13.2V14.2Z"/><rect data-part="letter" x="7" y="6.8" width="10" height="1.8" rx="0.9" opacity="0.45"/><path data-part="flap" data-pivot="12 5.4" d="M5.6 5.2H18.4L12 11.8Z"/></g>`,
      hardware: `<rect x="2.8" y="5.2" width="18.4" height="13.6" rx="2.8" ${HD}/><rect data-part="letter" x="6.5" y="7" width="11" height="4" rx="0.8" ${HA}/><path data-part="flap" data-pivot="12 5.4" d="M3.1 6.5A2.5 2.5 0 0 1 5.6 5.2H18.4A2.5 2.5 0 0 1 20.9 6.5L12 12.8Z" ${HL}/>`,
      relief: `<rect transform="translate(1.5,1.5)" x="2.8" y="5.2" width="18.4" height="13.6" rx="2.8" ${RS}/><rect x="2.8" y="5.2" width="18.4" height="13.6" rx="2.8" ${RF}/><line data-part="letter" x1="7.5" y1="8.4" x2="16.5" y2="8.4" ${RF_LINE} opacity="0.45"/><path data-part="flap" data-pivot="12 5.4" d="M5.5 8.6L11.1 12.5A1.5 1.5 0 0 0 12.9 12.5L18.5 8.6" ${RF_LINE}/>`,
    },
  },
  // 12. SEND
  {
    name: "send",
    label: "Send",
    category: "Comms & Files",
    motionSummary: "Paper airplane banks & launches diagonally skyward",
    soundSummary: "Swift aerodynamic paper-dart swoosh",
    svgs: {
      outline: `<g data-part="plane" ${K}><path d="M21 3L14 21L10.5 13.5L3 10Z"/><line x1="21" y1="3" x2="10.5" y2="13.5"/></g>`,
      solid: `<path data-part="plane" fill="currentColor" d="M20.9 3.1A0.8 0.8 0 0 1 21.4 4.1L14.5 21A0.8 0.8 0 0 1 13 21L10.2 14.3L3.1 11.4A0.8 0.8 0 0 1 3.1 9.9L20.1 3A0.8 0.8 0 0 1 20.9 3.1ZM10.8 12.8L18.4 5.2L11.4 13.8Z"/>`,
      duotone: `<g data-part="plane"><path d="M21 3L14 21L10.5 13.5L3 10Z" ${D}/><line x1="21" y1="3" x2="10.5" y2="13.5" ${DK}/></g>`,
      glass: glassCompose(
        `<polygon data-part="plane" data-pivot="12 12" points="21 3 14 21 10.5 13.5" ${GB}/>`,
        `<polygon data-part="plane" data-pivot="12 12" points="21 3 10.5 13.5 3 10"/>`
      ),
      stencil: `<g data-part="plane" fill="currentColor"><polygon points="20.6 3.2 10.2 12.8 3 9.8"/><polygon points="20.8 3.6 14 20.8 11.1 13.8"/></g>`,
      hardware: `<g data-part="plane"><polygon points="21 3 10.5 13.5 3 10" ${HL}/><polygon points="21 3 14 21 10.5 13.5" ${HD}/><circle cx="11.2" cy="12.8" r="0.9" ${HA}/></g>`,
      relief: `<g data-part="plane"><path transform="translate(1.5,1.5)" d="M21 3L14 21L10.5 13.5L3 10Z" ${RS}/><path d="M21 3L14 21L10.5 13.5L3 10Z" ${RF}/><line x1="21" y1="3" x2="10.5" y2="13.5" ${RF_LINE}/></g>`,
    },
  },
  // 13. CHAT
  {
    name: "chat",
    label: "Chat",
    category: "Comms & Files",
    motionSummary: "Bubble pops while three typing dots ripple sequentially",
    soundSummary: "Bouncy three-note pop-bloop triad",
    svgs: {
      outline: `<path data-part="bubble" d="M4 5.5H20A1.5 1.5 0 0 1 21.5 7V15.5A1.5 1.5 0 0 1 20 17H9L4.5 20.5V17H4A1.5 1.5 0 0 1 2.5 15.5V7A1.5 1.5 0 0 1 4 5.5Z" ${K}/><circle data-part="dot-1" cx="8.5" cy="11.2" r="0.9" fill="currentColor"/><circle data-part="dot-2" cx="12" cy="11.2" r="0.9" fill="currentColor"/><circle data-part="dot-3" cx="15.5" cy="11.2" r="0.9" fill="currentColor"/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><circle data-part="dot-1" cx="8.5" cy="11.2" r="1.05" fill="#000"/><circle data-part="dot-2" cx="12" cy="11.2" r="1.05" fill="#000"/><circle data-part="dot-3" cx="15.5" cy="11.2" r="1.05" fill="#000"/></mask></defs><path data-part="bubble" fill="currentColor" mask="url(#__GID__-m1)" d="M4 5H20A2 2 0 0 1 22 7V15.5A2 2 0 0 1 20 17.5H9.2L4.2 21V17.5H4A2 2 0 0 1 2 15.5V7A2 2 0 0 1 4 5Z"/>`,
      duotone: `<path data-part="bubble" d="M4 5.5H20A1.5 1.5 0 0 1 21.5 7V15.5A1.5 1.5 0 0 1 20 17H9L4.5 20.5V17H4A1.5 1.5 0 0 1 2.5 15.5V7A1.5 1.5 0 0 1 4 5.5Z" ${D}/><circle data-part="dot-1" cx="8.5" cy="11.2" r="1" fill="currentColor"/><circle data-part="dot-2" cx="12" cy="11.2" r="1" fill="currentColor"/><circle data-part="dot-3" cx="15.5" cy="11.2" r="1" fill="currentColor"/>`,
      glass: glassCompose(
        `<g data-part="bubble" data-pivot="12 12"><path transform="translate(-1.6,-1.3)" d="M4 5.5H20A1.5 1.5 0 0 1 21.5 7V15.5A1.5 1.5 0 0 1 20 17H9L4.5 20.5V17H4A1.5 1.5 0 0 1 2.5 15.5V7A1.5 1.5 0 0 1 4 5.5Z" ${GB}/></g>`,
        `<path data-part="bubble" data-pivot="12 12" d="M4 5.5H20A1.5 1.5 0 0 1 21.5 7V15.5A1.5 1.5 0 0 1 20 17H9L4.5 20.5V17H4A1.5 1.5 0 0 1 2.5 15.5V7A1.5 1.5 0 0 1 4 5.5Z"/>`,
        `<g data-part="bubble" data-pivot="12 12" ${GF}><path d="M4 5.5H20A1.5 1.5 0 0 1 21.5 7V15.5A1.5 1.5 0 0 1 20 17H9L4.5 20.5V17H4A1.5 1.5 0 0 1 2.5 15.5V7A1.5 1.5 0 0 1 4 5.5Z"/></g><circle data-part="dot-1" cx="8.5" cy="11.2" r="1" ${GB}/><circle data-part="dot-2" cx="12" cy="11.2" r="1" ${GB}/><circle data-part="dot-3" cx="15.5" cy="11.2" r="1" ${GB}/>`
      ),
      stencil: `<g data-part="bubble" fill="currentColor"><path d="M4 5.5H20A1.5 1.5 0 0 1 21.5 7V9.4H2.5V7A1.5 1.5 0 0 1 4 5.5Z"/><path d="M2.5 13H21.5V15.5A1.5 1.5 0 0 1 20 17H9L4.5 20.5V17H4A1.5 1.5 0 0 1 2.5 15.5Z"/></g><circle data-part="dot-1" cx="8.5" cy="11.2" r="0.95" fill="currentColor"/><circle data-part="dot-2" cx="12" cy="11.2" r="0.95" fill="currentColor"/><circle data-part="dot-3" cx="15.5" cy="11.2" r="0.95" fill="currentColor"/>`,
      hardware: `<path data-part="bubble" d="M4 5.5H20A1.5 1.5 0 0 1 21.5 7V15.5A1.5 1.5 0 0 1 20 17H9L4.5 20.5V17H4A1.5 1.5 0 0 1 2.5 15.5V7A1.5 1.5 0 0 1 4 5.5Z" ${HD}/><circle data-part="dot-1" cx="8.5" cy="11.2" r="1" ${HA}/><circle data-part="dot-2" cx="12" cy="11.2" r="1" ${HL}/><circle data-part="dot-3" cx="15.5" cy="11.2" r="1" ${HL}/>`,
      relief: `<g data-part="bubble"><path transform="translate(1.5,1.5)" d="M4 5.5H20A1.5 1.5 0 0 1 21.5 7V15.5A1.5 1.5 0 0 1 20 17H9L4.5 20.5V17H4A1.5 1.5 0 0 1 2.5 15.5V7A1.5 1.5 0 0 1 4 5.5Z" ${RS}/><path d="M4 5.5H20A1.5 1.5 0 0 1 21.5 7V15.5A1.5 1.5 0 0 1 20 17H9L4.5 20.5V17H4A1.5 1.5 0 0 1 2.5 15.5V7A1.5 1.5 0 0 1 4 5.5Z" ${RF}/></g><circle data-part="dot-1" cx="8.5" cy="11.2" r="1" ${RS}/><circle data-part="dot-2" cx="12" cy="11.2" r="1" ${RS}/><circle data-part="dot-3" cx="15.5" cy="11.2" r="1" ${RS}/>`,
    },
  },
  // 14. PHONE
  {
    name: "phone",
    label: "Phone",
    category: "Comms & Files",
    motionSummary: "Handset vibrates briskly side-to-side like an incoming ring",
    soundSummary: "Classic dual-tone metallic telephone ring",
    svgs: {
      outline: `<path data-part="handset" d="M5.5 4H9L10.5 8L8.5 9.8A11.5 11.5 0 0 0 14.2 15.5L16 13.5L20 15V18.5A2 2 0 0 1 18 20.5A14.5 14.5 0 0 1 3.5 6A2 2 0 0 1 5.5 4Z" ${K}/>`,
      solid: `<path data-part="handset" fill="currentColor" d="M5.5 3.6H9.2L10.9 8.1L8.8 10A11.2 11.2 0 0 0 14 15.2L15.9 13.1L20.4 14.8V18.5A2.2 2.2 0 0 1 18.2 20.7A15 15 0 0 1 3.3 5.8A2.2 2.2 0 0 1 5.5 3.6Z"/>`,
      duotone: `<path data-part="handset" d="M5.5 4H9L10.5 8L8.5 9.8A11.5 11.5 0 0 0 14.2 15.5L16 13.5L20 15V18.5A2 2 0 0 1 18 20.5A14.5 14.5 0 0 1 3.5 6A2 2 0 0 1 5.5 4Z" ${D}/>`,
      glass: glassCompose(
        `<g data-part="handset" data-pivot="12 12"><path transform="translate(-1.5,-1.2)" d="M5.5 4H9L10.5 8L8.5 9.8A11.5 11.5 0 0 0 14.2 15.5L16 13.5L20 15V18.5A2 2 0 0 1 18 20.5A14.5 14.5 0 0 1 3.5 6A2 2 0 0 1 5.5 4Z" ${GB}/></g>`,
        `<path data-part="handset" data-pivot="12 12" d="M5.5 4H9L10.5 8L8.5 9.8A11.5 11.5 0 0 0 14.2 15.5L16 13.5L20 15V18.5A2 2 0 0 1 18 20.5A14.5 14.5 0 0 1 3.5 6A2 2 0 0 1 5.5 4Z"/>`
      ),
      stencil: `<g data-part="handset" fill="currentColor"><path d="M5.5 3.8H9.1L10.6 7.9L8.3 10A11 11 0 0 0 10.6 12.9L9.4 14.1A14.5 14.5 0 0 1 3.5 5.8A2 2 0 0 1 5.5 3.8Z"/><path d="M11.8 15.1A11 11 0 0 0 14 15.3L16 13.3L20.2 14.9V18.5A2 2 0 0 1 18.2 20.5A14.5 14.5 0 0 1 10.6 15.2Z"/></g>`,
      hardware: `<g data-part="handset"><path d="M5.5 4H9L10.5 8L8.5 9.8A11.5 11.5 0 0 0 14.2 15.5L16 13.5L20 15V18.5A2 2 0 0 1 18 20.5A14.5 14.5 0 0 1 3.5 6A2 2 0 0 1 5.5 4Z" ${HL}/><circle cx="6.8" cy="6.4" r="0.9" ${HA}/></g>`,
      relief: `<g data-part="handset"><path transform="translate(1.5,1.5)" d="M5.5 4H9L10.5 8L8.5 9.8A11.5 11.5 0 0 0 14.2 15.5L16 13.5L20 15V18.5A2 2 0 0 1 18 20.5A14.5 14.5 0 0 1 3.5 6A2 2 0 0 1 5.5 4Z" ${RS}/><path d="M5.5 4H9L10.5 8L8.5 9.8A11.5 11.5 0 0 0 14.2 15.5L16 13.5L20 15V18.5A2 2 0 0 1 18 20.5A14.5 14.5 0 0 1 3.5 6A2 2 0 0 1 5.5 4Z" ${RF}/></g>`,
    },
  },
  // 15. FOLDER
  {
    name: "folder",
    label: "Folder",
    category: "Comms & Files",
    motionSummary: "Front pocket hinges open as inner sheet peeks upward",
    soundSummary: "Manila cardstock rustle + tab snap",
    svgs: {
      outline: `<path d="M2.8 7A2.3 2.3 0 0 1 5 4.8H8.6C9.3 4.8 9.9 5 10.4 5.5L11.4 6.5C11.7 6.8 12.1 7 12.6 7H19A2.3 2.3 0 0 1 21.2 9.2V17A2.3 2.3 0 0 1 19 19.2H5A2.3 2.3 0 0 1 2.8 17Z" ${K}/><line data-part="doc" x1="6.8" y1="8.8" x2="17.2" y2="8.8" ${K_THIN} opacity="0.45"/><path data-part="flap" data-pivot="12 19" d="M2.8 10.6H21.2" ${K}/>`,
      solid: `<path fill="currentColor" d="M2.8 7A2.6 2.6 0 0 1 5.4 4.4H8.6Q9.6 4.4 10.4 5.2L11.4 6.2Q11.9 6.6 12.6 6.6H18.6A2.6 2.6 0 0 1 21.2 9.2V9.6H2.8Z"/><rect data-part="doc" x="6.5" y="7.8" width="11" height="2" rx="0.8" fill="currentColor" opacity="0.4"/><path data-part="flap" data-pivot="12 19" fill="currentColor" d="M2.8 10.6H21.2V17A2.6 2.6 0 0 1 18.6 19.6H5.4A2.6 2.6 0 0 1 2.8 17Z"/>`,
      duotone: `<path d="M2.8 7A2.3 2.3 0 0 1 5 4.8H8.6C9.3 4.8 9.9 5 10.4 5.5L11.4 6.5C11.7 6.8 12.1 7 12.6 7H19A2.3 2.3 0 0 1 21.2 9.2V17A2.3 2.3 0 0 1 19 19.2H5A2.3 2.3 0 0 1 2.8 17Z" ${DK}/><line data-part="doc" x1="6.8" y1="8.8" x2="17.2" y2="8.8" ${DK_THIN} opacity="0.45"/><path data-part="flap" data-pivot="12 19" d="M2.8 10.4H21.2V17A2.3 2.3 0 0 1 19 19.2H5A2.3 2.3 0 0 1 2.8 17Z" ${D}/>`,
      glass: glassCompose(
        `<path d="M2.4 7A2.8 2.8 0 0 1 5.2 4.2H8.6Q9.7 4.2 10.5 5L11.5 6Q12 6.4 12.6 6.4H18.8A2.8 2.8 0 0 1 21.6 9.2V15H2.4Z" ${GB}/><rect data-part="doc" data-pivot="12 10" x="5.6" y="7.5" width="12.8" height="5.5" rx="0.9" ${GH}/>`,
        `<rect data-part="flap" data-pivot="12 19" x="2.4" y="9.6" width="19.2" height="10.2" rx="2.8"/>`
      ),
      stencil: `<g fill="currentColor"><path d="M2.8 7A2.3 2.3 0 0 1 5 4.8H8.6C9.3 4.8 9.9 5 10.4 5.5L11.4 6.5C11.7 6.8 12.1 7 12.6 7H19A2.3 2.3 0 0 1 21.2 9.2V9.8H2.8Z"/><rect data-part="doc" x="6.5" y="7.9" width="11" height="1.8" rx="0.8" opacity="0.4"/><path data-part="flap" data-pivot="12 19" d="M2.8 11.2H11.2V19.4H5A2.3 2.3 0 0 1 2.8 17Z"/><path data-part="flap" data-pivot="12 19" d="M12.8 11.2H21.2V17A2.3 2.3 0 0 1 19 19.4H12.8Z"/></g>`,
      hardware: `<path d="M2.8 7A2.3 2.3 0 0 1 5 4.8H8.6C9.3 4.8 9.9 5 10.4 5.5L11.4 6.5C11.7 6.8 12.1 7 12.6 7H19A2.3 2.3 0 0 1 21.2 9.2V17A2.3 2.3 0 0 1 19 19.2H5A2.3 2.3 0 0 1 2.8 17Z" ${HD}/><rect data-part="doc" x="6.2" y="7.6" width="11.6" height="3.2" rx="0.7" ${HA}/><g data-part="flap" data-pivot="12 19"><path d="M2.8 10.2H21.2V17A2.3 2.3 0 0 1 19 19.2H5A2.3 2.3 0 0 1 2.8 17Z" ${HL}/><rect x="5.5" y="12.2" width="3.5" height="1.2" rx="0.5" ${HA}/></g>`,
      relief: `<path transform="translate(1.5,1.5)" d="M2.8 7A2.3 2.3 0 0 1 5 4.8H8.6C9.3 4.8 9.9 5 10.4 5.5L11.4 6.5C11.7 6.8 12.1 7 12.6 7H19A2.3 2.3 0 0 1 21.2 9.2V17A2.3 2.3 0 0 1 19 19.2H5A2.3 2.3 0 0 1 2.8 17Z" ${RS}/><path d="M2.8 7A2.3 2.3 0 0 1 5 4.8H8.6C9.3 4.8 9.9 5 10.4 5.5L11.4 6.5C11.7 6.8 12.1 7 12.6 7H19A2.3 2.3 0 0 1 21.2 9.2V17A2.3 2.3 0 0 1 19 19.2H5A2.3 2.3 0 0 1 2.8 17Z" ${RF}/><line data-part="doc" x1="7" y1="8.4" x2="17" y2="8.4" ${RF_LINE} opacity="0.45"/><path data-part="flap" data-pivot="12 19" d="M2.8 10.4H21.2V17A2.3 2.3 0 0 1 19 19.2H5A2.3 2.3 0 0 1 2.8 17Z" ${RF}/>`,
    },
  },
  // 16. DOCUMENT
  {
    name: "document",
    label: "Document",
    category: "Comms & Files",
    motionSummary: "Dog-ear corner folds outward as text lines scan",
    soundSummary: "Crisp paper sheet page flip",
    svgs: {
      outline: `<path d="M6.5 3.2H13.5A1.5 1.5 0 0 1 14.56 3.64L18.56 7.64A1.5 1.5 0 0 1 19 8.7V18.5A2.3 2.3 0 0 1 16.7 20.8H6.5A2.3 2.3 0 0 1 4.2 18.5V5.5A2.3 2.3 0 0 1 6.5 3.2Z" ${K}/><path data-part="corner" data-pivot="14 8" d="M13.8 3.3V6.9A1.5 1.5 0 0 0 15.3 8.4H18.9" ${K}/><g data-part="lines" ${K_THIN}><line x1="7.8" y1="12.2" x2="15.2" y2="12.2"/><line x1="7.8" y1="15.7" x2="13.4" y2="15.7"/></g>`,
      solid: `<defs><mask id="__GID__-m1"><rect x="0" y="0" width="24" height="24" fill="#fff"/><g data-part="lines" stroke="#000" stroke-width="1.6" stroke-linecap="round"><line x1="7.8" y1="12.2" x2="15.2" y2="12.2"/><line x1="7.8" y1="15.7" x2="13.4" y2="15.7"/></g></mask></defs><path mask="url(#__GID__-m1)" fill="currentColor" d="M6.5 3H13.2V7A1.8 1.8 0 0 0 15 8.8H19V18.5A2.5 2.5 0 0 1 16.5 21H6.5A2.5 2.5 0 0 1 4 18.5V5.5A2.5 2.5 0 0 1 6.5 3Z"/><path data-part="corner" data-pivot="14.5 7.5" fill="currentColor" d="M14.5 3.2L18.8 7.5H15.2A0.7 0.7 0 0 1 14.5 6.8Z"/>`,
      duotone: `<path d="M6.5 3.2H13.5A1.5 1.5 0 0 1 14.56 3.64L18.56 7.64A1.5 1.5 0 0 1 19 8.7V18.5A2.3 2.3 0 0 1 16.7 20.8H6.5A2.3 2.3 0 0 1 4.2 18.5V5.5A2.3 2.3 0 0 1 6.5 3.2Z" ${D}/><path data-part="corner" data-pivot="14 8" d="M13.8 3.3V6.9A1.5 1.5 0 0 0 15.3 8.4H18.9" ${DK}/><g data-part="lines" ${DK_THIN}><line x1="7.8" y1="12.2" x2="15.2" y2="12.2"/><line x1="7.8" y1="15.7" x2="13.4" y2="15.7"/></g>`,
      glass: glassCompose(
        `<path transform="translate(-1.5,-1.1)" d="M6.5 3.2H13.5A1.5 1.5 0 0 1 14.56 3.64L18.56 7.64A1.5 1.5 0 0 1 19 8.7V18.5A2.3 2.3 0 0 1 16.7 20.8H6.5A2.3 2.3 0 0 1 4.2 18.5V5.5A2.3 2.3 0 0 1 6.5 3.2Z" ${GB}/>`,
        `<path d="M6.5 3.2H13.5A1.5 1.5 0 0 1 14.56 3.64L18.56 7.64A1.5 1.5 0 0 1 19 8.7V18.5A2.3 2.3 0 0 1 16.7 20.8H6.5A2.3 2.3 0 0 1 4.2 18.5V5.5A2.3 2.3 0 0 1 6.5 3.2Z"/>`,
        `<g ${GF}><path d="M6.5 3.2H13.5A1.5 1.5 0 0 1 14.56 3.64L18.56 7.64A1.5 1.5 0 0 1 19 8.7V18.5A2.3 2.3 0 0 1 16.7 20.8H6.5A2.3 2.3 0 0 1 4.2 18.5V5.5A2.3 2.3 0 0 1 6.5 3.2Z"/></g><path data-part="corner" data-pivot="15.8 6.2" d="M14 3.4L18.7 8.1H15.2A1.2 1.2 0 0 1 14 6.9Z" ${GB}/><g data-part="lines" ${GBS}><line x1="7.8" y1="12.4" x2="15.2" y2="12.4"/><line x1="7.8" y1="15.8" x2="13.4" y2="15.8"/></g>`
      ),
      stencil: `<defs><mask id="__GID__-m1"><rect x="0" y="0" width="24" height="24" fill="#fff"/><g data-part="lines" stroke="#000" stroke-width="1.6" stroke-linecap="round"><line x1="7.8" y1="12.2" x2="15.2" y2="12.2"/><line x1="7.8" y1="15.7" x2="13.4" y2="15.7"/></g></mask></defs><g fill="currentColor"><path mask="url(#__GID__-m1)" d="M6.5 3.2H13.2V7.2A1.6 1.6 0 0 0 14.8 8.8H18.8V18.5A2.3 2.3 0 0 1 16.5 20.8H6.5A2.3 2.3 0 0 1 4.2 18.5V5.5A2.3 2.3 0 0 1 6.5 3.2Z"/><path data-part="corner" data-pivot="14.6 7.4" d="M14.6 3.3L18.7 7.4H14.6Z"/></g>`,
      hardware: `<path d="M6.5 3.2H13.5A1.5 1.5 0 0 1 14.56 3.64L18.56 7.64A1.5 1.5 0 0 1 19 8.7V18.5A2.3 2.3 0 0 1 16.7 20.8H6.5A2.3 2.3 0 0 1 4.2 18.5V5.5A2.3 2.3 0 0 1 6.5 3.2Z" ${HL}/><path data-part="corner" data-pivot="15.8 6.2" d="M14 3.4L18.7 8.1H15A1 1 0 0 1 14 7.1Z" ${HA}/><g data-part="lines" stroke="#52525b" stroke-width="1.35" stroke-linecap="round"><line x1="7.8" y1="12.2" x2="15.2" y2="12.2"/><line x1="7.8" y1="15.7" x2="13.4" y2="15.7"/></g>`,
      relief: `<path transform="translate(1.5,1.5)" d="M6.5 3.2H13.5A1.5 1.5 0 0 1 14.56 3.64L18.56 7.64A1.5 1.5 0 0 1 19 8.7V18.5A2.3 2.3 0 0 1 16.7 20.8H6.5A2.3 2.3 0 0 1 4.2 18.5V5.5A2.3 2.3 0 0 1 6.5 3.2Z" ${RS}/><path d="M6.5 3.2H13.5A1.5 1.5 0 0 1 14.56 3.64L18.56 7.64A1.5 1.5 0 0 1 19 8.7V18.5A2.3 2.3 0 0 1 16.7 20.8H6.5A2.3 2.3 0 0 1 4.2 18.5V5.5A2.3 2.3 0 0 1 6.5 3.2Z" ${RF}/><path data-part="corner" data-pivot="15.8 6.2" d="M14 3.4L18.7 8.1H15A1 1 0 0 1 14 7.1Z" ${RS}/><g data-part="lines" ${RF_LINE}><line x1="7.8" y1="12.2" x2="15.2" y2="12.2"/><line x1="7.8" y1="15.7" x2="13.4" y2="15.7"/></g>`,
    },
  },
  // 17. BOOKMARK
  {
    name: "bookmark",
    label: "Bookmark",
    category: "Comms & Files",
    motionSummary: "Ribbon pulls downward and snaps back into page spine",
    soundSummary: "Silk ribbon pull + page tuck chime",
    svgs: {
      outline: `<path data-part="ribbon" data-pivot="12 11.5" d="M6.25 5.5A2.75 2.75 0 0 1 9 2.75H15A2.75 2.75 0 0 1 17.75 5.5V19.38A1 1 0 0 1 16.11 20.15L12.51 17.17A0.8 0.8 0 0 0 11.49 17.17L7.89 20.15A1 1 0 0 1 6.25 19.38Z" ${K}/>`,
      solid: `<path data-part="ribbon" data-pivot="12 11.5" fill="currentColor" d="M6.25 5.5A2.75 2.75 0 0 1 9 2.75H15A2.75 2.75 0 0 1 17.75 5.5V19.38A1 1 0 0 1 16.11 20.15L12.51 17.17A0.8 0.8 0 0 0 11.49 17.17L7.89 20.15A1 1 0 0 1 6.25 19.38Z"/>`,
      duotone: `<path data-part="ribbon" data-pivot="12 11.5" d="M6.25 5.5A2.75 2.75 0 0 1 9 2.75H15A2.75 2.75 0 0 1 17.75 5.5V19.38A1 1 0 0 1 16.11 20.15L12.51 17.17A0.8 0.8 0 0 0 11.49 17.17L7.89 20.15A1 1 0 0 1 6.25 19.38Z" ${D}/>`,
      glass: glassCompose(
        `<path d="M9 2.75H15.6A2.75 2.75 0 0 1 18.35 5.5V18.8A0.9 0.9 0 0 1 16.85 19.5L13 16.3V2.75Z" ${GB}/>`,
        `<path data-part="ribbon" data-pivot="11.2 11.5" d="M5.65 5.5A2.75 2.75 0 0 1 8.4 2.75H14.2A2.75 2.75 0 0 1 16.95 5.5V19.38A1 1 0 0 1 15.31 20.15L11.81 17.25A0.8 0.8 0 0 0 10.79 17.25L7.29 20.15A1 1 0 0 1 5.65 19.38Z"/>`
      ),
      stencil: `<g data-part="ribbon" data-pivot="12 11.5" fill="currentColor"><path d="M9 2.75H11.2V16.2L7.89 19.9A1 1 0 0 1 6.25 19.15V5.5A2.75 2.75 0 0 1 9 2.75Z"/><path d="M12.8 2.75H15A2.75 2.75 0 0 1 17.75 5.5V19.15A1 1 0 0 1 16.11 19.9L12.8 16.2Z"/></g>`,
      hardware: `<g data-part="ribbon" data-pivot="12 11.5"><path d="M6.25 5.5A2.75 2.75 0 0 1 9 2.75H15A2.75 2.75 0 0 1 17.75 5.5V19.38A1 1 0 0 1 16.11 20.15L12.51 17.17A0.8 0.8 0 0 0 11.49 17.17L7.89 20.15A1 1 0 0 1 6.25 19.38Z" ${HL}/><rect x="6.6" y="3.2" width="10.8" height="2.8" rx="1.2" ${HA}/></g>`,
      relief: `<g data-part="ribbon" data-pivot="12 11.5"><path transform="translate(1.5,1.5)" d="M6.25 5.5A2.75 2.75 0 0 1 9 2.75H15A2.75 2.75 0 0 1 17.75 5.5V19.38A1 1 0 0 1 16.11 20.15L12.51 17.17A0.8 0.8 0 0 0 11.49 17.17L7.89 20.15A1 1 0 0 1 6.25 19.38Z" ${RS}/><path d="M6.25 5.5A2.75 2.75 0 0 1 9 2.75H15A2.75 2.75 0 0 1 17.75 5.5V19.38A1 1 0 0 1 16.11 20.15L12.51 17.17A0.8 0.8 0 0 0 11.49 17.17L7.89 20.15A1 1 0 0 1 6.25 19.38Z" ${RF}/></g>`,
    },
  },
  // 18. CALENDAR
  {
    name: "calendar",
    label: "Calendar",
    category: "Comms & Files",
    motionSummary: "Spiral rings bounce as top page tilts upward",
    soundSummary: "Desk calendar page tear-off snap",
    svgs: {
      outline: `<g data-part="rings" ${K}><line x1="8" y1="2.8" x2="8" y2="6"/><line x1="16" y1="2.8" x2="16" y2="6"/></g><g data-part="page" data-pivot="12 13"><rect x="3.25" y="4.75" width="17.5" height="16.5" rx="3" ${K}/><line x1="3.25" y1="9.75" x2="20.75" y2="9.75" ${K}/><circle cx="7.75" cy="13.5" r="1.05" fill="currentColor"/><circle cx="12" cy="13.5" r="1.05" fill="currentColor"/><circle cx="16.25" cy="13.5" r="1.05" fill="currentColor"/><circle cx="7.75" cy="17.25" r="1.05" fill="currentColor"/><circle cx="12" cy="17.25" r="1.05" fill="currentColor"/></g>`,
      solid: `<g data-part="rings" fill="currentColor"><rect x="7.1" y="2.4" width="1.8" height="3.8" rx="0.9"/><rect x="15.1" y="2.4" width="1.8" height="3.8" rx="0.9"/></g><g data-part="page" data-pivot="12 13" fill="currentColor"><path fill-rule="evenodd" d="M6.25 4.75H17.75A3 3 0 0 1 20.75 7.75V18.25A3 3 0 0 1 17.75 21.25H6.25A3 3 0 0 1 3.25 18.25V7.75A3 3 0 0 1 6.25 4.75ZM5.15 10.1V18.25A1.1 1.1 0 0 0 6.25 19.35H17.75A1.1 1.1 0 0 0 18.85 18.25V10.1Z"/><circle cx="7.75" cy="13.5" r="1.15"/><circle cx="12" cy="13.5" r="1.15"/><circle cx="16.25" cy="13.5" r="1.15"/><circle cx="7.75" cy="17" r="1.15"/><circle cx="12" cy="17" r="1.15"/></g>`,
      duotone: `<g data-part="rings" ${DK}><line x1="8" y1="2.8" x2="8" y2="6"/><line x1="16" y1="2.8" x2="16" y2="6"/></g><g data-part="page" data-pivot="12 13"><path d="M6.25 4.75H17.75A3 3 0 0 1 20.75 7.75V9.75H3.25V7.75A3 3 0 0 1 6.25 4.75Z" ${D}/><rect x="3.25" y="4.75" width="17.5" height="16.5" rx="3" ${DK}/><line x1="3.25" y1="9.75" x2="20.75" y2="9.75" ${DK}/><circle cx="7.75" cy="13.5" r="1.05" fill="currentColor"/><circle cx="12" cy="13.5" r="1.05" fill="currentColor"/><circle cx="16.25" cy="13.5" r="1.05" fill="currentColor"/><circle cx="7.75" cy="17.25" r="1.05" fill="currentColor"/><circle cx="12" cy="17.25" r="1.05" fill="currentColor"/></g>`,
      glass: glassCompose(
        `<path data-part="page" data-pivot="12 13" d="M6.25 4.25H17.75A3.2 3.2 0 0 1 21 7.5V11.5A1.5 1.5 0 0 1 19.5 13H4.5A1.5 1.5 0 0 1 3 11.5V7.5A3.2 3.2 0 0 1 6.25 4.25Z" ${GB}/>`,
        `<rect data-part="page" data-pivot="12 13" x="3" y="7.8" width="18" height="13.7" rx="3.2"/>`,
        `<g data-part="page" data-pivot="12 13" ${GF}><rect x="3" y="7.8" width="18" height="13.7" rx="3.2"/></g><g data-part="rings" data-pivot="12 4.5" ${GBS}><line x1="8" y1="2.75" x2="8" y2="6"/><line x1="16" y1="2.75" x2="16" y2="6"/></g><g data-part="page" data-pivot="12 13" ${GB}><circle cx="7.75" cy="13.5" r="1.1"/><circle cx="12" cy="13.5" r="1.1"/><circle cx="16.25" cy="13.5" r="1.1"/><circle cx="7.75" cy="17.25" r="1.1"/><circle cx="12" cy="17.25" r="1.1"/></g>`
      ),
      stencil: `<g data-part="rings" fill="currentColor"><rect x="7.2" y="2.8" width="1.6" height="3" rx="0.6"/><rect x="15.2" y="2.8" width="1.6" height="3" rx="0.6"/></g><g data-part="page" data-pivot="12 13" fill="currentColor"><path d="M6.25 4.75H17.75A3 3 0 0 1 20.75 7.75V9.2H3.25V7.75A3 3 0 0 1 6.25 4.75Z"/><path d="M3.25 10.8H5.15V18.2A1.1 1.1 0 0 0 6.25 19.3H11.1V21.2H6.25A3 3 0 0 1 3.25 18.2Z"/><path d="M18.85 10.8H20.75V18.2A3 3 0 0 1 17.75 21.2H12.9V19.3H17.75A1.1 1.1 0 0 0 18.85 18.2Z"/><circle cx="8" cy="13.5" r="1"/><circle cx="12" cy="13.5" r="1"/><circle cx="16" cy="13.5" r="1"/><circle cx="8" cy="17" r="1"/></g>`,
      hardware: `<g data-part="rings" stroke="#71717a" stroke-width="2" stroke-linecap="round"><line x1="8" y1="2.8" x2="8" y2="6"/><line x1="16" y1="2.8" x2="16" y2="6"/></g><g data-part="page" data-pivot="12 13"><rect x="3.25" y="4.75" width="17.5" height="16.5" rx="3" ${HL}/><path d="M6.25 4.75H17.75A3 3 0 0 1 20.75 7.75V9.75H3.25V7.75A3 3 0 0 1 6.25 4.75Z" ${HD}/><circle cx="7.75" cy="13.5" r="1.2" ${HA}/><circle cx="12" cy="13.5" r="1.1" ${HD}/><circle cx="16.25" cy="13.5" r="1.1" ${HD}/><circle cx="7.75" cy="17.25" r="1.1" ${HD}/></g>`,
      relief: `<g data-part="rings"><g transform="translate(1.5,1.5)" ${RS_LINE}><line x1="8" y1="2.8" x2="8" y2="6"/><line x1="16" y1="2.8" x2="16" y2="6"/></g><g ${RF_LINE}><line x1="8" y1="2.8" x2="8" y2="6"/><line x1="16" y1="2.8" x2="16" y2="6"/></g></g><g data-part="page" data-pivot="12 13"><rect transform="translate(1.5,1.5)" x="3.25" y="4.75" width="17.5" height="16.5" rx="3" ${RS}/><rect x="3.25" y="4.75" width="17.5" height="16.5" rx="3" ${RF}/><line x1="3.25" y1="9.75" x2="20.75" y2="9.75" ${RF_LINE}/><circle cx="7.75" cy="13.5" r="1.05" ${RS}/><circle cx="12" cy="13.5" r="1.05" ${RS}/><circle cx="16.25" cy="13.5" r="1.05" ${RS}/></g>`,
    },
  },
  // 19. DOWNLOAD
  {
    name: "download",
    label: "Download",
    category: "Comms & Files",
    motionSummary: "Arrow plunges downward into receiving tray",
    soundSummary: "Descending pitch glide + tray lock clack",
    svgs: {
      outline: `<g data-part="arrow" ${K}><line x1="12" y1="3.25" x2="12" y2="15.25"/><path d="M7.5 10.75L11.58 14.83A0.6 0.6 0 0 0 12.42 14.83L16.5 10.75"/></g><path data-part="tray" d="M3.25 14.25V17.75A3 3 0 0 0 6.25 20.75H17.75A3 3 0 0 0 20.75 17.75V14.25" ${K}/>`,
      solid: `<path data-part="arrow" fill="currentColor" d="M10.4 3.8A1.4 1.4 0 0 1 13.2 3.8V9.6H15.6A1.3 1.3 0 0 1 16.6 11.7L12.9 16A1.2 1.2 0 0 1 11.1 16L7.4 11.7A1.3 1.3 0 0 1 8.4 9.6H10.4Z"/><path data-part="tray" fill="currentColor" d="M3 14.2A1 1 0 0 1 5 14.2V17.6A1.5 1.5 0 0 0 6.5 19.1H17.5A1.5 1.5 0 0 0 19 17.6V14.2A1 1 0 0 1 21 14.2V17.6A3.4 3.4 0 0 1 17.6 21H6.4A3.4 3.4 0 0 1 3 17.6Z"/>`,
      duotone: `<g data-part="arrow" ${DK}><line x1="12" y1="3.25" x2="12" y2="15.25"/><path d="M7.5 10.75L11.58 14.83A0.6 0.6 0 0 0 12.42 14.83L16.5 10.75"/></g><path data-part="tray" d="M3.25 14.25H20.75V17.75A3 3 0 0 1 17.75 20.75H6.25A3 3 0 0 1 3.25 17.75Z" ${D}/>`,
      glass: glassCompose(
        `<rect data-part="tray" data-pivot="12 17.5" x="2.8" y="13.6" width="18.4" height="7.6" rx="2.8" ${GB}/>`,
        `<path data-part="arrow" data-pivot="12 10" d="M9.4 4.2A1.6 1.6 0 0 1 11 2.6H13A1.6 1.6 0 0 1 14.6 4.2V9.3H16A1.6 1.6 0 0 1 17.2 11.9L13.2 16.4A1.6 1.6 0 0 1 10.8 16.4L6.8 11.9A1.6 1.6 0 0 1 8 9.3H9.4Z"/>`
      ),
      stencil: `<path data-part="arrow" fill="currentColor" d="M10.9 3.5H13.1V10.4H16.2L12 15.6L7.8 10.4H10.9Z"/><g data-part="tray" fill="currentColor"><path d="M3.2 14.5H5.2V17.8A1.4 1.4 0 0 0 6.6 19.2H11.1V21.1H6.2A3 3 0 0 1 3.2 18.1Z"/><path d="M18.8 14.5H20.8V18.1A3 3 0 0 1 17.8 21.1H12.9V19.2H17.4A1.4 1.4 0 0 0 18.8 17.8Z"/></g>`,
      hardware: `<rect data-part="tray" x="3.25" y="14.25" width="17.5" height="6.5" rx="2.6" ${HD}/><path data-part="arrow" ${HA} d="M10.4 3.8A1.4 1.4 0 0 1 13.2 3.8V10H15.8A1.2 1.2 0 0 1 16.7 12L12.8 16.2A1.1 1.1 0 0 1 11.2 16.2L7.3 12A1.2 1.2 0 0 1 8.2 10H10.4Z"/>`,
      relief: `<g data-part="arrow"><path transform="translate(1.5,1.5)" d="M10.6 3.8A1.4 1.4 0 0 1 13.4 3.8V10H15.8L12 15.8L8.2 10H10.6Z" ${RS}/><path d="M10.6 3.8A1.4 1.4 0 0 1 13.4 3.8V10H15.8L12 15.8L8.2 10H10.6Z" ${RF}/></g><g data-part="tray"><path transform="translate(1.5,1.5)" d="M3.25 14.25V17.75A3 3 0 0 0 6.25 20.75H17.75A3 3 0 0 0 20.75 17.75V14.25" ${RS_LINE}/><path d="M3.25 14.25V17.75A3 3 0 0 0 6.25 20.75H17.75A3 3 0 0 0 20.75 17.75V14.25" ${RF_LINE}/></g>`,
    },
  },
  // 20. UPLOAD
  {
    name: "upload",
    label: "Upload",
    category: "Comms & Files",
    motionSummary: "Arrow launches skyward off base tray",
    soundSummary: "Ascending whoosh + bright confirmation blip",
    svgs: {
      outline: `<g data-part="arrow" ${K}><line x1="12" y1="15.25" x2="12" y2="3.25"/><path d="M7.5 7.75L11.58 3.67A0.6 0.6 0 0 1 12.42 3.67L16.5 7.75"/></g><path data-part="tray" d="M3.25 14.25V17.75A3 3 0 0 0 6.25 20.75H17.75A3 3 0 0 0 20.75 17.75V14.25" ${K}/>`,
      solid: `<path data-part="arrow" fill="currentColor" d="M12 3.1A1.2 1.2 0 0 1 12.9 3.5L16.6 7.8A1.3 1.3 0 0 1 15.6 9.9H13.4V15.4A1.4 1.4 0 0 1 10.6 15.4V9.9H8.4A1.3 1.3 0 0 1 7.4 7.8L11.1 3.5A1.2 1.2 0 0 1 12 3.1Z"/><path data-part="tray" fill="currentColor" d="M3 14.2A1 1 0 0 1 5 14.2V17.6A1.5 1.5 0 0 0 6.5 19.1H17.5A1.5 1.5 0 0 0 19 17.6V14.2A1 1 0 0 1 21 14.2V17.6A3.4 3.4 0 0 1 17.6 21H6.4A3.4 3.4 0 0 1 3 17.6Z"/>`,
      duotone: `<g data-part="arrow" ${DK}><line x1="12" y1="15.25" x2="12" y2="3.25"/><path d="M7.5 7.75L11.58 3.67A0.6 0.6 0 0 1 12.42 3.67L16.5 7.75"/></g><path data-part="tray" d="M3.25 14.25H20.75V17.75A3 3 0 0 1 17.75 20.75H6.25A3 3 0 0 1 3.25 17.75Z" ${D}/>`,
      glass: glassCompose(
        `<rect data-part="tray" data-pivot="12 17.5" x="2.8" y="13.6" width="18.4" height="7.6" rx="2.8" ${GB}/>`,
        `<path data-part="arrow" data-pivot="12 10" d="M10.8 3.1A1.6 1.6 0 0 1 13.2 3.1L17.2 7.6A1.6 1.6 0 0 1 16 10.2H14.6V15.3A1.6 1.6 0 0 1 13 16.9H11A1.6 1.6 0 0 1 9.4 15.3V10.2H8A1.6 1.6 0 0 1 6.8 7.6Z"/>`
      ),
      stencil: `<path data-part="arrow" fill="currentColor" d="M12 3.4L16.2 8.6H13.1V15.5H10.9V8.6H7.8Z"/><g data-part="tray" fill="currentColor"><path d="M3.2 14.5H5.2V17.8A1.4 1.4 0 0 0 6.6 19.2H11.1V21.1H6.2A3 3 0 0 1 3.2 18.1Z"/><path d="M18.8 14.5H20.8V18.1A3 3 0 0 1 17.8 21.1H12.9V19.2H17.4A1.4 1.4 0 0 0 18.8 17.8Z"/></g>`,
      hardware: `<rect data-part="tray" x="3.25" y="14.25" width="17.5" height="6.5" rx="2.6" ${HD}/><path data-part="arrow" ${HA} d="M12 3.2A1.1 1.1 0 0 1 12.8 3.6L16.7 7.8A1.2 1.2 0 0 1 15.8 9.8H13.4V15.6A1.4 1.4 0 0 1 10.6 15.6V9.8H8.2A1.2 1.2 0 0 1 7.3 7.8L11.2 3.6A1.1 1.1 0 0 1 12 3.2Z"/>`,
      relief: `<g data-part="arrow"><path transform="translate(1.5,1.5)" d="M12 3.6L15.8 9.2H13.4V15.6A1.4 1.4 0 0 1 10.6 15.6V9.2H8.2Z" ${RS}/><path d="M12 3.6L15.8 9.2H13.4V15.6A1.4 1.4 0 0 1 10.6 15.6V9.2H8.2Z" ${RF}/></g><g data-part="tray"><path transform="translate(1.5,1.5)" d="M3.25 14.25V17.75A3 3 0 0 0 6.25 20.75H17.75A3 3 0 0 0 20.75 17.75V14.25" ${RS_LINE}/><path d="M3.25 14.25V17.75A3 3 0 0 0 6.25 20.75H17.75A3 3 0 0 0 20.75 17.75V14.25" ${RF_LINE}/></g>`,
    },
  },
];
