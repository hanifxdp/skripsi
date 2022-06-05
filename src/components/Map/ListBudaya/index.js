import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import BudayaAPI from "../../../api/Budaya";

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
	});

	const onClose = () => {
		navigate("/");
	};

	return (
		<section>
			<div>
				<p>Provinsi {name}</p>
				<FontAwesomeIcon icon={faClose} />
			</div>
			<div>
				{listBudaya &&
					listBudaya.map((i, idx) => (
						<div key={idx} onClick={() => handleClickBudaya(i.id)}>
							{i.nama_budaya}
						</div>
					))}
			</div>
		</section>
	);
}

ListBudaya.defaultProps = {
	name: "",
	handleClickBudaya: () => {},
};
