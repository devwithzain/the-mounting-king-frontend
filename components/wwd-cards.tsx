"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import TextMask from "./text-mask";
import { Button } from "@/components";
import AnimatedText from "./animated-text";
import { GoArrowUpRight } from "react-icons/go";
import { useTransform, motion, useScroll } from "framer-motion";
import { serviceImg1, serviceImg2, serviceImg3 } from "@/public";

export default function Card() {
	const container1 = useRef(null);
	const container2 = useRef(null);
	const container3 = useRef(null);

	const { scrollYProgress: scrollYProgress1 } = useScroll({
		target: container1,
		offset: ["start end", "start start"],
	});

	const { scrollYProgress: scrollYProgress2 } = useScroll({
		target: container2,
		offset: ["start end", "start start"],
	});

	const { scrollYProgress: scrollYProgress3 } = useScroll({
		target: container3,
		offset: ["start end", "start start"],
	});

	const imageScale1 = useTransform(scrollYProgress1, [0, 1], [0.7, 1]);
	const imageScale2 = useTransform(scrollYProgress2, [0, 1], [0.7, 1]);
	const imageScale3 = useTransform(scrollYProgress3, [0, 1], [0.7, 1]);

	return (
		<>
			<div
				ref={container1}
				className="h-auto flex items-center justify-center sticky top-1/4 w-full xm:top-[10%] sm:top-[10%] sm:hidden xm:hidden">
				<motion.div
					className="w-full flex justify-between rounded-[30px] relative -top-[45%] h-fit items-center transform origin-top xm:flex-col sm:flex-col"
					style={{
						top: `calc(-5vh + ${1 * 25}px)`,
					}}>
					<div className="w-1/2 flex flex-col gap-8 relative sm:w-full xm:w-full md:w-full">
						<div>
							<h1 className="text-[#F99A03] font-HyperspaceRace text-[35px] font-black leading-tight capitalize">
								<TextMask>{["Services We Offer"]}</TextMask>
							</h1>
							<div className="w-full flex items-center gap-3">
								<AnimatedText
									text="Several"
									className="text-white font-HyperspaceRace heading font-black leading-none flex overflow-hidden -mt-4"
								/>
								<span
									className={`w-fit flex items-center text-white font-HyperspaceRace heading font-black leading-normal xm:mt-3 sm:mt-3`}>
									{"opportunities".split(" ").map((word, index) => (
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
											className="inline-block whitespace-nowrap bg-[url('/textRapper.png')] bg-center bg-no-repeat w-full bg-cover -mt-5">
											{word}
										</motion.p>
									))}
								</span>
							</div>
							<AnimatedText
								text="are waiting for you"
								className="text-white font-HyperspaceRace heading font-black leading-tight flex overflow-hidden"
							/>
						</div>
						<div className="flex flex-col gap-6 relative z-50">
							<div className="w-[80%] text-white font-Monstrate paragraph leading-loose sm:w-full xm:w-full">
								<TextMask>
									{[
										"Lorem ipsum dolor sit amet consectetur. Arcu nec scelerisque sagittis quis egestas sed fasfe consectet ursit amet consectetur, Arcu nec scelerisque sagittis fasdfas Arcu scelerisq ueerisque sagittis  afse quis egestas...",
									]}
								</TextMask>
							</div>
							<div className="w-fit flex items-center justify-between bg-[#F99A03] cursor-pointer rounded-lg group">
								<Button
									bgcolor="#212121"
									href="/services"
									title="all services"
									className="bg-white text-black absolute z-50"
									style={{ color: "#fff" }}
								/>
							</div>
						</div>
					</div>
					<motion.div
						className="w-1/2 xm:w-full sm:w-full h-full flex items-center justify-end"
						style={{ scale: imageScale1 }}>
						<div className="relative">
							<Image
								src={serviceImg1}
								alt="serviceImg"
								width={1000}
								height={1000}
								className="w-full object-cover h-full"
							/>
							<div className="absolute top-0 left-0 z-50 w-full h-full flex items-center justify-center gap-4 p-5">
								<div className="flex flex-col gap-3">
									<h1 className="text-[#F99A03] font-HyperspaceRace text-[35px] font-black leading-tight capitalize text-center">
										TV brackets wall mounts
									</h1>
									<p className="text-white font-Monstrate text-[18px] leading-tight text-center">
										Lorem ipsum dolor sit amet consectetur. <br /> Arcu nec
										scelerisque sagittis quis egestas sed
									</p>
								</div>
								<Link
									href="/services"
									className="absolute right-5 bottom-5 flex items-center justify-center w-20 h-20 p-4 bg-white/20 rounded-full hover:rotate-[-45deg] transition-all duration-300 ease-in-out ">
									<GoArrowUpRight
										size={30}
										strokeWidth={1}
										className="text-white rotate-45"
									/>
								</Link>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
			<div
				ref={container2}
				className="h-auto flex items-center justify-center sticky top-1/4 xm:top-[10%] sm:top-[10%] w-full sm:hidden xm:hidden">
				<motion.div
					style={{
						top: `calc(2vh + ${2 * 25}px)`,
						left: `calc(-20vh + ${2 * 25}px)`,
					}}
					className="w-full flex justify-between rounded-[30px] relative -top-[45%] h-fit items-center transform origin-top xm:flex-col sm:flex-col">
					<div className="w-1/2" />
					<motion.div
						className="w-1/2 xm:w-full sm:w-full h-full flex items-center justify-end"
						style={{ scale: imageScale2 }}>
						<div className="relative">
							<Image
								src={serviceImg2}
								alt="whatwedoImg"
								className="w-full object-cover"
							/>
							<div className="absolute top-0 left-0 z-50 w-full h-full flex items-center justify-center gap-4 p-5">
								<div className="flex flex-col gap-3">
									<h1 className="text-[#F99A03] font-HyperspaceRace text-[35px] font-black leading-tight capitalize text-center">
										TV brackets wall mounts
									</h1>
									<p className="text-white font-Monstrate text-[18px] leading-tight text-center">
										Lorem ipsum dolor sit amet consectetur. <br /> Arcu nec
										scelerisque sagittis quis egestas sed
									</p>
								</div>
								<Link
									href="/services"
									className="absolute right-5 bottom-5 flex items-center justify-center w-20 h-20 p-4 bg-white/20 rounded-full hover:rotate-[-45deg] transition-all duration-300 ease-in-out ">
									<GoArrowUpRight
										size={30}
										strokeWidth={1}
										className="text-white rotate-45"
									/>
								</Link>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
			<div
				ref={container3}
				className="h-auto flex items-center justify-center sticky top-1/4 xm:top-[10%] sm:top-[10%] w-full sm:hidden xm:hidden">
				<motion.div
					style={{
						top: `calc(8vh + ${3 * 25}px)`,
						right: `calc(-10vh + ${3 * 25}px)`,
					}}
					className="w-full flex justify-between rounded-[30px] relative -top-[45%] h-fit items-center transform origin-top xm:flex-col sm:flex-col">
					<div className="w-1/2" />
					<motion.div
						className="w-1/2 xm:w-full sm:w-full h-full flex items-center justify-end"
						style={{ scale: imageScale3 }}>
						<div className="relative">
							<Image
								src={serviceImg3}
								alt="whatwedoImg"
								className="w-full object-cover"
							/>
							<div className="absolute top-0 left-0 z-50 w-full h-full flex items-center justify-center gap-4 p-5">
								<div className="flex flex-col gap-3">
									<h1 className="text-[#F99A03] font-HyperspaceRace text-[35px] font-black leading-tight capitalize text-center">
										TV brackets wall mounts
									</h1>
									<p className="text-white font-Monstrate text-[18px] leading-tight text-center">
										Lorem ipsum dolor sit amet consectetur. <br /> Arcu nec
										scelerisque sagittis quis egestas sed
									</p>
								</div>
								<Link
									href="/services"
									className=" hover:rotate-[-45deg] transition-all duration-300 ease-in-out absolute right-5 bottom-5 flex items-center justify-center w-20 h-20 p-4 bg-white/20 rounded-full">
									<GoArrowUpRight
										size={30}
										strokeWidth={1}
										className="text-white rotate-45"
									/>
								</Link>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
			{/* asd */}
			<div className="w-full sm:!flex xm:!flex hidden flex-col gap-4">
				<div className="w-full flex flex-col gap-8 relative">
					<div>
						<h1 className="text-[#F99A03] font-HyperspaceRace text-[30px] mb-4 font-black leading-tight capitalize">
							<TextMask>{["Services We Offer"]}</TextMask>
						</h1>
						<div className="w-full flex items-center gap-3">
							<AnimatedText
								text="Several"
								className="text-black font-HyperspaceRace heading font-black leading-tight flex overflow-hidden -mt-4"
							/>
							<span
								className={`w-fit flex items-center text-black font-HyperspaceRace heading font-black leading-tight xm:mt-3 sm:mt-3`}>
								{"opportunities".split(" ").map((word, index) => (
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
										className="inline-block whitespace-nowrap bg-[url('/textRapper.png')] bg-center bg-no-repeat w-full bg-cover -mt-5">
										{word}
									</motion.p>
								))}
							</span>
						</div>
						<AnimatedText
							text="are waiting for you"
							className="text-black font-HyperspaceRace heading font-black leading-tight flex overflow-hidden"
						/>
					</div>
					<div className="flex flex-col gap-6 relative z-50">
						<div className="w-full text-black font-Monstrate paragraph leading-loose">
							<TextMask>
								{[
									"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
								]}
							</TextMask>
						</div>
					</div>
				</div>
				<motion.div
					className="w-full h-full flex items-center flex-col gap-4"
					style={{ scale: imageScale1 }}>
					{[serviceImg1, serviceImg2, serviceImg3].map((item, i) => (
						<div
							className="w-full relative"
							key={i}>
							<Image
								src={item}
								alt="serviceImg"
								width={1000}
								height={1000}
								className="w-full object-cover h-full"
							/>
							<div className="absolute top-0 left-0 z-50 w-full h-full flex items-center justify-center gap-4 p-5">
								<div className="flex flex-col gap-3">
									<h1 className="text-[#F99A03] font-HyperspaceRace text-[30px] font-black leading-tight capitalize text-center">
										TV brackets wall mounts
									</h1>
									<p className="text-white font-Monstrate paragraph leading-tight text-center">
										Lorem ipsum dolor sit amet consectetur. <br /> Arcu nec
										scelerisque sagittis quis egestas sed
									</p>
								</div>
								<Link
									href="/services"
									className="absolute right-5 bottom-5 flex items-center justify-center w-16 h-16 p-4 bg-white/20 rounded-full hover:rotate-[-45deg] transition-all duration-300 ease-in-out ">
									<GoArrowUpRight
										size={30}
										strokeWidth={1}
										className="text-white rotate-45"
									/>
								</Link>
							</div>
						</div>
					))}
					<div className="w-fit flex items-center justify-between bg-[#F99A03] cursor-pointer rounded-lg group">
						<Button
							bgcolor="#212121"
							href="/services"
							title="all services"
							className="bg-white text-black absolute z-50"
							style={{ color: "#fff" }}
						/>
					</div>
				</motion.div>
			</div>
		</>
	);
}
