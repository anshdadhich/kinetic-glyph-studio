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

export const NATURE2_ICONS: IconDef[] = [
  // 171. TORNADO
  {
    name: "tornado",
    label: "Tornado",
    category: "Weather & Nature",
    motionSummary: "Stacked vortex funnel bands oscillate side-to-side in staggered swirl",
    soundSummary: "Swirling cyclone wind roar + whistling funnel gust",
    svgs: {
      outline: `<line data-part="ring-1" x1="4" y1="5.5" x2="20" y2="5.5" ${K}/><line data-part="ring-2" x1="6" y1="9.8" x2="18.5" y2="9.8" ${K}/><line data-part="ring-3" x1="8" y1="14.2" x2="16" y2="14.2" ${K}/><path data-part="tip" d="M10.5 18.5H13.8L12.5 20.5" ${K}/>`,
      solid: `<g fill="currentColor"><rect data-part="ring-1" x="3.8" y="4.5" width="16.4" height="2.4" rx="1.2"/><rect data-part="ring-2" x="5.8" y="8.8" width="12.8" height="2.4" rx="1.2"/><rect data-part="ring-3" x="7.8" y="13.1" width="8.4" height="2.4" rx="1.2"/><rect data-part="tip" x="10.2" y="17.4" width="4" height="2.4" rx="1.2"/></g>`,
      duotone: `<polygon points="4 5.5 20 5.5 13 20 11 20" ${D}/><line data-part="ring-1" x1="4" y1="5.5" x2="20" y2="5.5" ${DK}/><line data-part="ring-2" x1="6" y1="9.8" x2="18.5" y2="9.8" ${DK}/><line data-part="ring-3" x1="8" y1="14.2" x2="16" y2="14.2" ${DK}/><line data-part="tip" x1="10.5" y1="18.5" x2="13.8" y2="18.5" ${DK}/>`,
      glass: glassCompose(
        `<rect data-part="ring-2" x="5.8" y="8.8" width="12.8" height="2.4" rx="1.2" ${GB}/><rect data-part="tip" x="10.2" y="17.4" width="4" height="2.4" rx="1.2" ${GB}/>`,
        `<g><rect data-part="ring-1" x="3.8" y="4.5" width="16.4" height="2.4" rx="1.2"/><rect data-part="ring-3" x="7.8" y="13.1" width="8.4" height="2.4" rx="1.2"/></g>`
      ),
      stencil: `<g fill="currentColor"><g data-part="ring-1"><rect x="3.8" y="4.5" width="7.4" height="2.3" rx="1.1"/><rect x="12.8" y="4.5" width="7.4" height="2.3" rx="1.1"/></g><rect data-part="ring-2" x="5.8" y="8.8" width="12.6" height="2.3" rx="1.1"/><rect data-part="ring-3" x="7.8" y="13.1" width="8.4" height="2.3" rx="1.1"/><rect data-part="tip" x="10.4" y="17.4" width="3.6" height="2.3" rx="1.1"/></g>`,
      hardware: `<rect data-part="ring-1" x="3.8" y="4.5" width="16.4" height="2.4" rx="1.2" ${HL}/><rect data-part="ring-2" x="5.8" y="8.8" width="12.8" height="2.4" rx="1.2" ${HM}/><rect data-part="ring-3" x="7.8" y="13.1" width="8.4" height="2.4" rx="1.2" ${HL}/><rect data-part="tip" x="10.2" y="17.4" width="4" height="2.4" rx="1.2" ${HA}/>`,
      relief: `<g transform="translate(1.3,1.3)"><rect data-part="ring-1" x="3.8" y="4.5" width="16.4" height="2.4" rx="1.2" ${RS}/><rect data-part="ring-2" x="5.8" y="8.8" width="12.8" height="2.4" rx="1.2" ${RS}/><rect data-part="ring-3" x="7.8" y="13.1" width="8.4" height="2.4" rx="1.2" ${RS}/><rect data-part="tip" x="10.2" y="17.4" width="4" height="2.4" rx="1.2" ${RS}/></g><rect data-part="ring-1" x="3.8" y="4.5" width="16.4" height="2.4" rx="1.2" ${RF}/><rect data-part="ring-2" x="5.8" y="8.8" width="12.8" height="2.4" rx="1.2" ${RF}/><rect data-part="ring-3" x="7.8" y="13.1" width="8.4" height="2.4" rx="1.2" ${RF}/><rect data-part="tip" x="10.2" y="17.4" width="4" height="2.4" rx="1.2" ${RF}/>`,
    },
  },
  // 172. RAINBOW
  {
    name: "rainbow",
    label: "Rainbow",
    category: "Weather & Nature",
    motionSummary: "Three concentric spectral arcs stream across sky in luminous cascade",
    soundSummary: "Sparkling celestial harp glissando ascending chord",
    svgs: {
      outline: `<path data-part="arc-1" d="M3.5 17A8.5 8.5 0 0 1 20.5 17" ${K}/><path data-part="arc-2" d="M6.5 17A5.5 5.5 0 0 1 17.5 17" ${K}/><path data-part="arc-3" d="M9.5 17A2.5 2.5 0 0 1 14.5 17" ${K}/>`,
      solid: `<path data-part="arc-1" d="M3.5 17A8.5 8.5 0 0 1 20.5 17" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"/><path data-part="arc-2" d="M6.5 17A5.5 5.5 0 0 1 17.5 17" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" opacity="0.72"/><path data-part="arc-3" d="M9.5 17A2.5 2.5 0 0 1 14.5 17" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" opacity="0.48"/>`,
      duotone: `<path d="M3.5 17A8.5 8.5 0 0 1 20.5 17Z" ${D}/><path data-part="arc-1" d="M3.5 17A8.5 8.5 0 0 1 20.5 17" ${DK}/><path data-part="arc-2" d="M6.5 17A5.5 5.5 0 0 1 17.5 17" ${DK}/><path data-part="arc-3" d="M9.5 17A2.5 2.5 0 0 1 14.5 17" ${DK}/>`,
      glass: glassCompose(
        `<path data-part="arc-2" d="M6.5 17A5.5 5.5 0 0 1 17.5 17" ${GBS}/><path data-part="arc-3" d="M9.5 17A2.5 2.5 0 0 1 14.5 17" ${GBS}/>`,
        `<path data-part="arc-1" d="M3.5 17A8.5 8.5 0 0 1 20.5 17" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
        `<path data-part="arc-1" d="M3.5 17A8.5 8.5 0 0 1 20.5 17" stroke="url(#g-rim)" stroke-width="2.2" fill="none" stroke-linecap="round"/>`
      ),
      stencil: `<path data-part="arc-1" d="M3.5 17A8.5 8.5 0 0 1 20.5 17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="10 3"/><path data-part="arc-2" d="M6.5 17A5.5 5.5 0 0 1 17.5 17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path data-part="arc-3" d="M9.5 17A2.5 2.5 0 0 1 14.5 17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
      hardware: `<path data-part="arc-1" d="M3.5 17A8.5 8.5 0 0 1 20.5 17" fill="none" stroke="#ff6b35" stroke-width="2.1" stroke-linecap="round"/><path data-part="arc-2" d="M6.5 17A5.5 5.5 0 0 1 17.5 17" fill="none" stroke="#a1a1aa" stroke-width="2.1" stroke-linecap="round"/><path data-part="arc-3" d="M9.5 17A2.5 2.5 0 0 1 14.5 17" fill="none" stroke="#3f3f46" stroke-width="2.1" stroke-linecap="round"/>`,
      relief: `<g transform="translate(1.2,1.2)"><path data-part="arc-1" d="M3.5 17A8.5 8.5 0 0 1 20.5 17" ${RS_LINE}/><path data-part="arc-2" d="M6.5 17A5.5 5.5 0 0 1 17.5 17" ${RS_LINE}/><path data-part="arc-3" d="M9.5 17A2.5 2.5 0 0 1 14.5 17" ${RS_LINE}/></g><path data-part="arc-1" d="M3.5 17A8.5 8.5 0 0 1 20.5 17" ${RF_LINE}/><path data-part="arc-2" d="M6.5 17A5.5 5.5 0 0 1 17.5 17" ${RF_LINE}/><path data-part="arc-3" d="M9.5 17A2.5 2.5 0 0 1 14.5 17" ${RF_LINE}/>`,
    },
  },
  // 173. SUNRISE
  {
    name: "sunrise",
    label: "Sunrise",
    category: "Weather & Nature",
    motionSummary: "Golden sun disc ascends smoothly above horizon as dawn rays flare",
    soundSummary: "Warm morning major-ninth dawn swell",
    svgs: {
      outline: `<path data-part="sun" data-pivot="12 16" d="M7.5 16A4.5 4.5 0 0 1 16.5 16" ${K}/><g data-part="rays" data-pivot="12 16" ${K}><line x1="12" y1="6.5" x2="12" y2="8.5"/><line x1="6.2" y1="10.2" x2="7.6" y2="11.6"/><line x1="17.8" y1="10.2" x2="16.4" y2="11.6"/></g><line data-part="horizon" x1="3.5" y1="17.5" x2="20.5" y2="17.5" ${K}/>`,
      solid: `<path data-part="sun" data-pivot="12 16" fill="currentColor" d="M7.2 16A4.8 4.8 0 0 1 16.8 16Z"/><g data-part="rays" data-pivot="12 16" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><line x1="12" y1="6.2" x2="12" y2="8.6"/><line x1="6" y1="10" x2="7.6" y2="11.6"/><line x1="18" y1="10" x2="16.4" y2="11.6"/></g><rect data-part="horizon" x="3.4" y="16.8" width="17.2" height="1.9" rx="0.95" fill="currentColor"/>`,
      duotone: `<path data-part="sun" data-pivot="12 16" d="M7.5 16A4.5 4.5 0 0 1 16.5 16Z" ${D}/><g data-part="rays" data-pivot="12 16" ${DK}><line x1="12" y1="6.5" x2="12" y2="8.5"/><line x1="6.2" y1="10.2" x2="7.6" y2="11.6"/><line x1="17.8" y1="10.2" x2="16.4" y2="11.6"/></g><line data-part="horizon" x1="3.5" y1="17.5" x2="20.5" y2="17.5" ${DK}/>`,
      glass: glassCompose(
        `<g data-part="rays" data-pivot="12 16" ${GBS}><line x1="12" y1="6.2" x2="12" y2="8.6"/><line x1="6" y1="10" x2="7.6" y2="11.6"/><line x1="18" y1="10" x2="16.4" y2="11.6"/></g><rect data-part="horizon" x="3.4" y="16.8" width="17.2" height="1.9" rx="0.95" ${GB}/>`,
        `<path data-part="sun" data-pivot="12 16" d="M7.2 16A4.8 4.8 0 0 1 16.8 16Z"/>`
      ),
      stencil: `<g fill="currentColor"><path data-part="sun" data-pivot="12 16" d="M7.2 15.8A4.8 4.8 0 0 1 16.8 15.8Z"/><g data-part="rays" data-pivot="12 16"><rect x="11.1" y="6.2" width="1.8" height="2.8" rx="0.9"/><rect x="6.2" y="9.8" width="1.8" height="2.6" rx="0.9" transform="rotate(-45 7 11)"/><rect x="16" y="9.8" width="1.8" height="2.6" rx="0.9" transform="rotate(45 17 11)"/></g><g data-part="horizon"><rect x="3.5" y="16.8" width="7.8" height="1.8" rx="0.9"/><rect x="12.7" y="16.8" width="7.8" height="1.8" rx="0.9"/></g></g>`,
      hardware: `<g data-part="rays" data-pivot="12 16" stroke="#ff6b35" stroke-width="1.9" stroke-linecap="round"><line x1="12" y1="6.2" x2="12" y2="8.6"/><line x1="6" y1="10" x2="7.6" y2="11.6"/><line x1="18" y1="10" x2="16.4" y2="11.6"/></g><path data-part="sun" data-pivot="12 16" d="M7.2 16A4.8 4.8 0 0 1 16.8 16Z" ${HA}/><rect data-part="horizon" x="3.4" y="16.8" width="17.2" height="2" rx="1" ${HD}/>`,
      relief: `<g data-part="sun" data-pivot="12 16"><path transform="translate(1.3,1.3)" d="M7.5 16A4.5 4.5 0 0 1 16.5 16Z" ${RS}/><path d="M7.5 16A4.5 4.5 0 0 1 16.5 16Z" ${RF}/></g><g data-part="rays" data-pivot="12 16" ${RF_LINE}><line x1="12" y1="6.5" x2="12" y2="8.5"/><line x1="6.2" y1="10.2" x2="7.6" y2="11.6"/><line x1="17.8" y1="10.2" x2="16.4" y2="11.6"/></g><line data-part="horizon" x1="3.5" y1="17.5" x2="20.5" y2="17.5" ${RF_LINE}/>`,
    },
  },
  // 174. SUNSET
  {
    name: "sunset",
    label: "Sunset",
    category: "Weather & Nature",
    motionSummary: "Warm sun sinks below horizon line guided by downward twilight arrow",
    soundSummary: "Mellow descending evening twilight chord",
    svgs: {
      outline: `<path data-part="sun" data-pivot="12 16" d="M7.5 16A4.5 4.5 0 0 1 16.5 16" ${K}/><g data-part="arrow" ${K}><line x1="12" y1="5" x2="12" y2="9.2"/><polyline points="9.8 7.4 12 9.5 14.2 7.4"/></g><line data-part="horizon" x1="3.5" y1="17.5" x2="20.5" y2="17.5" ${K}/>`,
      solid: `<path data-part="sun" data-pivot="12 16" fill="currentColor" d="M7.2 16A4.8 4.8 0 0 1 16.8 16Z"/><path data-part="arrow" fill="currentColor" d="M12 10.2L9.2 7.4A0.7 0.7 0 0 1 9.7 6.2H11V4.5A1 1 0 0 1 13 4.5V6.2H14.3A0.7 0.7 0 0 1 14.8 7.4Z"/><rect data-part="horizon" x="3.4" y="16.8" width="17.2" height="1.9" rx="0.95" fill="currentColor"/>`,
      duotone: `<path data-part="sun" data-pivot="12 16" d="M7.5 16A4.5 4.5 0 0 1 16.5 16Z" ${D}/><g data-part="arrow" ${DK}><line x1="12" y1="5" x2="12" y2="9.2"/><polyline points="9.8 7.4 12 9.5 14.2 7.4"/></g><line data-part="horizon" x1="3.5" y1="17.5" x2="20.5" y2="17.5" ${DK}/>`,
      glass: glassCompose(
        `<path data-part="arrow" d="M12 10.2L9.2 7.4H11V4.5A1 1 0 0 1 13 4.5V7.4H14.8Z" ${GB}/><rect data-part="horizon" x="3.4" y="16.8" width="17.2" height="1.9" rx="0.95" ${GB}/>`,
        `<path data-part="sun" data-pivot="12 16" d="M7.2 16A4.8 4.8 0 0 1 16.8 16Z"/>`
      ),
      stencil: `<g fill="currentColor"><path data-part="sun" data-pivot="12 16" d="M7.2 15.8A4.8 4.8 0 0 1 16.8 15.8Z"/><path data-part="arrow" d="M12 10.2L9.2 7.4H11V4.6A1 1 0 0 1 13 4.6V7.4H14.8Z"/><g data-part="horizon"><rect x="3.5" y="16.8" width="7.8" height="1.8" rx="0.9"/><rect x="12.7" y="16.8" width="7.8" height="1.8" rx="0.9"/></g></g>`,
      hardware: `<path data-part="arrow" d="M12 10.2L9.2 7.4H11V4.5A1 1 0 0 1 13 4.5V7.4H14.8Z" ${HL}/><path data-part="sun" data-pivot="12 16" d="M7.2 16A4.8 4.8 0 0 1 16.8 16Z" ${HA}/><rect data-part="horizon" x="3.4" y="16.8" width="17.2" height="2" rx="1" ${HD}/>`,
      relief: `<g data-part="sun" data-pivot="12 16"><path transform="translate(1.3,1.3)" d="M7.5 16A4.5 4.5 0 0 1 16.5 16Z" ${RS}/><path d="M7.5 16A4.5 4.5 0 0 1 16.5 16Z" ${RF}/></g><g data-part="arrow" ${RF_LINE}><line x1="12" y1="5" x2="12" y2="9.2"/><polyline points="9.8 7.4 12 9.5 14.2 7.4"/></g><line data-part="horizon" x1="3.5" y1="17.5" x2="20.5" y2="17.5" ${RF_LINE}/>`,
    },
  },
  // 175. WAVES
  {
    name: "waves",
    label: "Ocean Waves",
    category: "Weather & Nature",
    motionSummary: "Twin rolling ocean crests surge forward with streaming surf motion",
    soundSummary: "Foamy ocean wave surf wash & retreat",
    svgs: {
      outline: `<path data-part="crest-1" d="M3.5 9.5Q6.2 6.8 8.8 9.5T14 9.5T20.5 9.5" ${K}/><path data-part="crest-2" d="M3.5 15.2Q6.2 12.5 8.8 15.2T14 15.2T20.5 15.2" ${K}/>`,
      solid: `<path data-part="crest-1" d="M3.5 9.5Q6.2 6.8 8.8 9.5T14 9.5T20.5 9.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path data-part="crest-2" d="M3.5 15.2Q6.2 12.5 8.8 15.2T14 15.2T20.5 15.2" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>`,
      duotone: `<path data-part="crest-1" d="M3.5 9.5Q6.2 6.8 8.8 9.5T14 9.5T20.5 9.5" ${DK}/><path data-part="crest-2" d="M3.5 15.2Q6.2 12.5 8.8 15.2T14 15.2T20.5 15.2" ${DK}/>`,
      glass: glassCompose(
        `<path data-part="crest-2" d="M3.5 15.2Q6.2 12.5 8.8 15.2T14 15.2T20.5 15.2" ${GBS}/>`,
        `<path data-part="crest-1" d="M3.5 9.5Q6.2 6.8 8.8 9.5T14 9.5T20.5 9.5" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round"/>`,
        `<path data-part="crest-1" d="M3.5 9.5Q6.2 6.8 8.8 9.5T14 9.5T20.5 9.5" stroke="url(#g-rim)" stroke-width="2.1" fill="none" stroke-linecap="round"/>`
      ),
      stencil: `<path data-part="crest-1" d="M3.5 9.5Q6.2 6.8 8.8 9.5T14 9.5T20.5 9.5" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-dasharray="6 2.5"/><path data-part="crest-2" d="M3.5 15.2Q6.2 12.5 8.8 15.2T14 15.2T20.5 15.2" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-dasharray="6 2.5"/>`,
      hardware: `<path data-part="crest-2" d="M3.5 15.2Q6.2 12.5 8.8 15.2T14 15.2T20.5 15.2" fill="none" stroke="#52525b" stroke-width="2.1" stroke-linecap="round"/><path data-part="crest-1" d="M3.5 9.5Q6.2 6.8 8.8 9.5T14 9.5T20.5 9.5" fill="none" stroke="#ff6b35" stroke-width="2.1" stroke-linecap="round"/>`,
      relief: `<g transform="translate(1.2,1.2)"><path data-part="crest-1" d="M3.5 9.5Q6.2 6.8 8.8 9.5T14 9.5T20.5 9.5" ${RS_LINE}/><path data-part="crest-2" d="M3.5 15.2Q6.2 12.5 8.8 15.2T14 15.2T20.5 15.2" ${RS_LINE}/></g><path data-part="crest-1" d="M3.5 9.5Q6.2 6.8 8.8 9.5T14 9.5T20.5 9.5" ${RF_LINE}/><path data-part="crest-2" d="M3.5 15.2Q6.2 12.5 8.8 15.2T14 15.2T20.5 15.2" ${RF_LINE}/>`,
    },
  },
  // 176. TREE
  {
    name: "tree",
    label: "Pine Tree",
    category: "Weather & Nature",
    motionSummary: "Tiered evergreen canopy sways gently in forest wind over rooted trunk",
    soundSummary: "Soft pine needle wind rustle + wood creak",
    svgs: {
      outline: `<path data-part="canopy" data-pivot="12 17" d="M12 3.8L17.2 10.5H14.5L18.5 16.5H5.5L9.5 10.5H6.8Z" ${K}/><line data-part="trunk" x1="12" y1="16.5" x2="12" y2="20.5" ${K}/>`,
      solid: `<path data-part="canopy" data-pivot="12 17" fill="currentColor" d="M12 3.4L17.4 10.4H14.5L18.8 16.6H5.2L9.5 10.4H6.6Z"/><rect data-part="trunk" x="10.8" y="16.4" width="2.4" height="4.2" rx="1" fill="currentColor"/>`,
      duotone: `<path data-part="canopy" data-pivot="12 17" d="M12 3.8L17.2 10.5H14.5L18.5 16.5H5.5L9.5 10.5H6.8Z" ${D}/><line data-part="trunk" x1="12" y1="16.5" x2="12" y2="20.5" ${DK}/>`,
      glass: glassCompose(
        `<rect data-part="trunk" x="10.8" y="16.2" width="2.4" height="4.4" rx="1" ${GB}/>`,
        `<path data-part="canopy" data-pivot="12 17" d="M12 3.4L17.4 10.4H14.5L18.8 16.6H5.2L9.5 10.4H6.6Z"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="canopy" data-pivot="12 17"><polygon points="12 3.6 17.2 10.2 6.8 10.2"/><polygon points="8.4 11.4 15.6 11.4 18.8 16.5 5.2 16.5"/></g><rect data-part="trunk" x="10.8" y="17.2" width="2.4" height="3.4" rx="0.9"/></g>`,
      hardware: `<rect data-part="trunk" x="10.8" y="16.4" width="2.4" height="4.2" rx="0.9" ${HD}/><path data-part="canopy" data-pivot="12 17" d="M12 3.4L17.4 10.4H14.5L18.8 16.6H5.2L9.5 10.4H6.6Z" ${HL}/>`,
      relief: `<g data-part="canopy" data-pivot="12 17"><path transform="translate(1.3,1.3)" d="M12 3.8L17.2 10.5H14.5L18.5 16.5H5.5L9.5 10.5H6.8Z" ${RS}/><path d="M12 3.8L17.2 10.5H14.5L18.5 16.5H5.5L9.5 10.5H6.8Z" ${RF}/></g><line data-part="trunk" x1="12" y1="16.5" x2="12" y2="20.5" ${RF_LINE}/>`,
    },
  },
  // 177. FLOWER
  {
    name: "flower",
    label: "Flower",
    category: "Weather & Nature",
    motionSummary: "Six symmetrical petals bloom open rotating gracefully around stamen core",
    soundSummary: "Delicate botanical petal bloom chime",
    svgs: {
      outline: `<g data-part="petals" data-pivot="12 12" ${K}><circle cx="12" cy="6.8" r="2.6"/><circle cx="16.5" cy="9.4" r="2.6"/><circle cx="16.5" cy="14.6" r="2.6"/><circle cx="12" cy="17.2" r="2.6"/><circle cx="7.5" cy="14.6" r="2.6"/><circle cx="7.5" cy="9.4" r="2.6"/></g><circle data-part="center" cx="12" cy="12" r="2.4" fill="currentColor"/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><circle cx="12" cy="12" r="3.4" fill="#000"/></mask></defs><g data-part="petals" data-pivot="12 12" fill="currentColor" mask="url(#__GID__-m1)"><circle cx="12" cy="6.8" r="3.1"/><circle cx="16.5" cy="9.4" r="3.1"/><circle cx="16.5" cy="14.6" r="3.1"/><circle cx="12" cy="17.2" r="3.1"/><circle cx="7.5" cy="14.6" r="3.1"/><circle cx="7.5" cy="9.4" r="3.1"/></g><circle data-part="center" cx="12" cy="12" r="2.2" fill="currentColor"/>`,
      duotone: `<g data-part="petals" data-pivot="12 12"><circle cx="12" cy="6.8" r="2.6" ${D}/><circle cx="16.5" cy="9.4" r="2.6" ${D}/><circle cx="16.5" cy="14.6" r="2.6" ${D}/><circle cx="12" cy="17.2" r="2.6" ${D}/><circle cx="7.5" cy="14.6" r="2.6" ${D}/><circle cx="7.5" cy="9.4" r="2.6" ${D}/></g><circle data-part="center" cx="12" cy="12" r="2.3" fill="currentColor"/>`,
      glass: glassCompose(
        `<g data-part="petals" data-pivot="12 12" ${GB}><circle cx="12" cy="6.8" r="2.7"/><circle cx="16.5" cy="14.6" r="2.7"/><circle cx="7.5" cy="14.6" r="2.7"/></g>`,
        `<g data-part="petals" data-pivot="12 12"><circle cx="16.5" cy="9.4" r="2.8"/><circle cx="12" cy="17.2" r="2.8"/><circle cx="7.5" cy="9.4" r="2.8"/><circle data-part="center" cx="12" cy="12" r="2.6"/></g>`
      ),
      stencil: `<g fill="currentColor"><g data-part="petals" data-pivot="12 12"><circle cx="12" cy="6.4" r="2.2"/><circle cx="16.8" cy="9.2" r="2.2"/><circle cx="16.8" cy="14.8" r="2.2"/><circle cx="12" cy="17.6" r="2.2"/><circle cx="7.2" cy="14.8" r="2.2"/><circle cx="7.2" cy="9.2" r="2.2"/></g><circle data-part="center" cx="12" cy="12" r="2.2"/></g>`,
      hardware: `<g data-part="petals" data-pivot="12 12"><circle cx="12" cy="6.8" r="2.8" ${HL}/><circle cx="16.5" cy="9.4" r="2.8" ${HL}/><circle cx="16.5" cy="14.6" r="2.8" ${HL}/><circle cx="12" cy="17.2" r="2.8" ${HL}/><circle cx="7.5" cy="14.6" r="2.8" ${HL}/><circle cx="7.5" cy="9.4" r="2.8" ${HL}/></g><circle data-part="center" cx="12" cy="12" r="2.5" ${HA}/>`,
      relief: `<g data-part="petals" data-pivot="12 12"><g transform="translate(1.2,1.2)"><circle cx="12" cy="6.8" r="2.6" ${RS}/><circle cx="16.5" cy="9.4" r="2.6" ${RS}/><circle cx="16.5" cy="14.6" r="2.6" ${RS}/><circle cx="12" cy="17.2" r="2.6" ${RS}/><circle cx="7.5" cy="14.6" r="2.6" ${RS}/><circle cx="7.5" cy="9.4" r="2.6" ${RS}/></g><circle cx="12" cy="6.8" r="2.6" ${RF}/><circle cx="16.5" cy="9.4" r="2.6" ${RF}/><circle cx="16.5" cy="14.6" r="2.6" ${RF}/><circle cx="12" cy="17.2" r="2.6" ${RF}/><circle cx="7.5" cy="14.6" r="2.6" ${RF}/><circle cx="7.5" cy="9.4" r="2.6" ${RF}/></g><circle data-part="center" cx="12" cy="12" r="2.4" ${RS}/>`,
    },
  },
  // 178. CACTUS
  {
    name: "cactus",
    label: "Cactus",
    category: "Weather & Nature",
    motionSummary: "Desert saguaro sways slightly as crown blossom pops open at apex",
    soundSummary: "Dry desert maraca shake + crisp cactus flower pop",
    svgs: {
      outline: `<g data-part="body" data-pivot="12 20" ${K}><path d="M10 20V8A2 2 0 0 1 14 8V20"/><path d="M10 14.5H7.2A1.7 1.7 0 0 1 5.5 12.8V10.5"/><path d="M14 12.5H16.8A1.7 1.7 0 0 0 18.5 10.8V8.8"/><line x1="6" y1="20" x2="18" y2="20"/></g><circle data-part="bloom" cx="12" cy="4.4" r="1.2" fill="currentColor"/>`,
      solid: `<g data-part="body" data-pivot="12 20" fill="currentColor"><rect x="9.8" y="6" width="4.4" height="14" rx="2.2"/><path d="M9.8 14.6H7.2A2.2 2.2 0 0 1 5 12.4V10.4A1.2 1.2 0 0 1 7.4 10.4V12.2H9.8Z"/><path d="M14.2 12.6H16.8A2.2 2.2 0 0 0 19 10.4V8.8A1.2 1.2 0 0 0 16.6 8.8V10.2H14.2Z"/><rect x="6" y="19" width="12" height="1.6" rx="0.8"/></g><circle data-part="bloom" cx="12" cy="4.2" r="1.4" fill="currentColor"/>`,
      duotone: `<g data-part="body" data-pivot="12 20"><path d="M10 20V8A2 2 0 0 1 14 8V20Z" ${D}/><path d="M10 14.5H7.2A1.7 1.7 0 0 1 5.5 12.8V10.5" ${DK}/><path d="M14 12.5H16.8A1.7 1.7 0 0 0 18.5 10.8V8.8" ${DK}/><line x1="6" y1="20" x2="18" y2="20" ${DK}/></g><circle data-part="bloom" cx="12" cy="4.4" r="1.2" fill="currentColor"/>`,
      glass: glassCompose(
        `<g data-part="body" data-pivot="12 20" ${GB}><path d="M9.8 14.6H7.2A2.2 2.2 0 0 1 5 12.4V10.4A1.2 1.2 0 0 1 7.4 10.4V12.2H9.8Z"/><path d="M14.2 12.6H16.8A2.2 2.2 0 0 0 19 10.4V8.8A1.2 1.2 0 0 0 16.6 8.8V10.2H14.2Z"/></g><circle data-part="bloom" cx="12" cy="4.2" r="1.4" ${GB}/>`,
        `<rect data-part="body" data-pivot="12 20" x="9.8" y="6" width="4.4" height="14" rx="2.2"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="body" data-pivot="12 20"><rect x="10" y="6" width="4" height="12.4" rx="2"/><path d="M9 14.6H7.2A2.1 2.1 0 0 1 5.1 12.5V10.4A1.1 1.1 0 0 1 7.3 10.4V12.4H9Z"/><path d="M15 12.6H16.8A2.1 2.1 0 0 0 18.9 10.5V8.8A1.1 1.1 0 0 0 16.7 8.8V10.4H15Z"/><rect x="6" y="19.2" width="12" height="1.4" rx="0.7"/></g><circle data-part="bloom" cx="12" cy="4.2" r="1.3"/></g>`,
      hardware: `<g data-part="body" data-pivot="12 20"><rect x="9.8" y="6" width="4.4" height="14" rx="2.2" ${HL}/><path d="M9.8 14.6H7.2A2.2 2.2 0 0 1 5 12.4V10.4A1.2 1.2 0 0 1 7.4 10.4V12.2H9.8Z" ${HM}/><path d="M14.2 12.6H16.8A2.2 2.2 0 0 0 19 10.4V8.8A1.2 1.2 0 0 0 16.6 8.8V10.2H14.2Z" ${HM}/><rect x="6" y="19" width="12" height="1.6" rx="0.8" ${HD}/></g><circle data-part="bloom" cx="12" cy="4.2" r="1.5" ${HA}/>`,
      relief: `<g data-part="body" data-pivot="12 20"><rect transform="translate(1.3,1.3)" x="9.8" y="6" width="4.4" height="14" rx="2.2" ${RS}/><rect x="9.8" y="6" width="4.4" height="14" rx="2.2" ${RF}/><path d="M10 14.5H7.2A1.7 1.7 0 0 1 5.5 12.8V10.5M14 12.5H16.8A1.7 1.7 0 0 0 18.5 10.8V8.8" ${RF_LINE}/></g><circle data-part="bloom" cx="12" cy="4.4" r="1.3" ${RS}/>`,
    },
  },
  // 179. SPROUT
  {
    name: "sprout",
    label: "Sprout",
    category: "Weather & Nature",
    motionSummary: "Twin young leaves unfurl outward cleanly from rising green stem",
    soundSummary: "Fresh spring botanical pop + rising upward harmonic",
    svgs: {
      outline: `<path data-part="stem" d="M12 20V11" ${K}/><path data-part="leaf-l" data-pivot="12 13" d="M12 13C7.2 13 5 10.2 5 6.8C8.4 6.8 12 9 12 13Z" ${K}/><path data-part="leaf-r" data-pivot="12 11" d="M12 11C16.8 11 19 8.2 19 4.8C15.6 4.8 12 7 12 11Z" ${K}/>`,
      solid: `<rect data-part="stem" x="11" y="10.8" width="2" height="9.4" rx="1" fill="currentColor"/><path data-part="leaf-l" data-pivot="12 13" fill="currentColor" d="M12 13.4C6.8 13.4 4.5 10.2 4.5 6.5C8.2 6.5 12 9 12 13.4Z"/><path data-part="leaf-r" data-pivot="12 11" fill="currentColor" d="M12 11.4C17.2 11.4 19.5 8.2 19.5 4.5C15.8 4.5 12 7 12 11.4Z"/>`,
      duotone: `<path data-part="stem" d="M12 20V11" ${DK}/><path data-part="leaf-l" data-pivot="12 13" d="M12 13C7.2 13 5 10.2 5 6.8C8.4 6.8 12 9 12 13Z" ${D}/><path data-part="leaf-r" data-pivot="12 11" d="M12 11C16.8 11 19 8.2 19 4.8C15.6 4.8 12 7 12 11Z" ${D}/>`,
      glass: glassCompose(
        `<rect data-part="stem" x="11" y="10.8" width="2" height="9.4" rx="1" ${GB}/><path data-part="leaf-l" data-pivot="12 13" d="M12 13.4C6.8 13.4 4.5 10.2 4.5 6.5C8.2 6.5 12 9 12 13.4Z" ${GB}/>`,
        `<path data-part="leaf-r" data-pivot="12 11" d="M12 11.4C17.2 11.4 19.5 8.2 19.5 4.5C15.8 4.5 12 7 12 11.4Z"/>`
      ),
      stencil: `<g fill="currentColor"><rect data-part="stem" x="11" y="12.2" width="2" height="8" rx="1"/><path data-part="leaf-l" data-pivot="12 13" d="M11 13.2C6.4 13.2 4.4 10.2 4.4 6.6C7.8 6.6 11 8.8 11 13.2Z"/><path data-part="leaf-r" data-pivot="12 11" d="M13 11.2C17.6 11.2 19.6 8.2 19.6 4.6C16.2 4.6 13 6.8 13 11.2Z"/></g>`,
      hardware: `<rect data-part="stem" x="11" y="10.8" width="2" height="9.4" rx="1" ${HD}/><path data-part="leaf-l" data-pivot="12 13" d="M12 13.4C6.8 13.4 4.5 10.2 4.5 6.5C8.2 6.5 12 9 12 13.4Z" ${HL}/><path data-part="leaf-r" data-pivot="12 11" d="M12 11.4C17.2 11.4 19.5 8.2 19.5 4.5C15.8 4.5 12 7 12 11.4Z" ${HA}/>`,
      relief: `<path data-part="stem" d="M12 20V11" ${RF_LINE}/><g data-part="leaf-l" data-pivot="12 13"><path transform="translate(1.2,1.2)" d="M12 13C7.2 13 5 10.2 5 6.8C8.4 6.8 12 9 12 13Z" ${RS}/><path d="M12 13C7.2 13 5 10.2 5 6.8C8.4 6.8 12 9 12 13Z" ${RF}/></g><g data-part="leaf-r" data-pivot="12 11"><path transform="translate(1.2,1.2)" d="M12 11C16.8 11 19 8.2 19 4.8C15.6 4.8 12 7 12 11Z" ${RS}/><path d="M12 11C16.8 11 19 8.2 19 4.8C15.6 4.8 12 7 12 11Z" ${RF}/></g>`,
    },
  },
  // 180. FEATHER
  {
    name: "feather",
    label: "Feather",
    category: "Weather & Nature",
    motionSummary: "Light plume drifts downward in gentle pendulum sway before settling",
    soundSummary: "Whisper-soft airy feather flutter",
    svgs: {
      outline: `<g data-part="plume" data-pivot="12 12" ${K}><path d="M19.5 4.5C15.5 4.5 10.5 7 7.5 11.5C6.5 13 6.2 15.2 6.8 16.8C8.4 17.4 10.6 17.1 12.1 16.1C16.6 13.1 19.5 8.5 19.5 4.5Z"/><line x1="4.5" y1="19.5" x2="15" y2="9" ${K_THIN}/></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><line x1="6.8" y1="17.2" x2="15.5" y2="8.5" stroke="#000" stroke-width="1.3" stroke-linecap="round"/></mask></defs><g data-part="plume" data-pivot="12 12" fill="currentColor"><path d="M19.6 4.2C15.4 4.2 10.3 6.8 7.2 11.4C6.2 13 6 15.2 6.6 17C8.4 17.6 10.7 17.3 12.3 16.3C16.9 13.2 19.6 8.4 19.6 4.2Z" mask="url(#__GID__-m1)"/><path d="M4.2 18.6L7.4 15.4L8.6 16.6L5.4 19.8A0.85 0.85 0 0 1 4.2 18.6Z"/></g>`,
      duotone: `<g data-part="plume" data-pivot="12 12"><path d="M19.5 4.5C15.5 4.5 10.5 7 7.5 11.5C6.5 13 6.2 15.2 6.8 16.8C8.4 17.4 10.6 17.1 12.1 16.1C16.6 13.1 19.5 8.5 19.5 4.5Z" ${D}/><line x1="4.5" y1="19.5" x2="15" y2="9" ${DK_THIN}/></g>`,
      glass: glassCompose(
        `<line data-part="plume" data-pivot="12 12" x1="4.5" y1="19.5" x2="15" y2="9" ${GBS}/>`,
        `<path data-part="plume" data-pivot="12 12" d="M19.6 4.2C15.4 4.2 10.3 6.8 7.2 11.4C6.2 13 6 15.2 6.6 17C8.4 17.6 10.7 17.3 12.3 16.3C16.9 13.2 19.6 8.4 19.6 4.2Z"/>`
      ),
      stencil: `<g data-part="plume" data-pivot="12 12" fill="currentColor"><path d="M19.4 4.4C15.4 4.4 10.8 6.8 7.8 11L12.6 15.8C16.8 12.8 19.4 8.4 19.4 4.4Z"/><path d="M6.8 12.2C6.1 13.6 6.1 15.4 6.8 16.8C8.2 17.5 10 17.5 11.4 16.8Z"/><path d="M4.2 18.6L6.6 16.2L7.8 17.4L5.4 19.8A0.85 0.85 0 0 1 4.2 18.6Z"/></g>`,
      hardware: `<g data-part="plume" data-pivot="12 12"><path d="M19.6 4.2C15.4 4.2 10.3 6.8 7.2 11.4C6.2 13 6 15.2 6.6 17C8.4 17.6 10.7 17.3 12.3 16.3C16.9 13.2 19.6 8.4 19.6 4.2Z" ${HL}/><line x1="4.5" y1="19.5" x2="15" y2="9" stroke="#ff6b35" stroke-width="1.6" stroke-linecap="round"/></g>`,
      relief: `<g data-part="plume" data-pivot="12 12"><path transform="translate(1.3,1.3)" d="M19.5 4.5C15.5 4.5 10.5 7 7.5 11.5C6.5 13 6.2 15.2 6.8 16.8C8.4 17.4 10.6 17.1 12.1 16.1C16.6 13.1 19.5 8.5 19.5 4.5Z" ${RS}/><path d="M19.5 4.5C15.5 4.5 10.5 7 7.5 11.5C6.5 13 6.2 15.2 6.8 16.8C8.4 17.4 10.6 17.1 12.1 16.1C16.6 13.1 19.5 8.5 19.5 4.5Z" ${RF}/><line x1="4.5" y1="19.5" x2="15" y2="9" ${RF_LINE}/></g>`,
    },
  },
];
