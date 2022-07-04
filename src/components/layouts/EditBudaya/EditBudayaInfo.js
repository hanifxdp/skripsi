import React, { useEffect, useCallback } from "react";
import useBudayaServices from "../../../services/Budaya";
import { updateBudayaForm } from "../../constant/schema";
import { InputForm, Button } from "../../constant";
import { useForm } from "react-hook-form";
import { useSingleFetchBudaya } from "../../../hooks/useSingleFetchBudaya";

export const EditBudayaInfo = (props) => {
	const { updateState, updateBudaya, loading } = useBudayaServices();
	const { singleData } = useSingleFetchBudaya();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	useEffect(() => {
		if (singleData) {
			reset({
				nama_budaya: singleData.data.nama_budaya,
				deskripsi: singleData.data.deskripsi,
			});
		}
	}, [singleData]);

	const onSubmitHandlerCallback = useCallback((data) => {
		try {
			const addForm = document.getElementById("update-budaya");
			const formData = new FormData(addForm);
			updateBudaya(singleData.data.id, formData);
		} catch (error) {
			console.log(error);
		}
	});
	return (
		<form
			id="update-budaya"
			className="w-1/2 space-y-4"
			onSubmit={handleSubmit(onSubmitHandlerCallback)}
		>
			<div className="space-y-2">
				<div className="text-sm">ID</div>
				<input
					className="w-full px-2 py-1 text-sm border-2 rounded-md focus:outline-none"
					type="text"
					value={singleData.data && singleData.data.id}
					disabled
				/>
				<div className="text-sm">No. Budaya</div>
				<input
					className="w-full px-2 py-1 text-sm border-2 rounded-md focus:outline-none"
					type="text"
					value={singleData.data && singleData.data.registNum}
					disabled
				/>
				<div className="text-sm">Tahun</div>
				<input
					className="w-full px-2 py-1 text-sm border-2 rounded-md focus:outline-none"
					type="text"
					value={singleData.data && singleData.data.tahun}
					disabled
				/>
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
						placeholder={input.placeholder}
						required
					/>
				))}
				<div className="text-sm">Provinsi</div>
				<input
					className="w-full px-2 py-1 text-sm border-2 rounded-md focus:outline-none"
					type="text"
					value={singleData.data && singleData.data.provinsi.nama_provinsi}
					disabled
				/>
				<div className="text-sm">Domain</div>
				<input
					className="w-full px-2 py-1 text-sm border-2 rounded-md focus:outline-none"
					type="text"
					value={singleData.data && singleData.data.jenisKebudayaan.nama_jenis}
					disabled
				/>
			</div>
			<div className="flex justify-end">
				<div>
					<Button size="small" submit disabled={loading}>
						{loading ? "Updating..." : "Submit"}
					</Button>
				</div>
			</div>
		</form>
	);
};
