import Image from "next/image";
import { Metadata } from "next";
import { aboutBg } from "@/public";
import { prismadb } from "@/lib/prismadb";
import { ServiceHero, ServicesServices } from "@/container";

export const metadata: Metadata = {
	title: "Expert TV Mounting Services | Secure & Hassle-Free Installation",
	description:
		"Explore our professional TV mounting services for homes & businesses. Safe and hassle-free installation by experts. ",
};

export default async function Services() {
	const services = await prismadb.services.findMany();
	return (
		<div className="w-full h-full relative overflow-x-hidden">
			<Image
				src={aboutBg}
				alt="bg"
				className="w-full h-full object-cover absolute top-0 left-0 z-0"
			/>
			<ServiceHero />
			<ServicesServices services={services} />
		</div>
	);
}
