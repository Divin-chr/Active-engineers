"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";
import { useSafeReducedMotion } from "../useSafeReducedMotion";

export default function CountUpStat({ value, suffix = "", label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useSafeReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return undefined;

    if (shouldReduceMotion) {
      setDisplay(value);
      return undefined;
    }

    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });

    return () => controls.stop();
  }, [isInView, shouldReduceMotion, value]);

  return (
    <div className="stat" ref={ref}>
      <div className="num">
        {display}
        {suffix}
      </div>
      <div className="label">{label}</div>
    </div>
  );
}
