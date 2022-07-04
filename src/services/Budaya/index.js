import { useCallback, useState } from "react";
import BudayaAPI from "../../api/Budaya";
import { useNavigate } from "react-router-dom";
import useAPI, {
	FETCH_FAILED,
	FETCH_REQUEST,
	FETCH_SUCCESS,
} from "../../hooks/useAPI";

const useBudayaServices = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [createState, dispatchCreate] = useAPI();
	const [updateState, dispatchUpdate] = useAPI();
	const [deleteState, dispatchDelete] = useAPI();

	const createBudaya = useCallback((data) => {
		setLoading(true);
		dispatchCreate({ type: FETCH_REQUEST });
		BudayaAPI.createBudaya(data)
			.then((res) => {
				const response = res.data;
				setLoading(false);
				dispatchCreate({ type: FETCH_SUCCESS, payload: response });
				navigate("/admin/budaya", { replace: true });
			})
			.catch((err) => {
				const errMsg = err.message;
				dispatchCreate({ type: FETCH_FAILED, payload: errMsg });
			});
	});

	const updateBudaya = useCallback((id, data) => {
		setLoading(true);
		dispatchUpdate({ type: FETCH_REQUEST });
		BudayaAPI.updateBudaya(id, data)
			.then((res) => {
				const response = res.data;
				setLoading(false);
				dispatchUpdate({ type: FETCH_SUCCESS, payload: response });
				navigate("/admin/budaya", { replace: true });
			})
			.catch((err) => {
				const errMsg = err.message;
				dispatchUpdate({ type: FETCH_FAILED, payload: errMsg });
			});
	});

	const deleteBudaya = useCallback((id) => {
		dispatchDelete({ type: FETCH_REQUEST });
		BudayaAPI.deleteBudaya(id)
			.then((res) => {
				const response = res.data;
				dispatchDelete({ type: FETCH_SUCCESS, payload: response });
				navigate("/admin/budaya", { replace: true });
			})
			.catch((err) => {
				const errMsg = err.message;
				dispatchDelete({ type: FETCH_FAILED, payload: errMsg });
			});
	});
	return {
		createState,
		createBudaya,
		updateState,
		updateBudaya,
		deleteState,
		deleteBudaya,
		loading,
	};
};

export default useBudayaServices;
