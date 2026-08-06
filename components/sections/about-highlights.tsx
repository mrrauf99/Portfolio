"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Database, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useMotionPreset } from "@/hooks/use-motion-props";

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Full Stack",
    desc: "I work across the stack: React on the frontend, Node.js and Express on the backend.",
  },
  {
    icon: Layers,
    title: "Modern Architecture",
    desc: "I design with clean code and separation of concerns in mind, whether it's REST APIs, component trees, or database schemas.",
  },
  {
    icon: Database,
    title: "Database-Driven",
    desc: "Experienced with both relational (PostgreSQL) and NoSQL (MongoDB) databases, with a focus on efficient data modeling.",
  },
  {
    icon: Brain,
    title: "Beyond the Web",
    desc: "I've also built a bot detection system driven by behavioral heuristics and a disease-prediction model using scikit-learn.",
  },
];

export function AboutHighlights() {
  const fade = useMotionPreset({ y: 24 });
  const baseDelay = fade.transition.delay ?? 0;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {HIGHLIGHTS.map((item, index) => (
        <motion.div
          key={item.title}
          initial={fade.initial}
          whileInView={fade.visible}
          viewport={{ once: true }}
          transition={{ ...fade.transition, delay: baseDelay + index * 0.1 }}
        >
          <Card hover className="h-full p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-border text-accent">
              <item.icon size={20} aria-hidden="true" />
            </div>
            <h4 className="mt-4 text-sm font-medium text-text">{item.title}</h4>
            <p className="mt-2 text-xs leading-relaxed text-text-muted">{item.desc}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
