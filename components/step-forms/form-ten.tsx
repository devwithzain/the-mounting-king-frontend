"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { GoClock } from "react-icons/go";

export default function FormTen() {
	const [selectedItems, setSelectedItems] = useState<
		Record<string, { quantity: number; price: number; time: number }>
	>(() => {
		const storedItems = localStorage.getItem("selectedItems");
		return storedItems ? JSON.parse(storedItems) : {};
	});

	const [selectedDate, setSelectedDate] = useState<{
		day: string;
		date: string;
	} | null>(() => {
		const storedDate = localStorage.getItem("selectedDate");
		return storedDate ? JSON.parse(storedDate) : null;
	});

	const [selectedAddress, setSelectedAddress] = useState<{
		address: string;
		aptUnitFloor: string;
	} | null>(() => {
		const storedAddress = localStorage.getItem("formAddress");
		return storedAddress ? JSON.parse(storedAddress) : null;
	});

	const [name, setName] = useState<string>("");
	const [phone, setPhone] = useState<string>("");
	const [email, setEmail] = useState<string>("");

	useEffect(() => {
		const storedItems = localStorage.getItem("selectedItems");
		const storedDate = localStorage.getItem("selectedDate");
		const storedAddress = localStorage.getItem("formAddress");

		if (storedItems) {
			setSelectedItems(JSON.parse(storedItems));
		}
		if (storedDate) {
			setSelectedDate(JSON.parse(storedDate));
		}
		if (storedAddress) {
			setSelectedAddress(JSON.parse(storedAddress));
		}
	}, []);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const requestData = {
			name,
			phone,
			email,
			selectedItems,
			selectedDate,
			selectedAddress,
		};

		// console.log("first", requestData);
		// try {
		// 	const response = await axios.post(
		// 		"http://127.0.0.1:8000/contact",
		// 		requestData,
		// 	);
		// 	console.log("secaond", response.data);

		// 	if (response.status === 200) {
		// 		alert("Form submitted successfully!");
		// 	} else {
		// 		alert("Failed to submit the form. Please try again.");
		// 	}
		// } catch (error) {
		// 	console.error("Error submitting form:", error);
		// }
		alert("Form submitted successfully.");
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
		<div className="w-full flex items-center justify-center bg-white padding-y padding-x rounded-lg z-[999]">
			<div className="w-full flex flex-col gap-8 items-center justify-center">
				<h1 className="text-black text-center font-HyperspaceRace text-[98px] font-black leading-tight capitalize">
					Almost Done
				</h1>
				<p className="text-black font-Monstrate text-[18px] leading-normal capitalize">
					Enter your contact info to finalize your appointment.
				</p>
				<div className="w-full flex gap-5 justify-between">
					<div className="w-full flex justify-center">
						<form
							onSubmit={handleSubmit}
							className="w-full bg-white gap-5 z-50 relative flex flex-col">
							<div className="w-full flex flex-col gap-4">
								<input
									type="text"
									className="w-full rounded-lg px-6 py-3 text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-tight tracking-tight placeholder:text-[#0E0E30] outline-none   border border-black"
									placeholder="Full Name"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
								<input
									type="number"
									className="w-full rounded-lg px-6 py-3 text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-tight tracking-tight placeholder:text-[#0E0E30] outline-none   border border-black"
									placeholder="Phone"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
								/>
								<input
									type="email"
									className="w-full rounded-lg px-6 py-3 text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-tight tracking-tight placeholder:text-[#0E0E30] outline-none   border border-black"
									placeholder="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="w-full flex items-center justify-center gap-3">
								<button
									type="button"
									className="w-full text-[#0E0E30] font-Monstrate border border-black text-[20px] font-normal leading-tight tracking-tight px-6 py-3 rounded-lg">
									Cancel
								</button>
								<button
									type="submit"
									className="w-full text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-tight tracking-tight bg-[#F99A03] px-6 py-3 rounded-lg">
									Submit
								</button>
							</div>
						</form>
					</div>
					<div className="w-full">
						<div className="flex flex-col gap-5 border border-black rounded-lg p-5">
							<h1 className="text-black font-HyperspaceRace text-[28px] font-black leading-tight capitalize">
								Mount 1 Or More TVs <br /> Normal TV Onto Any <br /> Surface.
							</h1>
							{Object.keys(selectedItems).length > 0 && (
								<div className="flex flex-col">
									{Object.entries(selectedItems).map(([size, item]) => (
										<div
											key={size}
											className="flex flex-col py-2 border-b border-black">
											<p className="text-black font-Monstrate text-[18px] leading-normal capitalize">
												{item.quantity}x {size}
											</p>
										</div>
									))}
									{selectedDate && (
										<div className="flex items-center gap-2 py-2">
											<p className="text-black font-Monstrate text-[18px]">
												Appointment Date: {selectedDate.day},{" "}
												{selectedDate.date}
											</p>
										</div>
									)}
									{selectedAddress && (
										<div className="flex items-center gap-2 py-2">
											<p className="text-black font-Monstrate text-[18px]">
												Address: {selectedAddress.address},{" "}
												{selectedAddress.aptUnitFloor}
											</p>
										</div>
									)}
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
			</div>
		</div>
	);
}
