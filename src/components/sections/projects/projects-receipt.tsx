"use client";

import { useState } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import {
  ProjectTabs,
  type ProjectFilter,
} from "@/components/sections/projects/project-tabs";
import { projects } from "@/content/projects";

/**
 * Projects v3 — "Receipt". Proof of work as an itemised store receipt. The tab
 * filter re-prints the receipt for the chosen area.
 */
export function ProjectsReceipt() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const items =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="projects">
      <Container>
        <header className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-xl">
            <p className="eyebrow">Selected work · proof of work</p>
            <h2 className="mt-3 font-poster text-[clamp(2.5rem,8vw,5rem)] uppercase leading-[0.85] tracking-tight">
              The <span className="text-primary">receipt</span>
            </h2>
          </div>
          <ProjectTabs value={filter} onChange={setFilter} />
        </header>

        <div className="mx-auto max-w-sm rotate-1 bg-card p-6 font-mono text-sm text-card-foreground shadow-lg">
          <div className="text-center">
            <p className="font-bold tracking-widest">THE MATRIX LABS</p>
            <p className="text-xs text-muted-foreground">
              general store of good ideas
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              3 yrs · {items.length} item{items.length === 1 ? "" : "s"} · 1
              employee
            </p>
          </div>

          <div className="my-4 border-t border-dashed border-foreground/40" />

          <ul className="space-y-3">
            {items.map((p) => (
              <li key={p.slug}>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-bold">{p.title}</span>
                  <span className="flex-1 translate-y-[-2px] border-b border-dotted border-foreground/30" />
                  <span className="font-bold">{p.metrics?.[0]?.value ?? "✓"}</span>
                </div>
                <p className="text-[11px] text-muted-foreground">
                  {p.category} · {p.metrics?.[0]?.label ?? "shipped"}
                </p>
              </li>
            ))}
          </ul>

          <div className="my-4 border-t border-dashed border-foreground/40" />

          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span>ITEMS</span>
              <span>{items.length}</span>
            </div>
            <div className="flex justify-between">
              <span>REGRETS</span>
              <span>0</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>NAPS DESERVED</span>
              <span>∞</span>
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-[2px]" aria-hidden>
            {[3, 1, 2, 1, 3, 2, 1, 2, 3, 1, 1, 2, 3, 2, 1, 3, 1, 2, 2, 1].map((w, i) => (
              <span key={i} className="h-8 bg-foreground" style={{ width: `${w}px` }} />
            ))}
          </div>
          <p className="mt-3 text-center text-[11px] text-muted-foreground">
            *** no refunds — only shipping ***
          </p>
        </div>
      </Container>
    </Section>
  );
}
