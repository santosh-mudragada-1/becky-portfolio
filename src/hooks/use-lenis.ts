"use client";

/**
 * Access the shared Lenis instance created by `SmoothScrollProvider`.
 * Re-exported from `lenis/react` so feature code imports from one place.
 *
 * @example
 *   const lenis = useLenis();
 *   lenis?.scrollTo("#contact", { offset: -80 });
 */
export { useLenis } from "lenis/react";
