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
  GHS,
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

export const OBJECTS_ICONS: IconDef[] = [
  // 81. CLOCK
  {
    name: "clock",
    label: "Clock",
    category: "Time & Everyday",
    motionSummary: "Minute hand sweeps 90° forward while hour hand advances",
    soundSummary: "Quartz escapement double-tick + chime",
    svgs: {
      outline: `<circle cx="12" cy="12" r="8.5" ${K}/><line data-part="hour" data-pivot="12 12" x1="12" y1="12" x2="12" y2="7.5" ${K}/><line data-part="minute" data-pivot="12 12" x1="12" y1="12" x2="15.6" y2="13.8" ${K}/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><line data-part="hour" data-pivot="12 12" x1="12" y1="12" x2="12" y2="7.2" stroke="#000" stroke-width="1.9" stroke-linecap="round"/><line data-part="minute" data-pivot="12 12" x1="12" y1="12" x2="15.8" y2="14" stroke="#000" stroke-width="1.9" stroke-linecap="round"/></mask></defs><circle cx="12" cy="12" r="8.7" fill="currentColor" mask="url(#__GID__-m1)"/>`,
      duotone: `<circle cx="12" cy="12" r="8.5" ${D}/><line data-part="hour" data-pivot="12 12" x1="12" y1="12" x2="12" y2="7.5" ${DK}/><line data-part="minute" data-pivot="12 12" x1="12" y1="12" x2="15.6" y2="13.8" ${DK}/>`,
      glass: glassCompose(
        `<circle cx="10.5" cy="10.8" r="8.2" ${GB}/>`,
        `<circle cx="12" cy="12" r="8.5"/>`,
        `<g ${GF}><circle cx="12" cy="12" r="8.5"/></g><line data-part="hour" data-pivot="12 12" x1="12" y1="12" x2="12" y2="7.4" ${GBS}/><line data-part="minute" data-pivot="12 12" x1="12" y1="12" x2="15.6" y2="13.8" ${GBS}/>`
      ),
      stencil: `<g fill="currentColor"><path d="M5.6 6A8.5 8.5 0 0 1 18.4 6L16.8 7.6A6.3 6.3 0 0 0 7.2 7.6Z"/><path d="M18.4 18A8.5 8.5 0 0 1 5.6 18L7.2 16.4A6.3 6.3 0 0 0 16.8 16.4Z"/></g><line data-part="hour" data-pivot="12 12" x1="12" y1="12" x2="12" y2="7.5" ${K}/><line data-part="minute" data-pivot="12 12" x1="12" y1="12" x2="15.6" y2="13.8" ${K}/>`,
      hardware: `<circle cx="12" cy="12" r="8.8" ${HD}/><circle cx="12" cy="12" r="6.8" ${HL}/><line data-part="hour" data-pivot="12 12" x1="12" y1="12" x2="12" y2="7.6" stroke="#18181b" stroke-width="1.8" stroke-linecap="round"/><line data-part="minute" data-pivot="12 12" x1="12" y1="12" x2="15.6" y2="13.8" stroke="#ff6b35" stroke-width="1.8" stroke-linecap="round"/>`,
      relief: `<circle transform="translate(1.5,1.5)" cx="12" cy="12" r="8.5" ${RS}/><circle cx="12" cy="12" r="8.5" ${RF}/><line data-part="hour" data-pivot="12 12" x1="12" y1="12" x2="12" y2="7.5" ${RF_LINE}/><line data-part="minute" data-pivot="12 12" x1="12" y1="12" x2="15.6" y2="13.8" ${RF_LINE}/>`,
    },
  },
  // 82. ALARM
  {
    name: "alarm",
    label: "Alarm Clock",
    category: "Time & Everyday",
    motionSummary: "Twin hammer bells vibrate rapidly as clock face chatters",
    soundSummary: "Twin-bell mechanical alarm clatter",
    svgs: {
      outline: `<path data-part="bell-l" data-pivot="7 6" d="M4.2 7.2A3 3 0 0 1 8.4 4.2" ${K}/><path data-part="bell-r" data-pivot="17 6" d="M19.8 7.2A3 3 0 0 0 15.6 4.2" ${K}/><g data-part="face" data-pivot="12 13" ${K}><circle cx="12" cy="13" r="7"/><path d="M12 9.5V13L14.5 14.5"/><path d="M7.5 19L6 20.8M16.5 19L18 20.8"/></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><path data-part="face" data-pivot="12 13" d="M12 9.2V13L14.6 14.6" fill="none" stroke="#000" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></mask></defs><path data-part="bell-l" data-pivot="7 6" fill="currentColor" d="M3.6 7.5A3.4 3.4 0 0 1 8.8 3.8Z"/><path data-part="bell-r" data-pivot="17 6" fill="currentColor" d="M20.4 7.5A3.4 3.4 0 0 0 15.2 3.8Z"/><g data-part="face" data-pivot="12 13"><circle cx="12" cy="13" r="7.2" fill="currentColor" mask="url(#__GID__-m1)"/><path d="M7.5 19L5.8 20.8M16.5 19L18.2 20.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></g>`,
      duotone: `<path data-part="bell-l" data-pivot="7 6" d="M4.2 7.2A3 3 0 0 1 8.4 4.2" ${DK}/><path data-part="bell-r" data-pivot="17 6" d="M19.8 7.2A3 3 0 0 0 15.6 4.2" ${DK}/><g data-part="face" data-pivot="12 13"><circle cx="12" cy="13" r="7" ${D}/><path d="M12 9.5V13L14.5 14.5M7.5 19L6 20.8M16.5 19L18 20.8" ${DK}/></g>`,
      glass: glassCompose(
        `<path data-part="bell-l" data-pivot="7 6" d="M3.5 7.6A3.6 3.6 0 0 1 9 3.6Z" ${GB}/><path data-part="bell-r" data-pivot="17 6" d="M20.5 7.6A3.6 3.6 0 0 0 15 3.6Z" ${GB}/><path data-part="face" data-pivot="12 13" d="M7.5 18.8L5.8 20.8M16.5 18.8L18.2 20.8" ${GBS}/>`,
        `<circle data-part="face" data-pivot="12 13" cx="12" cy="13" r="7.2"/>`,
        `<g data-part="face" data-pivot="12 13" ${GF}><circle cx="12" cy="13" r="7.2"/></g><path data-part="face" data-pivot="12 13" d="M12 9.4V13L14.5 14.5" ${GBS}/>`
      ),
      stencil: `<path data-part="bell-l" data-pivot="7 6" fill="currentColor" d="M3.8 7.4A3.2 3.2 0 0 1 8.6 3.8Z"/><path data-part="bell-r" data-pivot="17 6" fill="currentColor" d="M20.2 7.4A3.2 3.2 0 0 0 15.4 3.8Z"/><g data-part="face" data-pivot="12 13" fill="currentColor"><path d="M6.8 8A7 7 0 0 1 17.2 8L15.6 9.5A4.8 4.8 0 0 0 8.4 9.5Z"/><path d="M17.2 18A7 7 0 0 1 6.8 18L8.4 16.5A4.8 4.8 0 0 0 15.6 16.5Z"/><path d="M12 9.8V13L14.4 14.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></g>`,
      hardware: `<path data-part="bell-l" data-pivot="7 6" d="M3.6 7.5A3.4 3.4 0 0 1 8.8 3.8Z" ${HA}/><path data-part="bell-r" data-pivot="17 6" d="M20.4 7.5A3.4 3.4 0 0 0 15.2 3.8Z" ${HA}/><g data-part="face" data-pivot="12 13"><circle cx="12" cy="13" r="7.2" ${HD}/><path d="M12 9.4V13L14.5 14.5" fill="none" stroke="#e4e4e7" stroke-width="1.8" stroke-linecap="round"/></g>`,
      relief: `<path data-part="bell-l" data-pivot="7 6" d="M4.2 7.2A3 3 0 0 1 8.4 4.2" ${RF_LINE}/><path data-part="bell-r" data-pivot="17 6" d="M19.8 7.2A3 3 0 0 0 15.6 4.2" ${RF_LINE}/><g data-part="face" data-pivot="12 13"><circle transform="translate(1.4,1.4)" cx="12" cy="13" r="7" ${RS}/><circle cx="12" cy="13" r="7" ${RF}/><path d="M12 9.5V13L14.5 14.5" ${RF_LINE}/></g>`,
    },
  },
  // 83. GLOBE
  {
    name: "globe",
    label: "Globe",
    category: "Time & Everyday",
    motionSummary: "Meridian ellipse rotates cleanly around equatorial ring",
    soundSummary: "Spinning atlas bearing whoosh + chime",
    svgs: {
      outline: `<circle cx="12" cy="12" r="8.5" ${K}/><ellipse data-part="meridian" data-pivot="12 12" cx="12" cy="12" rx="3.8" ry="8.5" ${K_THIN}/><line data-part="equator" data-pivot="12 12" x1="3.7" y1="12" x2="20.3" y2="12" ${K_THIN}/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><ellipse data-part="meridian" data-pivot="12 12" cx="12" cy="12" rx="3.8" ry="8.4" fill="none" stroke="#000" stroke-width="1.5"/><line data-part="equator" data-pivot="12 12" x1="3.6" y1="12" x2="20.4" y2="12" stroke="#000" stroke-width="1.5"/></mask></defs><circle cx="12" cy="12" r="8.7" fill="currentColor" mask="url(#__GID__-m1)"/>`,
      duotone: `<circle cx="12" cy="12" r="8.5" ${D}/><ellipse data-part="meridian" data-pivot="12 12" cx="12" cy="12" rx="3.8" ry="8.5" ${DK_THIN}/><line data-part="equator" data-pivot="12 12" x1="3.7" y1="12" x2="20.3" y2="12" ${DK_THIN}/>`,
      glass: glassCompose(
        `<circle cx="10.5" cy="10.8" r="8.2" ${GB}/>`,
        `<circle cx="12" cy="12" r="8.5"/>`,
        `<g ${GF}><circle cx="12" cy="12" r="8.5"/></g><ellipse data-part="meridian" data-pivot="12 12" cx="12" cy="12" rx="3.8" ry="8.4" fill="none" stroke="url(#g-back)" stroke-width="1.45" stroke-linecap="round"/><line data-part="equator" data-pivot="12 12" x1="3.6" y1="12" x2="20.4" y2="12" fill="none" stroke="url(#g-back)" stroke-width="1.45" stroke-linecap="round"/><path d="M6.8 8.1A6 6 0 0 1 11.4 5.4" ${GHS} opacity="0.72"/>`
      ),
      stencil: `<g fill="currentColor"><path d="M5.6 6A8.5 8.5 0 0 1 18.4 6L16.8 7.6A6.3 6.3 0 0 0 7.2 7.6Z"/><path d="M18.4 18A8.5 8.5 0 0 1 5.6 18L7.2 16.4A6.3 6.3 0 0 0 16.8 16.4Z"/></g><ellipse data-part="meridian" data-pivot="12 12" cx="12" cy="12" rx="3.6" ry="8.2" ${K_THIN}/><line data-part="equator" data-pivot="12 12" x1="4" y1="12" x2="20" y2="12" ${K_THIN}/>`,
      hardware: `<circle cx="12" cy="12" r="8.7" ${HD}/><ellipse data-part="meridian" data-pivot="12 12" cx="12" cy="12" rx="3.8" ry="8.4" fill="none" stroke="#a1a1aa" stroke-width="1.5"/><line data-part="equator" data-pivot="12 12" x1="3.6" y1="12" x2="20.4" y2="12" stroke="#ff6b35" stroke-width="1.6"/>`,
      relief: `<circle transform="translate(1.5,1.5)" cx="12" cy="12" r="8.5" ${RS}/><circle cx="12" cy="12" r="8.5" ${RF}/><ellipse data-part="meridian" data-pivot="12 12" cx="12" cy="12" rx="3.8" ry="8.5" ${RF_LINE}/><line data-part="equator" data-pivot="12 12" x1="3.7" y1="12" x2="20.3" y2="12" ${RF_LINE}/>`,
    },
  },
  // 84. LIGHTBULB (Ref rounded pear bulb + screw cap)
  {
    name: "lightbulb",
    label: "Lightbulb",
    category: "Time & Everyday",
    motionSummary: "Glass bulb swells softly as filament rays burst outward",
    soundSummary: "Tungsten filament warm hum + bright idea ping",
    svgs: {
      outline: `<g data-part="bulb" data-pivot="12 12" ${K}><path d="M9.4 16.8L7.1 13.7A5.6 5.6 0 0 1 16.9 8.6A5.6 5.6 0 0 1 16.9 13.7L14.6 16.8Z"/><path d="M9.4 16.8V19.1A1.9 1.9 0 0 0 11.3 21H12.7A1.9 1.9 0 0 0 14.6 19.1V16.8"/></g><g data-part="rays" ${K_THIN}><line x1="12" y1="2.1" x2="12" y2="3.5"/><line x1="4.8" y1="5.1" x2="6" y2="6.3"/><line x1="19.2" y1="5.1" x2="18" y2="6.3"/></g>`,
      solid: `<g data-part="bulb" data-pivot="12 12" fill="currentColor"><path d="M9.4 16.8L6.9 13.6A5.8 5.8 0 0 1 17.1 8.5A5.8 5.8 0 0 1 17.1 13.6L14.6 16.8Z"/><rect x="9.4" y="17.8" width="5.2" height="1.7" rx="0.85"/><rect x="10.2" y="20.1" width="3.6" height="1.5" rx="0.75"/></g><g data-part="rays" stroke="currentColor" stroke-width="1.65" stroke-linecap="round"><line x1="12" y1="2" x2="12" y2="3.4"/><line x1="4.8" y1="5" x2="6" y2="6.2"/><line x1="19.2" y1="5" x2="18" y2="6.2"/></g>`,
      duotone: `<g data-part="bulb" data-pivot="12 12"><path d="M9.4 16.8L7.1 13.7A5.6 5.6 0 0 1 16.9 8.6A5.6 5.6 0 0 1 16.9 13.7L14.6 16.8Z" ${D}/><path d="M9.4 16.8V19.1A1.9 1.9 0 0 0 11.3 21H12.7A1.9 1.9 0 0 0 14.6 19.1V16.8" ${DK}/></g><g data-part="rays" ${DK_THIN}><line x1="12" y1="2.1" x2="12" y2="3.5"/><line x1="4.8" y1="5.1" x2="6" y2="6.3"/><line x1="19.2" y1="5.1" x2="18" y2="6.3"/></g>`,
      glass: glassCompose(
        `<g data-part="rays" data-pivot="12 6" ${GBS}><line x1="12" y1="2" x2="12" y2="3.6"/><line x1="4.8" y1="5" x2="6.1" y2="6.3"/><line x1="19.2" y1="5" x2="17.9" y2="6.3"/></g><path d="M9.4 16.4V19A2 2 0 0 0 11.4 21H12.6A2 2 0 0 0 14.6 19V16.4Z" ${GB}/><path data-part="bulb" data-pivot="12 11" d="M10.4 15.2V11.2A1.6 1.6 0 0 1 13.6 11.2V15.2M10.6 11.4H13.4" ${GBS}/>`,
        `<path data-part="bulb" data-pivot="12 11" d="M9.4 16.8L6.9 13.6A5.8 5.8 0 0 1 17.1 8.5A5.8 5.8 0 0 1 17.1 13.6L14.6 16.8Z"/>`,
        `<g data-part="bulb" data-pivot="12 11" ${GF}><path d="M9.4 16.8L6.9 13.6A5.8 5.8 0 0 1 17.1 8.5A5.8 5.8 0 0 1 17.1 13.6L14.6 16.8Z"/></g><path data-part="bulb" data-pivot="12 11" d="M8.3 8.8A4.4 4.4 0 0 1 12.2 6.2" ${GHS} opacity="0.72"/>`
      ),
      stencil: `<g data-part="bulb" data-pivot="12 12" fill="currentColor"><path d="M11.2 5.4V16.8H9.4L7 13.6A5.7 5.7 0 0 1 11.2 5.4Z"/><path d="M12.8 5.4A5.7 5.7 0 0 1 17 13.6L14.6 16.8H12.8Z"/><rect x="9.5" y="18" width="5" height="2" rx="1"/></g><g data-part="rays" fill="currentColor"><rect x="11.25" y="1.8" width="1.5" height="2.2" rx="0.75"/><rect x="4.5" y="4.9" width="2.2" height="1.5" rx="0.75" transform="rotate(45 5.6 5.6)"/><rect x="17.3" y="4.9" width="2.2" height="1.5" rx="0.75" transform="rotate(-45 18.4 5.6)"/></g>`,
      hardware: `<path d="M9.4 16.4V19A2 2 0 0 0 11.4 21H12.6A2 2 0 0 0 14.6 19V16.4Z" ${HD}/><path data-part="bulb" data-pivot="12 12" d="M9.4 16.8L6.9 13.6A5.8 5.8 0 0 1 17.1 8.5A5.8 5.8 0 0 1 17.1 13.6L14.6 16.8Z" ${HL}/><g data-part="rays" stroke="#ff6b35" stroke-width="1.8" stroke-linecap="round"><line x1="12" y1="2" x2="12" y2="3.4"/><line x1="4.8" y1="5" x2="6" y2="6.2"/><line x1="19.2" y1="5" x2="18" y2="6.2"/></g>`,
      relief: `<g data-part="bulb" data-pivot="12 12"><path transform="translate(1.4,1.4)" d="M9.4 16.8L7.1 13.7A5.6 5.6 0 0 1 16.9 8.6A5.6 5.6 0 0 1 16.9 13.7L14.6 16.8Z" ${RS}/><path d="M9.4 16.8L7.1 13.7A5.6 5.6 0 0 1 16.9 8.6A5.6 5.6 0 0 1 16.9 13.7L14.6 16.8Z" ${RF}/><path d="M9.4 16.8V19.1A1.9 1.9 0 0 0 11.3 21H12.7A1.9 1.9 0 0 0 14.6 19.1V16.8" ${RF_LINE}/></g><g data-part="rays" ${RF_LINE}><line x1="12" y1="2.1" x2="12" y2="3.5"/><line x1="4.8" y1="5.1" x2="6" y2="6.3"/><line x1="19.2" y1="5.1" x2="18" y2="6.3"/></g>`,
    },
  },
  // 85. MEGAPHONE
  {
    name: "megaphone",
    label: "Megaphone",
    category: "Time & Everyday",
    motionSummary: "Bullhorn kicks back slightly as sound wave projects forward",
    soundSummary: "PA bullhorn chirp + warm broadcast swell",
    svgs: {
      outline: `<g data-part="horn" data-pivot="14 11" ${K}><path d="M4 9.5H7.5L15.5 5.2V16.8L7.5 12.5H4Z"/><path d="M7.5 12.5L9 18.2H11L10 13.8"/></g><path data-part="wave" d="M18.2 8.2A4.5 4.5 0 0 1 18.2 13.8" ${K}/>`,
      solid: `<g data-part="horn" data-pivot="14 11" fill="currentColor"><path d="M3.8 9.2H7.6L15.8 4.8V17.2L7.6 12.8H3.8Z"/><path d="M7.2 12.8L8.8 18.6H11.2L10 14Z"/></g><path data-part="wave" fill="currentColor" d="M17.8 7.5A1 1 0 0 1 19.2 7.5A5.4 5.4 0 0 1 19.2 14.5A1 1 0 0 1 17.8 13.1A3.4 3.4 0 0 0 17.8 8.9A1 1 0 0 1 17.8 7.5Z"/>`,
      duotone: `<g data-part="horn" data-pivot="14 11"><path d="M4 9.5H7.5L15.5 5.2V16.8L7.5 12.5H4Z" ${D}/><path d="M7.5 12.5L9 18.2H11L10 13.8" ${DK}/></g><path data-part="wave" d="M18.2 8.2A4.5 4.5 0 0 1 18.2 13.8" ${DK}/>`,
      glass: glassCompose(
        `<path data-part="horn" data-pivot="14 11" d="M7.2 12.8L8.8 18.6H11.2L10 13.5Z" ${GB}/><path data-part="wave" data-pivot="19 11" d="M18.4 8A4.6 4.6 0 0 1 18.4 14" ${GBS}/>`,
        `<path data-part="horn" data-pivot="14 11" d="M3.8 9.2H7.6L15.8 4.8V17.2L7.6 12.8H3.8Z"/>`
      ),
      stencil: `<g data-part="horn" data-pivot="14 11" fill="currentColor"><polygon points="4 9.4 7.5 9.4 10.6 7.7 10.6 14.3 7.5 12.6 4 12.6"/><polygon points="12.2 6.9 15.6 5 15.6 17 12.2 15.1"/><polygon points="7.5 13.4 9 18.4 11 18.4 10 14.4"/></g><path data-part="wave" d="M18.2 8.2A4.5 4.5 0 0 1 18.2 13.8" ${K}/>`,
      hardware: `<g data-part="horn" data-pivot="14 11"><path d="M7.2 12.8L8.8 18.6H11.2L10 13.8Z" ${HD}/><path d="M3.8 9.2H7.6L15.8 4.8V17.2L7.6 12.8H3.8Z" ${HL}/></g><path data-part="wave" d="M18.4 8A4.6 4.6 0 0 1 18.4 14" fill="none" stroke="#ff6b35" stroke-width="2" stroke-linecap="round"/>`,
      relief: `<g data-part="horn" data-pivot="14 11"><path transform="translate(1.5,1.5)" d="M4 9.5H7.5L15.5 5.2V16.8L7.5 12.5H4Z" ${RS}/><path d="M7.5 12.5L9 18.2H11L10 13.8" ${RF}/><path d="M4 9.5H7.5L15.5 5.2V16.8L7.5 12.5H4Z" ${RF}/></g><path data-part="wave" d="M18.2 8.2A4.5 4.5 0 0 1 18.2 13.8" ${RF_LINE}/>`,
    },
  },
  // 86. BOOK
  {
    name: "book",
    label: "Open Book",
    category: "Time & Everyday",
    motionSummary: "Right book page turns cleanly across the spine to the left",
    soundSummary: "Crisp parchment page-turn flutter",
    svgs: {
      outline: `<path data-part="page-l" d="M12 6.5C9.5 4.9 6.2 4.9 3.6 5.9A0.8 0.8 0 0 0 3.2 6.6V18.3A0.6 0.6 0 0 0 4 18.8C6.3 17.9 9.5 17.9 12 19.2Z" ${K}/><path data-part="page-r" d="M12 6.5C14.5 4.9 17.8 4.9 20.4 5.9A0.8 0.8 0 0 1 20.8 6.6V18.3A0.6 0.6 0 0 1 20 18.8C17.7 17.9 14.5 17.9 12 19.2Z" ${K}/><path data-part="leaf" data-pivot="12 12" d="M12 6.6C14.1 5.3 16.9 5.3 19 6.2V18C16.9 17.1 14.1 17.1 12 18.6Z" ${K_THIN}/>`,
      solid: `<path data-part="page-l" fill="currentColor" d="M11.3 6.2C8.9 4.7 5.7 4.7 3.3 5.7A0.8 0.8 0 0 0 2.9 6.5V18.4A0.7 0.7 0 0 0 3.8 19C6.1 18 8.9 18 11.3 19.3Z"/><path data-part="page-r" fill="currentColor" opacity="0.45" d="M12.7 6.2C15.1 4.7 18.3 4.7 20.7 5.7A0.8 0.8 0 0 1 21.1 6.5V18.4A0.7 0.7 0 0 1 20.2 19C17.9 18 15.1 18 12.7 19.3Z"/><path data-part="leaf" data-pivot="12 12" fill="currentColor" d="M12.5 6.4C14.6 5.1 17.3 5.1 19.4 6V18.1C17.3 17.2 14.6 17.2 12.5 18.6Z"/>`,
      duotone: `<path data-part="page-l" d="M12 6.5C9.5 4.9 6.2 4.9 3.6 5.9A0.8 0.8 0 0 0 3.2 6.6V18.3A0.6 0.6 0 0 0 4 18.8C6.3 17.9 9.5 17.9 12 19.2Z" ${D}/><path data-part="page-r" d="M12 6.5C14.5 4.9 17.8 4.9 20.4 5.9A0.8 0.8 0 0 1 20.8 6.6V18.3A0.6 0.6 0 0 1 20 18.8C17.7 17.9 14.5 17.9 12 19.2Z" ${D}/><path data-part="leaf" data-pivot="12 12" d="M12 6.6C14.1 5.3 16.9 5.3 19 6.2V18C16.9 17.1 14.1 17.1 12 18.6Z" ${D}/>`,
      glass: glassCompose(
        `<path data-part="page-l" d="M11.6 6.2C9.2 4.7 5.8 4.7 3.2 5.7V18.8C5.8 17.8 9.2 17.8 11.6 19.2Z" ${GB}/><path data-part="page-r" d="M12.4 6.2C14.8 4.7 18.2 4.7 20.8 5.7V18.8C18.2 17.8 14.8 17.8 12.4 19.2Z" ${GB} opacity="0.78"/>`,
        `<path data-part="leaf" data-pivot="12 12" d="M12.1 5.8C14.4 4.5 17.3 4.5 19.6 5.5V17.9C17.3 17 14.4 17 12.1 18.4Z"/>`,
        `<g data-part="leaf" data-pivot="12 12" ${GF}><path d="M12.1 5.8C14.4 4.5 17.3 4.5 19.6 5.5V17.9C17.3 17 14.4 17 12.1 18.4Z"/></g><path data-part="leaf" data-pivot="12 12" d="M13.6 8.4H17.8M13.6 11.4H17.4M13.6 14.4H16.6" ${GBS} opacity="0.35"/>`
      ),
      stencil: `<path data-part="page-l" fill="currentColor" d="M11.1 6.4C8.8 5 5.8 5 3.5 6V18.5C5.8 17.5 8.8 17.5 11.1 18.9Z"/><path data-part="page-r" fill="currentColor" opacity="0.45" d="M12.9 6.4C15.2 5 18.2 5 20.5 6V18.5C18.2 17.5 15.2 17.5 12.9 18.9Z"/><path data-part="leaf" data-pivot="12 12" fill="currentColor" d="M12.8 6.4C14.7 5.2 17.2 5.2 19.1 6V18.1C17.2 17.3 14.7 17.3 12.8 18.6Z"/>`,
      hardware: `<path data-part="page-l" d="M11.3 6.2C8.9 4.8 5.6 4.8 3.2 5.8V18.8C5.6 17.8 8.9 17.8 11.3 19.2Z" ${HD}/><path data-part="page-r" d="M12.7 6.2C15.1 4.8 18.4 4.8 20.8 5.8V18.8C18.4 17.8 15.1 17.8 12.7 19.2Z" ${HM}/><path data-part="leaf" data-pivot="12 12" d="M12.5 6.4C14.5 5.1 17.2 5.1 19.2 6V18C17.2 17.1 14.5 17.1 12.5 18.5Z" ${HL}/>`,
      relief: `<g data-part="page-l"><path transform="translate(1.4,1.4)" d="M12 6.5C9.5 5 6 5 3.5 6V18.5C6 17.5 9.5 17.5 12 19Z" ${RS}/><path d="M12 6.5C9.5 5 6 5 3.5 6V18.5C6 17.5 9.5 17.5 12 19Z" ${RF}/></g><g data-part="page-r"><path transform="translate(1.4,1.4)" d="M12 6.5C14.5 5 18 5 20.5 6V18.5C18 17.5 14.5 17.5 12 19Z" ${RS}/><path d="M12 6.5C14.5 5 18 5 20.5 6V18.5C18 17.5 14.5 17.5 12 19Z" ${RF}/></g><path data-part="leaf" data-pivot="12 12" d="M12 6.6C14.1 5.3 17 5.3 19 6.2V18C17 17.1 14.1 17.1 12 18.6Z" ${RF}/>`,
    },
  },
  // 87. PAPERCLIP
  {
    name: "paperclip",
    label: "Paperclip",
    category: "Time & Everyday",
    motionSummary: "Wire clip slides diagonally and tilts with spring tension",
    soundSummary: "Spring-steel wire snap + paper tuck",
    svgs: {
      outline: `<path data-part="clip" data-pivot="12 12" d="M16.5 7.5L9.2 14.8A2.2 2.2 0 0 0 12.3 17.9L19.6 10.6A4.2 4.2 0 0 0 13.7 4.7L6.4 12A6 6 0 0 0 14.9 20.5L19.8 15.6" ${K}/>`,
      solid: `<path data-part="clip" data-pivot="12 12" d="M16.5 7.5L9.2 14.8A2.2 2.2 0 0 0 12.3 17.9L19.6 10.6A4.2 4.2 0 0 0 13.7 4.7L6.4 12A6 6 0 0 0 14.9 20.5L19.8 15.6" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"/>`,
      duotone: `<path data-part="clip" data-pivot="12 12" d="M16.5 7.5L9.2 14.8A2.2 2.2 0 0 0 12.3 17.9L19.6 10.6A4.2 4.2 0 0 0 13.7 4.7L6.4 12A6 6 0 0 0 14.9 20.5L19.8 15.6" ${DK}/>`,
      glass: glassCompose(
        `<g data-part="clip" data-pivot="12 12"><path transform="translate(-1.3,-1.0)" d="M16.5 7.5L9.2 14.8A2.2 2.2 0 0 0 12.3 17.9L19.6 10.6A4.2 4.2 0 0 0 13.7 4.7L6.4 12A6 6 0 0 0 14.9 20.5L19.8 15.6" fill="none" stroke="url(#g-back)" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></g>`,
        `<path data-part="clip" data-pivot="12 12" d="M16.5 7.5L9.2 14.8A2.2 2.2 0 0 0 12.3 17.9L19.6 10.6A4.2 4.2 0 0 0 13.7 4.7L6.4 12A6 6 0 0 0 14.9 20.5L19.8 15.6" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`,
        `<g data-part="clip" data-pivot="12 12"><path d="M16.5 7.5L9.2 14.8A2.2 2.2 0 0 0 12.3 17.9L19.6 10.6A4.2 4.2 0 0 0 13.7 4.7L6.4 12A6 6 0 0 0 14.9 20.5L19.8 15.6" fill="none" stroke="url(#g-frost)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.5 7.5L9.2 14.8A2.2 2.2 0 0 0 12.3 17.9L19.6 10.6A4.2 4.2 0 0 0 13.7 4.7L6.4 12A6 6 0 0 0 14.9 20.5L19.8 15.6" fill="none" stroke="url(#g-highlight)" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" opacity="0.82"/></g>`
      ),
      stencil: `<g data-part="clip" data-pivot="12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M16.5 7.5L9.2 14.8A2.2 2.2 0 0 0 12.3 17.9L18.4 11.8"/><path d="M18.8 7.5A4.2 4.2 0 0 0 13.7 4.7L6.4 12A6 6 0 0 0 14.9 20.5L19.5 15.9"/></g>`,
      hardware: `<g data-part="clip" data-pivot="12 12"><path d="M16.5 7.5L9.2 14.8A2.2 2.2 0 0 0 12.3 17.9L19.6 10.6A4.2 4.2 0 0 0 13.7 4.7L6.4 12A6 6 0 0 0 14.9 20.5L19.8 15.6" fill="none" stroke="#52525b" stroke-width="2.2" stroke-linecap="round"/><circle cx="16.5" cy="7.5" r="1.4" ${HA}/></g>`,
      relief: `<g data-part="clip" data-pivot="12 12"><path transform="translate(1.4,1.4)" d="M16.5 7.5L9.2 14.8A2.2 2.2 0 0 0 12.3 17.9L19.6 10.6A4.2 4.2 0 0 0 13.7 4.7L6.4 12A6 6 0 0 0 14.9 20.5L19.8 15.6" ${RS_LINE}/><path d="M16.5 7.5L9.2 14.8A2.2 2.2 0 0 0 12.3 17.9L19.6 10.6A4.2 4.2 0 0 0 13.7 4.7L6.4 12A6 6 0 0 0 14.9 20.5L19.8 15.6" ${RF_LINE}/></g>`,
    },
  },
  // 88. MAGNET
  {
    name: "magnet",
    label: "Magnet",
    category: "Time & Everyday",
    motionSummary: "Horseshoe magnet snaps upward as magnetic sparks draw in",
    soundSummary: "Metallic magnetic clack + flux hum",
    svgs: {
      outline: `<g data-part="magnet" ${K}><path d="M6 15V10.5A6 6 0 0 1 18 10.5V15A1 1 0 0 1 17 16H15.5A1 1 0 0 1 14.5 15V10.5A2.5 2.5 0 0 0 9.5 10.5V15A1 1 0 0 1 8.5 16H7A1 1 0 0 1 6 15Z"/><line x1="6" y1="12.5" x2="9.5" y2="12.5"/><line x1="14.5" y1="12.5" x2="18" y2="12.5"/></g><g data-part="sparks" ${K_THIN}><line x1="7.8" y1="18" x2="7.8" y2="20.4"/><line x1="16.2" y1="18" x2="16.2" y2="20.4"/></g>`,
      solid: `<path data-part="magnet" fill="currentColor" d="M5.8 15.2V10.5A6.2 6.2 0 0 1 18.2 10.5V15.2A1 1 0 0 1 17.2 16.2H15.4A1 1 0 0 1 14.4 15.2V10.5A2.4 2.4 0 0 0 9.6 10.5V15.2A1 1 0 0 1 8.6 16.2H6.8A1 1 0 0 1 5.8 15.2Z"/><g data-part="sparks" fill="currentColor"><rect x="6.9" y="17.4" width="1.8" height="3.2" rx="0.9"/><rect x="15.3" y="17.4" width="1.8" height="3.2" rx="0.9"/></g>`,
      duotone: `<g data-part="magnet"><path d="M6 15V10.5A6 6 0 0 1 18 10.5V15A1 1 0 0 1 17 16H15.5A1 1 0 0 1 14.5 15V10.5A2.5 2.5 0 0 0 9.5 10.5V15A1 1 0 0 1 8.5 16H7A1 1 0 0 1 6 15Z" ${D}/><line x1="6" y1="12.5" x2="9.5" y2="12.5" ${DK}/><line x1="14.5" y1="12.5" x2="18" y2="12.5" ${DK}/></g><g data-part="sparks" ${DK_THIN}><line x1="7.8" y1="18" x2="7.8" y2="20.4"/><line x1="16.2" y1="18" x2="16.2" y2="20.4"/></g>`,
      glass: glassCompose(
        `<g data-part="sparks" data-pivot="12 19" ${GBS}><line x1="7.8" y1="17.8" x2="7.8" y2="20.5"/><line x1="16.2" y1="17.8" x2="16.2" y2="20.5"/></g><rect data-part="magnet" data-pivot="12 10" x="5.8" y="13" width="3.8" height="2.8" rx="0.8" ${GB}/><rect data-part="magnet" data-pivot="12 10" x="14.4" y="13" width="3.8" height="2.8" rx="0.8" ${GB}/>`,
        `<path data-part="magnet" data-pivot="12 10" d="M5.8 13V10.5A6.2 6.2 0 0 1 18.2 10.5V13H14.4V10.5A2.4 2.4 0 0 0 9.6 10.5V13Z"/>`
      ),
      stencil: `<g data-part="magnet" fill="currentColor"><path d="M5.8 15A0.9 0.9 0 0 0 6.7 15.9H8.7A0.9 0.9 0 0 0 9.6 15V10.5A2.4 2.4 0 0 1 11.1 8.2V4.4A6.2 6.2 0 0 0 5.8 10.5Z"/><path d="M18.2 15A0.9 0.9 0 0 1 17.3 15.9H15.3A0.9 0.9 0 0 1 14.4 15V10.5A2.4 2.4 0 0 0 12.9 8.2V4.4A6.2 6.2 0 0 1 18.2 10.5Z"/></g><g data-part="sparks" ${K_THIN}><line x1="7.8" y1="18" x2="7.8" y2="20.4"/><line x1="16.2" y1="18" x2="16.2" y2="20.4"/></g>`,
      hardware: `<g data-part="magnet"><path d="M5.8 13V10.5A6.2 6.2 0 0 1 18.2 10.5V13H14.4V10.5A2.4 2.4 0 0 0 9.6 10.5V13Z" ${HA}/><rect x="5.8" y="12.8" width="3.8" height="2.8" rx="0.7" ${HL}/><rect x="14.4" y="12.8" width="3.8" height="2.8" rx="0.7" ${HL}/></g><g data-part="sparks" stroke="#52525b" stroke-width="1.8" stroke-linecap="round"><line x1="7.8" y1="18" x2="7.8" y2="20.4"/><line x1="16.2" y1="18" x2="16.2" y2="20.4"/></g>`,
      relief: `<g data-part="magnet"><path transform="translate(1.5,1.5)" d="M6 15V10.5A6 6 0 0 1 18 10.5V15H14.5V10.5A2.5 2.5 0 0 0 9.5 10.5V15Z" ${RS}/><path d="M6 15V10.5A6 6 0 0 1 18 10.5V15A1 1 0 0 1 17 16H15.5A1 1 0 0 1 14.5 15V10.5A2.5 2.5 0 0 0 9.5 10.5V15A1 1 0 0 1 8.5 16H7A1 1 0 0 1 6 15Z" ${RF}/></g><g data-part="sparks" ${RF_LINE}><line x1="7.8" y1="18" x2="7.8" y2="20.4"/><line x1="16.2" y1="18" x2="16.2" y2="20.4"/></g>`,
    },
  },
  // 89. PALETTE
  {
    name: "palette",
    label: "Palette",
    category: "Time & Everyday",
    motionSummary: "Artist palette tilts as active paint swatch blooms",
    soundSummary: "Wooden palette tap + studio brush dab",
    svgs: {
      outline: `<path data-part="board" data-pivot="12 12" d="M12 3.5A8.5 8.5 0 0 0 3.5 12A8.5 8.5 0 0 0 12 20.5C13.5 20.5 14.3 19.7 14.3 18.7C14.3 18 14 17.4 14 16.8C14 15.9 14.7 15.2 15.6 15.2H17.3A3.4 3.4 0 0 0 20.5 11.8A8.5 8.5 0 0 0 12 3.5Z" ${K}/><circle cx="7.4" cy="11.2" r="1.1" fill="currentColor"/><circle cx="9.8" cy="7.2" r="1.1" fill="currentColor"/><circle cx="14.2" cy="7.2" r="1.1" fill="currentColor"/><circle cx="9.2" cy="16" r="1.5" ${K_THIN}/><circle data-part="dot" cx="17" cy="10.6" r="1.25" fill="currentColor"/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><circle data-part="dot" cx="17" cy="10.6" r="1.45" fill="#000"/></mask></defs><g mask="url(#__GID__-m1)"><path data-part="board" data-pivot="12 12" fill="currentColor" fill-rule="evenodd" d="M12 3.3A8.7 8.7 0 0 0 3.3 12A8.7 8.7 0 0 0 12 20.7C13.5 20.7 14.4 19.8 14.4 18.7C14.4 18 14.1 17.4 14.1 16.8C14.1 15.8 14.8 15.1 15.8 15.1H17.4A3.5 3.5 0 0 0 20.7 11.7A8.7 8.7 0 0 0 12 3.3ZM7.4 10.1A1.1 1.1 0 1 1 7.4 12.3A1.1 1.1 0 1 1 7.4 10.1ZM9.8 6.1A1.1 1.1 0 1 1 9.8 8.3A1.1 1.1 0 1 1 9.8 6.1ZM14.2 6.1A1.1 1.1 0 1 1 14.2 8.3A1.1 1.1 0 1 1 14.2 6.1ZM9.2 14.4A1.6 1.6 0 1 1 9.2 17.6A1.6 1.6 0 1 1 9.2 14.4Z"/></g>`,
      duotone: `<path data-part="board" data-pivot="12 12" fill-rule="evenodd" d="M12 3.5A8.5 8.5 0 0 0 3.5 12A8.5 8.5 0 0 0 12 20.5C13.5 20.5 14.3 19.7 14.3 18.7C14.3 18 14 17.4 14 16.8C14 15.9 14.7 15.2 15.6 15.2H17.3A3.4 3.4 0 0 0 20.5 11.8A8.5 8.5 0 0 0 12 3.5ZM9.2 14.5A1.5 1.5 0 1 1 9.2 17.5A1.5 1.5 0 1 1 9.2 14.5Z" ${D}/><circle cx="7.4" cy="11.2" r="1.1" fill="currentColor"/><circle cx="9.8" cy="7.2" r="1.1" fill="currentColor"/><circle cx="14.2" cy="7.2" r="1.1" fill="currentColor"/><circle data-part="dot" cx="17" cy="10.6" r="1.3" fill="currentColor"/>`,
      glass: glassCompose(
        `<g data-part="board" data-pivot="12 12"><path transform="translate(-1.4,-0.9)" fill-rule="evenodd" d="M12 3.3A8.7 8.7 0 0 0 3.3 12A8.7 8.7 0 0 0 12 20.7C13.5 20.7 14.4 19.8 14.4 18.7C14.4 18 14.1 17.4 14.1 16.8C14.1 15.8 14.8 15.1 15.8 15.1H17.4A3.5 3.5 0 0 0 20.7 11.7A8.7 8.7 0 0 0 12 3.3ZM9.2 14.4A1.6 1.6 0 1 1 9.2 17.6A1.6 1.6 0 1 1 9.2 14.4Z" ${GB}/></g>`,
        `<path data-part="board" data-pivot="12 12" fill-rule="evenodd" d="M12 3.3A8.7 8.7 0 0 0 3.3 12A8.7 8.7 0 0 0 12 20.7C13.5 20.7 14.4 19.8 14.4 18.7C14.4 18 14.1 17.4 14.1 16.8C14.1 15.8 14.8 15.1 15.8 15.1H17.4A3.5 3.5 0 0 0 20.7 11.7A8.7 8.7 0 0 0 12 3.3ZM9.2 14.4A1.6 1.6 0 1 1 9.2 17.6A1.6 1.6 0 1 1 9.2 14.4Z"/>`,
        `<g data-part="board" data-pivot="12 12" ${GF}><path fill-rule="evenodd" d="M12 3.3A8.7 8.7 0 0 0 3.3 12A8.7 8.7 0 0 0 12 20.7C13.5 20.7 14.4 19.8 14.4 18.7C14.4 18 14.1 17.4 14.1 16.8C14.1 15.8 14.8 15.1 15.8 15.1H17.4A3.5 3.5 0 0 0 20.7 11.7A8.7 8.7 0 0 0 12 3.3ZM9.2 14.4A1.6 1.6 0 1 1 9.2 17.6A1.6 1.6 0 1 1 9.2 14.4Z"/></g><circle cx="7.4" cy="11.2" r="1.15" ${GB}/><circle cx="9.8" cy="7.2" r="1.15" ${GB}/><circle cx="14.2" cy="7.2" r="1.15" ${GB}/><circle data-part="dot" cx="17" cy="10.6" r="1.4" ${GH}/>`
      ),
      stencil: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><circle data-part="dot" cx="17" cy="10.6" r="1.35" fill="#000"/></mask></defs><g mask="url(#__GID__-m1)"><g data-part="board" data-pivot="12 12" fill="currentColor" fill-rule="evenodd"><path d="M11.2 3.6A8.5 8.5 0 0 0 3.5 12A8.5 8.5 0 0 0 11.2 20.4ZM7.4 10.1A1.1 1.1 0 1 1 7.4 12.3A1.1 1.1 0 1 1 7.4 10.1ZM9.5 6.2A1.05 1.05 0 1 1 9.5 8.3A1.05 1.05 0 1 1 9.5 6.2ZM9.1 14.5A1.5 1.5 0 1 1 9.1 17.5A1.5 1.5 0 1 1 9.1 14.5Z"/><path d="M12.8 3.6A8.5 8.5 0 0 1 20.5 11.8A3.4 3.4 0 0 1 17.3 15.2H15.6C14.7 15.2 14 15.9 14 16.8C14 17.4 14.3 18 14.3 18.7C14.3 19.4 13.7 20 12.8 20.3ZM14.4 6.2A1.05 1.05 0 1 1 14.4 8.3A1.05 1.05 0 1 1 14.4 6.2Z"/></g></g>`,
      hardware: `<path data-part="board" data-pivot="12 12" fill-rule="evenodd" d="M12 3.3A8.7 8.7 0 0 0 3.3 12A8.7 8.7 0 0 0 12 20.7C13.5 20.7 14.4 19.8 14.4 18.7C14.4 18 14.1 17.4 14.1 16.8C14.1 15.8 14.8 15.1 15.8 15.1H17.4A3.5 3.5 0 0 0 20.7 11.7A8.7 8.7 0 0 0 12 3.3ZM9.2 14.4A1.6 1.6 0 1 1 9.2 17.6A1.6 1.6 0 1 1 9.2 14.4Z" ${HL}/><circle cx="7.4" cy="11.2" r="1.1" ${HD}/><circle cx="9.8" cy="7.2" r="1.1" ${HD}/><circle cx="14.2" cy="7.2" r="1.1" ${HD}/><circle data-part="dot" cx="17" cy="10.6" r="1.4" ${HA}/>`,
      relief: `<g data-part="board" data-pivot="12 12"><path transform="translate(1.5,1.5)" fill-rule="evenodd" d="M12 3.5A8.5 8.5 0 0 0 3.5 12A8.5 8.5 0 0 0 12 20.5C13.5 20.5 14.3 19.7 14.3 18.7C14.3 18 14 17.4 14 16.8C14 15.9 14.7 15.2 15.6 15.2H17.3A3.4 3.4 0 0 0 20.5 11.8A8.5 8.5 0 0 0 12 3.5ZM9.2 14.5A1.5 1.5 0 1 1 9.2 17.5A1.5 1.5 0 1 1 9.2 14.5Z" ${RS}/><path fill-rule="evenodd" d="M12 3.5A8.5 8.5 0 0 0 3.5 12A8.5 8.5 0 0 0 12 20.5C13.5 20.5 14.3 19.7 14.3 18.7C14.3 18 14 17.4 14 16.8C14 15.9 14.7 15.2 15.6 15.2H17.3A3.4 3.4 0 0 0 20.5 11.8A8.5 8.5 0 0 0 12 3.5ZM9.2 14.5A1.5 1.5 0 1 1 9.2 17.5A1.5 1.5 0 1 1 9.2 14.5Z" ${RF}/></g><circle cx="7.4" cy="11.2" r="1.05" ${RS}/><circle cx="9.8" cy="7.2" r="1.05" ${RS}/><circle cx="14.2" cy="7.2" r="1.05" ${RS}/><circle data-part="dot" cx="17" cy="10.6" r="1.25" ${RS}/>`,
    },
  },
  // 90. DICE
  {
    name: "dice",
    label: "Dice",
    category: "Time & Everyday",
    motionSummary: "Six-sided die hops upward and spins 90° mid-roll",
    soundSummary: "Wooden table dice rattle + settle",
    svgs: {
      outline: `<g data-part="cube" data-pivot="12 12"><rect x="4" y="4" width="16" height="16" rx="3" ${K}/><circle cx="8.5" cy="8.5" r="1.1" fill="currentColor"/><circle cx="15.5" cy="8.5" r="1.1" fill="currentColor"/><circle cx="12" cy="12" r="1.1" fill="currentColor"/><circle cx="8.5" cy="15.5" r="1.1" fill="currentColor"/><circle cx="15.5" cy="15.5" r="1.1" fill="currentColor"/></g>`,
      solid: `<path data-part="cube" data-pivot="12 12" fill="currentColor" fill-rule="evenodd" d="M6.8 3.8H17.2A3 3 0 0 1 20.2 6.8V17.2A3 3 0 0 1 17.2 20.2H6.8A3 3 0 0 1 3.8 17.2V6.8A3 3 0 0 1 6.8 3.8ZM8.5 7.3A1.2 1.2 0 1 0 8.5 9.7A1.2 1.2 0 1 0 8.5 7.3ZM15.5 7.3A1.2 1.2 0 1 0 15.5 9.7A1.2 1.2 0 1 0 15.5 7.3ZM12 10.8A1.2 1.2 0 1 0 12 13.2A1.2 1.2 0 1 0 12 10.8ZM8.5 14.3A1.2 1.2 0 1 0 8.5 16.7A1.2 1.2 0 1 0 8.5 14.3ZM15.5 14.3A1.2 1.2 0 1 0 15.5 16.7A1.2 1.2 0 1 0 15.5 14.3Z"/>`,
      duotone: `<g data-part="cube" data-pivot="12 12"><rect x="4" y="4" width="16" height="16" rx="3" ${D}/><circle cx="8.5" cy="8.5" r="1.1" fill="currentColor"/><circle cx="15.5" cy="8.5" r="1.1" fill="currentColor"/><circle cx="12" cy="12" r="1.1" fill="currentColor"/><circle cx="8.5" cy="15.5" r="1.1" fill="currentColor"/><circle cx="15.5" cy="15.5" r="1.1" fill="currentColor"/></g>`,
      glass: glassCompose(
        `<g data-part="cube" data-pivot="12 12"><rect transform="translate(-1.5,-1)" x="4" y="4" width="16" height="16" rx="3" ${GB}/></g>`,
        `<rect data-part="cube" data-pivot="12 12" x="4" y="4" width="16" height="16" rx="3"/>`,
        `<g data-part="cube" data-pivot="12 12" ${GF}><rect x="4" y="4" width="16" height="16" rx="3"/></g><g data-part="cube" data-pivot="12 12" ${GB}><circle cx="8.5" cy="8.5" r="1.2"/><circle cx="15.5" cy="8.5" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="8.5" cy="15.5" r="1.2"/><circle cx="15.5" cy="15.5" r="1.2"/></g>`
      ),
      stencil: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><g data-part="cube" data-pivot="12 12" fill="#000"><circle cx="8.2" cy="8.5" r="1.15"/><circle cx="15.8" cy="8.5" r="1.15"/><circle cx="8.2" cy="15.5" r="1.15"/><circle cx="15.8" cy="15.5" r="1.15"/></g></mask></defs><g mask="url(#__GID__-m1)"><g data-part="cube" data-pivot="12 12" fill="currentColor"><path d="M6.8 4H11.2V20H6.8A2.8 2.8 0 0 1 4 17.2V6.8A2.8 2.8 0 0 1 6.8 4Z"/><path d="M12.8 4H17.2A2.8 2.8 0 0 1 20 6.8V17.2A2.8 2.8 0 0 1 17.2 20H12.8Z"/></g></g>`,
      hardware: `<g data-part="cube" data-pivot="12 12"><rect x="4" y="4" width="16" height="16" rx="3" ${HL}/><circle cx="8.5" cy="8.5" r="1.2" ${HD}/><circle cx="15.5" cy="8.5" r="1.2" ${HD}/><circle cx="12" cy="12" r="1.3" ${HA}/><circle cx="8.5" cy="15.5" r="1.2" ${HD}/><circle cx="15.5" cy="15.5" r="1.2" ${HD}/></g>`,
      relief: `<g data-part="cube" data-pivot="12 12"><rect transform="translate(1.5,1.5)" x="4" y="4" width="16" height="16" rx="3" ${RS}/><rect x="4" y="4" width="16" height="16" rx="3" ${RF}/><circle cx="8.5" cy="8.5" r="1.1" ${RS}/><circle cx="15.5" cy="8.5" r="1.1" ${RS}/><circle cx="12" cy="12" r="1.1" ${RS}/><circle cx="8.5" cy="15.5" r="1.1" ${RS}/><circle cx="15.5" cy="15.5" r="1.1" ${RS}/></g>`,
    },
  },
];
