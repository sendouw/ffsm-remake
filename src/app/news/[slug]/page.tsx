import { client } from '../../../../sanity.client'
import { urlForImage } from '../../../../sanity.image'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export const revalidate = 60 // Revalidate every 60 seconds

// Custom components for rendering Portable Text rich text blocks
const ptComponents = {
    types: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        image: ({ value }: { value: any }) => {
            if (!value?.asset?._ref) {
                return null
            }
            return (
                <div className="relative my-10 aspect-video w-full overflow-hidden rounded-2xl bg-neutral-100">
                    <Image
                        alt={value.alt || 'Post image'}
                        src={urlForImage(value)?.url() || ''}
                        fill
                        className="object-cover"
                    />
                </div>
            )
        },
    },
    marks: {
        link: ({ children, value }: { children: React.ReactNode; value?: { href?: string } }) => {
            if (!value?.href) return <>{children}</>
            const isInternal = value.href.startsWith('/')
            const className = "font-medium text-primary-600 underline underline-offset-4 pointer-events-auto transition-colors hover:text-primary-800"

            if (isInternal) {
                return (
                    <Link href={value.href} className={className}>
                        {children}
                    </Link>
                )
            }

            return (
                <a href={value.href} target="_blank" rel="noreferrer noopener" className={className}>
                    {children}
                </a>
            )
        },
    },
    block: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        h2: ({ children }: any) => <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-900">{children}</h2>,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        h3: ({ children }: any) => <h3 className="mt-10 text-xl font-bold tracking-tight text-neutral-900">{children}</h3>,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        normal: ({ children }: any) => <p className="mt-6 text-neutral-700 leading-8">{children}</p>,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        blockquote: ({ children }: any) => (
            <blockquote className="mt-10 border-l-4 border-primary-500 pl-6 italic text-neutral-800">
                {children}
            </blockquote>
        ),
    },
    list: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        bullet: ({ children }: any) => <ul className="mt-8 list-disc pl-8 text-neutral-700 space-y-2">{children}</ul>,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        number: ({ children }: any) => <ol className="mt-8 list-decimal pl-8 text-neutral-700 space-y-2">{children}</ol>,
    },
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const post = await client.fetch(
        `*[_type == "post" && slug.current == $slug][0] {
      title,
      publishedAt,
      author,
      body,
      "imageUrl": mainImage.asset->url
    }`,
        { slug }
    )

    if (!post) {
        notFound()
    }

    return (
        <div className="bg-white px-6 pt-32 pb-24 lg:pt-40 lg:px-8">
            <div className="mx-auto max-w-3xl text-base leading-7 text-neutral-700">
                <div>
                    <Link href="/news" className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-900 mb-8 transition-colors">
                        <ChevronLeft className="mr-1 h-4 w-4" />
                        Back to News
                    </Link>
                </div>
                <p className="text-base font-semibold leading-7 text-primary-600">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                    {post.title}
                </h1>
                {post.author && (
                    <p className="mt-6 text-sm text-neutral-500">
                        Written by <span className="font-semibold text-neutral-900">{post.author}</span>
                    </p>
                )}

                {post.imageUrl && (
                    <figure className="mt-12 mb-16">
                        <div className="relative aspect-video w-full rounded-2xl bg-neutral-50 overflow-hidden ring-1 ring-inset ring-neutral-900/10">
                            <Image
                                src={post.imageUrl}
                                alt={post.title}
                                fill
                                priority
                                sizes="(min-width: 1024px) 48rem, 100vw"
                                className="object-cover"
                            />
                        </div>
                    </figure>
                )}

                <div className="mt-10 max-w-2xl">
                    {post.body ? (
                        <PortableText value={post.body} components={ptComponents} />
                    ) : (
                        <p className="text-neutral-500 italic">No content available for this post.</p>
                    )}
                </div>
            </div>
        </div>
    )
}
