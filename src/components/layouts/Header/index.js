import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import AuthAPI from "../../../api/authAPI";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../../context/AdminContext";

const Header = (props) => {
	const navigate = useNavigate();

	const { toggleSidebar } = props;
	const { admin, setAdmin } = useContext(AdminContext);

	const logout = async () => {
		try {
			const res = await AuthAPI.logout();
			console.log(res);
			if (res.status === 200) {
				setAdmin(null);
				navigate("/", { replace: true });
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<div className="sticky top-0 z-50 flex items-center justify-between h-12 px-3 py-4 shadow-l bg-sky-900">
				<button type="button" onClick={toggleSidebar}>
					<FontAwesomeIcon icon={faBars} color="white" />
				</button>
				<div className="flex space-x-2">
					<div className="font-bold text-white">{admin?.nama_admin}</div>
					<button
						type="button"
						className="flex items-center hover:cursor-pointer"
						onClick={logout}
					>
						<FontAwesomeIcon icon={faArrowRightFromBracket} color="white" />
					</button>
				</div>
			</div>
		</>
	);
};

export default Header;
