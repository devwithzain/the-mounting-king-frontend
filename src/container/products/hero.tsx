import React from "react";
import Badal from "../../components/badal.tsx";
import { heroBackground } from "../../assets/index.ts";
import AnimatedText from "../../components/animated-text.tsx";

export default function ProductsHero() {
	return (
		<div className="w-full h-[70vh] flex items-center relative justify-center">
			<div className="w-full absolute left-0 top-0 -z-10">
				<img
					alt="heroBackground"
					src={heroBackground}
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="flex flex-col gap-5">
				<div className="absolute -right-[350px] -translate-y-1/2 top-1/2 h-[500px] blur-[120px] bg-gradient-to-b from-[#007DFE] via-[#c092df] to-[#007DFE] rounded-full w-[500px] xm:hidden sm:hidden" />
				<AnimatedText
					className="flex text-[#1F1F3D] text-center font-HyperspaceRace heading font-black leading-tight uppercase overflow-hidden"
					text="Products"
				/>
			</div>
			<div className="w-full absolute -bottom-60 z-50 xm:hidden sm:hidden">
				<div className="w-full xm:hidden sm:hidden">
					<Badal />
				</div>
			</div>
		</div>
	);
}
