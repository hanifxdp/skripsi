import { useState, useEffect } from "react";
import BudayaAPI from "../api/Budaya";

const useFetchBudaya = (query) => {
	const defaultPageDataValue = {
		isLoading: false,
		rowData: [],
	};
	const [pageData, setPageData] = useState(defaultPageDataValue);
	const [navigation, setNavigation] = useState({
		hasNext: false,
		hasPrev: false,
		totalPages: 0,
		totalRows: 0,
	});

	const fetchData = (queryData) => {
		BudayaAPI.getBudaya(queryData)
			.then((res) => {
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
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		setPageData({
			isLoading: true,
			rowData: [],
		});
		fetchData(query);
	}, [query.limit, query.page]);

	const budaya = pageData.rowData;
	const loading = pageData.isLoading;

	return { budaya, loading, navigation };
};

export default useFetchBudaya;
