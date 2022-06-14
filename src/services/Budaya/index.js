import { useCallback } from "react";
import BudayaAPI from "../../api/Budaya";
import { useNavigate } from "react-router-dom";
import useAPI, {
	FETCH_FAILED,
	FETCH_REQUEST,
	FETCH_SUCCESS,
} from "../../hooks/useAPI";

const useBudayaServices = () => {
	const navigate = useNavigate();
	const [createState, dispatchCreate] = useAPI();
	const [updateState, dispatchUpdate] = useAPI();
	const [deleteState, dispatchDelete] = useAPI();

	const createBudaya = useCallback((data) => {
		dispatchCreate({ type: FETCH_REQUEST });
		BudayaAPI.createBudaya(data)
			.then((res) => {
				const response = res.data;
				dispatchCreate({ type: FETCH_SUCCESS, payload: response });
				navigate("/admin/budaya");
			})
			.catch((err) => {
				const errMsg = err.message;

				dispatchCreate({ type: FETCH_FAILED, payload: errMsg });
			});
	});

	const updateBudaya = useCallback((id, data) => {
		dispatchUpdate({ type: FETCH_REQUEST });
		BudayaAPI.updateBudaya(id, data)
			.then((res) => {
				const response = res.data;
				dispatchUpdate({ type: FETCH_SUCCESS, payload: response });
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
				navigate("/admin/budaya");
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
	};
};

export default useBudayaServices;
