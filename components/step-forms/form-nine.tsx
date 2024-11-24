export default function FormNine({
	onSubmits9,
}: {
	onSubmits9: (event: React.FormEvent<HTMLFormElement>) => void;
}) {
	return (
		<div className="w-[70%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-white p-10 rounded-lg z-50">
			<div className="flex flex-col gap-8 items-center justify-center">
				<h1 className="text-black text-center font-HyperspaceRace text-[98px] font-black leading-tight capitalize">
					Enter Address Where <br /> Service Will Be Provided
				</h1>
				<div className="w-full flex items-center justify-center">
					<form
						onSubmit={onSubmits9}
						className="w-fit bg-white gap-5 z-50 relative flex flex-col">
						<div className="w-full flex items-center justify-between gap-4">
							<input
								type="email"
								className="rounded-lg px-6 py-3 text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-tight tracking-tight placeholder:text-[#0E0E30] outline-none   border border-black"
								placeholder="Address"
							/>
							<input
								type="text"
								className="rounded-lg px-6 py-3 text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-tight tracking-tight placeholder:text-[#0E0E30] outline-none   border border-black"
								placeholder="Apt, Unit, Floor"
							/>
						</div>
						<div className="w-full flex items-center justify-center gap-3">
							<button className="text-[#0E0E30] font-Monstrate border border-black text-[20px] font-normal leading-tight tracking-tight px-6 py-3 rounded-lg">
								Cancel
							</button>
							<button className="text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-tight tracking-tight bg-[#F99A03] px-6 py-3 rounded-lg">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
