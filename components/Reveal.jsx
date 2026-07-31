"use client";

import { motion } from "framer-motion";
import { useSafeReducedMotion } from "./useSafeReducedMotion";

export default function Reveal({ as = "div", className = "", style, whileHover, children }) {
  const shouldReduceMotion = useSafeReducedMotion();
  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      className={className ? `${className}` : undefined}
      style={style}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: shouldReduceMotion ? 0.2 : 0.8, ease: "easeOut" }}
      whileHover={shouldReduceMotion ? undefined : whileHover}
    >
      {children}
    </Tag>
  );
}
