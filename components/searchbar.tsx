// Search Box component
export default function SearchBox({ ...props }) {
	return (
		<div className="relative w-full">
			<input
				{...props}
				type="email"
				className="w-[85%] pl-6 pr-5 py-3 bg-white text-sm text-gray-500  outline-none border border-primary ring-primary focus:ring-2 shadow-sm rounded-full duration-200"
			/>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				className="w-5 h-5 text-white absolute right-0 inset-y-0 my-auto bg-primary p-1 rounded-full">
				<path
					fillRule="evenodd"
					d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
					clipRule="evenodd"
				/>
			</svg>
		</div>
	);
}