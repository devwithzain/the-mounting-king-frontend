"use client";
import Link from "next/link";
import Image from "next/image";
import { navLogo } from "@/public";
import { motion } from "framer-motion";
import { navVarients } from "@/motion";
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
		<>
			<motion.div
				initial="initial"
				whileInView="vissible"
				viewport={{ once: true }}
				variants={navVarients}
				className="w-full flex items-center justify-between gap-5 padding-x py-3 absolute top-0 z-[999]">
				<Link href="/">
					<Image
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
						className={`bg-[#F99A03] btn transition-all duration-300 ease-in-out text-white px-6 py-3 rounded-lg text-[20px] font-Monstrate leading-tight tracking-tight ${
							pathname === "/contact-us" ? "text-[#F99A03]" : "text-black"
						}`}
						href="/contact-us">
						Contact Us
					</Link>
				</div>
			</motion.div>
		</>
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
			className="relative z-10 block cursor-pointer text-[18px] font-Monstrate leading-tight tracking-tight p-2 text-black group">
			<Link
				href={href}
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
