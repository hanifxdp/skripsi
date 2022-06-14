import React, { useContext, useEffect, useState } from "react";
import { Banner, Header, Navbar } from "../../components";
import { Outlet, useNavigate } from "react-router-dom";
import API from "../../api/API";
import { AdminContext } from "../../context/AdminContext";

export default function Admin({ children }) {
	const [isOpen, setIsOpen] = useState(true);
	const [isLogged, setIsLogged] = useState(true);
	const { admin, setAdmin } = useContext(AdminContext);
	const navigate = useNavigate();

	API.interceptors.response.use(
		(response) => response,
		(error) => {
			console.log(error);
			if (
				error &&
				error.response &&
				error.response.status === 401 &&
				error.response.data.message === "Not authenticated."
			) {
				setIsLogged(false);
				console.log("satu");
				console.log(isLogged);
				return Promise.reject();
			}
			return Promise.reject(error);
		}
	);

	// useEffect(() => {
	// 	if (admin) {
	// 		navigate("/admin");
	// 	} else {
	// 		navigate("/");
	// 	}
	// }, [admin]);
	const toggleSidebar = () => {
		setIsOpen(!isOpen);
		console.log("toggleSidebar");
	};
	return (
		<div className="flex w-full bg-slate-50">
			<Navbar show={isOpen} />
			<div className="w-full h-full">
				<Header toggleSidebar={toggleSidebar} />
				<Banner />
				<div className="w-full px-8 py-6">
					<Outlet />
				</div>
			</div>
		</div>
	);
}
