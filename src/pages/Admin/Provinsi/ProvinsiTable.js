import React, { useEffect, useState } from "react";
import ProvinsiAPI from "../../../api/Provinsi";
import ProvinsiColumnGenerator from "../../../components/Table/Column/ProvinsiColumnGenerator";
import Table from "../../../components/Table/Table";

export const ProvinsiTable = () => {
	const { column } = ProvinsiColumnGenerator();

	const [dataProvinsi, setDataProvinsi] = useState([]);

	const fetchData = async () => {
		const res = await ProvinsiAPI.getProvinsi();
		setDataProvinsi(res.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="mt-6 space-y-4">
			<div className="flex items-center justify-between py-2"></div>
			<div className="overflow-x-auto">
				<Table data={dataProvinsi} columns={column} />
			</div>
		</div>
	);
};
