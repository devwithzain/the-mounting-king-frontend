import React from "react";
import Badal from "../../components/badal.tsx";
import AnimatedText from "../../components/animated-text.tsx";

export default function Hero() {
	return (
		<div className="w-full h-[70vh] flex items-center relative justify-center">
			<div className="absolute -right-24 top-28 h-[500px] blur-[150px] bg-gradient-to-b from-[#007DFE] via-[#c092df] to-[#007DFE] rounded-full w-[500px] overflow-hidden" />
			<div className="flex flex-col gap-5 relative z-50 xm:hidden sm:hidden">
				<AnimatedText
					className="text-[#1F1F3D] text-center font-HyperspaceRace heading font-black leading-tight uppercase"
					text="TV brackets wall mounts"
				/>
			</div>
			<div className="xm:flex  sm:flex hidden flex-col relative z-50">
				<AnimatedText
					className="text-[#1F1F3D] text-center font-HyperspaceRace heading font-black leading-tight uppercase"
					text="TV brackets"
				/>
				<AnimatedText
					className="text-[#1F1F3D] text-center font-HyperspaceRace heading font-black leading-tight uppercase"
					text="wall mounts"
				/>
			</div>
			<div className="absolute w-full -bottom-40 md:-bottom-32 z-50 xm:hidden sm:hidden">
				<Badal />
			</div>
		</div>
	);
}
