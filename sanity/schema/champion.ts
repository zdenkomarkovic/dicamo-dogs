import { defineField, defineType } from "sanity";

export const champion = defineType({
  name: "champion",
  title: "Champion",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
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
          { title: "CHAMPION", value: "CHAMPION" },
          { title: "INTERNATIONAL CHAMPION", value: "INTERNATIONAL CHAMPION" },
          { title: "MULTI CHAMPION", value: "MULTI CHAMPION" },
        ],
      },
    }),
    defineField({
      name: "pedigree",
      title: "Pedigree",
      description: "Format: Father – Mother",
      type: "string",
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
