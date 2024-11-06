import { NextResponse } from "next/server";
import { readUsers } from "scripts/db-manager";
import { UserMeta } from "scripts/utils";

export async function POST(_req: Response) {
	try {
		const users: UserMeta[] = readUsers();

		return NextResponse.json(
			{
				message: `${users.length} users, totally`,
				success: true,
				usersList: JSON.stringify(users),
			},
			{ status: 200 },
		);
	} catch (error) {
		return NextResponse.json(
			{
				message: "An error occurred during getting userList.",
				success: false,
			},
			{ status: 500 },
		);
	}
}
