"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  COLOR_THEME_STORAGE_KEY,
  colorThemes,
  defaultColorTheme,
  type ColorTheme,
  type ColorThemeId,
} from "@/config/themes";

interface ColorThemeContextValue {
  /** Active color theme id (mango | coffee | grape | ocean | matcha). */
  theme: ColorThemeId;
  setTheme: (theme: ColorThemeId) => void;
  /** All available themes (for building switchers). */
  themes: readonly ColorTheme[];
}

const ColorThemeContext = createContext<ColorThemeContextValue | null>(null);

const isValid = (value: string | null): value is ColorThemeId =>
  !!value && colorThemes.some((t) => t.id === value);

/**
 * Manages the *color* axis of the theme system via the `[data-theme]`
 * attribute on <html>. Independent of light/dark (handled by next-themes).
 * A pre-hydration script (`ThemeScript`) applies the stored theme before paint,
 * so this provider only keeps React state in sync and persists changes.
 */
export function ColorThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setThemeState] = useState<ColorThemeId>(defaultColorTheme);

  // Hydrate from whatever the pre-paint script already applied.
  useEffect(() => {
    const fromDom = document.documentElement.getAttribute("data-theme");
    const stored = localStorage.getItem(COLOR_THEME_STORAGE_KEY);
    const initial = isValid(fromDom)
      ? fromDom
      : isValid(stored)
        ? stored
        : defaultColorTheme;
    setThemeState(initial);
  }, []);

  const setTheme = useCallback((next: ColorThemeId) => {
    setThemeState(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(COLOR_THEME_STORAGE_KEY, next);
    } catch {
      // Ignore write failures (private mode, storage disabled).
    }
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme, themes: colorThemes }),
    [theme, setTheme]
  );

  return (
    <ColorThemeContext.Provider value={value}>
      {children}
    </ColorThemeContext.Provider>
  );
}

export function useColorTheme() {
  const ctx = useContext(ColorThemeContext);
  if (!ctx) {
    throw new Error("useColorTheme must be used within <ColorThemeProvider>");
  }
  return ctx;
}
