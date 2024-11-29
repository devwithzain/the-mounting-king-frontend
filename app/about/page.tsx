"use client";
import Lenis from "lenis";
import { useEffect } from "react";
import { Footer } from "@/components";
import { AboutHero, AboutServices } from "@/container";

export default function AboutPage() {
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<div className="w-full h-full bg-[url('/aboutBg.png')] bg-center bg-no-repeat bg-cover">
			<AboutHero />
			<AboutServices />
			<Footer />
		</div>
	);
}
