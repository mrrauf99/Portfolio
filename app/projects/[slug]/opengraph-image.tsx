import { ImageResponse } from "next/og";
import { projects } from "@/data/projects";
import { ogFrame } from "@/lib/og-image";

export const alt = "Project case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  return new ImageResponse(
    ogFrame({
      eyebrow: "Case Study",
      title: project ? project.title : "Project",
      titleSize: 80,
      description: project?.tagline,
      descriptionMaxWidth: 900,
    }),
    size
  );
}
