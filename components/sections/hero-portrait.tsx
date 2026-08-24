import Image from "next/image";
import heroPortrait from "@/public/Abdul_Rauf.jpeg";
import { HeroPortraitTilt } from "@/components/sections/hero-portrait-tilt-lazy";

/**
 * Same fade-up used by the paragraph/buttons/tech list, at its own slot in
 * the hero's stagger (between the subtitle at 100ms and the paragraph at
 * 200ms) — the portrait reads as part of the same entrance instead of a
 * separately-timed element. Pure CSS, not framer-motion: a JS-driven
 * animation renders invisible during SSR and only starts once React
 * hydrates, which visibly lagged the CSS-animated text. `placeholder="blur"`
 * covers the network gap for the actual image bytes with a same-frame
 * blurred preview instead of a blank box.
 *
 * The cursor tilt (HeroPortraitTilt) is a separate, purely client-side
 * layer on top: it starts at an identity transform, so hydration timing
 * never affects what's visible, only whether hovering it does anything yet.
 */
export function HeroPortrait() {
  return (
    <div className="relative mx-auto w-full max-w-sm animate-[fade-up_0.7s_ease-out_both] [animation-delay:150ms]">
      <HeroPortraitTilt>
        <div
          className="absolute -top-3 -left-3 h-10 w-10 border-t-2 border-l-2 border-accent"
          aria-hidden="true"
        />
        <div
          className="absolute -right-3 -bottom-3 h-10 w-10 border-r-2 border-b-2 border-accent"
          aria-hidden="true"
        />
        <div className="aspect-square overflow-hidden rounded-md border border-border shadow-elevated">
          <Image
            src={heroPortrait}
            alt="Abdul Rauf, Full Stack Web Developer"
            placeholder="blur"
            sizes="(min-width: 1024px) 24rem, (min-width: 640px) 20rem, 16rem"
            className="h-full w-full object-cover"
            preload
            fetchPriority="high"
          />
        </div>
      </HeroPortraitTilt>
    </div>
  );
}
