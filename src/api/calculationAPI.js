import API from "./API";

const calculationAPI = {
	async getCalc(n) {
		return API.get(`/calculation${window.location.search}`, n);
	},
};

export default calculationAPI;
