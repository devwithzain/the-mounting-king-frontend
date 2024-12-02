"use client";
import {
	advantage,
	marketValue,
	time,
	arrowRight,
	aboutCrownL,
} from "@/public";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { servicesItems } from "@/constants";
import { AnimatedText, Button } from "@/components";

export default function Services() {
	return (
		<div className="w-full py-80 relative sm:py-10 xm:py-10 md:py-20">
			<div className="w-full padding-x padding-y">
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
				<div className="w-full flex items-center justify-center flex-col gap-20 relative sm:gap-10 xm:gap-10">
					<div className="absolute -left-60 h-[500px] blur-[120px] bg-gradient-to-b from-[#007DFE] via-[#2f84da] to-[#007DFE] rounded-full w-[500px] overflow-hidden xm:hidden sm:hidden md:hidden" />
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
							href="/contact-us"
							title="book now"
							className="bg-white text-black"
							style={{ color: "#fff" }}
						/>
					</div>
				</div>
				<div className="w-full flex flex-col gap-20 mt-20 relative">
					<div>
						<AnimatedText
							className="text-white text-center font-HyperspaceRace heading font-black leading-tight capitalize"
							text="All Services"
						/>
					</div>
					<div className="absolute -top-80 -left-10 sm:hidden md:hidden xm:hidden">
						<Image
							alt="aboutCrownL"
							src={aboutCrownL}
							width={350}
							height={350}
						/>
					</div>
					<div className="w-full flex items-center justify-center flex-col gap-20">
						<div className="w-full grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 gap-6">
							{servicesItems.map((item) => (
								<div
									key={item.id}
									className="flex flex-col gap-10 justify-between p-10 btns sm:p-5 md:p-5 xm:p-5 sm:gap-5 xm:gap-5">
									<h1 className="text-white text-[35px] xm:text-[25px] sm:text-[25px] md:text-[30px] font-semibold leading-tight capitalize">
										{item.tilte}
									</h1>
									<h1 className="text-white font-Monstrate text-[18px] leading-tight capitalize">
										{item.description}
									</h1>
									<Link
										href={`/service-detail/${item.href}`}
										className="w-fit group transition-all duration-500 ease-in-out cursor-pointer">
										<div className="px-4 py-6 group-hover:bg-[#F99A03] rounded-full bg-white/10 flex items-center justify-center gap-4 transition-all duration-500 ease-in-out">
											<Image
												src={arrowRight}
												alt="arrowRightImg"
												width={35}
												height={35}
												className="text-white group-hover:rotate-[-45deg] transition-all duration-500 ease-in-out"
											/>
											<h4 className="w-fit hidden group-hover:block origin-left transition-all duration-500 ease-in-out text-white text-[16px] font-bold leading-tight uppercase font-Monstrate">
												book now
											</h4>
										</div>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
