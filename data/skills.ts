import { GrOracle } from "react-icons/gr";
import {
  SiCplusplus,
  SiCss,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import type { SkillCategory } from "@/types/skill";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB", level: 90 },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 92 },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26", level: 85 },
      { name: "CSS3", icon: SiCss, color: "#1572B6", level: 88 },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 80 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 95 },
      { name: "Express.js", icon: SiExpress, color: "var(--text)", level: 95 },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 95 },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", level: 80 },
      { name: "Oracle", icon: GrOracle, color: "#F80000", level: 80 },
    ],
  },
  {
    id: "languages",
    title: "Programming",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 92 },
      { name: "Python", icon: SiPython, color: "#3776AB", level: 72 },
      { name: "C++", icon: SiCplusplus, color: "#00599C", level: 75, iconIsWordmark: true },
      { name: "C#", icon: TbBrandCSharp, color: "#239120", level: 72, iconIsWordmark: true },
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032", level: 88 },
      { name: "GitHub", icon: SiGithub, color: "var(--text)", level: 90 },
      { name: "Docker", icon: SiDocker, color: "#2496ED", level: 80 },
    ],
  },
];
