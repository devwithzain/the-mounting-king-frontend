"use client";
import Lenis from "lenis";
import { useEffect } from "react";
import { Appointment, Footer, Hero } from "@/components";

export default function RequestADemo() {
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<div className="overflow-x-hidden">
			<Hero />
			<Appointment />
			<Footer />
		</div>
	);
}
