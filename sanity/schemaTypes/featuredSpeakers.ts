import { defineArrayMember, defineField, defineType } from "sanity";

export const featuredSpeakersType = defineType({
  name: "featuredSpeakers",
  title: "Featured Speakers",
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
      title: "Display Layout",
      type: "string",
      initialValue: "auto",
      options: {
        layout: "radio",
        list: [
          { title: "Auto", value: "auto" },
          { title: "Banner", value: "banner" },
          { title: "Cards", value: "cards" },
        ],
      },
    }),

    defineField({
      name: "bannerImage",
      title: "Banner Image",
      type: "image",
      options: {
        hotspot: true,
      },
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

    defineField({
      name: "speakers",
      title: "Speakers",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",

          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
            }),

            defineField({
              name: "role",
              title: "Role",
              type: "string",
            }),

            defineField({
              name: "company",
              title: "Company",
              type: "string",
            }),

            defineField({
              name: "bio",
              title: "Biography",
              type: "text",
              rows: 3,
            }),

            defineField({
              name: "photo",
              title: "Photo",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
          ],

          preview: {
            select: {
              title: "name",
              subtitle: "company",
              media: "photo",
            },
          },
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "Featured Speakers",
      };
    },
  },
});