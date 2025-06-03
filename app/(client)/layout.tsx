"use client";
import Lenis from "lenis";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Footer, HomeFooter, Navbar } from "@/components/client";

export default function ClientLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathName = usePathname();
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
			{pathName === "/" ? <HomeFooter /> : <Footer />}
		</>
	);
}
