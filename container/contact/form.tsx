"use client";
import Image from "next/image";
import { arrowRight, heroCloud } from "@/public";

export default function ContactForm() {
	return (
		<div className="w-full py-80 relative bg-gradient-to-b from-[#6A9BBE] via-[#00497C] to-[#6A9BBE]">
			<div className="absolute -top-60">
				<Image
					alt="heroCloudImg"
					src={heroCloud}
					className="w-full h-full object-cover rotate-180"
				/>
			</div>
			<div className="w-full h-full flex items-center justify-center">
				<div className="w-full">
					<div className="w-full flex flex-col gap-5 px-40">
						<h1 className="text-white flex-1 font-HyperspaceRace text-[98px] font-black leading-[100px] capitalize">
							Contact Us <br /> For More Info
						</h1>
						<p className="text-white flex-1 font-Monstrate text-[20px] leading-normal">
							It is a long established fact that a reader will be distracted by{" "}
							<br />
							the readable content of a page when looking at its layout.
						</p>
					</div>
					<div className="flex flex-col gap-8 mt-20 px-40">
						<input
							type="text"
							placeholder="Name"
							className="w-full p-5 rounded-lg bg-white/20 border border-white backdrop-blur-[5px] placeholder:text-white text-white outline-none"
						/>
						<input
							type="number"
							placeholder="Mobile Number"
							className="w-full p-5 rounded-lg bg-white/20 border border-white backdrop-blur-[5px] placeholder:text-white text-white outline-none"
						/>
						<input
							type="number"
							placeholder="Postcode"
							className="w-full p-5 rounded-lg bg-white/20 border border-white backdrop-blur-[5px] placeholder:text-white text-white outline-none"
						/>
						<input
							type="number"
							placeholder="TV Size"
							className="w-full p-5 rounded-lg bg-white/20 border border-white backdrop-blur-[5px] placeholder:text-white text-white outline-none"
						/>
						<textarea
							rows={10}
							placeholder="Special Request"
							className="w-full p-5 rounded-lg bg-white/20 border border-white backdrop-blur-[5px] placeholder:text-white text-white outline-none"
						/>
						<div className="w-fit flex gap-3 justify-center items-center bg-[#F99A03] px-6 py-3 rounded-lg group">
							<button className="w-fit text-white font-Monstrate text-[20px] font-normal leading-tight tracking-tight">
								Submit
							</button>
							<Image
								src={arrowRight}
								alt="arrowRightImg"
								width={30}
								height={30}
								className="group-hover:translate-x-2 ease-in-out transition-all duration-300"
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
