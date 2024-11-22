"use client";
import Image from "next/image";
import { heroCloud } from "@/public";
import { motion } from "framer-motion";
export default function AboutHero() {
	return (
		<div className="w-full h-screen flex items-center relative justify-center bg-[url('/heroBackground.png')] bg-cover bg-center bg-no-repeat">
			<div className="flex flex-col gap-5">
				<div className="absolute -right-[350px] -translate-y-1/2 top-1/2 h-[500px] blur-[120px] bg-gradient-to-b from-[#007DFE] via-[#c092df] to-[#007DFE] rounded-full w-[500px]" />
				<span className="flex text-[#1F1F3D] text-center font-HyperspaceRace text-[98px] font-black leading-normal capitalize overflow-hidden">
					{"About Us".split("").map((item: string, i: number) => (
						<motion.p
							initial={{ y: "100%" }}
							whileInView={{ y: 0 }}
							transition={{
								delay: i * 0.08,
								duration: 1,
								ease: [0.4, 0, 0.2, 1],
							}}
							viewport={{ once: true }}
							key={i}>
							{item}
						</motion.p>
					))}
				</span>
				<div className="absolute -bottom-60">
					<Image
						alt="heroCloudImg"
						src={heroCloud}
						className="w-full h-full object-cover rotate-180"
					/>
				</div>
			</div>
		</div>
	);
}
