import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Auth from "../../services/Auth";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import login from "../../services/Auth";

const schema = yup.object().shape({
	username: yup.string().required("Username is required"),
	password: yup.string().required("Password is Required"),
});

function Login() {
	// const dispatch = useDispatch();

	const { loginAdmin } = Auth();

	const onSubmitHandlerCallback = (data) => {
		loginAdmin(data);
		console.log(data);
	};

	const { register, handleSubmit } = useForm({
		resolver: yupResolver(schema),
		mode: "onTouched",
	});

	return (
		<>
			<div className="fixed p-3 m-3 rounded-lg">
				<Link to="/">
					<FontAwesomeIcon icon={faArrowLeft} className="" />
				</Link>
			</div>
			<div className="flex items-center justify-center w-full min-h-screen mx-auto text-white bg-gray-900">
				<section className="flex flex-col w-3/12 y-4">
					<div className="m-5 text-6xl text-center">Login</div>
					<form onSubmit={handleSubmit(onSubmitHandlerCallback)}>
						<div className="w-full my-3 text-lg duration-300 bg-transparent border-2 rounded-xl focus-within:border-indigo-500">
							<input
								type="text"
								placeholder="Username"
								className="w-full p-3 bg-transparent border-none outline-none focus:outline-none"
								{...register("username")}
							/>
						</div>
						<div className="w-full my-3 text-lg duration-300 bg-transparent border-2 rounded-xl focus-within:border-indigo-500">
							<input
								type="password"
								placeholder="Password"
								className="w-full p-3 bg-transparent border-none outline-none focus:outline-none"
								{...register("password")}
							/>
						</div>
						<div className="items-center justify-center py-2 ">
							<button
								className="w-full p-2 my-3 font-bold duration-300 bg-indigo-600 rounded-sm hover:bg-indigo-400"
								type="submit"
							>
								LOG IN
							</button>
						</div>
					</form>
					<div className="my-3 text-lg text-center">
						<p className="py-2 font-semibold text-center text-gray-500 duration-300 transform hover:text-gray-300">
							FORGOT PASSWORD?
						</p>
					</div>
					<div className="my-3 text-lg text-center">
						No account?
						<p className="font-medium text-indigo-500 underline-offset-4 hover:underline">
							...Create One
						</p>
					</div>
				</section>
			</div>
		</>
	);
}

export default Login;
