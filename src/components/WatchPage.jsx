import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
	let [searchParams] = useSearchParams();

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(closeMenu());
	});

	return (
		<div className="flex flex-col gap-4 w-11/12 md:w-5/6 mx-auto">
			<div className="grid md:grid-cols-3 gap-2">
				<iframe
					className="md:col-span-2 w-full aspect-video"
					src={"https://www.youtube.com/embed/" + searchParams.get("v")}
					title="UFC 205: Conor McGregor Octagon Interview"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
				<LiveChat />
			</div>
			<CommentsContainer />
		</div>

	);
};

export default WatchPage;
