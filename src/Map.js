import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";
import { showDataonMap } from "./util";

function Map({ countries, casesType, center, zoom }) {
  console.log(countries);
  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showDataonMap(countries, casesType)}
      </MapContainer>
    </div>
  );
}

export default Map;
