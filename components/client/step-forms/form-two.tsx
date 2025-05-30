"use client";
import { useEffect, useState } from "react";
import getRequestServices from "@/actions/get-requestServices";

export default function FormTwo({
	onSubmits2,
}: {
	onSubmits2: (event: React.FormEvent<HTMLFormElement>) => void;
}) {
	const [data, setData] = useState<any>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await getRequestServices();
				setData(response.data);
			} catch (err) {
				console.error("Error fetching products:", err);
			}
		};
		fetchProducts();
	}, []);

	return (
		<div className="w-full flex items-center justify-center bg-white padding-y padding-x rounded-lg z-[999] mb-[200px] sm:mb-0 xm:mb-0">
			<div className="flex flex-col gap-8 items-center justify-center h-full">
				<h1 className="text-black text-center font-Monstrate heading font-black leading-tight capitalize">
					Select Main Service
				</h1>
				<p className="text-black text-center font-Monstrate text-[18px] leading-normal">
					Start selection by clicking what your major tv is. Then if you have
					more TVs to hang, or need anything else like a TV mounting bracket, or
					cord concealing, you&apos;ll then be able to add those options after
					you select your main TV option.
				</p>
				<div className="w-full flex gap-5 justify-between">
					{data.map((service: any) => (
						<form
							onSubmit={onSubmits2}
							key={service.id}
							className="w-full bg-white gap-7 z-50 relative flex flex-col py-10 border border-black/5 shadow-xl rounded-lg px-5 justify-between">
							<div className="flex flex-col gap-3">
								<h1 className="text-black font-Monstrate text-[22px] font-black leading-tight capitalize">
									{service.service_title}
								</h1>
								<p className="text-black font-Monstrate text-[16px] leading-normal">
									{service.service_description}
								</p>
							</div>
							<button className="w-fit text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-tight tracking-tight bg-[#F99A03] px-6 py-3 rounded-lg">
								Book
							</button>
						</form>
					))}
				</div>
			</div>
		</div>
	);
}
