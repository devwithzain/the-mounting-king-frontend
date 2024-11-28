import { Footer } from "@/components";
import { ServiceHero, Services } from "@/container";

export default function ServicesPage() {
	return (
		<>
			<div className="w-full h-full bg-[url('/aboutBg.png')] bg-center bg-no-repeat bg-cover overflow-x-hidden">
				<ServiceHero />
				<Services />
				<Footer />
			</div>
		</>
	);
}
