import { useCallback } from "react";
import ProvinsiAPI from "../../api/Provinsi";
import useAPI, {
	FETCH_FAILED,
	FETCH_REQUEST,
	FETCH_SUCCESS,
} from "../../api/useAPI";

const useProvinsiServices = () => {
	const [createState, dispatchCreate] = useAPI();
	const [updateState, dispatchUpdate] = useAPI();
	const [deleteState, dispatchDelete] = useAPI();

	const createProvinsi = useCallback((data) => {
		dispatchCreate({ type: FETCH_REQUEST });
		ProvinsiAPI.createProvinsi(data)
			.then((res) => {
				const response = res.data;
				dispatchCreate({ type: FETCH_SUCCESS, payload: response });
			})
			.catch((err) => {
				const errMsg = err.message;

				dispatchCreate({ type: FETCH_FAILED, payload: errMsg });
			});
	});

	const updateProvinsi = useCallback((id, data) => {
		dispatchUpdate({ type: FETCH_REQUEST });
		ProvinsiAPI.updateProvinsi(id, data)
			.then((res) => {
				const response = res.data;
				dispatchUpdate({ type: FETCH_SUCCESS, payload: response });
			})
			.catch((err) => {
				const errMsg = err.message;
				dispatchUpdate({ type: FETCH_FAILED, payload: errMsg });
			});
	});

	const deleteProvinsi = useCallback((id) => {
		dispatchDelete({ type: FETCH_REQUEST });
		ProvinsiAPI.deleteProvinsi(id)
			.then((res) => {
				const response = res.data;
				dispatchDelete({ type: FETCH_SUCCESS, payload: response });
			})
			.catch((err) => {
				const errMsg = err.message;
				dispatchDelete({ type: FETCH_FAILED, payload: errMsg });
			});
	});
	return {
		createState,
		createProvinsi,
		updateState,
		updateProvinsi,
		deleteState,
		deleteProvinsi,
	};
};

export default useProvinsiServices;
