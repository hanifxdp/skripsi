import React, { useEffect, useCallback } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import useBudayaServices from "../../../services/Budaya";
import { updateBudayaMediaForm } from "../../constant/schema";
import { InputForm, Button } from "../../constant";
import { useForm } from "react-hook-form";
import { useSingleFetchBudaya } from "../../../hooks/useSingleFetchBudaya";

export const EditBudayaMedia = () => {
	const { updateState, updateBudaya } = useBudayaServices();
	const { singleData } = useSingleFetchBudaya();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(updateBudayaMediaForm),
		mode: "onTouched",
	});

	useEffect(() => {
		if (singleData) {
			reset({
				image: singleData.data.image,
				video: singleData.data.video,
			});
		}
	}, [singleData]);

	const onSubmitHandlerCallback = useCallback((data) => {
		updateBudaya(singleData.data.id, data);
	});
	return (
		<div>
			<img src={singleData.data?.image} className="rounded-tr-2xl " />
			<form
				className="w-1/2 space-y-4"
				onSubmit={handleSubmit(onSubmitHandlerCallback)}
			>
				<div className="space-y-2">
					{updateBudayaMediaForm.map((input) => (
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
				<div className="flex justify-end">
					<div>
						<Button size="small" submit>
							Submit
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
};
