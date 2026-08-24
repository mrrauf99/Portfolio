"use client";

import { motion } from "framer-motion";
import { StatCounter } from "@/components/sections/stat-counter";
import { useMotionPreset, withStagger } from "@/hooks/use-motion-props";
import type { Stat } from "@/types/experience";

export function AboutStats({ stats }: { stats: Stat[] }) {
  const fade = useMotionPreset({ y: 16 });

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={fade.initial}
          whileInView={fade.visible}
          viewport={{ once: true }}
          transition={withStagger(fade.transition, index, 0.1)}
        >
          <StatCounter label={stat.label} value={stat.value} suffix={stat.suffix} />
        </motion.div>
      ))}
    </div>
  );
}
