import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'eventDate',
            title: 'Date and Time',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'location',
            title: 'Location Name',
            type: 'string',
            description: 'Name of the building or venue (e.g., Pasadena City Hall)',
        }),
        defineField({
            name: 'address',
            title: 'Street Address',
            type: 'string',
            description: 'Provide an exact address to render an embedded Google Map (e.g., 100 N Garfield Ave, Pasadena, CA 91101)',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'excerpt',
            title: 'Short Description',
            description: 'A short summary for the events listing page',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'body',
            title: 'Full Details',
            type: 'blockContent',
        }),
        defineField({
            name: 'ticketsUrl',
            title: 'Tickets / Registration URL',
            type: 'url',
            description: 'Link to Eventbrite, Registration form, etc. (optional)',
        }),
    ],

    preview: {
        select: {
            title: 'title',
            date: 'eventDate',
            media: 'mainImage',
        },
        prepare(selection) {
            const { date } = selection
            const formattedDate = date ? new Date(date).toLocaleDateString() : 'No date set'
            return { ...selection, subtitle: formattedDate }
        },
    },
})
