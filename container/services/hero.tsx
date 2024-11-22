import Image from "next/image";
import { heroCloud } from "@/public";

export default function ServicesHero() {
	return (
		<div className="w-full h-screen flex items-center relative justify-center bg-[url('/heroBackground.png')] bg-cover bg-center bg-no-repeat">
			<div className="flex flex-col gap-5">
				<div className="absolute -right-28 h-[400px] blur-[120px] bg-gradient-to-b from-[#007DFE] via-[#c092df] to-[#007DFE] rounded-full w-[400px] sm:w-[300px] xm:w-[300px]" />
				<h1 className="text-[#1F1F3D] text-center font-HyperspaceRace text-[98px] font-black leading-normal capitalize">
					Services
				</h1>
				<div className="absolute -bottom-60">
					<Image
						alt="heroCloudImg"
						src={heroCloud}
						className="w-full h-full object-cover rotate-180"
					/>
				</div>
			</div>
		</div>
	);
}
