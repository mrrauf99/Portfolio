import { FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiExpress,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { HeroPortrait } from "@/components/sections/hero-portrait";
import { HeroTypewriter } from "@/components/sections/hero-typewriter";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/constants";

const TECH_STACK = [
  { Icon: SiReact, label: "React" },
  { Icon: SiNodedotjs, label: "Node.js" },
  { Icon: SiJavascript, label: "JavaScript" },
  { Icon: SiMongodb, label: "MongoDB" },
  { Icon: SiPostgresql, label: "PostgreSQL" },
  { Icon: SiTailwindcss, label: "Tailwind CSS" },
  { Icon: SiExpress, label: "Express" },
  { Icon: SiGit, label: "Git" },
];

export function Hero() {
  return (
    <section id="hero" className="scroll-mt-20 pt-32 pb-20 md:pt-40 md:pb-28">
      <Container className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="min-w-0">
          <h1 className="animate-[ink-focus_0.8s_cubic-bezier(0.16,1,0.3,1)_both] text-5xl leading-[1.1] font-medium text-text sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="text-accent">Abdul Rauf</span>
          </h1>

          <p className="mt-4 min-h-[2.5rem] animate-[fade-up_0.7s_ease-out_both] text-2xl font-medium text-text-muted [animation-delay:100ms] sm:text-3xl">
            <HeroTypewriter />
          </p>

          <p className="mt-6 max-w-lg animate-[fade-up_0.7s_ease-out_both] text-lg leading-relaxed text-text-muted [animation-delay:200ms]">
            Full stack developer building web apps, APIs, and the occasional ML project end
            to end, from database schema to UI. Currently open to full-time roles and
            freelance work.
          </p>

          <div className="mt-8 flex flex-wrap animate-[fade-up_0.7s_ease-out_both] gap-3 [animation-delay:300ms]">
            <Button href="/Resume.pdf" prefetch={false} target="_blank" rel="noopener noreferrer">
              <FileText size={16} aria-hidden="true" />
              View Resume
              <span className="sr-only"> (opens in new tab)</span>
            </Button>
            <Button
              variant="outline"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Abdul Rauf's GitHub profile"
            >
              <FaGithub size={16} aria-hidden="true" />
              GitHub
            </Button>
            <Button
              variant="outline"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Abdul Rauf's LinkedIn profile"
            >
              <FaLinkedin size={16} aria-hidden="true" />
              LinkedIn
            </Button>
          </div>

          <ul
            aria-label="Core technologies"
            className="mt-10 flex flex-wrap items-center gap-5 text-text-muted"
          >
            {TECH_STACK.map(({ Icon, label }, index) => (
              <li
                key={label}
                title={label}
                style={{ animationDelay: `${400 + index * 40}ms` }}
                className="animate-[fade-up_0.5s_ease-out_both] transition-colors duration-150 hover:text-accent"
              >
                <Icon size={22} aria-hidden="true" />
                <span className="sr-only">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <HeroPortrait />
      </Container>
    </section>
  );
}
