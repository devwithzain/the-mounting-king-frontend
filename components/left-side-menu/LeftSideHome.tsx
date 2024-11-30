"use client";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { navLogo } from "@/public";

export default function LeftSideHome() {
	const pathname = usePathname();
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (isActive) setIsActive(false);
	}, [pathname]);

	return (
		<>
			<div className="p-[20px] fixed right-0 z-[999] w-full flex items-center justify-between gap-3">
				<Link href="/">
					<Image
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
