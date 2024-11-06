function PageButton({
	className,
	pageNo,
}: {
	pageNo: number;
	className?: string;
}) {
	return (
		<button
			className={
				"px-2.5 py-1 md:px-3.5 md:py-2 bg-white rounded-xl border border-primary text-primary " +
				className
			}>
			{pageNo}
		</button>
	);
}

export default function Pagination({
	totalPages,
}: {
	totalPages: number;
}) {
	return (
		<div className="flex space-x-3 md:space-x-5 justify-center">
			{new Array(totalPages - 1).fill("").map((_, idx) => {
				return (
					<PageButton
						pageNo={idx + 1}
						key={idx}
					/>
				);
			})}
			<p className="relative top-2">. . . .</p>
			<PageButton pageNo={totalPages} />
		</div>
	);
}
