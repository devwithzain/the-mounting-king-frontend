import axios from "axios";
import toast from "react-hot-toast";
import { IoBagHandle } from "react-icons/io5";
import Badal from "../../components/badal.tsx";
import { TuserProps } from "../../types/index.ts";
import React, { useEffect, useState } from "react";
import { getToken } from "../../utils/get-token.ts";
import { heroBackground } from "../../assets/index.ts";
import { getUserData } from "../../utils/currentUser.ts";
import ProductGallery from "../../components/product-gallery.tsx";

export default function ProductDetailHero(product: any) {
	const token = getToken();
	const [user, setUser] = useState<TuserProps>();

	useEffect(() => {
		const fetchUserData = async () => {
			const userData = await getUserData(token);
			setUser(userData);
		};
		fetchUserData();
	});

	const addToCart = async (productId: string) => {
		if (!user || !token) {
			window.location.href = "/login";
			return;
		}
		try {
			const response = await axios.post(
				`https://themountingking.com/backend/api/cart`,
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
		} catch (error: unknown) {
			if (error instanceof Error) {
				toast.error(error.message);
			} else {
				toast.error("An unknown error occurred");
			}
		}
	};

	return (
		<div className="w-full h-[130vh] flex items-center relative justify-center padding-x pt-10">
			<img
				src={heroBackground}
				alt="bg"
				className="w-full h-full object-cover absolute top-0 left-0 z-0"
			/>
			<div className="absolute -right-24 top-28 h-[500px] blur-[150px] bg-gradient-to-b from-[#007DFE] via-[#c092df] to-[#007DFE] rounded-full w-[500px] overflow-hidden" />
			<div className="w-full h-screen flex items-center absolute top-0 xm:top-[250px] sm:top-[250px] sm:flex-col xm:flex-col left-0 justify-center gap-5 padding-x">
				<div className="w-1/2 xm:w-full sm:w-full flex flex-col gap-5">
					<div className="w-full">
						<ProductGallery product={product.product} />
					</div>
				</div>
				<div className="w-1/2 xm:w-full sm:w-full flex flex-col gap-3">
					<div className="flex flex-col gap-2">
						<h2 className="text-[30px] font-bold text-black font-Monstrate">
							{product?.product?.data?.title}
						</h2>
						<p className="text-black text-xl font-Monstrate">
							{product?.product?.data?.shortDescription}
						</p>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-black text-xl font-Monstrate font-medium">
							Category:
						</span>
						<span className="text-black text-xl font-Monstrate font-bold capitalize">
							{product?.product?.data?.category}
						</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-black text-xl font-Monstrate font-medium">
							Price:
						</span>
						<span className="text-black text-xl font-Monstrate font-bold">
							${product?.product?.data?.price}
						</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-black text-xl font-Monstrate font-medium capitalize">
							Size:
						</span>
						<span className="text-black text-xl font-Monstrate font-bold">
							{product?.product?.data?.size}
						</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-black text-xl font-Monstrate font-medium">
							Color:
						</span>
						<span className="text-black text-xl font-Monstrate font-bold capitalize">
							{product?.product?.data?.color}
						</span>
					</div>
					<div className="flex flex-col gap-2">
						<h2 className="text-[30px] font-bold text-black font-Monstrate">
							Product Description
						</h2>
						<p className="text-black text-xl font-Monstrate">
							{product?.product?.data?.description}
						</p>
					</div>
					<div className="w-full">
						<button
							onClick={() => addToCart(product?.product?.data?.id)}
							className={`w-full flex items-center gap-2 justify-center bg-[#F99A03] btn text-center transition-all duration-300 ease-in-out text-white px-6 py-3 rounded-lg text-[20px] font-Monstrate leading-tight tracking-tight`}>
							Add to cart <IoBagHandle size={25} />
						</button>
					</div>
				</div>
			</div>
			<div className="w-full absolute left-0 -bottom-48 z-50 lg:-bottom-60 md:-bottom-40 xm:hidden sm:hidden">
				<Badal />
			</div>
		</div>
	);
}
