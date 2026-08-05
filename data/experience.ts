import type { Experience, Stat } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Full Stack Web Developer",
    company: "Self Employed",
    type: "Freelance & Personal Projects",
    period: "Jan 2025 – Present",
    description:
      "Designed and shipped production-ready software across the full stack: from multi-role web platforms and real-time detection systems to mobile apps and ML-based health tools. Owned every phase: architecture, frontend, backend, database, and deployment.",
    achievements: [
      "Shipped Article Hub: a full-stack publishing platform with RBAC, JWT auth, and PostgreSQL",
      "Built BotGuard Lab: a bot detection platform using behavioral heuristics and real-time risk scoring",
      "Developed Symptom Checker AI: a machine learning healthcare assistant with 92%+ accuracy",
      "Created an on-device object detection mobile app using Flutter and TensorFlow Lite",
      "Delivered 16+ projects across web, desktop, mobile, and ML domains",
    ],
    tech: ["React", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Python", "C#", "Flutter"],
  },
  {
    id: 2,
    role: "Bachelor of Science in Computer Science",
    company: "University of Engineering and Technology (UET), Lahore",
    type: "Education",
    period: "2024 – 2028 (In Progress)",
    description:
      "Studying core computer science fundamentals including data structures, algorithms, database systems, software engineering, and machine learning at one of Pakistan's leading engineering universities.",
    achievements: [
      "Coursework in data structures, algorithms, and software engineering principles",
      "Applying machine learning techniques in academic and personal projects",
      "Building full-stack applications as part of project-based learning",
    ],
    tech: ["Python", "C++", "Data Structures", "Algorithms", "Database Systems", "Machine Learning"],
  },
];

export const stats: Stat[] = [
  { label: "Projects Built", value: 16, suffix: "+" },
  { label: "Technologies", value: 13, suffix: "+" },
  { label: "Years Active", value: 1, suffix: "+" },
  { label: "GitHub Repos", value: 20, suffix: "+" },
];
