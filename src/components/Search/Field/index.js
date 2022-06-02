import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function SearchField(props) {
	const { label, inputProps, className, handleSubmit } = props;

	// const classes = [, className].filter(Boolean).join(" ");

	return (
		<div className="relative block">
			{label && <label>{label}</label>}
			<form className="left-0 flex items-center" onClick={handleSubmit}>
				<span className="absolute inset-y-0 left-0 flex items-center pl-2">
					<FontAwesomeIcon icon={faMagnifyingGlass} className="fill-slate-50" />
				</span>
				<input
					type="text"
					name="search"
					{...inputProps}
					className="block w-full px-3 py-2 pr-3 border rounded-md pl-9 focus:outline-none"
				/>
			</form>
		</div>
	);
}
