"use client";

import UserListing from "components/chat/user-listing";
import SearchControl from "components/search/control";
import Pagination from "components/search/pagination";
import { useEffect, useState } from "react";
import sortAlphabatically, { nonSensitiveUserMeta } from "scripts/utils";

export default function Search() {
	const usersPerPage = 4;

	const [currentPage, setCurrentPage] = useState(1);
	const [userList, setUserList] = useState<nonSensitiveUserMeta[]>([]);
	const [isAscending, setAscending] = useState(true);
	const [usersSliceRange, setUsersSliceRange] = useState<{
		start: number;
		end: number;
	}>({ start: 0, end: usersPerPage });

	/* run once hook to fetch all registered users*/
	useEffect(() => {
		fetch("/api/all-users")
			.then(async (res) => {
				const { registeredUsers } = await res.json();

				const sortedList = sortAlphabatically(registeredUsers, true);
				localStorage.setItem("userslist", JSON.stringify(sortedList));
				setUserList(sortedList);
			})
			.catch(console.error);
	}, []);
	/*  */

	/* It trigger when, ascending-descending toggle clicked */
	useEffect(() => {
		/* Reset to first page */
		setCurrentPage(1);

		const usersListLocal = JSON.parse(
			localStorage.getItem("userslist") || "[]",
		);

		if (usersListLocal.length > 0) {
			const sortedList = sortAlphabatically(usersListLocal, isAscending);

			//Storing users list in current sort order for pagination
			localStorage.setItem("userslist", JSON.stringify(sortedList));

			setUserList(sortedList);
		}
	}, [isAscending]);

	const [firstPartyID, setFirstPartyID] = useState("");
	useEffect(() => {
		const { uid }: nonSensitiveUserMeta = JSON.parse(
			localStorage.getItem("usermeta") ?? "",
		);

		setFirstPartyID(uid);
	}, []);

	return (
		<main className="flex justify-center items-center w-full">
			<section className="flex flex-col space-y-10 bg-einner min-h-[84vh] w-[98%] mx-auto mt-3 rounded-xl pb-10">
				<SearchControl
					isAscending={isAscending}
					setAscending={(isAscending: boolean) => {
						setAscending(isAscending);
					}}
					setUserList={(userlist: nonSensitiveUserMeta[]) => {
						setUserList(userlist);
					}}
				/>
				<UserListing
					firstPartyID={firstPartyID}
					setTopic={() => {}}
					usersMetaList={userList.slice(
						usersSliceRange.start,
						usersSliceRange.end,
					)}
					className="space-y-5"
					redirectToRoot
				/>
				<Pagination
					usersPerPage={usersPerPage}
					setCurrentPage={setCurrentPage}
					currentPage={currentPage}
					setUsersSliceRange={setUsersSliceRange}
					totalPages={Math.ceil(userList.length / usersPerPage)}
				/>
			</section>
		</main>
	);
}
