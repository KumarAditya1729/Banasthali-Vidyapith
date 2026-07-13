"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { campusMarkers, campusCenter, CampusMarker } from "@/data/campus";
import { Compass, Crosshair } from "lucide-react";
import Image from "next/image";

// We need to fix the default Leaflet marker icon issue in Next.js
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Create custom elegant HTML icon
const createCustomIcon = () => {
  return L.divIcon({
    className: "custom-marker",
    html: `
      <div class="relative group cursor-pointer">
        <div class="absolute -inset-2 bg-gold/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="w-10 h-10 rounded-full bg-[#1e0408] border-2 border-gold shadow-lg flex items-center justify-center transform transition-transform group-hover:scale-110 z-10 relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });
};

interface MapProps {
  selectedCategory: string | null;
  onMarkerClick: (marker: CampusMarker) => void;
}

// Map Controller to handle flyTo when a marker is clicked or searched
function MapController({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, { duration: 1.5, easeLinearity: 0.25 });
  }, [center, zoom, map]);
  
  return null;
}

export default function VirtualTourMap({ selectedCategory, onMarkerClick }: MapProps) {
  const [activeCenter, setActiveCenter] = useState<[number, number]>(campusCenter);
  const [activeZoom, setActiveZoom] = useState(16);

  // Filter markers based on category
  const visibleMarkers = selectedCategory 
    ? campusMarkers.filter(m => m.category === selectedCategory)
    : campusMarkers;

  const handleMarkerClick = (marker: CampusMarker) => {
    setActiveCenter(marker.position);
    setActiveZoom(18);
    onMarkerClick(marker);
  };

  const handleRecenter = () => {
    setActiveCenter(campusCenter);
    setActiveZoom(16);
  };

  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden border border-gold/20 shadow-2xl z-0">
      {/* Premium Map Controls Overlay */}
      <div className="absolute top-6 right-6 z-[1000] flex flex-col gap-3">
        <button 
          onClick={handleRecenter}
          className="w-12 h-12 bg-[#fffdf9]/90 dark:bg-[#1e0408]/90 backdrop-blur-md rounded-full shadow-lg border border-gold/30 flex items-center justify-center text-primary dark:text-gold hover:scale-110 transition-transform"
          title="Recenter Campus"
        >
          <Crosshair className="w-5 h-5" />
        </button>
      </div>

      <MapContainer 
        center={campusCenter} 
        zoom={16} 
        minZoom={14}
        maxBounds={[
          [26.380, 75.850], // SouthWest
          [26.420, 75.900]  // NorthEast
        ]}
        maxBoundsViscosity={1.0}
        zoomControl={false}
        className="w-full h-full bg-[#f8f5f0] dark:bg-[#140205]"
        style={{ height: "100%", width: "100%", minHeight: "500px", zIndex: 0 }}
      >
        {/* Premium Base Map Tiles (CartoDB Positron for light, Dark Matter for dark mode) */}
        {/* Using standard OSM for now to ensure it loads flawlessly without keys, styled via CSS filters in dark mode */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
        />
        
        <ZoomControl position="bottomright" />
        <MapController center={activeCenter} zoom={activeZoom} />

        {visibleMarkers.map((marker) => (
          <Marker 
            key={marker.id} 
            position={marker.position}
            icon={createCustomIcon()}
            eventHandlers={{
              click: () => handleMarkerClick(marker),
            }}
          >
            <Popup className="premium-popup" closeButton={false}>
              <div className="w-[280px] p-0 flex flex-col bg-card rounded-2xl overflow-hidden border border-gold/20 shadow-xl">
                <div className="relative h-[120px] w-full">
                  <Image 
                    src={marker.image} 
                    alt={marker.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold bg-black/40 px-2 py-0.5 rounded-sm backdrop-blur-sm">
                      {marker.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-background">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-1 leading-tight">{marker.name}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {marker.description}
                  </p>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMarkerClick(marker);
                    }}
                    className="mt-4 w-full py-2 bg-primary/10 hover:bg-primary/20 text-primary dark:text-gold text-xs font-bold uppercase tracking-widest rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Compass className="w-3.5 h-3.5" />
                    Explore Details
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
