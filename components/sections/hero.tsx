import { FileText } from "lucide-react";
import Image from "next/image";
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
import { HeroTypewriter } from "@/components/sections/hero-typewriter";

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
        <div>
          <h1 className="animate-[fade-up_0.7s_ease-out_both] text-5xl leading-[1.1] font-medium text-text sm:text-6xl lg:text-7xl">
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
            <Button href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText size={16} aria-hidden="true" />
              View Resume
              <span className="sr-only"> (opens in new tab)</span>
            </Button>
            <Button
              variant="outline"
              href="https://github.com/mrrauf99"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Abdul Rauf's GitHub profile"
            >
              <FaGithub size={16} aria-hidden="true" />
              GitHub
            </Button>
            <Button
              variant="outline"
              href="https://www.linkedin.com/in/abdulrauf-dev/"
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
            className="mt-10 flex flex-wrap animate-[fade-up_0.7s_ease-out_both] items-center gap-5 text-text-muted [animation-delay:400ms]"
          >
            {TECH_STACK.map(({ Icon, label }) => (
              <li key={label} title={label} className="transition-colors duration-150 hover:text-accent">
                <Icon size={22} aria-hidden="true" />
                <span className="sr-only">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-[fade-up_0.7s_ease-out_both] [animation-delay:150ms]">
          <div
            className="absolute -top-3 -left-3 h-10 w-10 border-t-2 border-l-2 border-accent"
            aria-hidden="true"
          />
          <div
            className="absolute -right-3 -bottom-3 h-10 w-10 border-r-2 border-b-2 border-accent"
            aria-hidden="true"
          />
          <div className="aspect-square overflow-hidden rounded-md border border-border">
            <Image
              src="/Abdul_Rauf.jpeg"
              alt="Abdul Rauf, Full Stack Web Developer"
              width={480}
              height={480}
              sizes="(min-width: 1024px) 24rem, (min-width: 640px) 20rem, 16rem"
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
