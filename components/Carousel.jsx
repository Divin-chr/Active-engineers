"use client";

import { useEffect, useRef, useState } from "react";

const SLIDES = [
  { src: "/assets/img/Image1 (1).jpg", alt: "Construction cranes" },
  { src: "/assets/img/Image1 (2).jpg", alt: "Bridge construction" },
  { src: "/assets/img/image1 (5).jpg", alt: "Surveying fieldwork" },
];

const INTERVAL_MS = 4000;

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(intervalRef.current);
  }, []);

  function goTo(i) {
    clearInterval(intervalRef.current);
    setIndex(i);
    intervalRef.current = setInterval(() => {
      setIndex((cur) => (cur + 1) % SLIDES.length);
    }, INTERVAL_MS);
  }

  return (
    <div className="carousel" style={{ borderRadius: 0, borderLeft: "none", borderRight: "none" }}>
      <div
        className="carousel-track"
        style={{
          width: `${SLIDES.length * 100}vw`,
          transform: `translateX(-${index * 100}vw)`,
        }}
      >
        {SLIDES.map((slide) => (
          <div className="carousel-slide" key={slide.src}>
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        {SLIDES.map((slide, i) => (
          <span
            key={slide.src}
            className={`carousel-dot${i === index ? " active" : ""}`}
            data-slide={i}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
