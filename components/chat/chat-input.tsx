import { useRef } from "react";
import { publishMessage } from "scripts/mqtt-client";

export default function ChatInput({
	userID,
	activeClient,
	topic,
	className,
}: {
	userID: string;
	activeClient: any;
	topic: string;
	className?: string;
}) {
	// Using useRef to manage input field
	const inputRef = useRef<HTMLInputElement>(null);

	function messageDispatcher() {
		if (!inputRef.current || !inputRef.current.value.trim()) {
			alert("Message cannot be empty!");
			return;
		}

		const signedMessage = JSON.stringify({
			userID,
			message: inputRef.current.value.trim(),
		});

		if (activeClient) {
			publishMessage(activeClient, topic, signedMessage);
			inputRef.current.value = ""; // Clear input after sending
		} else {
			alert("Client not ready to send messages");
		}
	}

	return (
		<div className={className}>
			<input
				ref={inputRef} // Using ref to access the input value
				type="text"
				className="w-[70%] outline-none border ring-primary focus:ring-1 shadow-sm rounded-full duration-200 px-6 text-start"
				placeholder="Type your message here"
				onKeyDown={(event) => {
					if (event.key === "Enter") {
						messageDispatcher();
					}
				}}
			/>
			<button
				onClick={messageDispatcher}
				className="bg-primary text-white font-medium px-5 py-2 rounded-full">
				Send
			</button>
		</div>
	);
}
