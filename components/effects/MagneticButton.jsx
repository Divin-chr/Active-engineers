"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useSafeReducedMotion } from "../useSafeReducedMotion";

const RADIUS = 80;
const STRENGTH = 0.35;

export default function MagneticButton({ children, ...props }) {
  const shouldReduceMotion = useSafeReducedMotion();
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  function handlePointerMove(event) {
    if (shouldReduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = event.clientX - cx;
    const dy = event.clientY - cy;
    const distance = Math.hypot(dx, dy);

    if (distance < RADIUS) {
      x.set(dx * STRENGTH);
      y.set(dy * STRENGTH);
    } else {
      x.set(0);
      y.set(0);
    }
  }

  function handlePointerLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      {...props}
    >
      {children}
    </motion.button>
  );
}
