// src/pages/MapPage.tsx
import { useEffect, useRef } from 'react';
import L, { Map as LeafletMap, GeoJSON } from 'leaflet';
import 'leaflet/dist/leaflet.css';

function MapPage() {
  const mapRef = useRef<LeafletMap | null>(null);
  const geoJsonLayerRef = useRef<GeoJSON | null>(null);

  useEffect(() => {
    // Prevent map from being initialized more than once
    if (mapRef.current) return;

    const map = L.map('map').setView([22.7196, 75.8577], 15);
    mapRef.current = map;

    // Add tile layer
    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      {
        attribution: '&copy; Esri — Source: Esri, Maxar',
        maxZoom: 20,
      }
    ).addTo(map);

    // Load polygons from backend
    const loadBoxes = () => {
      const bounds = map.getBounds();
      const isDev = import.meta.env.MODE === 'development';

const baseUrl = isDev
  ? '/geojson' // goes through Vite proxy
  : 'https://buildingint.onrender.com/geojson'; // full URL in production

const url = `${baseUrl}?north=${bounds.getNorth()}&south=${bounds.getSouth()}&east=${bounds.getEast()}&west=${bounds.getWest()}`;


      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (geoJsonLayerRef.current) {
            map.removeLayer(geoJsonLayerRef.current);
          }

          const geoJsonLayer = L.geoJSON(data, {
            style: (feature: any) => ({
              color: feature.properties.color || 'red',
              fillColor: feature.properties.color || 'red',
              weight: 2,
              fillOpacity: 0.4,
            }),
            onEachFeature: (feature, layer) => {
              const p = feature.properties;

              const popupDiv = document.createElement('div');
              popupDiv.innerHTML = `
                <b>Area:</b> ${p.area_in_meters ?? '-'} m²<br>
                <b>Status:</b> ${p.status ?? '-'}<br>
                <b>UID:</b> ${p.UID ?? '-'}<br>
                <b>Lat:</b> ${p.latitude ?? '-'}<br>
                <b>Lng:</b> ${p.longitude ?? '-'}<br><br>

              `;

              layer.bindPopup(popupDiv);

              layer.on('popupopen', () => {
                const buttons = popupDiv.querySelectorAll('button');
                buttons.forEach((btn: any) => {
                  btn.addEventListener('click', () => {
                    const color = btn.dataset.color;
                    const pathLayer = layer as L.Path & { feature: any };
                    pathLayer.setStyle({ fillColor: color, color: color });
                    pathLayer.feature.properties.color = color;
                  });
                });
              });
            },
          });

          geoJsonLayer.addTo(map);
          geoJsonLayerRef.current = geoJsonLayer;
        })
        .catch((err) => {
          console.error('Error fetching polygons:', err);
        });
    };

    map.on('moveend zoomend', loadBoxes);
    map.whenReady(() => {
      // Delay the first load to avoid premature bounds fetching
      setTimeout(loadBoxes, 500);
    });

    return () => {
      map.off();
      map.remove();
    };
  }, []);

  return <div id="map" className="h-screen w-full" />;
}

export default MapPage;
