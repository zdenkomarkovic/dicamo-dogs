import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { DogsGrid } from "./DogsGrid";
import { dogs as staticDogs, inMemoriam as staticInMemoriam } from "./data";
import type { DogDetail } from "./data";
import { getSanityDogs } from "@/sanity/lib/dogQueries";

export const metadata = buildMetadata({
  title: "My Dogs",
  description:
    "Current Dobermans at Di Casa Montenegro — International FCI Kennel in Futog, Serbia.",
});

export const revalidate = 60;

function toDogDetail(s: Awaited<ReturnType<typeof getSanityDogs>>[number]): DogDetail {
  return {
    slug: s.slug,
    name: s.name,
    image: s.imageUrl,
    sex: s.sex,
    titles: s.titles,
    description: s.description,
    pedigree: s.pedigree as DogDetail["pedigree"],
  };
}

function InMemoriamCard({ dog }: { dog: DogDetail }) {
  return (
    <Link
      href={`/my-dogs/${dog.slug}`}
      className="group border border-border/50 bg-[#333333] flex flex-col hover:border-gold/40 transition-colors duration-300"
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={dog.image}
          alt={dog.name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized
        />
      </div>
      <div className="px-5 py-4">
        {dog.titles && dog.titles.length > 0 && (
          <p className="text-xs tracking-widest uppercase text-gold/70 font-semibold mb-1">
            {dog.titles.join(" ")}
          </p>
        )}
        <h2 className="font-serif text-lg font-bold text-text/70 leading-tight group-hover:text-text transition-colors duration-200">
          {dog.name}
        </h2>
        <p className="text-xs tracking-widest uppercase text-muted/60 mt-1">
          {dog.sex === "male" ? "Male" : "Female"}
        </p>
      </div>
    </Link>
  );
}

export default async function MyDogsPage() {
  const sanityDogs = await getSanityDogs().catch(() => []);

  const sanityActive = sanityDogs.filter((d) => !d.inMemoriam).map(toDogDetail);
  const sanityMemoriam = sanityDogs.filter((d) => d.inMemoriam).map(toDogDetail);

  const allDogs = [...sanityActive, ...staticDogs];
  const allMemoriam = [...sanityMemoriam, ...staticInMemoriam];

  return (
    <main className="pt-24">
      <section className="py-20 px-6 border-b border-border">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4 font-semibold">
            Di Casa Montenegro
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-text mb-6 max-w-2xl leading-tight">
            My Dogs
          </h1>
          <p className="text-text/85 text-base leading-relaxed max-w-xl">
            The Dobermans currently living and breeding at Di Casa Montenegro kennel in Futog, Serbia.
          </p>
        </div>
      </section>

      <DogsGrid dogs={allDogs} />

      {allMemoriam.length > 0 && (
        <section className="py-20 px-6 border-t border-border/50 bg-surface">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs tracking-[0.4em] uppercase text-muted mb-2 font-semibold">
              Di Casa Montenegro
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text/60 mb-3 leading-tight">
              In Memoriam
            </h2>
            <p className="text-text/50 text-sm leading-relaxed max-w-xl mb-12">
              Forever in our hearts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allMemoriam.map((dog) => (
                <InMemoriamCard key={dog.slug} dog={dog} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
