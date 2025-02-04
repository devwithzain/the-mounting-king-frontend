import Lenis from "lenis";
import React, { useEffect } from "react";
import Footer from "../components/footer.tsx";
import Navbar from "../components/navbar.tsx";
import { heroBackground } from "../assets/index.ts";
import Appointment from "../components/appointment.tsx";

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
		<div className="w-full h-full relative overflow-x-hidden">
			<img
				src={heroBackground}
				alt="bg"
				className="w-full h-full object-cover absolute top-0 left-0 z-0"
			/>
			<Navbar />
			<Appointment />
			<Footer />
		</div>
	);
}
