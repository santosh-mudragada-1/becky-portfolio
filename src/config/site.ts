import { Github, Linkedin, Mail, Twitter } from "lucide-react";

import type { SocialLink } from "@/types";

/**
 * Global site configuration — single source of truth for metadata and contact
 * surfaces. Fill in real values before launch. (Nav is intentionally absent:
 * the navigation model — spatial "desk" workspace vs. routes — is still an open
 * decision, see docs/sitemap.md.)
 */
export const siteConfig = {
  name: "Your Name",
  role: "Product Manager & Marketer",
  title: "Your Name — Product Manager & Marketer",
  description:
    "An interactive product experience — explore the workspace of a product manager and marketer who ships user-loved products and campaigns that move metrics.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ogImage: "/og.png",
  locale: "en_US",
  email: "hello@example.com",
  resumeUrl: "/resume.pdf",
  keywords: [
    "Product Manager",
    "Product Marketing",
    "Growth",
    "Go-to-Market",
    "Portfolio",
  ],
  creator: "@yourhandle",
} as const;

/** Social / contact links. */
export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com/in/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/", icon: Github },
  { label: "X / Twitter", href: "https://x.com/", icon: Twitter },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
];

export type SiteConfig = typeof siteConfig;
