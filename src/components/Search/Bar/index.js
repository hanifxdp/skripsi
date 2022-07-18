import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import SearchField from "../Field";

export default function SearchBar(props) {
	const { onClickResult, openResult, handleInput, handleSubmit, resultData } =
		props;

	const inputProps = {
		placeholder: "Telusuri Kerajinan Tradisional Indonesia...",
		onChange: handleInput,
	};

	return (
		<div className="fixed z-40 m-3 bg-white rounded-lg w-96">
			<SearchField inputProps={inputProps} handleSubmit={handleSubmit} />
			{openResult && (
				<div>
					{resultData.length !== 0 ? (
						resultData.map((i, idx) => (
							<div
								className="flex px-6 py-4 hover:cursor-pointer hover:bg-sky-500 hover:text-white"
								onClick={() => onClickResult(i.id)}
								key={idx}
							>
								<span>
									<FontAwesomeIcon icon={faLocationDot} />
								</span>
								<p className="pl-3">{`${i.nama_budaya}, ${i.provinsi.nama_provinsi}`}</p>
							</div>
						))
					) : (
						<div className="p-4">
							<p>Kerajinan Tradisional tidak ditemukan!</p>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
