import type { IconType } from "react-icons";

export type SkillCategoryId = "frontend" | "backend" | "databases" | "languages" | "tools";

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
  level: number;
  /** True when the icon itself is a lettered wordmark (e.g. C++, C#), so pairing it with a text label reads as duplicated text. */
  iconIsWordmark?: boolean;
}

export interface SkillCategory {
  id: SkillCategoryId;
  title: string;
  skills: Skill[];
}
