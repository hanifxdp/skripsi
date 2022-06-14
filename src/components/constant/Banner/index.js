import React from "react";

export default function Banner() {
	return (
		<div className="relative p-4 mb-8 overflow-hidden rounded-sm bg-sky-200 sm:p-6">
			{/* Content */}
			<div className="relative">
				<h1 className="mb-1 text-2xl font-bold text-gray-800 md:text-3xl">
					Selamat Datang kembali Admin👋
				</h1>
				<p>Selamat Datang di Manajemen Data Kerajinan Tradisional</p>
			</div>
		</div>
	);
}
