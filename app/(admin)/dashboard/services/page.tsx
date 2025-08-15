import { Metadata } from "next";
import ServicesListings from "./components/services";

export const metadata: Metadata = {
	title: "The Mounting King - Admin Services",
	description: "The Mounting King Admin Services",
};

export default async function ServicesPage() {
	return (
		<>
			<ServicesListings />
		</>
	);
}
