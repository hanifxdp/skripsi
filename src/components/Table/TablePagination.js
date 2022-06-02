import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronRight,
	faChevronLeft,
	faChevronCircleRight,
	faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

const TablePagination = (props) => {
	const { currentPage, setCurrentPage, hasNext, hasPrev, totalPage } = props;
	const [canNextPage, setCanNextPage] = useState(true);
	const [canPreviousPage, setCanPreviousPage] = useState(false);

	const onNextPage = () => setCurrentPage(currentPage + 1);
	const onPrevPage = () => setCurrentPage(currentPage - 1);
	const onPageSelect = (selectedPage) => setCurrentPage(selectedPage);

	useEffect(() => {
		if (hasNext) setCanNextPage(true);
		else setCanNextPage(false);
		if (hasPrev) setCanPreviousPage(true);
		else setCanPreviousPage(false);
	}, [hasNext, hasPrev]);

	return (
		totalPage > 1 && (
			<div className="flex justify-between px-6 py-4">
				<div>
					Page{" "}
					<em>
						{currentPage} of {totalPage}
					</em>
				</div>
				<div className="flex items-center space-x-1">
					<button
						type="button"
						onClick={() => {
							onPageSelect(1);
						}}
						disabled={!canPreviousPage}
						className="p-1 rounded bg-cyan-700 hover:bg-cyan-600 disabled:bg-slate-400"
					>
						<FontAwesomeIcon icon={faChevronCircleLeft} />
					</button>
					<button
						type="button"
						onClick={() => onPrevPage()}
						disabled={!canPreviousPage}
						className="p-1 rounded bg-cyan-700 hover:bg-cyan-600 disabled:bg-slate-400"
					>
						<FontAwesomeIcon icon={faChevronLeft} />
					</button>
					<input
						type="number"
						className="w-10 pl-3 text-lg text-center border-2 rounded border-cyan-700"
						value={currentPage}
						min={1}
						max={totalPage}
						onChange={(e) => onPageSelect(parseInt(e.target.value, 10))}
					/>
					<button
						type="button"
						onClick={() => onNextPage()}
						disabled={!canNextPage}
						className="p-1 rounded bg-cyan-700 hover:bg-cyan-600 disabled:bg-slate-400"
					>
						<FontAwesomeIcon icon={faChevronRight} />
					</button>
					<button
						type="button"
						onClick={() => {
							onPageSelect(totalPage);
						}}
						disabled={!canNextPage}
						className="p-1 rounded bg-cyan-700 hover:bg-cyan-600 disabled:bg-slate-400"
					>
						<FontAwesomeIcon icon={faChevronCircleRight} />
					</button>
				</div>
			</div>
		)
	);
};

export default React.memo(TablePagination);
