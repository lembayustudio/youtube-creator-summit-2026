import { defineField, defineType } from "sanity";

export default defineType({
  name: "agenda",
  title: "Agenda",
  type: "document",

  fieldsets: [
    {
      name: "general",
      title: "General",
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: "items",
      title: "Agenda Items",
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],

  fields: [
    defineField({
      name: "enabled",
      title: "Enabled",
      type: "boolean",
      initialValue: true,
      fieldset: "general",
    }),

    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      fieldset: "general",
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      fieldset: "general",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      fieldset: "general",
    }),

    defineField({
      name: "items",
      title: "Agenda Items",
      type: "array",
      fieldset: "items",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "time",
              title: "Time",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "speaker",
              title: "Speaker",
              type: "string",
            }),

            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 2,
            }),
          ],
        },
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "Agenda",
      };
    },
  },
});