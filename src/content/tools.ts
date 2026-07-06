/**
 * Tools content — Becky's stack, grouped. Editable placeholder notes in her
 * voice.
 */
export interface Tool {
  name: string;
  note: string;
}

export interface ToolGroup {
  category: string;
  emoji: string;
  /** Tailwind bg class for the monogram tiles. */
  tile: string;
  tools: Tool[];
}

export const toolGroups: ToolGroup[] = [
  {
    category: "Design & Whiteboarding",
    emoji: "🎨",
    tile: "bg-primary text-primary-foreground",
    tools: [
      { name: "Figma", note: "Where the arguing becomes screens." },
      { name: "Canva", note: "For when it needed to ship yesterday." },
      { name: "Excalidraw", note: "Serious diagrams, unserious handwriting." },
      { name: "Miro", note: "1,000 sticky notes, one sync." },
    ],
  },
  {
    category: "Product Analytics",
    emoji: "📊",
    tile: "bg-pop text-white",
    tools: [
      { name: "Mixpanel", note: "Funnels I stare at too long." },
      { name: "Amplitude", note: "Cohorts & aha-moments." },
      { name: "PostHog", note: "Session replays = humbling." },
      { name: "Microsoft Clarity", note: "Heatmaps of my mistakes." },
      { name: "Google Analytics", note: "The classic. Still opens it." },
    ],
  },
  {
    category: "Marketing & SEO",
    emoji: "📈",
    tile: "bg-chart-3 text-white",
    tools: [{ name: "SEMrush", note: "Keywords, gaps, sweet, sweet traffic." }],
  },
];

export const allTools = toolGroups.flatMap((g) =>
  g.tools.map((t) => ({ ...t, category: g.category, tile: g.tile }))
);
