"use client";
import {
	aboutCrownR,
	advantage,
	marketValue,
	serviceDetail,
	time,
} from "@/public";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedText, Button, TextMask } from "@/components";

export default function ServiceDetailInfo() {
	return (
		<div className="w-full padding-x relative padding-y flex flex-col gap-40 my-40 xm:gap-10 sm:gap-10 xm:my-10 sm:my-10">
			<div className="w-full flex items-center justify-between gap-20 relative xm:flex-col sm:flex-col">
				<div className="w-1/2 xm:w-full sm:w-full">
					<Image
						src={serviceDetail}
						alt="serviceDetail"
						width={1000}
						height={1000}
						className="w-full object-cover"
					/>
				</div>
				<div className="w-1/2 xm:w-full sm:w-full flex flex-col gap-8 relative z-50">
					<div className="absolute -top-20 -right-60 hidden xl:block">
						<Image
							alt="aboutCrownR"
							src={aboutCrownR}
							width={400}
							height={400}
						/>
					</div>
					<div className="relative z-50">
						<h1 className="relative z-50 flex flex-col gap-2">
							<AnimatedText
								text="TV brackets wall"
								className="text-white font-HyperspaceRace heading font-black leading-none flex uppercase overflow-hidden"
							/>
							<div className="bg-[url('/textRapper.png')] bg-center bg-no-repeat w-fit bg-cover">
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
								href="/about"
								title="learn more"
								className="bg-white text-black"
								style={{ color: "#fff" }}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex items-center justify-center flex-col gap-20 relative sm:gap-10 xm:gap-10">
				<div className="absolute -left-60 h-[500px] blur-[120px] bg-gradient-to-b from-[#007DFE] via-[#2f84da] to-[#007DFE] rounded-full w-[500px] overflow-hidden xm:hidden sm:hidden md:hidden" />
				<div className="w-full flex justify-center items-center flex-col">
					<AnimatedText
						text="Advantage of"
						className="text-white text-center font-HyperspaceRace heading font-bold leading-tight capitalize"
					/>
					<div className="w-fit bg-[url('/advantageRapper.png')] bg-center bg-no-repeat bg-cover">
						<AnimatedText
							text="Our Mounting King Service"
							className="text-white text-center font-HyperspaceRace text-[80px] lg:text-[70px] md:text-[50px] sm:text-[30px] xm:text-[28px] font-bold leading-tight capitalize sm:!mr-0"
						/>
					</div>
				</div>
				<div className="w-full flex justify-between gap-20 z-50 sm:flex-col xm:flex-col xm:gap-10 sm:gap-10">
					<motion.div
						initial={{ scale: 0 }}
						whileInView={{ scale: 1 }}
						transition={{
							delay: 0.05,
							duration: 0.5,
							ease: "backInOut",
						}}
						viewport={{ once: true }}
						className="w-full group">
						<div className="w-full z-10 flex flex-col gap-4 group-hover:bg-white px-6 py-10 relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
							<Image
								src={marketValue}
								alt="marketValueImg"
								width={60}
								height={60}
							/>
							<div className="w-full flex flex-col gap-3">
								<h1 className="text-white group-hover:text-black text-[30px] font-bold leading-tight capitalize">
									High Market <br /> Value
								</h1>
								<p className="text-white font-Monstrate paragraph group-hover:text-black leading-tight capitalize">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industrys
									standard dummy text ever
								</p>
							</div>
						</div>
					</motion.div>
					<motion.div
						initial={{ scale: 0 }}
						whileInView={{ scale: 1 }}
						transition={{
							delay: 0.05,
							duration: 0.5,
							ease: "backInOut",
						}}
						viewport={{ once: true }}
						className="w-full group">
						<div className="w-full z-10 flex flex-col gap-4 group-hover:bg-white px-6 py-10 relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
							<Image
								src={time}
								alt="timeImg"
								width={60}
								height={60}
							/>
							<div className="w-full flex flex-col gap-3">
								<h1 className="text-white group-hover:text-black text-[30px] font-bold leading-tight capitalize">
									Save Time <br />
									and Resources
								</h1>
								<p className="text-white font-Monstrate paragraph group-hover:text-black leading-tight capitalize">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industrys
									standard dummy text ever
								</p>
							</div>
						</div>
					</motion.div>
					<motion.div
						initial={{ scale: 0 }}
						whileInView={{ scale: 1 }}
						transition={{
							delay: 0.05,
							duration: 0.5,
							ease: "backInOut",
						}}
						viewport={{ once: true }}
						className="w-full group">
						<div className="w-full z-10 flex flex-col gap-4 group-hover:bg-white px-6 py-10 relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
							<Image
								src={advantage}
								alt="advantageImg"
								width={60}
								height={60}
							/>
							<div className="w-full flex flex-col gap-3">
								<h1 className="text-white group-hover:text-black text-[30px] font-bold leading-tight capitalize">
									Gain Your <br /> Advantage
								</h1>
								<p className="text-white font-Monstrate paragraph group-hover:text-black leading-tight capitalize">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industrys
									standard dummy text ever
								</p>
							</div>
						</div>
					</motion.div>
				</div>
				<div className="w-fit flex items-center justify-between bg-[#F99A03] cursor-pointer rounded-lg group">
					<Button
						bgcolor="#212121"
						href="/contact"
						title="book now"
						className="bg-white text-black"
						style={{ color: "#fff" }}
					/>
				</div>
			</div>
		</div>
	);
}
