"use client";
import Lenis from "lenis";
import { useEffect } from "react";
import { HomeFooter } from "@/components";
import AboutServices from "@/container/home/about";
import { HomeHero, HomeServices } from "@/container";

export default function App() {
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<div className="w-full h-full">
			<HomeHero />
			<AboutServices />
			<HomeServices />
			<HomeFooter />
		</div>
	);
}
