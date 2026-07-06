/**
 * Experience content — Becky's whole career so far: one company, three years,
 * many hats. All at The Matrix Labs. Editable placeholder copy in her voice.
 */
export const experienceCompany = {
  name: "The Matrix Labs",
  duration: "3 years",
  since: "2021",
  blurb:
    "My first job, my current job, my entire career so far — all under one roof at The Matrix Labs. One company, a genuinely unreasonable number of hats.",
};

/** The caps/hats she wore (the running gag: she wears many, literally). */
export interface Hat {
  name: string;
  emoji: string;
  blurb: string;
}

export const hats: Hat[] = [
  {
    name: "Marketing",
    emoji: "🧢",
    blurb: "Positioning, launches, and making people actually care about the thing.",
  },
  {
    name: "Manager",
    emoji: "🎩",
    blurb: "Herded roadmaps and humans. Everyone shipped; nobody cried (much).",
  },
  {
    name: "Product Manager",
    emoji: "⛑️",
    blurb: "Discovery to launch — resident asker of “but why are we building this?”",
  },
];

/** The product worlds she shipped across (details live in the Projects section). */
export interface ProductArea {
  name: string;
  emoji: string;
  projects: string[];
}

export const productAreas: ProductArea[] = [
  { name: "SaaS", emoji: "🧰", projects: ["ClearHost", "Axom"] },
  { name: "GenAI", emoji: "🤖", projects: ["XERO AI", "Morph AI"] },
  { name: "Consumer", emoji: "🌊", projects: ["Hestern", "StoreGrowthX"] },
];
