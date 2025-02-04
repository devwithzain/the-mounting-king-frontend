import Lenis from "lenis";
import React, { useEffect } from "react";
import Thank from "../components/thank.tsx";
import Footer from "../components/footer.tsx";
import Navbar from "../components/navbar.tsx";
import { heroBackground } from "../assets/index.ts";

export default function Thankyou() {
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<div className="w-full h-full relative overflow-x-hidden">
			<img
				src={heroBackground}
				alt="bg"
				className="w-full h-full object-cover absolute top-0 left-0 -z-10"
			/>
			<Navbar />
			<Thank />
			<Footer />
		</div>
	);
}
