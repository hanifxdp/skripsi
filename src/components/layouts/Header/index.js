import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Header = (props) => {
	const { toggleSidebar } = props;
	// const username = useSelec;
	return (
		<>
			<div className="sticky top-0 z-50 flex items-center justify-between h-12 px-3 py-4 bg-gray-500 shadow-lg">
				<button type="button" onClick={toggleSidebar}>
					<FontAwesomeIcon icon={faBars} color="white" />
				</button>
				<div className="flex space-x-2">
					<div className="font-bold text-white">Admin</div>
					<button
						type="button"
						className="flex items-center hover:cursor-pointer"
						// onClick={logoutCallback}
					>
						<FontAwesomeIcon icon={faArrowRightFromBracket} color="white" />
					</button>
				</div>
			</div>
		</>
	);
};

export default Header;
