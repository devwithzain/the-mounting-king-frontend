"use client";
import {
	advantage,
	heroCloud,
	marketValue,
	time,
	aboutOne,
	aboutTwo,
	aboutThree,
	aboutFour,
	aboutFive,
	aboutSix,
	aboutSeven,
	aboutCrownR,
	aboutCrownL,
	coverLogo,
} from "@/public";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedText, Button } from "@/components";

export default function AboutUs() {
	return (
		<div className="w-full py-80 relative xm:py-10 sm:py-10 md:py-20">
			<div className="w-full flex flex-col gap-40">
				<div className="w-full flex items-start gap-10 justify-center padding-x padding-y sm:flex-col-reverse xm:flex-col-reverse">
					<div className="flex gap-2 overflow-hidden">
						<div className="flex flex-col gap-2 overflow-hidden">
							{[aboutTwo, aboutFour, aboutSix].map((item, index) => (
								<motion.div
									key={index}
									className="overflow-hidden group"
									initial={{ scale: 0 }}
									whileInView={{ scale: 1 }}
									transition={{
										delay: index * 0.05,
										duration: 1,
										ease: [0.4, 0, 0.2, 1],
									}}
									viewport={{ once: true }}>
									<div className="relative">
										{index === 1 && (
											<Image
												src={coverLogo}
												alt="sda"
												width={300}
												height={300}
												className="w-full object-cover absolute top-0 left-0 z-50"
											/>
										)}
										<Image
											src={item}
											alt="sda"
											width={300}
											height={300}
											className="w-full object-cover group-hover:opacity-0 transition-all duration-200 ease-in-out"
										/>
										<Image
											src={coverLogo}
											alt="sda"
											width={300}
											height={300}
											className="w-full object-cover absolute top-0 left-0 z-50 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out"
										/>
									</div>
								</motion.div>
							))}
						</div>
						<div className="flex flex-col gap-2 -mt-7 overflow-hidden">
							{[aboutOne, aboutThree, aboutFive, aboutSeven].map(
								(item, index) => (
									<motion.div
										key={index}
										className="overflow-hidden group"
										initial={{ scale: 0 }}
										whileInView={{ scale: 1 }}
										transition={{
											delay: index * 0.05,
											duration: 1,
											ease: [0.4, 0, 0.2, 1],
										}}
										viewport={{ once: true }}>
										<div className="relative">
											<Image
												src={item}
												alt="sda"
												width={300}
												height={300}
												className={`w-full object-cover ${
													index === 0 ||
													(index === 4 && "group-hover:opacity-0")
												} transition-all duration-200 ease-in-out`}
											/>
											{(index === 1 || index === 2) && (
												<Image
													src={coverLogo}
													alt="sda"
													width={300}
													height={300}
													className="w-full object-cover absolute top-0 left-0 z-50 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out"
												/>
											)}
										</div>
									</motion.div>
								),
							)}
						</div>
					</div>
					<div className="w-full flex flex-col gap-8 relative">
						<div className="absolute -top-20 -right-60 xm:hidden sm:hidden md:hidden">
							<Image
								alt="aboutCrownR"
								src={aboutCrownR}
								width={300}
								height={300}
							/>
						</div>
						<div>
							<h1 className="text-[#F99A03] font-HyperspaceRace text-[35px] font-black leading-tight capitalize">
								About Us
							</h1>
							<AnimatedText
								className="text-white font-HyperspaceRace heading font-black leading-tight uppercase"
								text="The Mounting"
							/>
							<AnimatedText
								className="text-white font-HyperspaceRace heading font-black leading-tight uppercase"
								text="King"
							/>
						</div>
						<div className="absolute top-12 -right-full h-[500px] blur-[120px] bg-gradient-to-b from-[#007DFE] via-[#2f84da] to-[#007DFE] rounded-full w-[500px] xm:hidden sm:hidden md:hidden" />
						<div className="flex flex-col gap-6 relative z-50">
							<p className="text-white font-Monstrate text-[18px] leading-loose">
								It is a long established fact that a reader will be distracted
								by the readable content of a page when looking at its layout.
							</p>
							<p className="text-white font-Monstrate text-[18px] leading-loose">
								The point of using Lorem Ipsum is that it has a more-or-less
								normal distribution of letters, as opposed to using Content
								here, content here, making it look like readable English.
							</p>
							<p className="text-white font-Monstrate text-[18px] leading-loose">
								Many desktop publishing packages and web page editors now use
								Lorem Ipsum as their default model text, and a search for lorem
								ipsum will uncover many web sites still in their infancy.
								Various versions have evolved over the years, sometimes by
								accident, sometimes on purpose (injected humour and the like).
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex flex-col gap-20 relative padding-x xm:gap-10 sm:gap-10">
				<div className="absolute -top-20 left-0 xm:hidden sm:hidden md:hidden">
					<Image
						alt="aboutCrownL"
						src={aboutCrownL}
						width={300}
						height={300}
					/>
				</div>
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
			</div>
			<div className="flex flex-col gap-5">
				<div className="absolute -bottom-60">
					<Image
						alt="heroCloudImg"
						src={heroCloud}
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
	);
}
