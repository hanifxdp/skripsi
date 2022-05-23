import * as yup from "yup";

export const addBudayaForm = [
	{ type: "text", label: "No. Pencatatan", name: "pencatatan_num" },
	{ type: "text", label: "No. Penetapan", name: "penetapan_num" },
	{ type: "text", label: "Nama Kebudayaan", name: "nama_budaya" },
	{ type: "text", label: "Deskripsi", name: "deskripsi" },
	{ type: "text", label: "Tahun", name: "tahun" },
	{
		type: "file",
		label: "Gambar Kebudayaan",
		name: "image",
		accept: "image/*",
	},
	{ type: "url", label: "Video Kebudayaan", name: "pencatatan_num" },
	{
		type: "select",
		label: "Provinsi",
		name: "provinsi",
		options: [
			{ value: "aceh", label: "Aceh" },
			{ value: "bali", label: "Bali" },
			{ value: "banten", label: "Banten" },
			{ value: "bengkulu", label: "Bengkulu" },
			{ value: "diyogyakarta", label: "DI Yogyakarta" },
			{ value: "dkijakarta", label: "DKI Jakarta" },
			{ value: "gorontalo", label: "Gorontalo" },
			{ value: "jambi", label: "Jambi" },
			{ value: "jateng", label: "Jawa Tengah" },
			{ value: "jabar", label: "Jawa Barat" },
			{ value: "jatim", label: "Jawa Timur" },
			{ value: "kalbar", label: "Kalimantan Barat" },
			{ value: "kalsel", label: "Kalimantan Selatan" },
			{ value: "kaltim", label: "Kalimantan Timur" },
			{ value: "kalut", label: "Kalimantan Utara" },
			{ value: "bangka", label: "Kepulauan Bangka Belitung" },
			{ value: "kepriau", label: "Kepulauan Riau" },
			{ value: "lampung", label: "Lampung" },
			{ value: "maluku", label: "Maluku" },
			{ value: "malukuutara", label: "Maluku Utara" },
			{ value: "ntb", label: "Nusa Tenggara Barat" },
			{ value: "ntt", label: "Nusa Tenggara Timur" },
			{ value: "papua", label: "Papua" },
			{ value: "papuabarat", label: "Papua Barat" },
			{ value: "riau", label: "Riau" },
			{ value: "sulbar", label: "Sulawesi Barat" },
			{ value: "sulsel", label: "Sulawesi Selatan" },
			{ value: "sulteng", label: "Sulawesi Tengah" },
			{ value: "sultenggara", label: "Sulawesi Tenggara" },
			{ value: "sulut", label: "Sulawesi Utara" },
			{ value: "sumbar", label: "Sumatra Barat" },
			{ value: "sumsel", label: "Sumatra Selatan" },
			{ value: "sumut", label: "Sumatra Utara" },
		],
	},
];
export const updateBudayaForm = [
	{ type: "text", label: "No. Budaya", name: "id_budaya" },
];

export const deleteBudayaForm = [
	{ type: "text", label: "No. Budaya", name: "id_budaya" },
];

export const addProvinsiForm = [
	{ type: "text", label: "No. Provinsi", name: "id_provinsi" },
	{ type: "text", label: "Nama Provinsi", name: "nama_provinsi" },
];

export const updateProvinsiForm = [
	{ type: "text", label: "No. Provinsi", name: "id_provinsi" },
];

export const deleteProvinsiForm = [
	{ type: "text", label: "No. Provinsi", name: "id_provinsi" },
];
