import React from "react";

const VideoCard = ({ videoCardInfo }) => {
	const { snippet, statistics } = videoCardInfo;
	const { title, channelTitle, thumbnails } = snippet;

	return (
		<div className="flex flex-col gap-2  cursor-pointer">
			<img src={thumbnails.medium.url} alt="video thumbnail" className="rounded-lg overflow-hidden"/>
			<div className="flex flex-col px-2 pb-1">
				<h3 className="font-semibold line-clamp-2">{title}</h3>
				<h4 className="text-sm font-medium text-slate-600 mt-1">{channelTitle}</h4>
				<p className="text-xs">{statistics.viewCount} views</p>
			</div>
		</div>
	);
};

export default VideoCard;
