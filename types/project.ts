export interface ProjectStat {
  label: string;
  value: string;
}

export interface ProjectDecision {
  title: string;
  detail: string;
}

export type ProjectStatus = "live" | "in-progress" | "archived";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  status: ProjectStatus;
  techStack: string[];
  stats: ProjectStat[];
  links: {
    github?: string;
    live?: string;
  };
  problem: string;
  approach: string[];
  keyDecisions: ProjectDecision[];
  outcomes?: string[];
  featured?: {
    screenshot?: {
      src: string;
      width: number;
      height: number;
      lossless?: boolean;
      alt: string;
    };
    problem: string;
    contribution: string;
    decision: string;
    result: string;
  };
}

export interface AdditionalProject {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  github: string;
  live?: string;
}
