/**
 * Hobbies content — the non-work Becky. `level` (1–5) is used by the "skill
 * meter" version. Editable placeholder copy.
 */
export interface Hobby {
  name: string;
  emoji: string;
  note: string;
  level: number;
}

export const hobbies: Hobby[] = [
  { name: "Coffee", emoji: "☕", note: "Primary power source. Non-negotiable.", level: 5 },
  { name: "Books", emoji: "📚", note: "To-read pile: structurally unsound.", level: 4 },
  { name: "Baking", emoji: "🧁", note: "Bribes stakeholders with cookies.", level: 4 },
  { name: "Chess", emoji: "♟️", note: "Thinks three moves ahead. Loses anyway.", level: 3 },
  { name: "Painting", emoji: "🎨", note: "Abstract — mostly by accident.", level: 3 },
  { name: "Public Speaking", emoji: "🎤", note: "PowerPoint karaoke champion.", level: 5 },
];
