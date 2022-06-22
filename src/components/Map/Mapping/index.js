import React from "react";
import ReactDOMServer from "react-dom/server";
import Leaflet from "leaflet";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	MapContainer,
	GeoJSON,
	TileLayer,
	ZoomControl,
	Marker,
	Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../../../assets/css/location.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
library.add(faLocationDot);

function MyMap(props) {
	const { data, geoJson, handleClick, dataCalc } = props;

	const countryStyle = {
		fillOpacity: 0.3,
		color: "white",
		weight: 2,
		opacity: 1,
		dashArray: "3",
	};

	const onEachProvince = async (province, layer) => {
		layer.on("click", function () {
			// console.log(data);
			handleClick(
				data[province.index].provinsi.id,
				data[province.index].provinsi.nama_provinsi
			);
		});
		layer.on("mouseover", function (e) {
			const target = e.target;
			target.setStyle({
				weight: 4,
				color: "#666",
				dashArray: "",
				fillOpacity: 0.5,
			});
		});
		layer.on("mouseout", function (e) {
			const target = e.target;
			target.setStyle({
				fillOpacity: 0.3,
				color: "white",
				weight: 2,
				opacity: 1,
				dashArray: "3",
			});
		});
		let high = await dataCalc.high;
		let low = await dataCalc.low;
		const totalBudaya = parseInt(data[province.index]?.totalBudaya) + 3;

		if (totalBudaya) {
			if (totalBudaya >= high) {
				layer.options.fillColor = "green";
			} else if (totalBudaya <= low) {
				layer.options.fillColor = "red";
			} else {
				layer.options.fillColor = "yellow";
			}
		}
	};

	const iconHTML = ReactDOMServer.renderToString(
		<FontAwesomeIcon
			icon="fa-solid fa-location-dot fa-fw"
			size="xl"
			color="Dodgerblue"
			className="drop-shadow-lg"
		/>
	);
	const customMarkerIcon = new Leaflet.DivIcon({
		html: iconHTML,
	});
	const centerMap = [-2, 120];
	const zoomMap = 5.4;

	return (
		<div>
			<MapContainer
				className="fixed inset-0 "
				zoom={zoomMap || 14}
				center={centerMap || (data.province.latitude, data.province.longitude)}
				scrollWheelZoom={true}
				zoomControl={false}
			>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				{data &&
					data.map((i, idx) => (
						<Marker
							key={idx}
							position={[i.provinsi.latitude, i.provinsi.longitude]}
							eventHandlers={{
								click: () => {
									handleClick(i.provinsi.id, i.provinsi.nama_provinsi);
								},
							}}
							icon={customMarkerIcon}
						>
							<Tooltip>
								<b>{i.provinsi?.nama_provinsi}</b>
								<p>{parseInt(i.totalBudaya) + 3} Budaya</p>
							</Tooltip>
						</Marker>
					))}
				{data.length > 0 && (
					<GeoJSON
						style={countryStyle}
						data={geoJson.features}
						onEachFeature={onEachProvince}
					/>
				)}
				<ZoomControl position="bottomright" />
			</MapContainer>
		</div>
	);
}

export default React.memo(MyMap);
