import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const position = [34.0070655, -117.8638064]; // set your own location coordinates

function MapLocation() {
  return (
    <MapContainer center={position} zoom={13} style={{ height: "60vh", width: "60vh" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapLocation;
