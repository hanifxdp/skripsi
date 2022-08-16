import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ModalNilaiAcuan from "../ModalNilaiN";

function Legend(props) {
	const { low, high, openModal } = props;

	const roundHigh = Math.round(high);
	const roundLow = Math.round(low);

	return (
		<section className="fixed bottom-0 left-0 z-10 m-3 bg-white divide-y rounded-lg divide-slate-200 drop-shadow-lg">
			<div className="m-3">
				<p className="text-xl font-bold">Legend</p>
				<div className="absolute top-0 right-0 px-5 py-4 left hover:cursor-pointer">
					<FontAwesomeIcon icon={faInfoCircle} onClick={openModal} />
				</div>
			</div>
			<div className="m-3">
				<div className="flex flex-row py-3">
					<div className="w-12 h-12 bg-lime-300"></div>
					<p className="p-2">
						<span className="font-bold">
							{">"} {roundHigh || "xxx"} {""}
						</span>
						kerajinan
					</p>
				</div>
				<div className="flex flex-row py-3">
					<div className="w-12 h-12 bg-yellow-200"></div>
					<p className="p-2">
						<span className="font-bold">
							{roundLow || "xxx"} - {roundHigh || "xxx"} {""}
						</span>
						kerajinan
					</p>
				</div>
				<div className="flex flex-row py-3">
					<div className="w-12 h-12 bg-red-300"></div>
					<p className="p-2">
						<span className="font-bold">
							{"<"} {roundLow || "xxx"} {""}
						</span>
						kerajinan
					</p>
				</div>
			</div>
		</section>
	);
}

export default Legend;
