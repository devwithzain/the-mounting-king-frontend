"use client";
import Link from "next/link";
import Image from "next/image";
import { footerLogo } from "@/public";
import { getToken } from "@/lib/get-token";
import { IoCartOutline } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { LeftSideHome, UserMenu } from "@/components/client";

export default function Navbar() {
	const token = getToken("authToken");
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		const fetchCartItems = async () => {
			try {
				const response = await fetch(
					`https://api.themountingking.com/api/cart`,
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
				<Link
					href="/cart"
					className="bg-[#F99A03] px-4 py-2 relative rounded-lg text-white">
					<span className="absolute right-3 top-1 px-[5px] py-[2px] text-white font-Monstrate rounded-full bg-black text-[8px]">
						{cartItems.length}
					</span>
					<IoCartOutline size={30} />
				</Link>
				<UserMenu />
				<LeftSideHome />
			</div>
		</div>
	);
}
