import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Gallery",
  description:
    "Photos of Dobermans from Di Casa Montenegro kennel — International Champion dogs bred in Futog, Serbia.",
});

const images = [
  { src: "/hero.png", alt: "Di Casa Montenegro Doberman — Hero" },
  { src: "/about1.jpg", alt: "Di Casa Montenegro Doberman" },
  { src: "/about2.jpg", alt: "Di Casa Montenegro Doberman" },
];

export default function GalleryPage() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="py-20 px-6 border-b border-border">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4 font-semibold">
            Di Casa Montenegro
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-text mb-6">
            Gallery
          </h1>
          <p className="text-text/85 leading-relaxed max-w-lg">
            A selection of Dobermans bred and raised at Di Casa Montenegro kennel
            in Futog, Serbia.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <div
                key={img.src}
                className={`relative overflow-hidden group ${
                  i === 0 ? "sm:col-span-2 lg:col-span-2 aspect-[16/9]" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/0 transition-colors duration-700" />
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-muted tracking-wide">
            More images coming soon. Follow our updates for new photos.
          </p>
        </div>
      </section>
    </main>
  );
}
