export const routes = {
	LIST_BUDAYA: (idProvinsi) => {
		return `?id=${idProvinsi}`;
	},
	DETAIL_BUDAYA: (id) => {
		return `?idBudaya=${id}`;
	},
};
