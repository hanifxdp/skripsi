import React, { useState, useEffect } from "react";
import { Budaya, SearchBar, MyMap, Info } from "../../components";
import Peta from "../../data/indonesia-prov.json";
import ProvinsiAPI from "../../api/Provinsi";
import BudayaAPI from "../../api/Budaya";
import { routes } from "../../config/routes";
import { useNavigate, useSearchParams } from "react-router-dom";
import ListBudaya from "../../components/Map/ListBudaya";
import DetailBudaya from "../../components/Map/DetailBudaya";

function MapView() {
	//list budaya
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const id = parseInt(searchParams.get("id"));
	const idBudaya = parseInt(searchParams.get("idBudaya"));
	const [locationName, setlocationName] = useState("");
	const [openBudaya, setOpenBudaya] = useState(false);
	const [openResult, setOpenResult] = useState(false);
	const [filteredResult, setFilteredResult] = useState([]);
	const [dataProvinsi, setDataProvinsi] = useState([]);
	const [dataBudaya, setDataBudaya] = useState([]);
	const [keyword, setKeyword] = useState("");

	const fetchData = async () => {
		const res = await ProvinsiAPI.getProvinsi();
		const resBudaya = await BudayaAPI.setDataProvinsi();
		setDataProvinsi(res.data.data);
		setDataBudaya(res.data.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleClickLocation = (id, name) => {
		navigate(routes.LIST_BUDAYA(id));
		setlocationName(name);
	};
	const handleClickResult = (id) => {
		navigate(routes.DETAIL_BUDAYA(id));
	};

	const handleInput = (e) => {
		setKeyword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.stopPropagation();
		e.preventDefault();
		if (keyword !== "") {
			setFilteredResult(() => {
				let result = [];
				result = dataBudaya.filter((budaya) => {
					return budaya.nama_budaya
						?.toLowerCase()
						.includes(keyword.toLowerCase());
				});
				return result;
			});
			setOpenResult(true);
		}
	};
	const renderContent = () => {
		if (id) {
			return (
				<ListBudaya handleClickBudaya={handleClickResult} name={locationName} />
			);
		}
		if (idBudaya) {
			return <DetailBudaya />;
		}
	};

	return (
		<div>
			<div>
				<SearchBar />
			</div>
			<div>
				<Info />
			</div>
			{openBudaya && (
				<Budaya name={locationName} onClose={() => setOpenBudaya(false)} />
			)}
			<MyMap
				handleClickLocation={handleClickLocation}
				geoJson={Peta}
				data={dataProvinsi.data}
			/>
		</div>
	);
}

export default MapView;
