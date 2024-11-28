import Image from "next/image";
import { heroCloud } from "@/public";

export default function ServicesHero() {
	return (
		<div className="w-full h-screen flex items-center relative justify-center">
			<div className="flex flex-col gap-5">
				<div className="absolute -right-28 h-[400px] blur-[120px] bg-gradient-to-b from-[#007DFE] via-[#c092df] to-[#007DFE] rounded-full w-[400px] sm:w-[300px] xm:w-[300px] overflow-hidden" />
				<h1 className="text-[#1F1F3D] text-center font-HyperspaceRace heading font-black leading-tight uppercase">
					Services
				</h1>
			</div>
			<div className="w-full absolute left-0 -bottom-80 z-50 lg:-bottom-60 md:-bottom-40 overflow-hidden h-fit">
				<Image
					alt="heroCloudImg"
					src={heroCloud}
					className="w-full h-full object-cover rotate-180"
				/>
			</div>
			<div className="w-full absolute right-0 -bottom-60 z-50 lg:-bottom-40 md:-bottom-40 overflow-hidden h-fit">
				<Image
					alt="heroCloudImg"
					src={heroCloud}
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	);
}
