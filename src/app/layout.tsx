import type { Viewport } from "next";

import { SkipLink } from "@/components/common/skip-link";
import { PaperBackground } from "@/components/layout/paper-background";
import { SiteNav } from "@/components/layout/site-nav";
import { AppProviders } from "@/components/providers";
import { AppearanceScript } from "@/components/providers/appearance-script";
import { fontVariables } from "@/lib/fonts";
import { constructMetadata } from "@/lib/metadata";

import "./globals.css";

export const metadata = constructMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f5ef",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={fontVariables}>
      <body className="min-h-dvh text-foreground">
        <AppearanceScript />
        <AppProviders>
          <PaperBackground />
          <SkipLink />
          <SiteNav />
          <main id="main">{children}</main>
        </AppProviders>
      </body>
    </html>
  );
}
