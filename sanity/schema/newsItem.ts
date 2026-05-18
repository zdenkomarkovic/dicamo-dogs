import { defineField, defineType } from "sanity";

export const newsItem = defineType({
  name: "newsItem",
  title: "News Item",
  type: "document",
  fields: [
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "icon",
      title: "Icon",
      description: "Small decorative icon (trophy, flag, stork…)",
      type: "image",
      options: { hotspot: false },
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "object",
      fields: [
        defineField({ name: "href", title: "URL", type: "string", validation: (R) => R.required() }),
        defineField({ name: "label", title: "Link text", type: "string", validation: (R) => R.required() }),
        defineField({ name: "prefix", title: "Text before link", type: "string" }),
        defineField({ name: "suffix", title: "Text after link", type: "string" }),
      ],
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
            defineField({ name: "alt", title: "Alt text", type: "string" }),
            defineField({ name: "portrait", title: "Portrait (tall)", type: "boolean", initialValue: false }),
          ],
          preview: {
            select: { title: "alt", media: "image" },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "date",
    },
  },
  orderings: [
    {
      title: "Date, Newest First",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
});
