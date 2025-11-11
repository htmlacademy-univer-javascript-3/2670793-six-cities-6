import { Icon, Marker, LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import type { City } from '../../types/city';
import type { Points } from '../../types/map';
import { URL_MARKER_DEFAULT } from '../../const';

import useMap from '../../hooks/useMap';

interface MapProps {
    city: City;
    points: Points;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const Map: FC<MapProps> = ({ city, points }) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markersLayerRef = useRef<LayerGroup | null>(null);

  useEffect(() => {
    if (map) {
      // Удаляем предыдущие маркеры
      if (markersLayerRef.current) {
        map.removeLayer(markersLayerRef.current);
      }

      // Создаем новую группу маркеров
      const markersLayer = new LayerGroup();

      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng,
        }, {
          icon: defaultCustomIcon,
        });
        markersLayer.addLayer(marker);
      });

      // Добавляем маркеры на карту
      map.addLayer(markersLayer);
      markersLayerRef.current = markersLayer;
    }
  }, [map, points]);

  return (
    <section className="cities__map map" ref={mapRef}>


    </section>
  // <div style={{ height: '500px' }} ref={mapRef}></div>
  );
};

export default Map;
