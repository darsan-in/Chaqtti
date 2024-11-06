import { NextResponse } from "next/server";
import { readUsers } from "scripts/db-manager";
import { UserMeta } from "scripts/utils";

export async function POST(req: Response) {
	const { userQuery } = await req.json();

	if (!userQuery) {
		return NextResponse.json(
			{
				message: "Username required for this query.",
				success: false,
			},
			{ status: 400 },
		);
	}

	try {
		const users: UserMeta[] = readUsers();

		const matchedUsers = users.filter((user: UserMeta) =>
			user.uid.includes(userQuery),
		);

		if (matchedUsers.length === 0) {
			return NextResponse.json(
				{ message: "Users not found", success: false },
				{ status: 400 },
			);
		}

		return NextResponse.json(
			{
				message: `${matchedUsers.length} users found`,
				success: true,
				usersList: JSON.stringify(matchedUsers),
			},
			{ status: 200 },
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "An error occurred during query.", success: false },
			{ status: 500 },
		);
	}
}
