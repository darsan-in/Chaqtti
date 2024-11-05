function ChatBubble({
	text,
	className,
}: {
	text: string;
	className?: string;
}) {
	return (
		<div className={"w-full flex " + className}>
			<p className={"bg-sec px-6 py-3 rounded-full max-w-[35%]"}>{text}</p>
		</div>
	);
}

export default function ChatBubbles({
	texts,
	className,
}: {
	texts: string[];
	className?: string;
}) {
	return (
		<div className={" " + className}>
			{texts.map((text, idx) => {
				return (
					<ChatBubble
						text={text}
						key={idx}
						className={
							(idx + 1) % 2 === 0 ? "justify-start" : "justify-end"
						}
					/>
				);
			})}
		</div>
	);
}
