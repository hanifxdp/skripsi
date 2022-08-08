import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import defaultImage from "../../../assets/img/img-default.svg";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import BudayaAPI from "../../../api/Budaya";

export default function DetailBudaya() {
	const empty = "x";
	const [searchParams] = useSearchParams();
	const id = parseInt(searchParams.get("idBudaya"));
	const navigate = useNavigate();
	const [detail, setDetail] = useState([]);

	const fetchDetailBudaya = async () => {
		const res = await BudayaAPI.getDetailBudaya(id);
		setDetail(res.data.data);
	};

	useEffect(() => {
		fetchDetailBudaya();
	}, []);

	// const sliced = detail?.video?.split("/");

	// console.log(sliced[3]);

	return (
		<section className="absolute z-20 bg-white rounded-r-2xl w-[28rem] overflow-hidden">
			<div className="absolute top-0 right-0 px-6 py-8 left hover:cursor-pointer">
				<FontAwesomeIcon icon={faClose} onClick={() => navigate(-1)} />
			</div>
			<div>
				<img
					alt="budaya-img"
					src={detail.image || defaultImage}
					onError={(e) => {
						e.target.onerror = null;
						e.target.src = defaultImage;
					}}
					className="rounded-tr-2xl object-fill w-full"
				/>
			</div>
			<div className="inline-block p-7 divide-y divide-slate-200">
				<div className="py-2">
					<p
						className="text-xl font-bold pb-2 py-1"
						title={detail?.nama_budaya}
					>
						{detail?.nama_budaya || empty}
					</p>
					<p className="text-sm py-1">No. {detail?.registNum || empty}</p>
					<p className="text-sm py-1">
						{detail.jenisKebudayaan?.nama_jenis || empty} dari Provinsi{" "}
						{detail.provinsi?.nama_provinsi || empty}
					</p>
					<p className="text-sm py-1">Tahun: {detail?.tahun || empty}</p>
				</div>
				<div className="py-2 resize-y ">
					<p className="text-base font-bold">Deskripsi</p>
					<p className="text-sm text-justify text-ellipsis ... leading-relaxed">
						{detail?.deskripsi || empty}
					</p>
				</div>
				<div className="py-2 pb-[100rem] resize-y ">
					<p className="text-base font-bold pb-3">Video Kebudayaan</p>
					<a href={detail?.video}>Link</a>
					<div className="overflow-hidden relative inset-0">
						<iframe
							className="inset-0"
							width="390"
							height="215"
							// src={`https://www.youtube.com/embed/${sliced}`}
							frameBorder="0"
							allow="autoplay; "
							allowFullScreen
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
