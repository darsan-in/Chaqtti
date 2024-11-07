"use client";
import { MqttClient } from "mqtt";
import { useCallback, useDeferredValue, useEffect, useState } from "react";
import { initializeMQTTClient } from "scripts/mqtt-client";
import {
	generateUniqueTopic,
	nonSensitiveUserMeta,
	UserMeta,
} from "scripts/utils";
import ChatBubbles from "./chat-bubbles";
import ChatInput from "./chat-input";
import Sidebar from "./sidebar";

export default function ChatUI() {
	const [topic, setTopic] = useState("default-topic");
	const previousTopic = useDeferredValue(topic);
	const [messages, setMessages] = useState<
		{
			userId: string;
			message: string;
		}[]
	>([]);
	const [activeClient, setActiveClient] = useState<MqttClient | null>(
		null,
	);
	const [uid, setUid] = useState<string>("");

	/* Subscribe to last connected user / user from search redirect (RUN ONCE)*/
	useEffect(() => {
		const peermeta: nonSensitiveUserMeta = JSON.parse(
			localStorage.getItem("peermeta") ?? "{}",
		);
		setTopic(generateUniqueTopic(uid, peermeta.uid));
	}, []);

	// Function to handle received messages
	const handleMessage = useCallback(
		(_topic: string, signedMessage: Buffer) => {
			const { userID, message } = JSON.parse(signedMessage.toString());
			setMessages((prevMessages) => [
				...prevMessages,
				{ userId: userID, message },
			]);
		},
		[],
	);

	// Initialize MQTT connection on component mount
	useEffect(() => {
		const currentUserMeta: UserMeta = JSON.parse(
			localStorage.getItem("usermeta") || "{}",
		);

		initializeMQTTClient(currentUserMeta.uid)
			.then((client) => {
				setActiveClient(client);
			})
			.catch(console.error);

		setUid(currentUserMeta.uid);
	}, []);

	// Subscribe to topic whenever it changes
	useEffect(() => {
		if (activeClient) {
			activeClient.unsubscribe(previousTopic); //Unsubscribe previous peer topic

			activeClient.subscribe(topic, (err) => {
				if (err) {
					console.error(`Failed to subscribe to topic ${topic}`, err);
				} else {
					console.log(`Subscribed to topic ${topic}`);
				}
			});

			/* Clear all message of previous topic(peer) chat */
			setMessages([]);
		}
	}, [topic, activeClient]);

	// Set up the MQTT message listener once when client is available
	useEffect(() => {
		if (activeClient) {
			activeClient.on("message", handleMessage);

			// Clean up listener on component unmount or client change
			return () => {
				activeClient.off("message", handleMessage);
			};
		}
	}, [activeClient, handleMessage]);

	return (
		<section className="flex h-[88vh] overflow-y-hidden">
			<Sidebar
				setTopic={setTopic}
				userID={uid}
			/>
			<div className="flex w-full h-[96%] md:w-[74%] m-2 relative">
				<ChatBubbles
					userID={uid}
					texts={messages}
					className="w-full h-[80%] mx-4 lg:mx-10 pt-[8em] overflow-y-scroll"
				/>
				<ChatInput
					userID={uid}
					topic={topic}
					activeClient={activeClient}
					className="border-t pt-3 bg-white flex absolute bottom-1 w-[100%] space-x-4 justify-center"
				/>
			</div>
		</section>
	);
}
