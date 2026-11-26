import { memo, useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { ICONS, STYLES, IconDef, StyleId } from "../data/icons";
import { copyText } from "../clipboard";
import { standaloneSvg } from "./LibraryUI";
import { initAudio, triggerSound } from "../audio/foley";
import { triggerChoreography } from "../physics/spring";
import "../docs.css";

const LOOKS: Record<StyleId, string> = {
  outline: "Uniform thin strokes with round ends",
  solid: "Filled shapes with cut-out details",
  duotone: "The outline over a 20% fill",
  glass: "Frosted panes over dark pieces, with a lit edge",
  stencil: "Flat laser-cut shapes with bridges",
  hardware: "Brushed metal and matte ABS with an orange accent",
  relief: "A raised face with an offset architectural shadow",
};

const DEMO_NAMES = ["camera", "home", "rocket", "umbrella"];

interface DemoGlyphProps {
  icon: IconDef;
  variant: StyleId;
  onCopied: (message: string) => void;
}

const DemoGlyph = memo(function DemoGlyph({ icon, variant, onCopied }: DemoGlyphProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const gid = useId().replace(/:/g, "");
  const markup = useMemo(
    () => icon.svgs[variant].replace(/__GID__/g, gid),
    [icon, variant, gid]
  );

  const play = useCallback(() => {
    initAudio();
    triggerChoreography(icon.name, svgRef.current);
    triggerSound(icon.name, btnRef.current);
  }, [icon.name]);

  const copy = useCallback(async () => {
    play();
    const ok = await copyText(standaloneSvg(icon, variant));
    onCopied(ok ? `Copied ${icon.label} (${variant}) SVG` : "Clipboard unavailable");
  }, [icon, onCopied, play, variant]);

  return (
    <button
      ref={btnRef}
      type="button"
      className="doc-demo-icon"
      onClick={copy}
      onPointerEnter={play}
      aria-label={`Play ${icon.label}, click to copy SVG`}
      title={`${icon.label}, click to copy SVG`}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="currentColor"
        data-variant={variant}
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: markup }}
      />
    </button>
  );
});

const RAIL: Array<{ label: string; href: string; open?: boolean; pages: Array<[string, string, boolean?]> }> = [
  { label: "Begin", href: "/", pages: [["Overview", "/"], ["Library", "/icons"]] },
  { label: "Build with", href: "/icons", pages: [["Icon library", "/icons"], ["Copy SVG", "/icons"]] },
  {
    label: "Look",
    href: "/docs/variants",
    open: true,
    pages: [
      ["Styles", "/docs/variants", true],
      ["All icons", "/icons"],
      ["Sponsors", "/#sponsors"],
    ],
  },
  { label: "Motion and sound", href: "/icons", pages: [["Try every icon", "/icons"], ["Sound", "/icons"]] },
  { label: "Tools", href: "/icons", pages: [["Copy any SVG", "/icons"]] },
  { label: "About", href: "/", pages: [["Home", "/"], ["Pricing", "/#pricing"]] },
];

export default function DocsVariants() {
  const [toast, setToast] = useState<string | null>(null);
  const timer = useRef<number | null>(null);

  const demoIcons = useMemo(
    () => DEMO_NAMES.map((name) => ICONS.find((ic) => ic.name === name) ?? ICONS[0]),
    []
  );
  const code = useMemo(
    () => STYLES.map((s) => `<Heart variant="${s.id}" />`).join("\n"),
    []
  );

  useEffect(() => {
    initAudio();
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  const onCopied = useCallback((message: string) => {
    setToast(message);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setToast(null), 1600);
  }, []);

  const copyCode = useCallback(async (text: string) => {
    const ok = await copyText(text);
    onCopied(ok ? "Copied code" : "Clipboard unavailable");
  }, [onCopied]);

  return (
    <div className="docs">
      <header className="docs-header">
        <a href="/" className="docs-brand">
          <span className="docs-logo" aria-hidden="true">w</span>
          wiggle icons
        </a>
        <nav className="docs-top" aria-label="Site">
          <a href="/icons">Library</a>
          <a href="/docs/variants" aria-current="true">Docs</a>
          <a href="/#pricing">Pricing</a>
        </nav>
      </header>

      <div className="docs-frame">
        <nav className="rail" aria-label="Docs">
          {RAIL.map((section) => (
            <div className="rail-section" key={section.label} data-open={section.open ? "true" : undefined}>
              <a className="rail-head" href={section.href} aria-current={section.open ? "true" : undefined}>
                {section.label}
              </a>
              <div className="rail-fold">
                <ul className="rail-pages">
                  {section.pages.map(([label, href, current]) => (
                    <li key={label}>
                      <a href={href} aria-current={current ? "page" : undefined}>{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </nav>

        <main className="docs-main" id="content">
          <article>
            <h1 className="doc-title">Styles</h1>
            <p className="doc-lead">Outline, solid, duotone, glass, stencil, hardware and relief.</p>
            <div className="doc-body">
              <div className="doc-demo">
                {STYLES.map((style) => (
                  <div className="doc-demo-row" key={style.id}>
                    <span className="doc-demo-label">{style.id}</span>
                    {demoIcons.map((icon) => (
                      <DemoGlyph
                        key={icon.name}
                        icon={icon}
                        variant={style.id}
                        onCopied={onCopied}
                      />
                    ))}
                  </div>
                ))}
              </div>

              <div className="doc-table-wrap">
                <table className="doc-table">
                  <thead>
                    <tr><th>Variant</th><th>Looks like</th><th>Moves like</th></tr>
                  </thead>
                  <tbody>
                    {STYLES.map((s) => (
                      <tr key={s.id}>
                        <td><code>{s.id}</code></td>
                        <td>{LOOKS[s.id]}</td>
                        <td>{s.id === "glass" || s.id === "relief" ? "solid" : "outline"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="doc-code">
                <pre><code>{code}</code></pre>
                <button type="button" className="doc-copy" onClick={() => copyCode(code)}>Copy</button>
              </div>

              <h2>Switching</h2>
              <p>
                Changing <code>variant</code> redraws the icon on the spot. A common pattern is
                outline at rest and solid when active:
              </p>
              <div className="doc-code">
                <pre><code>{`<Heart variant={liked ? 'solid' : 'outline'} animate="click" sound />`}</code></pre>
                <button
                  type="button"
                  className="doc-copy"
                  onClick={() => copyCode(`<Heart variant={liked ? 'solid' : 'outline'} animate="click" sound />`)}
                >
                  Copy
                </button>
              </div>
              <p>
                Every icon here includes all seven variants. Click any glyph above to copy the
                standalone SVG of that variant, including its motion parts.
              </p>
            </div>

            <nav className="doc-pager" aria-label="More docs">
              <a className="doc-pager-back" href="/">Home</a>
              <a className="doc-pager-next" href="/icons">Icon library →</a>
            </nav>
          </article>
        </main>
      </div>

      {toast && <div className="doc-toast" role="status">{toast}</div>}
    </div>
  );
}
