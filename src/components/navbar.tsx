import UserMenu from "./UserMenu.tsx";
import { motion } from "framer-motion";
import { navLogo } from "../assets/index.ts";
import { IoCartOutline } from "react-icons/io5";
import { navVarients } from "../motion/index.ts";
import { getToken } from "../utils/get-token.ts";
import { TpositionProps } from "../types/index.ts";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import LeftSideHome from "./left-side-menu/LeftSideHome.tsx";

export default function Navbar() {
	const token = getToken();
	const { pathname } = useLocation();
	const [cartItems, setCartItems] = useState<any[]>([]);
	const [position, setPosition] = useState<TpositionProps>({
		left: 0,
		width: 0,
		opacity: 0,
	});
	useEffect(() => {
		const fetchCartItems = async () => {
			try {
				const response = await fetch(
					`https://themountingking.com/backend/api/cart`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					},
				);
				const data = await response.json();
				setCartItems(data);
			} catch (error: unknown) {
				if (error instanceof Error) {
					console.log(error.message);
				} else {
					console.log("An unknown error occurred");
				}
			}
		};
		fetchCartItems();
	}, [token]);

	return (
		<>
			<motion.div
				initial="initial"
				whileInView="vissible"
				viewport={{ once: true }}
				variants={navVarients}
				className="w-full flex items-center justify-between gap-5 padding-x py-2 absolute top-0 z-[999] sm:hidden xm:hidden md:hidden">
				<Link to="/">
					<img
						src={navLogo}
						alt="navLogo"
						width={200}
						height={200}
						className="w-[150px] object-cover"
					/>
				</Link>
				<ul
					onMouseLeave={() => setPosition((prev) => ({ ...prev, opacity: 0 }))}
					className="relative flex items-center gap-5 bg-white/60 backdrop-blur-[15px] rounded-lg p-2">
					<Tab
						setPosition={setPosition}
						to="/"
						isActive={pathname === "/"}>
						Home
					</Tab>
					<Tab
						setPosition={setPosition}
						to="/services"
						isActive={
							pathname === "/services" || pathname === "/service-detail"
						}>
						Services
					</Tab>
					<Tab
						setPosition={setPosition}
						to="/about"
						isActive={pathname === "/about"}>
						About
					</Tab>
					{/* <Tab
						setPosition={setPosition}
						to="/products"
						isActive={
							pathname === "/products" || pathname === "/product-detail"
						}>
						Products
					</Tab> */}
					<Tab
						setPosition={setPosition}
						to="/book-now"
						isActive={
							pathname === "/book-now" || pathname === "/book-now/services"
						}>
						Book Now
					</Tab>

					<Cursor position={position} />
				</ul>
				<div className="flex items-center gap-2">
					<Link
						to="/cart"
						className="bg-[#F99A03] px-4 py-2 relative rounded-lg text-white">
						<span className="absolute right-3 top-1 px-[5px] py-[2px] text-white font-Monstrate rounded-full bg-black text-[8px]">
							{cartItems.length}
						</span>
						<IoCartOutline size={30} />
					</Link>
					<Link
						className={`bg-[#F99A03] btn transition-all duration-300 ease-in-out text-white px-6 py-3 rounded-lg text-[20px] font-Monstrate leading-tight tracking-tight ${
							pathname === "/contact-us" ? "text-[#F99A03]" : "text-black"
						}`}
						to="/contact-us">
						Contact Us
					</Link>
					<UserMenu />
				</div>
			</motion.div>
			<div className="sm:!flex xm:!flex md:!flex hidden">
				<LeftSideHome />
			</div>
		</>
	);
}

const Tab = ({
	children,
	to,
	setPosition,
	isActive,
}: {
	children: string;
	to: string;
	setPosition: React.Dispatch<React.SetStateAction<TpositionProps>>;
	isActive: boolean;
}) => {
	const ref = useRef<null | HTMLLIElement>(null);

	return (
		<li
			ref={ref}
			onMouseEnter={() => {
				if (!ref?.current) return;

				const { width } = ref.current.getBoundingClientRect();

				setPosition({
					left: ref.current.offsetLeft,
					width,
					opacity: 1,
				});
			}}
			className="relative z-10 block cursor-pointer text-[18px] font-Monstrate leading-tight tracking-tight p-2 text-black group">
			<Link
				to={to}
				className={`relative z-20 px-3 py-2 transition-all duration-300 ease-in-out ${
					isActive ? "text-[#F99A03]" : "text-black"
				} group-hover:text-white group-hover:bg-black rounded-full`}>
				{children}
			</Link>
		</li>
	);
};

const Cursor = ({ position }: { position: TpositionProps }) => {
	return (
		<motion.li
			animate={{
				...position,
			}}
			className="absolute z-0 h-10 rounded-full bg-black"
		/>
	);
};
