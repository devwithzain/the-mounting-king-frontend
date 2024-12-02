import {
	crown,
	emailIcon,
	footerCrown,
	footerLogo,
	mountingText,
} from "@/public";
import Link from "next/link";
import Image from "next/image";
import Marquee from "./marquee";
import { TbWorld } from "react-icons/tb";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
	return (
		<div className="w-full min-h-screen pb-5 relative pt-80 xm:!pt-10 sm:!pt-10 md:pt-16 lg:pt-20 bg-[url('/footerBackground.png')] bg-cover bg-center bg-no-repeat">
			<div className="absolute w-full -top-40 md:-top-20 z-50 xm:hidden sm:hidden -left-[20%]">
				<Image
					alt="heroCloudImg"
					width={1000}
					height={1000}
					src={"/badal.png"}
					className="w-full h-full"
				/>
			</div>
			<div className="absolute w-full -top-40 md:-top-20 z-50 xm:hidden sm:hidden -right-[20%]">
				<Image
					alt="heroCloudImg"
					width={1000}
					height={1000}
					src={"/badal.png"}
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
			<div className="w-full padding-x py-5 relative">
				<div className="absolute -left-10 xm:hidden sm:hidden">
					<Image
						src={footerCrown}
						alt="footerCrown"
						width={400}
						height={400}
					/>
				</div>
				<div className="w-full flex items-end justify-end sm:justify-start xm:justify-start">
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
				</div>
				<Image
					src={mountingText}
					alt="mountingText"
					className="w-full object-cover h-full"
				/>
				<div className="w-full flex items-start justify-start">
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
						<div>
							<form className="rounded-lg px-6 py-3 flex justify-between items-center xm:items-start sm:items-start bg-white gap-10 sm:px-2 xm:px-2 xm:py-1 sm:py-1 sm:flex-col xm:flex-col sm:gap-2 xm:gap-2">
								<div className="flex items-center gap-3">
									<Image
										src={emailIcon}
										alt="emailIcon"
										width={25}
										height={25}
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
						<div className="flex-1 flex flex-col gap-8">
							<div>
								<Image
									src={footerLogo}
									alt="footerLogo"
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
									<p className="text-white text-[20px] font-Monstrate">
										info@demolink.com
									</p>
								</div>
								<div className="flex items-center gap-2">
									<MdOutlineEmail
										className="text-white"
										size={24}
									/>
									<p className="text-white text-[20px] font-Monstrate">
										info@demolink.com
									</p>
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
								<Link
									href="/request-a-demo"
									className="text-white text-[16px] font-Monstrate leading-tight tracking-tight">
									Request A Demo
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
								<Link
									href="/request-a-demo"
									className="text-white text-[16px] font-Monstrate leading-tight tracking-tight">
									Request A Demo
								</Link>
								<Link
									href="/contact-us"
									className="text-white text-[16px] font-Monstrate leading-tight tracking-tight">
									Contact Us
								</Link>
							</div>
							<div className="">
								<p className="text-white text-[16px] font-Monstrate leading-tight tracking-tight">
									© 2024 All Rights Reserved
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="absolute top-1/4 left-10 sm:hidden xm:hidden">
					<Image
						src={crown}
						alt="crown"
						width={200}
						height={200}
					/>
				</div>
			</div>
		</div>
	);
}
