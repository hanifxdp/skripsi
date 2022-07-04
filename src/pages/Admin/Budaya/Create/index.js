import React, { useCallback, useMemo } from "react";
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
import checkURL from "../../../../helpers/checkURL";

function AddBudaya() {
	const {
		watch,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(addBudayaSchema), mode: "onTouched" });
	const { createState, createBudaya, loading } = useBudayaServices();

	const watchImage = watch("image");

	const imageURL = useMemo(() => {
		if (typeof watchImage === "string" && checkURL(watchImage))
			return watchImage;
		if (watchImage?.length > 0 && watchImage !== "undefined") {
			return URL.createObjectURL(watchImage[0]);
		}

		return "";
	}, [watchImage]);

	const onSubmitHandlerCallback = useCallback((data) => {
		try {
			const uploadedImage = data.image ? data.image[0] : undefined;
			const addForm = document.getElementById("add_budaya");
			const formData = new FormData(addForm);
			formData.set("image", uploadedImage);
			createBudaya(formData);
		} catch (error) {
			console.log(error);
		}
	});

	return (
		<div className="w-3/4 space-y-4 ">
			<BackButton />
			<div className="flex justify-between mb-5">
				<h3 className="text-xl font-bold">Add New Budaya</h3>
			</div>
			<form
				id="add_budaya"
				className="w-3/4 space-y-4"
				onSubmit={handleSubmit(onSubmitHandlerCallback)}
			>
				<div className="text-sm">Image Preview</div>
				<img
					src={imageURL}
					alt="preview"
					className="object-contain h-48 rounded-lg w-96 "
				/>
				<div className="space-y-2">
					{addBudayaForm.map((input) => (
						<InputForm
							id={input.id}
							key={input.name}
							type={input.type}
							label={input.label}
							name={input.name}
							disabled={createState.loading}
							register={register}
							error={errors}
							accept={input.accept}
							options={input.options}
							placeholder={input.placeholder}
							required
						/>
					))}
				</div>
				<div className="flex justify-start my-5">
					<div>
						<Button size="small" submit disabled={loading}>
							{loading ? "Creating..." : "Submit"}
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default AddBudaya;
