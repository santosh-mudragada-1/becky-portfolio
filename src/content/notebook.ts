import {
  Camera,
  Coffee,
  Dice5,
  Footprints,
  Music,
  PenTool,
  type LucideIcon,
} from "lucide-react";

import { siteConfig } from "@/config/site";

/**
 * Content for the Notebook (About) page. All copy is editable placeholder in
 * the portfolio's playful, short, confident voice — swap for real details.
 */

export const notebookSections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "hobbies", label: "Hobbies" },
  { id: "fun-facts", label: "Fun Facts" },
  { id: "status", label: "Current Status" },
] as const;

export type NotebookSectionId = (typeof notebookSections)[number]["id"];

export const notebookProfile = {
  name: siteConfig.name,
  role: siteConfig.role,
  tagline: "I turn messy problems into products people actually love.",
};

export const aboutParagraphs = [
  `Hi — I'm ${siteConfig.name}. For the last few years I've been turning fuzzy ideas and messy backlogs into products people love (and campaigns that make them care).`,
  "I live where product and marketing overlap: obsessive about the user, fluent in metrics, and always asking “but why?” one more time.",
];

export const aboutSticky =
  "Ask me about: onboarding flows, sharp positioning, and the perfect espresso.";

export interface ExperienceEntry {
  role: string;
  org: string;
  period: string;
  impact: string;
}

export const experience: ExperienceEntry[] = [
  {
    role: "Senior Product Manager",
    org: "ClearHost",
    period: "2022 — Now",
    impact: "Led the 0→1 platform launch to $1.2M ARR in year one.",
  },
  {
    role: "Product Manager",
    org: "XERO AI",
    period: "2020 — 2022",
    impact: "Shipped an AI assistant that lifted activation +14 pts.",
  },
  {
    role: "Growth & Product Marketing",
    org: "Hestern",
    period: "2018 — 2020",
    impact: "Ran 120+ experiments and scaled signups 3×.",
  },
  {
    role: "Associate PM",
    org: "StoreGrowthX",
    period: "2017 — 2018",
    impact: "Cut checkout drop-off 22% with one bold redesign.",
  },
];

export const hobbies: { label: string; icon: LucideIcon }[] = [
  { label: "Coffee brewing", icon: Coffee },
  { label: "Sketching & doodles", icon: PenTool },
  { label: "Board games", icon: Dice5 },
  { label: "Trail running", icon: Footprints },
  { label: "Synths & lo-fi", icon: Music },
  { label: "Film photography", icon: Camera },
];

export const funFacts = [
  "I've run 100+ A/B tests and lost most of them. That's the whole point.",
  "I name my roadmaps after coffee drinks. We shipped “Cortado” last quarter.",
  "I once user-tested a feature on my mom. She found the bug in four seconds.",
  "My Figma has more sticky notes than actual screens.",
];

export const currentStatus = {
  availability: "Open to new product & marketing roles",
  location: "Remote-friendly · based in [Your City]",
  reading: "“Continuous Discovery Habits”",
  building: "This portfolio (yes, very meta)",
  mood: "Caffeinated & curious",
};
