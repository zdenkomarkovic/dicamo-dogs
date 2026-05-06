export type NewsItem = {
  date: string;
  title: string;
  text: string;
  icon?: string;
  link?: { href: string; label: string; prefix: string };
  images?: { src: string; alt: string; portrait?: boolean }[];
};

export const news: NewsItem[] = [
  {
    date: "2026-02-21",
    title: "New Mating in Our Kennel",
    text: "Ciceron & Alkyra\n\nWe expect puppies around 21. April.",
    link: { href: "/puppies", label: "here", prefix: 'More details "' },
    icon: "/sapa.png",
    images: [
      { src: "/Ciceron-sedi.jpg", alt: "Ciceron", portrait: true },
      { src: "/Alkyra-sedi--e1622543469142.jpg", alt: "Alkyra", portrait: true },
    ],
  },
  {
    date: "2026-03-17",
    title: "Greetings from Italy",
    text: "XANADU DI CASA MONTENEGRO\n\n(Ruffus di Casa Montenegro – Assy)",
    icon: "/Italy-150x150.png",
    images: [
      { src: "/Xantia-Yuma.jpg", alt: "Xanadu di Casa Montenegro" },
    ],
  },
  {
    date: "2026-04-24",
    title: "New Mating!",
    text: "INT.CH FLYNN DI PERLANERA & CH ICE QUEEN DI CASA MONTENEGRO\n\nWe expect a great litter from this combination. Puppies will have top bloodlines, strong body, noble and open character, good health.\n\nI have big expectations from this litter and I can't wait to see them.",
    icon: "/sapa.png",
    images: [
      { src: "/Flynn-za-sajt-768x622.jpeg", alt: "INT.CH Flynn di Perlanera" },
      { src: "/icy_sajt-350x263.jpg", alt: "CH Ice Queen di Casa Montenegro" },
    ],
  },
];
