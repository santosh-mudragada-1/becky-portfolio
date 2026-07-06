import Link from "next/link";

import { Button } from "@/components/ui/button";

/**
 * Hero v1 — "Big Type Poster". Name at maximum volume, one primary word, dry
 * one-liner underneath. The name and the supporting copy live in separate,
 * clearly-gapped blocks so nothing ever collides with the giant type.
 */
export function HeroPoster() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-center gap-10 overflow-hidden px-5 py-20 sm:px-8">
      <div>
        <p className="eyebrow animate-fade-up">
          Product Manager · 3+ yrs · professional overthinker
        </p>
        <h1 className="mt-5 font-poster text-[clamp(3rem,13vw,11rem)] uppercase leading-[0.88] tracking-tight text-foreground">
          <span className="block animate-fade-up [animation-delay:60ms]">
            Banshika
          </span>
          <span className="block animate-fade-up text-primary [animation-delay:120ms]">
            Kejriwal
          </span>
        </h1>
      </div>

      <div className="flex flex-col gap-6 animate-fade-up [animation-delay:200ms] md:flex-row md:items-end md:justify-between">
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
