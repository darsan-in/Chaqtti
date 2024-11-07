import * as crypto from "crypto";

//Generate a reproducible, unique topic name from two user IDs
export function generateUniqueTopic(
	userId1: string,
	userId2: string,
): string {
	// Sort user IDs to make the process order-insensitive
	const userIds = [userId1, userId2].sort((a, b) => a.localeCompare(b));

	// Concatenate the sorted user IDs into a string
	const combined = userIds.join("-");

	// Hash the combined string (use SHA-256 for a fixed-length hash)
	const hash = crypto.createHash("sha256").update(combined).digest("hex");

	// Return the hash as the unique topic name
	return hash;
}

export interface UserMeta extends nonSensitiveUserMeta {
	password: string;
}

export interface nonSensitiveUserMeta {
	name: string;
	email: string;
	profilePicture: string;
	uid: string;
}

export function setCookie(name: string, value: string, days: number) {
	let expires = "";
	if (days) {
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie =
		name +
		"=" +
		(value || "") +
		expires +
		"; path=/; SameSite=Strict; Secure";
}

export function getCookie(name: string) {
	const nameEQ = name + "=";
	const ca = document.cookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === " ") c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) === 0)
			return c.substring(nameEQ.length, c.length);
	}
	return null;
}

export function deleteCookie(name: string) {
	document.cookie = `${encodeURIComponent(name)}=; Max-Age=0; Path=/;`;
}

export default function sortAlphabatically(
	sourceList: nonSensitiveUserMeta[],
	sort: boolean,
) {
	const result = sourceList.sort((a, b) =>
		sort ? a.uid.localeCompare(b.uid) : b.uid.localeCompare(a.uid),
	);
	return result;
}
