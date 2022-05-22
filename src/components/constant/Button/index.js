import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
	const { submit, children, to, onClick, size, variant, disabled } = props;

	const textSize = size === "small" ? "text-sm" : "text-md";
	const background =
		variant === "danger"
			? "bg-red-600 hover:bg-red-500 disabled:bg-red-200"
			: "bg-cyan-800 hover:bg-cyan-700 disabled:bg-slate-400";

	return to ? (
		<Link to={to}>
			<button
				type="button"
				onClick={onClick}
				className={`${textSize} ${background} px-4 p-2 text-white font-bold rounded-md w-full`}
			>
				{children}
			</button>
		</Link>
	) : (
		<button
			type={submit ? "submit" : "button"}
			onClick={onClick}
			disabled={disabled}
			className={`${textSize} ${background} px-4 p-2 text-white font-bold rounded-md w-full`}
		>
			{children}
		</button>
	);
};

export default React.memo(Button);
