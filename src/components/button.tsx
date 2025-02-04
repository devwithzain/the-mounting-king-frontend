import React from "react";
import Rounded from "./rounded.tsx";
import { Link } from "react-router-dom";
import { arrowRight } from "../assets/index.ts";

export default function Button({
	to,
	title,
	bgcolor,
	style,
}: {
	to: string;
	title: string;
	className?: string;
	bgcolor: string;
	style: React.StyleHTMLAttributes<HTMLDivElement>["style"];
}) {
	return (
		<Link
			className="w-fit text-lg uppercase font-normal font-Monstrate"
			to={to || ""}>
			<Rounded
				className="py-[6px]"
				backgroundColor={bgcolor}>
				<p
					className="z-10 px-[10px] ml-[15px] py-[6px]"
					style={style}>
					{title}
				</p>
				<div className={`p-[10px]`}>
					<img
						src={arrowRight}
						className="group-hover:rotate-[-45deg] w-8 h-8 font-bold transition-all duration-200 ease-linear text-white z-[999] relative"
						alt="arrowRightImg"
					/>
				</div>
			</Rounded>
		</Link>
	);
}
