import Lenis from "lenis";
import { useParams } from "react-router-dom";
import { aboutBg } from "../../assets/index.ts";
import Footer from "../../components/footer.tsx";
import Navbar from "../../components/navbar.tsx";
import React, { useEffect, useState } from "react";
import getProduct from "../../actions/get-product.ts";
import ProductDetailHero from "../../container/productDetail/hero.tsx";
import ProductDetailInfo from "../../container/productDetail/info.tsx";

export default function ProductDetail() {
	const { id } = useParams();
	const [product, setProduct] = useState([]);
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await getProduct(id);
				setProduct(response);
			} catch (err) {
				console.error("Error fetching products:", err);
			}
		};
		fetchProducts();
	}, []);
	return (
		<div className="w-full h-full relative overflow-x-hidden">
			<img
				src={aboutBg}
				alt="bg"
				className="w-full h-full object-cover absolute top-0 left-0 z-0"
			/>
			<Navbar />
			<ProductDetailHero product={product} />
			<ProductDetailInfo />
			<Footer />
		</div>
	);
}
