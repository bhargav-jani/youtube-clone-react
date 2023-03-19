import React from "react";

const FilterList = () => {
	const filterList = [
		"All",
		"Gaming",
		"Sports",
		"News",
		"Entertainment",
		"Programming",
	];

	return (
		<div className="flex gap-2 overflow-auto scrollbar-hide">
			{filterList.map((filterItem, index) => (
				<button key={index} className="px-2 py-1 bg-gray-200 rounded-md">
					{filterItem}
				</button>
			))}
		</div>
	);
};

export default FilterList;
