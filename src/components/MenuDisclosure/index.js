import { Disclosure, Transition } from "@headlessui/react";
import React from "react";

const MenuDisclosure = () => (
	<>
		<Disclosure as="div">
			{({ open }) => (
				<div className="px-2">
					<Disclosure.Button className="flex justify-between w-full px-4 py-2 my-2 text-sm font-medium text-left text-white rounded-md bg-cyan-800 hover:bg-cyan-700 focus:outline-none">
						<span>Budaya</span>
					</Disclosure.Button>
					<Transition
						enter="transition duration-100 ease-out"
						enterFrom="transform scale-95 opacity-0"
						enterTo="transform scale-100 opacity-100"
						leave="transition duration-75 ease-out"
						leaveFrom="transform scale-100 opacity-100"
						leaveTo="transform scale-95 opacity-0"
					>
						<Disclosure.Panel className="flex px-3 py-1">
							Add Budaya
						</Disclosure.Panel>
						<Disclosure.Panel className="flex px-3 py-1">
							Edit Budaya
						</Disclosure.Panel>
						<Disclosure.Panel className="flex px-3 py-1">
							Delete Budaya
						</Disclosure.Panel>
					</Transition>
				</div>
			)}
		</Disclosure>
		<Disclosure as="div">
			{({ open }) => (
				<div className="px-2">
					<Disclosure.Button className="flex justify-between w-full px-4 py-2 my-2 text-sm font-medium text-left text-white rounded-md bg-cyan-800 hover:bg-cyan-700 focus:outline-none">
						<span>Provinsi</span>
					</Disclosure.Button>
					<Transition
						enter="transition duration-100 ease-out"
						enterFrom="transform scale-95 opacity-0"
						enterTo="transform scale-100 opacity-100"
						leave="transition duration-75 ease-out"
						leaveFrom="transform scale-100 opacity-100"
						leaveTo="transform scale-95 opacity-0"
					>
						<Disclosure.Panel className="flex px-3 py-1">
							Add Provinsi
						</Disclosure.Panel>
						<Disclosure.Panel className="flex px-3 py-1">
							Edit Provinsi
						</Disclosure.Panel>
						<Disclosure.Panel className="flex px-3 py-1">
							Delete Provinsi
						</Disclosure.Panel>
					</Transition>
				</div>
			)}
		</Disclosure>
	</>
);

export default MenuDisclosure;
