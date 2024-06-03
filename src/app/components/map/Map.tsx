"use client";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Marker, Popup } from "react-leaflet";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const myIcon: Icon = new Icon({
    iconUrl: "https://img.icons8.com/ultraviolet/40/marker.png",
    iconSize: [40, 40],
  });

  return (
    <div>
      <MapContainer
        center={[32.109333, 34.855499]}
        zoom={15}
        scrollWheelZoom={true}
        style={{
          width: "100%",
          height: 256,
          border: "1px solid black",
          maxWidth: "100%",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={myIcon} position={[32.109333, 34.855499]}>
          <Popup>🐻🍻🎉</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
