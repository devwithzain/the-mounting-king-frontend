import { Metadata } from "next";
import RequestADemoListings from "./components/request-a-demo";

export const metadata: Metadata = {
	title: "The Mounting King - Admin RequestADemo",
	description: "The Mounting King Admin RequestADemo",
};

export default function RequestADemoPage() {
	return (
		<>
			<RequestADemoListings />
		</>
	);
}
