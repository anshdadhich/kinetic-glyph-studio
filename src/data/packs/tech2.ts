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

// Fingerprint ridges, shared by every style. Each ridge has a faint static
// underlay and a full-strength overlay that draws in from the core on hover.
const FP_RIDGES = [
  "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",
  "M14 13.12c0 2.38 0 6.38-1 8.88",
  "M17.29 21.02c.12-.6.43-2.3.5-3.02",
  "M2 12a10 10 0 0 1 18-6",
  "M2 16h.01",
  "M21.8 16c.2-2 .131-5.354 0-6",
  "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",
  "M8.65 22c.21-.66.45-1.32.57-2",
  "M9 6.8a6 6 0 0 1 9 5.2v2",
];

const fpUnder = (opacity: string) =>
  FP_RIDGES.map((d) => `<path d="${d}" opacity="${opacity}"/>`).join("");
const fpPlain = (attrs = "") =>
  FP_RIDGES.map((d) => `<path d="${d}" ${attrs}/>`).join("");
const fpDrawn = (attrs = "", accent?: number) =>
  FP_RIDGES.map(
    (d, i) =>
      `<path data-part="ridge-${i + 1}" data-pivot="12 12" d="${d}"${
        i === accent ? ' stroke="#ff6b35"' : ""
      } ${attrs}/>`
  ).join("");

export const TECH2_ICONS: IconDef[] = [
  // 191. KEYBOARD
  {
    name: "keyboard",
    label: "Keyboard",
    category: "Tech & Controls",
    motionSummary: "Mechanical keycaps depress sequentially inside chamfered keyboard deck",
    soundSummary: "Triple tactile mechanical keyboard switch clackety-clack",
    svgs: {
      outline: `<rect x="2.2" y="6.2" width="19.6" height="11.8" rx="2.2" ${K}/><g fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"><rect data-part="key-1" x="4.3" y="8.2" width="2.6" height="2.2" rx="0.45"/><rect data-part="key-2" x="8" y="8.2" width="2.6" height="2.2" rx="0.45"/><rect data-part="key-3" x="11.7" y="8.2" width="2.6" height="2.2" rx="0.45"/><rect x="15.4" y="8.2" width="4.3" height="2.2" rx="0.45"/><rect x="4.3" y="11.3" width="3.5" height="2.2" rx="0.45"/><rect x="8.8" y="11.3" width="2.5" height="2.2" rx="0.45"/><rect x="12.3" y="11.3" width="2.5" height="2.2" rx="0.45"/><rect x="15.8" y="11.3" width="3.9" height="2.2" rx="0.45"/><rect x="4.3" y="14.3" width="2.6" height="1.9" rx="0.45"/><rect x="7.8" y="14.3" width="8.4" height="1.9" rx="0.5"/><rect x="17.1" y="14.3" width="2.6" height="1.9" rx="0.45"/></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><g fill="#000"><rect data-part="key-1" x="4.3" y="8.2" width="2.6" height="2.2" rx="0.5"/><rect data-part="key-2" x="8" y="8.2" width="2.6" height="2.2" rx="0.5"/><rect data-part="key-3" x="11.7" y="8.2" width="2.6" height="2.2" rx="0.5"/><rect x="15.4" y="8.2" width="4.3" height="2.2" rx="0.5"/><rect x="4.3" y="11.3" width="3.5" height="2.2" rx="0.5"/><rect x="8.8" y="11.3" width="2.5" height="2.2" rx="0.5"/><rect x="12.3" y="11.3" width="2.5" height="2.2" rx="0.5"/><rect x="15.8" y="11.3" width="3.9" height="2.2" rx="0.5"/><rect x="4.3" y="14.3" width="2.6" height="1.9" rx="0.5"/><rect x="7.8" y="14.3" width="8.4" height="1.9" rx="0.55"/><rect x="17.1" y="14.3" width="2.6" height="1.9" rx="0.5"/></g></mask></defs><rect x="2.2" y="6.2" width="19.6" height="11.8" rx="2.3" fill="currentColor" mask="url(#__GID__-m1)"/>`,
      duotone: `<rect x="2.2" y="6.2" width="19.6" height="11.8" rx="2.2" ${D}/><g fill="currentColor" stroke="none"><rect data-part="key-1" x="4.3" y="8.2" width="2.6" height="2.2" rx="0.45"/><rect data-part="key-2" x="8" y="8.2" width="2.6" height="2.2" rx="0.45"/><rect data-part="key-3" x="11.7" y="8.2" width="2.6" height="2.2" rx="0.45"/><rect x="15.4" y="8.2" width="4.3" height="2.2" rx="0.45"/><rect x="4.3" y="11.3" width="3.5" height="2.2" rx="0.45"/><rect x="8.8" y="11.3" width="2.5" height="2.2" rx="0.45"/><rect x="12.3" y="11.3" width="2.5" height="2.2" rx="0.45"/><rect x="15.8" y="11.3" width="3.9" height="2.2" rx="0.45"/><rect x="4.3" y="14.3" width="2.6" height="1.9" rx="0.45"/><rect x="7.8" y="14.3" width="8.4" height="1.9" rx="0.5"/><rect x="17.1" y="14.3" width="2.6" height="1.9" rx="0.45"/></g>`,
      glass: glassCompose(
        `<g ${GB}><rect data-part="key-1" x="4.3" y="8.2" width="2.6" height="2.2" rx="0.5"/><rect data-part="key-2" x="8" y="8.2" width="2.6" height="2.2" rx="0.5"/><rect data-part="key-3" x="11.7" y="8.2" width="2.6" height="2.2" rx="0.5"/><rect x="15.4" y="8.2" width="4.3" height="2.2" rx="0.5"/><rect x="4.3" y="11.3" width="3.5" height="2.2" rx="0.5"/><rect x="8.8" y="11.3" width="2.5" height="2.2" rx="0.5"/><rect x="12.3" y="11.3" width="2.5" height="2.2" rx="0.5"/><rect x="15.8" y="11.3" width="3.9" height="2.2" rx="0.5"/><rect x="7.8" y="14.3" width="8.4" height="1.9" rx="0.55"/></g>`,
        `<rect x="2.2" y="6.2" width="19.6" height="11.8" rx="2.3"/>`
      ),
      stencil: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><g fill="#000"><rect data-part="key-1" x="4.3" y="8.2" width="2.6" height="2.2" rx="0.5"/><rect data-part="key-2" x="8" y="8.2" width="2.6" height="2.2" rx="0.5"/><rect data-part="key-3" x="11.7" y="8.2" width="2.6" height="2.2" rx="0.5"/><rect x="15.4" y="8.2" width="4.3" height="2.2" rx="0.5"/><rect x="7.8" y="14.3" width="8.4" height="1.9" rx="0.55"/></g></mask></defs><g fill="currentColor" mask="url(#__GID__-m1)"><rect x="2.2" y="6.2" width="19.6" height="5.4" rx="1.6"/><rect x="2.2" y="12.6" width="19.6" height="5.4" rx="1.6"/></g>`,
      hardware: `<rect x="2.2" y="6.2" width="19.6" height="11.8" rx="2.2" ${HD}/><rect data-part="key-1" x="4.3" y="8.2" width="2.6" height="2.2" rx="0.5" ${HL}/><rect data-part="key-2" x="8" y="8.2" width="2.6" height="2.2" rx="0.5" ${HA}/><rect data-part="key-3" x="11.7" y="8.2" width="2.6" height="2.2" rx="0.5" ${HL}/><rect x="15.4" y="8.2" width="4.3" height="2.2" rx="0.5" ${HL}/><rect x="4.3" y="11.3" width="3.5" height="2.2" rx="0.5" ${HM}/><rect x="8.8" y="11.3" width="2.5" height="2.2" rx="0.5" ${HM}/><rect x="12.3" y="11.3" width="2.5" height="2.2" rx="0.5" ${HM}/><rect x="15.8" y="11.3" width="3.9" height="2.2" rx="0.5" ${HM}/><rect x="7.8" y="14.3" width="8.4" height="1.9" rx="0.55" ${HL}/>`,
      relief: `<rect transform="translate(1.3,1.3)" x="2.2" y="6.2" width="19.6" height="11.8" rx="2.2" ${RS}/><rect x="2.2" y="6.2" width="19.6" height="11.8" rx="2.2" ${RF}/><g ${RS}><rect data-part="key-1" x="4.3" y="8.2" width="2.6" height="2.2" rx="0.45"/><rect data-part="key-2" x="8" y="8.2" width="2.6" height="2.2" rx="0.45"/><rect data-part="key-3" x="11.7" y="8.2" width="2.6" height="2.2" rx="0.45"/><rect x="15.4" y="8.2" width="4.3" height="2.2" rx="0.45"/><rect x="4.3" y="11.3" width="3.5" height="2.2" rx="0.45"/><rect x="8.8" y="11.3" width="2.5" height="2.2" rx="0.45"/><rect x="12.3" y="11.3" width="2.5" height="2.2" rx="0.45"/><rect x="15.8" y="11.3" width="3.9" height="2.2" rx="0.45"/><rect x="4.3" y="14.3" width="2.6" height="1.9" rx="0.45"/><rect x="7.8" y="14.3" width="8.4" height="1.9" rx="0.5"/><rect x="17.1" y="14.3" width="2.6" height="1.9" rx="0.45"/></g>`,
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
    motionSummary: "Six articulated beetle legs scurry rapidly while carapace wiggles",
    soundSummary: "Tiny crisp beetle leg scurry clicks",
    svgs: {
      outline: `<g data-part="legs" data-pivot="12 13" ${K_THIN}><path d="M4.2 8.8L5.4 10.6L7.7 11.4"/><path d="M3.5 14H7.2"/><path d="M4.5 18.8L5.8 16.8L8 16"/><path d="M19.8 8.8L18.6 10.6L16.3 11.4"/><path d="M20.5 14H16.8"/><path d="M19.5 18.8L18.2 16.8L16 16"/></g><g data-part="body" ${K}><path d="M9.6 6.2L8.1 4.1M14.4 6.2L15.9 4.1" ${K_THIN}/><rect x="7.4" y="8.4" width="9.2" height="11.2" rx="4.6"/><path d="M9.5 8.5A2.5 2.5 0 0 1 14.5 8.5"/><line x1="7.7" y1="11.6" x2="16.3" y2="11.6" ${K_THIN}/><line x1="12" y1="11.6" x2="12" y2="19.6" ${K_THIN}/></g>`,
      solid: `<g data-part="legs" data-pivot="12 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M4.2 8.8L5.4 10.6L7.7 11.4"/><path d="M3.5 14H7.2"/><path d="M4.5 18.8L5.8 16.8L8 16"/><path d="M19.8 8.8L18.6 10.6L16.3 11.4"/><path d="M20.5 14H16.8"/><path d="M19.5 18.8L18.2 16.8L16 16"/></g><g data-part="body" fill="currentColor"><path d="M9.6 6.4L8.1 4.1M14.4 6.4L15.9 4.1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M9.4 8.2A2.6 2.6 0 0 1 14.6 8.2Z"/><path fill-rule="evenodd" d="M7.4 12.8C7.4 10.2 9.4 8.6 12 8.6C14.6 8.6 16.6 10.2 16.6 12.8V15.2A4.6 4.6 0 0 1 7.4 15.2ZM11.4 12V19.2H12.6V12Z"/></g>`,
      duotone: `<g data-part="legs" data-pivot="12 13" ${DK_THIN}><path d="M4.2 8.8L5.4 10.6L7.7 11.4M3.5 14H7.2M4.5 18.8L5.8 16.8L8 16"/><path d="M19.8 8.8L18.6 10.6L16.3 11.4M20.5 14H16.8M19.5 18.8L18.2 16.8L16 16"/></g><g data-part="body"><path d="M9.6 6.2L8.1 4.1M14.4 6.2L15.9 4.1" ${DK_THIN}/><rect x="7.4" y="8.4" width="9.2" height="11.2" rx="4.6" ${D}/><path d="M9.5 8.5A2.5 2.5 0 0 1 14.5 8.5" ${DK}/><line x1="12" y1="11.4" x2="12" y2="19.5" ${DK_THIN}/></g>`,
      glass: glassCompose(
        `<g data-part="legs" data-pivot="12 13" ${GBS}><path d="M4.2 8.8L5.4 10.6L7.7 11.4M3.5 14H7.2M4.5 18.8L5.8 16.8L8 16"/><path d="M19.8 8.8L18.6 10.6L16.3 11.4M20.5 14H16.8M19.5 18.8L18.2 16.8L16 16"/></g><path data-part="body" d="M9.4 8.5A2.6 2.6 0 0 1 14.6 8.5Z" ${GB}/>`,
        `<rect data-part="body" x="7.4" y="8.4" width="9.2" height="11.2" rx="4.6"/>`,
        `<g data-part="body" ${GF}><rect x="7.4" y="8.4" width="9.2" height="11.2" rx="4.6"/></g><line data-part="body" x1="12" y1="11.2" x2="12" y2="19.2" ${GH}/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="legs" data-pivot="12 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"><path d="M4.2 8.8L5.4 10.6L7.7 11.4M3.5 14H7.2M4.5 18.8L5.8 16.8L8 16"/><path d="M19.8 8.8L18.6 10.6L16.3 11.4M20.5 14H16.8M19.5 18.8L18.2 16.8L16 16"/></g><g data-part="body"><path d="M7.4 12.6A4.6 4.6 0 0 1 11.3 8.1V19.5A4.6 4.6 0 0 1 7.4 15Z"/><path d="M12.7 8.1A4.6 4.6 0 0 1 16.6 12.6V15A4.6 4.6 0 0 1 12.7 19.5Z"/></g></g>`,
      hardware: `<g data-part="legs" data-pivot="12 13" stroke="#52525b" stroke-width="1.55" stroke-linecap="round" fill="none"><path d="M4.2 8.8L5.4 10.6L7.7 11.4M3.5 14H7.2M4.5 18.8L5.8 16.8L8 16"/><path d="M19.8 8.8L18.6 10.6L16.3 11.4M20.5 14H16.8M19.5 18.8L18.2 16.8L16 16"/></g><g data-part="body"><path d="M9.4 8.4A2.6 2.6 0 0 1 14.6 8.4Z" ${HA}/><rect x="7.4" y="8.4" width="9.2" height="11.2" rx="4.6" ${HD}/></g>`,
      relief: `<g data-part="legs" data-pivot="12 13" ${RF_LINE}><path d="M4.2 8.8L5.4 10.6L7.7 11.4M3.5 14H7.2M4.5 18.8L5.8 16.8L8 16"/><path d="M19.8 8.8L18.6 10.6L16.3 11.4M20.5 14H16.8M19.5 18.8L18.2 16.8L16 16"/></g><g data-part="body"><rect transform="translate(1.3,1.3)" x="7.4" y="8.4" width="9.2" height="11.2" rx="4.6" ${RS}/><rect x="7.4" y="8.4" width="9.2" height="11.2" rx="4.6" ${RF}/></g>`,
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
    motionSummary: "Layered dermal ridges draw in from the core in a staggered biometric scan",
    soundSummary: "Soft optical biometric scan verify chime",
    svgs: {
      outline: `<g ${K}>${fpUnder("0.34")}${fpDrawn()}</g>`,
      solid: `<g fill="none" stroke="currentColor" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round">${fpUnder("0.34")}${fpDrawn()}</g>`,
      duotone: `<g ${DK}>${fpUnder("0.3")}${fpDrawn()}</g>`,
      glass: glassCompose(
        `<circle cx="12" cy="12" r="9.2" ${GB}/>`,
        `<g stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round">${fpPlain('fill="none"')}</g>`,
        `<g fill="none" stroke-linecap="round"><g stroke="url(#g-rim)" stroke-width="2.2">${fpPlain('fill="none"')}</g><g stroke="#fff" stroke-width="1.5">${fpPlain('fill="none"')}</g></g>`
      ),
      stencil: `<g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><g stroke-dasharray="6.5 2.4">${fpUnder("0.3")}</g>${fpDrawn()}</g>`,
      hardware: `<g fill="none" stroke="#a1a1aa" stroke-width="1.7" stroke-linecap="round">${fpUnder("0.28")}${fpDrawn("", 4)}</g>`,
      relief: `<g transform="translate(1.2,1.2)" ${RS_LINE}>${fpPlain()}</g><g ${RF_LINE}>${fpUnder("0.3")}${fpDrawn()}</g>`,
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
