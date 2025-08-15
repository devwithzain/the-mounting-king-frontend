import { Metadata } from "next";
import { Badal } from "@/components/client";
import { AboutHero, AboutServices } from "@/container";

export const metadata: Metadata = {
	title: "About The Mounting King | Expert TV Mounting Services",
	description:
		"Learn about The Mounting King, your go-to experts for TV mounting services. Quality, reliability, and customer satisfaction are our top priorities.",
};

export default function About() {
	return (
		<>
			<AboutHero />
			<AboutServices />
			<div className="py-10">
				<Badal />
			</div>
		</>
	);
}
