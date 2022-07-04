import React, { useEffect, useCallback, useMemo } from "react";
import defaultImage from "../../../assets/img/img-default.svg";
import useBudayaServices from "../../../services/Budaya";
import { updateBudayaMediaForm } from "../../constant/schema";
import { InputForm, Button } from "../../constant";
import { useForm } from "react-hook-form";
import { useSingleFetchBudaya } from "../../../hooks/useSingleFetchBudaya";
import checkURL from "../../../helpers/checkURL";

export const EditBudayaMedia = () => {
	const { updateState, updateBudaya, loading } = useBudayaServices();
	const { singleData } = useSingleFetchBudaya();

	const {
		watch,
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	useEffect(() => {
		if (singleData) {
			reset({
				image: singleData.data.image,
				video: singleData.data.video,
			});
		}
	}, [singleData]);
	const watchImage = watch("image");

	const imageURL = useMemo(() => {
		if (typeof watchImage === "string" && checkURL(watchImage))
			return watchImage;
		if (watchImage?.length > 0 && watchImage !== "undefined") {
			const image = [];
			image.push(watchImage[0]);
			return window.URL.createObjectURL(new Blob(image, { type: "image/*" }));
		}

		return " ";
	}, [watchImage]);

	const onSubmitHandlerCallback = useCallback((data) => {
		try {
			const uploadedImage = data.image ? data.image[0] : undefined;
			const addForm = document.getElementById("update-budaya-image");
			const formData = new FormData(addForm);
			formData.set("image", uploadedImage);
			updateBudaya(singleData.data.id, formData);
		} catch (error) {
			console.log(error);
		}
	});

	return (
		<div>
			<div className="text-sm">Preview Image</div>
			<img
				alt="preview"
				src={imageURL || singleData.data?.image || defaultImage}
				className="object-contain h-48 rounded-lg w-96 "
				onError={(e) => {
					e.target.onerror = null;
					e.target.src = defaultImage;
				}}
			/>
			<form
				id="update-budaya-image"
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
							accept={input.accept}
							disabled={updateState.loading}
							register={register}
							error={errors}
							options={input.options}
							placeholder={input.placeholder}
							required
						/>
					))}
				</div>
				<div className="flex justify-end">
					<div>
						<Button size="small" submit disabled={loading}>
							{loading ? "Updating..." : "Submit"}
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
};
