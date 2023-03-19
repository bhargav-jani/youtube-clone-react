import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoPersonCircle } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { BsBell } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";
import logo from "../images/youtube-logo.svg";

const Head = () => {
	const [searchQuery, setsearchQuery] = useState("");
	const [isMobileSearchVisible, setIsMobileSearchVisible] = useState(false);
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

	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	};

	return (
		<div className="flex justify-between w-[95%] mx-auto py-4 items-center">
			<div className="flex gap-2">
				<button className="text-2xl" onClick={toggleMenuHandler}>
					<AiOutlineMenu className="w-12" />
				</button>

				<a href="/" className="flex gap-1 items-center w-12">
					<img src={logo} alt="logo" />
					<h2 className="hidden md:block">Youtube</h2>
				</a>
			</div>

			<div className="w-1/2 relative">
				<div className="hidden md:flex">
					<input
						className="border border-gray-400 px-3 py-1.5 w-9/12 rounded-l-full outline-none"
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
				{isMobileSearchVisible && (
					<div className="flex md:hidden">
						<input
							className="border border-gray-400 px-3 py-0.5 w-9/12 rounded-l-full outline-none"
							type="text"
							value={searchQuery}
							onChange={(e) => setsearchQuery(e.target.value)}
							onBlur={() => setSearchSuggestions([])}
							placeholder="Search..."
						/>
						<button className="bg-gray-200 px-3 py-0.5 border border-gray-400 border-l-0 rounded-r-full">
							<CiSearch />
						</button>
					</div>
				)}
				{searchSuggestions.length > 0 && (
					<div className={"absolute bg-white w-9/12 rounded-lg border border-gray-100 overflow-hidden z-10"}>
						<ul >
							{searchSuggestions.map((searchSuggestion) => (
								<li
									key={searchSuggestion}
									className="cursor-pointer py-1 px-4 shadow-sm hover:bg-gray-200 "
								>
								{searchSuggestion}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>

			{isMobileSearchVisible ? (
				<button
					className="text-2xl md:hidden"
					onClick={() => setIsMobileSearchVisible(false)}
				>
					<MdClose />
				</button>
			) : (
				<div className="flex gap-5">
					<button
						className="text-2xl md:hidden"
						onClick={() => setIsMobileSearchVisible(true)}
					>
						<CiSearch />
					</button>
					<button className="text-2xl">
						<BsBell />
					</button>
					<button className="text-3xl">
						<IoPersonCircle />
					</button>
				</div>
			)}
		</div>
	);
};

export default Head;
