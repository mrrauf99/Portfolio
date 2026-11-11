import { ImageResponse } from "next/og";
import { ogFrame } from "@/lib/og-image";

export const alt = "Abdul Rauf — Full Stack Web Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    ogFrame({
      eyebrow: "Full Stack Web Engineer",
      title: "Abdul Rauf",
      description: "Websites, AI chatbots, virtual receptionists, and custom AI apps for businesses.",
    }),
    size
  );
}
