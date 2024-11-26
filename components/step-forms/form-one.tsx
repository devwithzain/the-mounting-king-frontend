"use client";
import { useState } from "react";
import { zipCodeItems } from "@/constants";

export default function FormOne({
	onSubmits1,
}: {
	onSubmits1: (event: React.FormEvent<HTMLFormElement>) => void;
}) {
	const codes = zipCodeItems.map((item) => item.zipCode);
	const [zipCode, setZipCode] = useState("");

	const isValidZipCode = codes.includes(zipCode);

	return (
		<div className="w-full flex items-center justify-center bg-white padding-y padding-x rounded-lg z-[999]">
			<div className="flex flex-col gap-8 items-center justify-center">
				<div className="flex flex-col gap-5 items-center justify-center">
					<h1 className="text-black text-center font-HyperspaceRace heading font-black leading-[100px] capitalize">
						Book Appointment <br /> With The Mounting Man
					</h1>
					<p className="w-1/2 text-black text-center font-Monstrate text-[18px] leading-normal">
						Enter Your Zip Code (You may also simply use this to get a precise
						quote of how much your job will be...it&apos;ll show the price
						change based on your selections.)
					</p>
				</div>
				<div className="w-full flex items-center justify-center">
					<form
						onSubmit={onSubmits1}
						className="w-fit bg-white gap-10 z-50 relative border border-black/20 rounded-lg shadow-xl">
						<input
							type="text"
							required
							value={zipCode}
							onChange={(e) => setZipCode(e.target.value)}
							className="rounded-lg px-6 py-3 text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-tight tracking-tight placeholder:text-[#0E0E30] outline-none"
							placeholder="Enter zip code"
						/>
						<button
							disabled={!isValidZipCode}
							className={`text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-tight tracking-tight bg-[#F99A03] px-6 py-3 rounded-r-lg`}>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
