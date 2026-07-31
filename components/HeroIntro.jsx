"use client";

import { motion } from "framer-motion";
import { useSafeReducedMotion } from "./useSafeReducedMotion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.16, delayChildren: 0.1 },
  },
};

const kickerVariant = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const titleVariant = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const leadVariant = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const actionsVariant = {
  hidden: { opacity: 0, y: 12, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const reducedVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3 } },
};

export function HeroIntro({ style, children }) {
  const shouldReduceMotion = useSafeReducedMotion();

  return (
    <motion.div
      style={style}
      variants={shouldReduceMotion ? reducedVariant : container}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}

export function HeroKicker({ className, children }) {
  const shouldReduceMotion = useSafeReducedMotion();
  return (
    <motion.div className={className} variants={shouldReduceMotion ? reducedVariant : kickerVariant}>
      {children}
    </motion.div>
  );
}

export function HeroTitle({ className, style, children }) {
  const shouldReduceMotion = useSafeReducedMotion();
  return (
    <motion.h1
      className={className}
      style={style}
      variants={shouldReduceMotion ? reducedVariant : titleVariant}
    >
      {children}
    </motion.h1>
  );
}

export function HeroLead({ className, style, children }) {
  const shouldReduceMotion = useSafeReducedMotion();
  return (
    <motion.p
      className={className}
      style={style}
      variants={shouldReduceMotion ? reducedVariant : leadVariant}
    >
      {children}
    </motion.p>
  );
}

export function HeroActions({ className, children }) {
  const shouldReduceMotion = useSafeReducedMotion();
  return (
    <motion.div className={className} variants={shouldReduceMotion ? reducedVariant : actionsVariant}>
      {children}
    </motion.div>
  );
}
