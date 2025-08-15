import { Metadata } from "next";
import RequestADemoListings from "./components/request-a-demo";

export const metadata: Metadata = {
	title: "Request A Demo | The Mounting King Admin Dashboard",
	description: "RequestADemo | The Mounting King Admin Dashboard",
};

export default async function RequestADemoPage() {
	return (
		<>
			<RequestADemoListings />
		</>
	);
}
