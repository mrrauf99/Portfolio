"use client";

import { Card } from "@/components/ui/card";
import { useAnimatedCounter } from "@/hooks/use-animated-counter";

type StatCounterProps = {
  label: string;
  value: number;
  suffix?: string;
};

export function StatCounter({ label, value, suffix }: StatCounterProps) {
  const { count, ref } = useAnimatedCounter(value, 1800);

  return (
    <Card className="p-6 text-center">
      <div ref={ref} className="text-4xl font-medium text-accent">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-text-muted">{label}</div>
    </Card>
  );
}
