/**
 * Centralized GSAP setup.
 *
 * Registers the (free) plugins once and re-exports the configured `gsap`
 * instance plus `useGSAP` so feature code never re-registers plugins ad hoc.
 *
 * Usage in a client component:
 *   "use client";
 *   import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
 */
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register once on the client. `registerPlugin` is idempotent; the module guard
// keeps Fast Refresh from re-running setup on every edit.
let registered = false;

if (typeof window !== "undefined" && !registered) {
  registered = true;

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  // Project-wide defaults so tweens feel consistent out of the box.
  gsap.defaults({ ease: "power3.out", duration: 0.7 });

  // Named custom ease matching the CSS `--ease-out-expo` token.
  gsap.registerEase("outExpo", (progress) => 1 - Math.pow(1 - progress, 4));
}

export { gsap, useGSAP, ScrollTrigger };
