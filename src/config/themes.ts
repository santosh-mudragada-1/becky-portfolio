/**
 * Color-theme registry.
 *
 * These map 1:1 to the `[data-theme]` brand overrides in globals.css. Mango is
 * the default. Adding a theme = add an entry here + a matching pair of
 * `[data-theme="x"]` / `.dark[data-theme="x"]` blocks in globals.css.
 */
export const colorThemes = [
  { id: "mango", name: "Mango", emoji: "🟡", swatch: "oklch(0.80 0.16 80)" },
  { id: "coffee", name: "Coffee", emoji: "🟠", swatch: "oklch(0.55 0.09 55)" },
  { id: "grape", name: "Grape", emoji: "🟣", swatch: "oklch(0.55 0.20 300)" },
  { id: "ocean", name: "Ocean", emoji: "🔵", swatch: "oklch(0.60 0.16 240)" },
  { id: "matcha", name: "Matcha", emoji: "🟢", swatch: "oklch(0.68 0.15 150)" },
] as const;

export type ColorTheme = (typeof colorThemes)[number];
export type ColorThemeId = ColorTheme["id"];

export const defaultColorTheme: ColorThemeId = "mango";
export const colorThemeIds = colorThemes.map((t) => t.id) as ColorThemeId[];

/** localStorage key shared by the pre-hydration script and the provider. */
export const COLOR_THEME_STORAGE_KEY = "color-theme";
