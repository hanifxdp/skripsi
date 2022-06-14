import React, { useEffect } from "react";
import usePagination from "../../../hooks/usePagination";
import Table from "../../../components/Table/Table";
import TablePagination from "../../../components/Table/TablePagination";
import TableSize from "../../../components/Table/TableSize";
import useFetchBudaya from "../../../hooks/useFetchBudaya";
import ColumnGenerator from "../../../components/Table/Column/ColumnGenerator";

const BudayaTable = () => {
	const { column } = ColumnGenerator();

	const {
		currentPage,
		setCurrentPage,
		pageSize,
		setPageSize,
		query,
		setQuery,
	} = usePagination();

	const { budaya, navigation, loading } = useFetchBudaya(query);

	// console.log(budaya);

	useEffect(() => {
		if (budaya.length > 10) {
			setQuery({
				limit: pageSize,
				page: currentPage,
			});
		}
	}, [budaya]);

	return (
		<div className="mt-6 space-y-4">
			<div className="flex items-center justify-between py-2">
				<TableSize pageSize={pageSize} setPageSize={setPageSize} />
				{/* <SearchBar onChange={searchCallbackHandler} /> */}
			</div>
			<div className="overflow-x-auto">
				<Table data={budaya} columns={column} loading={loading} />
				<TablePagination
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					hasNext={navigation.hasNext}
					hasPrev={navigation.hasPrev}
					totalPage={navigation.totalPages}
				/>
			</div>
		</div>
	);
};

export default BudayaTable;
