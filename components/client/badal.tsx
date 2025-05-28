import Image from "next/image";
import { heroCloud } from "@/public";

export default function Badal() {
	return (
		<div className="cloud-container xl:h-[550px] lg:h-[500px] md:h-[350px]">
			<div className="cloud-wrapper">
				<Image
					src={heroCloud}
					alt="heroCloud"
					className="cloud cloud1"
				/>
				<Image
					src={heroCloud}
					alt="heroCloud"
					className="cloud cloud1"
				/>
			</div>
			<div className="cloud-wrapper">
				<Image
					src={heroCloud}
					alt="heroCloud"
					className="cloud cloud2"
				/>
				<Image
					src={heroCloud}
					alt="heroCloud"
					className="cloud cloud2"
				/>
			</div>
			<div className="cloud-wrapper">
				<Image
					src={heroCloud}
					alt="heroCloud"
					className="cloud cloud3"
				/>
				<Image
					src={heroCloud}
					alt="heroCloud"
					className="cloud cloud3"
				/>
			</div>
			<div className="cloud-wrapper">
				<Image
					src={heroCloud}
					alt="heroCloud"
					className="cloud cloud4"
				/>
				<Image
					src={heroCloud}
					alt="heroCloud"
					className="cloud cloud4"
				/>
			</div>
		</div>
	);
}
