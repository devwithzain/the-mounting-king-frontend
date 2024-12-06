"use client";
import Lenis from "lenis";
import Link from "next/link";
import { tv } from "@/public";
import Image from "next/image";
import { useEffect } from "react";

export default function AboutPage() {
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<div className="w-full flex gap-5 justify-between padding-x shadow-md min-h-screen bg-[url('/heroBackground.png')] bg-center bg-no-repeat bg-cover overflow-x-hidden pt-40">
			<div className="w-full sm:w-3/4 py-10">
				<div className="flex justify-between border-b pb-4 items-center">
					<h1 className="font-bold font-Monstrate text-[30px] leading-tight text-black">
						Shopping Cart
					</h1>
					<h2 className="font-medium font-Monstrate text-[20px] leading-tight text-black">
						3 Items
					</h2>
				</div>
				<div className="w-full flex items-start gap-10 py-8 md:py-10 lg:py-8 border-t border-gray-50">
					<div className="w-full">
						<Image
							width={600}
							height={600}
							src={tv}
							alt="Black Leather Purse"
							className="w-full object-center object-cover"
						/>
					</div>
					<div className="w-full flex flex-col justify-between gap-2">
						<p className="text-base font-semibold leading-tight text-gray-800">
							RF293
						</p>
						<div className="w-full flex items-center justify-between">
							<p className="font-medium font-Monstrate text-[20px] leading-tight text-black">
								Product Title 01
							</p>
							<select
								aria-label="Select quantity"
								className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
								<option>01</option>
								<option>02</option>
								<option>03</option>
							</select>
						</div>
						<p className="text-lg leading-tight text-gray-600">Color: Black</p>
						<p className="text-lg leading-tight text-gray-600">Price: $120</p>
						<div>
							<p className="text-xl font-Monstrate leading-tight underline text-red-500 cursor-pointer">
								Remove
							</p>
						</div>
					</div>
				</div>
				<div className="w-full flex items-start gap-10 py-8 md:py-10 lg:py-8 border-t border-gray-50">
					<div className="w-full">
						<Image
							width={600}
							height={600}
							src={tv}
							alt="Black Leather Purse"
							className="w-full object-center object-cover"
						/>
					</div>
					<div className="w-full flex flex-col justify-between gap-2">
						<p className="text-base font-semibold leading-tight text-gray-800">
							RF293
						</p>
						<div className="w-full flex items-center justify-between">
							<p className="font-medium font-Monstrate text-[20px] leading-tight text-black">
								Product Title 01
							</p>
							<select
								aria-label="Select quantity"
								className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
								<option>01</option>
								<option>02</option>
								<option>03</option>
							</select>
						</div>
						<p className="text-lg leading-tight text-gray-600">Color: Black</p>
						<p className="text-lg leading-tight text-gray-600">Price: $120</p>
						<div>
							<p className="text-xl font-Monstrate leading-tight underline text-red-500 cursor-pointer">
								Remove
							</p>
						</div>
					</div>
				</div>
				<Link
					href="/products"
					className="flex font-semibold text-indigo-600 text-lg leading-tight font-Monstrate">
					<svg
						className="fill-current mr-2 text-indigo-600 w-4"
						viewBox="0 0 448 512">
						<path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
					</svg>
					Continue Shopping
				</Link>
			</div>
			<div
				id="summary"
				className="w-full sm:w-1/4 md:w-1/2 py-10">
				<h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
				<div className="flex justify-between mt-10 mb-5">
					<span className="font-medium font-Monstrate text-[18px] leading-tight text-black">
						Items 3
					</span>
					<span className="font-bold font-Monstrate text-[18px] leading-tight text-black">
						590$
					</span>
				</div>
				<div className="flex flex-col gap-4">
					<label className="font-black font-Monstrate text-[20px] leading-tight text-black uppercase">
						Shipping
					</label>
					<select className="w-full font-medium font-Monstrate text-[20px] leading-tight text-black py-2 border border-black/40 rounded-lg p-2 outline-none">
						<option className="font-medium font-Monstrate text-[20px] leading-tight text-black p-2">
							Standard shipping - $10.00
						</option>
					</select>
				</div>
				<div className="py-10">
					<label
						htmlFor="promo"
						className="font-semibold font-Monstrate text-[18px] leading-tight text-black uppercase">
						Promo Code
					</label>
					<input
						type="text"
						id="promo"
						placeholder="Enter your code"
						className="my-4 p-2 rounded-lg border border-black/40 text-lg w-full outline-none leading-tight"
					/>
				</div>
				<button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
					Apply
				</button>
				<div className="w-full flex flex-col gap-5 justify-between">
					<div className="w-full flex justify-between py-6 border-b">
						<span className="font-medium font-Monstrate text-[18px] leading-tight text-black">
							Total cost
						</span>
						<span className="font-medium font-Monstrate text-[18px] leading-tight text-black">
							$600
						</span>
					</div>
					<Link
						className={`w-full bg-[#F99A03] btn text-center transition-all duration-300 ease-in-out text-white px-6 py-3 rounded-lg text-[20px] font-Monstrate leading-tight tracking-tight`}
						href="/checkout">
						Checkout
					</Link>
				</div>
			</div>
		</div>
	);
}
