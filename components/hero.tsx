import Image from "next/image";
import { heroCloud } from "@/public";

export default function Hero() {
	return (
		<div className="w-full h-screen flex items-center relative justify-center bg-[url('/heroBackground.png')] bg-cover bg-center bg-no-repeat">
			<div className="flex flex-col gap-5">
				<h1 className="text-[#1F1F3D] text-center font-HyperspaceRace text-[98px] font-black leading-normal capitalize">
					Book Appointment
				</h1>
				<div className="absolute w-full -bottom-80 z-50 left-0">
					<Image
						alt="heroCloudImg"
						src={heroCloud}
						className="w-full object-cover rotate-180"
					/>
				</div>
				<div className="absolute w-full -bottom-60 z-50 right-0">
					<Image
						alt="heroCloudImg"
						src={heroCloud}
						className="w-full object-cover"
					/>
				</div>
			</div>
		</div>
	);
}
