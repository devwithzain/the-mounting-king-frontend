import React from "react";
import { heroCloud } from "../assets/index.ts";

export default function Badal() {
	return (
		<div className="cloud-container xl:h-[550px] lg:h-[500px] md:h-[350px]">
			<div className="cloud-wrapper">
				<img
					src={heroCloud}
					alt="heroCloud"
					className="cloud cloud1"
				/>
				<img
					src={heroCloud}
					alt="heroCloud"
					className="cloud cloud1"
				/>
			</div>
			<div className="cloud-wrapper">
				<img
					src={heroCloud}
					alt="heroCloud"
					className="cloud cloud2"
				/>
				<img
					src={heroCloud}
					alt="heroCloud"
					className="cloud cloud2"
				/>
			</div>
			<div className="cloud-wrapper">
				<img
					src={heroCloud}
					alt="heroCloud"
					className="cloud cloud3"
				/>
				<img
					src={heroCloud}
					alt="heroCloud"
					className="cloud cloud3"
				/>
			</div>
			<div className="cloud-wrapper">
				<img
					src={heroCloud}
					alt="heroCloud"
					className="cloud cloud4"
				/>
				<img
					src={heroCloud}
					alt="heroCloud"
					className="cloud cloud4"
				/>
			</div>
		</div>
	);
}
