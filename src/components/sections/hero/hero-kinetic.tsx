import Link from "next/link";

import { Button } from "@/components/ui/button";

/**
 * Hero v5 — "Kinetic". Name up top, then a full-bleed marquee band of moods &
 * skills scrolling forever. Motion is the hook; freezes under reduced-motion.
 */
const ticker = [
  "PRODUCT MANAGER",
  "MEME CONNOISSEUR",
  "COFFEE DEPENDENT",
  "NAP ENTHUSIAST",
  "SHIPS FAST",
  "SAAS · AI · B2C",
  "OVERTHINKER",
  "CHESS NERD",
];

export function HeroKinetic() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center gap-10 overflow-hidden py-16">
      <div className="container-px mx-auto w-full max-w-6xl">
        <p className="eyebrow animate-fade-up">Banshika Kejriwal · 3+ years</p>
        <h1 className="mt-4 font-poster text-[clamp(3rem,16vw,13rem)] uppercase leading-[0.82] tracking-tight text-foreground animate-fade-up [animation-delay:80ms]">
          Call me <span className="text-primary">Becky</span>
        </h1>
      </div>

      {/* Full-bleed marquee band */}
      <div
        className="group flex -rotate-1 gap-0 overflow-hidden border-y-2 border-foreground bg-primary py-4 select-none"
        aria-hidden
      >
        <div className="flex w-max shrink-0 motion-safe:animate-[marquee_28s_linear_infinite]">
          {[0, 1].map((dup) =>
            ticker.map((word) => (
              <span
                key={`${dup}-${word}`}
                className="flex items-center gap-6 pr-6 font-poster text-2xl uppercase tracking-wide text-primary-foreground sm:text-4xl"
              >
                {word}
                <span className="text-primary-foreground/60">✦</span>
              </span>
            ))
          )}
        </div>
      </div>

      <div className="container-px mx-auto flex w-full max-w-6xl flex-col gap-5 animate-fade-up [animation-delay:200ms] md:flex-row md:items-center md:justify-between">
        <p className="max-w-md text-lg text-muted-foreground">
          I build products across SaaS, AI and consumer — and yes, I read the
          analytics for fun. Weird flex, but it ships.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="#projects">See what I&apos;ve shipped</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#contact">Ping me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
