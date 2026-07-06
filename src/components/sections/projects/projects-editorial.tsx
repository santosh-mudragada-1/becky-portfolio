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
 * Projects v5 — "Editorial". Numbered rows with a cover thumbnail, calm layout,
 * metrics on the right. Filterable by area.
 */
export function ProjectsEditorial() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const items =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="projects">
      <Container>
        <header className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-xl">
            <p className="eyebrow">Selected work · 6 products</p>
            <h2 className="mt-3 font-display text-[clamp(2.25rem,6vw,4rem)] font-bold leading-[1] tracking-tight">
              Selected work, in full sentences.
            </h2>
          </div>
          <ProjectTabs value={filter} onChange={setFilter} />
        </header>

        <ol className="divide-y divide-border">
          {items.map((p, i) => {
            const meta = areaMeta[p.category];
            return (
              <li
                key={p.slug}
                className="group grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-3 py-6 sm:grid-cols-[auto_auto_1fr_auto]"
              >
                <span className="font-poster text-3xl leading-none text-muted-foreground transition-colors group-hover:text-primary sm:text-4xl">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <ProjectCover
                  project={p}
                  className="col-span-2 w-full sm:col-span-1 sm:w-40"
                />

                <div className="col-span-2 sm:col-span-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-xl font-bold tracking-tight">
                      {p.title}
                    </h3>
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-0.5 font-mono text-[11px] font-bold",
                        meta.chip
                      )}
                    >
                      {meta.emoji} {p.category}
                    </span>
                  </div>
                  <p className="mt-1.5 max-w-xl text-muted-foreground text-pretty">
                    {p.summary}
                  </p>
                </div>

                {p.metrics?.[0] && (
                  <div className="col-start-2 sm:col-start-4 sm:text-right">
                    <p className={cn("font-poster text-3xl leading-none", meta.text)}>
                      {p.metrics[0].value}
                    </p>
                    <p className="font-mono text-[10px] uppercase text-muted-foreground">
                      {p.metrics[0].label}
                    </p>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
