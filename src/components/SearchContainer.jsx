import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";
import SearchSuggestions from "./SearchSuggestions";

const SearchContainer = () => {
	const [searchQuery, setsearchQuery] = useState("");
	const [searchSuggestions, setSearchSuggestions] = useState([]);

	const searchSuggestionCache = useSelector((store) => store.search);
	const dispatch = useDispatch();

	useEffect(() => {
		const timer = setTimeout(() => {
			if (searchSuggestionCache[searchQuery]) {
				setSearchSuggestions(searchSuggestionCache[searchQuery]);
			} else {
				getSearchSuggestions();
			}
		}, 300);
        
		return () => {
			clearTimeout(timer);
		};
	}, [searchQuery]);

	const getSearchSuggestions = async () => {
		const data = await fetch(
			process.env.REACT_APP_YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery
		);
		const jsonData = await data.json();
		setSearchSuggestions(jsonData[1]);

		// update cache
		dispatch(
			cacheResults({
				[searchQuery]: jsonData[1],
			})
		);
	};

	return (
		<div >
			<div className="flex">
				<input
					className="border border-gray-400 px-3 py-1.5 w-5/6 md:w-9/12 rounded-l-full outline-none"
					type="text"
					value={searchQuery}
					onChange={(e) => setsearchQuery(e.target.value)}
					onBlur={() => setSearchSuggestions([])}
					placeholder="Search..."
				/>
				<button className="bg-gray-200 px-3 py-1 border border-gray-400 border-l-0 rounded-r-full">
					<CiSearch />
				</button>
			</div>
			{searchSuggestions.length > 0 && <SearchSuggestions searchSuggestions={searchSuggestions}/>}
		</div>
	);
};

export default SearchContainer;
