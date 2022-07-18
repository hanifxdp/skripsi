import React, { useState, useEffect } from "react";
import { SearchBar, MyMap, Info } from "../../components";
import Peta from "../../data/indonesia-prov.json";
import ProvinsiAPI from "../../api/Provinsi";
import BudayaAPI from "../../api/Budaya";
import { routes } from "../../config/routes";
import { useNavigate, useSearchParams } from "react-router-dom";
import ListBudaya from "../../components/Map/ListBudaya";
import DetailBudaya from "../../components/Map/DetailBudaya";
import calculationAPI from "../../api/calculationAPI";
import Legend from "../../components/Map/Legend";

function MapView() {
	//list budaya
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const id = parseInt(searchParams.get("id"));
	const idBudaya = parseInt(searchParams.get("idBudaya"));
	const [locationName, setlocationName] = useState("");
	const [openResult, setOpenResult] = useState(false);
	const [filteredResult, setFilteredResult] = useState([]);
	const [dataCalc, setDataCalc] = useState(null);
	const [dataProvinsi, setDataProvinsi] = useState([]);
	const [dataBudaya, setDataBudaya] = useState([]);
	const [keyword, setKeyword] = useState("");

	const fetchData = async () => {
		const res = await ProvinsiAPI.getProvinsi();
		setDataProvinsi(res.data);
	};

	const fetchDataCalc = async () => {
		const res = await calculationAPI.getCalc();
		setDataCalc(res.data.data);
	};

	const fetchDataBudaya = async () => {
		const resBudaya = await BudayaAPI.getAll();
		setDataBudaya(resBudaya.data.data);
	};

	useEffect(() => {
		fetchData();
		fetchDataBudaya();
		fetchDataCalc();
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
		<div
			onClick={() => setOpenResult(false)}
			className="overscroll-none overflow-hidden"
		>
			<div>
				<SearchBar
					onClickResult={handleClickResult}
					openResult={openResult}
					handleInput={handleInput}
					handleSubmit={handleSubmit}
					resultData={filteredResult}
				/>
				{renderContent()}
			</div>
			<div>
				<Info />
			</div>
			{dataCalc !== null && <Legend high={dataCalc.high} low={dataCalc.low} />}

			{/* {openBudaya && (
				<Budaya name={locationName} onClose={() => setOpenBudaya(false)} />
			)} */}
			{dataProvinsi.length > 0 && dataCalc !== null && (
				<MyMap
					handleClick={handleClickLocation}
					geoJson={Peta}
					data={dataProvinsi}
					dataCalc={dataCalc}
				/>
			)}
		</div>
	);
}

export default MapView;
