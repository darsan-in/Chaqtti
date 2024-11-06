import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { UserMeta } from "./utils";

const filePath = resolve(process.cwd(), "db/users.json");

export function readUsers(): UserMeta[] {
	const data = readFileSync(filePath, "utf8");
	return JSON.parse(data);
}

export function writeUsers(users: UserMeta[]) {
	writeFileSync(filePath, JSON.stringify(users, null, 2), "utf8");
}
