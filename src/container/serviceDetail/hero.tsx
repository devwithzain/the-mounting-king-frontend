import { useParams } from "react-router-dom";
import Badal from "../../components/badal.tsx";
import React, { useEffect, useState } from "react";
import getService from "../../actions/get-service.ts";
import AnimatedText from "../../components/animated-text.tsx";

export default function Hero() {
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
		<div className="w-full h-[70vh] flex items-center relative justify-center xm:h-[50vh] sm:h-[50vh]">
			<div className="absolute -right-24 top-28 h-[500px] blur-[150px] bg-gradient-to-b from-[#007DFE] via-[#c092df] to-[#007DFE] rounded-full w-[500px] overflow-hidden" />
			<div className="w-full flex padding-x gap-5 relative z-50 items-center justify-center text-center">
				<AnimatedText
					className="text-[#1F1F3D] text-center font-HyperspaceRace heading font-black leading-tight uppercase"
					text={service?.title}
				/>
			</div>
			<div className="absolute w-full -bottom-80 md:-bottom-32 z-50 xm:hidden sm:hidden">
				<Badal />
			</div>
		</div>
	);
}
