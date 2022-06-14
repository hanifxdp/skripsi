import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function SearchField(props) {
	const { label, inputProps, handleSubmit } = props;

	return (
		<div className="relative block mx-3 mt-3">
			{label && <label>{label}</label>}
			<form className="flex mb-3" onSubmit={handleSubmit}>
				<input
					{...inputProps}
					className="block w-full px-3 py-2 pr-3 border rounded-md focus:outline-none"
				/>
				<button type="submit" className="p-2">
					<FontAwesomeIcon icon={faMagnifyingGlass} className="fill-slate-50" />
				</button>
			</form>
		</div>
	);
}
