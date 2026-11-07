"use client";

import { useSyncExternalStore } from "react";

/**
 * Hydration-safe media query: returns `false` on the server and during
 * hydration, then the live result (and re-renders when it changes).
 */
export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}
