import { ImageResponse } from "next/og";
import { projects } from "@/data/projects";

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
          Case Study
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 80,
            fontWeight: 700,
            color: "#17140F",
            marginTop: 20,
          }}
        >
          {project ? project.title : "Project"}
        </div>
        {project && (
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#6B655A",
              marginTop: 24,
              maxWidth: 900,
            }}
          >
            {project.tagline}
          </div>
        )}
      </div>
    ),
    size
  );
}
