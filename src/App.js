import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import {
	Admin,
	Login,
	MapView,
	Registration,
	BudayaPage,
	ListProvinsi,
} from "./pages";
import AddBudaya from "./pages/Admin/Budaya/Create";
import UpdateBudayaPage from "./pages/Admin/Budaya/Update";

// import { Provider } from "react-redux";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route element={<MapView />} exact path="/" />
					<Route element={<Login />} exact path="/login" />
					<Route element={<Registration />} exact path="/registration" />
					<Route path="/admin" element={<Admin />}>
						<Route element={<BudayaPage />} exact path="/admin/budaya" />
						<Route element={<AddBudaya />} exact path="/admin/budaya/create" />
						<Route
							element={<UpdateBudayaPage />}
							exact
							path="/admin/budaya/:id"
						/>
						<Route element={<ListProvinsi />} exact path="/admin/provinsi" />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
