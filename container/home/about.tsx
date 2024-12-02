"use client";
import Image from "next/image";
import { aboutCrownR } from "@/public";
import { motion } from "framer-motion";
import Whatwedo from "@/components/whatwedo";
import { AnimatedText, Button, LogoTicker, TextMask } from "@/components";

export default function AboutServices() {
	return (
		<div className="w-full padding-y relative mt-60 flex flex-col gap-40 xm:mt-20 sm:mt-20 sm:gap-20 xm:gap-20">
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
			<div className="w-full flex items-center gap-10 justify-start padding-x xm:flex-col-reverse sm:flex-col-reverse">
				<div className="h-[750px] overflow-hidden [mask-image:linear-gradient(to_top,transparent,black_25%,black_75%,transparent)]">
					<LogoTicker />
				</div>
				<div className="w-1/2 flex flex-col gap-8 relative z-50 xm:w-full sm:w-full">
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
						<h1 className="relative z-50 flex flex-col gap-4">
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
										className="inline-block whitespace-nowrap bg-[url('/textRapper.png')] bg-right bg-no-repeat -mt-4 xm:mt-0 sm:mt-0 w-full bg-cover">
										{word}
									</motion.p>
								))}
							</span>
						</h1>
					</div>
					<div className="absolute top-12 -right-[70%] lg:right-0 md:-right-1/2 md:w-[350px] md:-top-1/2 h-[400px] blur-[120px] bg-gradient-to-b from-[#007DFE] via-[#2f84da] to-[#007DFE] rounded-full w-[500px] overflow-hidden md:hidden xm:hidden sm:hidden" />
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
