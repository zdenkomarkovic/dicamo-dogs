import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { getSanityChampions } from "@/sanity/lib/championQueries";
import type { SanityChampion } from "@/sanity/lib/championQueries";

export const metadata = buildMetadata({
  title: "My Champions",
  description:
    "Champion Dobermans bred at Di Casa Montenegro — International FCI Kennel in Futog, Serbia.",
});

export const revalidate = 60;

type Champion = {
  name: string;
  titles: string[];
  pedigree?: string;
  health?: string[];
  work?: string[];
  image?: string;
  sex: "male" | "female";
};

function fromSanity(c: SanityChampion): Champion {
  return {
    name: c.name,
    image: c.imageUrl,
    sex: c.sex,
    titles: c.titles ?? [],
    pedigree: c.pedigree,
  };
}

const champions: Champion[] = [
  {
    name: "Mafia di Modello",
    titles: ["MULTI CHAMPION"],
    pedigree: "Pathos Delle Querce Nere – Damajanti di Modello",
    image: "/champions/Mafia-Novi-Sad-1.jpg",
    sex: "male",
  },
  {
    name: "Eufrat Di Casa Montenegro",
    titles: ["CHAMPION"],
    pedigree: "Maxim Di Altobello – Bocasa Di Casa Montenegro",
    image: "/champions/eufrat_di_casa_montenegro.jpg",
    sex: "male",
  },
  {
    name: "Rufus Di Casa Montenegro",
    titles: ["INTERNATIONAL CHAMPION"],
    pedigree: "Tahi-Reme Gandalf – Fanta di Altobello",
    image: "/champions/Rukić-1.jpg",
    sex: "male",
  },
  {
    name: "Dante delle Querce Nere",
    titles: ["INTERNATIONAL CHAMPION"],
    pedigree: "Ebay del Tibur – Zeta Jones delle Querce Nere",
    image: "/champions/D7-768x800.jpg",
    sex: "male",
  },
  {
    name: "Flynn di Perlanera",
    titles: ["INTERNATIONAL CHAMPION"],
    pedigree: "Jeff di Perlanera – Rumba Nera di Perlanera",
    image: "/champions/Flynn-1-768x622.jpeg",
    sex: "male",
  },
  {
    name: "Odi Opium od Telepa",
    titles: ["CHAMPION"],
    pedigree: "Horus Del Mediano – Klaudia Kardinalle od Telepa",
    image: "/champions/odi_1.jpg",
    sex: "female",
  },
  {
    name: "Bocasa Di Casa Montenegro",
    titles: ["CHAMPION"],
    pedigree: "Fedor Del Nasi – Odi Opium od Telepa",
    image: "/champions/Mia-top.jpg",
    sex: "female",
  },
  {
    name: "Dakota Di Casa Montenegro",
    titles: ["MULTI CHAMPION"],
    pedigree: "Power Playboy od Telepa – Bocasa Di Casa Montenegro",
    image: "/champions/Dakota-nova-e1635633866902.jpg",
    sex: "female",
  },
  {
    name: "Primadonna di Casa Montenegro (Donna)",
    titles: ["INTERNATIONAL CHAMPION"],
    pedigree: "Sant Kreal Zeus – Ferrari Flying di Perlanera",
    image: "/champions/Primadona-1-1.jpg",
    sex: "female",
  },
  {
    name: "Penelopa di Casa Montenegro",
    titles: ["MULTI CHAMPION"],
    pedigree: "Valdo from Lipar Land – Cherry Salute di Ferro",
    image: "/champions/Penelopa-5-naslovna-e1526234049301 (1).jpg",
    sex: "female",
  },
  {
    name: "Alkyra di Casa Montenegro",
    titles: ["CHAMPION"],
    pedigree: "Tahi Reme Vito – Quirina di Casa Montenegro",
    image: "/champions/kira-e1622919559665-768x674 (1).jpg",
    sex: "female",
  },
  {
    name: "Hellstorm di Casa Montenegro",
    titles: ["CHAMPION"],
    pedigree: "Angel's of Shaytan Sky No Limit – Daenery of Evel Freedom",
    image: "/champions/Megi-3-1-768x580 (1).jpg",
    sex: "female",
  },
];

function ChampionCard({ champion }: { champion: Champion }) {
  return (
    <div className="border border-border bg-[#444444] flex flex-col">
      {champion.image && (
        <div className="relative w-full overflow-hidden">
          <Image
            src={champion.image}
            alt={champion.name}
            width={600}
            height={600}
            className="w-full h-auto object-cover"
            unoptimized
          />
        </div>
      )}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div>
          <h2 className="font-serif text-xl font-bold text-text leading-tight">{champion.name}</h2>
          {champion.pedigree && (
            <p className="text-sm text-muted tracking-wide mt-1">{champion.pedigree}</p>
          )}
        </div>
        {champion.titles.length > 0 && (
          <div className="space-y-1">
            {champion.titles.map((t) => (
              <p key={t} className="text-xs tracking-widest uppercase text-gold font-semibold">
                {t}
              </p>
            ))}
          </div>
        )}
        {champion.health && champion.health.length > 0 && (
          <ul className="space-y-1 mt-2">
            {champion.health.map((h) => (
              <li key={h} className="text-sm text-text/85 flex gap-2">
                <span className="text-gold/50 shrink-0">–</span> {h}
              </li>
            ))}
          </ul>
        )}
        {champion.work && champion.work.length > 0 && (
          <p className="text-sm text-text/85 mt-auto pt-2 border-t border-border">
            {champion.work.join(", ")}
          </p>
        )}
      </div>
    </div>
  );
}

export default async function MyChampionsPage() {
  const sanityChampions = await getSanityChampions().catch(() => []);
  const allChampions = [...sanityChampions.map(fromSanity), ...champions];

  const males = allChampions.filter((c) => c.sex === "male");
  const females = allChampions.filter((c) => c.sex === "female");

  return (
    <main className="pt-24">
      {/* Page header */}
      <section className="py-20 px-6 border-b border-border">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4 font-semibold">
            Di Casa Montenegro
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-text mb-6 max-w-2xl leading-tight">
            My Champions
          </h1>
          <p className="text-text/85 text-base leading-relaxed max-w-xl">
            A selection of champion Dobermans bred and raised at Di Casa Montenegro kennel.
          </p>
        </div>
      </section>

      {/* Males */}
      {males.length > 0 && (
        <section className="py-20 px-6 border-b border-border">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-10 font-semibold">
              Males
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {males.map((champion) => (
                <ChampionCard key={champion.name} champion={champion} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Females */}
      {females.length > 0 && (
        <section className="py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-10 font-semibold">
              Females
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {females.map((champion) => (
                <ChampionCard key={champion.name} champion={champion} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
