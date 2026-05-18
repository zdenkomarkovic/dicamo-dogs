import { defineField, defineType } from "sanity";

export const litter = defineType({
  name: "litter",
  title: "Litter",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: 'e.g. "Q" LITTER (2025.)',
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Puppies",
      description: "Names of puppies, comma separated",
      type: "string",
    }),
    defineField({
      name: "note",
      title: "Note",
      description: 'e.g. "In cooperation with kennel OD TELEPA"',
      type: "string",
    }),
    defineField({
      name: "father",
      title: "Father",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "fatherImage",
      title: "Father Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "mother",
      title: "Mother",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "motherImage",
      title: "Mother Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "father",
      media: "fatherImage",
    },
  },
});
