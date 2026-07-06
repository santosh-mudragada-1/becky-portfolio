/**
 * About content — who Becky is, in her own (sarcastic) words. Editable
 * placeholder copy.
 */
export const aboutIntro =
  "I'm Banshika — Becky if we're friends (we will be).";

export const aboutParagraphs = [
  "Product manager by title; professional translator between “the business wants this” and “users actually need that” by trade. Three years, one company, an alarming number of hats.",
  "I like the messy middle — fuzzy problems, loud opinions, and the exact moment a roadmap stops being a wishlist and starts being real. Then I ship it, and take a strategically-timed nap.",
];

export interface SpecRow {
  label: string;
  value: string;
}

export const aboutSpec: SpecRow[] = [
  { label: "Role", value: "Product Manager" },
  { label: "Experience", value: "3 yrs @ The Matrix Labs" },
  { label: "Hats worn", value: "Marketing · Manager · PM" },
  { label: "Domains", value: "SaaS · GenAI · Consumer" },
  { label: "Powered by", value: "Coffee & mild spite" },
  { label: "Side effects", value: "May nap without warning" },
];

export interface Faq {
  q: string;
  a: string;
}

export const aboutFaq: Faq[] = [
  {
    q: "So what do you actually do all day?",
    a: "Ask “but why?”, herd opinions into roadmaps, write specs, and occasionally ship things people love.",
  },
  {
    q: "Are you always this sarcastic?",
    a: "Only while conscious. So… yes.",
  },
  {
    q: "Biggest strength?",
    a: "Turning chaos into roadmaps — and roadmaps into shipped products.",
  },
  {
    q: "Biggest weakness?",
    a: "I will absolutely reorganize the snack drawer to avoid one hard decision.",
  },
];
