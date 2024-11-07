import { generateUniqueTopic, nonSensitiveUserMeta } from "scripts/utils";

function User({
	firstPartyID,
	setTopic,
	usersMeta,
	tabIndex,
}: {
	firstPartyID: string;
	setTopic: (topic: string) => void;
	usersMeta: nonSensitiveUserMeta;
	tabIndex: number;
}) {
	const handleClick = () => {
		setTopic(generateUniqueTopic(firstPartyID, usersMeta.uid));
	};

	return (
		<div
			onClick={handleClick}
			className="bg-white focus:border border-primary flex space-x-3 items-center px-5 py-3 rounded-xl focus:ring-1 ring-primary"
			tabIndex={tabIndex}>
			<img
				src={usersMeta.profilePicture}
				alt={usersMeta.name}
				className="w-[60px] h-[60px] rounded-full"
			/>
			<div className="flex flex-col">
				<p>{usersMeta.name}</p>
				<p className="font-light">{usersMeta.uid}</p>
			</div>
		</div>
	);
}

export default function UserListing({
	firstPartyID,
	setTopic,
	usersMetaList,
	className = "",
}: {
	firstPartyID: string;
	setTopic: (topic: string) => void;
	usersMetaList: nonSensitiveUserMeta[];
	className?: string;
}) {
	return (
		<div className={`flex flex-col space-y-5 mx-auto ${className}`}>
			{usersMetaList.length > 0 ? (
				usersMetaList.map((usersMeta, idx) => (
					<User
						key={usersMeta.uid}
						firstPartyID={firstPartyID}
						setTopic={setTopic}
						usersMeta={usersMeta}
						tabIndex={idx}
					/>
				))
			) : (
				<div>No users found</div> // More explicit empty state
			)}
		</div>
	);
}
