"use client";
import Image from "next/image";
import { servicesItems } from "@/constants";
import { advantage, heroCloud, marketValue, time, arrowRight } from "@/public";

export default function Services() {
	return (
		<div className="w-full py-80 relative bg-gradient-to-b from-[#6A9BBE] via-[#00497C] to-[#6A9BBE]">
			<div className="absolute -top-60">
				<Image
					alt="heroCloudImg"
					src={heroCloud}
					className="w-full h-full object-cover rotate-180"
				/>
			</div>
			<div className="w-full">
				<div className=" flex flex-col gap-20">
					<div>
						<h1 className="text-white text-center font-HyperspaceRace text-[98px] font-black leading-tight capitalize">
							Advantage of <br /> Our Mounting King Service
						</h1>
					</div>
					<div className="w-full flex items-center justify-center flex-col gap-20">
						<div className="w-[80%] flex justify-between gap-5">
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
								<h1 className="text-white font-Monstrate text-[18px] leading-tight capitalize">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industrys
									standard dummy text ever
								</h1>
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
								<h1 className="text-white font-Monstrate text-[18px] leading-tight capitalize">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industrys
									standard dummy text ever
								</h1>
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
								<h1 className="text-white font-Monstrate text-[18px] leading-tight capitalize">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industrys
									standard dummy text ever
								</h1>
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
				<div className=" flex flex-col gap-20 mt-40">
					<div>
						<h1 className="text-white text-center font-HyperspaceRace text-[98px] font-black leading-tight capitalize">
							All Services
						</h1>
					</div>
					<div className="w-full flex items-center justify-center flex-col gap-20">
						<div className="w-[80%] flex flex-wrap justify-between gap-x-2 gap-y-4">
							{servicesItems.map((item) => (
								<div
									key={item.id}
									className="flex flex-col gap-5 justify-between rounded-[20px] max-w-[500px] bg-[#1F1F3D] p-10">
									<h1 className="text-white  text-[30px] font-bold leading-tight capitalize">
										{item.tilte}
									</h1>
									<h1 className="text-white font-Monstrate text-[18px] leading-tight capitalize">
										{item.description}
									</h1>
									<div className="w-fit flex gap-3 justify-center items-center bg-[#F99A03] px-6 py-3 rounded-lg group transition-all duration-200 ease-in-out overflow-hidden">
										<Image
											src={arrowRight}
											alt="arrowRightImg"
											width={30}
											height={30}
											className="-translate-x-20 hidden group-hover:translate-x-0 group-hover:flex ease-in-out transition-all duration-300"
										/>
										<button className="w-fit text-white font-Monstrate text-[20px] font-normal leading-tight tracking-tight">
											Learn more
										</button>
									</div>
								</div>
							))}
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
