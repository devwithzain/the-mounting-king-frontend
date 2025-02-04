import React from "react";
import { motion } from "framer-motion";
import Button from "../../components/button.tsx";
import TextMask from "../../components/text-mask.tsx";
import Advantage from "../../components/advantage.tsx";
import AnimatedText from "../../components/animated-text.tsx";
import { aboutCrownR, serviceDetail } from "../../assets/index.ts";

export default function ServiceDetailInfo() {
	return (
		<div className="w-full padding-x relative padding-y flex flex-col gap-40 my-40 xm:gap-10 sm:gap-10 xm:my-10 sm:my-10 pt-10">
			<div className="w-full flex items-center justify-between gap-20 relative xm:flex-col sm:flex-col">
				<div className="w-1/2 xm:w-full sm:w-full">
					<img
						src={serviceDetail}
						alt="serviceDetail"
						className="w-full object-cover"
					/>
				</div>
				<div className="w-1/2 xm:w-full sm:w-full flex flex-col gap-8 relative z-50">
					<div className="absolute -top-20 -right-60 hidden xl:block">
						<img
							alt="aboutCrownR"
							src={aboutCrownR}
						/>
					</div>
					<div className="relative z-50">
						<h1 className="relative z-50 flex flex-col gap-2">
							<AnimatedText
								text="TV brackets wall"
								className="text-white font-HyperspaceRace heading font-black leading-none flex uppercase overflow-hidden"
							/>
							<div className="textRapper w-fit">
								<span
									className={`w-full flex overflow-hidden text-white font-HyperspaceRace heading font-black leading-tight uppercase `}>
									{"mounts".split(" ").map((word, index) => (
										<motion.p
											initial={{ y: "100%" }}
											whileInView={{ y: 0 }}
											transition={{
												delay: index * 0.08,
												duration: 1,
												ease: [0.4, 0, 0.2, 1],
											}}
											viewport={{ once: true }}
											key={index}
											className="inline-block whitespace-nowrap -mt-4">
											{word}
										</motion.p>
									))}
								</span>
							</div>
						</h1>
					</div>
					<div className="absolute top-12 -right-[70%] lg:right-0 md:-right-1/2 md:w-[350px] md:-top-1/2 h-[400px] blur-[120px] bg-gradient-to-b from-[#007DFE] via-[#2f84da] to-[#007DFE] rounded-full w-[500px] overflow-hidden md:hidden" />
					<div className="flex flex-col gap-6 relative z-50">
						<div className="text-white font-Monstrate paragraph leading-loose flex flex-col gap-4">
							<TextMask>
								{[
									"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
								]}
							</TextMask>
							<TextMask>
								{[
									"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
								]}
							</TextMask>
							<TextMask>
								{[
									"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
								]}
							</TextMask>
							<TextMask>
								{[
									"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
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
			<Advantage />
		</div>
	);
}
