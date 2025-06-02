import { TservicesColumnProps } from "@/types";
import { AnimatedText, Badal } from "@/components/client";

export default function Hero({ service }: { service: TservicesColumnProps }) {
	return (
		<div className="w-full h-[70vh] flex items-center relative justify-center xm:h-[50vh] sm:h-[50vh]">
			<div className="absolute -right-24 top-28 h-[500px] blur-[150px] bg-gradient-to-b from-[#007DFE] via-[#c092df] to-[#007DFE] rounded-full w-[500px] overflow-hidden" />
			<div className="w-full flex padding-x gap-5 relative z-50 items-center justify-center text-center">
				<AnimatedText
					className="text-[#1F1F3D] text-center font-HyperspaceRace heading font-black leading-tight uppercase"
					text={service?.title}
				/>
			</div>
			<div className="absolute w-full -bottom-80 md:-bottom-32 z-50 xm:hidden sm:hidden">
				<Badal />
			</div>
		</div>
	);
}
