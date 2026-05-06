import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function GalleryPreview() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-6">
          <SectionTitle
            eyebrow="Gallery"
            title="Our Dobermans"
          />
          <Link
            href="/gallery"
            className="text-sm tracking-widest uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors duration-200 shrink-0"
          >
            View All &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] overflow-hidden group">
            <Image
              src="/about1.jpg"
              alt="Di Casa Montenegro Doberman"
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/0 transition-colors duration-700" />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden group sm:mt-16">
            <Image
              src="/about2.jpg"
              alt="Di Casa Montenegro Doberman"
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/0 transition-colors duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
