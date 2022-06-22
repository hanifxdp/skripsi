import React from "react";
const ProvinsiColumnGenerator = () => {
	const column = React.useMemo(
		() => [
			{
				Header: "No",
				accessor: "provinsi.id",
			},
			{
				Header: "Provinsi",
				accessor: "provinsi.nama_provinsi",
			},
		],
		[]
	);

	return { column };
};

export default ProvinsiColumnGenerator;
