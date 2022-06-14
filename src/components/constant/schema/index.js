import * as yup from "yup";

export const addBudayaForm = [
	{ type: "number", label: "ID", name: "id" },
	{ type: "number", label: "No. Kebudayaan", name: "registNum" },
	{ type: "text", label: "Nama Kebudayaan", name: "nama_budaya" },
	{ type: "text", label: "Deskripsi", name: "deskripsi" },
	{ type: "text", label: "Tahun", name: "tahun" },
	{
		type: "file",
		label: "Gambar Kebudayaan",
		name: "image",
		accept: "image/*",
	},
	// { type: "url", label: "Video Kebudayaan", name: "video" },
	{
		type: "select",
		label: "Provinsi",
		name: "provinsiId",
		options: [
			{ value: "1", label: "Aceh" },
			{ value: "2", label: "Bali" },
			{ value: "3", label: "Banten" },
			{ value: "4", label: "Bengkulu" },
			{ value: "5", label: "DI Yogyakarta" },
			{ value: "6", label: "DKI Jakarta" },
			{ value: "7", label: "Gorontalo" },
			{ value: "8", label: "Jambi" },
			{ value: "9", label: "Jawa Barat" },
			{ value: "10", label: "Jawa Tengah" },
			{ value: "11", label: "Jawa Timur" },
			{ value: "12", label: "Kalimantan Barat" },
			{ value: "13", label: "Kalimantan Selatan" },
			{ value: "14", label: "Kalimantan Tengah" },
			{ value: "15", label: "Kalimantan Timur" },
			{ value: "16", label: "Kalimantan Utara" },
			{ value: "17", label: "Kepulauan Bangka Belitung" },
			{ value: "18", label: "Kepulauan Riau" },
			{ value: "19", label: "Lampung" },
			{ value: "20", label: "Maluku" },
			{ value: "21", label: "Maluku Utara" },
			{ value: "22", label: "Nusa Tenggara Barat" },
			{ value: "23", label: "Nusa Tenggara Timur" },
			{ value: "24", label: "Papua" },
			{ value: "25", label: "Papua Barat" },
			{ value: "26", label: "Riau" },
			{ value: "27", label: "Sulawesi Barat" },
			{ value: "28", label: "Sulawesi Selatan" },
			{ value: "29", label: "Sulawesi Tengah" },
			{ value: "30", label: "Sulawesi Tenggara" },
			{ value: "31", label: "Sulawesi Utara" },
			{ value: "32", label: "Sumatra Barat" },
			{ value: "33", label: "Sumatra Selatan" },
			{ value: "34", label: "Sumatra Utara" },
		],
	},
	{
		type: "select",
		label: "Domain",
		name: "jenisKebudayaanId",
		options: [
			{
				value: "1",
				label: "Adat Istiadat Masyarakat, Ritus, dan Perayaan-Perayaan",
			},
			{
				value: "2",
				label: "Pengetahuan dan Kebiasaan Perilaku Mengenai Alam dan Semesta",
			},
			{ value: "3", label: "Keterampilan dan Kemahiran Kerajinan Tradisional" },
			{ value: "4", label: "Seni Pertunjukkan" },
			{ value: "5", label: "Tradisi dan Ekspresi Lisan" },
		],
	},
];

export const addBudayaSchema = yup.object().shape({
	id: yup.number().required("Id is required"),
	registNum: yup.number().required("No. Registrasi is required"),
	nama_budaya: yup
		.string()
		.matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
		.required("Nama Kebudayaan is required"),
	deskripsi: yup
		.string()
		.matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
		.required("Deskripsi is required"),
	provinsiId: yup.string().required("Provinsi is required"),
	jenisKebudayaanId: yup.string().required("Domain is required"),
});

export const updateBudayaForm = [
	{ type: "text", label: "Nama Budaya", name: "nama_budaya" },
	{ type: "textarea", label: "Deskripsi", name: "deskripsi" },
];

export const updateBudayaMediaForm = [
	{ type: "file", label: "Image", name: "image" },
	{ type: "url", label: "Video", name: "video" },
];

export const deleteBudayaForm = [
	{ type: "text", label: "No. Budaya", name: "id" },
];

export const addProvinsiForm = [
	{ type: "text", label: "No. Provinsi", name: "id" },
	{ type: "text", label: "Nama Provinsi", name: "nama_provinsi" },
];

export const updateProvinsiForm = [
	{ type: "text", label: "No. Provinsi", name: "id" },
];

export const deleteProvinsiForm = [
	{ type: "text", label: "No. Provinsi", name: "id" },
];
