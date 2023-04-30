import React from "react";

const SearchSuggestions = ({ searchSuggestions }) => {
	const handleClick = () => {
		console.log("click");
	};
	return (
		<div
			className={
				"absolute bg-white w-10/12 md:w-9/12 rounded-lg border border-gray-100 overflow-hidden z-10"
			}
		>
			<ul>
				{searchSuggestions?.map((searchSuggestion) => (
					<li
						key={searchSuggestion}
						className="cursor-pointer py-1 px-4 shadow-sm hover:bg-gray-200 "
						onClick={() => handleClick()}
					>
						{searchSuggestion}
					</li>
				))}
			</ul>
		</div>
	);
};

export default SearchSuggestions;
