const aedes = require("aedes")();
const server = require("aedes-server-factory").createServer(aedes, {
	ws: true,
});
const port = 9080;

const fs = require("fs");
const path = require("path");

// Directory to store messages by peerTopic
const storageDir = path.join(__dirname, "mqtt_messages");
if (!fs.existsSync(storageDir)) {
	fs.mkdirSync(storageDir);
}

// Function to load messages from JSON file for a specific topic
function loadMessages(topic) {
	const filePath = path.join(
		storageDir,
		`${topic.replace(/\//g, "_")}.json`,
	);

	if (fs.existsSync(filePath)) {
		const data = fs.readFileSync(filePath);
		return JSON.parse(data);
	}

	return [];
}

// Function to save messages to JSON file based on the topic
function saveMessageToJson(topic, clientId, message) {
	const filePath = path.join(
		storageDir,
		`${topic.replace(/\//g, "_")}.json`,
	);

	const messages = loadMessages(topic);
	messages.push({ clientId: clientId, message: message });

	try {
		fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));
		console.log(`Message saved to ${filePath}`);
	} catch (err) {
		console.error(`Failed to save message to ${filePath}:`, err);
	}
}

server.listen(port, function () {
	console.log("server started and listening on port ", port);
});

// Event listeners for connection, disconnection, and message events
aedes.on("client", (client) => {
	console.log(`Client connected: ${client ? client.id : client}`);
});

aedes.on("clientDisconnect", (client) => {
	console.log(`Client disconnected: ${client ? client.id : client}`);
});

aedes.on("connectionError", (_client, err) => {
	console.log("connectionError: ", err);
});

aedes.on("clientError", (_client, err) => {
	console.log("clientError: ", err);
});

aedes.on("publish", (packet, client) => {
	if (client) {
		const topic = packet.topic;
		const message = packet.payload.toString();

		console.log(
			`Message from client ${client.id} on topic ${topic}: ${message}`,
		);

		// Save the message to a JSON file specific to the topic
		saveMessageToJson(topic, client.id, message);
	}
});

aedes.on("subscribe", (subscriptions, client) => {
	console.log(
		`Client ${client.id} subscribed to topics:`,
		subscriptions.map((s) => s.topic).join(", "),
	);
});

aedes.on("unsubscribe", (subscriptions, client) => {
	console.log(
		`Client ${client.id} unsubscribed from topics:`,
		subscriptions.join(", "),
	);
});
