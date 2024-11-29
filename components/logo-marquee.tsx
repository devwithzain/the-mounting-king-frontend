"use client";
import {
	motion,
	useMotionValue,
	useAnimationFrame,
	wrap,
	useTransform,
	useScroll,
	useVelocity,
	useSpring,
} from "framer-motion";
import { useRef } from "react";
import { TlogoMarqueeProps } from "@/types";

export default function LogoMarquee({
	children,
	baseVelocity = 100,
}: TlogoMarqueeProps) {
	const baseY = useMotionValue(0);
	const { scrollY } = useScroll();
	const scrollVelocity = useVelocity(scrollY);
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 400,
	});
	const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
		clamp: false,
	});
	const y = useTransform(baseY, (v) => `${wrap(-20, -45, v)}%`);

	const directionFactor = useRef<number>(1);
	useAnimationFrame((t, delta) => {
		let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

		if (velocityFactor.get() < 0) {
			directionFactor.current = -1;
		} else if (velocityFactor.get() > 0) {
			directionFactor.current = 1;
		}

		moveBy += directionFactor.current * moveBy * velocityFactor.get();

		baseY.set(baseY.get() + moveBy);
	});

	return (
		<div className="overflow-hidden flex">
			<motion.div
				className="flex flex-col"
				style={{ y }}>
				<span className="whitespace-nowrap">{children} </span>
				<span className="whitespace-nowrap">{children} </span>
				<span className="whitespace-nowrap">{children} </span>
				<span className="whitespace-nowrap">{children} </span>
			</motion.div>
		</div>
	);
}
