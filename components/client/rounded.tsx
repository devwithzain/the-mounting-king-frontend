"use client";
import gsap from "gsap";
import { TRoundedProps } from "@/types";
import React, { useEffect, useRef } from "react";

export default function Rounded({
	children,
	className,
	style,
	backgroundColor,
	...attributes
}: TRoundedProps) {
	const circle = useRef<HTMLDivElement>(null);
	const timeline = useRef<gsap.core.Timeline | null>(null);
	let timeoutId: NodeJS.Timeout | null = null;
	useEffect(() => {
		timeline.current = gsap.timeline({ paused: true });
		timeline.current
			.to(
				circle.current,
				{ top: "-25%", width: "150%", duration: 0.2, ease: "power3.in" },
				"enter",
			)
			.to(
				circle.current,
				{ top: "-150%", width: "125%", duration: 0.2 },
				"exit",
			);
	}, []);

	const manageMouseEnter = () => {
		if (timeoutId) clearTimeout(timeoutId);
		timeline.current?.tweenFromTo("enter", "exit");
	};

	const manageMouseLeave = () => {
		timeoutId = setTimeout(() => {
			timeline.current?.play();
		}, 150);
	};

	return (
		<div
			style={style}
			className={`rounded-lg relative flex items-center justify-center overflow-hidden ${className}`}
			onMouseEnter={() => {
				manageMouseEnter();
			}}
			onMouseLeave={() => {
				manageMouseLeave();
			}}
			{...attributes}>
			{children}
			<div
				ref={circle}
				style={{ backgroundColor }}
				className={`w-full h-[150%] absolute rounded-[50%] top-full`}
			/>
		</div>
	);
}
