import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="text-center">
			<h1 className="my-24 font-serif font-black text-8xl">Oops...</h1>
			<h2 className="font-mono text-2xl text-">
				That page cannot be found. Go back to{" "}
				<p className="text-blue-500 underline">
					<Link to="/">Home</Link>
				</p>
			</h2>
		</div>
	);
};

export default NotFound;
