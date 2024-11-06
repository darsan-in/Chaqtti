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
