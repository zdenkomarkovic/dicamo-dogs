import { client } from "./client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export type SanityAnnouncement = {
  id: string;
  tag: string;
  slug: string;
  parents?: string;
  body?: string;
  image?: string;
};

type RawAnnouncement = {
  _id: string;
  tag: string;
  slug: string;
  parents?: string;
  body?: string;
  image?: SanityImageSource;
};

function mapAnnouncement(r: RawAnnouncement): SanityAnnouncement {
  return {
    id: r._id,
    tag: r.tag,
    slug: r.slug,
    parents: r.parents,
    body: r.body,
    image: r.image ? builder.image(r.image).width(600).url() : undefined,
  };
}

export async function getSanityAnnouncements(): Promise<SanityAnnouncement[]> {
  const raw: RawAnnouncement[] = await client.fetch(
    `*[_type == "plannedLitter" && active == true] | order(order asc, _createdAt desc) {
      _id, tag, "slug": slug.current, parents, body, image
    }`
  );
  return raw.map(mapAnnouncement);
}
