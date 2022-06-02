/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useTable } from "react-table";
import { Loader } from "../constant";

const Table = ({ columns, data, loading }) => {
	const tableInstance = useTable({ columns, data });

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		tableInstance;

	return (
		<table
			{...getTableProps()}
			className="w-full overflow-hidden bg-white border-separate shadow rounded-xl"
		>
			<thead className="text-white bg-cyan-800 rounded-t-xl">
				{headerGroups.map((headerGroup) => (
					<tr
						key={headerGroup.id}
						{...headerGroup.getHeaderGroupProps()}
						className="rounded-t-lg"
					>
						{headerGroup.headers.map((column) => (
							<th key={column.id} {...column.getHeaderProps()} className="py-2">
								{column.render("Header")}
							</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()} className="">
				{data.length > 0 ? (
					rows.map((row) => {
						prepareRow(row);
						return (
							<tr
								key={row.id}
								{...row.getRowProps()}
								className="odd:bg-slate-100"
							>
								{row.cells.map((cell, index) => (
									<td key={index} className="px-8 py-2">
										{cell.render("Cell")}
									</td>
								))}
							</tr>
						);
					})
				) : loading ? (
					<tr>
						<td className="py-8 text-center" colSpan={columns.length}>
							<Loader />
						</td>
					</tr>
				) : (
					<tr>
						<td className="py-8 text-center" colSpan={columns.length}>
							No data found
						</td>
					</tr>
				)}
			</tbody>
		</table>
	);
};

export default React.memo(Table);
