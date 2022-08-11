import React from "react";
import { Transition } from "@headlessui/react";
import MenuDisclosure from "../MenuDisclosure";
import { budayaLinks, provinsiLinks } from "../../constant/Disclosured";
import logo from "../../../assets/img/icon.png";

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
				<div className="px-6 py-6 flex justify-items-center space-x-2">
					<img src={logo} className=" w-30 h-20 " alt="" />
					<div className="flex flex-col justify-center">
						<h5 className="text-lg font-bold">
							Manajemen Data Kerajinan Tradisional Indonesia
						</h5>
					</div>
				</div>
				<div className="space-y-0.5 px-1">
					<MenuDisclosure links={budayaLinks} />
					<MenuDisclosure links={provinsiLinks} />
				</div>
			</div>
		</Transition>
	);
};

export default Navbar;
