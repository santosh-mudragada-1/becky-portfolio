import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Hero v2 — "Sticker Bomb" (upgraded). A laptop-lid wall of stickers around a
 * loud name, plus a spinning certification seal and a taped photo. Every
 * sticker tilts and pops on hover. Maximal chaos, on purpose.
 */
const stickers: { text: string; className: string; rotate: string }[] = [
  { text: "caffeine-powered ☕", className: "bg-marker text-marker-foreground", rotate: "-rotate-6" },
  { text: "ships fast, naps faster", className: "bg-card text-foreground", rotate: "rotate-3" },
  { text: "meme certified", className: "bg-primary text-primary-foreground", rotate: "-rotate-2" },
  { text: "SaaS · AI · B2C", className: "bg-card text-foreground", rotate: "rotate-6" },
  { text: "chess > small talk", className: "bg-pop text-white", rotate: "rotate-2" },
  { text: "will bake for feedback 🧁", className: "bg-card text-foreground", rotate: "-rotate-3" },
  { text: "3+ yrs of “it depends”", className: "bg-marker text-marker-foreground", rotate: "rotate-1" },
];

function Seal() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="size-28 text-foreground motion-safe:animate-[spin_18s_linear_infinite]"
      aria-hidden
    >
      <defs>
        <path
          id="seal-path"
          d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
          fill="none"
        />
      </defs>
      <text className="fill-current font-mono text-[8.5px] uppercase tracking-[0.24em]">
        <textPath href="#seal-path">
          ★ certified meme lord ★ ships fast ★ naps faster
        </textPath>
      </text>
      <circle cx="50" cy="50" r="19" className="fill-primary" />
      <text
        x="50"
        y="55"
        textAnchor="middle"
        className="fill-primary-foreground font-poster text-[15px]"
      >
        PM
      </text>
    </svg>
  );
}

export function HeroSticker() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-5xl flex-col items-center justify-center gap-8 px-5 py-16 text-center sm:px-8">
      {/* Spinning seal — decorative */}
      <div className="absolute right-4 top-8 hidden md:block lg:right-0">
        <Seal />
      </div>

      {/* Taped photo — decorative */}
      <div className="absolute left-2 top-10 hidden -rotate-6 md:block">
        <div className="relative bg-white p-2 pb-6 shadow-md">
          <span
            aria-hidden
            className="absolute -top-2.5 left-1/2 h-5 w-16 -translate-x-1/2 -rotate-3 bg-marker/70"
          />
          <Image
            src="/images/becky-reading.png"
            alt=""
            width={400}
            height={498}
            unoptimized
            className="h-32 w-auto"
          />
          <p className="absolute inset-x-0 bottom-1 text-center font-mono text-[10px] text-neutral-500">
            exhibit A
          </p>
        </div>
      </div>

      <p className="eyebrow animate-fade-up">
        Product Manager · pretends to be organized
      </p>

      <h1 className="font-quirky text-[clamp(2.5rem,10vw,7rem)] font-bold leading-[0.95] tracking-tight text-foreground animate-fade-up [animation-delay:60ms]">
        Hey, I&apos;m <span className="text-primary">Becky</span>
      </h1>

      <ul className="flex max-w-3xl flex-wrap items-center justify-center gap-3 animate-fade-up [animation-delay:140ms]">
        {stickers.map((s) => (
          <li
            key={s.text}
            className={cn(
              "sticker cursor-default rounded-md px-3.5 py-1.5 font-mono text-sm font-medium transition-transform duration-200 hover:rotate-0 hover:scale-110",
              s.className,
              s.rotate
            )}
          >
            {s.text}
          </li>
        ))}
      </ul>

      <p className="max-w-md text-lg text-muted-foreground animate-fade-up [animation-delay:220ms]">
        Officially: Banshika Kejriwal, product manager. Unofficially: the person
        who turns chaos into roadmaps — and roadmaps into shipped things.
      </p>

      <div className="flex flex-wrap justify-center gap-3 animate-fade-up [animation-delay:300ms]">
        <Button asChild size="lg">
          <Link href="#projects">Poke around my work</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="#contact">Let&apos;s talk</Link>
        </Button>
      </div>
    </section>
  );
}
