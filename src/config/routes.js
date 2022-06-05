export const routes = {
	LIST_BUDAYA: (idProvinsi) => {
		return `?id=${idProvinsi}`;
	},
	DETAIL_BUDAYA: (idBudaya) => {
		return `?idBudaya=${idBudaya}`;
	},
};
