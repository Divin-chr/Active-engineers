"use client";

import dynamic from "next/dynamic";
import { Suspense, useRef } from "react";
import { useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useSafeReducedMotion } from "../useSafeReducedMotion";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

function CanvasFallback() {
  return <div className="hero-canvas-fallback" aria-hidden="true" />;
}

export default function HeroCanvas({ children }) {
  const prefersReducedMotion = useSafeReducedMotion();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const cameraZ = useTransform(scrollYProgress, [0, 1], [16, 11]);
  const cameraY = useTransform(scrollYProgress, [0, 1], [4, 7]);

  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);
  const mouseX = useSpring(rawMouseX, { stiffness: 60, damping: 20 });
  const mouseY = useSpring(rawMouseY, { stiffness: 60, damping: 20 });

  function handlePointerMove(event) {
    if (prefersReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    rawMouseX.set(((event.clientX - rect.left) / rect.width) * 2 - 1);
    rawMouseY.set(((event.clientY - rect.top) / rect.height) * 2 - 1);
  }

  function handlePointerLeave() {
    rawMouseX.set(0);
    rawMouseY.set(0);
  }

  if (prefersReducedMotion) {
    return (
      <div ref={containerRef} className="hero-interactive">
        <div className="hero-canvas hero-canvas-fallback" aria-hidden="true" />
        {children}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="hero-interactive"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="hero-canvas" aria-hidden="true">
        <Suspense fallback={<CanvasFallback />}>
          <Scene cameraZ={cameraZ} cameraY={cameraY} mouseX={mouseX} mouseY={mouseY} />
        </Suspense>
      </div>
      {children}
    </div>
  );
}
