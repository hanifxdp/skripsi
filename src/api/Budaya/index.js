import API from "../API";

const BudayaAPI = {
	async createBudaya(data) {
		return API.post("/budaya/add", data);
	},
	async updateBudaya(data) {
		return API.patch("/budaya/:id", data);
	},
	async deleteBudaya(data) {
		return API.delete("/budaya/:id", data);
	},
	async getBudaya(options) {
		return API.get(`/budaya?limit=${options.limit}&page=${options.page}`);
	},
};

export default BudayaAPI;
