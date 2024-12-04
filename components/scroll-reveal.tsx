"use client";
import {
	aboutOne,
	aboutTwo,
	aboutThree,
	aboutFour,
	aboutFive,
	aboutSix,
	aboutSeven,
} from "@/public";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

export default function ScrollReveal() {
	const targetRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const scaleImg1 = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
	const scaleImg2 = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

	return (
		<section
			ref={targetRef}
			className="relative h-[150vh]">
			<div className="sticky top-0 flex h-screen items-center overflow-hidden py-20">
				<div className="flex gap-2 overflow-hidden">
					<div className="flex flex-col gap-2">
						{[aboutTwo, aboutFour, aboutSix].map((item, index) => (
							<div
								key={index}
								className="overflow-hidden group">
								<motion.div style={{ scale: scaleImg1 }}>
									<Image
										src={item}
										alt="sda"
										width={300}
										height={300}
										className="w-[300px] lg:w-[200px] md:w-[180px] object-cover"
									/>
								</motion.div>
							</div>
						))}
					</div>
					<div className="flex flex-col gap-2 -mt-7">
						{[aboutOne, aboutThree, aboutFive, aboutSeven].map(
							(item, index) => (
								<div
									key={index}
									className="overflow-hidden group">
									<motion.div style={{ scale: scaleImg2 }}>
										<Image
											src={item}
											alt="sda"
											width={300}
											height={300}
											className="w-[300px] lg:w-[200px] md:w-[180px] object-cover"
										/>
									</motion.div>
								</div>
							),
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
