import { Footer } from "@/components";
import { AboutHero, AboutServices } from "@/container";

export default function AboutPage() {
	return (
		<>
			<div className="w-full h-full bg-[url('/aboutBg.png')] bg-center bg-no-repeat bg-cover">
				<AboutHero />
				<AboutServices />
				<Footer />
			</div>
		</>
	);
}
