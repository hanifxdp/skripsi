import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import defaultImage from "../../../assets/img/img-default.svg";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import BudayaAPI from "../../../api/Budaya";

export default function DetailBudaya() {
	const empty = "-";
	const [searchParams] = useSearchParams();
	const id = parseInt(searchParams.get("id"));
	const navigate = useNavigate();
	const [detail, setDetail] = useState([]);

	const fetchDetailBudaya = async () => {
		const res = await BudayaAPI.getDetailBudaya(id);
		setDetail(res.data.data);
	};

	useEffect(() => {
		fetchDetailBudaya();
	});

	return (
		<section className="">
			<div className="">
				<img
					alt="budaya-img"
					src={detail.image || defaultImage}
					onError={(e) => {
						e.target.onerror = null;
						e.target.src = defaultImage;
					}}
				/>
				<FontAwesomeIcon icon={faClose} />
			</div>
			<div className="">
				<div>
					<p title={detail?.nama_budaya}>{detail?.nama_budaya || empty}</p>
					<p>No. {detail?.registNum || empty}</p>
				</div>
				<div>{detail.JenisBudaya?.nama_jenis || empty}</div>
			</div>
			<div>
				<div>
					<p>Tahun</p>
					<p>: {detail?.tahun || empty}</p>
				</div>
				<div>
					<p>Provinsi</p>
					<p>: {detail.Provinsi?.nama_provinsi || empty}</p>
				</div>
				<p>{detail?.desc || empty}</p>
			</div>
		</section>
	);
}
