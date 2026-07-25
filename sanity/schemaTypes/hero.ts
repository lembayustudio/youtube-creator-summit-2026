import { defineField, defineType } from "sanity";

export const heroType = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",

  fields: [
    defineField({
      name: "badge",
      title: "Badge",
      type: "string",
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "eventDate",
      title: "Event Date",
      type: "string",
    }),

    defineField({
      name: "eventTime",
      title: "Event Time",
      type: "string",
    }),

    defineField({
      name: "eventLocation",
      title: "Event Location",
      type: "string",
    }),

    defineField({
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
    }),

    defineField({
      name: "ctaLink",
      title: "CTA Button Link",
      type: "string",
      initialValue: "#rsvp",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "badge",
    },
  },
});