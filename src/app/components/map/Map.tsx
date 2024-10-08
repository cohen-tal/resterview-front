"use client";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import "leaflet/dist/leaflet.css";
import { ReactNode, useState } from "react";

interface MapProps {
  width?: number | string;
  height?: number | string;
  center?: [number, number];
  markerTitle?: string;
  markerContent?: string;
  children?: ReactNode;
  onMarkerDrag?: (lat: number, lng: number) => void;
}

export default function Map({
  width = "100",
  height = 256,
  center = [32.109333, 34.855499],
  markerTitle = "",
  markerContent,
  onMarkerDrag,
  children,
}: MapProps) {
  const [markerPos, setMarkerPos] = useState<[number, number] | undefined>();
  return (
    <div>
      <MapContainer
        center={center}
        zoom={15}
        maxZoom={18}
        scrollWheelZoom={true}
        style={{
          width,
          height,
          border: "1px solid black",
          maxWidth: "100%",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {children}
      </MapContainer>
    </div>
  );
}
