import React, { Component } from "react";
import { MapContainer, GeoJSON, TileLayer, ZoomControl } from "react-leaflet";
import Peta from "../data/indonesia-prov.json";
import "leaflet/dist/leaflet.css";

class MyMap extends Component {
  state = {};

  componentDidMount() {
    console.log(Peta);
  }

  onEachProvince = (province, layer) => {
    const totalBudaya = province.properties.totalBudaya;
    let high = 102.6571429;
    let low = 65.97813491;

    if (totalBudaya >= high) {
      layer.options.fillColor = "green";
    } else if (totalBudaya <= low) {
      layer.options.fillColor = "red";
    } else {
      layer.options.fillColor = "yellow";
    }
  };

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
          <GeoJSON data={Peta.features} onEachFeature={this.onEachProvince} />
          <ZoomControl position="bottomright" />
        </MapContainer>
      </div>
    );
  }
}

export default MyMap;
