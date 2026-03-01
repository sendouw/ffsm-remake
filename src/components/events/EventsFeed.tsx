'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Ticket } from 'lucide-react';
import { APIProvider } from '@vis.gl/react-google-maps';
import EventMap from './EventMap';

interface EventPost {
    _id: string;
    title: string;
    slug: { current: string };
    eventDate: string;
    location?: string;
    address?: string;
    excerpt: string;
    ticketsUrl?: string;
    imageUrl?: string;
}

function formatFutureDate(dateInput: string) {
    if (!dateInput) return null;
    const dateStr = dateInput.includes('T') ? dateInput : `${dateInput}T12:00:00`;
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return null;
    return new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    }).format(date);
}

function formatShortDate(dateInput: string) {
    if (!dateInput) return { month: '', day: '' };
    const dateStr = dateInput.includes('T') ? dateInput : `${dateInput}T12:00:00`;
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return { month: '', day: '' };
    return {
        month: new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date).toUpperCase(),
        day: new Intl.DateTimeFormat('en-US', { day: 'numeric' }).format(date),
    };
}

export function EventsFeed({ events }: { events: EventPost[] }) {
    const [query, setQuery] = useState('');

    const filtered = events.filter((e) => {
        if (!query.trim()) return true;
        const q = query.toLowerCase();
        return (
            e.title.toLowerCase().includes(q) ||
            (e.location && e.location.toLowerCase().includes(q)) ||
            (e.excerpt && e.excerpt.toLowerCase().includes(q))
        );
    });

    const [featured, ...rest] = filtered;

    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
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
                            placeholder="Search upcoming events..."
                            className="w-full rounded-sm border border-ffsm-gray/30 bg-white py-3.5 pl-12 pr-4 text-base text-ffsm-ink shadow-sm transition-shadow placeholder:text-ffsm-gray-dark focus:border-ffsm-primary focus:outline-none focus:ring-4 focus:ring-ffsm-primary-soft"
                        />
                    </div>
                </div>

                {filtered.length === 0 ? (
                    <div className="rounded-sm border border-dashed border-ffsm-gray/50 bg-white p-12 text-center">
                        {query ? (
                            <>
                                <p className="font-heading text-xl font-semibold text-ffsm-ink">
                                    No events found for &ldquo;{query}&rdquo;
                                </p>
                                <p className="mt-2 text-ffsm-gray-dark">
                                    Try a different search term or{' '}
                                    <button
                                        onClick={() => setQuery('')}
                                        className="font-medium text-ffsm-primary underline hover:text-ffsm-primary-strong"
                                    >
                                        clear search
                                    </button>
                                </p>
                            </>
                        ) : (
                            <>
                                <p className="font-heading text-xl font-semibold text-ffsm-ink">No upcoming events</p>
                                <p className="mt-2 text-ffsm-gray-dark">Check back soon for workshops and community gatherings.</p>
                            </>
                        )}
                    </div>
                ) : (
                    <>
                        {/* Featured event (latest or next upcoming) */}
                        {featured && <FeaturedEvent event={featured} />}

                        {/* Rest of events in list layout */}
                        {rest.length > 0 && (
                            <div className="mt-12 space-y-0 divide-y divide-ffsm-gray/30">
                                {rest.map((event) => (
                                    <EventListItem key={event._id} event={event} />
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </APIProvider>
    );
}

function FeaturedEvent({ event }: { event: EventPost }) {
    return (
        <div className="group block">
            <article className="overflow-hidden rounded-sm border border-ffsm-gray/30 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {event.imageUrl ? (
                    <div className="grid md:grid-cols-2">
                        <div className="relative aspect-[4/3] overflow-hidden bg-ffsm-surface md:aspect-auto md:min-h-[380px]">
                            <Image
                                src={event.imageUrl}
                                alt={event.title}
                                fill
                                sizes="(min-width: 768px) 50vw, 100vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col justify-center p-8 md:p-12">
                            <FeaturedEventContent event={event} />
                        </div>
                    </div>
                ) : (
                    <div className="p-8 md:p-12">
                        <FeaturedEventContent event={event} />
                    </div>
                )}
            </article>
        </div>
    );
}

function FeaturedEventContent({ event }: { event: EventPost }) {
    const isPast = event.eventDate ? new Date(event.eventDate) < new Date() : false;

    return (
        <>
            <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className={`inline-flex rounded-sm px-3 py-1 text-xs font-bold uppercase tracking-wider ${isPast ? 'bg-ffsm-gray/20 text-ffsm-gray-dark' : 'bg-ffsm-primary-soft-strong text-ffsm-primary-strong'}`}>
                    {isPast ? 'Past Event' : 'Upcoming Event'}
                </span>
                <span className="text-sm font-medium text-ffsm-gray-dark">{formatFutureDate(event.eventDate) || 'TBA'}</span>
            </div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-ffsm-ink transition-colors md:text-4xl leading-tight">
                {event.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ffsm-gray-dark line-clamp-3">
                {event.excerpt}
            </p>
            <div className="mt-6 space-y-3">
                {(event.location || event.address) && (
                    <div className="flex items-start text-sm text-ffsm-gray-dark">
                        <MapPin className="mr-2 h-5 w-5 shrink-0 text-ffsm-primary" />
                        <div className="flex flex-col">
                            {event.location && <span className="font-semibold text-ffsm-ink">{event.location}</span>}
                            {event.address && <span>{event.address}</span>}
                        </div>
                    </div>
                )}
            </div>

            {event.address && (
                <EventMap address={event.address} className="mt-6 w-full h-72" />
            )}

            <div className="mt-8 flex items-center justify-between border-t border-ffsm-gray/20 pt-6">
                {event.ticketsUrl ? (
                    <a
                        href={event.ticketsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center rounded-sm px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors ${isPast ? 'bg-ffsm-gray pointer-events-none' : 'bg-ffsm-primary hover:bg-ffsm-primary-strong'}`}
                    >
                        <Ticket className="mr-2 h-4 w-4" />
                        {isPast ? 'Registration Closed' : 'Get Tickets / Register'}
                    </a>
                ) : (
                    <span className="text-sm italic text-ffsm-gray-dark py-2.5">No registration required</span>
                )}
            </div>
        </>
    );
}

function EventListItem({ event }: { event: EventPost }) {
    const { month, day } = formatShortDate(event.eventDate);
    const isPast = event.eventDate ? new Date(event.eventDate) < new Date() : false;

    return (
        <article className="flex gap-6 py-8 border-b border-ffsm-border/50 last:border-0 hover:bg-ffsm-surface/50 -mx-6 px-6 rounded-sm transition-colors">
            {/* Date badge or image */}
            {event.imageUrl ? (
                <div className="relative hidden h-28 w-40 flex-shrink-0 overflow-hidden rounded-sm bg-ffsm-surface sm:block">
                    <Image
                        src={event.imageUrl}
                        alt={event.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 160px"
                        className={`object-cover ${isPast ? 'opacity-70 grayscale placeholder:' : ''}`}
                    />
                </div>
            ) : (
                <div className={`hidden h-28 w-20 flex-shrink-0 flex-col items-center justify-center rounded-sm sm:flex ${isPast ? 'bg-ffsm-gray/20' : 'bg-ffsm-primary-soft-strong'}`}>
                    <span className={`text-xs font-bold uppercase tracking-widest ${isPast ? 'text-ffsm-gray-dark' : 'text-ffsm-primary-strong'}`}>
                        {month}
                    </span>
                    <span className={`mt-1 text-2xl font-bold leading-none ${isPast ? 'text-ffsm-gray-dark' : 'text-ffsm-primary-strong'}`}>
                        {day}
                    </span>
                </div>
            )}

            {/* Content */}
            <div className="min-w-0 flex-1 flex flex-col justify-center">
                <div className="mb-2 flex flex-wrap items-center gap-2 text-sm text-ffsm-gray-dark">
                    <span className={`inline-flex rounded-sm px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest ${isPast ? 'bg-ffsm-gray/20 text-ffsm-gray-dark' : 'bg-ffsm-primary-soft-strong text-ffsm-primary-strong'}`}>
                        {isPast ? 'Past Event' : 'Event'}
                    </span>
                    <time className="font-medium">{formatFutureDate(event.eventDate) || 'TBA'}</time>
                </div>

                <h3 className={`font-heading text-xl font-bold ${isPast ? 'text-ffsm-gray-dark' : 'text-ffsm-ink'}`}>
                    {event.title}
                </h3>

                {(event.location || event.address) && (
                    <div className="mt-2 flex items-start text-sm text-ffsm-gray-dark">
                        <MapPin className="mr-1.5 h-4 w-4 shrink-0 mt-0.5 text-ffsm-primary" />
                        <div className="flex flex-col">
                            {event.location && <span className="font-semibold text-ffsm-ink truncate">{event.location}</span>}
                            {event.address && <span className="text-sm truncate">{event.address}</span>}
                        </div>
                    </div>
                )}

                <p className="mt-3 text-base leading-relaxed text-ffsm-gray-dark line-clamp-2">
                    {event.excerpt}
                </p>

                {event.address && (
                    <EventMap address={event.address} className="mt-5 w-full max-w-sm h-48 hidden md:block" />
                )}

                {/* Mobile Tickets Action */}
                {event.ticketsUrl && !isPast && (
                    <div className="mt-4 sm:hidden">
                        <a href={event.ticketsUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-ffsm-primary flex items-center">
                            Register now <Ticket className="ml-1 h-3 w-3" />
                        </a>
                    </div>
                )}
            </div>

            {/* Desktop Tickets Action */}
            {event.ticketsUrl && !isPast && (
                <div className="hidden flex-shrink-0 items-center sm:flex pl-4">
                    <a
                        href={event.ticketsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-sm border-2 border-ffsm-primary px-4 py-2 text-sm font-semibold text-ffsm-primary hover:bg-ffsm-primary hover:text-white transition-colors"
                    >
                        Register
                    </a>
                </div>
            )}
        </article>
    );
}
