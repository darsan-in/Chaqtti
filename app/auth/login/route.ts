import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { nonSensitiveUserMeta } from "scripts/utils";
import { readUsers } from "../../../scripts/db-manager";

export async function POST(req: Request) {
	const { email, password } = await req.json();

	if (!email || !password) {
		return NextResponse.json(
			{
				message: "Username and password are required.",
				success: false,
			},
			{ status: 400 },
		);
	}

	try {
		const users = readUsers();

		const user = users.find((user: any) => user.email === email);
		if (!user) {
			return NextResponse.json(
				{ message: "Username not registered", success: false },
				{ status: 400 },
			);
		}

		const passwordMatch = await bcrypt.compare(password, user.password);
		if (!passwordMatch) {
			return NextResponse.json(
				{ message: "Invalid password.", success: false },
				{ status: 400 },
			);
		}

		const token = jwt.sign(
			{ username: user.email },
			process.env?.JWT_SECRET ?? "",
			{ expiresIn: "1h" },
		);

		return NextResponse.json(
			{
				message: "Login successful",
				token,
				success: true,
				usermeta: JSON.stringify({
					name: user.name,
					email: user.email,
					profilePicture: user.profilePicture,
					uid: user.uid,
				} as nonSensitiveUserMeta),
			},
			{ status: 200 },
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "An error occurred during login.", success: false },
			{ status: 500 },
		);
	}
}
