"use client";

import { useEffect, useState } from "react";

/**
 * Returns `true` only after the component has mounted on the client. Use to
 * guard against hydration mismatches for anything that differs between server
 * and client render (resolved theme, `window`, `matchMedia`).
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
