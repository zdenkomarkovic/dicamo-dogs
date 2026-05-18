import { client } from "./client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export type SanityLitter = {
  title: string;
  subtitle?: string;
  note?: string;
  father: string;
  mother: string;
  fatherImg?: string;
  motherImg?: string;
};

type RawLitter = {
  title: string;
  subtitle?: string;
  note?: string;
  father: string;
  fatherImage?: SanityImageSource;
  mother: string;
  motherImage?: SanityImageSource;
};

function mapLitter(l: RawLitter): SanityLitter {
  return {
    title: l.title,
    subtitle: l.subtitle,
    note: l.note,
    father: l.father,
    mother: l.mother,
    fatherImg: l.fatherImage ? builder.image(l.fatherImage).width(400).url() : undefined,
    motherImg: l.motherImage ? builder.image(l.motherImage).width(400).url() : undefined,
  };
}

export async function getSanityLitters(): Promise<SanityLitter[]> {
  const raw: RawLitter[] = await client.fetch(
    `*[_type == "litter"] | order(_createdAt desc) {
      title, subtitle, note, father, fatherImage, mother, motherImage
    }`
  );
  return raw.map(mapLitter);
}
