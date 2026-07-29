import { defineArrayMember, defineField, defineType } from "sanity";

export const featuredSpeakersType = defineType({
  name: "featuredSpeakers",
  title: "Featured Speakers",
  type: "document",
  
  fieldsets: [
  {
    name: "general",
    title: "General",
    options: { collapsible: true },
  },
  {
    name: "display",
    title: "Display",
    options: { collapsible: true },
  },
  {
    name: "button",
    title: "Button",
    options: { collapsible: true },
  },
  {
    name: "speakers",
    title: "Speakers",
    options: { collapsible: true },
  },
],

  fields: [
    defineField({
	  fieldset: "general",
      name: "enabled",
      title: "Enable Section",
      type: "boolean",
      initialValue: true,
    }),

    defineField({
		fieldset: "general",
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "Our Special Guest",
    }),

    defineField({
		fieldset: "general",
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Meet The Creators",
    }),

    defineField({
		fieldset: "general",
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
		fieldset: "display",
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
  fieldset: "display",
  name: "desktopBanner",
  title: "Desktop Banner",
  type: "image",
  options: {
    hotspot: true,
  },
}),

defineField({
  fieldset: "display",
  name: "mobileBanner",
  title: "Mobile Banner",
  type: "image",
  options: {
    hotspot: true,
  },
}),

    defineField({
		fieldset: "button",
      name: "buttonText",
      title: "Button Text",
      type: "string",
      initialValue: "View All Speakers",
    }),

    defineField({
		fieldset: "button",
      name: "buttonLink",
      title: "Button Link",
      type: "string",
      initialValue: "/speakers",
    }),

    defineField({
		fieldset: "speakers",
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