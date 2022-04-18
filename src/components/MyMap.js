import React, { Component } from "react";
import { MapContainer, GeoJSON, TileLayer, ZoomControl } from "react-leaflet";
import Peta from "../data/indonesia-prov.json";
import "leaflet/dist/leaflet.css";

class MyMap extends Component {
  state = {};

  componentDidMount() {
    console.log(Peta);
  }

  render() {
    return (
      <div>
        <MapContainer
          className="fixed inset-0 "
          zoom={5.4}
          center={[-2, 120]}
          scrollWheelZoom={true}
          zoomControl={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <GeoJSON data={Peta.features} />
          <ZoomControl position="bottomright" />
        </MapContainer>
      </div>
    );
  }
}

export default MyMap;
