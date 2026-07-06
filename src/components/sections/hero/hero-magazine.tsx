import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

/**
 * Hero v3 — "Magazine Cover" (upgraded). Becky is the cover star: masthead,
 * overlaid cover lines, an exclusive burst, price + barcode, and her photo
 * breaking the frame. Editorial, dense, and tongue-in-cheek.
 */
const coverLines = [
  { kicker: "The lead story", title: "How to ship 6 products & still nap daily" },
  { kicker: "Field notes", title: "SaaS, AI & consumer: a chaotic love triangle" },
  { kicker: "Hot take", title: "“It depends” is a complete sentence" },
  { kicker: "Also inside", title: "37 tabs open, 0 regrets" },
];

export function HeroMagazine() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl items-center px-4 py-14 sm:px-8">
      <div className="sticker relative w-full overflow-hidden rounded-2xl p-5 animate-fade-up sm:p-8">
        {/* Masthead */}
        <div className="flex items-start justify-between gap-4 border-b-2 border-foreground pb-3">
          <div>
            <p className="eyebrow">Product Manager Monthly</p>
            <h1 className="font-poster text-[clamp(3.5rem,15vw,11rem)] uppercase leading-[0.78] tracking-tight text-foreground">
              Becky
            </h1>
          </div>
          <div className="hidden shrink-0 text-right sm:block">
            <p className="font-mono text-[11px] text-muted-foreground">issue</p>
            <p className="font-poster text-5xl text-primary">#03</p>
            <p className="font-mono text-[11px] text-muted-foreground">
              3+ yrs · 2026
            </p>
          </div>
        </div>

        {/* Body: cover lines + cover star */}
        <div className="mt-5 grid items-center gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <ul className="order-2 grid gap-4 sm:grid-cols-2 md:order-1">
            {coverLines.map((line) => (
              <li key={line.title} className="group max-w-xs">
                <p className="eyebrow text-primary">{line.kicker}</p>
                <p className="mt-1 font-display text-lg font-bold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {line.title}
                </p>
              </li>
            ))}
          </ul>

          <figure className="group relative order-1 mx-auto w-full max-w-[16rem] md:order-2">
            {/* Exclusive burst */}
            <div className="absolute -left-3 top-2 z-10 -rotate-12 rounded-full bg-marker px-3 py-3 text-center font-display text-xs font-bold leading-tight text-marker-foreground shadow-sticker sm:-left-6">
              EXCLUSIVE
              <br />
              she naps
              <br />
              AND ships
            </div>
            <Image
              src="/images/becky-jacket.png"
              alt="Becky, this month's cover star"
              width={403}
              height={479}
              priority
              unoptimized
              className="h-auto w-full drop-shadow-2xl transition-transform duration-500 group-hover:-rotate-2 group-hover:scale-[1.03]"
            />
            <figcaption className="mt-2 text-center font-mono text-[11px] text-muted-foreground">
              cover star · dressed to ship
            </figcaption>
          </figure>
        </div>

        {/* Footer: barcode + price + CTAs */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t-2 border-foreground pt-4 sm:flex-row sm:items-center">
          <div className="flex items-end gap-3">
            <div aria-hidden className="flex h-9 items-end gap-[3px]">
              {[3, 1, 2, 1, 3, 2, 1, 2, 3, 1, 1, 2, 3, 2, 1, 3].map((w, i) => (
                <span
                  key={i}
                  className="h-full bg-foreground"
                  style={{ width: `${w}px` }}
                />
              ))}
            </div>
            <p className="font-mono text-[11px] leading-tight text-muted-foreground">
              price: priceless
              <br />
              (or one coffee)
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="#projects">Read the features</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="#contact">Write to the editor</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
