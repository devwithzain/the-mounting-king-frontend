"use client";
import Lenis from "lenis";
import { useEffect } from "react";
import { Footer, Navbar } from "@/components/client";

export default function ClientLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}
