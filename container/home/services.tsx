"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
	advantage,
	heroCloud,
	marketValue,
	time,
	arrowRight,
	aboutOne,
	aboutTwo,
	aboutThree,
	aboutFour,
	aboutFive,
	aboutSix,
	aboutSeven,
	aboutCrownR,
	bracket,
	tree,
	gorillaHanging,
} from "@/public";
import { AnimatedText, TextMask } from "@/components";

export default function HomeServices() {
	return (
		<div
			className="w-full py-80 relative"
			style={{
				background:
					"linear-gradient(0deg, rgba(106,155,190,1) 0%, rgba(0,73,124,1) 30%, rgba(0,73,124,1) 50%, rgba(0,73,124,1) 70%, rgba(106,155,190,1) 100%)",
			}}>
			<div className="absolute -top-80">
				<Image
					alt="heroCloudImg"
					src={heroCloud}
					className="w-full h-full object-cover rotate-180"
				/>
			</div>
			<div className="w-full flex flex-col gap-40">
				<div className="w-full flex items-start gap-10 justify-center px-80">
					<div className="w-full flex gap-2 overflow-hidden">
						<div className="flex flex-col gap-2 overflow-hidden">
							{[aboutTwo, aboutFour, aboutSix].map((item, index) => (
								<motion.div
									key={index}
									className="overflow-hidden"
									initial={{ scale: 0 }}
									whileInView={{ scale: 1 }}
									transition={{
										delay: index * 0.05,
										duration: 1,
										ease: [0.4, 0, 0.2, 1],
									}}
									viewport={{ once: true }}>
									<Image
										src={item}
										alt="sda"
										width={250}
										height={250}
										className="w-full object-cover"
									/>
								</motion.div>
							))}
						</div>
						<div className="flex flex-col gap-2 -mt-7 overflow-hidden">
							{[aboutOne, aboutThree, aboutFive, aboutSeven].map(
								(item, index) => (
									<motion.div
										key={index}
										className="overflow-hidden"
										initial={{ scale: 0 }}
										whileInView={{ scale: 1 }}
										transition={{
											delay: index * 0.05,
											duration: 1,
											ease: [0.4, 0, 0.2, 1],
										}}
										viewport={{ once: true }}>
										<Image
											src={item}
											alt="sda"
											width={250}
											height={250}
											className="w-full object-cover"
										/>
									</motion.div>
								),
							)}
						</div>
					</div>
					<div className="w-full flex flex-col gap-8 relative">
						<div className="absolute -top-20 -right-60">
							<Image
								alt="aboutCrownR"
								src={aboutCrownR}
								width={400}
								height={400}
							/>
						</div>
						<div>
							<h1 className="text-[#F99A03] font-HyperspaceRace text-[35px] font-black leading-tight capitalize">
								<TextMask>{["About Us"]}</TextMask>
							</h1>
							<h1>
								<AnimatedText
									text="The Mounting"
									className="text-white font-HyperspaceRace text-[98px] font-black leading-none flex uppercase overflow-hidden"
								/>
								<AnimatedText
									text="King"
									className="text-white font-HyperspaceRace text-[98px] font-black leading-none flex uppercase overflow-hidden"
								/>
							</h1>
						</div>
						<div className="absolute top-12 -right-full h-[500px] blur-[120px] bg-gradient-to-b from-[#007DFE] via-[#2f84da] to-[#007DFE] rounded-full w-[500px]" />
						<div className="flex flex-col gap-6 relative z-50">
							<div className="text-white font-Monstrate text-[18px] leading-loose">
								<TextMask>
									{[
										"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
									]}
								</TextMask>
							</div>
							<div className="w-fit flex gap-3 justify-center items-center bg-[#F99A03] px-10 py-3">
								<button className="w-fit text-white font-Monstrate text-[20px] font-normal leading-tight tracking-tight">
									Learn more
								</button>
								<Image
									src={arrowRight}
									alt="arrowRightImg"
									width={30}
									height={30}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-20 relative">
					<div className="w-full flex justify-center items-center flex-col">
						<AnimatedText
							text="Advantage of"
							className="text-white text-center font-HyperspaceRace text-[98px] font-bold leading-tight capitalize"
						/>
						<AnimatedText
							text="Our Mounting King Service"
							className="text-white text-center font-HyperspaceRace text-[98px] font-bold leading-tight capitalize -mt-6"
						/>
					</div>
					<div className="w-full flex items-center justify-center flex-col gap-20 relative">
						<div className="absolute -left-60 h-[500px] blur-[120px] bg-gradient-to-b from-[#007DFE] via-[#2f84da] to-[#007DFE] rounded-full w-[500px]" />
						<div className="w-[80%] flex justify-between gap-10 z-50">
							<div className="group relative cursor-pointer overflow-hidden bg-white rounded-2xl px-6 py-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl">
								<span className="absolute -top-10 -left-10 z-0 h-20 w-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-75 transition-all duration-500 transform group-hover:scale-[20]" />
								<div className="relative z-10 mx-auto max-w-md flex flex-col gap-4">
									<span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 transform group-hover:bg-gradient-to-r group-hover:from-[#007DFE] group-hover:to-[#2f84da]">
										<Image
											src={marketValue}
											alt="marketValueImg"
											width={40}
											height={40}
										/>
									</span>
									<div className="flex flex-col gap-3">
										<h1 className="text-black group-hover:text-white text-[30px] font-bold leading-tight capitalize">
											High Market Value
										</h1>
										<p className="text-black font-Monstrate text-[18px] group-hover:text-white leading-tight capitalize">
											Lorem Ipsum is simply dummy text of the printing and
											typesetting industry. Lorem Ipsum has been the industrys
											standard dummy text ever
										</p>
									</div>
								</div>
							</div>
							<div className="group relative cursor-pointer overflow-hidden bg-white rounded-2xl px-6 py-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl">
								<span className="absolute -top-10 -left-10 z-0 h-20 w-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-75 transition-all duration-500 transform group-hover:scale-[20]" />
								<div className="relative z-10 mx-auto max-w-md flex flex-col gap-4">
									<span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 transform group-hover:bg-gradient-to-r group-hover:from-[#007DFE] group-hover:to-[#2f84da]">
										<Image
											src={time}
											alt="timeImg"
											width={40}
											height={40}
										/>
									</span>
									<div className="flex flex-col gap-3">
										<h1 className="text-black group-hover:text-white text-[30px] font-bold leading-tight capitalize">
											Save Time <br />
											and Resources
										</h1>
										<p className="text-black font-Monstrate text-[18px] group-hover:text-white leading-tight capitalize">
											Lorem Ipsum is simply dummy text of the printing and
											typesetting industry. Lorem Ipsum has been the industrys
											standard dummy text ever
										</p>
									</div>
								</div>
							</div>
							<div className="group relative cursor-pointer overflow-hidden bg-white rounded-2xl px-6 py-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl">
								<span className="absolute -top-10 -left-10 z-0 h-20 w-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-75 transition-all duration-500 transform group-hover:scale-[20]" />
								<div className="relative z-10 mx-auto max-w-md flex flex-col gap-4">
									<span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 transform group-hover:bg-gradient-to-r group-hover:from-[#007DFE] group-hover:to-[#2f84da]">
										<Image
											src={advantage}
											alt="advantageImg"
											width={40}
											height={40}
										/>
									</span>
									<div className="flex flex-col gap-3">
										<h1 className="text-black group-hover:text-white text-[30px] font-bold leading-tight capitalize">
											Gain Your <br /> Advantage
										</h1>
										<p className="text-black font-Monstrate text-[18px] group-hover:text-white leading-tight capitalize">
											Lorem Ipsum is simply dummy text of the printing and
											typesetting industry. Lorem Ipsum has been the industrys
											standard dummy text ever
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full flex justify-between gap-20 relative px-48">
					<div className="flex-1 flex flex-col gap-10">
						<div>
							<AnimatedText
								text="Bracket"
								className="text-white text-center font-HyperspaceRace text-[98px] font-bold leading-tight capitalize"
							/>
							<AnimatedText
								text="Supplied"
								className="text-white text-center font-HyperspaceRace text-[98px] font-bold leading-tight capitalize -mt-10"
							/>
						</div>
						<div className="text-white font-Monstrate text-[18px] leading-loose">
							<TextMask>
								{[
									"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
								]}
							</TextMask>
						</div>
						<div className="w-fit flex gap-3 justify-center items-center bg-[#F99A03] px-10 py-3">
							<button className="w-fit text-white font-Monstrate text-[20px] font-normal leading-tight tracking-tight">
								Learn more
							</button>
							<Image
								src={arrowRight}
								alt="arrowRightImg"
								width={30}
								height={30}
							/>
						</div>
					</div>
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{
							duration: 0.5,
							delay: 0.5,
							ease: "easeInOut",
						}}
						className="flex-1 flex items-center justify-center flex-col gap-20 relative">
						<Image
							src={bracket}
							alt="bracket"
						/>
					</motion.div>
				</div>
				<div className="w-full relative">
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{
							duration: 0.5,
							delay: 0.5,
							ease: "easeInOut",
						}}
						className="flex-1 flex items-center justify-center flex-col gap-20 relative">
						<Image
							alt="treeImg"
							src={tree}
							className="w-full h-full object-cover"
						/>
					</motion.div>
					<div className="w-full flex justify-between gap-10 px-48 mb-40">
						<div className="flex-1 flex flex-col gap-6 -mt-60">
							<div className="text-[#F99A03] font-HyperspaceRace text-[35px] font-black leading-tight capitalize">
								<TextMask>{["About Us"]}</TextMask>
							</div>
							<AnimatedText
								text="Tell us What"
								className="text-white text-center font-HyperspaceRace text-[98px] font-bold leading-tight capitalize"
							/>
							<AnimatedText
								text="You are Looking For"
								className="text-white text-center font-HyperspaceRace text-[98px] font-bold leading-tight -mt-14 capitalize"
							/>
							<div className="text-white font-Monstrate text-[18px] leading-loose">
								<TextMask>
									{[
										"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
									]}
								</TextMask>
							</div>
							<div className="w-fit flex gap-3 justify-center items-center bg-[#F99A03] px-10 py-3">
								<button className="w-fit text-white font-Monstrate text-[20px] font-normal leading-tight tracking-tight">
									Fill the form
								</button>
								<Image
									src={arrowRight}
									alt="arrowRightImg"
									width={30}
									height={30}
								/>
							</div>
						</div>
						<div className="flex flex-1">
							<div className="absolute top-80">
								<motion.div
									initial={{ opacity: 0, scale: 0.5 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.5,
										delay: 0.5,
										ease: "easeInOut",
									}}
									className="flex-1 flex items-center justify-center flex-col gap-20 relative">
									<Image
										src={gorillaHanging}
										alt="gorillaHangingImg"
										className="w-full h-full object-cover"
									/>
								</motion.div>
								<div className="w-[600px] h-[92px] absolute right-10 -bottom-10 rounded-[600px] opacity-40 bg-[radial-gradient(53.92%_67.81%_at_50%_50%,#414141_0%,rgba(255,255,255,0)_100%)] blur-[15px]" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute -bottom-60 z-50">
				<Image
					alt="heroCloudImg"
					src={heroCloud}
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	);
}
