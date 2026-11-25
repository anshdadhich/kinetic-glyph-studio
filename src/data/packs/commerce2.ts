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

export const COMMERCE2_ICONS: IconDef[] = [
  // 181. PIGGY BANK
  {
    name: "piggy-bank",
    label: "Piggy Bank",
    category: "Commerce & Finance",
    motionSummary: "Gold coin drops smoothly into top slot as ceramic bank bounces happily",
    soundSummary: "Coin slot drop + hollow ceramic piggy bank clink",
    svgs: {
      outline: `<g data-part="pig" data-pivot="12 15" ${K}><path d="M18.5 12.2H20.2V14.8H18.5C18 16.8 16.5 18 15 18.4V20H12.5V18.6H9.8V20H7.3V18C5.4 17 4.2 15.2 4.2 13C4.2 9.8 7 7.5 11.2 7.5C14.8 7.5 17.6 9.3 18.5 12.2Z"/><circle cx="15.4" cy="11.6" r="0.7" fill="currentColor"/></g><circle data-part="coin" cx="11.2" cy="4.8" r="1.5" ${K_THIN}/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><circle cx="15.4" cy="11.6" r="0.9" fill="#000"/><rect x="9.6" y="8.8" width="3.4" height="1.1" rx="0.55" fill="#000"/></mask></defs><path data-part="pig" data-pivot="12 15" fill="currentColor" mask="url(#__GID__-m1)" d="M18.6 12H20.4V15H18.6C18.1 17 16.6 18.2 15 18.6V20.2H12.4V18.8H9.8V20.2H7.2V18.2C5.2 17.2 4 15.2 4 13C4 9.6 7 7.3 11.2 7.3C14.9 7.3 17.7 9.1 18.6 12Z"/><circle data-part="coin" cx="11.2" cy="4.6" r="1.6" fill="currentColor"/>`,
      duotone: `<g data-part="pig" data-pivot="12 15"><path d="M18.5 12.2H20.2V14.8H18.5C18 16.8 16.5 18 15 18.4V20H12.5V18.6H9.8V20H7.3V18C5.4 17 4.2 15.2 4.2 13C4.2 9.8 7 7.5 11.2 7.5C14.8 7.5 17.6 9.3 18.5 12.2Z" ${D}/><circle cx="15.4" cy="11.6" r="0.7" fill="currentColor"/></g><circle data-part="coin" cx="11.2" cy="4.8" r="1.5" ${D}/>`,
      glass: glassCompose(
        `<circle data-part="coin" cx="11.2" cy="4.6" r="1.7" ${GB}/>`,
        `<path data-part="pig" data-pivot="12 15" d="M18.6 12H20.4V15H18.6C18.1 17 16.6 18.2 15 18.6V20.2H12.4V18.8H9.8V20.2H7.2V18.2C5.2 17.2 4 15.2 4 13C4 9.6 7 7.3 11.2 7.3C14.9 7.3 17.7 9.1 18.6 12Z"/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="pig" data-pivot="12 15"><path d="M4.2 13C4.2 9.8 6.8 7.5 10.6 7.4V19.8H7.4V18C5.4 17 4.2 15.2 4.2 13Z"/><path d="M12 7.4C15.4 7.6 17.8 9.4 18.6 12H20.3V14.8H18.6C18.1 16.8 16.6 18 15 18.4V19.8H12Z"/></g><circle data-part="coin" cx="11.3" cy="4.6" r="1.5"/></g>`,
      hardware: `<circle data-part="coin" cx="11.2" cy="4.6" r="1.7" ${HA}/><g data-part="pig" data-pivot="12 15"><path d="M18.6 12H20.4V15H18.6C18.1 17 16.6 18.2 15 18.6V20.2H12.4V18.8H9.8V20.2H7.2V18.2C5.2 17.2 4 15.2 4 13C4 9.6 7 7.3 11.2 7.3C14.9 7.3 17.7 9.1 18.6 12Z" ${HL}/><circle cx="15.4" cy="11.6" r="0.8" ${HD}/></g>`,
      relief: `<g data-part="pig" data-pivot="12 15"><path transform="translate(1.3,1.3)" d="M18.5 12.2H20.2V14.8H18.5C18 16.8 16.5 18 15 18.4V20H12.5V18.6H9.8V20H7.3V18C5.4 17 4.2 15.2 4.2 13C4.2 9.8 7 7.5 11.2 7.5C14.8 7.5 17.6 9.3 18.5 12.2Z" ${RS}/><path d="M18.5 12.2H20.2V14.8H18.5C18 16.8 16.5 18 15 18.4V20H12.5V18.6H9.8V20H7.3V18C5.4 17 4.2 15.2 4.2 13C4.2 9.8 7 7.5 11.2 7.5C14.8 7.5 17.6 9.3 18.5 12.2Z" ${RF}/></g><circle data-part="coin" cx="11.2" cy="4.8" r="1.5" ${RF}/>`,
    },
  },
  // 182. BANK
  {
    name: "bank",
    label: "Bank",
    category: "Commerce & Finance",
    motionSummary: "Classical pediment lifts slightly as fluted stone columns settle solidly",
    soundSummary: "Heavy marble vault lock + resonant chime",
    svgs: {
      outline: `<polygon data-part="roof" points="12 3.8 20.5 8.5 3.5 8.5" ${K}/><g data-part="columns" ${K}><line x1="6.5" y1="11" x2="6.5" y2="17.5"/><line x1="12" y1="11" x2="12" y2="17.5"/><line x1="17.5" y1="11" x2="17.5" y2="17.5"/><line x1="3.8" y1="19.8" x2="20.2" y2="19.8"/></g>`,
      solid: `<polygon data-part="roof" points="12 3.6 20.8 8.6 3.2 8.6" fill="currentColor"/><g data-part="columns" fill="currentColor"><rect x="5.4" y="10.2" width="2.2" height="7.6" rx="0.6"/><rect x="10.9" y="10.2" width="2.2" height="7.6" rx="0.6"/><rect x="16.4" y="10.2" width="2.2" height="7.6" rx="0.6"/><rect x="3.5" y="18.6" width="17" height="2" rx="1"/></g>`,
      duotone: `<polygon data-part="roof" points="12 3.8 20.5 8.5 3.5 8.5" ${D}/><g data-part="columns" ${DK}><line x1="6.5" y1="11" x2="6.5" y2="17.5"/><line x1="12" y1="11" x2="12" y2="17.5"/><line x1="17.5" y1="11" x2="17.5" y2="17.5"/><line x1="3.8" y1="19.8" x2="20.2" y2="19.8"/></g>`,
      glass: glassCompose(
        `<g data-part="columns" ${GB}><rect x="5.4" y="10.2" width="2.2" height="7.6" rx="0.6"/><rect x="10.9" y="10.2" width="2.2" height="7.6" rx="0.6"/><rect x="16.4" y="10.2" width="2.2" height="7.6" rx="0.6"/><rect x="3.5" y="18.6" width="17" height="2" rx="1"/></g>`,
        `<polygon data-part="roof" points="12 3.6 20.8 8.6 3.2 8.6"/>`
      ),
      stencil: `<g fill="currentColor"><polygon data-part="roof" points="12 3.8 20.5 8.5 3.5 8.5"/><g data-part="columns"><rect x="5.4" y="10.2" width="2.2" height="7" rx="0.6"/><rect x="10.9" y="10.2" width="2.2" height="7" rx="0.6"/><rect x="16.4" y="10.2" width="2.2" height="7" rx="0.6"/><rect x="3.5" y="18.6" width="17" height="1.9" rx="0.9"/></g></g>`,
      hardware: `<polygon data-part="roof" points="12 3.6 20.8 8.6 3.2 8.6" ${HD}/><g data-part="columns"><rect x="5.4" y="10.2" width="2.2" height="7.6" rx="0.6" ${HL}/><rect x="10.9" y="10.2" width="2.2" height="7.6" rx="0.6" ${HA}/><rect x="16.4" y="10.2" width="2.2" height="7.6" rx="0.6" ${HL}/><rect x="3.5" y="18.6" width="17" height="2" rx="1" ${HD}/></g>`,
      relief: `<g data-part="roof"><polygon transform="translate(1.3,1.3)" points="12 3.8 20.5 8.5 3.5 8.5" ${RS}/><polygon points="12 3.8 20.5 8.5 3.5 8.5" ${RF}/></g><g data-part="columns" ${RF_LINE}><line x1="6.5" y1="11" x2="6.5" y2="17.5"/><line x1="12" y1="11" x2="12" y2="17.5"/><line x1="17.5" y1="11" x2="17.5" y2="17.5"/><line x1="3.8" y1="19.8" x2="20.2" y2="19.8"/></g>`,
    },
  },
  // 183. DIAMOND
  {
    name: "diamond",
    label: "Diamond",
    category: "Commerce & Finance",
    motionSummary: "Cut gemstone tilts catching light as corner glint sparkles",
    soundSummary: "High crystalline diamond brilliance chime",
    svgs: {
      outline: `<g data-part="gem" data-pivot="12 12" ${K}><polygon points="6.5 4.8 17.5 4.8 20.8 9.8 12 19.8 3.2 9.8"/><line x1="3.2" y1="9.8" x2="20.8" y2="9.8" ${K_THIN}/><polyline points="6.5 4.8 12 9.8 17.5 4.8" ${K_THIN}/><line x1="12" y1="9.8" x2="12" y2="19.8" ${K_THIN}/></g><circle data-part="spark" cx="19" cy="4.8" r="1" fill="currentColor"/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><g fill="none" stroke="#000" stroke-width="1.2"><line x1="3" y1="9.8" x2="21" y2="9.8"/><polyline points="6.5 4.8 12 9.8 17.5 4.8"/><line x1="12" y1="9.8" x2="12" y2="20"/></g></mask></defs><polygon data-part="gem" data-pivot="12 12" points="6.5 4.8 17.5 4.8 20.8 9.8 12 19.8 3.2 9.8" fill="currentColor" mask="url(#__GID__-m1)"/><circle data-part="spark" cx="19.2" cy="4.6" r="1.2" fill="currentColor"/>`,
      duotone: `<g data-part="gem" data-pivot="12 12"><polygon points="6.5 4.8 17.5 4.8 20.8 9.8 12 19.8 3.2 9.8" ${D}/><line x1="3.2" y1="9.8" x2="20.8" y2="9.8" ${DK_THIN}/><polyline points="6.5 4.8 12 9.8 17.5 4.8" ${DK_THIN}/><line x1="12" y1="9.8" x2="12" y2="19.8" ${DK_THIN}/></g><circle data-part="spark" cx="19" cy="4.8" r="1" fill="currentColor"/>`,
      glass: glassCompose(
        `<circle data-part="spark" cx="19.2" cy="4.6" r="1.3" ${GB}/>`,
        `<polygon data-part="gem" data-pivot="12 12" points="6.5 4.8 17.5 4.8 20.8 9.8 12 19.8 3.2 9.8"/>`,
        `<g data-part="gem" data-pivot="12 12" ${GF}><polygon points="6.5 4.8 17.5 4.8 20.8 9.8 12 19.8 3.2 9.8"/></g><polyline data-part="gem" data-pivot="12 12" points="6.5 4.8 12 9.8 17.5 4.8" ${GH}/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="gem" data-pivot="12 12"><polygon points="6.8 4.8 17.2 4.8 20.4 9 3.6 9"/><polygon points="3.6 10.4 11.3 10.4 11.3 19.4"/><polygon points="12.7 10.4 20.4 10.4 12.7 19.4"/></g><circle data-part="spark" cx="19.2" cy="4.6" r="1.2"/></g>`,
      hardware: `<g data-part="gem" data-pivot="12 12"><polygon points="6.5 4.8 17.5 4.8 20.8 9.8 12 19.8 3.2 9.8" ${HL}/><polygon points="3.2 9.8 12 9.8 12 19.8" ${HM}/></g><circle data-part="spark" cx="19.2" cy="4.6" r="1.3" ${HA}/>`,
      relief: `<g data-part="gem" data-pivot="12 12"><polygon transform="translate(1.3,1.3)" points="6.5 4.8 17.5 4.8 20.8 9.8 12 19.8 3.2 9.8" ${RS}/><polygon points="6.5 4.8 17.5 4.8 20.8 9.8 12 19.8 3.2 9.8" ${RF}/><line x1="3.2" y1="9.8" x2="20.8" y2="9.8" ${RF_LINE}/></g><circle data-part="spark" cx="19" cy="4.8" r="1" ${RS}/>`,
    },
  },
  // 184. BARCODE
  {
    name: "barcode",
    label: "Barcode",
    category: "Commerce & Finance",
    motionSummary: "Laser checkout beam sweeps down across vertical product stripes",
    soundSummary: "Supermarket optical checkout scanner beep",
    svgs: {
      outline: `<g data-part="bars" ${K}><line x1="4.5" y1="6" x2="4.5" y2="18"/><line x1="8" y1="6" x2="8" y2="18" ${K_THIN}/><line x1="11" y1="6" x2="11" y2="18"/><line x1="14.2" y1="6" x2="14.2" y2="18" ${K_THIN}/><line x1="17" y1="6" x2="17" y2="18"/><line x1="19.8" y1="6" x2="19.8" y2="18" ${K_THIN}/></g><line data-part="beam" x1="2.8" y1="12" x2="21.2" y2="12" ${K}/>`,
      solid: `<g data-part="bars" fill="currentColor"><rect x="3.8" y="5.8" width="2" height="12.4" rx="0.8"/><rect x="7.4" y="5.8" width="1.4" height="12.4" rx="0.7"/><rect x="10.4" y="5.8" width="2.2" height="12.4" rx="0.8"/><rect x="14.2" y="5.8" width="1.4" height="12.4" rx="0.7"/><rect x="17.2" y="5.8" width="2.4" height="12.4" rx="0.8"/></g><rect data-part="beam" x="2.6" y="11.2" width="18.8" height="1.6" rx="0.8" fill="currentColor"/>`,
      duotone: `<rect x="3" y="5" width="18" height="14" rx="2" ${D}/><g data-part="bars" ${DK}><line x1="5.5" y1="7.5" x2="5.5" y2="16.5"/><line x1="9" y1="7.5" x2="9" y2="16.5" ${DK_THIN}/><line x1="12.5" y1="7.5" x2="12.5" y2="16.5"/><line x1="16" y1="7.5" x2="16" y2="16.5" ${DK_THIN}/><line x1="18.5" y1="7.5" x2="18.5" y2="16.5"/></g><line data-part="beam" x1="2.5" y1="12" x2="21.5" y2="12" ${DK}/>`,
      glass: glassCompose(
        `<g data-part="bars" ${GB}><rect x="5" y="6.8" width="2" height="10.4" rx="0.8"/><rect x="9" y="6.8" width="1.4" height="10.4" rx="0.7"/><rect x="12.4" y="6.8" width="2.2" height="10.4" rx="0.8"/><rect x="16.6" y="6.8" width="2" height="10.4" rx="0.8"/></g>`,
        `<rect x="3.2" y="5" width="17.6" height="14" rx="2"/>`,
        `<g ${GF}><rect x="3.2" y="5" width="17.6" height="14" rx="2"/></g><rect data-part="beam" x="2.6" y="11.2" width="18.8" height="1.6" rx="0.8" ${GB}/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="bars"><rect x="4" y="5.8" width="2" height="5" rx="0.6"/><rect x="4" y="13.2" width="2" height="5" rx="0.6"/><rect x="8.2" y="5.8" width="1.8" height="5" rx="0.6"/><rect x="8.2" y="13.2" width="1.8" height="5" rx="0.6"/><rect x="12.2" y="5.8" width="2.4" height="5" rx="0.6"/><rect x="12.2" y="13.2" width="2.4" height="5" rx="0.6"/><rect x="17" y="5.8" width="2.2" height="5" rx="0.6"/><rect x="17" y="13.2" width="2.2" height="5" rx="0.6"/></g><rect data-part="beam" x="2.6" y="11.3" width="18.8" height="1.4" rx="0.7"/></g>`,
      hardware: `<rect x="2.8" y="4.8" width="18.4" height="14.4" rx="2" ${HD}/><g data-part="bars"><rect x="5" y="7" width="2" height="10" rx="0.6" ${HL}/><rect x="9" y="7" width="1.5" height="10" rx="0.6" ${HL}/><rect x="12.5" y="7" width="2.2" height="10" rx="0.6" ${HL}/><rect x="17" y="7" width="2" height="10" rx="0.6" ${HL}/></g><rect data-part="beam" x="2.5" y="11.2" width="19" height="1.6" rx="0.8" ${HA}/>`,
      relief: `<g transform="translate(1.2,1.2)" data-part="bars"><rect x="4.2" y="6" width="2" height="12" rx="0.7" ${RS}/><rect x="8.5" y="6" width="2" height="12" rx="0.7" ${RS}/><rect x="13" y="6" width="2.2" height="12" rx="0.7" ${RS}/><rect x="17.5" y="6" width="2" height="12" rx="0.7" ${RS}/></g><g data-part="bars"><rect x="4.2" y="6" width="2" height="12" rx="0.7" ${RF}/><rect x="8.5" y="6" width="2" height="12" rx="0.7" ${RF}/><rect x="13" y="6" width="2.2" height="12" rx="0.7" ${RF}/><rect x="17.5" y="6" width="2" height="12" rx="0.7" ${RF}/></g><line data-part="beam" x1="2.8" y1="12" x2="21.2" y2="12" ${RF_LINE}/>`,
    },
  },
  // 185. QR CODE
  {
    name: "qr-code",
    label: "QR Code",
    category: "Commerce & Finance",
    motionSummary: "Finder squares tighten cleanly as optical laser beam scans across matrix",
    soundSummary: "Digital camera optical QR lock-on double beep",
    svgs: {
      outline: `<g data-part="grid" ${K}><rect x="4.5" y="4.5" width="5.5" height="5.5" rx="1"/><rect x="14" y="4.5" width="5.5" height="5.5" rx="1"/><rect x="4.5" y="14" width="5.5" height="5.5" rx="1"/><path d="M14 14H16.5V16.5M19.5 14V19.5H14"/></g><line data-part="beam" x1="3" y1="12" x2="21" y2="12" ${K_THIN}/>`,
      solid: `<g data-part="grid" fill="currentColor"><path fill-rule="evenodd" d="M4.2 4.2H10.2V10.2H4.2ZM5.8 5.8V8.6H8.6V5.8Z"/><path fill-rule="evenodd" d="M13.8 4.2H19.8V10.2H13.8ZM15.4 5.8V8.6H18.2V5.8Z"/><path fill-rule="evenodd" d="M4.2 13.8H10.2V19.8H4.2ZM5.8 15.4V18.2H8.6V15.4Z"/><rect x="13.8" y="13.8" width="2.6" height="2.6" rx="0.5"/><rect x="17.2" y="17.2" width="2.6" height="2.6" rx="0.5"/></g><rect data-part="beam" x="3" y="11.2" width="18" height="1.5" rx="0.75" fill="currentColor"/>`,
      duotone: `<g data-part="grid"><rect x="4.5" y="4.5" width="5.5" height="5.5" rx="1" ${D}/><rect x="14" y="4.5" width="5.5" height="5.5" rx="1" ${D}/><rect x="4.5" y="14" width="5.5" height="5.5" rx="1" ${D}/><rect x="14" y="14" width="2.4" height="2.4" rx="0.5" fill="currentColor"/><rect x="17" y="17" width="2.4" height="2.4" rx="0.5" fill="currentColor"/></g><line data-part="beam" x1="3" y1="12" x2="21" y2="12" ${DK}/>`,
      glass: glassCompose(
        `<g data-part="grid" ${GB}><rect x="14" y="4.5" width="5.5" height="5.5" rx="1"/><rect x="4.5" y="14" width="5.5" height="5.5" rx="1"/></g>`,
        `<g data-part="grid"><rect x="4.5" y="4.5" width="5.5" height="5.5" rx="1"/><rect x="14" y="14" width="5.5" height="5.5" rx="1"/></g>`,
        `<g data-part="grid" ${GF}><rect x="4.5" y="4.5" width="5.5" height="5.5" rx="1"/><rect x="14" y="14" width="5.5" height="5.5" rx="1"/></g><rect data-part="beam" x="3" y="11.2" width="18" height="1.5" rx="0.75" ${GB}/>`
      ),
      stencil: `<g fill="currentColor"><g data-part="grid"><rect x="4.5" y="4.5" width="5.5" height="5.5" rx="1"/><rect x="14" y="4.5" width="5.5" height="5.5" rx="1"/><rect x="4.5" y="14" width="5.5" height="5.5" rx="1"/><rect x="14" y="14" width="2.4" height="2.4" rx="0.5"/><rect x="17.1" y="17.1" width="2.4" height="2.4" rx="0.5"/></g><rect data-part="beam" x="3" y="11.3" width="18" height="1.4" rx="0.7"/></g>`,
      hardware: `<g data-part="grid"><rect x="4.5" y="4.5" width="5.5" height="5.5" rx="1" ${HL}/><rect x="14" y="4.5" width="5.5" height="5.5" rx="1" ${HL}/><rect x="4.5" y="14" width="5.5" height="5.5" rx="1" ${HL}/><rect x="14.2" y="14.2" width="2.4" height="2.4" rx="0.5" ${HD}/><rect x="17" y="17" width="2.4" height="2.4" rx="0.5" ${HD}/></g><rect data-part="beam" x="3" y="11.2" width="18" height="1.6" rx="0.8" ${HA}/>`,
      relief: `<g data-part="grid"><g transform="translate(1.2,1.2)"><rect x="4.5" y="4.5" width="5.5" height="5.5" rx="1" ${RS}/><rect x="14" y="4.5" width="5.5" height="5.5" rx="1" ${RS}/><rect x="4.5" y="14" width="5.5" height="5.5" rx="1" ${RS}/></g><rect x="4.5" y="4.5" width="5.5" height="5.5" rx="1" ${RF}/><rect x="14" y="4.5" width="5.5" height="5.5" rx="1" ${RF}/><rect x="4.5" y="14" width="5.5" height="5.5" rx="1" ${RF}/></g><line data-part="beam" x1="3" y1="12" x2="21" y2="12" ${RF_LINE}/>`,
    },
  },
  // 186. SCALE
  {
    name: "scale",
    label: "Balance Scale",
    category: "Commerce & Finance",
    motionSummary: "Crossbeam tips playfully left then settles level as hanging pans counter-swing",
    soundSummary: "Brass apothecary balance beam clink + resonant chime",
    svgs: {
      outline: `<line x1="12" y1="4.5" x2="12" y2="19.5" ${K}/><line x1="8" y1="19.5" x2="16" y2="19.5" ${K}/><line data-part="beam" data-pivot="12 7" x1="4.5" y1="7" x2="19.5" y2="7" ${K}/><path data-part="pan-l" data-pivot="5.5 7" d="M5.5 7L3.5 13.5A2.5 2.5 0 0 0 8.5 13.5Z" ${K_THIN}/><path data-part="pan-r" data-pivot="18.5 7" d="M18.5 7L15.5 13.5A2.5 2.5 0 0 0 20.5 13.5Z" ${K_THIN}/>`,
      solid: `<g fill="currentColor"><rect x="11" y="4.4" width="2" height="15" rx="1"/><rect x="7.8" y="18.6" width="8.4" height="1.8" rx="0.9"/><rect data-part="beam" data-pivot="12 7" x="4" y="6.1" width="16" height="1.8" rx="0.9"/><path data-part="pan-l" data-pivot="5.8 7" d="M5.8 7.5L3.4 13.4A2.5 2.5 0 0 0 8.2 13.4Z"/><path data-part="pan-r" data-pivot="18.2 7" d="M18.2 7.5L15.8 13.4A2.5 2.5 0 0 0 20.6 13.4Z"/></g>`,
      duotone: `<line x1="12" y1="4.5" x2="12" y2="19.5" ${DK}/><line x1="8" y1="19.5" x2="16" y2="19.5" ${DK}/><line data-part="beam" data-pivot="12 7" x1="4.5" y1="7" x2="19.5" y2="7" ${DK}/><path data-part="pan-l" data-pivot="5.8 7" d="M5.8 7.2L3.5 13.5A2.5 2.5 0 0 0 8.1 13.5Z" ${D}/><path data-part="pan-r" data-pivot="18.2 7" d="M18.2 7.2L15.9 13.5A2.5 2.5 0 0 0 20.5 13.5Z" ${D}/>`,
      glass: glassCompose(
        `<line x1="12" y1="4.5" x2="12" y2="19.5" ${GBS}/><line x1="8" y1="19.5" x2="16" y2="19.5" ${GBS}/><rect data-part="beam" data-pivot="12 7" x="4" y="6.1" width="16" height="1.8" rx="0.9" ${GB}/>`,
        `<g><path data-part="pan-l" data-pivot="5.8 7" d="M5.8 7.5L3.4 13.4A2.5 2.5 0 0 0 8.2 13.4Z"/><path data-part="pan-r" data-pivot="18.2 7" d="M18.2 7.5L15.8 13.4A2.5 2.5 0 0 0 20.6 13.4Z"/></g>`
      ),
      stencil: `<g fill="currentColor"><rect x="11" y="4.5" width="2" height="14" rx="0.9"/><rect x="7.8" y="18.8" width="8.4" height="1.6" rx="0.8"/><rect data-part="beam" data-pivot="12 7" x="4" y="6.1" width="16" height="1.8" rx="0.9"/><path data-part="pan-l" data-pivot="5.8 7" d="M3.4 13.5A2.5 2.5 0 0 0 8.2 13.5Z"/><path data-part="pan-r" data-pivot="18.2 7" d="M15.8 13.5A2.5 2.5 0 0 0 20.6 13.5Z"/></g>`,
      hardware: `<rect x="11" y="4.4" width="2" height="15" rx="1" ${HD}/><rect x="7.8" y="18.6" width="8.4" height="1.8" rx="0.9" ${HD}/><rect data-part="beam" data-pivot="12 7" x="4" y="6.1" width="16" height="1.8" rx="0.9" ${HL}/><path data-part="pan-l" data-pivot="5.8 7" d="M5.8 7.5L3.4 13.4A2.5 2.5 0 0 0 8.2 13.4Z" ${HA}/><path data-part="pan-r" data-pivot="18.2 7" d="M18.2 7.5L15.8 13.4A2.5 2.5 0 0 0 20.6 13.4Z" ${HM}/>`,
      relief: `<line x1="12" y1="4.5" x2="12" y2="19.5" ${RF_LINE}/><line x1="8" y1="19.5" x2="16" y2="19.5" ${RF_LINE}/><line data-part="beam" data-pivot="12 7" x1="4.5" y1="7" x2="19.5" y2="7" ${RF_LINE}/><path data-part="pan-l" data-pivot="5.8 7" d="M5.8 7.5L3.4 13.4A2.5 2.5 0 0 0 8.2 13.4Z" ${RF}/><path data-part="pan-r" data-pivot="18.2 7" d="M18.2 7.5L15.8 13.4A2.5 2.5 0 0 0 20.6 13.4Z" ${RF}/>`,
    },
  },
  // 187. BRIEFCASE
  {
    name: "briefcase",
    label: "Briefcase",
    category: "Commerce & Finance",
    motionSummary: "Top leather handle lifts briskly while briefcase snaps shut with brass clasp",
    soundSummary: "Crisp leather briefcase brass latch snap",
    svgs: {
      outline: `<path data-part="handle" d="M9 7V5.2A1.2 1.2 0 0 1 10.2 4H13.8A1.2 1.2 0 0 1 15 5.2V7" ${K}/><g data-part="case" ${K}><rect x="3.8" y="7" width="16.4" height="12.5" rx="2.2"/><line x1="3.8" y1="12.2" x2="20.2" y2="12.2" ${K_THIN}/><rect x="10.8" y="11.2" width="2.4" height="2" rx="0.4" fill="currentColor"/></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" fill="#fff"/><line x1="3.6" y1="12.4" x2="20.4" y2="12.4" stroke="#000" stroke-width="1.2"/></mask></defs><path data-part="handle" d="M9 7.4V5.2A1.3 1.3 0 0 1 10.3 3.9H13.7A1.3 1.3 0 0 1 15 5.2V7.4" ${K}/><g data-part="case" fill="currentColor"><rect x="3.6" y="7" width="16.8" height="12.6" rx="2.4" mask="url(#__GID__-m1)"/><rect x="10.5" y="11.2" width="3" height="2.4" rx="0.6"/></g>`,
      duotone: `<path data-part="handle" d="M9 7V5.2A1.2 1.2 0 0 1 10.2 4H13.8A1.2 1.2 0 0 1 15 5.2V7" ${DK}/><g data-part="case"><rect x="3.8" y="7" width="16.4" height="12.5" rx="2.2" ${D}/><line x1="3.8" y1="12.2" x2="20.2" y2="12.2" ${DK_THIN}/><rect x="10.8" y="11.2" width="2.4" height="2" rx="0.4" fill="currentColor"/></g>`,
      glass: glassCompose(
        `<path data-part="handle" d="M9 7.6V5.2A1.3 1.3 0 0 1 10.3 3.9H13.7A1.3 1.3 0 0 1 15 5.2V7.6" ${GBS}/>`,
        `<rect data-part="case" x="3.6" y="7" width="16.8" height="12.6" rx="2.4"/>`,
        `<g data-part="case" ${GF}><rect x="3.6" y="7" width="16.8" height="12.6" rx="2.4"/></g><rect data-part="case" x="10.6" y="11.2" width="2.8" height="2.2" rx="0.6" ${GB}/>`
      ),
      stencil: `<path data-part="handle" d="M9 7V5.2A1.2 1.2 0 0 1 10.2 4H13.8A1.2 1.2 0 0 1 15 5.2V7" ${K}/><g data-part="case" fill="currentColor"><rect x="3.8" y="7" width="16.4" height="4.6" rx="1.6"/><rect x="3.8" y="12.9" width="16.4" height="6.6" rx="1.8"/></g>`,
      hardware: `<path data-part="handle" d="M9 7.4V5.2A1.3 1.3 0 0 1 10.3 3.9H13.7A1.3 1.3 0 0 1 15 5.2V7.4" fill="none" stroke="#52525b" stroke-width="1.8"/><g data-part="case"><rect x="3.6" y="7" width="16.8" height="12.6" rx="2.4" ${HD}/><line x1="3.8" y1="12.2" x2="20.2" y2="12.2" stroke="#52525b" stroke-width="1.2"/><rect x="10.5" y="11.2" width="3" height="2.4" rx="0.6" ${HA}/></g>`,
      relief: `<path data-part="handle" d="M9 7V5.2A1.2 1.2 0 0 1 10.2 4H13.8A1.2 1.2 0 0 1 15 5.2V7" ${RF_LINE}/><g data-part="case"><rect transform="translate(1.3,1.3)" x="3.8" y="7" width="16.4" height="12.5" rx="2.2" ${RS}/><rect x="3.8" y="7" width="16.4" height="12.5" rx="2.2" ${RF}/><line x1="3.8" y1="12.2" x2="20.2" y2="12.2" ${RF_LINE}/></g>`,
    },
  },
  // 188. CHART UP
  {
    name: "chart-up",
    label: "Trending Up",
    category: "Commerce & Finance",
    motionSummary: "Growth trend line streams briskly upward as peak arrow pops",
    soundSummary: "Bullish ascending 3-note financial chime",
    svgs: {
      outline: `<polyline data-part="line" points="3.5 17 9.2 11.2 13.4 14.8 20.2 7" ${K}/><polyline data-part="arrow" points="15.5 7 20.2 7 20.2 11.7" ${K}/>`,
      solid: `<polyline data-part="line" points="3.5 17 9.2 11.2 13.4 14.8 19.6 7.6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><polygon data-part="arrow" points="20.6 6.6 15.2 6.8 20.4 12" fill="currentColor"/>`,
      duotone: `<polygon points="3.5 17 9.2 11.2 13.4 14.8 20 7.2 20 19 3.5 19" ${D}/><polyline data-part="line" points="3.5 17 9.2 11.2 13.4 14.8 20.2 7" ${DK}/><polyline data-part="arrow" points="15.5 7 20.2 7 20.2 11.7" ${DK}/>`,
      glass: glassCompose(
        `<polygon points="3.5 17 9.2 11.2 13.4 14.8 20 7.2 20 19 3.5 19" ${GB}/>`,
        `<polyline data-part="line" points="3.5 17 9.2 11.2 13.4 14.8 20.2 7" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
        `<polyline data-part="line" points="3.5 17 9.2 11.2 13.4 14.8 20.2 7" stroke="url(#g-rim)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><polygon data-part="arrow" points="20.6 6.6 15.4 6.8 20.4 11.8" ${GB}/>`
      ),
      stencil: `<polyline data-part="line" points="3.5 17 9.2 11.2 13.4 14.8 19.2 8.2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="7 2.5"/><polygon data-part="arrow" points="20.6 6.6 15.4 6.8 20.4 11.8" fill="currentColor"/>`,
      hardware: `<polyline data-part="line" points="3.5 17 9.2 11.2 13.4 14.8 19.6 7.6" fill="none" stroke="#52525b" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><polygon data-part="arrow" points="20.6 6.6 15.2 6.8 20.4 12" ${HA}/>`,
      relief: `<g transform="translate(1.2,1.2)"><polyline data-part="line" points="3.5 17 9.2 11.2 13.4 14.8 20.2 7" ${RS_LINE}/><polyline data-part="arrow" points="15.5 7 20.2 7 20.2 11.7" ${RS_LINE}/></g><polyline data-part="line" points="3.5 17 9.2 11.2 13.4 14.8 20.2 7" ${RF_LINE}/><polyline data-part="arrow" points="15.5 7 20.2 7 20.2 11.7" ${RF_LINE}/>`,
    },
  },
  // 189. PERCENT
  {
    name: "percent",
    label: "Percent",
    category: "Commerce & Finance",
    motionSummary: "Diagonal slash snaps briskly while corner percentage dots bounce apart",
    soundSummary: "Crisp retail discount cash-register ding",
    svgs: {
      outline: `<line data-part="slash" data-pivot="12 12" x1="18.5" y1="5.5" x2="5.5" y2="18.5" ${K}/><circle data-part="dot-tl" cx="7.2" cy="7.2" r="2.4" ${K}/><circle data-part="dot-br" cx="16.8" cy="16.8" r="2.4" ${K}/>`,
      solid: `<rect data-part="slash" data-pivot="12 12" x="10.9" y="2.8" width="2.2" height="18.4" rx="1.1" transform="rotate(45 12 12)" fill="currentColor"/><circle data-part="dot-tl" cx="7.2" cy="7.2" r="2.6" fill="currentColor"/><circle data-part="dot-br" cx="16.8" cy="16.8" r="2.6" fill="currentColor"/>`,
      duotone: `<line data-part="slash" data-pivot="12 12" x1="18.5" y1="5.5" x2="5.5" y2="18.5" ${DK}/><circle data-part="dot-tl" cx="7.2" cy="7.2" r="2.4" ${D}/><circle data-part="dot-br" cx="16.8" cy="16.8" r="2.4" ${D}/>`,
      glass: glassCompose(
        `<rect data-part="slash" data-pivot="12 12" x="10.9" y="2.8" width="2.2" height="18.4" rx="1.1" transform="rotate(45 12 12)" ${GB}/>`,
        `<g><circle data-part="dot-tl" cx="7.2" cy="7.2" r="2.7"/><circle data-part="dot-br" cx="16.8" cy="16.8" r="2.7"/></g>`
      ),
      stencil: `<g fill="currentColor"><g data-part="slash" data-pivot="12 12"><rect x="10.9" y="2.8" width="2.2" height="7.6" rx="1.1" transform="rotate(45 12 12)"/><rect x="10.9" y="13.6" width="2.2" height="7.6" rx="1.1" transform="rotate(45 12 12)"/></g><circle data-part="dot-tl" cx="7.2" cy="7.2" r="2.5"/><circle data-part="dot-br" cx="16.8" cy="16.8" r="2.5"/></g>`,
      hardware: `<rect data-part="slash" data-pivot="12 12" x="10.9" y="2.8" width="2.2" height="18.4" rx="1.1" transform="rotate(45 12 12)" ${HD}/><circle data-part="dot-tl" cx="7.2" cy="7.2" r="2.6" ${HA}/><circle data-part="dot-br" cx="16.8" cy="16.8" r="2.6" ${HL}/>`,
      relief: `<g transform="translate(1.3,1.3)"><line data-part="slash" data-pivot="12 12" x1="18.5" y1="5.5" x2="5.5" y2="18.5" ${RS_LINE}/><circle data-part="dot-tl" cx="7.2" cy="7.2" r="2.4" ${RS}/><circle data-part="dot-br" cx="16.8" cy="16.8" r="2.4" ${RS}/></g><line data-part="slash" data-pivot="12 12" x1="18.5" y1="5.5" x2="5.5" y2="18.5" ${RF_LINE}/><circle data-part="dot-tl" cx="7.2" cy="7.2" r="2.4" ${RF}/><circle data-part="dot-br" cx="16.8" cy="16.8" r="2.4" ${RF}/>`,
    },
  },
  // 190. TICKET
  {
    name: "ticket",
    label: "Ticket",
    category: "Commerce & Finance",
    motionSummary: "Perforated ticket stub tears apart lightly with crisp paper snap",
    soundSummary: "Crisp perforated paper ticket stub rip",
    svgs: {
      outline: `<path data-part="body" d="M3.5 7.5A1.5 1.5 0 0 1 5 6H14.5V18H5A1.5 1.5 0 0 1 3.5 16.5V14A2 2 0 0 0 3.5 10Z" ${K}/><path data-part="stub" data-pivot="14.5 12" d="M14.5 6H19A1.5 1.5 0 0 1 20.5 7.5V10A2 2 0 0 0 20.5 14V16.5A1.5 1.5 0 0 1 19 18H14.5Z" ${K}/>`,
      solid: `<path data-part="body" fill="currentColor" d="M3.5 7.5A1.5 1.5 0 0 1 5 6H13.8V18H5A1.5 1.5 0 0 1 3.5 16.5V14A2 2 0 0 0 3.5 10Z"/><path data-part="stub" data-pivot="14.5 12" fill="currentColor" opacity="0.72" d="M15.2 6H19A1.5 1.5 0 0 1 20.5 7.5V10A2 2 0 0 0 20.5 14V16.5A1.5 1.5 0 0 1 19 18H15.2Z"/>`,
      duotone: `<path data-part="body" d="M3.5 7.5A1.5 1.5 0 0 1 5 6H14.5V18H5A1.5 1.5 0 0 1 3.5 16.5V14A2 2 0 0 0 3.5 10Z" ${D}/><path data-part="stub" data-pivot="14.5 12" d="M14.5 6H19A1.5 1.5 0 0 1 20.5 7.5V10A2 2 0 0 0 20.5 14V16.5A1.5 1.5 0 0 1 19 18H14.5Z" ${D}/>`,
      glass: glassCompose(
        `<path data-part="stub" data-pivot="14.5 12" d="M15 6H19A1.5 1.5 0 0 1 20.5 7.5V10A2 2 0 0 0 20.5 14V16.5A1.5 1.5 0 0 1 19 18H15Z" ${GB}/>`,
        `<path data-part="body" d="M3.5 7.5A1.5 1.5 0 0 1 5 6H14V18H5A1.5 1.5 0 0 1 3.5 16.5V14A2 2 0 0 0 3.5 10Z"/>`
      ),
      stencil: `<g fill="currentColor"><path data-part="body" d="M3.5 7.5A1.5 1.5 0 0 1 5 6H13.5V18H5A1.5 1.5 0 0 1 3.5 16.5V14A2 2 0 0 0 3.5 10Z"/><path data-part="stub" data-pivot="14.5 12" d="M15.4 6H19A1.5 1.5 0 0 1 20.5 7.5V10A2 2 0 0 0 20.5 14V16.5A1.5 1.5 0 0 1 19 18H15.4Z"/></g>`,
      hardware: `<path data-part="body" d="M3.5 7.5A1.5 1.5 0 0 1 5 6H13.8V18H5A1.5 1.5 0 0 1 3.5 16.5V14A2 2 0 0 0 3.5 10Z" ${HL}/><path data-part="stub" data-pivot="14.5 12" d="M15.2 6H19A1.5 1.5 0 0 1 20.5 7.5V10A2 2 0 0 0 20.5 14V16.5A1.5 1.5 0 0 1 19 18H15.2Z" ${HA}/>`,
      relief: `<g transform="translate(1.3,1.3)"><path data-part="body" d="M3.5 7.5A1.5 1.5 0 0 1 5 6H14.5V18H5A1.5 1.5 0 0 1 3.5 16.5V14A2 2 0 0 0 3.5 10Z" ${RS}/><path data-part="stub" data-pivot="14.5 12" d="M14.5 6H19A1.5 1.5 0 0 1 20.5 7.5V10A2 2 0 0 0 20.5 14V16.5A1.5 1.5 0 0 1 19 18H14.5Z" ${RS}/></g><path data-part="body" d="M3.5 7.5A1.5 1.5 0 0 1 5 6H14.5V18H5A1.5 1.5 0 0 1 3.5 16.5V14A2 2 0 0 0 3.5 10Z" ${RF}/><path data-part="stub" data-pivot="14.5 12" d="M14.5 6H19A1.5 1.5 0 0 1 20.5 7.5V10A2 2 0 0 0 20.5 14V16.5A1.5 1.5 0 0 1 19 18H14.5Z" ${RF}/>`,
    },
  },
];
