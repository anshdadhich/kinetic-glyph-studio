import { useCallback, useId, useMemo, useRef, type CSSProperties } from "react";
import { ICONS, STYLES, StyleId, IconDef, getSvg } from "../data/icons";
import { getMasterDefsInner } from "./SvgDefs";
import { initAudio, triggerSound } from "../audio/foley";
import { triggerChoreography } from "../physics/spring";

export interface IconProps {
  name?: string;
  variant?: StyleId;
  size?: number;
  animate?: boolean;
  sound?: boolean;
  className?: string;
  style?: CSSProperties;
}

/** Render any icon in any of the seven variants, with optional motion and sound. */
export function Icon({
  name = "heart",
  variant = "outline",
  size = 24,
  animate = false,
  sound = false,
  className,
  style,
}: IconProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const gid = useId().replace(/:/g, "");
  const icon: IconDef = useMemo(
    () => ICONS.find((ic) => ic.name === name) ?? ICONS[0],
    [name]
  );
  const markup = useMemo(
    () => getSvg(icon, variant).replace(/__GID__/g, gid),
    [icon, variant, gid]
  );
  const needsDefs = variant === "glass" || variant === "hardware";

  const play = useCallback(() => {
    initAudio();
    triggerChoreography(icon.name, svgRef.current);
    if (sound) triggerSound(icon.name, btnRef.current);
  }, [icon.name, sound]);

  const svg = (
    <svg
      ref={svgRef}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      className={`icon-svg ${className ?? ""}`}
      style={{ overflow: "visible", pointerEvents: "visiblePainted", ...style }}
      onPointerEnter={play}
      aria-hidden="true"
    >
      {needsDefs && <defs dangerouslySetInnerHTML={{ __html: getMasterDefsInner(false).trim() }} />}
      <g dangerouslySetInnerHTML={{ __html: markup }} />
    </svg>
  );

  if (!animate && !sound) return svg;

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={play}
      style={{ pointerEvents: "none" }}
      className="inline-grid place-items-center"
      aria-label={`${icon.label} in ${variant} style`}
    >
      {svg}
    </button>
  );
}

/** Convenience wrapper so `<Heart variant="glass" />` works as documented. */
export function Heart(props: Omit<IconProps, "name">) {
  return <Icon name="heart" {...props} />;
}

export function useVariants() {
  return STYLES.map((s) => s.id);
}
