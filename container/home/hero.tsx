import Link from "next/link";
import Image from "next/image";
import { RoundButton } from "@/components/client";
import { AnimatedText, TextMask } from "@/components/client";
import { banner, bannerRes, btn01, btn02 } from "@/public";

export default function HomeHero() {
	return (
		<>
			<div className="w-full relative">
				<Image
					src={banner}
					alt="banner"
					className="w-full object-cover block sm:hidden xm:hidden"
				/>
				<Image
					src={bannerRes}
					alt="bannerRes"
					className="w-full object-cover hidden xm:block sm:block"
				/>
				<div className="w-full flex items-center justify-center gap-4 absolute bottom-32 lg:bottom-24 md:bottom-[15%] xm:bottom-32 sm:bottom-32">
					<div className="flex xm:flex-col sm:flex-col gap-5 items-center justify-center">
						<Link href="/book-now">
							<Image
								src={btn01}
								alt="bannerRes"
								className="w-[700px] object-cover lg:w-[450px] md:w-[320px] xm:w-[250px] sm:w-[250px]"
							/>
						</Link>
						<Link href="tel:+1-240-413-8759">
							<Image
								src={btn02}
								alt="btn02"
								className="w-[600px] object-cover lg:w-[390px] md:w-[280px] xm:w-[250px] sm:w-[250px]"
							/>
						</Link>
					</div>
				</div>
			</div>
			<div className="w-full padding-x padding-y relative z-[999]">
				<div className="flex flex-col gap-5">
					<div className="w-full flex xm:hidden sm:hidden items-center justify-center flex-col gap-4">
						<AnimatedText
							className="text-black font-HyperspaceRace heading font-bold text-center leading-tight flex capitalize overflow-hidden"
							text="We mount tvs of all sizes"
						/>
						<AnimatedText
							className="text-black font-HyperspaceRace heading font-bold text-center leading-tight flex capitalize overflow-hidden"
							text="with precision and care"
						/>
					</div>
					<div className="w-full items-center justify-center flex-col gap-4 hidden xm:flex sm:flex">
						<AnimatedText
							className="text-black font-HyperspaceRace heading font-bold text-center leading-tight flex capitalize overflow-hidden"
							text="We mount tvs of all sizes with precision and care"
						/>
					</div>
					<h1 className="text-[#000] mb-5 font-Monstrate subHeading text-center font-medium leading-normal xm:text-left sm:text-left">
						<TextMask>
							{[
								"The Mounting King provides seamless and precise TV mounting services for the best results. The technicians at our company expertly handle all TV sizes and surfaces while delivering secure and neat television setups without causing any problems. No mess, no delays. You can count on us to mount your TV perfectly the first time.",
							]}
						</TextMask>
					</h1>
					<div className="flex items-center gap-5 justify-center w-full xm:flex-col sm:flex-col">
						<div className="w-fit flex items-center justify-between bg-[#F99A03] cursor-pointer rounded-lg group">
							<RoundButton
								bgcolor="#212121"
								href="/book-now"
								title="Book Appointment"
								className="bg-white text-black"
								style={{ color: "#fff" }}
							/>
						</div>
						<div className="w-fit flex items-center justify-between bg-[#F99A03] cursor-pointer rounded-lg group">
							<RoundButton
								bgcolor="#212121"
								href="/contact-us"
								title="click to contact us"
								className="bg-white text-black"
								style={{ color: "#fff" }}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
