import { useParams } from "react-router-dom";
import Button from "../../components/button.tsx";
import React, { useEffect, useState } from "react";
import { aboutCrownR } from "../../assets/index.ts";
import getService from "../../actions/get-service.ts";
import Advantage from "../../components/advantage.tsx";
import AnimatedText from "../../components/animated-text.tsx";

export default function ServiceDetailInfo() {
	const { id } = useParams();
	const [service, setService] = useState();

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				if (id) {
					const response = await getService(id);
					setService(response.data);
				} else {
					console.error("Service ID is undefined");
				}
			} catch (err) {
				console.error("Error fetching products:", err);
			}
		};
		fetchProducts();
	}, [id]);

	return (
		<div className="w-full padding-x relative padding-y flex flex-col gap-40 my-80 xm:gap-10 sm:gap-10 xm:my-10 sm:my-10 pt-10">
			<div className="w-full flex justify-between gap-10 relative xm:flex-col sm:flex-col mt-20">
				<div className="w-1/2 xm:w-full sm:w-full">
					<img
						src={`https://themountingking.com/backend/public/${service?.image}`}
						alt="serviceDetail"
						className="w-full object-cover h-full"
					/>
				</div>
				<div className="w-1/2 xm:w-full sm:w-full flex flex-col gap-8 relative z-50">
					<div className="absolute -top-20 -right-60 hidden xl:block">
						<img
							alt="aboutCrownR"
							src={aboutCrownR}
						/>
					</div>
					<div className="relative z-50">
						<h1 className="relative z-50 flex flex-col gap-2">
							<AnimatedText
								text={service?.title}
								className="text-white font-HyperspaceRace heading font-black leading-none flex uppercase overflow-hidden"
							/>
						</h1>
					</div>
					<div className="absolute top-12 -right-[70%] lg:right-0 md:-right-1/2 md:w-[350px] md:-top-1/2 h-[400px] blur-[120px] bg-gradient-to-b from-[#007DFE] via-[#2f84da] to-[#007DFE] rounded-full w-[500px] overflow-hidden md:hidden" />
					<div className="flex flex-col gap-6 relative z-50">
						{service ? (
							<div className="text-white font-Monstrate paragraph leading-loose flex flex-col gap-4">
								<p>{service.short_description}</p>
								<p>{service.description}</p>
							</div>
						) : (
							<div className="text-white font-Monstrate paragraph leading-loose flex flex-col gap-4">
								<p>Loading service details...</p>
							</div>
						)}
						<div className="w-fit flex items-center justify-between bg-[#F99A03] cursor-pointer rounded-lg group">
							<Button
								bgcolor="#212121"
								to="/about"
								title="learn more"
								className="bg-white text-black"
								style={{ color: "#fff" }}
							/>
						</div>
					</div>
				</div>
			</div>
			<Advantage />
		</div>
	);
}
