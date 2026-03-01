'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NewsPost {
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt: string;
    excerpt: string;
    author?: string;
    imageUrl?: string;
}

function formatDate(dateString: string) {
    if (!dateString) return 'Recently published';
    return new Date(dateString).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
}

function formatShortDate(dateString: string) {
    if (!dateString) return { month: '', day: '' };
    const d = new Date(dateString);
    return {
        month: d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
        day: d.toLocaleDateString('en-US', { day: 'numeric' }),
    };
}

export function NewsFeed({ posts }: { posts: NewsPost[] }) {
    const [query, setQuery] = useState('');

    const filtered = posts.filter((p) => {
        if (!query.trim()) return true;
        const q = query.toLowerCase();
        return (
            p.title.toLowerCase().includes(q) ||
            (p.excerpt && p.excerpt.toLowerCase().includes(q))
        );
    });

    const [featured, ...rest] = filtered;

    return (
        <div>
            {/* Search bar */}
            <div className="mx-auto mb-10 max-w-2xl">
                <div className="relative">
                    <svg
                        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ffsm-gray-dark"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search news articles..."
                        className="w-full rounded-sm border border-ffsm-gray/30 bg-white py-3.5 pl-12 pr-4 text-base text-ffsm-ink shadow-sm transition-shadow placeholder:text-ffsm-gray-dark focus:border-ffsm-primary focus:outline-none focus:ring-4 focus:ring-ffsm-primary-soft"
                    />
                </div>
            </div>

            {filtered.length === 0 ? (
                <div className="rounded-sm border border-dashed border-ffsm-gray/50 bg-white p-12 text-center">
                    {query ? (
                        <>
                            <p className="font-heading text-xl font-semibold text-ffsm-ink">
                                No articles found for &ldquo;{query}&rdquo;
                            </p>
                            <p className="mt-2 text-ffsm-gray-dark">
                                Try a different search term or{' '}
                                <button onClick={() => setQuery('')} className="font-medium text-ffsm-primary underline hover:text-ffsm-primary-strong">
                                    clear search
                                </button>
                            </p>
                        </>
                    ) : (
                        <>
                            <p className="font-heading text-xl font-semibold text-ffsm-ink">No articles yet</p>
                            <p className="mt-2 text-ffsm-gray-dark">Check back soon for updates from FFSM.</p>
                        </>
                    )}
                </div>
            ) : (
                <>
                    {/* Featured Post */}
                    {featured && <FeaturedPost post={featured} />}

                    {/* List Posts */}
                    {rest.length > 0 && (
                        <div className="mt-12 space-y-0 divide-y divide-ffsm-gray/30">
                            {rest.map((post) => (
                                <PostListItem key={post._id} post={post} />
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

function FeaturedPost({ post }: { post: NewsPost }) {
    return (
        <Link href={`/news/${post.slug.current}`} className="group block">
            <article className="overflow-hidden rounded-sm border border-ffsm-gray/30 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {post.imageUrl ? (
                    <div className="grid md:grid-cols-2">
                        <div className="relative aspect-[4/3] overflow-hidden bg-ffsm-surface md:aspect-auto md:min-h-[360px]">
                            <Image
                                src={post.imageUrl}
                                alt={post.title}
                                fill
                                sizes="(min-width: 768px) 50vw, 100vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col justify-center p-8 md:p-12">
                            <FeaturedPostContent post={post} />
                        </div>
                    </div>
                ) : (
                    <div className="p-8 md:p-12">
                        <FeaturedPostContent post={post} />
                    </div>
                )}
            </article>
        </Link>
    );
}

function FeaturedPostContent({ post }: { post: NewsPost }) {
    return (
        <>
            <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-sm bg-ffsm-primary-soft-strong px-3 py-1 text-xs font-bold uppercase tracking-wider text-ffsm-primary-strong">
                    Featured
                </span>
                <span className="text-sm font-medium text-ffsm-gray-dark">{formatDate(post.publishedAt)}</span>
            </div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-ffsm-ink transition-colors group-hover:text-ffsm-primary md:text-4xl leading-tight">
                {post.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ffsm-gray-dark line-clamp-3">
                {post.excerpt}
            </p>
            <div className="mt-8 flex items-center text-sm font-semibold text-ffsm-primary transition-all group-hover:gap-2">
                <span className="mr-2">Read article</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </div>
        </>
    );
}

function PostListItem({ post }: { post: NewsPost }) {
    const { month, day } = formatShortDate(post.publishedAt);

    return (
        <Link href={`/news/${post.slug.current}`} className="group block">
            <article className="flex items-center gap-6 py-8 transition-colors hover:bg-ffsm-surface/50 -mx-6 px-6 rounded-sm">
                {/* Date block */}
                <div className="hidden h-24 w-20 flex-shrink-0 flex-col items-center justify-center rounded-sm bg-ffsm-primary-soft-strong sm:flex transition-colors group-hover:bg-ffsm-primary group-hover:text-white">
                    <span className="text-xs font-bold uppercase tracking-widest text-ffsm-primary-strong group-hover:text-ffsm-surface">
                        {month}
                    </span>
                    <span className="text-2xl font-bold leading-none text-ffsm-primary-strong mt-1 group-hover:text-white">
                        {day}
                    </span>
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                    <time className="mb-2 block text-sm font-medium text-ffsm-gray-dark sm:hidden">
                        {formatDate(post.publishedAt)}
                    </time>
                    <h3 className="font-heading text-xl font-bold text-ffsm-ink transition-colors group-hover:text-ffsm-primary">
                        {post.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-ffsm-gray-dark line-clamp-2">
                        {post.excerpt}
                    </p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 text-ffsm-gray-dark transition-colors group-hover:text-ffsm-primary">
                    <svg className="h-6 w-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </article>
        </Link>
    );
}
