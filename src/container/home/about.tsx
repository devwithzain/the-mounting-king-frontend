import React from "react";
import Button from "../../components/button.tsx";
import { aboutCrownR } from "../../assets/index.ts";
import Whatwedo from "../../components/whatwedo.tsx";
import TextMask from "../../components/text-mask.tsx";
import ScrollReveal from "../../components/scroll-reveal.tsx";
import AnimatedText from "../../components/animated-text.tsx";

export default function AboutHome() {
	return (
		<div className="w-full padding-y relative flex flex-col gap-40 sm:gap-20 xm:gap-20">
			<div className="absolute -top-80 -left-80 lg:-top-40 lg:-left-40">
				<img
					src={"/serviceGorila.png"}
					width={1000}
					height={1000}
					className="w-full lg:w-[500px] object-cover filter grayscale opacity-10"
					alt=""
				/>
			</div>
			<Whatwedo />
			<div className="w-full flex gap-10 justify-start items-center padding-x xm:flex-col-reverse sm:flex-col-reverse">
				<ScrollReveal />
				<div className="w-1/2 flex flex-col relative z-50 xm:w-full sm:w-full">
					<div className="absolute top-10 -right-60 hidden xl:block">
						<img
							alt="aboutCrownR"
							src={aboutCrownR}
							width={400}
							height={400}
						/>
					</div>
					<div className="relative z-50">
						<h1 className="text-[#F99A03] mb-5 font-HyperspaceRace text-[35px] font-black leading-tight capitalize">
							<TextMask>{["About Us"]}</TextMask>
						</h1>
						<h1 className="relative z-50 flex flex-col">
							<AnimatedText
								text="We Mount All TV"
								className="text-white font-HyperspaceRace heading font-black leading-tight flex capitalize overflow-hidden"
							/>
							<AnimatedText
								text="of All Sizes Onto"
								className="text-white font-HyperspaceRace heading font-black leading-tight flex capitalize overflow-hidden"
							/>
							<AnimatedText
								text="All Surfaces Often"
								className="text-white font-HyperspaceRace heading font-black leading-tight flex capitalize overflow-hidden"
							/>
							<AnimatedText
								text="Same Day"
								className="text-white font-HyperspaceRace heading font-black leading-tight flex capitalize overflow-hidden"
							/>
						</h1>
					</div>
					<div className="absolute top-12 -right-[70%] lg:right-0 md:-right-1/2 md:w-[350px] md:-top-1/2 h-[400px] blur-[120px] bg-gradient-to-b from-[#007DFE] via-[#2f84da] to-[#007DFE] rounded-full w-[500px] md:hidden xm:hidden sm:hidden" />
					<div className="flex flex-col gap-3 relative z-50">
						<div className="text-white font-Monstrate paragraph leading-loose">
							<TextMask>
								{[
									"Welcome to The Mounting Man, your trusted partner for expert TV installation. With our team of skilled technicians, we ensure a seamless and hassle-free experience from start to finish. If you have any questions, Call or Text (000) 000-0000.",
								]}
							</TextMask>
						</div>
						<div className="w-fit flex items-center justify-between bg-[#F99A03] cursor-pointer rounded-lg group">
							<Button
								bgcolor="#212121"
								to="/about"
								title="learn more"
								className="bg-white text-black"
								style={{ color: "#fff" }}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
