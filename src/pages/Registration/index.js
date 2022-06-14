import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Auth from "../../services/Auth";

const schema = yup.object().shape({
	username: yup.string().required("Username is required"),
	password: yup.string().required("Password is Required"),
});

function Registration() {
	const { registerAdmin } = Auth();

	const navigate = useNavigate();

	const { register, handleSubmit } = useForm({
		resolver: yupResolver(schema),
		mode: "onTouched",
	});

	const onSubmitHandlerCallback = (data) => {
		registerAdmin(data);
		navigate("/login");
	};

	return (
		<>
			<div className="fixed p-3 m-3 bg-white rounded-lg">
				<Link to="/">
					<FontAwesomeIcon icon={faArrowLeft} />
				</Link>
			</div>
			<div className="flex items-center justify-center w-full min-h-screen mx-auto text-white bg-gray-900">
				<section className="flex flex-col w-3/12 y-4">
					<div className="m-5 text-6xl text-center">Register</div>
					<form
						onSubmit={handleSubmit(onSubmitHandlerCallback)}
						autoComplete="off"
					>
						<div className="w-full my-3 text-lg duration-300 bg-transparent border-2 rounded-xl focus-within:border-indigo-500">
							<input
								type="text"
								placeholder="Name"
								className="w-full p-3 bg-transparent border-none outline-none focus:outline-none"
								{...register("nama_admin")}
							/>
						</div>
						<div className="w-full my-3 text-lg duration-300 bg-transparent border-2 rounded-xl focus-within:border-indigo-500">
							<input
								type="email"
								placeholder="E-mail"
								className="w-full p-3 bg-transparent border-none outline-none focus:outline-none"
								{...register("email")}
							/>
						</div>
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
							<button className="w-full p-2 my-3 font-bold duration-300 bg-indigo-600 rounded-sm hover:bg-indigo-400">
								Register
							</button>
						</div>
					</form>
					<p className="my-3 text-lg text-center">
						Have account?
						<Link to="/login">
							<p className="font-medium text-indigo-500 underline-offset-4 hover:underline">
								...Login here.
							</p>
						</Link>
					</p>
				</section>
			</div>
		</>
	);
}

export default Registration;
