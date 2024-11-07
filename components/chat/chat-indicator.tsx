import { useEffect, useState } from "react";
import { nonSensitiveUserMeta } from "scripts/utils";
import { User } from "./user";

export default function ChatIndigator({
	classname,
}: {
	classname?: string;
}) {
	const [peerMeta, setPeerMeta] = useState<nonSensitiveUserMeta | null>(
		null,
	);

	useEffect(() => {
		/* get current user meta from localstorage */
		const localPeerMeta: nonSensitiveUserMeta = JSON.parse(
			localStorage.getItem("peermeta") ?? "{}",
		);

		setPeerMeta(localPeerMeta);
	});

	return (
		<>
			{peerMeta !== null ? (
				<div className={classname}>
					<User
						firstPartyID=""
						setTopic={() => {}}
						usersMeta={peerMeta}
						tabIndex={10}
						classname="pointer-events-none text-white"
						imageSize={{ width: 10, height: 10 }}
					/>
				</div>
			) : null}
		</>
	);
}
