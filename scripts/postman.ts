import { nonSensitiveUserMeta } from "./utils";

export interface AuthResponse {
	success: boolean;
	message: string;
	token?: string;
	usermeta?: nonSensitiveUserMeta | string;
}

function handleResponse(response: Response) {
	return response.json();
}

export async function registerUser(userData: {
	name: string;
	email: string;
	password: string;
}): Promise<AuthResponse> {
	try {
		const response = await fetch(`/auth/signup`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userData),
		});
		return handleResponse(response);
	} catch (error: any) {
		return {
			success: false,
			message: error.message || "Registration failed",
		};
	}
}

export async function login(userData: {
	email: string;
	password: string;
}): Promise<AuthResponse> {
	try {
		const response = await fetch(`/auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userData),
		});
		return handleResponse(response);
	} catch (error: any) {
		return {
			success: false,
			message: error.message || "Login failed",
		};
	}
}

export async function searchUser(query: { userQuery: string }) {
	try {
		const response = await fetch(`/api/user-search`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(query),
		});
		return handleResponse(response);
	} catch (error: any) {
		return {
			success: false,
			message: error.message || "Query failed",
		};
	}
}
