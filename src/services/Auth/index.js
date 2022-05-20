import { useCallback } from "react";
// import { useDispatch } from "react-redux";
import useAPI, {
	FETCH_REQUEST,
	FETCH_SUCCESS,
	FETCH_FAILED,
} from "../../api/useAPI";
import AuthAPI from "../../api/authAPI";
// import { alertFailed, alertSuccess } from "../Alert/alertAction";

const Auth = () => {
	const [loginState, dispatchLogin] = useAPI();

	// const dispatch = useDispatch();

	const loginAdmin = useCallback(
		(data) => {
			dispatchLogin({ type: FETCH_REQUEST });
			AuthAPI.login(data)
				.then((res) => {
					const response = res.data;
					dispatchLogin({ type: FETCH_SUCCESS, payload: response });
					// dispatch(alertSuccess(response.message));
				})
				.catch((err) => {
					const errMsg = err.message;

					dispatchLogin({ type: FETCH_FAILED, payload: errMsg });
					// dispatch(alertFailed(errMsg));
				});
		},
		[dispatchLogin]
	);

	return { loginState, loginAdmin };
};

export default Auth;
