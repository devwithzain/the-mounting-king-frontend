"use client";
import { useState } from "react";
import { GoClock } from "react-icons/go";
import { formFourItems } from "@/constants";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

export default function FormFour({
	onSubmits4,
}: {
	onSubmits4: (event: React.FormEvent<HTMLFormElement>) => void;
}) {
	const [selectedItems, setSelectedItems] = useState<
		Record<string, { quantity: number; price: number; time: number }>
	>({});

	const handleAdd = (size: string, price: number, time: number) => {
		setSelectedItems((prev) => ({
			...prev,
			[size]: prev[size]
				? {
						quantity: prev[size].quantity + 1,
						price: prev[size].price + price,
						time: prev[size].time + time,
				  }
				: { quantity: 1, price, time },
		}));
	};

	const handleRemove = (size: string, price: number, time: number) => {
		setSelectedItems((prev) => {
			if (!prev[size]) return prev; // No item to remove, return current state

			const updatedQuantity = prev[size].quantity - 1;

			if (updatedQuantity <= 0) {
				const { [size]: _, ...rest } = prev;
				return rest;
			}

			return {
				...prev,
				[size]: {
					quantity: updatedQuantity,
					price: prev[size].price - price,
					time: prev[size].time - time,
				},
			};
		});
	};

	const totalPrice = Object.values(selectedItems).reduce(
		(sum, item) => sum + item.price,
		0,
	);
	const totalTime = Object.values(selectedItems).reduce(
		(sum, item) => sum + item.time,
		0,
	);

	return (
		<div className="w-[70%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-white p-10 rounded-lg z-50">
			<div className="w-full flex gap-8 justify-between">
				<div className="w-full flex flex-col gap-5">
					<div className="flex flex-col gap-4">
						<h1 className="text-black font-HyperspaceRace text-[45px] font-black leading-tight capitalize">
							Are any of the TVs
							<br /> Going Above Fireplace?
						</h1>
						<p className="text-black font-Monstrate text-[22px]">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex vel
							temporibus eligendi. Illum unde molestias repellendus obcaecati,
							magnam laboriosam aliquid ad, dolorem expedita, reiciendis sint
							iure! Quas consequuntur ex doloribus officia quisquam odio aperiam
							quae.
						</p>
					</div>
					{formFourItems.map(({ size, price, time }) => (
						<div
							key={size}
							className="w-full bg-white gap-10 z-50 relative flex items-center justify-between border border-black rounded-lg px-6 py-3">
							<div className="w-full rounded-lg text-[#0E0E30] font-Monstrate text-[16px] font-normal leading-tight tracking-tight placeholder:text-[#0E0E30] outline-none">
								{size} ${price}
							</div>
							<div className="flex items-center gap-2">
								{!selectedItems[size] ? (
									<button
										onClick={() => handleAdd(size, price, time)}
										className="text-[#0E0E30]">
										<CiCirclePlus size={26} />
									</button>
								) : (
									<>
										<button
											onClick={() => handleRemove(size, price, time)}
											className="text-[#0E0E30]">
											<CiCircleMinus size={26} />
										</button>
										<p>{selectedItems[size].quantity}</p>
										<button
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
						onSubmit={onSubmits4}
						className="flex items-center gap-4">
						<button className="text-black border border-black px-6 py-4 rounded-lg text-[20px] font-Monstrate leading-tight tracking-tight">
							Back
						</button>
						<button className="bg-[#F99A03] text-white px-6 py-4 rounded-lg text-[20px] font-Monstrate leading-tight tracking-tight">
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
