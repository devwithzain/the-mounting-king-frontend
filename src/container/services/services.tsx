import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Advantage from "../../components/advantage.tsx";
import getServices from "../../actions/get-services.ts";
import AnimatedText from "../../components/animated-text.tsx";
import { arrowRight, aboutCrownL } from "../../assets/index.ts";

export default function Services() {
	const [services, setServices] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await getServices();
				setServices(response.data);
			} catch (err) {
				console.error("Error fetching products:", err);
			}
		};
		fetchProducts();
	}, []);
	return (
		<div className="w-full py-60 relative sm:py-10 xm:py-10 md:py-20">
			<div className="w-full padding-x padding-y">
				<Advantage />
				<div className="w-full flex flex-col gap-20 my-20 relative sm:gap-10 xm:gap-10 xm:my-7 sm:my-7">
					<div>
						<AnimatedText
							className="text-white text-center font-HyperspaceRace heading font-black leading-tight capitalize"
							text="All Services"
						/>
					</div>
					<div className="absolute -top-32 -left-10 sm:hidden md:hidden xm:hidden">
						<img
							alt="aboutCrownL"
							src={aboutCrownL}
							width={350}
							height={350}
						/>
					</div>
					<div className="w-full flex items-center justify-center flex-col gap-20">
						<div className="w-full grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 gap-6">
							{services.map((item) => (
								<div
									key={item.id}
									className="flex flex-col gap-10 justify-between p-10 btns sm:p-5 md:p-5 xm:p-5 sm:gap-5 xm:gap-5">
									<h1 className="text-white text-[35px] xm:text-[25px] sm:text-[25px] md:text-[30px] font-semibold leading-tight capitalize">
										{item.title}
									</h1>
									<h1 className="text-white font-Monstrate text-[18px] leading-normal capitalize">
										{item.short_description}
									</h1>
									<Link
										to={`/services/service-detail/${item.id}`}
										className="w-fit group transition-all duration-500 ease-in-out cursor-pointer">
										<div className="px-4 py-6 group-hover:bg-[#F99A03] rounded-full bg-white/10 flex items-center justify-center gap-4 transition-all duration-500 ease-in-out">
											<img
												src={arrowRight}
												alt="arrowRightImg"
												width={35}
												height={35}
												className="text-white group-hover:rotate-[-45deg] transition-all duration-500 ease-in-out"
											/>
											<h4 className="w-fit hidden group-hover:block origin-left transition-all duration-500 ease-in-out text-white text-[16px] font-bold leading-tight uppercase font-Monstrate">
												book now
											</h4>
										</div>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
