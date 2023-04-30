import React from "react";
import { commentsData } from "../utils/constants";
import CommentsList from "./CommentList";

const CommentsContainer = () => {
	return (
		<div>
			<h1 className="text-2xl font-bold">Comments: </h1>
			<CommentsList comments={commentsData} />
		</div>
	);
};

export default CommentsContainer;
