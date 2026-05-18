import { client } from "./client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { NewsItem } from "@/lib/news";

const builder = imageUrlBuilder(client);

type RawImage = {
  image?: SanityImageSource;
  alt?: string;
  portrait?: boolean;
};

type RawNewsItem = {
  date: string;
  title: string;
  text?: string;
  icon?: SanityImageSource;
  link?: { href: string; label: string; prefix?: string; suffix?: string };
  images?: RawImage[];
};

function mapNewsItem(r: RawNewsItem): NewsItem {
  return {
    date: r.date,
    title: r.title,
    text: r.text ?? "",
    icon: r.icon ? builder.image(r.icon).width(150).url() : undefined,
    link: r.link
      ? { href: r.link.href, label: r.link.label, prefix: r.link.prefix ?? "", suffix: r.link.suffix }
      : undefined,
    images: r.images
      ?.filter((i) => i.image)
      .map((i) => ({
        src: builder.image(i.image!).width(800).url(),
        alt: i.alt ?? "",
        portrait: i.portrait,
      })),
  };
}

export async function getSanityNews(): Promise<NewsItem[]> {
  const raw: RawNewsItem[] = await client.fetch(
    `*[_type == "newsItem"] | order(date desc) {
      date, title, text, icon,
      link { href, label, prefix, suffix },
      images[] { image, alt, portrait }
    }`
  );
  return raw.map(mapNewsItem);
}
