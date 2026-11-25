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

export const MUSIC2_ICONS: IconDef[] = [
  // 221. VIOLIN
  {
    name: "violin",
    label: "Violin",
    category: "Studio & Sound",
    motionSummary: "Wooden bow glides smoothly across violin strings while body resonates",
    soundSummary: "Warm expressively bowed violin string fifth",
    svgs: {
      outline: `<g data-part="body" data-pivot="12 12" ${K}><path d="M15.8 5.2L18.8 8.2M17.3 6.7L12 12"/><path d="M9.6 10.2C8.4 10.8 8.4 12.6 9.2 13.6C7.6 14.2 6 15.8 6.8 17.6C7.6 19.4 10.6 19.8 12.2 18.2C13.8 16.6 13.4 14.2 12 13.2"/></g><line data-part="bow" data-pivot="12 12" x1="5" y1="8.5" x2="18.5" y2="17" ${K_THIN}/>`,
      solid: `<g data-part="body" data-pivot="12 12" fill="currentColor"><path d="M15.5 4.8L19.2 8.5L18 9.7L16.7 8.4L12.6 12.5L11.5 11.4L15.6 7.3L14.3 6Z"/><path d="M11.6 10.4C10.2 9.2 8.2 10.2 8.4 12.2C6.8 12.8 5.4 15.4 6.6 17.6C7.8 19.8 11.2 19.8 12.8 17.8C14.2 16.2 13.8 13.8 12.6 12.8Z"/></g><line data-part="bow" data-pivot="12 12" x1="5" y1="8.5" x2="18.5" y2="17" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`,
      duotone: `<g data-part="body" data-pivot="12 12"><path d="M15.8 5.2L18.8 8.2M17.3 6.7L12 12" ${DK}/><path d="M11.6 10.4C10.2 9.2 8.2 10.2 8.4 12.2C6.8 12.8 5.4 15.4 6.6 17.6C7.8 19.8 11.2 19.8 12.8 17.8C14.2 16.2 13.8 13.8 12.6 12.8Z" ${D}/></g><line data-part="bow" data-pivot="12 12" x1="5" y1="8.5" x2="18.5" y2="17" ${DK_THIN}/>`,
      glass: glassCompose(
        `<path data-part="body" data-pivot="12 12" d="M15.5 4.8L19.2 8.5L18 9.7L16.7 8.4L12.6 12.5L11.5 11.4L15.6 7.3L14.3 6Z" ${GB}/><line data-part="bow" data-pivot="12 12" x1="5" y1="8.5" x2="18.5" y2="17" ${GBS}/>`,
        `<path data-part="body" data-pivot="12 12" d="M11.6 10.4C10.2 9.2 8.2 10.2 8.4 12.2C6.8 12.8 5.4 15.4 6.6 17.6C7.8 19.8 11.2 19.8 12.8 17.8C14.2 16.2 13.8 13.8 12.6 12.8Z"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="body" data-pivot="12 12"><path d="M15.5 4.8L19.2 8.5L18 9.7L14.3 6Z"/><path d="M11.6 10.4C10.2 9.2 8.2 10.2 8.4 12.2C6.8 12.8 5.4 15.4 6.6 17.6C7.8 19.8 11.2 19.8 12.8 17.8C14.2 16.2 13.8 13.8 12.6 12.8Z"/></g><line data-part="bow" data-pivot="12 12" x1="5" y1="8.5" x2="18.5" y2="17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></g>`,
      hardware: `<g data-part="body" data-pivot="12 12"><path d="M15.5 4.8L19.2 8.5L18 9.7L16.7 8.4L12.6 12.5L11.5 11.4L15.6 7.3L14.3 6Z" ${HD}/><path d="M11.6 10.4C10.2 9.2 8.2 10.2 8.4 12.2C6.8 12.8 5.4 15.4 6.6 17.6C7.8 19.8 11.2 19.8 12.8 17.8C14.2 16.2 13.8 13.8 12.6 12.8Z" ${HL}/></g><line data-part="bow" data-pivot="12 12" x1="5" y1="8.5" x2="18.5" y2="17" stroke="#ff6b35" stroke-width="1.6" stroke-linecap="round"/>`,
      relief: `<g data-part="body" data-pivot="12 12"><path transform="translate(1.2,1.2)" d="M11.6 10.4C10.2 9.2 8.2 10.2 8.4 12.2C6.8 12.8 5.4 15.4 6.6 17.6C7.8 19.8 11.2 19.8 12.8 17.8C14.2 16.2 13.8 13.8 12.6 12.8Z" ${RS}/><path d="M15.8 5.2L18.8 8.2M17.3 6.7L12 12" ${RF_LINE}/><path d="M11.6 10.4C10.2 9.2 8.2 10.2 8.4 12.2C6.8 12.8 5.4 15.4 6.6 17.6C7.8 19.8 11.2 19.8 12.8 17.8C14.2 16.2 13.8 13.8 12.6 12.8Z" ${RF}/></g><line data-part="bow" data-pivot="12 12" x1="5" y1="8.5" x2="18.5" y2="17" ${RF_LINE}/>`,
    },
  },
  // 222. SAXOPHONE
  {
    name: "saxophone",
    label: "Saxophone",
    category: "Studio & Sound",
    motionSummary: "Curved brass horn sways soulfully as warm jazz note floats upward",
    soundSummary: "Soulful brass jazz saxophone swell",
    svgs: {
      outline: `<path data-part="horn" data-pivot="11 17" d="M6.5 4.8H8.8A2.2 2.2 0 0 1 11 7V15.5A2.5 2.5 0 0 0 16 15.5V12.5H13.5L18.5 11.5L17.5 16.5A4.2 4.2 0 0 1 9 16.5V7H6.5" ${K}/><circle data-part="note" cx="18.5" cy="6.2" r="1.4" fill="currentColor"/>`,
      solid: `<path data-part="horn" data-pivot="11 17" fill="currentColor" d="M6.2 4.2H9A2.6 2.6 0 0 1 11.6 6.8V15.4A2 2 0 0 0 15.6 15.4V13.2L13.5 12.4L19.4 10.8L18.4 16.5A4.6 4.6 0 0 1 9.2 16.5V7.2H6.2Z"/><circle data-part="note" cx="18.5" cy="6.2" r="1.5" fill="currentColor"/>`,
      duotone: `<path data-part="horn" data-pivot="11 17" d="M6.5 4.8H8.8A2.2 2.2 0 0 1 11 7V15.5A2.5 2.5 0 0 0 16 15.5V12.5H13.5L18.5 11.5L17.5 16.5A4.2 4.2 0 0 1 9 16.5V7H6.5" ${D}/><circle data-part="note" cx="18.5" cy="6.2" r="1.4" fill="currentColor"/>`,
      glass: glassCompose(
        `<circle data-part="note" cx="18.5" cy="6.2" r="1.5" ${GB}/>`,
        `<path data-part="horn" data-pivot="11 17" d="M6.2 4.2H9A2.6 2.6 0 0 1 11.6 6.8V15.4A2 2 0 0 0 15.6 15.4V13.2L13.5 12.4L19.4 10.8L18.4 16.5A4.6 4.6 0 0 1 9.2 16.5V7.2H6.2Z"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="horn" data-pivot="11 17"><path d="M6.2 4.4H9A2.4 2.4 0 0 1 11.4 6.8V13H9.2V7H6.2Z"/><path d="M9.2 14.4H11.4V15.5A2.2 2.2 0 0 0 15.8 15.5V13.2L13.6 12.4L19.2 11L18.2 16.5A4.4 4.4 0 0 1 9.2 16.5Z"/></g><circle data-part="note" cx="18.5" cy="6.2" r="1.4"/></g>`,
      hardware: `<path data-part="horn" data-pivot="11 17" d="M6.2 4.2H9A2.6 2.6 0 0 1 11.6 6.8V15.4A2 2 0 0 0 15.6 15.4V13.2L13.5 12.4L19.4 10.8L18.4 16.5A4.6 4.6 0 0 1 9.2 16.5V7.2H6.2Z" ${HL}/><circle data-part="note" cx="18.5" cy="6.2" r="1.5" ${HA}/>`,
      relief: `<g data-part="horn" data-pivot="11 17"><path transform="translate(1.2,1.2)" d="M6.2 4.4H9A2.4 2.4 0 0 1 11.4 6.8V15.4A2 2 0 0 0 15.4 15.4V13.2L13.5 12.4L19.2 11L18.2 16.5A4.4 4.4 0 0 1 9.2 16.5V7H6.2Z" ${RS}/><path d="M6.2 4.4H9A2.4 2.4 0 0 1 11.4 6.8V15.4A2 2 0 0 0 15.4 15.4V13.2L13.5 12.4L19.2 11L18.2 16.5A4.4 4.4 0 0 1 9.2 16.5V7H6.2Z" ${RF}/></g><circle data-part="note" cx="18.5" cy="6.2" r="1.4" ${RS}/>`,
    },
  },
  // 223. ACCORDION
  {
    name: "accordion",
    label: "Accordion",
    category: "Studio & Sound",
    motionSummary: "Pleated central bellows compress inward while bass & treble ends squeeze",
    soundSummary: "Rich reedy squeezebox accordion major chord",
    svgs: {
      outline: `<rect data-part="side-l" x="3.5" y="6" width="3.8" height="12" rx="1" ${K}/><rect data-part="side-r" x="16.7" y="6" width="3.8" height="12" rx="1" ${K}/><g data-part="bellows" data-pivot="12 12" ${K_THIN}><line x1="9.8" y1="6.8" x2="9.8" y2="17.2"/><line x1="12" y1="6.8" x2="12" y2="17.2"/><line x1="14.2" y1="6.8" x2="14.2" y2="17.2"/></g>`,
      solid: `<g fill="currentColor"><rect data-part="side-l" x="3.4" y="5.8" width="4.2" height="12.4" rx="1.2"/><rect data-part="side-r" x="16.4" y="5.8" width="4.2" height="12.4" rx="1.2"/><g data-part="bellows" data-pivot="12 12"><rect x="8.8" y="6.8" width="1.6" height="10.4" rx="0.6"/><rect x="11.2" y="6.8" width="1.6" height="10.4" rx="0.6"/><rect x="13.6" y="6.8" width="1.6" height="10.4" rx="0.6"/></g></g>`,
      duotone: `<rect data-part="side-l" x="3.5" y="6" width="3.8" height="12" rx="1" ${D}/><rect data-part="side-r" x="16.7" y="6" width="3.8" height="12" rx="1" ${D}/><g data-part="bellows" data-pivot="12 12"><rect x="7.3" y="6.8" width="9.4" height="10.4" ${D}/><line x1="10.4" y1="6.8" x2="10.4" y2="17.2" ${DK_THIN}/><line x1="13.6" y1="6.8" x2="13.6" y2="17.2" ${DK_THIN}/></g>`,
      glass: glassCompose(
        `<g data-part="bellows" data-pivot="12 12" ${GB}><rect x="8.8" y="6.8" width="1.6" height="10.4" rx="0.6"/><rect x="11.2" y="6.8" width="1.6" height="10.4" rx="0.6"/><rect x="13.6" y="6.8" width="1.6" height="10.4" rx="0.6"/></g>`,
        `<g><rect data-part="side-l" x="3.4" y="5.8" width="4.2" height="12.4" rx="1.2"/><rect data-part="side-r" x="16.4" y="5.8" width="4.2" height="12.4" rx="1.2"/></g>`
      ),
      stencil: `<g fill="currentColor"><rect data-part="side-l" x="3.4" y="5.8" width="4" height="12.4" rx="1"/><rect data-part="side-r" x="16.6" y="5.8" width="4" height="12.4" rx="1"/><g data-part="bellows" data-pivot="12 12"><rect x="8.8" y="6.8" width="1.5" height="10.4" rx="0.6"/><rect x="11.2" y="6.8" width="1.5" height="10.4" rx="0.6"/><rect x="13.6" y="6.8" width="1.5" height="10.4" rx="0.6"/></g></g>`,
      hardware: `<rect data-part="side-l" x="3.4" y="5.8" width="4.2" height="12.4" rx="1.2" ${HD}/><rect data-part="side-r" x="16.4" y="5.8" width="4.2" height="12.4" rx="1.2" ${HD}/><g data-part="bellows" data-pivot="12 12"><rect x="8.8" y="6.8" width="1.6" height="10.4" rx="0.6" ${HL}/><rect x="11.2" y="6.8" width="1.6" height="10.4" rx="0.6" ${HA}/><rect x="13.6" y="6.8" width="1.6" height="10.4" rx="0.6" ${HL}/></g>`,
      relief: `<g transform="translate(1.2,1.2)"><rect data-part="side-l" x="3.5" y="6" width="3.8" height="12" rx="1" ${RS}/><rect data-part="side-r" x="16.7" y="6" width="3.8" height="12" rx="1" ${RS}/></g><rect data-part="side-l" x="3.5" y="6" width="3.8" height="12" rx="1" ${RF}/><rect data-part="side-r" x="16.7" y="6" width="3.8" height="12" rx="1" ${RF}/><g data-part="bellows" data-pivot="12 12" ${RF_LINE}><line x1="9.8" y1="6.8" x2="9.8" y2="17.2"/><line x1="12" y1="6.8" x2="12" y2="17.2"/><line x1="14.2" y1="6.8" x2="14.2" y2="17.2"/></g>`,
    },
  },
  // 224. TAMBOURINE
  {
    name: "tambourine",
    label: "Tambourine",
    category: "Studio & Sound",
    motionSummary: "Wooden hoop shakes briskly rattling brass jingles around rim",
    soundSummary: "Bright metallic tambourine jingle shake",
    svgs: {
      outline: `<circle data-part="frame" data-pivot="12 12" cx="12" cy="12" r="7.2" ${K}/><g data-part="jingle" data-pivot="12 12" fill="currentColor"><circle cx="12" cy="4.2" r="1.2"/><circle cx="18.8" cy="8.2" r="1.2"/><circle cx="18.8" cy="15.8" r="1.2"/><circle cx="12" cy="19.8" r="1.2"/><circle cx="5.2" cy="15.8" r="1.2"/><circle cx="5.2" cy="8.2" r="1.2"/></g>`,
      solid: `<path data-part="frame" data-pivot="12 12" fill="currentColor" fill-rule="evenodd" d="M12 4.5A7.5 7.5 0 1 0 12 19.5A7.5 7.5 0 1 0 12 4.5ZM12 6.8A5.2 5.2 0 1 0 12 17.2A5.2 5.2 0 1 0 12 6.8Z"/><g data-part="jingle" data-pivot="12 12" fill="currentColor"><circle cx="12" cy="4" r="1.3"/><circle cx="19" cy="8" r="1.3"/><circle cx="19" cy="16" r="1.3"/><circle cx="12" cy="20" r="1.3"/><circle cx="5" cy="16" r="1.3"/><circle cx="5" cy="8" r="1.3"/></g>`,
      duotone: `<circle data-part="frame" data-pivot="12 12" cx="12" cy="12" r="7.2" ${D}/><g data-part="jingle" data-pivot="12 12"><circle cx="12" cy="4.2" r="1.2" ${D}/><circle cx="18.8" cy="8.2" r="1.2" ${D}/><circle cx="18.8" cy="15.8" r="1.2" ${D}/><circle cx="12" cy="19.8" r="1.2" ${D}/><circle cx="5.2" cy="15.8" r="1.2" ${D}/><circle cx="5.2" cy="8.2" r="1.2" ${D}/></g>`,
      glass: glassCompose(
        `<g data-part="jingle" data-pivot="12 12" ${GB}><circle cx="12" cy="4" r="1.4"/><circle cx="19" cy="8" r="1.4"/><circle cx="19" cy="16" r="1.4"/><circle cx="12" cy="20" r="1.4"/><circle cx="5" cy="16" r="1.4"/><circle cx="5" cy="8" r="1.4"/></g>`,
        `<circle data-part="frame" data-pivot="12 12" cx="12" cy="12" r="7.4"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="frame" data-pivot="12 12"><path d="M6.8 7A7.2 7.2 0 0 1 17.2 7L15.8 8.4A5.2 5.2 0 0 0 8.2 8.4Z"/><path d="M17.2 17A7.2 7.2 0 0 1 6.8 17L8.2 15.6A5.2 5.2 0 0 0 15.8 15.6Z"/></g><g data-part="jingle" data-pivot="12 12"><circle cx="12" cy="4" r="1.2"/><circle cx="19" cy="8" r="1.2"/><circle cx="19" cy="16" r="1.2"/><circle cx="12" cy="20" r="1.2"/><circle cx="5" cy="16" r="1.2"/><circle cx="5" cy="8" r="1.2"/></g></g>`,
      hardware: `<circle data-part="frame" data-pivot="12 12" cx="12" cy="12" r="7.4" ${HL}/><g data-part="jingle" data-pivot="12 12" ${HA}><circle cx="12" cy="4" r="1.3"/><circle cx="19" cy="8" r="1.3"/><circle cx="19" cy="16" r="1.3"/><circle cx="12" cy="20" r="1.3"/><circle cx="5" cy="16" r="1.3"/><circle cx="5" cy="8" r="1.3"/></g>`,
      relief: `<g data-part="frame" data-pivot="12 12"><circle transform="translate(1.2,1.2)" cx="12" cy="12" r="7.2" ${RS}/><circle cx="12" cy="12" r="7.2" ${RF}/></g><g data-part="jingle" data-pivot="12 12" ${RS}><circle cx="12" cy="4.2" r="1.2"/><circle cx="18.8" cy="8.2" r="1.2"/><circle cx="18.8" cy="15.8" r="1.2"/><circle cx="12" cy="19.8" r="1.2"/><circle cx="5.2" cy="15.8" r="1.2"/><circle cx="5.2" cy="8.2" r="1.2"/></g>`,
    },
  },
  // 225. TURNTABLE
  {
    name: "turntable",
    label: "Turntable",
    category: "Studio & Sound",
    motionSummary: "Direct-drive platter spins 360° as S-shaped tonearm drops onto vinyl groove",
    soundSummary: "DJ vinyl slipmat scratch + warm house bass pulse",
    svgs: {
      outline: `<rect x="3.5" y="4.5" width="17" height="15" rx="2" ${K}/><g data-part="platter" data-pivot="10 12"><circle cx="10" cy="12" r="4.5" ${K}/><circle cx="10" cy="12" r="1" fill="currentColor"/><path d="M10 9A3 3 0 0 1 13 12" ${K_THIN}/></g><path data-part="arm" data-pivot="17.8 7.5" d="M17.8 7.5V13.5L15.5 15.8" ${K}/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><circle cx="10" cy="12" r="5.2" fill="#000"/><path data-part="arm" data-pivot="17.8 7.5" d="M17.8 7.5V13.5L15.5 15.8" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/></mask></defs><rect x="3.4" y="4.4" width="17.2" height="15.2" rx="2.2" fill="currentColor" mask="url(#__GID__-m1)"/><g data-part="platter" data-pivot="10 12" fill="currentColor"><circle cx="10" cy="12" r="4.3"/><circle cx="10" cy="12" r="1.2" opacity="0.4"/></g><path data-part="arm" data-pivot="17.8 7.5" d="M17.8 7.5V13.5L15.5 15.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`,
      duotone: `<rect x="3.5" y="4.5" width="17" height="15" rx="2" ${DK}/><g data-part="platter" data-pivot="10 12"><circle cx="10" cy="12" r="4.5" ${D}/><circle cx="10" cy="12" r="1" fill="currentColor"/></g><path data-part="arm" data-pivot="17.8 7.5" d="M17.8 7.5V13.5L15.5 15.8" ${DK}/>`,
      glass: glassCompose(
        `<g data-part="platter" data-pivot="10 12" ${GB}><circle cx="10" cy="12" r="4.5"/></g><path data-part="arm" data-pivot="17.8 7.5" d="M17.8 7.5V13.5L15.5 15.8" ${GBS}/>`,
        `<rect x="3.4" y="4.4" width="17.2" height="15.2" rx="2.2"/>`
      ),
      stencil: `<g fill="currentColor"><rect x="3.5" y="4.5" width="17" height="2" rx="0.8"/><rect x="3.5" y="17.5" width="17" height="2" rx="0.8"/><g data-part="platter" data-pivot="10 12"><circle cx="10" cy="12" r="4.2"/></g><path data-part="arm" data-pivot="17.8 7.5" d="M17.8 7.5V13.5L15.5 15.8" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></g>`,
      hardware: `<rect x="3.4" y="4.4" width="17.2" height="15.2" rx="2" ${HL}/><g data-part="platter" data-pivot="10 12"><circle cx="10" cy="12" r="4.5" ${HD}/><circle cx="10" cy="12" r="1.2" ${HA}/></g><path data-part="arm" data-pivot="17.8 7.5" d="M17.8 7.5V13.5L15.5 15.8" fill="none" stroke="#ff6b35" stroke-width="1.8" stroke-linecap="round"/>`,
      relief: `<rect transform="translate(1.3,1.3)" x="3.5" y="4.5" width="17" height="15" rx="2" ${RS}/><rect x="3.5" y="4.5" width="17" height="15" rx="2" ${RF}/><g data-part="platter" data-pivot="10 12"><circle cx="10" cy="12" r="4.5" ${RF}/><circle cx="10" cy="12" r="1" ${RS}/></g><path data-part="arm" data-pivot="17.8 7.5" d="M17.8 7.5V13.5L15.5 15.8" ${RF_LINE}/>`,
    },
  },
  // 226. SYNTHESIZER
  {
    name: "synthesizer",
    label: "Synthesizer",
    category: "Studio & Sound",
    motionSummary: "Filter cutoff knob twists sharply as mini keyboard notes trigger",
    soundSummary: "Warm analog poly-synth sawtooth filter sweep chord",
    svgs: {
      outline: `<rect x="3.5" y="5.5" width="17" height="13" rx="2" ${K}/><g data-part="knob" data-pivot="16.5 8.5"><circle cx="16.5" cy="8.5" r="1.5" ${K_THIN}/><line x1="16.5" y1="8.5" x2="17.4" y2="7.6" ${K_THIN}/></g><g data-part="keys" ${K_THIN}><line x1="7.5" y1="12" x2="7.5" y2="18.5"/><line x1="12" y1="12" x2="12" y2="18.5"/><line x1="16.5" y1="12" x2="16.5" y2="18.5"/><line x1="3.5" y1="12" x2="20.5" y2="12"/></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><g data-part="keys" fill="#000"><rect x="5" y="12.2" width="2.8" height="5" rx="0.5"/><rect x="8.8" y="12.2" width="2.8" height="5" rx="0.5"/><rect x="12.6" y="12.2" width="2.8" height="5" rx="0.5"/><rect x="16.4" y="12.2" width="2.6" height="5" rx="0.5"/></g><circle data-part="knob" data-pivot="16.5 8.5" cx="16.5" cy="8.5" r="1.5" fill="#000"/></mask></defs><rect x="3.4" y="5.4" width="17.2" height="13.2" rx="2" fill="currentColor" mask="url(#__GID__-m1)"/>`,
      duotone: `<rect x="3.5" y="5.5" width="17" height="13" rx="2" ${D}/><circle data-part="knob" data-pivot="16.5 8.5" cx="16.5" cy="8.5" r="1.4" ${DK}/><g data-part="keys" ${DK_THIN}><line x1="7.5" y1="12" x2="7.5" y2="18.5"/><line x1="12" y1="12" x2="12" y2="18.5"/><line x1="16.5" y1="12" x2="16.5" y2="18.5"/><line x1="3.5" y1="12" x2="20.5" y2="12"/></g>`,
      glass: glassCompose(
        `<circle data-part="knob" data-pivot="16.5 8.5" cx="16.5" cy="8.5" r="1.5" ${GB}/>`,
        `<rect x="3.4" y="5.4" width="17.2" height="13.2" rx="2"/>`,
        `<g ${GF}><rect x="3.4" y="5.4" width="17.2" height="13.2" rx="2"/></g><g data-part="keys" ${GB}><rect x="5.4" y="12.4" width="2.4" height="4.8" rx="0.5"/><rect x="9" y="12.4" width="2.4" height="4.8" rx="0.5"/><rect x="12.6" y="12.4" width="2.4" height="4.8" rx="0.5"/><rect x="16.2" y="12.4" width="2.4" height="4.8" rx="0.5"/></g>`
      ),
      stencil: `<g fill="currentColor"><rect x="3.5" y="5.5" width="17" height="5" rx="1.2"/><circle data-part="knob" data-pivot="16.5 8" cx="16.5" cy="8" r="1.2"/><g data-part="keys"><rect x="4" y="12" width="3.4" height="6.4" rx="0.8"/><rect x="8.3" y="12" width="3.2" height="6.4" rx="0.8"/><rect x="12.5" y="12" width="3.2" height="6.4" rx="0.8"/><rect x="16.6" y="12" width="3.4" height="6.4" rx="0.8"/></g></g>`,
      hardware: `<rect x="3.4" y="5.4" width="17.2" height="13.2" rx="2" ${HD}/><circle data-part="knob" data-pivot="16.5 8.5" cx="16.5" cy="8.5" r="1.5" ${HA}/><g data-part="keys"><rect x="5" y="12" width="2.8" height="5.4" rx="0.6" ${HL}/><rect x="8.8" y="12" width="2.8" height="5.4" rx="0.6" ${HL}/><rect x="12.6" y="12" width="2.8" height="5.4" rx="0.6" ${HL}/><rect x="16.4" y="12" width="2.8" height="5.4" rx="0.6" ${HL}/></g>`,
      relief: `<rect transform="translate(1.3,1.3)" x="3.5" y="5.5" width="17" height="13" rx="2" ${RS}/><rect x="3.5" y="5.5" width="17" height="13" rx="2" ${RF}/><circle data-part="knob" data-pivot="16.5 8.5" cx="16.5" cy="8.5" r="1.4" ${RF}/><g data-part="keys" ${RF_LINE}><line x1="7.5" y1="12" x2="7.5" y2="18.5"/><line x1="12" y1="12" x2="12" y2="18.5"/><line x1="16.5" y1="12" x2="16.5" y2="18.5"/><line x1="3.5" y1="12" x2="20.5" y2="12"/></g>`,
    },
  },
  // 227. MIXER
  {
    name: "mixer",
    label: "Audio Mixer",
    category: "Studio & Sound",
    motionSummary: "Three console fader caps glide smoothly to calibrated studio mix levels",
    soundSummary: "Motorized studio console fader glide + level click",
    svgs: {
      outline: `<line x1="6.5" y1="4.5" x2="6.5" y2="19.5" ${K_THIN}/><line x1="12" y1="4.5" x2="12" y2="19.5" ${K_THIN}/><line x1="17.5" y1="4.5" x2="17.5" y2="19.5" ${K_THIN}/><rect data-part="fader-1" x="4.5" y="8" width="4" height="3" rx="0.8" ${K}/><rect data-part="fader-2" x="10" y="13" width="4" height="3" rx="0.8" ${K}/><rect data-part="fader-3" x="15.5" y="6.8" width="4" height="3" rx="0.8" ${K}/>`,
      solid: `<g fill="currentColor"><rect x="5.8" y="4.2" width="1.4" height="15.6" rx="0.7" opacity="0.45"/><rect x="11.3" y="4.2" width="1.4" height="15.6" rx="0.7" opacity="0.45"/><rect x="16.8" y="4.2" width="1.4" height="15.6" rx="0.7" opacity="0.45"/><rect data-part="fader-1" x="4.4" y="8" width="4.2" height="3.2" rx="0.9"/><rect data-part="fader-2" x="9.9" y="13" width="4.2" height="3.2" rx="0.9"/><rect data-part="fader-3" x="15.4" y="6.8" width="4.2" height="3.2" rx="0.9"/></g>`,
      duotone: `<line x1="6.5" y1="4.5" x2="6.5" y2="19.5" ${DK_THIN}/><line x1="12" y1="4.5" x2="12" y2="19.5" ${DK_THIN}/><line x1="17.5" y1="4.5" x2="17.5" y2="19.5" ${DK_THIN}/><rect data-part="fader-1" x="4.5" y="8" width="4" height="3" rx="0.8" ${D}/><rect data-part="fader-2" x="10" y="13" width="4" height="3" rx="0.8" ${D}/><rect data-part="fader-3" x="15.5" y="6.8" width="4" height="3" rx="0.8" ${D}/>`,
      glass: glassCompose(
        `<g ${GB}><rect x="5.8" y="4.2" width="1.4" height="15.6" rx="0.7"/><rect x="11.3" y="4.2" width="1.4" height="15.6" rx="0.7"/><rect x="16.8" y="4.2" width="1.4" height="15.6" rx="0.7"/></g>`,
        `<g><rect data-part="fader-1" x="4.4" y="8" width="4.2" height="3.2" rx="0.9"/><rect data-part="fader-2" x="9.9" y="13" width="4.2" height="3.2" rx="0.9"/><rect data-part="fader-3" x="15.4" y="6.8" width="4.2" height="3.2" rx="0.9"/></g>`
      ),
      stencil: `<g fill="currentColor"><rect x="5.8" y="4.2" width="1.4" height="15.6" rx="0.7"/><rect x="11.3" y="4.2" width="1.4" height="15.6" rx="0.7"/><rect x="16.8" y="4.2" width="1.4" height="15.6" rx="0.7"/><rect data-part="fader-1" x="4.4" y="8" width="4.2" height="3.2" rx="0.9"/><rect data-part="fader-2" x="9.9" y="13" width="4.2" height="3.2" rx="0.9"/><rect data-part="fader-3" x="15.4" y="6.8" width="4.2" height="3.2" rx="0.9"/></g>`,
      hardware: `<rect x="5.8" y="4.2" width="1.4" height="15.6" rx="0.7" ${HD}/><rect x="11.3" y="4.2" width="1.4" height="15.6" rx="0.7" ${HD}/><rect x="16.8" y="4.2" width="1.4" height="15.6" rx="0.7" ${HD}/><rect data-part="fader-1" x="4.4" y="8" width="4.2" height="3.2" rx="0.9" ${HL}/><rect data-part="fader-2" x="9.9" y="13" width="4.2" height="3.2" rx="0.9" ${HA}/><rect data-part="fader-3" x="15.4" y="6.8" width="4.2" height="3.2" rx="0.9" ${HL}/>`,
      relief: `<g ${RF_LINE}><line x1="6.5" y1="4.5" x2="6.5" y2="19.5"/><line x1="12" y1="4.5" x2="12" y2="19.5"/><line x1="17.5" y1="4.5" x2="17.5" y2="19.5"/></g><g transform="translate(1.1,1.1)"><rect data-part="fader-1" x="4.5" y="8" width="4" height="3" rx="0.8" ${RS}/><rect data-part="fader-2" x="10" y="13" width="4" height="3" rx="0.8" ${RS}/><rect data-part="fader-3" x="15.5" y="6.8" width="4" height="3" rx="0.8" ${RS}/></g><rect data-part="fader-1" x="4.5" y="8" width="4" height="3" rx="0.8" ${RF}/><rect data-part="fader-2" x="10" y="13" width="4" height="3" rx="0.8" ${RF}/><rect data-part="fader-3" x="15.5" y="6.8" width="4" height="3" rx="0.8" ${RF}/>`,
    },
  },
  // 228. BOOMBOX
  {
    name: "boombox",
    label: "Boombox",
    category: "Studio & Sound",
    motionSummary: "Twin speaker cones pump outward rhythmically as cassette deck bounces",
    soundSummary: "Punchy retro 808 boombox bass kick + crisp snare",
    svgs: {
      outline: `<path d="M6.5 8.5V6A1 1 0 0 1 7.5 5H16.5A1 1 0 0 1 17.5 6V8.5" ${K}/><g data-part="deck"><rect x="3" y="8.5" width="18" height="10" rx="1.8" ${K}/><circle data-part="woofer-l" data-pivot="7 13.5" cx="7" cy="13.5" r="2.2" ${K_THIN}/><circle data-part="woofer-r" data-pivot="17" cy="13.5" r="2.2" ${K_THIN}/></g>`.replace('data-pivot="17" cy', 'data-pivot="17 13.5" cx="17" cy'),
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><circle cx="7" cy="13.5" r="2.6" fill="#000"/><circle cx="17" cy="13.5" r="2.6" fill="#000"/><rect x="10.4" y="12.2" width="3.2" height="2.6" rx="0.5" fill="#000"/></mask></defs><path d="M6.5 8.6V6A1 1 0 0 1 7.5 5H16.5A1 1 0 0 1 17.5 6V8.6" ${K}/><g data-part="deck" fill="currentColor"><rect x="2.8" y="8.4" width="18.4" height="10.2" rx="2" mask="url(#__GID__-m1)"/><circle data-part="woofer-l" data-pivot="7 13.5" cx="7" cy="13.5" r="1.8"/><circle data-part="woofer-r" data-pivot="17 13.5" cx="17" cy="13.5" r="1.8"/></g>`,
      duotone: `<path d="M6.5 8.5V6A1 1 0 0 1 7.5 5H16.5A1 1 0 0 1 17.5 6V8.5" ${DK}/><g data-part="deck"><rect x="3" y="8.5" width="18" height="10" rx="1.8" ${D}/><circle data-part="woofer-l" data-pivot="7 13.5" cx="7" cy="13.5" r="2.2" ${D}/><circle data-part="woofer-r" data-pivot="17 13.5" cx="17" cy="13.5" r="2.2" ${D}/></g>`,
      glass: glassCompose(
        `<path d="M6.5 8.6V6A1 1 0 0 1 7.5 5H16.5A1 1 0 0 1 17.5 6V8.6" ${GBS}/><circle data-part="woofer-l" data-pivot="7 13.5" cx="7" cy="13.5" r="2.2" ${GB}/><circle data-part="woofer-r" data-pivot="17 13.5" cx="17" cy="13.5" r="2.2" ${GB}/>`,
        `<rect data-part="deck" x="2.8" y="8.4" width="18.4" height="10.2" rx="2"/>`
      ),
      stencil: `<path d="M6.5 8.6V6A1 1 0 0 1 7.5 5H16.5A1 1 0 0 1 17.5 6V8.6" ${K}/><g data-part="deck" fill="currentColor"><rect x="3" y="8.6" width="18" height="2.4" rx="0.8"/><rect x="10.4" y="12" width="3.2" height="6.4" rx="0.8"/><circle data-part="woofer-l" data-pivot="7 14.5" cx="7" cy="14.5" r="2.4"/><circle data-part="woofer-r" data-pivot="17 14.5" cx="17" cy="14.5" r="2.4"/></g>`,
      hardware: `<path d="M6.5 8.6V6A1 1 0 0 1 7.5 5H16.5A1 1 0 0 1 17.5 6V8.6" fill="none" stroke="#52525b" stroke-width="1.8"/><g data-part="deck"><rect x="2.8" y="8.4" width="18.4" height="10.2" rx="2" ${HL}/><circle data-part="woofer-l" data-pivot="7 13.5" cx="7" cy="13.5" r="2.4" ${HD}/><circle data-part="woofer-r" data-pivot="17 13.5" cx="17" cy="13.5" r="2.4" ${HD}/><rect x="10.6" y="12" width="2.8" height="2.8" rx="0.6" ${HA}/></g>`,
      relief: `<path d="M6.5 8.5V6A1 1 0 0 1 7.5 5H16.5A1 1 0 0 1 17.5 6V8.5" ${RF_LINE}/><g data-part="deck"><rect transform="translate(1.3,1.3)" x="3" y="8.5" width="18" height="10" rx="1.8" ${RS}/><rect x="3" y="8.5" width="18" height="10" rx="1.8" ${RF}/><circle data-part="woofer-l" data-pivot="7 13.5" cx="7" cy="13.5" r="2.2" ${RF}/><circle data-part="woofer-r" data-pivot="17 13.5" cx="17" cy="13.5" r="2.2" ${RF}/></g>`,
    },
  },
  // 229. SPOTLIGHT
  {
    name: "spotlight",
    label: "Stage Light",
    category: "Studio & Sound",
    motionSummary: "Stage par-can tilts forward flaring bright dramatic spotlight cone",
    soundSummary: "Heavy stage breaker switch clunk + warm halogen buzz",
    svgs: {
      outline: `<path data-part="lamp" data-pivot="8 9" d="M4.5 6.5L8.5 4.2L12.5 9.8L8.5 12.1Z" ${K}/><path data-part="beam" data-pivot="10.5 11" d="M11 10.8L19.8 14.2V19.8L9.6 11.8" ${K_THIN}/>`,
      solid: `<path data-part="lamp" data-pivot="8 9" fill="currentColor" d="M4.2 6.4L8.6 3.8L12.8 9.8L8.4 12.4Z"/><polygon data-part="beam" data-pivot="10.5 11" points="11.5 10.6 20 14.4 20 20 9.6 12" fill="currentColor" opacity="0.48"/>`,
      duotone: `<polygon data-part="lamp" data-pivot="8 9" points="4.5 6.5 8.5 4.2 12.5 9.8 8.5 12.1" ${DK}/><polygon data-part="beam" data-pivot="10.5 11" points="11 10.8 19.8 14.2 19.8 19.8 9.6 11.8" ${D}/>`,
      glass: glassCompose(
        `<polygon data-part="beam" data-pivot="10.5 11" points="11.5 10.6 20 14.4 20 20 9.6 12" ${GB}/>`,
        `<polygon data-part="lamp" data-pivot="8 9" points="4.2 6.4 8.6 3.8 12.8 9.8 8.4 12.4"/>`
      ),
      stencil: `<g fill="currentColor"><polygon data-part="lamp" data-pivot="8 9" points="4.2 6.4 8.6 3.8 12.8 9.8 8.4 12.4"/><g data-part="beam" data-pivot="10.5 11"><polygon points="12.2 11 19.8 14.4 19.8 16.5 11.4 12"/><polygon points="10.6 12.6 19.8 17.6 19.8 19.8 9.6 13.4"/></g></g>`,
      hardware: `<polygon data-part="beam" data-pivot="10.5 11" points="11.5 10.6 20 14.4 20 20 9.6 12" ${HA} opacity="0.72"/><polygon data-part="lamp" data-pivot="8 9" points="4.2 6.4 8.6 3.8 12.8 9.8 8.4 12.4" ${HD}/>`,
      relief: `<polygon data-part="beam" data-pivot="10.5 11" points="11 10.8 19.8 14.2 19.8 19.8 9.6 11.8" ${RS}/><g data-part="lamp" data-pivot="8 9"><polygon transform="translate(1.2,1.2)" points="4.5 6.5 8.5 4.2 12.5 9.8 8.5 12.1" ${RS}/><polygon points="4.5 6.5 8.5 4.2 12.5 9.8 8.5 12.1" ${RF}/></g>`,
    },
  },
  // 230. TUNING FORK
  {
    name: "tuning-fork",
    label: "Tuning Fork",
    category: "Studio & Sound",
    motionSummary: "Twin steel prongs vibrate swiftly emitting pure acoustic resonance",
    soundSummary: "Pure 440Hz concert-A steel tuning fork harmonic ring",
    svgs: {
      outline: `<path data-part="fork" data-pivot="12 19" d="M9 4.5V11A3 3 0 0 0 15 11V4.5M12 14V20" ${K}/><path data-part="ring" data-pivot="12 7.5" d="M5.5 7.5A6.5 6.5 0 0 1 6.5 5.2M18.5 7.5A6.5 6.5 0 0 0 17.5 5.2" ${K_THIN}/>`,
      solid: `<path data-part="fork" data-pivot="12 19" d="M9 4.5V11A3 3 0 0 0 15 11V4.5M12 14V20" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"/><path data-part="ring" data-pivot="12 7.5" d="M5.5 8A6.5 6.5 0 0 1 6.5 5M18.5 8A6.5 6.5 0 0 0 17.5 5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`,
      duotone: `<path data-part="fork" data-pivot="12 19" d="M9 4.5V11A3 3 0 0 0 15 11V4.5M12 14V20" ${DK}/><path data-part="ring" data-pivot="12 7.5" d="M5.5 7.5A6.5 6.5 0 0 1 6.5 5.2M18.5 7.5A6.5 6.5 0 0 0 17.5 5.2" ${DK_THIN}/>`,
      glass: glassCompose(
        `<path data-part="ring" data-pivot="12 7.5" d="M5.5 8A6.5 6.5 0 0 1 6.5 5M18.5 8A6.5 6.5 0 0 0 17.5 5" ${GBS}/>`,
        `<path data-part="fork" data-pivot="12 19" d="M9 4.5V11A3 3 0 0 0 15 11V4.5M12 14V20" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round"/>`,
        `<path data-part="fork" data-pivot="12 19" d="M9 4.5V11A3 3 0 0 0 15 11V4.5M12 14V20" stroke="url(#g-rim)" stroke-width="2.1" fill="none" stroke-linecap="round"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="fork" data-pivot="12 19"><rect x="8.2" y="4.2" width="1.9" height="6.8" rx="0.9"/><rect x="13.9" y="4.2" width="1.9" height="6.8" rx="0.9"/><path d="M8.5 11.8H15.5A3.5 3.5 0 0 1 12.9 14.9V20H11.1V14.9A3.5 3.5 0 0 1 8.5 11.8Z"/></g><path data-part="ring" data-pivot="12 7.5" d="M5.5 8A6.5 6.5 0 0 1 6.5 5M18.5 8A6.5 6.5 0 0 0 17.5 5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></g>`,
      hardware: `<path data-part="fork" data-pivot="12 19" d="M9 4.5V11A3 3 0 0 0 15 11V4.5M12 14V20" fill="none" stroke="#a1a1aa" stroke-width="2.1" stroke-linecap="round"/><path data-part="ring" data-pivot="12 7.5" d="M5.5 8A6.5 6.5 0 0 1 6.5 5M18.5 8A6.5 6.5 0 0 0 17.5 5" fill="none" stroke="#ff6b35" stroke-width="1.7" stroke-linecap="round"/>`,
      relief: `<g transform="translate(1.2,1.2)"><path data-part="fork" data-pivot="12 19" d="M9 4.5V11A3 3 0 0 0 15 11V4.5M12 14V20" ${RS_LINE}/></g><path data-part="fork" data-pivot="12 19" d="M9 4.5V11A3 3 0 0 0 15 11V4.5M12 14V20" ${RF_LINE}/><path data-part="ring" data-pivot="12 7.5" d="M5.5 7.5A6.5 6.5 0 0 1 6.5 5.2M18.5 7.5A6.5 6.5 0 0 0 17.5 5.2" ${RF_LINE}/>`,
    },
  },
];
