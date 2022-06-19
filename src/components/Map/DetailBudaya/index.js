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
	// const params = useParams();
	const navigate = useNavigate();
	const [detail, setDetail] = useState([]);

	const fetchDetailBudaya = async () => {
		const res = await BudayaAPI.getDetailBudaya(id);
		setDetail(res.data.data);
	};
	// console.log(id);

	useEffect(() => {
		fetchDetailBudaya();
	}, []);

	return (
		<section className="absolute z-10 bg-white rounded-r-2xl w-[28rem]">
			<div className="absolute top-0 right-0 px-6 py-8 left">
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
					className="rounded-tr-2xl"
				/>
			</div>
			<div className="inline-block p-7 ">
				<div className="py-2">
					<p className="text-xl font-bold" title={detail?.nama_budaya}>
						{detail?.nama_budaya || empty}
					</p>
					<p className="text-sm">No. {detail?.registNum || empty}</p>
					<p className="text-sm">
						{detail.jenisKebudayaan?.nama_jenis || empty} dari{" "}
						{detail.provinsi?.nama_provinsi || empty}
					</p>
				</div>
				<div className="">
					<div>
						<p>Tahun: {detail?.tahun || empty}</p>
						<p></p>
					</div>
					<div>
						<p className="text-base font-bold">Deskripsi</p>
						<p className="text-sm text-justify text-ellipsis ...">
							{detail?.deskripsi || empty}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
