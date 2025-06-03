import Image from "next/image";
import { Metadata } from "next";
import { aboutBg } from "@/public";
import { ContactForm, ContactHero } from "@/container";

export const metadata: Metadata = {
	title: "Get in Touch | Expert TV Mounting Services by The Mounting King",
	description:
		"Need TV mounting services? Contact The Mounting King for expert installation and support. Get in touch today for a seamless TV mounting experience!",
};

export default function ContactPage() {
	return (
		<>
			<div className="w-full h-full relative overflow-x-hidden">
				<Image
					src={aboutBg}
					alt="bg"
					className="w-full h-full object-cover absolute top-0 left-0 z-0"
				/>
				<ContactHero />
				<ContactForm />
			</div>
		</>
	);
}
