"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

type GalleryImage = { src: string; alt: string; caption?: string };

export function GallerySection({ title, images }: { title: string; images: GalleryImage[] }) {
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = expanded ? images : images.slice(0, 3);
  const hasMore = images.length > 3;

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);

  const prev = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + images.length) % images.length);
  }, [lightbox, images.length]);

  const next = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % images.length);
  }, [lightbox, images.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, prev, next]);

  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-text mb-8 pb-4 border-b border-border">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((img, i) => (
          <button
            key={img.src}
            onClick={() => openLightbox(i)}
            className="flex flex-col cursor-pointer focus:outline-none group text-left"
          >
            <div className="relative aspect-[4/3] overflow-hidden w-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                unoptimized
              />
            </div>
            {img.caption && (
              <p className="mt-2 text-xs text-muted leading-snug">{img.caption}</p>
            )}
          </button>
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="text-xs tracking-[0.3em] uppercase text-text/85 hover:text-gold transition-colors duration-200 border border-border hover:border-gold px-8 py-3"
          >
            {expanded ? "Show less ↑" : `View more (${images.length - 3} more) ↓`}
          </button>
        </div>
      )}

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-dark/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-text/60 hover:text-gold transition-colors duration-200 text-2xl leading-none z-10"
          >
            ✕
          </button>

          {/* Counter */}
          <span className="absolute top-6 left-1/2 -translate-x-1/2 text-xs tracking-widest uppercase text-muted">
            {lightbox + 1} / {images.length}
          </span>

          {/* Prev */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 text-text/60 hover:text-gold transition-colors duration-200 text-3xl leading-none z-10 p-4"
            >
              ←
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full mx-16 md:mx-24"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              width={1200}
              height={900}
              className="object-contain max-h-[85vh] w-full h-auto"
              unoptimized
            />
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 text-text/60 hover:text-gold transition-colors duration-200 text-3xl leading-none z-10 p-4"
            >
              →
            </button>
          )}
        </div>
      )}
    </div>
  );
}
