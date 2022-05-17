import React, { Component } from "react";
import ReactDOMServer from "react-dom/server";
import Leaflet from "leaflet";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	MapContainer,
	GeoJSON,
	TileLayer,
	ZoomControl,
	Marker,
	Popup,
} from "react-leaflet";
import Peta from "../../data/indonesia-prov.json";
import "leaflet/dist/leaflet.css";
import "../../assets/css/location.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
library.add(faLocationDot);

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
		const { data, geoJson, handleClick } = this.props;
		const countryStyle = {
			fillOpacity: 0.3,
			color: "black",
			weight: 1,
		};
		const iconHTML = ReactDOMServer.renderToString(
			<FontAwesomeIcon
				icon="fa-solid fa-location-dot fa-fw"
				size="xl"
				color="Dodgerblue"
			/>
		);
		const customMarkerIcon = new Leaflet.DivIcon({
			html: iconHTML,
		});
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
					{data &&
						data.map((i, idx) => (
							<Marker
								key={idx}
								position={[i.latitude, i.longitude]}
								eventHandlers={{
									click: () => {
										handleClick(i.name);
									},
								}}
								icon={customMarkerIcon}
							>
								<Popup>
									A pretty CSS3 popup. <br /> Easily customizable.
								</Popup>
							</Marker>
						))}
					<GeoJSON
						style={countryStyle}
						data={geoJson.features}
						onEachFeature={this.onEachProvince}
					/>
					<ZoomControl position="bottomright" />
				</MapContainer>
			</div>
		);
	}
}

export default MyMap;
