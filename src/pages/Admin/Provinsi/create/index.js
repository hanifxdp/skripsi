import React, { useCallback } from "react";
import InputForm from "../../../../components/constant/Form";
import Button from "../../../../components/constant/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useBudayaServices from "../../../../services/Budaya";
import { addProvinsiForm } from "../../../../components/constant/schema";

function AddProvinsi() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(addProvinsiForm), mode: "onTouched" });
	const { createState, createBudaya } = useBudayaServices();

	const onSubmitHandlerCallback = useCallback((data) => {
		createBudaya(data);
	});

	return (
		<div className="w-1/2 space-y-4 ">
			<div className="flex justify-between mb-5">
				<h3 className="text-xl font-bold">Add New Province</h3>
			</div>
			<form
				className="w-1/2 space-y-4"
				onSubmit={handleSubmit(onSubmitHandlerCallback)}
			>
				<div className="space-y-2">
					{addProvinsiForm.map((input) => (
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
						<Button size="small" submit>
							Submit
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default AddProvinsi;
