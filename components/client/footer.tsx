"use client";
import {
	crown,
	emailIcon,
	footerCrown,
	footerLogo,
	king,
	mountingText,
	the,
	footerBackground,
} from "@/public";
import Link from "next/link";
import Image from "next/image";
import { TbWorld } from "react-icons/tb";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { Badal, Marquee } from "@/components/client";
import { FaFacebook, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
	return (
		<div className="w-full min-h-screen pb-5 relative pt-80 xm:!pt-10 sm:!pt-10 md:pt-16 lg:pt-20">
			<div className="w-full absolute -top-80 lg:-top-60 z-50  md:-top-40 xm:hidden sm:hidden">
				<Badal />
			</div>
			<div className="absolute w-full top-0 left-0">
				<Image
					alt="footerBackground"
					src={footerBackground}
					className="w-full h-full"
				/>
			</div>
			<div className="w-full py-10 mb-40 mt-20 relative z-50 xm:mb-0 sm:mb-0 xm:mt-0 sm:mt-0">
				<div className="w-full absolute top-0 left-0 rotate-6 bg-[#F99A03]">
					<Marquee baseVelocity={2}>
						<h1 className="text-white uppercase heading font-HyperspaceRace font-bold leading-tight mb-3 xm:mb-1 sm:mb-1 tracking-tight">
							THE MOUNTING KING
						</h1>
					</Marquee>
				</div>
				<div className="w-full absolute top-0 left-0 -rotate-6 bg-[#1F1F3D]">
					<Marquee baseVelocity={-2}>
						<h1 className="text-white uppercase heading font-HyperspaceRace font-bold leading-tight mb-3 xm:mb-1 sm:mb-1 tracking-tight">
							THE MOUNTING KING
						</h1>
					</Marquee>
				</div>
			</div>
			<div className="w-full padding-x py-5 relative flex flex-col gap-2">
				<div className="absolute -left-10 xm:hidden sm:hidden">
					<Image
						src={footerCrown}
						alt="footerCrown"
					/>
				</div>
				<div className="w-full flex items-end justify-end sm:justify-start xm:justify-start">
					<Image
						src={the}
						alt="lettersImg"
						className="w-[350px] sm:!w-[150px] xm:!w-[150px] object-cover"
					/>
				</div>
				<Image
					src={mountingText}
					alt="mountingText"
					className="w-full object-cover h-full"
				/>
				<div className="w-full flex items-start justify-start">
					<Image
						src={king}
						alt="lettersImg"
						className="w-[350px] sm:!w-[150px] xm:!w-[150px] object-cover"
					/>
				</div>
			</div>
			<div className="padding-x relative">
				<div className="w-full flex flex-col gap-20 rounded-[26px] bg-[radial-gradient(154.25%_82%_at_32.7%_40.44%,#2D2D51_0%,#00011A_57%,#0E0E30_100%)] py-10 px-40 sm:px-6 xm:px-6 md:px-6 xm:gap-10 sm:gap-10">
					<div className="w-full flex items-center justify-between gap-5 rounded-lg p-5 bg-white/15 backdrop-blur-[5px] xm:flex-col sm:flex-col">
						<div className="flex flex-col gap-6">
							<h1 className="text-white font-HyperspaceRace text-[35px] font-black leading-[42px] tracking-[2px]">
								Subscribe
							</h1>
							<p className="text-white text-[18px] font-Monstrate">
								Join our newsletter to stay up to date on features and releases.
							</p>
						</div>
						<div className="xm:!w-full sm:!w-full">
							<form className="rounded-lg px-6 py-3 flex justify-between items-center xm:items-start sm:items-start bg-white gap-10 sm:px-2 xm:px-2 xm:py-1 sm:py-1 sm:flex-col xm:flex-col sm:gap-2 xm:gap-2">
								<div className="flex items-center gap-3">
									<Image
										src={emailIcon}
										alt="emailIcon"
									/>
									<input
										type="text"
										className="text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-tight tracking-tight placeholder:text-[#0E0E30] outline-none border-none sm:text-sm xm:text-sm w-fit"
										placeholder="Enter your email"
									/>
								</div>
								<button className="text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-tight tracking-tight sm:text-sm xm:text-sm sm:bg-[#F99A03] xm:bg-[#F99A03] xm:text-white sm:text-white sm:py-2 xm:py-2 sm:px-4 xm:px-4 rounded-lg">
									Submit
								</button>
							</form>
						</div>
					</div>
					<div className="w-full flex justify-between xm:flex-col sm:flex-col gap-5">
						<div className="flex-1 flex flex-col">
							<div>
								<Image
									src={footerLogo}
									alt="footerLogo"
									className="w-[200px] object-cover xm:w-[150px] sm:w-[150px] md:w-[160px] lg:w-[180px]"
									width={200}
									height={200}
								/>
							</div>
							<div className="flex flex-col gap-5">
								<div className="flex items-center gap-2">
									<TbWorld
										className="text-white"
										size={24}
									/>
									<Link
										href="mailto:info@themountingking.com"
										className="text-white text-[20px] cursor-pointer font-Monstrate">
										info@themountingking.com
									</Link>
								</div>
								<div className="flex items-center gap-2">
									<MdOutlineEmail
										className="text-white"
										size={24}
									/>
									<Link
										href="mailto:info@themountingking.com"
										className="text-white text-[20px] cursor-pointer font-Monstrate">
										info@themountingking.com
									</Link>
								</div>
							</div>
						</div>
						<div className="flex-1 flex justify-between gap-10 xm:flex-col sm:flex-col">
							<div className="flex flex-col gap-4">
								<Link
									href="/"
									className="text-white text-[16px] font-Monstrate leading-tight tracking-tight">
									Home
								</Link>
								<Link
									href="/services"
									className="text-white text-[16px] font-Monstrate leading-tight tracking-tight">
									Services
								</Link>
								<Link
									href="/about"
									className="text-white text-[16px] font-Monstrate leading-tight tracking-tight">
									About
								</Link>
								{/* <Link
									href="/products"
									className="text-white text-[16px] font-Monstrate leading-tight tracking-tight">
									Products
								</Link> */}
								<Link
									href="/book-now"
									className="text-white text-[16px] font-Monstrate leading-tight tracking-tight">
									Book Now
								</Link>
								<Link
									href="/contact-us"
									className="text-white text-[16px] font-Monstrate leading-tight tracking-tight">
									Contact Us
								</Link>
							</div>
							<div className="flex flex-col gap-4">
								<Link
									href="/"
									className="text-white text-[16px] font-Monstrate leading-tight tracking-tight">
									Privacy
								</Link>
								<Link
									href="/"
									className="text-white text-[16px] font-Monstrate leading-tight tracking-tight">
									Terms & <br /> Condition
								</Link>
							</div>
							<div className="flex flex-col gap-4">
								<Link
									href="/"
									className="text-white text-[16px] font-Monstrate leading-tight tracking-tight">
									Socials
								</Link>
								<div className="flex items-center gap-4">
									<Link
										href="/"
										className="text-white text-[16px] font-Monstrate leading-tight tracking-tight">
										<FaFacebook
											size={24}
											className="text-white"
										/>
									</Link>
									<Link
										href="/"
										className="text-white text-[16px] font-Monstrate leading-tight tracking-tight">
										<BsTwitterX
											size={24}
											className="text-white"
										/>
									</Link>
									<Link
										href="/"
										className="text-white text-[16px] font-Monstrate leading-tight tracking-tight">
										<FaLinkedin
											size={24}
											className="text-white"
										/>
									</Link>
									<Link
										href="/"
										className="text-white text-[16px] font-Monstrate leading-tight tracking-tight">
										<RiInstagramFill
											size={24}
											className="text-white"
										/>
									</Link>
									<Link
										href="/"
										className="text-white text-[16px] font-Monstrate leading-tight tracking-tight">
										<FaYoutube
											size={24}
											className="text-white"
										/>
									</Link>
									<Link
										href="/"
										className="text-white text-[16px] font-Monstrate leading-tight tracking-tight">
										<FaTiktok
											size={24}
											className="text-white"
										/>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full border-t-[1px] border-[#D0D5DD] pt-3">
						<div className="w-full flex items-center justify-between gap-5 xm:flex-col sm:flex-col xm:items-start sm:items-start">
							<div className="flex items-center gap-4 flex-wrap">
								<Link
									href="/"
									className="text-white text-[16px] font-Monstrate leading-tight tracking-tight">
									Home
								</Link>
								<Link
									href="/services"
									className="text-white text-[16px] font-Monstrate leading-tight tracking-tight">
									Services
								</Link>
								<Link
									href="/about"
									className="text-white text-[16px] font-Monstrate leading-tight tracking-tight">
									About
								</Link>
								{/* <Link
									href="/products"
									className="text-white text-[16px] font-Monstrate leading-tight tracking-tight">
									Products
								</Link> */}
								<Link
									href="/book-now"
									className="text-white text-[16px] font-Monstrate leading-tight tracking-tight">
									Book Now
								</Link>
								<Link
									href="/contact-us"
									className="text-white text-[16px] font-Monstrate leading-tight tracking-tight">
									Contact Us
								</Link>
							</div>
							<div className="">
								<p className="text-white text-[16px] font-Monstrate leading-tight tracking-tight">
									Copyright © {new Date().getFullYear()} Themountingking. All
									rights reserved.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="absolute top-1/4 left-10 sm:hidden xm:hidden">
					<Image
						src={crown}
						alt="crown"
					/>
				</div>
			</div>
		</div>
	);
}
