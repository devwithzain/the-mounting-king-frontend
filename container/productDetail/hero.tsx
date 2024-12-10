import Link from "next/link";
import { heroCloud, tv } from "@/public";
import Image from "next/image";

export default function ProductDetailHero() {
	return (
		<div className="w-full h-[130vh] flex items-center relative justify-center bg-[url('/heroBackground.png')] bg-cover bg-center bg-no-repeat padding-x pt-10">
			<div className="absolute -right-24 top-28 h-[500px] blur-[150px] bg-gradient-to-b from-[#007DFE] via-[#c092df] to-[#007DFE] rounded-full w-[500px] overflow-hidden" />
			<div className="w-full h-screen flex items-center absolute top-0 left-0 justify-center gap-5 padding-x">
				<div className="w-1/2 flex flex-col gap-5">
					<div className="w-full rounded-lg">
						<Image
							className="w-full object-cover"
							width={1000}
							height={1000}
							src={tv}
							alt="Product Image"
						/>
					</div>
				</div>
				<div className="w-1/2 flex flex-col gap-6">
					<div className="flex flex-col gap-2">
						<h2 className="text-[30px] font-bold text-black font-Monstrate">
							Product Name
						</h2>
						<p className="text-black text-xl font-Monstrate">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
							ante justo. Integer euismod libero id mauris malesuada tincidunt.
						</p>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-black text-xl font-Monstrate font-black">
							Price:
						</span>
						<span className="text-black text-xl font-Monstrate">$29.99</span>
					</div>
					<div className="flex flex-col gap-2">
						<h2 className="text-[30px] font-bold text-black font-Monstrate">
							Product Description
						</h2>
						<p className="text-black text-xl font-Monstrate">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
							ante justo. Integer euismod libero id mauris malesuada tincidunt.
							Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue
							vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae
							nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum
							lacinia, non sagittis mauris blandit. Morbi fermentum libero vel
							nisl suscipit, nec tincidunt mi consectetur.
						</p>
					</div>
					<div className="w-full">
						<Link
							className={`w-full bg-[#F99A03] btn text-center transition-all duration-300 ease-in-out text-white px-6 py-3 rounded-lg text-[20px] font-Monstrate leading-tight tracking-tight`}
							href="/cart">
							Checkout
						</Link>
					</div>
				</div>
			</div>
			<div className="w-full absolute left-0 -bottom-80 z-50 lg:-bottom-60 md:-bottom-40 overflow-hidden h-fit">
				<Image
					alt="heroCloudImg"
					src={heroCloud}
					className="w-full h-full object-cover rotate-180"
				/>
			</div>
			<div className="w-full absolute right-0 -bottom-60 z-50 lg:-bottom-40 md:-bottom-40 overflow-hidden h-fit">
				<Image
					alt="heroCloudImg"
					src={heroCloud}
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	);
}
