"use client";
import axios from "axios";
import Lenis from "lenis";
import Image from "next/image";
import { TuserProps } from "@/types";
import { useEffect, useState } from "react";
import { getToken } from "@/utils/get-token";
import { getUserData } from "@/utils/currentUser";

export default function CartPage() {
	const token = getToken();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [cartItems, setCartItems] = useState<any[]>([]);
	const [cartTotal, setCartTotal] = useState<number>(0);
	const [user, setUser] = useState<TuserProps>();

	useEffect(() => {
		const fetchUserData = async () => {
			const userData = await getUserData(token);
			setUser(userData);
		};
		fetchUserData();
	}, [token]);

	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);

	useEffect(() => {
		const fetchCartItems = async () => {
			try {
				const response = await fetch(
					`${process.env.NEXT_PUBLIC_API_URL}/cart`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					},
				);
				const data = await response.json();
				setCartItems(data);
				const total = data
					.reduce(
						(total: number, item: { product?: { price?: string } }) =>
							total + parseFloat(item.product?.price || "0"),
						0,
					)
					.toFixed(2);
				setCartTotal(parseFloat(total));
			} catch (error: unknown) {
				if (error instanceof Error) {
					console.log(error.message);
				} else {
					console.log("An unknown error occurred");
				}
			}
		};
		fetchCartItems();
	}, [token]);

	const deleteCartItem = async (id: string) => {
		try {
			await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/cart/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setCartItems(cartItems.filter((item) => item.id !== id));
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.log(error.message);
			} else {
				console.log("An unknown error occurred");
			}
		}
	};

	// const handleCheckout = async () => {
	// 	try {
	// 		const response = await axios.post(
	// 			`${window.location.origin}/api/checkout`,
	// 			{ userId: user?.id },
	// 			{
	// 				headers: {
	// 					"Content-Type": "application/json",
	// 					"Authorization": `Bearer ${token}`, // Optional if authentication is needed
	// 				},
	// 			},
	// 		);

	// 		if (response.status !== 200) {
	// 			throw new Error(`HTTP error! status: ${response.status}`);
	// 		}

	// 		const data = response.data;
	// 		if (data.url) {
	// 			window.location.href = data.url; // Redirect to Stripe checkout
	// 		} else {
	// 			throw new Error("Checkout URL not received");
	// 		}
	// 	} catch (error) {
	// 		console.error("Error during checkout:", error);
	// 	}
	// };

	const handleCheckout = async () => {
		try {
			const response = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}/checkout`,
				{ userId: user?.id },
				{
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${token}`, // Optional if authentication is needed
					},
				},
			);

			if (response.status === 200 && response.data.url) {
				window.location.href = response.data.url; // Redirect to Stripe checkout
			} else {
				throw new Error("Checkout URL not received");
			}
		} catch (error) {
			console.error("Error during checkout:", error);
		}
	};

	return (
		<div className="w-full flex gap-5 justify-between padding-x shadow-md min-h-screen bg-[url('/heroBackground.png')] bg-center bg-no-repeat bg-cover overflow-x-hidden pt-40">
			<div className="w-full py-10 pr-5 h-fit border-t border-gray-50">
				<div className="flex justify-between border-b pb-4 items-center">
					<h1 className="font-bold font-Monstrate text-[35px] leading-tight text-black">
						Shopping Cart
					</h1>
				</div>
				<div className="w-full flex justify-between gap-5 pt-10">
					<div className="w-full flex flex-col gap-5">
						{cartItems.length === 0 ? (
							<p className="font-Monstrate text-[25px] leading-tight text-black font-medium pb-2">
								Your cart is empty!
							</p>
						) : (
							<>
								{cartItems.map((item) => (
									<div
										className="w-full flex flex-col gap-10 border-b border-gray-200 pb-5"
										key={item.id}>
										<div className="w-full flex justify-between gap-10">
											<div className="w-[400px]">
												<Image
													width={600}
													height={600}
													src={`https://themountingking.com/backend/storage/${
														JSON.parse(item.product?.images)[0]
													}`}
													alt="Product Image"
													className="w-full object-center object-cover rounded-lg"
												/>
											</div>
											<div className="w-full flex flex-col justify-between gap-2">
												<div className="flex flex-col gap-2">
													<p className="font-Monstrate text-[25px] leading-tight text-black font-bold pb-2">
														{item.product?.title}
													</p>
													<p className="text-lg leading-tight text-gray-600 font-Monstrate">
														Color:{" "}
														<span className="text-lg leading-tight text-gray-600 font-bold capitalize">
															{item.product?.color}
														</span>
													</p>
													<p className="text-lg leading-tight text-gray-600 font-Monstrate">
														Price:{" "}
														<span className="text-lg leading-tight text-gray-600 font-bold">
															$ {item.product?.price}
														</span>
													</p>
												</div>
												<div onClick={() => deleteCartItem(item.id)}>
													<p className="text-xl font-Monstrate leading-tight underline text-red-500 cursor-pointer">
														Remove
													</p>
												</div>
											</div>
										</div>
									</div>
								))}
							</>
						)}
					</div>
					<div className="w-[800px] h-fit px-5 rounded-lg py-10 bg-gray-200">
						<h1 className="font-semibold font-Monstrate text-[30px] leading-tight text-black pb-4 border-b border-black/10">
							Order Summary
						</h1>
						<div className="w-full flex flex-col gap-3 justify-between pt-2">
							<div className="w-full flex justify-between py-2 border-b">
								<span className="font-medium font-Monstrate text-[18px] leading-tight text-black">
									Order total
								</span>
								<span className="font-bold font-Monstrate text-[18px] leading-tight text-black">
									$ {cartTotal.toFixed(2)}
								</span>
							</div>
							<button
								onClick={handleCheckout}
								className="w-full bg-[#F99A03] btn text-center transition-all duration-300 ease-in-out text-white px-6 py-3 text-[20px] rounded-full font-Monstrate leading-tight tracking-tight">
								Checkout
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
