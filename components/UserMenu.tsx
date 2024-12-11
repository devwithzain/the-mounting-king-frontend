import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { placeholder } from "@/public";
import { MdLogout } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { Dispatch, SetStateAction, useState } from "react";
import { actionIconVariants, itemVariants, wrapperVariants } from "@/motion";

export default function StaggeredDropDown() {
	const [open, setOpen] = useState(false);
	const logOut = () => {
		Cookies.remove("authToken");
		toast.success("Logged out");
	};
	return (
		<div className="">
			<motion.div
				animate={open ? "open" : "closed"}
				className="relative">
				<button onClick={() => setOpen((pv) => !pv)}>
					<motion.span>
						<Image
							src={placeholder}
							alt="user"
							width={50}
							height={50}
						/>
					</motion.span>
				</button>
				<motion.ul
					initial={wrapperVariants.closed}
					variants={wrapperVariants}
					style={{ originY: "top", translateX: "-50%" }}
					className="flex flex-col p-2 rounded-lg bg-[#F99A03] text-white shadow-xl absolute top-[120%] -left-full w-40 overflow-hidden">
					<Link href="/profile">
						<Option
							setOpen={setOpen}
							Icon={IoMdSettings}
							text="Setting"
						/>
					</Link>
					<button
						type="button"
						onClick={logOut}>
						<Option
							setOpen={setOpen}
							Icon={MdLogout}
							text="LogOut"
						/>
					</button>
				</motion.ul>
			</motion.div>
		</div>
	);
}

const Option = ({
	text,
	Icon,
	setOpen,
}: {
	text: string;
	Icon: IconType;
	setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
	return (
		<motion.li
			variants={itemVariants}
			onClick={() => setOpen(false)}
			className="flex items-center gap-2 w-full p-2 text-[17px] font-medium font-Monstrate whitespace-nowrap rounded-md hover:bg-indigo-100 text-white hover:text-indigo-500 transition-colors cursor-pointer">
			<motion.span variants={actionIconVariants}>
				<Icon />
			</motion.span>
			<span>{text}</span>
		</motion.li>
	);
};
