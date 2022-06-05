import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import React, { useCallback } from "react";
import SearchField from "../Field";
export default function SearchBar(props) {
	const { onClickResult, openResult, handleInput, handleSubmit, resultData } =
		props;

	const inputProps = {
		placeholder: "Telusuri Kerajinan Tradisional Indonesia...",
		onChange: handleInput,
	};

	return (
		<div className="fixed z-40 p-3 m-3 bg-white rounded-lg w-96">
			<SearchField inputProps={inputProps} handleSubmit={handleSubmit} />
			{openResult && (
				<div className="py-3 pl-3">
					{resultData.length !== 0 ? (
						resultData.map((i, idx) => (
							<div
								className="flex my-2"
								onClick={() => onClickResult(i.id)}
								key={idx}
							>
								<span>
									<FontAwesomeIcon icon={faLocationDot} />
								</span>
								<p className="pl-3">{resultData}</p>
							</div>
						))
					) : (
						<div>
							<p>Kerajinan Tradisional tidak ditemukan!</p>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
