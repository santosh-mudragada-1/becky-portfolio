import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { toolGroups } from "@/content/tools";
import { cn } from "@/lib/utils";

/**
 * Tools v1 — "Toolbox". Grouped by category, monogram tiles + a one-liner each.
 */
export function ToolsToolbox() {
  return (
    <Section id="tools">
      <Container>
        <header className="mb-8 max-w-2xl">
          <p className="eyebrow">The toolbox</p>
          <h2 className="mt-3 font-poster text-[clamp(2.5rem,8vw,5rem)] uppercase leading-[0.85] tracking-tight">
            What&apos;s in the <span className="text-primary">toolbox</span>
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            The stack I reach for — plus strong opinions about each.
          </p>
        </header>

        <div className="space-y-8">
          {toolGroups.map((g) => (
            <div key={g.category}>
              <div className="mb-4 flex items-center gap-2">
                <span className="text-xl">{g.emoji}</span>
                <h3 className="font-display text-sm font-bold uppercase tracking-wide">
                  {g.category}
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {g.tools.length}
                </span>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {g.tools.map((t) => (
                  <li
                    key={t.name}
                    className="flex items-center gap-3 rounded-2xl border-2 border-border bg-card p-3 transition-transform duration-200 hover:-translate-y-1"
                  >
                    <span
                      className={cn(
                        "grid size-10 shrink-0 place-items-center rounded-xl font-poster text-lg",
                        g.tile
                      )}
                    >
                      {t.name.charAt(0)}
                    </span>
                    <div className="min-w-0">
                      <p className="font-display font-bold leading-tight tracking-tight">
                        {t.name}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">
                        {t.note}
                      </p>
                    </div>
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
