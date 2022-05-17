import React from "react";
import { Footer, Header, Navbar } from "../../components";

export default function Admin() {
	const [isOpen, setIsOpen] = React.useState(true);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
		console.log("toggleSidebar");
	};
	return (
		<div className="">
			<Header toggleSidebar={toggleSidebar} />
			<Navbar show={isOpen} />
		</div>
	);
}
