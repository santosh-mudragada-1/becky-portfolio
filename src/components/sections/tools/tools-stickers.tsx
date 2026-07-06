import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { allTools } from "@/content/tools";
import { cn } from "@/lib/utils";

/**
 * Tools v2 — "Sticker Sheet". Every tool as a tilted badge that pops on hover.
 */
const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "rotate-3", "-rotate-3"];

export function ToolsStickers() {
  return (
    <Section id="tools">
      <Container>
        <header className="mb-8 max-w-2xl">
          <p className="eyebrow">The toolbox · sticker sheet</p>
          <h2 className="mt-3 font-poster text-[clamp(2.5rem,8vw,5rem)] uppercase leading-[0.85] tracking-tight">
            My laptop lid, <span className="text-primary">basically</span>
          </h2>
        </header>

        <ul className="flex flex-wrap gap-3">
          {allTools.map((t, i) => (
            <li
              key={t.name}
              className={cn(
                "sticker flex items-center gap-2 rounded-xl px-4 py-2.5 transition-transform duration-200 hover:rotate-0 hover:scale-110",
                rotations[i % rotations.length]
              )}
            >
              <span
                className={cn(
                  "grid size-7 shrink-0 place-items-center rounded-lg font-poster text-sm",
                  t.tile
                )}
              >
                {t.name.charAt(0)}
              </span>
              <span className="font-display font-bold tracking-tight">
                {t.name}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
