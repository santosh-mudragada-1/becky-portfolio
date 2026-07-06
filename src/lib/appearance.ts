export const ACCENT_STORAGE_KEY = "becky:accent";

export interface AccentPreset {
  name: string;
  color: string;
}

/** The five default accents. First is the tangerine that ships by default. */
export const accentPresets: AccentPreset[] = [
  { name: "Tangerine", color: "#F5591E" },
  { name: "Electric Blue", color: "#2F6BFF" },
  { name: "Grape", color: "#8B5CF6" },
  { name: "Matcha", color: "#12B886" },
  { name: "Hot Pink", color: "#F0397E" },
];

export const defaultAccent = "#F5591E";

/** Pick black or white text for a hex background (simple sRGB luminance). */
export function readableText(hex: string): string {
  const c = hex.replace("#", "");
  const full =
    c.length === 3
      ? c
          .split("")
          .map((x) => x + x)
          .join("")
      : c;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.6 ? "#1a1712" : "#ffffff";
}

/** Apply an accent by setting the runtime CSS variables. Client-only. */
export function applyAccent(color: string) {
  const root = document.documentElement;
  root.style.setProperty("--primary", color);
  root.style.setProperty("--primary-foreground", readableText(color));
}
