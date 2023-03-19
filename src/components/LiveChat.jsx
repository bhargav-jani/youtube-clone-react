import { useEffect, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
	const [liveMessage, setLiveMessage] = useState("");
	const dispatch = useDispatch();

	const chatMessages = useSelector((store) => store.chat.messages);

	useEffect(() => {
		const i = setInterval(() => {
			// API Polling

			dispatch(
				addMessage({
					name: generateRandomName(),
					message: makeRandomMessage(20) + " 🚀",
				})
			);
		}, 2000);

		return () => clearInterval(i);
	}, []);

	return (
		<div className="flex flex-col">
			<div className="w-full aspect-square p-2 border border-black bg-slate-100 rounded-t-lg overflow-y-scroll flex flex-col-reverse">
				<div>
					{chatMessages.map((c, i) => (
						<ChatMessage key={i} name={c.name} message={c.message} />
					))}
				</div>
			</div>

			<form
				className="flex gap-2 items-center w-full p-2 border border-black rounded-b-lg"
				onSubmit={(e) => {
					e.preventDefault();

					dispatch(
						addMessage({
							name: "Guest User",
							message: liveMessage,
						})
					);
					setLiveMessage("");
				}}
			>
				<input
					className="w-11/12 px-1 border-b border-stone-900 outline-none"
					type="text"
					value={liveMessage}
					onChange={(e) => {
						setLiveMessage(e.target.value);
					}}
				/>
				<button className="text-2xl">
					<AiOutlineSend />
				</button>
			</form>
		</div>
	);
};
export default LiveChat;
