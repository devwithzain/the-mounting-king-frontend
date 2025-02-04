import Lenis from "lenis";
import React, { useEffect } from "react";
import { aboutBg } from "../assets/index.ts";
import Footer from "../components/footer.tsx";
import Navbar from "../components/navbar.tsx";
import ProductsHero from "../container/products/hero.tsx";
import ProductsProducts from "../container/products/products.tsx";

export default function Products() {
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
				src={aboutBg}
				alt="bg"
				className="w-full h-full object-cover absolute top-0 left-0 z-0"
			/>
			<Navbar />
			<ProductsHero />
			<ProductsProducts />
			<Footer />
		</div>
	);
}
