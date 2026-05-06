import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { litters } from "@/lib/litters";
import { PedigreeTable } from "@/components/ui/PedigreeTable";

export const metadata = buildMetadata({
  title: "Puppies",
  description:
    "Available puppies and upcoming litters from Di Casa Montenegro — International FCI Doberman Kennel in Futog, Serbia.",
});

export default function PuppiesPage() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="py-20 px-6 border-b border-border">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4 font-semibold">
            Di Casa Montenegro
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-text mb-6">Puppies</h1>
        </div>
      </section>

      {/* Litters */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl space-y-24">
          {litters.map((litter) => (
            <div key={litter.letter}>
              {/* Litter header */}
              <div className="flex items-center gap-6 mb-10">
                <p className="font-serif text-6xl font-bold text-gold/20 select-none leading-none">
                  &ldquo;{litter.letter}&rdquo;
                </p>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-text">
                    &ldquo;{litter.letter}&rdquo; Litter
                  </h2>
                </div>
              </div>

              {/* Intro text */}
              <div className="max-w-2xl mb-14">
                <p className="text-text/85 text-sm leading-relaxed">
                  {litter.intro.split("\n").map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>

              {/* Parents */}
              <div>
                <div className="mb-8">
                  <p className="text-sm font-bold text-text tracking-wide">
                    PARENTS OF &ldquo;{litter.letter}&rdquo; LITTER:
                  </p>
                  <p className="text-xs tracking-widest uppercase text-gold mt-1">
                    (expected in April)
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
                  {litter.parents.map((parent) => (
                    <div key={parent.name} className="bg-dark p-8">
                      {parent.image && (
                        <div className="mb-6 w-48 overflow-hidden">
                          <Image
                            src={parent.image}
                            alt={parent.name}
                            width={400}
                            height={500}
                            className="w-full h-auto"
                          />
                        </div>
                      )}
                      <h3 className="font-serif text-xl font-bold text-text mb-1">{parent.name}</h3>
                      <p className="text-xs text-muted tracking-wide mb-5">({parent.pedigree})</p>

                      {parent.titles.length > 0 && (
                        <div className="mb-5">
                          {parent.titles.map((t) => (
                            <p
                              key={t}
                              className="text-xs tracking-widest uppercase text-gold font-semibold"
                            >
                              {t}
                            </p>
                          ))}
                        </div>
                      )}

                      <div className="space-y-4 text-sm">
                        <ul className="space-y-1">
                          {parent.health.map((h) => (
                            <li key={h} className="text-text/85 flex gap-2">
                              <span className="text-gold/50">–</span> {h}
                            </li>
                          ))}
                        </ul>
                        <p className="text-text/85">{parent.work.join(", ")}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {litter.pedigree && (
                  <div className="mt-10">
                    <PedigreeTable sire={litter.pedigree.sire} dam={litter.pedigree.dam} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
