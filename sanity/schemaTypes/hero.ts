import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',

  fields: [
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'string',
    }),

    defineField({
      name: 'titleLine1',
      title: 'Title Line 1',
      type: 'string',
    }),

    defineField({
      name: 'titleLine2',
      title: 'Title Line 2',
      type: 'string',
    }),

    defineField({
      name: 'titleHighlight',
      title: 'Title Highlight',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'string',
    }),

    defineField({
      name: 'eventTime',
      title: 'Event Time',
      type: 'string',
    }),

    defineField({
      name: 'eventLocation',
      title: 'Event Location',
      type: 'string',
    }),

    defineField({
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string',
    }),

    defineField({
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'titleLine1',
      subtitle: 'titleLine2',
    },
  },
})