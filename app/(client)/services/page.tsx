import Image from "next/image";
import { Metadata } from "next";
import { aboutBg } from "@/public";
import { ServiceHero, ServicesServices } from "@/container";
import { prismadb } from "@/lib/prismadb";

export const metadata: Metadata = {
	title: "Services | The Mounting King",
	description: "Services | The Mounting King",
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
