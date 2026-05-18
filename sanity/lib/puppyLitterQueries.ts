import { client } from "./client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import type { Parent, Litter, PedigreeNode } from "@/lib/litters";

const builder = imageUrlBuilder(client);

type RawParent = {
  name: string;
  image?: SanityImageSource;
  pedigree?: string;
  titles?: string[];
  health?: string[];
  work?: string[];
};

type RawPedigreeNode = {
  name?: string;
  sire?: RawPedigreeNode;
  dam?: RawPedigreeNode;
};

type RawPuppyLitter = {
  letter: string;
  status: "expected" | "available" | "reserved";
  expectedDate?: string;
  intro?: string;
  note?: string;
  sire?: RawParent;
  dam?: RawParent;
  pedigree?: {
    sire?: RawPedigreeNode;
    dam?: RawPedigreeNode;
  };
};

const parentFragment = `
  name, image, pedigree, titles, health, work
`;

const ggp = `name, sire { name }, dam { name }`;
const gp  = `name, sire { ${ggp} }, dam { ${ggp} }`;
const par = `name, sire { ${gp} }, dam { ${gp} }`;

const pedigreeNodeFragment = `name, sire { ${par} }, dam { ${par} }`;

function mapParent(p: RawParent): Parent {
  return {
    name: p.name,
    image: p.image ? builder.image(p.image).width(700).url() : undefined,
    pedigree: p.pedigree ?? "",
    titles: p.titles ?? [],
    health: p.health ?? [],
    work: p.work ?? [],
  };
}

function mapNode(n?: RawPedigreeNode): PedigreeNode | undefined {
  if (!n?.name) return undefined;
  return {
    name: n.name,
    sire: mapNode(n.sire),
    dam: mapNode(n.dam),
  };
}

function mapLitter(r: RawPuppyLitter): Litter {
  const parents: [Parent, Parent] | undefined =
    r.sire && r.dam ? [mapParent(r.sire), mapParent(r.dam)] : undefined;

  const sireNode = mapNode(r.pedigree?.sire);
  const damNode = mapNode(r.pedigree?.dam);
  const pedigree =
    sireNode && damNode ? { sire: sireNode, dam: damNode } : undefined;

  return {
    letter: r.letter,
    status: r.status ?? "expected",
    expectedDate: r.expectedDate ?? "",
    intro: r.intro ?? "",
    note: r.note,
    parents,
    pedigree,
  };
}

export async function getSanityPuppyLitters(): Promise<Litter[]> {
  const raw: RawPuppyLitter[] = await client.fetch(
    `*[_type == "puppyLitter"] | order(_createdAt desc) {
      letter, status, expectedDate, intro, note,
      sire { ${parentFragment} },
      dam { ${parentFragment} },
      pedigree {
        sire { ${pedigreeNodeFragment} },
        dam { ${pedigreeNodeFragment} }
      }
    }`
  );
  return raw.map(mapLitter);
}
