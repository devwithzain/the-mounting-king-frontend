"use client";
import Link from "next/link";
import Image from "next/image";
import { navLogo } from "@/public";
import { motion } from "framer-motion";
import { TpositionProps } from "@/types";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const pathname = usePathname();
	const [position, setPosition] = useState<TpositionProps>({
		left: 0,
		width: 0,
		opacity: 0,
	});

	return (
		<div className="w-full flex items-center justify-between gap-5 px-10 py-3 absolute top-0 z-[999]">
			<div>
				<Image
					src={navLogo}
					alt="navLogo"
					width={150}
					height={150}
				/>
			</div>
			<ul
				onMouseLeave={() => setPosition((prev) => ({ ...prev, opacity: 0 }))}
				className="relative flex items-center gap-5 bg-white/60 backdrop-blur-[15px] rounded-lg p-2">
				<Tab
					setPosition={setPosition}
					href="/"
					isActive={pathname === "/"}>
					Home
				</Tab>
				<Tab
					setPosition={setPosition}
					href="/services"
					isActive={pathname === "/services"}>
					Services
				</Tab>
				<Tab
					setPosition={setPosition}
					href="/about"
					isActive={pathname === "/about"}>
					About
				</Tab>
				<Tab
					setPosition={setPosition}
					href="/request-a-demo"
					isActive={pathname === "/request-a-demo"}>
					Request A Demo
				</Tab>

				<Cursor position={position} />
			</ul>
			<div>
				<Link
					className={`bg-[#F99A03] text-white px-6 py-4 rounded-lg text-[20px] font-Monstrate leading-tight tracking-tight ${
						pathname === "/contact-us" ? "text-[#F99A03]" : "text-black"
					}`}
					href="/contact-us">
					Contact Us
				</Link>
			</div>
		</div>
	);
}

const Tab = ({
	children,
	href,
	setPosition,
	isActive,
}: {
	children: string;
	href: string;
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
			className="relative z-10 block cursor-pointer text-[20px] font-Monstrate uppercase leading-tight tracking-tight p-3 text-black group">
			<Link
				href={href}
				className={`relative z-20 px-3 py-1 transition-all duration-300 ease-in-out ${
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
			className="absolute z-0 h-7 rounded-full bg-black md:h-12"
		/>
	);
};
