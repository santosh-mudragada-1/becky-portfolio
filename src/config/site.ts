import { Github, Linkedin, Mail, Twitter } from "lucide-react";

import type { SocialLink } from "@/types";

/**
 * Global site configuration — single source of truth for identity, metadata
 * and contact surfaces.
 */
export const siteConfig = {
  name: "Banshika Kejriwal",
  nickname: "Becky",
  role: "Product Manager",
  title: "Banshika Kejriwal — Product Manager (call me Becky)",
  description:
    "Product Manager with 3+ years across SaaS, AI and consumer products. Ships fast, naps faster. Quirky, sarcastic, occasionally serious.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ogImage: "/og.png",
  locale: "en_US",
  email: "hello@example.com",
  resumeUrl: "/resume.pdf",
  keywords: [
    "Product Manager",
    "SaaS",
    "AI",
    "Consumer products",
    "Product Portfolio",
  ],
  creator: "@becky",
} as const;

/** Primary navigation. */
export const mainNav = [
  { title: "Projects", href: "#projects" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
] as const;

/** Social / contact links. */
export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com/in/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/", icon: Github },
  { label: "X / Twitter", href: "https://x.com/", icon: Twitter },
  { label: "Email", href: `mailto:hello@example.com`, icon: Mail },
];

export type SiteConfig = typeof siteConfig;
