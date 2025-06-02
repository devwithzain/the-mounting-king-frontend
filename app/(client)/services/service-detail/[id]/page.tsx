import Image from "next/image";
import { Metadata } from "next";
import { aboutBg } from "@/public";
import { prismadb } from "@/lib/prismadb";
import { ServiceDetailHero, ServiceDetailInfo } from "@/container";

export const metadata: Metadata = {
	title: "Service Detail | The Mounting King",
	description: "Service Detail | The Mounting King",
};

export default async function ServiceDetailPage({
	params,
}: {
	params: Promise<{ id: bigint }>;
}) {
	const { id } = await params;
	const service = await prismadb.services.findUnique({
		where: {
			id: id,
		},
	});

	return (
		<div className="w-full h-full relative overflow-x-hidden">
			<Image
				src={aboutBg}
				alt="bg"
				className="w-full h-full object-cover absolute top-0 left-0 z-0"
			/>
			<ServiceDetailHero service={service} />
			<ServiceDetailInfo service={service} />
		</div>
	);
}
