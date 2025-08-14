"use client";
import Image from "next/image";
import { aboutCrownR } from "@/public";
import { TservicesColumnProps } from "@/types";
import { Advantage, AnimatedText, RoundButton } from "@/components/client";

export default function ServiceDetailInfo({
	service,
}: {
	service: TservicesColumnProps;
}) {
	return (
		<div className="w-full padding-x relative padding-y flex flex-col gap-40 my-80 xm:gap-10 sm:gap-10 xm:my-10 sm:my-10 pt-10">
			<div className="w-full flex justify-between gap-10 relative xm:flex-col sm:flex-col mt-20">
				<div className="w-1/2 xm:w-full sm:w-full">
					<Image
						src={`https://themountingking.com/backend/public/${service?.image}`}
						alt="serviceDetail"
						className="w-full object-cover h-full"
						width={1000}
						height={1000}
					/>
				</div>
				<div className="w-1/2 xm:w-full sm:w-full flex flex-col gap-8 relative z-50">
					<div className="absolute -top-20 -right-60 hidden xl:block">
						<Image
							alt="aboutCrownR"
							src={aboutCrownR}
						/>
					</div>
					<div className="relative z-50">
						<h1 className="relative z-50 flex flex-col gap-2">
							<AnimatedText
								text={service?.title}
								className="text-white font-HyperspaceRace heading font-black leading-none flex uppercase overflow-hidden"
							/>
						</h1>
					</div>
					<div className="absolute top-12 -right-[70%] lg:right-0 md:-right-1/2 md:w-[350px] md:-top-1/2 h-[400px] blur-[120px] bg-gradient-to-b from-[#007DFE] via-[#2f84da] to-[#007DFE] rounded-full w-[500px] overflow-hidden md:hidden" />
					<div className="flex flex-col gap-6 relative z-50">
						{service ? (
							<div className="text-white font-Monstrate paragraph leading-loose flex flex-col gap-4">
								<p>{service.short_description}</p>
								<p>{service.description}</p>
							</div>
						) : (
							<div className="text-white font-Monstrate paragraph leading-loose flex flex-col gap-4">
								<p>Loading service details...</p>
							</div>
						)}
						<div className="w-fit flex items-center justify-between bg-[#F99A03] cursor-pointer rounded-lg group">
							<RoundButton
								bgcolor="#212121"
								href="/about"
								title="learn more"
								className="bg-white text-black"
								style={{ color: "#fff" }}
							/>
						</div>
					</div>
				</div>
			</div>
			<Advantage />
		</div>
	);
}
