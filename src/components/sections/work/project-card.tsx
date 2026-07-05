"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { useId, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * A project card that expands in place to reveal the full summary, metrics and
 * tags. The case study itself isn't built yet, so the "read" action is a
 * disabled placeholder.
 */
export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <Card className="overflow-hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-start gap-3 p-4 text-left outline-none transition-colors hover:bg-accent/40 focus-visible:ring-[3px] focus-visible:ring-ring/50"
      >
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-lg font-semibold tracking-tight">
              {project.title}
            </h3>
            {project.featured && (
              <Badge variant="soft" className="gap-1">
                <Sparkles /> Featured
              </Badge>
            )}
          </div>
          <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            {project.role} · {project.timeframe}
          </p>
          <p
            className={cn(
              "mt-2 text-sm text-muted-foreground text-pretty",
              !open && "line-clamp-1"
            )}
          >
            {project.summary}
          </p>
        </div>
        <ChevronDown
          aria-hidden
          className={cn(
            "mt-1 size-5 shrink-0 text-muted-foreground transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="space-y-4 px-4 pb-4">
              {project.metrics && project.metrics.length > 0 && (
                <dl className="grid grid-cols-3 gap-2">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl bg-secondary/60 p-3 text-center"
                    >
                      <dd className="font-display text-lg font-semibold leading-none">
                        {m.value}
                      </dd>
                      {m.delta && (
                        <dd className="mt-1 text-[11px] font-medium text-success">
                          {m.delta}
                        </dd>
                      )}
                      <dt className="mt-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                        {m.label}
                      </dt>
                    </div>
                  ))}
                </dl>
              )}

              <ul className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <Badge variant="outline">{tag}</Badge>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3 border-t border-border pt-3">
                <Button variant="outline" size="sm" disabled>
                  Read case study
                </Button>
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  Coming soon
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
