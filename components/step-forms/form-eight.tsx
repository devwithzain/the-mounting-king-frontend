"use client";
import { useEffect, useState } from "react";
import { GoClock } from "react-icons/go";

export default function FormTwo({
	onSubmits8,
	backBtn,
}: {
	onSubmits8: (event: React.FormEvent<HTMLFormElement>) => void;
	backBtn: () => void;
}) {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [selectedItems, setSelectedItems] = useState<
		Record<string, { quantity: number; price: number; time: number }>
	>(() => {
		const storedItems = sessionStorage.getItem("selectedItems");
		return storedItems ? JSON.parse(storedItems) : {};
	});

	const [calendarDates, setCalendarDates] = useState<
		{ day: string; date: string }[]
	>([]);
	const [selectedDate, setSelectedDate] = useState<{
		day: string;
		date: string;
	} | null>(() => {
		const storedDate = sessionStorage.getItem("selectedDate");
		return storedDate ? JSON.parse(storedDate) : null;
	});

	// Generate dynamic week dates
	useEffect(() => {
		const today = new Date();
		const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		const dates = Array.from({ length: 7 }).map((_, i) => {
			const day = new Date(
				today.getFullYear(),
				today.getMonth(),
				today.getDate() + i,
			);
			return {
				day: weekDays[day.getDay()],
				date: day.toLocaleDateString("en-US", {
					month: "short",
					day: "numeric",
				}),
			};
		});
		setCalendarDates(dates);
	}, []);

	// Store selected date in sessionStorage
	const handleDateSelection = (day: string, date: string) => {
		const selected = { day, date };
		setSelectedDate(selected);
		sessionStorage.setItem("selectedDate", JSON.stringify(selected));
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

	return (
		<div className="w-full flex items-center justify-center bg-white padding-y padding-x rounded-lg z-[999]">
			<div className="flex flex-col gap-8 items-center justify-center">
				<div className="w-full flex justify-between gap-5">
					<div className="flex-1 flex flex-col gap-5">
						<h1 className="text-black font-HyperspaceRace text-[45px] font-black leading-tight capitalize">
							Book a Date and Time Book your preferred date and time
						</h1>
						<p className="text-black font-Monstrate text-[18px] leading-normal capitalize">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry s standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type. Specimen book.
						</p>
						<p className="text-black font-Monstrate text-[18px] leading-normal capitalize">
							It has survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s.
						</p>
					</div>
					<div className="flex-1 flex flex-col gap-5 border border-black rounded-lg p-5 justify-between">
						<h1 className="text-black font-HyperspaceRace text-[28px] font-black leading-tight capitalize">
							Mount 1 Or More TVs Normal TV Onto Any Surface.
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
				<div className="w-full flex flex-col gap-5">
					<div className="w-full rounded-lg border border-black">
						<div className="w-full flex justify-between items-center border-b border-black p-5">
							{calendarDates.map(({ day, date }) => (
								<div
									key={date}
									className={`flex flex-col items-center cursor-pointer ${
										selectedDate?.date === date
											? "bg-[#F99A03] px-4 py-2 rounded-lg"
											: ""
									}`}
									onClick={() => handleDateSelection(day, date)}>
									<h1 className="text-black font-Monstrate text-[18px] capitalize">
										{day}
									</h1>
									<p className="text-black font-Monstrate text-[18px] capitalize">
										{date}
									</p>
								</div>
							))}
						</div>
						<div className="w-full flex gap-5 justify-between items-center p-5">
							<div className="w-full flex flex-col gap-3">
								<div className="rounded-lg border border-black p-5">
									<h1 className="text-black font-Monstrate text-center text-[18px] leading-normal capitalize">
										11 AM - 12 PM
									</h1>
								</div>
								<div className="rounded-lg border border-black p-5">
									<h1 className="text-black font-Monstrate text-center text-[18px] leading-normal capitalize">
										1 PM - 2 PM
									</h1>
								</div>
								<div className="rounded-lg border border-black p-5">
									<h1 className="text-black font-Monstrate text-center text-[18px] leading-normal capitalize">
										3 PM - 4 PM
									</h1>
								</div>
								<div className="rounded-lg border border-black p-5">
									<h1 className="text-black font-Monstrate text-center text-[18px] leading-normal capitalize">
										5 PM - 6 PM
									</h1>
								</div>
							</div>
							<div className="w-full flex flex-col gap-3">
								<div className="rounded-lg border border-black p-5">
									<h1 className="text-black font-Monstrate text-center text-[18px] leading-normal capitalize">
										12 PM - 1 PM
									</h1>
								</div>
								<div className="rounded-lg border border-black p-5">
									<h1 className="text-black font-Monstrate text-center text-[18px] leading-normal capitalize">
										1 PM - 2 PM
									</h1>
								</div>
								<div className="rounded-lg border border-black p-5">
									<h1 className="text-black font-Monstrate text-center text-[18px] leading-normal capitalize">
										4 PM - 5 PM
									</h1>
								</div>
								<div className="rounded-lg border border-black p-5">
									<h1 className="text-black font-Monstrate text-center text-[18px] leading-normal capitalize">
										6 PM - 7 PM
									</h1>
								</div>
							</div>
						</div>
					</div>
					<form
						onSubmit={onSubmits8}
						className="flex items-center gap-4">
						<button
							onClick={() => {
								backBtn();
							}}
							className="text-black border border-black px-6 py-4 rounded-lg text-[20px] font-Monstrate">
							Back
						</button>
						<button className="bg-[#F99A03] text-white px-6 py-4 rounded-lg text-[20px] font-Monstrate">
							Continue
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
