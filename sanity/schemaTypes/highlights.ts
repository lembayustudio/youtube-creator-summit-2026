import { defineField, defineType } from "sanity";

export default defineType({
  name: "highlights",
  title: "Highlights",
  type: "document",

  fieldsets: [
    {
      name: "general",
      title: "General",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "items",
      title: "Highlight Items",
      options: { collapsible: true, collapsed: false },
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
      title: "Items",
      type: "array",
      fieldset: "items",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
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
              rows: 2,
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
            },
          },
        },
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "Highlights",
      };
    },
  },
});