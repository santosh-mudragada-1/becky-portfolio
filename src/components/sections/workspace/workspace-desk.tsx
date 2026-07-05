"use client";

import { motion, type Variants } from "framer-motion";

import { DeskObject } from "@/components/sections/workspace/desk-object";
import { DeskSurface } from "@/components/sections/workspace/desk-surface";
import { siteConfig } from "@/config/site";
import { deskObjects } from "@/config/workspace";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * The workspace — a Product Manager's desk viewed from above. The objects are
 * the navigation; each opens its section. The header states who this is in one
 * breath, then invites exploration. Two intentional layouts: a scattered
 * flat-lay on desktop, a tidy grid on smaller screens.
 */
export function WorkspaceDesk() {
  return (
    <section
      aria-label="Workspace — explore the desk"
      className="relative flex min-h-[calc(100dvh-4rem)] flex-col overflow-hidden"
    >
      <DeskSurface />

      {/* Identity + invitation */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="container-px relative z-10 mx-auto w-full max-w-3xl pt-10 text-center md:pt-14"
      >
        <motion.p variants={rise} className="eyebrow">
          {siteConfig.role}
        </motion.p>
        <motion.h1
          variants={rise}
          className="mt-3 text-5xl font-semibold tracking-tight sm:text-6xl"
        >
          {siteConfig.name}
        </motion.h1>
        <motion.p
          variants={rise}
          className="mx-auto mt-4 max-w-xl text-lg text-pretty text-muted-foreground"
        >
          I ship products people love — and the campaigns that make them care.
          This is my desk. Every object on it opens a part of the story.
        </motion.p>
        <motion.span
          variants={rise}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-sm font-medium shadow-xs backdrop-blur"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-75 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-success" />
          </span>
          Open to new product &amp; marketing roles
        </motion.span>
      </motion.div>

      {/* Desktop: scattered flat-lay */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="relative z-10 mx-auto hidden w-full max-w-6xl flex-1 lg:block"
      >
        {deskObjects.map((object) => (
          <DeskObject key={object.id} object={object} scatter />
        ))}

        {/* Signature: the one handwritten note on the whole desk */}
        <motion.div
          variants={rise}
          aria-hidden
          className="absolute left-[27%] top-[41%] w-40 -rotate-6"
        >
          <p className="annotation text-2xl">start with the notebook</p>
          <svg
            className="mt-1 ml-6 h-8 w-16 text-muted-foreground/70"
            viewBox="0 0 64 32"
            fill="none"
          >
            <path
              d="M60 4 C 40 6, 18 10, 6 28"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M6 28 L 16 24 M6 28 L 10 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Mobile / tablet: intentional grid */}
      <motion.ul
        initial="hidden"
        animate="show"
        variants={container}
        className="container-px relative z-10 mx-auto grid w-full max-w-2xl grid-cols-2 gap-x-4 gap-y-10 py-14 sm:grid-cols-3 lg:hidden"
      >
        {deskObjects.map((object) => (
          <li key={object.id} className="flex justify-center">
            <DeskObject object={object} />
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
