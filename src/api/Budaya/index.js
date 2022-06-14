import API from "../API";

const BudayaAPI = {
	async createBudaya(data) {
		return API.post("/budaya/add", data);
	},
	async updateBudaya(id, data) {
		return API.patch(`/budaya/${id}`, data);
	},
	async deleteBudaya(id) {
		return API.delete(`/budaya/${id}`);
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
	async getDetailBudaya(id) {
		return API.get(`/budaya/detail/${id}`);
	},
	async getAll() {
		return API.get("/budaya/all");
	},
};

export default BudayaAPI;
