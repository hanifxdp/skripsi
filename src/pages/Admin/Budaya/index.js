import React from "react";
import Button from "../../../components/constant/Button/Button";
import BudayaTable from "./BudayaTable";

const BudayaPage = () => (
	<div>
		<div className="flex items-center justify-between mb-5">
			<h3 className="text-2xl font-bold align-middle">Budaya List</h3>
			<Button to="/admin/budaya/create">Create New Budaya</Button>
		</div>
		<BudayaTable />
	</div>
);

export default BudayaPage;
