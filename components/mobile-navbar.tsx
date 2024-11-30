"use client";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";
import { navLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { navLogo } from "@/public";

export default function MobileNav() {
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		if (toggle) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [toggle]);

	return (
		<div className="mobileNavbar">
			<div className="mobileNavbar-logo">
				<div>
					<Link href={"/"}>
						<Image
							src={navLogo}
							alt="logo"
							className="logoImg"
						/>
					</Link>
				</div>
			</div>
			<AnimatePresence mode="wait">
				{toggle && (
					<motion.div
						initial={{ y: "-100%" }}
						animate={{ y: 0 }}
						exit={{ y: "-100%" }}
						transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
						className="mobileNavbar-fixed">
						<div className="mobileNavbar-logo">
							<Link href={"/"}>
								<Image
									src={navLogo}
									alt="logo"
									className="logoImg"
								/>
							</Link>
							<IoMdClose
								onClick={() => setToggle(!toggle)}
								className="mobileNavbar-logo-icon"
								size={30}
							/>
						</div>
						<ul className="mobileNavbar-fixed-links">
							{navLinks.map((item) => (
								<Link
									href={item.href}
									key={item.title}
									onClick={() => {
										setToggle(!toggle);
									}}
									className="mobileNavbar-fixed-links-title">
									{item.title}
								</Link>
							))}
							<div className="mobileNavbar-socials">
								<h3 className="mobileNavbar-socials-title">Socials</h3>
								<div className="flex items-center gap-3">
									<h3 className="mobileNavbar-socials-para">Email:</h3>
									<a
										href="mailto:suzy@thebroadcaststore.co"
										className="mobileNavbar-socials-para">
										suzy@thebroadcaststore.co
									</a>
								</div>
								<div className="flex items-center gap-3">
									<h3 className="mobileNavbar-socials-para">Contact:</h3>
									<a
										href="tel:747-609-5599"
										className="mobileNavbar-socials-para">
										747-609-5599
									</a>
								</div>
								<div className="flex flex-col gap-y-2">
									<h1 className="mobileNavbar-socials-title">FOLLOW US ON:</h1>
									<div className="mobileNavbar-socials-icon">
										<SlSocialLinkedin
											size={25}
											className="mobileNavbar-logo-icon"
										/>
										<FaInstagram
											size={25}
											className="mobileNavbar-logo-icon"
										/>
										<SlSocialFacebook
											size={25}
											className="mobileNavbar-logo-icon"
										/>
									</div>
								</div>
							</div>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
