"use client";
import { useState } from "react";

export default function FormNine({
	onSubmits9,
	backBtn,
}: {
	onSubmits9: (event: React.FormEvent<HTMLFormElement>) => void;
	backBtn: () => void;
}) {
	const [address, setAddress] = useState<string>("");
	const [aptUnitFloor, setAptUnitFloor] = useState<string>("");

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// Save input values to sessionStorage
		sessionStorage.setItem(
			"formAddress",
			JSON.stringify({ address, aptUnitFloor }),
		);

		// Call the parent submit function if needed
		onSubmits9(event);
	};

	return (
		<div className="w-[70%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-white p-10 rounded-lg z-50">
			<div className="flex flex-col gap-8 items-center justify-center">
				<h1 className="text-black text-center font-HyperspaceRace text-[98px] font-black leading-tight capitalize">
					Enter Address Where <br /> Service Will Be Provided
				</h1>
				<div className="w-full flex items-center justify-center">
					<form
						onSubmit={handleFormSubmit}
						className="w-fit bg-white gap-5 z-50 relative flex flex-col">
						<div className="w-full flex items-center justify-between gap-4">
							<input
								type="text"
								className="rounded-lg px-6 py-3 text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-tight tracking-tight placeholder:text-[#0E0E30] outline-none   border border-black"
								placeholder="Address"
								value={address}
								onChange={(e) => setAddress(e.target.value)}
							/>
							<input
								type="text"
								className="rounded-lg px-6 py-3 text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-tight tracking-tight placeholder:text-[#0E0E30] outline-none   border border-black"
								placeholder="Apt, Unit, Floor"
								value={aptUnitFloor}
								onChange={(e) => setAptUnitFloor(e.target.value)}
							/>
						</div>
						<div className="w-full flex items-center justify-center gap-3">
							<button
								onClick={() => backBtn()}
								type="button"
								className="text-[#0E0E30] font-Monstrate border border-black text-[20px] font-normal leading-tight tracking-tight px-6 py-3 rounded-lg">
								back
							</button>
							<button
								type="submit"
								className="text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-tight tracking-tight bg-[#F99A03] px-6 py-3 rounded-lg">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
