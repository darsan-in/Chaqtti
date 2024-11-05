"use client";

import * as Avatar from "@radix-ui/react-avatar";
import { useEffect, useState } from "react";
import { LuLogOut } from "react-icons/lu";
import { UserMeta } from "../scripts/utils";

export default function UserProfile() {
	const [userMeta, setUserMeta] = useState<UserMeta>({
		profilePicture: "/user-profile-images/cat.jpg",
		name: "DARSAN",
		email: "hello@darsan.in",
	} as UserMeta);
	const hasMeta = Object.keys(userMeta).length !== 0;

	useEffect(() => {
		/* setUserMeta({}); */
	}, []);

	return (
		<div
			className={
				"flex items-center justify-around space-x-3 sm:bg-primary md:bg-transparent w-[40%] md:w-auto px-5 py-4 md:p-0 rounded-xl relative left-[10%] md:left-0 ml-[15%]"
			}>
			{hasMeta ? (
				<>
					<Avatar.Root className="items-center space-x-3 hidden sm:flex">
						<Avatar.Image
							src={userMeta.profilePicture}
							className="w-10 h-10 rounded-full object-cover md:p-0 border-[3px]"
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
						className="w-full sm:w-auto bg-sec flex sm:block justify-center py-4 sm:py-0 rounded-2xl lg:p-2"
						onClick={() => {
							/* googleSignOut(); */
						}}>
						<LuLogOut
							size={20}
							className="text-white"
						/>
					</button>
				</>
			) : (
				<a
					href="/login"
					className="px-3 py-1.5 text-sm text-white duration-150 bg-sec rounded-lg active:shadow-lg"
					onClick={() => {
						/* googleSSO(); */
					}}>
					Sign in
				</a>
			)}
		</div>
	);
}
