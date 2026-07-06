import {
  Anton,
  Space_Grotesk,
  Space_Mono,
  Syne,
  Unbounded,
} from "next/font/google";

/**
 * Typography — bold, loud, a little chaotic. No handwriting, no cursive.
 *
 *  - `fontPoster` Anton         → giant poster headlines (hero)
 *  - `fontDisplay` Syne         → creative editorial headings / mastheads
 *  - `fontQuirky` Unbounded     → playful, quirky accents & stickers
 *  - `fontSans`   Space Grotesk → clean, modern body & UI
 *  - `fontMono`   Space Mono    → labels, eyebrows, tags
 *
 * Each exposes a CSS variable consumed by the `@theme` block in globals.css.
 */
export const fontPoster = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: "400",
  display: "swap",
});

export const fontDisplay = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const fontQuirky = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  display: "swap",
});

export const fontSans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const fontMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap",
});

/** All font variables, ready to spread onto <html>. */
export const fontVariables = `${fontSans.variable} ${fontDisplay.variable} ${fontPoster.variable} ${fontQuirky.variable} ${fontMono.variable}`;
