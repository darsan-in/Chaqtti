import UserListing from "components/chat/user-listing";
import SearchControl from "components/search/control";
import Pagination from "components/search/pagination";
import { UserMeta } from "scripts/utils";

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

export default function Search() {
	return (
		<main className="flex flex-col items-center space-y-10 bg-einner h-[84vh] w-[98%] mx-auto mt-3 rounded-xl">
			<SearchControl />
			<UserListing
				usersMetaList={userLists}
				className=""
			/>
			<Pagination totalPages={5} />
		</main>
	);
}
