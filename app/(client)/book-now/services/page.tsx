import { Metadata } from "next";
import { RequestServices } from "@/container";
import { Badal } from "@/components/client";

export const metadata: Metadata = {
	title: "Request A TV Mounting Demo | See Our Experts in Action",
	description:
		"Want to see how our TV mounting services work? Request a demo today and experience secure, expert installation for your home entertainment setup.",
};

export default function BookNowPage() {
	return (
		<>
			<RequestServices />
			<div className="py-10">
				<Badal />
			</div>
		</>
	);
}
