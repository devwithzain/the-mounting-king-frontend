"use client";
import Image from "next/image";
import { heroCloud } from "@/public";
import { AnimatedText } from "@/components";

export default function AboutHero() {
	return (
		<div className="w-full h-screen flex items-center relative justify-center sm:h-[70vh] xm:h-[70vh]">
			<div className="flex flex-col gap-5">
				<div className="absolute -right-[350px] -translate-y-1/2 top-1/2 h-[500px] blur-[120px] bg-gradient-to-b from-[#007DFE] via-[#c092df] to-[#007DFE] rounded-full w-[500px] xm:hidden sm:hidden" />
				<AnimatedText
					className="flex text-[#1F1F3D] text-center font-HyperspaceRace heading font-black leading-tight uppercase overflow-hidden"
					text="About Us"
				/>
			</div>
			<div className="w-full absolute left-0 -bottom-80 z-50 lg:-bottom-60 md:-bottom-40 overflow-hidden h-fit xm:hidden sm:hidden">
				<Image
					alt="heroCloudImg"
					src={heroCloud}
					className="w-full h-full object-cover rotate-180"
				/>
			</div>
			<div className="w-full absolute right-0 -bottom-60 z-50 lg:-bottom-40 md:-bottom-40 overflow-hidden h-fit xm:hidden sm:hidden">
				<Image
					alt="heroCloudImg"
					src={heroCloud}
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	);
}
