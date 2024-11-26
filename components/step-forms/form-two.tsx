export default function FormTwo({
	onSubmits2,
}: {
	onSubmits2: (event: React.FormEvent<HTMLFormElement>) => void;
}) {
	return (
		<div className="w-[70%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-white p-10 rounded-lg z-50">
			<div className="flex flex-col gap-8 items-center justify-center h-full">
				<h1 className="text-black text-center font-HyperspaceRace text-[98px] font-black leading-tight capitalize">
					Select Main Service
				</h1>
				<p className="text-black text-center font-Monstrate text-[18px] leading-normal">
					Start selection by clicking what your major tv is. Then if you have
					more TVs to hang, or need anything else like a TV mounting bracket, or
					cord concealing, you&apos;ll then be able to add those options after
					you select your main TV option.
				</p>
				<div className="w-full flex gap-5 justify-between">
					<form
						onSubmit={onSubmits2}
						className="w-[300px] bg-white gap-7 z-50 relative flex flex-col py-5 border border-black/20 shadow-xl rounded-lg p-5 justify-between">
						<div className="flex flex-col gap-3">
							<h1 className="text-black font-HyperspaceRace text-[22px] font-black leading-tight capitalize">
								Mount 1 Or More TVs Normal TVs Onto Any Surface.
							</h1>
							<p className="text-black font-Monstrate text-[16px] leading-normal">
								If you have a Samsung Frame, an unusual TV mounting scenario, or
								need The Mantel Mount mounted, select that specific category.
							</p>
						</div>
						<button className="w-fit text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-tight tracking-tight bg-[#F99A03] px-6 py-3 rounded-lg">
							Book
						</button>
					</form>
					<form
						onSubmit={onSubmits2}
						className="w-[300px] bg-white gap-7 z-50 relative flex flex-col py-5 border border-black/20 shadow-xl rounded-lg p-5 justify-between">
						<div className="flex flex-col gap-3">
							<h1 className="text-black font-HyperspaceRace text-[22px] font-black leading-tight capitalize">
								The Frame by Samsung Installation
							</h1>
							<p className="text-black font-Monstrate text-[16px] leading-normal">
								We specialize in The Frame by Samsung. It takes a highly trained
								service technician to do them safely, and we&apos;ve done many
								hundreds of them. If you have other TVs to mount, you&apos;ll be
								able to select them here as well.
							</p>
						</div>
						<button className="w-fit text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-tight tracking-tight bg-[#F99A03] px-6 py-3 rounded-lg">
							Book
						</button>
					</form>
					<form
						onSubmit={onSubmits2}
						className="w-[300px] bg-white gap-7 z-50 relative flex flex-col py-5 border border-black/20 shadow-xl rounded-lg p-5 justify-between">
						<div className="flex flex-col gap-3">
							<h1 className="text-black font-HyperspaceRace text-[22px] font-black leading-tight capitalize">
								The Mantel Mount Installation
							</h1>
							<p className="text-black font-Monstrate text-[16px] leading-normal">
								We specialize in The Mantel Mount and The Frame by Samsung. We
								can only send our most highly trained It takes a highly trained
								service technician to do them safely so it&apos;s fairly
								expensive to install.
							</p>
						</div>
						<button className="w-fit text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-tight tracking-tight bg-[#F99A03] px-6 py-3 rounded-lg">
							Book
						</button>
					</form>
					<form
						onSubmit={onSubmits2}
						className="w-[300px] bg-white gap-7 z-50 relative flex flex-col py-5 border border-black/20 shadow-xl rounded-lg p-5 justify-between">
						<div className="flex flex-col gap-3">
							<h1 className="text-black font-HyperspaceRace text-[22px] font-black leading-tight capitalize">
								Special TV Mounting Situation
							</h1>
							<p className="text-black font-Monstrate text-[16px] leading-normal">
								This would include things like 98 TVs, mounting a tv onto the
								ceiling, mounting outdoors, uneven stone fireplaces, installing
								onto tile, installing into a cabinet, installing onto wood
								slats, etc...
							</p>
						</div>
						<button className="w-fit text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-tight tracking-tight bg-[#F99A03] px-6 py-3 rounded-lg">
							Book
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
