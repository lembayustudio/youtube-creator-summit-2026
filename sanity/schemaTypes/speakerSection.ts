import { defineField, defineType } from "sanity";

export const speakerSectionType = defineType({
  name: "speakerSection",
  title: "Speaker Section",
  type: "document",

  fields: [
    defineField({
      name: "enabled",
      title: "Enable Section",
      type: "boolean",
      initialValue: true,
    }),

    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "Our Special Guest",
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Meet The Creators",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "layout",
      title: "Layout",
      type: "string",
      initialValue: "auto",

      options: {
        list: [
          { title: "Auto", value: "auto" },
          { title: "Grid", value: "grid" },
          { title: "Carousel", value: "carousel" },
        ],
      },
    }),

    defineField({
      name: "maxItems",
      title: "Maximum Speakers",
      type: "number",
      initialValue: 6,
    }),

    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      initialValue: "View All Speakers",
    }),

    defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "string",
      initialValue: "/speakers",
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "Speaker Section",
      };
    },
  },
});