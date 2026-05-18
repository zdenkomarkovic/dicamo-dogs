import { client } from "./client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export type SanityGalleryImage = {
  _id: string;
  category: string;
  caption?: string;
  image: SanityImageSource;
};

export async function getGalleryImages(): Promise<SanityGalleryImage[]> {
  return client.fetch(
    `*[_type == "galleryImage"] | order(_createdAt desc) {
      _id, category, caption, image
    }`
  );
}
