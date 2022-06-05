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
		return API.get(`/budaya`, {
			params: { limit: options.limit, page: options.page },
		});
	},
	async getBudayaById(id) {
		return API.get(`/budaya/${id}`);
	},
	async getListBudaya(provinceId) {
		return API.get(`/budaya/list/${provinceId}`);
	},
	async getDetailBudaya(idBudaya) {
		return API.get(`/budaya/${idBudaya}`);
	},
};

export default BudayaAPI;
