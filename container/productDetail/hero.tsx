"use client";
import axios from "axios";
import Image from "next/image";
import toast from "react-hot-toast";
import { TuserProps } from "@/types";
import { heroCloud } from "@/public";
import { useEffect, useState } from "react";
import { getToken } from "@/utils/get-token";
import { IoBagHandle } from "react-icons/io5";
import { ProductGallery } from "@/components";
import { getUserData } from "@/utils/currentUser";

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
		} catch (error: unknown) {
			if (error instanceof Error) {
				toast.error(error.message);
			} else {
				toast.error("An unknown error occurred");
			}
		}
	};

	return (
		<div className="w-full h-[130vh] flex items-center relative justify-center bg-[url('/heroBackground.png')] bg-cover bg-center bg-no-repeat padding-x pt-10">
			<div className="absolute -right-24 top-28 h-[500px] blur-[150px] bg-gradient-to-b from-[#007DFE] via-[#c092df] to-[#007DFE] rounded-full w-[500px] overflow-hidden" />
			<div className="w-full h-screen flex items-center absolute top-0 left-0 justify-center gap-5 padding-x">
				<div className="w-1/2 flex flex-col gap-5">
					<div className="w-full">
						<ProductGallery product={product.product} />
					</div>
				</div>
				<div className="w-1/2 flex flex-col gap-3">
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
			<div className="w-full absolute left-0 -bottom-80 z-50 lg:-bottom-60 md:-bottom-40 overflow-hidden h-fit">
				<Image
					alt="heroCloudImg"
					src={heroCloud}
					className="w-full h-full object-cover rotate-180"
				/>
			</div>
			<div className="w-full absolute right-0 -bottom-60 z-50 lg:-bottom-40 md:-bottom-40 overflow-hidden h-fit">
				<Image
					alt="heroCloudImg"
					src={heroCloud}
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	);
}
