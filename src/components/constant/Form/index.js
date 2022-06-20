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
		accept,
		id,
	} = props;

	return (
		<div className="space-y-1">
			{label && <div className="text-sm">{label}</div>}
			{type === "select" ? (
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
			) : type === "textarea" ? (
				<textarea
					className={`text-sm w-full border-2 ${
						error[name] ? "border-red-500" : "border-slate-300"
					} px-2 py-1 rounded-md focus:outline-none`}
					placeholder={placeholder}
					disabled={disabled}
					{...register(name, { required })}
				/>
			) : type === "file" ? (
				<input
					id={id}
					type={type}
					className={` ${
						error[name] ? "border-red-500" : "border-slate-300"
					} block w-full text-sm text-slate-500
					file:mr-4 file:py-2 file:px-4
					file:rounded-full file:border-0
					file:text-sm file:font-semibold
					file:bg-violet-50 file:text-violet-700
					hover:file:bg-violet-100`}
					placeholder={placeholder}
					disabled={disabled}
					accept={accept}
					{...register(name, { required })}
				/>
			) : (
				<input
					type={type}
					className={`text-sm w-full border-2 ${
						error[name] ? "border-red-500" : "border-slate-300"
					} px-2 py-1 rounded-md focus:outline-none`}
					placeholder={placeholder}
					disabled={disabled}
					{...register(name, { required })}
				/>
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
