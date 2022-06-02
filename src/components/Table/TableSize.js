import React from "react";

const TableSize = (props) => {
	const { pageSize, setPageSize } = props;

	return (
		<div className="select-none">
			<span className="">
				Show
				<select
					className="p-1 mx-1 rounded shadow focus:outline-none"
					value={pageSize}
					onChange={(e) => setPageSize(parseInt(e.target.value, 10))}
				>
					{[10, 20, 30].map((size) => (
						<option key={size} value={size}>
							{size}
						</option>
					))}
				</select>
				Entries
			</span>
		</div>
	);
};

export default React.memo(TableSize);
