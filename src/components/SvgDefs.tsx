export function getMasterDefsInner(_isDark = false): string {
  const back1 = "var(--g-back-1, #5b5b5e)";
  const back2 = "var(--g-back-2, #161617)";
  const frost1 = "var(--g-frost-1, rgba(227, 227, 229, 0.62))";
  const frost2 = "var(--g-frost-2, rgba(187, 187, 192, 0.62))";
  const hi1 = "var(--g-highlight-1, rgba(251, 251, 252, 0.96))";
  const hi2 = "var(--g-highlight-2, rgba(217, 217, 222, 0.96))";
  const rim1 = "rgba(255, 255, 255, 0.98)";
  const rim2 = "rgba(255, 255, 255, 0)";

  return `
  <!-- Glass: Optical Frosted Acrylic over Dark Charcoal -->
  <linearGradient id="g-back" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="${back1}" />
    <stop offset="100%" stop-color="${back2}" />
  </linearGradient>
  <linearGradient id="g-frost" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="${frost1}" />
    <stop offset="100%" stop-color="${frost2}" />
  </linearGradient>
  <linearGradient id="g-highlight" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="${hi1}" />
    <stop offset="100%" stop-color="${hi2}" />
  </linearGradient>
  <linearGradient id="g-rim" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="${rim1}" />
    <stop offset="68%" stop-color="${rim2}" />
  </linearGradient>
  <filter id="g-blur" x="-12" y="-12" width="48" height="48" filterUnits="userSpaceOnUse">
    <feGaussianBlur stdDeviation="1.35" />
  </filter>
  <!-- Tactile Hardware -->
  <linearGradient id="hw-light" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0%" stop-color="#f4f4f5" />
    <stop offset="100%" stop-color="#d4d4d8" />
  </linearGradient>
  <linearGradient id="hw-mid" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0%" stop-color="#a1a1aa" />
    <stop offset="100%" stop-color="#71717a" />
  </linearGradient>
  <linearGradient id="hw-dark" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0%" stop-color="#3f3f46" />
    <stop offset="100%" stop-color="#18181b" />
  </linearGradient>
  <linearGradient id="hw-accent" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#ff6b35" />
    <stop offset="100%" stop-color="#ea3800" />
  </linearGradient>
`;
}

export function SvgDefs() {
  return (
    <svg
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
      aria-hidden="true"
    >
      <defs id="master-defs">
        {/* Glass: Optical Frosted Acrylic over Dark Charcoal */}
        <linearGradient id="g-back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" style={{ stopColor: "var(--g-back-1)" }} />
          <stop offset="100%" style={{ stopColor: "var(--g-back-2)" }} />
        </linearGradient>
        <linearGradient id="g-frost" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" style={{ stopColor: "var(--g-frost-1)" }} />
          <stop offset="100%" style={{ stopColor: "var(--g-frost-2)" }} />
        </linearGradient>
        <linearGradient id="g-highlight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" style={{ stopColor: "var(--g-highlight-1)" }} />
          <stop offset="100%" style={{ stopColor: "var(--g-highlight-2)" }} />
        </linearGradient>
        <linearGradient id="g-rim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" style={{ stopColor: "var(--g-rim-1)" }} />
          <stop offset="68%" style={{ stopColor: "var(--g-rim-2)" }} />
        </linearGradient>
        <filter id="g-blur" x="-12" y="-12" width="48" height="48" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="1.35" />
        </filter>
        {/* Tactile Hardware */}
        <linearGradient id="hw-light" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#f4f4f5" />
          <stop offset="100%" stopColor="#d4d4d8" />
        </linearGradient>
        <linearGradient id="hw-mid" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#a1a1aa" />
          <stop offset="100%" stopColor="#71717a" />
        </linearGradient>
        <linearGradient id="hw-dark" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#3f3f46" />
          <stop offset="100%" stopColor="#18181b" />
        </linearGradient>
        <linearGradient id="hw-accent" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff6b35" />
          <stop offset="100%" stopColor="#ea3800" />
        </linearGradient>
      </defs>
    </svg>
  );
}
