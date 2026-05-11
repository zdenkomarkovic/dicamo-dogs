import { buildMetadata } from "@/lib/metadata";
import { LitterCard } from "./LitterCard";

export const metadata = buildMetadata({
  title: "Litters",
  description: "Past and current litters from Di Casa Montenegro Doberman kennel.",
});

type Litter = {
  title: string;
  subtitle?: string;
  father: string;
  mother: string;
  fatherImg: string;
  motherImg: string;
};

const litters: Litter[] = [
  {
    title: '"Q" LITTER (2025.)',
    subtitle: "Quake",
    father: "Flynn di Perlanera",
    mother: "Pride of Mandic Anubis",
    fatherImg: "/litters/Flynn-4-300x234.jpg",
    motherImg: "/litters/pride-of-mandic-anubis-225x300.jpg",
  },
  {
    title: '"P" LITTER (2025.)',
    subtitle: "Peter Pan, Proud Odin, Puzzle Max, Pretty Electra, Pandora",
    father: "Tahi Reme Arthur",
    mother: "Alkyra Di Casa Montenegro",
    fatherImg: "/litters/Tahi-reme-Arthur-sajt.jpg",
    motherImg: "/litters/Kira-1-e1744980113319.jpg",
  },
  {
    title: '"O" LITTER (2025.)',
    subtitle: "Osiris, Orion, Olimpia, Octavia, Oceans Ora",
    father: "Di Casa Oro Zig Zag",
    mother: "Ice Queen Di Casa Montenegro",
    fatherImg: "/litters/zig_zag_sajt.jpg",
    motherImg: "/litters/icy_sajt.jpg",
  },
  {
    title: '"B" LITTER (2024.)',
    subtitle: "Barchi, Bambi, Bella, Bianca, Bea, Boa, Blondi",
    father: "Vis Major Del Nasi",
    mother: "Una Angels of Shaytan",
    fatherImg: "/litters/Vis-Major-del-Nasi-1-e1710611876384.jpg",
    motherImg: "/litters/una-angels-of-shaytan-1024x824.jpeg",
  },
];

export default function LittersPage() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="py-20 px-6 border-b border-border">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4 font-semibold">
            Di Casa Montenegro
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-text mb-6 leading-tight">
            Litters
          </h1>
          <p className="text-text/85 text-base leading-relaxed max-w-xl">
            Past and current litters from our kennel.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {litters.map((litter) => (
            <LitterCard key={litter.title} litter={litter} />
          ))}
        </div>
      </section>
    </main>
  );
}
