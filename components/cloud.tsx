import Image from "next/image";
import { heroCloud } from "@/public";

export default function Cloud() {
	return (
		<div className="w-full relative h-[50vh] hidden xl:block overflow-hidden">
			<Image
				alt="heroCloudImg"
				src={heroCloud}
				className="w-full h-full object-cover absolute left-0 top-0"
			/>
			<Image
				alt="heroCloudImg"
				src={heroCloud}
				className="w-full h-full object-cover absolute right-0 bottom-0 rotate-180"
			/>
		</div>
	);
}
