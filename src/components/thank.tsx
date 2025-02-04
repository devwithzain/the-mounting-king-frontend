import axios from "axios";
import React, { useEffect } from "react";
import Button from "../components/button.tsx";
import { getToken } from "../utils/get-token.ts";
import { useSearchParams } from "react-router-dom";

export default function Thank() {
	const token = getToken();
	const [searchParams] = useSearchParams();

	useEffect(() => {
		const success = searchParams.get("success");
		if (success === "1") {
			const clearCart = async () => {
				try {
					await axios.delete(`https://themountingking.com/backend/api/cart`, {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					});
				} catch (error) {
					console.error("Error clearing cart:", error);
				}
			};

			clearCart();
		}
	}, [searchParams, token]);

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-4xl font-bold font-Monstrate leading-tight">
				Thank You!
			</h1>
			<p className="text-lg mt-4 font-Monstrate">
				Your order has been successfully placed.
			</p>
			<div className="w-fit flex items-center justify-between bg-[#F99A03] cursor-pointer rounded-lg group mt-4">
				<Button
					bgcolor="#212121"
					to="/products"
					title="Continue shopping"
					className="bg-white text-black"
					style={{ color: "#fff" }}
				/>
			</div>
		</div>
	);
}
