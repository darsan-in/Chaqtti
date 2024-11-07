import mqtt from "mqtt";

// Singleton-like client instance map to avoid creating multiple instances per clientId
const clientInstances: { [clientId: string]: mqtt.MqttClient } = {};

// Function to initialize and return an active MQTT client instance
export function initializeMQTTClient(
	clientId: string,
): Promise<mqtt.MqttClient> {
	// Check if client instance already exists for the given clientId
	if (clientInstances[clientId] && clientInstances[clientId].connected) {
		console.log(`Reusing existing client instance for ${clientId}`);
		return Promise.resolve(clientInstances[clientId]);
	}

	return new Promise((resolve, reject) => {
		const options: mqtt.IClientOptions = {
			clientId, // Custom client ID
			clean: false, // Maintains the session across connections
			reconnectPeriod: 1000, // Reconnect every 1 second if disconnected
			keepalive: 60,
		};

		// Create and connect the MQTT client to the broker
		const client = mqtt.connect("ws://localhost:9080", options);

		// Event when the client successfully connects
		client.on("connect", () => {
			console.log(`Client ${clientId} connected to the broker`);
			clientInstances[clientId] = client; // Store the client instance
			resolve(client); // Return the active client instance
		});

		// Handle connection errors
		client.on("error", (err: Error) => {
			console.error(
				`Connection error for client ${clientId}: ${err.message}`,
			);
			reject(err); // Reject if the connection fails
		});

		// Handle disconnection
		client.on("close", () => {
			console.warn(`Client ${clientId} disconnected from the broker`);
			delete clientInstances[clientId]; // Remove client instance if disconnected
		});

		// Handle reconnect attempts
		client.on("reconnect", () => {
			console.log(`Client ${clientId} attempting to reconnect`);
		});
	});
}

// Function to publish a message through the active client
export function publishMessage(
	client: mqtt.MqttClient,
	topic: string,
	message: string,
): void {
	if (client && client.connected) {
		client.publish(
			topic,
			message,
			{ qos: 0, retain: false },
			(err?: Error) => {
				if (err) {
					console.error(
						`Error publishing message to ${topic}: ${err.message}`,
					);
				} else {
					console.log(`Message published to topic "${topic}": ${message}`);
				}
			},
		);
	} else {
		console.error("MQTT client is not connected");
	}
}
