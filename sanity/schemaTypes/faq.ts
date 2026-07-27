import { defineField, defineType } from "sanity";

export default defineType({
  name: "faq",
  title: "FAQ",
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
      name: "questions",
      title: "Questions",
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
      title: "Questions",
      type: "array",
      fieldset: "questions",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "question",
              title: "Question",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "answer",
              title: "Answer",
              type: "text",
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "FAQ",
      };
    },
  },
});