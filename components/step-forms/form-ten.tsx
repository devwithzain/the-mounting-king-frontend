import { GoClock } from "react-icons/go";

export default function FormTen({
	onSubmits10,
}: {
	onSubmits10: (event: React.FormEvent<HTMLFormElement>) => void;
}) {
	return (
		<div className="w-[70%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-white p-10 rounded-lg z-50">
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
							onSubmit={onSubmits10}
							className="w-full bg-white gap-5 z-50 relative flex flex-col">
							<div className="w-full flex flex-col gap-4">
								<input
									type="text"
									className="w-full rounded-lg px-6 py-3 text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-tight tracking-tight placeholder:text-[#0E0E30] outline-none   border border-black"
									placeholder="Full Name"
								/>
								<input
									type="number"
									className="w-full rounded-lg px-6 py-3 text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-tight tracking-tight placeholder:text-[#0E0E30] outline-none   border border-black"
									placeholder="Phone"
								/>
								<input
									type="email"
									className="w-full rounded-lg px-6 py-3 text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-tight tracking-tight placeholder:text-[#0E0E30] outline-none   border border-black"
									placeholder="Email"
								/>
							</div>
							<div className="w-full flex items-center justify-center gap-3">
								<button className="w-full text-[#0E0E30] font-Monstrate border border-black text-[20px] font-normal leading-tight tracking-tight px-6 py-3 rounded-lg">
									Cancel
								</button>
								<button className="w-full text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-tight tracking-tight bg-[#F99A03] px-6 py-3 rounded-lg">
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
							<p className="text-black font-Monstrate text-[18px] leading-normal capitalize border-b border-black pb-2">
								1x Under 50 Inches
							</p>
							<div className="flex items-center gap-2 border-b border-black pb-2">
								<GoClock size={24} />
								<p className="text-black font-Monstrate text-[18px] leading-normal capitalize">
									30 min
								</p>
							</div>
							<div className="flex justify-between items-center gap-5">
								<p className="text-black font-Monstrate text-[18px] leading-normal capitalize">
									Total
								</p>
								<p className="text-black font-Monstrate text-[18px] leading-normal capitalize">
									$50
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
