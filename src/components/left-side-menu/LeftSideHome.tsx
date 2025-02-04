import Navbar from "./Navbar.tsx";
import { navLogo } from "../../assets/index.ts";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function LeftSideHome() {
	const pathname = useLocation();
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (isActive) setIsActive(false);
	}, [pathname]);

	return (
		<>
			<div className="p-[20px] fixed right-0 z-[999] w-full flex items-center justify-between gap-3">
				<Link to="/">
					<img
						src={navLogo}
						alt="navLogo"
						width={200}
						height={200}
						className="w-[100px] object-cover"
					/>
				</Link>
				<div
					onClick={() => {
						setIsActive(!isActive);
					}}
					className="w-[45px] h-[45px] rounded-full bg-[#F99A03] cursor-pointer flex items-center justify-center relative">
					<div
						className={`w-[50%] h-[2px] bg-white absolute ${
							!isActive && "top-[45%]"
						} transform -translate-x-1/2 -translate-y-1/2`}
						style={{
							transform: isActive ? "rotate(45deg)" : "none",
							transition: "transform 0.3s",
						}}
					/>
					<div
						className={`w-[50%] h-[2px] bg-white absolute ${
							!isActive && "top-[55%]"
						} transform -translate-x-1/2 -translate-y-1/2`}
						style={{
							transform: isActive ? "rotate(-45deg)" : "none",
							transition: "transform 0.3s",
						}}
					/>
				</div>
			</div>
			<AnimatePresence mode="wait">{isActive && <Navbar />}</AnimatePresence>
		</>
	);
}
