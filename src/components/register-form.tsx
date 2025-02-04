import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { imgOne } from "../assets/index.ts";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema, TregisterFormData } from "../types/index.ts";

export default function RegisterForm() {
	const navigate = useNavigate();
	const {
		register,
		reset,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<TregisterFormData>({
		resolver: zodResolver(registerFormSchema),
	});

	const onSubmits = async (data: TregisterFormData) => {
		await axios
			.post(`https://themountingking.com/backend/api/register`, data)
			.then((response) => {
				if (response?.data?.success) {
					toast.success(response.data.success);
					const { access_token } = response.data;
					Cookies.set("authToken", access_token, { expires: 1 });
					navigate("/");
				}
			})
			.catch((err) => {
				if (err.response) {
					toast.error(err.response.data.message);
					reset();
				}
			});
	};

	return (
		<motion.div
			initial={{ y: "115%" }}
			animate={{ y: "0%" }}
			transition={{ duration: 1, ease: "easeInOut" }}
			className="w-[70%] bg-[#2A273A] py-5 rounded-lg">
			<div className="w-full flex justify-between items-center">
				<div className="w-1/2 pointer-events-none pl-5">
					<img
						src={imgOne}
						alt="imgOne"
						className="w-full object-cover rounded-lg"
					/>
				</div>
				<div className="w-1/2 flex items-center justify-center">
					<div className="w-full px-10 flex justify-center flex-col gap-8">
						<div className="flex flex-col gap-4">
							<h1 className="text-[40px] text-white font-medium leading-tight tracking-tight">
								Create an account
							</h1>
							<div className="flex items-center gap-2">
								<button className="text-sm text-[#ADABB8] font-normal leading-tight tracking-tight">
									Already have an account?
								</button>
								<Link
									to="/login"
									className="text-sm text-[#9887c9] font-normal leading-tight tracking-tight underline">
									LogIn
								</Link>
							</div>
						</div>
						<form
							onSubmit={handleSubmit(onSubmits)}
							className="flex flex-col gap-5">
							<div className="w-full flex items-center justify-between gap-5">
								<div className="w-full flex flex-col gap-2">
									<input
										type="text"
										{...register("name")}
										placeholder="Name"
										className={`w-full bg-[#3A364D] text-white placeholder:text-[#6D6980] rounded-lg p-4 focus:border-[#9887c9] focus:border-[1px] focus:outline-none focus:ring-1 outline-none ${
											errors.name && "border-red-500 border-[1px]"
										}`}
									/>
									{errors.name && (
										<span className="text-red-500 text-sm">
											{errors.name.message}
										</span>
									)}
								</div>
							</div>
							<div className="flex flex-col gap-5">
								<div className="flex flex-col gap-2">
									<input
										type="email"
										{...register("email")}
										placeholder="Email"
										className={`bg-[#3A364D] text-white placeholder:text-[#6D6980] rounded-lg p-4 focus:border-[#9887c9] focus:border-[1px] focus:outline-none focus:ring-1 outline-none ${
											errors.email && "border-red-500 border-[1px]"
										}`}
									/>
									{errors.email && (
										<span className="text-red-500 text-sm">
											{errors.email.message}
										</span>
									)}
								</div>
								<div className="flex flex-col gap-2">
									<input
										type="password"
										{...register("password")}
										placeholder="Enter your password"
										className={`bg-[#3A364D] text-white placeholder:text-[#6D6980] rounded-lg p-4 focus:border-[#9887c9] focus:border-[1px] focus:outline-none focus:ring-1 outline-none ${
											errors.password && "border-red-500 border-[1px]"
										}`}
									/>
									{errors.password && (
										<span className="text-red-500 text-sm">
											{errors.password.message}
										</span>
									)}
								</div>
							</div>
							<div className="flex items-center gap-2">
								<input
									type="checkbox"
									className="w-5 h-5 outline-none border-none"
								/>
								<p className="text-sm text-[#ADABB8] font-normal leading-tight tracking-tight">
									I agree to the
								</p>
								<Link
									className="text-sm text-[#9887c9] font-normal leading-tight tracking-tight underline"
									to="/">
									Terms & Conditions
								</Link>
							</div>
							<input
								type="submit"
								value={`${isSubmitting ? "Loading..." : "Create account"}`}
								className="w-full bg-[#6C54B6] rounded-lg p-4 text-[16px] text-white font-normal text-center leading-tight tracking-tight cursor-pointer"
								disabled={isSubmitting}
							/>
						</form>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
