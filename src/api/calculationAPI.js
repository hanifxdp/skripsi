import API from "./API";

const calculationAPI = {
	getCalc() {
		return API.get("/calculation");
	},
};

export default calculationAPI;
