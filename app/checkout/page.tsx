import { AnimatedText } from "@/components";

export default function Checkout() {
	return (
		<div className="w-full h-screen flex items-center justify-center bg-[url('/bg.png')] bg-center bg-cover bg-no-repeat">
			<AnimatedText
				className="heading text-white font-HyperspaceRace font-bold uppercase"
				text="Stripe Checkout"
			/>
		</div>
	);
}
