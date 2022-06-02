import React from "react";
import Button from "../../../components/constant/Button";
import BudayaTable from "./BudayaTable";

const UserPage = () => (
	<div>
		<div className="flex items-center justify-between mb-5">
			<h3 className="text-2xl font-bold align-middle">Budaya List</h3>
			<Button to="/admin/budaya/create">Create New Budaya</Button>
		</div>
		<BudayaTable />
	</div>
);

export default UserPage;
