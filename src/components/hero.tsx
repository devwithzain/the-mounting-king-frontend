import React from "react";
import { badal } from "../assets/index.ts";
import AnimatedText from "./animated-text.tsx";

export default function Hero() {
	return (
		<div className="w-full h-[50vh] flex items-center relative justify-center">
			<img
				src="/hero.jpg"
				alt="hero"
				className="w-full h-full object-cover absolute top-0 left-0 -z-10"
			/>
			<div className="flex flex-col gap-5">
				<AnimatedText
					className="text-[#1F1F3D] text-center font-HyperspaceRace heading font-black leading-tight uppercase"
					text="Select Main Service"
				/>
				<div className="absolute w-full -bottom-40 md:-bottom-20 z-50 xm:hidden sm:hidden -left-[20%]">
					<img
						alt="heroCloudImg"
						src={badal}
						className="w-full h-full"
					/>
				</div>
				<div className="absolute w-full -bottom-40 md:-bottom-20 z-50 xm:hidden sm:hidden -right-[20%]">
					<img
						alt="heroCloudImg"
						src={badal}
						className="w-full h-full"
					/>
				</div>
			</div>
		</div>
	);
}
