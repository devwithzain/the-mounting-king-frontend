"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useTransform, motion, useScroll } from "framer-motion";
import { serviceImg1, serviceImg2, serviceImg3 } from "@/public";
import { AnimatedText, RoundButton, TextMask } from "@/components/client";

export default function WWDCards() {
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

	const imageX1 = useTransform(scrollYProgress1, [0, 1], [100, 0]);
	const imageX2 = useTransform(scrollYProgress2, [0, 1], [-100, 0]);
	const imageX3 = useTransform(scrollYProgress3, [0, 1], [100, 0]);

	return (
		<>
			<div
				ref={container1}
				className="h-auto flex items-center justify-center sticky top-20 w-full xm:static sm:static ">
				<motion.div className="w-full flex justify-between rounded-[30px] relative -top-[45%] h-fit min-h-[700px] items-center transform origin-top xm:flex-col sm:flex-col bg-[#0D0D1E] py-5">
					<div className="w-1/2 flex flex-col gap-5 relative sm:w-full xm:w-full md:w-full pl-14 py-5  xm:px-5 sm:pl-5">
						<div className="flex flex-col gap-3">
							<h1 className="text-[#F99A03] font-HyperspaceRace subHeading font-black leading-tight capitalize">
								<TextMask>{["Services We Offer"]}</TextMask>
							</h1>
							<div className="w-full flex gap-3 flex-col">
								<AnimatedText
									text="Professional TV Mounting Services You Can Trust"
									className="text-white font-HyperspaceRace capitalize heading font-black leading-tight flex overflow-hidden"
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
								<RoundButton
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
						style={{ scale: imageScale1, x: imageX1 }}>
						<div className="relative">
							<Image
								src={serviceImg1}
								alt="serviceImg"
								width={1000}
								height={1000}
								className="w-full object-cover h-full"
							/>
							<div className="absolute top-0 left-0 z-50 w-full h-full flex items-center justify-center gap-4 p-5 backdrop-blur-md bg-black/30 xm:items-start sm:items-start">
								<div className="px-10 flex flex-col gap-3 xm:px-4 sm:px-4">
									<h1 className="text-[#F99A03] font-HyperspaceRace subHeading font-black leading-tight capitalize text-center xm:text-left sm:text-left">
										Professional TV Mounting Services
									</h1>
									<p className="text-white font-Monstrate paragraph text-center xm:text-left sm:text-left">
										At The Mounting King, we offer expert TV mounting, cable
										management, and soundbar installation services.
									</p>
								</div>
								<Link
									href="/services"
									className="absolute right-5 bottom-5 flex items-center justify-center w-20 h-20 p-4 bg-white/20 rounded-full hover:rotate-[-45deg] transition-all duration-300 ease-in-out backdrop-blur-sm xm:w-16 xm:h-16 sm:w-16 sm:h-16">
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
				className="h-auto flex items-center justify-center sticky top-20 xm:static sm:static w-full">
				<motion.div className="w-full flex justify-between rounded-[30px] relative -top-[45%] h-fit min-h-[700px] items-center transform origin-top xm:flex-col sm:flex-col bg-[#1F1F3D] py-5">
					<div className="w-1/2 flex flex-col gap-5 relative sm:w-full xm:w-full md:w-full pl-14 py-5  xm:px-5 sm:pl-5">
						<div className="flex flex-col gap-3">
							<h1 className="text-[#F99A03] font-HyperspaceRace subHeading font-black leading-tight capitalize mb-2">
								<TextMask>{["Services We Offer"]}</TextMask>
							</h1>
							<div className="w-full flex flex-col">
								<AnimatedText
									text="Efficient Cable Management Solutions"
									className="text-white font-HyperspaceRace capitalize heading font-black leading-tight flex overflow-hidden"
								/>
							</div>
						</div>
						<div className="flex flex-col gap-6 relative z-50">
							<div className="w-[80%] text-white font-Monstrate paragraph leading-loose sm:w-full xm:w-full">
								<TextMask>
									{[
										"Say goodbye to tangled cables and messy entertainment centers. Our cable management solutions are designed to keep your space neat and clutter-free.",
									]}
								</TextMask>
							</div>
							<div className="w-fit flex items-center justify-between bg-[#F99A03] cursor-pointer rounded-lg group">
								<RoundButton
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
						style={{ scale: imageScale2, x: imageX2 }}>
						<div className="relative">
							<Image
								src={serviceImg2}
								alt="whatwedoImg"
								className="w-full object-cover"
							/>
							<div className="absolute top-0 left-0 z-50 w-full h-full flex items-center justify-center gap-4 p-5 backdrop-blur-md bg-black/30">
								<div className="flex flex-col gap-3">
									<h1 className="text-[#F99A03] font-HyperspaceRace subHeading font-black leading-tight capitalize text-center xm:text-left sm:text-left">
										Efficient Cable Management Solutions
									</h1>
									<p className="text-white font-Monstrate paragraph text-center xm:text-left sm:text-left">
										Say goodbye to tangled cables and messy entertainment
										centers. Our cable management solutions are designed to keep
										your space neat and clutter-free.
									</p>
								</div>
								<Link
									href="/services"
									className="absolute right-5 bottom-5 flex items-center justify-center w-20 h-20 p-4 bg-white/20 rounded-full hover:rotate-[-45deg] transition-all duration-300 ease-in-out backdrop-blur-sm xm:w-16 xm:h-16 sm:w-16 sm:h-16">
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
				className="h-auto flex items-center justify-center sticky top-20 xm:static sm:static w-full">
				<motion.div className="w-full flex justify-between rounded-[30px] relative -top-[45%] h-fit min-h-[700px] items-center transform origin-top xm:flex-col sm:flex-col bg-[#0D0D1E] py-5">
					<div className="w-1/2 flex flex-col gap-5 relative sm:w-full xm:w-full md:w-full pl-14 py-5  xm:px-5 sm:px-5">
						<div className="flex flex-col gap-3">
							<h1 className="text-[#F99A03] font-HyperspaceRace subHeading font-black leading-tight capitalize mb-2">
								<TextMask>{["Services We Offer"]}</TextMask>
							</h1>
							<div className="w-full flex flex-col">
								<AnimatedText
									text="The Frame by Samsung"
									className="text-white font-HyperspaceRace capitalize heading font-black leading-tight flex overflow-hidden"
								/>
							</div>
						</div>
						<div className="flex flex-col gap-6 relative z-50">
							<div className="w-[80%] text-white font-Monstrate paragraph leading-loose sm:w-full xm:w-full">
								<TextMask>
									{[
										"The Frame by Samsung (Samsung Frame) is one of the trickiest TV mounting situation. We specialize in The Frame.",
									]}
								</TextMask>
							</div>
							<div className="w-fit flex items-center justify-between bg-[#F99A03] cursor-pointer rounded-lg group">
								<RoundButton
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
						style={{ scale: imageScale3, x: imageX3 }}>
						<div className="relative">
							<Image
								src={serviceImg3}
								alt="whatwedoImg"
								className="w-full object-cover"
							/>
							<div className="absolute top-0 left-0 z-50 w-full h-full flex items-center justify-center gap-4 p-5 backdrop-blur-md bg-black/30">
								<div className="flex flex-col gap-3">
									<h1 className="text-[#F99A03] font-HyperspaceRace subHeading font-black leading-tight capitalize text-center xm:text-left sm:text-left">
										The Frame by Samsung
									</h1>
									<p className="text-white font-Monstrate paragraph text-center xm:text-left sm:text-left">
										The Frame by Samsung (Samsung Frame) is one of the trickiest
										TV mounting situation. We specialize in The Frame.
									</p>
								</div>
								<Link
									href="/services"
									className="hover:rotate-[-45deg] transition-all duration-300 ease-in-out absolute right-5 bottom-5 flex items-center justify-center w-20 h-20 p-4 bg-white/20 rounded-full backdrop-blur-sm xm:w-16 xm:h-16 sm:w-16 sm:h-16">
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
