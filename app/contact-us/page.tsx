import { Footer } from "@/components";
import { ContactForm, ContactHero } from "@/container";

export default function Contact() {
	return (
		<>
			<div className="w-full h-full bg-[url('/aboutBg.png')] bg-center bg-no-repeat bg-cover">
				<ContactHero />
				<ContactForm />
				<Footer />
			</div>
		</>
	);
}
