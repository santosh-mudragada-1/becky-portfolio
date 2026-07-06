import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { aboutIntro, aboutParagraphs, aboutSpec } from "@/content/about";

/**
 * About v1 — "Statement + portrait". A confident intro next to the jacket shot.
 */
export function AboutStatement() {
  return (
    <Section id="about">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="eyebrow">About · the human</p>
            <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-tight">
              {aboutIntro}
            </h2>
            <div className="mt-5 max-w-prose space-y-4 text-lg text-muted-foreground">
              {aboutParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {aboutSpec.map((s) => (
                <li
                  key={s.label}
                  className="rounded-full border border-border bg-card px-3 py-1 font-mono text-xs"
                >
                  <span className="text-muted-foreground">{s.label}:</span>{" "}
                  <span className="font-bold">{s.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <figure className="group relative mx-auto w-full max-w-[16rem] rotate-2">
            <Image
              src="/images/becky-reading.png"
              alt="Banshika 'Becky' Kejriwal"
              width={400}
              height={498}
              unoptimized
              className="h-auto w-full drop-shadow-2xl transition-transform duration-500 group-hover:rotate-0 group-hover:scale-[1.02]"
            />
            <figcaption className="mt-2 text-center font-mono text-[11px] text-muted-foreground">
              doing “research” (reading the room, and a map)
            </figcaption>
          </figure>
        </div>
      </Container>
    </Section>
  );
}
