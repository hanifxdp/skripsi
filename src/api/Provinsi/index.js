import API from "../API";

const ProvinsiAPI = {
	async getProvinsi(data) {
		return API.get("/provinsi", data);
	},
};

export default ProvinsiAPI;
