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
 * Projects v4 — "Trading Cards". The cover is the card art; cards tilt in the
 * binder and shimmer + straighten on hover.
 */
export function ProjectsCards() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const items =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="projects">
      <Container>
        <header className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-xl">
            <p className="eyebrow">Selected work · the collection</p>
            <h2 className="mt-3 font-poster text-[clamp(2.5rem,8vw,5rem)] uppercase leading-[0.85] tracking-tight">
              Gotta <span className="text-primary">ship</span> &apos;em all
            </h2>
          </div>
          <ProjectTabs value={filter} onChange={setFilter} />
        </header>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => {
            const meta = areaMeta[p.category];
            return (
              <li
                key={p.slug}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-2xl border-2 border-foreground bg-card shadow-sticker transition-transform duration-300 hover:-translate-y-2 hover:rotate-0",
                  i % 2 === 0 ? "-rotate-2" : "rotate-2"
                )}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-60"
                />
                <div
                  className={cn(
                    "flex items-center justify-between px-3 py-1.5 font-mono text-[11px] font-bold uppercase",
                    meta.chip
                  )}
                >
                  <span>{p.category}</span>
                  <span>★ {p.featured ? "Legendary" : "Rare"}</span>
                </div>
                <ProjectCover project={p} className="rounded-none" />
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-display text-lg font-bold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-1 flex-1 text-sm text-muted-foreground text-pretty">
                    {p.summary}
                  </p>
                  {p.metrics?.[0] && (
                    <div className="mt-3 flex items-end justify-between border-t border-border pt-2">
                      <span className="font-mono text-[10px] uppercase text-muted-foreground">
                        {p.metrics[0].label}
                      </span>
                      <span className={cn("font-poster text-2xl leading-none", meta.text)}>
                        {p.metrics[0].value}
                      </span>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
