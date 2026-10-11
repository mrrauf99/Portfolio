import { ArrowDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { HeroPortrait } from "@/components/sections/hero-portrait";
import { HeroTypewriter } from "@/components/sections/hero-typewriter";

export function Hero() {
  return (
    <section id="hero" className="scroll-mt-20 pt-32 pb-20 md:pt-40 md:pb-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="min-w-0">
          <h1 className="animate-[ink-focus_0.8s_cubic-bezier(0.16,1,0.3,1)_both] text-5xl leading-[1.1] font-medium text-text sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="text-accent">Abdul Rauf</span>
          </h1>
          <p className="mt-4 min-h-[2.5rem] animate-[fade-up_0.7s_ease-out_both] text-2xl font-medium text-text-muted [animation-delay:100ms] sm:text-3xl"><HeroTypewriter /></p>
          <p className="mt-6 max-w-lg animate-[fade-up_0.7s_ease-out_both] text-lg leading-relaxed text-text-muted [animation-delay:200ms]">
            Full stack developer building web apps, APIs, and the occasional ML project end to end, from database schema to UI. Currently open to full-time roles and freelance work.
          </p>
          <div className="mt-8 flex flex-wrap animate-[fade-up_0.7s_ease-out_both] gap-3 [animation-delay:300ms]">
            <Button href="/Resume.pdf" prefetch={false} target="_blank" rel="noopener noreferrer"><FileText size={16} aria-hidden="true" />View Resume<span className="sr-only"> (opens in new tab)</span></Button>
            <Button variant="outline" href="#projects">View work<ArrowDown size={16} aria-hidden="true" /></Button>
          </div>
        </div>
        <HeroPortrait />
      </Container>
    </section>
  );
}
