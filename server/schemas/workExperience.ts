import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'Company',
      title: 'Company',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'StartDate',
      title: 'Start Date',
      type: 'datetime',
    }),
    defineField({
      name: 'EndDate',
      title: 'End Date',
      type: 'datetime',
    }),
  ],
})
