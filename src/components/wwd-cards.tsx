import React, { useRef } from "react";
import { Link } from "react-router-dom";
import TextMask from "./text-mask.tsx";
import Button from "../components/button.tsx";
import { GoArrowUpRight } from "react-icons/go";
import AnimatedText from "../components/animated-text.tsx";
import { useTransform, motion, useScroll } from "framer-motion";
import { serviceImg1, serviceImg2, serviceImg3 } from "../assets/index.ts";

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

	const imageScale1 = useTransform(scrollYProgress1, [0, 1], [0.6, 0.85]);
	const imageScale2 = useTransform(scrollYProgress2, [0, 1], [0.6, 0.85]);
	const imageScale3 = useTransform(scrollYProgress3, [0, 1], [0.6, 0.85]);

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
					<div className="w-1/2 flex flex-col gap-5 relative sm:w-full xm:w-full md:w-full">
						<div className="flex flex-col gap-3">
							<h1 className="text-[#F99A03] font-HyperspaceRace text-[35px] font-black leading-tight capitalize mb-2">
								<TextMask>{["Services We Offer"]}</TextMask>
							</h1>
							<div className="w-full flex gap-3 flex-col">
								<AnimatedText
									text="Professional TV"
									className="text-white font-HyperspaceRace capitalize heading font-black leading-tight flex overflow-hidden -mt-8"
								/>
								<AnimatedText
									text="Mounting Services"
									className="text-white font-HyperspaceRace capitalize heading font-black leading-tight flex overflow-hidden -mt-8"
								/>
								<AnimatedText
									text="You Can Trust"
									className="text-white font-HyperspaceRace capitalize heading font-black leading-tight flex overflow-hidden -mt-8"
								/>
							</div>
						</div>
						<div className="flex flex-col gap-6 relative z-50">
							<div className="w-[80%] text-white font-Monstrate paragraph leading-loose sm:w-full xm:w-full">
								<TextMask>
									{[
										"At The Mounting King, we specialize in providing top-notch TV mounting services (We also hang everything else...curtains, blinds, shelves, art, electric fireplaces, etc...). We have a team of experts and are committed to ensuring customer satisfaction and delivering exceptional TV mounting results.",
									]}
								</TextMask>
							</div>
							<div className="w-fit flex items-center justify-between bg-[#F99A03] cursor-pointer rounded-lg group">
								<Button
									bgcolor="#212121"
									to="/services"
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
							<img
								src={serviceImg1}
								alt="serviceImg"
								width={1000}
								height={1000}
								className="w-full object-cover h-full"
							/>
							<div className="absolute top-0 left-0 z-50 w-full h-full flex items-center justify-center gap-4 p-5">
								<div className="px-10 flex flex-col gap-3">
									<h1 className="text-[#F99A03] font-HyperspaceRace text-[35px] font-black leading-tight capitalize text-center">
										Professional TV Mounting Services
									</h1>
									<p className="text-white font-Monstrate text-[18px] text-center">
										At The Mounting King, we offer expert TV mounting, cable
										management, and soundbar installation services.
									</p>
								</div>
								<Link
									to="/services"
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
							<img
								src={serviceImg2}
								alt="whatwedoImg"
								className="w-full object-cover"
							/>
							<div className="absolute top-0 left-0 z-50 w-full h-full flex items-center justify-center gap-4 p-5">
								<div className="flex flex-col gap-3">
									<h1 className="text-[#F99A03] font-HyperspaceRace text-[35px] font-black leading-tight capitalize text-center">
										Efficient Cable Management Solutions
									</h1>
									<p className="text-white font-Monstrate text-[18px] text-center">
										Say goodbye to tangled cables and messy entertainment
										centers. Our cable management solutions are designed to keep
										your space neat and clutter-free.
									</p>
								</div>
								<Link
									to="/services"
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
							<img
								src={serviceImg3}
								alt="whatwedoImg"
								className="w-full object-cover"
							/>
							<div className="absolute top-0 left-0 z-50 w-full h-full flex items-center justify-center gap-4 p-5">
								<div className="flex flex-col gap-3">
									<h1 className="text-[#F99A03] font-HyperspaceRace text-[35px] font-black leading-tight capitalize text-center">
										The Frame by Samsung
									</h1>
									<p className="text-white font-Monstrate text-[18px] leading-tight text-center">
										The Frame by Samsung (Samsung Frame) is one of the trickiest
										TV mounting situation. We specialize in The Frame.
									</p>
								</div>
								<Link
									to="/services"
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
		</>
	);
}
