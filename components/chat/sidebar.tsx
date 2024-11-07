"use client";

import SearchBox from "components/searchbar";
import { useState } from "react";
import { BsChatFill } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { nonSensitiveUserMeta } from "scripts/utils";
import UserListing from "./user-listing";

// Example hardcoded user list
const userLists: nonSensitiveUserMeta[] = [
	{
		name: "DARSAN",
		email: "darsan@cresteem.com",
		profilePicture: "/user-profile-images/cat.jpg",
		uid: "@darsan.cresteem.com",
	},
	{
		name: "Eminem",
		email: "eminem@cresteem.com",
		profilePicture: "/user-profile-images/cat.jpg",
		uid: "@eminem.cresteem.com",
	},
];

export default function Sidebar({
	userID,
	setTopic,
}: {
	userID: string;
	setTopic: (topic: string) => void;
}) {
	const [active, setActive] = useState(false);

	// Toggle sidebar visibility
	const toggleSidebar = () => setActive((prevState) => !prevState);

	return (
		<aside className="absolute md:relative">
			{/* Mobile toggle button */}
			<button
				className="m-4 relative z-[1] md:hidden bg-primary p-3 text-white rounded-full"
				onClick={toggleSidebar}>
				{active ? <CgClose size={25} /> : <BsChatFill size={25} />}
			</button>

			{/* Sidebar content */}
			<div
				className={`z-[1] relative m-2 pb-5 pr-2 md:p-0 w-full sm:w-80 border bg-einner rounded-xl space-y-8 md:block h-[96%] ${
					active ? "" : "hidden"
				}`}>
				<div className="px-4 md:px-8 mt-5">
					<SearchBox placeholder="Search..." />
				</div>
				{/* User listing */}
				<UserListing
					firstPartyID={userID}
					setTopic={setTopic}
					usersMetaList={userLists}
					className="w-[90%]"
				/>
			</div>
		</aside>
	);
}
