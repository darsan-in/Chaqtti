"use client";

import SearchBox from "components/searchbar";
import { useState } from "react";
import { BsChatFill } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { nonSensitiveUserMeta } from "scripts/utils";
import UserListing from "./user-listing";

const userLists: nonSensitiveUserMeta[] = [
	{
		name: "DaRsan",
		email: "xyz@gmail.com",
		profilePicture: "/user-profile-images/cat.jpg",
		uid: "@xyz",
	},
	{
		name: "Slim shady",
		email: "shady@gmail.com",
		profilePicture: "/user-profile-images/cat.jpg",
		uid: "@shady",
	},
];

export default function Sidebar() {
	const [active, setActive] = useState(false);
	return (
		<aside className="absolute md:relative">
			<button
				className="m-4 relative z-[1] md:hidden bg-primary p-3 text-white rounded-full"
				onClick={() => {
					setActive(!active);
				}}>
				{active ? <CgClose size={25} /> : <BsChatFill size={25} />}
			</button>
			<div
				className={`z-[1] relative m-2 pb-5 pr-2 md:p-0 w-full sm:w-80 border bg-einner rounded-xl space-y-8 md:block h-[96%] ${
					active ? "" : "hidden"
				}`}>
				<div className="px-4 md:px-8 mt-5">
					<SearchBox placeholder="Search..." />
				</div>
				<UserListing
					usersMetaList={userLists}
					className="w-[90%]"
				/>
			</div>
		</aside>
	);
}
