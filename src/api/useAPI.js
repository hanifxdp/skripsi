import { useReducer } from "react";

const initialState = {
	loading: false,
	data: {},
	error: "",
};

export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILED = "FETCH_FAILED";

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_REQUEST:
			return {
				...state,
				loading: true,
			};

		case FETCH_SUCCESS:
			return {
				data: action.payload,
				loading: false,
				error: "",
			};

		case FETCH_FAILED:
			return {
				loading: false,
				data: {},
				error: action.payload,
			};

		default:
			return state;
	}
};

const useAPI = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return [state, dispatch];
};

export default useAPI;
