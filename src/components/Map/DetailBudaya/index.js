import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import defaultImage from "../../../assets/img/img-default.svg";
import { faClose, faLink } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import BudayaAPI from "../../../api/Budaya";
import Button from "../../constant/Button/Button";

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
				<div className="overscroll-contain">
					<div className="py-2 ">
						<p className="text-base font-bold pb-2">Deskripsi</p>
						<p className="text-sm text-justify leading-loose indent-8 break-words tracking-normal">
							{detail?.deskripsi || empty}
						</p>
					</div>
					<div className="py-2 pb-2 resize-y ">
						<p className="text-base font-bold pb-3">
							Video Kebudayaan & Informasi Tambahan
						</p>
						<a href={detail?.video}>
							<Button disabled={!detail.video}>
								<FontAwesomeIcon icon={faLink} /> Tautan
							</Button>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
