import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import BudayaAPI from "../../../api/Budaya";
import defaultImage from "../../../assets/img/img-default.svg";

export default function ListBudaya(props) {
	const { name, handleClickBudaya } = props;
	const [searchParams] = useSearchParams();
	const id = parseInt(searchParams.get("id"));
	const navigate = useNavigate();
	const [listBudaya, setListBudaya] = useState();

	const fetchListBudaya = async () => {
		const res = await BudayaAPI.getListBudaya(id);
		setListBudaya(res.data.data);
	};

	useEffect(() => {
		fetchListBudaya();
	}, []);

	const onClose = () => {
		navigate("/");
	};

	return (
		<section className="absolute z-10 bg-white rounded-r-2xl w-[28rem]">
			<div className="absolute top-0 right-0 px-6 py-8 left hover:cursor-pointer">
				<FontAwesomeIcon icon={faClose} onClick={onClose} />
			</div>
			<div
				className="bg-center bg-auto "
				// style="background-image: url('../../../assets/img/img-default.svg')"
			>
				<img
					alt="budaya-img"
					src={defaultImage}
					className="w-full rounded-tr-2xl"
				/>
			</div>
			<div className="inline-block p-7">
				<p className="text-xl font-bold">{name}</p>
				<p className="text-sm">Kerajinan Tradisional dari Provinsi {name}</p>
			</div>
			<p className="px-7">Daftar Kerajinan Tradisional</p>
			<ul className="px-10 my-1 list-inside">
				{listBudaya &&
					listBudaya.map((i, idx) => (
						<li
							key={idx}
							onClick={() => handleClickBudaya(i.id)}
							className="leading-normal list-decimal hover:cursor-pointer"
						>
							{i.nama_budaya}
						</li>
					))}
			</ul>
		</section>
	);
}

// ListBudaya.defaultProps = {
// 	name: "",
// 	handleClickBudaya: () => {},
// };
