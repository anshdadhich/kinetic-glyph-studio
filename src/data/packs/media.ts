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

export const MEDIA_ICONS: IconDef[] = [
  // 21. CAMERA
  {
    name: "camera",
    label: "Camera",
    category: "Media & Audio",
    motionSummary: "Shutter iris snaps shut while flash fires",
    soundSummary: "Mechanical SLR mirror slap + shutter curtain",
    svgs: {
      outline: `<g data-part="body" ${K}><path d="M2.75 9.43A2.43 2.43 0 0 1 5.18 7H7.07A0.9 0.9 0 0 0 7.86 6.53L8.74 4.9A1.25 1.25 0 0 1 9.84 4.25H14.16A1.25 1.25 0 0 1 15.26 4.9L16.14 6.53A0.9 0.9 0 0 0 16.93 7H18.82A2.43 2.43 0 0 1 21.25 9.43V17A2.75 2.75 0 0 1 18.5 19.75H5.5A2.75 2.75 0 0 1 2.75 17Z"/><circle data-part="flash" cx="18.2" cy="9.8" r="0.8" fill="currentColor" stroke="none"/></g><circle data-part="lens" cx="12" cy="13.2" r="3.5" ${K}/>`,
      solid: `<defs><mask id="__GID__-m1"><rect x="0" y="0" width="24" height="24" fill="#fff"/><circle data-part="flash" cx="18.2" cy="9.8" r="1.05" fill="#000"/><circle data-part="lens" cx="12" cy="13.2" r="4.1" fill="#000"/></mask></defs><path data-part="body" mask="url(#__GID__-m1)" fill="currentColor" d="M2.75 9.43A2.43 2.43 0 0 1 5.18 7H7.07A0.9 0.9 0 0 0 7.86 6.53L8.74 4.9A1.25 1.25 0 0 1 9.84 4.25H14.16A1.25 1.25 0 0 1 15.26 4.9L16.14 6.53A0.9 0.9 0 0 0 16.93 7H18.82A2.43 2.43 0 0 1 21.25 9.43V17A2.75 2.75 0 0 1 18.5 19.75H5.5A2.75 2.75 0 0 1 2.75 17Z"/><circle data-part="lens" cx="12" cy="13.2" r="2.2" fill="currentColor"/>`,
      duotone: `<path data-part="body" d="M2.75 9.43A2.43 2.43 0 0 1 5.18 7H7.07A0.9 0.9 0 0 0 7.86 6.53L8.74 4.9A1.25 1.25 0 0 1 9.84 4.25H14.16A1.25 1.25 0 0 1 15.26 4.9L16.14 6.53A0.9 0.9 0 0 0 16.93 7H18.82A2.43 2.43 0 0 1 21.25 9.43V17A2.75 2.75 0 0 1 18.5 19.75H5.5A2.75 2.75 0 0 1 2.75 17Z" ${D}/><circle data-part="lens" cx="12" cy="13.2" r="3.5" ${D}/><circle data-part="flash" cx="18.2" cy="9.8" r="0.85" fill="currentColor"/>`,
      glass: glassCompose(
        `<g data-part="body" data-pivot="12 12"><path d="M2.1 8.9A3.1 3.1 0 0 1 5.2 6.3H7.1L8.1 4.5A2 2 0 0 1 9.8 3.5H14.2A2 2 0 0 1 15.9 4.5L16.9 6.3H18.8A3.1 3.1 0 0 1 21.9 9.4V17A3.4 3.4 0 0 1 18.5 20.4H5.5A3.4 3.4 0 0 1 2.1 17Z" ${GB}/><circle data-part="flash" cx="18.3" cy="9.7" r="0.95" ${GH}/></g>`,
        `<circle data-part="lens" data-pivot="12 13.2" cx="12" cy="13.2" r="4.3"/>`,
        `<circle data-part="lens" data-pivot="12 13.2" cx="12" cy="13.2" r="4.3" ${GF}/><circle data-part="lens" data-pivot="12 13.2" cx="12" cy="13.2" r="1.6" ${GB}/>`
      ),
      stencil: `<defs><mask id="__GID__-m1"><rect x="0" y="0" width="24" height="24" fill="#fff"/><circle data-part="flash" cx="18.2" cy="9.8" r="1" fill="#000"/></mask></defs><g data-part="body" mask="url(#__GID__-m1)" fill="currentColor"><path d="M5.2 6.8H7.1L8.6 4.2H15.4L16.9 6.8H18.8A2.5 2.5 0 0 1 21.2 9.3V12.4H16.9A5 5 0 0 0 7.1 12.4H2.8V9.3A2.5 2.5 0 0 1 5.2 6.8Z"/><path d="M2.8 14H7.1A5 5 0 0 0 16.9 14H21.2V17.1A2.7 2.7 0 0 1 18.5 19.8H5.5A2.7 2.7 0 0 1 2.8 17.1Z"/></g><circle data-part="lens" cx="12" cy="13.2" r="2.8" fill="currentColor"/>`,
      hardware: `<g data-part="body"><path d="M2.75 9.43A2.43 2.43 0 0 1 5.18 7H7.07A0.9 0.9 0 0 0 7.86 6.53L8.74 4.9A1.25 1.25 0 0 1 9.84 4.25H14.16A1.25 1.25 0 0 1 15.26 4.9L16.14 6.53A0.9 0.9 0 0 0 16.93 7H18.82A2.43 2.43 0 0 1 21.25 9.43V17A2.75 2.75 0 0 1 18.5 19.75H5.5A2.75 2.75 0 0 1 2.75 17Z" ${HL}/><circle data-part="flash" cx="18.2" cy="9.6" r="0.95" ${HA}/></g><g data-part="lens"><circle cx="12" cy="13.2" r="4.2" ${HD}/><circle cx="12" cy="13.2" r="2" ${HM}/></g>`,
      relief: `<g data-part="body"><path transform="translate(1.5,1.5)" d="M2.75 9.43A2.43 2.43 0 0 1 5.18 7H7.07A0.9 0.9 0 0 0 7.86 6.53L8.74 4.9A1.25 1.25 0 0 1 9.84 4.25H14.16A1.25 1.25 0 0 1 15.26 4.9L16.14 6.53A0.9 0.9 0 0 0 16.93 7H18.82A2.43 2.43 0 0 1 21.25 9.43V17A2.75 2.75 0 0 1 18.5 19.75H5.5A2.75 2.75 0 0 1 2.75 17Z" ${RS}/><path d="M2.75 9.43A2.43 2.43 0 0 1 5.18 7H7.07A0.9 0.9 0 0 0 7.86 6.53L8.74 4.9A1.25 1.25 0 0 1 9.84 4.25H14.16A1.25 1.25 0 0 1 15.26 4.9L16.14 6.53A0.9 0.9 0 0 0 16.93 7H18.82A2.43 2.43 0 0 1 21.25 9.43V17A2.75 2.75 0 0 1 18.5 19.75H5.5A2.75 2.75 0 0 1 2.75 17Z" ${RF}/><circle data-part="flash" cx="18.2" cy="9.8" r="0.85" ${RS}/></g><circle data-part="lens" cx="12" cy="13.2" r="3.6" ${RF}/>`,
    },
  },
  // 22. VINYL
  {
    name: "vinyl",
    label: "Vinyl",
    category: "Media & Audio",
    motionSummary: "Grooved LP disc spins +360° while tonearm drops onto track",
    soundSummary: "Needle drop pop + surface crackle + warm chord",
    svgs: {
      outline: `<g data-part="disc" data-pivot="10 12.5" ${K}><circle cx="10" cy="12.5" r="7.5"/><circle cx="10" cy="12.5" r="2.5"/><path d="M6.4 8.9A5.1 5.1 0 0 1 13.6 8.9" ${K_THIN}/><path d="M6.4 16.1A5.1 5.1 0 0 0 13.6 16.1" ${K_THIN}/></g><g data-part="tonearm" data-pivot="19.5 5.5" ${K}><circle cx="19.5" cy="5.5" r="1.4"/><path d="M19.2 6.9L18.2 13.8L16 15.6"/></g>`,
      solid: `<g data-part="disc" data-pivot="10 12.5" fill="currentColor"><path fill-rule="evenodd" d="M10 4.8A7.7 7.7 0 1 0 10 20.2A7.7 7.7 0 1 0 10 4.8ZM10 9.8A2.7 2.7 0 1 1 10 15.2A2.7 2.7 0 1 1 10 9.8ZM5.8 9.2A5.3 5.3 0 0 1 10 7.2V8.2A4.3 4.3 0 0 0 6.6 9.8Z"/><circle cx="10" cy="12.5" r="1"/></g><g data-part="tonearm" data-pivot="19.5 5.5" fill="currentColor"><circle cx="19.5" cy="5.5" r="1.8"/><path d="M19.2 6.8L18.2 13.8L15.6 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></g>`,
      duotone: `<g data-part="disc" data-pivot="10 12.5"><circle cx="10" cy="12.5" r="7.5" ${D}/><circle cx="10" cy="12.5" r="2.5" ${DK}/><path d="M6.4 8.9A5.1 5.1 0 0 1 13.6 8.9" ${DK_THIN}/><path d="M6.4 16.1A5.1 5.1 0 0 0 13.6 16.1" ${DK_THIN}/></g><g data-part="tonearm" data-pivot="19.5 5.5" ${DK}><circle cx="19.5" cy="5.5" r="1.4" fill="currentColor"/><path d="M19.2 6.9L18.2 13.8L16 15.6"/></g>`,
      glass: glassCompose(
        `<g data-part="disc" data-pivot="10 12.5"><circle cx="8.8" cy="11.5" r="7.2" ${GB}/></g><g data-part="tonearm" data-pivot="19.5 5.5"><circle cx="19.5" cy="5.5" r="1.7" ${GB}/><path d="M19.2 6.9L18.2 13.8L15.8 15.8" ${GBS}/></g>`,
        `<circle data-part="disc" data-pivot="10 12.5" cx="10" cy="12.5" r="7.5"/>`,
        `<g data-part="disc" data-pivot="10 12.5"><circle cx="10" cy="12.5" r="7.5" ${GF}/><circle cx="10" cy="12.5" r="5" fill="none" stroke="url(#g-rim)" stroke-width="0.7" stroke-dasharray="6 4"/><circle cx="10" cy="12.5" r="2.6" ${GB}/><circle cx="10" cy="12.5" r="0.85" ${GH}/></g>`
      ),
      stencil: `<g data-part="disc" data-pivot="10 12.5" fill="currentColor"><path d="M4.6 7.1A7.6 7.6 0 0 1 15.4 7.1L12.5 10A3.2 3.2 0 0 0 7.5 10Z"/><path d="M15.4 17.9A7.6 7.6 0 0 1 4.6 17.9L7.5 15A3.2 3.2 0 0 0 12.5 15Z"/><circle cx="10" cy="12.5" r="1.5"/></g><g data-part="tonearm" data-pivot="19.5 5.5" fill="currentColor"><circle cx="19.5" cy="5.5" r="1.7"/><path d="M18.6 7.2L17.6 13.4L15.2 15.4L16.4 16.4L19.1 14.1L20.1 7.4Z"/></g>`,
      hardware: `<g data-part="disc" data-pivot="10 12.5"><circle cx="10" cy="12.5" r="7.7" ${HD}/><circle cx="10" cy="12.5" r="5.1" fill="none" stroke="#52525b" stroke-width="0.6" stroke-dasharray="7 3"/><circle cx="10" cy="12.5" r="2.7" ${HA}/><circle cx="10" cy="12.5" r="0.8" ${HL}/></g><g data-part="tonearm" data-pivot="19.5 5.5"><circle cx="19.5" cy="5.5" r="1.8" ${HM}/><path d="M19.2 6.9L18.2 13.8L16 15.6" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="14.9" y="14.9" width="2" height="1.3" rx="0.4" transform="rotate(-38 15.9 15.5)" ${HD}/></g>`,
      relief: `<g data-part="disc" data-pivot="10 12.5"><circle transform="translate(1.5,1.5)" cx="10" cy="12.5" r="7.5" ${RS}/><circle cx="10" cy="12.5" r="7.5" ${RF}/><circle cx="10" cy="12.5" r="2.5" ${RS}/></g><g data-part="tonearm" data-pivot="19.5 5.5"><circle transform="translate(1.5,1.5)" cx="19.5" cy="5.5" r="1.4" ${RS}/><path transform="translate(1.5,1.5)" d="M19.2 6.9L18.2 13.8L16 15.6" ${RS_LINE}/><circle cx="19.5" cy="5.5" r="1.4" ${RF}/><path d="M19.2 6.9L18.2 13.8L16 15.6" ${RF_LINE}/></g>`,
    },
  },
  // 23. PLAY
  {
    name: "play",
    label: "Play",
    category: "Media & Audio",
    motionSummary: "Play triangle lunges forward into active playback",
    soundSummary: "Tape transport engage clack + bright harmonic",
    svgs: {
      outline: `<path data-part="tri" d="M6.8 5.2A1.2 1.2 0 0 1 8.6 4.2L19.1 10.9A1.3 1.3 0 0 1 19.1 13.1L8.6 19.8A1.2 1.2 0 0 1 6.8 18.8Z" ${K}/>`,
      solid: `<path data-part="tri" fill="currentColor" d="M6.5 5.2A1.2 1.2 0 0 1 8.3 4.2L19.3 11A1.2 1.2 0 0 1 19.3 13L8.3 19.8A1.2 1.2 0 0 1 6.5 18.8Z"/>`,
      duotone: `<path data-part="tri" d="M6.8 5.2A1.2 1.2 0 0 1 8.6 4.2L19.1 10.9A1.3 1.3 0 0 1 19.1 13.1L8.6 19.8A1.2 1.2 0 0 1 6.8 18.8Z" ${D}/>`,
      glass: glassCompose(
        `<path data-part="tri" data-pivot="12 12" transform="translate(-1.7,-1.2)" d="M6.6 5.4A1.2 1.2 0 0 1 8.4 4.4L19.2 11A1.2 1.2 0 0 1 19.2 13L8.4 19.6A1.2 1.2 0 0 1 6.6 18.6Z" ${GB}/>`,
        `<path data-part="tri" data-pivot="12 12" d="M6.6 5.4A1.2 1.2 0 0 1 8.4 4.4L19.2 11A1.2 1.2 0 0 1 19.2 13L8.4 19.6A1.2 1.2 0 0 1 6.6 18.6Z"/>`
      ),
      stencil: `<g data-part="tri" fill="currentColor"><path d="M6.8 5.2A1 1 0 0 1 8.3 4.3L13.6 7.7V16.3L8.3 19.7A1 1 0 0 1 6.8 18.8Z"/><path d="M15 8.6L19.1 11.1A1.1 1.1 0 0 1 19.1 12.9L15 15.4Z"/></g>`,
      hardware: `<g data-part="tri"><path d="M6.8 5.2A1.2 1.2 0 0 1 8.6 4.2L19.1 10.9A1.3 1.3 0 0 1 19.1 13.1L8.6 19.8A1.2 1.2 0 0 1 6.8 18.8Z" ${HL}/><circle cx="10.2" cy="12" r="1.4" ${HA}/></g>`,
      relief: `<g data-part="tri"><path transform="translate(1.5,1.5)" d="M6.8 5.2A1.2 1.2 0 0 1 8.6 4.2L19.1 10.9A1.3 1.3 0 0 1 19.1 13.1L8.6 19.8A1.2 1.2 0 0 1 6.8 18.8Z" ${RS}/><path d="M6.8 5.2A1.2 1.2 0 0 1 8.6 4.2L19.1 10.9A1.3 1.3 0 0 1 19.1 13.1L8.6 19.8A1.2 1.2 0 0 1 6.8 18.8Z" ${RF}/></g>`,
    },
  },
  // 24. PAUSE
  {
    name: "pause",
    label: "Pause",
    category: "Media & Audio",
    motionSummary: "Twin vertical bars snap apart to halt motion",
    soundSummary: "Twin magnetic solenoid brake tap",
    svgs: {
      outline: `<rect data-part="bar-l" x="6.4" y="4.8" width="4" height="14.4" rx="1.5" ${K}/><rect data-part="bar-r" x="13.6" y="4.8" width="4" height="14.4" rx="1.5" ${K}/>`,
      solid: `<rect data-part="bar-l" x="6" y="4.6" width="4.4" height="14.8" rx="1.7" fill="currentColor"/><rect data-part="bar-r" x="13.6" y="4.6" width="4.4" height="14.8" rx="1.7" fill="currentColor"/>`,
      duotone: `<rect data-part="bar-l" x="6.4" y="4.8" width="4" height="14.4" rx="1.5" ${D}/><rect data-part="bar-r" x="13.6" y="4.8" width="4" height="14.4" rx="1.5" ${D}/>`,
      glass: glassCompose(
        `<rect data-part="bar-l" data-pivot="8.3 12" x="4.8" y="3.8" width="4.3" height="14.6" rx="1.7" ${GB}/><rect data-part="bar-r" data-pivot="15.9 12" x="12.4" y="3.8" width="4.3" height="14.6" rx="1.7" ${GB}/>`,
        `<rect data-part="bar-l" data-pivot="8.3 12" x="6.2" y="4.8" width="4.3" height="14.6" rx="1.7"/><rect data-part="bar-r" data-pivot="15.9 12" x="13.8" y="4.8" width="4.3" height="14.6" rx="1.7"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="bar-l"><rect x="6.2" y="4.8" width="4.1" height="6.4" rx="1.2"/><rect x="6.2" y="12.8" width="4.1" height="6.4" rx="1.2"/></g><g data-part="bar-r"><rect x="13.7" y="4.8" width="4.1" height="6.4" rx="1.2"/><rect x="13.7" y="12.8" width="4.1" height="6.4" rx="1.2"/></g></g>`,
      hardware: `<g data-part="bar-l"><rect x="6.1" y="4.7" width="4.3" height="14.6" rx="1.6" ${HL}/><circle cx="8.25" cy="7.4" r="0.7" ${HA}/></g><rect data-part="bar-r" x="13.6" y="4.7" width="4.3" height="14.6" rx="1.6" ${HD}/>`,
      relief: `<g data-part="bar-l"><rect transform="translate(1.5,1.5)" x="6.4" y="4.8" width="4" height="14.4" rx="1.5" ${RS}/><rect x="6.4" y="4.8" width="4" height="14.4" rx="1.5" ${RF}/></g><g data-part="bar-r"><rect transform="translate(1.5,1.5)" x="13.6" y="4.8" width="4" height="14.4" rx="1.5" ${RS}/><rect x="13.6" y="4.8" width="4" height="14.4" rx="1.5" ${RF}/></g>`,
    },
  },
  // 25. VOLUME
  {
    name: "volume",
    label: "Volume",
    category: "Media & Audio",
    motionSummary: "Speaker cone pulses while acoustic waves ripple outward",
    soundSummary: "Speaker cone sub-thump + radiating harmonic sweep",
    svgs: {
      outline: `<path data-part="cone" d="M4.8 9.2H7.6A1.2 1.2 0 0 0 8.4 8.9L12 5.4A1 1 0 0 1 13.6 6.2V17.8A1 1 0 0 1 12 18.6L8.4 15.1A1.2 1.2 0 0 0 7.6 14.8H4.8A1.3 1.3 0 0 1 3.5 13.5V10.5A1.3 1.3 0 0 1 4.8 9.2Z" ${K}/><path data-part="wave-1" d="M16 9.2A4 4 0 0 1 16 14.8" ${K}/><path data-part="wave-2" d="M18.5 6.8A7.2 7.2 0 0 1 18.5 17.2" ${K}/>`,
      solid: `<path data-part="cone" d="M4.6 9H7.4L12.1 4.8A1.1 1.1 0 0 1 13.8 5.7V18.3A1.1 1.1 0 0 1 12.1 19.2L7.4 15H4.6A1.5 1.5 0 0 1 3.1 13.5V10.5A1.5 1.5 0 0 1 4.6 9Z" fill="currentColor"/><path data-part="wave-1" d="M16 9A4.2 4.2 0 0 1 16 15" ${K}/><path data-part="wave-2" d="M18.6 6.6A7.5 7.5 0 0 1 18.6 17.4" ${K}/>`,
      duotone: `<path data-part="cone" d="M4.8 9.2H7.6A1.2 1.2 0 0 0 8.4 8.9L12 5.4A1 1 0 0 1 13.6 6.2V17.8A1 1 0 0 1 12 18.6L8.4 15.1A1.2 1.2 0 0 0 7.6 14.8H4.8A1.3 1.3 0 0 1 3.5 13.5V10.5A1.3 1.3 0 0 1 4.8 9.2Z" ${D}/><path data-part="wave-1" d="M16 9.2A4 4 0 0 1 16 14.8" ${DK}/><path data-part="wave-2" d="M18.5 6.8A7.2 7.2 0 0 1 18.5 17.2" ${DK}/>`,
      glass: glassCompose(
        `<rect data-part="cone" data-pivot="8.5 12" x="3.4" y="9" width="5.2" height="6" rx="1.4" ${GB}/><path data-part="wave-1" d="M16 9.2A4 4 0 0 1 16 14.8" ${GBS}/><path data-part="wave-2" d="M18.5 6.8A7.2 7.2 0 0 1 18.5 17.2" ${GBS}/>`,
        `<path data-part="cone" data-pivot="8.5 12" d="M7.2 9.2L12.1 5A1.2 1.2 0 0 1 13.9 5.9V18.1A1.2 1.2 0 0 1 12.1 19L7.2 14.8Z"/>`
      ),
      stencil: `<g data-part="cone" fill="currentColor"><rect x="3.5" y="9.2" width="3.6" height="5.6" rx="1"/><path d="M8.4 9.1L12.2 5.2A1 1 0 0 1 13.8 6V18A1 1 0 0 1 12.2 18.8L8.4 14.9Z"/></g><path data-part="wave-1" d="M16 9.2A4 4 0 0 1 16 14.8" ${K}/><path data-part="wave-2" d="M18.5 6.8A7.2 7.2 0 0 1 18.5 17.2" ${K}/>`,
      hardware: `<g data-part="cone"><rect x="3.5" y="9.2" width="4.5" height="5.6" rx="1.1" ${HD}/><path d="M7.8 9.2L12.2 5.1A1 1 0 0 1 13.8 5.9V18.1A1 1 0 0 1 12.2 18.9L7.8 14.8Z" ${HL}/></g><path data-part="wave-1" d="M16 9.2A4 4 0 0 1 16 14.8" fill="none" stroke="#ff6b35" stroke-width="1.8" stroke-linecap="round"/><path data-part="wave-2" d="M18.5 6.8A7.2 7.2 0 0 1 18.5 17.2" fill="none" stroke="#52525b" stroke-width="1.7" stroke-linecap="round"/>`,
      relief: `<g data-part="cone"><path transform="translate(1.5,1.5)" d="M4.8 9.2H7.6L12 5.4A1 1 0 0 1 13.6 6.2V17.8A1 1 0 0 1 12 18.6L7.6 14.8H4.8A1.3 1.3 0 0 1 3.5 13.5V10.5A1.3 1.3 0 0 1 4.8 9.2Z" ${RS}/><path d="M4.8 9.2H7.6L12 5.4A1 1 0 0 1 13.6 6.2V17.8A1 1 0 0 1 12 18.6L7.6 14.8H4.8A1.3 1.3 0 0 1 3.5 13.5V10.5A1.3 1.3 0 0 1 4.8 9.2Z" ${RF}/></g><g data-part="wave-1"><path transform="translate(1.5,1.5)" d="M16 9.2A4 4 0 0 1 16 14.8" ${RS_LINE}/><path d="M16 9.2A4 4 0 0 1 16 14.8" ${RF_LINE}/></g><g data-part="wave-2"><path transform="translate(1.5,1.5)" d="M18.5 6.8A7.2 7.2 0 0 1 18.5 17.2" ${RS_LINE}/><path d="M18.5 6.8A7.2 7.2 0 0 1 18.5 17.2" ${RF_LINE}/></g>`,
    },
  },
  // 26. MIC
  {
    name: "mic",
    label: "Microphone",
    category: "Media & Audio",
    motionSummary: "Condenser capsule bounces inside shockmount stand",
    soundSummary: "Studio mic pop-filter tap + test ping",
    svgs: {
      outline: `<rect data-part="capsule" data-pivot="12 8.5" x="8.8" y="3.2" width="6.4" height="10.4" rx="3.2" ${K}/><g data-part="stand" data-pivot="12 15.5" ${K}><path d="M5.5 10.5A6.5 6.5 0 0 0 18.5 10.5"/><line x1="12" y1="17" x2="12" y2="20.6"/><line x1="8.5" y1="20.6" x2="15.5" y2="20.6"/></g>`,
      solid: `<rect data-part="capsule" data-pivot="12 8.5" x="8.6" y="3.1" width="6.8" height="10.6" rx="3.4" fill="currentColor"/><g data-part="stand" data-pivot="12 15.5" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" fill="none"><path d="M5.5 10.5A6.5 6.5 0 0 0 18.5 10.5"/><line x1="12" y1="17" x2="12" y2="20.6"/><line x1="8.5" y1="20.6" x2="15.5" y2="20.6"/></g>`,
      duotone: `<rect data-part="capsule" data-pivot="12 8.5" x="8.8" y="3.2" width="6.4" height="10.4" rx="3.2" ${D}/><g data-part="stand" data-pivot="12 15.5" ${DK}><path d="M5.5 10.5A6.5 6.5 0 0 0 18.5 10.5"/><line x1="12" y1="17" x2="12" y2="20.6"/><line x1="8.5" y1="20.6" x2="15.5" y2="20.6"/></g>`,
      glass: glassCompose(
        `<g data-part="stand" data-pivot="12 15.5" ${GBS}><path d="M5.5 10.5A6.5 6.5 0 0 0 18.5 10.5"/><line x1="12" y1="17" x2="12" y2="20.6"/><line x1="8.5" y1="20.6" x2="15.5" y2="20.6"/></g><rect data-part="capsule" data-pivot="12 8.5" x="7.8" y="2.8" width="6.6" height="10.2" rx="3.3" ${GB}/>`,
        `<rect data-part="capsule" data-pivot="12 8.5" x="8.8" y="3.3" width="6.6" height="10.6" rx="3.3"/>`
      ),
      stencil: `<g data-part="capsule" data-pivot="12 8.5" fill="currentColor"><path d="M8.8 6.4A3.2 3.2 0 0 1 15.2 6.4V7.8H8.8Z"/><path d="M8.8 9.2H15.2V10.6A3.2 3.2 0 0 1 8.8 10.6Z"/></g><g data-part="stand" data-pivot="12 15.5" fill="currentColor"><path d="M5.2 10.5H6.9A5.1 5.1 0 0 0 11.2 15.5V17.2A6.8 6.8 0 0 1 5.2 10.5Z"/><path d="M18.8 10.5H17.1A5.1 5.1 0 0 1 12.8 15.5V17.2A6.8 6.8 0 0 0 18.8 10.5Z"/><rect x="11.2" y="17.2" width="1.6" height="3.2"/><rect x="8.5" y="19.6" width="7" height="1.6" rx="0.8"/></g>`,
      hardware: `<g data-part="stand" data-pivot="12 15.5" fill="none" stroke="#52525b" stroke-width="1.8" stroke-linecap="round"><path d="M5.5 10.5A6.5 6.5 0 0 0 18.5 10.5"/><line x1="12" y1="17" x2="12" y2="20.6"/><line x1="8.5" y1="20.6" x2="15.5" y2="20.6"/></g><g data-part="capsule" data-pivot="12 8.5"><rect x="8.8" y="3.3" width="6.4" height="10.2" rx="3.2" ${HL}/><circle cx="12" cy="6.6" r="1" ${HA}/></g>`,
      relief: `<g data-part="stand" data-pivot="12 15.5"><g transform="translate(1.5,1.5)" ${RS_LINE}><path d="M5.5 10.5A6.5 6.5 0 0 0 18.5 10.5"/><line x1="12" y1="17" x2="12" y2="20.6"/><line x1="8.5" y1="20.6" x2="15.5" y2="20.6"/></g><g ${RF_LINE}><path d="M5.5 10.5A6.5 6.5 0 0 0 18.5 10.5"/><line x1="12" y1="17" x2="12" y2="20.6"/><line x1="8.5" y1="20.6" x2="15.5" y2="20.6"/></g></g><g data-part="capsule" data-pivot="12 8.5"><rect transform="translate(1.5,1.5)" x="8.8" y="3.2" width="6.4" height="10.4" rx="3.2" ${RS}/><rect x="8.8" y="3.2" width="6.4" height="10.4" rx="3.2" ${RF}/></g>`,
    },
  },
  // 27. HEADPHONES
  {
    name: "headphones",
    label: "Headphones",
    category: "Media & Audio",
    motionSummary: "Padded ear cups clamp inward while spring headband flexes",
    soundSummary: "Stereo ear-cup cushion seal + test chime",
    svgs: {
      outline: `<path data-part="band" data-pivot="12 8" d="M5 12.25V10.5A7 7 0 0 1 19 10.5V12.25" ${K}/><rect data-part="cup-l" data-pivot="5 16.5" x="2.75" y="12.25" width="4.5" height="8.5" rx="2.25" ${K}/><rect data-part="cup-r" data-pivot="19 16.5" x="16.75" y="12.25" width="4.5" height="8.5" rx="2.25" ${K}/>`,
      solid: `<path data-part="band" data-pivot="12 8" d="M5 13V10.5A7 7 0 0 1 19 10.5V13" ${K}/><rect data-part="cup-l" data-pivot="5 16.5" x="2.5" y="12.25" width="4.8" height="8.5" rx="2.4" fill="currentColor"/><rect data-part="cup-r" data-pivot="19 16.5" x="16.7" y="12.25" width="4.8" height="8.5" rx="2.4" fill="currentColor"/>`,
      duotone: `<path data-part="band" data-pivot="12 8" d="M5 12.25V10.5A7 7 0 0 1 19 10.5V12.25" ${DK}/><rect data-part="cup-l" data-pivot="5 16.5" x="2.75" y="12.25" width="4.5" height="8.5" rx="2.25" ${D}/><rect data-part="cup-r" data-pivot="19 16.5" x="16.75" y="12.25" width="4.5" height="8.5" rx="2.25" ${D}/>`,
      glass: glassCompose(
        `<path data-part="band" data-pivot="12 8" d="M5 15V10.5A7 7 0 0 1 19 10.5V15" ${GBS}/><rect data-part="cup-l" data-pivot="5 16.5" x="2" y="12.5" width="4.4" height="8" rx="2.2" ${GB}/><rect data-part="cup-r" data-pivot="19 16.5" x="17.6" y="12.5" width="4.4" height="8" rx="2.2" ${GB}/>`,
        `<rect data-part="cup-l" data-pivot="6.2 16.5" x="3.5" y="11.5" width="5.8" height="10" rx="2.9"/><rect data-part="cup-r" data-pivot="17.8 16.5" x="14.7" y="11.5" width="5.8" height="10" rx="2.9"/>`
      ),
      stencil: `<g data-part="band" data-pivot="12 8" fill="currentColor"><path d="M4.2 12V10.5A7.8 7.8 0 0 1 11.2 2.75V4.55A6 6 0 0 0 6 10.5V12Z"/><path d="M19.8 12V10.5A7.8 7.8 0 0 0 12.8 2.75V4.55A6 6 0 0 1 18 10.5V12Z"/></g><rect data-part="cup-l" data-pivot="5 16.5" x="2.75" y="12.6" width="4.5" height="8" rx="2.2" fill="currentColor"/><rect data-part="cup-r" data-pivot="19 16.5" x="16.75" y="12.6" width="4.5" height="8" rx="2.2" fill="currentColor"/>`,
      hardware: `<path data-part="band" data-pivot="12 8" d="M5 12.5V10.5A7 7 0 0 1 19 10.5V12.5" fill="none" stroke="#3f3f46" stroke-width="2" stroke-linecap="round"/><g data-part="cup-l" data-pivot="5 16.5"><rect x="2.75" y="12.25" width="4.5" height="8.5" rx="2.25" ${HL}/><circle cx="5" cy="14.8" r="0.7" ${HA}/></g><rect data-part="cup-r" data-pivot="19 16.5" x="16.75" y="12.25" width="4.5" height="8.5" rx="2.25" ${HL}/>`,
      relief: `<g data-part="band" data-pivot="12 8"><path transform="translate(1.5,1.5)" d="M5 12.25V10.5A7 7 0 0 1 19 10.5V12.25" ${RS_LINE}/><path d="M5 12.25V10.5A7 7 0 0 1 19 10.5V12.25" ${RF_LINE}/></g><g data-part="cup-l" data-pivot="5 16.5"><rect transform="translate(1.5,1.5)" x="2.75" y="12.25" width="4.5" height="8.5" rx="2.25" ${RS}/><rect x="2.75" y="12.25" width="4.5" height="8.5" rx="2.25" ${RF}/></g><g data-part="cup-r" data-pivot="19 16.5"><rect transform="translate(1.5,1.5)" x="16.75" y="12.25" width="4.5" height="8.5" rx="2.25" ${RS}/><rect x="16.75" y="12.25" width="4.5" height="8.5" rx="2.25" ${RF}/></g>`,
    },
  },
  // 28. MUSIC
  {
    name: "music",
    label: "Music",
    category: "Media & Audio",
    motionSummary: "Twin beamed notes dance alternately to rhythm",
    soundSummary: "Bright C-major triad arpeggio",
    svgs: {
      outline: `<g data-part="note-1" data-pivot="8.5 14"><ellipse cx="6.75" cy="17.8" rx="3" ry="2.25" transform="rotate(-18 6.75 17.8)" ${K}/><path d="M9.6 17.2V6.3A1.2 1.2 0 0 1 10.5 5.15L18.2 3.3A1.2 1.2 0 0 1 19.7 4.45" ${K}/></g><g data-part="note-2" data-pivot="17 12"><ellipse cx="17" cy="15.6" rx="3" ry="2.25" transform="rotate(-18 17 15.6)" ${K}/><line x1="19.7" y1="15" x2="19.7" y2="4.45" ${K}/></g>`,
      solid: `<g data-part="note-1" data-pivot="8.5 14" fill="currentColor"><ellipse cx="6.75" cy="17.8" rx="3.1" ry="2.35" transform="rotate(-18 6.75 17.8)"/><path d="M8.7 17.2V6.3A1.4 1.4 0 0 1 9.8 4.95L18.5 2.9A1.3 1.3 0 0 1 20.1 4.15V6.6L10.4 8.9V17.2Z"/></g><g data-part="note-2" data-pivot="17 12" fill="currentColor"><ellipse cx="17" cy="15.6" rx="3.1" ry="2.35" transform="rotate(-18 17 15.6)"/><rect x="18.6" y="4.2" width="1.75" height="11" rx="0.8"/></g>`,
      duotone: `<g data-part="note-1" data-pivot="8.5 14"><ellipse cx="6.75" cy="17.8" rx="3" ry="2.25" transform="rotate(-18 6.75 17.8)" ${D}/><path d="M9.6 17.2V6.3A1.2 1.2 0 0 1 10.5 5.15L18.2 3.3A1.2 1.2 0 0 1 19.7 4.45" ${DK}/></g><g data-part="note-2" data-pivot="17 12"><ellipse cx="17" cy="15.6" rx="3" ry="2.25" transform="rotate(-18 17 15.6)" ${D}/><line x1="19.7" y1="15" x2="19.7" y2="4.45" ${DK}/></g>`,
      glass: glassCompose(
        `<line data-part="note-1" data-pivot="8.5 14" x1="9.6" y1="17.4" x2="9.6" y2="7" ${GBS}/><line data-part="note-2" data-pivot="17 12" x1="19.8" y1="15.2" x2="19.8" y2="5.2" ${GBS}/>`,
        `<path data-part="note-1" data-pivot="14 6" d="M9.1 6.3A1.9 1.9 0 0 1 10.5 4.8L18.3 3A1.9 1.9 0 0 1 20.6 4.85V6.8A1.8 1.8 0 0 1 19.2 8.5L11.4 10.35A1.9 1.9 0 0 1 9.1 8.5Z"/>`,
        `<g data-part="note-1" data-pivot="14 6" ${GF}><path d="M9.1 6.3A1.9 1.9 0 0 1 10.5 4.8L18.3 3A1.9 1.9 0 0 1 20.6 4.85V6.8A1.8 1.8 0 0 1 19.2 8.5L11.4 10.35A1.9 1.9 0 0 1 9.1 8.5Z"/></g><ellipse data-part="note-1" data-pivot="8.5 14" cx="6.75" cy="17.9" rx="3.5" ry="2.7" transform="rotate(-18 6.75 17.9)" ${GB}/><ellipse data-part="note-2" data-pivot="17 12" cx="17" cy="15.6" rx="3.5" ry="2.7" transform="rotate(-18 17 15.6)" ${GB}/>`
      ),
      stencil: `<g data-part="note-1" data-pivot="8.5 14" fill="currentColor"><ellipse cx="6.75" cy="17.8" rx="2.9" ry="2.2" transform="rotate(-18 6.75 17.8)"/><path d="M8.8 15.2V6.3A1.2 1.2 0 0 1 9.8 5.1L18.8 3V5.4L10.5 7.4V15.2Z"/></g><g data-part="note-2" data-pivot="17 12" fill="currentColor"><ellipse cx="17" cy="15.6" rx="2.9" ry="2.2" transform="rotate(-18 17 15.6)"/><rect x="18.6" y="6.8" width="1.7" height="6.8" rx="0.6"/></g>`,
      hardware: `<g data-part="note-1" data-pivot="8.5 14"><path d="M9.6 17.2V6.3A1.2 1.2 0 0 1 10.5 5.15L18.2 3.3A1.2 1.2 0 0 1 19.7 4.45" fill="none" stroke="#52525b" stroke-width="1.9" stroke-linecap="round"/><ellipse cx="6.75" cy="17.8" rx="3.1" ry="2.35" transform="rotate(-18 6.75 17.8)" ${HA}/></g><g data-part="note-2" data-pivot="17 12"><line x1="19.7" y1="15" x2="19.7" y2="4.45" stroke="#52525b" stroke-width="1.9" stroke-linecap="round"/><ellipse cx="17" cy="15.6" rx="3.1" ry="2.35" transform="rotate(-18 17 15.6)" ${HL}/></g>`,
      relief: `<g data-part="note-1" data-pivot="8.5 14"><g transform="translate(1.5,1.5)"><ellipse cx="6.75" cy="17.8" rx="3" ry="2.25" transform="rotate(-18 6.75 17.8)" ${RS}/><path d="M9.6 17.2V6.3A1.2 1.2 0 0 1 10.5 5.15L18.2 3.3A1.2 1.2 0 0 1 19.7 4.45" ${RS_LINE}/></g><path d="M9.6 17.2V6.3A1.2 1.2 0 0 1 10.5 5.15L18.2 3.3A1.2 1.2 0 0 1 19.7 4.45" ${RF_LINE}/><ellipse cx="6.75" cy="17.8" rx="3" ry="2.25" transform="rotate(-18 6.75 17.8)" ${RF}/></g><g data-part="note-2" data-pivot="17 12"><g transform="translate(1.5,1.5)"><ellipse cx="17" cy="15.6" rx="3" ry="2.25" transform="rotate(-18 17 15.6)" ${RS}/><line x1="19.7" y1="15" x2="19.7" y2="4.45" ${RS_LINE}/></g><line x1="19.7" y1="15" x2="19.7" y2="4.45" ${RF_LINE}/><ellipse cx="17" cy="15.6" rx="3" ry="2.25" transform="rotate(-18 17 15.6)" ${RF}/></g>`,
    },
  },
  // 29. IMAGE
  {
    name: "image",
    label: "Image",
    category: "Media & Audio",
    motionSummary: "Sun rises over twin alpine peaks inside frame",
    soundSummary: "Polaroid frame slide + soft dawn shimmer",
    svgs: {
      outline: `<rect x="3.25" y="4.25" width="17.5" height="15.5" rx="2.8" ${K}/><circle data-part="sun" cx="8.5" cy="9.2" r="1.45" ${K}/><path data-part="mountain" d="M4 18.2L9.8 12.4A0.8 0.8 0 0 1 10.9 12.4L13.8 15.4L16.1 13.1A0.8 0.8 0 0 1 17.2 13.1L20.1 17.6" ${K}/>`,
      solid: `<path fill="currentColor" fill-rule="evenodd" d="M6.05 4.1H17.95A2.8 2.8 0 0 1 20.75 6.9V17.1A2.8 2.8 0 0 1 17.95 19.9H6.05A2.8 2.8 0 0 1 3.25 17.1V6.9A2.8 2.8 0 0 1 6.05 4.1ZM6.15 6A0.9 0.9 0 0 0 5.25 6.9V17.1A0.9 0.9 0 0 0 6.15 18H17.85A0.9 0.9 0 0 0 18.75 17.1V6.9A0.9 0.9 0 0 0 17.85 6Z"/><circle data-part="sun" cx="8.6" cy="9.2" r="1.5" fill="currentColor"/><path data-part="mountain" fill="currentColor" d="M4.8 18.2L9.8 12.2A0.85 0.85 0 0 1 11.05 12.2L13.8 15.2L16.05 12.8A0.85 0.85 0 0 1 17.3 12.8L19.6 18.2Z"/>`,
      duotone: `<rect x="3.25" y="4.25" width="17.5" height="15.5" rx="2.8" ${D}/><circle data-part="sun" cx="8.5" cy="9.2" r="1.45" fill="currentColor"/><path data-part="mountain" d="M4 18.2L9.8 12.4A0.8 0.8 0 0 1 10.9 12.4L13.8 15.4L16.1 13.1A0.8 0.8 0 0 1 17.2 13.1L20.1 17.6" ${DK}/>`,
      glass: glassCompose(
        `<rect x="3.25" y="4.25" width="17.5" height="15.5" rx="2.8" ${GB}/><circle data-part="sun" data-pivot="8.5 9.2" cx="8.5" cy="9.2" r="1.8" ${GH}/>`,
        `<path data-part="mountain" data-pivot="12 15.5" d="M3.6 18.2L9.8 11.8A0.8 0.8 0 0 1 11 11.8L13.9 14.9L16.1 12.7A0.8 0.8 0 0 1 17.3 12.7L20.4 17.6A2.2 2.2 0 0 1 18.2 19.8H5.8A2.2 2.2 0 0 1 3.6 18.2Z"/>`
      ),
      stencil: `<g fill="currentColor"><path d="M6.05 4.25H17.95A2.8 2.8 0 0 1 20.75 7.05V14.6L16.6 11.7L13.8 14.5L10.1 10.8L5.15 15.4V7.05A0.9 0.9 0 0 1 6.05 6.15H17.95A0.9 0.9 0 0 1 18.85 7.05V13.8L20.75 15.1V7.05A2.8 2.8 0 0 0 17.95 4.25Z" fill-rule="evenodd"/><path d="M6.05 4.25H17.95A2.8 2.8 0 0 1 20.75 7.05V14.6L16.6 11.7L13.8 14.5L10.1 10.8L5.15 15.4V7.05A2.8 2.8 0 0 1 6.05 4.25ZM5.15 6.9V13.9L10.1 9.5L13.8 13.1L16.6 10.4L18.85 12V6.9A0.9 0.9 0 0 0 17.95 6H6.05A0.9 0.9 0 0 0 5.15 6.9Z" fill-rule="evenodd"/><path data-part="mountain" d="M4.2 17.5L10 12.2L13.8 16L16.5 13.3L19.9 16.8V18.2A1.5 1.5 0 0 1 18.4 19.7H5.6A1.5 1.5 0 0 1 4.1 18.2Z"/></g><circle data-part="sun" cx="8.5" cy="9.2" r="1.4" fill="currentColor"/>`,
      hardware: `<rect x="3.25" y="4.25" width="17.5" height="15.5" rx="2.8" ${HL}/><circle data-part="sun" cx="8.5" cy="9.2" r="1.6" ${HA}/><path data-part="mountain" d="M4 18.8L10 12.2L13.8 15.8L16.5 13.2L20 18.8Z" ${HD}/>`,
      relief: `<rect transform="translate(1.5,1.5)" x="3.25" y="4.25" width="17.5" height="15.5" rx="2.8" ${RS}/><rect x="3.25" y="4.25" width="17.5" height="15.5" rx="2.8" ${RF}/><circle data-part="sun" cx="8.5" cy="9.2" r="1.45" ${RS}/><path data-part="mountain" d="M4 18.2L9.8 12.4A0.8 0.8 0 0 1 10.9 12.4L13.8 15.4L16.1 13.1A0.8 0.8 0 0 1 17.2 13.1L20.1 17.6" ${RF_LINE}/>`,
    },
  },
  // 30. VIDEO
  {
    name: "video",
    label: "Video",
    category: "Media & Audio",
    motionSummary: "Cinema camera rocks slightly while zoom lens extends",
    soundSummary: "Cinema gate mechanical click + tally beep",
    svgs: {
      outline: `<rect data-part="cam" x="3.25" y="6.25" width="12.75" height="11.5" rx="2.6" ${K}/><path data-part="lens" d="M16 10.2L19.6 8A1 1 0 0 1 21 8.85V15.15A1 1 0 0 1 19.6 16L16 13.8Z" ${K}/>`,
      solid: `<rect data-part="cam" x="3.1" y="6" width="12.9" height="12" rx="2.7" fill="currentColor"/><path data-part="lens" d="M16.4 9.8L19.9 7.6A1.1 1.1 0 0 1 21.4 8.55V15.45A1.1 1.1 0 0 1 19.9 16.4L16.4 14.2Z" fill="currentColor"/>`,
      duotone: `<rect data-part="cam" x="3.25" y="6.25" width="12.75" height="11.5" rx="2.6" ${D}/><path data-part="lens" d="M16 10.2L19.6 8A1 1 0 0 1 21 8.85V15.15A1 1 0 0 1 19.6 16L16 13.8Z" ${D}/>`,
      glass: glassCompose(
        `<path data-part="lens" data-pivot="18 12" d="M14.8 10L19.6 7.4A1.1 1.1 0 0 1 21.1 8.4V15.6A1.1 1.1 0 0 1 19.6 16.6L14.8 14Z" ${GB}/>`,
        `<rect data-part="cam" data-pivot="9.6 12" x="3.25" y="6.25" width="12.75" height="11.5" rx="2.6"/>`,
        `<g data-part="cam" data-pivot="9.6 12" ${GF}><rect x="3.25" y="6.25" width="12.75" height="11.5" rx="2.6"/></g><circle data-part="cam" data-pivot="9.6 12" cx="6.6" cy="9.5" r="0.95" ${GH}/>`
      ),
      stencil: `<g data-part="cam" fill="currentColor"><path d="M5.85 6.25H13.4A2.6 2.6 0 0 1 16 8.85V11.2H3.25V8.85A2.6 2.6 0 0 1 5.85 6.25Z"/><path d="M3.25 12.8H16V15.15A2.6 2.6 0 0 1 13.4 17.75H5.85A2.6 2.6 0 0 1 3.25 15.15Z"/></g><path data-part="lens" d="M16.8 10L19.8 8.1A1 1 0 0 1 21.2 8.95V15.05A1 1 0 0 1 19.8 15.9L16.8 14Z" fill="currentColor"/>`,
      hardware: `<path data-part="lens" d="M16 10.2L19.6 8A1 1 0 0 1 21 8.85V15.15A1 1 0 0 1 19.6 16L16 13.8Z" ${HM}/><g data-part="cam"><rect x="3.25" y="6.25" width="12.75" height="11.5" rx="2.6" ${HD}/><circle cx="6.6" cy="9.5" r="0.9" ${HA}/></g>`,
      relief: `<g data-part="lens"><path transform="translate(1.5,1.5)" d="M16 10.2L19.6 8A1 1 0 0 1 21 8.85V15.15A1 1 0 0 1 19.6 16L16 13.8Z" ${RS}/><path d="M16 10.2L19.6 8A1 1 0 0 1 21 8.85V15.15A1 1 0 0 1 19.6 16L16 13.8Z" ${RF}/></g><g data-part="cam"><rect transform="translate(1.5,1.5)" x="3.25" y="6.25" width="12.75" height="11.5" rx="2.6" ${RS}/><rect x="3.25" y="6.25" width="12.75" height="11.5" rx="2.6" ${RF}/></g>`,
    },
  },
];
