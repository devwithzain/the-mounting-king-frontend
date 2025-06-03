import { Metadata } from "next";
import { prismadb } from "@/lib/prismadb";
import RequestADemoListings from "./components/request-a-demo";

export const metadata: Metadata = {
	title: "Request A Demo | The Mounting King Admin Dashboard",
	description: "RequestADemo | The Mounting King Admin Dashboard",
};

export default async function RequestADemoPage() {
	const reqServices = await prismadb.request_services.findMany({
		include: {
			request_services_steps: true,
		},
		orderBy: {
			created_at: "desc",
		},
	});

	const formatedRequest = reqServices.map((reqService) => ({
		id: reqService.id,
		service_title: reqService.service_title,
		service_description: reqService.service_description,
		request_services_steps: reqService.request_services_steps.map((step) => ({
			step_title: step.step_title,
			step_description: step.step_description,
		})),
		created_at: reqService.created_at,
	}));

	return (
		<>
			<RequestADemoListings data={formatedRequest} />
		</>
	);
}
