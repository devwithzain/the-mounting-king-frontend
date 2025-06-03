"use client";
import Link from "next/link";
import Image from "next/image";
import { footerLogo } from "@/public";
import { LeftSideHome, UserMenu } from "@/components/client";

export default function Navbar() {
	return (
		<div className="w-full flex items-center justify-between padding-x py-4 absolute z-[9999] top-0 left-0">
			<Link
				href="/"
				className="">
				<Image
					src={footerLogo}
					alt="footerLogo"
					className="w-[180px] lg:w-[150px] md:w-[100px] xm:w-[80px] sm:w-[80px] object-cover"
				/>
			</Link>
			<div className="flex items-start gap-2">
				<UserMenu />
				<LeftSideHome />
			</div>
		</div>
	);
}
