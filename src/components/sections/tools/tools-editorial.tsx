import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { toolGroups } from "@/content/tools";

/**
 * Tools v5 — "Editorial". Clean columns by category, tool + one-liner.
 */
export function ToolsEditorial() {
  return (
    <Section id="tools">
      <Container>
        <header className="mb-8 max-w-2xl">
          <p className="eyebrow">The toolbox · the index</p>
          <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-tight">
            The tools, by trade.
          </h2>
        </header>

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {toolGroups.map((g) => (
            <div key={g.category}>
              <h3 className="flex items-center gap-2 border-b-2 border-foreground pb-2 font-display text-sm font-bold uppercase tracking-wide">
                <span>{g.emoji}</span>
                {g.category}
              </h3>
              <ul className="mt-4 space-y-4">
                {g.tools.map((t) => (
                  <li key={t.name} className="group">
                    <p className="font-display text-lg font-bold tracking-tight transition-colors group-hover:text-primary">
                      {t.name}
                    </p>
                    <p className="text-sm text-muted-foreground text-pretty">
                      {t.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
