"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

/**
 * Light/dark provider (thin wrapper over next-themes). The color axis is
 * handled separately by `ColorThemeProvider`. Configuration is applied at the
 * composition root in `AppProviders`.
 */
export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
