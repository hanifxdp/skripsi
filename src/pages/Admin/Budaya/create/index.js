import React, { useCallback } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useBudayaServices from "../../../../services/Budaya";
import { budayaSchema } from "../../../../components/constant/schema";

function AddBudaya() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(budayaSchema), mode: "onTouched" });
	const { createState, createBudaya } = useBudayaServices();

	const onSubmitHandlerCallback = useCallback((data) => {
		createBudaya(data);
	});

	return (
		<div className="w-1/2 space-y-4">
			<div className="flex justify-between mb-5">
				<h3 className="text-xl font-bold">Create New User</h3>
			</div>
			<form
				className="w-1/2 space-y-4"
				onSubmit={handleSubmit(onSubmitHandlerCallback)}
			>
				<div>{/* kurang input saja */}</div>
			</form>
		</div>
	);
}

export default AddBudaya;
