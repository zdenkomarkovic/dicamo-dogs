"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

type Litter = {
  title: string;
  subtitle?: string;
  note?: string;
  father: string;
  mother: string;
  fatherImg?: string;
  motherImg?: string;
};

export function LitterCard({ litter }: { litter: Litter }) {
  const images = [
    litter.fatherImg ? { src: litter.fatherImg, alt: litter.father } : null,
    litter.motherImg ? { src: litter.motherImg, alt: litter.mother } : null,
  ].filter(Boolean) as { src: string; alt: string }[];
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);

  const next = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

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
      <div className="border border-border bg-[#444444]">
        {/* Images */}
        <div className={`grid gap-2 p-4 ${images.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}>
          {images.map((img, i) => (
            <div key={img.src} className="flex flex-col items-center gap-2">
              <button
                onClick={() => setLightbox(i)}
                className="relative h-56 w-full cursor-pointer focus:outline-none group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain group-hover:opacity-90 transition-opacity duration-200"
                  unoptimized
                />
              </button>
              <p className="text-xs tracking-wide text-muted text-center">{img.alt}</p>
            </div>
          ))}
        </div>

        {/* Text */}
        <div className="p-6 border-t border-border">
          <h2 className="font-serif text-xl font-bold text-text mb-1">
            {litter.title}
          </h2>
          {litter.note && (
            <p className="text-xs tracking-wider text-muted italic mb-2">
              {litter.note}
            </p>
          )}
          {litter.subtitle && (
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              {litter.subtitle}
            </p>
          )}
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex gap-3">
              <dt className="text-muted text-xs tracking-wider uppercase w-16 shrink-0 pt-0.5">Father</dt>
              <dd className="text-text/85">{litter.father}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-muted text-xs tracking-wider uppercase w-16 shrink-0 pt-0.5">Mother</dt>
              <dd className="text-text/85">{litter.mother}</dd>
            </div>
          </dl>
        </div>
      </div>

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

          <span className="absolute top-6 left-1/2 -translate-x-1/2 text-sm tracking-wide text-text/80">
            {current.alt}
          </span>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 text-text/60 hover:text-gold transition-colors duration-200 text-3xl z-10 p-4"
          >
            ←
          </button>

          <div
            className="relative max-w-3xl max-h-[85vh] w-full mx-20"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              width={900}
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
