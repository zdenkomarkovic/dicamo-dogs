import { defineField, defineType } from "sanity";

const ancestorFields = [
  defineField({ name: "name", title: "Name", type: "string" }),
];

const grandparentFields = [
  defineField({ name: "name", title: "Name", type: "string" }),
  defineField({
    name: "sire",
    title: "Sire (Father)",
    type: "object",
    fields: ancestorFields,
  }),
  defineField({
    name: "dam",
    title: "Dam (Mother)",
    type: "object",
    fields: ancestorFields,
  }),
];

const parentFields = [
  defineField({ name: "name", title: "Name", type: "string", validation: (R) => R.required() }),
  defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
  defineField({
    name: "sire",
    title: "Sire (Father)",
    type: "object",
    fields: grandparentFields,
  }),
  defineField({
    name: "dam",
    title: "Dam (Mother)",
    type: "object",
    fields: grandparentFields,
  }),
];

export const dog = defineType({
  name: "dog",
  title: "Dog",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
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
      name: "sex",
      title: "Sex",
      type: "string",
      options: {
        list: [
          { title: "Male", value: "male" },
          { title: "Female", value: "female" },
        ],
        layout: "radio",
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "titles",
      title: "Titles",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "CH", value: "CH" },
          { title: "INTERNATIONAL CHAMPION", value: "INTERNATIONAL CHAMPION" },
          { title: "MULTI CHAMPION", value: "MULTI CHAMPION" },
        ],
      },
    }),
    defineField({
      name: "inMemoriam",
      title: "In Memoriam",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "pedigree",
      title: "Pedigree",
      type: "object",
      fields: [
        defineField({
          name: "sire",
          title: "Sire (Father)",
          type: "object",
          fields: parentFields,
        }),
        defineField({
          name: "dam",
          title: "Dam (Mother)",
          type: "object",
          fields: parentFields,
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "sex",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle === "male" ? "♂ Male" : "♀ Female",
        media,
      };
    },
  },
});
