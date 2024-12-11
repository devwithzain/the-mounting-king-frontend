"use client";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import { TproductsProps } from "@/types";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import getProducts from "@/actions/get-products";

export default function Products() {
	const [products, setProducts] = useState([]);
	const addToCart = async (productId: string) => {
		try {
			const response = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}/cart`,
				{
					product_id: productId,
					quantity: 1,
				},
			);

			toast.success(response.data.message || "Product added to cart");
		} catch (error) {
			console.error("Error adding to cart:", error);
			toast.error("Failed to add product to cart");
		}
	};
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await getProducts();
				setProducts(response.data);
			} catch (err) {
				console.error("Error fetching products:", err);
			}
		};
		fetchProducts();
	}, []);

	return (
		<div className="w-full py-80 relative padding-x xm:py-10 sm:py-10 md:py-20">
			<div className="w-full grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 gap-14">
				{products.map((product: TproductsProps) => (
					<Link
						href={`/products/product-detail/${product.title}`}
						key={product.id}
						className="bg-white relative rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 hover:shadow-lg cursor-pointer flex flex-col group">
						<div className="w-full absolute z-50 -top-full group-hover:top-3 transition-all duration-300 ease-in-out">
							<div className="w-full flex items-center justify-between px-4 py-2">
								<Link
									href="/cart"
									onClick={() => addToCart(product.id)}>
									<FaShoppingCart
										size={25}
										className="text-black"
									/>
								</Link>
								<FaRegHeart
									size={25}
									className="text-black"
								/>
							</div>
						</div>
						<div className="w-full relative flex items-center justify-center">
							<Image
								width={400}
								height={400}
								className="w-full object-cover"
								src={`http://127.0.0.1:8000/storage/${product.image}`}
								alt={product.title}
							/>
							<div className="group-hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25" />
						</div>
						<div className="p-4 w-full h-full flex flex-col justify-between gap-4">
							<h3 className="text-lg font-Monstrate leading-tight font-bold">
								{product.title}
							</h3>
							<p className="text-lg font-Monstrate leading-tight font-medium">
								{product.short_description}
							</p>
							<div className="flex items-center justify-between">
								<span className="text-lg font-Monstrate leading-tight font-bold">
									${product.price}
								</span>
								<Link
									className={`w-fit bg-[#F99A03] btn text-center transition-all duration-300 ease-in-out text-white px-6 py-3 rounded-lg text-[20px] font-Monstrate leading-tight tracking-tight`}
									href={`/products/product-detail/${product.title}`}>
									View Detail
								</Link>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
