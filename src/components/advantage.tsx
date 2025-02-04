import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "./animated-text.tsx";
import { advantage, marketValue, time } from "../assets/index.ts";

export default function Advantage() {
	return (
		<div className="w-full flex flex-col gap-20 relative padding-x sm:gap-10 xm:gap-10 mb-80">
			<div className="w-full flex justify-center items-center flex-col gap-3 sm:items-start xm:items-start">
				<AnimatedText
					text="Advantage of Our"
					className="text-white text-center font-HyperspaceRace heading font-bold leading-tight capitalize"
				/>
				<AnimatedText
					text="Mounting King Service"
					className="text-white advantageRapper text-center font-HyperspaceRace text-[80px] lg:text-[70px] md:text-[50px] sm:text-[30px] xm:text-[30px] font-bold leading-normal capitalize"
				/>
			</div>
			<div className="w-full flex items-center justify-center flex-col gap-20 relative xm:flex-col sm:flex-col">
				<div className="absolute -left-60 h-[500px] blur-[120px] bg-gradient-to-b from-[#007DFE] via-[#2f84da] to-[#007DFE] rounded-full w-[500px] overflow-hidden xm:hidden sm:hidden" />
				<div className="w-full flex justify-between gap-20 z-50 xm:flex-col sm:flex-col xm:gap-10 sm:gap-10">
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
						<div className="w-full z-10 flex flex-col justify-between gap-4 group-hover:bg-white px-6 py-10 relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
							<img
								src={marketValue}
								alt="marketValueImg"
								width={60}
								height={60}
							/>
							<div className="w-full flex flex-col gap-3">
								<h1 className="text-white group-hover:text-black text-[35px] font-bold leading-tight capitalize">
									Over 3,000 TVs <br /> Mounted with Precision
								</h1>
								<p className="text-white font-Monstrate paragraph group-hover:text-black">
									We are your trusted partner for safe, secure, and professional
									mounting services. Our team is highly skilled, ensuring your
									TV is mounted with utmost care and precision.
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
							<img
								src={time}
								alt="timeImg"
								width={60}
								height={60}
							/>
							<div className="w-full flex flex-col gap-3">
								<h1 className="text-white group-hover:text-black text-[35px] font-bold leading-tight capitalize">
									Over 700 Samsung Frames Mounted with Expertise
								</h1>
								<p className="text-white font-Monstrate paragraph group-hover:text-black">
									Trusted by hundreds of customers, we specialize in
									professional Samsung Frame installations that combine
									precision, care, and style to deliver a flawless setup every
									time.
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
							<img
								src={advantage}
								alt="advantageImg"
								width={60}
								height={60}
							/>
							<div className="w-full flex flex-col gap-3">
								<h1 className="text-white group-hover:text-black text-[35px] font-bold leading-tight capitalize">
									Gain Your <br /> Competitive Edge
								</h1>
								<p className="text-white font-Monstrate paragraph group-hover:text-black">
									Unlock your potential with services designed to elevate your
									performance and achieve unparalleled success. Our expertise
									ensures you stay ahead in every aspect.
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
