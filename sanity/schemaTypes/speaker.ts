import {defineField, defineType} from 'sanity'

export const speakerType = defineType({
  name: 'speaker',
  title: 'Speakers',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),

    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),

    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 1,
    }),
	
	defineField({
  name: 'featured',
  title: 'Featured on Homepage',
  type: 'boolean',
  initialValue: true,
}),
  ],

  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrderAsc',
      by: [{field: 'displayOrder', direction: 'asc'}],
    },
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'company',
      media: 'photo',
    },
  },
})