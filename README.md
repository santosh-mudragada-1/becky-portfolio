# Interactive PM & Marketing Portfolio

The **foundation** for an interactive Product Manager + Marketing portfolio —
built as a polished digital product, not a résumé (see [`docs/`](docs/)). This
repo currently contains only the architecture: configuration, providers, theme
system, reusable layout, and reusable UI primitives. **No pages/sections yet.**

## Stack

Next.js 15 (App Router) · TypeScript (strict) · Tailwind CSS v4 · shadcn/ui
patterns (Radix) · GSAP + ScrollTrigger · Framer Motion · Lenis · Lucide ·
next-themes.

## Getting started

```bash
npm install
cp .env.example .env.local      # set NEXT_PUBLIC_SITE_URL
npm run dev                     # http://localhost:3000
```

Scripts: `dev`, `build`, `start`, `lint`, `typecheck`, `format`.
Visiting `/` returns 404 by design — there are no pages yet, only the shell.

## Structure

```text
src/
├── app/
│   ├── layout.tsx            # Root layout (no page): fonts, providers, header/footer, theme script
│   └── globals.css           # Design tokens (5 themes × light/dark) + @theme + base layer
├── components/
│   ├── ui/                   # Reusable primitives: Button, Card, Badge
│   ├── common/               # Logo, ModeToggle, ThemeSwitcher, ScrollProgressBar, SkipLink
│   ├── layout/               # Container, Section, SiteHeader, SiteFooter
│   ├── motion/               # Reveal, Marquee
│   ├── providers/            # AppProviders → Theme + ColorTheme + MotionConfig + SmoothScroll
│   └── sections/             # (empty) experience sections go here
├── hooks/                    # useMounted, useMediaQuery, usePrefersReducedMotion,
│                             #   useScrollProgress, useLenis, useColorTheme
├── lib/                      # utils (cn…), fonts, gsap, animations, metadata
├── config/                   # site, themes (5-theme registry), motion tokens
├── content/                  # typed content layer (projects.ts) — CMS-agnostic
└── types/                    # shared TS contracts (Project, CaseStudyStep…)
```

Path alias `@/*` → `src/*`. Each folder has a barrel `index.ts`.

## Theme system (two independent axes)

1. **Light / Dark** — `next-themes`, `.dark` class on `<html>`.
2. **Color theme** — 🟡 **Mango** (default) · 🟠 Coffee · 🟣 Grape · 🔵 Ocean ·
   🟢 Matcha, via a `[data-theme]` attribute managed by `ColorThemeProvider`
   (`useColorTheme()`), persisted to `localStorage`. A pre-hydration
   `ThemeScript` applies the stored theme before paint (no flash).

Both axes compose: e.g. `<html class="dark" data-theme="ocean">`.

### Design tokens

Authored in **OKLCH** in [`globals.css`](src/app/globals.css) as three layers:
warm shared **neutrals** + **status** + a fixed **chart** ramp, then **brand
tokens** (`primary`, `accent`, `highlight`, `brand-soft`, `ring`) overridden
per theme. `@theme inline` maps them to utilities (`bg-primary`,
`text-brand-soft-foreground`, `rounded-2xl`, `shadow-md`, `ease-out-expo`…) that
stay reactive to both axes. Rounded radii + soft, warm, layered shadows per the
docs. Playful keyframes: `animate-fade-up`, `animate-wiggle`, `animate-float`,
`animate-pop`, `animate-marquee`. Custom utilities: `text-gradient`,
`container-px`.

### Typography

Rounded & friendly: **Fredoka** (display) · **Nunito** (body) · **Caveat**
(handwriting / sticky notes) · **Space Mono** (metrics & labels) — all via
`next/font`.

## Motion & scroll

Lenis owns page scroll, driven by the single **GSAP ticker** (no jitter) with
`ScrollTrigger.update` wired in (`SmoothScrollProvider`). Use `<Reveal>` /
Framer variants (`lib/animations.ts`) for declarative reveals; the configured
GSAP instance (`lib/gsap.ts`) for scrubbed/pinned work. **Reduced motion** is
respected at every layer (CSS, `MotionConfig`, Lenis, `motion-safe:`).

## Reusable components

- **Button** — rounded, tactile; variants `default · secondary · highlight ·
  soft · outline · ghost · destructive · link`; sizes `sm · default · lg · xl ·
  icon`; `asChild`.
- **Card** (+ Header/Title/Description/Content/Footer) — variants `default ·
  soft · outline · ghost`, optional `interactive` lift-on-hover.
- **Badge** — pill for tags/categories/status.
- **Container** / **Section** — layout bounds + vertical rhythm.

## Accessibility

Skip link, focus-visible rings everywhere, labelled theme controls, semantic
landmarks (`header` / `main#main` / `footer`), reduced-motion throughout.

## Open decisions (before building sections)

- **Navigation model** — spatial "desk" workspace (objects → overlays) vs.
  routed pages. `docs/sitemap.md` leans workspace; the header intentionally has
  no section nav yet.
- **Illustration strategy** — the doodle/sticky-note aesthetic needs an asset
  source (custom / library / AI).
- **Content** — real bio, the six case studies (ClearHost, Axom, XERO AI, Morph
  AI, Hestern, StoreGrowthX), metrics, achievements, copy.
- `docs/case-study-template.md` is currently empty.

## Conventions (from `docs/claude-rules.md`)

Compose classes with `cn()`. Prefer server components; `"use client"` only where
needed. Import motion timing from `@/config/motion` (no magic numbers). Style
with semantic tokens (`bg-primary`), never raw colors. Reuse before creating.
Build one feature at a time.
