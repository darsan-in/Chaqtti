"use client";

import * as Avatar from "@radix-ui/react-avatar";
import { useEffect, useState } from "react";
import { LuLogOut } from "react-icons/lu";
import { deleteCookie, UserMeta } from "../scripts/utils";

export default function UserProfile({
	mobMenuActive,
}: {
	mobMenuActive: boolean;
}) {
	const [userMeta, setUserMeta] = useState<UserMeta>({} as UserMeta);
	const hasMeta = Object.keys(userMeta).length !== 0;

	useEffect(() => {
		const localUserMeta: UserMeta = JSON.parse(
			localStorage.getItem("usermeta") || "{}",
		);

		setUserMeta(localUserMeta);
	}, []);

	return (
		<div
			className={`flex items-center justify-around space-x-3 w-full md:w-auto px-5 py-4 md:p-0 rounded-xl md:ml-[15%] relative -left-[1em] ${
				hasMeta ? "bg-primary md:bg-transparent" : ""
			}`}>
			{hasMeta ? (
				<>
					<Avatar.Root
						className={`items-center space-x-3 sm:flex ${
							mobMenuActive ? "flex" : "hidden"
						}`}>
						<Avatar.Image
							src={userMeta.profilePicture}
							className="w-10 h-10 rounded-full object-cover md:p-0 border-[3px] border-primary md:border-white"
						/>
						<p className="truncate md:text-gray-700">
							<span className="text-sm font-medium w-full text-white">
								{userMeta.name}
							</span>
							<span className="text-white block text-xs">
								{userMeta.email}
							</span>
						</p>
					</Avatar.Root>
					<button
						className="w-[20%] sm:w-auto bg-sec flex sm:block justify-center py-4 sm:py-0 rounded-2xl md:p-2"
						onClick={() => {
							deleteCookie("token");
							localStorage.setItem("usermeta", "{}");
							location.assign("/login");
						}}>
						<LuLogOut
							size={20}
							className="text-white"
						/>
					</button>
				</>
			) : (
				""
			)}
		</div>
	);
}
