import Lenis from "lenis";
import { Link } from "react-router-dom";
import Footer from "../components/footer.tsx";
import Navbar from "../components/navbar.tsx";
import React, { useEffect, useState } from "react";
import getRequestServices from "../actions/get-requestServices.ts";

export default function RequestADemoServices() {
	const [data, setData] = useState<any>([]);
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

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
		<>
			<Navbar />
			<div className="overflow-x-hidden">
				<div
					className="w-full min-h-[150vh] xm:h-auto sm:h-auto flex justify-center items-center bg-white padding-y padding-x rounded-lg z-[999]"
					style={{
						background:
							"linear-gradient(0deg, rgba(106,155,190,1) 0%, rgba(0,73,124,1) 30%, rgba(0,73,124,1) 50%, rgba(0,73,124,1) 70%, rgba(106,155,190,1) 100%)",
					}}>
					<div className="flex items-center text-center xm:text-left sm:text-left flex-col gap-8 justify-center mb-60 lg:mb-60 mt-10 xm:mb-10 sm:mb-10">
						<div className="w-1/2 flex flex-col gap-3 xm:w-full sm:w-full xm:mt-20 sm:mt-20">
							<h1 className="text-white font-Monstrate heading font-black leading-tight capitalize">
								Main Services
							</h1>
							<p className="text-white font-Monstrate paragraph leading-normal">
								Start selection by clicking what your major tv is. Then if you
								have more TVs to hang, or need anything else like a TV mounting
								bracket, or cord concealing, you&apos;ll then be able to add
								those options after you select your main TV option.
							</p>
						</div>
						<div className="w-full flex gap-5 justify-between  sm:flex-col xm:flex-col">
							{data.map((service: any) => (
								<div
									key={service.id}
									className="w-full bg-[#1f1f3d] gap-7 z-50 relative flex flex-col border border-black/5 shadow-xl rounded-lg p-5 justify-between">
									<div className="flex flex-col gap-3">
										<h1 className="text-white font-Monstrate text-[22px] font-black leading-normal capitalize">
											{service.service_title}
										</h1>
										<p className="text-white font-Monstrate text-[16px] leading-normal">
											{service.service_description}
										</p>
									</div>
									<Link
										to={`/book-now/services/${service.id}`}
										className="w-full text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-normal tracking-tight bg-[#F99A03] px-6 py-3 rounded-lg">
										Book
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}
