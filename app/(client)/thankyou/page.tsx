import { Metadata } from "next";
import { Suspense } from "react";
import { ThankYou } from "@/container";

export const metadata: Metadata = {
	title: "ThankYou - The Mounting King",
	description: "ThankYou - The Mounting King",
};

export default function ThankYouPage() {
	return (
		<div className="w-full h-full relative overflow-x-hidden">
			<Suspense fallback={"Loading..."}>
				<ThankYou />
			</Suspense>
		</div>
	);
}
