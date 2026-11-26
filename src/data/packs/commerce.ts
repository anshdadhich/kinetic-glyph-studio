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

export const COMMERCE_ICONS: IconDef[] = [
  // 61. CART (Matches ref Cart rounded basket + handle + ribs)
  {
    name: "cart",
    label: "Shopping Cart",
    category: "Commerce & Finance",
    motionSummary: "Cart basket glides forward as caster wheels roll",
    soundSummary: "Wire cart rattle + checkout chime",
    svgs: {
      outline: `<g data-part="basket" ${K}><path d="M5.5 6.8H19.25A1.75 1.75 0 0 1 20.95 8.98L20.18 11.98A1.75 1.75 0 0 1 18.49 13.3H6.76Z"/><path d="M3 3.6H3.94A1.1 1.1 0 0 1 5.02 4.44L7.15 15.29A1.25 1.25 0 0 0 8.38 16.3H19.25"/></g><circle data-part="wheel-l" data-pivot="9.5 19.8" cx="9.5" cy="19.8" r="1.4" ${K}/><circle data-part="wheel-r" data-pivot="17.5 19.8" cx="17.5" cy="19.8" r="1.4" ${K}/>`,
      solid: `<g data-part="basket" fill="currentColor"><path d="M5.4 6.6H19.3A1.9 1.9 0 0 1 21.15 9L20.35 12.1A1.9 1.9 0 0 1 18.5 13.5H6.7Z"/><path d="M3 3.6H3.94A1.1 1.1 0 0 1 5.02 4.44L7.15 15.29A1.25 1.25 0 0 0 8.38 16.3H19.25" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></g><circle data-part="wheel-l" data-pivot="9.5 19.8" cx="9.5" cy="19.8" r="1.6" fill="currentColor"/><circle data-part="wheel-r" data-pivot="17.5 19.8" cx="17.5" cy="19.8" r="1.6" fill="currentColor"/>`,
      duotone: `<g data-part="basket"><path d="M5.5 6.8H19.25A1.75 1.75 0 0 1 20.95 8.98L20.18 11.98A1.75 1.75 0 0 1 18.49 13.3H6.76Z" ${D}/><path d="M3 3.6H3.94A1.1 1.1 0 0 1 5.02 4.44L7.15 15.29A1.25 1.25 0 0 0 8.38 16.3H19.25" ${DK}/></g><circle data-part="wheel-l" data-pivot="9.5 19.8" cx="9.5" cy="19.8" r="1.4" ${D}/><circle data-part="wheel-r" data-pivot="17.5 19.8" cx="17.5" cy="19.8" r="1.4" ${D}/>`,
      glass: glassCompose(
        `<g data-part="basket" data-pivot="12 10"><path d="M3 3.6H3.94A1.1 1.1 0 0 1 5.02 4.44L7.15 15.29A1.25 1.25 0 0 0 8.38 16.3H19.25" ${GBS}/><line x1="9.9" y1="8.7" x2="10.1" y2="11.4" ${GBS}/><line x1="13.4" y1="8.7" x2="13.4" y2="11.4" ${GBS}/><line x1="16.9" y1="8.7" x2="16.6" y2="11.4" ${GBS}/></g><circle data-part="wheel-l" data-pivot="9.5 19.8" cx="9.5" cy="19.8" r="1.6" ${GB}/><circle data-part="wheel-r" data-pivot="17.5 19.8" cx="17.5" cy="19.8" r="1.6" ${GB}/>`,
        `<path data-part="basket" data-pivot="12 10" d="M5.5 6.8H19.25A1.75 1.75 0 0 1 20.95 8.98L20.18 11.98A1.75 1.75 0 0 1 18.49 13.3H6.76Z"/>`
      ),
      stencil: `<g data-part="basket" fill="currentColor"><path d="M3 3.6H4.6L5.6 6.8H11.5V13.3H6.8L4.8 4.8H3Z"/><path d="M13.1 6.8H19.25A1.75 1.75 0 0 1 20.95 8.98L20.18 11.98A1.75 1.75 0 0 1 18.49 13.3H13.1Z"/><rect x="7.8" y="15.3" width="11.4" height="1.6" rx="0.8"/></g><circle data-part="wheel-l" data-pivot="9.5 19.8" cx="9.5" cy="19.8" r="1.5" fill="currentColor"/><circle data-part="wheel-r" data-pivot="17.5 19.8" cx="17.5" cy="19.8" r="1.5" fill="currentColor"/>`,
      hardware: `<g data-part="basket"><path d="M3 3.6H3.94A1.1 1.1 0 0 1 5.02 4.44L7.15 15.29A1.25 1.25 0 0 0 8.38 16.3H19.25" fill="none" stroke="#3f3f46" stroke-width="1.8" stroke-linecap="round"/><path d="M5.5 6.8H19.25A1.75 1.75 0 0 1 20.95 8.98L20.18 11.98A1.75 1.75 0 0 1 18.49 13.3H6.76Z" ${HL}/></g><circle data-part="wheel-l" data-pivot="9.5 19.8" cx="9.5" cy="19.8" r="1.6" ${HA}/><circle data-part="wheel-r" data-pivot="17.5 19.8" cx="17.5" cy="19.8" r="1.6" ${HA}/>`,
      relief: `<g data-part="basket"><path transform="translate(1.5,1.5)" d="M5.5 6.8H19.25A1.75 1.75 0 0 1 20.95 8.98L20.18 11.98A1.75 1.75 0 0 1 18.49 13.3H6.76Z" ${RS}/><path d="M5.5 6.8H19.25A1.75 1.75 0 0 1 20.95 8.98L20.18 11.98A1.75 1.75 0 0 1 18.49 13.3H6.76Z" ${RF}/><path d="M3 3.6H3.94A1.1 1.1 0 0 1 5.02 4.44L7.15 15.29A1.25 1.25 0 0 0 8.38 16.3H19.25" ${RF_LINE}/></g><circle data-part="wheel-l" data-pivot="9.5 19.8" cx="9.5" cy="19.8" r="1.5" ${RF}/><circle data-part="wheel-r" data-pivot="17.5 19.8" cx="17.5" cy="19.8" r="1.5" ${RF}/>`,
    },
  },
  // 62. BAG
  {
    name: "bag",
    label: "Shopping Bag",
    category: "Commerce & Finance",
    motionSummary: "Tote bag bounces gently as twin handles stretch upward",
    soundSummary: "Kraft boutique bag rustle + soft chime",
    svgs: {
      outline: `<path data-part="handles" d="M8.5 8.5V6.5A3.5 3.5 0 0 1 15.5 6.5V8.5" ${K}/><path data-part="bag" d="M6.4 8.5H17.6A1.4 1.4 0 0 1 19 9.8L19.8 18.6A1.4 1.4 0 0 1 18.4 20H5.6A1.4 1.4 0 0 1 4.2 18.6L5 9.8A1.4 1.4 0 0 1 6.4 8.5Z" ${K}/>`,
      solid: `<path data-part="handles" d="M8.5 8.8V6.5A3.5 3.5 0 0 1 15.5 6.5V8.8" ${K}/><path data-part="bag" fill="currentColor" d="M6.2 8.5H17.8A1.5 1.5 0 0 1 19.3 9.9L20.1 18.8A1.4 1.4 0 0 1 18.7 20.2H5.3A1.4 1.4 0 0 1 3.9 18.8L4.7 9.9A1.5 1.5 0 0 1 6.2 8.5Z"/>`,
      duotone: `<path data-part="handles" d="M8.5 8.5V6.5A3.5 3.5 0 0 1 15.5 6.5V8.5" ${DK}/><path data-part="bag" d="M6.4 8.5H17.6A1.4 1.4 0 0 1 19 9.8L19.8 18.6A1.4 1.4 0 0 1 18.4 20H5.6A1.4 1.4 0 0 1 4.2 18.6L5 9.8A1.4 1.4 0 0 1 6.4 8.5Z" ${D}/>`,
      glass: glassCompose(
        `<path data-part="handles" data-pivot="12 6.5" d="M8.5 10V6.5A3.5 3.5 0 0 1 15.5 6.5V10" ${GBS}/>`,
        `<path data-part="bag" data-pivot="12 14.2" d="M6.2 8.5H17.8A1.5 1.5 0 0 1 19.3 9.9L20.1 18.8A1.4 1.4 0 0 1 18.7 20.2H5.3A1.4 1.4 0 0 1 3.9 18.8L4.7 9.9A1.5 1.5 0 0 1 6.2 8.5Z"/>`
      ),
      stencil: `<path data-part="handles" d="M8.5 8.2V6.5A3.5 3.5 0 0 1 15.5 6.5V8.2" ${K}/><g data-part="bag" fill="currentColor"><path d="M6.2 8.6H11.2V20H5.4A1.4 1.4 0 0 1 4 18.6L4.8 9.9A1.4 1.4 0 0 1 6.2 8.6Z"/><path d="M12.8 8.6H17.8A1.4 1.4 0 0 1 19.2 9.9L20 18.6A1.4 1.4 0 0 1 18.6 20H12.8Z"/></g>`,
      hardware: `<path data-part="handles" d="M8.5 9V6.5A3.5 3.5 0 0 1 15.5 6.5V9" fill="none" stroke="#3f3f46" stroke-width="1.9"/><g data-part="bag"><path d="M6.2 8.5H17.8A1.5 1.5 0 0 1 19.3 9.9L20.1 18.8A1.4 1.4 0 0 1 18.7 20.2H5.3A1.4 1.4 0 0 1 3.9 18.8L4.7 9.9A1.5 1.5 0 0 1 6.2 8.5Z" ${HL}/><circle cx="12" cy="14" r="1.4" ${HA}/></g>`,
      relief: `<g data-part="handles"><path transform="translate(1.5,1.5)" d="M8.5 8.5V6.5A3.5 3.5 0 0 1 15.5 6.5V8.5" ${RS_LINE}/><path d="M8.5 8.5V6.5A3.5 3.5 0 0 1 15.5 6.5V8.5" ${RF_LINE}/></g><g data-part="bag"><path transform="translate(1.5,1.5)" d="M6.4 8.5H17.6A1.4 1.4 0 0 1 19 9.8L19.8 18.6A1.4 1.4 0 0 1 18.4 20H5.6A1.4 1.4 0 0 1 4.2 18.6L5 9.8A1.4 1.4 0 0 1 6.4 8.5Z" ${RS}/><path d="M6.4 8.5H17.6A1.4 1.4 0 0 1 19 9.8L19.8 18.6A1.4 1.4 0 0 1 18.4 20H5.6A1.4 1.4 0 0 1 4.2 18.6L5 9.8A1.4 1.4 0 0 1 6.4 8.5Z" ${RF}/></g>`,
    },
  },
  // 63. CARD
  {
    name: "card",
    label: "Credit Card",
    category: "Commerce & Finance",
    motionSummary: "Card taps upward while EMV chip flashes contact",
    soundSummary: "NFC contactless tap-to-pay double beep",
    svgs: {
      outline: `<g data-part="card" ${K}><rect x="3" y="5.5" width="18" height="13" rx="2.2"/><line x1="3" y1="10" x2="21" y2="10"/></g><rect data-part="chip" x="6" y="13" width="3.6" height="2.6" rx="0.6" ${K_THIN}/>`,
      solid: `<path data-part="card" fill="currentColor" fill-rule="evenodd" d="M5.2 5.2H18.8A2.2 2.2 0 0 1 21 7.4V16.6A2.2 2.2 0 0 1 18.8 18.8H5.2A2.2 2.2 0 0 1 3 16.6V7.4A2.2 2.2 0 0 1 5.2 5.2ZM4.8 9.2V11.2H19.2V9.2Z"/><rect data-part="chip" x="6.2" y="13.2" width="3.6" height="2.4" rx="0.6" fill="currentColor"/>`,
      duotone: `<g data-part="card"><rect x="3" y="5.5" width="18" height="13" rx="2.2" ${D}/><line x1="3" y1="10" x2="21" y2="10" ${DK}/></g><rect data-part="chip" x="6" y="13" width="3.6" height="2.6" rx="0.6" fill="currentColor"/>`,
      glass: glassCompose(
        `<g data-part="card" data-pivot="12 12"><rect transform="translate(-1.5,-1.1)" x="3" y="5.5" width="18" height="13" rx="2.4" ${GB}/></g>`,
        `<rect data-part="card" data-pivot="12 12" x="3" y="5.5" width="18" height="13" rx="2.4"/>`,
        `<g data-part="card" data-pivot="12 12" ${GF}><rect x="3" y="5.5" width="18" height="13" rx="2.4"/></g><rect data-part="card" data-pivot="12 12" x="3.2" y="8.8" width="17.6" height="2.2" ${GB}/><rect data-part="chip" x="6" y="13.2" width="3.6" height="2.6" rx="0.6" ${GH}/>`
      ),
      stencil: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><rect data-part="chip" x="6" y="13.2" width="3.5" height="2.4" rx="0.5" fill="#000"/></mask></defs><g data-part="card" fill="currentColor" mask="url(#__GID__-m1)"><path d="M5.2 5.5H18.8A2.2 2.2 0 0 1 21 7.7V8.8H3V7.7A2.2 2.2 0 0 1 5.2 5.5Z"/><path d="M3 10.8H21V16.3A2.2 2.2 0 0 1 18.8 18.5H5.2A2.2 2.2 0 0 1 3 16.3Z"/></g>`,
      hardware: `<g data-part="card"><rect x="3" y="5.5" width="18" height="13" rx="2.4" ${HD}/><rect x="3" y="8.6" width="18" height="2.4" ${HM}/></g><rect data-part="chip" x="6" y="13" width="3.8" height="2.8" rx="0.6" ${HA}/>`,
      relief: `<g data-part="card"><rect transform="translate(1.5,1.5)" x="3" y="5.5" width="18" height="13" rx="2.2" ${RS}/><rect x="3" y="5.5" width="18" height="13" rx="2.2" ${RF}/><line x1="3" y1="10" x2="21" y2="10" ${RF_LINE}/></g><rect data-part="chip" x="6" y="13" width="3.6" height="2.6" rx="0.6" ${RS}/>`,
    },
  },
  // 64. WALLET
  {
    name: "wallet",
    label: "Wallet",
    category: "Commerce & Finance",
    motionSummary: "Snap clasp slides open while folded bill peeks out",
    soundSummary: "Leather snap button + crisp banknote flutter",
    svgs: {
      outline: `<path data-part="bill" d="M6 7.5L16.5 4.2L17.8 7.5" ${K_THIN}/><rect x="3.5" y="7.5" width="16.5" height="12" rx="2.2" ${K}/><path data-part="clasp" d="M15.5 11.5H20.5V15.5H15.5A1.5 1.5 0 0 1 14 14V13A1.5 1.5 0 0 1 15.5 11.5Z" ${K}/>`,
      solid: `<path data-part="bill" fill="currentColor" opacity="0.5" d="M5.8 7.5L16.5 4L17.8 7.5Z"/><path fill="currentColor" fill-rule="evenodd" d="M5.7 7.5H17.8A2.2 2.2 0 0 1 20 9.7V11H15.5A2 2 0 0 0 13.5 13V14A2 2 0 0 0 15.5 16H20V17.3A2.2 2.2 0 0 1 17.8 19.5H5.7A2.2 2.2 0 0 1 3.5 17.3V9.7A2.2 2.2 0 0 1 5.7 7.5Z"/><rect data-part="clasp" x="14.5" y="12" width="6.2" height="3" rx="1.2" fill="currentColor"/>`,
      duotone: `<path data-part="bill" d="M6 7.5L16.5 4.2L17.8 7.5" ${DK_THIN}/><rect x="3.5" y="7.5" width="16.5" height="12" rx="2.2" ${D}/><path data-part="clasp" d="M15.5 11.5H20.5V15.5H15.5A1.5 1.5 0 0 1 14 14V13A1.5 1.5 0 0 1 15.5 11.5Z" ${D}/>`,
      glass: glassCompose(
        `<path data-part="bill" data-pivot="12 6" d="M5.8 8.2L16.5 4L18 8.2Z" ${GB}/><rect data-part="clasp" data-pivot="17.5 13.5" x="14.5" y="11.6" width="6.5" height="3.8" rx="1.4" ${GH}/>`,
        `<rect x="3.5" y="7.5" width="16.5" height="12" rx="2.4"/>`
      ),
      stencil: `<path data-part="bill" d="M6 7.4L16.5 4.2L17.8 7.4Z" fill="currentColor" opacity="0.55"/><g fill="currentColor"><path d="M5.7 7.6H11.2V19.5H5.7A2.2 2.2 0 0 1 3.5 17.3V9.8A2.2 2.2 0 0 1 5.7 7.6Z"/><path d="M12.8 7.6H17.8A2.2 2.2 0 0 1 20 9.8V11H15.2V16H20V17.3A2.2 2.2 0 0 1 17.8 19.5H12.8Z"/></g><rect data-part="clasp" x="15.8" y="12.1" width="4.8" height="2.8" rx="1" fill="currentColor"/>`,
      hardware: `<path data-part="bill" d="M5.8 7.6L16.5 4.2L17.8 7.6Z" ${HM}/><rect x="3.5" y="7.5" width="16.5" height="12" rx="2.2" ${HD}/><rect data-part="clasp" x="14.2" y="11.5" width="6.6" height="4" rx="1.4" ${HA}/>`,
      relief: `<path data-part="bill" d="M6 7.5L16.5 4.2L17.8 7.5" ${RF}/><rect transform="translate(1.5,1.5)" x="3.5" y="7.5" width="16.5" height="12" rx="2.2" ${RS}/><rect x="3.5" y="7.5" width="16.5" height="12" rx="2.2" ${RF}/><path data-part="clasp" d="M15.5 11.5H20.5V15.5H15.5A1.5 1.5 0 0 1 14 14V13A1.5 1.5 0 0 1 15.5 11.5Z" ${RF}/>`,
    },
  },
  // 65. TAG
  {
    name: "tag",
    label: "Price Tag",
    category: "Commerce & Finance",
    motionSummary: "Merchandise tag swings playfully from its eyelet",
    soundSummary: "Cardstock price-tag flick + barcode scanner beep",
    svgs: {
      outline: `<g data-part="tag" data-pivot="7.5 7.5" ${K}><path d="M5.2 4H11.2L19.8 12.6A1.8 1.8 0 0 1 19.8 15.1L15.1 19.8A1.8 1.8 0 0 1 12.6 19.8L4 11.2V5.2A1.2 1.2 0 0 1 5.2 4Z"/><circle cx="8" cy="8" r="1.2" fill="currentColor" stroke="none"/></g>`,
      solid: `<path data-part="tag" data-pivot="7.5 7.5" fill="currentColor" fill-rule="evenodd" d="M5.2 3.8H11.4L20 12.4A1.9 1.9 0 0 1 20 15.1L15.1 20A1.9 1.9 0 0 1 12.4 20L3.8 11.4V5.2A1.4 1.4 0 0 1 5.2 3.8ZM8 6.6A1.4 1.4 0 1 0 8 9.4A1.4 1.4 0 1 0 8 6.6Z"/>`,
      duotone: `<g data-part="tag" data-pivot="7.5 7.5"><path d="M5.2 4H11.2L19.8 12.6A1.8 1.8 0 0 1 19.8 15.1L15.1 19.8A1.8 1.8 0 0 1 12.6 19.8L4 11.2V5.2A1.2 1.2 0 0 1 5.2 4Z" ${D}/><circle cx="8" cy="8" r="1.3" fill="currentColor"/></g>`,
      glass: glassCompose(
        `<g data-part="tag" data-pivot="7.5 7.5"><path transform="translate(-1.5,-1.1)" d="M5.2 3.8H11.4L20 12.4A1.9 1.9 0 0 1 20 15.1L15.1 20A1.9 1.9 0 0 1 12.4 20L3.8 11.4V5.2A1.4 1.4 0 0 1 5.2 3.8Z" ${GB}/></g>`,
        `<path data-part="tag" data-pivot="7.5 7.5" d="M5.2 3.8H11.4L20 12.4A1.9 1.9 0 0 1 20 15.1L15.1 20A1.9 1.9 0 0 1 12.4 20L3.8 11.4V5.2A1.4 1.4 0 0 1 5.2 3.8Z"/>`,
        `<g data-part="tag" data-pivot="7.5 7.5" ${GF}><path d="M5.2 3.8H11.4L20 12.4A1.9 1.9 0 0 1 20 15.1L15.1 20A1.9 1.9 0 0 1 12.4 20L3.8 11.4V5.2A1.4 1.4 0 0 1 5.2 3.8Z"/></g><circle data-part="tag" data-pivot="7.5 7.5" cx="8" cy="8" r="1.4" ${GB}/>`
      ),
      stencil: `<g data-part="tag" data-pivot="7.5 7.5" fill="currentColor"><path d="M5.2 4H11.2L14.5 7.3L9 12.8L4 11.2V5.2A1.2 1.2 0 0 1 5.2 4Z"/><path d="M15.6 8.4L19.8 12.6A1.6 1.6 0 0 1 19.8 14.8L14.8 19.8A1.6 1.6 0 0 1 12.6 19.8L10 14Z"/></g>`,
      hardware: `<g data-part="tag" data-pivot="7.5 7.5"><path d="M5.2 3.8H11.4L20 12.4A1.9 1.9 0 0 1 20 15.1L15.1 20A1.9 1.9 0 0 1 12.4 20L3.8 11.4V5.2A1.4 1.4 0 0 1 5.2 3.8Z" ${HL}/><circle cx="8" cy="8" r="1.5" ${HA}/></g>`,
      relief: `<g data-part="tag" data-pivot="7.5 7.5"><path transform="translate(1.5,1.5)" d="M5.2 4H11.2L19.8 12.6A1.8 1.8 0 0 1 19.8 15.1L15.1 19.8A1.8 1.8 0 0 1 12.6 19.8L4 11.2V5.2A1.2 1.2 0 0 1 5.2 4Z" ${RS}/><path d="M5.2 4H11.2L19.8 12.6A1.8 1.8 0 0 1 19.8 15.1L15.1 19.8A1.8 1.8 0 0 1 12.6 19.8L4 11.2V5.2A1.2 1.2 0 0 1 5.2 4Z" ${RF}/><circle cx="8" cy="8" r="1.3" ${RS}/></g>`,
    },
  },
  // 66. GIFT (Ref Gift rounded box + lid + ribbon bow)
  {
    name: "gift",
    label: "Gift",
    category: "Commerce & Finance",
    motionSummary: "Ribbon lid pops off box as gift springs slightly downward",
    soundSummary: "Festive box-pop + bright celebratory sparkle chord",
    svgs: {
      outline: `<g data-part="lid" ${K}><rect x="2.75" y="6.75" width="18.5" height="4.5" rx="1.6"/><path d="M12 6.75C11 3.9 9.6 2.75 8.2 2.75C6.4 2.75 5.7 4.9 7 6C7.9 6.6 9.8 6.75 12 6.75ZM12 6.75C13 3.9 14.4 2.75 15.8 2.75C17.6 2.75 18.3 4.9 17 6C16.1 6.6 14.2 6.75 12 6.75Z"/></g><g data-part="box" ${K}><path d="M5.25 11.25H18.75A0.5 0.5 0 0 1 19.25 11.75V18.5A2.75 2.75 0 0 1 16.5 21.25H7.5A2.75 2.75 0 0 1 4.75 18.5V11.75A0.5 0.5 0 0 1 5.25 11.25Z"/><line x1="12" y1="11.25" x2="12" y2="21.25"/></g>`,
      solid: `<g data-part="lid" fill="currentColor"><rect x="2.75" y="6.75" width="18.5" height="4.2" rx="1.6"/><path d="M12 6.75C11 3.9 9.6 2.75 8.2 2.75C6.4 2.75 5.7 4.9 7 6C7.9 6.6 9.8 6.75 12 6.75ZM12 6.75C13 3.9 14.4 2.75 15.8 2.75C17.6 2.75 18.3 4.9 17 6C16.1 6.6 14.2 6.75 12 6.75Z" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/></g><path data-part="box" fill="currentColor" fill-rule="evenodd" d="M5.25 11.75H18.75A0.5 0.5 0 0 1 19.25 12.25V18.5A2.75 2.75 0 0 1 16.5 21.25H7.5A2.75 2.75 0 0 1 4.75 18.5V12.25A0.5 0.5 0 0 1 5.25 11.75ZM11.1 11.75V21.25H12.9V11.75Z"/>`,
      duotone: `<g data-part="lid"><rect x="2.75" y="6.75" width="18.5" height="4.5" rx="1.6" ${D}/><path d="M12 6.75C11 3.9 9.6 2.75 8.2 2.75C6.4 2.75 5.7 4.9 7 6C7.9 6.6 9.8 6.75 12 6.75ZM12 6.75C13 3.9 14.4 2.75 15.8 2.75C17.6 2.75 18.3 4.9 17 6C16.1 6.6 14.2 6.75 12 6.75Z" ${DK}/></g><g data-part="box"><path d="M5.25 11.25H18.75A0.5 0.5 0 0 1 19.25 11.75V18.5A2.75 2.75 0 0 1 16.5 21.25H7.5A2.75 2.75 0 0 1 4.75 18.5V11.75A0.5 0.5 0 0 1 5.25 11.25Z" ${D}/><line x1="12" y1="11.25" x2="12" y2="21.25" ${DK}/></g>`,
      glass: glassCompose(
        `<g data-part="lid" data-pivot="12 8.8"><path d="M12 6.75C11 3.9 9.6 2.75 8.2 2.75C6.4 2.75 5.7 4.9 7 6C7.9 6.6 9.8 6.75 12 6.75ZM12 6.75C13 3.9 14.4 2.75 15.8 2.75C17.6 2.75 18.3 4.9 17 6C16.1 6.6 14.2 6.75 12 6.75Z" ${GBS}/><rect x="2.75" y="6.75" width="18.5" height="4.5" rx="1.6" ${GB}/></g><rect data-part="box" data-pivot="12 16" x="10.9" y="11.2" width="2.2" height="10" rx="0.6" ${GH}/>`,
        `<path data-part="box" data-pivot="12 16" d="M5.25 11.4H18.75A0.5 0.5 0 0 1 19.25 11.9V18.5A2.75 2.75 0 0 1 16.5 21.25H7.5A2.75 2.75 0 0 1 4.75 18.5V11.9A0.5 0.5 0 0 1 5.25 11.4Z"/>`
      ),
      stencil: `<g data-part="lid" fill="currentColor"><rect x="2.75" y="7" width="18.5" height="4" rx="1.5"/><path d="M12 6.8C11 4 9.6 2.8 8.2 2.8C6.4 2.8 5.7 5 7 6C7.9 6.6 9.8 6.8 12 6.8ZM12 6.8C13 4 14.4 2.8 15.8 2.8C17.6 2.8 18.3 5 17 6C16.1 6.6 14.2 6.8 12 6.8Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></g><g data-part="box" fill="currentColor"><path d="M4.8 12H11.2V21.2H7.5A2.7 2.7 0 0 1 4.8 18.5Z"/><path d="M12.8 12H19.2V18.5A2.7 2.7 0 0 1 16.5 21.2H12.8Z"/></g>`,
      hardware: `<g data-part="box"><path d="M5.25 11.25H18.75A0.5 0.5 0 0 1 19.25 11.75V18.5A2.75 2.75 0 0 1 16.5 21.25H7.5A2.75 2.75 0 0 1 4.75 18.5V11.75A0.5 0.5 0 0 1 5.25 11.25Z" ${HL}/><rect x="10.8" y="11.25" width="2.4" height="10" ${HA}/></g><g data-part="lid"><rect x="2.75" y="6.75" width="18.5" height="4.5" rx="1.6" ${HD}/><path d="M12 6.75C11 3.9 9.6 2.75 8.2 2.75C6.4 2.75 5.7 4.9 7 6C7.9 6.6 9.8 6.75 12 6.75ZM12 6.75C13 3.9 14.4 2.75 15.8 2.75C17.6 2.75 18.3 4.9 17 6C16.1 6.6 14.2 6.75 12 6.75Z" fill="none" stroke="#ff6b35" stroke-width="1.8" stroke-linejoin="round"/></g>`,
      relief: `<g data-part="box"><path transform="translate(1.4,1.4)" d="M5.25 11.25H18.75A0.5 0.5 0 0 1 19.25 11.75V18.5A2.75 2.75 0 0 1 16.5 21.25H7.5A2.75 2.75 0 0 1 4.75 18.5V11.75A0.5 0.5 0 0 1 5.25 11.25Z" ${RS}/><path d="M5.25 11.25H18.75A0.5 0.5 0 0 1 19.25 11.75V18.5A2.75 2.75 0 0 1 16.5 21.25H7.5A2.75 2.75 0 0 1 4.75 18.5V11.75A0.5 0.5 0 0 1 5.25 11.25Z" ${RF}/><line x1="12" y1="11.25" x2="12" y2="21.25" ${RF_LINE}/></g><g data-part="lid"><rect transform="translate(1.4,1.4)" x="2.75" y="6.75" width="18.5" height="4.5" rx="1.6" ${RS}/><rect x="2.75" y="6.75" width="18.5" height="4.5" rx="1.6" ${RF}/><path d="M12 6.75C11 3.9 9.6 2.75 8.2 2.75C6.4 2.75 5.7 4.9 7 6C7.9 6.6 9.8 6.75 12 6.75ZM12 6.75C13 3.9 14.4 2.75 15.8 2.75C17.6 2.75 18.3 4.9 17 6C16.1 6.6 14.2 6.75 12 6.75Z" ${RF_LINE}/></g>`,
    },
  },
  // 67. TROPHY (Ref Trophy smooth chalice + handles + rounded base)
  {
    name: "trophy",
    label: "Trophy",
    category: "Commerce & Finance",
    motionSummary: "Chalice lifts proudly off pedestal with victory tilt",
    soundSummary: "Metallic chalice ring + brass fanfare triad",
    svgs: {
      outline: `<g data-part="cup" ${K}><path d="M8 3.25H16A1.25 1.25 0 0 1 17.25 4.5V8.25A5 5 0 0 1 12.25 13.25H11.75A5 5 0 0 1 6.75 8.25V4.5A1.25 1.25 0 0 1 8 3.25Z"/><path d="M6.75 5.25H5A1.75 1.75 0 0 0 3.25 7C3.25 9.1 5 10.5 7.5 10.65"/><path d="M17.25 5.25H19A1.75 1.75 0 0 1 20.75 7C20.75 9.1 19 10.5 16.5 10.65"/></g><g data-part="base" ${K}><line x1="12" y1="13.25" x2="12" y2="17.25"/><rect x="7.25" y="17.25" width="9.5" height="4" rx="1.5"/></g>`,
      solid: `<g data-part="cup" fill="currentColor"><path d="M8 3.1H16A1.35 1.35 0 0 1 17.35 4.45V8.25A5.1 5.1 0 0 1 12.25 13.35H11.75A5.1 5.1 0 0 1 6.65 8.25V4.45A1.35 1.35 0 0 1 8 3.1Z"/><path d="M6.75 5.25H5A1.75 1.75 0 0 0 3.25 7C3.25 9.1 5 10.5 7.5 10.65" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/><path d="M17.25 5.25H19A1.75 1.75 0 0 1 20.75 7C20.75 9.1 19 10.5 16.5 10.65" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></g><g data-part="base" fill="currentColor"><rect x="10.9" y="13.1" width="2.2" height="4.4"/><rect x="7.25" y="17.25" width="9.5" height="4" rx="1.5"/></g>`,
      duotone: `<g data-part="cup"><path d="M8 3.25H16A1.25 1.25 0 0 1 17.25 4.5V8.25A5 5 0 0 1 12.25 13.25H11.75A5 5 0 0 1 6.75 8.25V4.5A1.25 1.25 0 0 1 8 3.25Z" ${D}/><path d="M6.75 5.25H5A1.75 1.75 0 0 0 3.25 7C3.25 9.1 5 10.5 7.5 10.65M17.25 5.25H19A1.75 1.75 0 0 1 20.75 7C20.75 9.1 19 10.5 16.5 10.65" ${DK}/></g><g data-part="base"><line x1="12" y1="13.25" x2="12" y2="17.25" ${DK}/><rect x="7.25" y="17.25" width="9.5" height="4" rx="1.5" ${D}/></g>`,
      glass: glassCompose(
        `<g data-part="cup" data-pivot="12 8.5" ${GBS}><path d="M6.75 5.25H5A1.75 1.75 0 0 0 3.25 7C3.25 9.1 5 10.5 7.5 10.65"/><path d="M17.25 5.25H19A1.75 1.75 0 0 1 20.75 7C20.75 9.1 19 10.5 16.5 10.65"/></g><g data-part="base" data-pivot="12 18.2"><rect x="10.9" y="12.8" width="2.2" height="4.8" ${GB}/><rect x="7.25" y="17.25" width="9.5" height="4" rx="1.5" ${GB}/></g>`,
        `<path data-part="cup" data-pivot="12 8.5" d="M8 3.1H16A1.35 1.35 0 0 1 17.35 4.45V8.25A5.1 5.1 0 0 1 12.25 13.35H11.75A5.1 5.1 0 0 1 6.65 8.25V4.45A1.35 1.35 0 0 1 8 3.1Z"/>`,
        `<g data-part="cup" data-pivot="12 8.5" ${GF}><path d="M8 3.1H16A1.35 1.35 0 0 1 17.35 4.45V8.25A5.1 5.1 0 0 1 12.25 13.35H11.75A5.1 5.1 0 0 1 6.65 8.25V4.45A1.35 1.35 0 0 1 8 3.1Z"/></g><ellipse data-part="cup" data-pivot="12 8.5" cx="12" cy="5.4" rx="3.4" ry="0.9" ${GH}/>`
      ),
      stencil: `<g data-part="cup" fill="currentColor"><path d="M8 3.25H11.2V13.25A5 5 0 0 1 6.75 8.25V4.5A1.25 1.25 0 0 1 8 3.25Z"/><path d="M12.8 3.25H16A1.25 1.25 0 0 1 17.25 4.5V8.25A5 5 0 0 1 12.8 13.25Z"/></g><g data-part="base" fill="currentColor"><rect x="11" y="14.2" width="2" height="2.4"/><rect x="7.25" y="17.25" width="9.5" height="4" rx="1.5"/></g>`,
      hardware: `<g data-part="base"><rect x="10.9" y="13.2" width="2.2" height="4.4" ${HM}/><rect x="7.25" y="17.25" width="9.5" height="4" rx="1.5" ${HD}/></g><g data-part="cup"><path d="M6.75 5.25H5A1.75 1.75 0 0 0 3.25 7C3.25 9.1 5 10.5 7.5 10.65" fill="none" stroke="#52525b" stroke-width="1.75" stroke-linecap="round"/><path d="M17.25 5.25H19A1.75 1.75 0 0 1 20.75 7C20.75 9.1 19 10.5 16.5 10.65" fill="none" stroke="#52525b" stroke-width="1.75" stroke-linecap="round"/><path d="M8 3.1H16A1.35 1.35 0 0 1 17.35 4.45V8.25A5.1 5.1 0 0 1 12.25 13.35H11.75A5.1 5.1 0 0 1 6.65 8.25V4.45A1.35 1.35 0 0 1 8 3.1Z" ${HL}/><circle cx="12" cy="7.8" r="1.4" ${HA}/></g>`,
      relief: `<g data-part="base"><rect transform="translate(1.4,1.4)" x="7.25" y="17.25" width="9.5" height="4" rx="1.5" ${RS}/><line x1="12" y1="13.25" x2="12" y2="17.25" ${RF_LINE}/><rect x="7.25" y="17.25" width="9.5" height="4" rx="1.5" ${RF}/></g><g data-part="cup"><path transform="translate(1.4,1.4)" d="M8 3.25H16A1.25 1.25 0 0 1 17.25 4.5V8.25A5 5 0 0 1 12.25 13.25H11.75A5 5 0 0 1 6.75 8.25V4.5A1.25 1.25 0 0 1 8 3.25Z" ${RS}/><path d="M6.75 5.25H5A1.75 1.75 0 0 0 3.25 7C3.25 9.1 5 10.5 7.5 10.65M17.25 5.25H19A1.75 1.75 0 0 1 20.75 7C20.75 9.1 19 10.5 16.5 10.65" ${RF_LINE}/><path d="M8 3.25H16A1.25 1.25 0 0 1 17.25 4.5V8.25A5 5 0 0 1 12.25 13.25H11.75A5 5 0 0 1 6.75 8.25V4.5A1.25 1.25 0 0 1 8 3.25Z" ${RF}/></g>`,
    },
  },
  // 68. CROWN
  {
    name: "crown",
    label: "Crown",
    category: "Commerce & Finance",
    motionSummary: "Royal coronet lifts smoothly while center jewel gleams",
    soundSummary: "Regal harmonic flourish chime",
    svgs: {
      outline: `<path data-part="crown" d="M4.2 18.2A1.4 1.4 0 0 1 2.8 16.9L3.1 7.8A0.8 0.8 0 0 1 4.4 7.2L8.2 11L11.3 5.2A0.8 0.8 0 0 1 12.7 5.2L15.8 11L19.6 7.2A0.8 0.8 0 0 1 20.9 7.8L21.2 16.9A1.4 1.4 0 0 1 19.8 18.2Z" ${K}/><circle data-part="jewel" cx="12" cy="14" r="1.25" fill="currentColor"/>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><circle data-part="jewel" cx="12" cy="14" r="1.4" fill="#000"/></mask></defs><path data-part="crown" fill="currentColor" mask="url(#__GID__-m1)" d="M4.2 18.4A1.4 1.4 0 0 1 2.8 17L3.1 7.6A0.85 0.85 0 0 1 4.4 7L8.2 11L11.3 5A0.82 0.82 0 0 1 12.7 5L15.8 11L19.6 7A0.85 0.85 0 0 1 20.9 7.6L21.2 17A1.4 1.4 0 0 1 19.8 18.4Z"/>`,
      duotone: `<path data-part="crown" d="M4.2 18.2A1.4 1.4 0 0 1 2.8 16.9L3.1 7.8A0.8 0.8 0 0 1 4.4 7.2L8.2 11L11.3 5.2A0.8 0.8 0 0 1 12.7 5.2L15.8 11L19.6 7.2A0.8 0.8 0 0 1 20.9 7.8L21.2 16.9A1.4 1.4 0 0 1 19.8 18.2Z" ${D}/><circle data-part="jewel" cx="12" cy="14" r="1.25" fill="currentColor"/>`,
      glass: glassCompose(
        `<g data-part="crown" data-pivot="12 12"><path transform="translate(-1.4,-1)" d="M4.2 18.4A1.4 1.4 0 0 1 2.8 17L3.1 7.6A0.85 0.85 0 0 1 4.4 7L8.2 11L11.3 5A0.82 0.82 0 0 1 12.7 5L15.8 11L19.6 7A0.85 0.85 0 0 1 20.9 7.6L21.2 17A1.4 1.4 0 0 1 19.8 18.4Z" ${GB}/></g>`,
        `<path data-part="crown" data-pivot="12 12" d="M4.2 18.4A1.4 1.4 0 0 1 2.8 17L3.1 7.6A0.85 0.85 0 0 1 4.4 7L8.2 11L11.3 5A0.82 0.82 0 0 1 12.7 5L15.8 11L19.6 7A0.85 0.85 0 0 1 20.9 7.6L21.2 17A1.4 1.4 0 0 1 19.8 18.4Z"/>`,
        `<g data-part="crown" data-pivot="12 12" ${GF}><path d="M4.2 18.4A1.4 1.4 0 0 1 2.8 17L3.1 7.6A0.85 0.85 0 0 1 4.4 7L8.2 11L11.3 5A0.82 0.82 0 0 1 12.7 5L15.8 11L19.6 7A0.85 0.85 0 0 1 20.9 7.6L21.2 17A1.4 1.4 0 0 1 19.8 18.4Z"/></g><circle data-part="jewel" data-pivot="12 14" cx="12" cy="14" r="1.45" ${GH}/>`
      ),
      stencil: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><circle data-part="jewel" cx="12" cy="14" r="1.3" fill="#000"/></mask></defs><g data-part="crown" fill="currentColor" mask="url(#__GID__-m1)"><path d="M4.2 18.2L3.1 7.6L8.2 11.4L11.2 6.2V18.2Z"/><path d="M19.8 18.2L20.9 7.6L15.8 11.4L12.8 6.2V18.2Z"/></g>`,
      hardware: `<g data-part="crown"><path d="M4.2 18.4A1.4 1.4 0 0 1 2.8 17L3.1 7.6A0.85 0.85 0 0 1 4.4 7L8.2 11L11.3 5A0.82 0.82 0 0 1 12.7 5L15.8 11L19.6 7A0.85 0.85 0 0 1 20.9 7.6L21.2 17A1.4 1.4 0 0 1 19.8 18.4Z" ${HL}/><circle data-part="jewel" cx="12" cy="14" r="1.5" ${HA}/></g>`,
      relief: `<g data-part="crown"><path transform="translate(1.4,1.4)" d="M4.2 18.2A1.4 1.4 0 0 1 2.8 16.9L3.1 7.8A0.8 0.8 0 0 1 4.4 7.2L8.2 11L11.3 5.2A0.8 0.8 0 0 1 12.7 5.2L15.8 11L19.6 7.2A0.8 0.8 0 0 1 20.9 7.8L21.2 16.9A1.4 1.4 0 0 1 19.8 18.2Z" ${RS}/><path d="M4.2 18.2A1.4 1.4 0 0 1 2.8 16.9L3.1 7.8A0.8 0.8 0 0 1 4.4 7.2L8.2 11L11.3 5.2A0.8 0.8 0 0 1 12.7 5.2L15.8 11L19.6 7.2A0.8 0.8 0 0 1 20.9 7.8L21.2 16.9A1.4 1.4 0 0 1 19.8 18.2Z" ${RF}/></g><circle data-part="jewel" cx="12" cy="14" r="1.25" ${RS}/>`,
    },
  },
  // 69. COIN
  {
    name: "coin",
    label: "Coin",
    category: "Commerce & Finance",
    motionSummary: "Gold coin flips edge-on along vertical axis mid-air",
    soundSummary: "Classic silver-dollar toss ring",
    svgs: {
      outline: `<g data-part="coin" data-pivot="12 12" ${K}><circle cx="12" cy="12" r="8.5"/><path d="M12 7.2V16.8" ${K_THIN}/><path d="M14.2 9.2A2.2 1.6 0 0 0 9.8 9.2C9.8 11.2 14.2 11 14.2 13.4A2.2 1.8 0 0 1 9.8 13.8" ${K_THIN}/></g>`,
      solid: `<path data-part="coin" data-pivot="12 12" fill="currentColor" fill-rule="evenodd" d="M12 3.3A8.7 8.7 0 1 0 12 20.7A8.7 8.7 0 1 0 12 3.3ZM11.2 7.5H12.8V16.5H11.2Z"/>`,
      duotone: `<g data-part="coin" data-pivot="12 12"><circle cx="12" cy="12" r="8.5" ${D}/><path d="M12 7.2V16.8M14.2 9.2A2.2 1.6 0 0 0 9.8 9.2C9.8 11.2 14.2 11 14.2 13.4A2.2 1.8 0 0 1 9.8 13.8" ${DK_THIN}/></g>`,
      glass: glassCompose(
        `<circle data-part="coin" data-pivot="12 12" cx="10.5" cy="10.8" r="8.2" ${GB}/>`,
        `<circle data-part="coin" data-pivot="12 12" cx="12" cy="12" r="8.5"/>`,
        `<g data-part="coin" data-pivot="12 12" ${GF}><circle cx="12" cy="12" r="8.5"/></g><rect data-part="coin" data-pivot="12 12" x="11.1" y="7.5" width="1.8" height="9" rx="0.9" ${GH}/>`
      ),
      stencil: `<g data-part="coin" data-pivot="12 12" fill="currentColor"><path d="M5.6 6A8.5 8.5 0 0 1 18.4 6L16.8 7.5A6.2 6.2 0 0 0 7.2 7.5Z"/><path d="M18.4 18A8.5 8.5 0 0 1 5.6 18L7.2 16.5A6.2 6.2 0 0 0 16.8 16.5Z"/><rect x="11.1" y="7.5" width="1.8" height="9" rx="0.8"/></g>`,
      hardware: `<g data-part="coin" data-pivot="12 12"><circle cx="12" cy="12" r="8.7" ${HD}/><circle cx="12" cy="12" r="6.5" ${HL}/><rect x="11.1" y="7.5" width="1.8" height="9" rx="0.8" ${HA}/></g>`,
      relief: `<g data-part="coin" data-pivot="12 12"><circle transform="translate(1.4,1.4)" cx="12" cy="12" r="8.5" ${RS}/><circle cx="12" cy="12" r="8.5" ${RF}/><path d="M12 7.5V16.5" ${RF_LINE}/></g>`,
    },
  },
  // 70. RECEIPT (Ref Receipt smooth rounded top + scalloped tear edge)
  {
    name: "receipt",
    label: "Receipt",
    category: "Commerce & Finance",
    motionSummary: "Thermal paper slip prints downward while totals scan",
    soundSummary: "Thermal receipt printer zip + tear snap",
    svgs: {
      outline: `<path data-part="paper" d="M4.75 5.25A2.5 2.5 0 0 1 7.25 2.75H16.75A2.5 2.5 0 0 1 19.25 5.25V19.87A0.6 0.6 0 0 1 18.24 20.31L17.24 19.38A0.6 0.6 0 0 0 16.42 19.38L14.83 20.87A0.6 0.6 0 0 1 14.01 20.87L12.41 19.38A0.6 0.6 0 0 0 11.59 19.38L9.99 20.87A0.6 0.6 0 0 1 9.17 20.87L7.58 19.38A0.6 0.6 0 0 0 6.76 19.38L5.76 20.31A0.6 0.6 0 0 1 4.75 19.87Z" ${K}/><g data-part="lines" ${K_THIN}><line x1="8.5" y1="8.2" x2="15.5" y2="8.2"/><line x1="8.5" y1="11.8" x2="15.5" y2="11.8"/><line x1="8.5" y1="15.4" x2="13" y2="15.4"/></g>`,
      solid: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><g data-part="lines" fill="#000"><rect x="8.3" y="7.5" width="7.4" height="1.6" rx="0.8"/><rect x="8.3" y="11.1" width="7.4" height="1.6" rx="0.8"/><rect x="8.3" y="14.7" width="4.9" height="1.6" rx="0.8"/></g></mask></defs><path data-part="paper" fill="currentColor" mask="url(#__GID__-m1)" d="M4.75 5.25A2.5 2.5 0 0 1 7.25 2.75H16.75A2.5 2.5 0 0 1 19.25 5.25V19.87A0.6 0.6 0 0 1 18.24 20.31L17.24 19.38A0.6 0.6 0 0 0 16.42 19.38L14.83 20.87A0.6 0.6 0 0 1 14.01 20.87L12.41 19.38A0.6 0.6 0 0 0 11.59 19.38L9.99 20.87A0.6 0.6 0 0 1 9.17 20.87L7.58 19.38A0.6 0.6 0 0 0 6.76 19.38L5.76 20.31A0.6 0.6 0 0 1 4.75 19.87Z"/>`,
      duotone: `<path data-part="paper" d="M4.75 5.25A2.5 2.5 0 0 1 7.25 2.75H16.75A2.5 2.5 0 0 1 19.25 5.25V19.87A0.6 0.6 0 0 1 18.24 20.31L17.24 19.38A0.6 0.6 0 0 0 16.42 19.38L14.83 20.87A0.6 0.6 0 0 1 14.01 20.87L12.41 19.38A0.6 0.6 0 0 0 11.59 19.38L9.99 20.87A0.6 0.6 0 0 1 9.17 20.87L7.58 19.38A0.6 0.6 0 0 0 6.76 19.38L5.76 20.31A0.6 0.6 0 0 1 4.75 19.87Z" ${D}/><g data-part="lines" ${DK_THIN}><line x1="8.5" y1="8.2" x2="15.5" y2="8.2"/><line x1="8.5" y1="11.8" x2="15.5" y2="11.8"/><line x1="8.5" y1="15.4" x2="13" y2="15.4"/></g>`,
      glass: glassCompose(
        `<g data-part="paper" data-pivot="12 12"><path transform="translate(-1.5,-1)" d="M4.75 5.25A2.5 2.5 0 0 1 7.25 2.75H16.75A2.5 2.5 0 0 1 19.25 5.25V19.87A0.6 0.6 0 0 1 18.24 20.31L17.24 19.38A0.6 0.6 0 0 0 16.42 19.38L14.83 20.87A0.6 0.6 0 0 1 14.01 20.87L12.41 19.38A0.6 0.6 0 0 0 11.59 19.38L9.99 20.87A0.6 0.6 0 0 1 9.17 20.87L7.58 19.38A0.6 0.6 0 0 0 6.76 19.38L5.76 20.31A0.6 0.6 0 0 1 4.75 19.87Z" ${GB}/></g>`,
        `<path data-part="paper" data-pivot="12 12" d="M4.75 5.25A2.5 2.5 0 0 1 7.25 2.75H16.75A2.5 2.5 0 0 1 19.25 5.25V19.87A0.6 0.6 0 0 1 18.24 20.31L17.24 19.38A0.6 0.6 0 0 0 16.42 19.38L14.83 20.87A0.6 0.6 0 0 1 14.01 20.87L12.41 19.38A0.6 0.6 0 0 0 11.59 19.38L9.99 20.87A0.6 0.6 0 0 1 9.17 20.87L7.58 19.38A0.6 0.6 0 0 0 6.76 19.38L5.76 20.31A0.6 0.6 0 0 1 4.75 19.87Z"/>`,
        `<g data-part="paper" data-pivot="12 12" ${GF}><path d="M4.75 5.25A2.5 2.5 0 0 1 7.25 2.75H16.75A2.5 2.5 0 0 1 19.25 5.25V19.87A0.6 0.6 0 0 1 18.24 20.31L17.24 19.38A0.6 0.6 0 0 0 16.42 19.38L14.83 20.87A0.6 0.6 0 0 1 14.01 20.87L12.41 19.38A0.6 0.6 0 0 0 11.59 19.38L9.99 20.87A0.6 0.6 0 0 1 9.17 20.87L7.58 19.38A0.6 0.6 0 0 0 6.76 19.38L5.76 20.31A0.6 0.6 0 0 1 4.75 19.87Z"/></g><g data-part="lines"><rect x="8.3" y="7.5" width="7.4" height="1.5" rx="0.7" ${GB}/><rect x="8.3" y="11.1" width="7.4" height="1.5" rx="0.7" ${GB}/><rect x="8.3" y="14.7" width="4.8" height="1.5" rx="0.7" ${GH}/></g>`
      ),
      stencil: `<defs><mask id="__GID__-m1" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><g data-part="lines" fill="#000"><rect x="8.3" y="7.5" width="7.4" height="1.6" rx="0.8"/><rect x="8.3" y="11.1" width="7.4" height="1.6" rx="0.8"/><rect x="8.3" y="14.7" width="4.9" height="1.6" rx="0.8"/></g></mask></defs><g data-part="paper" fill="currentColor" mask="url(#__GID__-m1)"><path d="M4.75 5.25A2.5 2.5 0 0 1 7.25 2.75H11.2V20.5L9.99 20.87A0.6 0.6 0 0 1 9.17 20.87L7.58 19.38A0.6 0.6 0 0 0 6.76 19.38L5.76 20.31A0.6 0.6 0 0 1 4.75 19.87Z"/><path d="M12.8 2.75H16.75A2.5 2.5 0 0 1 19.25 5.25V19.87A0.6 0.6 0 0 1 18.24 20.31L17.24 19.38A0.6 0.6 0 0 0 16.42 19.38L14.83 20.87A0.6 0.6 0 0 1 14.01 20.87L12.8 20.5Z"/></g>`,
      hardware: `<path data-part="paper" d="M4.75 5.25A2.5 2.5 0 0 1 7.25 2.75H16.75A2.5 2.5 0 0 1 19.25 5.25V19.87A0.6 0.6 0 0 1 18.24 20.31L17.24 19.38A0.6 0.6 0 0 0 16.42 19.38L14.83 20.87A0.6 0.6 0 0 1 14.01 20.87L12.41 19.38A0.6 0.6 0 0 0 11.59 19.38L9.99 20.87A0.6 0.6 0 0 1 9.17 20.87L7.58 19.38A0.6 0.6 0 0 0 6.76 19.38L5.76 20.31A0.6 0.6 0 0 1 4.75 19.87Z" ${HL}/><g data-part="lines" stroke="#52525b" stroke-width="1.35" stroke-linecap="round"><line x1="8.5" y1="8.2" x2="15.5" y2="8.2"/><line x1="8.5" y1="11.8" x2="15.5" y2="11.8"/></g><line data-part="lines" x1="8.5" y1="15.4" x2="13" y2="15.4" stroke="#ff6b35" stroke-width="1.5" stroke-linecap="round"/>`,
      relief: `<g data-part="paper"><path transform="translate(1.4,1.4)" d="M4.75 5.25A2.5 2.5 0 0 1 7.25 2.75H16.75A2.5 2.5 0 0 1 19.25 5.25V19.87A0.6 0.6 0 0 1 18.24 20.31L17.24 19.38A0.6 0.6 0 0 0 16.42 19.38L14.83 20.87A0.6 0.6 0 0 1 14.01 20.87L12.41 19.38A0.6 0.6 0 0 0 11.59 19.38L9.99 20.87A0.6 0.6 0 0 1 9.17 20.87L7.58 19.38A0.6 0.6 0 0 0 6.76 19.38L5.76 20.31A0.6 0.6 0 0 1 4.75 19.87Z" ${RS}/><path d="M4.75 5.25A2.5 2.5 0 0 1 7.25 2.75H16.75A2.5 2.5 0 0 1 19.25 5.25V19.87A0.6 0.6 0 0 1 18.24 20.31L17.24 19.38A0.6 0.6 0 0 0 16.42 19.38L14.83 20.87A0.6 0.6 0 0 1 14.01 20.87L12.41 19.38A0.6 0.6 0 0 0 11.59 19.38L9.99 20.87A0.6 0.6 0 0 1 9.17 20.87L7.58 19.38A0.6 0.6 0 0 0 6.76 19.38L5.76 20.31A0.6 0.6 0 0 1 4.75 19.87Z" ${RF}/></g><g data-part="lines" ${RF_LINE}><line x1="8.5" y1="8.2" x2="15.5" y2="8.2"/><line x1="8.5" y1="11.8" x2="15.5" y2="11.8"/><line x1="8.5" y1="15.4" x2="13" y2="15.4"/></g>`,
    },
  },
];
