import { Metadata } from "next";
import { Badal } from "@/components/client";
import { ServiceHero, ServicesServices } from "@/container";

export const metadata: Metadata = {
	title: "Expert TV Mounting Services | Secure & Hassle-Free Installation",
	description:
		"Explore our professional TV mounting services for homes & businesses. Safe and hassle-free installation by experts.",
};

export default async function Services() {
	return (
		<>
			<ServiceHero />
			<ServicesServices />
			<div className="py-10">
				<Badal />
			</div>
		</>
	);
}
