"use client";
import Image from "next/image";
import AnimatedText from "./animated-text";

export default function Hero() {
	return (
		<div className="w-full h-[50vh] flex items-center relative justify-center bg-[url('/heroBackground.png')] bg-cover bg-center bg-no-repeat">
			<div className="flex flex-col gap-5">
				<AnimatedText
					className="text-[#1F1F3D] text-center font-HyperspaceRace heading font-black leading-tight uppercase"
					text="Select Main Service"
				/>
				<div className="absolute w-full -bottom-40 md:-bottom-20 z-50 xm:hidden sm:hidden -left-[20%]">
					<Image
						alt="heroCloudImg"
						width={1000}
						height={1000}
						src={"/badal.png"}
						className="w-full h-full"
					/>
				</div>
				<div className="absolute w-full -bottom-40 md:-bottom-20 z-50 xm:hidden sm:hidden -right-[20%]">
					<Image
						alt="heroCloudImg"
						width={1000}
						height={1000}
						src={"/badal.png"}
						className="w-full h-full"
					/>
				</div>
			</div>
		</div>
	);
}
