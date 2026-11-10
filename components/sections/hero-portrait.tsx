import Image from "next/image";
import heroPortrait from "@/public/Abdul_Rauf.jpeg";

/**
 * Keep the LCP portrait visible immediately with responsive sizing.
 */
export function HeroPortrait() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
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
          sizes="(min-width: 416px) 384px, calc(100vw - 32px)"
          className="h-full w-full object-cover object-top"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </div>
  );
}
