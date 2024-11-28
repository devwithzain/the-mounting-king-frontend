import { Footer } from "@/components";
import { ServiceDetailHero, ServiceDetailInfo } from "@/container";

export default function ServiceDetailPage() {
	return (
		<>
			<div className="w-full h-full bg-[url('/aboutBg.png')] bg-center bg-no-repeat bg-cover">
				<ServiceDetailHero />
				<ServiceDetailInfo />
				<Footer />
			</div>
		</>
	);
}
