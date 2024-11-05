import { UserMeta } from "scripts/utils";

function User({
	usersMeta,
	tabIndex,
}: {
	usersMeta: UserMeta;
	tabIndex: number;
}) {
	return (
		<div
			className="bg-white focus:border border-primary flex space-x-3 items-center px-5 py-3 rounded-xl focus:ring-1 ring-primary"
			tabIndex={tabIndex}>
			<img
				src={usersMeta.profilePicture}
				alt={usersMeta.name}
				className="w-[60px] h-[60px] rounded-full"
			/>
			<div className="flex flex-col">
				<p className="">{usersMeta.name}</p>
				<p className="font-light">{usersMeta.uid}</p>
			</div>
		</div>
	);
}

export default function UserListing({
	usersMetaList,
	className,
}: {
	usersMetaList: UserMeta[];
	className: string;
}) {
	return (
		<div className={`flex flex-col space-y-5 mx-auto ${className}`}>
			{usersMetaList.map((usersMeta, idx) => {
				return (
					<User
						usersMeta={usersMeta}
						key={idx}
						tabIndex={idx}
					/>
				);
			})}
		</div>
	);
}
