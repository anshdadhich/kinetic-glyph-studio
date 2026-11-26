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

// Keyboard keycaps (three chunky keys per row + spacebar)
const KB_ROW_1 = `<rect x="5.2" y="8.4" width="4" height="2.2" rx="0.7"/><rect x="10" y="8.4" width="4" height="2.2" rx="0.7"/><rect x="14.8" y="8.4" width="4" height="2.2" rx="0.7"/>`;
const KB_ROW_2 = `<rect x="5.2" y="11.4" width="4" height="2.2" rx="0.7"/><rect x="10" y="11.4" width="4" height="2.2" rx="0.7"/><rect x="14.8" y="11.4" width="4" height="2.2" rx="0.7"/>`;
const KB_SPACE = `<rect x="7.2" y="14.4" width="9.6" height="1.6" rx="0.6"/>`;

// Bug: capsule carapace + dome head, split by a center seam, three legs per side
const BUG_BODY = "M12 8.4C14.6 8.4 16.6 10.7 16.6 13.9C16.6 17.1 14.6 19.6 12 19.6C9.4 19.6 7.4 17.1 7.4 13.9C7.4 10.7 9.4 8.4 12 8.4Z";
const BUG_DOME = "M9.7 8.6C9.7 6.3 10.6 5.1 12 5.1C13.4 5.1 14.3 6.3 14.3 8.6";
const BUG_HALF_L = "M11.3 8.6C9.2 9.2 7.4 11.2 7.4 13.9C7.4 16.8 9 19.1 11.3 19.5Z";
const BUG_HALF_R = "M12.7 8.6C14.8 9.2 16.6 11.2 16.6 13.9C16.6 16.8 15 19.1 12.7 19.5Z";
const BUG_SPLIT = `<line x1="12" y1="9.8" x2="12" y2="19.4"/>`;
const BUG_ANT = `<path d="M10.6 5.9L9.2 3.7"/><path d="M13.4 5.9L14.8 3.7"/>`;
const BUG_LEG_L = `<path d="M8.5 10.6L5.9 9.1L4.5 10.3"/><path d="M8.2 13.3H4.6"/><path d="M8.5 15.9L5.9 17.3L4.7 16.3"/>`;
const BUG_LEG_R = `<path d="M15.5 10.6L18.1 9.1L19.5 10.3"/><path d="M15.8 13.3H19.4"/><path d="M15.5 15.9L18.1 17.3L19.3 16.3"/>`;

// Fingerprint: four nested arcs opening downward plus a small core arch
const FP_RING_1 = "M5.2 12.4C5.2 8.4 8.2 5.4 12 5.4C15.8 5.4 18.8 8.4 18.8 12.4C18.8 15.2 17.9 17.7 16.2 19.6";
const FP_RING_2 = "M7.8 14.8C7.4 13.8 7.2 12.7 7.2 11.6C7.2 8.9 9.3 6.8 12 6.8C14.7 6.8 16.8 8.9 16.8 11.6C16.8 14.3 16 16.5 14.7 18.2";
const FP_RING_3 = "M9.9 16.8C9.5 15.6 9.2 14.3 9.2 13C9.2 11.4 10.4 10.2 12 10.2C13.6 10.2 14.8 11.4 14.8 13C14.8 14.7 14.3 16.2 13.4 17.6";
const FP_CORE = "M11.6 15.2C11.4 14.6 11.3 14 11.3 13.4C11.3 12.6 11.6 12.2 12 12.2C12.4 12.2 12.7 12.6 12.7 13.4C12.7 14 12.6 14.6 12.4 15.2";

export const TECH2_ICONS: IconDef[] = [
  // 191. KEYBOARD
  {
    name: "keyboard",
    label: "Keyboard",
    category: "Tech & Controls",
    motionSummary: "Mechanical keycaps depress sequentially inside aluminum frame",
    soundSummary: "Triple tactile mechanical keyboard switch clackety-clack",
    svgs: {
      outline: `<rect x="2.4" y="6.4" width="19.2" height="11.2" rx="2.2" ${K}/><g data-part="key-1" ${K_THIN}>${KB_ROW_1}</g><g data-part="key-2" ${K_THIN}>${KB_ROW_2}</g><rect data-part="key-3" x="7.2" y="14.4" width="9.6" height="1.6" rx="0.6" ${K_THIN}/>`,
      solid: `<rect x="2.4" y="6.4" width="19.2" height="11.2" rx="2.2" fill="none" stroke="currentColor" stroke-width="2"/><g data-part="key-1" fill="currentColor">${KB_ROW_1}</g><g data-part="key-2" fill="currentColor">${KB_ROW_2}</g><rect data-part="key-3" x="7.2" y="14.4" width="9.6" height="1.6" rx="0.6" fill="currentColor"/>`,
      duotone: `<rect x="2.4" y="6.4" width="19.2" height="11.2" rx="2.2" ${D}/><g data-part="key-1" fill="currentColor">${KB_ROW_1}</g><g data-part="key-2" fill="currentColor">${KB_ROW_2}</g><rect data-part="key-3" x="7.2" y="14.4" width="9.6" height="1.6" rx="0.6" fill="currentColor"/>`,
      glass: glassCompose(
        `<rect x="2.4" y="6.4" width="19.2" height="11.2" rx="2.2" ${GB}/>`,
        ``,
        `<rect x="2.4" y="6.4" width="19.2" height="11.2" rx="2.2" ${GF}/><g data-part="key-1" ${GB}>${KB_ROW_1}</g><g data-part="key-2" ${GB}>${KB_ROW_2}</g><rect data-part="key-3" x="7.2" y="14.4" width="9.6" height="1.6" rx="0.6" ${GB}/>`
      ),
      stencil: `<g fill="currentColor"><rect x="2.4" y="6.4" width="19.2" height="1.9" rx="0.95"/><rect x="2.4" y="15.9" width="19.2" height="1.7" rx="0.85"/><rect x="2.4" y="8.3" width="1.4" height="7.6"/><rect x="20.2" y="8.3" width="1.4" height="7.6"/><g data-part="key-1">${KB_ROW_1}</g><g data-part="key-2">${KB_ROW_2}</g><rect data-part="key-3" x="7.2" y="14.4" width="9.6" height="1.6" rx="0.6"/></g>`,
      hardware: `<rect x="2.4" y="6.4" width="19.2" height="11.2" rx="2.2" ${HD}/><g data-part="key-1" ${HL}>${KB_ROW_1}</g><g data-part="key-2" ${HL}>${KB_ROW_2}</g><rect data-part="key-3" x="7.2" y="14.4" width="9.6" height="1.6" rx="0.6" ${HL}/>`,
      relief: `<rect transform="translate(1.3,1.3)" x="2.4" y="6.4" width="19.2" height="11.2" rx="2.2" ${RS}/><rect x="2.4" y="6.4" width="19.2" height="11.2" rx="2.2" ${RF}/><g data-part="key-1"><g transform="translate(1.3,1.3)" fill="var(--rel-shadow)">${KB_ROW_1}</g><g ${RF}>${KB_ROW_1}</g></g><g data-part="key-2"><g transform="translate(1.3,1.3)" fill="var(--rel-shadow)">${KB_ROW_2}</g><g ${RF}>${KB_ROW_2}</g></g><g data-part="key-3"><rect transform="translate(1.3,1.3)" x="7.2" y="14.4" width="9.6" height="1.6" rx="0.6" ${RS}/><rect x="7.2" y="14.4" width="9.6" height="1.6" rx="0.6" ${RF}/></g>`,
    },
  },
  // 192. MOUSE
  {
    name: "mouse",
    label: "Mouse",
    category: "Tech & Controls",
    motionSummary: "Left mouse button clicks downward as central scroll wheel ticks",
    soundSummary: "Crisp microswitch mouse click + notched scroll wheel tick",
    svgs: {
      outline: `<rect data-part="body" x="6.5" y="3.5" width="11" height="17" rx="5.5" ${K}/><path data-part="btn-l" d="M6.5 9.5H12V3.5" ${K_THIN}/><line data-part="wheel" x1="12" y1="6.8" x2="12" y2="9.6" ${K}/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><rect data-part="wheel" x="11.1" y="6.6" width="1.8" height="3.4" rx="0.9" fill="#000"/><path data-part="btn-l" d="M6.2 9.8H17.8" stroke="#000" stroke-width="1.2"/></mask></defs><rect data-part="body" x="6.4" y="3.4" width="11.2" height="17.2" rx="5.6" fill="currentColor" mask="url(#__GID__-m1)"/>`,
      duotone: `<rect data-part="body" x="6.5" y="3.5" width="11" height="17" rx="5.5" ${D}/><path data-part="btn-l" d="M6.5 9.5H12V3.5" ${DK_THIN}/><line data-part="wheel" x1="12" y1="6.8" x2="12" y2="9.6" ${DK}/>`,
      glass: glassCompose(
        `<rect data-part="wheel" x="11" y="6.6" width="2" height="3.4" rx="1" ${GB}/>`,
        `<rect data-part="body" x="6.4" y="3.4" width="11.2" height="17.2" rx="5.6"/>`,
        `<g data-part="body" ${GF}><rect x="6.4" y="3.4" width="11.2" height="17.2" rx="5.6"/></g><path data-part="btn-l" d="M6.5 9.5H12V3.5" ${GBS}/>`
      ),
      stencil: `<g fill="currentColor"><path data-part="btn-l" d="M6.5 9A5.5 5.5 0 0 1 11.2 3.6V9Z"/><path d="M12.8 3.6A5.5 5.5 0 0 1 17.5 9H12.8Z"/><path data-part="body" d="M6.5 10.4H17.5V15A5.5 5.5 0 0 1 6.5 15Z"/><rect data-part="wheel" x="11.2" y="6.4" width="1.6" height="3" rx="0.8"/></g>`,
      hardware: `<rect data-part="body" x="6.4" y="3.4" width="11.2" height="17.2" rx="5.6" ${HL}/><path data-part="btn-l" d="M6.5 9.2A5.5 5.5 0 0 1 11.4 3.6V9.2Z" ${HM}/><rect data-part="wheel" x="11.1" y="6.4" width="1.8" height="3.4" rx="0.9" ${HA}/>`,
      relief: `<g data-part="body"><rect transform="translate(1.3,1.3)" x="6.5" y="3.5" width="11" height="17" rx="5.5" ${RS}/><rect x="6.5" y="3.5" width="11" height="17" rx="5.5" ${RF}/></g><path data-part="btn-l" d="M6.5 9.5H12V3.5" ${RF_LINE}/><line data-part="wheel" x1="12" y1="6.8" x2="12" y2="9.6" ${RF_LINE}/>`,
    },
  },
  // 193. ROUTER
  {
    name: "router",
    label: "Wi-Fi Router",
    category: "Tech & Controls",
    motionSummary: "Twin antenna masts wiggle lightly as overhead wireless arc pulses",
    soundSummary: "Modem handshake chirp + Wi-Fi packet pulse",
    svgs: {
      outline: `<line data-part="ant-l" data-pivot="7 14" x1="7" y1="14" x2="6" y2="7.5" ${K}/><line data-part="ant-r" data-pivot="17 14" x1="17" y1="14" x2="18" y2="7.5" ${K}/><path data-part="wave" d="M9.5 6.8A3.8 3.8 0 0 1 14.5 6.8" ${K_THIN}/><rect x="3.5" y="14" width="17" height="6" rx="1.8" ${K}/><circle cx="7.5" cy="17" r="0.7" fill="currentColor"/><circle cx="11" cy="17" r="0.7" fill="currentColor"/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><circle cx="7.5" cy="17" r="0.9" fill="#000"/><circle cx="11" cy="17" r="0.9" fill="#000"/></mask></defs><g stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><line data-part="ant-l" data-pivot="7 14" x1="7" y1="14" x2="6" y2="7.5"/><line data-part="ant-r" data-pivot="17 14" x1="17" y1="14" x2="18" y2="7.5"/></g><path data-part="wave" d="M9.2 6.8A4.2 4.2 0 0 1 14.8 6.8" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><rect x="3.4" y="13.8" width="17.2" height="6.4" rx="2" fill="currentColor" mask="url(#__GID__-m1)"/>`,
      duotone: `<line data-part="ant-l" data-pivot="7 14" x1="7" y1="14" x2="6" y2="7.5" ${DK}/><line data-part="ant-r" data-pivot="17 14" x1="17" y1="14" x2="18" y2="7.5" ${DK}/><path data-part="wave" d="M9.5 6.8A3.8 3.8 0 0 1 14.5 6.8" ${DK_THIN}/><rect x="3.5" y="14" width="17" height="6" rx="1.8" ${D}/><circle cx="7.5" cy="17" r="0.7" fill="currentColor"/><circle cx="11" cy="17" r="0.7" fill="currentColor"/>`,
      glass: glassCompose(
        `<line data-part="ant-l" data-pivot="7 14" x1="7" y1="14" x2="6" y2="7.5" ${GBS}/><line data-part="ant-r" data-pivot="17 14" x1="17" y1="14" x2="18" y2="7.5" ${GBS}/><path data-part="wave" d="M9.2 6.8A4.2 4.2 0 0 1 14.8 6.8" ${GBS}/>`,
        `<rect x="3.4" y="13.8" width="17.2" height="6.4" rx="2"/>`
      ),
      stencil: `<g fill="currentColor"><g stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line data-part="ant-l" data-pivot="7 14" x1="7" y1="14" x2="6" y2="7.5"/><line data-part="ant-r" data-pivot="17 14" x1="17" y1="14" x2="18" y2="7.5"/></g><path data-part="wave" d="M9.2 6.8A4.2 4.2 0 0 1 14.8 6.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><rect x="3.5" y="14" width="8" height="6" rx="1.6"/><rect x="12.5" y="14" width="8" height="6" rx="1.6"/></g>`,
      hardware: `<line data-part="ant-l" data-pivot="7 14" x1="7" y1="14" x2="6" y2="7.5" stroke="#52525b" stroke-width="1.9" stroke-linecap="round"/><line data-part="ant-r" data-pivot="17 14" x1="17" y1="14" x2="18" y2="7.5" stroke="#52525b" stroke-width="1.9" stroke-linecap="round"/><path data-part="wave" d="M9.2 6.8A4.2 4.2 0 0 1 14.8 6.8" fill="none" stroke="#ff6b35" stroke-width="1.7" stroke-linecap="round"/><rect x="3.4" y="13.8" width="17.2" height="6.4" rx="2" ${HL}/><circle cx="7.5" cy="17" r="1" ${HA}/>`,
      relief: `<line data-part="ant-l" data-pivot="7 14" x1="7" y1="14" x2="6" y2="7.5" ${RF_LINE}/><line data-part="ant-r" data-pivot="17 14" x1="17" y1="14" x2="18" y2="7.5" ${RF_LINE}/><path data-part="wave" d="M9.5 6.8A3.8 3.8 0 0 1 14.5 6.8" ${RF_LINE}/><rect transform="translate(1.3,1.3)" x="3.5" y="14" width="17" height="6" rx="1.8" ${RS}/><rect x="3.5" y="14" width="17" height="6" rx="1.8" ${RF}/>`,
    },
  },
  // 194. SERVER
  {
    name: "server",
    label: "Server",
    category: "Tech & Controls",
    motionSummary: "Dual rackmount blades shift cleanly while activity LED blinks",
    soundSummary: "Data-center rack hard-drive seek click-click + fan hum",
    svgs: {
      outline: `<rect data-part="rack-1" x="4" y="4.5" width="16" height="6.4" rx="1.6" ${K}/><rect data-part="rack-2" x="4" y="13.1" width="16" height="6.4" rx="1.6" ${K}/><circle data-part="led" cx="7.4" cy="7.7" r="0.9" fill="currentColor"/><circle cx="7.4" cy="16.3" r="0.9" fill="currentColor"/>`,
      solid: `<g fill="currentColor"><rect data-part="rack-1" x="4" y="4.4" width="16" height="6.6" rx="1.8"/><rect data-part="rack-2" x="4" y="13" width="16" height="6.6" rx="1.8"/></g><circle data-part="led" cx="7.4" cy="7.7" r="1" fill="currentColor" opacity="0.35"/>`,
      duotone: `<rect data-part="rack-1" x="4" y="4.5" width="16" height="6.4" rx="1.6" ${D}/><rect data-part="rack-2" x="4" y="13.1" width="16" height="6.4" rx="1.6" ${D}/><circle data-part="led" cx="7.4" cy="7.7" r="0.9" fill="currentColor"/><circle cx="7.4" cy="16.3" r="0.9" fill="currentColor"/>`,
      glass: glassCompose(
        `<rect data-part="rack-2" x="4" y="13.1" width="16" height="6.4" rx="1.8" ${GB}/>`,
        `<rect data-part="rack-1" x="4" y="4.5" width="16" height="6.4" rx="1.8"/>`,
        `<g data-part="rack-1" ${GF}><rect x="4" y="4.5" width="16" height="6.4" rx="1.8"/></g><circle data-part="led" cx="7.4" cy="7.7" r="1" ${GB}/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="rack-1"><rect x="4" y="4.5" width="7" height="6.4" rx="1.4"/><rect x="12.4" y="4.5" width="7.6" height="6.4" rx="1.4"/></g><g data-part="rack-2"><rect x="4" y="13.1" width="7" height="6.4" rx="1.4"/><rect x="12.4" y="13.1" width="7.6" height="6.4" rx="1.4"/></g><circle data-part="led" cx="7.4" cy="7.7" r="1"/></g>`,
      hardware: `<g data-part="rack-1"><rect x="4" y="4.5" width="16" height="6.4" rx="1.6" ${HL}/><circle data-part="led" cx="7.4" cy="7.7" r="1" ${HA}/></g><g data-part="rack-2"><rect x="4" y="13.1" width="16" height="6.4" rx="1.6" ${HD}/><circle cx="7.4" cy="16.3" r="1" ${HA}/></g>`,
      relief: `<g transform="translate(1.3,1.3)"><rect data-part="rack-1" x="4" y="4.5" width="16" height="6.4" rx="1.6" ${RS}/><rect data-part="rack-2" x="4" y="13.1" width="16" height="6.4" rx="1.6" ${RS}/></g><rect data-part="rack-1" x="4" y="4.5" width="16" height="6.4" rx="1.6" ${RF}/><rect data-part="rack-2" x="4" y="13.1" width="16" height="6.4" rx="1.6" ${RF}/><circle data-part="led" cx="7.4" cy="7.7" r="0.9" ${RS}/>`,
    },
  },
  // 195. BUG
  {
    name: "bug",
    label: "Bug",
    category: "Tech & Controls",
    motionSummary: "Six legs paddle in alternating tripods while the carapace bobs",
    soundSummary: "Tiny crisp beetle leg scurry clicks",
    svgs: {
      outline: `<g data-part="legs-l" data-pivot="12 13.5" ${K_THIN}>${BUG_LEG_L}</g><g data-part="legs-r" data-pivot="12 13.5" ${K_THIN}>${BUG_LEG_R}</g><g data-part="body" ${K}><path d="${BUG_BODY}"/><path d="${BUG_DOME}"/><g stroke-width="1.3">${BUG_SPLIT}${BUG_ANT}</g></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><line x1="12" y1="9.6" x2="12" y2="19.4" stroke="#000" stroke-width="1.15" stroke-linecap="round"/></mask></defs><g data-part="legs-l" data-pivot="12 13.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${BUG_LEG_L}</g><g data-part="legs-r" data-pivot="12 13.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${BUG_LEG_R}</g><g data-part="body" fill="currentColor" mask="url(#__GID__-m1)"><path d="${BUG_BODY}"/><path d="${BUG_DOME}"/><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">${BUG_ANT}</g></g>`,
      duotone: `<g data-part="legs-l" data-pivot="12 13.5" ${DK_THIN}>${BUG_LEG_L}</g><g data-part="legs-r" data-pivot="12 13.5" ${DK_THIN}>${BUG_LEG_R}</g><g data-part="body"><path d="${BUG_BODY}" ${D}/><path d="${BUG_DOME}" ${D}/><g ${DK_THIN}>${BUG_SPLIT}${BUG_ANT}</g></g>`,
      glass: glassCompose(
        `<path d="${BUG_BODY}" ${GB}/><path d="${BUG_DOME}" ${GB}/>`,
        ``,
        `<g data-part="legs-l" data-pivot="12 13.5" ${GBS}>${BUG_LEG_L}</g><g data-part="legs-r" data-pivot="12 13.5" ${GBS}>${BUG_LEG_R}</g><g data-part="body"><path d="${BUG_BODY}" ${GF}/><path d="${BUG_DOME}" ${GF}/><g ${GBS} stroke-width="1.35">${BUG_SPLIT}${BUG_ANT}</g></g>`
      ),
      stencil: `<g fill="currentColor"><g data-part="legs-l" data-pivot="12 13.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${BUG_LEG_L}</g><g data-part="legs-r" data-pivot="12 13.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${BUG_LEG_R}</g><g data-part="body"><path d="${BUG_HALF_L}"/><path d="${BUG_HALF_R}"/><path d="${BUG_DOME}Z"/><g fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round">${BUG_ANT}</g></g></g>`,
      hardware: `<g data-part="legs-l" data-pivot="12 13.5" fill="none" stroke="#52525b" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${BUG_LEG_L}</g><g data-part="legs-r" data-pivot="12 13.5" fill="none" stroke="#52525b" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${BUG_LEG_R}</g><g data-part="body"><path d="${BUG_BODY}" ${HD}/><path d="${BUG_DOME}" ${HA}/><g fill="none" stroke="#3f3f46" stroke-width="1.15" stroke-linecap="round">${BUG_SPLIT}${BUG_ANT}</g></g>`,
      relief: `<g data-part="legs-l" data-pivot="12 13.5" ${RF_LINE}>${BUG_LEG_L}</g><g data-part="legs-r" data-pivot="12 13.5" ${RF_LINE}>${BUG_LEG_R}</g><g data-part="body"><path transform="translate(1.3,1.3)" d="${BUG_BODY}" ${RS}/><path transform="translate(1.3,1.3)" d="${BUG_DOME}" ${RS}/><path d="${BUG_BODY}" ${RF}/><path d="${BUG_DOME}" ${RF}/><g fill="none" stroke="var(--rel-stroke)" stroke-width="1.15" stroke-linecap="round">${BUG_SPLIT}${BUG_ANT}</g></g>`,
    },
  },
  // 196. USB
  {
    name: "usb",
    label: "USB Drive",
    category: "Tech & Controls",
    motionSummary: "Metal Type-A connector slides upward smoothly from flash drive body",
    soundSummary: "Metallic USB port click-in + ascending connect chime",
    svgs: {
      outline: `<rect data-part="plug" x="8.5" y="4" width="7" height="5" rx="0.8" ${K}/><rect data-part="body" x="7" y="9" width="10" height="11" rx="2.2" ${K}/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><rect x="9.7" y="5.5" width="1.4" height="1.6" rx="0.4" fill="#000"/><rect x="12.9" y="5.5" width="1.4" height="1.6" rx="0.4" fill="#000"/></mask></defs><rect data-part="plug" x="8.4" y="3.8" width="7.2" height="5.4" rx="0.9" fill="currentColor" opacity="0.6" mask="url(#__GID__-m1)"/><rect data-part="body" x="6.8" y="9" width="10.4" height="11.2" rx="2.4" fill="currentColor"/>`,
      duotone: `<rect data-part="plug" x="8.5" y="4" width="7" height="5" rx="0.8" ${DK}/><rect data-part="body" x="7" y="9" width="10" height="11" rx="2.2" ${D}/>`,
      glass: glassCompose(
        `<rect data-part="plug" x="8.4" y="3.8" width="7.2" height="5.6" rx="0.9" ${GB}/>`,
        `<rect data-part="body" x="6.8" y="9" width="10.4" height="11.2" rx="2.4"/>`
      ),
      stencil: `<g fill="currentColor"><rect data-part="plug" x="8.5" y="4" width="7" height="4.4" rx="0.8"/><g data-part="body"><rect x="7" y="9.4" width="10" height="5" rx="1.4"/><rect x="7" y="15.4" width="10" height="4.6" rx="1.6"/></g></g>`,
      hardware: `<rect data-part="plug" x="8.4" y="3.8" width="7.2" height="5.4" rx="0.9" ${HL}/><g data-part="body"><rect x="6.8" y="9" width="10.4" height="11.2" rx="2.2" ${HD}/><rect x="10.5" y="13.5" width="3" height="2.4" rx="0.7" ${HA}/></g>`,
      relief: `<rect data-part="plug" x="8.5" y="4" width="7" height="5" rx="0.8" ${RF}/><g data-part="body"><rect transform="translate(1.3,1.3)" x="7" y="9" width="10" height="11" rx="2.2" ${RS}/><rect x="7" y="9" width="10" height="11" rx="2.2" ${RF}/></g>`,
    },
  },
  // 197. FINGERPRINT
  {
    name: "fingerprint",
    label: "Fingerprint",
    category: "Tech & Controls",
    motionSummary: "Biometric dermal ridges draw outward-in as the core locks last",
    soundSummary: "High-tech optical biometric scan lock chime",
    svgs: {
      outline: `<path data-part="ring-1" d="${FP_RING_1}" ${K}/><path data-part="ring-2" d="${FP_RING_2}" ${K}/><path data-part="ring-3" d="${FP_RING_3}" ${K}/><path data-part="core" d="${FP_CORE}" ${K_THIN}/>`,
      solid: `<g fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"><path data-part="ring-1" d="${FP_RING_1}"/><path data-part="ring-2" d="${FP_RING_2}"/><path data-part="ring-3" d="${FP_RING_3}"/><path data-part="core" d="${FP_CORE}"/></g>`,
      duotone: `<circle cx="12" cy="12" r="8.4" ${D}/><g ${DK}><path data-part="ring-1" d="${FP_RING_1}"/><path data-part="ring-2" d="${FP_RING_2}"/><path data-part="ring-3" d="${FP_RING_3}"/><path data-part="core" d="${FP_CORE}"/></g>`,
      glass: glassCompose(
        `<g fill="none" stroke="url(#g-back)" stroke-width="3"><path d="${FP_RING_1}"/><path d="${FP_RING_2}"/><path d="${FP_RING_3}"/><path d="${FP_CORE}"/></g>`,
        ``,
        `<g ${GBS} stroke-width="1.6"><path data-part="ring-1" d="${FP_RING_1}"/><path data-part="ring-2" d="${FP_RING_2}"/><path data-part="ring-3" d="${FP_RING_3}"/><path data-part="core" d="${FP_CORE}"/></g>`
      ),
      stencil: `<g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path data-part="ring-1" d="${FP_RING_1}" stroke-dasharray="5.5 2.2"/><path data-part="ring-2" d="${FP_RING_2}"/><path data-part="ring-3" d="${FP_RING_3}"/><path data-part="core" d="${FP_CORE}"/></g>`,
      hardware: `<circle cx="12" cy="12" r="8.8" ${HD}/><g fill="none" stroke="#d4d4d8" stroke-width="1.7" stroke-linecap="round"><path data-part="ring-1" d="${FP_RING_1}"/><path data-part="ring-2" d="${FP_RING_2}"/><path data-part="ring-3" d="${FP_RING_3}"/></g><path data-part="core" d="${FP_CORE}" fill="none" stroke="#ff6b35" stroke-width="1.9" stroke-linecap="round"/>`,
      relief: `<g data-part="ring-1"><path transform="translate(1.3,1.3)" d="${FP_RING_1}" ${RS_LINE}/><path d="${FP_RING_1}" ${RF_LINE}/></g><g data-part="ring-2"><path transform="translate(1.3,1.3)" d="${FP_RING_2}" ${RS_LINE}/><path d="${FP_RING_2}" ${RF_LINE}/></g><g data-part="ring-3"><path transform="translate(1.3,1.3)" d="${FP_RING_3}" ${RS_LINE}/><path d="${FP_RING_3}" ${RF_LINE}/></g><g data-part="core"><path transform="translate(1.3,1.3)" d="${FP_CORE}" ${RS_LINE}/><path d="${FP_CORE}" ${RF_LINE}/></g>`,
    },
  },
  // 198. SD CARD
  {
    name: "sd-card",
    label: "SD Card",
    category: "Tech & Controls",
    motionSummary: "Memory card plunges cleanly downward with spring-loaded slot click",
    soundSummary: "Spring-loaded SD card camera slot click-lock",
    svgs: {
      outline: `<g data-part="card" ${K}><path d="M8 4H16.5A1.5 1.5 0 0 1 18 5.5V18.5A1.5 1.5 0 0 1 16.5 20H7.5A1.5 1.5 0 0 1 6 18.5V8Z"/><line x1="10" y1="7" x2="10" y2="9.5" ${K_THIN}/><line x1="12.5" y1="7" x2="12.5" y2="9.5" ${K_THIN}/><line x1="15" y1="7" x2="15" y2="9.5" ${K_THIN}/></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><rect x="9.4" y="6.6" width="1.2" height="2.8" rx="0.5" fill="#000"/><rect x="11.9" y="6.6" width="1.2" height="2.8" rx="0.5" fill="#000"/><rect x="14.4" y="6.6" width="1.2" height="2.8" rx="0.5" fill="#000"/></mask></defs><path data-part="card" fill="currentColor" mask="url(#__GID__-m1)" d="M8 3.8H16.5A1.7 1.7 0 0 1 18.2 5.5V18.5A1.7 1.7 0 0 1 16.5 20.2H7.5A1.7 1.7 0 0 1 5.8 18.5V8Z"/>`,
      duotone: `<g data-part="card"><path d="M8 4H16.5A1.5 1.5 0 0 1 18 5.5V18.5A1.5 1.5 0 0 1 16.5 20H7.5A1.5 1.5 0 0 1 6 18.5V8Z" ${D}/><line x1="10" y1="7" x2="10" y2="9.5" ${DK_THIN}/><line x1="12.5" y1="7" x2="12.5" y2="9.5" ${DK_THIN}/><line x1="15" y1="7" x2="15" y2="9.5" ${DK_THIN}/></g>`,
      glass: glassCompose(
        `<g data-part="card" ${GB}><rect x="9.4" y="6.6" width="1.2" height="2.8" rx="0.5"/><rect x="11.9" y="6.6" width="1.2" height="2.8" rx="0.5"/><rect x="14.4" y="6.6" width="1.2" height="2.8" rx="0.5"/></g>`,
        `<path data-part="card" d="M8 3.8H16.5A1.7 1.7 0 0 1 18.2 5.5V18.5A1.7 1.7 0 0 1 16.5 20.2H7.5A1.7 1.7 0 0 1 5.8 18.5V8Z"/>`
      ),
      stencil: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><rect x="9.4" y="6.6" width="1.2" height="2.8" rx="0.5" fill="#000"/><rect x="11.9" y="6.6" width="1.2" height="2.8" rx="0.5" fill="#000"/><rect x="14.4" y="6.6" width="1.2" height="2.8" rx="0.5" fill="#000"/></mask></defs><g data-part="card" fill="currentColor" mask="url(#__GID__-m1)"><path d="M8 4H16.5A1.5 1.5 0 0 1 18 5.5V11H6V8Z"/><rect x="6" y="12.2" width="12" height="7.8" rx="1.4"/></g>`,
      hardware: `<g data-part="card"><path d="M8 3.8H16.5A1.7 1.7 0 0 1 18.2 5.5V18.5A1.7 1.7 0 0 1 16.5 20.2H7.5A1.7 1.7 0 0 1 5.8 18.5V8Z" ${HD}/><rect x="9.4" y="6.4" width="1.2" height="2.8" rx="0.4" ${HA}/><rect x="11.9" y="6.4" width="1.2" height="2.8" rx="0.4" ${HA}/><rect x="14.4" y="6.4" width="1.2" height="2.8" rx="0.4" ${HA}/></g>`,
      relief: `<g data-part="card"><path transform="translate(1.3,1.3)" d="M8 4H16.5A1.5 1.5 0 0 1 18 5.5V18.5A1.5 1.5 0 0 1 16.5 20H7.5A1.5 1.5 0 0 1 6 18.5V8Z" ${RS}/><path d="M8 4H16.5A1.5 1.5 0 0 1 18 5.5V18.5A1.5 1.5 0 0 1 16.5 20H7.5A1.5 1.5 0 0 1 6 18.5V8Z" ${RF}/></g>`,
    },
  },
  // 199. TOGGLE
  {
    name: "toggle",
    label: "Toggle Switch",
    category: "Tech & Controls",
    motionSummary: "Rounded pill thumb glides crisply across switch track and back",
    soundSummary: "Tactile rocker switch snap-clack",
    svgs: {
      outline: `<rect data-part="track" x="3.5" y="7" width="17" height="10" rx="5" ${K}/><circle data-part="knob" cx="8.5" cy="12" r="2.8" fill="currentColor"/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><circle data-part="knob" cx="8.5" cy="12" r="3.4" fill="#000"/></mask></defs><rect data-part="track" x="3.4" y="6.8" width="17.2" height="10.4" rx="5.2" fill="currentColor" mask="url(#__GID__-m1)"/><circle data-part="knob" cx="8.5" cy="12" r="2.5" fill="currentColor"/>`,
      duotone: `<rect data-part="track" x="3.5" y="7" width="17" height="10" rx="5" ${D}/><circle data-part="knob" cx="8.5" cy="12" r="2.8" fill="currentColor"/>`,
      glass: glassCompose(
        `<circle data-part="knob" cx="8.5" cy="12" r="3" ${GB}/>`,
        `<rect data-part="track" x="3.4" y="6.8" width="17.2" height="10.4" rx="5.2"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="track"><path d="M8.5 7H11.3V17H8.5A5 5 0 0 1 8.5 7Z"/><path d="M12.7 7H15.5A5 5 0 0 1 15.5 17H12.7Z"/></g><circle data-part="knob" cx="8.5" cy="12" r="2.6"/></g>`,
      hardware: `<rect data-part="track" x="3.4" y="6.8" width="17.2" height="10.4" rx="5.2" ${HD}/><circle data-part="knob" cx="8.5" cy="12" r="3.1" ${HA}/>`,
      relief: `<g data-part="track"><rect transform="translate(1.3,1.3)" x="3.5" y="7" width="17" height="10" rx="5" ${RS}/><rect x="3.5" y="7" width="17" height="10" rx="5" ${RF}/></g><circle data-part="knob" cx="8.5" cy="12" r="2.8" ${RS}/>`,
    },
  },
  // 200. WEBCAM
  {
    name: "webcam",
    label: "Webcam",
    category: "Tech & Controls",
    motionSummary: "Spherical camera head tilts subtly as optical lens iris dilates open",
    soundSummary: "Autofocus iris click + webcam active chime",
    svgs: {
      outline: `<g data-part="head" data-pivot="12 10.5"><circle cx="12" cy="10.5" r="6" ${K}/><circle data-part="lens" data-pivot="12 10.5" cx="12" cy="10.5" r="2.2" ${K_THIN}/></g><path d="M8.5 19.5H15.5M12 16.5V19.5" ${K}/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><circle cx="12" cy="10.5" r="2.8" fill="#000"/></mask></defs><g data-part="head" data-pivot="12 10.5"><circle cx="12" cy="10.5" r="6.2" fill="currentColor" mask="url(#__GID__-m1)"/><circle data-part="lens" data-pivot="12 10.5" cx="12" cy="10.5" r="1.8" fill="currentColor"/></g><path d="M8.5 19.5H15.5M12 16.5V19.5" ${K}/>`,
      duotone: `<g data-part="head" data-pivot="12 10.5"><circle cx="12" cy="10.5" r="6" ${D}/><circle data-part="lens" data-pivot="12 10.5" cx="12" cy="10.5" r="2.2" ${DK}/></g><path d="M8.5 19.5H15.5M12 16.5V19.5" ${DK}/>`,
      glass: glassCompose(
        `<path d="M8.5 19.5H15.5M12 16.5V19.5" ${GBS}/><circle data-part="lens" data-pivot="12 10.5" cx="12" cy="10.5" r="2.2" ${GB}/>`,
        `<circle data-part="head" data-pivot="12 10.5" cx="12" cy="10.5" r="6.2"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="head" data-pivot="12 10.5"><path d="M7.5 6A6.2 6.2 0 0 1 16.5 6L15 7.6A4 4 0 0 0 9 7.6Z"/><path d="M16.5 15A6.2 6.2 0 0 1 7.5 15L9 13.4A4 4 0 0 0 15 13.4Z"/><circle data-part="lens" data-pivot="12 10.5" cx="12" cy="10.5" r="2.1"/></g><rect x="8.5" y="18.6" width="7" height="1.8" rx="0.9"/></g>`,
      hardware: `<path d="M8.5 19.5H15.5M12 16.5V19.5" stroke="#52525b" stroke-width="2" stroke-linecap="round"/><g data-part="head" data-pivot="12 10.5"><circle cx="12" cy="10.5" r="6.2" ${HL}/><circle data-part="lens" data-pivot="12 10.5" cx="12" cy="10.5" r="2.4" ${HA}/></g>`,
      relief: `<path d="M8.5 19.5H15.5M12 16.5V19.5" ${RF_LINE}/><g data-part="head" data-pivot="12 10.5"><circle transform="translate(1.3,1.3)" cx="12" cy="10.5" r="6" ${RS}/><circle cx="12" cy="10.5" r="6" ${RF}/><circle data-part="lens" data-pivot="12 10.5" cx="12" cy="10.5" r="2.2" ${RF}/></g>`,
    },
  },
];
