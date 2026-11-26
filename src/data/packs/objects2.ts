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

export const OBJECTS2_ICONS: IconDef[] = [
  // 201. STOPWATCH
  {
    name: "stopwatch",
    label: "Stopwatch",
    category: "Time & Everyday",
    motionSummary: "Top crown plunger depresses as sweep hand ticks forward crisply",
    soundSummary: "Mechanical chronograph plunger click + crisp stopwatch tick",
    svgs: {
      outline: `<g data-part="button" ${K}><line x1="10" y1="3.5" x2="14" y2="3.5"/><line x1="12" y1="3.5" x2="12" y2="5.8"/></g><circle cx="12" cy="13" r="7.2" ${K}/><line data-part="hand" data-pivot="12 13" x1="12" y1="13" x2="15.2" y2="9.8" ${K}/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><path data-part="hand" data-pivot="12 13" d="M12 13L15.4 9.6" stroke="#000" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="13" r="1.2" fill="#000"/></mask></defs><path data-part="button" fill="currentColor" d="M9.6 3.3H14.4A0.8 0.8 0 0 1 14.4 4.9H12.9V6.2H11.1V4.9H9.6A0.8 0.8 0 0 1 9.6 3.3Z"/><circle cx="12" cy="13.2" r="7.4" fill="currentColor" mask="url(#__GID__-m1)"/>`,
      duotone: `<g data-part="button" ${DK}><line x1="10" y1="3.5" x2="14" y2="3.5"/><line x1="12" y1="3.5" x2="12" y2="5.8"/></g><circle cx="12" cy="13" r="7.2" ${D}/><line data-part="hand" data-pivot="12 13" x1="12" y1="13" x2="15.2" y2="9.8" ${DK}/>`,
      glass: glassCompose(
        `<path data-part="button" d="M9.6 3.3H14.4V4.9H12.9V6.4H11.1V4.9H9.6Z" ${GB}/>`,
        `<circle cx="12" cy="13.2" r="7.4"/>`,
        `<g ${GF}><circle cx="12" cy="13.2" r="7.4"/></g><line data-part="hand" data-pivot="12 13.2" x1="12" y1="13.2" x2="15.2" y2="10" ${GBS}/>`
      ),
      stencil: `<g fill="currentColor"><path data-part="button" d="M9.8 3.4H14.2V4.8H12.8V5.8H11.2V4.8H9.8Z"/><path d="M6.8 8.2A7.2 7.2 0 0 1 17.2 8.2L15.8 9.6A5.2 5.2 0 0 0 8.2 9.6Z"/><path d="M17.2 18.2A7.2 7.2 0 0 1 6.8 18.2L8.2 16.8A5.2 5.2 0 0 0 15.8 16.8Z"/><line data-part="hand" data-pivot="12 13" x1="12" y1="13" x2="15.2" y2="9.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></g>`,
      hardware: `<rect data-part="button" x="9.8" y="3.3" width="4.4" height="2.4" rx="0.8" ${HA}/><circle cx="12" cy="13.2" r="7.4" ${HD}/><circle cx="12" cy="13.2" r="5.6" ${HL}/><line data-part="hand" data-pivot="12 13.2" x1="12" y1="13.2" x2="15.2" y2="10" stroke="#ff6b35" stroke-width="1.8" stroke-linecap="round"/>`,
      relief: `<g data-part="button" ${RF_LINE}><line x1="10" y1="3.5" x2="14" y2="3.5"/><line x1="12" y1="3.5" x2="12" y2="5.8"/></g><circle transform="translate(1.3,1.3)" cx="12" cy="13" r="7.2" ${RS}/><circle cx="12" cy="13" r="7.2" ${RF}/><line data-part="hand" data-pivot="12 13" x1="12" y1="13" x2="15.2" y2="9.8" ${RF_LINE}/>`,
    },
  },
  // 202. WATCH
  {
    name: "watch",
    label: "Wristwatch",
    category: "Time & Everyday",
    motionSummary: "Minute and hour hands tick cleanly inside lugged steel watch bezel",
    soundSummary: "Crisp quartz wristwatch double-tick",
    svgs: {
      outline: `<path d="M9 6.5L9.5 3.5H14.5L15 6.5M9 17.5L9.5 20.5H14.5L15 17.5" ${K}/><circle data-part="dial" cx="12" cy="12" r="5.5" ${K}/><polyline data-part="hands" data-pivot="12 12" points="12 9 12 12 14.2 13.4" ${K_THIN}/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><polyline data-part="hands" data-pivot="12 12" points="12 9 12 12 14.2 13.4" fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></mask></defs><path fill="currentColor" opacity="0.65" d="M9.4 3.5H14.6L15.2 7H8.8ZM8.8 17H15.2L14.6 20.5H9.4Z"/><circle data-part="dial" cx="12" cy="12" r="5.8" fill="currentColor" mask="url(#__GID__-m1)"/>`,
      duotone: `<path d="M9 6.5L9.5 3.5H14.5L15 6.5M9 17.5L9.5 20.5H14.5L15 17.5" ${DK}/><circle data-part="dial" cx="12" cy="12" r="5.5" ${D}/><polyline data-part="hands" data-pivot="12 12" points="12 9 12 12 14.2 13.4" ${DK_THIN}/>`,
      glass: glassCompose(
        `<path d="M9.4 3.5H14.6L15.2 7H8.8ZM8.8 17H15.2L14.6 20.5H9.4Z" ${GB}/>`,
        `<circle data-part="dial" cx="12" cy="12" r="5.8"/>`,
        `<g data-part="dial" ${GF}><circle cx="12" cy="12" r="5.8"/></g><polyline data-part="hands" data-pivot="12 12" points="12 9 12 12 14.2 13.4" ${GBS}/>`
      ),
      stencil: `<g fill="currentColor"><rect x="9.4" y="3.5" width="5.2" height="2.6" rx="0.6"/><rect x="9.4" y="17.9" width="5.2" height="2.6" rx="0.6"/><g data-part="dial"><path d="M7.4 8.4A5.6 5.6 0 0 1 16.6 8.4L15.2 9.8A3.8 3.8 0 0 0 8.8 9.8Z"/><path d="M16.6 15.6A5.6 5.6 0 0 1 7.4 15.6L8.8 14.2A3.8 3.8 0 0 0 15.2 14.2Z"/></g><polyline data-part="hands" data-pivot="12 12" points="12 9.2 12 12 14 13.2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></g>`,
      hardware: `<path d="M9.4 3.5H14.6L15.2 7H8.8ZM8.8 17H15.2L14.6 20.5H9.4Z" ${HD}/><circle data-part="dial" cx="12" cy="12" r="5.8" ${HL}/><polyline data-part="hands" data-pivot="12 12" points="12 9 12 12 14.2 13.4" fill="none" stroke="#ff6b35" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>`,
      relief: `<path d="M9 6.5L9.5 3.5H14.5L15 6.5M9 17.5L9.5 20.5H14.5L15 17.5" ${RF_LINE}/><g data-part="dial"><circle transform="translate(1.3,1.3)" cx="12" cy="12" r="5.5" ${RS}/><circle cx="12" cy="12" r="5.5" ${RF}/></g><polyline data-part="hands" data-pivot="12 12" points="12 9 12 12 14.2 13.4" ${RF_LINE}/>`,
    },
  },
  // 203. GLASSES
  {
    name: "glasses",
    label: "Eyeglasses",
    category: "Time & Everyday",
    motionSummary: "Eyeglass frames lift slightly as diagonal lens reflection shimmers",
    soundSummary: "Crisp optical glass lens gleam ping",
    svgs: {
      outline: `<g data-part="frame" ${K}><circle cx="7" cy="13" r="3.4"/><circle cx="17" cy="13" r="3.4"/><path d="M10.4 13C11.2 12.2 12.8 12.2 13.6 13"/><path d="M3.6 12.5L5.2 7.5H7.2M20.4 12.5L18.8 7.5H16.8" ${K_THIN}/></g><line data-part="glint" x1="5.8" y1="11.8" x2="7.4" y2="10.2" ${K_THIN}/>`,
      solid: `<g data-part="frame" fill="currentColor"><path fill-rule="evenodd" d="M7 9.2A3.8 3.8 0 1 0 7 16.8A3.8 3.8 0 1 0 7 9.2ZM7 11A2 2 0 1 0 7 15A2 2 0 1 0 7 11Z"/><path fill-rule="evenodd" d="M17 9.2A3.8 3.8 0 1 0 17 16.8A3.8 3.8 0 1 0 17 9.2ZM17 11A2 2 0 1 0 17 15A2 2 0 1 0 17 11Z"/><path d="M10.3 12.6H13.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M3.6 12.5L5.2 7.5H7.2M20.4 12.5L18.8 7.5H16.8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></g><line data-part="glint" x1="5.8" y1="11.8" x2="7.4" y2="10.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>`,
      duotone: `<g data-part="frame"><circle cx="7" cy="13" r="3.4" ${D}/><circle cx="17" cy="13" r="3.4" ${D}/><path d="M10.4 13C11.2 12.2 12.8 12.2 13.6 13" ${DK}/><path d="M3.6 12.5L5.2 7.5H7.2M20.4 12.5L18.8 7.5H16.8" ${DK_THIN}/></g><line data-part="glint" x1="5.8" y1="11.8" x2="7.4" y2="10.2" ${DK_THIN}/>`,
      glass: glassCompose(
        `<path data-part="frame" d="M3.6 12.5L5.2 7.5H7.2M20.4 12.5L18.8 7.5H16.8M10.4 13H13.6" ${GBS}/>`,
        `<g data-part="frame"><circle cx="7" cy="13" r="3.6"/><circle cx="17" cy="13" r="3.6"/></g>`,
        `<g data-part="frame" ${GF}><circle cx="7" cy="13" r="3.6"/><circle cx="17" cy="13" r="3.6"/></g><line data-part="glint" x1="5.8" y1="11.8" x2="7.4" y2="10.2" ${GH}/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="frame"><circle cx="7" cy="13" r="3.2"/><circle cx="17" cy="13" r="3.2"/><rect x="10.5" y="12.1" width="3" height="1.6" rx="0.8"/></g><line data-part="glint" x1="5.8" y1="11.8" x2="7.4" y2="10.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></g>`,
      hardware: `<g data-part="frame"><path d="M10.4 13H13.6" stroke="#52525b" stroke-width="2"/><circle cx="7" cy="13" r="3.6" ${HL}/><circle cx="17" cy="13" r="3.6" ${HL}/></g><line data-part="glint" x1="5.8" y1="11.8" x2="7.4" y2="10.2" stroke="#ff6b35" stroke-width="1.6" stroke-linecap="round"/>`,
      relief: `<g data-part="frame"><circle transform="translate(1.2,1.2)" cx="7" cy="13" r="3.4" ${RS}/><circle transform="translate(1.2,1.2)" cx="17" cy="13" r="3.4" ${RS}/><circle cx="7" cy="13" r="3.4" ${RF}/><circle cx="17" cy="13" r="3.4" ${RF}/><path d="M10.4 13H13.6" ${RF_LINE}/></g><line data-part="glint" x1="5.8" y1="11.8" x2="7.4" y2="10.2" ${RF_LINE}/>`,
    },
  },
  // 204. BACKPACK
  {
    name: "backpack",
    label: "Backpack",
    category: "Time & Everyday",
    motionSummary: "Top pack flap lifts cleanly while lower zippered pocket bounces",
    soundSummary: "Nylon backpack zipper pull zip + buckle snap",
    svgs: {
      outline: `<path data-part="flap" d="M9.5 6.5V5A2.5 2.5 0 0 1 14.5 5V6.5M5.5 11A6.5 6.5 0 0 1 18.5 11" ${K}/><path d="M5.5 11V18.2A1.8 1.8 0 0 0 7.3 20H16.7A1.8 1.8 0 0 0 18.5 18.2V11" ${K}/><rect data-part="pocket" x="8" y="13.5" width="8" height="4.2" rx="1" ${K_THIN}/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><rect data-part="pocket" x="7.8" y="13.2" width="8.4" height="4.4" rx="1.1" fill="#000"/></mask></defs><path data-part="flap" d="M9.5 6.5V5A2.5 2.5 0 0 1 14.5 5V6.5" ${K}/><path fill="currentColor" mask="url(#__GID__-m1)" d="M5.2 11.2A6.8 6.8 0 0 1 18.8 11.2V18.2A2 2 0 0 1 16.8 20.2H7.2A2 2 0 0 1 5.2 18.2Z"/><rect data-part="pocket" x="8.4" y="13.8" width="7.2" height="3.2" rx="0.8" fill="currentColor"/>`,
      duotone: `<path data-part="flap" d="M9.5 6.5V5A2.5 2.5 0 0 1 14.5 5V6.5" ${DK}/><path d="M5.5 11A6.5 6.5 0 0 1 18.5 11V18.2A1.8 1.8 0 0 1 16.7 20H7.3A1.8 1.8 0 0 1 5.5 18.2Z" ${D}/><rect data-part="pocket" x="8" y="13.5" width="8" height="4.2" rx="1" ${D}/>`,
      glass: glassCompose(
        `<path data-part="flap" d="M9.5 6.8V5A2.5 2.5 0 0 1 14.5 5V6.8" ${GBS}/>`,
        `<path d="M5.2 11.2A6.8 6.8 0 0 1 18.8 11.2V18.2A2 2 0 0 1 16.8 20.2H7.2A2 2 0 0 1 5.2 18.2Z"/>`,
        `<g ${GF}><path d="M5.2 11.2A6.8 6.8 0 0 1 18.8 11.2V18.2A2 2 0 0 1 16.8 20.2H7.2A2 2 0 0 1 5.2 18.2Z"/></g><rect data-part="pocket" x="8" y="13.5" width="8" height="4.2" rx="1" ${GB}/>`
      ),
      stencil: `<g fill="currentColor"><path data-part="flap" d="M5.4 11A6.6 6.6 0 0 1 18.6 11V12.2H5.4Z"/><path d="M5.4 13.4H7.4V18.4H16.6V13.4H18.6V18.2A2 2 0 0 1 16.6 20.2H7.4A2 2 0 0 1 5.4 18.2Z"/><rect data-part="pocket" x="8.6" y="13.6" width="6.8" height="3.8" rx="0.9"/></g>`,
      hardware: `<path data-part="flap" d="M9.5 6.8V5A2.5 2.5 0 0 1 14.5 5V6.8" fill="none" stroke="#52525b" stroke-width="1.8"/><path d="M5.2 11.2A6.8 6.8 0 0 1 18.8 11.2V18.2A2 2 0 0 1 16.8 20.2H7.2A2 2 0 0 1 5.2 18.2Z" ${HD}/><rect data-part="pocket" x="8" y="13.5" width="8" height="4.2" rx="1" ${HA}/>`,
      relief: `<path data-part="flap" d="M9.5 6.5V5A2.5 2.5 0 0 1 14.5 5V6.5" ${RF_LINE}/><path transform="translate(1.3,1.3)" d="M5.5 11A6.5 6.5 0 0 1 18.5 11V18.2A1.8 1.8 0 0 1 16.7 20H7.3A1.8 1.8 0 0 1 5.5 18.2Z" ${RS}/><path d="M5.5 11A6.5 6.5 0 0 1 18.5 11V18.2A1.8 1.8 0 0 1 16.7 20H7.3A1.8 1.8 0 0 1 5.5 18.2Z" ${RF}/><rect data-part="pocket" x="8" y="13.5" width="8" height="4.2" rx="1" ${RF}/>`,
    },
  },
  // 205. FLASHLIGHT
  {
    name: "flashlight",
    label: "Flashlight",
    category: "Time & Everyday",
    motionSummary: "Angled tactical torch kicks subtly as three diagonal light beams flare top-right",
    soundSummary: "Crisp tactical tail-switch click + bright beam burst",
    svgs: {
      outline: `<g data-part="body" data-pivot="10 14"><g transform="rotate(-45 10 14)" ${K}><rect x="3" y="11.6" width="9.8" height="4.8" rx="1.4"/><path d="M12.8 11.6L16 9.8V18.2L12.8 16.4Z"/><circle cx="8.8" cy="14" r="0.7" fill="currentColor" stroke="none"/></g></g><g data-part="beam" data-pivot="15.5 8.5" ${K_THIN}><line x1="17.2" y1="6.8" x2="20.4" y2="3.6"/><line x1="14.6" y1="5.2" x2="16" y2="2.6"/><line x1="18.8" y1="9.4" x2="21.4" y2="8"/></g>`,
      solid: `<g data-part="body" data-pivot="10 14"><g transform="rotate(-45 10 14)" fill="currentColor"><path fill-rule="evenodd" d="M3 11.4H12.4L16.2 9.2V18.8L12.4 16.6H3A1.4 1.4 0 0 1 1.6 15.2V12.8A1.4 1.4 0 0 1 3 11.4ZM8.6 13A1 1 0 1 0 8.6 15A1 1 0 1 0 8.6 13Z"/></g></g><g data-part="beam" data-pivot="15.5 8.5" fill="currentColor"><rect x="16.4" y="4.3" width="4.4" height="1.7" rx="0.85" transform="rotate(-45 18.6 5.2)"/><rect x="14.2" y="3.1" width="3.2" height="1.6" rx="0.8" transform="rotate(-68 15.8 3.9)"/><rect x="18.3" y="7.8" width="3.2" height="1.6" rx="0.8" transform="rotate(-22 19.9 8.6)"/></g>`,
      duotone: `<g data-part="body" data-pivot="10 14"><g transform="rotate(-45 10 14)"><path d="M3 11.6H12.8L16 9.8V18.2L12.8 16.4H3A1.4 1.4 0 0 1 1.6 15V13A1.4 1.4 0 0 1 3 11.6Z" ${D}/><line x1="12.8" y1="11.6" x2="12.8" y2="16.4" ${DK_THIN}/><circle cx="8.8" cy="14" r="0.85" fill="currentColor"/></g></g><g data-part="beam" data-pivot="15.5 8.5" ${DK}><line x1="17.2" y1="6.8" x2="20.4" y2="3.6"/><line x1="14.6" y1="5.2" x2="16" y2="2.6"/><line x1="18.8" y1="9.4" x2="21.4" y2="8"/></g>`,
      glass: glassCompose(
        `<g data-part="beam" data-pivot="15.5 8.5" ${GBS}><line x1="17.2" y1="6.8" x2="20.4" y2="3.6"/><line x1="14.6" y1="5.2" x2="16" y2="2.6"/><line x1="18.8" y1="9.4" x2="21.4" y2="8"/></g><g data-part="body" data-pivot="10 14"><g transform="rotate(-45 10 14)"><path d="M12.4 11.4L16.2 9.2V18.8L12.4 16.6Z" ${GB}/></g></g>`,
        `<g data-part="body" data-pivot="10 14"><g transform="rotate(-45 10 14)"><path d="M3 11.4H12.4L16.2 9.2V18.8L12.4 16.6H3A1.4 1.4 0 0 1 1.6 15.2V12.8A1.4 1.4 0 0 1 3 11.4Z"/></g></g>`,
        `<g data-part="body" data-pivot="10 14"><g transform="rotate(-45 10 14)"><path d="M3 11.4H12.4L16.2 9.2V18.8L12.4 16.6H3A1.4 1.4 0 0 1 1.6 15.2V12.8A1.4 1.4 0 0 1 3 11.4Z" ${GF}/><circle cx="8.8" cy="14" r="1" ${GB}/></g></g>`
      ),
      stencil: `<g fill="currentColor"><g data-part="body" data-pivot="10 14"><g transform="rotate(-45 10 14)"><rect x="2.2" y="11.6" width="9.4" height="4.8" rx="1.4"/><polygon points="12.6 11.4 16.2 9.4 16.2 18.6 12.6 16.6"/></g></g><g data-part="beam" data-pivot="15.5 8.5"><rect x="16.4" y="4.3" width="4.2" height="1.6" rx="0.8" transform="rotate(-45 18.5 5.1)"/><rect x="14.2" y="3.1" width="3" height="1.5" rx="0.75" transform="rotate(-68 15.7 3.8)"/><rect x="18.3" y="7.8" width="3" height="1.5" rx="0.75" transform="rotate(-22 19.8 8.5)"/></g></g>`,
      hardware: `<g data-part="body" data-pivot="10 14"><g transform="rotate(-45 10 14)"><rect x="2.2" y="11.4" width="10.4" height="5.2" rx="1.4" ${HD}/><path d="M12.4 11.4L16.2 9.2V18.8L12.4 16.6Z" ${HL}/><circle cx="8.6" cy="14" r="1.1" ${HA}/></g></g><g data-part="beam" data-pivot="15.5 8.5" stroke="#ff6b35" stroke-width="1.85" stroke-linecap="round"><line x1="17.2" y1="6.8" x2="20.4" y2="3.6"/><line x1="14.6" y1="5.2" x2="16" y2="2.6"/><line x1="18.8" y1="9.4" x2="21.4" y2="8"/></g>`,
      relief: `<g data-part="body" data-pivot="10 14"><g transform="translate(1.2,1.2) rotate(-45 10 14)"><path d="M3 11.6H12.8L16 9.8V18.2L12.8 16.4H3A1.4 1.4 0 0 1 1.6 15V13A1.4 1.4 0 0 1 3 11.6Z" ${RS}/></g><g transform="rotate(-45 10 14)"><path d="M3 11.6H12.8L16 9.8V18.2L12.8 16.4H3A1.4 1.4 0 0 1 1.6 15V13A1.4 1.4 0 0 1 3 11.6Z" ${RF}/><circle cx="8.8" cy="14" r="0.9" ${RS}/></g></g><g data-part="beam" data-pivot="15.5 8.5" ${RF_LINE}><line x1="17.2" y1="6.8" x2="20.4" y2="3.6"/><line x1="14.6" y1="5.2" x2="16" y2="2.6"/><line x1="18.8" y1="9.4" x2="21.4" y2="8"/></g>`,
    },
  },
  // 206. CANDLE
  {
    name: "candle",
    label: "Candle",
    category: "Time & Everyday",
    motionSummary: "Teardrop flame dances & sways gently above cylindrical wax pillar",
    soundSummary: "Match strike whisper + warm candle flame flutter",
    svgs: {
      outline: `<path data-part="flame" data-pivot="12 10" d="M12 3.4C12 3.4 14.8 6.2 14.8 8.3A2.8 2.8 0 0 1 9.2 8.3C9.2 6.2 12 3.4 12 3.4Z" ${K}/><g data-part="wax"><line x1="12" y1="10.8" x2="12" y2="12.5" ${K_THIN}/><path d="M8.5 12.5H15.5V19.6A1.2 1.2 0 0 1 14.3 20.8H9.7A1.2 1.2 0 0 1 8.5 19.6Z" ${K}/><path d="M10.4 12.5V15.4A0.8 0.8 0 0 0 12 15.4V12.5" ${K_THIN}/></g>`,
      solid: `<path data-part="flame" data-pivot="12 10" fill="currentColor" d="M12 3.2C12 3.2 15 6.1 15 8.4A3 3 0 0 1 9 8.4C9 6.1 12 3.2 12 3.2Z"/><g data-part="wax" fill="currentColor"><rect x="11.3" y="10.8" width="1.4" height="2" rx="0.7"/><path d="M8.4 12.5H15.6V19.5A1.3 1.3 0 0 1 14.3 20.8H9.7A1.3 1.3 0 0 1 8.4 19.5Z"/></g>`,
      duotone: `<path data-part="flame" data-pivot="12 10" d="M12 3.4C12 3.4 14.8 6.2 14.8 8.3A2.8 2.8 0 0 1 9.2 8.3C9.2 6.2 12 3.4 12 3.4Z" ${D}/><g data-part="wax"><line x1="12" y1="10.8" x2="12" y2="12.5" ${DK_THIN}/><rect x="8.5" y="12.5" width="7" height="8.2" rx="1.2" ${D}/></g>`,
      glass: glassCompose(
        `<path data-part="flame" data-pivot="12 10" d="M12 3.2C12 3.2 15 6.1 15 8.4A3 3 0 0 1 9 8.4C9 6.1 12 3.2 12 3.2Z" ${GB}/><rect data-part="wax" x="11.3" y="10.8" width="1.4" height="2" rx="0.7" ${GB}/>`,
        `<rect data-part="wax" x="8.4" y="12.5" width="7.2" height="8.3" rx="1.3"/>`
      ),
      stencil: `<g fill="currentColor"><path data-part="flame" data-pivot="12 10" d="M12 3.4C12 3.4 14.8 6.2 14.8 8.3A2.8 2.8 0 0 1 9.2 8.3C9.2 6.2 12 3.4 12 3.4Z"/><g data-part="wax"><rect x="11.3" y="10.8" width="1.4" height="1.8" rx="0.7"/><rect x="8.5" y="12.5" width="7" height="3.2" rx="1"/><rect x="8.5" y="16.7" width="7" height="4" rx="1"/></g></g>`,
      hardware: `<path data-part="flame" data-pivot="12 10" d="M12 3.2C12 3.2 15 6.1 15 8.4A3 3 0 0 1 9 8.4C9 6.1 12 3.2 12 3.2Z" ${HA}/><g data-part="wax"><rect x="11.3" y="10.8" width="1.4" height="2" rx="0.7" ${HD}/><rect x="8.4" y="12.5" width="7.2" height="8.3" rx="1.3" ${HL}/></g>`,
      relief: `<g data-part="flame" data-pivot="12 10"><path transform="translate(1.2,1.2)" d="M12 3.4C12 3.4 14.8 6.2 14.8 8.3A2.8 2.8 0 0 1 9.2 8.3C9.2 6.2 12 3.4 12 3.4Z" ${RS}/><path d="M12 3.4C12 3.4 14.8 6.2 14.8 8.3A2.8 2.8 0 0 1 9.2 8.3C9.2 6.2 12 3.4 12 3.4Z" ${RF}/></g><g data-part="wax"><line x1="12" y1="10.8" x2="12" y2="12.5" ${RF_LINE}/><rect transform="translate(1.2,1.2)" x="8.5" y="12.5" width="7" height="8.2" rx="1.2" ${RS}/><rect x="8.5" y="12.5" width="7" height="8.2" rx="1.2" ${RF}/></g>`,
    },
  },
  // 207. BROOM
  {
    name: "broom",
    label: "Broom",
    category: "Time & Everyday",
    motionSummary: "Wooden broom sweeps side-to-side cleanly from top handle pivot",
    soundSummary: "Crisp straw bristle floor sweep swish-swish",
    svgs: {
      outline: `<g data-part="broom" data-pivot="14 4" ${K}><line x1="14.5" y1="3.8" x2="10.2" y2="12"/><path d="M7.2 12H13.5L15 19.5H5.2Z"/><line x1="8.5" y1="16.5" x2="8" y2="19.5" ${K_THIN}/><line x1="11.5" y1="16.5" x2="11.8" y2="19.5" ${K_THIN}/></g>`,
      solid: `<g data-part="broom" data-pivot="14 4" fill="currentColor"><path d="M13.8 3.5A1 1 0 0 1 15.6 4.3L11.8 12H9.8Z"/><path d="M7 12H13.8L15.2 19.8H5Z"/></g>`,
      duotone: `<g data-part="broom" data-pivot="14 4"><line x1="14.5" y1="3.8" x2="10.2" y2="12" ${DK}/><path d="M7.2 12H13.5L15 19.5H5.2Z" ${D}/></g>`,
      glass: glassCompose(
        `<path data-part="broom" data-pivot="14 4" d="M13.8 3.5A1 1 0 0 1 15.6 4.3L11.8 12H9.8Z" ${GB}/>`,
        `<path data-part="broom" data-pivot="14 4" d="M7 12H13.8L15.2 19.8H5Z"/>`
      ),
      stencil: `<g data-part="broom" data-pivot="14 4" fill="currentColor"><path d="M13.8 3.5A1 1 0 0 1 15.6 4.3L12.1 11.2H10.1Z"/><polygon points="7 12.4 9.8 12.4 8.8 19.6 5.2 19.6"/><polygon points="11 12.4 13.8 12.4 15 19.6 10.6 19.6"/></g>`,
      hardware: `<g data-part="broom" data-pivot="14 4"><path d="M13.8 3.5A1 1 0 0 1 15.6 4.3L11.8 12H9.8Z" ${HD}/><path d="M7 12H13.8L15.2 19.8H5Z" ${HA}/></g>`,
      relief: `<g data-part="broom" data-pivot="14 4"><line x1="14.5" y1="3.8" x2="10.2" y2="12" ${RF_LINE}/><path transform="translate(1.3,1.3)" d="M7.2 12H13.5L15 19.5H5.2Z" ${RS}/><path d="M7.2 12H13.5L15 19.5H5.2Z" ${RF}/></g>`,
    },
  },
  // 208. SPRAY
  {
    name: "spray",
    label: "Spray Bottle",
    category: "Time & Everyday",
    motionSummary: "Trigger handle squeezes inward ejecting fine mist spray outward",
    soundSummary: "Pressurized spray bottle trigger squeeze + fine mist hiss",
    svgs: {
      outline: `<path d="M7.5 11H14L15.2 20H6.3ZM9 11V7.5H13.8V11" ${K}/><line data-part="trigger" data-pivot="13.8 8.5" x1="13.8" y1="8.8" x2="16.2" y2="10.2" ${K}/><g data-part="mist" ${K_THIN}><circle cx="18" cy="6.2" r="0.6" fill="currentColor"/><circle cx="19.8" cy="8.5" r="0.6" fill="currentColor"/><circle cx="18" cy="10.8" r="0.6" fill="currentColor"/></g>`,
      solid: `<path fill="currentColor" d="M8.8 7H14V10.6L15.4 20.2H6.2L7.6 10.6H8.8Z"/><line data-part="trigger" data-pivot="13.8 8.5" x1="13.8" y1="8.6" x2="16.4" y2="10.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><g data-part="mist" fill="currentColor"><circle cx="18" cy="6.2" r="0.9"/><circle cx="20" cy="8.5" r="0.9"/><circle cx="18" cy="10.8" r="0.9"/></g>`,
      duotone: `<path d="M7.5 11H14L15.2 20H6.3Z" ${D}/><path d="M9 11V7.5H13.8V11" ${DK}/><line data-part="trigger" data-pivot="13.8 8.5" x1="13.8" y1="8.8" x2="16.2" y2="10.2" ${DK}/><g data-part="mist" fill="currentColor"><circle cx="18" cy="6.2" r="0.8"/><circle cx="19.8" cy="8.5" r="0.8"/><circle cx="18" cy="10.8" r="0.8"/></g>`,
      glass: glassCompose(
        `<line data-part="trigger" data-pivot="13.8 8.5" x1="13.8" y1="8.6" x2="16.4" y2="10.2" ${GBS}/><g data-part="mist" ${GB}><circle cx="18" cy="6.2" r="0.9"/><circle cx="20" cy="8.5" r="0.9"/><circle cx="18" cy="10.8" r="0.9"/></g>`,
        `<path d="M8.8 7H14V10.6L15.4 20.2H6.2L7.6 10.6H8.8Z"/>`
      ),
      stencil: `<g fill="currentColor"><rect x="8.8" y="7" width="5" height="3.2" rx="0.8"/><polygon points="7.6 11.4 14 11.4 15.2 20 6.4 20"/><line data-part="trigger" data-pivot="13.8 8.5" x1="13.8" y1="8.6" x2="16.2" y2="10" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><g data-part="mist"><circle cx="18" cy="6.2" r="0.9"/><circle cx="20" cy="8.5" r="0.9"/><circle cx="18" cy="10.8" r="0.9"/></g></g>`,
      hardware: `<rect x="8.8" y="7" width="5" height="3.6" rx="0.8" ${HD}/><polygon points="7.5 11 14 11 15.2 20 6.3 20" ${HL}/><line data-part="trigger" data-pivot="13.8 8.5" x1="13.8" y1="8.6" x2="16.4" y2="10.2" stroke="#ff6b35" stroke-width="1.8" stroke-linecap="round"/><g data-part="mist" ${HA}><circle cx="18" cy="6.2" r="0.9"/><circle cx="20" cy="8.5" r="0.9"/><circle cx="18" cy="10.8" r="0.9"/></g>`,
      relief: `<path transform="translate(1.3,1.3)" d="M7.5 11H14L15.2 20H6.3Z" ${RS}/><path d="M7.5 11H14L15.2 20H6.3Z" ${RF}/><path d="M9 11V7.5H13.8V11" ${RF}/><line data-part="trigger" data-pivot="13.8 8.5" x1="13.8" y1="8.8" x2="16.2" y2="10.2" ${RF_LINE}/><g data-part="mist" ${RS}><circle cx="18" cy="6.2" r="0.9"/><circle cx="19.8" cy="8.5" r="0.9"/><circle cx="18" cy="10.8" r="0.9"/></g>`,
    },
  },
  // 209. SOAP
  {
    name: "soap",
    label: "Soap Dispenser",
    category: "Time & Everyday",
    motionSummary: "Pump nozzle presses downward cleanly dispensing a liquid soap drop",
    soundSummary: "Squishy pump dispenser plunge + liquid soap plop",
    svgs: {
      outline: `<g data-part="pump" ${K}><path d="M12 8.5V4.5H16.5"/><line x1="9.5" y1="4.5" x2="12" y2="4.5"/></g><rect x="7" y="8.5" width="9" height="11.5" rx="2.2" ${K}/><circle data-part="drop" cx="17.5" cy="8.5" r="1.1" fill="currentColor"/>`,
      solid: `<path data-part="pump" fill="currentColor" d="M9.4 4H16.6A0.8 0.8 0 0 1 16.6 5.6H12.4V8.5H10.6V5.6H9.4A0.8 0.8 0 0 1 9.4 4Z"/><rect x="6.8" y="8.6" width="9.4" height="11.6" rx="2.4" fill="currentColor"/><circle data-part="drop" cx="17.6" cy="8.5" r="1.2" fill="currentColor"/>`,
      duotone: `<g data-part="pump" ${DK}><path d="M12 8.5V4.5H16.5"/><line x1="9.5" y1="4.5" x2="12" y2="4.5"/></g><rect x="7" y="8.5" width="9" height="11.5" rx="2.2" ${D}/><circle data-part="drop" cx="17.5" cy="8.5" r="1.1" fill="currentColor"/>`,
      glass: glassCompose(
        `<path data-part="pump" d="M9.4 4H16.6V5.6H12.4V8.8H10.6V5.6H9.4Z" ${GB}/><circle data-part="drop" cx="17.6" cy="8.5" r="1.2" ${GB}/>`,
        `<rect x="6.8" y="8.6" width="9.4" height="11.6" rx="2.4"/>`
      ),
      stencil: `<g fill="currentColor"><path data-part="pump" d="M9.4 4H16.4V5.5H12.3V7.6H10.7V5.5H9.4Z"/><rect x="7" y="8.6" width="9" height="5" rx="1.6"/><rect x="7" y="14.6" width="9" height="5.4" rx="1.6"/><circle data-part="drop" cx="17.6" cy="8.5" r="1.2"/></g>`,
      hardware: `<path data-part="pump" d="M9.4 4H16.6V5.6H12.4V8.5H10.6V5.6H9.4Z" ${HD}/><rect x="6.8" y="8.6" width="9.4" height="11.6" rx="2.2" ${HL}/><circle data-part="drop" cx="17.6" cy="8.5" r="1.3" ${HA}/>`,
      relief: `<g data-part="pump" ${RF_LINE}><path d="M12 8.5V4.5H16.5"/><line x1="9.5" y1="4.5" x2="12" y2="4.5"/></g><rect transform="translate(1.3,1.3)" x="7" y="8.5" width="9" height="11.5" rx="2.2" ${RS}/><rect x="7" y="8.5" width="9" height="11.5" rx="2.2" ${RF}/><circle data-part="drop" cx="17.5" cy="8.5" r="1.1" ${RS}/>`,
    },
  },
  // 210. MIRROR
  {
    name: "mirror",
    label: "Hand Mirror",
    category: "Time & Everyday",
    motionSummary: "Oval hand mirror tilts gracefully catching bright diagonal glass sheen",
    soundSummary: "Crystalline glass mirror ting + bright harmonic shimmer",
    svgs: {
      outline: `<g data-part="glass" data-pivot="12 14"><ellipse cx="12" cy="9.5" rx="5.5" ry="6" ${K}/><line x1="12" y1="15.5" x2="12" y2="20.5" ${K}/></g><line data-part="glint" x1="9.5" y1="10.8" x2="13.5" y2="6.8" ${K_THIN}/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><line data-part="glint" x1="9.5" y1="10.8" x2="13.5" y2="6.8" stroke="#000" stroke-width="1.5" stroke-linecap="round"/></mask></defs><g data-part="glass" data-pivot="12 14" fill="currentColor"><ellipse cx="12" cy="9.5" rx="5.8" ry="6.2" mask="url(#__GID__-m1)"/><rect x="10.9" y="15" width="2.2" height="5.6" rx="1.1"/></g>`,
      duotone: `<g data-part="glass" data-pivot="12 14"><ellipse cx="12" cy="9.5" rx="5.5" ry="6" ${D}/><line x1="12" y1="15.5" x2="12" y2="20.5" ${DK}/></g><line data-part="glint" x1="9.5" y1="10.8" x2="13.5" y2="6.8" ${DK_THIN}/>`,
      glass: glassCompose(
        `<rect data-part="glass" data-pivot="12 14" x="10.9" y="14.8" width="2.2" height="5.8" rx="1.1" ${GB}/>`,
        `<ellipse data-part="glass" data-pivot="12 14" cx="12" cy="9.5" rx="5.8" ry="6.2"/>`,
        `<g data-part="glass" data-pivot="12 14" ${GF}><ellipse cx="12" cy="9.5" rx="5.8" ry="6.2"/></g><line data-part="glint" x1="9.5" y1="10.8" x2="13.5" y2="6.8" ${GH}/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="glass" data-pivot="12 14"><path d="M7.6 5.2A5.8 6 0 0 1 16.4 5.2L15 6.8A3.8 4 0 0 0 9 6.8Z"/><path d="M16.4 13.8A5.8 6 0 0 1 7.6 13.8L9 12.2A3.8 4 0 0 0 15 12.2Z"/><rect x="10.9" y="15.4" width="2.2" height="5.2" rx="1.1"/></g><line data-part="glint" x1="9.8" y1="10.6" x2="13.2" y2="7.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></g>`,
      hardware: `<g data-part="glass" data-pivot="12 14"><rect x="10.9" y="15" width="2.2" height="5.6" rx="1.1" ${HD}/><ellipse cx="12" cy="9.5" rx="5.8" ry="6.2" ${HL}/></g><line data-part="glint" x1="9.5" y1="10.8" x2="13.5" y2="6.8" stroke="#ff6b35" stroke-width="1.7" stroke-linecap="round"/>`,
      relief: `<g data-part="glass" data-pivot="12 14"><ellipse transform="translate(1.3,1.3)" cx="12" cy="9.5" rx="5.5" ry="6" ${RS}/><ellipse cx="12" cy="9.5" rx="5.5" ry="6" ${RF}/><line x1="12" y1="15.5" x2="12" y2="20.5" ${RF_LINE}/></g><line data-part="glint" x1="9.5" y1="10.8" x2="13.5" y2="6.8" ${RF_LINE}/>`,
    },
  },
];
