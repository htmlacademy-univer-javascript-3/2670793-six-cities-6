import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import type { FC } from "react";
import { useEffect, useRef } from 'react';
import { type City } from '../../mocks/city';
import { type Points } from '../../mocks/points';
import { URL_MARKER_DEFAULT } from '../../const';

import useMap from '../../hooks/useMap';

interface MapProps {
    city: City;
    points: Points
}

const defaultCustomIcon = new Icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40]
});

const Map: FC<MapProps> = ({ city, points }) => {
    const mapRef = useRef(null);
    const map = useMap(mapRef, city);

    useEffect(() => {
        if (map) {
            points.forEach((point) => {
                new Marker({
                    lat: point.lat,
                    lng: point.lng,
                }, {
                    icon: defaultCustomIcon,
                })
                    .addTo(map);
            });
        }
    }, [map, points]);

    return (
        <section className="cities__map map" ref={mapRef}>


        </section>
        // <div style={{ height: '500px' }} ref={mapRef}></div>
    )
}

export default Map;