"use client";

import { motion } from "framer-motion";
import { useSafeReducedMotion } from "../useSafeReducedMotion";

export default function UnderlineHeading({ as: Tag = "h2", className = "", children }) {
  const shouldReduceMotion = useSafeReducedMotion();

  return (
    <Tag className={className} style={{ position: "relative", display: "inline-block" }}>
      {children}
      <motion.span
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: "easeOut", delay: 0.15 }}
        style={{
          position: "absolute",
          left: 0,
          bottom: -6,
          height: 3,
          width: "100%",
          background: "var(--accent)",
          transformOrigin: "left",
          borderRadius: 2,
        }}
      />
    </Tag>
  );
}
