import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import BudayaAPI from "../../../api/Budaya";
import provinsiImage from "../../../assets/img/indonesia.png";

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
	}, [listBudaya]);

	const onClose = () => {
		navigate("/");
	};

	return (
		<section className="absolute z-20 bg-white rounded-r-2xl w-[28rem] divide-y ">
			<div className="absolute top-0 right-0 px-6 py-8 left hover:cursor-pointer">
				<FontAwesomeIcon icon={faClose} onClick={onClose} />
			</div>
			<div
				className="bg-center bg-auto "
				// style="background-image: url('../../../assets/img/img-default.svg')"
			>
				<img
					alt="budaya-img"
					src={provinsiImage}
					className="w-full rounded-tr-2xl"
				/>
			</div>
			<div className="inline-block p-7 resize-y">
				<p className="text-xl font-bold">{name}</p>
				<p className="text-sm">Kerajinan Tradisional dari Provinsi {name}</p>
			</div>
			<p className="px-7 font-bold overflow-auto py-1">
				Daftar Kerajinan Tradisional
			</p>
			<p>
				{listBudaya &&
					listBudaya.map((i, idx) => (
						<p
							key={idx}
							onClick={() => handleClickBudaya(i.id)}
							className="px-7 hover:cursor-pointer py-4 hover:bg-sky-500 hover:text-white last:rounded-br-2xl"
						>
							{i.nama_budaya}
							<span>
								<FontAwesomeIcon
									className="right-0 absolute px-6"
									icon={faCircleInfo}
								/>
							</span>
						</p>
					))}
			</p>
		</section>
	);
}
