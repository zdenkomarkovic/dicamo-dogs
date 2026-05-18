"use client";

import Image from "next/image";
import { useState } from "react";
import type { SanityAnnouncement } from "@/sanity/lib/announcementQueries";

export function FloatingAnnouncements({ items }: { items: SanityAnnouncement[] }) {
  const [open, setOpen] = useState(false);

  if (items.length === 0) return null;

  return (
    <div className="fixed bottom-[88px] right-6 z-50 w-72">
      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-2 px-4 py-2.5 bg-dark border border-gold/40 text-gold text-xs tracking-widest uppercase font-semibold shadow-lg hover:border-gold transition-colors duration-200"
      >
        <span>Planned litters for 2026.</span>
        <svg
          className={`w-3 h-3 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Panel */}
      {open && (
        <div className="border border-t-0 border-gold/40 bg-dark shadow-xl max-h-[60vh] overflow-y-auto">
          {items.map((item) => (
            <div key={item.id} className="border-b border-border/50 last:border-b-0">
              {item.image && (
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.parents ?? item.tag}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}
              <div className="p-4 space-y-2">
                <p className="text-xs tracking-widest uppercase text-gold font-semibold">
                  {item.tag}
                </p>
                <p className="text-xs text-muted tracking-wide">{item.slug}</p>
                {item.parents && (
                  <p className="text-sm font-semibold text-text leading-snug">
                    {item.parents}
                  </p>
                )}
                {item.body && (
                  <p className="text-xs text-text/70 leading-relaxed">{item.body}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
