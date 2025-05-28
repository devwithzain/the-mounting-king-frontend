import Image from "next/image";
import { heroBackground } from "@/public";
import { AnimatedText, Badal } from "@/components/client";

export default function Hero() {
	return (
		<div className="w-full h-[70vh] flex items-center relative justify-center xm:h-[50vh] sm:h-[50vh]">
			<Image
				src={heroBackground}
				alt="heroBackground"
				className="w-full h-full object-cover absolute top-0 left-0 z-0"
			/>
			<div className="absolute -right-24 top-28 h-[500px] blur-[150px] bg-gradient-to-b from-[#007DFE] via-[#c092df] to-[#007DFE] rounded-full w-[500px] overflow-hidden xm:hidden sm:hidden" />
			<div className="flex flex-col gap-5">
				<AnimatedText
					className="text-[#1F1F3D] text-center font-HyperspaceRace heading font-black leading-tight uppercase relative z-50"
					text="Contact Us"
				/>
				<div className="w-full h-full absolute left-0 -bottom-60 z-50 lg:-bottom-60 md:-bottom-40 xm:hidden sm:hidden">
					<div className="my-40 w-full xm:hidden sm:hidden">
						<Badal />
					</div>
				</div>
			</div>
		</div>
	);
}
