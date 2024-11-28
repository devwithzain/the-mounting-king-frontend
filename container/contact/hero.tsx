import Image from "next/image";

export default function ContactHero() {
	return (
		<div className="w-full h-screen flex items-center relative justify-center bg-[url('/heroBackground.png')] bg-cover bg-center bg-no-repeat">
			<div className="absolute -right-24 top-28 h-[500px] blur-[150px] bg-gradient-to-b from-[#007DFE] via-[#c092df] to-[#007DFE] rounded-full w-[500px] overflow-hidden" />
			<div className="flex flex-col gap-5">
				<h1 className="text-[#1F1F3D] text-center font-HyperspaceRace text-[98px] font-black leading-normal uppercase">
					Contact Us
				</h1>
				<div className="absolute w-full -bottom-40 z-50 -left-[20%]">
					<Image
						alt="heroCloudImg"
						width={1000}
						height={1000}
						src={"/badal.png"}
						className="w-full h-full"
					/>
				</div>
				<div className="absolute w-full -bottom-40 z-50 -right-[20%]">
					<Image
						alt="heroCloudImg"
						width={1000}
						height={1000}
						src={"/badal.png"}
						className="w-full h-full"
					/>
				</div>
			</div>
		</div>
	);
}
