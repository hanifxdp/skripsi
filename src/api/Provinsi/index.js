import API from "../API";

const ProvinsiAPI = {
	async getProvinsi(data) {
		return API.get("/provinsi", data);
	},
	async countBudaya() {
		return API.get("/provinsi/hitung");
	},
};

export default ProvinsiAPI;
