"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { tree, gorillaHanging, mobileGorilla } from "@/public";
import {
	Advantage,
	AnimatedText,
	RoundButton,
	TextMask,
	VideoModal,
} from "@/components/client";

export default function HomeServices() {
	return (
		<div className="w-full padding-y relative -mt-10 mb-20">
			<div className="w-full flex flex-col gap-20 xm:gap-10 sm:gap-10">
				<Advantage />
				<div className="w-full flex justify-between gap-20 relative padding-x xm:flex-col sm:flex-col sm:gap-10 xm:gap-10">
					<div className="flex-1 flex flex-col gap-10 sm:gap-5 xm:gap-5">
						<div className="flex flex-col gap-2">
							<AnimatedText
								text="Watch Our Work in"
								className="text-white text-center font-HyperspaceRace heading font-bold leading-tight capitalize"
							/>
							<AnimatedText
								text="Action The Mounting"
								className="text-white text-center font-HyperspaceRace heading font-bold leading-tight capitalize"
							/>
							<AnimatedText
								text="King TV Mounting"
								className="text-white text-center font-HyperspaceRace heading font-bold leading-tight capitalize"
							/>
						</div>
						<div className="text-white font-Monstrate paragraph leading-normal">
							<TextMask>
								{[
									"Experience hassle-free, professional TV mounting with Mounting King! Watch our video to see how we deliver seamless installations, secure mounts, and a clean, polished look for any space.",
								]}
							</TextMask>
						</div>
						<div className="w-fit flex items-center justify-between bg-[#F99A03] cursor-pointer rounded-lg group">
							<RoundButton
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
						<VideoModal />
					</motion.div>
				</div>
				<div className="w-full relative xm:hidden sm:hidden">
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
					<div className="w-full flex justify-between gap-10 padding-x xm:flex-col-reverse sm:flex-col-reverse">
						<div className="w-1/2  xm:w-full sm:w-full flex flex-col gap-6 -mt-60 lg:-mt-40 md:-mt-32">
							<div className="text-[#F99A03] font-HyperspaceRace text-[35px] font-black leading-tight capitalize">
								<TextMask>{["About Us"]}</TextMask>
							</div>
							<AnimatedText
								text="Tell us What You"
								className="text-white text-center font-HyperspaceRace heading font-bold leading-tight capitalize"
							/>
							<AnimatedText
								text="Are Looking For"
								className="w-fit text-white text-center font-HyperspaceRace heading font-bold leading-tight capitalize textRapper"
							/>
							<div className="text-white font-Monstrate paragraph leading-loose">
								<TextMask>
									{[
										"Looking for professional TV mounting services? We are here to help! Whether you need assistance with installation, mounting, or setup, our expert team is ready to provide you with top-notch service. Contact us today to discuss your needs and schedule an appointment.",
									]}
								</TextMask>
							</div>
							<div className="w-fit flex items-center justify-between bg-[#F99A03] cursor-pointer rounded-lg group">
								<RoundButton
									bgcolor="#212121"
									href="/contact-us"
									title="Fill the form"
									className="bg-white text-black"
									style={{ color: "#fff" }}
								/>
							</div>
						</div>
						<div className="flex w-1/2 h-full bg-blue-300 xm:w-full sm:w-full">
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
								<div className="w-[600px] h-[92px] absolute right-0 -bottom-10 rounded-[600px] opacity-40 bg-[radial-gradient(53.92%_67.81%_at_50%_50%,#414141_0%,rgba(255,255,255,0)_100%)] blur-[15px] xm:hidden sm:hidden" />
							</div>
						</div>
					</div>
				</div>
				<div className="w-full relative xm:!flex sm:!flex hidden flex-col-reverse gap-10 padding-y">
					<div className="w-full">
						<motion.div
							initial={{ opacity: 0, scale: 0.5 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: 0.5,
								ease: "easeInOut",
							}}>
							<Image
								alt="mobileGorilla"
								src={mobileGorilla}
								className="w-full object-cover"
							/>
						</motion.div>
					</div>
					<div className="w-full flex flex-col gap-3 padding-x relative z-[1000]">
						<div className="text-[#F99A03] font-HyperspaceRace text-[35px] font-black leading-tight capitalize">
							<TextMask>{["About Us"]}</TextMask>
						</div>
						<span
							className={`w-fit flex overflow-hidden text-white font-HyperspaceRace heading font-black leading-tight capitalize`}>
							<motion.p
								initial={{ y: "100%" }}
								whileInView={{ y: 0 }}
								transition={{
									duration: 1,
									ease: [0.4, 0, 0.2, 1],
								}}
								viewport={{ once: true }}
								className="inline-block whitespace-nowrap w-full bg-cover mr-2">
								<TextMask>{["Tell us What You"]}</TextMask>
							</motion.p>
						</span>
						<span
							className={`w-fit flex overflow-hidden text-white font-HyperspaceRace heading font-black leading-tight capitalize`}>
							<motion.p
								initial={{ y: "100%" }}
								whileInView={{ y: 0 }}
								transition={{
									duration: 1,
									ease: [0.4, 0, 0.2, 1],
								}}
								viewport={{ once: true }}
								className="inline-block whitespace-nowrap w-full mr-2">
								<TextMask>{["Are Looking For"]}</TextMask>
							</motion.p>
						</span>
						<div className="text-white font-Monstrate paragraph leading-loose">
							<TextMask>
								{[
									"Looking for professional TV mounting services? We are here to help! Whether you need assistance with installation, mounting, or setup, our expert team is ready to provide you with top-notch service. Contact us today to discuss your needs and schedule an appointment.",
								]}
							</TextMask>
						</div>
						<div className="w-fit flex items-center justify-between bg-[#F99A03] cursor-pointer rounded-lg group">
							<RoundButton
								bgcolor="#212121"
								href="/contact-us"
								title="Fill the form"
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
