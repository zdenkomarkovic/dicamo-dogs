import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { dogs, inMemoriam, type DogDetail } from "../data";

const allDogs = [...dogs, ...inMemoriam];

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return allDogs.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const dog = allDogs.find((d) => d.slug === slug);
  if (!dog) return {};
  return buildMetadata({
    title: dog.name,
    description: `${dog.titles?.join(" ") ?? ""} ${dog.name} — Di Casa Montenegro Doberman Kennel.`.trim(),
  });
}

function PedigreeTable({ pedigree }: { pedigree: NonNullable<DogDetail["pedigree"]> }) {
  const { sire, dam } = pedigree;

  const cell = "border border-border px-4 py-3 text-sm text-text/85 align-middle";
  const headerCell = "border border-border px-4 py-2 text-xs tracking-[0.3em] uppercase text-gold font-semibold bg-surface text-center";

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse min-w-[640px]">
        <thead>
          <tr>
            <th className={headerCell}>Parents</th>
            <th className={headerCell}>Grand Parents</th>
            <th className={headerCell}>Great Grand Parents</th>
          </tr>
        </thead>
        <tbody>
          {/* Sire row group */}
          <tr>
            <td rowSpan={4} className={`${cell} font-semibold text-text align-middle`}>
              <div className="flex flex-col items-center gap-3 py-2">
                {sire.image && (
                  <div className="relative w-24 h-20 overflow-hidden shrink-0">
                    <Image src={sire.image} alt={sire.name} fill className="object-cover" unoptimized />
                  </div>
                )}
                <span className="text-center">{sire.name}</span>
              </div>
            </td>
            <td rowSpan={2} className={`${cell} font-medium`}>{sire.sire.name}</td>
            <td className={cell}>{sire.sire.sire.name}</td>
          </tr>
          <tr>
            <td className={cell}>{sire.sire.dam.name}</td>
          </tr>
          <tr>
            <td rowSpan={2} className={`${cell} font-medium`}>{sire.dam.name}</td>
            <td className={cell}>{sire.dam.sire.name}</td>
          </tr>
          <tr>
            <td className={cell}>{sire.dam.dam.name}</td>
          </tr>

          {/* Dam row group */}
          <tr>
            <td rowSpan={4} className={`${cell} font-semibold text-text align-middle`}>
              <div className="flex flex-col items-center gap-3 py-2">
                {dam.image && (
                  <div className="relative w-24 h-20 overflow-hidden shrink-0">
                    <Image src={dam.image} alt={dam.name} fill className="object-cover" unoptimized />
                  </div>
                )}
                <span className="text-center">{dam.name}</span>
              </div>
            </td>
            <td rowSpan={2} className={`${cell} font-medium`}>{dam.sire.name}</td>
            <td className={cell}>{dam.sire.sire.name}</td>
          </tr>
          <tr>
            <td className={cell}>{dam.sire.dam.name}</td>
          </tr>
          <tr>
            <td rowSpan={2} className={`${cell} font-medium`}>{dam.dam.name}</td>
            <td className={cell}>{dam.dam.sire.name}</td>
          </tr>
          <tr>
            <td className={cell}>{dam.dam.dam.name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default async function DogPage({ params }: Props) {
  const { slug } = await params;
  const dog = allDogs.find((d) => d.slug === slug);
  if (!dog) notFound();

  return (
    <main className="pt-24">
      {/* Back link */}
      <div className="px-6 pt-10 pb-0">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/my-dogs"
            className="text-xs tracking-[0.3em] uppercase text-muted hover:text-gold transition-colors duration-200"
          >
            ← My Dogs
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative w-full overflow-hidden border border-border">
            <Image
              src={dog.image}
              alt={dog.name}
              width={800}
              height={800}
              className="w-full h-auto object-cover"
              unoptimized
              priority
            />
          </div>

          <div className="flex flex-col gap-4 pt-2">
            <p className="text-xs tracking-[0.4em] uppercase text-gold font-semibold">
              Di Casa Montenegro
            </p>
            {dog.titles && dog.titles.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {dog.titles.map((t) => (
                  <span
                    key={t}
                    className="text-xs tracking-widest uppercase text-gold border border-gold/40 px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-text leading-tight">
              {dog.name}
            </h1>
            <p className="text-xs tracking-widest uppercase text-muted">
              {dog.sex === "male" ? "Male" : "Female"}
            </p>
            {dog.description && (
              <p className="text-text/85 text-sm leading-relaxed mt-2">{dog.description}</p>
            )}
          </div>
        </div>
      </section>

      {/* Pedigree */}
      {dog.pedigree && (
        <section className="py-16 px-6 border-t border-border">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-8 font-semibold">
              Pedigree
            </p>
            <PedigreeTable pedigree={dog.pedigree} />
          </div>
        </section>
      )}
    </main>
  );
}
