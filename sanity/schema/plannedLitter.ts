import { defineField, defineType } from "sanity";

export const plannedLitter = defineType({
  name: "plannedLitter",
  title: "Planned Litters",
  type: "document",
  fields: [
    defineField({
      name: "tag",
      title: "Tag",
      description: 'e.g. "Planned litter!", "Available puppies!"',
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug / ID",
      type: "slug",
      options: { source: "parents", maxLength: 96 },
      validation: (Rule) => Rule.custom((value) =>
        (value as { current?: string })?.current ? true : "Slug is required"
      ),
    }),
    defineField({
      name: "parents",
      title: "Parents",
      description: "FATHER – MOTHER",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "Order",
      description: "Lower number = first (1, 2, 3...)",
      type: "number",
      initialValue: 99,
    }),
    defineField({
      name: "active",
      title: "Active",
      description: "Uncheck to hide without deleting",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "tag",
      subtitle: "parents",
      media: "image",
    },
  },
  orderings: [
    {
      title: "By order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
