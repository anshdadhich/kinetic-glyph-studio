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

export const COMMS2_ICONS: IconDef[] = [
  // 131. INBOX
  {
    name: "inbox",
    label: "Inbox",
    category: "Comms & Files",
    motionSummary: "Message arrow drops swiftly into open desk tray as bin settles",
    soundSummary: "Paper card drop into metal tray + crisp arrival ping",
    svgs: {
      outline: `<path data-part="tray" d="M4.5 13.5H8.5L9.8 15.8H14.2L15.5 13.5H19.5V18A2 2 0 0 1 17.5 20H6.5A2 2 0 0 1 4.5 18Z" ${K}/><path data-part="tray" d="M4.5 13.5L6.2 7.2A1.8 1.8 0 0 1 8 5.8H16A1.8 1.8 0 0 1 17.8 7.2L19.5 13.5" ${K_THIN}/><g data-part="card" ${K}><line x1="12" y1="3.6" x2="12" y2="11.2"/><polyline points="9.4 8.8 12 11.4 14.6 8.8"/></g>`,
      solid: `<path data-part="tray" fill="currentColor" d="M4 13.4H8.6L10 15.8H14L15.4 13.4H20V18A2.2 2.2 0 0 1 17.8 20.2H6.2A2.2 2.2 0 0 1 4 18Z"/><path data-part="tray" d="M4.6 13.4L6.4 7.4A1.5 1.5 0 0 1 7.8 6.2H16.2A1.5 1.5 0 0 1 17.6 7.4L19.4 13.4" ${K}/><path data-part="card" fill="currentColor" d="M12 12L8.4 8.4A0.7 0.7 0 0 1 8.9 7.2H10.9V4.2A1.1 1.1 0 0 1 13.1 4.2V7.2H15.1A0.7 0.7 0 0 1 15.6 8.4Z"/>`,
      duotone: `<path data-part="tray" d="M4.5 13.5H8.5L9.8 15.8H14.2L15.5 13.5H19.5V18A2 2 0 0 1 17.5 20H6.5A2 2 0 0 1 4.5 18Z" ${D}/><path data-part="tray" d="M4.5 13.5L6.2 7.2A1.8 1.8 0 0 1 8 5.8H16A1.8 1.8 0 0 1 17.8 7.2L19.5 13.5" ${DK_THIN}/><g data-part="card" ${DK}><line x1="12" y1="3.6" x2="12" y2="11.2"/><polyline points="9.4 8.8 12 11.4 14.6 8.8"/></g>`,
      glass: glassCompose(
        `<path data-part="card" d="M12 12.2L8.6 8.8H10.8V4.2A1.2 1.2 0 0 1 13.2 4.2V8.8H15.4Z" ${GB}/>`,
        `<path data-part="tray" d="M4 13.4H8.6L10 15.8H14L15.4 13.4H20V18A2.2 2.2 0 0 1 17.8 20.2H6.2A2.2 2.2 0 0 1 4 18Z"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="tray"><path d="M4.2 13.4H8.4L9.8 15.8H11.3V20H6.2A2 2 0 0 1 4.2 18Z"/><path d="M12.7 15.8H14.2L15.6 13.4H19.8V18A2 2 0 0 1 17.8 20H12.7Z"/><path d="M4.6 12L6.2 6.8H9.2V8.2H7.4L6.2 12Z"/><path d="M19.4 12L17.8 6.8H14.8V8.2H16.6L17.8 12Z"/></g><path data-part="card" d="M12 12.2L8.8 8.8H11V4.2A1 1 0 0 1 13 4.2V8.8H15.2Z"/></g>`,
      hardware: `<path data-part="tray" d="M4 13.4H8.6L10 15.8H14L15.4 13.4H20V18A2.2 2.2 0 0 1 17.8 20.2H6.2A2.2 2.2 0 0 1 4 18Z" ${HL}/><path data-part="card" d="M12 12L8.4 8.4H10.9V4.2A1.1 1.1 0 0 1 13.1 4.2V8.4H15.6Z" ${HA}/>`,
      relief: `<g data-part="tray"><path transform="translate(1.3,1.3)" d="M4.5 13.5H8.5L9.8 15.8H14.2L15.5 13.5H19.5V18A2 2 0 0 1 17.5 20H6.5A2 2 0 0 1 4.5 18Z" ${RS}/><path d="M4.5 13.5H8.5L9.8 15.8H14.2L15.5 13.5H19.5V18A2 2 0 0 1 17.5 20H6.5A2 2 0 0 1 4.5 18Z" ${RF}/></g><g data-part="card" ${RF_LINE}><line x1="12" y1="3.6" x2="12" y2="11.2"/><polyline points="9.4 8.8 12 11.4 14.6 8.8"/></g>`,
    },
  },
  // 132. ARCHIVE
  {
    name: "archive",
    label: "Archive",
    category: "Comms & Files",
    motionSummary: "Banker box lid pops upward while recessed handle slot settles",
    soundSummary: "Cardboard archive lid pop + snug box seal thud",
    svgs: {
      outline: `<rect data-part="lid" x="3.5" y="4.5" width="17" height="4" rx="1.2" ${K}/><g data-part="box" ${K}><path d="M5 8.5V17.8A1.8 1.8 0 0 0 6.8 19.6H17.2A1.8 1.8 0 0 0 19 17.8V8.5"/><line x1="9.8" y1="12.5" x2="14.2" y2="12.5"/></g>`,
      solid: `<rect data-part="lid" x="3.4" y="4.4" width="17.2" height="4.2" rx="1.3" fill="currentColor"/><path data-part="box" fill="currentColor" fill-rule="evenodd" d="M5 9.8H19V17.8A2 2 0 0 1 17 19.8H7A2 2 0 0 1 5 17.8ZM9.6 12.2A0.8 0.8 0 0 0 9.6 13.8H14.4A0.8 0.8 0 0 0 14.4 12.2Z"/>`,
      duotone: `<rect data-part="lid" x="3.5" y="4.5" width="17" height="4" rx="1.2" ${D}/><g data-part="box"><path d="M5 8.5V17.8A1.8 1.8 0 0 0 6.8 19.6H17.2A1.8 1.8 0 0 0 19 17.8V8.5Z" ${D}/><line x1="9.8" y1="12.5" x2="14.2" y2="12.5" ${DK}/></g>`,
      glass: glassCompose(
        `<rect data-part="lid" x="3.4" y="4.4" width="17.2" height="4.2" rx="1.3" ${GB}/>`,
        `<path data-part="box" d="M5 9H19V17.8A2 2 0 0 1 17 19.8H7A2 2 0 0 1 5 17.8Z"/>`,
        `<g data-part="box"><path d="M5 9H19V17.8A2 2 0 0 1 17 19.8H7A2 2 0 0 1 5 17.8Z" ${GF}/><rect x="9.6" y="12.2" width="4.8" height="1.6" rx="0.8" ${GB}/></g>`
      ),
      stencil: `<rect data-part="lid" x="3.5" y="4.4" width="17" height="4" rx="1.2" fill="currentColor"/><g data-part="box" fill="currentColor"><path d="M5 9.6H8.8V19.6H6.8A1.8 1.8 0 0 1 5 17.8Z"/><path d="M15.2 9.6H19V17.8A1.8 1.8 0 0 1 17.2 19.6H15.2Z"/><rect x="10" y="9.6" width="4" height="2" rx="0.6"/><rect x="10" y="14.4" width="4" height="5.2" rx="0.6"/></g>`,
      hardware: `<g data-part="box"><path d="M5 9H19V17.8A2 2 0 0 1 17 19.8H7A2 2 0 0 1 5 17.8Z" ${HL}/><rect x="9.6" y="12.2" width="4.8" height="1.6" rx="0.8" ${HA}/></g><rect data-part="lid" x="3.4" y="4.4" width="17.2" height="4.2" rx="1.2" ${HD}/>`,
      relief: `<g data-part="box"><path transform="translate(1.3,1.3)" d="M5 8.5V17.8A1.8 1.8 0 0 0 6.8 19.6H17.2A1.8 1.8 0 0 0 19 17.8V8.5Z" ${RS}/><path d="M5 8.5V17.8A1.8 1.8 0 0 0 6.8 19.6H17.2A1.8 1.8 0 0 0 19 17.8V8.5Z" ${RF}/><line x1="9.8" y1="12.5" x2="14.2" y2="12.5" ${RF_LINE}/></g><g data-part="lid"><rect transform="translate(1.3,1.3)" x="3.5" y="4.5" width="17" height="4" rx="1.2" ${RS}/><rect x="3.5" y="4.5" width="17" height="4" rx="1.2" ${RF}/></g>`,
    },
  },
  // 133. REPLY
  {
    name: "reply",
    label: "Reply",
    category: "Comms & Files",
    motionSummary: "Curved reply arrow darts leftward and springs back from baseline",
    soundSummary: "Fast reverse swoosh + crisp reply snap",
    svgs: {
      outline: `<g data-part="arrow" data-pivot="16 15" ${K}><polyline points="9 13.5 4.2 9.2 9 4.9"/><path d="M19.8 18.5V13.8A4.6 4.6 0 0 0 15.2 9.2H4.2"/></g>`,
      solid: `<path data-part="arrow" data-pivot="16 15" fill="currentColor" d="M4.2 9.2L9.4 4.4A0.8 0.8 0 0 1 10.8 5V7.8H15.2A5.6 5.6 0 0 1 20.8 13.4V18.4A1.2 1.2 0 0 1 18.4 18.4V13.4A3.2 3.2 0 0 0 15.2 10.2H10.8V13.4A0.8 0.8 0 0 1 9.4 14Z"/>`,
      duotone: `<g data-part="arrow" data-pivot="16 15"><polygon points="4.2 9.2 9.5 4.6 9.5 13.8" ${D}/><path d="M9.5 9.2H15.2A4.6 4.6 0 0 1 19.8 13.8V18.5" ${DK}/></g>`,
      glass: glassCompose(
        `<path data-part="arrow" data-pivot="16 15" d="M10.8 10.2H15.2A3.2 3.2 0 0 1 18.4 13.4V18.4A1.2 1.2 0 0 0 20.8 18.4V13.4A5.6 5.6 0 0 0 15.2 7.8H10.8Z" ${GB}/>`,
        `<polygon data-part="arrow" data-pivot="16 15" points="4 9.2 10.5 4 10.5 14.4"/>`
      ),
      stencil: `<g data-part="arrow" data-pivot="16 15" fill="currentColor"><polygon points="4.2 9.2 9.6 4.4 9.6 14"/><path d="M11 8H15.2A5.4 5.4 0 0 1 20.6 13.4V18.4H18.2V13.4A3 3 0 0 0 15.2 10.4H11Z"/></g>`,
      hardware: `<path data-part="arrow" data-pivot="16 15" d="M4.2 9.2L9.5 4.5V7.8H15.2A5.5 5.5 0 0 1 20.7 13.3V18.4A1.2 1.2 0 0 1 18.3 18.4V13.3A3.1 3.1 0 0 0 15.2 10.2H9.5V13.9Z" ${HL}/><circle cx="19.5" cy="18.2" r="1" ${HA}/>`,
      relief: `<g data-part="arrow" data-pivot="16 15"><path transform="translate(1.3,1.3)" d="M4.2 9.2L9.4 4.5V7.8H15.2A5.5 5.5 0 0 1 20.7 13.3V18.4A1.1 1.1 0 0 1 18.5 18.4V13.3A3.3 3.3 0 0 0 15.2 10H9.4V13.9Z" ${RS}/><path d="M4.2 9.2L9.4 4.5V7.8H15.2A5.5 5.5 0 0 1 20.7 13.3V18.4A1.1 1.1 0 0 1 18.5 18.4V13.3A3.3 3.3 0 0 0 15.2 10H9.4V13.9Z" ${RF}/></g>`,
    },
  },
  // 134. FORWARD
  {
    name: "forward",
    label: "Forward",
    category: "Comms & Files",
    motionSummary: "Double forward chevrons surge rightward in staggered two-stage burst",
    soundSummary: "Dual crisp forward dispatch swooshes",
    svgs: {
      outline: `<polyline data-part="chev-1" points="5.5 6.5 11.2 12 5.5 17.5" ${K}/><polyline data-part="chev-2" points="12.8 6.5 18.5 12 12.8 17.5" ${K}/>`,
      solid: `<g fill="currentColor"><path data-part="chev-1" d="M5.6 5.6A1.2 1.2 0 0 1 7.3 5.6L12.6 11.1A1.2 1.2 0 0 1 12.6 12.9L7.3 18.4A1.2 1.2 0 0 1 5.6 16.7L10 12L5.6 7.3A1.2 1.2 0 0 1 5.6 5.6Z"/><path data-part="chev-2" d="M12.6 5.6A1.2 1.2 0 0 1 14.3 5.6L19.6 11.1A1.2 1.2 0 0 1 19.6 12.9L14.3 18.4A1.2 1.2 0 0 1 12.6 16.7L17 12L12.6 7.3A1.2 1.2 0 0 1 12.6 5.6Z"/></g>`,
      duotone: `<polygon data-part="chev-1" points="5.5 6.5 11.5 12 5.5 17.5" ${D}/><polygon data-part="chev-2" points="12.5 6.5 18.5 12 12.5 17.5" ${D}/>`,
      glass: glassCompose(
        `<path data-part="chev-1" d="M5.6 5.8L11.8 12L5.6 18.2L4.2 16.8L9 12L4.2 7.2Z" ${GB}/>`,
        `<polygon data-part="chev-2" points="12.2 5.8 19.2 12 12.2 18.2 10.6 16.6 15.8 12 10.6 7.4"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="chev-1"><polygon points="5.2 6.6 6.8 5.2 10.5 9 8.9 10.4"/><polygon points="5.2 17.4 6.8 18.8 10.5 15 8.9 13.6"/></g><g data-part="chev-2"><polygon points="12.5 6.6 14.1 5.2 18.8 10 17.2 11.4"/><polygon points="12.5 17.4 14.1 18.8 18.8 14 17.2 12.6"/></g></g>`,
      hardware: `<polygon data-part="chev-1" points="5.2 6.2 11.5 12 5.2 17.8 5.2 14.5 7.8 12 5.2 9.5" ${HM}/><polygon data-part="chev-2" points="12.5 6.2 18.8 12 12.5 17.8 12.5 14.5 15.1 12 12.5 9.5" ${HA}/>`,
      relief: `<g transform="translate(1.3,1.3)"><polyline data-part="chev-1" points="5.5 6.5 11.2 12 5.5 17.5" ${RS_LINE}/><polyline data-part="chev-2" points="12.8 6.5 18.5 12 12.8 17.5" ${RS_LINE}/></g><polyline data-part="chev-1" points="5.5 6.5 11.2 12 5.5 17.5" ${RF_LINE}/><polyline data-part="chev-2" points="12.8 6.5 18.5 12 12.8 17.5" ${RF_LINE}/>`,
    },
  },
  // 135. VOICEMAIL
  {
    name: "voicemail",
    label: "Voicemail",
    category: "Comms & Files",
    motionSummary: "Twin cassette spools spin rapidly as magnetic tape bridge tightens",
    soundSummary: "Answering machine tape spin + classic voicemail beep",
    svgs: {
      outline: `<rect x="2.6" y="5.6" width="18.8" height="12.8" rx="3.6" ${K_THIN}/><g data-part="reel-l" data-pivot="7.8 11.4" ${K}><circle cx="7.8" cy="11.4" r="3.1"/><line x1="7.8" y1="8.3" x2="7.8" y2="14.5"/><line x1="5.1" y1="9.9" x2="10.5" y2="12.9"/><line x1="10.5" y1="9.9" x2="5.1" y2="12.9"/></g><g data-part="reel-r" data-pivot="16.2 11.4" ${K}><circle cx="16.2" cy="11.4" r="3.1"/><line x1="16.2" y1="8.3" x2="16.2" y2="14.5"/><line x1="13.5" y1="9.9" x2="18.9" y2="12.9"/><line x1="18.9" y1="9.9" x2="13.5" y2="12.9"/></g><line data-part="tape" x1="7.8" y1="16" x2="16.2" y2="16" ${K_THIN}/>`,
      solid: `<defs><mask id="__GID__-vm" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><circle cx="7.8" cy="11.4" r="3.2" fill="#000"/><circle cx="16.2" cy="11.4" r="3.2" fill="#000"/></mask></defs><rect x="2.6" y="5.6" width="18.8" height="12.8" rx="3.6" fill="currentColor" mask="url(#__GID__-vm)"/><g data-part="reel-l" data-pivot="7.8 11.4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="7.8" y1="8.9" x2="7.8" y2="13.9"/><line x1="5.6" y1="10.1" x2="10" y2="12.7"/><line x1="10" y1="10.1" x2="5.6" y2="12.7"/></g><g data-part="reel-r" data-pivot="16.2 11.4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="16.2" y1="8.9" x2="16.2" y2="13.9"/><line x1="14" y1="10.1" x2="18.4" y2="12.7"/><line x1="18.4" y1="10.1" x2="14" y2="12.7"/></g><rect data-part="tape" x="7" y="15.4" width="10" height="1.5" rx="0.75" fill="currentColor"/>`,
      duotone: `<rect x="2.6" y="5.6" width="18.8" height="12.8" rx="3.6" ${D}/><g data-part="reel-l" data-pivot="7.8 11.4" ${DK}><circle cx="7.8" cy="11.4" r="3.1"/><line x1="7.8" y1="8.3" x2="7.8" y2="14.5"/><line x1="5.1" y1="9.9" x2="10.5" y2="12.9"/><line x1="10.5" y1="9.9" x2="5.1" y2="12.9"/></g><g data-part="reel-r" data-pivot="16.2 11.4" ${DK}><circle cx="16.2" cy="11.4" r="3.1"/><line x1="16.2" y1="8.3" x2="16.2" y2="14.5"/><line x1="13.5" y1="9.9" x2="18.9" y2="12.9"/><line x1="18.9" y1="9.9" x2="13.5" y2="12.9"/></g><line data-part="tape" x1="7.8" y1="16" x2="16.2" y2="16" ${DK_THIN}/>`,
      glass: glassCompose(
        `<rect x="2.6" y="5.6" width="18.8" height="12.8" rx="3.8" ${GB}/><g ${GBS}><line x1="7.8" y1="16" x2="16.2" y2="16"/></g>`,
        `<rect x="2.6" y="5.6" width="18.8" height="12.8" rx="3.8"/>`,
        `<rect x="2.6" y="5.6" width="18.8" height="12.8" rx="3.8" ${GF}/><g data-part="reel-l" data-pivot="7.8 11.4" fill="none" stroke="url(#g-back)" stroke-width="1.9" stroke-linecap="round"><circle cx="7.8" cy="11.4" r="3.1"/><line x1="7.8" y1="8.9" x2="7.8" y2="13.9"/><line x1="5.6" y1="10.1" x2="10" y2="12.7"/><line x1="10" y1="10.1" x2="5.6" y2="12.7"/></g><g data-part="reel-r" data-pivot="16.2 11.4" fill="none" stroke="url(#g-back)" stroke-width="1.9" stroke-linecap="round"><circle cx="16.2" cy="11.4" r="3.1"/><line x1="16.2" y1="8.9" x2="16.2" y2="13.9"/><line x1="14" y1="10.1" x2="18.4" y2="12.7"/><line x1="18.4" y1="10.1" x2="14" y2="12.7"/></g><rect data-part="tape" x="7" y="15.4" width="10" height="1.5" rx="0.75" fill="url(#g-back)"/>`
      ),
      stencil: `<defs><mask id="__GID__-vm" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><circle cx="7.8" cy="11.4" r="3.3" fill="#000"/><circle cx="16.2" cy="11.4" r="3.3" fill="#000"/></mask></defs><rect x="2.6" y="5.6" width="18.8" height="12.8" rx="1.6" fill="currentColor" mask="url(#__GID__-vm)"/><g data-part="reel-l" data-pivot="7.8 11.4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><line x1="7.8" y1="8.8" x2="7.8" y2="14"/><line x1="5.5" y1="10" x2="10.1" y2="12.8"/><line x1="10.1" y1="10" x2="5.5" y2="12.8"/></g><g data-part="reel-r" data-pivot="16.2 11.4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><line x1="16.2" y1="8.8" x2="16.2" y2="14"/><line x1="13.9" y1="10" x2="18.5" y2="12.8"/><line x1="18.5" y1="10" x2="13.9" y2="12.8"/></g><rect data-part="tape" x="7" y="15.3" width="10" height="1.7" rx="0.5" fill="currentColor"/>`,
      hardware: `<rect x="2.6" y="5.6" width="18.8" height="12.8" rx="3.2" ${HD}/><g data-part="reel-l" data-pivot="7.8 11.4"><circle cx="7.8" cy="11.4" r="3.2" ${HL}/><g fill="none" stroke="#3f3f46" stroke-width="1.3" stroke-linecap="round"><line x1="7.8" y1="8.9" x2="7.8" y2="13.9"/><line x1="5.6" y1="10.1" x2="10" y2="12.7"/><line x1="10" y1="10.1" x2="5.6" y2="12.7"/></g><circle cx="7.8" cy="11.4" r="0.95" ${HA}/></g><g data-part="reel-r" data-pivot="16.2 11.4"><circle cx="16.2" cy="11.4" r="3.2" ${HL}/><g fill="none" stroke="#3f3f46" stroke-width="1.3" stroke-linecap="round"><line x1="16.2" y1="8.9" x2="16.2" y2="13.9"/><line x1="14" y1="10.1" x2="18.4" y2="12.7"/><line x1="18.4" y1="10.1" x2="14" y2="12.7"/></g><circle cx="16.2" cy="11.4" r="0.95" ${HA}/></g><rect data-part="tape" x="7" y="15.4" width="10" height="1.4" rx="0.4" fill="#ff6b35"/>`,
      relief: `<rect x="2.6" y="5.6" width="18.8" height="12.8" rx="3.6" transform="translate(1.3,1.3)" ${RS}/><rect x="2.6" y="5.6" width="18.8" height="12.8" rx="3.6" ${RF}/><g data-part="reel-l" data-pivot="7.8 11.4"><circle cx="7.8" cy="11.4" r="3.1" transform="translate(1.3,1.3)" ${RS}/><circle cx="7.8" cy="11.4" r="3.1" ${RF}/><g ${RF_LINE}><line x1="7.8" y1="8.9" x2="7.8" y2="13.9"/><line x1="5.6" y1="10.1" x2="10" y2="12.7"/><line x1="10" y1="10.1" x2="5.6" y2="12.7"/></g></g><g data-part="reel-r" data-pivot="16.2 11.4"><circle cx="16.2" cy="11.4" r="3.1" transform="translate(1.3,1.3)" ${RS}/><circle cx="16.2" cy="11.4" r="3.1" ${RF}/><g ${RF_LINE}><line x1="16.2" y1="8.9" x2="16.2" y2="13.9"/><line x1="14" y1="10.1" x2="18.4" y2="12.7"/><line x1="18.4" y1="10.1" x2="14" y2="12.7"/></g></g><line data-part="tape" x1="7.8" y1="16" x2="16.2" y2="16" ${RF_LINE}/>`,
    },
  },
  // 136. BROADCAST
  {
    name: "broadcast",
    label: "Broadcast",
    category: "Comms & Files",
    motionSummary: "Radio beacon pulses outward transmitting staggered twin signal waves",
    soundSummary: "Shortwave transmitter chirp + pulsing radio ping",
    svgs: {
      outline: `<g data-part="tower" ${K}><circle cx="12" cy="11" r="1.6" fill="currentColor"/><path d="M9 19.5L12 12.6L15 19.5"/></g><g data-part="arc-1" data-pivot="12 11" ${K_THIN}><path d="M8.5 14.2A4.8 4.8 0 0 1 8.5 7.8"/><path d="M15.5 7.8A4.8 4.8 0 0 1 15.5 14.2"/></g><g data-part="arc-2" data-pivot="12 11" ${K}><path d="M5.8 16.8A8.4 8.4 0 0 1 5.8 5.2"/><path d="M18.2 5.2A8.4 8.4 0 0 1 18.2 16.8"/></g>`,
      solid: `<g data-part="tower" fill="currentColor"><circle cx="12" cy="11" r="2"/><path d="M8.4 19.6L11.2 12.6H12.8L15.6 19.6H13.5L12 15.5L10.5 19.6Z"/></g><g data-part="arc-1" data-pivot="12 11" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M8.5 14.2A4.8 4.8 0 0 1 8.5 7.8"/><path d="M15.5 7.8A4.8 4.8 0 0 1 15.5 14.2"/></g><g data-part="arc-2" data-pivot="12 11" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M5.8 16.8A8.4 8.4 0 0 1 5.8 5.2"/><path d="M18.2 5.2A8.4 8.4 0 0 1 18.2 16.8"/></g>`,
      duotone: `<g data-part="tower"><polygon points="8.8 19.5 12 11.8 15.2 19.5" ${D}/><circle cx="12" cy="11" r="1.8" ${D}/></g><g data-part="arc-1" data-pivot="12 11" ${DK_THIN}><path d="M8.5 14.2A4.8 4.8 0 0 1 8.5 7.8"/><path d="M15.5 7.8A4.8 4.8 0 0 1 15.5 14.2"/></g><g data-part="arc-2" data-pivot="12 11" ${DK}><path d="M5.8 16.8A8.4 8.4 0 0 1 5.8 5.2"/><path d="M18.2 5.2A8.4 8.4 0 0 1 18.2 16.8"/></g>`,
      glass: glassCompose(
        `<g data-part="arc-1" data-pivot="12 11" ${GBS}><path d="M8.5 14.2A4.8 4.8 0 0 1 8.5 7.8"/><path d="M15.5 7.8A4.8 4.8 0 0 1 15.5 14.2"/></g><g data-part="arc-2" data-pivot="12 11" ${GBS}><path d="M5.8 16.8A8.4 8.4 0 0 1 5.8 5.2"/><path d="M18.2 5.2A8.4 8.4 0 0 1 18.2 16.8"/></g>`,
        `<g data-part="tower"><circle cx="12" cy="11" r="2.2"/><path d="M8.6 19.5L12 12.2L15.4 19.5Z"/></g>`
      ),
      stencil: `<g fill="currentColor"><g data-part="tower"><circle cx="12" cy="11" r="1.9"/><path d="M8.5 19.6L10.8 13.6H13.2L15.5 19.6H13.4L12 15.6L10.6 19.6Z"/></g><g data-part="arc-1" data-pivot="12 11" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M8.5 14.2A4.8 4.8 0 0 1 8.5 7.8"/><path d="M15.5 7.8A4.8 4.8 0 0 1 15.5 14.2"/></g><g data-part="arc-2" data-pivot="12 11" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M5.8 16.8A8.4 8.4 0 0 1 5.8 5.2"/><path d="M18.2 5.2A8.4 8.4 0 0 1 18.2 16.8"/></g></g>`,
      hardware: `<g data-part="tower"><polygon points="8.6 19.6 12 11.8 15.4 19.6" ${HL}/><circle cx="12" cy="11" r="1.8" ${HA}/></g><g data-part="arc-1" data-pivot="12 11" fill="none" stroke="#ff6b35" stroke-width="1.6" stroke-linecap="round"><path d="M8.5 14.2A4.8 4.8 0 0 1 8.5 7.8"/><path d="M15.5 7.8A4.8 4.8 0 0 1 15.5 14.2"/></g><g data-part="arc-2" data-pivot="12 11" fill="none" stroke="#52525b" stroke-width="1.6" stroke-linecap="round"><path d="M5.8 16.8A8.4 8.4 0 0 1 5.8 5.2"/><path d="M18.2 5.2A8.4 8.4 0 0 1 18.2 16.8"/></g>`,
      relief: `<g data-part="tower"><polygon transform="translate(1.3,1.3)" points="8.8 19.5 12 11.8 15.2 19.5" ${RS}/><polygon points="8.8 19.5 12 11.8 15.2 19.5" ${RF}/><circle cx="12" cy="11" r="1.7" ${RF}/></g><g data-part="arc-1" data-pivot="12 11" ${RF_LINE}><path d="M8.5 14.2A4.8 4.8 0 0 1 8.5 7.8"/><path d="M15.5 7.8A4.8 4.8 0 0 1 15.5 14.2"/></g><g data-part="arc-2" data-pivot="12 11" ${RF_LINE}><path d="M5.8 16.8A8.4 8.4 0 0 1 5.8 5.2"/><path d="M18.2 5.2A8.4 8.4 0 0 1 18.2 16.8"/></g>`,
    },
  },
  // 137. STAMP
  {
    name: "stamp",
    label: "Rubber Stamp",
    category: "Comms & Files",
    motionSummary: "Wooden stamp handle plunges sharply down onto inked platen pad",
    soundSummary: "Heavy rubber stamp thump onto paper desk",
    svgs: {
      outline: `<path data-part="handle" data-pivot="12 14" d="M5.5 14.5H18.5A1.5 1.5 0 0 1 20 16V17.4H4V16A1.5 1.5 0 0 1 5.5 14.5ZM10.2 14.5L9.4 8.2A2.6 2.6 0 1 1 14.6 8.2L13.8 14.5" ${K}/><line data-part="pad" x1="3.5" y1="20" x2="20.5" y2="20" ${K}/>`,
      solid: `<path data-part="handle" data-pivot="12 14" fill="currentColor" d="M12 3.8A2.8 2.8 0 0 0 9.4 7.7L10.3 13.6H5.6A1.8 1.8 0 0 0 3.8 15.4V17.6H20.2V15.4A1.8 1.8 0 0 0 18.4 13.6H13.7L14.6 7.7A2.8 2.8 0 0 0 12 3.8Z"/><rect data-part="pad" x="3.5" y="19" width="17" height="1.8" rx="0.9" fill="currentColor"/>`,
      duotone: `<path data-part="handle" data-pivot="12 14" d="M5.5 14.5H18.5A1.5 1.5 0 0 1 20 16V17.4H4V16A1.5 1.5 0 0 1 5.5 14.5ZM10.2 14.5L9.4 8.2A2.6 2.6 0 1 1 14.6 8.2L13.8 14.5" ${D}/><line data-part="pad" x1="3.5" y1="20" x2="20.5" y2="20" ${DK}/>`,
      glass: glassCompose(
        `<rect data-part="pad" x="3.5" y="18.8" width="17" height="2" rx="1" ${GB}/>`,
        `<path data-part="handle" data-pivot="12 14" d="M12 3.8A2.8 2.8 0 0 0 9.4 7.7L10.3 13.6H5.6A1.8 1.8 0 0 0 3.8 15.4V17.6H20.2V15.4A1.8 1.8 0 0 0 18.4 13.6H13.7L14.6 7.7A2.8 2.8 0 0 0 12 3.8Z"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="handle" data-pivot="12 14"><path d="M12 4A2.6 2.6 0 0 0 9.5 7.5L10.2 12.6H13.8L14.5 7.5A2.6 2.6 0 0 0 12 4Z"/><rect x="4" y="14" width="16" height="3.4" rx="1.2"/></g><rect data-part="pad" x="3.5" y="18.8" width="17" height="1.8" rx="0.9"/></g>`,
      hardware: `<rect data-part="pad" x="3.5" y="18.8" width="17" height="2" rx="0.9" ${HA}/><g data-part="handle" data-pivot="12 14"><path d="M12 3.8A2.8 2.8 0 0 0 9.4 7.7L10.3 13.6H13.7L14.6 7.7A2.8 2.8 0 0 0 12 3.8Z" ${HD}/><rect x="3.8" y="13.6" width="16.4" height="4" rx="1.4" ${HL}/></g>`,
      relief: `<g data-part="handle" data-pivot="12 14"><path transform="translate(1.3,1.3)" d="M12 4A2.7 2.7 0 0 0 9.5 7.6L10.3 13.8H5.6A1.7 1.7 0 0 0 3.9 15.5V17.5H20.1V15.5A1.7 1.7 0 0 0 18.4 13.8H13.7L14.5 7.6A2.7 2.7 0 0 0 12 4Z" ${RS}/><path d="M12 4A2.7 2.7 0 0 0 9.5 7.6L10.3 13.8H5.6A1.7 1.7 0 0 0 3.9 15.5V17.5H20.1V15.5A1.7 1.7 0 0 0 18.4 13.8H13.7L14.5 7.6A2.7 2.7 0 0 0 12 4Z" ${RF}/></g><line data-part="pad" x1="3.5" y1="20" x2="20.5" y2="20" ${RF_LINE}/>`,
    },
  },
  // 138. NEWSPAPER
  {
    name: "newspaper",
    label: "Newspaper",
    category: "Comms & Files",
    motionSummary: "Folded broadsheet snaps open as editorial headline lines pulse",
    soundSummary: "Crisp folded newsprint shake & paper snap",
    svgs: {
      outline: `<path data-part="page" d="M4 5.5A1.5 1.5 0 0 1 5.5 4H15.5A1.5 1.5 0 0 1 17 5.5V18A2 2 0 0 0 19 20A2 2 0 0 0 21 18V9.5H17M4 5.5V18A2 2 0 0 0 6 20H19" ${K}/><g data-part="lines" ${K_THIN}><rect x="7" y="7.2" width="6.5" height="3.2" rx="0.5"/><line x1="7" y1="13.2" x2="14" y2="13.2"/><line x1="7" y1="16" x2="12.5" y2="16"/></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><g data-part="lines" fill="#000"><rect x="6.8" y="6.8" width="7.2" height="3.6" rx="0.7"/><rect x="6.8" y="12.4" width="7.4" height="1.5" rx="0.75"/><rect x="6.8" y="15.4" width="5.8" height="1.5" rx="0.75"/></g></mask></defs><path data-part="page" fill="currentColor" mask="url(#__GID__-m1)" d="M5.5 4H15.5A1.5 1.5 0 0 1 17 5.5V9.5H20.8V17.8A2.2 2.2 0 0 1 18.6 20H5.8A2 2 0 0 1 3.8 18V5.5A1.5 1.5 0 0 1 5.5 4Z"/>`,
      duotone: `<path data-part="page" d="M4 5.5A1.5 1.5 0 0 1 5.5 4H15.5A1.5 1.5 0 0 1 17 5.5V18A2 2 0 0 0 19 20H6A2 2 0 0 1 4 18Z" ${D}/><path data-part="page" d="M17 9.5H21V18A2 2 0 0 1 19 20" ${DK}/><g data-part="lines" ${DK_THIN}><rect x="7" y="7.2" width="6.5" height="3.2" rx="0.5"/><line x1="7" y1="13.2" x2="14" y2="13.2"/><line x1="7" y1="16" x2="12.5" y2="16"/></g>`,
      glass: glassCompose(
        `<path data-part="page" d="M16.5 9.2H20.6V18A2 2 0 0 1 18.6 20H16.5Z" ${GB}/>`,
        `<rect data-part="page" x="3.8" y="4" width="13.4" height="16" rx="2"/>`,
        `<g data-part="page" ${GF}><rect x="3.8" y="4" width="13.4" height="16" rx="2"/></g><g data-part="lines" ${GB}><rect x="6.8" y="7" width="7.2" height="3.4" rx="0.7"/><rect x="6.8" y="12.4" width="7.4" height="1.4" rx="0.7"/><rect x="6.8" y="15.2" width="5.8" height="1.4" rx="0.7"/></g>`
      ),
      stencil: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><g data-part="lines" fill="#000"><rect x="6.8" y="7" width="7.2" height="3.4" rx="0.6"/><rect x="6.8" y="12.6" width="7.2" height="1.5" rx="0.75"/><rect x="6.8" y="15.6" width="5.5" height="1.5" rx="0.75"/></g></mask></defs><g data-part="page" fill="currentColor"><rect x="3.8" y="4" width="13" height="16" rx="1.8" mask="url(#__GID__-m1)"/><path d="M18.2 9.5H20.6V17.8A2.2 2.2 0 0 1 18.2 20Z"/></g>`,
      hardware: `<g data-part="page"><path d="M16.5 9.2H20.6V18A2 2 0 0 1 18.6 20H16.5Z" ${HD}/><rect x="3.8" y="4" width="13.2" height="16" rx="1.8" ${HL}/></g><g data-part="lines"><rect x="6.8" y="7" width="7" height="3.2" rx="0.6" ${HA}/><rect x="6.8" y="12.4" width="7.2" height="1.4" rx="0.7" ${HD}/><rect x="6.8" y="15.4" width="5.6" height="1.4" rx="0.7" ${HD}/></g>`,
      relief: `<g data-part="page"><path transform="translate(1.3,1.3)" d="M4 5.5A1.5 1.5 0 0 1 5.5 4H15.5A1.5 1.5 0 0 1 17 5.5V9.5H20.8V18A2 2 0 0 1 18.8 20H6A2 2 0 0 1 4 18Z" ${RS}/><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H15.5A1.5 1.5 0 0 1 17 5.5V9.5H20.8V18A2 2 0 0 1 18.8 20H6A2 2 0 0 1 4 18Z" ${RF}/></g><g data-part="lines" ${RF_LINE}><rect x="7" y="7.2" width="6.5" height="3.2" rx="0.5"/><line x1="7" y1="13.2" x2="14" y2="13.2"/><line x1="7" y1="16" x2="12.5" y2="16"/></g>`,
    },
  },
  // 139. NOTEBOOK
  {
    name: "notebook",
    label: "Notebook",
    category: "Comms & Files",
    motionSummary: "Wire spiral spine flexes as hardcover notebook flips open",
    soundSummary: "Spiral wire coil rattle + crisp cardstock page flip",
    svgs: {
      outline: `<rect data-part="page" x="7.2" y="5" width="12.2" height="14.5" rx="1.5" ${K_THIN}/><g data-part="lines" ${K_THIN}><line x1="9.8" y1="9" x2="17" y2="9"/><line x1="9.8" y1="12" x2="17" y2="12"/><line x1="9.8" y1="15" x2="14.8" y2="15"/></g><rect data-part="cover" data-pivot="6 12" x="6" y="4" width="13.5" height="16" rx="1.8" ${K}/><g data-part="spiral" ${K}><line x1="4" y1="7.5" x2="7.5" y2="7.5"/><line x1="4" y1="12" x2="7.5" y2="12"/><line x1="4" y1="16.5" x2="7.5" y2="16.5"/></g>`,
      solid: `<rect data-part="page" x="7.2" y="5" width="12.2" height="14.5" rx="1.5" fill="currentColor" opacity="0.24"/><g data-part="lines" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" opacity="0.85"><line x1="9.8" y1="9" x2="17" y2="9"/><line x1="9.8" y1="12" x2="17" y2="12"/><line x1="9.8" y1="15" x2="14.8" y2="15"/></g><rect data-part="cover" data-pivot="6 12" x="6.4" y="4" width="13.2" height="16" rx="2" fill="currentColor"/><g data-part="spiral" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="3.8" y1="7.5" x2="7.6" y2="7.5"/><line x1="3.8" y1="12" x2="7.6" y2="12"/><line x1="3.8" y1="16.5" x2="7.6" y2="16.5"/></g>`,
      duotone: `<g data-part="page"><rect x="7.2" y="5" width="12.2" height="14.5" rx="1.5" ${D}/></g><g data-part="lines" ${DK_THIN}><line x1="9.8" y1="9" x2="17" y2="9"/><line x1="9.8" y1="12" x2="17" y2="12"/><line x1="9.8" y1="15" x2="14.8" y2="15"/></g><rect data-part="cover" data-pivot="6 12" x="6" y="4" width="13.5" height="16" rx="1.8" ${D}/><g data-part="spiral" ${DK}><line x1="4" y1="7.5" x2="7.5" y2="7.5"/><line x1="4" y1="12" x2="7.5" y2="12"/><line x1="4" y1="16.5" x2="7.5" y2="16.5"/></g>`,
      glass: glassCompose(
        `<g data-part="page"><rect x="7.2" y="5" width="12.2" height="14.5" rx="1.6" ${GB}/></g><g data-part="lines" ${GBS}><line x1="9.8" y1="9" x2="17" y2="9"/><line x1="9.8" y1="12" x2="17" y2="12"/><line x1="9.8" y1="15" x2="14.8" y2="15"/></g><g data-part="spiral" ${GBS}><line x1="3.8" y1="7.5" x2="7.6" y2="7.5"/><line x1="3.8" y1="12" x2="7.6" y2="12"/><line x1="3.8" y1="16.5" x2="7.6" y2="16.5"/></g>`,
        `<rect data-part="cover" data-pivot="6 12" x="6.2" y="4" width="13.4" height="16" rx="2"/>`,
        `<rect data-part="cover" data-pivot="6 12" x="6.2" y="4" width="13.4" height="16" rx="2" ${GF}/><rect x="8.4" y="4.6" width="2.1" height="14.8" rx="1" ${GH} opacity="0.45"/><g data-part="spiral" fill="none" stroke="url(#g-back)" stroke-width="2.2" stroke-linecap="round"><line x1="3.8" y1="7.5" x2="7.6" y2="7.5"/><line x1="3.8" y1="12" x2="7.6" y2="12"/><line x1="3.8" y1="16.5" x2="7.6" y2="16.5"/></g>`
      ),
      stencil: `<g data-part="lines" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="10" y1="9" x2="17" y2="9"/><line x1="10" y1="12" x2="17" y2="12"/><line x1="10" y1="15" x2="14.6" y2="15"/></g><g fill="currentColor"><g data-part="cover" data-pivot="6.6 12"><rect x="6.6" y="4" width="12.8" height="4.4" rx="1.4"/><rect x="6.6" y="9.8" width="12.8" height="4.4" rx="1"/><rect x="6.6" y="15.6" width="12.8" height="4.4" rx="1.4"/></g><g data-part="spiral"><rect x="3.6" y="6.8" width="4.2" height="1.6" rx="0.8"/><rect x="3.6" y="11.2" width="4.2" height="1.6" rx="0.8"/><rect x="3.6" y="15.6" width="4.2" height="1.6" rx="0.8"/></g></g>`,
      hardware: `<rect data-part="page" x="7.2" y="5" width="12.2" height="14.5" rx="1.5" ${HD}/><g data-part="lines" fill="none" stroke="#ff6b35" stroke-width="1.2" stroke-linecap="round" opacity="0.9"><line x1="9.8" y1="9" x2="17" y2="9"/><line x1="9.8" y1="12" x2="17" y2="12"/><line x1="9.8" y1="15" x2="14.8" y2="15"/></g><rect data-part="cover" data-pivot="6 12" x="6.2" y="4" width="13.4" height="16" rx="2" ${HL}/><g data-part="spiral"><rect x="3.6" y="6.7" width="4.2" height="1.7" rx="0.8" ${HA}/><rect x="3.6" y="11.2" width="4.2" height="1.7" rx="0.8" ${HA}/><rect x="3.6" y="15.7" width="4.2" height="1.7" rx="0.8" ${HA}/></g>`,
      relief: `<g data-part="page"><rect transform="translate(1.3,1.3)" x="7.2" y="5" width="12.2" height="14.5" rx="1.5" ${RS}/><rect x="7.2" y="5" width="12.2" height="14.5" rx="1.5" ${RF}/><g ${RF_LINE}><line x1="9.8" y1="9" x2="17" y2="9"/><line x1="9.8" y1="12" x2="17" y2="12"/><line x1="9.8" y1="15" x2="14.8" y2="15"/></g></g><g data-part="cover" data-pivot="6 12"><rect transform="translate(1.3,1.3)" x="6" y="4" width="13.5" height="16" rx="1.8" ${RS}/><rect x="6" y="4" width="13.5" height="16" rx="1.8" ${RF}/></g><g data-part="spiral" ${RF_LINE}><line x1="4" y1="7.5" x2="7.5" y2="7.5"/><line x1="4" y1="12" x2="7.5" y2="12"/><line x1="4" y1="16.5" x2="7.5" y2="16.5"/></g>`,
    },
  },
  // 140. SIGNATURE
  {
    name: "signature",
    label: "Signature",
    category: "Comms & Files",
    motionSummary: "Fountain pen nib glides swiftly writing a flowing cursive flourish",
    soundSummary: "Fountain nib ink scratch across paper + sign-off chime",
    svgs: {
      outline: `<path data-part="nib" data-pivot="10 14" d="M16.5 4.2L19.8 7.5L11.5 15.8L7.5 16.5L8.2 12.5Z" ${K}/><path data-part="stroke" d="M4 19.2C6.8 16.2 8.2 20.5 11.2 18.2C13.4 16.5 15.6 19.6 20 19" ${K_THIN}/>`,
      solid: `<path data-part="nib" data-pivot="10 14" fill="currentColor" d="M16 4.1A1.1 1.1 0 0 1 17.6 4.1L19.9 6.4A1.1 1.1 0 0 1 19.9 8L12 15.9L7.3 16.7L8.1 12Z"/><path data-part="stroke" d="M4 19.2C6.8 16.2 8.2 20.5 11.2 18.2C13.4 16.5 15.6 19.6 20 19" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round"/>`,
      duotone: `<polygon data-part="nib" data-pivot="10 14" points="16.5 4.2 19.8 7.5 11.5 15.8 7.5 16.5 8.2 12.5" ${D}/><path data-part="stroke" d="M4 19.2C6.8 16.2 8.2 20.5 11.2 18.2C13.4 16.5 15.6 19.6 20 19" ${DK_THIN}/>`,
      glass: glassCompose(
        `<path data-part="stroke" d="M4 19.2C6.8 16.2 8.2 20.5 11.2 18.2C13.4 16.5 15.6 19.6 20 19" ${GBS}/>`,
        `<path data-part="nib" data-pivot="10 14" d="M16 4.1A1.1 1.1 0 0 1 17.6 4.1L19.9 6.4A1.1 1.1 0 0 1 19.9 8L12 15.9L7.3 16.7L8.1 12Z"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="nib" data-pivot="10 14"><polygon points="16.2 4.1 19.9 7.8 15.4 12.3 11.7 8.6"/><polygon points="10.7 9.6 14.4 13.3 11.8 15.9 7.3 16.7 8.1 12.2"/></g><path data-part="stroke" d="M4 19.2C6.8 16.2 8.2 20.5 11.2 18.2C13.4 16.5 15.6 19.6 20 19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></g>`,
      hardware: `<path data-part="stroke" d="M4 19.2C6.8 16.2 8.2 20.5 11.2 18.2C13.4 16.5 15.6 19.6 20 19" fill="none" stroke="#ff6b35" stroke-width="1.7" stroke-linecap="round"/><g data-part="nib" data-pivot="10 14"><polygon points="16.5 4.2 19.8 7.5 11.5 15.8 7.5 16.5 8.2 12.5" ${HL}/><polygon points="10.2 13.8 11.5 15.8 7.5 16.5 8.2 12.5" ${HD}/></g>`,
      relief: `<g data-part="nib" data-pivot="10 14"><polygon transform="translate(1.3,1.3)" points="16.5 4.2 19.8 7.5 11.5 15.8 7.5 16.5 8.2 12.5" ${RS}/><polygon points="16.5 4.2 19.8 7.5 11.5 15.8 7.5 16.5 8.2 12.5" ${RF}/></g><path data-part="stroke" d="M4 19.2C6.8 16.2 8.2 20.5 11.2 18.2C13.4 16.5 15.6 19.6 20 19" ${RF_LINE}/>`,
    },
  },
];
