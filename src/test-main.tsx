import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Heart } from "./components/Icon";
import { STYLES, StyleId } from "./data/icons";
import "./index.css";

function TestPage() {
  const [variant, setVariant] = useState<StyleId>("solid");

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px", fontFamily: "Inter, sans-serif" }}>
      <h1 style={{ fontSize: 32, fontWeight: 600, margin: 0 }}>Component test</h1>
      <p style={{ color: "#737373", marginTop: 8 }}>
        A real component, not pasted SVG. Hover to animate and hear it. Click to replay.
      </p>

      <div
        style={{
          marginTop: 32,
          minHeight: 220,
          borderRadius: 24,
          background: "#f5f5f7",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Heart variant={variant} size={96} animate sound />
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 24 }}>
        {STYLES.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setVariant(s.id)}
            style={{
              border: 0,
              cursor: "pointer",
              borderRadius: 999,
              padding: "8px 14px",
              font: "500 13px Inter, sans-serif",
              background: variant === s.id ? "#0a0a0a" : "#f5f5f7",
              color: variant === s.id ? "#fff" : "#0a0a0a",
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      <pre
        style={{
          marginTop: 24,
          padding: 18,
          borderRadius: 16,
          background: "#f5f5f7",
          fontFamily: "ui-monospace, Menlo, monospace",
          fontSize: 13,
          overflowX: "auto",
        }}
      >
        {`<Heart variant="${variant}" animate sound />`}
      </pre>
      <a href="/" style={{ color: "#737373", fontSize: 13 }}>Back to site</a>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<TestPage />);
