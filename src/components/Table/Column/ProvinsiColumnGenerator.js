import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const ProvinsiColumnGenerator = () => {
	const column = React.useMemo(
		() => [
			{
				Header: "Provinsi",
				accessor: "provinsi.nama_provinsi",
			},
			{
				Header: "Action",
				Cell: (props) => {
					const { row } = props;

					return (
						<div className="flex justify-center">
							<Link
								to={`/admin/provinsi/${row.original.id}`}
								className="inline-flex items-center space-x-1 hover:cursor-pointer hover:text-cyan-700"
							>
								<FontAwesomeIcon icon={faPenToSquare} />
								<div className="text-sm font-bold">Edit</div>
							</Link>
						</div>
					);
				},
			},
		],
		[]
	);

	return { column };
};

export default ProvinsiColumnGenerator;
