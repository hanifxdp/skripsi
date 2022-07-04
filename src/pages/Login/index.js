import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import Auth from "../../services/Auth";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ModalContext } from "../../context";
import { Button, Modals } from "../../components";
// import login from "../../services/Auth";

const schema = yup.object().shape({
	username: yup.string().required("Username is required"),
	password: yup.string().required("Password is Required"),
});

function Login() {
	const { modal, setModal } = useContext(ModalContext);
	const { loginAdmin, loading } = Auth();

	const onSubmitHandlerCallback = (data) => {
		loginAdmin(data);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		mode: "onTouched",
	});

	const clickOke = () => {
		setModal(false);
	};

	return (
		<>
			<div className="fixed p-3 m-3 bg-white rounded-lg">
				<Link to="/">
					<FontAwesomeIcon icon={faArrowLeft} className="" />
				</Link>
			</div>
			<div className="flex items-center justify-center w-full min-h-screen mx-auto text-white bg-gray-900">
				<section className="flex flex-col w-3/12 y-4">
					<div className="m-5 text-6xl text-center">Login</div>
					<form
						onSubmit={handleSubmit(onSubmitHandlerCallback)}
						autocomplete="off"
					>
						<div className="w-full my-3 text-lg duration-300 bg-transparent border-2 rounded-xl focus-within:border-indigo-500 ">
							<input
								type="text"
								placeholder="Username"
								className={`w-full p-3 bg-transparent border-none outline-none focus:outline-none ${
									errors.username ? "border-red-500" : "border-slate-300"
								}`}
								{...register("username")}
							/>
						</div>
						<div className="text-xs text-red-600 break-words">
							{errors.username && errors.username.message}
						</div>
						<div className="w-full my-3 text-lg duration-300 bg-transparent border-2 rounded-xl focus-within:border-indigo-500">
							<input
								type="password"
								placeholder="Password"
								className={`w-full p-3 bg-transparent border-none outline-none focus:outline-none ${
									errors.password ? "border-red-500" : "border-slate-300"
								}`}
								{...register("password")}
							/>
						</div>
						<div className="text-xs text-red-600 break-words">
							{errors.password && errors.password.message}
						</div>
						<div className="items-center justify-center py-2 ">
							<Button size="big" submit disabled={loading}>
								{loading ? "Logging in..." : "Log In"}
							</Button>
						</div>
					</form>
					<Modals
						title="Wrong Combination"
						description="Please insert the correct combination."
						isOpen={modal}
						onClickConfirm={clickOke}
						closeModal={clickOke}
					/>
				</section>
			</div>
		</>
	);
}

export default Login;
