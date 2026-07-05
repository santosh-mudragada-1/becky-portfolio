"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ChevronRight, Folder } from "lucide-react";
import { useId } from "react";
import type { CSSProperties } from "react";

import { ProjectCard } from "@/components/sections/work/project-card";
import type { Project, ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

interface ProjectFolderProps {
  category: ProjectCategory;
  blurb: string;
  /** Design-token name for the folder's color. */
  accent: string;
  projects: Project[];
  open: boolean;
  onToggle: () => void;
  /** Staggers the tab position for a filing-cabinet look. */
  index: number;
}

/**
 * A manila-style category folder. The colored tab is the toggle; opening
 * animates the folder body to `auto` height and staggers the project cards out.
 */
export function ProjectFolder({
  category,
  blurb,
  accent,
  projects,
  open,
  onToggle,
  index,
}: ProjectFolderProps) {
  const panelId = useId();
  const style = { "--obj": `var(--${accent})` } as CSSProperties;

  return (
    <div className="relative" style={style}>
      {/* Folder tab (toggle) */}
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        style={{ marginLeft: `${index * 2.75}rem`, background: "var(--obj)" }}
        className="relative z-10 flex items-center gap-2 rounded-t-xl px-5 py-2.5 font-display font-semibold text-white shadow-sm outline-none transition-transform hover:-translate-y-0.5 focus-visible:ring-[3px] focus-visible:ring-ring/60"
      >
        <Folder className="size-4" />
        {category}
        <span className="rounded-full bg-white/25 px-2 py-0.5 text-xs">
          {projects.length}
        </span>
        <ChevronRight
          aria-hidden
          className={cn(
            "size-4 transition-transform duration-300",
            open && "rotate-90"
          )}
        />
      </button>

      {/* Folder body */}
      <div
        className="-mt-px rounded-2xl rounded-tl-none border-2 p-4 shadow-sm md:p-5"
        style={{
          background: "color-mix(in oklch, var(--obj), var(--card) 88%)",
          borderColor: "color-mix(in oklch, var(--obj), transparent 55%)",
        }}
      >
        <p className="text-sm font-medium text-foreground/70">{blurb}</p>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="overflow-hidden"
            >
              <motion.ul
                variants={list}
                initial="hidden"
                animate="show"
                className="space-y-3 pt-4"
              >
                {projects.map((project) => (
                  <motion.li key={project.slug} variants={item}>
                    <ProjectCard project={project} />
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
