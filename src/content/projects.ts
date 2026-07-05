import type { Project } from "@/types";

/**
 * Content layer — case studies / projects.
 *
 * CMS-agnostic typed data. Slugs & categories come from docs/sitemap.md; the
 * copy is editable placeholder in the portfolio's voice. Case-study bodies are
 * intentionally not here yet — the Project Folder only lists & expands cards.
 * Swap this array for a fetch (MDX, Sanity, Notion, …) later without touching
 * the components that consume the `Project` type.
 */
export const projects: Project[] = [
  // ── Enterprise ──────────────────────────────────────────────────────────
  {
    slug: "clearhost",
    title: "ClearHost",
    category: "Enterprise",
    summary:
      "A hosting control plane that made infrastructure feel human — self-serve provisioning, honest billing, and support tickets that mostly vanished.",
    role: "Lead Product Manager",
    timeframe: "2022 — Now",
    tags: ["0→1", "Platform", "Self-serve", "B2B"],
    featured: true,
    metrics: [
      { label: "ARR (year 1)", value: "$1.2M", delta: "+38% MoM" },
      { label: "Support tickets", value: "−41%" },
      { label: "Time to provision", value: "8 min", delta: "was 3 days" },
    ],
  },
  {
    slug: "axom",
    title: "Axom",
    category: "Enterprise",
    summary:
      "Re-platformed a creaky legacy admin suite into a modular workspace teams actually enjoy opening every morning.",
    role: "Senior Product Manager",
    timeframe: "2021 — 2022",
    tags: ["Re-platform", "Design system", "B2B"],
    metrics: [
      { label: "Task time", value: "−34%" },
      { label: "Seat expansion", value: "2.6×" },
      { label: "NPS", value: "+22" },
    ],
  },

  // ── AI ──────────────────────────────────────────────────────────────────
  {
    slug: "xero-ai",
    title: "XERO AI",
    category: "AI",
    summary:
      "An AI copilot that turned a blank-page product into a guided one — suggestions users actually trust and act on.",
    role: "Product Manager",
    timeframe: "2020 — 2022",
    tags: ["AI", "Onboarding", "Activation"],
    featured: true,
    metrics: [
      { label: "Activation", value: "62%", delta: "+14 pts" },
      { label: "Day-7 retention", value: "+19%" },
      { label: "Suggestions accepted", value: "48%" },
    ],
  },
  {
    slug: "morph-ai",
    title: "Morph AI",
    category: "AI",
    summary:
      "Generative workflows that collapse hours of busywork into a single, confident click — with guardrails people believe in.",
    role: "Product Manager (0→1)",
    timeframe: "2023",
    tags: ["GenAI", "Workflow", "0→1"],
    metrics: [
      { label: "Time saved / task", value: "~2.5 hrs" },
      { label: "Beta → paid", value: "31%" },
      { label: "Weekly active", value: "3.1×" },
    ],
  },

  // ── Consumer ────────────────────────────────────────────────────────────
  {
    slug: "hestern",
    title: "Hestern",
    category: "Consumer",
    summary:
      "A habit app that made showing up feel like a game you want to keep playing — not another guilt machine.",
    role: "Growth Product Manager",
    timeframe: "2018 — 2020",
    tags: ["Consumer", "Growth", "Retention"],
    metrics: [
      { label: "Signups", value: "3×" },
      { label: "D30 retention", value: "+27%" },
      { label: "Experiments", value: "120+" },
    ],
  },
  {
    slug: "storegrowthx",
    title: "StoreGrowthX",
    category: "Consumer",
    summary:
      "Rethought checkout so buying felt effortless — fewer steps, more trust, and a lot more carts that actually closed.",
    role: "Associate Product Manager",
    timeframe: "2017 — 2018",
    tags: ["E-commerce", "Conversion", "UX"],
    metrics: [
      { label: "Checkout drop-off", value: "−22%" },
      { label: "Conversion", value: "+16%" },
      { label: "AOV", value: "+9%" },
    ],
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
export const getProjectsByCategory = (category: Project["category"]) =>
  projects.filter((p) => p.category === category);
