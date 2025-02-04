import React from "react";
import Badal from "../../components/badal.tsx";

export default function ServicesHero() {
	return (
		<div className="w-full h-[70vh] flex items-center relative justify-center">
			<div className="flex flex-col gap-5">
				<div className="absolute -right-28 h-[400px] blur-[120px] bg-gradient-to-b from-[#007DFE] via-[#c092df] to-[#007DFE] rounded-full w-[400px] sm:w-[300px] xm:w-[300px] overflow-hidden" />
				<h1 className="text-[#1F1F3D] text-center font-HyperspaceRace heading font-black leading-tight uppercase">
					Services
				</h1>
			</div>
			<div className="w-full absolute -bottom-40 z-50 lg:-bottom-60 md:-bottom-40">
				<Badal />
			</div>
		</div>
	);
}
