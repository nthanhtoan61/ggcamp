"use client";

import { useEffect, useRef, useState } from "react";

interface Marker {
  id: string;
  lat: number;
  lng: number;
  title: string;
  image: string;
  description?: string;
}

interface DestinationMapProps {
  markers: Marker[];
  center?: { lat: number; lng: number };
  zoom?: number;
}

export default function DestinationMap({
  markers,
  center = { lat: 53.5597, lng: 9.9601 },
  zoom = 4,
}: DestinationMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markerLayersRef = useRef<Record<string, any>>({});
  const [isClient, setIsClient] = useState(false);

  // Chỉ render map sau khi component mount (client side)
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const L = (window as any).L;
    if (!L || !mapRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapRef.current, { zoomControl: false }).setView([center.lat, center.lng], zoom);

      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
          attribution:
            "Leaflet | © Esri | DigitalGlobe, GeoEye, i-cubed, USDA, USGS, AEX, Getmapping, Aerogrid, IGN, IGP, swisstopo, and the GIS User Community",
          maxZoom: 18,
          minZoom: 0,
        }
      ).addTo(map);

      L.control.zoom({ position: "topleft" }).addTo(map);

      mapInstanceRef.current = map;
    }

    const map = mapInstanceRef.current;

    // Xóa marker cũ
    Object.values(markerLayersRef.current).forEach((m) => m.remove());

    const layers: Record<string, any> = {};
    markers.forEach((m) => {
      const marker = (window as any).L.marker([m.lat, m.lng]).addTo(map);
      marker.bindPopup(
        `<div style="width:200px">
          <h3 style="font-weight:bold;margin-bottom:5px;">${m.title}</h3>
          <img src="${m.image}" alt="${m.title}" style="width:100%;height:100px;object-fit:cover;border-radius:5px;margin-bottom:5px;" />
          <p style="font-size:0.85rem;margin:0;">${m.description || ""}</p>
        </div>`
      );
      layers[m.id] = marker;
    });

    markerLayersRef.current = layers;
  }, [isClient, markers, center, zoom]);

  const handleNavigate = (id: string) => {
    const marker = markerLayersRef.current[id];
    if (marker && mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(marker.getLatLng(), 10, { animate: true });
      marker.openPopup();
    }
  };

  return (
    <div
      id="custom-map-container"
      className="uk-position-relative uk-position-z-index uk-dark rounded shadow-md"
      style={{ height: "600px" }}
    >
      {/* Navigation Buttons */}
      <div
        className="uk-position-top-left uk-position-z-index flex flex-col gap-1"
        style={{
          zIndex: 9999,
          borderRadius: "8px",
          padding: "80px 12px",
          color: "#fff",
          fontSize: "15px",
        }}
      >
        {markers.map((m) => (
          <button
            key={m.id}
            onClick={() => handleNavigate(m.id)}
            style={{
              background: "rgba(0,0,0,0.8)",
              color: "#fff",
              border: "1px solid #fff",
              borderRadius: "6px",
              padding: "4px 8px",
              cursor: "pointer",
            }}
          >
            {m.title}
          </button>
        ))}
      </div>

      {/* Map chỉ render khi client side */}
      {isClient && <div ref={mapRef} className="h-full w-full rounded" />}
    </div>
  );
}
