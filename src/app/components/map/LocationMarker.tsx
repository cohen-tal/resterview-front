import { useMap } from "react-leaflet/hooks";
import { DragEndEvent, Icon, LatLng, LeafletEvent } from "leaflet";
import { Popup, Marker } from "react-leaflet";
import { useEffect, useState } from "react";

interface MarkerProps {
  title: string;
  content?: string;
  onDrag?: (lat: number, lng: number) => void;
  position: [number, number];
  draggable?: boolean;
  flyTo?: boolean;
}

export default function LocationMarker({
  title,
  content = "You are here.",
  draggable = false,
  position,
  onDrag,
  flyTo = false,
}: MarkerProps) {
  const [userPosition, setUserPosition] = useState<[number, number]>(position);
  const map = useMap();
  const myIcon: Icon = new Icon({
    iconUrl: "/marker-icon-2x.png",
    iconSize: [20, 32],
  });

  useEffect(() => {
    if (position[0] === 0 || position[1] === 0) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserPosition([latitude, longitude]);
          map.flyTo(new LatLng(latitude, longitude), map.getZoom());
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      const [lat, lng] = position;
      setUserPosition([lat, lng]);
      if (flyTo) {
        map.flyTo(new LatLng(lat, lng), map.getZoom());
      }
    }
  }, [map, position, setUserPosition]);

  return (
    <Marker
      icon={myIcon}
      position={userPosition}
      draggable={draggable}
      riseOnHover
      autoPan
      eventHandlers={{
        dragend: (e: DragEndEvent) => {
          const { lat, lng } = e.target.getLatLng();
          onDrag?.(lat, lng);
        },
        mouseover: (e: LeafletEvent) => {
          e.target.openPopup();
        },
        mouseout: (e: LeafletEvent) => {
          e.target.closePopup();
        },
      }}
    >
      <Popup>
        {title}
        <br />
        {content}
      </Popup>
    </Marker>
  );
}
