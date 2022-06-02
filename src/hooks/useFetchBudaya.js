import { useState, useEffect } from "react";
import BudayaAPI from "../api/Budaya";
import usePagination from "./usePagination";

const useFetchBudaya = () => {
	const defaultPageDataValue = {
		isLoading: false,
		rowData: [],
	};
	const [pageData, setPageData] = useState(defaultPageDataValue);

	const {
		currentPage,
		setCurrentPage,
		pageSize,
		setPageSize,
		navigation,
		setNavigation,
	} = usePagination();

	const fetchData = async () => {
		const res = await BudayaAPI.getBudaya({
			page: currentPage,
			limit: pageSize,
		});
		console.log(res);
		setPageData({
			isLoading: false,
			rowData: res.data.edge,
			size: res.data.cursor.size,
		});
		setNavigation({
			hasNext: res.data.cursor.hasNext,
			hasPrev: res.data.cursor.hasPrev,
			totalPages: res.data.cursor.totalPages,
			totalRows: res.data.cursor.totalRows,
		});
	};

	useEffect(() => {
		setPageData({
			isLoading: true,
			rowData: [],
		});
		fetchData();
	}, [currentPage, pageSize]);

	const budaya = pageData.rowData;
	const loading = pageData.isLoading;

	return { budaya, loading, navigation };
};

export default useFetchBudaya;