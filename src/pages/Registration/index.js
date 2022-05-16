import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

export default function Registration() {
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
					<div className="w-full my-3 text-lg duration-300 bg-transparent border-2 rounded-xl focus-within:border-indigo-500">
						<input
							type="text"
							placeholder="Name"
							className="w-full p-3 bg-transparent border-none outline-none focus:outline-none"
						/>
					</div>
					<div className="w-full my-3 text-lg duration-300 bg-transparent border-2 rounded-xl focus-within:border-indigo-500">
						<input
							type="text"
							placeholder="Username"
							className="w-full p-3 bg-transparent border-none outline-none focus:outline-none"
						/>
					</div>
					<div className="w-full my-3 text-lg duration-300 bg-transparent border-2 rounded-xl focus-within:border-indigo-500">
						<input
							type="password"
							placeholder="Password"
							className="w-full p-3 bg-transparent border-none outline-none focus:outline-none"
						/>
					</div>
					<button class="rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400 my-3">
						Register
					</button>
					<p class="text-center text-lg my-3">
						Have account?
						<Link to="/login">
							<p class=" font-medium text-indigo-500 underline-offset-4 hover:underline">
								...Login here.
							</p>
						</Link>
					</p>
				</section>
			</div>
		</>
	);
}
