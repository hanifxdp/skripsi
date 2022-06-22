import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const ColumnGenerator = () => {
	const column = React.useMemo(
		() => [
			{
				Header: "No",
				accessor: "id",
			},
			{
				Header: "No Registrasi",
				accessor: "registNum",
			},
			{
				Header: "Nama Budaya",
				accessor: "nama_budaya",
			},
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
								to={`/admin/budaya/${row.original.id}`}
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

export default ColumnGenerator;
