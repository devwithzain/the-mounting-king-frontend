"use client";
import Cookies from "js-cookie";
import Image from "next/image.js";
import toast from "react-hot-toast";
import { TuserProps } from "@/types";
import { placeholder } from "@/public";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { getToken } from "@/lib/get-token";
import { getUserData } from "@/lib/current-user";
import { MdLogin, MdLogout } from "react-icons/md";
import useLoginModal from "@/hooks/use-login-modal";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { actionIconVariants, iconVariants, wrapperVariants } from "@/motion";

export default function UserMenu() {
	const token = getToken("authToken");
	const loginModal = useLoginModal();
	const [open, setOpen] = useState(false);
	const [user, setUser] = useState<TuserProps>();

	const logOut = () => {
		Cookies.remove("authToken");
		toast.success("Logged out");
		setOpen(false);
	};

	useEffect(() => {
		const fetchUserData = async () => {
			if (token) {
				try {
					const userData = await getUserData(token);
					setUser(userData);
				} catch (error) {
					console.error("Error fetching user data:", error);
					setUser(undefined);
				}
			}
		};
		fetchUserData();
	}, [token]);

	return (
		<div>
			<motion.div
				animate={open ? "open" : "closed"}
				className="relative">
				<button onClick={() => setOpen((pv) => !pv)}>
					<motion.span>
						<Image
							src={
								(user &&
									user.image &&
									`https://api.themountingking.com/storage/${user.image}`) ||
								placeholder
							}
							alt="user"
							width={40}
							height={40}
							className="rounded-full"
						/>
					</motion.span>
				</button>
				<motion.ul
					initial={closed}
					variants={wrapperVariants}
					style={{ originY: "top", translateX: "-50%" }}
					className="flex flex-col p-2 rounded-lg bg-[#F99A03] text-white shadow-xl absolute top-[120%] -left-full w-40 overflow-hidden">
					{user ? (
						<>
							<button
								type="button"
								onClick={logOut}>
								<Option
									setOpen={setOpen}
									Icon={MdLogout}
									text="Log Out"
								/>
							</button>
						</>
					) : (
						<button
							type="button"
							onClick={() => {
								setOpen(false);
								loginModal.onOpen();
							}}>
							<Option
								setOpen={setOpen}
								Icon={MdLogin}
								text="LogIn"
							/>
						</button>
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
			variants={iconVariants}
			onClick={() => setOpen(false)}
			className="flex items-center gap-2 w-full p-2 text-[17px] font-medium montserrat whitespace-nowrap rounded-md hover:bg-indigo-100 text-white hover:text-indigo-500 transition-colors cursor-pointer">
			<motion.span variants={actionIconVariants}>
				<Icon />
			</motion.span>
			<span>{text}</span>
		</motion.li>
	);
};
