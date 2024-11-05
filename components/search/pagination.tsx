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
				"px-4 py-3 bg-white rounded-xl border border-primary text-primary " +
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
		<div className="flex space-x-5">
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
