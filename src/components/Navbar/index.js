import React from "react";
import { Transition } from "@headlessui/react";
import MenuDisclosure from "../MenuDisclosure";

const Navbar = (props) => {
	const { show } = props;

	return (
		<Transition
			show={show}
			enter="transition ease-in-out duration-300 transform"
			enterFrom="-translate-x-full"
			enterTo="translate-x-0"
			leave="transition ease-in-out duration-200 transform"
			leaveFrom="translate-x-0"
			leaveTo="-translate-x-full"
		>
			<div className="sticky top-0 left-0 h-screen space-y-2 overflow-y-auto bg-white shadow-xl w-80 no-scrollbar">
				<div className="px-12 py-8">
					<img
						src="https://www.nicepng.com/png/full/248-2489738_business-company-logo-template-your-company-logo-png.png"
						alt=""
					/>
				</div>
				<div className="space-y-0.5 px-1">
					<MenuDisclosure />
				</div>
			</div>
		</Transition>
	);
};

export default Navbar;
