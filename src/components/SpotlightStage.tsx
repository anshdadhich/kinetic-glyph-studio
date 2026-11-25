import { useId, useMemo, useRef } from "react";
import { Play, Copy, Volume2 } from "lucide-react";
import { IconDef, StyleDef } from "../data/icons";
import { triggerChoreography } from "../physics/spring";
import { initAudio, triggerSound } from "../audio/foley";

interface SpotlightStageProps {
  icon: IconDef;
  styleDef: StyleDef;
  onCopySvg: (svgEl: SVGSVGElement | null, styleId: StyleDef["id"], label: string) => void;
}

export function SpotlightStage({ icon, styleDef, onCopySvg }: SpotlightStageProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const gid = useId().replace(/:/g, "");
  const svgMarkup = useMemo(
    () => icon.svgs[styleDef.id].replace(/__GID__/g, gid),
    [icon.svgs, styleDef.id, gid]
  );

  const handleReplay = () => {
    initAudio();
    triggerChoreography(icon.name, svgRef.current);
    triggerSound(icon.name, btnRef.current);
  };

  return (
    <section
      id="stage"
      aria-label="Active icon spotlight"
      className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6 transition-colors"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <button
            ref={btnRef}
            type="button"
            onClick={handleReplay}
            aria-label={`Replay ${icon.label} in ${styleDef.label} style`}
            className="group relative grid h-20 w-20 shrink-0 place-items-center rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--icon-color)] cursor-pointer transition-transform active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)]"
          >
            <svg
              ref={svgRef}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="icon-svg h-12 w-12 overflow-visible pointer-events-none"
              dangerouslySetInnerHTML={{ __html: svgMarkup }}
            />
          </button>

          <div className="min-w-0 space-y-1.5">
            <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
              <h2 className="font-display text-lg font-semibold tracking-tight text-[var(--text)]">
                {icon.label}
              </h2>
              <span className="text-xs text-[var(--muted)]" aria-hidden="true">
                ·
              </span>
              <span className="text-xs font-medium text-[var(--muted)]">
                {styleDef.label}
              </span>
            </div>

            <p className="text-sm text-[var(--text)] leading-snug">
              {icon.motionSummary}
            </p>

            <p className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
              <Volume2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{icon.soundSummary}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={handleReplay}
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-4 py-2 text-xs font-medium text-[var(--accent-text)] cursor-pointer transition-opacity hover:opacity-90 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)]"
          >
            <Play className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Replay Action</span>
          </button>

          <button
            type="button"
            onClick={() => onCopySvg(svgRef.current, styleDef.id, `${icon.label} (${styleDef.label})`)}
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-2 text-xs font-medium text-[var(--text)] cursor-pointer transition-colors hover:bg-[var(--bg)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)]"
          >
            <Copy className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Copy SVG</span>
          </button>
        </div>
      </div>
    </section>
  );
}
