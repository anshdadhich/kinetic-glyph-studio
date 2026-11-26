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
    motionSummary: "Horsehair bow glides across f-hole strings while violin body resonates",
    soundSummary: "Warm expressively bowed violin string fifth",
    svgs: {
      outline: `<g data-part="body" data-pivot="12 12"><g transform="rotate(45 12 12)"><g ${K}><circle cx="12" cy="2.6" r="1.15" ${K_THIN}/><line x1="12" y1="3.8" x2="12" y2="13.2"/><path d="M12 8.9C9.8 8.9 8.5 10.2 8.9 11.8C9.2 12.7 10 13.1 10 13.9C10 14.7 7.8 15.4 7.8 17.8C7.8 20.1 9.5 21.3 12 21.3C14.5 21.3 16.2 20.1 16.2 17.8C16.2 15.4 14 14.7 14 13.9C14 13.1 14.8 12.7 15.1 11.8C15.5 10.2 14.2 8.9 12 8.9Z"/><path d="M9.9 14.8Q10.5 15.9 9.9 17" ${K_THIN}/><path d="M14.1 14.8Q13.5 15.9 14.1 17" ${K_THIN}/><line x1="12" y1="18.2" x2="12" y2="20.6" ${K_THIN}/></g><g data-part="bow" ${K_THIN}><line x1="4.6" y1="14.1" x2="19.4" y2="14.1"/><line x1="5" y1="14.1" x2="7.2" y2="14.1" stroke-width="2"/></g></g></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><g transform="rotate(45 12 12)" stroke="#000" stroke-width="0.95" stroke-linecap="round"><path d="M9.9 14.8Q10.5 15.9 9.9 17" fill="none"/><path d="M14.1 14.8Q13.5 15.9 14.1 17" fill="none"/><line x1="12" y1="18.2" x2="12" y2="20.6"/></g></mask></defs><g data-part="body" data-pivot="12 12"><g mask="url(#__GID__-m1)"><g transform="rotate(45 12 12)" fill="currentColor"><circle cx="12" cy="2.6" r="1.25"/><rect x="11.2" y="3.5" width="1.6" height="9"/><path d="M12 8.8C9.7 8.8 8.3 10.2 8.8 11.9C9.1 12.8 9.9 13.1 9.9 13.9C9.9 14.7 7.6 15.4 7.6 17.9C7.6 20.2 9.4 21.4 12 21.4C14.6 21.4 16.4 20.2 16.4 17.9C16.4 15.4 14.1 14.7 14.1 13.9C14.1 13.1 14.9 12.8 15.2 11.9C15.7 10.2 14.3 8.8 12 8.8Z"/></g></g><g transform="rotate(45 12 12)"><g data-part="bow"><line x1="4.6" y1="14.1" x2="19.4" y2="14.1" stroke="currentColor" stroke-width="1.45" stroke-linecap="round"/><rect x="4.6" y="13.2" width="2.4" height="1.8" rx="0.6" fill="currentColor"/></g></g></g>`,
      duotone: `<g data-part="body" data-pivot="12 12"><g transform="rotate(45 12 12)"><circle cx="12" cy="2.6" r="1.15" ${DK_THIN}/><line x1="12" y1="3.8" x2="12" y2="13.2" ${DK}/><path d="M12 8.9C9.8 8.9 8.5 10.2 8.9 11.8C9.2 12.7 10 13.1 10 13.9C10 14.7 7.8 15.4 7.8 17.8C7.8 20.1 9.5 21.3 12 21.3C14.5 21.3 16.2 20.1 16.2 17.8C16.2 15.4 14 14.7 14 13.9C14 13.1 14.8 12.7 15.1 11.8C15.5 10.2 14.2 8.9 12 8.9Z" ${D}/><path d="M9.9 14.8Q10.5 15.9 9.9 17" ${DK_THIN}/><path d="M14.1 14.8Q13.5 15.9 14.1 17" ${DK_THIN}/><g data-part="bow" ${DK_THIN}><line x1="4.6" y1="14.1" x2="19.4" y2="14.1"/><line x1="5" y1="14.1" x2="7.2" y2="14.1" stroke-width="2"/></g></g></g>`,
      glass: glassCompose(
        `<g data-part="body" data-pivot="12 12"><g transform="rotate(45 12 12)" ${GB}><circle cx="12" cy="2.6" r="1.25"/><rect x="11.2" y="3.5" width="1.6" height="6.2"/></g></g>`,
        `<g data-part="body" data-pivot="12 12"><g transform="rotate(45 12 12)"><path d="M12 8.8C9.7 8.8 8.3 10.2 8.8 11.9C9.1 12.8 9.9 13.1 9.9 13.9C9.9 14.7 7.6 15.4 7.6 17.9C7.6 20.2 9.4 21.4 12 21.4C14.6 21.4 16.4 20.2 16.4 17.9C16.4 15.4 14.1 14.7 14.1 13.9C14.1 13.1 14.9 12.8 15.2 11.9C15.7 10.2 14.3 8.8 12 8.8Z"/></g></g>`,
        `<g data-part="body" data-pivot="12 12"><g transform="rotate(45 12 12)"><path d="M12 8.8C9.7 8.8 8.3 10.2 8.8 11.9C9.1 12.8 9.9 13.1 9.9 13.9C9.9 14.7 7.6 15.4 7.6 17.9C7.6 20.2 9.4 21.4 12 21.4C14.6 21.4 16.4 20.2 16.4 17.9C16.4 15.4 14.1 14.7 14.1 13.9C14.1 13.1 14.9 12.8 15.2 11.9C15.7 10.2 14.3 8.8 12 8.8Z" ${GF}/><g stroke="url(#g-rim)" stroke-width="1" stroke-opacity="0.82" fill="none"><path d="M9.9 14.8Q10.5 15.9 9.9 17"/><path d="M14.1 14.8Q13.5 15.9 14.1 17"/></g><line data-part="bow" x1="4.6" y1="14.1" x2="19.4" y2="14.1" ${GBS}/></g></g>`
      ),
      stencil: `<g data-part="body" data-pivot="12 12"><g transform="rotate(45 12 12)" fill="currentColor"><circle cx="12" cy="2.6" r="1.2"/><rect x="11.2" y="4.8" width="1.6" height="3.4"/><path d="M12 9C9.8 9 8.6 10.3 9 11.9C9.3 12.7 10 13.1 10 13.9C10 14.7 7.9 15.4 7.9 17.6H16.1C16.1 15.4 14 14.7 14 13.9C14 13.1 14.7 12.7 15 11.9C15.4 10.3 14.2 9 12 9Z"/><path d="M8.3 18.8C8.9 20.3 10.3 21.2 12 21.2C13.7 21.2 15.1 20.3 15.7 18.8Z"/></g><g transform="rotate(45 12 12)"><line data-part="bow" x1="4.6" y1="14.1" x2="19.4" y2="14.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></g></g>`,
      hardware: `<g data-part="body" data-pivot="12 12"><g transform="rotate(45 12 12)"><circle cx="12" cy="2.6" r="1.2" ${HD}/><rect x="11.2" y="3.5" width="1.6" height="6" ${HD}/><path d="M12 8.8C9.7 8.8 8.3 10.2 8.8 11.9C9.1 12.8 9.9 13.1 9.9 13.9C9.9 14.7 7.6 15.4 7.6 17.9C7.6 20.2 9.4 21.4 12 21.4C14.6 21.4 16.4 20.2 16.4 17.9C16.4 15.4 14.1 14.7 14.1 13.9C14.1 13.1 14.9 12.8 15.2 11.9C15.7 10.2 14.3 8.8 12 8.8Z" ${HL}/><rect x="11.2" y="17.8" width="1.6" height="2.6" rx="0.5" ${HD}/><line data-part="bow" x1="4.6" y1="14.1" x2="19.4" y2="14.1" stroke="#ff6b35" stroke-width="1.6" stroke-linecap="round"/></g></g>`,
      relief: `<g data-part="body" data-pivot="12 12"><g transform="translate(1.1,1.1) rotate(45 12 12)"><path d="M12 8.9C9.8 8.9 8.5 10.2 8.9 11.8C9.2 12.7 10 13.1 10 13.9C10 14.7 7.8 15.4 7.8 17.8C7.8 20.1 9.5 21.3 12 21.3C14.5 21.3 16.2 20.1 16.2 17.8C16.2 15.4 14 14.7 14 13.9C14 13.1 14.8 12.7 15.1 11.8C15.5 10.2 14.2 8.9 12 8.9Z" ${RS}/></g><g transform="rotate(45 12 12)"><circle cx="12" cy="2.6" r="1.15" ${RF}/><line x1="12" y1="3.8" x2="12" y2="13.2" ${RF_LINE}/><path d="M12 8.9C9.8 8.9 8.5 10.2 8.9 11.8C9.2 12.7 10 13.1 10 13.9C10 14.7 7.8 15.4 7.8 17.8C7.8 20.1 9.5 21.3 12 21.3C14.5 21.3 16.2 20.1 16.2 17.8C16.2 15.4 14 14.7 14 13.9C14 13.1 14.8 12.7 15.1 11.8C15.5 10.2 14.2 8.9 12 8.9Z" ${RF}/><line data-part="bow" x1="4.6" y1="14.1" x2="19.4" y2="14.1" ${RF_LINE}/></g></g>`,
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
      outline: `<g data-part="horn" data-pivot="12 16" ${K}><path d="M4.6 4.4L7.2 5C8.9 5.4 9.8 6.5 10.2 8.2L12 15.6A2.1 2.1 0 0 0 16.1 15.2L15.8 12.6L14 11.2H20.2L18.4 12.6L18.1 15.6A4.2 4.2 0 0 1 9.9 16.4L8.2 8.3C7.9 7.3 7.3 6.9 6.4 6.7L4.6 6.2Z"/><line x1="9.6" y1="10.4" x2="11" y2="10" ${K_THIN}/><line x1="10.2" y1="12.8" x2="11.6" y2="12.4" ${K_THIN}/></g><circle data-part="note" cx="18.2" cy="6" r="1.45" fill="currentColor"/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><circle cx="10.4" cy="10.8" r="0.65" fill="#000"/><circle cx="11" cy="13.2" r="0.65" fill="#000"/></mask></defs><path data-part="horn" data-pivot="12 16" fill="currentColor" mask="url(#__GID__-m1)" d="M4.4 4.2L7.3 4.9C9.1 5.3 10.1 6.5 10.5 8.3L12.1 15.3A2 2 0 0 0 16 14.9L15.7 12.7L13.7 11.2A0.5 0.5 0 0 1 14 10.4H20.2A0.5 0.5 0 0 1 20.5 11.2L18.5 12.7L18.2 15.6A4.4 4.4 0 0 1 9.6 16.5L8 8.4C7.7 7.4 7.1 7 6.2 6.8L4.4 6.3Z"/><circle data-part="note" cx="18.2" cy="6" r="1.5" fill="currentColor"/>`,
      duotone: `<g data-part="horn" data-pivot="12 16"><path d="M4.6 4.4L7.2 5C8.9 5.4 9.8 6.5 10.2 8.2L12 15.6A2.1 2.1 0 0 0 16.1 15.2L15.8 12.6L14 11.2H20.2L18.4 12.6L18.1 15.6A4.2 4.2 0 0 1 9.9 16.4L8.2 8.3C7.9 7.3 7.3 6.9 6.4 6.7L4.6 6.2Z" ${D}/><line x1="9.6" y1="10.4" x2="11" y2="10" ${DK_THIN}/><line x1="10.2" y1="12.8" x2="11.6" y2="12.4" ${DK_THIN}/></g><circle data-part="note" cx="18.2" cy="6" r="1.45" fill="currentColor"/>`,
      glass: glassCompose(
        `<circle data-part="note" cx="18.2" cy="6" r="1.55" ${GB}/><path data-part="horn" data-pivot="12 16" d="M4.4 4.2L7.3 4.9C8.6 5.2 9.4 6 10 7.2L8 8.2C7.7 7.4 7.1 7 6.2 6.8L4.4 6.3Z" ${GB}/>`,
        `<path data-part="horn" data-pivot="12 16" d="M8 8.2L10.3 7.6L12.1 15.3A2 2 0 0 0 16 14.9L15.7 12.7L13.7 11.2A0.5 0.5 0 0 1 14 10.4H20.2A0.5 0.5 0 0 1 20.5 11.2L18.5 12.7L18.2 15.6A4.4 4.4 0 0 1 9.6 16.5Z"/>`,
        `<g data-part="horn" data-pivot="12 16" ${GF}><path d="M8 8.2L10.3 7.6L12.1 15.3A2 2 0 0 0 16 14.9L15.7 12.7L13.7 11.2A0.5 0.5 0 0 1 14 10.4H20.2A0.5 0.5 0 0 1 20.5 11.2L18.5 12.7L18.2 15.6A4.4 4.4 0 0 1 9.6 16.5Z"/></g><circle data-part="horn" data-pivot="12 16" cx="10.4" cy="10.8" r="0.65" ${GH}/><circle data-part="horn" data-pivot="12 16" cx="11" cy="13.2" r="0.65" ${GH}/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="horn" data-pivot="12 16"><path d="M4.4 4.2L7.3 4.9C8.9 5.3 9.8 6.3 10.3 7.8L8.1 8.6C7.8 7.6 7.3 7.1 6.4 6.9L4.4 6.4Z"/><path d="M8.3 9.6L10.7 8.9L12.1 15.3A2 2 0 0 0 16 14.9L15.7 12.7L13.8 11.2H20.3L18.5 12.7L18.2 15.6A4.4 4.4 0 0 1 9.7 16.4Z"/></g><circle data-part="note" cx="18.2" cy="6" r="1.45"/></g>`,
      hardware: `<g data-part="horn" data-pivot="12 16"><path d="M4.4 4.2L7.3 4.9C8.6 5.2 9.4 6 10 7.2L8 8.2C7.7 7.4 7.1 7 6.2 6.8L4.4 6.3Z" ${HD}/><path d="M8 8.2L10.3 7.6L12.1 15.3A2 2 0 0 0 16 14.9L15.7 12.7L13.7 11.2A0.5 0.5 0 0 1 14 10.4H20.2A0.5 0.5 0 0 1 20.5 11.2L18.5 12.7L18.2 15.6A4.4 4.4 0 0 1 9.6 16.5Z" ${HL}/><circle cx="10.4" cy="10.8" r="0.7" ${HA}/><circle cx="11" cy="13.2" r="0.7" ${HA}/></g><circle data-part="note" cx="18.2" cy="6" r="1.5" ${HA}/>`,
      relief: `<g data-part="horn" data-pivot="12 16"><path transform="translate(1.2,1.2)" d="M4.6 4.4L7.2 5C8.9 5.4 9.8 6.5 10.2 8.2L12 15.6A2.1 2.1 0 0 0 16.1 15.2L15.8 12.6L14 11.2H20.2L18.4 12.6L18.1 15.6A4.2 4.2 0 0 1 9.9 16.4L8.2 8.3C7.9 7.3 7.3 6.9 6.4 6.7L4.6 6.2Z" ${RS}/><path d="M4.6 4.4L7.2 5C8.9 5.4 9.8 6.5 10.2 8.2L12 15.6A2.1 2.1 0 0 0 16.1 15.2L15.8 12.6L14 11.2H20.2L18.4 12.6L18.1 15.6A4.2 4.2 0 0 1 9.9 16.4L8.2 8.3C7.9 7.3 7.3 6.9 6.4 6.7L4.6 6.2Z" ${RF}/></g><circle data-part="note" cx="18.2" cy="6" r="1.45" ${RS}/>`,
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
        `<g data-part="platter" data-pivot="10 12"><circle cx="10" cy="12" r="4.8" ${GB}/><circle cx="10" cy="12" r="1.2" ${GH}/></g><path data-part="arm" data-pivot="17.8 7.5" d="M17.8 7.5V13.5L15.5 15.8" ${GBS}/>`,
        `<rect x="3.2" y="4.2" width="17.6" height="15.6" rx="2.4"/>`,
        `<g ${GF}><rect x="3.2" y="4.2" width="17.6" height="15.6" rx="2.4"/></g><rect x="16.8" y="16.2" width="1.8" height="1.2" rx="0.6" ${GH}/><path data-part="platter" data-pivot="10 12" d="M10 9.1A2.9 2.9 0 0 1 12.9 12" fill="none" stroke="url(#g-rim)" stroke-width="1.15" stroke-linecap="round"/>`
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
    motionSummary: "Stage PAR-can tilts forward on U-yoke flaring wide dramatic light cone",
    soundSummary: "Heavy stage breaker switch clunk + warm halogen buzz",
    svgs: {
      outline: `<path d="M4.2 8.2L6.8 3.8L9.8 6.4" ${K_THIN}/><g data-part="lamp" data-pivot="8.2 8.2"><g transform="rotate(42 8.2 8.2)" ${K}><rect x="5.2" y="4.2" width="6" height="6.8" rx="1.6"/><path d="M4.4 11H12"/></g></g><path data-part="beam" data-pivot="11.2 11.2" d="M12.4 8.6L20.4 13.8V20.4H13.6L8.8 12.2" ${K_THIN}/>`,
      solid: `<path d="M4.2 8.2L6.8 3.8L9.8 6.4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><g data-part="lamp" data-pivot="8.2 8.2"><g transform="rotate(42 8.2 8.2)" fill="currentColor"><rect x="5" y="4" width="6.4" height="6.4" rx="1.6"/><rect x="4" y="9.8" width="8.4" height="1.8" rx="0.8"/></g></g><polygon data-part="beam" data-pivot="11.2 11.2" points="12.2 8.8 20.5 14 20.5 20.4 13.6 20.4 8.8 12.2" fill="currentColor" opacity="0.4"/>`,
      duotone: `<path d="M4.2 8.2L6.8 3.8L9.8 6.4" ${DK_THIN}/><g data-part="lamp" data-pivot="8.2 8.2"><g transform="rotate(42 8.2 8.2)"><rect x="5.2" y="4.2" width="6" height="6.8" rx="1.6" ${D}/><line x1="4.4" y1="11" x2="12" y2="11" ${DK}/></g></g><polygon data-part="beam" data-pivot="11.2 11.2" points="12.2 8.8 20.4 13.8 20.4 20.4 13.6 20.4 8.8 12.2" ${D}/>`,
      glass: glassCompose(
        `<path d="M4.2 8.2L6.8 3.8L9.8 6.4" ${GBS}/><polygon data-part="beam" data-pivot="11.2 11.2" points="12.2 8.8 20.5 14 20.5 20.4 13.6 20.4 8.8 12.2" ${GB}/>`,
        `<g data-part="lamp" data-pivot="8.2 8.2"><g transform="rotate(42 8.2 8.2)"><rect x="4.8" y="4" width="6.8" height="7.2" rx="1.7"/></g></g>`
      ),
      stencil: `<g fill="currentColor"><g data-part="lamp" data-pivot="8.2 8.2"><g transform="rotate(42 8.2 8.2)"><rect x="5.2" y="4.2" width="6" height="4.4" rx="1.2"/><rect x="4.2" y="9.8" width="8" height="1.8" rx="0.8"/></g></g><g data-part="beam" data-pivot="11.2 11.2"><polygon points="12.2 8.8 20.4 14 20.4 17 10.9 10.6"/><polygon points="9.8 11.2 20.4 18.4 20.4 20.4 14 20.4 8.8 12.4"/></g></g>`,
      hardware: `<path d="M4.2 8.2L6.8 3.8L9.8 6.4" fill="none" stroke="#52525b" stroke-width="1.6" stroke-linecap="round"/><polygon data-part="beam" data-pivot="11.2 11.2" points="12.2 8.8 20.5 14 20.5 20.4 13.6 20.4 8.8 12.2" ${HA} opacity="0.68"/><g data-part="lamp" data-pivot="8.2 8.2"><g transform="rotate(42 8.2 8.2)"><rect x="5" y="4" width="6.4" height="6.4" rx="1.6" ${HD}/><rect x="4" y="9.8" width="8.4" height="1.8" rx="0.8" ${HL}/></g></g>`,
      relief: `<path d="M4.2 8.2L6.8 3.8L9.8 6.4" ${RF_LINE}/><polygon data-part="beam" data-pivot="11.2 11.2" points="12.2 8.8 20.4 13.8 20.4 20.4 13.6 20.4 8.8 12.2" ${RS}/><g data-part="lamp" data-pivot="8.2 8.2"><g transform="translate(1.2,1.2) rotate(42 8.2 8.2)"><rect x="5.2" y="4.2" width="6" height="6.8" rx="1.6" ${RS}/></g><g transform="rotate(42 8.2 8.2)"><rect x="5.2" y="4.2" width="6" height="6.8" rx="1.6" ${RF}/><line x1="4.4" y1="11" x2="12" y2="11" ${RF_LINE}/></g></g>`,
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
