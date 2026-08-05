export interface Experience {
  id: number;
  role: string;
  company: string;
  type: string;
  period: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}
