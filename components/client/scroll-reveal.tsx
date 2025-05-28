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
import { motion, useInView } from "framer-motion";

export default function ScrollReveal() {
	const targetRef = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(targetRef, {
		margin: "-50% 0px -50% 0px",
		once: true,
	});

	return (
		<section
			ref={targetRef}
			className="relative h-screenflex items-center justify-center xm:h-[80vh] sm:h-[80vh]">
			<div className="flex flex-col items-center justify-center gap-2 overflow-hidden">
				<div className="flex gap-2 overflow-hidden">
					<div className="flex flex-col gap-2">
						{[aboutOne, aboutThree, aboutFive].map((item, index) => (
							<div
								key={index}
								className="overflow-hidden group">
								<motion.div
									initial={{ scale: 0 }}
									animate={{ scale: isInView ? 1 : 0 }}
									transition={{ duration: 0.6 }}>
									<Image
										src={item}
										alt="sda"
										width={300}
										height={300}
										className="w-[250px] lg:w-[180px] md:w-[160px] object-cover"
									/>
								</motion.div>
							</div>
						))}
					</div>
					<div className="flex flex-col gap-2 -mt-6">
						{[aboutTwo, aboutFour, aboutSix, aboutSeven].map((item, index) => (
							<div
								key={index}
								className="overflow-hidden group">
								<motion.div
									initial={{ scale: 0 }}
									animate={{ scale: isInView ? 1 : 0 }}
									transition={{ duration: 0.6 }}>
									<Image
										src={item}
										alt="sda"
										width={250}
										height={250}
										className="w-[250px] lg:w-[180px] md:w-[160px] object-cover"
									/>
								</motion.div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
