import Link from "next/link";

import { Button } from "@/components/ui/button";

/**
 * Hero v1 — "Big Type Poster". Name at maximum volume, one tangerine word,
 * dry one-liner underneath. Loud, confident, almost no furniture.
 */
export function HeroPoster() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-center overflow-hidden px-5 py-16 sm:px-8">
      <p className="eyebrow animate-fade-up">
        Product Manager · 3+ yrs · professional overthinker
      </p>

      <h1 className="mt-6 font-poster text-[clamp(3rem,15.5vw,13rem)] uppercase leading-[0.82] tracking-tight text-foreground">
        <span className="block animate-fade-up [animation-delay:60ms]">
          Banshika
        </span>
        <span className="block animate-fade-up text-primary [animation-delay:120ms]">
          Kejriwal
        </span>
      </h1>

      <div className="mt-10 flex flex-col gap-6 animate-fade-up [animation-delay:200ms] md:flex-row md:items-end md:justify-between">
        <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
          I turn “wouldn&apos;t it be cool if…” into products people actually
          ship with. Then I take a very well-earned nap. Friends call me{" "}
          <span className="marker font-semibold">Becky</span>.
        </p>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="#projects">See the receipts</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#contact">Say hi 👋</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
