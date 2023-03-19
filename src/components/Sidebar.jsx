import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineSlowMotionVideo, MdSubscriptions } from "react-icons/md";
import { BsFire, BsMusicNote } from "react-icons/bs";
import { IoGameController, IoTrophy } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
	const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

	return (
		isMenuOpen && (
			<div className="pl-6 pb-4 flex flex-col gap-4 absolute md:static rounded-lg md:rounded-none shadow-lg md:shadow-none bg-white">
				<ul className="flex flex-col gap-2">
					<li>
						<Link to="/">
							<div className="flex gap-2 items-center hover:bg-slate-300 rounded-lg px-2 py-1 cursor-pointer">
								<span className="text-xl">
									<AiFillHome />
								</span>
								Home
							</div>
						</Link>
					</li>
					<li className="flex gap-2 items-center hover:bg-slate-300 rounded-lg px-2 py-1 cursor-pointer">
						<span className="text-xl">
							<MdOutlineSlowMotionVideo />
						</span>
						Shorts
					</li>
					<li className="flex gap-2 items-center hover:bg-slate-300 rounded-lg px-2 py-1 cursor-pointer">
						<span className="text-xl">
							<MdSubscriptions />
						</span>
						Subscriptions
					</li>
				</ul>

				<span className="border border-gray-400"></span>

				<ul className="flex flex-col gap-2">
					<li className="flex gap-2 items-center hover:bg-slate-300 rounded-lg px-2 py-1 cursor-pointer">
						<span className="text-xl">
							<BsFire />
						</span>
						Trending
					</li>
					<li className="flex gap-2 items-center hover:bg-slate-300 rounded-lg px-2 py-1 cursor-pointer">
						<span className="text-xl">
							<BsMusicNote />
						</span>
						Music
					</li>
					<li className="flex gap-2 items-center hover:bg-slate-300 rounded-lg px-2 py-1 cursor-pointer">
						<span className="text-xl">
							<IoGameController />
						</span>
						Gaming
					</li>
					<li className="flex gap-2 items-center hover:bg-slate-300 rounded-lg px-2 py-1 cursor-pointer">
						<span className="text-xl">
							<IoTrophy />
						</span>
						Sports
					</li>
				</ul>
			</div>
		)
	);
};

export default Sidebar;
