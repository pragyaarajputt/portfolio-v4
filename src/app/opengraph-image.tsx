import { ImageResponse } from "next/og";

// The link preview on LinkedIn, WhatsApp, Slack and X, in the site's own look: cobalt band, lilac tag, lime accent.
export const alt = "Pragya Rajput, full-stack developer. I build the product, not just the page.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#2C63FE",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em" }}>pragya rajput</div>
          <div
            style={{
              display: "flex",
              padding: "8px 18px",
              borderRadius: 10,
              background: "#E0B9E2",
              color: "#141414",
              fontSize: 26,
              fontWeight: 600,
            }}
          >
            Full-stack developer
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 92, fontWeight: 600, lineHeight: 1, letterSpacing: "-0.045em", maxWidth: 1000 }}>
          I build the product, not just the page.
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26 }}>
          {["PolicyLens", "CreatorDesk", "PostDrip AI"].map((p) => (
            <div key={p} style={{ display: "flex", padding: "8px 18px", borderRadius: 999, background: "#ECFF18", color: "#141414", fontWeight: 600 }}>
              {p}
            </div>
          ))}
          <div style={{ display: "flex", marginLeft: "auto", opacity: 0.85 }}>Next.js · Node · PostgreSQL · AI</div>
        </div>
      </div>
    ),
    size,
  );
}
