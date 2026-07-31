"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useSafeReducedMotion } from "../useSafeReducedMotion";

const MAX_TILT_DEG = 10;

export default function TiltCard({ className, children }) {
  const shouldReduceMotion = useSafeReducedMotion();
  const ref = useRef(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 300, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 300, damping: 20 });

  function handlePointerMove(event) {
    if (shouldReduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * MAX_TILT_DEG * 2);
    rotateX.set(-py * MAX_TILT_DEG * 2);
  }

  function handlePointerLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 800 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </motion.div>
  );
}
