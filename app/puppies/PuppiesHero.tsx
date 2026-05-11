"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const images = [
  { src: "/pippieshero/Pupies-naslovna.jpg", alt: "Puppies" },
  { src: "/pippieshero/DSC_5328.jpg", alt: "Puppies" },
  { src: "/pippieshero/K-leglo.jpg", alt: "Puppies" },
  { src: "/pippieshero/Fedor-di-Casa-MNE.7.jpg", alt: "Puppies" },
  { src: "/pippieshero/female-jump.jpg", alt: "Puppies" },
  { src: "/pippieshero/Stene-braon-naslovna.jpg", alt: "Puppies" },
  { src: "/pippieshero/Fedor-3.jpg", alt: "Puppies" },
  { src: "/pippieshero/tweens-1-e1500488168265.jpg", alt: "Puppies" },
  { src: "/pippieshero/cute-dogs.jpg", alt: "Puppies" },
  { src: "/pippieshero/Dakota-Di-Casa-Montenegro.jpg", alt: "Puppies" },
  { src: "/pippieshero/Donini-malci.jpg", alt: "Puppies" },
  { src: "/pippieshero/Hargos-2.jpg", alt: "Puppies" },
  { src: "/pippieshero/male-red-1.jpg", alt: "Puppies" },
  { src: "/pippieshero/Nemesis.jpg", alt: "Puppies" },
  { src: "/pippieshero/Penelopa-2.jpg", alt: "Puppies" },
  { src: "/pippieshero/spavalice.jpg", alt: "Puppies" },
];

const grid = [
  { index: 0, style: "col-span-2 row-span-2" },
  { index: 1, style: "col-span-1 row-span-1" },
  { index: 2, style: "col-span-1 row-span-1" },
  { index: 3, style: "col-span-1 row-span-1" },
  { index: 4, style: "col-span-1 row-span-1" },
  { index: 5, style: "col-span-1 row-span-1" },
  { index: 6, style: "col-span-1 row-span-1" },
  { index: 7, style: "col-span-1 row-span-1" },
  { index: 8, style: "col-span-1 row-span-1" },
];

export function PuppiesHero() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, []);

  const next = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i + 1) % images.length));
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, prev, next]);

  return (
    <>
      {/* Hero mosaic */}
      <section className="relative w-full overflow-hidden">
        <div className="columns-4 md:columns-7 gap-1 space-y-1">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setLightbox(i)}
              className="break-inside-avoid w-full block overflow-hidden group cursor-pointer focus:outline-none relative"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={500}
                height={500}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-dark/10 group-hover:bg-dark/0 transition-colors duration-700" />
            </button>
          ))}
        </div>

        {/* Overlay text */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/20 to-dark/60 pointer-events-none" />
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3 font-semibold drop-shadow">
            Di Casa Montenegro
          </p>
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-white drop-shadow-lg">
            Puppies
          </h1>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (() => {
        const current = images[lightbox]!;
        return (
          <div
            className="fixed inset-0 z-50 bg-dark/95 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-text/60 hover:text-gold transition-colors duration-200 text-2xl leading-none z-10"
            >
              ✕
            </button>
            <span className="absolute top-6 left-1/2 -translate-x-1/2 text-xs tracking-widest uppercase text-muted">
              {lightbox + 1} / {images.length}
            </span>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 text-text/60 hover:text-gold transition-colors duration-200 text-3xl z-10 p-4"
            >
              ←
            </button>
            <div
              className="relative max-w-4xl max-h-[85vh] w-full mx-20"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={current.src}
                alt={current.alt}
                width={1200}
                height={900}
                className="object-contain max-h-[85vh] w-full h-auto"
                unoptimized
              />
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 text-text/60 hover:text-gold transition-colors duration-200 text-3xl z-10 p-4"
            >
              →
            </button>
          </div>
        );
      })()}
    </>
  );
}
