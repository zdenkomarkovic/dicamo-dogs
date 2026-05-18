import { buildMetadata } from "@/lib/metadata";
import { LitterCard } from "./LitterCard";
import { getSanityLitters } from "@/sanity/lib/litterQueries";

export const metadata = buildMetadata({
  title: "Litters",
  description: "Past and current litters from Di Casa Montenegro Doberman kennel.",
});

export const revalidate = 60;

type Litter = {
  title: string;
  subtitle?: string;
  note?: string;
  father: string;
  mother: string;
  fatherImg?: string;
  motherImg?: string;
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
  {
    title: '"N" LITTER (2024.)',
    subtitle: "Nikolay, Neo Max",
    father: "Di Casa Oro Zig Zag",
    mother: "Ice Queen Di Casa Montenegro",
    fatherImg: "/litters/zig_zag_sajt.jpg",
    motherImg: "/litters/icy_sajt.jpg",
  },
  {
    title: '"R" LITTER (2024.)',
    subtitle: "Rocky Rambo, Ram page, Rio, Rusty, Rally, River, Rogan, Roxy, Raven",
    father: "IDC SG Do Baixo Mino Dior",
    mother: "Hellstorm Di Casa Montenegro",
    fatherImg: "/litters/Do-Baixo-Mino-Dior.jpg",
    motherImg: "/litters/Megi-3-1-768x580.jpg",
  },
  {
    title: '"M" LITTER (2024.)',
    subtitle: "Max, Magnum",
    father: "Vis Major Del Nasi",
    mother: "Alkyra Di Casa Montenegro",
    fatherImg: "/litters/Vis-Major-del-Nasi-1-e1710611876384.jpg",
    motherImg: "/litters/Kira-1-e1744980113319.jpg",
  },
  {
    title: '"L" LITTER (2023.)',
    subtitle: "Lenox Lewis, Lady Haifa, Lara Croft, Lex Liam",
    father: "Narkos Del Monte Aspro",
    mother: "Hellstorm Di Casa Montenegro",
    fatherImg: "/litters/Narcos-del-Monte-Aspro-300x225.jpg",
    motherImg: "/litters/Megi-3-1-768x580.jpg",
  },
  {
    title: '"K" LITTER (2023.)',
    subtitle: "Kal-El, King Kiba, Kassius Klay, Khali",
    father: "Desitiny's Phoenix Nadal",
    mother: "Alkyra Di Casa Montenegro",
    fatherImg: "/litters/nadal-2-300x271.jpg",
    motherImg: "/litters/Kira-1-e1744980113319.jpg",
  },
  {
    title: '"J" LITTER (2022.)',
    subtitle: "Jagger Sirius, John Wick, Jackpot, Josefine, Joyce, Julia, Joy",
    father: "Tahi Reme Chico",
    mother: "Freya Di Casa Montenegro",
    fatherImg: "/litters/Tahi-Réme-Chico4-1024x700.jpg",
    motherImg: "/litters/Freya-5-e1635629923242.jpg",
  },
  {
    title: '"I" LITTER (2022.)',
    subtitle: "Invictus, Icarus, Iskander, Iberio, Ikos, Immortal, Ibiza, Ines, Idyll, Irria, Ice Queen, Inka",
    father: "Dante Delle Querce Nere",
    mother: "Alkyra Di Casa Montenegro",
    fatherImg: "/litters/dante.jpg",
    motherImg: "/litters/Kira-1-e1744980113319.jpg",
  },
  {
    title: '"H" LITTER (2021.)',
    subtitle: "Hilton, Hazar, Hector, Hellstorm, Harizma, Hisar, Haiku, Harmony, Hazel",
    father: "Sky No Limit Angel of Shaytan",
    mother: "Daenery of Evel Freedom",
    fatherImg: "/litters/sky-puppies.png",
    motherImg: "/litters/daenery.jpg",
  },
  {
    title: '"G" LITTER (2021.)',
    subtitle: "Great Anubis, Geronimo, Gaiko, Geppetto, Ghost Gamon, Ginity, Grace, Geisha",
    father: "Dante Delle Querce Nere",
    mother: "Alkyra Di Casa Montenegro",
    fatherImg: "/litters/dante.jpg",
    motherImg: "/litters/Kira-1-e1744980113319.jpg",
  },
  {
    title: '"F" LITTER (2021.)',
    subtitle: "Ferrus, Faberge, Freya, Frenzi, Funny Leia, Ferrero Roche",
    father: "Sant Kreal Tyrant",
    mother: "Zara Di Casa Montenegro",
    fatherImg: "/litters/Sant-Kreal-Tyrant-1.jpg",
    motherImg: "/litters/Zara-3-300x243.jpg",
  },
  {
    title: '"E" LITTER (2020.)',
    subtitle: "Elvis, Enzo, Egor, Etna, Eureka, Elsa, Effi",
    father: "Tahi Reme Chico",
    mother: "Quirina Di Casa Montenegro",
    fatherImg: "/litters/Tahi-Réme-Chico4-1024x700.jpg",
    motherImg: "/litters/Quirina-1-e1683042410523.jpg",
  },
  {
    title: '"D" LITTER (2020.)',
    subtitle: "Dax, Dalli, Donna",
    father: "Game of Thrones Casino",
    mother: "Faery Di Casa Montenegro",
    fatherImg: "/litters/game.jpg",
    motherImg: "/litters/faery.jpg",
  },
  {
    title: '"C" LITTER (2019.)',
    subtitle: "Cinzano, Casanova, Cindarella",
    father: "Eady V Dunavstan",
    mother: "Rosarita",
    fatherImg: "/litters/eady-1.jpg",
    motherImg: "/litters/rosarita.jpg",
  },
  {
    title: '"B" LITTER (2019.)',
    subtitle: "Boogaloo, Black Brilliant, Brown Sugar, Bonita",
    father: "Cowboy Lucky Luck Di Altobello",
    mother: "Penelopa Di Casa Montenegro",
    fatherImg: "/litters/lucky-e1499195836461.jpg",
    motherImg: "/litters/Penelopa-5-naslovna-e1526234049301.jpg",
  },
  {
    title: '"A" LITTER (2018.)',
    subtitle: "Altair, Asterix, Ayax, Aikido, Alkyra, Athena",
    father: "Tahi-Reme Vito",
    mother: "Quirina Di Casa Montenegro",
    fatherImg: "/litters/Tahi-reme-Vito-e1549123537776.jpg",
    motherImg: "/litters/Quirina-1-e1683042410523.jpg",
  },
  {
    title: '"Z" LITTER (2018.)',
    subtitle: "Zeus, Zodiac, Zipo, Zorro, Zara, Zoe, Zone",
    father: "Tahi-Reme Pacino",
    mother: "Penelopa Di Casa Montenegro",
    fatherImg: "/litters/Pacino-cove-.jpg",
    motherImg: "/litters/Penelopa-5-naslovna-e1526234049301.jpg",
  },
  {
    title: '"Y" LITTER (2018.)',
    subtitle: "Yorick",
    father: "Black Jack Bluffer V Jahrestal",
    mother: "ICH Primadona Di Perlanera",
    fatherImg: "/litters/blackjack5-e1526234724594.jpg",
    motherImg: "/litters/Primadona1.jpg",
  },
  {
    title: '"X" LITTER (2018.)',
    subtitle: "Xox, X'Or, X-Nero, Xantia, Xila",
    father: "Multi CH Ruffus Di Casa Montenegro",
    mother: "Assy",
    fatherImg: "/litters/Rukic2-e1535220952447.jpg",
    motherImg: "/litters/Assy-e1520183597848.jpg",
  },
  {
    title: '"W" LITTER (2018.)',
    subtitle: "Willie, Wayne, Wesley, Westin, Winter, Walnut",
    father: "Pride of Russia Shaytan",
    mother: "Osaka Di Casa Montenegro",
    fatherImg: "/litters/Shaytan.jpg",
    motherImg: "/litters/Osaka-1.png",
  },
  {
    title: '"V" LITTER (2017.)',
    subtitle: "Vivaro, Valdo, Vitara",
    father: "Multi CH Ruffus Di Casa Montenegro",
    mother: "Lia Loca Di Casa Montenegro",
    fatherImg: "/litters/Rukic2-e1535220952447.jpg",
    motherImg: "/litters/lia-loca-Copy.png",
  },
  {
    title: '"U" LITTER (2017.)',
    subtitle: "Ugor, Ulrich, Urano, Umma, Ultima",
    father: "Sant Kreal Tyrant",
    mother: "Osaka Di Casa Montenegro",
    fatherImg: "/litters/Sant-Kreal-Tyrant-1.jpg",
    motherImg: "/litters/Osaka-1.png",
  },
  {
    title: '"T" LITTER (2017.)',
    subtitle: "Terrible Narco, Tequilla, Thor",
    father: "Gaudy Di Caresi",
    mother: "ICH Primadona Di Perlanera",
    fatherImg: "/litters/Gaudy-2.jpg",
    motherImg: "/litters/Primadona1.jpg",
  },
  {
    title: '"S" LITTER (2017.)',
    subtitle: "Simba, Sirius, Sharon Stone, Shadow",
    father: "Cowboy Lucky Luck Di Altobello",
    mother: "Odesa Di Casa Montenegro",
    fatherImg: "/litters/lucky-e1499195836461.jpg",
    motherImg: "/litters/odesa-300x259.jpg",
  },
  {
    title: '"R" LITTER (2016.)',
    subtitle: "Rufus, Russia, Rebecca, Rihana, Ria",
    father: "CH Tahi Reme Gandalf",
    mother: "CH Fanta Altobello",
    fatherImg: "/litters/Tahi-reme-Gandalf.jpg",
    motherImg: "/litters/Fanta-altobello.jpg",
  },
  {
    title: '"Q" LITTER (2016.)',
    subtitle: "Quirinus, Quinto, Queran, Quentin, Quirina, Quantanamera, Quiz, Queen Lady, Questa",
    father: "WCH IDH SG Oz Di Casa Giardino",
    mother: "ICH Primadona Di Perlanera",
    fatherImg: "/litters/oz-moj-2.jpg",
    motherImg: "/litters/Primadona1.jpg",
  },
  {
    title: '"P" LITTER (2016.)',
    subtitle: "Porto, Pepsi, Penelopa, Pride",
    father: "CH Valdo From Lipar Land",
    mother: "CH Chery Salute Di Ferro",
    fatherImg: "/litters/Valdo-fon-Lipar-Land.jpg",
    motherImg: "/litters/Cherry2.jpg",
  },
  {
    title: '"O" LITTER (2015.)',
    subtitle: "Obelix, Odin, Oktagon, Osaka, Odesa, Onyx",
    father: "CH Purgaj's Porsche Di Altobello",
    mother: "CH Faery Di Casa Montenegro",
    fatherImg: "/litters/Purgays-Porshe-di-Altobello.jpg",
    motherImg: "/litters/Faery-e1492192222746.jpg",
  },
  {
    title: '"N" LITTER (2015.)',
    subtitle: "Nitro, Naomi, Nemezis",
    father: "CH Guard Marine De Grande Vinko",
    mother: "ICH Primadona Di Perlanera",
    fatherImg: "/litters/gardy.jpg",
    motherImg: "/litters/Primadona1.jpg",
  },
  {
    title: '"M" LITTER (2015.)',
    subtitle: "Maxim, Maggio Nero, Mateo, Maximus, Mufasa, Merilin, Minerva",
    father: "CH Sheer Khan V Dunav Stam",
    mother: "CH Enigma Di Casa Montenegro",
    fatherImg: "/litters/Sheerkhan-von-Dunavstam.jpg",
    motherImg: "/litters/eni1.jpg",
  },
  {
    title: '"L" LITTER (2015.)',
    subtitle: "Larus, Lusy Liu, Laetitia, Lia Loca",
    father: "Dobergaarden Forever Orlando",
    mother: "CH Chery Salute Di Ferro",
    fatherImg: "/litters/Dobergaarden-Forever-Orlando-300x229.jpg",
    motherImg: "/litters/Cherry2.jpg",
  },
  {
    title: '"K" LITTER (2014.)',
    subtitle: "Kaliopi, Kassius Klay, Kato, Kopakabana Zico",
    father: "INT.CH Bingo Cobra",
    mother: "CH Chery Salute Di Ferro",
    fatherImg: "/litters/bingo-cobra-300x264.jpg",
    motherImg: "/litters/Cherry2.jpg",
  },
  {
    title: '"J" LITTER (2014.)',
    subtitle: "Junior, Jahrestal, Jared, Joker, Jag, Jazz",
    father: "CH Blackjack Bluffer V. Jahrestal",
    mother: "CH Enigma Di Casa Montenegro",
    fatherImg: "/litters/blackjack5-e1526234724594.jpg",
    motherImg: "/litters/eni1.jpg",
  },
  {
    title: '"I" LITTER (2013.)',
    subtitle: "Imagio, Isis, Isabela, Irria, Icy",
    father: "Tahi-Reme-Max",
    mother: "Dakota Di Casa Montenegro",
    fatherImg: "/litters/TAHI-REME-MAX.png",
    motherImg: "/litters/Dakota-nova-e1644101936448.jpg",
  },
  {
    title: '"H" LITTER (2013.)',
    subtitle: "Haragorn, Hargos, Hektor, Hanibal, Hisis, Hillo",
    father: "INT CH Obi Van Kenobi De Grande Vinko",
    mother: "CH Enigma Di Casa Montenegro",
    fatherImg: "/litters/Obi-2-years-old-300x228.jpg",
    motherImg: "/litters/eni1.jpg",
  },
  {
    title: '"F" LITTER (2012.)',
    subtitle: "Fedor, Falko, Faery, Felisity, Farah",
    father: "INTCH Ahil Von Schwartzkraft",
    mother: "CH Enigma Di Casa Montenegro",
    fatherImg: "/litters/Ahil-1-300x225.jpg",
    motherImg: "/litters/eni1.jpg",
  },
  {
    title: '"A" LITTER (27.05.2011.)',
    subtitle: "Ameriah",
    father: "Multi CH Mafia Di Modello",
    mother: "CH Wektra Life Energy's By Gile",
    fatherImg: "/litters/Mafia-Novi-Sad1-300x244.jpg",
    motherImg: "/litters/Wektra-life-energys-by-Gile-litters-300x259.jpg",
  },
  {
    title: '"E" LITTER (24.03.2010.)',
    subtitle: "Eufrat, Escalibur, Elektra, Enigma, Eko, Esmir",
    father: "Maxim Di Altobello",
    mother: "Bocasa Di Casa Montenegro",
    fatherImg: "/litters/Maxim_00-300x211.jpg",
    motherImg: "/litters/DSC00168-300x225.jpg",
  },
  {
    title: '"D" LITTER (24.07.2009.)',
    subtitle: "Dakota, Diablo, Destiny, Darafal",
    father: "Power Playboy Od Telepa",
    mother: "Bocasa Di Casa Montenegro",
    fatherImg: "/litters/Power-playboy-300x245.jpg",
    motherImg: "/litters/DSC00168-300x225.jpg",
  },
  {
    title: '"C" LITTER (14.12.2008.)',
    subtitle: "Citone",
    father: "Power Playboy Od Telepa",
    mother: "Belucci Di Casa Montenegro",
    fatherImg: "/litters/Power-playboy-300x245.jpg",
    motherImg: "/litters/luci_021-300x246.jpg",
  },
  {
    title: '"G" LITTER (06.10.2008.)',
    father: "Multi CH Mafia Di Modello",
    mother: "Borgia Di Casa Montenegro",
    fatherImg: "/litters/Mafia-Novi-Sad1-300x244.jpg",
    motherImg: "/litters/V1-SERBIAN-CH-Borgia-Di-Casa-Montenegro-300x244.jpg",
  },
  {
    title: "NO PUPPIES",
    father: "Esquido Iz Doma Domeni",
    mother: "CH Odi Opium Od Telepa",
    fatherImg: "/litters/esquido_iz_doma_domeni_bvenlbqv-300x257.jpg",
    motherImg: "/litters/odi_11-300x265.jpg",
  },
  {
    title: "NO PUPPIES",
    father: "Icarus Di Altobello Multi CH",
    mother: "CH Odi Opium Od Telepa",
    fatherImg: "/litters/icarus-ztp2-e1454341083460-300x236.jpg",
    motherImg: "/litters/odi_11-300x265.jpg",
  },
  {
    title: '"B" LITTER (03.04.2007.)',
    subtitle: "Belucci, Belissima, Bocasa",
    father: "Fedor Del Nasi",
    mother: "CH Odi Opium Od Telepa",
    fatherImg: "/litters/FEDOR-7-e1454341149145-300x244.jpg",
    motherImg: "/litters/odi_11-300x265.jpg",
  },
  {
    title: '"S" LITTER (08.07.2005.)',
    subtitle: "Sweet Sharon Stone",
    father: "Tsenturion Sant Kreal IDC 2006 Class Winner",
    mother: "CH Odi Opium Od Telepa",
    fatherImg: "/litters/Tsenturion_Sant_Kreal_02-e1454341210160-300x225.jpg",
    motherImg: "/litters/odi_11-300x265.jpg",
    note: "In cooperation with kennel OD TELEPA",
  },
];

export default async function LittersPage() {
  const sanityLitters = await getSanityLitters().catch(() => []);
  const allLitters = [...sanityLitters, ...litters];

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
          {allLitters.map((litter, i) => (
            <LitterCard key={`${litter.title}-${i}`} litter={litter} />
          ))}
        </div>
      </section>
    </main>
  );
}
