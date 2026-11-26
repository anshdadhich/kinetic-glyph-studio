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
  starPts,
  triSpokes,
} from "../shared";

export const TRAVEL_ICONS: IconDef[] = [
  // 91. PLANE
  {
    name: "plane",
    label: "Airplane",
    category: "Travel & Play",
    motionSummary: "Jet climbs diagonally with banking wing lift",
    soundSummary: "Turbine spool-up + aerodynamic flyby whoosh",
    svgs: {
      outline: `<path data-part="jet" data-pivot="12 12" d="M20.8 12A2 2 0 0 1 19 13.8H14.2L10.4 19.6A1.2 1.2 0 0 1 9.4 20.2H8.4A0.8 0.8 0 0 1 7.7 19.1L9.6 13.8H6L4.2 16A0.7 0.7 0 0 1 3 15.6V8.4A0.7 0.7 0 0 1 4.2 8L6 10.2H9.6L7.7 4.9A0.8 0.8 0 0 1 8.4 3.8H9.4A1.2 1.2 0 0 1 10.4 4.4L14.2 10.2H19A2 2 0 0 1 20.8 12Z" ${K}/>`,
      solid: `<path data-part="jet" data-pivot="12 12" fill="currentColor" d="M21 12A2.2 2.2 0 0 1 18.8 14.1H14.4L10.6 19.9A1.3 1.3 0 0 1 9.5 20.5H8.4A0.9 0.9 0 0 1 7.6 19.3L9.5 14.1H5.9L4.1 16.3A0.8 0.8 0 0 1 2.8 15.8V8.2A0.8 0.8 0 0 1 4.1 7.7L5.9 9.9H9.5L7.6 4.7A0.9 0.9 0 0 1 8.4 3.5H9.5A1.3 1.3 0 0 1 10.6 4.1L14.4 9.9H18.8A2.2 2.2 0 0 1 21 12Z"/>`,
      duotone: `<path data-part="jet" data-pivot="12 12" d="M20.8 12A2 2 0 0 1 19 13.8H14.2L10.4 19.6A1.2 1.2 0 0 1 9.4 20.2H8.4A0.8 0.8 0 0 1 7.7 19.1L9.6 13.8H6L4.2 16A0.7 0.7 0 0 1 3 15.6V8.4A0.7 0.7 0 0 1 4.2 8L6 10.2H9.6L7.7 4.9A0.8 0.8 0 0 1 8.4 3.8H9.4A1.2 1.2 0 0 1 10.4 4.4L14.2 10.2H19A2 2 0 0 1 20.8 12Z" ${D}/>`,
      glass: glassCompose(
        `<g data-part="jet" data-pivot="12 12" ${GB}><path d="M8.8 3.6H10.8A1.4 1.4 0 0 1 12 4.3L15.8 10.2H11.6L8 4.8A0.8 0.8 0 0 1 8.8 3.6Z"/><path d="M8.8 20.4H10.8A1.4 1.4 0 0 0 12 19.7L15.8 13.8H11.6L8 19.2A0.8 0.8 0 0 0 8.8 20.4Z"/><path d="M3.2 7.2A1 1 0 0 1 4.7 6.5L8.2 10.2H3.2Z"/><path d="M3.2 16.8A1 1 0 0 0 4.7 17.5L8.2 13.8H3.2Z"/></g>`,
        `<rect data-part="jet" data-pivot="12 12" x="2.8" y="9.4" width="18.4" height="5.2" rx="2.6"/>`,
        `<g data-part="jet" data-pivot="12 12" ${GF}><rect x="2.8" y="9.4" width="18.4" height="5.2" rx="2.6"/></g><rect data-part="jet" data-pivot="12 12" x="15.8" y="10.7" width="3.2" height="2.6" rx="1.3" ${GH}/>`
      ),
      stencil: `<g data-part="jet" data-pivot="12 12" fill="currentColor"><rect x="3.2" y="10.4" width="17.8" height="3.2" rx="1.6"/><path d="M7.6 4.4A0.8 0.8 0 0 1 8.4 3.6H9.8A1.2 1.2 0 0 1 10.8 4.2L13.8 9.4H9.6Z"/><path d="M7.6 19.6A0.8 0.8 0 0 0 8.4 20.4H9.8A1.2 1.2 0 0 0 10.8 19.8L13.8 14.6H9.6Z"/></g>`,
      hardware: `<g data-part="jet" data-pivot="12 12"><path d="M8.4 3.8H9.8L14 10.2H9.8L7.6 4.8A0.8 0.8 0 0 1 8.4 3.8Z" ${HD}/><path d="M8.4 20.2H9.8L14 13.8H9.8L7.6 19.2A0.8 0.8 0 0 0 8.4 20.2Z" ${HD}/><rect x="2.8" y="9.6" width="18.4" height="4.8" rx="2.4" ${HL}/><circle cx="17.4" cy="12" r="1.05" ${HA}/></g>`,
      relief: `<g data-part="jet" data-pivot="12 12"><path transform="translate(1.4,1.4)" d="M20.8 12A2 2 0 0 1 19 13.8H14.2L10.4 19.6A1.2 1.2 0 0 1 9.4 20.2H8.4A0.8 0.8 0 0 1 7.7 19.1L9.6 13.8H6L4.2 16A0.7 0.7 0 0 1 3 15.6V8.4A0.7 0.7 0 0 1 4.2 8L6 10.2H9.6L7.7 4.9A0.8 0.8 0 0 1 8.4 3.8H9.4A1.2 1.2 0 0 1 10.4 4.4L14.2 10.2H19A2 2 0 0 1 20.8 12Z" ${RS}/><path d="M20.8 12A2 2 0 0 1 19 13.8H14.2L10.4 19.6A1.2 1.2 0 0 1 9.4 20.2H8.4A0.8 0.8 0 0 1 7.7 19.1L9.6 13.8H6L4.2 16A0.7 0.7 0 0 1 3 15.6V8.4A0.7 0.7 0 0 1 4.2 8L6 10.2H9.6L7.7 4.9A0.8 0.8 0 0 1 8.4 3.8H9.4A1.2 1.2 0 0 1 10.4 4.4L14.2 10.2H19A2 2 0 0 1 20.8 12Z" ${RF}/></g>`,
    },
  },
  // 92. CAR
  {
    name: "car",
    label: "Car",
    category: "Travel & Play",
    motionSummary: "Chassis surges on bouncy suspension as spoked wheels spin and beam flashes",
    soundSummary: "Friendly double car-horn honk + tire roll",
    svgs: {
      outline: `<g data-part="body" data-pivot="12 13" ${K}><path d="M3.2 15.4V12.2A1.8 1.8 0 0 1 4.3 10.6L6.1 7.8A1.8 1.8 0 0 1 7.6 7H13.1A1.8 1.8 0 0 1 14.6 7.7L17.1 10.8L19.6 11.2A1.8 1.8 0 0 1 21.2 13V15.4H19.4M9.4 15.4H14.6"/><path d="M7.1 10.9L8.2 8.8H12.8L14.9 10.9" ${K_THIN}/></g><g data-part="wheel-l" data-pivot="7 16.5"><circle cx="7" cy="16.5" r="2.4" ${K}/>${triSpokes(7, 16.5, 2.1, K_THIN)}</g><g data-part="wheel-r" data-pivot="17" data-pivot2="17 16.5"><circle cx="17" cy="16.5" r="2.4" ${K}/>${triSpokes(17, 16.5, 2.1, K_THIN)}</g><line data-part="beam" x1="21.8" y1="12.8" x2="23.5" y2="12.2" ${K_THIN}/>`.replace('data-pivot="17" data-pivot2="17 16.5"', 'data-pivot="17 16.5"'),
      solid: `<path data-part="body" data-pivot="12 13" fill="currentColor" fill-rule="evenodd" d="M2.8 15.6V12A2 2 0 0 1 4.1 10.2L5.9 7.6A2 2 0 0 1 7.6 6.8H13.2A2 2 0 0 1 14.8 7.6L17.3 10.6L19.8 11A2 2 0 0 1 21.6 13V15.6H19.8A2.9 2.9 0 0 0 14.2 15.6H9.8A2.9 2.9 0 0 0 4.2 15.6ZM7.2 10.9L8.3 8.6H12.9L15.1 10.9Z"/><g data-part="wheel-l" data-pivot="7 16.5"><path fill="currentColor" fill-rule="evenodd" d="M7 14A2.5 2.5 0 1 0 7 19A2.5 2.5 0 1 0 7 14ZM7 15.05A1.45 1.45 0 1 0 7 17.95A1.45 1.45 0 1 0 7 15.05Z"/>${triSpokes(7, 16.5, 1.5, 'stroke="currentColor" stroke-width="1.15" stroke-linecap="round"')}</g><g data-part="wheel-r" data-pivot="17 16.5"><path fill="currentColor" fill-rule="evenodd" d="M17 14A2.5 2.5 0 1 0 17 19A2.5 2.5 0 1 0 17 14ZM17 15.05A1.45 1.45 0 1 0 17 17.95A1.45 1.45 0 1 0 17 15.05Z"/>${triSpokes(17, 16.5, 1.5, 'stroke="currentColor" stroke-width="1.15" stroke-linecap="round"')}</g><line data-part="beam" x1="22" y1="12.8" x2="23.7" y2="12.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`,
      duotone: `<g data-part="body" data-pivot="12 13"><path fill-rule="evenodd" d="M3.2 15.4V12.2A1.8 1.8 0 0 1 4.3 10.6L6.1 7.8A1.8 1.8 0 0 1 7.6 7H13.1A1.8 1.8 0 0 1 14.6 7.7L17.1 10.8L19.6 11.2A1.8 1.8 0 0 1 21.2 13V15.4H19.4A2.5 2.5 0 0 0 14.6 15.4H9.4A2.5 2.5 0 0 0 4.6 15.4ZM7.1 10.9L8.2 8.8H12.8L14.9 10.9Z" ${D}/></g><g data-part="wheel-l" data-pivot="7 16.5"><circle cx="7" cy="16.5" r="2.3" ${D}/>${triSpokes(7, 16.5, 2, DK_THIN)}</g><g data-part="wheel-r" data-pivot="17 16.5"><circle cx="17" cy="16.5" r="2.3" ${D}/>${triSpokes(17, 16.5, 2, DK_THIN)}</g><line data-part="beam" x1="21.8" y1="12.8" x2="23.5" y2="12.2" ${DK_THIN}/>`,
      glass: glassCompose(
        `<path data-part="body" data-pivot="12 13" d="M5.6 11.4L6.9 7.8A1.8 1.8 0 0 1 8.6 7H13.2A1.8 1.8 0 0 1 14.7 7.7L17.4 11.4Z" ${GB}/><g data-part="wheel-l" data-pivot="7 16.5"><path fill-rule="evenodd" d="M7 14A2.5 2.5 0 1 0 7 19A2.5 2.5 0 1 0 7 14ZM7 15.05A1.45 1.45 0 1 0 7 17.95A1.45 1.45 0 1 0 7 15.05Z" ${GB}/>${triSpokes(7, 16.5, 1.5, GBS)}</g><g data-part="wheel-r" data-pivot="17 16.5"><path fill-rule="evenodd" d="M17 14A2.5 2.5 0 1 0 17 19A2.5 2.5 0 1 0 17 14ZM17 15.05A1.45 1.45 0 1 0 17 17.95A1.45 1.45 0 1 0 17 15.05Z" ${GB}/>${triSpokes(17, 16.5, 1.5, GBS)}</g><line data-part="beam" x1="21.8" y1="12.8" x2="23.6" y2="12.2" ${GBS}/>`,
        `<path data-part="body" data-pivot="12 13" d="M4.2 11H19.8A1.8 1.8 0 0 1 21.6 12.8V15.6H2.8V12.4A1.4 1.4 0 0 1 4.2 11Z"/>`
      ),
      stencil: `<g data-part="body" data-pivot="12 13" fill="currentColor"><path d="M3.2 15.4V12A1.8 1.8 0 0 1 4.3 10.4L6.1 7.6A1.6 1.6 0 0 1 7.5 7H11.2V15.4H9.4A2.5 2.5 0 0 0 4.6 15.4Z"/><path d="M12.8 7H13.4A1.6 1.6 0 0 1 14.7 7.6L17.1 10.8L19.7 11.2A1.7 1.7 0 0 1 21.3 12.9V15.4H19.4A2.5 2.5 0 0 0 14.6 15.4H12.8Z"/></g><g data-part="wheel-l" data-pivot="7 16.5"><path fill="currentColor" fill-rule="evenodd" d="M7 14.1A2.4 2.4 0 1 0 7 18.9A2.4 2.4 0 1 0 7 14.1ZM7 15.1A1.4 1.4 0 1 0 7 17.9A1.4 1.4 0 1 0 7 15.1Z"/>${triSpokes(7, 16.5, 1.4, 'stroke="currentColor" stroke-width="1.15" stroke-linecap="round"')}</g><g data-part="wheel-r" data-pivot="17 16.5"><path fill="currentColor" fill-rule="evenodd" d="M17 14.1A2.4 2.4 0 1 0 17 18.9A2.4 2.4 0 1 0 17 14.1ZM17 15.1A1.4 1.4 0 1 0 17 17.9A1.4 1.4 0 1 0 17 15.1Z"/>${triSpokes(17, 16.5, 1.4, 'stroke="currentColor" stroke-width="1.15" stroke-linecap="round"')}</g><line data-part="beam" x1="21.8" y1="12.8" x2="23.5" y2="12.2" ${K_THIN}/>`,
      hardware: `<g data-part="body" data-pivot="12 13"><path fill-rule="evenodd" d="M2.8 15.6V12A2 2 0 0 1 4.1 10.2L5.9 7.6A2 2 0 0 1 7.6 6.8H13.2A2 2 0 0 1 14.8 7.6L17.3 10.6L19.8 11A2 2 0 0 1 21.6 13V15.6H19.8A2.9 2.9 0 0 0 14.2 15.6H9.8A2.9 2.9 0 0 0 4.2 15.6ZM7.2 10.9L8.3 8.6H12.9L15.1 10.9Z" ${HL}/></g><g data-part="wheel-l" data-pivot="7 16.5"><circle cx="7" cy="16.5" r="2.4" ${HD}/>${triSpokes(7, 16.5, 1.6, 'stroke="#d4d4d8" stroke-width="1.1" stroke-linecap="round"')}</g><g data-part="wheel-r" data-pivot="17 16.5"><circle cx="17" cy="16.5" r="2.4" ${HD}/>${triSpokes(17, 16.5, 1.6, 'stroke="#d4d4d8" stroke-width="1.1" stroke-linecap="round"')}</g><line data-part="beam" x1="21.8" y1="12.8" x2="23.6" y2="12.2" stroke="#ff6b35" stroke-width="2" stroke-linecap="round"/>`,
      relief: `<g data-part="body" data-pivot="12 13"><path transform="translate(1.4,1.4)" d="M3.2 15.4V12.2A1.8 1.8 0 0 1 4.3 10.6L6.1 7.8A1.8 1.8 0 0 1 7.6 7H13.1A1.8 1.8 0 0 1 14.6 7.7L17.1 10.8L19.6 11.2A1.8 1.8 0 0 1 21.2 13V15.4Z" ${RS}/><path fill-rule="evenodd" d="M3.2 15.4V12.2A1.8 1.8 0 0 1 4.3 10.6L6.1 7.8A1.8 1.8 0 0 1 7.6 7H13.1A1.8 1.8 0 0 1 14.6 7.7L17.1 10.8L19.6 11.2A1.8 1.8 0 0 1 21.2 13V15.4ZM7.1 10.9L8.2 8.8H12.8L14.9 10.9Z" ${RF}/></g><g data-part="wheel-l" data-pivot="7 16.5"><circle cx="7" cy="16.5" r="2.3" ${RF}/>${triSpokes(7, 16.5, 2, RF_LINE)}</g><g data-part="wheel-r" data-pivot="17 16.5"><circle cx="17" cy="16.5" r="2.3" ${RF}/>${triSpokes(17, 16.5, 2, RF_LINE)}</g><line data-part="beam" x1="21.8" y1="12.8" x2="23.5" y2="12.2" ${RF_LINE}/>`,
    },
  },
  // 93. TRAIN
  {
    name: "train",
    label: "Train",
    category: "Travel & Play",
    motionSummary: "Locomotive chugs forward as driving wheels roll and steam billows",
    soundSummary: "Track rail clack-clack + harmonic locomotive whistle",
    svgs: {
      outline: `<path data-part="puff" data-pivot="16.5 4.5" d="M13.8 5.2A1.5 1.5 0 0 1 16.4 4A1.5 1.5 0 0 1 18.8 5.2Z" ${K_THIN}/><g data-part="loco" data-pivot="12 14" ${K}><path d="M3.2 7H9.5V15.8H4.6A0.8 0.8 0 0 1 3.8 15V7M9.5 10H18.4A0.8 0.8 0 0 1 19.2 10.8V15.8H9.5"/><path d="M19.2 13.2L21.3 15.8H19.2"/><path d="M15.2 10V7.4A0.6 0.6 0 0 1 15.8 6.8H16.8A0.6 0.6 0 0 1 17.4 7.4V10"/><rect x="5.2" y="8.8" width="2.6" height="2.4" rx="0.4" ${K_THIN}/></g><g data-part="wheel-l" data-pivot="7.4 18"><circle cx="7.4" cy="18" r="2.2" ${K}/>${triSpokes(7.4, 18, 1.9, K_THIN)}</g><g data-part="wheel-r" data-pivot="15.4 18"><circle cx="15.4" cy="18" r="2.2" ${K}/>${triSpokes(15.4, 18, 1.9, K_THIN)}</g><line x1="2.5" y1="20.6" x2="21.5" y2="20.6" ${K_THIN}/>`,
      solid: `<path data-part="puff" data-pivot="16.5 4.5" fill="currentColor" opacity="0.5" d="M13.5 5.4A1.6 1.6 0 0 1 16.4 3.8A1.6 1.6 0 0 1 19 5.4Z"/><path data-part="loco" data-pivot="12 14" fill="currentColor" fill-rule="evenodd" d="M3 6.8H9.8V9.8H15V7.2A0.6 0.6 0 0 1 15.6 6.6H17A0.6 0.6 0 0 1 17.6 7.2V9.8H18.6A0.8 0.8 0 0 1 19.4 10.6V13L21.6 16H3.8V8.2H3ZM5.2 8.6V11.4H8V8.6Z"/><g data-part="wheel-l" data-pivot="7.4 18"><path fill="currentColor" fill-rule="evenodd" d="M7.4 15.6A2.4 2.4 0 1 0 7.4 20.4A2.4 2.4 0 1 0 7.4 15.6ZM7.4 16.6A1.4 1.4 0 1 0 7.4 19.4A1.4 1.4 0 1 0 7.4 16.6Z"/>${triSpokes(7.4, 18, 1.4, 'stroke="currentColor" stroke-width="1.15" stroke-linecap="round"')}</g><g data-part="wheel-r" data-pivot="15.4 18"><path fill="currentColor" fill-rule="evenodd" d="M15.4 15.6A2.4 2.4 0 1 0 15.4 20.4A2.4 2.4 0 1 0 15.4 15.6ZM15.4 16.6A1.4 1.4 0 1 0 15.4 19.4A1.4 1.4 0 1 0 15.4 16.6Z"/>${triSpokes(15.4, 18, 1.4, 'stroke="currentColor" stroke-width="1.15" stroke-linecap="round"')}</g><line x1="2.5" y1="20.8" x2="21.5" y2="20.8" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>`,
      duotone: `<path data-part="puff" data-pivot="16.5 4.5" d="M13.8 5.2A1.5 1.5 0 0 1 16.4 4A1.5 1.5 0 0 1 18.8 5.2Z" ${D}/><g data-part="loco" data-pivot="12 14"><path fill-rule="evenodd" d="M3.2 7H9.5V10H15.2V6.8H17.4V10H19V13L21.4 15.8H3.8V7ZM5.2 8.8V11.2H7.8V8.8Z" ${D}/></g><g data-part="wheel-l" data-pivot="7.4 18"><circle cx="7.4" cy="18" r="2.2" ${D}/>${triSpokes(7.4, 18, 1.9, DK_THIN)}</g><g data-part="wheel-r" data-pivot="15.4 18"><circle cx="15.4" cy="18" r="2.2" ${D}/>${triSpokes(15.4, 18, 1.9, DK_THIN)}</g><line x1="2.5" y1="20.6" x2="21.5" y2="20.6" ${DK_THIN}/>`,
      glass: glassCompose(
        `<path data-part="puff" data-pivot="16.5 4.5" d="M13.5 5.4A1.6 1.6 0 0 1 16.4 3.8A1.6 1.6 0 0 1 19 5.4Z" ${GB}/><g data-part="loco" data-pivot="12 14" ${GB}><rect x="15" y="6.6" width="2.6" height="3.6" rx="0.6"/><path d="M19 12.6L21.8 16H19Z"/></g><g data-part="wheel-l" data-pivot="7.4 18"><path fill-rule="evenodd" d="M7.4 15.6A2.4 2.4 0 1 0 7.4 20.4A2.4 2.4 0 1 0 7.4 15.6ZM7.4 16.6A1.4 1.4 0 1 0 7.4 19.4A1.4 1.4 0 1 0 7.4 16.6Z" ${GB}/>${triSpokes(7.4, 18, 1.4, GBS)}</g><g data-part="wheel-r" data-pivot="15.4 18"><path fill-rule="evenodd" d="M15.4 15.6A2.4 2.4 0 1 0 15.4 20.4A2.4 2.4 0 1 0 15.4 15.6ZM15.4 16.6A1.4 1.4 0 1 0 15.4 19.4A1.4 1.4 0 1 0 15.4 16.6Z" ${GB}/>${triSpokes(15.4, 18, 1.4, GBS)}</g><line x1="2.5" y1="20.8" x2="21.5" y2="20.8" ${GBS}/>`,
        `<path data-part="loco" data-pivot="12 14" d="M3 7H9.6V9.8H18.4A1 1 0 0 1 19.4 10.8V16H3.8V7Z"/>`,
        `<g data-part="loco" data-pivot="12 14" ${GF}><path d="M3 7H9.6V9.8H18.4A1 1 0 0 1 19.4 10.8V16H3.8V7Z"/></g><rect data-part="loco" data-pivot="12 14" x="5.2" y="8.8" width="2.6" height="2.4" rx="0.4" ${GB}/>`
      ),
      stencil: `<path data-part="puff" data-pivot="16.5 4.5" fill="currentColor" opacity="0.6" d="M13.6 5.2A1.5 1.5 0 0 1 16.4 3.8A1.5 1.5 0 0 1 18.9 5.2Z"/><g data-part="loco" data-pivot="12 14" fill="currentColor"><path fill-rule="evenodd" d="M3 7H9.6V15.8H3.6V7ZM5.2 8.8V11.2H7.8V8.8Z"/><path d="M11.2 9.8H15.2V6.8H17.4V9.8H19V13L21.4 15.8H11.2Z"/></g><g data-part="wheel-l" data-pivot="7.4 18"><path fill="currentColor" fill-rule="evenodd" d="M7.4 15.7A2.3 2.3 0 1 0 7.4 20.3A2.3 2.3 0 1 0 7.4 15.7ZM7.4 16.7A1.3 1.3 0 1 0 7.4 19.3A1.3 1.3 0 1 0 7.4 16.7Z"/>${triSpokes(7.4, 18, 1.35, 'stroke="currentColor" stroke-width="1.15" stroke-linecap="round"')}</g><g data-part="wheel-r" data-pivot="15.4 18"><path fill="currentColor" fill-rule="evenodd" d="M15.4 15.7A2.3 2.3 0 1 0 15.4 20.3A2.3 2.3 0 1 0 15.4 15.7ZM15.4 16.7A1.3 1.3 0 1 0 15.4 19.3A1.3 1.3 0 1 0 15.4 16.7Z"/>${triSpokes(15.4, 18, 1.35, 'stroke="currentColor" stroke-width="1.15" stroke-linecap="round"')}</g>`,
      hardware: `<path data-part="puff" data-pivot="16.5 4.5" d="M13.5 5.4A1.6 1.6 0 0 1 16.4 3.8A1.6 1.6 0 0 1 19 5.4Z" ${HM}/><g data-part="loco" data-pivot="12 14"><rect x="15" y="6.6" width="2.6" height="3.6" rx="0.5" ${HA}/><path fill-rule="evenodd" d="M2.8 6.8H9.8V9.8H19.2V12.8L21.8 16H3.6V8.2H2.8ZM5.2 8.6V11.4H8V8.6Z" ${HL}/></g><g data-part="wheel-l" data-pivot="7.4 18"><circle cx="7.4" cy="18" r="2.3" ${HD}/>${triSpokes(7.4, 18, 1.5, 'stroke="#d4d4d8" stroke-width="1.1" stroke-linecap="round"')}</g><g data-part="wheel-r" data-pivot="15.4 18"><circle cx="15.4" cy="18" r="2.3" ${HD}/>${triSpokes(15.4, 18, 1.5, 'stroke="#d4d4d8" stroke-width="1.1" stroke-linecap="round"')}</g><line x1="2.5" y1="20.8" x2="21.5" y2="20.8" stroke="#52525b" stroke-width="1.4" stroke-linecap="round"/>`,
      relief: `<path data-part="puff" data-pivot="16.5 4.5" d="M13.8 5.2A1.5 1.5 0 0 1 16.4 4A1.5 1.5 0 0 1 18.8 5.2Z" ${RF}/><g data-part="loco" data-pivot="12 14"><path transform="translate(1.4,1.4)" d="M3.2 7H9.5V10H15.2V6.8H17.4V10H19V13L21.4 15.8H3.8V7Z" ${RS}/><path fill-rule="evenodd" d="M3.2 7H9.5V10H15.2V6.8H17.4V10H19V13L21.4 15.8H3.8V7ZM5.2 8.8V11.2H7.8V8.8Z" ${RF}/></g><g data-part="wheel-l" data-pivot="7.4 18"><circle cx="7.4" cy="18" r="2.2" ${RF}/>${triSpokes(7.4, 18, 1.9, RF_LINE)}</g><g data-part="wheel-r" data-pivot="15.4 18"><circle cx="15.4" cy="18" r="2.2" ${RF}/>${triSpokes(15.4, 18, 1.9, RF_LINE)}</g><line x1="2.5" y1="20.6" x2="21.5" y2="20.6" ${RF_LINE}/>`,
    },
  },
  // 94. SHIP
  {
    name: "ship",
    label: "Ship",
    category: "Travel & Play",
    motionSummary: "Ocean liner pitches over flowing dual-wave currents as smoke drifts",
    soundSummary: "Deep harbor foghorn + gentle hull splash",
    svgs: {
      outline: `<path data-part="puff" data-pivot="10 3.8" d="M7.6 4.5A1.4 1.4 0 0 1 10.2 3.5A1.3 1.3 0 0 1 12.4 4.5Z" ${K_THIN}/><g data-part="hull" data-pivot="12 13" ${K}><path d="M8.8 8.3L9.4 5.8A0.5 0.5 0 0 1 9.9 5.4H11.5A0.5 0.5 0 0 1 12 5.9L12.3 8.3"/><path d="M5.6 11.8V9A0.8 0.8 0 0 1 6.4 8.2H14.4A0.9 0.9 0 0 1 15.2 8.8L16.6 11.8"/><path d="M3.2 11.8H20.8A0.7 0.7 0 0 1 21.4 12.8L18.4 16.4H5.2A1.2 1.2 0 0 1 4.1 15.6L2.8 12.7A0.7 0.7 0 0 1 3.2 11.8Z"/><line x1="8" y1="10" x2="12.8" y2="10" ${K_THIN}/></g><path data-part="wave-1" d="M2.2 18C4.2 16.9 6.2 16.9 8.2 18C10.2 19.1 12.2 19.1 14.2 18C16.2 16.9 18.2 16.9 20.2 18L21.8 18.4" ${K}/><path data-part="wave-2" d="M2.8 20.6C4.8 19.6 6.8 19.6 8.8 20.6C10.8 21.6 12.8 21.6 14.8 20.6C16.8 19.6 18.8 19.6 20.8 20.6" ${K_THIN}/>`,
      solid: `<path data-part="puff" data-pivot="10 3.8" fill="currentColor" opacity="0.5" d="M7.4 4.6A1.5 1.5 0 0 1 10.2 3.3A1.4 1.4 0 0 1 12.6 4.6Z"/><g data-part="hull" data-pivot="12 13" fill="currentColor"><path d="M8.6 8.4L9.2 5.7A0.6 0.6 0 0 1 9.8 5.2H11.6A0.6 0.6 0 0 1 12.2 5.7L12.6 8.4Z"/><path fill-rule="evenodd" d="M5.6 8.2H14.6A0.9 0.9 0 0 1 15.4 8.8L16.8 11.8H5.6ZM7.6 9.5V10.7H13.4V9.5Z"/><path d="M2.8 11.8H21.2L18.4 16.5H5A1.2 1.2 0 0 1 3.9 15.7Z"/></g><path data-part="wave-1" d="M2.2 18C4.2 16.9 6.2 16.9 8.2 18C10.2 19.1 12.2 19.1 14.2 18C16.2 16.9 18.2 16.9 20.2 18L21.8 18.4" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><path data-part="wave-2" d="M2.8 20.6C4.8 19.6 6.8 19.6 8.8 20.6C10.8 21.6 12.8 21.6 14.8 20.6C16.8 19.6 18.8 19.6 20.8 20.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`,
      duotone: `<path data-part="puff" data-pivot="10 3.8" d="M7.6 4.5A1.4 1.4 0 0 1 10.2 3.5A1.3 1.3 0 0 1 12.4 4.5Z" ${D}/><g data-part="hull" data-pivot="12 13"><path d="M8.8 8.3L9.4 5.8H11.9L12.3 8.3" ${DK}/><path d="M5.6 11.8V8.8A0.8 0.8 0 0 1 6.4 8.2H14.5L16.6 11.8Z" ${D}/><path d="M2.8 11.8H21.2L18.4 16.4H5.2Z" ${D}/><line x1="8" y1="10" x2="12.8" y2="10" ${DK_THIN}/></g><path data-part="wave-1" d="M2.2 18C4.2 16.9 6.2 16.9 8.2 18C10.2 19.1 12.2 19.1 14.2 18C16.2 16.9 18.2 16.9 20.2 18L21.8 18.4" ${DK}/><path data-part="wave-2" d="M2.8 20.6C4.8 19.6 6.8 19.6 8.8 20.6C10.8 21.6 12.8 21.6 14.8 20.6C16.8 19.6 18.8 19.6 20.8 20.6" ${DK_THIN}/>`,
      glass: glassCompose(
        `<path data-part="puff" data-pivot="10 3.8" d="M7.4 4.6A1.5 1.5 0 0 1 10.2 3.3A1.4 1.4 0 0 1 12.6 4.6Z" ${GB}/><g data-part="hull" data-pivot="12 13" ${GB}><path d="M8.6 8.4L9.3 5.4H12L12.5 8.4Z"/><path d="M5.6 8.2H14.6L16.8 12.2H5.6Z"/></g><path data-part="wave-1" d="M2.2 18C4.2 16.9 6.2 16.9 8.2 18C10.2 19.1 12.2 19.1 14.2 18C16.2 16.9 18.2 16.9 20.2 18L21.8 18.4" ${GBS}/><path data-part="wave-2" d="M2.8 20.6C4.8 19.6 6.8 19.6 8.8 20.6C10.8 21.6 12.8 21.6 14.8 20.6C16.8 19.6 18.8 19.6 20.8 20.6" ${GBS}/>`,
        `<path data-part="hull" data-pivot="12 13" d="M2.8 11.8H21.2L18.4 16.5H5A1.2 1.2 0 0 1 3.9 15.7Z"/>`,
        `<g data-part="hull" data-pivot="12 13" ${GF}><path d="M2.8 11.8H21.2L18.4 16.5H5A1.2 1.2 0 0 1 3.9 15.7Z"/></g><circle data-part="hull" data-pivot="12 13" cx="8.5" cy="14" r="0.85" ${GH}/><circle data-part="hull" data-pivot="12 13" cx="12" cy="14" r="0.85" ${GH}/>`
      ),
      stencil: `<path data-part="puff" data-pivot="10 3.8" fill="currentColor" opacity="0.55" d="M7.6 4.5A1.4 1.4 0 0 1 10.2 3.5A1.3 1.3 0 0 1 12.4 4.5Z"/><g data-part="hull" data-pivot="12 13" fill="currentColor"><polygon points="8.8 8.2 9.4 5.5 11.9 5.5 12.3 8.2"/><path d="M5.6 8.4H14.6L16.3 11.4H5.6Z"/><polygon points="2.8 12 11.2 12 11.2 16.4 5 16.4"/><polygon points="12.8 12 21.2 12 18.4 16.4 12.8 16.4"/></g><path data-part="wave-1" d="M2.2 18C4.2 16.9 6.2 16.9 8.2 18C10.2 19.1 12.2 19.1 14.2 18C16.2 16.9 18.2 16.9 20.2 18L21.8 18.4" ${K}/><path data-part="wave-2" d="M2.8 20.6C4.8 19.6 6.8 19.6 8.8 20.6C10.8 21.6 12.8 21.6 14.8 20.6C16.8 19.6 18.8 19.6 20.8 20.6" ${K_THIN}/>`,
      hardware: `<path data-part="puff" data-pivot="10 3.8" d="M7.4 4.6A1.5 1.5 0 0 1 10.2 3.3A1.4 1.4 0 0 1 12.6 4.6Z" ${HM}/><g data-part="hull" data-pivot="12 13"><polygon points="8.6 8.4 9.3 5.4 12 5.4 12.5 8.4" ${HA}/><path d="M5.6 8.2H14.6L16.8 11.8H5.6Z" ${HL}/><path d="M2.8 11.8H21.2L18.4 16.5H5Z" ${HD}/></g><path data-part="wave-1" d="M2.2 18C4.2 16.9 6.2 16.9 8.2 18C10.2 19.1 12.2 19.1 14.2 18C16.2 16.9 18.2 16.9 20.2 18L21.8 18.4" fill="none" stroke="#52525b" stroke-width="1.9" stroke-linecap="round"/><path data-part="wave-2" d="M2.8 20.6C4.8 19.6 6.8 19.6 8.8 20.6C10.8 21.6 12.8 21.6 14.8 20.6C16.8 19.6 18.8 19.6 20.8 20.6" fill="none" stroke="#71717a" stroke-width="1.6" stroke-linecap="round"/>`,
      relief: `<path data-part="puff" data-pivot="10 3.8" d="M7.6 4.5A1.4 1.4 0 0 1 10.2 3.5A1.3 1.3 0 0 1 12.4 4.5Z" ${RF}/><g data-part="hull" data-pivot="12 13"><path transform="translate(1.4,1.4)" d="M2.8 11.8H21.2L18.4 16.4H5.2Z" ${RS}/><path d="M8.8 8.3L9.4 5.8H11.9L12.3 8.3" ${RF}/><path d="M5.6 11.8V8.4H14.6L16.6 11.8Z" ${RF}/><path d="M2.8 11.8H21.2L18.4 16.4H5.2Z" ${RF}/></g><path data-part="wave-1" d="M2.2 18C4.2 16.9 6.2 16.9 8.2 18C10.2 19.1 12.2 19.1 14.2 18C16.2 16.9 18.2 16.9 20.2 18L21.8 18.4" ${RF_LINE}/><path data-part="wave-2" d="M2.8 20.6C4.8 19.6 6.8 19.6 8.8 20.6C10.8 21.6 12.8 21.6 14.8 20.6C16.8 19.6 18.8 19.6 20.8 20.6" ${RF_LINE}/>`,
    },
  },
  // 95. GAMEPAD
  {
    name: "gamepad",
    label: "Gamepad",
    category: "Travel & Play",
    motionSummary: "D-pad rocks left while A & B action buttons pop in sequence",
    soundSummary: "Retro 8-bit A/B arpeggio chirp",
    svgs: {
      outline: `<path d="M6.5 6.5H17.5A4.2 4.2 0 0 1 21.5 11.5L20.4 16.5A2.2 2.2 0 0 1 16.6 17.4L14.5 15H9.5L7.4 17.4A2.2 2.2 0 0 1 3.6 16.5L2.5 11.5A4.2 4.2 0 0 1 6.5 6.5Z" ${K}/><path data-part="dpad" d="M6.2 10.8H9.8M8 9V12.6" ${K_THIN}/><circle data-part="btn-a" cx="15" cy="11.8" r="1" fill="currentColor"/><circle data-part="btn-b" cx="17.2" cy="9.8" r="1" fill="currentColor"/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><path data-part="dpad" d="M6 10.8H9.8M7.9 8.9V12.7" stroke="#000" stroke-width="1.6" stroke-linecap="round"/><circle data-part="btn-a" cx="15" cy="11.8" r="1.15" fill="#000"/><circle data-part="btn-b" cx="17.2" cy="9.8" r="1.15" fill="#000"/></mask></defs><g mask="url(#__GID__-m1)"><path fill="currentColor" d="M6.5 6.2H17.5A4.4 4.4 0 0 1 21.8 11.5L20.6 16.7A2.4 2.4 0 0 1 16.5 17.6L14.4 15.2H9.6L7.5 17.6A2.4 2.4 0 0 1 3.4 16.7L2.2 11.5A4.4 4.4 0 0 1 6.5 6.2Z"/></g>`,
      duotone: `<path d="M6.5 6.5H17.5A4.2 4.2 0 0 1 21.5 11.5L20.4 16.5A2.2 2.2 0 0 1 16.6 17.4L14.5 15H9.5L7.4 17.4A2.2 2.2 0 0 1 3.6 16.5L2.5 11.5A4.2 4.2 0 0 1 6.5 6.5Z" ${D}/><path data-part="dpad" d="M6.2 10.8H9.8M8 9V12.6" ${DK_THIN}/><circle data-part="btn-a" cx="15" cy="11.8" r="1" fill="currentColor"/><circle data-part="btn-b" cx="17.2" cy="9.8" r="1" fill="currentColor"/>`,
      glass: glassCompose(
        `<path transform="translate(-1.4,-1)" d="M6.5 6.2H17.5A4.4 4.4 0 0 1 21.8 11.5L20.6 16.7A2.4 2.4 0 0 1 16.5 17.6L14.4 15.2H9.6L7.5 17.6A2.4 2.4 0 0 1 3.4 16.7L2.2 11.5A4.4 4.4 0 0 1 6.5 6.2Z" ${GB}/>`,
        `<path d="M6.5 6.2H17.5A4.4 4.4 0 0 1 21.8 11.5L20.6 16.7A2.4 2.4 0 0 1 16.5 17.6L14.4 15.2H9.6L7.5 17.6A2.4 2.4 0 0 1 3.4 16.7L2.2 11.5A4.4 4.4 0 0 1 6.5 6.2Z"/>`,
        `<g ${GF}><path d="M6.5 6.2H17.5A4.4 4.4 0 0 1 21.8 11.5L20.6 16.7A2.4 2.4 0 0 1 16.5 17.6L14.4 15.2H9.6L7.5 17.6A2.4 2.4 0 0 1 3.4 16.7L2.2 11.5A4.4 4.4 0 0 1 6.5 6.2Z"/></g><path data-part="dpad" d="M6 10.8H9.8M7.9 8.9V12.7" ${GBS}/><circle data-part="btn-a" cx="15" cy="11.8" r="1.15" ${GB}/><circle data-part="btn-b" cx="17.2" cy="9.8" r="1.15" ${GB}/>`
      ),
      stencil: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><path data-part="dpad" d="M6 10.8H9.4M7.7 9.1V12.5" stroke="#000" stroke-width="1.6" stroke-linecap="round"/><circle data-part="btn-a" cx="15.2" cy="11.8" r="1.15" fill="#000"/><circle data-part="btn-b" cx="17.2" cy="9.8" r="1.15" fill="#000"/></mask></defs><g mask="url(#__GID__-m1)" fill="currentColor"><path d="M6.5 6.5H11.2V15H9.5L7.4 17.4A2.2 2.2 0 0 1 3.6 16.5L2.5 11.5A4.2 4.2 0 0 1 6.5 6.5Z"/><path d="M12.8 6.5H17.5A4.2 4.2 0 0 1 21.5 11.5L20.4 16.5A2.2 2.2 0 0 1 16.6 17.4L14.5 15H12.8Z"/></g>`,
      hardware: `<path d="M6.5 6.2H17.5A4.4 4.4 0 0 1 21.8 11.5L20.6 16.7A2.4 2.4 0 0 1 16.5 17.6L14.4 15.2H9.6L7.5 17.6A2.4 2.4 0 0 1 3.4 16.7L2.2 11.5A4.4 4.4 0 0 1 6.5 6.2Z" ${HD}/><path data-part="dpad" d="M6 10.8H9.8M7.9 8.9V12.7" stroke="#d4d4d8" stroke-width="1.7" stroke-linecap="round"/><circle data-part="btn-a" cx="15" cy="11.8" r="1.2" ${HA}/><circle data-part="btn-b" cx="17.2" cy="9.8" r="1.2" ${HL}/>`,
      relief: `<path transform="translate(1.5,1.5)" d="M6.5 6.5H17.5A4.2 4.2 0 0 1 21.5 11.5L20.4 16.5A2.2 2.2 0 0 1 16.6 17.4L14.5 15H9.5L7.4 17.4A2.2 2.2 0 0 1 3.6 16.5L2.5 11.5A4.2 4.2 0 0 1 6.5 6.5Z" ${RS}/><path d="M6.5 6.5H17.5A4.2 4.2 0 0 1 21.5 11.5L20.4 16.5A2.2 2.2 0 0 1 16.6 17.4L14.5 15H9.5L7.4 17.4A2.2 2.2 0 0 1 3.6 16.5L2.5 11.5A4.2 4.2 0 0 1 6.5 6.5Z" ${RF}/><path data-part="dpad" d="M6.2 10.8H9.8M8 9V12.6" ${RF_LINE}/><circle data-part="btn-a" cx="15" cy="11.8" r="1" ${RS}/><circle data-part="btn-b" cx="17.2" cy="9.8" r="1" ${RS}/>`,
    },
  },
  // 96. TARGET
  {
    name: "target",
    label: "Target",
    category: "Travel & Play",
    motionSummary: "Outer rings lock tight as bullseye center pops forward",
    soundSummary: "Arrow thwack + crisp bullseye ping",
    svgs: {
      outline: `<g data-part="outer" ${K}><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="5" ${K_THIN}/></g><circle data-part="bull" cx="12" cy="12" r="1.8" fill="currentColor"/>`,
      solid: `<path data-part="outer" fill="currentColor" fill-rule="evenodd" d="M12 3.3A8.7 8.7 0 1 0 12 20.7A8.7 8.7 0 1 0 12 3.3ZM12 6.6A5.4 5.4 0 1 0 12 17.4A5.4 5.4 0 1 0 12 6.6Z"/><circle data-part="bull" cx="12" cy="12" r="2.6" fill="currentColor"/>`,
      duotone: `<g data-part="outer"><circle cx="12" cy="12" r="8.5" ${D}/><circle cx="12" cy="12" r="5" ${DK_THIN}/></g><circle data-part="bull" cx="12" cy="12" r="2" fill="currentColor"/>`,
      glass: glassCompose(
        `<circle data-part="outer" data-pivot="12 12" cx="10.6" cy="10.8" r="8.2" ${GB}/>`,
        `<circle data-part="outer" data-pivot="12 12" cx="12" cy="12" r="8.5"/>`,
        `<g data-part="outer" data-pivot="12 12" ${GF}><circle cx="12" cy="12" r="8.5"/></g><circle data-part="outer" data-pivot="12 12" cx="12" cy="12" r="5" fill="none" stroke="url(#g-back)" stroke-width="1.35"/><circle data-part="bull" cx="12" cy="12" r="2.3" ${GB}/>`
      ),
      stencil: `<g data-part="outer" fill="currentColor"><path d="M5.6 6A8.5 8.5 0 0 1 18.4 6L16.8 7.6A6.3 6.3 0 0 0 7.2 7.6Z"/><path d="M18.4 18A8.5 8.5 0 0 1 5.6 18L7.2 16.4A6.3 6.3 0 0 0 16.8 16.4Z"/></g><circle data-part="bull" cx="12" cy="12" r="2.6" fill="currentColor"/>`,
      hardware: `<g data-part="outer"><circle cx="12" cy="12" r="8.7" ${HD}/><circle cx="12" cy="12" r="5.5" ${HL}/></g><circle data-part="bull" cx="12" cy="12" r="2.5" ${HA}/>`,
      relief: `<g data-part="outer"><circle transform="translate(1.5,1.5)" cx="12" cy="12" r="8.5" ${RS}/><circle cx="12" cy="12" r="8.5" ${RF}/><circle cx="12" cy="12" r="5" ${RF_LINE}/></g><circle data-part="bull" cx="12" cy="12" r="2" ${RS}/>`,
    },
  },
  // 97. FLAG
  {
    name: "flag",
    label: "Flag",
    category: "Travel & Play",
    motionSummary: "Pennant cloth ripples across its vertical mast",
    soundSummary: "Crisp fabric flag snap in breeze",
    svgs: {
      outline: `<line x1="5.5" y1="3.5" x2="5.5" y2="20.5" ${K}/><path data-part="cloth" data-pivot="5.5 9" d="M5.5 4.5C8.5 3.5 11.5 5.8 14.5 4.8C16.5 4.2 18 4.4 19 4.8V13.2C17.8 12.6 16.2 12.6 14.5 13.2C11.5 14.2 8.5 12 5.5 13Z" ${K}/>`,
      solid: `<rect x="4.6" y="3.2" width="1.9" height="17.6" rx="0.95" fill="currentColor"/><path data-part="cloth" data-pivot="5.5 9" fill="currentColor" d="M5.5 4.4C8.6 3.3 11.6 5.8 14.6 4.7C16.6 4.1 18.2 4.3 19.2 4.8V13.4C17.9 12.7 16.2 12.7 14.5 13.4C11.5 14.4 8.5 12 5.5 13.1Z"/>`,
      duotone: `<line x1="5.5" y1="3.5" x2="5.5" y2="20.5" ${DK}/><path data-part="cloth" data-pivot="5.5 9" d="M5.5 4.5C8.5 3.5 11.5 5.8 14.5 4.8C16.5 4.2 18 4.4 19 4.8V13.2C17.8 12.6 16.2 12.6 14.5 13.2C11.5 14.2 8.5 12 5.5 13Z" ${D}/>`,
      glass: glassCompose(
        `<rect x="4.5" y="3.2" width="2" height="17.6" rx="1" ${GB}/>`,
        `<path data-part="cloth" data-pivot="5.5 9" d="M5.5 4.4C8.6 3.3 11.6 5.8 14.6 4.7C16.6 4.1 18.2 4.3 19.2 4.8V13.4C17.9 12.7 16.2 12.7 14.5 13.4C11.5 14.4 8.5 12 5.5 13.1Z"/>`
      ),
      stencil: `<rect x="4.6" y="3.5" width="1.8" height="17" rx="0.9" fill="currentColor"/><g data-part="cloth" data-pivot="5.5 9" fill="currentColor"><path d="M7.5 4.4C9.5 4.2 11 5.1 12.6 5.1V13.2C11 13.3 9.5 12.5 7.5 12.9Z"/><path d="M14.2 4.8C16.3 4.2 18 4.4 19 4.8V13.2C17.8 12.6 16.2 12.6 14.2 13.2Z"/></g>`,
      hardware: `<rect x="4.5" y="3.2" width="2" height="17.6" rx="1" ${HD}/><path data-part="cloth" data-pivot="5.5 9" d="M5.5 4.4C8.6 3.3 11.6 5.8 14.6 4.7C16.6 4.1 18.2 4.3 19.2 4.8V13.4C17.9 12.7 16.2 12.7 14.5 13.4C11.5 14.4 8.5 12 5.5 13.1Z" ${HA}/>`,
      relief: `<g data-part="cloth" data-pivot="5.5 9"><path transform="translate(1.5,1.5)" d="M5.5 4.5C8.5 3.5 11.5 5.8 14.5 4.8C16.5 4.2 18 4.4 19 4.8V13.2C17.8 12.6 16.2 12.6 14.5 13.2C11.5 14.2 8.5 12 5.5 13Z" ${RS}/><path d="M5.5 4.5C8.5 3.5 11.5 5.8 14.5 4.8C16.5 4.2 18 4.4 19 4.8V13.2C17.8 12.6 16.2 12.6 14.5 13.2C11.5 14.2 8.5 12 5.5 13Z" ${RF}/></g><line x1="5.5" y1="3.5" x2="5.5" y2="20.5" ${RF_LINE}/>`,
    },
  },
  // 98. SPARKLES
  {
    name: "sparkles",
    label: "Sparkles",
    category: "Travel & Play",
    motionSummary: "Four-point stars counter-rotate and bloom in magic shimmer",
    soundSummary: "Crystalline celesta arpeggio + fairy dust",
    svgs: {
      outline: `<polygon data-part="main" data-pivot="10.5 12.5" points="${starPts(10.5, 12.5, 4, 7.2, 2.2)}" ${K}/><polygon data-part="mini" data-pivot="18 6.5" points="${starPts(18, 6.5, 4, 3.2, 1.1)}" ${K_THIN}/>`,
      solid: `<polygon data-part="main" data-pivot="10.5 12.5" points="${starPts(10.5, 12.5, 4, 7.5, 2.3)}" fill="currentColor"/><polygon data-part="mini" data-pivot="18 6.5" points="${starPts(18, 6.5, 4, 3.4, 1.1)}" fill="currentColor"/>`,
      duotone: `<polygon data-part="main" data-pivot="10.5 12.5" points="${starPts(10.5, 12.5, 4, 7.2, 2.2)}" ${D}/><polygon data-part="mini" data-pivot="18 6.5" points="${starPts(18, 6.5, 4, 3.2, 1.1)}" ${D}/>`,
      glass: glassCompose(
        `<polygon data-part="mini" data-pivot="18 6.5" points="${starPts(18, 6.5, 4, 3.5, 1.2)}" ${GB}/><polygon data-part="main" data-pivot="10.5 12.5" points="${starPts(9.2, 11.2, 4, 7.2, 2.3)}" ${GB}/>`,
        `<polygon data-part="main" data-pivot="10.5 12.5" points="${starPts(10.5, 12.5, 4, 7.5, 2.3)}"/>`
      ),
      stencil: `<g data-part="main" data-pivot="10.5 12.5" fill="currentColor"><polygon points="10.5 5 12.2 10.6 17.8 12.5 12.2 14.4 10.5 20 8.8 14.4 3.2 12.5 8.8 10.6"/></g><polygon data-part="mini" data-pivot="18 6.5" points="${starPts(18, 6.5, 4, 3.2, 1.1)}" fill="currentColor"/>`,
      hardware: `<polygon data-part="main" data-pivot="10.5 12.5" points="${starPts(10.5, 12.5, 4, 7.5, 2.3)}" ${HL}/><polygon data-part="mini" data-pivot="18 6.5" points="${starPts(18, 6.5, 4, 3.4, 1.1)}" ${HA}/>`,
      relief: `<g data-part="main" data-pivot="10.5 12.5"><polygon transform="translate(1.5,1.5)" points="${starPts(10.5, 12.5, 4, 7.2, 2.2)}" ${RS}/><polygon points="${starPts(10.5, 12.5, 4, 7.2, 2.2)}" ${RF}/></g><g data-part="mini" data-pivot="18 6.5"><polygon transform="translate(1.2,1.2)" points="${starPts(18, 6.5, 4, 3.2, 1.1)}" ${RS}/><polygon points="${starPts(18, 6.5, 4, 3.2, 1.1)}" ${RF}/></g>`,
    },
  },
  // 99. PUZZLE
  {
    name: "puzzle",
    label: "Puzzle",
    category: "Travel & Play",
    motionSummary: "Jigsaw piece locks diagonally into place with crisp snap",
    soundSummary: "Wooden jigsaw click + completion chime",
    svgs: {
      outline: `<path data-part="piece" data-pivot="11.5 14" d="M5 10.9A1.4 1.4 0 0 1 6.4 9.5H8.8A2 2 0 1 1 12.8 9.5H15.1A1.4 1.4 0 0 1 16.5 10.9V13.2A2 2 0 1 1 16.5 17.2V18.6A1.4 1.4 0 0 1 15.1 20H6.4A1.4 1.4 0 0 1 5 18.6V16.2A2 2 0 1 0 5 12.2Z" ${K}/>`,
      solid: `<path data-part="piece" data-pivot="11.5 14" fill="currentColor" d="M4.8 10.8A1.5 1.5 0 0 1 6.3 9.3H8.6A2.2 2.2 0 1 1 13 9.3H15.3A1.5 1.5 0 0 1 16.8 10.8V13A2.2 2.2 0 1 1 16.8 17.4V18.7A1.5 1.5 0 0 1 15.3 20.2H6.3A1.5 1.5 0 0 1 4.8 18.7V16.4A2.2 2.2 0 1 0 4.8 12Z"/>`,
      duotone: `<path data-part="piece" data-pivot="11.5 14" d="M5 10.9A1.4 1.4 0 0 1 6.4 9.5H8.8A2 2 0 1 1 12.8 9.5H15.1A1.4 1.4 0 0 1 16.5 10.9V13.2A2 2 0 1 1 16.5 17.2V18.6A1.4 1.4 0 0 1 15.1 20H6.4A1.4 1.4 0 0 1 5 18.6V16.2A2 2 0 1 0 5 12.2Z" ${D}/>`,
      glass: glassCompose(
        `<path data-part="piece" data-pivot="11.5 14" transform="translate(-1.4,-1)" d="M4.8 10.8A1.5 1.5 0 0 1 6.3 9.3H8.6A2.2 2.2 0 1 1 13 9.3H15.3A1.5 1.5 0 0 1 16.8 10.8V13A2.2 2.2 0 1 1 16.8 17.4V18.7A1.5 1.5 0 0 1 15.3 20.2H6.3A1.5 1.5 0 0 1 4.8 18.7V16.4A2.2 2.2 0 1 0 4.8 12Z" ${GB}/>`,
        `<path data-part="piece" data-pivot="11.5 14" d="M4.8 10.8A1.5 1.5 0 0 1 6.3 9.3H8.6A2.2 2.2 0 1 1 13 9.3H15.3A1.5 1.5 0 0 1 16.8 10.8V13A2.2 2.2 0 1 1 16.8 17.4V18.7A1.5 1.5 0 0 1 15.3 20.2H6.3A1.5 1.5 0 0 1 4.8 18.7V16.4A2.2 2.2 0 1 0 4.8 12Z"/>`
      ),
      stencil: `<g data-part="piece" data-pivot="11.5 14" fill="currentColor"><path d="M5 10.9A1.4 1.4 0 0 1 6.4 9.5H8.8A2 2 0 1 1 10.1 6.4V20H6.4A1.4 1.4 0 0 1 5 18.6V16.2A2 2 0 1 0 5 12.2Z"/><path d="M11.6 6.4A2 2 0 0 1 12.8 9.5H15.1A1.4 1.4 0 0 1 16.5 10.9V13.2A2 2 0 1 1 16.5 17.2V18.6A1.4 1.4 0 0 1 15.1 20H11.6Z"/></g>`,
      hardware: `<path data-part="piece" data-pivot="11.5 14" d="M4.8 10.8A1.5 1.5 0 0 1 6.3 9.3H8.6A2.2 2.2 0 1 1 13 9.3H15.3A1.5 1.5 0 0 1 16.8 10.8V13A2.2 2.2 0 1 1 16.8 17.4V18.7A1.5 1.5 0 0 1 15.3 20.2H6.3A1.5 1.5 0 0 1 4.8 18.7V16.4A2.2 2.2 0 1 0 4.8 12Z" ${HL}/><circle data-part="piece" data-pivot="11.5 14" cx="10.8" cy="14.5" r="1.4" ${HA}/>`,
      relief: `<g data-part="piece" data-pivot="11.5 14"><path transform="translate(1.4,1.4)" d="M5 10.9A1.4 1.4 0 0 1 6.4 9.5H8.8A2 2 0 1 1 12.8 9.5H15.1A1.4 1.4 0 0 1 16.5 10.9V13.2A2 2 0 1 1 16.5 17.2V18.6A1.4 1.4 0 0 1 15.1 20H6.4A1.4 1.4 0 0 1 5 18.6V16.2A2 2 0 1 0 5 12.2Z" ${RS}/><path d="M5 10.9A1.4 1.4 0 0 1 6.4 9.5H8.8A2 2 0 1 1 12.8 9.5H15.1A1.4 1.4 0 0 1 16.5 10.9V13.2A2 2 0 1 1 16.5 17.2V18.6A1.4 1.4 0 0 1 15.1 20H6.4A1.4 1.4 0 0 1 5 18.6V16.2A2 2 0 1 0 5 12.2Z" ${RF}/></g>`,
    },
  },
  // 100. AWARD
  {
    name: "award",
    label: "Award",
    category: "Travel & Play",
    motionSummary: "Rosette medal swings gently while twin ribbons flutter down",
    soundSummary: "Ribbon medal chime + celebratory triad",
    svgs: {
      outline: `<path data-part="ribbons" d="M8.5 13.8L7.2 21L12 18.6L16.8 21L15.5 13.8" ${K}/><g data-part="medal" data-pivot="12 9" ${K}><circle cx="12" cy="9" r="5.5"/><circle cx="12" cy="9" r="2.2" ${K_THIN}/></g>`,
      solid: `<path data-part="ribbons" fill="currentColor" d="M8.2 13.4L6.8 21.2L12 18.6L17.2 21.2L15.8 13.4Z"/><path data-part="medal" data-pivot="12 9" fill="currentColor" fill-rule="evenodd" d="M12 3.2A5.8 5.8 0 1 0 12 14.8A5.8 5.8 0 1 0 12 3.2ZM12 6.8A2.2 2.2 0 1 0 12 11.2A2.2 2.2 0 1 0 12 6.8Z"/>`,
      duotone: `<path data-part="ribbons" d="M8.5 13.8L7.2 21L12 18.6L16.8 21L15.5 13.8" ${D}/><g data-part="medal" data-pivot="12 9"><circle cx="12" cy="9" r="5.5" ${D}/><circle cx="12" cy="9" r="2.2" ${DK_THIN}/></g>`,
      glass: glassCompose(
        `<path data-part="ribbons" data-pivot="12 17" d="M8.2 13L6.8 21.2L12 18.6L17.2 21.2L15.8 13Z" ${GB}/>`,
        `<circle data-part="medal" data-pivot="12 9" cx="12" cy="9" r="5.8"/>`,
        `<g data-part="medal" data-pivot="12 9" ${GF}><circle cx="12" cy="9" r="5.8"/></g><circle data-part="medal" data-pivot="12 9" cx="12" cy="9" r="2.2" ${GB}/>`
      ),
      stencil: `<g data-part="ribbons" fill="currentColor"><polygon points="8.4 13.8 7 21 11.2 19 11.2 14.5"/><polygon points="15.6 13.8 17 21 12.8 19 12.8 14.5"/></g><path data-part="medal" data-pivot="12 9" fill="currentColor" fill-rule="evenodd" d="M12 3.5A5.5 5.5 0 1 0 12 14.5A5.5 5.5 0 1 0 12 3.5ZM12 6.8A2.2 2.2 0 1 0 12 11.2A2.2 2.2 0 1 0 12 6.8Z"/>`,
      hardware: `<path data-part="ribbons" d="M8.2 13.4L6.8 21.2L12 18.6L17.2 21.2L15.8 13.4Z" ${HA}/><g data-part="medal" data-pivot="12 9"><circle cx="12" cy="9" r="5.8" ${HL}/><circle cx="12" cy="9" r="2.3" ${HD}/></g>`,
      relief: `<g data-part="ribbons"><path transform="translate(1.4,1.4)" d="M8.5 13.8L7.2 21L12 18.6L16.8 21L15.5 13.8" ${RS}/><path d="M8.5 13.8L7.2 21L12 18.6L16.8 21L15.5 13.8" ${RF}/></g><g data-part="medal" data-pivot="12 9"><circle transform="translate(1.4,1.4)" cx="12" cy="9" r="5.5" ${RS}/><circle cx="12" cy="9" r="5.5" ${RF}/><circle cx="12" cy="9" r="2.1" ${RS}/></g>`,
    },
  },
];
