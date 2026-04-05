import { ImageResponse } from "next/og";
import { site } from "@/content/landing";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #f7f5f2 0%, #e8f0ec 100%)",
          color: "#1c2b24",
          padding: 64,
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 600,
            letterSpacing: -1,
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.15,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            color: "#5c6d64",
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.35,
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
