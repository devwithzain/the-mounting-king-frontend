"use client";
import {
	aboutOne,
	aboutTwo,
	aboutThree,
	aboutFour,
	aboutFive,
	aboutSix,
	aboutSeven,
	aboutCrownR,
	coverLogo,
} from "@/public";
import Image from "next/image";
import { motion } from "framer-motion";
import Whatwedo from "@/components/whatwedo";
import { AnimatedText, Button, TextMask } from "@/components";

export default function AboutServices() {
	return (
		<div className="w-full padding-y relative mt-60 flex flex-col gap-40">
			<div className="absolute -top-80 -left-80 lg:-top-40 lg:-left-40">
				<Image
					src={"/serviceGorila.png"}
					width={1000}
					height={1000}
					className="w-full lg:w-[500px] object-cover filter grayscale opacity-10"
					alt=""
				/>
			</div>
			<Whatwedo />
			<div className="w-full flex items-center gap-10 justify-start padding-x overflow-x-hidden">
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
											width={250}
											height={250}
											className="w-full object-cover absolute top-0 left-0 z-50"
										/>
									)}
									<Image
										src={item}
										alt="sda"
										width={250}
										height={250}
										className="w-full object-cover group-hover:opacity-0 transition-all duration-200 ease-in-out"
									/>
									<Image
										src={coverLogo}
										alt="sda"
										width={250}
										height={250}
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
											width={250}
											height={250}
											className={`w-full object-cover ${
												index === 0 || (index === 4 && "group-hover:opacity-0")
											} transition-all duration-200 ease-in-out`}
										/>
										{(index === 1 || index === 2) && (
											<Image
												src={coverLogo}
												alt="sda"
												width={250}
												height={250}
												className="w-full object-cover absolute top-0 left-0 z-50 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out"
											/>
										)}
									</div>
								</motion.div>
							),
						)}
					</div>
				</div>
				<div className="w-1/2 flex flex-col gap-8 relative z-50">
					<div className="absolute -top-20 -right-60 hidden xl:block">
						<Image
							alt="aboutCrownR"
							src={aboutCrownR}
							width={400}
							height={400}
						/>
					</div>
					<div className="relative z-50">
						<h1 className="text-[#F99A03] font-HyperspaceRace text-[35px] font-black leading-tight capitalize">
							<TextMask>{["About Us"]}</TextMask>
						</h1>
						<h1 className="relative z-50">
							<AnimatedText
								text="The Mounting"
								className="text-white font-HyperspaceRace heading font-black leading-none flex uppercase overflow-hidden"
							/>
							<span
								className={`w-fit flex overflow-hidden text-white font-HyperspaceRace heading font-black leading-tight uppercase `}>
								{"king".split(" ").map((word, index) => (
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
						</h1>
					</div>
					<div className="absolute top-12 -right-[70%] lg:right-0 md:-right-1/2 md:w-[350px] md:-top-1/2 h-[400px] blur-[120px] bg-gradient-to-b from-[#007DFE] via-[#2f84da] to-[#007DFE] rounded-full w-[500px] overflow-hidden md:hidden" />
					<div className="flex flex-col gap-6 relative z-50">
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
				</div>
			</div>
		</div>
	);
}
