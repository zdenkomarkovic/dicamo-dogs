import { defineField, defineType } from "sanity";

// Level 4 — Great Great Grandparent (name only)
const greatGreatGrandparentFields = [
  defineField({ name: "name", title: "Name", type: "string" }),
];

// Level 3 — Great Grandparent
const greatGrandparentFields = [
  defineField({ name: "name", title: "Name", type: "string" }),
  defineField({ name: "sire", title: "Sire (Father)", type: "object", fields: greatGreatGrandparentFields }),
  defineField({ name: "dam", title: "Dam (Mother)", type: "object", fields: greatGreatGrandparentFields }),
];

// Level 2 — Grandparent
const grandparentFields = [
  defineField({ name: "name", title: "Name", type: "string" }),
  defineField({ name: "sire", title: "Sire (Father)", type: "object", fields: greatGrandparentFields }),
  defineField({ name: "dam", title: "Dam (Mother)", type: "object", fields: greatGrandparentFields }),
];

// Level 1 — Parent (used inside the pedigree tree)
const parentFields = [
  defineField({ name: "name", title: "Name", type: "string" }),
  defineField({ name: "sire", title: "Sire (Father)", type: "object", fields: grandparentFields }),
  defineField({ name: "dam", title: "Dam (Mother)", type: "object", fields: grandparentFields }),
];

// Litter parent details (Father / Mother section of the litter card)
const litterParentFields = [
  defineField({ name: "name", title: "Name", type: "string", validation: (R) => R.required() }),
  defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
  defineField({
    name: "pedigree",
    title: "Pedigree",
    description: "Format: Father – Mother",
    type: "string",
  }),
  defineField({
    name: "titles",
    title: "Titles",
    type: "array",
    of: [{ type: "string" }],
  }),
  defineField({
    name: "health",
    title: "Health Results",
    type: "array",
    of: [{ type: "string" }],
  }),
  defineField({
    name: "work",
    title: "Work / Sport",
    type: "array",
    of: [{ type: "string" }],
  }),
];

export const puppyLitter = defineType({
  name: "puppyLitter",
  title: "Puppy Litter",
  type: "document",
  fields: [
    defineField({
      name: "letter",
      title: "Letter",
      description: 'Single letter, e.g. "S"',
      type: "string",
      validation: (R) => R.required().max(2),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Expected", value: "expected" },
          { title: "Available", value: "available" },
          { title: "Reserved", value: "reserved" },
        ],
        layout: "radio",
      },
      initialValue: "expected",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "expectedDate",
      title: "Expected Date",
      type: "date",
    }),
    defineField({
      name: "intro",
      title: "Intro Text",
      type: "text",
      rows: 8,
    }),
    defineField({
      name: "note",
      title: "Note",
      type: "string",
    }),
    defineField({
      name: "sire",
      title: "Father",
      type: "object",
      fields: litterParentFields,
    }),
    defineField({
      name: "dam",
      title: "Mother",
      type: "object",
      fields: litterParentFields,
    }),
    defineField({
      name: "pedigree",
      title: "Pedigree",
      type: "object",
      fields: [
        defineField({
          name: "sire",
          title: "Sire (Father) line",
          type: "object",
          fields: parentFields,
        }),
        defineField({
          name: "dam",
          title: "Dam (Mother) line",
          type: "object",
          fields: parentFields,
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "letter",
      subtitle: "status",
    },
    prepare({ title, subtitle }) {
      return {
        title: `"${title}" Litter`,
        subtitle: subtitle ?? "",
      };
    },
  },
});
