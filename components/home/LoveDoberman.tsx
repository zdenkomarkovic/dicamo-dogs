"use client";

import { useState, useEffect } from "react";

const reasons = [
  "he is so loyal",
  "he is always my protector",
  "he has an energetic temperament",
  "he is intelligent and eager to learn",
  "he is infinitely loving",
];

export function LoveDoberman() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % reasons.length);
        setVisible(true);
      }, 500);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 px-6 bg-surface-2 overflow-hidden">
      {/* Decorative large background text */}
      <p
        aria-hidden
        className="absolute inset-0 flex items-center justify-center font-serif text-[12vw] font-bold text-white/[0.02] select-none pointer-events-none leading-none text-center"
      >
        DOBERMAN
      </p>

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-12 font-semibold">
          The Bond
        </p>

        <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-text/85 mb-4 tracking-wide">
          I love my Doberman because
        </p>

        <div className="h-24 md:h-28 flex items-center justify-center">
          <p
            key={index}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gold leading-tight transition-all duration-500"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            …{reasons[index]}
          </p>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-10">
          {reasons.map((_, i) => (
            <button
              key={i}
              onClick={() => { setIndex(i); setVisible(true); }}
              aria-label={`Reason ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "bg-gold w-6" : "bg-text/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
