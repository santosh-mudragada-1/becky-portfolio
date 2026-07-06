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
 * Projects v1 — "Filed". Cover-led cards in a grid, filterable by area.
 */
export function ProjectsFiled() {
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
              The <span className="text-primary">receipts</span>
            </h2>
          </div>
          <ProjectTabs value={filter} onChange={setFilter} />
        </header>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => {
            const meta = areaMeta[p.category];
            return (
              <li
                key={p.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border-2 border-border bg-card shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="overflow-hidden">
                  <ProjectCover
                    project={p}
                    className="rounded-none transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-bold tracking-tight">
                      {p.title}
                    </h3>
                    {p.metrics?.[0] && (
                      <span className={cn("font-poster text-2xl leading-none", meta.text)}>
                        {p.metrics[0].value}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground text-pretty">
                    {p.summary}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-border px-2 py-0.5 font-mono text-[11px]"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
