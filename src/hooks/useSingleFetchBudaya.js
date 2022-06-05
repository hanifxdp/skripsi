import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BudayaAPI from "../api/Budaya";

export const useSingleFetchBudaya = () => {
	const { id } = useParams();
	const [isLoading, setIsLoading] = useState(false);
	const [singleData, setSingleData] = useState("");

	const fetchData = async (id) => {
		const res = await BudayaAPI.getBudayaById(id);
		setSingleData(res);
		setIsLoading(false);
	};
	useEffect(() => {
		setIsLoading(true);
		fetchData(id);
	}, []);

	return { singleData };
};
