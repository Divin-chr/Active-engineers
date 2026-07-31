"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSafeReducedMotion } from "../useSafeReducedMotion";

/**
 * Shared page-hero shell. `effect` picks the one signature treatment for that page:
 * - "parallax": video drifts slower than scroll (foreground video, background-fixed feel)
 * - "kenburns": video slowly breathes/zooms in a loop
 * - "clip-reveal": static image wipes in once on mount
 * - "parallax-bg": static image as a background layer, scroll-parallaxed
 */
export default function PageHero({ media, mediaType = "video", effect = "parallax", children }) {
  const shouldReduceMotion = useSafeReducedMotion();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section className="page-hero" ref={containerRef}>
      {effect === "parallax-bg" ? (
        <motion.div
          className="page-hero-bg"
          aria-hidden="true"
          style={{
            backgroundImage: `url('${media}')`,
            y: shouldReduceMotion ? 0 : bgY,
          }}
        />
      ) : mediaType === "video" ? (
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          className="page-hero-video"
          style={effect === "parallax" && !shouldReduceMotion ? { y: parallaxY } : undefined}
          animate={
            effect === "kenburns" && !shouldReduceMotion
              ? { scale: [1, 1.08, 1] }
              : undefined
          }
          transition={
            effect === "kenburns" && !shouldReduceMotion
              ? { duration: 24, repeat: Infinity, ease: "easeInOut" }
              : undefined
          }
        >
          <source src={media} type="video/mp4" />
        </motion.video>
      ) : (
        <motion.img
          src={media}
          alt=""
          aria-hidden="true"
          className="page-hero-video"
          initial={
            effect === "clip-reveal" && !shouldReduceMotion
              ? { clipPath: "inset(0% 0 100% 0)" }
              : undefined
          }
          animate={
            effect === "clip-reveal" && !shouldReduceMotion
              ? { clipPath: "inset(0% 0 0% 0)" }
              : undefined
          }
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      )}

      <div className="container">{children}</div>
    </section>
  );
}
