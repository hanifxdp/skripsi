import { Disclosure, Transition } from "@headlessui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const MenuDisclosure = ({ links }) => (
	<Disclosure as="div">
		{({ open }) => (
			<div className="px-2">
				<Disclosure.Button className="flex justify-between w-full px-4 py-2 my-2 text-sm font-medium text-left text-white rounded-md bg-cyan-800 hover:bg-cyan-700 focus:outline-none">
					<span>{links.label}</span>
				</Disclosure.Button>
				<Transition
					enter="transition duration-100 ease-out"
					enterFrom="transform scale-95 opacity-0"
					enterTo="transform scale-100 opacity-100"
					leave="transition duration-75 ease-out"
					leaveFrom="transform scale-100 opacity-100"
					leaveTo="transform scale-95 opacity-0"
				>
					{links.links.map((link) => (
						<Disclosure.Panel key={link.name} className="flex px-3 py-1">
							<NavLink
								to={link.to}
								activeClassName="text-slate-900 bg-slate-300"
								className="w-full px-4 py-2 text-sm rounded-md hover:text-slate-800 hover:bg-slate-200 hover:cursor-pointer"
							>
								{link.name}
							</NavLink>
						</Disclosure.Panel>
					))}
				</Transition>
			</div>
		)}
	</Disclosure>
);

export default React.memo(MenuDisclosure);
