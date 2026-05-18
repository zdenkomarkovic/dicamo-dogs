import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="Di Casa Montenegro Doberman"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlays */}
        {/* <div className="absolute inset-0 bg-dark/70" /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-dark/0 via-transparent to-dark/40" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6 font-semibold">
          FCI Kennel · No. 4033
        </p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-text leading-none mb-2 tracking-wide">
          Di Casa
        </h1>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-gold leading-none mb-8 tracking-widest">
          Montenegro
        </h1>

        <div className="w-16 h-px bg-gold mx-auto mb-8" />

        <p className="text-white/90 text-lg md:text-xl tracking-widest uppercase mb-2">
          European Doberman Kennel
        </p>
        <p className="text-white/90 text-sm tracking-wider mb-12">Futog, Serbia</p>

        <p className="font-serif text-base md:text-lg text-white/70 italic leading-relaxed mb-2 max-w-2xl mx-auto">
          &ldquo;To breed and preserve this tribal race as everyone recognises and loves it — a Doberman with cropped ears.&rdquo;
        </p>
        <p className="text-xs tracking-widest uppercase text-gold mb-10">Milan Rudović</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/about"
            className="inline-block bg-gold text-dark text-sm font-bold tracking-widest uppercase px-8 py-3.5 hover:bg-gold-light transition-colors duration-300"
          >
            Our Story
          </Link>
          <Link
            href="/contact"
            className="inline-block border border-gold/50 text-gold text-sm font-bold tracking-widest uppercase px-8 py-3.5 hover:border-gold hover:bg-gold/10 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}
