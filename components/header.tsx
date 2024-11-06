"use client";
import { useEffect, useState } from "react";
import UserProfile from "./user-profile";

export default function Header() {
	const [state, setState] = useState(false);

	useEffect(() => {
		document.onclick = (e) => {
			const target = e.target;
			/* @ts-ignore */
			if (!target.closest(".menu-btn")) setState(false);
		};
	}, []);

	const Brand = () => (
		<div className="flex items-center justify-between py-5 md:block">
			<a
				href="/"
				className={`text-2xl font-bold tracking-widest bg-lbg lg:text-white px-6 py-3 rounded-md ${
					state ? "text-primary bg-transparent" : "text-white"
				}`}>
				CHAQTTI
			</a>
			<div className="md:hidden">
				<button
					className={`menu-btn hover:text-gray-300 ${
						state ? "text-black" : "text-white"
					}`}
					onClick={() => setState(!state)}>
					{state ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							viewBox="0 0 20 20"
							fill="currentColor">
							<path
								fillRule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					)}
				</button>
			</div>
		</div>
	);

	return (
		<header className="border-b border-gray-300 rounded-b-md bg-primary">
			<div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
				<Brand />
			</div>
			<nav
				className={`md:text-sm ${
					state
						? "absolute z-20 top-0 inset-x-0 bg-white border rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent p-5 pb-10 md:p-0"
						: ""
				}`}>
				<div className="gap-x-14 items-center mx-auto px-4 md:flex md:pl-2">
					<Brand />
					<div
						className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
							state ? "block" : "hidden"
						} `}>
						<ul className="flex-1 mx-auto justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0 w-[90%] sm:w-[40%]">
							<li
								className={`md:text-white ${
									state ? "text-black" : "text-white"
								}`}>
								<a href="/search">Find Users</a>
							</li>
							<UserProfile mobMenuActive={state} />
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
