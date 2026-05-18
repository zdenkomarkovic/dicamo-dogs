"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import type { NewsItem } from "@/lib/news";
import { SectionTitle } from "@/components/ui/SectionTitle";

const PER_PAGE = 10;

export function News({ items: allItems }: { items: NewsItem[] }) {
  const sorted = [...allItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const [page, setPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const totalPages = Math.ceil(sorted.length / PER_PAGE);
  const items = sorted.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const scrollToSection = () => sectionRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={sectionRef} className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <SectionTitle eyebrow="Latest" title="News" />
        </div>

        {sorted.length === 0 ? (
          <p className="text-text/85 text-sm">No news yet. Check back soon.</p>
        ) : (
          <>
            <div className="space-y-0 divide-y divide-border">
              {items.map((item) => (
                <article key={item.date + item.title} className="py-10 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6">
                  <div className="shrink-0 flex flex-col gap-4">
                    <time className="text-xs tracking-widest uppercase text-gold pt-1">
                      {new Date(item.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    {item.icon && (
                      <Image
                        src={item.icon}
                        alt=""
                        width={100}
                        height={100}
                        unoptimized
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-text mb-3">
                      {item.title}
                    </h3>
                    <div className="text-sm text-text/85 leading-relaxed space-y-3 mb-8">
                      {item.text.split("\n\n").map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                      {item.link && (
                        <p>
                          {item.link.prefix}
                          <Link href={item.link.href} className="text-gold hover:text-gold-light transition-colors duration-200">
                            {item.link.label}
                          </Link>
                          {item.link.suffix ?? ""}
                        </p>
                      )}
                    </div>
                    {item.images && item.images.length > 0 && (
                      <div className="flex flex-wrap gap-4 items-end">
                        {item.images.map((img) => (
                          <div key={img.src} className="shrink-0 overflow-hidden">
                            <Image
                              src={img.src}
                              alt={img.alt}
                              width={800}
                              height={600}
                              className={`w-auto hover:scale-105 transition-transform duration-500 ${img.portrait ? "h-[500px]" : "h-80"}`}
                              unoptimized
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-16 border-t border-border pt-10">
                <button
                  onClick={() => { setPage((p) => p - 1); scrollToSection(); }}
                  disabled={page === 1}
                  className="text-xs tracking-widest uppercase border border-border px-6 py-3 text-text/85 hover:border-gold hover:text-gold transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  ← Previous
                </button>
                <span className="text-xs tracking-widest uppercase text-muted">
                  {page} / {totalPages}
                </span>
                <button
                  onClick={() => { setPage((p) => p + 1); scrollToSection(); }}
                  disabled={page === totalPages}
                  className="text-xs tracking-widest uppercase border border-border px-6 py-3 text-text/85 hover:border-gold hover:text-gold transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Next →
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
