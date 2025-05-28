import Image from "next/image";
import { Metadata } from "next";
import { aboutBg } from "@/public";
import { Footer } from "@/components/client";
import { ServiceHero, ServicesServices } from "@/container";

export const metadata: Metadata = {
	title: "Services - The Mounting King",
	description: "Services - The Mounting King",
};

export default function Services() {
	return (
		<div className="w-full h-full relative overflow-x-hidden">
			<Image
				src={aboutBg}
				alt="bg"
				className="w-full h-full object-cover absolute top-0 left-0 z-0"
			/>
			<ServiceHero />
			<ServicesServices />
			<Footer />
		</div>
	);
}
