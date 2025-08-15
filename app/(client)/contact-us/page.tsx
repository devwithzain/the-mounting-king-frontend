import { Metadata } from "next";
import { Badal } from "@/components/client";
import { ContactForm, ContactHero } from "@/container";

export const metadata: Metadata = {
	title: "Get in Touch | Expert TV Mounting Services by The Mounting King",
	description:
		"Need TV mounting services? Contact The Mounting King for expert installation and support. Get in touch today for a seamless TV mounting experience!",
};

export default function ContactPage() {
	return (
		<>
			<>
				<ContactHero />
				<ContactForm />
				<div className="py-10">
					<Badal />
				</div>
			</>
		</>
	);
}
