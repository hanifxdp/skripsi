import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import {
	Admin,
	Login,
	MapView,
	Registration,
	AddBudaya,
	DeleteBudaya,
	UpdateBudaya,
	AddProvinsi,
	UpdateProvinsi,
	DeleteProvinsi,
	ShowBudaya,
} from "./pages";
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
						<Route element={<AddBudaya />} exact path="/admin/budaya/add" />
						<Route
							element={<UpdateBudaya />}
							exact
							path="/admin/budaya/update"
						/>
						<Route
							element={<DeleteBudaya />}
							exact
							path="/admin/budaya/delete"
						/>
						<Route
							element={<ShowBudaya />}
							exact
							path="/admin/budaya/show"
						/>
						<Route element={<AddProvinsi />} exact path="/admin/provinsi/add" />
						<Route
							element={<UpdateProvinsi />}
							exact
							path="/admin/provinsi/update"
						/>
						<Route
							element={<DeleteProvinsi />}
							exact
							path="/admin/provinsi/delete"
						/>
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
