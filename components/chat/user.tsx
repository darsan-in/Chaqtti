import { generateUniqueTopic, nonSensitiveUserMeta } from "scripts/utils";

export function User({
	firstPartyID,
	setTopic,
	usersMeta,
	tabIndex,
	classname = "",
	imageSize = {
		width: 60,
		height: 60,
	},
}: {
	firstPartyID: string;
	setTopic: (topic: string) => void;
	usersMeta: nonSensitiveUserMeta;
	tabIndex: number;
	classname?: string;
	imageSize?: { width: number; height: number };
}) {
	const handleClick = () => {
		/* Store current user meta in localstorage */
		localStorage.setItem("peermeta", JSON.stringify(usersMeta));

		setTopic(generateUniqueTopic(firstPartyID, usersMeta.uid));
	};

	return (
		<div
			onClick={handleClick}
			className={`focus:border border-primary flex space-x-3 items-center px-5 py-3 rounded-xl focus:ring-1 ring-primary ${classname}`}
			tabIndex={tabIndex}>
			<img
				src={usersMeta.profilePicture}
				alt={usersMeta.name}
				className={`w-[${imageSize.width}px] h-[${imageSize.height}px] rounded-full`}
			/>
			<div className="flex flex-col">
				<p>{usersMeta.name}</p>
				<p className="font-light">{usersMeta.uid}</p>
			</div>
		</div>
	);
}
