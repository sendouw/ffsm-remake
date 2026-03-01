'use client';

import { useState, useEffect, useRef } from 'react';
import { Map, AdvancedMarker, useMapsLibrary } from '@vis.gl/react-google-maps';
import { MapPin } from 'lucide-react';

interface EventMapProps {
    address: string;
    className?: string;
}

export default function EventMap({ address, className }: EventMapProps) {
    const geocodingLibrary = useMapsLibrary('geocoding');
    const mapsLibrary = useMapsLibrary('maps');
    const streetViewLibrary = useMapsLibrary('streetView');

    // We store the latLng to center the map
    const [latLng, setLatLng] = useState<google.maps.LatLngLiteral | null>(null);
    const [error, setError] = useState(false);
    const [panoId, setPanoId] = useState<string | null>(null);
    const [showStreetView, setShowStreetView] = useState(false);

    useEffect(() => {
        if (!geocodingLibrary || !address) return;

        const geocoder = new geocodingLibrary.Geocoder();
        geocoder.geocode({ address }, (results, status) => {
            if (status === 'OK' && results && results[0]) {
                const location = results[0].geometry.location;
                setLatLng({
                    lat: location.lat(),
                    lng: location.lng()
                });
            } else {
                console.warn('Geocode failed for address:', address, 'Status:', status);
                setError(true);
            }
        });
    }, [geocodingLibrary, address]);

    // Attempt to find a Street View panorama near the geocoded location
    useEffect(() => {
        if (!streetViewLibrary || !latLng) return;
        const svService = new streetViewLibrary.StreetViewService();
        svService.getPanorama({ location: latLng, radius: 50 }, (data, status) => {
            if (status === 'OK' && data?.location?.pano) {
                setPanoId(data.location.pano);
            }
        });
    }, [streetViewLibrary, latLng]);

    if (error) {
        return (
            <div className={`flex flex-col items-center justify-center bg-ffsm-surface/50 border border-ffsm-border rounded-sm p-4 ${className}`}>
                <MapPin className="h-6 w-6 text-ffsm-gray-dark mb-2 opacity-50" />
                <span className="text-xs text-ffsm-gray-dark text-center">Interactive map unavailable for this location.</span>
            </div>
        );
    }

    if (!latLng) {
        return (
            <div className={`flex items-center justify-center bg-ffsm-surface animate-pulse rounded-sm border border-ffsm-border ${className}`}>
                <span className="text-xs text-ffsm-gray-dark font-medium">Locating event...</span>
            </div>
        );
    }

    return (
        <div className={`relative overflow-hidden rounded-sm border border-ffsm-border bg-ffsm-surface ${className}`}>
            {showStreetView && panoId ? (
                <div className="absolute inset-0 z-10 w-full h-full">
                    {/* The Street View Pano is rendered dynamically into a generic container */}
                    <StreetViewPanorama latLng={latLng} panoId={panoId} mapsLibrary={mapsLibrary} streetViewLibrary={streetViewLibrary} />
                </div>
            ) : null}

            <Map
                mapId="ffsm-event-map"
                defaultCenter={latLng}
                defaultZoom={15}
                gestureHandling="cooperative"
                disableDefaultUI={true}
                className="w-full h-full"
            >
                <AdvancedMarker position={latLng}>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-ffsm-primary text-white shadow-lg border-2 border-white">
                        <MapPin className="h-4 w-4" />
                    </div>
                </AdvancedMarker>
            </Map>

            {/* Overlay Street View Toggle if available */}
            {panoId && (
                <div className="absolute bottom-3 right-3 z-20">
                    <button
                        onClick={() => setShowStreetView(!showStreetView)}
                        className="bg-white/90 backdrop-blur-sm hover:bg-white text-ffsm-ink text-xs font-semibold px-3 py-1.5 rounded-sm shadow-md border border-ffsm-border transition-colors flex items-center"
                    >
                        {showStreetView ? 'Exit Street View' : 'View Staging Area'}
                    </button>
                </div>
            )}
        </div>
    );
}

// A helper component to explicitly render the StreetView instance without breaking React lifecycle
function StreetViewPanorama({
    latLng,
    panoId,
    mapsLibrary,
    streetViewLibrary
}: {
    latLng: google.maps.LatLngLiteral;
    panoId: string;
    mapsLibrary: unknown;
    streetViewLibrary: unknown;
}) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!streetViewLibrary || !mapsLibrary || !containerRef.current) return;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const SVLib = streetViewLibrary as any;

        new SVLib.StreetViewPanorama(containerRef.current, {
            position: latLng,
            pano: panoId,
            pov: { heading: 0, pitch: 0 },
            zoom: 1,
            disableDefaultUI: true,
            showRoadLabels: true
        });

        return () => {
            // Cleanup panorama instance if needed
        };
    }, [latLng, panoId, mapsLibrary, streetViewLibrary]);

    return <div ref={containerRef} className="w-full h-full bg-ffsm-surface"></div>;
}
