import React from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { TuserProps } from "../types/index.ts";
import { FaRegUserCircle } from "react-icons/fa";
import { getToken } from "../utils/get-token.ts";
import { MdLogin, MdLogout } from "react-icons/md";
import { getUserData } from "../utils/currentUser.ts";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
	actionIconVariants,
	itemVariants,
	wrapperVariants,
} from "../motion/index.ts";

export default function StaggeredDropDown() {
	const token = getToken();
	const [open, setOpen] = useState(false);
	const [hoverShow, setHoverShow] = useState(false);
	const [user, setUser] = useState<TuserProps>();
	const logOut = () => {
		Cookies.remove("authToken");
		toast.success("Logged out");
	};

	useEffect(() => {
		const fetchUserData = async () => {
			const userData = await getUserData(token);
			setUser(userData);
		};
		fetchUserData();
	});

	return (
		<div className="">
			<motion.div
				animate={open ? "open" : "closed"}
				className="relative">
				<button onClick={() => setOpen((pv) => !pv)}>
					<motion.span>
						<motion.div
							onMouseEnter={() => setHoverShow(true)}
							onMouseLeave={() => setHoverShow(false)}
							initial={{ scale: 1 }}
							animate={{ scale: hoverShow ? 1.1 : 1 }}
							transition={{ duration: 0.2 }}>
							{!hoverShow ? (
								<FaRegUserCircle
									size={45}
									className="text-[#1F1F3D]"
								/>
							) : (
								<FaCircleUser
									size={45}
									className="text-[#F99A03]"
								/>
							)}
						</motion.div>
					</motion.span>
				</button>
				<motion.ul
					initial={wrapperVariants.closed}
					variants={wrapperVariants}
					style={{ originY: "top", translateX: "-50%" }}
					className="flex flex-col p-2 rounded-lg bg-[#F99A03] text-white shadow-xl absolute top-[120%] -left-full w-40 overflow-hidden">
					{user ? (
						<button
							type="button"
							onClick={logOut}>
							<Option
								setOpen={setOpen}
								Icon={MdLogout}
								text="LogOut"
							/>
						</button>
					) : (
						<Link to="/login">
							<Option
								setOpen={setOpen}
								Icon={MdLogin}
								text="LogIn"
							/>
						</Link>
					)}
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
