import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { litters } from "@/lib/litters";
import { getSanityPuppyLitters } from "@/sanity/lib/puppyLitterQueries";
import { PedigreeToggle } from "@/components/ui/PedigreeToggle";
import { PuppiesHero } from "./PuppiesHero";

export const metadata = buildMetadata({
  title: "Puppies",
  description:
    "Available puppies and upcoming litters from Di Casa Montenegro — International FCI Doberman Kennel in Futog, Serbia.",
});

export const revalidate = 60;

export default async function PuppiesPage() {
  const sanityLitters = await getSanityPuppyLitters().catch(() => []);
  const allLitters = [...sanityLitters, ...litters];

  return (
    <main className="pt-24">
      <PuppiesHero />

      {/* Litters */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl space-y-20">
          {allLitters.map((litter) => (
            <div key={litter.letter} className="border border-border">
              {/* Litter header */}
              <div className="flex items-center gap-6 px-8 py-6 border-b border-border bg-[#1a1a1a]">
                <span className="font-serif text-5xl font-bold text-gold/30 select-none leading-none">
                  &ldquo;{litter.letter}&rdquo;
                </span>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-text">
                    &ldquo;{litter.letter}&rdquo; Litter
                  </h2>
                  <p className="text-xs tracking-widest uppercase text-gold mt-1">
                    {litter.expectedDate}
                  </p>
                </div>
              </div>

              {/* Intro text */}
              <div className="px-8 py-8 border-b border-border">
                <div className="max-w-2xl text-text/85 text-base leading-relaxed space-y-1 text-center mx-auto">
                  {litter.intro.split("\n").map((line, i) => (
                    <p key={i} className={line === "" ? "h-3" : ""}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              {/* Parents */}
              {litter.parents && (
                <div>
                  <div className="px-8 py-4 border-b border-border bg-[#1a1a1a]">
                    <p className="text-xs tracking-[0.3em] uppercase text-muted font-semibold">
                      Parents of &ldquo;{litter.letter}&rdquo; Litter
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                    {litter.parents.map((parent) => (
                      <div key={parent.name} className="p-8 flex flex-col gap-6">
                        {parent.image && (
                          <div className="relative w-full overflow-hidden">
                            <Image
                              src={parent.image}
                              alt={parent.name}
                              width={700}
                              height={700}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <h3 className="font-serif text-2xl font-bold text-text">{parent.name}</h3>
                          <p className="text-sm text-muted tracking-wide mt-1 mb-4">
                            {parent.pedigree}
                          </p>
                          {parent.titles.length > 0 && (
                            <div className="mb-4 space-y-1">
                              {parent.titles.map((t) => (
                                <p key={t} className="text-sm tracking-widest uppercase text-gold font-semibold">
                                  {t}
                                </p>
                              ))}
                            </div>
                          )}
                          <ul className="space-y-2 mb-4">
                            {parent.health.map((h) => (
                              <li key={h} className="text-base text-text/85 flex gap-2">
                                <span className="text-gold/50 shrink-0">–</span> {h}
                              </li>
                            ))}
                          </ul>
                          {parent.work.length > 0 && (
                            <p className="text-base text-text/85">{parent.work.join(", ")}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pedigree */}
              {litter.pedigree && (
                <div className="px-8 py-6 border-t border-border bg-[#1a1a1a]">
                  <PedigreeToggle sire={litter.pedigree.sire} dam={litter.pedigree.dam} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
