const Comment = ({ data }) => {
	const { name, text } = data;
	return (
		<div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
			<img
				className="w-8 h-8 md:w-12 md:h-12"
				alt="user"
				src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
			/>
			<div className="px-1 md:px-3">
				<p className="font-bold">{name}</p>
				<p className="text-sm md:text-base">{text}</p>
			</div>
		</div>
	);
};

export default Comment;
