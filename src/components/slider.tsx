import "swiper/css";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import TextMask from "./text-mask.tsx";
import { Link } from "react-router-dom";
import Button from "../components/button.tsx";
import AnimatedText from "./animated-text.tsx";
import HomeHero from "../container/home/hero.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {
	arrowRight,
	footerCrown,
	slider01,
	slider02,
} from "../assets/index.ts";
import Rounded from "./rounded.tsx";

export default function Slider() {
	const swiperRef = useRef<any | null>(null);

	return (
		<div
			id="transformation"
			className="w-full relative overflow-hidden">
			<div className="absolute -right-10 top-40 h-[500px] blur-[150px] bg-gradient-to-b from-[#007DFE] via-[#c092df] to-[#007DFE] rounded-full w-[500px] overflow-hidden xm:hidden sm:hidden" />
			<div className="absolute left-10 top-40 hidden xl:block">
				<img
					src={footerCrown}
					alt="footerCrown"
					width={280}
					height={280}
				/>
			</div>
			<div className="w-full h-full items-center flex justify-center">
				<div className="w-full overflow-hidden">
					<Swiper
						modules={[Navigation, Autoplay]}
						loop
						autoplay={{
							delay: 4000,
							disableOnInteraction: false,
						}}
						spaceBetween={30}
						onSwiper={(swiper) => (swiperRef.current = swiper)}>
						<SwiperSlide>
							<div className="padding-x">
								<HomeHero />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="w-full min-h-screen flex items-center lg:items-end lg:pb-10 justify-center gap-20  xm:pt-28 sm:pt-28 padding-x">
								<div className="xm:flex-col sm:flex-col container gap-10 mx-auto flex items-center justify-between md:mt-20 lg:mt-20">
									<div className="w-1/2 flex flex-col gap-2 xl:gap-5 xm:w-full sm:w-full">
										<div className="flex items-center gap-2">
											<AnimatedText
												text="TV"
												className="text-[#1F1F3D] text-center font-HyperspaceRace heading font-bold leading-tight capitalize"
											/>
											<span
												className={`w-fit textRapper flex text-white font-HyperspaceRace heading font-black leading-normal capitalize`}>
												{"Mounting".split(" ").map((word, index) => (
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
														className="inline-block whitespace-nowrap w-full">
														{word}
													</motion.p>
												))}
											</span>
										</div>
										<AnimatedText
											text="Made Simple"
											className="text-[#1F1F3D] text-center font-HyperspaceRace heading font-bold leading-tight capitalize"
										/>
										<div className="text-[#1F1F3D] font-Monstrate paragraph leading-normal flex flex-col gap-3">
											<TextMask>
												{[
													"Mounting your TV has never been easier! With our expert installation, you get a sleek, secure setup that enhances your space without the hassle.",
												]}
											</TextMask>
											<TextMask>
												{[
													"Our professional team guarantees a quick, damage-free installation, giving you the best viewing experience with minimal effort.",
												]}
											</TextMask>
										</div>
										<div className="w-full flex items-center justify-between bg-[#F99A03] cursor-pointer rounded-[100px] group flex-col animate-bounce mt-8 xm:hidden sm:hidden md:hidden">
											<Link
												className="w-full text-lg uppercase font-normal font-Monstrate rounded-[100px]"
												to="/book-now">
												<Rounded
													className={`rounded-[100px] flex flex-col relative w-full`}
													backgroundColor="#212121"
													style={{ borderRadius: "100px" }}>
													<p className="text-white text-xl group-hover:text-white z-[9999] absolute top-3">
														Click here to
													</p>
													<div className="flex items-center gap-3">
														<p
															className="z-10 px-[10px] ml-[15px] py-[6px] rounded-[100px]"
															style={{
																color: "#fff",
																fontSize: "35px",
																padding: "50px 15px ",
																borderRadius: "100px",
															}}>
															Book Now
														</p>
														<div className={`p-[10px] mr-7`}>
															<img
																src={arrowRight}
																className="group-hover:rotate-[-45deg] w-14 h-14 font-bold transition-all duration-200 ease-linear text-white z-[999] relative"
																alt="arrowRightImg"
															/>
														</div>
													</div>
													{/* Added text below the button */}
													<p className="text-white text-xl mt-2 absolute top-20 group-hover:text-white z-[9999]">
														Or To quote your job
													</p>
												</Rounded>
											</Link>
										</div>
										<div className="w-fit  items-center justify-between bg-[#F99A03] cursor-pointer rounded-lg group hidden sm:flex xm:flex md:flex">
											<Button
												bgcolor="#212121"
												to="/book-now"
												title="book now"
												className="bg-white text-black"
												style={{ color: "#fff" }}
											/>
										</div>
									</div>
									<Link
										to="/book-now"
										className="w-auto cursor-pointer">
										<img
											alt="slider01"
											src={slider01}
											className="w-[550px] object-cover md:w-[370px] lg:w-[420px]"
										/>
									</Link>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="w-full min-h-screen flex items-center lg:items-end lg:pb-10 justify-center gap-20  xm:pt-28 sm:pt-28 padding-x">
								<div className="xm:flex-col sm:flex-col container gap-10 mx-auto flex items-center justify-between md:mt-20 lg:mt-20">
									<div className="w-1/2 flex flex-col gap-2 xl:gap-5 xm:w-full sm:w-full">
										<div className="flex items-center gap-2">
											<AnimatedText
												text="TV"
												className="text-[#1F1F3D] text-center font-HyperspaceRace heading font-bold leading-tight capitalize"
											/>
											<span
												className={`w-fit textRapper flex text-white font-HyperspaceRace heading font-black leading-normal capitalize`}>
												{"Mounting".split(" ").map((word, index) => (
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
														className="inline-block whitespace-nowrap w-full">
														{word}
													</motion.p>
												))}
											</span>
										</div>
										<AnimatedText
											text="Made Simple"
											className="text-[#1F1F3D] text-center font-HyperspaceRace heading font-bold leading-tight capitalize"
										/>
										<div className="text-[#1F1F3D] font-Monstrate paragraph leading-normal flex flex-col gap-3">
											<TextMask>
												{[
													"Mounting your TV has never been easier! With our expert installation, you get a sleek, secure setup that enhances your space without the hassle.",
												]}
											</TextMask>
											<TextMask>
												{[
													"Our professional team guarantees a quick, damage-free installation, giving you the best viewing experience with minimal effort.",
												]}
											</TextMask>
										</div>
										<div className="w-full flex items-center justify-between bg-[#F99A03] cursor-pointer rounded-[100px] group flex-col animate-bounce mt-8 xm:hidden sm:hidden md:hidden">
											<Link
												className="w-full text-lg uppercase font-normal font-Monstrate rounded-[100px]"
												to="/book-now">
												<Rounded
													className={`rounded-[100px] flex flex-col relative w-full`}
													backgroundColor="#212121"
													style={{ borderRadius: "100px" }}>
													<p className="text-white text-xl group-hover:text-white z-[9999] absolute top-3">
														Click here to
													</p>
													<div className="flex items-center gap-3">
														<p
															className="z-10 px-[10px] ml-[15px] py-[6px] rounded-[100px]"
															style={{
																color: "#fff",
																fontSize: "35px",
																padding: "50px 15px ",
																borderRadius: "100px",
															}}>
															Book Now
														</p>
														<div className={`p-[10px] mr-7`}>
															<img
																src={arrowRight}
																className="group-hover:rotate-[-45deg] w-14 h-14 font-bold transition-all duration-200 ease-linear text-white z-[999] relative"
																alt="arrowRightImg"
															/>
														</div>
													</div>
													{/* Added text below the button */}
													<p className="text-white text-xl mt-2 absolute top-20 group-hover:text-white z-[9999]">
														Or To quote your job
													</p>
												</Rounded>
											</Link>
										</div>
										<div className="w-fit  items-center justify-between bg-[#F99A03] cursor-pointer rounded-lg group hidden sm:flex xm:flex md:flex">
											<Button
												bgcolor="#212121"
												to="/book-now"
												title="book now"
												className="bg-white text-black"
												style={{ color: "#fff" }}
											/>
										</div>
									</div>
									<Link
										to="/book-now"
										className="w-auto cursor-pointer">
										<img
											alt="slider02"
											src={slider02}
											className="w-[550px] object-cover md:w-[370px] lg:w-[420px]"
										/>
									</Link>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
}
