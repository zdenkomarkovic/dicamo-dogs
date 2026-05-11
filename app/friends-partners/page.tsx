import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Friends & Partners",
  description: "Kennels and collaborators we trust and recommend.",
});

type Partner = { name: string; url: string; banner?: string; location?: string };
type Section = { title: string; partners: Partner[] };

const sections: Section[] = [
  {
    title: "Our Friends",
    partners: [
      { name: "Royal Vet", url: "https://www.royalvet.rs/", banner: "/friends/royal_logo1.jpg" },
      { name: "Semaco", url: "https://www.semaco.biz/sr/", banner: "/friends/logo-5a.png" },
    ],
  },
  {
    title: "Doberman Kennels",
    partners: [
      { name: "Betelges", url: "https://www.betelges.net/", banner: "/friends/betelges-logo.png" },
      { name: "Fort Bellators", url: "http://www.fortbellators.com/", banner: "/friends/logotype.png" },
      { name: "Altobello Dobermann", url: "https://www.altobellodobermann.com/", banner: "/friends/logo.png" },
      { name: "Perlanera", url: "https://www.perlanera.hu/", banner: "/friends/1111.png" },
      { name: "Del Naissus", url: "https://www.delnaissus.net/", banner: "/friends/top_02.jpg" },
    ],
  },
  {
    title: "Others",
    partners: [
      { name: "The Dobermann", url: "https://www.the-dobermann.com/", banner: "/friends/logo.jpg" },
      { name: "Dobermannseite", url: "https://www.dobermannseite.de/", banner: "/friends/cropped-logo.png" },
      { name: "Inside Dobermann", url: "https://inside-dobermann.blogspot.com/", banner: "/friends/DIblog_header2.jpg" },
      { name: "Doberbase", url: "https://doberbase.ru/", banner: "/friends/doberbase-150x150.png" },
      { name: "Dogweb", url: "https://www.dogweb.com/", banner: "/friends/cropped-dogweb_com_logo-1536x325.jpg" },
      { name: "Pet Exporters", url: "https://petexporters.com/", banner: "/friends/logo-1.png" },
    ],
  },
];

export default function FriendsPartnersPage() {
  return (
    <main className="pt-24">
      {/* Page header */}
      <section className="py-20 px-6 border-b border-border">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4 font-semibold">
            Di Casa Montenegro
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-text mb-6 leading-tight">
            Friends &amp; Partners
          </h1>
          <p className="text-text/85 text-base leading-relaxed max-w-xl">
            Kennels and collaborators we trust, respect, and recommend.
          </p>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl space-y-16">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-2xl font-bold text-text mb-8 pb-4 border-b border-border">
                {section.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.partners.map((partner) => (
                  <a
                    key={partner.url}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border border-border bg-[#444444] hover:border-gold transition-colors duration-200 flex flex-col"
                  >
                    <div className="relative w-full h-32 flex items-center justify-center">
                      {partner.banner ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={partner.banner}
                            alt={partner.name}
                            fill
                            className="object-contain p-4"
                            unoptimized
                          />
                        </div>
                      ) : (
                        <div className="px-6 py-4 flex items-center gap-3">
                          <span className="font-serif text-base font-bold text-text group-hover:text-gold transition-colors duration-200">
                            {partner.name}
                          </span>
                          {partner.location && (
                            <span className="text-xs tracking-widest uppercase text-gold">{partner.location}</span>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="border-t border-border px-4 py-2 text-center">
                      <span className="text-xs tracking-widest uppercase text-muted group-hover:text-gold transition-colors duration-200">
                        Visit {partner.name} →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
