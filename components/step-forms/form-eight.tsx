import { GoClock } from "react-icons/go";

export default function FormTwo({
	onSubmits8,
}: {
	onSubmits8: (event: React.FormEvent<HTMLFormElement>) => void;
}) {
	return (
		<div className="w-[70%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-white p-10 rounded-lg z-50">
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
				<div className="w-full flex flex-col gap-5">
					<div className="w-full rounded-lg border border-black">
						<div className="w-full flex justify-between items-center border-b border-black p-5">
							<div className="flex flex-col items-center">
								<h1 className="text-black font-Monstrate text-[18px] leading-normal capitalize">
									Sun
								</h1>
								<p className="text-black font-Monstrate text-[18px] leading-normal capitalize">
									Nov 16
								</p>
							</div>
							<div className="flex flex-col items-center">
								<h1 className="text-black font-Monstrate text-[18px] leading-normal capitalize">
									Mon
								</h1>
								<p className="text-black font-Monstrate text-[18px] leading-normal capitalize">
									Nov 17
								</p>
							</div>
							<div className="flex flex-col items-center">
								<h1 className="text-black font-Monstrate text-[18px] leading-normal capitalize">
									Tue
								</h1>
								<p className="text-black font-Monstrate text-[18px] leading-normal capitalize">
									Nov 18
								</p>
							</div>
							<div className="flex flex-col items-center">
								<h1 className="text-black font-Monstrate text-[18px] leading-normal capitalize">
									Wed
								</h1>
								<p className="text-black font-Monstrate text-[18px] leading-normal capitalize">
									Nov 19
								</p>
							</div>

							<div className="flex flex-col items-center">
								<h1 className="text-black font-Monstrate text-[18px] leading-normal capitalize">
									Thu
								</h1>
								<p className="text-black font-Monstrate text-[18px] leading-normal capitalize">
									Nov 20
								</p>
							</div>
							<div className="flex flex-col items-center">
								<h1 className="text-black font-Monstrate text-[18px] leading-normal capitalize">
									Fiday
								</h1>
								<p className="text-black font-Monstrate text-[18px] leading-normal capitalize">
									Nov 21
								</p>
							</div>
							<div className="flex flex-col items-center">
								<h1 className="text-black font-Monstrate text-[18px] leading-normal capitalize">
									Saturday
								</h1>
								<p className="text-black font-Monstrate text-[18px] leading-normal capitalize">
									Nov 22
								</p>
							</div>
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
						<button className="text-black border border-black px-6 py-4 rounded-lg text-[20px] font-Monstrate leading-tight tracking-tight">
							back
						</button>
						<button className="bg-[#F99A03] text-white px-6 py-4 rounded-lg text-[20px] font-Monstrate leading-tight tracking-tight">
							Continue
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
