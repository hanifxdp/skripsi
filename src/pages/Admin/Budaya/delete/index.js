import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputForm, Button } from "../../../../components/constant";
import { deleteBudayaForm } from "../../../../components/constant/schema";
import useBudayaServices from "../../../../services/Budaya";

export default function UpdateBudaya() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(deleteBudayaForm), mode: "onTouched" });

	const { deleteState, deleteBudaya } = useBudayaServices();

	const onSubmitHandlerCallback = useCallback((data) => {
		deleteBudaya(data);
	});

	return (
		<div className="w-3/4 space-y-4">
			<div className="flex justify-between mb-5">
				<h3 className="text-xl font-bold">Delete Budaya</h3>
			</div>
			<form
				className="w-3/4 space-y-4"
				onSubmit={handleSubmit(onSubmitHandlerCallback)}
			>
				<div className="space-y-2">
					{deleteBudayaForm.map((input) => (
						<InputForm
							key={input.name}
							type={input.type}
							label={input.label}
							name={input.name}
							disabled={deleteState.loading}
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
