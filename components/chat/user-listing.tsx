import { nonSensitiveUserMeta } from "scripts/utils";
import { User } from "./user";

export default function UserListing({
	firstPartyID,
	setTopic,
	usersMetaList,
	className = "",
	redirectToRoot = false,
}: {
	firstPartyID: string;
	setTopic: (topic: string) => void;
	usersMetaList: nonSensitiveUserMeta[];
	className?: string;
	redirectToRoot?: boolean;
}) {
	return (
		<div className={`flex flex-col mx-auto ${className}`}>
			{usersMetaList.length > 0 ? (
				usersMetaList.map((usersMeta, idx) => (
					<User
						key={usersMeta.uid}
						firstPartyID={firstPartyID}
						setTopic={(topic: string) => {
							if (redirectToRoot) {
								location.assign("/"); /* Redirect to chat */
							}
							setTopic(topic);
						}}
						usersMeta={usersMeta}
						tabIndex={idx}
						classname="bg-white"
					/>
				))
			) : (
				<div className="text-center">No users found</div> // More explicit empty state
			)}
		</div>
	);
}
