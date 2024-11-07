function ChatBubble({
	text,
	className,
}: {
	text: string;
	className?: string;
}) {
	return (
		<div className={`my-2 w-full flex ${className}`}>
			<p className="bg-sec px-6 py-3 rounded-full max-w-[35%]">{text}</p>
		</div>
	);
}

export default function ChatBubbles({
	userID,
	texts,
	className,
}: {
	userID: string;
	texts: {
		userId: string;
		message: string;
	}[];
	className?: string;
}) {
	return (
		<div className={className}>
			{texts.length > 0 ? (
				texts.map((signedMessage, idx) => (
					<ChatBubble
						key={idx}
						text={signedMessage.message}
						className={
							signedMessage.userId === userID
								? "justify-end"
								: "justify-start"
						}
					/>
				))
			) : (
				<p className="text-center text-gray-500">No messages yet</p> // Placeholder for empty state
			)}
		</div>
	);
}
