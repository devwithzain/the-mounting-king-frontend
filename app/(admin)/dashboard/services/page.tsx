import { Metadata } from "next";
import { prismadb } from "@/lib/prismadb";
import ServicesListings from "./components/services";

export const metadata: Metadata = {
	title: "The Mounting King - Admin Services",
	description: "The Mounting King Admin Services",
};

export default async function ServicesPage() {
	const services = await prismadb.services.findMany();

	const formatedServices = services.map((service) => ({
		id: service.id,
		title: service.title,
		description: service.description,
		short_description: service.short_description,
		image: service.image,
		created_at: service.created_at,
	}));

	return (
		<>
			<ServicesListings data={formatedServices} />
		</>
	);
}
