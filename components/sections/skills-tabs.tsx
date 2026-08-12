"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { skillCategories } from "@/data/skills";
import { useMotionPreset } from "@/hooks/use-motion-props";
import { getProficiencyLabel } from "@/lib/utils";

export function SkillsTabs() {
  const firstCategoryId = skillCategories[0]?.id ?? "frontend";
  const [activeCategory, setActiveCategory] = useState(firstCategoryId);
  const active = skillCategories.find((category) => category.id === activeCategory);

  const allUnique = useMemo(
    () =>
      skillCategories
        .flatMap((category) => category.skills)
        .filter((skill, index, arr) => arr.findIndex((s) => s.name === skill.name) === index),
    []
  );

  const panelFade = useMotionPreset({ duration: 0.3 });
  const cardFade = useMotionPreset({ y: 16, duration: 0.35 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <div>
      <div role="tablist" aria-label="Skill categories" className="flex flex-wrap gap-2">
        {skillCategories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              type="button"
              id={`skills-tab-${category.id}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`skills-panel-${category.id}`}
              onClick={() => setActiveCategory(category.id)}
              className={`cursor-pointer rounded-sm border px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                isActive
                  ? "border-accent text-accent"
                  : "border-border text-text-muted hover:text-text"
              }`}
            >
              {category.title} <span>({category.skills.length})</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key={active.id}
            id={`skills-panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`skills-tab-${active.id}`}
            initial={panelFade.initial}
            animate={panelFade.visible}
            exit={{ opacity: 0 }}
            transition={panelFade.transition}
            className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          >
            {active.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={cardFade.initial}
                animate={cardFade.visible}
                transition={{ ...cardFade.transition, delay: index * 0.05 }}
              >
                <Card hover className="p-5">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-sm border border-border">
                    <skill.icon style={{ color: skill.color, fontSize: "22px" }} aria-hidden="true" />
                  </div>
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-y-0.5">
                    <span className="text-sm font-medium text-text">{skill.name}</span>
                    <span className="shrink-0 text-xs text-text-muted">{getProficiencyLabel(skill.level)}</span>
                  </div>
                  <div
                    className="h-1.5 overflow-hidden rounded-full bg-border"
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${skill.name} proficiency ${skill.level}%`}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{
                        duration: prefersReducedMotion ? 0 : 1,
                        delay: prefersReducedMotion ? 0 : index * 0.05 + 0.15,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-accent"
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <Card className="mt-12 p-6">
        <p className="mb-5 text-center text-sm tracking-widest text-text-muted uppercase">
          All Technologies
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {allUnique.map((skill) => (
            <span
              key={skill.name}
              className="inline-flex items-center gap-2 rounded-sm border border-border px-3 py-1.5 text-xs text-text-muted"
            >
              <skill.icon
                style={{ color: skill.color, fontSize: skill.iconIsWordmark ? "20px" : "14px" }}
                aria-hidden="true"
              />
              {skill.iconIsWordmark ? <span className="sr-only">{skill.name}</span> : skill.name}
            </span>
          ))}
        </div>
      </Card>
    </div>
  );
}
