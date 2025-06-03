import Image from "next/image";
import { Metadata } from "next";
import { aboutBg } from "@/public";
import { AboutHero, AboutServices } from "@/container";

export const metadata: Metadata = {
	title: "About The Mounting King | Expert TV Mounting Services",
	description:
		"Learn about The Mounting King, your go-to experts for TV mounting services. Quality, reliability, and customer satisfaction are our top priorities.",
};

export default function About() {
	return (
		<>
			<div className="w-full h-full relative overflow-x-hidden">
				<Image
					src={aboutBg}
					alt="bg"
					className="w-full h-full object-cover absolute top-0 left-0 z-0"
				/>
				<AboutHero />
				<AboutServices />
			</div>
		</>
	);
}
