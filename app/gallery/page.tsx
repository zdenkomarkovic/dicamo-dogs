import { buildMetadata } from "@/lib/metadata";
import { GallerySection } from "./GallerySection";

export const metadata = buildMetadata({
  title: "Gallery",
  description:
    "Photos of Dobermans from Di Casa Montenegro kennel — International Champion dogs bred in Futog, Serbia.",
});

type GallerySectionData = { title: string; images: { src: string; alt: string }[] };

const sections: GallerySectionData[] = [
  {
    title: "Dogs with new owners",
    images: [
      { src: "/Dogs with new owners/20200403_073637-768x576.jpg", alt: "Dog with new owner", caption: "Francesco with Klay and Kaliopi in Italy" },
      { src: "/Dogs with new owners/Altair.jpg", alt: "Altair", caption: "Our Altair in France." },
      { src: "/Dogs with new owners/Ayax.jpeg", alt: "Ayax", caption: "Emmanuel and Ayax in UK." },
      { src: "/Dogs with new owners/Bonita-MDG.jpg", alt: "Bonita MDG", caption: "Our Bonita with owner in Madagascar" },
      { src: "/Dogs with new owners/Electra-Thailand.jpg", alt: "Electra Thailand", caption: "Love at first sight, our Electra in Thailand." },
      { src: "/Dogs with new owners/Hillo-work-225x300.jpg", alt: "Hillo", caption: "Hillo on practice in Ireland" },
      { src: "/Dogs with new owners/Nemezis-run.jpg", alt: "Nemezis", caption: "Nemezis on competition with her owner in France" },
      { src: "/Dogs with new owners/Obelix-sada-768x768.jpg", alt: "Obelix", caption: "Obelix and Denise in Portugal." },
      { src: "/Dogs with new owners/Porto-7-e1509291479594-768x906.jpg", alt: "Porto", caption: "Porto with his little owner in Italy" },
      { src: "/Dogs with new owners/Queran-int-ch-768x614.jpg", alt: "Queran Int Ch", caption: "Queran and Julie in Florida (USA)" },
      { src: "/Dogs with new owners/Simba-Austria-768x576.jpg", alt: "Simba Austria", caption: "Simba with new owners in Austria" },
      { src: "/Dogs with new owners/Sirius-4.jpg", alt: "Sirius", caption: "Sirius and Stefan in Sweden." },
      { src: "/Dogs with new owners/Tequila-e1509291942691-633x1024.jpg", alt: "Tequila", caption: "Tequila and Christian in Germany" },
      { src: "/Dogs with new owners/Xor-768x768.jpg", alt: "Xor", caption: "X'or and Stephanie in France" },
    ],
  },
  {
    title: "My judging",
    images: [
      { src: "/My judging/ЈА-1-а-891x1024.jpg", alt: "Judging", caption: "I AM INTERNATIONAL FCI JUDGE FOR I, II AND VII GROUP. THESE ARE SOME OF MY MEMORIES!" },
      { src: "/My judging/2.jpg", alt: "Judging", caption: "CAC KULA" },
      { src: "/My judging/AJAX-BACKA-BALANKA-06-BIS-BEBY-Pozdrav-od-KOVACHEV-KENNEL-ST.-BERNARD-Tavankut.jpg", alt: "Ajax Backa Palanka", caption: "CAC Bačka Palanka – Junior Handler Winners" },
      { src: "/My judging/cac-srbobran-2.jpg", alt: "CAC Srbobran", caption: "CAC Srbobran (Serbia)" },
      { src: "/My judging/CAC-Srbobran-3.jpg", alt: "CAC Srbobran", caption: "CAC Srbobran (Serbia)" },
      { src: "/My judging/CACIB-Bijelo-Polje-768x576.jpg", alt: "CACIB Bijelo Polje", caption: "CACIB Bijelo Polje (MNE)" },
      { src: "/My judging/DSCF2024.jpg", alt: "Judging", caption: "ME… IN ACTION" },
      { src: "/My judging/Suđenje-Šid-2-768x510.jpg", alt: "Judging Šid", caption: "CAC Šid (Serbia)" },
      { src: "/My judging/Suđenje-Šid.jpg", alt: "Judging Šid", caption: "CAC Šid (Serbia)" },
      { src: "/My judging/Šid-suđenje-768x576.jpg", alt: "Šid judging", caption: "CAC Šid (Serbia)" },
    ],
  },
  {
    title: "Me with friends",
    images: [
      { src: "/Me with friends/1-768x576.jpg", alt: "Me with friends", caption: "Doberman kennel di casa Giardino! With my friend Massimiliano and famous Oz" },
      { src: "/Me with friends/belko.jpg", alt: "Belko", caption: "Mr Gotal (Larson and Gabon owner), myself and Dobermann legend – Mr Belko (Royal Bell kennel) on Eurodog Show Zagreb 2007, Croatia" },
      { src: "/Me with friends/dobremann_club_show_99.jpg", alt: "Dobermann Club Show 99", caption: "Dobermann Club Show Novi Sad 1999 I (as a ringstewart) with Mr Avi Marshak and all winners" },
      { src: "/Me with friends/Erika-577x1024.jpg", alt: "Erika", caption: "With Erika Szokol (Tahi-Reme kennel)" },
      { src: "/Me with friends/Euro-Grand-prix.jpg", alt: "Euro Grand Prix", caption: "With all competitors on Euro Doberman Grand Prix" },
      { src: "/Me with friends/Friends-di-Casa-MNE-Dockerman-2.jpg", alt: "Friends Di Casa Montenegro", caption: "ADRIATIC CUP – BAR (MNE) With my dear friend William (Dockerman kenel)" },
      { src: "/Me with friends/HDK-2011.-Breakfast.jpg", alt: "HDK 2011 Breakfast", caption: "HDK 2011. – Breakfast" },
      { src: "/Me with friends/HDK-2011.-winners-from-Serbia.jpg", alt: "HDK 2011 Winners from Serbia", caption: "HDK 2011. – winners from Serbia" },
      { src: "/Me with friends/idc-dinner.jpg", alt: "IDC Dinner", caption: "IDC Winner (Hungary 2006) Standing: Mr Lodi (Hunoterra kennel), Mr Salov (Od Telepa kennel), Me Sitting: Mr Prospieri (Campovalano kennel)" },
      { src: "/Me with friends/IMG_20170323_150125-768x1024.jpg", alt: "Me with friends", caption: "Me and my friends with Gaudi di Caresi at Caresi Kennel!" },
      { src: "/Me with friends/IMG_2948-768x576.jpg", alt: "Me with friends", caption: "IDC 2009." },
      { src: "/Me with friends/MG_6141-768x512.jpg", alt: "Me with friends", caption: "IDC 2009 – RELAXING WITH FRIENDS AFTER DOG SHOW" },
      { src: "/Me with friends/MG_6143-768x512.jpg", alt: "Me with friends", caption: "IDC 2009 – RELAXING AFTER DOG SHOW" },
      { src: "/Me with friends/Mr-Hul-and-me.jpg", alt: "Mr Hul and me", caption: "ADRIATIC CUP – BAR (MNE) With my good friend John Hull (Gaindyke kennel)" },
      { src: "/Me with friends/Ridarcikova-Ruma.jpg", alt: "Ridarcikova Ruma", caption: "ME AND RIDARCHIKOVA (FCI JUDGE AND OWNER OF DOBERMAN KENNEL Z TOMKY)" },
    ],
  },
  {
    title: "Funny dogs",
    images: [
      { src: "/Funny dogs/20240323_135811-768x832.jpg", alt: "Funny dog", caption: "With Baixo Mino Dior – IDC Sieger" },
      { src: "/Funny dogs/cute-dogs1.jpg", alt: "Funny dog" },
    ],
  },
];

export default function GalleryPage() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="py-20 px-6 border-b border-border">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4 font-semibold">
            Di Casa Montenegro
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-text mb-6">
            Gallery
          </h1>
          <p className="text-text/85 leading-relaxed max-w-lg">
            A selection of Dobermans bred and raised at Di Casa Montenegro kennel
            in Futog, Serbia.
          </p>
        </div>
      </section>

      {/* Gallery sections */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl space-y-20">
          {sections.map((section) => (
            <GallerySection
              key={section.title}
              title={section.title}
              images={section.images}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
