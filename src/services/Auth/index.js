import { useCallback, useContext } from "react";
import useAPI, {
	FETCH_REQUEST,
	FETCH_SUCCESS,
	FETCH_FAILED,
} from "../../hooks/useAPI";
import AuthAPI from "../../api/authAPI";
import { AdminContext, ModalContext } from "../../context";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
	const navigate = useNavigate();
	const { setAdmin } = useContext(AdminContext);
	const { setModal } = useContext(ModalContext);
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
					setInterval(() => {
						navigate("/admin");
					}, 2000);
				})
				.catch((err) => {
					const errMsg = err.message;
					dispatchLogin({ type: FETCH_FAILED, payload: errMsg });
					setModal(true);
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
