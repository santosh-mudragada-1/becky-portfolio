import type { ProjectCategory } from "@/types";

/** Per-area emoji + colour treatment, reused across Projects versions. */
export const areaMeta: Record<
  ProjectCategory,
  { emoji: string; chip: string; text: string; dot: string; bg: string }
> = {
  SaaS: {
    emoji: "🧰",
    chip: "bg-pop text-white",
    text: "text-pop",
    dot: "bg-pop",
    bg: "bg-pop",
  },
  GenAI: {
    emoji: "🤖",
    chip: "bg-chart-4 text-white",
    text: "text-chart-4",
    dot: "bg-chart-4",
    bg: "bg-chart-4",
  },
  Consumer: {
    emoji: "🌊",
    chip: "bg-chart-3 text-white",
    text: "text-chart-3",
    dot: "bg-chart-3",
    bg: "bg-chart-3",
  },
};

export const areaOrder: ProjectCategory[] = ["SaaS", "GenAI", "Consumer"];
