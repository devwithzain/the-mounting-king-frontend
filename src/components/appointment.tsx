import { useNavigate } from "react-router-dom";
import React, { FormEvent, useState } from "react";

export default function Appointment() {
	const navigate = useNavigate();
	const [zipCode, setZipCode] = useState("");
	const onSubmits = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate("/request-a-demo/services");
	};
	return (
		<div
			className="w-full min-h-screen py-80 xm:py-20 sm:py-20 padding-x flex items-center justify-center"
			style={{
				background:
					"linear-gradient(0deg, rgba(106,155,190,1) 0%, rgba(0,73,124,1) 30%, rgba(0,73,124,1) 50%, rgba(0,73,124,1) 70%, rgba(106,155,190,1) 100%)",
			}}>
			<div className="flex items-center justify-center w-[80%] relative z-[9999]">
				<div className="w-fit flex items-center justify-center bg-[#1f1f3d] padding-y padding-x rounded-lg z-[999]">
					<div className="flex flex-col gap-5 items-center justify-center">
						<div className="flex flex-col gap-2 items-center justify-center">
							<h1 className="text-white text-center xm:text-left sm:text-left xm:w-full sm:w-full font-HyperspaceRace heading font-black leading-tight capitalize">
								Book Appointment <br /> With The Mounting King
							</h1>
							<p className="w-1/2 text-white text-center xm:text-left sm:text-left xm:w-full sm:w-full font-Monstrate text-[18px] leading-normal">
								Enter Your Zip Code (You may also simply use this to get a
								precise quote of how much your job will be...it&apos;ll show the
								price change based on your selections.)
							</p>
						</div>
						<div className="w-full flex items-center justify-center">
							<form
								onSubmit={onSubmits}
								className="w-fit bg-white gap-10 z-50 relative border border-black/20 rounded-lg shadow-xl">
								<input
									type="number"
									maxLength={5}
									pattern="\d{5}"
									required
									value={zipCode}
									onChange={(e) => {
										if (e.target.value.length <= 5) {
											setZipCode(e.target.value);
										}
									}}
									className="rounded-lg px-6 py-3 text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-tight tracking-tight placeholder:text-[#0E0E30] outline-none"
									placeholder="Enter zip code"
								/>
								<button
									type="submit"
									className={`text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-tight tracking-tight bg-[#F99A03] px-6 py-3 rounded-r-lg xm:w-full sm:w-full ${
										zipCode.length < 5
											? "bg-gray-200 cursor-not-allowed pointer-events-none"
											: ""
									}`}>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
