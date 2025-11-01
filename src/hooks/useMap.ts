import { useEffect, useRef, useState } from 'react';
import type { City } from '../types/city';
import { Map, TileLayer } from 'leaflet';

export function useMap(
    mapRef: React.RefObject<HTMLDivElement | null>,
    city: City
): Map | null {
    const [map, setMap] = useState<Map | null>(null);
    const isRenderedRef = useRef<boolean>(false);

    useEffect(() => {
        if (mapRef.current !== null && !isRenderedRef.current) {
            const instance = new Map(mapRef.current, {
                center: {
                    lat: city.lat,
                    lng: city.lng
                },
                zoom: city.zoom
            });

            const layer = new TileLayer(
                'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
                {
                    attribution:
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                }
            );

            instance.addLayer(layer);

            setMap(instance);
            isRenderedRef.current = true;
        }
    }, [mapRef]);

    // Обновляем центр карты при изменении города
    useEffect(() => {
        if (map) {
            map.setView([city.lat, city.lng], city.zoom);
        }
    }, [map, city]);

    return map;

}

export default useMap;