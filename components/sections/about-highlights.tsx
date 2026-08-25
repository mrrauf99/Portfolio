"use client";

import { Brain, Code2, Database, Layers } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Full Stack",
    desc: "React on the frontend, Node.js and Express on the backend.",
  },
  {
    icon: Layers,
    title: "Modern Architecture",
    desc: "Clean code and separation of concerns, across APIs, components, and schemas.",
  },
  {
    icon: Database,
    title: "Database-Driven",
    desc: "Relational (PostgreSQL) and NoSQL (MongoDB), with a focus on efficient data modeling.",
  },
  {
    icon: Brain,
    title: "Beyond the Web",
    desc: "A bot detection system using behavioral heuristics, plus a scikit-learn disease-prediction model.",
  },
];

/** Core technical highlights list with stagger animation */
export function AboutHighlights() {
  const { ref, isInView } = useInView({ once: true, rootMargin: "-40px" });

  return (
    <div ref={ref} className="flex flex-col divide-y divide-border">
      {HIGHLIGHTS.map((item, index) => (
        <div
          key={item.title}
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(16px)",
            transition: `opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
          }}
          className="flex gap-4 py-5 first:pt-0 last:pb-0"
        >
          <item.icon size={20} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
          <div>
            <h4 className="text-sm font-medium text-text">{item.title}</h4>
            <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

