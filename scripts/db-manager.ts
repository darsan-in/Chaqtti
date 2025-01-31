import { MongoClient, ServerApiVersion } from "mongodb";
import { UserMeta } from "./utils";

const uri = `mongodb+srv://darsan:${"0yrVtQfOiHVK16D9"}@cresteem.hikzg.mongodb.net/?retryWrites=true&w=majority&appName=cresteem`;

const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

async function connectToDb() {
	try {
		await client.connect();
		const db = client.db("chaqtti");
		return { client, db };
	} catch (err) {
		console.error(err);
		return;
	}
}

export async function readUsers(): Promise<UserMeta[]> {
	const connection = await connectToDb();
	if (!connection) {
		throw new Error("Failed to connect to the database");
	}
	const { client, db } = connection;
	try {
		const collection = db.collection("users");
		return (await collection.find({}).toArray()) as unknown as UserMeta[];
	} finally {
		client.close();
	}
}

export async function writeUsers(users: UserMeta[]): Promise<void> {
	const connection = await connectToDb();
	if (!connection) {
		throw new Error("Failed to connect to the database");
	}
	const { client, db } = connection;
	try {
		const collection = db.collection("users");
		await collection.deleteMany({});
		await collection.insertMany(users);
	} finally {
		client.close();
	}
}
