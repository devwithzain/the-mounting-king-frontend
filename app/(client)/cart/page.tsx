import Image from "next/image";
import { Metadata } from "next";
import { Cart } from "@/container";
import { heroBackground } from "@/public";
import { Footer } from "@/components/client";

export const metadata: Metadata = {
	title: "Your Shopping Cart",
	description: "Your Shopping Cart",
};

export default function CartPage() {
	return (
		<div className="w-full h-full relative overflow-x-hidden">
			<Image
				src={heroBackground}
				alt="bg"
				className="w-full h-full object-cover absolute top-0 left-0 -z-10"
			/>
			<Cart />
			<Footer />
		</div>
	);
}
