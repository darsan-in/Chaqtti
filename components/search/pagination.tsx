import { useEffect } from "react";

function PageButton({
	className,
	pageNo,
	setCurrentPage,
}: {
	pageNo: number;
	className?: string;
	setCurrentPage: (currentPage: number) => void;
}) {
	return (
		<button
			onClick={() => setCurrentPage(pageNo)}
			className={
				`px-2.5 py-1 md:px-3.5 md:py-2 bg-white rounded-xl border border-primary text-primary ` +
				className
			}>
			{pageNo}
		</button>
	);
}

export default function Pagination({
	usersPerPage,
	currentPage,
	setCurrentPage,
	totalPages,
	setUsersSliceRange,
}: {
	usersPerPage: number;
	currentPage: number;
	setCurrentPage: (currentPage: number) => void;
	totalPages: number;
	setUsersSliceRange: (range: { start: number; end: number }) => void;
}) {
	const pageButtonPerView = 3;

	// Update user slice range whenever currentPage changes
	useEffect(() => {
		const start = (currentPage - 1) * usersPerPage;
		const end = start + usersPerPage;
		setUsersSliceRange({ start, end });
	}, [currentPage, setUsersSliceRange, usersPerPage]);

	// Handle page wrapping for circular pagination
	const handleSetCurrentPage = (pageNo: number) => {
		if (pageNo > totalPages) {
			setCurrentPage(1);
		} else if (pageNo < 1) {
			setCurrentPage(totalPages);
		} else {
			setCurrentPage(pageNo);
		}
	};

	// Calculate the display page numbers starting from `currentPage + 1`
	const displayPageNumbers = Array.from(
		{ length: Math.min(pageButtonPerView, totalPages) },
		(_, idx) => ((currentPage + idx) % totalPages) + 1,
	);

	return (
		<>
			{totalPages > 0 ? (
				<div className="flex space-x-3 md:space-x-5 justify-center">
					{displayPageNumbers.map((pageNo, idx) =>
						currentPage !== pageNo ? (
							<PageButton
								key={idx}
								pageNo={pageNo}
								setCurrentPage={handleSetCurrentPage}
							/>
						) : null,
					)}
				</div>
			) : null}
		</>
	);
}
