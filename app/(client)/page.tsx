import { Metadata } from "next";
import { Badal } from "@/components/client";
import { HomeAbout, HomeHero, HomeServices } from "@/container";

export const metadata: Metadata = {
	title: "Affordable TV Mounting Services for Your Home Today",
	description:
		"Experience seamless TV mounting services with our professionals. Satisfaction is guaranteed! Get your perfect setup today!",
};

export default function Home() {
	return (
		<>
			<HomeHero />
			<HomeAbout />
			<HomeServices />
			<div className="py-10">
				<Badal />
			</div>
		</>
	);
}
