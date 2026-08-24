"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Database, Layers } from "lucide-react";
import { useMotionPreset, withStagger } from "@/hooks/use-motion-props";

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

/**
 * A hairline-divided list rather than a 2x2 grid of bordered cards — four
 * boxes of icon/heading/text read as page scaffolding, not content. The
 * divider rhythm matches the Experience timeline instead of introducing a
 * second container style.
 */
export function AboutHighlights() {
  const fade = useMotionPreset({ y: 24 });

  return (
    <div className="flex flex-col divide-y divide-border">
      {HIGHLIGHTS.map((item, index) => (
        <motion.div
          key={item.title}
          initial={fade.initial}
          whileInView={fade.visible}
          viewport={{ once: true }}
          transition={withStagger(fade.transition, index, 0.1)}
          className="flex gap-4 py-5 first:pt-0 last:pb-0"
        >
          <item.icon size={20} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
          <div>
            <h4 className="text-sm font-medium text-text">{item.title}</h4>
            <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
