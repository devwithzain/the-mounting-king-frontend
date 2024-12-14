"use client";
import Lenis from "lenis";
import { Footer } from "@/components";
import { useEffect, useState } from "react";
import getProduct from "@/actions/get-product";
import { ProductDetailHero, ProductDetailInfo } from "@/container";

export default function ProductDetailPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const [product, setProduct] = useState([]);
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const id = (await params).id;
				const response = await getProduct(id);
				setProduct(response);
			} catch (err) {
				console.error("Error fetching products:", err);
			}
		};
		fetchProducts();
	}, []);

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
			<ProductDetailHero product={product} />
			<ProductDetailInfo />
			<Footer />
		</div>
	);
}
