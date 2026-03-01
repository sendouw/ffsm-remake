import { client } from '../../../sanity.client'
import { NewsFeed } from '@/components/news/NewsFeed'

// Force Next.js to revalidate this page every 60 seconds
export const revalidate = 60

export default async function NewsIndexPage() {
    // GROQ query to fetch all posts, ordered by newest first
    const posts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      author,
      "imageUrl": mainImage.asset->url
    }
  `)

    return (
        <div className="min-h-screen bg-ffsm-surface pt-32 pb-24 lg:pt-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <div className="mb-12 text-center">
                        <h2 className="font-playfair text-4xl font-bold tracking-tight text-ffsm-ink sm:text-5xl">
                            Foothill FireSafe & Maintenance News
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-ffsm-gray-dark">
                            Stay up to date with the latest community projects, updates, and articles from our team.
                        </p>
                    </div>

                    <NewsFeed posts={posts} />
                </div>
            </div>
        </div>
    )
}
