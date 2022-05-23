import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputForm, Button } from "../../../../components/constant";
import { updateBudayaForm } from "../../../../components/constant/schema";
import useBudayaServices from "../../../../services/Budaya";

export default function UpdateBudaya() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(updateBudayaForm), mode: "onTouched" });

	const { updateState, updateBudaya } = useBudayaServices();

	const onSubmitHandlerCallback = useCallback((data) => {
		updateBudaya(data);
	});

	return (
		<div className="w-3/4 space-y-4">
			<div className="flex justify-between mb-5">
				<h3 className="text-xl font-bold">Update Budaya</h3>
			</div>
			<form
				className="w-3/4 space-y-4"
				onSubmit={handleSubmit(onSubmitHandlerCallback)}
			>
				<div className="space-y-2">
					{updateBudayaForm.map((input) => (
						<InputForm
							key={input.name}
							type={input.type}
							label={input.label}
							name={input.name}
							disabled={updateState.loading}
							register={register}
							error={errors}
							options={input.options}
							required
						/>
					))}
				</div>
				<div className="flex justify-start my-5">
					<div>
						<Button size="small" submit>
							Submit
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
}
