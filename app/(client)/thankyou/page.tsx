import Image from "next/image";
import { Metadata } from "next";
import { Suspense } from "react";
import { ThankYou } from "@/container";
import { heroBackground } from "@/public";

export const metadata: Metadata = {
	title: "Thank You | The Mounting King",
	description: "Thank You | The Mounting King",
};

export default function ThankYouPage() {
	return (
		<div className="w-full h-full relative overflow-x-hidden">
			<Image
				src={heroBackground}
				alt="bg"
				className="w-full h-full object-cover absolute top-0 left-0 -z-10"
			/>
			<Suspense
				fallback={
					<div className="w-full h-full flex items-center justify-center">
						Loading...
					</div>
				}>
				<ThankYou />
			</Suspense>
		</div>
	);
}
