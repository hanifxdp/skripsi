import React from "react";

export default function Banner() {
	return (
		<div className="relative bg-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
			{/* Content */}
			<div className="relative">
				<h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">
					Selamat Datang kembali Admin👋
				</h1>
				<p>Selamat Datang di Manajemen Data Kerajinan Tradisional</p>
			</div>
		</div>
	);
}
