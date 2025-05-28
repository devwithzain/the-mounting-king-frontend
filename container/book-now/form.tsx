"use client";
import Link from "next/link";
import { GoClock } from "react-icons/go";
import { useState, useEffect } from "react";
import { Footer, Navbar } from "@/components/client";
import { useParams, useRouter } from "next/navigation";
import getRequestService from "@/actions/get-requestService";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

export default function Form() {
	const { id } = useParams<{ id: string }>();
	const [selectedValue3, setSelectedValue] = useState<number>(() => {
		const storedValue = localStorage.getItem("selectedValue3");
		return storedValue ? JSON.parse(storedValue) : 0;
	});

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

			setSelectedValue(selectedValue3 + 1);
			localStorage.setItem(
				"selectedValue3",
				JSON.stringify(selectedValue3 + 1),
			);
			localStorage.setItem("selectedItems", JSON.stringify(updatedItems));
			return updatedItems;
		});
	};

	const handleRemove = (size: string, price: number, time: number) => {
		setSelectedItems((prev) => {
			if (!prev[size]) return prev;

			const updatedQuantity = prev[size].quantity - 1;
			let updatedItems;

			if (updatedQuantity <= 0) {
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

			setSelectedValue(selectedValue3 - 1);
			localStorage.setItem(
				"selectedValue3",
				JSON.stringify(selectedValue3 - 1),
			);
			localStorage.setItem("selectedItems", JSON.stringify(updatedItems));
			return updatedItems;
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

	const [data, setData] = useState<any[]>([]);
	const [currentStep, setCurrentStep] = useState(0);

	const router = useRouter();

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await getRequestService(id!);
				setData(Array.isArray(response.data) ? response.data : [response.data]);
			} catch (err) {
				console.error("Error fetching products:", err);
			}
		};
		if (id) fetchProducts();
	}, [id]);

	const handleNextStep = () => {
		if (currentStep < data[0]?.steps?.length - 1) {
			setCurrentStep(currentStep + 1);
		} else {
			router.push("/book-a-date");
		}
	};

	const handlePreviousStep = () => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1);
		}
	};

	const isContinueDisabled = Object.keys(selectedItems).length === 0;

	return (
		<>
			<Navbar />
			<div
				className="w-full min-h-screen flex items-center justify-center padding-y padding-x rounded-lg z-[999]"
				style={{
					background:
						"linear-gradient(0deg, rgba(106,155,190,1) 0%, rgba(0,73,124,1) 30%, rgba(0,73,124,1) 50%, rgba(0,73,124,1) 70%, rgba(106,155,190,1) 100%)",
				}}>
				<div className="w-full xm:flex-col-reverse sm:flex-col-reverse flex gap-8 justify-between py-20 mt-10 mb-60 xm:mb-0 sm:mb-0 relative z-[999]">
					<div className="w-full flex flex-col gap-5">
						{data.length > 0 && data[0]?.steps?.[currentStep] && (
							<div className="flex flex-col gap-4">
								<h1 className="text-white font-Monstrate text-[45px] font-black leading-tight capitalize">
									{data[0].steps[currentStep].step_title}
								</h1>
								<p className="text-white font-Monstrate text-[22px]">
									{data[0].steps[currentStep].step_description}
								</p>
								{data[0].steps[currentStep].options.map((option: any) => (
									<div
										key={option.id}
										className="w-full bg-white gap-10 z-50 relative flex items-center justify-between border border-black rounded-lg px-6 py-3">
										<div className="w-full rounded-lg text-[#0E0E30] font-Monstrate text-[17px] font-normal leading-tight tracking-tight placeholder:text-[#0E0E30] outline-none">
											{option.size} ${option.price}
										</div>
										<div className="flex items-center gap-2">
											{!selectedItems[option.size] ? (
												<button
													type="button"
													onClick={() =>
														handleAdd(
															option.size,
															parseFloat(option.price),
															option.time,
														)
													}
													className="text-[#0E0E30]">
													<CiCirclePlus size={26} />
												</button>
											) : (
												<>
													<button
														type="button"
														onClick={() =>
															handleRemove(
																option.size,
																parseFloat(option.price),
																option.time,
															)
														}
														className="text-[#0E0E30]">
														<CiCircleMinus size={26} />
													</button>
													<p>{selectedItems[option.size].quantity}</p>
													<button
														type="button"
														onClick={() =>
															handleAdd(
																option.size,
																parseFloat(option.price),
																option.time,
															)
														}
														className="text-[#0E0E30]">
														<CiCirclePlus size={26} />
													</button>
												</>
											)}
										</div>
									</div>
								))}
							</div>
						)}
						<form
							onSubmit={() => {}}
							className="flex items-center gap-4">
							<button
								type="button"
								onClick={handlePreviousStep}
								className="text-white border border-white px-6 py-4 rounded-lg text-[20px] font-Monstrate leading-tight tracking-tight">
								Back
							</button>
							{data[0]?.steps?.length > 0 &&
							currentStep < data[0].steps.length - 1 ? (
								<button
									type="button"
									onClick={handleNextStep}
									className="px-6 py-4 rounded-lg text-[20px] font-Monstrate leading-tight tracking-tight bg-[#F99A03] text-white">
									Continue
								</button>
							) : (
								<Link
									href={`/book-now/services/${id}/book-a-service`}
									className={`px-6 py-4 rounded-lg text-[20px] font-Monstrate leading-tight tracking-tight ${
										isContinueDisabled
											? "text-black bg-gray-200 cursor-not-allowed"
											: "bg-[#F99A03] text-white"
									}`}>
									Continue
								</Link>
							)}
						</form>
					</div>
					<div className="w-1/3 flex flex-col gap-3 border border-white rounded-lg p-5 h-fit xm:w-full sm:w-full">
						<h1 className="text-white font-Monstrate font-semibold text-[28px] leading-tight inline-block">
							{data.length > 0 && data[0]?.service_title}
						</h1>
						{Object.keys(selectedItems).length > 0 && (
							<div className="flex flex-col">
								{Object.entries(selectedItems).map(([size, item]) => (
									<div
										key={size}
										className="flex justify-between py-2 border-b border-white">
										<p className="text-white font-Monstrate text-[18px] leading-normal capitalize">
											{item.quantity}x {size}
										</p>
									</div>
								))}
								<div className="flex items-center gap-2 border-b border-white py-2">
									<GoClock
										size={24}
										className="text-white"
									/>
									<p className="text-white font-Monstrate text-[18px] leading-normal capitalize">
										{Math.floor(totalTime / 60)} hr {totalTime % 60} min
									</p>
								</div>
								<div className="flex justify-between items-center gap-5 pt-2">
									<p className="text-white font-Monstrate text-[18px] leading-normal capitalize">
										Total
									</p>
									<p className="text-white font-Monstrate text-[18px] leading-normal capitalize">
										${totalPrice}
									</p>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
