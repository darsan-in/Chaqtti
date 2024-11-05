"use client";

import SearchBox from "components/searchbar";
import { UserMeta } from "scripts/utils";
import UserListing from "./user-listing";

const userLists: UserMeta[] = [
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
	return (
		<aside className="m-2 w-full border bg-einner space-y-8 sm:w-80 rounded-xl">
			<div className="space-y-8">
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
