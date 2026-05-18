import { client } from "./client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);

export type SanityChampion = {
  name: string;
  imageUrl?: string;
  sex: "male" | "female";
  titles?: string[];
  pedigree?: string;
};

type RawChampion = {
  name: string;
  image?: SanityImageSource;
  sex: "male" | "female";
  titles?: string[];
  pedigree?: string;
};

function mapChampion(c: RawChampion): SanityChampion {
  return {
    name: c.name,
    imageUrl: c.image ? builder.image(c.image).width(600).url() : undefined,
    sex: c.sex,
    titles: c.titles,
    pedigree: c.pedigree,
  };
}

export async function getSanityChampions(): Promise<SanityChampion[]> {
  const raw: RawChampion[] = await client.fetch(
    `*[_type == "champion"] | order(_createdAt asc) {
      name, image, sex, titles, pedigree
    }`
  );
  return raw.map(mapChampion);
}
