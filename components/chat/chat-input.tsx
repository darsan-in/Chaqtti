export default function ChatInput({ className }: { className?: string }) {
	return (
		<div className={className}>
			<input
				type="text"
				className="w-[70%] outline-none border ring-primary focus:ring-1 shadow-sm rounded-full duration-200 px-6 text-start"
				placeholder="Type your message here"
			/>
			<button className="bg-primary text-white font-medium px-5 py-2 rounded-full">
				Send
			</button>
		</div>
	);
}
