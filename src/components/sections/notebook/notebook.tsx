"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useState } from "react";

import { NotebookPage } from "@/components/sections/notebook/notebook-page";
import { Paper } from "@/components/sections/notebook/paper";
import { Button } from "@/components/ui/button";
import { notebookSections } from "@/content/notebook";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Page-turn around the spine (left edge). Direction drives which way it flips. */
const pageVariants: Variants = {
  enter: (dir: number) => ({
    rotateY: dir >= 0 ? 0 : -150,
    opacity: dir >= 0 ? 0 : 1,
    zIndex: 0,
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    zIndex: 1,
    transition: { duration: 0.6, ease: EASE },
  },
  exit: (dir: number) => ({
    rotateY: dir >= 0 ? -150 : 0,
    opacity: 0,
    zIndex: 2,
    transition: { duration: 0.55, ease: EASE },
  }),
};

export function Notebook() {
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);
  const count = notebookSections.length;
  const section = notebookSections[index]!;

  const goTo = useCallback(
    (target: number) => {
      if (target < 0 || target >= count) return;
      setState(([current]) => [target, target >= current ? 1 : -1]);
    },
    [count]
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goTo(index + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(index - 1);
      }
    },
    [goTo, index]
  );

  return (
    <div
      role="group"
      aria-roledescription="Interactive notebook"
      aria-label="About — flip through the notebook"
      tabIndex={0}
      onKeyDown={onKeyDown}
      className="mx-auto max-w-3xl rounded-3xl outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
    >
      {/* Section tabs */}
      <nav
        aria-label="Notebook sections"
        className="mb-4 flex flex-wrap items-center gap-2"
      >
        {notebookSections.map((s, i) => {
          const activeTab = i === index;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => goTo(i)}
              aria-current={activeTab ? "true" : undefined}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold leading-none transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
                activeTab
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {s.label}
            </button>
          );
        })}
      </nav>

      {/* Notebook body */}
      <div className="relative">
        <div
          className="relative h-[30rem] md:h-[34rem]"
          style={{ perspective: "2200px" }}
        >
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={index}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
              style={{
                transformOrigin: "left center",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              <Paper>
                <NotebookPage id={section.id} />
              </Paper>
            </motion.div>
          </AnimatePresence>

          {/* Spiral binding (stays put while pages flip) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-1 z-30 flex flex-col justify-center gap-[1.15rem] md:left-2.5"
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <span
                key={i}
                className="h-2.5 w-8 rounded-full bg-gradient-to-b from-neutral-200 via-neutral-400 to-neutral-600 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.35),0_1px_2px_rgba(0,0,0,0.3)]"
              />
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-5 flex items-center justify-between">
          <Button
            variant="outline"
            size="icon"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            aria-label="Previous page"
          >
            <ChevronLeft />
          </Button>

          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            <span className="mx-2 text-border">·</span>
            {section.label}
          </p>

          <Button
            variant="outline"
            size="icon"
            onClick={() => goTo(index + 1)}
            disabled={index === count - 1}
            aria-label="Next page"
          >
            <ChevronRight />
          </Button>
        </div>

        <p className="mt-3 text-center text-xs text-muted-foreground">
          Use the tabs, the arrows, or your{" "}
          <kbd className="rounded border border-border bg-muted px-1 font-mono">
            ←
          </kbd>{" "}
          <kbd className="rounded border border-border bg-muted px-1 font-mono">
            →
          </kbd>{" "}
          keys to flip.
        </p>
      </div>

      {/* Screen-reader announcement */}
      <p className="sr-only" aria-live="polite">
        Page {index + 1} of {count}: {section.label}
      </p>
    </div>
  );
}
