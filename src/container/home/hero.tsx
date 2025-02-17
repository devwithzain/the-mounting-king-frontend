import React from "react";
import Button from "../../components/button.tsx";
import Rounded from "../../components/rounded.tsx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
	arrowRight,
	drackula,
	g,
	i,
	king,
	m,
	n,
	o,
	punch,
	t,
	the,
	u,
} from "../../assets/index.ts";

export default function HomeHero() {
	return (
		<>
			<div className="w-full h-screen flex items-center relative justify-center xm:hidden sm:hidden">
				<div className="w-full h-screen mt-10 absolute top-0 left-0 flex items-center justify-center flex-col">
					<div className="w-full py-5 z-50 padding-x">
						<div className="w-full flex items-end justify-end overflow-hidden">
							<motion.div
								initial={{ y: "100%" }}
								whileInView={{ y: 0 }}
								transition={{
									duration: 1,
									ease: [0.4, 0, 0.2, 1],
								}}
								viewport={{ once: true }}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="221"
									height="56"
									viewBox="0 0 221 56"
									fill="none">
									<path
										d="M43.8025 13.9867V55.5072H28.1336V13.9867H5.16757L0.0732422 0.740228V0.146484H73.46C74.98 0.146484 75.6628 0.906477 75.6628 2.42646V16.801L61.1398 22.1981H60.5461V14.8238C60.5461 14.2301 60.3145 13.9867 59.7089 13.9867H43.8025Z"
										fill="#1F1F3D"
									/>
									<path
										d="M96.8535 22.1981H96.3251V55.5072H80.6799V0.146484H96.3488V20.6782H133.303V0.146484H149.05V55.5072H133.303V34.2155H101.52L96.8535 22.1981Z"
										fill="#1F1F3D"
									/>
									<path
										d="M172.312 23.4925H171.784V40.0698C171.784 40.7586 172.01 41.1386 172.847 41.1386H219.539V55.5072H158.324C156.804 55.5072 156.115 54.7472 156.115 53.2272V2.42646C156.115 0.906477 156.822 0.146484 158.324 0.146484H217.793C219.313 0.146484 220.073 0.906477 220.073 2.42646V16.801L205.55 22.1981H204.957V14.8238C204.957 14.2301 204.654 13.9867 204.197 13.9867H172.787C172.649 13.9773 172.51 13.999 172.381 14.0503C172.252 14.1015 172.135 14.181 172.041 14.2828C171.947 14.3847 171.876 14.5064 171.835 14.6391C171.793 14.7717 171.782 14.9119 171.802 15.0495V21.9725H197.659V33.2537H175.964L172.312 23.4925Z"
										fill="#1F1F3D"
									/>
								</svg>
							</motion.div>
						</div>
						<div className="w-fit flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 h-full">
							<motion.div
								initial={{ y: "-100%" }}
								animate={{ y: 0 }}
								transition={{
									duration: 1,
									ease: [0.4, 0, 0.2, 1],
								}}
								viewport={{ once: true }}>
								<img
									alt="drackula"
									src={drackula}
									width={500}
									height={500}
									className="w-[460px] lg:w-[420px] object-cover md:w-[400px]"
								/>
							</motion.div>
							<motion.div
								initial={{ scale: 0 }}
								whileInView={{ scale: 1 }}
								transition={{
									duration: 1,
									ease: [0.4, 0, 0.2, 1],
								}}
								viewport={{ once: true }}>
								<img
									alt="punch"
									src={punch}
									width={400}
									height={400}
									className="xl:w-[450px] w-[350px]"
								/>
							</motion.div>
						</div>
						<div className="w-full flex justify-between items-end gap-4 relative z-10 overflow-hidden my-4">
							{[m, o, u, n, t, i, n, g].map((item, index) => (
								<motion.div
									initial={{ y: "100%" }}
									whileInView={{ y: 0 }}
									transition={{
										delay: index * 0.08,
										duration: 1,
										ease: [0.4, 0, 0.2, 1],
									}}
									viewport={{ once: true }}
									key={index}>
									<img
										src={item}
										alt="lettersImg"
										width={2000}
										height={2000}
										className="w-full object-cover"
									/>
								</motion.div>
							))}
						</div>
						<div className="w-full flex items-start justify-between overflow-hidden">
							<motion.div
								initial={{ y: "100%" }}
								whileInView={{ y: 0 }}
								transition={{
									duration: 1,
									ease: [0.4, 0, 0.2, 1],
								}}
								className="w-full"
								viewport={{ once: true }}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="345"
									height="82"
									viewBox="0 0 345 82"
									fill="none">
									<path
										d="M23.7954 0.908203V33.6594H24.5756L66.88 0.908203H97.9668V1.7751L50.3397 37.5518L100.619 80.8531V81.72H69.2119L24.5756 42.8832H23.7954V81.7373H0.926758V0.908203H23.7954Z"
										fill="#F99A03"
									/>
									<path
										d="M106.627 81.7373V0.908203H129.496V81.7373H106.627Z"
										fill="#F99A03"
									/>
									<path
										d="M176.906 0.908203C180.244 0.908203 181.353 1.90513 182.463 4.12438L213.108 62.2062C213.298 62.6041 213.597 62.9402 213.969 63.1763C214.342 63.4124 214.773 63.5389 215.214 63.5412H216.436C216.671 63.5616 216.908 63.5312 217.13 63.4519C217.352 63.3726 217.554 63.2463 217.722 63.0817C217.891 62.9171 218.022 62.7181 218.107 62.4982C218.192 62.2783 218.228 62.0427 218.214 61.8075V0.908203H239.019V78.5212C239.019 80.6277 238.022 81.7373 235.907 81.7373H203C199.896 81.7373 198.665 80.9658 197.339 78.5212L165.584 20.5607C165.423 20.1397 165.13 19.7823 164.749 19.5416C164.367 19.301 163.919 19.1902 163.469 19.2257H162.36C162.119 19.1945 161.874 19.2189 161.644 19.2972C161.414 19.3755 161.206 19.5055 161.034 19.6772C160.862 19.8488 160.732 20.0576 160.654 20.2875C160.576 20.5173 160.551 20.762 160.582 21.0028V81.7373H139.82V4.23707C139.82 2.01783 140.826 0.908203 142.933 0.908203H176.906Z"
										fill="#F99A03"
									/>
									<path
										d="M322.692 47.0963C322.688 44.7161 322.503 42.3396 322.137 39.9878V38.9908H344.789V78.6339C344.789 80.6277 344.008 81.7373 342.015 81.7373H281.167C257.068 81.7373 248.225 69.1934 248.225 49.6623V32.9833C248.225 13.4348 257.102 0.908203 281.167 0.908203H341.676C343.896 0.908203 344.901 2.01783 344.901 4.23707V21.7136L323.688 29.5157H322.822V21.7136C322.822 20.9334 322.483 20.604 321.816 20.604H283.161C274.388 20.604 271.025 23.6035 271.025 33.4861V47.6511C271.025 57.421 274.354 60.7585 283.161 60.7585H321.469C321.641 60.7634 321.812 60.7313 321.97 60.6644C322.128 60.5974 322.27 60.4972 322.386 60.3705C322.502 60.2439 322.589 60.0938 322.642 59.9303C322.695 59.7669 322.712 59.5941 322.692 59.4235V47.0963Z"
										fill="#F99A03"
									/>
								</svg>
							</motion.div>
							<div className="w-[65%] flex flex-col gap-3 pl-4">
								<p className="text-black font-Monstrate text-[22px] font-medium">
									We offer same day tv mounting service. To book an appoinment
									click the book now button below.
								</p>
								<div className="w-full flex items-center justify-between bg-[#F99A03] cursor-pointer rounded-[100px] group flex-col animate-bounce mt-8">
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
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full min-h-screen xm:!flex sm:!flex hidden">
				<div className="w-full relative pt-40 h-full flex flex-col items-center justify-center gap-10">
					<div className="flex flex-col gap-5">
						<div className="w-full">
							<motion.div
								initial={{ y: "100%" }}
								whileInView={{ y: 0 }}
								transition={{
									duration: 1,
									ease: [0.4, 0, 0.2, 1],
								}}
								viewport={{ once: true }}>
								<img
									src={the}
									alt="lettersImg"
									width={200}
									height={200}
									className="w-[120px] object-cover"
								/>
							</motion.div>
						</div>
						<div className="w-full flex justify-between items-end gap-4 relative z-10 overflow-hidden">
							{[m, o, u, n, t, i, n, g].map((item, index) => (
								<motion.div
									initial={{ y: "100%" }}
									whileInView={{ y: 0 }}
									transition={{
										delay: index * 0.08,
										duration: 1,
										ease: [0.4, 0, 0.2, 1],
									}}
									viewport={{ once: true }}
									key={index}>
									<img
										src={item}
										alt="lettersImg"
										width={2000}
										height={2000}
										className="w-full object-cover h-full"
									/>
								</motion.div>
							))}
						</div>
						<div className="w-full flex items-start justify-between overflow-hidden">
							<motion.div
								initial={{ y: "100%" }}
								whileInView={{ y: 0 }}
								transition={{
									duration: 1,
									ease: [0.4, 0, 0.2, 1],
								}}
								className="w-full"
								viewport={{ once: true }}>
								<img
									src={king}
									alt="lettersImg"
									width={200}
									height={200}
									className="w-[120px] object-cover"
								/>
							</motion.div>
						</div>
						<div className="w-full flex flex-col gap-3">
							<p className="text-black font-Monstrate text-[20px]">
								Professional TV Mounting Services. Secure and Perfectly
								Positioned. Enhance your viewing experience with our expert
								installation and setup.
							</p>
							<div className="w-fit  items-center justify-between bg-[#F99A03] cursor-pointer rounded-lg group flex">
								<Button
									bgcolor="#212121"
									to="/book-now"
									title="book now"
									className="bg-white text-black"
									style={{ color: "#fff" }}
								/>
							</div>
						</div>
					</div>
					<div className="w-full flex items-center justify-center flex-col gap-2">
						<motion.div
							initial={{ y: "-100%" }}
							animate={{ y: 0 }}
							transition={{
								duration: 1,
								ease: [0.4, 0, 0.2, 1],
							}}
							viewport={{ once: true }}>
							<img
								alt="drackula"
								src={drackula}
								width={500}
								height={500}
								className="w-full object-cover"
							/>
						</motion.div>
						<motion.div
							initial={{ scale: 0 }}
							whileInView={{ scale: 1 }}
							transition={{
								duration: 1,
								ease: [0.4, 0, 0.2, 1],
							}}
							viewport={{ once: true }}>
							<img
								alt="punch"
								src={punch}
								width={400}
								height={400}
								className="w-full"
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
}
