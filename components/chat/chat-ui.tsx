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
		<section className="flex h-[88vh] overflow-y-hidden">
			<Sidebar />
			<div className="flex w-full h-[96%] md:w-[74%] m-2 relative">
				<ChatBubbles
					texts={sampleTexts}
					className="w-full h-[80%] mx-4 lg:mx-10 pt-10 overflow-y-scroll"
				/>
				<ChatInput className="border-t pt-3 bg-white flex absolute bottom-1 w-[100%] space-x-4 justify-center" />
			</div>
		</section>
	);
}
