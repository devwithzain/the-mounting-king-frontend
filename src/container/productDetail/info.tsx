import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { getToken } from "../../utils/get-token.ts";
import getProducts from "../../actions/get-products.ts";
import { getUserData } from "../../utils/currentUser.ts";
import AnimatedText from "../../components/animated-text.tsx";
import { TproductsProps, TuserProps } from "../../types/index.ts";

export default function ProductDetailInfo() {
	const token = getToken();
	const [products, setProducts] = useState([]);
	const [user, setUser] = useState<TuserProps>();

	useEffect(() => {
		const fetchUserData = async () => {
			const userData = await getUserData(token);
			setUser(userData);
		};
		fetchUserData();
	});

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

	const addToCart = async (productId: string) => {
		if (!user || !token) {
			window.location.href = "/login";
			return;
		}
		try {
			const response = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}/cart`,
				{
					user_id: user?.id,
					product_id: productId,
					quantity: 120,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			);
			toast.success(response.data.success);
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				toast.error(error.response.data.error || "An error occurred");
			} else {
				toast.error("An unexpected error occurred");
			}
		}
	};
	return (
		<div className="w-full flex flex-col gap-10 padding-x padding-y my-40 xm:my-10 sm:my-10">
			<div className="pt-20 relative z-50">
				<AnimatedText
					className="flex text-white font-HyperspaceRace heading font-black leading-tight overflow-hidden xm:text-black sm:text-black"
					text="Related Products"
				/>
			</div>
			<div className="w-full grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 gap-14 mb-20">
				{products.map((product: TproductsProps) => (
					<Link
						to={`/products/product-detail/${product.id}`}
						key={product.id}
						className="bg-white relative rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 hover:shadow-lg cursor-pointer flex flex-col group">
						<div className="w-full absolute z-50 -top-full group-hover:top-3 transition-all duration-300 ease-in-out">
							<div className="w-full flex items-center justify-between px-4 py-2">
								<button onClick={() => addToCart(product.id)}>
									<FaShoppingCart
										size={25}
										className="text-black"
									/>
								</button>
								<FaRegHeart
									size={25}
									className="text-black"
								/>
							</div>
						</div>
						<div className="w-full relative flex items-center justify-center">
							<img
								className="w-full h-[300px] object-cover"
								src={`https://themountingking.com/backend/public/${
									JSON.parse(product.images)[0]
								}`}
								alt={product.title}
							/>
							<div className="group-hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25" />
						</div>
						<div className="p-4 w-full h-full flex flex-col justify-between gap-4">
							<h3 className="text-lg font-Monstrate leading-tight font-bold">
								{product.title}
							</h3>
							<p className="text-lg font-Monstrate leading-tight font-medium">
								{product.shortDescription}
							</p>
							<div className="flex items-center justify-between">
								<span className="text-lg font-Monstrate leading-tight font-bold">
									${product.price}
								</span>
								<Link
									className={`w-fit bg-[#F99A03] btn text-center transition-all duration-300 ease-in-out text-white px-6 py-3 rounded-lg text-[20px] font-Monstrate leading-tight tracking-tight`}
									to={`/products/product-detail/${product.id}`}>
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
