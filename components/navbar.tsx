"use client";
import Link from "next/link";
import Image from "next/image";
import { navLogo } from "@/public";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const pathname = usePathname();
	return (
		<div className="w-full flex items-center justify-between gap-5 px-10 py-5 absolute top-0 z-50">
			<div>
				<Image
					src={navLogo}
					alt="navLogo"
					width={150}
					height={150}
				/>
			</div>
			<div className="flex items-center gap-5 bg-white/60 backdrop-blur-[15px] rounded-lg p-4">
				<Link
					href="/"
					className={`text-[20px] font-Monstrate leading-tight tracking-tight ${
						pathname == "/" ? "text-[#F99A03]" : "text-black"
					}`}>
					Home
				</Link>
				<Link
					className={`text-[20px] font-Monstrate leading-tight tracking-tight ${
						pathname == "/services" ? "text-[#F99A03]" : "text-black"
					}`}
					href="/services">
					Services
				</Link>
				<Link
					className={`text-[20px] font-Monstrate leading-tight tracking-tight ${
						pathname == "/about" ? "text-[#F99A03]" : "text-black"
					}`}
					href="/about">
					About
				</Link>
				<Link
					className={`text-[20px] font-Monstrate leading-tight tracking-tight ${
						pathname == "/request-a-demo" ? "text-[#F99A03]" : "text-black"
					}`}
					href="/request-a-demo">
					Request A Demo
				</Link>
			</div>
			<div>
				<Link
					className={`bg-[#F99A03] text-white px-6 py-4 rounded-lg text-[20px] font-Monstrate leading-tight tracking-tight ${
						pathname == "/contact-us" ? "text-[#F99A03]" : "text-black"
					}`}
					href="/contact-us">
					Contact Us
				</Link>
			</div>
		</div>
	);
}
