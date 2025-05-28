"use client";
import axios from "axios";
import toast from "react-hot-toast";
import { GoClock } from "react-icons/go";
import { useEffect, useState } from "react";

export default function FormTen() {
	const [name, setName] = useState<string>("");
	const [phone, setPhone] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const [selectedItems, setSelectedItems] = useState<
		Record<string, { quantity: number; price: number; time: number }>
	>(() => {
		const storedItems = localStorage.getItem("selectedItems");
		return storedItems ? JSON.parse(storedItems) : {};
	});

	const [selectedDate, setSelectedDate] = useState<{
		day: string;
		date: string;
		time: string;
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

		if (!name || !phone || !email) {
			alert("Please fill in all required fields (Name, Phone, and Email).");
			return;
		}

		setIsSubmitting(true);

		const checkoutData = {
			name,
			phone,
			email,
			items: Object.entries(selectedItems).map(([key, value]) => ({
				name: key,
				quantity: value.quantity,
				price: value.price,
				time: value.time,
			})),
			totalPrice,
			totalTime,
			appointmentDate: selectedDate,
			address: selectedAddress,
		};

		const requestData = {
			name,
			phone,
			email,
			selectedItems,
			selectedDate,
			selectedAddress,
		};

		try {
			// First, post request to create the checkout session
			const response = await axios.post(
				`https://themountingking.com/backend/api/formCheckout`,
				checkoutData,
			);

			if (response.data.url) {
				// Second, post request to send email to the user
				const emailResponse = await axios.post(
					`https://themountingking.com/backend/api/contact`,
					requestData,
				);

				if (emailResponse.data.success) {
					toast.success("Email sent successfully!");
				} else {
					toast.error("Failed to send email.");
				}

				toast.success(response.data.success);
				setName("");
				setPhone("");
				setEmail("");
				localStorage.removeItem("selectedItems");
				localStorage.removeItem("selectedDate");
				localStorage.removeItem("formAddress");
				localStorage.removeItem("selectedValue3");
				localStorage.removeItem("selectedValue4");
				localStorage.removeItem("selectedValue5");
				localStorage.removeItem("selectedValue6");
				localStorage.removeItem("selectedValue7");

				// Redirect to Stripe Checkout
				window.location.href = response.data.url;
			} else {
				toast.error("Failed to create a checkout session");
			}
		} catch (err) {
			if (axios.isAxiosError(err) && err.response) {
				toast.error(err.response.data.message);
			} else {
				toast.error("An error occurred");
			}
		} finally {
			setIsSubmitting(false);
		}
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
		<div className="w-full flex items-center justify-center bg-white padding-y padding-x rounded-lg z-[999] mb-[200px] xm:mb-0 sm:mb-0">
			<div className="w-full flex flex-col gap-8 items-center justify-center">
				<h1 className="text-black text-center font-Monstrate heading font-black leading-tight capitalize">
					Almost Done
				</h1>
				<p className="text-black font-Monstrate paragraph leading-normal capitalize">
					Enter your contact info to finalize your appointment.
				</p>
				<div className="w-full flex gap-5 justify-between xm:flex-col sm:flex-col">
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
									disabled={isSubmitting}
									className={`w-full text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-tight tracking-tight px-6 py-3 rounded-lg ${
										isSubmitting
											? "bg-gray-400 cursor-not-allowed"
											: "bg-[#F99A03]"
									}`}>
									{isSubmitting ? "Submitting..." : "Submit"}
								</button>
							</div>
						</form>
					</div>
					<div className="w-full">
						<div className="flex flex-col gap-5 border border-black rounded-lg p-5">
							<h1 className="text-black font-Monstrate text-[28px] font-black leading-tight capitalize">
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
												{selectedDate.date}, {selectedDate.time},
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
