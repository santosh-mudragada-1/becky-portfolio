import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

/**
 * About v2 — "A Day in the Life". A tongue-in-cheek daily schedule that builds
 * to the punchline: the sleeping photo. Puts the "I get tired working all day"
 * energy front and centre.
 */
const schedule = [
  { time: "08:00", emoji: "☕", note: "Coffee #1. Do not perceive me yet." },
  { time: "09:30", emoji: "🎧", note: "Standup. Nod thoughtfully. “Let's take it offline.”" },
  { time: "11:00", emoji: "🔁", note: "A “quick sync.” (Spoiler: 45 minutes.)" },
  { time: "13:00", emoji: "⚡", note: "Actual work happens. The magic hour." },
  { time: "15:00", emoji: "📉", note: "Coffee #3 and an existential roadmap review." },
  { time: "17:00", emoji: "😴", note: "Strategic recovery. See exhibit below. ↓" },
];

export function AboutDay() {
  return (
    <Section id="about">
      <Container>
        <header className="mb-8 max-w-2xl">
          <p className="eyebrow">About · a day in the life</p>
          <h2 className="mt-3 font-poster text-[clamp(2.5rem,8vw,5rem)] uppercase leading-[0.85] tracking-tight">
            A day in the <span className="text-primary">life</span>
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            High-velocity product work, powered almost entirely by caffeine and
            spite. Results may include naps.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ol className="space-y-3">
            {schedule.map((s) => (
              <li
                key={s.time}
                className="flex items-center gap-4 rounded-2xl border-2 border-border bg-card p-3 transition-transform duration-200 hover:translate-x-1"
              >
                <span className="font-poster text-lg tabular-nums text-primary">
                  {s.time}
                </span>
                <span className="text-2xl">{s.emoji}</span>
                <span className="text-sm text-card-foreground text-pretty sm:text-base">
                  {s.note}
                </span>
              </li>
            ))}
          </ol>

          {/* The punchline: the nap */}
          <figure className="group relative overflow-hidden rounded-2xl border-2 border-foreground shadow-sticker">
            <Image
              src="/images/becky-sleeping.png"
              alt="Becky, strategically recovering after a long day"
              width={890}
              height={481}
              unoptimized
              className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="pointer-events-none absolute left-1/2 top-5 -translate-x-1/2 text-4xl opacity-0 transition-all duration-500 group-hover:-translate-y-2 group-hover:opacity-100">
              💤
            </span>
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent p-4 text-white">
              <span className="font-display text-lg font-bold">
                17:00 — Exhibit A.
              </span>{" "}
              <span className="text-sm text-white/90">
                I get tired working all day. This is called work-life balance.
              </span>
            </figcaption>
          </figure>
        </div>
      </Container>
    </Section>
  );
}
