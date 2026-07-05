import type { LucideIcon } from "lucide-react";

/** A social profile / contact link (rendered as an icon button). */
export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

/** Call-to-action descriptor used across sections. */
export interface CTA {
  label: string;
  href: string;
  external?: boolean;
}

/** Project categories from docs/sitemap.md. */
export type ProjectCategory = "Enterprise" | "AI" | "Consumer";

export interface ProjectMetric {
  label: string;
  value: string;
  delta?: string;
}

/**
 * Case-study / project shape. Kept here so content files and future sections
 * share one contract. The `sections` order mirrors the case-study structure in
 * docs/sitemap.md (Overview → … → Retrospective).
 */
export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  role: string;
  timeframe: string;
  tags: string[];
  cover?: string;
  metrics?: ProjectMetric[];
  featured?: boolean;
}

export type CaseStudyStep =
  | "overview"
  | "problem"
  | "research"
  | "insights"
  | "prioritization"
  | "solution"
  | "launch"
  | "impact"
  | "retrospective";

/** Generic children-only props. */
export interface WithChildren {
  children: React.ReactNode;
}
