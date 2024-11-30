"use client";
import Lenis from "lenis";
import { useEffect } from "react";
import { Footer } from "@/components";
import { ContactForm, ContactHero } from "@/container";

export default function Contact() {
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<div className="w-full h-full bg-[url('/aboutBg.png')] bg-center bg-no-repeat bg-cover overflow-x-hidden">
			<ContactHero />
			<ContactForm />
			<Footer />
		</div>
	);
}
