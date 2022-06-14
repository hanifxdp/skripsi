import React, { useCallback } from "react";
import InputForm from "../../../../components/constant/Form";
import Button from "../../../../components/constant/Button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useBudayaServices from "../../../../services/Budaya";
import {
	addBudayaForm,
	addBudayaSchema,
} from "../../../../components/constant/schema";
import BackButton from "../../../../components/constant/Button/Back";

function AddBudaya() {
	const {
		register,
		handleSubmit,
		formState: { errors, dirtyFields },
	} = useForm({ resolver: yupResolver(addBudayaSchema), mode: "onTouched" });
	const { createState, createBudaya } = useBudayaServices();

	const onSubmitHandlerCallback = useCallback((data) => {
		const updateData = {};

		if (Object.keys(dirtyFields).length < 1) {
			console.log("gagal");
		}

		Object.keys(dirtyFields).map((field) => (updateData[field] = data[field]));
		createBudaya(updateData);
		console.log(updateData);
	});

	return (
		<div className="w-3/4 space-y-4 ">
			<BackButton />
			<div className="flex justify-between mb-5">
				<h3 className="text-xl font-bold">Add New Budaya</h3>
			</div>
			<form
				className="w-3/4 space-y-4"
				onSubmit={handleSubmit(onSubmitHandlerCallback)}
			>
				<div className="space-y-2">
					{addBudayaForm.map((input) => (
						<InputForm
							key={input.name}
							type={input.type}
							label={input.label}
							name={input.name}
							disabled={createState.loading}
							register={register}
							error={errors}
							options={input.options}
							required
						/>
					))}
				</div>
				<div className="flex justify-start my-5">
					<div>
						<Button
							size="small"
							submit
							// onClick={() => {
							// 	console.log("string");
							// }}
						>
							Submit
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default AddBudaya;
