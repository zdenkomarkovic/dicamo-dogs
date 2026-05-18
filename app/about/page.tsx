import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CONTACT, OWNER } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "About",
  description:
    "The story of Milan Rudović and Di Casa Montenegro — an International FCI Doberman kennel with a passion for the breed.",
});

const history = [
  {
    year: "1992",
    title: "The Beginning",
    text: "I was given my first female Doberman as a gift — she was called Alisa. She wasn't a show champion, but she made something spark in me, and that's why I'm crazy about dogs to this day.",
  },
  {
    year: "1995",
    title: "First Steps",
    text: "I bought two females: Baby Black and Pella Altobello, from one of the most promising litters at the time. Difficult times followed — Alisa died of gastric torsion, Pella was killed by a drunk driver. Heartbroken, I gave Baby Black to a friend.",
  },
  {
    year: "1997",
    title: "A Year Without Dogs",
    text: "For a year and a half I had no dogs. I attended shows, met breeders, deepened my knowledge of Dobermans, and in the meantime became an FCI judge. But without dogs, my backyard was empty — like my soul.",
  },
  {
    year: "2000s",
    title: "Great Danes & Kennel Registration",
    text: "I started breeding Great Danes, earning some national and regional championships. But it wasn't the same. I registered kennel Di Casa Montenegro, number 4033, under the FCI. The Danes looked like Dobermans to me — but they didn't satisfy my expectations.",
  },
  {
    year: "Return",
    title: "Back to Dobermans",
    text: "I returned to my favourite breed. Od Telepa kennel helped me enormously in that transition. My first Doberman litter was out of Odi Opium od Telepa, sired by Sant Kreal Tsenturion — the puppies were registered under Od Telepa kennel. My next litter, bred with Fedor del Nasi, was excellent. I kept two females: Bocasa and Belucci.",
  },
  {
    year: "Hungary",
    title: "Primadonna (Donna) di Perlanera",
    text: "I realised I needed new blood in the kennel and chose to bring a puppy from the renowned Perlanera kennel in Hungary — Primadonna (Donna) di Perlanera. She grew into a beautiful dog, achieved International Champion status, and became the foundation of my breeding programme.",
  },
  {
    year: "Today",
    title: "A Global Kennel",
    text: "Primadonna (Donna) was bred with many famous dogs: Guard de Marine de Grande Vinko, Oz di Casa Giardino, Blackjack Bluffer v Jahrestal, and Gaudi di Caresi. Today, dogs from Di Casa Montenegro can be found all around the world. My customers have become friends, and their kind words give me the strength to continue — to breed and preserve this tribal race as everyone recognises and loves it. A Doberman with cropped ears.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* Page header */}
      <section className="py-20 px-6 border-b border-border">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4 font-semibold">
            Di Casa Montenegro
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-text mb-6 max-w-2xl leading-tight">
            The Story of the Kennel
          </h1>
          <p className="text-text/85 text-base leading-relaxed max-w-xl">
            A lifelong passion for Dobermans, three decades of breeding, and a commitment to
            preserving one of the world&apos;s most iconic working breeds.
          </p>
        </div>
      </section>

      {/* Breeder profile */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionTitle
              eyebrow="The Breeder"
              title={OWNER.name}
              subtitle={`${OWNER.title} · Di Casa Montenegro · Futog, Serbia`}
            />
            <div className="mt-8 space-y-4 text-sm text-text/85 leading-relaxed">
              <p>
                I live in Futog, a place located on the coast of the Danube River near Novi Sad,
                Serbia. My name is Milan Rudović, and I am an International FCI judge with a deep
                love for the Doberman breed.
              </p>
              <p>
                My goal has always been clear: to produce healthy, noble, strong Dobermans with open
                character and big potential for work. Every breeding decision I make is guided by
                that single purpose.
              </p>
            </div>

            {/* Contact details */}
            <div className="mt-10 p-6 bg-surface border border-border">
              <h3 className="text-xs tracking-widest uppercase text-gold mb-5 font-semibold">
                Contact Details
              </h3>
              <dl className="space-y-3 text-sm">
                {[
                  { label: "Location", value: `${CONTACT.zip} Futog, Serbia` },
                  { label: "Tel", value: CONTACT.phone },
                  { label: "Mobile", value: CONTACT.mobile },
                  { label: "Email", value: CONTACT.email },
                  { label: "Languages", value: CONTACT.languages },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-4">
                    <dt className="w-24 shrink-0 text-muted text-xs tracking-wider uppercase self-start pt-0.5">
                      {label}
                    </dt>
                    <dd className="text-text/85">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/Rufus cacib niksic (1).jpg"
                alt="Di Casa Montenegro Doberman"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden mt-8">
              <Image
                src="/breeder.jpeg"
                alt="Di Casa Montenegro Doberman"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16">
            <SectionTitle eyebrow="History" title="Three Decades of Breeding" />
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            <div className="space-y-0">
              {history.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 pb-16 ${
                    i % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-gold border-2 border-dark md:-translate-x-1.5 -translate-x-1.5" />

                  {/* Left column (even) / Right column (odd) */}
                  {i % 2 === 0 ? (
                    <>
                      <div className="pl-8 md:pl-0 md:pr-16 md:text-right">
                        <p className="font-serif text-2xl font-bold text-gold mb-1">{item.year}</p>
                        <h3 className="font-serif text-xl font-bold text-text mb-3">
                          {item.title}
                        </h3>
                        <p className="text-sm text-text/85 leading-relaxed">{item.text}</p>
                      </div>
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <div className="pl-8 md:pl-16">
                        <p className="font-serif text-2xl font-bold text-gold mb-1">{item.year}</p>
                        <h3 className="font-serif text-xl font-bold text-text mb-3">
                          {item.title}
                        </h3>
                        <p className="text-sm text-text/85 leading-relaxed">{item.text}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
