"use client";

import { useState } from "react";

type Entry = {
  id?: number;
  date: string;
  name: string;
  email: string;
  location: string;
  message: string;
};

const PER_PAGE = 10;

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function GuestbookEntries({ entries }: { entries: Entry[] }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(entries.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const visible = entries.slice(start, start + PER_PAGE);

  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-6">
          {visible.map((entry) => (
            <article
              key={entry.id ?? entry.date + entry.name}
              className="border border-border bg-surface p-8"
            >
              <div className="flex justify-end mb-6 pb-4 border-b border-border">
                <span className="text-xs text-muted tracking-wider">
                  {formatDate(entry.date)}
                </span>
              </div>

              <dl className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 text-sm">
                {[
                  { label: "Name", value: entry.name },
                  { label: "Location", value: entry.location },
                  ...(entry.email ? [{ label: "Email", value: entry.email }] : []),
                ].filter(({ value }) => value).map(({ label, value }) => (
                  <div key={label} className="flex gap-4">
                    <dt className="w-20 shrink-0 text-muted text-xs tracking-wider uppercase self-start pt-0.5">
                      {label}
                    </dt>
                    <dd className="text-text/85">{value}</dd>
                  </div>
                ))}
              </dl>

              <blockquote className="border-l-2 border-gold pl-5 text-sm text-text/85 leading-relaxed italic">
                {entry.message}
              </blockquote>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
            <button
              onClick={() => { setPage((p) => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              disabled={page === 1}
              className="text-xs tracking-widest uppercase text-text/85 hover:text-gold transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
            >
              ← Prev
            </button>

            {/* Mobile: page counter */}
            <span className="text-xs text-muted tracking-wider md:hidden">
              {page} / {totalPages}
            </span>

            {/* Desktop: page numbers */}
            <div className="hidden md:flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
                const show = p === 1 || p === totalPages || Math.abs(p - page) <= 1;
                const showEllipsisBefore = p === page - 2 && page - 2 > 1;
                const showEllipsisAfter = p === page + 2 && page + 2 < totalPages;
                if (!show && !showEllipsisBefore && !showEllipsisAfter) return null;
                if (showEllipsisBefore || showEllipsisAfter) {
                  return <span key={`e${p}`} className="text-muted px-1">…</span>;
                }
                return (
                  <button
                    key={p}
                    onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className={`w-8 h-8 text-xs tracking-wider transition-colors duration-200 ${
                      p === page
                        ? "bg-gold text-dark font-semibold"
                        : "text-text/85 hover:text-gold border border-border hover:border-gold"
                    }`}
                  >
                    {p}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => { setPage((p) => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              disabled={page === totalPages}
              className="text-xs tracking-widest uppercase text-text/85 hover:text-gold transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
