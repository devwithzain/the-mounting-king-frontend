import Image from "next/image";
import { Metadata } from "next";
import { aboutBg } from "@/public";
import { Footer } from "@/components/client";
import { ContactForm, ContactHero } from "@/container";

export const metadata: Metadata = {
	title: "Contact Us - The Mounting King",
	description: "Contact Us - The Mounting King",
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
				<Footer />
			</div>
		</>
	);
}
