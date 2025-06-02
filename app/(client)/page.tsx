import { bg } from "@/public";
import Image from "next/image";
import { HomeAbout, HomeHero, HomeServices } from "@/container";

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
