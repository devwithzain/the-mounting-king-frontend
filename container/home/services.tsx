"use client";
import {
	advantage,
	marketValue,
	time,
	bracket,
	tree,
	gorillaHanging,
} from "@/public";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedText, Button, TextMask } from "@/components";
import { useRef, useState } from "react";

export default function HomeServices() {
	const [isVideoPlaying, setIsVideoPlaying] = useState(false);
	const videoRef = useRef(null);

	const handleThumbnailClick = () => {
		setIsVideoPlaying(true);
	};

	const handleVideoPause = () => {
		setIsVideoPlaying(false);
	};
	return (
		<div className="w-full padding-y relative -mt-10 mb-20">
			<div className="w-full flex flex-col gap-20">
				<div className="w-full flex flex-col gap-20 relative padding-x">
					<div className="w-full flex justify-center items-center flex-col gap-3">
						<AnimatedText
							text="Advantage of"
							className="text-white text-center font-HyperspaceRace heading font-bold leading-tight capitalize"
						/>
						<div className="w-fit bg-[url('/advantageRapper.png')] bg-center bg-no-repeat bg-cover">
							<AnimatedText
								text="Our Mounting King Service"
								className="text-white text-center font-HyperspaceRace heading font-bold leading-tight capitalize"
							/>
						</div>
					</div>
					<div className="w-full flex items-center justify-center flex-col gap-20 relative">
						<div className="absolute -left-60 h-[500px] blur-[120px] bg-gradient-to-b from-[#007DFE] via-[#2f84da] to-[#007DFE] rounded-full w-[500px] overflow-hidden" />
						<div className="w-full flex justify-between gap-20 z-50">
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
					</div>
				</div>
				<div className="w-full flex justify-between gap-20 relative padding-x">
					<div className="flex-1 flex flex-col gap-10">
						<div>
							<AnimatedText
								text="Bracket"
								className="text-white text-center font-HyperspaceRace heading font-bold leading-tight capitalize"
							/>
							<span
								className={`w-fit flex overflow-hidden text-white font-HyperspaceRace heading font-black leading-tight uppercase `}>
								{"Supplied".split(" ").map((word, index) => (
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
										className="inline-block whitespace-nowrap bg-[url('/textRapper.png')] bg-center bg-no-repeat w-full bg-cover">
										{word}
									</motion.p>
								))}
							</span>
						</div>
						<div className="text-white font-Monstrate paragraph leading-loose">
							<TextMask>
								{[
									"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
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
						{!isVideoPlaying ? (
							<Image
								src={bracket}
								alt="bracket"
								className="cursor-pointer w-full h-full object-cover"
								onClick={handleThumbnailClick}
							/>
						) : (
							<video
								ref={videoRef}
								src="/video.mp4"
								autoPlay
								muted
								controls
								className="rounded-3xl"
								onEnded={handleVideoPause}
								onPause={handleVideoPause}
							/>
						)}
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
							className="w-full object-cover"
						/>
					</motion.div>
					<div className="w-full flex justify-between gap-10 padding-x">
						<div className="w-1/2 flex flex-col gap-6 -mt-60 lg:-mt-40 md:-mt-32">
							<div className="text-[#F99A03] font-HyperspaceRace text-[35px] font-black leading-tight capitalize">
								<TextMask>{["About Us"]}</TextMask>
							</div>
							<AnimatedText
								text="Tell us What You"
								className="text-white text-center font-HyperspaceRace heading font-bold leading-tight capitalize"
							/>
							<AnimatedText
								text="Are Looking For"
								className="text-white text-center font-HyperspaceRace heading font-bold leading-tight -mt-10 capitalize"
							/>
							<div className="text-white font-Monstrate paragraph leading-loose">
								<TextMask>
									{[
										"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
									]}
								</TextMask>
							</div>
							<div className="w-fit flex items-center justify-between bg-[#F99A03] cursor-pointer rounded-lg group">
								<Button
									bgcolor="#212121"
									href="/contact-us"
									title="Fill the form"
									className="bg-white text-black"
									style={{ color: "#fff" }}
								/>
							</div>
						</div>
						<div className="flex w-1/2">
							<div className="absolute top-80 md:top-60">
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
								<div className="w-[600px] h-[92px] absolute right-0 -bottom-10 rounded-[600px] opacity-40 bg-[radial-gradient(53.92%_67.81%_at_50%_50%,#414141_0%,rgba(255,255,255,0)_100%)] blur-[15px]" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
