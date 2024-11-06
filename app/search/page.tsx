import UserListing from "components/chat/user-listing";
import SearchControl from "components/search/control";
import Pagination from "components/search/pagination";
import { nonSensitiveUserMeta } from "scripts/utils";

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

export default function Search() {
	return (
		<main className="flex justify-center items-center w-full">
			<section className="flex flex-col space-y-10 bg-einner h-[84vh] w-[98%] mx-auto mt-3 rounded-xl">
				<SearchControl />
				<UserListing
					usersMetaList={userLists}
					className=""
				/>
				<Pagination totalPages={5} />
			</section>
		</main>
	);
}
