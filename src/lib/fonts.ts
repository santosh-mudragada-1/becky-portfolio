import {
  Bricolage_Grotesque,
  Caveat,
  Hanken_Grotesk,
  Space_Mono,
} from "next/font/google";

/**
 * Typography — a creative-but-grown-up system (see docs/design-system.md).
 *
 *  - `fontDisplay` Bricolage Grotesque → characterful, slightly-wonky headings
 *  - `fontSans`    Hanken Grotesk      → warm, highly-readable body & UI
 *  - `fontMono`    Space Mono          → eyebrows, metrics, tags (product feel)
 *  - `fontHand`    Caveat              → USED SPARINGLY: sticky notes & margin
 *                                        annotations only. Never body/headings.
 *
 * Each exposes a CSS variable consumed by the `@theme` block in globals.css.
 */
export const fontDisplay = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const fontSans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const fontMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
  weight: ["400", "700"],
});

export const fontHand = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

/** All font variables, ready to spread onto <html>. */
export const fontVariables = `${fontSans.variable} ${fontDisplay.variable} ${fontHand.variable} ${fontMono.variable}`;
