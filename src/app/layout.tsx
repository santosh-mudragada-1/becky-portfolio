import type { Viewport } from "next";

import { ScrollProgressBar } from "@/components/common/scroll-progress-bar";
import { SkipLink } from "@/components/common/skip-link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AppProviders, ThemeScript } from "@/components/providers";
import { fontVariables } from "@/lib/fonts";
import { constructMetadata } from "@/lib/metadata";

import "./globals.css";

export const metadata = constructMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f0" },
    { media: "(prefers-color-scheme: dark)", color: "#25211c" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={fontVariables}>
      <body className="min-h-dvh bg-background text-foreground">
        {/* Applies the stored color theme before paint (no flash). */}
        <ThemeScript />
        <AppProviders>
          <SkipLink />
          <ScrollProgressBar />
          <SiteHeader />
          <main id="main" className="pt-16">
            {children}
          </main>
          <SiteFooter />
        </AppProviders>
      </body>
    </html>
  );
}
