import { defineField, defineType } from "sanity";

const CATEGORIES = [
  { title: "Dogs with new owners", value: "Dogs with new owners" },
  { title: "My judging", value: "My judging" },
  { title: "Me with friends", value: "Me with friends" },
  { title: "Funny dogs", value: "Funny dogs" },
];

export const galleryImage = defineType({
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: CATEGORIES,
        layout: "radio",
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "caption",
      title: "Naziv slike",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "caption",
      subtitle: "category",
      media: "image",
    },
  },
});
