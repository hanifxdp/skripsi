import { useEffect, useState } from "react";

const usePagination = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	const [navigation, setNavigation] = useState({
		hasNext: false,
		hasPrev: false,
		totalPages: 0,
		totalRows: 0,
	});

	const [query, setQuery] = useState({
		limit: pageSize,
		page: currentPage,
		search: null,
	});

	useEffect(() => {
		setQuery({
			...query,
			limit: pageSize,
			page: currentPage,
		});
	}, [pageSize, currentPage]);

	return {
		currentPage,
		setCurrentPage,
		pageSize,
		setPageSize,
		navigation,
		setNavigation,
		query,
		setQuery,
	};
};

export default usePagination;
