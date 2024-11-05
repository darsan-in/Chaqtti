import ChatBubbles from "./chat-bubbles";
import ChatInput from "./chat-input";
import Sidebar from "./sidebar";

const sampleTexts = [
	"hello",
	"yeah, tell me",
	"nothing",
	"nothing?",
	"hello",
	"yeah, tell me",
	"nothing",
	"nothing?",
	"hello",
	"yeah, tell me",
	"nothing",
	"nothing?",
];

export default function ChatUI() {
	return (
		<section className="flex h-[88vh]">
			<Sidebar />
			<div className="flex w-[74%] m-2 relative">
				<ChatBubbles
					texts={sampleTexts}
					className="w-full h-[80%] mx-10 pt-10 overflow-y-scroll border-b"
				/>
				<ChatInput />
			</div>
		</section>
	);
}
