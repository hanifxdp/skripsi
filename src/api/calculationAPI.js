import API from "./API";

const calculationAPI = {
	async getCalc() {
		return API.get(`/calculation${window.location.search}`);
	},
};

export default calculationAPI;
