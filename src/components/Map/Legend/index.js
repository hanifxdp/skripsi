import React from "react";

function Legend(props) {
	const { low, high } = props;

	const roundHigh = Math.round(high);
	const roundLow = Math.round(low);

	return (
		<div>
			<div className="fixed bottom-0 left-0 z-10 p-3 m-3 bg-white rounded-lg drop-shadow-lg">
				<div>
					<div className="text-xl font-bold">Legend</div>
				</div>
				<div className="flex flex-row py-3">
					<div className="w-12 h-12 bg-lime-300"></div>
					<p className="p-2">
						<span className="font-bold">
							{">="} {roundHigh || "xxx"} {""}
						</span>
						Kebudayaan
					</p>
				</div>
				<div className="flex flex-row py-3">
					<div className="w-12 h-12 bg-yellow-200"></div>
					<p className="p-2">
						<span className="font-bold">
							{roundLow || "xxx"} - {roundHigh || "xxx"} {""}
						</span>
						Kebudayaan
					</p>
				</div>
				<div className="flex flex-row py-3">
					<div className="w-12 h-12 bg-red-300"></div>
					<p className="p-2">
						<span className="font-bold">
							{"<="} {roundLow || "xxx"} {""}
						</span>
						Kebudayaan
					</p>
				</div>
			</div>
		</div>
	);
}

export default Legend;
