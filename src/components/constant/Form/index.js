import React from "react";

const InputForm = (props) => {
	const {
		label,
		placeholder,
		name,
		type,
		disabled,
		register,
		required,
		error,
		options,
	} = props;

	return (
		<div className="space-y-1">
			{label && <div className="text-sm">{label}</div>}
			{type !== "select" ? (
				<input
					type={type}
					className={`text-sm w-full border-2 ${
						error[name] ? "border-red-500" : "border-slate-300"
					} px-2 py-1 rounded-md focus:outline-none`}
					placeholder={placeholder}
					disabled={disabled}
					{...register(name, { required })}
				/>
			) : (
				<select
					className={`text-sm w-full border-2 ${
						error[name] ? "border-red-500" : "border-slate-300"
					} px-2 py-1 rounded-md focus:outline-none`}
					disabled={disabled}
					{...register(name, { required })}
				>
					{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			)}
			{error[name] && (
				<div className="text-xs text-red-600 break-words">
					{error[name].message}
				</div>
			)}
		</div>
	);
};

InputForm.defaultProps = {
	type: "text",
};

export default InputForm;
