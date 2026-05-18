import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { OWNER } from "@/lib/constants";

export function AboutSection() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <blockquote className="mb-16 text-center max-w-2xl mx-auto">
          <p className="font-serif text-base md:text-lg text-text/80 italic leading-relaxed">
            &ldquo;To breed and preserve this tribal race as everyone recognises and loves it —<br />a Doberman with cropped ears.&rdquo;
          </p>
          <p className="mt-2 text-xs tracking-widest uppercase text-gold">Milan Rudović</p>
        </blockquote>
      </div>

      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
        {/* Images */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/Rufus cacib niksic (1).jpg"
              alt="Di Casa Montenegro Doberman"
              fill
              className="object-cover transition-all duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Floating second image */}
          <div className="absolute -bottom-8 -right-4 w-2/5 aspect-square overflow-hidden border-4 border-dark shadow-2xl">
            <Image
              src="/breeder.jpeg"
              alt="Di Casa Montenegro Doberman"
              fill
              className="object-cover transition-all duration-700"
              sizes="20vw"
            />
          </div>
          {/* Gold accent line */}
          <div className="absolute -left-4 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-gold to-transparent" />
        </div>

        {/* Text */}
        <div>
          <SectionTitle
            eyebrow="About the Breeder"
            title={OWNER.name}
            subtitle="International FCI Judge and passionate Doberman breeder based in Futog, Serbia — on the coast of the Danube River near Novi Sad."
          />

          <div className="mt-8 space-y-4 text-text/85 leading-relaxed text-sm">
            <p>
              My relationship with Dobermans began in 1992 when I received my first female, Alisa,
              as a gift. She wasn&apos;t a show champion, but she ignited something in me — a
              lifelong passion for this noble breed.
            </p>
            <p>
              After years of learning, attending shows, and becoming an FCI judge, I registered
              kennel <span className="text-gold font-semibold">Di Casa Montenegro</span> (No. 4033)
              and fully committed to the Doberman breed.
            </p>
            <p>
              Today, dogs from my kennel can be found all around the world, and my goal remains
              unchanged: to produce healthy, noble, strong Dobermans with open character and great
              working potential.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-8">
            <div>
              <p className="font-serif text-3xl font-bold text-gold">30+</p>
              <p className="text-xs tracking-widest uppercase text-muted mt-1">Years Experience</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <p className="font-serif text-3xl font-bold text-gold">Int&apos;l</p>
              <p className="text-xs tracking-widest uppercase text-muted mt-1">FCI Champion</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <p className="font-serif text-3xl font-bold text-gold">4033</p>
              <p className="text-xs tracking-widest uppercase text-muted mt-1">Kennel No.</p>
            </div>
          </div>

          <Link
            href="/about"
            className="inline-block mt-10 text-sm tracking-widest uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors duration-200"
          >
            Read Full Story &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
