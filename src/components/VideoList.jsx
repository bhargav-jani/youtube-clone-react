import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const VideoList = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		getVideos();
	}, []);

	const getVideos = async () => {
		const data = await fetch(process.env.REACT_APP_YOUTUBE_API+process.env.REACT_APP_API_KEY);
		const json = await data.json();

		setVideos(json.items);
	};

	if (videos.length === 0) return null;

	return (
		<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
			{videos.map((video) => (
				<Link key={video.id} to={"/watch?v=" + video.id}>
					<VideoCard videoCardInfo={video} />
				</Link>
			))}
		</div>
	);
};

export default VideoList;
