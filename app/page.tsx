import { HomeFooter } from "@/components";
import { HomeHero, HomeServices } from "@/container";
import AboutServices from "@/container/home/about";

export default function App() {
	return (
		<div className="w-full h-full bg-[url('/bg.png')] bg-center bg-no-repeat bg-cover">
			<HomeHero />
			<AboutServices />
			<HomeServices />
			<HomeFooter />
		</div>
	);
}
