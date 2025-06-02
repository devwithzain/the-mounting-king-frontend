import Image from "next/image";
import { Metadata } from "next";
import { heroBackground } from "@/public";
import { Appointment } from "@/components/client";

export const metadata: Metadata = {
	title: "Request A TV Mounting Demo | See Our Experts in Action",
	description:
		"Want to see how our TV mounting services work? Request a demo today and experience secure, expert installation for your home entertainment setup.",
};

export default function BookNowPage() {
	return (
		<>
			<div className="w-full h-full relative overflow-x-hidden">
				<Image
					src={heroBackground}
					alt="bg"
					className="w-full h-full object-cover absolute top-0 left-0 z-0"
				/>
				<Appointment />
			</div>
		</>
	);
}
