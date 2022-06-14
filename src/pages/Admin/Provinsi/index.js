import React from "react";
import { ProvinsiTable } from "./ProvinsiTable";

const ProvinsiPage = () => (
	<div>
		<div className="flex items-center justify-between mb-5">
			<h3 className="text-2xl font-bold align-middle">Provinsi List</h3>
		</div>
		<ProvinsiTable />
	</div>
);

export default ProvinsiPage;
