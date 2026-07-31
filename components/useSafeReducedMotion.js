"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Same as framer-motion's useReducedMotion(), but always returns `false` on the
 * server and on the client's very first render, matching SSR exactly. The real
 * value is applied one tick after mount. Branching on the raw useReducedMotion()
 * value directly in render causes a server/client markup mismatch whenever the
 * visitor's OS actually has reduced motion on, which makes React discard and
 * regenerate the whole subtree on hydration - breaking whileInView/IntersectionObserver
 * wiring for that content.
 */
export function useSafeReducedMotion() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? Boolean(prefersReducedMotion) : false;
}
