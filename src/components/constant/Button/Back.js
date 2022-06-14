import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
	const navigate = useNavigate();

	return (
		<button type="button" onClick={() => navigate(-1)} className="inline-block">
			<div className="flex hover:text-sky-700 hover:cursor-pointer">
				<FontAwesomeIcon icon={faArrowLeftLong} />
				<div className="text-sm font-bold">Back</div>
			</div>
		</button>
	);
};

export default BackButton;
