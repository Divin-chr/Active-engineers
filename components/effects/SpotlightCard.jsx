"use client";

import { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

const glowVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1 },
};

export default function SpotlightCard({ className, children }) {
  const ref = useRef(null);
  const x = useMotionValue(50);
  const y = useMotionValue(50);
  const background = useMotionTemplate`radial-gradient(220px circle at ${x}% ${y}%, rgba(201, 163, 90, 0.18), transparent 70%)`;

  function handlePointerMove(event) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(((event.clientX - rect.left) / rect.width) * 100);
    y.set(((event.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ position: "relative", overflow: "hidden" }}
      initial="rest"
      whileHover="hover"
      onPointerMove={handlePointerMove}
    >
      <motion.div
        aria-hidden="true"
        variants={glowVariants}
        transition={{ duration: 0.3 }}
        style={{ position: "absolute", inset: 0, background, pointerEvents: "none", zIndex: 0 }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </motion.div>
  );
}
