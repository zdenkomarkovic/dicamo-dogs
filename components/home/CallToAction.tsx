import Link from "next/link";

export function CallToAction() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="mx-auto max-w-3xl text-center">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold mx-auto mb-12" />
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4 font-semibold">
          Get in Touch
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mb-6">
          Interested in a Puppy?
        </h2>
        <p className="text-text/50 leading-relaxed mb-10 text-base max-w-xl mx-auto">
          We breed with care and purpose. If you are looking for a Di Casa
          Montenegro Doberman, reach out — we speak Serbian and English.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-gold text-dark text-sm font-bold tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-colors duration-300"
        >
          Contact the Kennel
        </Link>
        <div className="w-px h-16 bg-gradient-to-t from-transparent to-gold mx-auto mt-12" />
      </div>
    </section>
  );
}
