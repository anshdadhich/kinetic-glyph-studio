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
  simpleSvgs,
  HL,
  HM,
  HD,
  HA,
  RS,
  RF,
  RS_LINE,
  RF_LINE,
  fanBlades,
} from "../shared";

const STAR_P =
  "M11.1 3.28A1 1 0 0 1 12.9 3.28L15.06 7.78A1 1 0 0 0 15.83 8.34L20.77 9A1 1 0 0 1 21.33 10.72L17.72 14.16A1 1 0 0 0 17.43 15.06L18.32 19.97A1 1 0 0 1 16.87 21.03L12.48 18.66A1 1 0 0 0 11.52 18.66L7.13 21.03A1 1 0 0 1 5.68 19.97L6.57 15.06A1 1 0 0 0 6.28 14.16L2.67 10.72A1 1 0 0 1 3.23 9L8.17 8.34A1 1 0 0 0 8.94 7.78Z";

export const WORLD_ICONS: IconDef[] = [
  // 41. ROCKET (Steady body, animated roaring/flickering flames)
  {
    name: "rocket",
    label: "Rocket",
    category: "World & Energy",
    motionSummary: "Steady fuselage while thruster flames surge and flicker",
    soundSummary: "Ignition spark transient + ascending thruster roar",
    svgs: {
      outline: `<g data-part="flame" data-pivot="12 17"><path d="M9.6 17.2C9.4 19.6 10.8 21.5 12 22.4C13.2 21.5 14.6 19.6 14.4 17.2" ${K}/><path data-part="flame-core" data-pivot="12 17" d="M11 17.4L12 20.2L13 17.4" ${K_THIN}/></g><g data-part="body" ${K}><path d="M12 2.5C14.8 5.2 15.6 9.2 15.6 14V16A1 1 0 0 1 14.6 17H9.4A1 1 0 0 1 8.4 16V14C8.4 9.2 9.2 5.2 12 2.5Z"/><path d="M8.4 12.6L5.6 15.5A1 1 0 0 0 5.3 16.4V17.2A0.6 0.6 0 0 0 6.1 17.7L8.6 16.5"/><path d="M15.6 12.6L18.4 15.5A1 1 0 0 1 18.7 16.4V17.2A0.6 0.6 0 0 1 17.9 17.7L15.4 16.5"/><circle cx="12" cy="9.4" r="1.65"/></g>`,
      solid: `<g data-part="flame" data-pivot="12 17"><path fill="currentColor" d="M9.5 17.4H14.5C14.3 19.8 13.2 21.5 12 22.6C10.8 21.5 9.7 19.8 9.5 17.4Z"/><path data-part="flame-core" data-pivot="12 17" fill="currentColor" opacity="0.5" d="M10.9 17.4H13.1L12 20.3Z"/></g><g data-part="body" fill="currentColor"><path fill-rule="evenodd" d="M12 2.2C15.1 5 15.8 9.2 15.8 14V16.1A1 1 0 0 1 14.8 17.1H9.2A1 1 0 0 1 8.2 16.1V14C8.2 9.2 8.9 5 12 2.2ZM12 7.6A1.8 1.8 0 1 0 12 11.2A1.8 1.8 0 1 0 12 7.6Z"/><path d="M8.2 12.5L5.2 15.6A1 1 0 0 0 4.9 16.5V17.5A0.7 0.7 0 0 0 5.9 18.1L8.4 16.8Z"/><path d="M15.8 12.5L18.8 15.6A1 1 0 0 1 19.1 16.5V17.5A0.7 0.7 0 0 1 18.1 18.1L15.6 16.8Z"/></g>`,
      duotone: `<g data-part="flame" data-pivot="12 17"><path d="M9.6 17.2C9.4 19.6 10.8 21.5 12 22.4C13.2 21.5 14.6 19.6 14.4 17.2Z" ${D}/><polygon data-part="flame-core" data-pivot="12 17" points="10.9 17.2 12 20.4 13.1 17.2" fill="currentColor"/></g><g data-part="body"><path d="M12 2.5C14.8 5.2 15.6 9.2 15.6 14V16A1 1 0 0 1 14.6 17H9.4A1 1 0 0 1 8.4 16V14C8.4 9.2 9.2 5.2 12 2.5Z" ${D}/><path d="M8.4 12.6L5.6 15.5A1 1 0 0 0 5.3 16.4V17.2A0.6 0.6 0 0 0 6.1 17.7L8.6 16.5M15.6 12.6L18.4 15.5A1 1 0 0 1 18.7 16.4V17.2A0.6 0.6 0 0 1 17.9 17.7L15.4 16.5" ${DK}/><circle cx="12" cy="9.4" r="1.65" fill="currentColor"/></g>`,
      glass: glassCompose(
        `<g data-part="flame" data-pivot="12 17"><path d="M9.4 17.2H14.6C14.3 19.8 13.1 21.6 12 22.5C10.9 21.6 9.7 19.8 9.4 17.2Z" ${GB}/><path data-part="flame-core" data-pivot="12 17" d="M10.7 17.2H13.3L12 20.5Z" ${GH}/></g><g data-part="body"><path d="M8.5 12.4L5.2 15.8A1 1 0 0 0 5 16.6V17.6A0.7 0.7 0 0 0 6 18.2L8.6 16.8Z" ${GB}/><path d="M15.5 12.4L18.8 15.8A1 1 0 0 1 19 16.6V17.6A0.7 0.7 0 0 1 18 18.2L15.4 16.8Z" ${GB}/></g>`,
        `<path data-part="body" d="M12 2.4C15 5.2 15.8 9.2 15.8 14V16A1 1 0 0 1 14.8 17H9.2A1 1 0 0 1 8.2 16V14C8.2 9.2 9 5.2 12 2.4Z"/>`,
        `<g data-part="body" ${GF}><path d="M12 2.4C15 5.2 15.8 9.2 15.8 14V16A1 1 0 0 1 14.8 17H9.2A1 1 0 0 1 8.2 16V14C8.2 9.2 9 5.2 12 2.4Z"/></g><circle data-part="body" cx="12" cy="9.4" r="1.9" ${GB}/>`
      ),
      stencil: `<g data-part="flame" data-pivot="12 17"><path fill="currentColor" d="M9.6 17.8H14.4C14.2 19.9 13.1 21.4 12 22.4C10.9 21.4 9.8 19.9 9.6 17.8Z"/><polygon data-part="flame-core" data-pivot="12 17" points="11 17.8 13 17.8 12 20.2" fill="currentColor" opacity="0.5"/></g><g data-part="body" fill="currentColor"><path d="M12 2.4C10 4.5 9 7 8.6 9.8H10.2A1.8 1.8 0 0 1 13.8 9.8H15.4C15 7 14 4.5 12 2.4Z"/><path d="M8.5 11.4H10.5A1.8 1.8 0 0 0 13.5 11.4H15.5V16.8H8.5Z"/><path d="M8 13L5.2 16.2V17.8L8 16.7Z"/><path d="M16 13L18.8 16.2V17.8L16 16.7Z"/></g>`,
      hardware: `<g data-part="flame" data-pivot="12 17"><path d="M9.5 17.2H14.5C14.3 19.8 13.1 21.6 12 22.5C10.9 21.6 9.7 19.8 9.5 17.2Z" ${HA}/><path data-part="flame-core" data-pivot="12 17" d="M10.9 17.2H13.1L12 20.2Z" ${HL}/></g><g data-part="body"><path d="M8.5 12.6L5.2 16V17.8L8.5 16.6Z" ${HD}/><path d="M15.5 12.6L18.8 16V17.8L15.5 16.6Z" ${HD}/><path d="M12 2.4C15 5.2 15.7 9.2 15.7 14V16.8H8.3V14C8.3 9.2 9 5.2 12 2.4Z" ${HL}/><circle cx="12" cy="9.4" r="1.9" ${HD}/><circle cx="12" cy="9.4" r="0.8" ${HA}/></g>`,
      relief: `<g data-part="flame" data-pivot="12 17"><path transform="translate(1.2,1.2)" d="M9.6 17.2C9.4 19.6 10.8 21.5 12 22.4C13.2 21.5 14.6 19.6 14.4 17.2Z" ${RS}/><path d="M9.6 17.2C9.4 19.6 10.8 21.5 12 22.4C13.2 21.5 14.6 19.6 14.4 17.2Z" ${RF}/><polygon data-part="flame-core" data-pivot="12 17" points="10.9 17.2 12 20.2 13.1 17.2" ${RS}/></g><g data-part="body"><g transform="translate(1.5,1.5)" ${RS}><path d="M12 2.5C14.8 5.2 15.5 9.2 15.5 14V16.8H8.5V14C8.5 9.2 9.2 5.2 12 2.5Z"/><path d="M8.5 13L5.5 16.2V17.6L8.5 16.5Z"/><path d="M15.5 13L18.5 16.2V17.6L15.5 16.5Z"/></g><path d="M8.5 13L5.5 16.2V17.6L8.5 16.5Z" ${RF}/><path d="M15.5 13L18.5 16.2V17.6L15.5 16.5Z" ${RF}/><path d="M12 2.5C14.8 5.2 15.5 9.2 15.5 14V16.8H8.5V14C8.5 9.2 9.2 5.2 12 2.5Z" ${RF}/><circle cx="12" cy="9.4" r="1.6" ${RS}/></g>`,
    },
  },
  // 42. COMPASS
  {
    name: "compass",
    label: "Compass",
    category: "World & Energy",
    motionSummary: "Magnetic needle sweeps wide and oscillates to North",
    soundSummary: "Brass bezel detent click + magnetic ping",
    svgs: {
      outline: `<g data-part="bezel" ${K}><circle cx="12" cy="12" r="9"/><line x1="12" y1="3" x2="12" y2="4.8"/><line x1="12" y1="19.2" x2="12" y2="21"/><line x1="3" y1="12" x2="4.8" y2="12"/><line x1="19.2" y1="12" x2="21" y2="12"/></g><g data-part="needle" data-pivot="12 12" ${K}><polygon points="15.6 8.4 13.2 13.2 8.4 15.6 10.8 10.8"/></g>`,
      solid: `<g data-part="bezel" fill="currentColor"><path fill-rule="evenodd" d="M12 2.8A9.2 9.2 0 1 0 12 21.2A9.2 9.2 0 1 0 12 2.8ZM12 5A7 7 0 1 1 12 19A7 7 0 1 1 12 5Z"/></g><g data-part="needle" data-pivot="12 12" fill="currentColor"><polygon points="15.8 8.2 13.3 13.3 8.2 15.8 10.7 10.7" stroke="currentColor" stroke-width="0.6" stroke-linejoin="round"/></g>`,
      duotone: `<g data-part="bezel"><circle cx="12" cy="12" r="9" ${D}/><line x1="12" y1="3" x2="12" y2="4.8" ${DK}/><line x1="12" y1="19.2" x2="12" y2="21" ${DK}/><line x1="3" y1="12" x2="4.8" y2="12" ${DK}/><line x1="19.2" y1="12" x2="21" y2="12" ${DK}/></g><g data-part="needle" data-pivot="12 12"><polygon points="15.6 8.4 13.2 13.2 8.4 15.6 10.8 10.8" ${DK}/><polygon points="15.6 8.4 13.2 13.2 10.8 10.8" fill="currentColor"/></g>`,
      glass: glassCompose(
        `<circle data-part="bezel" data-pivot="12 12" cx="10.6" cy="10.8" r="8.6" ${GB}/>`,
        `<circle data-part="bezel" data-pivot="12 12" cx="12" cy="12" r="9"/>`,
        `<g data-part="bezel" data-pivot="12 12" ${GF}><circle cx="12" cy="12" r="9"/></g><g data-part="needle" data-pivot="12 12"><polygon points="15.8 8.2 13.2 13.2 8.2 15.8 10.8 10.8" ${GB}/><circle cx="12" cy="12" r="1.1" ${GH}/></g>`
      ),
      stencil: `<g data-part="bezel" fill="currentColor"><path d="M5.6 5.6A9 9 0 0 1 18.4 5.6L16.9 7.1A7 7 0 0 0 7.1 7.1Z"/><path d="M18.4 18.4A9 9 0 0 1 5.6 18.4L7.1 16.9A7 7 0 0 0 16.9 16.9Z"/><path d="M4.2 16.8A9 9 0 0 1 4.2 7.2L5.9 8.2A7 7 0 0 0 5.9 15.8Z"/><path d="M19.8 7.2A9 9 0 0 1 19.8 16.8L18.1 15.8A7 7 0 0 0 18.1 8.2Z"/></g><g data-part="needle" data-pivot="12 12" fill="currentColor"><polygon points="15.8 8.2 13 13 11 11"/><polygon points="8.2 15.8 10.6 11.6 12.4 13.4" opacity="0.55"/></g>`,
      hardware: `<g data-part="bezel"><circle cx="12" cy="12" r="9.2" ${HD}/><circle cx="12" cy="12" r="7.2" ${HL}/></g><g data-part="needle" data-pivot="12 12"><polygon points="15.8 8.2 13.2 13.2 10.8 10.8" ${HA}/><polygon points="8.2 15.8 13.2 13.2 10.8 10.8" ${HM}/><circle cx="12" cy="12" r="1.1" ${HD}/></g>`,
      relief: `<g data-part="bezel"><circle transform="translate(1.5,1.5)" cx="12" cy="12" r="9" ${RS}/><circle cx="12" cy="12" r="9" ${RF}/></g><g data-part="needle" data-pivot="12 12"><polygon points="15.6 8.4 13.2 13.2 8.4 15.6 10.8 10.8" ${RF}/><polygon points="15.6 8.4 13.2 13.2 10.8 10.8" ${RS}/></g>`,
    },
  },
  // 43. UMBRELLA (Matches ref scalloped canopy + J-handle)
  {
    name: "umbrella",
    label: "Umbrella",
    category: "World & Energy",
    motionSummary: "Canopy pops open wide while handle tugs down",
    soundSummary: "Nylon canopy whoosh-pop + raindrop plinks",
    svgs: {
      outline: `<g data-part="shaft" ${K}><path d="M12 12.4L12 19A2.25 2.25 0 0 1 7.5 19"/><line x1="12" y1="3.75" x2="12" y2="2.5"/></g><g data-part="canopy" data-pivot="12 12" ${K}><path d="M2.75 13A9.25 9.25 0 0 1 21.25 13A4.5 4.5 0 0 0 15.08 13A4.5 4.5 0 0 0 8.92 13A4.5 4.5 0 0 0 2.75 13Z"/><path d="M12 3.8C10 6.2 9 9.2 8.92 13" ${K_THIN}/><path d="M12 3.8C14 6.2 15 9.2 15.08 13" ${K_THIN}/></g>`,
      solid: `<g data-part="shaft" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"><path d="M12 12.4L12 19A2.25 2.25 0 0 1 7.5 19"/><line x1="12" y1="3.8" x2="12" y2="2.4"/></g><path data-part="canopy" data-pivot="12 12" fill="currentColor" d="M2.5 13.1A9.5 9.5 0 0 1 21.5 13.1A4.5 4.5 0 0 0 15.17 13.1A4.5 4.5 0 0 0 8.83 13.1A4.5 4.5 0 0 0 2.5 13.1Z"/>`,
      duotone: `<g data-part="shaft" ${DK}><path d="M12 12.4L12 19A2.25 2.25 0 0 1 7.5 19"/><line x1="12" y1="3.75" x2="12" y2="2.5"/></g><g data-part="canopy" data-pivot="12 12"><path d="M2.75 13A9.25 9.25 0 0 1 21.25 13A4.5 4.5 0 0 0 15.08 13A4.5 4.5 0 0 0 8.92 13A4.5 4.5 0 0 0 2.75 13Z" ${D}/><path d="M12 3.8C10 6.2 9 9.2 8.92 13M12 3.8C14 6.2 15 9.2 15.08 13" ${DK_THIN}/></g>`,
      glass: glassCompose(
        `<g data-part="shaft" data-pivot="12 14" ${GBS}><path d="M12 9V19A2.25 2.25 0 0 1 7.5 19"/><line x1="12" y1="4.2" x2="12" y2="2.4"/></g>`,
        `<path data-part="canopy" data-pivot="12 12" d="M2.5 13.1A9.5 9.5 0 0 1 21.5 13.1A4.5 4.5 0 0 0 15.17 13.1A4.5 4.5 0 0 0 8.83 13.1A4.5 4.5 0 0 0 2.5 13.1Z"/>`
      ),
      stencil: `<g data-part="shaft" fill="currentColor"><rect x="11.2" y="2.4" width="1.6" height="1.6" rx="0.7"/><path d="M11.2 12.8H12.8V19A2.4 2.4 0 0 1 8 19H9.6A0.8 0.8 0 0 0 11.2 19Z"/></g><g data-part="canopy" data-pivot="12 12" fill="currentColor"><path d="M2.75 13A9.25 9.25 0 0 1 9 4.3C8.5 6.8 8.3 9.7 8.3 12.6A4.4 4.4 0 0 0 2.75 13Z"/><path d="M10.1 4A9.2 9.2 0 0 1 13.9 4C14.3 6.7 14.4 9.5 14.4 12.4A4.5 4.5 0 0 0 9.6 12.4C9.6 9.5 9.7 6.7 10.1 4Z"/><path d="M15 4.3A9.25 9.25 0 0 1 21.25 13A4.4 4.4 0 0 0 15.7 12.6C15.7 9.7 15.5 6.8 15 4.3Z"/></g>`,
      hardware: `<g data-part="shaft"><path d="M12 11.5V19A2.25 2.25 0 0 1 7.5 19" fill="none" stroke="#3f3f46" stroke-width="1.8" stroke-linecap="round"/><rect x="11.3" y="2.4" width="1.4" height="2" rx="0.6" ${HA}/></g><g data-part="canopy" data-pivot="12 12"><path d="M2.5 13.1A9.5 9.5 0 0 1 21.5 13.1A4.5 4.5 0 0 0 15.17 13.1A4.5 4.5 0 0 0 8.83 13.1A4.5 4.5 0 0 0 2.5 13.1Z" ${HL}/><path d="M12 3.8C10.2 6.2 9.2 9.2 9.2 12.4A4.5 4.5 0 0 1 14.8 12.4C14.8 9.2 13.8 6.2 12 3.8Z" ${HM}/></g>`,
      relief: `<g data-part="shaft"><g transform="translate(1.5,1.5)" ${RS_LINE}><path d="M12 12.4L12 19A2.25 2.25 0 0 1 7.5 19"/><line x1="12" y1="3.75" x2="12" y2="2.5"/></g><g ${RF_LINE}><path d="M12 12.4L12 19A2.25 2.25 0 0 1 7.5 19"/><line x1="12" y1="3.75" x2="12" y2="2.5"/></g></g><g data-part="canopy" data-pivot="12 12"><path transform="translate(1.5,1.5)" d="M2.75 13A9.25 9.25 0 0 1 21.25 13A4.5 4.5 0 0 0 15.08 13A4.5 4.5 0 0 0 8.92 13A4.5 4.5 0 0 0 2.75 13Z" ${RS}/><path d="M2.75 13A9.25 9.25 0 0 1 21.25 13A4.5 4.5 0 0 0 15.08 13A4.5 4.5 0 0 0 8.92 13A4.5 4.5 0 0 0 2.75 13Z" ${RF}/></g>`,
    },
  },
  // 44. HOURGLASS
  {
    name: "hourglass",
    label: "Hourglass",
    category: "World & Energy",
    motionSummary: "Frame flips 180° while upper & lower sand mounds shift",
    soundSummary: "Wooden turn thud + cascading granular sand hiss",
    svgs: {
      outline: `<g data-part="frame" data-pivot="12 12" ${K}><line x1="6.5" y1="3.5" x2="17.5" y2="3.5"/><line x1="6.5" y1="20.5" x2="17.5" y2="20.5"/><path d="M7.5 3.5V6.8C7.5 9.2 12 10.6 12 12C12 13.4 7.5 14.8 7.5 17.2V20.5"/><path d="M16.5 3.5V6.8C16.5 9.2 12 10.6 12 12C12 13.4 16.5 14.8 16.5 17.2V20.5"/><polygon data-part="sand-top" points="9.2 7.2 14.8 7.2 12 10.6" fill="currentColor" stroke="none"/><polygon data-part="sand-bottom" points="8.8 19.6 15.2 19.6 12 16.2" fill="currentColor" stroke="none"/></g>`,
      solid: `<g data-part="frame" data-pivot="12 12" fill="currentColor"><rect x="6" y="3" width="12" height="1.8" rx="0.9"/><rect x="6" y="19.2" width="12" height="1.8" rx="0.9"/><path fill-rule="evenodd" d="M7.2 4.8H16.8V6.8C16.8 9.2 13.4 10.8 13.4 12C13.4 13.2 16.8 14.8 16.8 17.2V19.2H7.2V17.2C7.2 14.8 10.6 13.2 10.6 12C10.6 10.8 7.2 9.2 7.2 6.8ZM8.9 6.2V6.8C8.9 8.7 11.4 10.1 11.8 11.4H12.2C12.6 10.1 15.1 8.7 15.1 6.8V6.2ZM11.8 12.6C11.4 13.9 8.9 15.3 8.9 17.2V17.8H15.1V17.2C15.1 15.3 12.6 13.9 12.2 12.6Z"/><polygon data-part="sand-top" points="9.5 7 14.5 7 12 10.4"/><polygon data-part="sand-bottom" points="9.1 17.5 14.9 17.5 12 14.5"/></g>`,
      duotone: `<g data-part="frame" data-pivot="12 12"><path d="M7.5 3.5H16.5V6.8C16.5 9.2 12 10.6 12 12C12 13.4 16.5 14.8 16.5 17.2V20.5H7.5V17.2C7.5 14.8 12 13.4 12 12C12 10.6 7.5 9.2 7.5 6.8Z" ${D}/><line x1="6.5" y1="3.5" x2="17.5" y2="3.5" ${DK}/><line x1="6.5" y1="20.5" x2="17.5" y2="20.5" ${DK}/><polygon data-part="sand-top" points="9.2 7.2 14.8 7.2 12 10.6" fill="currentColor"/><polygon data-part="sand-bottom" points="8.8 19.6 15.2 19.6 12 16.2" fill="currentColor"/></g>`,
      glass: glassCompose(
        `<g data-part="frame" data-pivot="12 12"><rect x="6" y="3" width="12" height="1.9" rx="0.95" ${GB}/><rect x="6" y="19.1" width="12" height="1.9" rx="0.95" ${GB}/><polygon data-part="sand-top" points="9.2 7.2 14.8 7.2 12 10.6" ${GB}/><polygon data-part="sand-bottom" points="8.8 18.8 15.2 18.8 12 15.5" ${GB}/></g>`,
        `<path data-part="frame" data-pivot="12 12" d="M7.5 4.6H16.5V6.8C16.5 9.2 12 10.6 12 12C12 13.4 16.5 14.8 16.5 17.2V19.4H7.5V17.2C7.5 14.8 12 13.4 12 12C12 10.6 7.5 9.2 7.5 6.8Z"/>`
      ),
      stencil: `<g data-part="frame" data-pivot="12 12" fill="currentColor"><rect x="6" y="3" width="12" height="1.6" rx="0.6"/><rect x="6" y="19.4" width="12" height="1.6" rx="0.6"/><path d="M7.5 5.4H9.3V7C9.3 8.8 11.4 10.1 11.4 12C11.4 13.9 9.3 15.2 9.3 17V18.6H7.5V17C7.5 14.6 10.2 13.3 10.2 12C10.2 10.7 7.5 9.4 7.5 7Z"/><path d="M16.5 5.4H14.7V7C14.7 8.8 12.6 10.1 12.6 12C12.6 13.9 14.7 15.2 14.7 17V18.6H16.5V17C16.5 14.6 13.8 13.3 13.8 12C13.8 10.7 16.5 9.4 16.5 7Z"/><polygon data-part="sand-top" points="10.2 7 13.8 7 12 9.6"/><polygon data-part="sand-bottom" points="9.8 18.6 14.2 18.6 12 16"/></g>`,
      hardware: `<g data-part="frame" data-pivot="12 12"><path d="M7.5 4.6H16.5V6.8C16.5 9.2 12 10.6 12 12C12 13.4 16.5 14.8 16.5 17.2V19.4H7.5V17.2C7.5 14.8 12 13.4 12 12C12 10.6 7.5 9.2 7.5 6.8Z" ${HL}/><rect x="6" y="3" width="12" height="1.9" rx="0.8" ${HD}/><rect x="6" y="19.1" width="12" height="1.9" rx="0.8" ${HD}/><polygon data-part="sand-top" points="9.2 7.2 14.8 7.2 12 10.6" ${HA}/><polygon data-part="sand-bottom" points="8.8 18.8 15.2 18.8 12 15.5" ${HA}/></g>`,
      relief: `<g data-part="frame" data-pivot="12 12"><path transform="translate(1.5,1.5)" d="M7.5 3.5H16.5V6.8C16.5 9.2 12 10.6 12 12C12 13.4 16.5 14.8 16.5 17.2V20.5H7.5V17.2C7.5 14.8 12 13.4 12 12C12 10.6 7.5 9.2 7.5 6.8Z" ${RS}/><path d="M7.5 3.5H16.5V6.8C16.5 9.2 12 10.6 12 12C12 13.4 16.5 14.8 16.5 17.2V20.5H7.5V17.2C7.5 14.8 12 13.4 12 12C12 10.6 7.5 9.2 7.5 6.8Z" ${RF}/><line x1="6.5" y1="3.5" x2="17.5" y2="3.5" ${RF_LINE}/><line x1="6.5" y1="20.5" x2="17.5" y2="20.5" ${RF_LINE}/><polygon data-part="sand-top" points="9.2 7.2 14.8 7.2 12 10.6" ${RS}/><polygon data-part="sand-bottom" points="8.8 19.6 15.2 19.6 12 16.2" ${RS}/></g>`,
    },
  },
  // 45. COFFEE
  {
    name: "coffee",
    label: "Coffee",
    category: "World & Energy",
    motionSummary: "Ceramic mug lifts gently while staggered steam wisps rise",
    soundSummary: "Porcelain saucer clink + hot espresso steam hiss",
    svgs: {
      outline: `<path data-part="steam-1" d="M7.5 7.5C7 6.2 8.2 5.4 7.5 4" ${K_THIN}/><path data-part="steam-2" d="M10.5 7.2C10 5.8 11.2 4.8 10.5 3.3" ${K_THIN}/><path data-part="steam-3" d="M13.5 7.5C13 6.2 14.2 5.4 13.5 4" ${K_THIN}/><g data-part="cup" ${K}><path d="M4.8 10H15.8V15.2A4 4 0 0 1 11.8 19.2H8.8A4 4 0 0 1 4.8 15.2Z"/><path d="M15.8 11.2H17.6A2.1 2.1 0 0 1 17.6 15.4H15.8"/><line x1="4" y1="21" x2="17" y2="21"/></g>`,
      solid: `<path data-part="steam-1" d="M7.5 7.5C7 6.2 8.2 5.4 7.5 4" ${K_THIN}/><path data-part="steam-2" d="M10.5 7.2C10 5.8 11.2 4.8 10.5 3.3" ${K_THIN}/><path data-part="steam-3" d="M13.5 7.5C13 6.2 14.2 5.4 13.5 4" ${K_THIN}/><g data-part="cup" fill="currentColor"><path d="M4.6 9.8H16V15.2A4.2 4.2 0 0 1 11.8 19.4H8.8A4.2 4.2 0 0 1 4.6 15.2Z"/><path d="M15.8 11.2H17.6A2.2 2.2 0 0 1 17.6 15.6H15.8" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="3.8" y="20.2" width="13.4" height="1.6" rx="0.8"/></g>`,
      duotone: `<path data-part="steam-1" d="M7.5 7.5C7 6.2 8.2 5.4 7.5 4" ${DK_THIN}/><path data-part="steam-2" d="M10.5 7.2C10 5.8 11.2 4.8 10.5 3.3" ${DK_THIN}/><path data-part="steam-3" d="M13.5 7.5C13 6.2 14.2 5.4 13.5 4" ${DK_THIN}/><g data-part="cup"><path d="M4.8 10H15.8V15.2A4 4 0 0 1 11.8 19.2H8.8A4 4 0 0 1 4.8 15.2Z" ${D}/><path d="M15.8 11.2H17.6A2.1 2.1 0 0 1 17.6 15.4H15.8M4 21H17" ${DK}/></g>`,
      glass: glassCompose(
        `<path data-part="steam-1" d="M7.5 7.5C7 6.2 8.2 5.4 7.5 4" ${GBS}/><path data-part="steam-2" d="M10.5 7.2C10 5.8 11.2 4.8 10.5 3.3" ${GBS}/><path data-part="steam-3" d="M13.5 7.5C13 6.2 14.2 5.4 13.5 4" ${GBS}/><g data-part="cup" data-pivot="10.5 15"><path d="M14.8 11.2H17.6A2.1 2.1 0 0 1 17.6 15.4H14.8" ${GBS}/><rect x="3.8" y="20.2" width="13.4" height="1.5" rx="0.75" ${GB}/><rect x="6" y="12.2" width="8.6" height="4.5" rx="1.6" ${GB}/></g>`,
        `<path data-part="cup" data-pivot="10.5 15" d="M4.8 10H15.8V15.2A4 4 0 0 1 11.8 19.2H8.8A4 4 0 0 1 4.8 15.2Z"/>`
      ),
      stencil: `<path data-part="steam-1" d="M7.5 7.5C7 6.2 8.2 5.4 7.5 4" ${K_THIN}/><path data-part="steam-2" d="M10.5 7.2C10 5.8 11.2 4.8 10.5 3.3" ${K_THIN}/><path data-part="steam-3" d="M13.5 7.5C13 6.2 14.2 5.4 13.5 4" ${K_THIN}/><g data-part="cup" fill="currentColor"><path d="M4.8 9.8H9.5V19.2H8.8A4 4 0 0 1 4.8 15.2Z"/><path d="M11.1 9.8H15.8V15.2A4 4 0 0 1 11.8 19.2H11.1Z"/><path d="M16.6 11.2H17.6A2.1 2.1 0 0 1 17.6 15.4H16.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><rect x="3.8" y="20.2" width="13.4" height="1.5" rx="0.7"/></g>`,
      hardware: `<path data-part="steam-1" d="M7.5 7.5C7 6.2 8.2 5.4 7.5 4" fill="none" stroke="#71717a" stroke-width="1.35" stroke-linecap="round"/><path data-part="steam-2" d="M10.5 7.2C10 5.8 11.2 4.8 10.5 3.3" fill="none" stroke="#ff6b35" stroke-width="1.35" stroke-linecap="round"/><path data-part="steam-3" d="M13.5 7.5C13 6.2 14.2 5.4 13.5 4" fill="none" stroke="#71717a" stroke-width="1.35" stroke-linecap="round"/><g data-part="cup"><path d="M15.8 11.2H17.6A2.1 2.1 0 0 1 17.6 15.4H15.8" fill="none" stroke="#52525b" stroke-width="1.8"/><path d="M4.8 10H15.8V15.2A4 4 0 0 1 11.8 19.2H8.8A4 4 0 0 1 4.8 15.2Z" ${HL}/><rect x="6.2" y="11.8" width="2.4" height="1" rx="0.4" ${HA}/><rect x="3.8" y="20.2" width="13.4" height="1.6" rx="0.8" ${HD}/></g>`,
      relief: `<path data-part="steam-1" d="M7.5 7.5C7 6.2 8.2 5.4 7.5 4" ${RF_LINE}/><path data-part="steam-2" d="M10.5 7.2C10 5.8 11.2 4.8 10.5 3.3" ${RF_LINE}/><path data-part="steam-3" d="M13.5 7.5C13 6.2 14.2 5.4 13.5 4" ${RF_LINE}/><g data-part="cup"><path transform="translate(1.5,1.5)" d="M4.8 10H15.8V15.2A4 4 0 0 1 11.8 19.2H8.8A4 4 0 0 1 4.8 15.2Z" ${RS}/><path d="M15.8 11.2H17.6A2.1 2.1 0 0 1 17.6 15.4H15.8" ${RF_LINE}/><path d="M4.8 10H15.8V15.2A4 4 0 0 1 11.8 19.2H8.8A4 4 0 0 1 4.8 15.2Z" ${RF}/><line x1="4" y1="21" x2="17" y2="21" ${RF_LINE}/></g>`,
    },
  },
  // 46. FAN
  {
    name: "fan",
    label: "Desk Fan",
    category: "World & Energy",
    motionSummary: "Pitched impeller spins +540° inside circular shroud",
    soundSummary: "Electric motor hum + swept aerodynamic airflow",
    svgs: {
      outline: `<g data-part="cage" ${K}><circle cx="12" cy="10.5" r="7.5"/><line x1="12" y1="18" x2="12" y2="21"/><line x1="8" y1="21" x2="16" y2="21"/></g><g data-part="blades" data-pivot="12 10.5" ${K_THIN}>${fanBlades(12, 10.5, K_THIN)}<circle cx="12" cy="10.5" r="1.5" fill="currentColor"/></g>`,
      solid: `<g data-part="cage" fill="currentColor"><path fill-rule="evenodd" d="M12 2.8A7.7 7.7 0 1 0 12 18.2A7.7 7.7 0 1 0 12 2.8ZM12 4.5A6 6 0 1 1 12 16.5A6 6 0 1 1 12 4.5Z"/><rect x="11.1" y="17.8" width="1.8" height="3"/><rect x="7.8" y="20.2" width="8.4" height="1.6" rx="0.8"/></g><g data-part="blades" data-pivot="12 10.5" fill="currentColor">${fanBlades(12, 10.5, 'fill="currentColor"')}<circle cx="12" cy="10.5" r="1.6"/></g>`,
      duotone: `<g data-part="cage"><circle cx="12" cy="10.5" r="7.5" ${D}/><line x1="12" y1="18" x2="12" y2="21" ${DK}/><line x1="8" y1="21" x2="16" y2="21" ${DK}/></g><g data-part="blades" data-pivot="12 10.5">${fanBlades(12, 10.5, 'fill="currentColor" fill-opacity="0.7" stroke="currentColor" stroke-width="0.9"')}<circle cx="12" cy="10.5" r="1.5" fill="currentColor"/></g>`,
      glass: glassCompose(
        `<g data-part="cage" data-pivot="12 12"><rect x="11" y="16.8" width="2" height="3.8" ${GB}/><rect x="7.6" y="20" width="8.8" height="1.6" rx="0.8" ${GB}/></g><g data-part="blades" data-pivot="12 10.5">${fanBlades(12, 10.5, GB)}</g>`,
        `<circle data-part="cage" data-pivot="12 12" cx="12" cy="10.5" r="7.6"/>`,
        `<g data-part="cage" data-pivot="12 12" ${GF}><circle cx="12" cy="10.5" r="7.6"/></g><g data-part="blades" data-pivot="12 10.5">${fanBlades(12, 10.5, GH)}<circle cx="12" cy="10.5" r="1.6" ${GB}/></g>`
      ),
      stencil: `<g data-part="cage" fill="currentColor"><path d="M5.6 5.2A7.5 7.5 0 0 1 18.4 5.2L17 6.5A5.7 5.7 0 0 0 7 6.5Z"/><path d="M18.4 15.8A7.5 7.5 0 0 1 5.6 15.8L7 14.5A5.7 5.7 0 0 0 17 14.5Z"/><rect x="11.1" y="18" width="1.8" height="2.4"/><rect x="7.8" y="20.2" width="8.4" height="1.5" rx="0.7"/></g><g data-part="blades" data-pivot="12 10.5" fill="currentColor">${fanBlades(12, 10.5, 'fill="currentColor"')}<circle cx="12" cy="10.5" r="1.5"/></g>`,
      hardware: `<g data-part="cage"><rect x="11.1" y="17.8" width="1.8" height="2.6" ${HM}/><rect x="7.6" y="20" width="8.8" height="1.7" rx="0.8" ${HD}/><circle cx="12" cy="10.5" r="7.6" ${HL}/><circle cx="12" cy="10.5" r="6.1" ${HD}/></g><g data-part="blades" data-pivot="12 10.5">${fanBlades(12, 10.5, HL)}<circle cx="12" cy="10.5" r="1.6" ${HA}/></g>`,
      relief: `<g data-part="cage"><circle transform="translate(1.5,1.5)" cx="12" cy="10.5" r="7.5" ${RS}/><circle cx="12" cy="10.5" r="7.5" ${RF}/><line x1="12" y1="18" x2="12" y2="21" ${RF_LINE}/><line x1="8" y1="21" x2="16" y2="21" ${RF_LINE}/></g><g data-part="blades" data-pivot="12 10.5">${fanBlades(12, 10.5, RS)}<circle cx="12" cy="10.5" r="1.5" ${RF}/></g>`,
    },
  },
  // 47. ANCHOR (Smooth curved flukes + ring)
  {
    name: "anchor",
    label: "Anchor",
    category: "World & Energy",
    motionSummary: "Heavy anchor plunges downward and rebounds on chain",
    soundSummary: "Metallic chain link clinks + deep bottom splash thud",
    svgs: {
      outline: `<g data-part="anchor" data-pivot="12 4.8" ${K}><circle cx="12" cy="4.75" r="2"/><line x1="12" y1="6.75" x2="12" y2="20.6"/><line x1="8.25" y1="10.25" x2="15.75" y2="10.25"/><path d="M4.3 12.8L4.3 13.7A7.7 7.1 0 0 0 19.7 13.7L19.7 12.8"/><path d="M2.9 14.5L4 13A0.45 0.45 0 0 1 4.7 13L5.8 14.5"/><path d="M18.2 14.5L19.3 13A0.45 0.45 0 0 1 20 13L21.1 14.5"/></g>`,
      solid: `<g data-part="anchor" data-pivot="12 4.8" fill="currentColor"><path fill-rule="evenodd" d="M12 2.4A2.4 2.4 0 1 0 12 7.2A2.4 2.4 0 1 0 12 2.4ZM12 3.9A0.9 0.9 0 1 1 12 5.7A0.9 0.9 0 1 1 12 3.9Z"/><rect x="11" y="6.8" width="2" height="14" rx="1"/><rect x="8" y="9.3" width="8" height="1.9" rx="0.95"/><path d="M4.4 13.4A7.6 7 0 0 0 19.6 13.4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M2.9 14.7L4 12.6A0.5 0.5 0 0 1 4.9 12.6L6 14.7A0.6 0.6 0 0 1 5.4 15.5H3.5A0.6 0.6 0 0 1 2.9 14.7Z"/><path d="M18 14.7L19.1 12.6A0.5 0.5 0 0 1 20 12.6L21.1 14.7A0.6 0.6 0 0 1 20.5 15.5H18.6A0.6 0.6 0 0 1 18 14.7Z"/></g>`,
      duotone: `<g data-part="anchor" data-pivot="12 4.8"><circle cx="12" cy="4.75" r="2" ${D}/><line x1="12" y1="6.75" x2="12" y2="20.6" ${DK}/><line x1="8.25" y1="10.25" x2="15.75" y2="10.25" ${DK}/><path d="M4.4 13.4A7.6 7 0 0 0 19.6 13.4" ${DK}/><path d="M3.1 14.5L4.1 12.8A0.45 0.45 0 0 1 4.8 12.8L5.8 14.5Z" ${D}/><path d="M18.2 14.5L19.2 12.8A0.45 0.45 0 0 1 19.9 12.8L20.9 14.5Z" ${D}/></g>`,
      glass: glassCompose(
        `<g data-part="anchor" data-pivot="12 4.8"><rect x="11" y="6.8" width="2" height="14" rx="1" ${GB}/><path d="M4.4 13.4A7.6 7 0 0 0 19.6 13.4" ${GBS}/></g>`,
        `<g data-part="anchor" data-pivot="12 4.8"><circle cx="12" cy="4.75" r="2.2"/><rect x="8" y="9.3" width="8" height="1.9" rx="0.95"/><path d="M2.9 14.7L4 12.6A0.5 0.5 0 0 1 4.9 12.6L6 14.7Z"/><path d="M18 14.7L19.1 12.6A0.5 0.5 0 0 1 20 12.6L21.1 14.7Z"/></g>`,
        `<g data-part="anchor" data-pivot="12 4.8" ${GF}><circle cx="12" cy="4.75" r="2.2"/><rect x="8" y="9.3" width="8" height="1.9" rx="0.95"/><path d="M2.9 14.7L4 12.6A0.5 0.5 0 0 1 4.9 12.6L6 14.7Z"/><path d="M18 14.7L19.1 12.6A0.5 0.5 0 0 1 20 12.6L21.1 14.7Z"/></g><circle data-part="anchor" data-pivot="12 4.8" cx="12" cy="4.75" r="0.9" ${GB}/>`
      ),
      stencil: `<g data-part="anchor" data-pivot="12 4.8" fill="currentColor"><path d="M9.8 4.75A2.2 2.2 0 0 1 14.2 4.75H12.8A0.8 0.8 0 0 0 11.2 4.75Z"/><rect x="11.1" y="6.8" width="1.8" height="13.8" rx="0.8"/><rect x="8.2" y="9.3" width="7.6" height="1.7" rx="0.7"/><path d="M4.4 13.5A7.6 6.8 0 0 0 10.4 20V18.2A5.8 5 0 0 1 6.2 13.5Z"/><path d="M19.6 13.5A7.6 6.8 0 0 1 13.6 20V18.2A5.8 5 0 0 0 17.8 13.5Z"/><path d="M2.9 14.7L4 12.6A0.5 0.5 0 0 1 4.9 12.6L6 14.7Z"/><path d="M18 14.7L19.1 12.6A0.5 0.5 0 0 1 20 12.6L21.1 14.7Z"/></g>`,
      hardware: `<g data-part="anchor" data-pivot="12 4.8"><circle cx="12" cy="4.75" r="2.2" ${HA}/><rect x="11" y="6.8" width="2" height="14" rx="1" ${HD}/><rect x="8" y="9.3" width="8" height="1.9" rx="0.95" ${HL}/><path d="M4.4 13.4A7.6 7 0 0 0 19.6 13.4" fill="none" stroke="#71717a" stroke-width="2" stroke-linecap="round"/><path d="M2.9 14.7L4 12.6A0.5 0.5 0 0 1 4.9 12.6L6 14.7Z" ${HL}/><path d="M18 14.7L19.1 12.6A0.5 0.5 0 0 1 20 12.6L21.1 14.7Z" ${HL}/></g>`,
      relief: `<g data-part="anchor" data-pivot="12 4.8"><g transform="translate(1.5,1.5)" ${RS_LINE}><circle cx="12" cy="4.75" r="2"/><line x1="12" y1="6.75" x2="12" y2="20.6"/><line x1="8.25" y1="10.25" x2="15.75" y2="10.25"/><path d="M4.4 13.4A7.6 7 0 0 0 19.6 13.4"/></g><circle cx="12" cy="4.75" r="2" ${RF}/><line x1="12" y1="6.75" x2="12" y2="20.6" ${RF_LINE}/><line x1="8.25" y1="10.25" x2="15.75" y2="10.25" ${RF_LINE}/><path d="M4.4 13.4A7.6 7 0 0 0 19.6 13.4" ${RF_LINE}/><path d="M2.9 14.7L4 12.6A0.5 0.5 0 0 1 4.9 12.6L6 14.7Z" ${RF}/><path d="M18 14.7L19.1 12.6A0.5 0.5 0 0 1 20 12.6L21.1 14.7Z" ${RF}/></g>`,
    },
  },
  // 48. HEART (Smooth rounded organic lobes matching ref Heart)
  {
    name: "heart",
    label: "Heart",
    category: "World & Energy",
    motionSummary: "Double cardiac lub-dub expansion pulse",
    soundSummary: "Sub-bass double heartbeat lub-dub",
    svgs: simpleSvgs(
      `<path data-part="heart" d="M12 20.7C10.9 19.7 3.2 14.2 3.2 8.8C3.2 5.9 5.4 3.8 8.1 3.8C9.9 3.8 11.3 4.9 12 6.2C12.7 4.9 14.1 3.8 15.9 3.8C18.6 3.8 20.8 5.9 20.8 8.8C20.8 14.2 13.1 19.7 12 20.7Z"/>`
    ),
  },
  // 49. STAR (Smooth rounded 5-point Star matching optical frosted glass reference!)
  {
    name: "star",
    label: "Star",
    category: "World & Energy",
    motionSummary: "Star flares outward with a twinkling 36° spin",
    soundSummary: "Sparkling celestial chime triad",
    svgs: {
      outline: `<path data-part="star" d="${STAR_P}" ${K}/>`,
      solid: `<path data-part="star" d="${STAR_P}" fill="currentColor"/>`,
      duotone: `<path data-part="star" d="${STAR_P}" ${D}/>`,
      glass: glassCompose(
        `<path data-part="star" data-pivot="12 12" transform="translate(-2.4,-1.8) rotate(-14 12 12)" d="${STAR_P}" ${GB}/>`,
        `<path data-part="star" data-pivot="12 12" transform="translate(1.1,0.8)" d="${STAR_P}"/>`
      ),
      stencil: `<g data-part="star" fill="currentColor"><polygon points="12 2.8 14.1 8.5 12 10.6 9.9 8.5"/><polygon points="21 9.2 15.6 12.8 13.6 11.4 15.2 9.2"/><polygon points="17.5 19.6 12.5 15.8 13.4 13.6 15.8 14.2"/><polygon points="6.5 19.6 8.2 14.2 10.6 13.6 11.5 15.8"/><polygon points="3 9.2 8.8 9.2 10.4 11.4 8.4 12.8"/></g>`,
      hardware: `<g data-part="star"><path d="${STAR_P}" ${HL}/><circle cx="12" cy="12" r="1.4" ${HA}/></g>`,
      relief: `<g data-part="star"><path transform="translate(1.5,1.5)" d="${STAR_P}" ${RS}/><path d="${STAR_P}" ${RF}/></g>`,
    },
  },
  // 50. ZAP (Smooth rounded bolt + dual-plane optical glass matching ref Flash)
  {
    name: "zap",
    label: "Lightning",
    category: "World & Energy",
    motionSummary: "Lightning bolt strikes diagonally with high-voltage snap",
    soundSummary: "High-voltage electrical arc snap + crackle",
    svgs: {
      outline: `<path data-part="bolt" d="M13.6 4.99A0.8 0.8 0 0 0 12.18 4.44L6.57 11.37A1 1 0 0 0 7.35 13L9.9 13A0.8 0.8 0 0 1 10.7 13.85L10.4 19.01A0.8 0.8 0 0 0 11.82 19.56L17.43 12.63A1 1 0 0 0 16.65 11L14.1 11A0.8 0.8 0 0 1 13.3 10.15Z" ${K}/>`,
      solid: `<path data-part="bolt" d="M13.6 4.7A0.85 0.85 0 0 0 12.08 4.12L6.25 11.32A1.05 1.05 0 0 0 7.07 13.05L9.85 13.05A0.8 0.8 0 0 1 10.65 13.9L10.35 19.3A0.85 0.85 0 0 0 11.87 19.88L17.7 12.68A1.05 1.05 0 0 0 16.88 10.95L14.15 10.95A0.8 0.8 0 0 1 13.35 10.1Z" fill="currentColor"/>`,
      duotone: `<path data-part="bolt" d="M13.6 4.99A0.8 0.8 0 0 0 12.18 4.44L6.57 11.37A1 1 0 0 0 7.35 13L9.9 13A0.8 0.8 0 0 1 10.7 13.85L10.4 19.01A0.8 0.8 0 0 0 11.82 19.56L17.43 12.63A1 1 0 0 0 16.65 11L14.1 11A0.8 0.8 0 0 1 13.3 10.15Z" ${D}/>`,
      glass: glassCompose(
        `<path data-part="bolt" data-pivot="12 12" d="M14.04 10.38L14.35 5.03A1.55 1.55 0 0 0 11.6 3.96L5.99 10.9A1.75 1.75 0 0 0 7.35 13.75L10.05 13.75L10.33 18.07A1.14 1.14 0 0 0 11.47 19.15L12.11 19.15A1.14 1.14 0 0 0 13 18.72L17.77 12.79A1.15 1.15 0 0 0 17.08 10.94L14.04 10.38Z" ${GB}/>`,
        `<path data-part="bolt" data-pivot="12 12" d="M10.15 12.69Q10 12.98 9.98 13.31L9.65 18.97A1.55 1.55 0 0 0 12.4 20.04L18.01 13.1A1.75 1.75 0 0 0 16.65 10.25L13.53 10.25A1.54 1.54 0 0 0 12.56 10.59L10.56 12.19Q10.3 12.4 10.15 12.69Z"/>`
      ),
      stencil: `<g data-part="bolt" fill="currentColor"><path d="M13.6 4.7A0.85 0.85 0 0 0 12.08 4.12L6.25 11.32A1.05 1.05 0 0 0 7.07 13.05H11.4L13.2 10.3Z"/><path d="M10.4 19.3A0.85 0.85 0 0 0 11.92 19.88L17.75 12.68A1.05 1.05 0 0 0 16.93 10.95H12.6L10.8 13.7Z"/></g>`,
      hardware: `<path data-part="bolt" d="M13.6 4.7A0.85 0.85 0 0 0 12.08 4.12L6.25 11.32A1.05 1.05 0 0 0 7.07 13.05L9.85 13.05A0.8 0.8 0 0 1 10.65 13.9L10.35 19.3A0.85 0.85 0 0 0 11.87 19.88L17.7 12.68A1.05 1.05 0 0 0 16.88 10.95L14.15 10.95A0.8 0.8 0 0 1 13.35 10.1Z" ${HA}/>`,
      relief: `<g data-part="bolt"><path transform="translate(1.5,1.5)" d="M13.6 4.99A0.8 0.8 0 0 0 12.18 4.44L6.57 11.37A1 1 0 0 0 7.35 13L9.9 13A0.8 0.8 0 0 1 10.7 13.85L10.4 19.01A0.8 0.8 0 0 0 11.82 19.56L17.43 12.63A1 1 0 0 0 16.65 11L14.1 11A0.8 0.8 0 0 1 13.3 10.15Z" ${RS}/><path d="M13.6 4.99A0.8 0.8 0 0 0 12.18 4.44L6.57 11.37A1 1 0 0 0 7.35 13L9.9 13A0.8 0.8 0 0 1 10.7 13.85L10.4 19.01A0.8 0.8 0 0 0 11.82 19.56L17.43 12.63A1 1 0 0 0 16.65 11L14.1 11A0.8 0.8 0 0 1 13.3 10.15Z" ${RF}/></g>`,
    },
  },
];
