import Image from "next/image";
import { Metadata } from "next";
import { ThankYou } from "@/container";
import { heroBackground } from "@/public";

export const metadata: Metadata = {
	title: "ThankYou - The Mounting King",
	description: "ThankYou - The Mounting King",
};

export default function ThankYouPage() {
	return (
		<div className="w-full h-full relative overflow-x-hidden">
			<Image
				src={heroBackground}
				alt="bg"
				className="w-full h-full object-cover absolute top-0 left-0 -z-10"
			/>
			<ThankYou />
		</div>
	);
}
