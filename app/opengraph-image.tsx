import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Alexandra Hockett — Full Stack Developer & AI Integration Specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #000319 0%, #0d0f2d 50%, #000319 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Purple glow top-left */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)",
          }}
        />
        {/* Purple glow bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: "-120px",
            right: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(139,92,246,0.15)",
            border: "1px solid rgba(139,92,246,0.4)",
            borderRadius: "999px",
            padding: "8px 20px",
            marginBottom: "32px",
          }}
        >
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80" }} />
          <span style={{ color: "#c4b5fd", fontSize: "18px", letterSpacing: "0.05em" }}>
            Open to Work · Remote
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          Alexandra Hockett
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "28px",
            color: "#a78bfa",
            fontWeight: 500,
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Full Stack Developer &amp; AI Integration Specialist
        </div>

        {/* Tech pills */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", maxWidth: "800px" }}>
          {["Next.js", "React", "TypeScript", "AI / Claude", "Supabase", "Tailwind"].map((tech) => (
            <div
              key={tech}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "8px",
                padding: "6px 16px",
                color: "rgba(255,255,255,0.7)",
                fontSize: "18px",
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            color: "rgba(255,255,255,0.25)",
            fontSize: "18px",
            letterSpacing: "0.05em",
          }}
        >
          alexandrahockett.com
        </div>
      </div>
    ),
    { ...size }
  );
}
