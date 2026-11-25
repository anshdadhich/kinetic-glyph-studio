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

export const MEDIA2_ICONS: IconDef[] = [
  // 141. STOP
  {
    name: "stop",
    label: "Stop",
    category: "Media & Audio",
    motionSummary: "Tactile deck square button presses inward cleanly and rebounds",
    soundSummary: "Solid cassette deck mechanical stop-key clack",
    svgs: {
      outline: `<rect data-part="btn" x="5.5" y="5.5" width="13" height="13" rx="2.6" ${K}/>`,
      solid: `<rect data-part="btn" x="5.2" y="5.2" width="13.6" height="13.6" rx="2.8" fill="currentColor"/>`,
      duotone: `<rect data-part="btn" x="5.5" y="5.5" width="13" height="13" rx="2.6" ${D}/>`,
      glass: glassCompose(
        `<rect data-part="btn" x="4.5" y="4.5" width="12.5" height="12.5" rx="2.6" ${GB}/>`,
        `<rect data-part="btn" x="6.5" y="6.5" width="12.5" height="12.5" rx="2.6"/>`
      ),
      stencil: `<g data-part="btn" fill="currentColor"><rect x="5.4" y="5.4" width="5.8" height="5.8" rx="1.3"/><rect x="12.8" y="5.4" width="5.8" height="5.8" rx="1.3"/><rect x="5.4" y="12.8" width="5.8" height="5.8" rx="1.3"/><rect x="12.8" y="12.8" width="5.8" height="5.8" rx="1.3"/></g>`,
      hardware: `<rect x="4" y="4" width="16" height="16" rx="3.4" ${HD}/><g data-part="btn"><rect x="6.2" y="6.2" width="11.6" height="11.6" rx="2.2" ${HL}/><circle cx="12" cy="12" r="1.4" ${HA}/></g>`,
      relief: `<g data-part="btn"><rect transform="translate(1.4,1.4)" x="5.5" y="5.5" width="13" height="13" rx="2.6" ${RS}/><rect x="5.5" y="5.5" width="13" height="13" rx="2.6" ${RF}/></g>`,
    },
  },
  // 142. REWIND
  {
    name: "rewind",
    label: "Rewind",
    category: "Media & Audio",
    motionSummary: "Twin left-facing play wedges dart backward in tight double pulse",
    soundSummary: "High-speed reverse tape scrub zip",
    svgs: {
      outline: `<polygon data-part="tri-l" points="11.5 6.5 4.2 12 11.5 17.5" ${K}/><polygon data-part="tri-r" points="19.8 6.5 12.5 12 19.8 17.5" ${K}/>`,
      solid: `<g fill="currentColor"><path data-part="tri-l" d="M11.6 6.7A1 1 0 0 0 10 5.9L4.2 11.2A1 1 0 0 0 4.2 12.8L10 18.1A1 1 0 0 0 11.6 17.3Z"/><path data-part="tri-r" d="M19.8 6.7A1 1 0 0 0 18.2 5.9L12.4 11.2A1 1 0 0 0 12.4 12.8L18.2 18.1A1 1 0 0 0 19.8 17.3Z"/></g>`,
      duotone: `<polygon data-part="tri-l" points="11.5 6.5 4.2 12 11.5 17.5" ${D}/><polygon data-part="tri-r" points="19.8 6.5 12.5 12 19.8 17.5" ${D}/>`,
      glass: glassCompose(
        `<polygon data-part="tri-r" points="19.8 6.5 12.4 12 19.8 17.5" ${GB}/>`,
        `<polygon data-part="tri-l" points="11.6 6.5 4.2 12 11.6 17.5"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="tri-l"><polygon points="11.4 6.5 4.5 11.4 11.4 11.4"/><polygon points="11.4 12.6 4.5 12.6 11.4 17.5"/></g><g data-part="tri-r"><polygon points="19.6 6.5 12.7 11.4 19.6 11.4"/><polygon points="19.6 12.6 12.7 12.6 19.6 17.5"/></g></g>`,
      hardware: `<polygon data-part="tri-r" points="19.8 6.5 12.4 12 19.8 17.5" ${HM}/><polygon data-part="tri-l" points="11.6 6.5 4.2 12 11.6 17.5" ${HA}/>`,
      relief: `<g transform="translate(1.3,1.3)"><polygon data-part="tri-l" points="11.5 6.5 4.2 12 11.5 17.5" ${RS}/><polygon data-part="tri-r" points="19.8 6.5 12.5 12 19.8 17.5" ${RS}/></g><polygon data-part="tri-l" points="11.5 6.5 4.2 12 11.5 17.5" ${RF}/><polygon data-part="tri-r" points="19.8 6.5 12.5 12 19.8 17.5" ${RF}/>`,
    },
  },
  // 143. FAST FORWARD
  {
    name: "fast-forward",
    label: "Fast Forward",
    category: "Media & Audio",
    motionSummary: "Twin right-facing wedges surge forward in staggered boost",
    soundSummary: "High-speed forward tape scrub zip",
    svgs: {
      outline: `<polygon data-part="tri-l" points="4.2 6.5 11.5 12 4.2 17.5" ${K}/><polygon data-part="tri-r" points="12.5 6.5 19.8 12 12.5 17.5" ${K}/>`,
      solid: `<g fill="currentColor"><path data-part="tri-l" d="M4.2 6.7A1 1 0 0 1 5.8 5.9L11.6 11.2A1 1 0 0 1 11.6 12.8L5.8 18.1A1 1 0 0 1 4.2 17.3Z"/><path data-part="tri-r" d="M12.4 6.7A1 1 0 0 1 14 5.9L19.8 11.2A1 1 0 0 1 19.8 12.8L14 18.1A1 1 0 0 1 12.4 17.3Z"/></g>`,
      duotone: `<polygon data-part="tri-l" points="4.2 6.5 11.5 12 4.2 17.5" ${D}/><polygon data-part="tri-r" points="12.5 6.5 19.8 12 12.5 17.5" ${D}/>`,
      glass: glassCompose(
        `<polygon data-part="tri-l" points="4.2 6.5 11.6 12 4.2 17.5" ${GB}/>`,
        `<polygon data-part="tri-r" points="12.4 6.5 19.8 12 12.4 17.5"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="tri-l"><polygon points="4.4 6.5 11.3 11.4 4.4 11.4"/><polygon points="4.4 12.6 11.3 12.6 4.4 17.5"/></g><g data-part="tri-r"><polygon points="12.6 6.5 19.5 11.4 12.6 11.4"/><polygon points="12.6 12.6 19.5 12.6 12.6 17.5"/></g></g>`,
      hardware: `<polygon data-part="tri-l" points="4.2 6.5 11.6 12 4.2 17.5" ${HM}/><polygon data-part="tri-r" points="12.4 6.5 19.8 12 12.4 17.5" ${HA}/>`,
      relief: `<g transform="translate(1.3,1.3)"><polygon data-part="tri-l" points="4.2 6.5 11.5 12 4.2 17.5" ${RS}/><polygon data-part="tri-r" points="12.5 6.5 19.8 12 12.5 17.5" ${RS}/></g><polygon data-part="tri-l" points="4.2 6.5 11.5 12 4.2 17.5" ${RF}/><polygon data-part="tri-r" points="12.5 6.5 19.8 12 12.5 17.5" ${RF}/>`,
    },
  },
  // 144. SHUFFLE
  {
    name: "shuffle",
    label: "Shuffle",
    category: "Media & Audio",
    motionSummary: "Crossing playback lanes ripple & weave forward toward arrowheads",
    soundSummary: "Crisp card-riffle playlist shuffle flutter",
    svgs: {
      outline: `<g data-part="path-1" ${K}><path d="M4 17H8.5L15.5 7H20"/><polyline points="17.2 4.4 20 7 17.2 9.6"/></g><g data-part="path-2" ${K}><path d="M4 7H8.5L15.5 17H20"/><polyline points="17.2 14.4 20 17 17.2 19.6"/></g>`,
      solid: `<g data-part="path-1" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17H8.5L15.5 7H19.4"/><polyline points="17 4.4 19.8 7 17 9.6"/></g><g data-part="path-2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7H8.5L15.5 17H19.4"/><polyline points="17 14.4 19.8 17 17 19.6"/></g>`,
      duotone: `<g data-part="path-1"><path d="M4 17H8.5L15.5 7H19.4" ${DK}/><polygon points="19.8 7 16.8 4.4 16.8 9.6" ${D}/></g><g data-part="path-2"><path d="M4 7H8.5L15.5 17H19.4" ${DK}/><polygon points="19.8 17 16.8 14.4 16.8 19.6" ${D}/></g>`,
      glass: glassCompose(
        `<g data-part="path-2" ${GBS}><path d="M4 7H8.5L15.5 17H19.4"/><polyline points="17 14.4 19.8 17 17 19.6"/></g>`,
        `<g data-part="path-1"><path d="M4 17H8.5L15.5 7H19.6" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round"/><polygon points="20.4 7 16.8 4 16.8 10"/></g>`,
        `<g data-part="path-1" ${GF}><path d="M4 17H8.5L15.5 7H19.6" fill="none" stroke="url(#g-rim)" stroke-width="2.2" stroke-linecap="round"/><polygon points="20.4 7 16.8 4 16.8 10"/></g>`
      ),
      stencil: `<g fill="currentColor"><g data-part="path-1"><path d="M4 16.1H8L15 6.1H17.6V7.9H15.9L8.9 17.9H4Z"/><polygon points="20.2 7 17.2 4.3 17.2 9.7"/></g><g data-part="path-2"><path d="M4 6.1H8.9L11.2 9.4L9.7 10.6L8 7.9H4Z"/><path d="M12.8 13.4L14.3 12.2L15.9 16.1H17.6V17.9H15Z"/><polygon points="20.2 17 17.2 14.3 17.2 19.7"/></g></g>`,
      hardware: `<g data-part="path-2" stroke="#52525b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M4 7H8.5L15.5 17H19.4"/><polyline points="17 14.4 19.8 17 17 19.6"/></g><g data-part="path-1" stroke="#ff6b35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M4 17H8.5L15.5 7H19.4"/><polyline points="17 4.4 19.8 7 17 9.6"/></g>`,
      relief: `<g transform="translate(1.3,1.3)"><g data-part="path-1" ${RS_LINE}><path d="M4 17H8.5L15.5 7H20"/><polyline points="17.2 4.4 20 7 17.2 9.6"/></g><g data-part="path-2" ${RS_LINE}><path d="M4 7H8.5L15.5 17H20"/><polyline points="17.2 14.4 20 17 17.2 19.6"/></g></g><g data-part="path-1" ${RF_LINE}><path d="M4 17H8.5L15.5 7H20"/><polyline points="17.2 4.4 20 7 17.2 9.6"/></g><g data-part="path-2" ${RF_LINE}><path d="M4 7H8.5L15.5 17H20"/><polyline points="17.2 14.4 20 17 17.2 19.6"/></g>`,
    },
  },
  // 145. REPEAT
  {
    name: "repeat",
    label: "Repeat",
    category: "Media & Audio",
    motionSummary: "Loop arrows spin 180° seamlessly chasing the continuous track",
    soundSummary: "Cyclical synth loop ping + seamless return",
    svgs: {
      outline: `<g data-part="loop" data-pivot="12 12" ${K}><path d="M17.5 6.8H7.2A3.2 3.2 0 0 0 4 10V11.2"/><polyline points="15.2 4.4 17.8 6.8 15.2 9.2"/><path d="M6.5 17.2H16.8A3.2 3.2 0 0 0 20 14V12.8"/><polyline points="8.8 14.8 6.2 17.2 8.8 19.6"/></g>`,
      solid: `<g data-part="loop" data-pivot="12 12" fill="currentColor"><path d="M19.2 6.8L15 3.6V5.8H7.2A4.2 4.2 0 0 0 3 10V11.2A1 1 0 0 0 5 11.2V10A2.2 2.2 0 0 1 7.2 7.8H15V10Z"/><path d="M4.8 17.2L9 20.4V18.2H16.8A4.2 4.2 0 0 0 21 14V12.8A1 1 0 0 0 19 12.8V14A2.2 2.2 0 0 1 16.8 16.2H9V14Z"/></g>`,
      duotone: `<rect x="4" y="6.8" width="16" height="10.4" rx="3.2" ${D}/><g data-part="loop" data-pivot="12 12" ${DK}><polyline points="15.2 4.4 17.8 6.8 15.2 9.2"/><polyline points="8.8 14.8 6.2 17.2 8.8 19.6"/></g>`,
      glass: glassCompose(
        `<rect x="4" y="6.8" width="16" height="10.4" rx="3.4" ${GBS}/>`,
        `<g data-part="loop" data-pivot="12 12"><rect x="4" y="6.8" width="16" height="10.4" rx="3.4"/></g>`,
        `<g data-part="loop" data-pivot="12 12"><rect x="4" y="6.8" width="16" height="10.4" rx="3.4" ${GF}/><polyline points="15.2 4.4 17.8 6.8 15.2 9.2" ${GBS}/><polyline points="8.8 14.8 6.2 17.2 8.8 19.6" ${GBS}/></g>`
      ),
      stencil: `<g data-part="loop" data-pivot="12 12" fill="currentColor"><path d="M15.2 3.8L18.4 6.8L15.2 9.8V7.8H7.2A2.2 2.2 0 0 0 5 10V11H3V10A4.2 4.2 0 0 1 7.2 5.8H15.2Z"/><path d="M8.8 20.2L5.6 17.2L8.8 14.2V16.2H16.8A2.2 2.2 0 0 0 19 14V13H21V14A4.2 4.2 0 0 1 16.8 18.2H8.8Z"/></g>`,
      hardware: `<g data-part="loop" data-pivot="12 12"><path d="M17.5 6.8H7.2A3.2 3.2 0 0 0 4 10V11.2" fill="none" stroke="#52525b" stroke-width="2" stroke-linecap="round"/><polygon points="19 6.8 15.2 4 15.2 9.6" ${HA}/><path d="M6.5 17.2H16.8A3.2 3.2 0 0 0 20 14V12.8" fill="none" stroke="#52525b" stroke-width="2" stroke-linecap="round"/><polygon points="5 17.2 8.8 14.4 8.8 20" ${HA}/></g>`,
      relief: `<g data-part="loop" data-pivot="12 12"><g transform="translate(1.3,1.3)" ${RS_LINE}><path d="M17.5 6.8H7.2A3.2 3.2 0 0 0 4 10V11.2"/><polyline points="15.2 4.4 17.8 6.8 15.2 9.2"/><path d="M6.5 17.2H16.8A3.2 3.2 0 0 0 20 14V12.8"/><polyline points="8.8 14.8 6.2 17.2 8.8 19.6"/></g><g ${RF_LINE}><path d="M17.5 6.8H7.2A3.2 3.2 0 0 0 4 10V11.2"/><polyline points="15.2 4.4 17.8 6.8 15.2 9.2"/><path d="M6.5 17.2H16.8A3.2 3.2 0 0 0 20 14V12.8"/><polyline points="8.8 14.8 6.2 17.2 8.8 19.6"/></g></g>`,
    },
  },
  // 146. FILM
  {
    name: "film",
    label: "Film Strip",
    category: "Media & Audio",
    motionSummary: "Perforated celluloid strip advances upward by a frame while inner shot scales",
    soundSummary: "35mm celluloid film sprocket clicks + shutter advance",
    svgs: {
      outline: `<g data-part="strip" ${K}><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="7.8" y1="4" x2="7.8" y2="20" ${K_THIN}/><line x1="16.2" y1="4" x2="16.2" y2="20" ${K_THIN}/><line x1="4" y1="9.3" x2="7.8" y2="9.3" ${K_THIN}/><line x1="4" y1="14.7" x2="7.8" y2="14.7" ${K_THIN}/><line x1="16.2" y1="9.3" x2="20" y2="9.3" ${K_THIN}/><line x1="16.2" y1="14.7" x2="20" y2="14.7" ${K_THIN}/></g><rect data-part="frame" x="9.2" y="6.8" width="5.6" height="10.4" rx="0.8" ${K_THIN}/>`,
      solid: `<path data-part="strip" fill="currentColor" fill-rule="evenodd" d="M5.8 3.8H18.2A2 2 0 0 1 20.2 5.8V18.2A2 2 0 0 1 18.2 20.2H5.8A2 2 0 0 1 3.8 18.2V5.8A2 2 0 0 1 5.8 3.8ZM5.4 6V8.2H7.2V6ZM5.4 10.9V13.1H7.2V10.9ZM5.4 15.8V18H7.2V15.8ZM16.8 6V8.2H18.6V6ZM16.8 10.9V13.1H18.6V10.9ZM16.8 15.8V18H18.6V15.8ZM8.8 5.6V18.4H15.2V5.6Z"/><rect data-part="frame" x="9.6" y="7" width="4.8" height="10" rx="0.6" fill="currentColor" opacity="0.5"/>`,
      duotone: `<g data-part="strip"><rect x="4" y="4" width="16" height="16" rx="2" ${D}/><line x1="7.8" y1="4" x2="7.8" y2="20" ${DK_THIN}/><line x1="16.2" y1="4" x2="16.2" y2="20" ${DK_THIN}/><line x1="4" y1="9.3" x2="7.8" y2="9.3" ${DK_THIN}/><line x1="4" y1="14.7" x2="7.8" y2="14.7" ${DK_THIN}/><line x1="16.2" y1="9.3" x2="20" y2="9.3" ${DK_THIN}/><line x1="16.2" y1="14.7" x2="20" y2="14.7" ${DK_THIN}/></g><rect data-part="frame" x="9.2" y="6.8" width="5.6" height="10.4" rx="0.8" ${D}/>`,
      glass: glassCompose(
        `<rect data-part="frame" x="9" y="6.5" width="6" height="11" rx="0.9" ${GB}/>`,
        `<rect data-part="strip" x="3.8" y="3.8" width="16.4" height="16.4" rx="2.2"/>`,
        `<g data-part="strip" ${GF}><rect x="3.8" y="3.8" width="16.4" height="16.4" rx="2.2"/></g><g data-part="strip" ${GB}><rect x="5.4" y="6" width="1.6" height="2" rx="0.4"/><rect x="5.4" y="11" width="1.6" height="2" rx="0.4"/><rect x="5.4" y="16" width="1.6" height="2" rx="0.4"/><rect x="17" y="6" width="1.6" height="2" rx="0.4"/><rect x="17" y="11" width="1.6" height="2" rx="0.4"/><rect x="17" y="16" width="1.6" height="2" rx="0.4"/></g>`
      ),
      stencil: `<g fill="currentColor"><g data-part="strip"><rect x="4" y="4" width="3.5" height="4" rx="0.8"/><rect x="4" y="10" width="3.5" height="4" rx="0.8"/><rect x="4" y="16" width="3.5" height="4" rx="0.8"/><rect x="16.5" y="4" width="3.5" height="4" rx="0.8"/><rect x="16.5" y="10" width="3.5" height="4" rx="0.8"/><rect x="16.5" y="16" width="3.5" height="4" rx="0.8"/></g><rect data-part="frame" x="9" y="5.5" width="6" height="13" rx="1"/></g>`,
      hardware: `<rect data-part="strip" x="3.8" y="3.8" width="16.4" height="16.4" rx="2" ${HD}/><rect data-part="frame" x="8.6" y="5.8" width="6.8" height="12.4" rx="1" ${HL}/><circle cx="5.8" cy="7" r="0.8" ${HA}/><circle cx="5.8" cy="12" r="0.8" ${HA}/><circle cx="5.8" cy="17" r="0.8" ${HA}/><circle cx="18.2" cy="7" r="0.8" ${HA}/><circle cx="18.2" cy="12" r="0.8" ${HA}/><circle cx="18.2" cy="17" r="0.8" ${HA}/>`,
      relief: `<g data-part="strip"><rect transform="translate(1.3,1.3)" x="4" y="4" width="16" height="16" rx="2" ${RS}/><rect x="4" y="4" width="16" height="16" rx="2" ${RF}/><line x1="7.8" y1="4" x2="7.8" y2="20" ${RF_LINE}/><line x1="16.2" y1="4" x2="16.2" y2="20" ${RF_LINE}/></g><rect data-part="frame" x="9.2" y="6.8" width="5.6" height="10.4" rx="0.8" ${RF}/>`,
    },
  },
  // 147. TV
  {
    name: "tv",
    label: "Retro TV",
    category: "Media & Audio",
    motionSummary: "Rabbit-ear antennas wiggle asymmetrically as CRT screen flashes on",
    soundSummary: "Channel dial click + warm CRT tube static hum",
    svgs: {
      outline: `<line data-part="ant-l" data-pivot="12 8" x1="12" y1="8" x2="7.5" y2="3.8" ${K}/><line data-part="ant-r" data-pivot="12 8" x1="12" y1="8" x2="16.5" y2="3.8" ${K}/><rect x="3.5" y="8" width="17" height="12" rx="2.4" ${K}/><rect data-part="screen" x="5.8" y="10.2" width="9.6" height="7.6" rx="1" ${K_THIN}/><circle cx="18" cy="12" r="0.8" fill="currentColor"/><circle cx="18" cy="15.2" r="0.8" fill="currentColor"/>`,
      solid: `<g stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line data-part="ant-l" data-pivot="12 8" x1="12" y1="8" x2="7.5" y2="3.8"/><line data-part="ant-r" data-pivot="12 8" x1="12" y1="8" x2="16.5" y2="3.8"/></g><path fill="currentColor" fill-rule="evenodd" d="M5.8 7.8H18.2A2.4 2.4 0 0 1 20.6 10.2V17.8A2.4 2.4 0 0 1 18.2 20.2H5.8A2.4 2.4 0 0 1 3.4 17.8V10.2A2.4 2.4 0 0 1 5.8 7.8ZM6 10.4V17.6H15.2V10.4ZM17.8 11.4A0.9 0.9 0 1 0 17.8 13.2A0.9 0.9 0 1 0 17.8 11.4ZM17.8 14.8A0.9 0.9 0 1 0 17.8 16.6A0.9 0.9 0 1 0 17.8 14.8Z"/><rect data-part="screen" x="6.6" y="11" width="8" height="6" rx="0.8" fill="currentColor" opacity="0.45"/>`,
      duotone: `<line data-part="ant-l" data-pivot="12 8" x1="12" y1="8" x2="7.5" y2="3.8" ${DK}/><line data-part="ant-r" data-pivot="12 8" x1="12" y1="8" x2="16.5" y2="3.8" ${DK}/><rect x="3.5" y="8" width="17" height="12" rx="2.4" ${DK}/><rect data-part="screen" x="5.8" y="10.2" width="9.6" height="7.6" rx="1" ${D}/><circle cx="18" cy="12" r="0.8" fill="currentColor"/><circle cx="18" cy="15.2" r="0.8" fill="currentColor"/>`,
      glass: glassCompose(
        `<line data-part="ant-l" data-pivot="12 8" x1="12" y1="8" x2="7.5" y2="3.8" ${GBS}/><line data-part="ant-r" data-pivot="12 8" x1="12" y1="8" x2="16.5" y2="3.8" ${GBS}/>`,
        `<rect x="3.5" y="8" width="17" height="12" rx="2.4"/>`,
        `<g ${GF}><rect x="3.5" y="8" width="17" height="12" rx="2.4"/></g><rect data-part="screen" x="5.8" y="10.2" width="9.6" height="7.6" rx="1" ${GB}/><circle cx="18" cy="12" r="0.8" ${GB}/><circle cx="18" cy="15.2" r="0.8" ${GB}/>`
      ),
      stencil: `<g stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><line data-part="ant-l" data-pivot="12 8" x1="12" y1="8" x2="7.5" y2="3.8"/><line data-part="ant-r" data-pivot="12 8" x1="12" y1="8" x2="16.5" y2="3.8"/></g><g fill="currentColor"><path d="M5.6 8.2H15.8V10H5.6V18H15.8V19.8H5.6A2.2 2.2 0 0 1 3.4 17.6V10.4A2.2 2.2 0 0 1 5.6 8.2Z"/><rect data-part="screen" x="6.8" y="11" width="7.8" height="6" rx="0.8"/><path d="M17.2 8.2H18.4A2.2 2.2 0 0 1 20.6 10.4V17.6A2.2 2.2 0 0 1 18.4 19.8H17.2Z"/></g>`,
      hardware: `<g stroke="#52525b" stroke-width="1.8" stroke-linecap="round"><line data-part="ant-l" data-pivot="12 8" x1="12" y1="8" x2="7.5" y2="3.8"/><line data-part="ant-r" data-pivot="12 8" x1="12" y1="8" x2="16.5" y2="3.8"/></g><rect x="3.5" y="8" width="17" height="12" rx="2.4" ${HD}/><rect data-part="screen" x="5.6" y="10.2" width="9.8" height="7.6" rx="1.2" ${HL}/><circle cx="18" cy="12" r="1" ${HA}/><circle cx="18" cy="15.5" r="0.9" ${HM}/>`,
      relief: `<line data-part="ant-l" data-pivot="12 8" x1="12" y1="8" x2="7.5" y2="3.8" ${RF_LINE}/><line data-part="ant-r" data-pivot="12 8" x1="12" y1="8" x2="16.5" y2="3.8" ${RF_LINE}/><rect transform="translate(1.3,1.3)" x="3.5" y="8" width="17" height="12" rx="2.4" ${RS}/><rect x="3.5" y="8" width="17" height="12" rx="2.4" ${RF}/><rect data-part="screen" x="5.8" y="10.2" width="9.6" height="7.6" rx="1" ${RF}/>`,
    },
  },
  // 148. SPEAKER
  {
    name: "speaker",
    label: "Monitor",
    category: "Media & Audio",
    motionSummary: "Subwoofer and tweeter cones thump outward on low-end studio kick",
    soundSummary: "Punchy 808 studio monitor bass kick + tweeter snap",
    svgs: {
      outline: `<rect x="5" y="3.5" width="14" height="17" rx="2.2" ${K}/><circle data-part="tweeter" data-pivot="12 7.5" cx="12" cy="7.5" r="1.4" ${K}/><circle data-part="cone" data-pivot="12 14.5" cx="12" cy="14.5" r="3.6" ${K}/>`,
      solid: `<path fill="currentColor" fill-rule="evenodd" d="M7 3.3H17A2.2 2.2 0 0 1 19.2 5.5V18.5A2.2 2.2 0 0 1 17 20.7H7A2.2 2.2 0 0 1 4.8 18.5V5.5A2.2 2.2 0 0 1 7 3.3ZM12 5.8A1.6 1.6 0 1 0 12 9A1.6 1.6 0 1 0 12 5.8ZM12 10.6A4 4 0 1 0 12 18.6A4 4 0 1 0 12 10.6Z"/><circle data-part="tweeter" data-pivot="12 7.4" cx="12" cy="7.4" r="1" fill="currentColor"/><circle data-part="cone" data-pivot="12 14.6" cx="12" cy="14.6" r="2.6" fill="currentColor"/>`,
      duotone: `<rect x="5" y="3.5" width="14" height="17" rx="2.2" ${DK}/><circle data-part="tweeter" data-pivot="12 7.5" cx="12" cy="7.5" r="1.4" ${D}/><circle data-part="cone" data-pivot="12 14.5" cx="12" cy="14.5" r="3.6" ${D}/>`,
      glass: glassCompose(
        `<circle data-part="tweeter" data-pivot="12 7.5" cx="12" cy="7.5" r="1.5" ${GB}/><circle data-part="cone" data-pivot="12 14.5" cx="12" cy="14.5" r="3.6" ${GB}/>`,
        `<rect x="4.8" y="3.3" width="14.4" height="17.4" rx="2.4"/>`
      ),
      stencil: `<g fill="currentColor"><path d="M5 5.5A2 2 0 0 1 7 3.5H17A2 2 0 0 1 19 5.5V9.8H5ZM12 5.6A1.5 1.5 0 1 0 12 8.6A1.5 1.5 0 1 0 12 5.6Z" fill-rule="evenodd"/><path d="M5 11H11.2V11.8A3 3 0 0 0 11.2 17.6V20.5H7A2 2 0 0 1 5 18.5Z"/><path d="M12.8 11H19V18.5A2 2 0 0 1 17 20.5H12.8V17.6A3 3 0 0 0 12.8 11.8Z"/><circle data-part="tweeter" data-pivot="12 7.1" cx="12" cy="7.1" r="0.9"/><circle data-part="cone" data-pivot="12 14.7" cx="12" cy="14.7" r="2.2"/></g>`,
      hardware: `<rect x="4.8" y="3.3" width="14.4" height="17.4" rx="2.2" ${HD}/><circle data-part="tweeter" data-pivot="12 7.5" cx="12" cy="7.5" r="1.5" ${HA}/><g data-part="cone" data-pivot="12 14.5"><circle cx="12" cy="14.5" r="3.8" ${HL}/><circle cx="12" cy="14.5" r="1.6" ${HM}/></g>`,
      relief: `<rect transform="translate(1.3,1.3)" x="5" y="3.5" width="14" height="17" rx="2.2" ${RS}/><rect x="5" y="3.5" width="14" height="17" rx="2.2" ${RF}/><circle data-part="tweeter" data-pivot="12 7.5" cx="12" cy="7.5" r="1.4" ${RF}/><circle data-part="cone" data-pivot="12 14.5" cx="12" cy="14.5" r="3.6" ${RF}/>`,
    },
  },
  // 149. RECORD
  {
    name: "record",
    label: "Record",
    category: "Media & Audio",
    motionSummary: "Inner ruby core pulses rhythmically inside armed outer bezel",
    soundSummary: "Tape transport record lock clunk + armed cue tone",
    svgs: {
      outline: `<circle data-part="ring" cx="12" cy="12" r="8.5" ${K}/><circle data-part="core" data-pivot="12 12" cx="12" cy="12" r="4" fill="currentColor"/>`,
      solid: `<path data-part="ring" fill="currentColor" fill-rule="evenodd" d="M12 3.2A8.8 8.8 0 1 0 12 20.8A8.8 8.8 0 1 0 12 3.2ZM12 5.4A6.6 6.6 0 1 0 12 18.6A6.6 6.6 0 1 0 12 5.4Z"/><circle data-part="core" data-pivot="12 12" cx="12" cy="12" r="4.2" fill="currentColor"/>`,
      duotone: `<circle data-part="ring" cx="12" cy="12" r="8.5" ${D}/><circle data-part="core" data-pivot="12 12" cx="12" cy="12" r="4" fill="currentColor"/>`,
      glass: glassCompose(
        `<circle data-part="core" data-pivot="12 12" cx="12" cy="12" r="4.2" ${GB}/>`,
        `<circle data-part="ring" cx="12" cy="12" r="8.6"/>`
      ),
      stencil: `<g data-part="ring" fill="currentColor"><path d="M5.6 5.6A9 9 0 0 1 18.4 5.6L16.9 7.1A6.9 6.9 0 0 0 7.1 7.1Z"/><path d="M18.4 18.4A9 9 0 0 1 5.6 18.4L7.1 16.9A6.9 6.9 0 0 0 16.9 16.9Z"/></g><circle data-part="core" data-pivot="12 12" cx="12" cy="12" r="4" fill="currentColor"/>`,
      hardware: `<circle data-part="ring" cx="12" cy="12" r="8.8" ${HL}/><circle cx="12" cy="12" r="6.2" ${HD}/><circle data-part="core" data-pivot="12 12" cx="12" cy="12" r="3.8" ${HA}/>`,
      relief: `<g data-part="ring"><circle transform="translate(1.3,1.3)" cx="12" cy="12" r="8.5" ${RS}/><circle cx="12" cy="12" r="8.5" ${RF}/></g><circle data-part="core" data-pivot="12 12" cx="12" cy="12" r="4" ${RS}/>`,
    },
  },
  // 150. CAPTIONS
  {
    name: "captions",
    label: "Subtitles",
    category: "Media & Audio",
    motionSummary: "Caption display frame pops gently while lower subtitle bars animate",
    soundSummary: "Soft teleprompter tick + closed-caption switch pop",
    svgs: {
      outline: `<rect data-part="frame" x="3.5" y="5" width="17" height="14" rx="2.4" ${K}/><g data-part="lines" ${K_THIN}><line x1="6.8" y1="12.2" x2="11.2" y2="12.2"/><line x1="13.4" y1="12.2" x2="17.2" y2="12.2"/><line x1="6.8" y1="15.2" x2="14.5" y2="15.2"/></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><g data-part="lines" fill="#000"><rect x="6.5" y="11.4" width="4.8" height="1.6" rx="0.8"/><rect x="13" y="11.4" width="4.5" height="1.6" rx="0.8"/><rect x="6.5" y="14.4" width="8.2" height="1.6" rx="0.8"/></g></mask></defs><rect data-part="frame" x="3.5" y="5" width="17" height="14" rx="2.5" fill="currentColor" mask="url(#__GID__-m1)"/>`,
      duotone: `<rect data-part="frame" x="3.5" y="5" width="17" height="14" rx="2.4" ${D}/><g data-part="lines" ${DK}><line x1="6.8" y1="12.2" x2="11.2" y2="12.2"/><line x1="13.4" y1="12.2" x2="17.2" y2="12.2"/><line x1="6.8" y1="15.2" x2="14.5" y2="15.2"/></g>`,
      glass: glassCompose(
        `<g data-part="lines" ${GB}><rect x="6.5" y="11.4" width="4.8" height="1.6" rx="0.8"/><rect x="13" y="11.4" width="4.5" height="1.6" rx="0.8"/><rect x="6.5" y="14.4" width="8.2" height="1.6" rx="0.8"/></g>`,
        `<rect data-part="frame" x="3.5" y="5" width="17" height="14" rx="2.5"/>`
      ),
      stencil: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><g data-part="lines" fill="#000"><rect x="6.5" y="11.4" width="4.8" height="1.6" rx="0.8"/><rect x="13" y="11.4" width="4.5" height="1.6" rx="0.8"/><rect x="6.5" y="14.4" width="8.2" height="1.6" rx="0.8"/></g></mask></defs><g data-part="frame" fill="currentColor" mask="url(#__GID__-m1)"><rect x="3.5" y="5" width="17" height="5" rx="1.6"/><rect x="3.5" y="11" width="17" height="8" rx="1.8"/></g>`,
      hardware: `<rect data-part="frame" x="3.5" y="5" width="17" height="14" rx="2.4" ${HD}/><g data-part="lines"><rect x="6.5" y="11.4" width="4.8" height="1.6" rx="0.8" ${HL}/><rect x="13" y="11.4" width="4.5" height="1.6" rx="0.8" ${HA}/><rect x="6.5" y="14.4" width="8.2" height="1.6" rx="0.8" ${HL}/></g>`,
      relief: `<g data-part="frame"><rect transform="translate(1.3,1.3)" x="3.5" y="5" width="17" height="14" rx="2.4" ${RS}/><rect x="3.5" y="5" width="17" height="14" rx="2.4" ${RF}/></g><g data-part="lines" ${RF_LINE}><line x1="6.8" y1="12.2" x2="11.2" y2="12.2"/><line x1="13.4" y1="12.2" x2="17.2" y2="12.2"/><line x1="6.8" y1="15.2" x2="14.5" y2="15.2"/></g>`,
    },
  },
];
