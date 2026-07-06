"use client";

import { useState } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { areaMeta } from "@/components/sections/projects/area";
import { ProjectCover } from "@/components/sections/projects/project-cover";
import {
  ProjectTabs,
  type ProjectFilter,
} from "@/components/sections/projects/project-tabs";
import { projects } from "@/content/projects";
import { cn } from "@/lib/utils";

/**
 * Projects v2 — "App Store". Each product listed like an app, with a cover
 * banner, a shamelessly high rating and a "coming soon" GET.
 */
const ratings: Record<string, string> = {
  clearhost: "4.9",
  axom: "4.7",
  "xero-ai": "5.0",
  "morph-ai": "4.8",
  hestern: "4.9",
  storegrowthx: "4.6",
};

export function ProjectsAppStore() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const items =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="projects">
      <Container>
        <header className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-xl">
            <p className="eyebrow">Selected work · 6 products</p>
            <h2 className="mt-3 font-poster text-[clamp(2.5rem,8vw,5rem)] uppercase leading-[0.85] tracking-tight">
              The Becky <span className="text-primary">App Store</span>
            </h2>
          </div>
          <ProjectTabs value={filter} onChange={setFilter} />
        </header>

        <ul className="grid gap-4 sm:grid-cols-2">
          {items.map((p) => {
            const meta = areaMeta[p.category];
            return (
              <li
                key={p.slug}
                className="flex flex-col overflow-hidden rounded-2xl border-2 border-border bg-card shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <ProjectCover project={p} className="rounded-none" />
                <div className="flex items-center gap-3 p-4">
                  <div
                    className={cn(
                      "grid size-12 shrink-0 place-items-center rounded-xl text-xl shadow-sm",
                      meta.chip
                    )}
                  >
                    {meta.emoji}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-bold tracking-tight">
                      {p.title}
                    </h3>
                    <p className="font-mono text-[11px] text-muted-foreground">
                      {p.category} · ★ {ratings[p.slug] ?? "4.8"}
                    </p>
                  </div>
                  <span className="rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase text-primary-foreground">
                    Soon
                  </span>
                </div>
                <p className="px-4 pb-4 text-sm text-muted-foreground text-pretty">
                  {p.summary}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
