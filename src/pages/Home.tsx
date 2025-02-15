import Lenis from "lenis";
import { bg } from "../assets/index.ts";
import React, { useEffect } from "react";
import Badal from "../components/badal.tsx";
import Slider from "../components/slider.tsx";
import Navbar from "../components/navbar.tsx";
import HomeAbout from "../container/home/about.tsx";
import HomeFooter from "../components/home-footer.tsx";
import HomeServices from "../container/home/services.tsx";

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
			<Slider />
			<div className="xl:mb-40  w-full xm:hidden sm:hidden">
				<Badal />
			</div>
			<HomeAbout />
			<HomeServices />
			<HomeFooter />
		</div>
	);
}
