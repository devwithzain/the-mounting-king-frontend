import Image from "next/image";
import { LogoMarquee } from "@/components";
import {
	aboutFive,
	aboutFour,
	aboutOne,
	aboutSeven,
	aboutSix,
	aboutThree,
	aboutTwo,
	coverLogo,
} from "@/public";

export default function LogoTicker() {
	return (
		<div className="w-full flex">
			<LogoMarquee baseVelocity={1}>
				{[aboutTwo, aboutFour, aboutSix].map((item, index) => (
					<div
						key={index}
						className="overflow-hidden group">
						<div className="relative">
							{index === 1 && (
								<Image
									src={coverLogo}
									alt="sda"
									width={250}
									height={250}
									className="w-full object-cover absolute top-0 left-0 z-50"
								/>
							)}
							<Image
								src={item}
								alt="sda"
								width={250}
								height={250}
								className="w-full object-cover group-hover:opacity-0 transition-all duration-200 ease-in-out"
							/>
							<Image
								src={coverLogo}
								alt="sda"
								width={250}
								height={250}
								className="w-full object-cover absolute top-0 left-0 z-50 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out"
							/>
						</div>
					</div>
				))}
			</LogoMarquee>
			<LogoMarquee baseVelocity={-1}>
				{[aboutOne, aboutThree, aboutFive, aboutSeven].map((item, index) => (
					<div
						key={index}
						className="overflow-hidden group">
						<div className="relative">
							<Image
								src={item}
								alt="sda"
								width={250}
								height={250}
								className={`w-full object-cover ${
									index === 0 || (index === 4 && "group-hover:opacity-0")
								} transition-all duration-200 ease-in-out`}
							/>
							{(index === 1 || index === 2) && (
								<Image
									src={coverLogo}
									alt="sda"
									width={250}
									height={250}
									className="w-full object-cover absolute top-0 left-0 z-50 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out"
								/>
							)}
						</div>
					</div>
				))}
			</LogoMarquee>
		</div>
	);
}
