import { ImageResponse } from "next/og";

export const alt = "Abdul Rauf — Full Stack Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#FAFAF7",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 56,
            left: 56,
            width: 48,
            height: 48,
            borderTop: "3px solid #B5602F",
            borderLeft: "3px solid #B5602F",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 56,
            right: 56,
            width: 48,
            height: 48,
            borderBottom: "3px solid #B5602F",
            borderRight: "3px solid #B5602F",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#B5602F",
          }}
        >
          Full Stack Web Developer
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            color: "#17140F",
            marginTop: 20,
          }}
        >
          Abdul Rauf
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#6B655A",
            marginTop: 24,
            maxWidth: 800,
          }}
        >
          Building production-grade web applications across the full stack.
        </div>
      </div>
    ),
    size
  );
}
