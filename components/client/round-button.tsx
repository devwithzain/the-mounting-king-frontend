import Link from "next/link";
import Image from "next/image";
import { arrowRight } from "@/public";
import { Rounded } from "@/components/client";

export default function RoundButton({
	href,
	title,
	bgcolor,
	style,
}: {
	href: string;
	title: string;
	className?: string;
	bgcolor: string;
	style: React.StyleHTMLAttributes<HTMLDivElement>["style"];
}) {
	return (
		<Link
			className="w-fit text-lg uppercase font-normal font-Monstrate"
			href={href || ""}>
			<Rounded
				className="py-[6px]"
				backgroundColor={bgcolor}>
				<p
					className="z-10 px-[10px] ml-[15px] py-[6px]"
					style={style}>
					{title}
				</p>
				<div className={`p-[10px]`}>
					<Image
						src={arrowRight}
						className="group-hover:rotate-[-45deg] w-8 h-8 font-bold transition-all duration-200 ease-linear text-white z-[999] relative"
						alt="arrowRightImg"
					/>
				</div>
			</Rounded>
		</Link>
	);
}
