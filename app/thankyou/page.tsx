"use client";
import axios from "axios";
import { useEffect, Suspense } from "react";
import { Button } from "@/components";
import { getToken } from "@/utils/get-token";
import { useSearchParams } from "next/navigation";

function ThankYouContent() {
	const token = getToken();
	const searchParams = useSearchParams();

	useEffect(() => {
		const success = searchParams.get("success");
		if (success === "1") {
			const clearCart = async () => {
				try {
					await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/cart`, {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					});
					console.log("Cart cleared successfully!");
				} catch (error) {
					console.error("Error clearing cart:", error);
				}
			};

			clearCart();
		}
	}, [searchParams, token]);

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-[url('/footerBackground.png')] bg-cover bg-center bg-no-repeat">
			<h1 className="text-4xl font-bold font-Monstrate leading-tight">
				Thank You!
			</h1>
			<p className="text-lg mt-4 font-Monstrate">
				Your order has been successfully placed.
			</p>
			<div className="w-fit flex items-center justify-between bg-[#F99A03] cursor-pointer rounded-lg group mt-4">
				<Button
					bgcolor="#212121"
					href="/products"
					title="Continue shopping"
					className="bg-white text-black"
					style={{ color: "#fff" }}
				/>
			</div>
		</div>
	);
}

export default function ThankYou() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ThankYouContent />
		</Suspense>
	);
}
