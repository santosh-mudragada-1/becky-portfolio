import type { Project } from "@/types";

/**
 * Content layer — the six products Becky shipped at The Matrix Labs, across
 * SaaS, GenAI and Consumer. Editable placeholder copy in her voice; case-study
 * bodies come later. Swap for a CMS without touching the components.
 */
export const projects: Project[] = [
  // ── SaaS ──────────────────────────────────────────────────────────────
  {
    slug: "clearhost",
    title: "ClearHost",
    category: "SaaS",
    summary:
      "A hosting control plane that made infra feel human. Self-serve, honest billing, and support tickets that basically ghosted us.",
    role: "Product Manager",
    timeframe: "The Matrix Labs",
    tags: ["0→1", "Platform", "Self-serve"],
    featured: true,
    metrics: [{ label: "ARR, year 1", value: "$1.2M", delta: "+38% MoM" }],
  },
  {
    slug: "axom",
    title: "Axom",
    category: "SaaS",
    summary:
      "Re-platformed a creaky admin suite into something teams open on purpose. Fewer clicks, fewer tears.",
    role: "Product Manager",
    timeframe: "The Matrix Labs",
    tags: ["Re-platform", "B2B", "Design system"],
    metrics: [{ label: "Task time", value: "−34%" }],
  },

  // ── GenAI ─────────────────────────────────────────────────────────────
  {
    slug: "xero-ai",
    title: "XERO AI",
    category: "GenAI",
    summary:
      "An AI copilot that turned a blank page into a guided one — suggestions people actually trust and click.",
    role: "Product Manager",
    timeframe: "The Matrix Labs",
    tags: ["AI", "Onboarding", "Activation"],
    featured: true,
    metrics: [{ label: "Activation", value: "62%", delta: "+14 pts" }],
  },
  {
    slug: "morph-ai",
    title: "Morph AI",
    category: "GenAI",
    summary:
      "Generative workflows that collapse an afternoon of busywork into one confident click. Guardrails included.",
    role: "Product Manager",
    timeframe: "The Matrix Labs",
    tags: ["GenAI", "Workflow", "0→1"],
    metrics: [{ label: "Time saved / task", value: "~2.5 hrs" }],
  },

  // ── Consumer ──────────────────────────────────────────────────────────
  {
    slug: "hestern",
    title: "Hestern",
    category: "Consumer",
    summary:
      "A habit app that made showing up feel like a game you want to keep playing — not another guilt machine.",
    role: "Product Manager",
    timeframe: "The Matrix Labs",
    tags: ["Consumer", "Growth", "Retention"],
    metrics: [{ label: "D30 retention", value: "+27%" }],
  },
  {
    slug: "storegrowthx",
    title: "StoreGrowthX",
    category: "Consumer",
    summary:
      "Rethought checkout so buying felt effortless — fewer steps, more trust, a lot more carts that actually closed.",
    role: "Product Manager",
    timeframe: "The Matrix Labs",
    tags: ["E-commerce", "Conversion", "UX"],
    metrics: [{ label: "Checkout drop-off", value: "−22%" }],
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
export const getProjectsByCategory = (category: Project["category"]) =>
  projects.filter((p) => p.category === category);
