import {
  IconDef,
  K,
  K_THIN,
  D,
  DK,
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
  triSpokes,
} from "../shared";

export const TOOLS_ICONS: IconDef[] = [
  // 31. BICYCLE (Steady frame, airy 3-spoke wheels & crank spin +360°)
  {
    name: "bicycle",
    label: "Bicycle",
    category: "Kinetic Tools",
    motionSummary: "Steady frame while airy wheels and crank spin +360°",
    soundSummary: "Brass bicycle bell + freewheel coasting ratchet",
    svgs: {
      outline: `
        <g data-part="wheel-back" data-pivot="5.8 16" ${K}>
          <circle cx="5.8" cy="16" r="3.8"/>
          ${triSpokes(5.8, 16, 3.2, 'stroke="currentColor" stroke-width="0.85" stroke-linecap="round"')}
        </g>
        <g data-part="wheel-front" data-pivot="18.2 16" ${K}>
          <circle cx="18.2" cy="16" r="3.8"/>
          ${triSpokes(18.2, 16, 3.2, 'stroke="currentColor" stroke-width="0.85" stroke-linecap="round"')}
        </g>
        <g data-part="frame" ${K}>
          <path d="M5.8 16L9.4 10.4H15L11.2 16Z"/>
          <path d="M18.2 16L15 8H17.4"/>
          <path d="M8.2 8H10.8M9.4 10.4L9.2 8"/>
        </g>
        <g data-part="crank" data-pivot="11.2 16">
          <circle cx="11.2" cy="16" r="1.1" fill="currentColor"/>
          <line x1="11.2" y1="14" x2="11.2" y2="18" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
        </g>
      `,
      solid: `
        <g data-part="wheel-back" data-pivot="5.8 16" fill="currentColor">
          <path fill-rule="evenodd" d="M5.8 12A4 4 0 1 0 5.8 20A4 4 0 1 0 5.8 12ZM5.8 13.4A2.6 2.6 0 1 1 5.8 18.6A2.6 2.6 0 1 1 5.8 13.4Z"/>
          ${triSpokes(5.8, 16, 2.8, 'stroke="currentColor" stroke-width="0.7" stroke-linecap="round"')}
          <circle cx="5.8" cy="16" r="0.8"/>
        </g>
        <g data-part="wheel-front" data-pivot="18.2 16" fill="currentColor">
          <path fill-rule="evenodd" d="M18.2 12A4 4 0 1 0 18.2 20A4 4 0 1 0 18.2 12ZM18.2 13.4A2.6 2.6 0 1 1 18.2 18.6A2.6 2.6 0 1 1 18.2 13.4Z"/>
          ${triSpokes(18.2, 16, 2.8, 'stroke="currentColor" stroke-width="0.7" stroke-linecap="round"')}
          <circle cx="18.2" cy="16" r="0.8"/>
        </g>
        <g data-part="frame" ${K}>
          <path d="M5.8 16L9.4 10.4H15L11.2 16Z"/>
          <path d="M18.2 16L15 8H17.4"/>
          <line x1="8" y1="8" x2="11" y2="8"/>
          <line x1="9.4" y1="10.4" x2="9.2" y2="8"/>
        </g>
        <g data-part="crank" data-pivot="11.2 16" fill="currentColor">
          <circle cx="11.2" cy="16" r="1.4"/>
          <rect x="10.7" y="13.7" width="1" height="4.6" rx="0.4"/>
        </g>
      `,
      duotone: `
        <g data-part="wheel-back" data-pivot="5.8 16">
          <circle cx="5.8" cy="16" r="3.8" ${DK}/>
          ${triSpokes(5.8, 16, 3.2, 'stroke="currentColor" stroke-width="0.7" stroke-linecap="round"')}
        </g>
        <g data-part="wheel-front" data-pivot="18.2 16">
          <circle cx="18.2" cy="16" r="3.8" ${DK}/>
          ${triSpokes(18.2, 16, 3.2, 'stroke="currentColor" stroke-width="0.7" stroke-linecap="round"')}
        </g>
        <g data-part="frame">
          <path d="M5.8 16L9.4 10.4H15L11.2 16Z" ${D}/>
          <path d="M18.2 16L15 8H17.4M8.2 8H10.8M9.4 10.4L9.2 8" ${DK}/>
        </g>
        <g data-part="crank" data-pivot="11.2 16">
          <circle cx="11.2" cy="16" r="1" fill="currentColor"/>
          <line x1="11.2" y1="14" x2="11.2" y2="18" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
        </g>
      `,
      glass: glassCompose(
        `<g data-part="wheel-back" data-pivot="5.8 16">
          <circle cx="5.8" cy="16" r="3.8" ${GBS}/>
          ${triSpokes(5.8, 16, 3.1, 'stroke="url(#g-back)" stroke-width="0.85" stroke-linecap="round"')}
        </g>
        <g data-part="wheel-front" data-pivot="18.2 16">
          <circle cx="18.2" cy="16" r="3.8" ${GBS}/>
          ${triSpokes(18.2, 16, 3.1, 'stroke="url(#g-back)" stroke-width="0.85" stroke-linecap="round"')}
        </g>
        <path data-part="frame" d="M18.2 16L15 8H17.4M8.2 8H10.8M9.4 10.4L9.2 8" ${GBS}/>
        <g data-part="crank" data-pivot="11.2 16">
          <line x1="11.2" y1="13.8" x2="11.2" y2="18.2" stroke="url(#g-back)" stroke-width="1.2" stroke-linecap="round"/>
        </g>`,
        `<path data-part="frame" d="M5.8 16L9.4 10.4H15L11.2 16Z"/><circle data-part="wheel-back" data-pivot="5.8 16" cx="5.8" cy="16" r="1.4"/><circle data-part="wheel-front" data-pivot="18.2 16" cx="18.2" cy="16" r="1.4"/><circle data-part="crank" data-pivot="11.2 16" cx="11.2" cy="16" r="1.4"/>`
      ),
      stencil: `
        <g data-part="wheel-back" data-pivot="5.8 16" fill="currentColor">
          <path d="M2.1 15.2A3.8 3.8 0 0 1 9.5 15.2H7.7A2 2 0 0 0 3.9 15.2Z"/>
          <path d="M9.5 16.8A3.8 3.8 0 0 1 2.1 16.8H3.9A2 2 0 0 0 7.7 16.8Z"/>
          <circle cx="5.8" cy="16" r="0.9"/>
        </g>
        <g data-part="wheel-front" data-pivot="18.2 16" fill="currentColor">
          <path d="M14.5 15.2A3.8 3.8 0 0 1 21.9 15.2H20.1A2 2 0 0 0 16.3 15.2Z"/>
          <path d="M21.9 16.8A3.8 3.8 0 0 1 14.5 16.8H16.3A2 2 0 0 0 20.1 16.8Z"/>
          <circle cx="18.2" cy="16" r="0.9"/>
        </g>
        <g data-part="frame" fill="currentColor">
          <path d="M5.8 15.2L9.1 10.1H15.2L14.3 11.5H9.9L7 16Z"/>
          <path d="M14.5 7.8H17.5V9.2H15.6L18.7 15.8L17.3 16.4Z"/>
          <rect x="8" y="7.6" width="3" height="1.3" rx="0.4"/>
        </g>
        <g data-part="crank" data-pivot="11.2 16" fill="currentColor">
          <circle cx="11.2" cy="16" r="1.2"/>
          <rect x="10.7" y="13.7" width="1" height="4.6" rx="0.4"/>
        </g>
      `,
      hardware: `
        <g data-part="wheel-back" data-pivot="5.8 16">
          <circle cx="5.8" cy="16" r="3.8" fill="none" stroke="#18181b" stroke-width="1.6"/>
          ${triSpokes(5.8, 16, 3.1, 'stroke="#71717a" stroke-width="0.8" stroke-linecap="round"')}
          <circle cx="5.8" cy="16" r="0.9" ${HD}/>
        </g>
        <g data-part="wheel-front" data-pivot="18.2 16">
          <circle cx="18.2" cy="16" r="3.8" fill="none" stroke="#18181b" stroke-width="1.6"/>
          ${triSpokes(18.2, 16, 3.1, 'stroke="#71717a" stroke-width="0.8" stroke-linecap="round"')}
          <circle cx="18.2" cy="16" r="0.9" ${HD}/>
        </g>
        <g data-part="frame">
          <path d="M5.8 16L9.4 10.4H15L11.2 16Z" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linejoin="round"/>
          <path d="M18.2 16L15 8H17.4M9.4 10.4L9.2 8" fill="none" stroke="#52525b" stroke-width="1.4" stroke-linecap="round"/>
          <rect x="7.8" y="7.2" width="3.2" height="1.3" rx="0.6" ${HD}/>
          <circle cx="16.4" cy="11.8" r="0.9" ${HA}/>
        </g>
        <g data-part="crank" data-pivot="11.2 16">
          <circle cx="11.2" cy="16" r="1.3" ${HM}/>
          <rect x="10.7" y="13.8" width="1" height="4.4" rx="0.4" ${HD}/>
        </g>
      `,
      relief: `
        <g data-part="wheel-back" data-pivot="5.8 16">
          <g transform="translate(1.2,1.2)" ${RS_LINE}><circle cx="5.8" cy="16" r="3.8"/></g>
          <circle cx="5.8" cy="16" r="3.8" ${RF_LINE}/>
          ${triSpokes(5.8, 16, 3.2, 'stroke="var(--rel-stroke)" stroke-width="0.85" stroke-linecap="round"')}
        </g>
        <g data-part="wheel-front" data-pivot="18.2 16">
          <g transform="translate(1.2,1.2)" ${RS_LINE}><circle cx="18.2" cy="16" r="3.8"/></g>
          <circle cx="18.2" cy="16" r="3.8" ${RF_LINE}/>
          ${triSpokes(18.2, 16, 3.2, 'stroke="var(--rel-stroke)" stroke-width="0.85" stroke-linecap="round"')}
        </g>
        <g data-part="frame">
          <path transform="translate(1.2,1.2)" d="M5.8 16L9.4 10.4H15L11.2 16Z" ${RS}/>
          <path d="M5.8 16L9.4 10.4H15L11.2 16Z" ${RF}/>
          <path d="M18.2 16L15 8H17.4M8.2 8H10.8M9.4 10.4L9.2 8" ${RF_LINE}/>
        </g>
        <g data-part="crank" data-pivot="11.2 16">
          <circle cx="11.2" cy="16" r="1.2" ${RF}/>
          <line x1="11.2" y1="14" x2="11.2" y2="18" ${RF_LINE}/>
        </g>
      `,
    },
  },
  // 32. SCISSORS
  {
    name: "scissors",
    label: "Scissors",
    category: "Kinetic Tools",
    motionSummary: "Opposing blades double-snip around central pivot",
    soundSummary: "Double high-Q steel blade shear snick-snick",
    svgs: {
      outline: `<g data-part="blade-a" data-pivot="12 11.5" ${K}><circle cx="6.8" cy="17.5" r="2.7"/><line x1="8.6" y1="15.4" x2="19.2" y2="4.5"/></g><g data-part="blade-b" data-pivot="12 11.5" ${K}><circle cx="17.2" cy="17.5" r="2.7"/><line x1="15.4" y1="15.4" x2="4.8" y2="4.5"/></g>`,
      solid: `<g data-part="blade-a" data-pivot="12 11.5" fill="currentColor"><path fill-rule="evenodd" d="M6.8 14.5A3 3 0 1 0 6.8 20.5A3 3 0 1 0 6.8 14.5ZM6.8 16.1A1.4 1.4 0 1 1 6.8 18.9A1.4 1.4 0 1 1 6.8 16.1Z"/><path d="M8.1 14.8L19.4 4.2C19.8 5.1 19.6 6.1 18.9 6.8L9.5 16.1Z"/></g><g data-part="blade-b" data-pivot="12 11.5" fill="currentColor"><path fill-rule="evenodd" d="M17.2 14.5A3 3 0 1 0 17.2 20.5A3 3 0 1 0 17.2 14.5ZM17.2 16.1A1.4 1.4 0 1 1 17.2 18.9A1.4 1.4 0 1 1 17.2 16.1Z"/><path d="M15.9 14.8L4.6 4.2C4.2 5.1 4.4 6.1 5.1 6.8L14.5 16.1Z"/></g>`,
      duotone: `<g data-part="blade-a" data-pivot="12 11.5"><circle cx="6.8" cy="17.5" r="2.7" ${D}/><line x1="8.6" y1="15.4" x2="19.2" y2="4.5" ${DK}/></g><g data-part="blade-b" data-pivot="12 11.5"><circle cx="17.2" cy="17.5" r="2.7" ${D}/><line x1="15.4" y1="15.4" x2="4.8" y2="4.5" ${DK}/></g><circle cx="12" cy="11.5" r="1" fill="currentColor"/>`,
      glass: glassCompose(
        `<g data-part="blade-b" data-pivot="12 11.5"><circle cx="17.2" cy="17.5" r="2.6" ${GBS}/><path d="M15.8 15.2L4.7 4.3C4.3 5.2 4.5 6.2 5.3 6.9L14.6 16Z" ${GB}/></g><circle data-part="blade-a" data-pivot="12 11.5" cx="6.8" cy="17.5" r="2.6" ${GBS}/>`,
        `<path data-part="blade-a" data-pivot="12 11.5" d="M8.2 15.2L19.3 4.3C19.7 5.2 19.5 6.2 18.7 6.9L9.4 16Z"/>`,
        `<g data-part="blade-a" data-pivot="12 11.5" ${GF}><path d="M8.2 15.2L19.3 4.3C19.7 5.2 19.5 6.2 18.7 6.9L9.4 16Z"/></g><circle cx="12" cy="11.5" r="1.1" ${GB}/>`
      ),
      stencil: `<g data-part="blade-a" data-pivot="12 11.5" fill="currentColor"><path d="M4.2 17.5A2.8 2.8 0 0 1 9.4 16L8.2 17A1.4 1.4 0 0 0 5.5 17.5Z"/><path d="M9.5 17.5A2.8 2.8 0 0 1 4.2 18.3L5.6 17.9A1.4 1.4 0 0 0 8.2 17.5Z"/><path d="M8.3 14.9L19.2 4.4L19.8 5.6L9.4 16Z"/></g><g data-part="blade-b" data-pivot="12 11.5" fill="currentColor"><path d="M19.8 17.5A2.8 2.8 0 0 0 14.6 16L15.8 17A1.4 1.4 0 0 1 18.5 17.5Z"/><path d="M14.5 17.5A2.8 2.8 0 0 0 19.8 18.3L18.4 17.9A1.4 1.4 0 0 1 15.8 17.5Z"/><path d="M15.7 14.9L4.8 4.4L4.2 5.6L14.6 16Z"/></g>`,
      hardware: `<g data-part="blade-a" data-pivot="12 11.5"><path d="M8.2 15.2L19.3 4.3C19.7 5.2 19.5 6.2 18.7 6.9L9.4 16Z" ${HL}/><circle cx="6.8" cy="17.5" r="2.8" ${HD}/><circle cx="6.8" cy="17.5" r="1.3" ${HL}/></g><g data-part="blade-b" data-pivot="12 11.5"><path d="M15.8 15.2L4.7 4.3C4.3 5.2 4.5 6.2 5.3 6.9L14.6 16Z" ${HM}/><circle cx="17.2" cy="17.5" r="2.8" ${HD}/><circle cx="17.2" cy="17.5" r="1.3" ${HL}/></g><circle cx="12" cy="11.5" r="1.1" ${HA}/>`,
      relief: `<g data-part="blade-a" data-pivot="12 11.5"><g transform="translate(1.5,1.5)"><circle cx="6.8" cy="17.5" r="2.7" ${RS_LINE}/><line x1="8.6" y1="15.4" x2="19.2" y2="4.5" ${RS_LINE}/></g><circle cx="6.8" cy="17.5" r="2.7" ${RF}/><line x1="8.6" y1="15.4" x2="19.2" y2="4.5" ${RF_LINE}/></g><g data-part="blade-b" data-pivot="12 11.5"><g transform="translate(1.5,1.5)"><circle cx="17.2" cy="17.5" r="2.7" ${RS_LINE}/><line x1="15.4" y1="15.4" x2="4.8" y2="4.5" ${RS_LINE}/></g><circle cx="17.2" cy="17.5" r="2.7" ${RF}/><line x1="15.4" y1="15.4" x2="4.8" y2="4.5" ${RF_LINE}/></g>`,
    },
  },
  // 33. WRENCH
  {
    name: "wrench",
    label: "Wrench",
    category: "Kinetic Tools",
    motionSummary: "Spanner jaw cranks 42° around bolt head",
    soundSummary: "Chrome socket wrench ratchet clicks",
    svgs: {
      outline: `<path data-part="wrench" data-pivot="16.5 7.5" d="M14.7 6.3A4.5 4.5 0 0 0 11 11.8L5.2 17.6A1.7 1.7 0 0 0 7.6 20L13.4 14.2A4.5 4.5 0 0 0 18.9 10.5L16.3 13.1L13.9 10.7L16.5 8.1A4.5 4.5 0 0 0 14.7 6.3Z" ${K}/>`,
      solid: `<path data-part="wrench" data-pivot="16.5 7.5" fill="currentColor" d="M14.6 5.8A4.8 4.8 0 0 0 10.7 11.7L4.8 17.6A2 2 0 0 0 7.6 20.4L13.5 14.5A4.8 4.8 0 0 0 19.4 10.6L16.4 13.5L13.6 10.7L16.5 7.7A4.8 4.8 0 0 0 14.6 5.8Z"/>`,
      duotone: `<path data-part="wrench" data-pivot="16.5 7.5" d="M14.7 6.3A4.5 4.5 0 0 0 11 11.8L5.2 17.6A1.7 1.7 0 0 0 7.6 20L13.4 14.2A4.5 4.5 0 0 0 18.9 10.5L16.3 13.1L13.9 10.7L16.5 8.1A4.5 4.5 0 0 0 14.7 6.3Z" ${D}/>`,
      glass: glassCompose(
        `<path data-part="wrench" data-pivot="16.5 7.5" transform="translate(-1.6,-1.2)" d="M14.7 6.3A4.5 4.5 0 0 0 11 11.8L5.2 17.6A1.7 1.7 0 0 0 7.6 20L13.4 14.2A4.5 4.5 0 0 0 18.9 10.5L16.3 13.1L13.9 10.7L16.5 8.1A4.5 4.5 0 0 0 14.7 6.3Z" ${GB}/>`,
        `<path data-part="wrench" data-pivot="16.5 7.5" d="M14.7 6.3A4.5 4.5 0 0 0 11 11.8L5.2 17.6A1.7 1.7 0 0 0 7.6 20L13.4 14.2A4.5 4.5 0 0 0 18.9 10.5L16.3 13.1L13.9 10.7L16.5 8.1A4.5 4.5 0 0 0 14.7 6.3Z"/>`
      ),
      stencil: `<g data-part="wrench" data-pivot="16.5 7.5" fill="currentColor"><path d="M14.6 5.8A4.8 4.8 0 0 0 11 11.4L13.7 14.1A4.8 4.8 0 0 0 19.4 10.6L16.4 13.5L13.6 10.7L16.5 7.7A4.8 4.8 0 0 0 14.6 5.8Z"/><path d="M10.1 12.6L4.8 17.6A2 2 0 0 0 7.6 20.4L12.6 15.1Z"/></g>`,
      hardware: `<g data-part="wrench" data-pivot="16.5 7.5"><path d="M14.7 6.3A4.5 4.5 0 0 0 11 11.8L5.2 17.6A1.7 1.7 0 0 0 7.6 20L13.4 14.2A4.5 4.5 0 0 0 18.9 10.5L16.3 13.1L13.9 10.7L16.5 8.1A4.5 4.5 0 0 0 14.7 6.3Z" ${HL}/><circle cx="6.6" cy="18.6" r="0.9" ${HA}/></g>`,
      relief: `<g data-part="wrench" data-pivot="16.5 7.5"><path transform="translate(1.5,1.5)" d="M14.7 6.3A4.5 4.5 0 0 0 11 11.8L5.2 17.6A1.7 1.7 0 0 0 7.6 20L13.4 14.2A4.5 4.5 0 0 0 18.9 10.5L16.3 13.1L13.9 10.7L16.5 8.1A4.5 4.5 0 0 0 14.7 6.3Z" ${RS}/><path d="M14.7 6.3A4.5 4.5 0 0 0 11 11.8L5.2 17.6A1.7 1.7 0 0 0 7.6 20L13.4 14.2A4.5 4.5 0 0 0 18.9 10.5L16.3 13.1L13.9 10.7L16.5 8.1A4.5 4.5 0 0 0 14.7 6.3Z" ${RF}/></g>`,
    },
  },
  // 34. HAMMER
  {
    name: "hammer",
    label: "Hammer",
    category: "Kinetic Tools",
    motionSummary: "Steel head cocks back then strikes downward decisively",
    soundSummary: "Wooden-handle anvil strike thud + steel ring",
    svgs: {
      outline: `<g data-part="hammer" data-pivot="5.5 18.5" ${K}><path d="M14.5 4.5L19.5 9.5L17 12L12 7Z"/><line x1="14.5" y1="9.5" x2="5" y2="19"/></g>`,
      solid: `<g data-part="hammer" data-pivot="5.5 18.5" fill="currentColor"><path d="M14.2 3.8L20.2 9.8L17.4 12.6L11.4 6.6Z"/><path d="M13.5 8.6L15.4 10.5L6.5 19.4A1.3 1.3 0 0 1 4.6 17.5Z"/></g>`,
      duotone: `<g data-part="hammer" data-pivot="5.5 18.5"><path d="M14.5 4.5L19.5 9.5L17 12L12 7Z" ${D}/><line x1="14.5" y1="9.5" x2="5" y2="19" ${DK}/></g>`,
      glass: glassCompose(
        `<path data-part="hammer" data-pivot="5.5 18.5" d="M13.5 8.6L15.4 10.5L6.5 19.4A1.3 1.3 0 0 1 4.6 17.5Z" ${GB}/>`,
        `<path data-part="hammer" data-pivot="5.5 18.5" d="M14.2 3.8L20.2 9.8L17.4 12.6L11.4 6.6Z"/>`
      ),
      stencil: `<g data-part="hammer" data-pivot="5.5 18.5" fill="currentColor"><path d="M14.2 3.8L20.2 9.8L17.4 12.6L11.4 6.6Z"/><path d="M12.6 9.5L14.5 11.4L6.5 19.4A1.3 1.3 0 0 1 4.6 17.5Z"/></g>`,
      hardware: `<g data-part="hammer" data-pivot="5.5 18.5"><path d="M13.5 8.6L15.4 10.5L6.5 19.4A1.3 1.3 0 0 1 4.6 17.5Z" ${HD}/><path d="M14.2 3.8L20.2 9.8L17.4 12.6L11.4 6.6Z" ${HL}/><circle cx="15.8" cy="8.2" r="1" ${HA}/></g>`,
      relief: `<g data-part="hammer" data-pivot="5.5 18.5"><g transform="translate(1.5,1.5)"><path d="M14.5 4.5L19.5 9.5L17 12L12 7Z" ${RS}/><line x1="14.5" y1="9.5" x2="5" y2="19" ${RS_LINE}/></g><line x1="14.5" y1="9.5" x2="5" y2="19" ${RF_LINE}/><path d="M14.5 4.5L19.5 9.5L17 12L12 7Z" ${RF}/></g>`,
    },
  },
  // 35. PAINTBRUSH
  {
    name: "paintbrush",
    label: "Paintbrush",
    category: "Kinetic Tools",
    motionSummary: "Bristle head sweeps a smooth stroke arc",
    soundSummary: "Soft bristle sweep across textured canvas",
    svgs: {
      outline: `<g data-part="brush" data-pivot="6 18" ${K}><path d="M18.5 4.5A2 2 0 0 1 19.5 7.5L11.5 15.5L8.5 12.5L16.5 4.5Z"/><path d="M8.5 12.5C6 12.5 4.5 14.5 4.5 17C4.5 18.5 3.5 19.5 3 19.5C5.5 20.5 9.5 20 11.5 15.5"/></g>`,
      solid: `<g data-part="brush" data-pivot="6 18" fill="currentColor"><path d="M19.8 4.2A2.1 2.1 0 0 1 19.8 7.2L11.8 15.2L8.8 12.2L16.8 4.2A2.1 2.1 0 0 1 19.8 4.2Z"/><path d="M8.2 12.8C5.5 12.8 4.2 14.8 4.2 17C4.2 18.4 3.4 19.4 2.8 19.6C5.6 20.8 9.8 20.2 11.2 15.8Z"/></g>`,
      duotone: `<g data-part="brush" data-pivot="6 18"><path d="M18.5 4.5A2 2 0 0 1 19.5 7.5L11.5 15.5L8.5 12.5L16.5 4.5Z" ${D}/><path d="M8.5 12.5C6 12.5 4.5 14.5 4.5 17C4.5 18.5 3.5 19.5 3 19.5C5.5 20.5 9.5 20 11.5 15.5" ${DK}/></g>`,
      glass: glassCompose(
        `<path data-part="brush" data-pivot="6 18" d="M8.2 12.8C5.5 12.8 4.2 14.8 4.2 17C4.2 18.4 3.4 19.4 2.8 19.6C5.6 20.8 9.8 20.2 11.2 15.8Z" ${GB}/>`,
        `<path data-part="brush" data-pivot="6 18" d="M19.8 4.2A2.1 2.1 0 0 1 19.8 7.2L11.8 15.2L8.8 12.2L16.8 4.2A2.1 2.1 0 0 1 19.8 4.2Z"/>`
      ),
      stencil: `<g data-part="brush" data-pivot="6 18" fill="currentColor"><path d="M19.6 4.4A2 2 0 0 1 19.6 7.4L12.6 14.4L9.6 11.4L16.6 4.4A2 2 0 0 1 19.6 4.4Z"/><path d="M8.2 12.8C5.5 12.8 4.2 14.8 4.2 17C4.2 18.4 3.4 19.4 2.8 19.6C5.6 20.8 9.8 20.2 11.2 15.8Z"/></g>`,
      hardware: `<g data-part="brush" data-pivot="6 18"><path d="M18.5 4.5A2 2 0 0 1 19.5 7.5L11.5 15.5L8.5 12.5L16.5 4.5Z" ${HL}/><path d="M8.2 12.8C5.5 12.8 4.2 14.8 4.2 17C4.2 18.4 3.4 19.4 2.8 19.6C5.6 20.8 9.8 20.2 11.2 15.8Z" ${HA}/></g>`,
      relief: `<g data-part="brush" data-pivot="6 18"><g transform="translate(1.5,1.5)" ${RS}><path d="M18.5 4.5A2 2 0 0 1 19.5 7.5L11.5 15.5L8.5 12.5L16.5 4.5Z"/><path d="M8.5 12.5C6 12.5 4.5 14.5 4.5 17C4.5 18.5 3.5 19.5 3 19.5C5.5 20.5 9.5 20 11.5 15.5Z"/></g><path d="M18.5 4.5A2 2 0 0 1 19.5 7.5L11.5 15.5L8.5 12.5L16.5 4.5Z" ${RF}/><path d="M8.5 12.5C6 12.5 4.5 14.5 4.5 17C4.5 18.5 3.5 19.5 3 19.5C5.5 20.5 9.5 20 11.5 15.5Z" ${RF}/></g>`,
    },
  },
  // 36. PEN
  {
    name: "pen",
    label: "Pen",
    category: "Kinetic Tools",
    motionSummary: "Fountain pen nib scribbles briskly across baseline",
    soundSummary: "Crisp nib scratch across textured paper",
    svgs: {
      outline: `<g data-part="pen" data-pivot="5 19" ${K}><path d="M16.5 4L20 7.5L8.5 19H5V15.5Z"/><line x1="14" y1="6.5" x2="17.5" y2="10"/></g><line x1="4.5" y1="21" x2="19.5" y2="21" ${K_THIN} opacity="0.45"/>`,
      solid: `<g data-part="pen" data-pivot="5 19" fill="currentColor"><path d="M16.5 3.6L20.4 7.5L9.2 18.7H4.8V14.3Z"/></g><rect x="4.5" y="20" width="15" height="1.5" rx="0.75" fill="currentColor" opacity="0.45"/>`,
      duotone: `<g data-part="pen" data-pivot="5 19"><path d="M16.5 4L20 7.5L8.5 19H5V15.5Z" ${D}/><line x1="14" y1="6.5" x2="17.5" y2="10" ${DK}/></g>`,
      glass: glassCompose(
        `<path data-part="pen" data-pivot="5 19" transform="translate(-1.5,-1.1)" d="M16.5 4L20 7.5L8.5 19H5V15.5Z" ${GB}/>`,
        `<path data-part="pen" data-pivot="5 19" d="M16.5 4L20 7.5L8.5 19H5V15.5Z"/>`,
        `<g data-part="pen" data-pivot="5 19" ${GF}><path d="M16.5 4L20 7.5L8.5 19H5V15.5Z"/></g><polygon data-part="pen" data-pivot="5 19" points="5 15.5 8.5 19 5 19" ${GB}/>`
      ),
      stencil: `<g data-part="pen" data-pivot="5 19" fill="currentColor"><polygon points="16.5 4 20 7.5 17.8 9.7 14.3 6.2"/><polygon points="13.2 7.3 16.7 10.8 8.5 19 5 19 5 15.5"/></g>`,
      hardware: `<g data-part="pen" data-pivot="5 19"><path d="M16.5 4L20 7.5L8.5 19H5V15.5Z" ${HL}/><polygon points="16.5 4 20 7.5 17.8 9.7 14.3 6.2" ${HA}/><polygon points="5 15.5 8.5 19 5 19" ${HD}/></g>`,
      relief: `<g data-part="pen" data-pivot="5 19"><path transform="translate(1.5,1.5)" d="M16.5 4L20 7.5L8.5 19H5V15.5Z" ${RS}/><path d="M16.5 4L20 7.5L8.5 19H5V15.5Z" ${RF}/><line x1="14" y1="6.5" x2="17.5" y2="10" ${RF_LINE}/></g>`,
    },
  },
  // 37. SLIDERS
  {
    name: "sliders",
    label: "Sliders",
    category: "Kinetic Tools",
    motionSummary: "Three console fader caps glide to staggered levels",
    soundSummary: "Console fader track glide + detent click",
    svgs: {
      outline: `<g ${K}><line x1="3.6" y1="7" x2="20.4" y2="7"/><line x1="3.6" y1="12" x2="20.4" y2="12"/><line x1="3.6" y1="17" x2="20.4" y2="17"/></g><g fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"><line data-part="knob-1" x1="9" y1="4.6" x2="9" y2="9.4"/><line data-part="knob-2" x1="15" y1="9.6" x2="15" y2="14.4"/><line data-part="knob-3" x1="10" y1="14.6" x2="10" y2="19.4"/></g>`,
      solid: `<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3.6" y1="7" x2="20.4" y2="7"/><line x1="3.6" y1="12" x2="20.4" y2="12"/><line x1="3.6" y1="17" x2="20.4" y2="17"/></g><g fill="none" stroke="currentColor" stroke-width="3.6" stroke-linecap="round"><line data-part="knob-1" x1="9" y1="4.6" x2="9" y2="9.4"/><line data-part="knob-2" x1="15" y1="9.6" x2="15" y2="14.4"/><line data-part="knob-3" x1="10" y1="14.6" x2="10" y2="19.4"/></g>`,
      duotone: `<g ${DK}><line x1="3.6" y1="7" x2="20.4" y2="7"/><line x1="3.6" y1="12" x2="20.4" y2="12"/><line x1="3.6" y1="17" x2="20.4" y2="17"/></g><g fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"><line data-part="knob-1" x1="9" y1="4.6" x2="9" y2="9.4"/><line data-part="knob-2" x1="15" y1="9.6" x2="15" y2="14.4"/><line data-part="knob-3" x1="10" y1="14.6" x2="10" y2="19.4"/></g>`,
      glass: glassCompose(
        `<g fill="none" stroke="url(#g-back)" stroke-width="5" stroke-linecap="round"><line x1="9" y1="4.6" x2="9" y2="9.4"/><line x1="15" y1="9.6" x2="15" y2="14.4"/><line x1="10" y1="14.6" x2="10" y2="19.4"/></g>`,
        ``,
        `<g ${GBS}><line x1="3.6" y1="7" x2="20.4" y2="7"/><line x1="3.6" y1="12" x2="20.4" y2="12"/><line x1="3.6" y1="17" x2="20.4" y2="17"/></g><g fill="none" stroke="url(#g-back)" stroke-width="3.4" stroke-linecap="round"><line data-part="knob-1" x1="9" y1="4.6" x2="9" y2="9.4"/><line data-part="knob-2" x1="15" y1="9.6" x2="15" y2="14.4"/><line data-part="knob-3" x1="10" y1="14.6" x2="10" y2="19.4"/></g>`
      ),
      stencil: `<g fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-dasharray="4.4 1.8"><line x1="3.6" y1="7" x2="20.4" y2="7"/><line x1="3.6" y1="12" x2="20.4" y2="12"/><line x1="3.6" y1="17" x2="20.4" y2="17"/></g><g fill="none" stroke="currentColor" stroke-width="3.6" stroke-linecap="round"><line data-part="knob-1" x1="9" y1="4.6" x2="9" y2="9.4"/><line data-part="knob-2" x1="15" y1="9.6" x2="15" y2="14.4"/><line data-part="knob-3" x1="10" y1="14.6" x2="10" y2="19.4"/></g>`,
      hardware: `<g stroke="#52525b" stroke-width="1.8" stroke-linecap="round"><line x1="3.6" y1="7" x2="20.4" y2="7"/><line x1="3.6" y1="12" x2="20.4" y2="12"/><line x1="3.6" y1="17" x2="20.4" y2="17"/></g><rect data-part="knob-1" x="7.3" y="4.7" width="3.4" height="4.6" rx="0.9" ${HL}/><rect data-part="knob-2" x="13.3" y="9.7" width="3.4" height="4.6" rx="0.9" ${HA}/><rect data-part="knob-3" x="8.3" y="14.7" width="3.4" height="4.6" rx="0.9" ${HL}/>`,
      relief: `<g transform="translate(1.4,1.4)" ${RS_LINE}><line x1="3.6" y1="7" x2="20.4" y2="7"/><line x1="3.6" y1="12" x2="20.4" y2="12"/><line x1="3.6" y1="17" x2="20.4" y2="17"/></g><g ${RF_LINE}><line x1="3.6" y1="7" x2="20.4" y2="7"/><line x1="3.6" y1="12" x2="20.4" y2="12"/><line x1="3.6" y1="17" x2="20.4" y2="17"/></g><g data-part="knob-1"><line transform="translate(1.4,1.4)" x1="9" y1="4.6" x2="9" y2="9.4" stroke="var(--rel-shadow)" stroke-width="3.2" stroke-linecap="round"/><line x1="9" y1="4.6" x2="9" y2="9.4" stroke="var(--rel-stroke)" stroke-width="3.2" stroke-linecap="round"/></g><g data-part="knob-2"><line transform="translate(1.4,1.4)" x1="15" y1="9.6" x2="15" y2="14.4" stroke="var(--rel-shadow)" stroke-width="3.2" stroke-linecap="round"/><line x1="15" y1="9.6" x2="15" y2="14.4" stroke="var(--rel-stroke)" stroke-width="3.2" stroke-linecap="round"/></g><g data-part="knob-3"><line transform="translate(1.4,1.4)" x1="10" y1="14.6" x2="10" y2="19.4" stroke="var(--rel-shadow)" stroke-width="3.2" stroke-linecap="round"/><line x1="10" y1="14.6" x2="10" y2="19.4" stroke="var(--rel-stroke)" stroke-width="3.2" stroke-linecap="round"/></g>`,
    },
  },
  // 38. LINK
  {
    name: "link",
    label: "Link",
    category: "Kinetic Tools",
    motionSummary: "Interlocking chain halves snap tightly together",
    soundSummary: "Metallic carabiner snap-lock",
    svgs: {
      outline: `<path data-part="link-a" d="M10 13.5A4.2 4.2 0 0 0 16 13.5L18.5 11A4.2 4.2 0 0 0 12.5 5L11 6.5" ${K}/><path data-part="link-b" d="M14 10.5A4.2 4.2 0 0 0 8 10.5L5.5 13A4.2 4.2 0 0 0 11.5 19L13 17.5" ${K}/>`,
      solid: `<path data-part="link-a" d="M10 13.5A4.2 4.2 0 0 0 16 13.5L18.5 11A4.2 4.2 0 0 0 12.5 5L11 6.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path data-part="link-b" d="M14 10.5A4.2 4.2 0 0 0 8 10.5L5.5 13A4.2 4.2 0 0 0 11.5 19L13 17.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>`,
      duotone: `<path data-part="link-a" d="M10 13.5A4.2 4.2 0 0 0 16 13.5L18.5 11A4.2 4.2 0 0 0 12.5 5L11 6.5" ${D}/><path data-part="link-b" d="M14 10.5A4.2 4.2 0 0 0 8 10.5L5.5 13A4.2 4.2 0 0 0 11.5 19L13 17.5" ${D}/>`,
      glass: glassCompose(
        `<path data-part="link-b" data-pivot="9.5 14" d="M14 10.5A4.2 4.2 0 0 0 8 10.5L5.5 13A4.2 4.2 0 0 0 11.5 19L13 17.5" fill="none" stroke="url(#g-back)" stroke-width="3" stroke-linecap="round"/>`,
        `<path data-part="link-a" data-pivot="14.5 10" d="M10.2 13.8A4.2 4.2 0 0 0 16.2 13.8L18.6 11.4A4.2 4.2 0 0 0 12.6 5.4L11 7A1.2 1.2 0 0 0 12.7 8.7L14.3 7.1A1.8 1.8 0 0 1 16.9 9.7L14.5 12.1A1.8 1.8 0 0 1 11.9 12.1Z"/>`
      ),
      stencil: `<path data-part="link-a" d="M10 13.5A4.2 4.2 0 0 0 16 13.5L18.5 11A4.2 4.2 0 0 0 12.5 5L11 6.5" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="butt"/><path data-part="link-b" d="M14 10.5A4.2 4.2 0 0 0 8 10.5L5.5 13A4.2 4.2 0 0 0 11.5 19L13 17.5" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="butt"/>`,
      hardware: `<path data-part="link-a" d="M10 13.5A4.2 4.2 0 0 0 16 13.5L18.5 11A4.2 4.2 0 0 0 12.5 5L11 6.5" fill="none" stroke="#ff6b35" stroke-width="2.3" stroke-linecap="round"/><path data-part="link-b" d="M14 10.5A4.2 4.2 0 0 0 8 10.5L5.5 13A4.2 4.2 0 0 0 11.5 19L13 17.5" fill="none" stroke="#3f3f46" stroke-width="2.3" stroke-linecap="round"/>`,
      relief: `<g data-part="link-a"><path transform="translate(1.5,1.5)" d="M10 13.5A4.2 4.2 0 0 0 16 13.5L18.5 11A4.2 4.2 0 0 0 12.5 5L11 6.5" ${RS_LINE}/><path d="M10 13.5A4.2 4.2 0 0 0 16 13.5L18.5 11A4.2 4.2 0 0 0 12.5 5L11 6.5" ${RF_LINE}/></g><g data-part="link-b"><path transform="translate(1.5,1.5)" d="M14 10.5A4.2 4.2 0 0 0 8 10.5L5.5 13A4.2 4.2 0 0 0 11.5 19L13 17.5" ${RS_LINE}/><path d="M14 10.5A4.2 4.2 0 0 0 8 10.5L5.5 13A4.2 4.2 0 0 0 11.5 19L13 17.5" ${RF_LINE}/></g>`,
    },
  },
  // 39. EYE
  {
    name: "eye",
    label: "Eye",
    category: "Kinetic Tools",
    motionSummary: "Eyelid blinks cleanly shut and snaps open",
    soundSummary: "Soft optical iris blink + focus tick",
    svgs: {
      outline: `<path data-part="lid" data-pivot="12 12" d="M2.75 12A9.83 9.83 0 0 1 21.25 12A9.83 9.83 0 0 1 2.75 12Z" ${K}/><circle data-part="pupil" data-pivot="12 12" cx="12" cy="12" r="3.2" ${K}/>`,
      solid: `<defs><mask id="__GID__-m1"><rect x="0" y="0" width="24" height="24" fill="#fff"/><circle data-part="pupil" data-pivot="12 12" cx="12" cy="12" r="4.1" fill="#000"/></mask></defs><path data-part="lid" data-pivot="12 12" mask="url(#__GID__-m1)" fill="currentColor" d="M2.3 12A10.4 10.4 0 0 1 21.7 12A10.4 10.4 0 0 1 2.3 12Z"/><circle data-part="pupil" data-pivot="12 12" cx="12" cy="12" r="2.2" fill="currentColor"/>`,
      duotone: `<path data-part="lid" data-pivot="12 12" d="M2.75 12A9.83 9.83 0 0 1 21.25 12A9.83 9.83 0 0 1 2.75 12Z" ${D}/><circle data-part="pupil" data-pivot="12 12" cx="12" cy="12" r="3.2" fill="currentColor"/>`,
      glass: glassCompose(
        `<path data-part="lid" data-pivot="12 12" transform="translate(-1.4,-1)" d="M2.75 12A9.83 9.83 0 0 1 21.25 12A9.83 9.83 0 0 1 2.75 12Z" ${GB}/>`,
        `<path data-part="lid" data-pivot="12 12" d="M2.4 12A10.2 10.2 0 0 1 21.6 12A10.2 10.2 0 0 1 2.4 12Z"/>`,
        `<g data-part="lid" data-pivot="12 12" ${GF}><path d="M2.4 12A10.2 10.2 0 0 1 21.6 12A10.2 10.2 0 0 1 2.4 12Z"/></g><g data-part="pupil" data-pivot="12 12"><circle cx="12" cy="12" r="3.8" ${GB}/><circle cx="13.2" cy="10.8" r="0.9" ${GH}/></g>`
      ),
      stencil: `<g data-part="lid" data-pivot="12 12" fill="currentColor"><path d="M2.6 11.4A10.1 10.1 0 0 1 21.4 11.4H18.9A7.8 7.8 0 0 0 5.1 11.4Z"/><path d="M21.4 12.6A10.1 10.1 0 0 1 2.6 12.6H5.1A7.8 7.8 0 0 0 18.9 12.6Z"/></g><circle data-part="pupil" data-pivot="12 12" cx="12" cy="12" r="2.7" fill="currentColor"/>`,
      hardware: `<path data-part="lid" data-pivot="12 12" d="M2.75 12A9.83 9.83 0 0 1 21.25 12A9.83 9.83 0 0 1 2.75 12Z" ${HL}/><circle data-part="pupil" data-pivot="12 12" cx="12" cy="12" r="3.4" ${HD}/><circle data-part="pupil" data-pivot="12 12" cx="12" cy="12" r="1.25" ${HA}/>`,
      relief: `<g data-part="lid" data-pivot="12 12"><path transform="translate(1.5,1.5)" d="M2.75 12A9.83 9.83 0 0 1 21.25 12A9.83 9.83 0 0 1 2.75 12Z" ${RS}/><path d="M2.75 12A9.83 9.83 0 0 1 21.25 12A9.83 9.83 0 0 1 2.75 12Z" ${RF}/></g><circle data-part="pupil" data-pivot="12 12" cx="12" cy="12" r="3.1" ${RS}/>`,
    },
  },
  // 40. PIN
  {
    name: "pin",
    label: "Map Pin",
    category: "Kinetic Tools",
    motionSummary: "Location marker drops from above and bounces onto shadow",
    soundSummary: "Rubberized map pin bounce-drop plop",
    svgs: {
      outline: `<ellipse data-part="shadow" cx="12" cy="20.6" rx="4.1" ry="1" fill="currentColor" opacity="0.22"/><g data-part="pin" data-pivot="12 11.5" ${K}><path d="M12 19.6C12 19.6 18 14.1 18 9.4A6 6 0 0 0 6 9.4C6 14.1 12 19.6 12 19.6Z"/><circle cx="12" cy="9.4" r="2.2"/></g>`,
      solid: `<ellipse data-part="shadow" cx="12" cy="20.8" rx="4.1" ry="0.9" fill="currentColor" opacity="0.25"/><path data-part="pin" data-pivot="12 11.5" fill="currentColor" fill-rule="evenodd" d="M12 19.8C12 19.8 18.2 14.2 18.2 9.4A6.2 6.2 0 0 0 5.8 9.4C5.8 14.2 12 19.8 12 19.8ZM12 7.1A2.3 2.3 0 1 0 12 11.7A2.3 2.3 0 1 0 12 7.1Z"/>`,
      duotone: `<ellipse data-part="shadow" cx="12" cy="20.6" rx="4.1" ry="1" fill="currentColor" opacity="0.22"/><g data-part="pin" data-pivot="12 11.5"><path d="M12 19.6C12 19.6 18 14.1 18 9.4A6 6 0 0 0 6 9.4C6 14.1 12 19.6 12 19.6Z" ${D}/><circle cx="12" cy="9.4" r="2.2" fill="currentColor"/></g>`,
      glass: glassCompose(
        `<ellipse data-part="shadow" data-pivot="12 20.8" cx="12" cy="20.8" rx="4.2" ry="1" ${GB} opacity="0.55"/><path data-part="pin" data-pivot="12 11.5" transform="translate(-1.5,-1.1)" d="M12 19.6C12 19.6 18 14.1 18 9.4A6 6 0 0 0 6 9.4C6 14.1 12 19.6 12 19.6Z" ${GB}/>`,
        `<path data-part="pin" data-pivot="12 11.5" d="M12 19.6C12 19.6 18 14.1 18 9.4A6 6 0 0 0 6 9.4C6 14.1 12 19.6 12 19.6Z"/>`,
        `<g data-part="pin" data-pivot="12 11.5" ${GF}><path d="M12 19.6C12 19.6 18 14.1 18 9.4A6 6 0 0 0 6 9.4C6 14.1 12 19.6 12 19.6Z"/></g><circle data-part="pin" data-pivot="12 11.5" cx="12" cy="9.4" r="2.3" ${GB}/>`
      ),
      stencil: `<ellipse data-part="shadow" cx="12" cy="20.8" rx="4.1" ry="0.9" fill="currentColor" opacity="0.25"/><g data-part="pin" data-pivot="12 11.5" fill="currentColor"><path d="M11.2 3.2V7.2A2.2 2.2 0 0 0 11.2 11.6V19.6C11.2 19.6 5.8 14 5.8 9.4A6.2 6.2 0 0 1 11.2 3.2Z"/><path d="M12.8 3.2A6.2 6.2 0 0 1 18.2 9.4C18.2 14 12.8 19.6 12.8 19.6V11.6A2.2 2.2 0 0 0 12.8 7.2Z"/></g>`,
      hardware: `<ellipse data-part="shadow" cx="12" cy="20.8" rx="4.1" ry="0.9" fill="#52525b" opacity="0.35"/><g data-part="pin" data-pivot="12 11.5"><path d="M12 19.6C12 19.6 18 14.1 18 9.4A6 6 0 0 0 6 9.4C6 14.1 12 19.6 12 19.6Z" ${HL}/><circle cx="12" cy="9.4" r="2.3" ${HA}/></g>`,
      relief: `<ellipse data-part="shadow" cx="12" cy="20.6" rx="4.1" ry="1" ${RS} opacity="0.35"/><g data-part="pin" data-pivot="12 11.5"><path transform="translate(1.5,1.5)" d="M12 19.6C12 19.6 18 14.1 18 9.4A6 6 0 0 0 6 9.4C6 14.1 12 19.6 12 19.6Z" ${RS}/><path d="M12 19.6C12 19.6 18 14.1 18 9.4A6 6 0 0 0 6 9.4C6 14.1 12 19.6 12 19.6Z" ${RF}/><circle cx="12" cy="9.4" r="2.2" ${RS}/></g>`,
    },
  },
];
