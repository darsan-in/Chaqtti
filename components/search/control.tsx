"use client";

import { useState } from "react";
import { BsSortAlphaDown, BsSortAlphaDownAlt } from "react-icons/bs";

// Search Box component
function SearchBox({ ...props }) {
	return (
		<div className="relative w-[68%]">
			<input
				{...props}
				type="email"
				placeholder="Search user"
				className="w-full pl-5 py-3 bg-white text-sm text-gray-500 outline-none border border-primary ring-primary focus:ring-2 shadow-sm rounded-full duration-200"
			/>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				className="w-6 h-6 text-white absolute right-0 inset-y-0 my-auto bg-primary p-1 rounded-full">
				<path
					fillRule="evenodd"
					d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
					clipRule="evenodd"
				/>
			</svg>
		</div>
	);
}

export default function SearchControl() {
	const [isAscending, setAscending] = useState(true);
	return (
		<div className="flex border border-sec rounded-full w-[50%] mx-auto mt-10 p-2 justify-between bg-white">
			<SearchBox />
			<div className="w-[20%] flex items-center space-x-2 relative -left-4">
				<p className="font-medium">Sort By :</p>
				<BsSortAlphaDown
					size={25}
					onClick={() => {
						console.log("clicked asc");
						setAscending(true);
					}}
					className={`w-6 h-6 ${
						isAscending ? "bg-primary text-white" : "text-primary"
					}`}
				/>
				<BsSortAlphaDownAlt
					onClick={() => {
						console.log("clicked desc");
						setAscending(false);
					}}
					size={25}
					className={`w-6 h-6 ${
						isAscending ? "text-primary" : "bg-primary text-white"
					}`}
				/>
			</div>
		</div>
	);
}
