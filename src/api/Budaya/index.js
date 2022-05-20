import API from "../API";

const BudayaAPI = {
	async createBudaya(data) {
		return API.post("/budaya/add", data);
	},
	async updateBudaya(data) {
		return API.put("/budaya/:id", data);
	},
	async deleteBudaya(data) {
		return API.delete("/budaya/:id", data);
	},
};

export default BudayaAPI;
