/* eslint-disable react/no-array-index-key */
import React from "react";
import { Tab } from "@headlessui/react";

const classNames = (...classes) => classes.filter(Boolean).join(" ");

const Tabs = (props) => {
	const { tabList } = props;

	return (
		<div className="w-full px-2 sm:px-0">
			<Tab.Group>
				<Tab.List className="flex space-x-1">
					{tabList.map((tab) => (
						<Tab
							key={tab.tabTitle}
							className={({ selected }) =>
								classNames(
									"px-4 py-2.5 text-sm font-semibold text-cyan-700",
									"focus:outline-none",
									selected
										? "border-b-4 border-b-cyan-700"
										: "text-slate-400 hover:text-cyan-600"
								)
							}
						>
							{tab.tabTitle}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="mt-2 focus:outline-none">
					{tabList.map((tab) => (
						<Tab.Panel key={tab.tabTitle}>{tab.tabChildren}</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
};

export default Tabs;
