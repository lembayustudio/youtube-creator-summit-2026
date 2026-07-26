import {defineField, defineType} from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',

  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
    }),

    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),

    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
    }),

    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
    }),

    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
    }),

    defineField({
      name: 'youtube',
      title: 'YouTube',
      type: 'url',
    }),

    defineField({
      name: 'copyright',
      title: 'Copyright',
      type: 'string',
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      }
    },
  },
})