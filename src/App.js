import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";
import React, { useMemo } from "react";
import {
	MapView,
	Admin,
	Login,
	Registration,
	BudayaPage,
	ProvinsiPage,
} from "./pages";
import AddBudaya from "./pages/Admin/Budaya/Create";
import UpdateBudayaPage from "./pages/Admin/Budaya/Update";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { AdminContext } from "./context/AdminContext";


function App() {
	const [admin, setAdmin] = useLocalStorage("admin");

	const adminProviderValue = useMemo(
		() => ({
			admin,
			setAdmin,
		}),
		[admin, setAdmin]
	);
	
	return (
		<AdminContext.Provider value={adminProviderValue}>
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
						<Route element={<ProvinsiPage />} exact path="/admin/provinsi" />
					</Route>
				</Routes>
			</Router>
		</AdminContext.Provider>
	);
}

export default App;
