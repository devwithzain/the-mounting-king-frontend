import Lenis from "lenis";
import { bg } from "../assets/index.ts";
import React, { useEffect } from "react";
import Navbar from "../components/navbar.tsx";
import HomeHero from "../container/home/hero.tsx";
import HomeAbout from "../container/home/about.tsx";
import HomeFooter from "../components/home-footer.tsx";
import HomeServices from "../container/home/services.tsx";
import Badal from "../components/badal.tsx";

export default function Home() {
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<div className="w-full h-full relative">
			<img
				src={bg}
				alt="bg"
				className="w-full h-full object-cover absolute top-0 left-0 z-0"
			/>
			<Navbar />
			<HomeHero />
			<div className="mb-40 w-full">
				<Badal />
			</div>
			<HomeAbout />
			<HomeServices />
			<HomeFooter />
		</div>
	);
}
