import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

/**
 * Build a complete `Metadata` object from a few per-page overrides. Centralizes
 * Open Graph, Twitter cards, canonical URL and defaults so every route stays
 * SEO-consistent. Call from a route's `generateMetadata` or static `metadata`.
 */
export function constructMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  path = "/",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const pageTitle = title ? `${title} — ${siteConfig.name}` : siteConfig.title;

  return {
    title: pageTitle,
    description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: path,
      title: pageTitle,
      description,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630, alt: pageTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [image],
      creator: siteConfig.creator,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
    manifest: "/site.webmanifest",
  };
}
