import React, { useState } from "react";

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

		localStorage.setItem(
			"formAddress",
			JSON.stringify({ address, aptUnitFloor }),
		);

		onSubmits9(event);
	};

	return (
		<div className="w-[70%] xm:w-full sm:w-full flex items-center justify-center bg-white padding-y padding-x rounded-lg z-[999] mb-[200px] xm:mb-0 sm:mb-0">
			<div className="flex flex-col gap-8 items-center justify-center xm:items-start sm:items-start">
				<h1 className="text-black text-center xm:text-left sm:text-left font-Monstrate heading leading-none font-black capitalize">
					Enter Address Where <br /> Service Will Be Provided
				</h1>
				<div className="w-full flex items-center justify-center xm:justify-start sm:justify-start">
					<form
						onSubmit={handleFormSubmit}
						className="w-full bg-white gap-5 z-50 relative flex flex-col">
						<div className="w-full flex items-center justify-center gap-4 xm:flex-col sm:flex-col">
							<input
								type="text"
								required
								className="rounded-lg px-6 py-3 text-[#0E0E30] font-Monstrate text-[18px] font-normal leading-tight tracking-tight placeholder:text-[#0E0E30] outline-none border border-black xm:w-full sm:w-full"
								placeholder="Address"
								value={address}
								onChange={(e) => setAddress(e.target.value)}
							/>
							<input
								type="text"
								required
								className="rounded-lg px-6 py-3 text-[#0E0E30] font-Monstrate text-[18px] font-normal leading-tight tracking-tight placeholder:text-[#0E0E30] outline-none border border-black xm:w-full sm:w-full"
								placeholder="Apt, Unit, Floor"
								value={aptUnitFloor}
								onChange={(e) => setAptUnitFloor(e.target.value)}
							/>
						</div>
						<div className="w-full flex items-center justify-center gap-3 xm:justify-start sm:justify-start">
							<button
								onClick={() => backBtn()}
								type="button"
								className="text-[#0E0E30] font-Monstrate border border-black text-[20px] font-normal leading-tight tracking-tight px-6 py-3 rounded-lg">
								back
							</button>
							<button
								type="submit"
								className="text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-tight tracking-tight bg-[#F99A03] px-6 py-3 rounded-lg">
								Continue
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
