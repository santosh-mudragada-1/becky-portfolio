"use client";

import type { ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";

export type ProjectFilter = "All" | ProjectCategory;

export const projectFilters: ProjectFilter[] = [
  "All",
  "SaaS",
  "GenAI",
  "Consumer",
];

/** Category tab bar for the Projects section (All / SaaS / GenAI / Consumer). */
export function ProjectTabs({
  value,
  onChange,
  className,
}: {
  value: ProjectFilter;
  onChange: (value: ProjectFilter) => void;
  className?: string;
}) {
  return (
    <div
      role="tablist"
      aria-label="Filter projects by area"
      className={cn(
        "inline-flex flex-wrap gap-1 rounded-full border border-border bg-card p-1 shadow-xs",
        className
      )}
    >
      {projectFilters.map((tab) => {
        const active = value === tab;
        return (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(tab)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-bold transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
              active
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
