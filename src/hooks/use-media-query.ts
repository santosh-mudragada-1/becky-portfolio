"use client";

import { useEffect, useState } from "react";

/**
 * SSR-safe media query hook.
 *
 * @example const isDesktop = useMediaQuery("(min-width: 64rem)");
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [query]);

  return matches;
}

/** Semantic breakpoint helpers mirroring the Tailwind scale. */
export const useIsMobile = () => !useMediaQuery("(min-width: 48rem)");
export const useIsTablet = () => useMediaQuery("(min-width: 48rem)");
export const useIsDesktop = () => useMediaQuery("(min-width: 64rem)");
