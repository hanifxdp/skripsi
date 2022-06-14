import { useCallback, useContext } from "react";
import useAPI, {
	FETCH_REQUEST,
	FETCH_SUCCESS,
	FETCH_FAILED,
} from "../../hooks/useAPI";
import AuthAPI from "../../api/authAPI";
import { AdminContext } from "../../context/AdminContext";

export const Auth = () => {
	const { setAdmin } = useContext(AdminContext);
	const [loginState, dispatchLogin] = useAPI();
	const [registerState, dispatchRegister] = useAPI();

	const loginAdmin = useCallback(
		(data) => {
			dispatchLogin({ FETCH_REQUEST });
			AuthAPI.login(data)
				.then((res) => {
					const response = res.data.data;
					dispatchLogin({ type: FETCH_SUCCESS, payload: response });
					setAdmin(response);
				})
				.catch((err) => {
					const errMsg = err.message;

					dispatchLogin({ type: FETCH_FAILED, payload: errMsg });
					// dispatch(alertFailed(errMsg));
				});
		},
		[dispatchLogin]
	);
	const registerAdmin = useCallback(
		(data) => {
			dispatchRegister({ type: FETCH_REQUEST });
			AuthAPI.register(data)
				.then((res) => {
					const response = res.data.data;
					dispatchLogin({ type: FETCH_SUCCESS, payload: response });
					setAdmin(response);
				})
				.catch((err) => {
					const errMsg = err.message;

					dispatchLogin({ type: FETCH_FAILED, payload: errMsg });
					// dispatch(alertFailed(errMsg));
				});
		},
		[dispatchRegister]
	);

	return { loginState, loginAdmin, registerState, registerAdmin };
};

export default Auth;
