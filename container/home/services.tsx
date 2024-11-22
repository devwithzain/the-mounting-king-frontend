"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
	advantage,
	heroCloud,
	marketValue,
	time,
	arrowRight,
	aboutOne,
	aboutTwo,
	aboutThree,
	aboutFour,
	aboutFive,
	aboutSix,
	aboutSeven,
	aboutCrownR,
	aboutCrownL,
} from "@/public";

export default function AboutUs() {
	return (
		<div
			className="w-full py-80 relative"
			style={{
				background:
					"linear-gradient(0deg, rgba(106,155,190,1) 0%, rgba(0,73,124,1) 30%, rgba(0,73,124,1) 50%, rgba(0,73,124,1) 70%, rgba(106,155,190,1) 100%)",
			}}>
			<div className="absolute -top-60">
				<Image
					alt="heroCloudImg"
					src={heroCloud}
					className="w-full h-full object-cover rotate-180"
				/>
			</div>
			<div className="w-full flex flex-col gap-40">
				<div className="w-full flex items-start gap-10 justify-center px-80">
					<div className="w-full flex gap-2">
						<div className="flex flex-col gap-2">
							<Image
								src={aboutTwo}
								alt="sda"
								width={250}
								height={250}
								className="w-full object-cover"
							/>
							<Image
								src={aboutFour}
								alt="sda"
								width={250}
								height={250}
								className="w-full object-cover"
							/>
							<Image
								src={aboutSix}
								alt="sda"
								width={250}
								height={250}
								className="w-full object-cover"
							/>
						</div>
						<div className="flex flex-col gap-2 -mt-7">
							<Image
								src={aboutOne}
								alt="sda"
								width={250}
								height={250}
								className="w-full object-cover"
							/>
							<Image
								src={aboutThree}
								alt="sda"
								width={250}
								height={250}
								className="w-full object-cover"
							/>
							<Image
								src={aboutFive}
								alt="sda"
								width={250}
								height={250}
								className="w-full object-cover"
							/>
							<Image
								src={aboutSeven}
								alt="sda"
								width={250}
								height={250}
								className="w-full object-cover"
							/>
						</div>
					</div>
					<div className="w-full flex flex-col gap-8 relative">
						<div className="absolute -top-20 -right-60">
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
							<h1 className="text-white font-HyperspaceRace text-[98px] font-black leading-none capitalize">
								The Mounting <br />
								King
							</h1>
						</div>
						<div className="absolute top-12 -right-full h-[500px] blur-[120px] bg-gradient-to-b from-[#007DFE] via-[#2f84da] to-[#007DFE] rounded-full w-[500px]" />
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
				<div className="flex flex-col gap-20 relative">
					<div className="absolute -top-20 left-0">
						<Image
							alt="aboutCrownL"
							src={aboutCrownL}
							width={300}
							height={300}
						/>
					</div>
					<div>
						<h1 className="text-white text-center font-HyperspaceRace text-[98px] font-black leading-none capitalize">
							Advantage of <br /> Our Mounting King Service
						</h1>
					</div>
					<div className="w-full flex items-center justify-center flex-col gap-20 relative">
						<div className="absolute -left-60 h-[500px] blur-[120px] bg-gradient-to-b from-[#007DFE] via-[#2f84da] to-[#007DFE] rounded-full w-[500px]" />
						<div className="w-[80%] flex justify-between gap-5 z-50">
							<div className="flex flex-col gap-3 w-[300px]">
								<Image
									src={marketValue}
									alt="marketValueImg"
									width={80}
									height={80}
								/>
								<h1 className="text-white  text-[40px] font-bold leading-tight capitalize">
									High Market <br /> Value
								</h1>
								<p className="text-white font-Monstrate text-[18px] leading-tight capitalize">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industrys
									standard dummy text ever
								</p>
							</div>
							<div className="flex flex-col gap-3 w-[300px]">
								<Image
									src={time}
									alt="timeImg"
									width={80}
									height={80}
								/>
								<h1 className="text-white  text-[40px] font-bold leading-tight capitalize">
									Save Time and <br /> Resources
								</h1>
								<p className="text-white font-Monstrate text-[18px] leading-tight capitalize">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industrys
									standard dummy text ever
								</p>
							</div>
							<div className="flex flex-col gap-3 w-[300px]">
								<Image
									src={advantage}
									alt="advantageImg"
									width={80}
									height={80}
								/>
								<h1 className="text-white  text-[40px] font-bold leading-tight capitalize">
									Gain Your <br /> Advantage
								</h1>
								<p className="text-white font-Monstrate text-[18px] leading-tight capitalize">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industrys
									standard dummy text ever
								</p>
							</div>
						</div>
						<div className="w-fit flex gap-3 justify-center items-center bg-[#F99A03] px-10 py-3">
							<button className="w-fit text-white font-Monstrate text-[20px] font-normal leading-tight tracking-tight">
								Request A Quote
							</button>
							<Image
								src={arrowRight}
								alt="arrowRightImg"
								width={30}
								height={30}
							/>
						</div>
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
