"use client";
import { useState, useEffect } from "react";
import { GoClock } from "react-icons/go";
import { formThreeItems } from "@/constants";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

export default function FormThree({
	onSubmits3,
	backBtn,
}: {
	onSubmits3: (event: React.FormEvent<HTMLFormElement>) => void;
	backBtn: () => void;
}) {
	// Initialize selectedValue from localStorage or default to 0
	const [selectedValue3, setSelectedValue] = useState<number>(() => {
		const storedValue = localStorage.getItem("selectedValue3");
		return storedValue ? JSON.parse(storedValue) : 0;
	});

	// Initialize selected items from localStorage
	const [selectedItems, setSelectedItems] = useState<
		Record<string, { quantity: number; price: number; time: number }>
	>(() => {
		const storedItems = localStorage.getItem("selectedItems");
		return storedItems ? JSON.parse(storedItems) : {};
	});

	const handleAdd = (size: string, price: number, time: number) => {
		setSelectedItems((prev) => {
			const updatedItems = {
				...prev,
				[size]: prev[size]
					? {
							quantity: prev[size].quantity + 1,
							price: prev[size].price + price,
							time: prev[size].time + time,
					  }
					: { quantity: 1, price, time },
			};

			// Update total selectedValue in localStorage
			const newSelectedValue = setSelectedValue(selectedValue3 + 1);
			localStorage.setItem("selectedValue3", JSON.stringify(newSelectedValue));

			localStorage.setItem("selectedItems", JSON.stringify(updatedItems));
			return updatedItems;
		});
	};

	const handleRemove = (size: string, price: number, time: number) => {
		setSelectedItems((prev) => {
			if (!prev[size]) return prev; // No item to remove, return current state

			const updatedQuantity = prev[size].quantity - 1;
			let updatedItems;

			if (updatedQuantity <= 0) {
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				const { [size]: _, ...rest } = prev;
				updatedItems = rest;
			} else {
				updatedItems = {
					...prev,
					[size]: {
						quantity: updatedQuantity,
						price: prev[size].price - price,
						time: prev[size].time - time,
					},
				};
			}

			// Update total selectedValue in localStorage
			const newSelectedValue = setSelectedValue(selectedValue3 - 1);
			localStorage.setItem("selectedValue3", JSON.stringify(newSelectedValue));

			localStorage.setItem("selectedItems", JSON.stringify(updatedItems));
			return updatedItems;
		});
	};

	// Calculate total price and time
	const totalPrice = Object.values(selectedItems).reduce(
		(sum, item) => sum + item.price,
		0,
	);
	const totalTime = Object.values(selectedItems).reduce(
		(sum, item) => sum + item.time,
		0,
	);

	useEffect(() => {
		// Sync localStorage with selectedValue
		localStorage.setItem("selectedValue3", JSON.stringify(selectedValue3));
	}, [selectedValue3]);

	return (
		<div className="w-full flex items-center justify-center bg-white padding-y padding-x rounded-lg z-[999]">
			<div className="w-full flex gap-8 justify-between">
				<div className="w-full flex flex-col gap-5">
					<div className="flex flex-col gap-4">
						<h1 className="text-black font-HyperspaceRace text-[45px] font-black leading-tight capitalize">
							Select the Size of The TV
							<br /> You Need Mounted
						</h1>
						<p className="text-black font-Monstrate text-[22px]">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex vel
							temporibus eligendi. Illum unde molestias repellendus obcaecati,
							magnam laboriosam aliquid ad, dolorem expedita, reiciendis sint
							iure! Quas consequuntur ex doloribus officia quisquam odio aperiam
							quae.
						</p>
					</div>
					{formThreeItems.map(({ size, price, time }) => (
						<div
							key={size}
							className="w-full bg-white gap-10 z-50 relative flex items-center justify-between border border-black rounded-lg px-6 py-3">
							<div className="w-full rounded-lg text-[#0E0E30] font-Monstrate text-[16px] font-normal leading-tight tracking-tight placeholder:text-[#0E0E30] outline-none">
								{size} ${price}
							</div>
							<div className="flex items-center gap-2">
								{!selectedItems[size] ? (
									<button
										type="button"
										onClick={() => handleAdd(size, price, time)}
										className="text-[#0E0E30]">
										<CiCirclePlus size={26} />
									</button>
								) : (
									<>
										<button
											type="button"
											onClick={() => handleRemove(size, price, time)}
											className="text-[#0E0E30]">
											<CiCircleMinus size={26} />
										</button>
										<p>{selectedItems[size].quantity}</p>
										<button
											type="button"
											onClick={() => handleAdd(size, price, time)}
											className="text-[#0E0E30]">
											<CiCirclePlus size={26} />
										</button>
									</>
								)}
							</div>
						</div>
					))}
					<form
						onSubmit={onSubmits3}
						className="flex items-center gap-4">
						<button
							onClick={() => backBtn()}
							className="text-black border border-black px-6 py-4 rounded-lg text-[20px] font-Monstrate leading-tight tracking-tight">
							Back
						</button>
						<button
							disabled={selectedValue3 === 0}
							className={`px-6 py-4 rounded-lg text-[20px] font-Monstrate leading-tight tracking-tight ${
								selectedValue3 == 0
									? "text-black bg-gray-200 cursor-not-allowed"
									: "bg-[#F99A03] text-white"
							}`}>
							Continue
						</button>
					</form>
				</div>
				<div className="w-1/3 flex flex-col gap-3 border border-black rounded-lg p-5 h-fit">
					<h1 className="text-black font-Monstrate font-semibold text-[28px] leading-tight inline-block">
						Mount 1 or more TV&apos;s normal TV&apos;s onto any surface.
					</h1>
					{Object.keys(selectedItems).length > 0 && (
						<div className="flex flex-col">
							{Object.entries(selectedItems).map(([size, item]) => (
								<div
									key={size}
									className="flex justify-between py-2 border-b border-black">
									<p className="text-black font-Monstrate text-[18px] leading-normal capitalize">
										{item.quantity}x {size}
									</p>
								</div>
							))}
							<div className="flex items-center gap-2 border-b border-black py-2">
								<GoClock size={24} />
								<p className="text-black font-Monstrate text-[18px] leading-normal capitalize">
									{Math.floor(totalTime / 60)} hr {totalTime % 60} min
								</p>
							</div>
							<div className="flex justify-between items-center gap-5 pt-2">
								<p className="text-black font-Monstrate text-[18px] leading-normal capitalize">
									Total
								</p>
								<p className="text-black font-Monstrate text-[18px] leading-normal capitalize">
									${totalPrice}
								</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
