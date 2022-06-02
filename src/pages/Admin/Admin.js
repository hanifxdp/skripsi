import React from "react";
import { Banner, Header, Navbar } from "../../components";
import { Outlet } from "react-router-dom";

export default function Admin({ children }) {
	const [isOpen, setIsOpen] = React.useState(true);

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
