import { bg } from "@/public";
import Image from "next/image";
import { Metadata } from "next";
import { HomeAbout, HomeHero, HomeServices } from "@/container";

export const metadata: Metadata = {
	title: "Affordables TV Mounting Services for Your Home Today",
	description:
		"Experience seamless TV mounting services with our professionals. Satisfaction is guaranteed! Get your perfect setup today!",
};

export default function Home() {
	return (
		<div className="w-full h-full relative">
			<Image
				src={bg}
				alt="bg"
				className="w-full h-full object-cover absolute top-0 left-0 z-0"
			/>
			<HomeHero />
			<HomeAbout />
			<HomeServices />
		</div>
	);
}
