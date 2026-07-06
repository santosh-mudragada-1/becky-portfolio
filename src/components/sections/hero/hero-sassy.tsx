import Link from "next/link";

import { Button } from "@/components/ui/button";

/**
 * Hero v4 — "Sassy Statement". One big sarcastic sentence carries the whole
 * hero. Clean, minimal, a single highlighter swipe. Lets the copy be the star.
 */
export function HeroSassy() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-5xl flex-col justify-center px-5 py-16 sm:px-8">
      <p className="eyebrow animate-fade-up">Banshika “Becky” Kejriwal</p>

      <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.25rem,7vw,5.5rem)] font-bold leading-[1.02] tracking-tight text-foreground animate-fade-up [animation-delay:80ms]">
        I make products people{" "}
        <span className="marker">actually use.</span> Revolutionary, I know.
      </h1>

      <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground animate-fade-up [animation-delay:160ms]">
        Product Manager, 3+ years deep across SaaS, AI and consumer. I do the
        strategy, the specs, the “why are we building this,” and the occasional
        chaotic Slack meme. Results included, drama optional.
      </p>

      <div className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:240ms]">
        <Button asChild size="lg">
          <Link href="#projects">Show me the work</Link>
        </Button>
        <Link
          href="#about"
          className="text-sm font-medium text-muted-foreground underline-offset-4 outline-none hover:text-foreground hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          …or the backstory
        </Link>
      </div>
    </section>
  );
}
