import { useCallback, useContext } from "react";
import useAPI, {
	FETCH_REQUEST,
	FETCH_SUCCESS,
	FETCH_FAILED,
} from "../../hooks/useAPI";
import AuthAPI from "../../api/authAPI";
import { AdminContext } from "../../context/AdminContext";

const Auth = () => {
	const { setAdmin } = useContext(AdminContext);
	const [loginState, dispatchLogin] = useAPI();

	// const dispatch = useDispatch();

	const loginAdmin = useCallback(
		(data) => {
			dispatchLogin({ type: FETCH_REQUEST });
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

	return { loginState, loginAdmin };
};

export default Auth;
