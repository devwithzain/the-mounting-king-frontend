import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TlinksProps } from "../../types/index.ts";
import { slide, scale } from "../../motion/index.ts";

export default function Links({
	data,
	isActive,
	setSelectedIndicator,
}: TlinksProps) {
	const { title, href, index } = data;

	return (
		<motion.div
			className="relative flex items-center"
			onMouseEnter={() => {
				setSelectedIndicator(href);
			}}
			custom={index}
			variants={slide}
			initial="initial"
			animate="enter"
			exit="exit">
			<motion.div
				variants={scale}
				animate={isActive ? "open" : "closed"}
				className="w-[10px] h-[10px] bg-white rounded-full absolute left-[-20px]"
			/>
			<Link to={href}>{title}</Link>
		</motion.div>
	);
}
