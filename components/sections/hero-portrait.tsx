import Image from "next/image";
import heroPortrait from "@/public/Abdul_Rauf.jpeg";

/**
 * Hero portrait with CSS fade-in and responsive sizing.
 */
export function HeroPortrait() {
  return (
    <div className="relative mx-auto w-full max-w-sm animate-[fade-up_0.7s_ease-out_both] [animation-delay:150ms]">
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
          sizes="(min-width: 1024px) 384px, (min-width: 640px) 320px, 90vw"
          className="h-full w-full object-cover object-top"
          priority
        />
      </div>
    </div>
  );
}
