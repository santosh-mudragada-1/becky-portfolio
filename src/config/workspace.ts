import {
  BarChart3,
  Coffee,
  FolderOpen,
  Map,
  Megaphone,
  Notebook,
  StickyNote,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/** Visual archetype → drives the top-down illustration in `ObjectVisual`. */
export type DeskShape =
  | "notebook"
  | "mug"
  | "folder"
  | "roadmap"
  | "dashboard"
  | "board"
  | "toolbox"
  | "sticky";

export interface DeskObjectConfig {
  id: string;
  /** Handwritten label under the object. */
  title: string;
  /** Small mono caption — what the object opens. */
  subtitle: string;
  /** Destination route (pages not built yet). */
  href: string;
  icon: LucideIcon;
  shape: DeskShape;
  /** Design-token name used as the object's accent (stays theme-reactive). */
  accent: string;
  /** Resting tilt in degrees (straightens to 0 on hover). */
  rotate: number;
  /** Desktop scatter position as % of the desk surface (center anchored). */
  x: number;
  y: number;
}

/**
 * The objects on the desk. This is the source of truth for the workspace and
 * the future site navigation — a page route should reuse the same `href`s.
 * Mapping mirrors docs/sitemap.md.
 */
export const deskObjects: DeskObjectConfig[] = [
  {
    id: "notebook",
    title: "Notebook",
    subtitle: "About me",
    href: "/about",
    icon: Notebook,
    shape: "notebook",
    accent: "chart-2",
    rotate: -6,
    x: 20,
    y: 26,
  },
  {
    id: "roadmap",
    title: "Roadmap",
    subtitle: "Career journey",
    href: "/roadmap",
    icon: Map,
    shape: "roadmap",
    accent: "chart-3",
    rotate: 4,
    x: 50,
    y: 20,
  },
  {
    id: "mug",
    title: "Coffee Mug",
    subtitle: "Fun & easter eggs",
    href: "/fun",
    icon: Coffee,
    shape: "mug",
    accent: "chart-5",
    rotate: 0,
    x: 80,
    y: 24,
  },
  {
    id: "folder",
    title: "Project Folder",
    subtitle: "Selected work",
    href: "/work",
    icon: FolderOpen,
    shape: "folder",
    accent: "primary",
    rotate: -3,
    x: 30,
    y: 62,
  },
  {
    id: "campaign",
    title: "Campaign Board",
    subtitle: "Marketing lab",
    href: "/marketing",
    icon: Megaphone,
    shape: "board",
    accent: "chart-4",
    rotate: 3,
    x: 52,
    y: 70,
  },
  {
    id: "analytics",
    title: "Analytics",
    subtitle: "Metrics & dashboards",
    href: "/analytics",
    icon: BarChart3,
    shape: "dashboard",
    accent: "info",
    rotate: -4,
    x: 76,
    y: 60,
  },
  {
    id: "toolbox",
    title: "Toolbox",
    subtitle: "Skills & tools",
    href: "/toolbox",
    icon: Wrench,
    shape: "toolbox",
    accent: "highlight",
    rotate: 5,
    x: 14,
    y: 78,
  },
  {
    id: "sticky",
    title: "Sticky Notes",
    subtitle: "Get in touch",
    href: "/contact",
    icon: StickyNote,
    shape: "sticky",
    accent: "success",
    rotate: -5,
    x: 90,
    y: 82,
  },
];
