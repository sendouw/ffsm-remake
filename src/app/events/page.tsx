import { client } from '../../../sanity.client'
import { EventsFeed } from '@/components/events/EventsFeed'

// Force Next.js to revalidate this page every 60 seconds
export const revalidate = 60

export default async function EventsIndexPage() {
    // GROQ query to fetch all events, ordered by date
    const events = await client.fetch(`
    *[_type == "event"] | order(eventDate asc) {
      _id,
      title,
      slug,
      eventDate,
      location,
      address,
      excerpt,
      ticketsUrl,
      "imageUrl": mainImage.asset->url
    }
  `)

    return (
        <div className="min-h-screen bg-ffsm-surface pt-32 pb-24 lg:pt-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <div className="mb-12 text-center">
                        <p className="mb-4 inline-flex rounded-full bg-ffsm-primary-soft-strong px-4 py-1 text-sm font-semibold text-ffsm-primary-strong ring-1 ring-ffsm-primary-soft">
                            Community updates
                        </p>
                        <h2 className="font-playfair text-4xl font-bold tracking-tight text-ffsm-ink sm:text-5xl">
                            Upcoming Workshops & Events
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-ffsm-gray-dark">
                            Join us at our next gathering. See what&apos;s on the horizon for community fire preparedness.
                        </p>
                    </div>

                    <EventsFeed events={events} />
                </div>
            </div>
        </div>
    )
}
