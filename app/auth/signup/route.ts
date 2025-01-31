import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { UserMeta } from "scripts/utils";
import { readUsers, writeUsers } from "../../../scripts/db-manager";

export async function POST(req: Request) {
	const { name, email, password } = await req.json();

	if (!email || !password) {
		return NextResponse.json(
			{ message: "Username and password are required.", success: false },
			{ status: 400 },
		);
	}

	try {
		const users: UserMeta[] = readUsers();

		// Check if the user already exists
		const existingUser = users.find((user: any) => user.email === email);

		if (existingUser) {
			return NextResponse.json(
				{ message: "User already exists.", success: false },
				{ status: 400 },
			);
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Add the new user to the users array
		const newUser: UserMeta = {
			name,
			email,
			password: hashedPassword,
			profilePicture: "/user-profile-images/cat.jpg", //Default profile picture
			uid: `@${email.split("@").join(".")}`,
		};
		users.push(newUser);

		// Write the updated users array back to the JSON file
		writeUsers(users);

		return NextResponse.json(
			{ message: "User registered successfully.", success: true },
			{ status: 201 },
		);
	} catch (error) {
		return NextResponse.json(
			{
				message: "An error occurred during registration.",
				success: false,
				error: error,
			},
			{ status: 500 },
		);
	}
}
