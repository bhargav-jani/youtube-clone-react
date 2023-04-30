import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoPersonCircle } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { BsBell } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import logo from "../images/youtube-logo.svg";
import { Link } from "react-router-dom";
import SearchContainer from "./SearchContainer";

const Head = () => {
	const [isMobileSearchVisible, setIsMobileSearchVisible] = useState(false);
	const dispatch = useDispatch();

	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	};

	return (
		<div className="flex justify-between w-[95%] mx-auto py-4 items-center relative">
			<div className="flex gap-2">
				<button className="text-2xl" onClick={toggleMenuHandler}>
					<AiOutlineMenu className="w-12" />
				</button>

				<Link to="/" className="flex gap-1 items-center w-12">
					<img src={logo} alt="logo" />
					<h2 className="hidden md:block">Youtube</h2>
				</Link>
			</div>

			<div
				className={
					isMobileSearchVisible
						? "w-full absolute md:hidden"
						: "w-1/2 relative hidden md:block"
				}
			>
				<SearchContainer />
			</div>

			{isMobileSearchVisible ? (
				<button
					className="text-2xl md:hidden z-10 text-gray-500"
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
