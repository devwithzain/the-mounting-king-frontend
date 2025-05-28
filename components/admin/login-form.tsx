"use client";
import Image from "next/image";
import { useState } from "react";
import { formImg } from "@/public";
import { motion } from "framer-motion";
import LoginFormComponent from "./auth/login-form";
import ForgotPasswordForm from "./auth/forgot-password";

export default function LoginForm() {
	const [code, setCode] = useState("");
	const [email, setEmail] = useState("");
	const [showEnterCode, setShowEnterCode] = useState(false);
	const [showForgotPassword, setShowForgotPassword] = useState(false);

	return (
		<>
			<motion.div
				initial={{ y: "115%" }}
				animate={{ y: "0%" }}
				transition={{ duration: 1, ease: "easeInOut" }}
				className="w-[50%] h-[80vh] bg-[#04031b] py-5 rounded-lg">
				<div className="w-full h-full flex justify-between items-center">
					<div className="w-1/2 h-full pointer-events-none pl-5">
						<Image
							src={formImg}
							alt="formImg"
							className="w-full h-full object-cover rounded-lg"
						/>
					</div>
					<div className="w-1/2 flex items-center justify-center">
						{!showForgotPassword ? (
							<LoginFormComponent
								setShowForgotPassword={setShowForgotPassword}
							/>
						) : (
							<ForgotPasswordForm
								setShowForgotPassword={setShowForgotPassword}
								showEnterCode={showEnterCode}
								setShowEnterCode={setShowEnterCode}
								email={email}
								setEmail={setEmail}
								code={code}
								setCode={setCode}
							/>
						)}
					</div>
				</div>
			</motion.div>
		</>
	);
}
