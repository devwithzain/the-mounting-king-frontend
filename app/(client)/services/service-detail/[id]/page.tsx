import { Metadata } from "next";
import { Badal } from "@/components/client";
import { ServiceDetailHero, ServiceDetailInfo } from "@/container";

export const metadata: Metadata = {
	title: "Expert TV Mounting Services | Secure & Hassle-Free Installation",
	description:
		"Explore our professional TV mounting services for homes & businesses. Safe and hassle-free installation by experts. ",
};

export default async function ServiceDetailPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	return (
		<>
			<ServiceDetailHero id={id} />
			<ServiceDetailInfo id={id} />
			<div className="py-10">
				<Badal />
			</div>
		</>
	);
}
