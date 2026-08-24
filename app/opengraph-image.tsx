import { ImageResponse } from "next/og";
import { ogFrame } from "@/lib/og-image";

export const alt = "Abdul Rauf — Full Stack Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    ogFrame({
      eyebrow: "Full Stack Web Developer",
      title: "Abdul Rauf",
      description: "Building production-grade web applications across the full stack.",
    }),
    size
  );
}
