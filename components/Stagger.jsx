"use client";

import { motion } from "framer-motion";
import { useSafeReducedMotion } from "./useSafeReducedMotion";

export function StaggerGroup({ as = "div", className = "", style, children }) {
  const shouldReduceMotion = useSafeReducedMotion();
  const Tag = motion[as] ?? motion.div;

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.14 },
    },
  };

  return (
    <Tag
      className={className || undefined}
      style={style}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({ as = "div", className = "", style, whileHover, children }) {
  const shouldReduceMotion = useSafeReducedMotion();
  const Tag = motion[as] ?? motion.div;

  const item = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 44 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.2 : 0.7, ease: "easeOut" },
    },
  };

  return (
    <Tag
      className={className || undefined}
      style={style}
      variants={item}
      whileHover={shouldReduceMotion ? undefined : whileHover}
    >
      {children}
    </Tag>
  );
}
