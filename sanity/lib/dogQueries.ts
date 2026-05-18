import { client } from "./client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

const builder = imageUrlBuilder(client);
export const dogImageUrl = (source: SanityImageSource) => builder.image(source);

const parentFragment = `
  name,
  image,
  sire { name, sire { name }, dam { name } },
  dam { name, sire { name }, dam { name } }
`;

export type SanityDog = {
  slug: string;
  name: string;
  imageUrl: string;
  sex: "male" | "female";
  titles?: string[];
  inMemoriam: boolean;
  description?: string;
  pedigree?: {
    sire?: { name: string; imageUrl?: string; sire?: { name: string; sire?: { name: string }; dam?: { name: string } }; dam?: { name: string; sire?: { name: string }; dam?: { name: string } } };
    dam?: { name: string; imageUrl?: string; sire?: { name: string; sire?: { name: string }; dam?: { name: string } }; dam?: { name: string; sire?: { name: string }; dam?: { name: string } } };
  };
};

type RawDog = {
  slug: { current: string };
  name: string;
  image: SanityImageSource;
  sex: "male" | "female";
  titles?: string[];
  inMemoriam: boolean;
  description?: string;
  pedigree?: {
    sire?: { name: string; image?: SanityImageSource; sire?: { name: string; sire?: { name: string }; dam?: { name: string } }; dam?: { name: string; sire?: { name: string }; dam?: { name: string } } };
    dam?: { name: string; image?: SanityImageSource; sire?: { name: string; sire?: { name: string }; dam?: { name: string } }; dam?: { name: string; sire?: { name: string }; dam?: { name: string } } };
  };
};

function mapDog(d: RawDog): SanityDog {
  const mapParent = (p?: NonNullable<RawDog["pedigree"]>["sire"]) => {
    if (!p) return undefined;
    return {
      ...p,
      imageUrl: p.image ? dogImageUrl(p.image).width(300).url() : undefined,
      image: undefined,
    };
  };

  return {
    slug: d.slug.current,
    name: d.name,
    imageUrl: dogImageUrl(d.image).width(800).url(),
    sex: d.sex,
    titles: d.titles,
    inMemoriam: d.inMemoriam ?? false,
    description: d.description,
    pedigree: d.pedigree ? {
      sire: mapParent(d.pedigree.sire),
      dam: mapParent(d.pedigree.dam),
    } : undefined,
  };
}

export async function getSanityDogs(): Promise<SanityDog[]> {
  const raw: RawDog[] = await client.fetch(
    `*[_type == "dog"] | order(_createdAt asc) {
      slug, name, image, sex, titles, inMemoriam, description,
      pedigree {
        sire { ${parentFragment} },
        dam { ${parentFragment} }
      }
    }`
  );
  return raw.map(mapDog);
}
