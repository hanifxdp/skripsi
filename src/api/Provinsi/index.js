import API from "../API";

const ProvinsiAPI = {
	async createProvinsi(data) {
		return API.post("/provinsi/add", data);
	},
	async updateProvinsi(data) {
		return API.put("/provinsi/:id", data);
	},
	async deleteProvinsi(data) {
		return API.delete("/provinsi/:id", data);
	},
};

export default ProvinsiAPI;
