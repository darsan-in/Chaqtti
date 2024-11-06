"use client";

import { BsSortAlphaDown, BsSortAlphaDownAlt } from "react-icons/bs";
import { searchUser } from "scripts/postman";
import { nonSensitiveUserMeta } from "scripts/utils";

// Search Box component
function SearchBox({
	setUserList,
}: {
	setUserList: (userList: nonSensitiveUserMeta[]) => void;
}) {
	async function query() {
		/* @ts-ignore */
		const userQuery = document.getElementById("user-query").value;

		const queryResponse = await searchUser({ userQuery: userQuery });

		if (queryResponse.success) {
			localStorage.setItem("userslist", queryResponse.usersList);
			setUserList(JSON.parse(queryResponse.usersList));
		} else {
			console.error(queryResponse.message);
			localStorage.setItem("userslist", "[]");
			setUserList([]);
		}
	}

	return (
		<div className="relative w-[60%] md:w-[68%]">
			<input
				id="user-query"
				type="email"
				placeholder="Search user"
				className="w-full pl-5 py-3 bg-white text-sm text-gray-500 outline-none border border-primary ring-primary focus:ring-2 shadow-sm rounded-full duration-200"
				onInput={() => {
					query();
				}}
			/>
			<svg
				onClick={() => {
					query();
				}}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				className="w-6 h-6 text-white absolute -right-3 inset-y-0 my-auto bg-primary p-1 rounded-full"
				style={{ cursor: "pointer" }}>
				<path
					fillRule="evenodd"
					d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
					clipRule="evenodd"
				/>
			</svg>
		</div>
	);
}

export default function SearchControl({
	setUserList,
	setAscending,
	isAscending,
}: {
	setUserList: (userList: nonSensitiveUserMeta[]) => void;
	setAscending: (isAscending: boolean) => void;
	isAscending: boolean;
}) {
	return (
		<div className="flex flex-col items-center w-[96%] lg:w-[50%] mx-auto mt-10 p-2 justify-between space-y-6">
			<SearchBox
				setUserList={(userlist: nonSensitiveUserMeta[]) => {
					setUserList(userlist);
				}}
			/>
			<div className="flex items-center justify-center space-x-2 relative">
				<p className="font-medium">Sort By :</p>
				{isAscending ? (
					<BsSortAlphaDown
						size={25}
						onClick={() => {
							setAscending(false);
						}}
						className="w-6 h-6 bg-primary text-white p-[2px] rounded-md"
						style={{ cursor: "pointer" }}
					/>
				) : (
					<BsSortAlphaDownAlt
						onClick={() => {
							setAscending(true);
						}}
						size={25}
						className="w-6 h-6 bg-primary text-white p-[2px] rounded-md"
						style={{ cursor: "pointer" }}
					/>
				)}
			</div>
		</div>
	);
}
