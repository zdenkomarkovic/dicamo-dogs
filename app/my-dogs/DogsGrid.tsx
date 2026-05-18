"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { DogDetail } from "./data";

type Filter = "all" | "male" | "female";

function DogCard({ dog }: { dog: DogDetail }) {
  return (
    <Link
      href={`/my-dogs/${dog.slug}`}
      className="group border border-border bg-[#444444] flex flex-col hover:border-gold/60 transition-colors duration-300"
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={dog.image}
          alt={dog.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized
        />
      </div>
      <div className="px-5 py-4">
        {dog.titles && dog.titles.length > 0 && (
          <p className="text-xs tracking-widest uppercase text-gold font-semibold mb-1">
            {dog.titles.join(" ")}
          </p>
        )}
        <h2 className="font-serif text-lg font-bold text-text leading-tight group-hover:text-gold transition-colors duration-200">
          {dog.name}
        </h2>
        <p className="text-xs tracking-widest uppercase text-muted mt-1">
          {dog.sex === "male" ? "Male" : "Female"}
        </p>
      </div>
    </Link>
  );
}

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "male", label: "Males" },
  { value: "female", label: "Females" },
];

export function DogsGrid({ dogs }: { dogs: DogDetail[] }) {
  const [active, setActive] = useState<Filter>("all");

  const visible = active === "all" ? dogs : dogs.filter((d) => d.sex === active);

  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Filter bar */}
        <div className="flex gap-3 mb-12">
          {FILTERS.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setActive(value)}
              className={`text-xs tracking-[0.3em] uppercase px-6 py-3 border transition-colors duration-200 ${
                active === value
                  ? "border-gold text-gold"
                  : "border-border text-text/60 hover:border-text/40 hover:text-text/85"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((dog) => (
            <DogCard key={dog.slug} dog={dog} />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-muted text-sm tracking-wide">No dogs found.</p>
        )}
      </div>
    </section>
  );
}
