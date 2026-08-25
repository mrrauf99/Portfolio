"use client";

import { StatCounter } from "@/components/sections/stat-counter";
import { useInView } from "@/hooks/use-in-view";
import type { Stat } from "@/types/experience";

export function AboutStats({ stats }: { stats: Stat[] }) {
  const { ref, isInView } = useInView({ once: true, rootMargin: "-40px" });

  return (
    <div ref={ref} className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(16px)",
            transition: `opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
          }}
        >
          <StatCounter label={stat.label} value={stat.value} suffix={stat.suffix} />
        </div>
      ))}
    </div>
  );
}

