import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { imgOne } from "../assets/index.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { AtSign, Eye, EyeOff, Lock } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { loginFormSchema, TloginFormData } from "../types/index.ts";

export default function LoginForm() {
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from || "/"; // Default to home if no previous location

	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const {
		register,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<TloginFormData>({
		resolver: zodResolver(loginFormSchema),
	});

	const onSubmits = async (data: TloginFormData) => {
		await axios
			.post(`https://themountingking.com/backend/api/login`, data)
			.then((response) => {
				if (response?.data?.success) {
					toast.success(response.data.success);
					const { access_token } = response.data;
					Cookies.set("authToken", access_token, { expires: 1 });

					// Redirect to previous page after login
					navigate(from, { replace: true });
				}
			})
			.catch((err) => {
				if (err.response) {
					toast.error(err.response.data.error);
				}
			});
	};

	return (
		<motion.div
			initial={{ y: "115%" }}
			animate={{ y: "0%" }}
			transition={{ duration: 1, ease: "easeInOut" }}
			className="w-[50%] h-[70vh] bg-[#201F41] rounded-xl">
			<div className="w-full h-full flex justify-between items-center">
				<div className="w-1/2 h-full pointer-events-none">
					<img
						src={imgOne}
						alt="fromImage"
						className="w-full h-full object-cover rounded-l-xl"
					/>
				</div>
				<div className="w-1/2 flex items-center justify-center">
					<div className="w-full px-10 flex justify-center flex-col gap-8">
						<div className="flex flex-col gap-4">
							<h1 className="text-[40px] text-white font-bold leading-tight tracking-tight font-Monstrate">
								LogIn
							</h1>
							<div className="flex items-center gap-2">
								<button className="text-sm text-[#ADABB8] font-normal leading-tight tracking-tight font-Monstrate">
									Don't have an account?
								</button>
								<Link
									to="/register"
									className="text-sm text-[#9887c9] font-normal leading-tight tracking-tight underline font-Monstrate">
									Create
								</Link>
							</div>
						</div>
						<form
							onSubmit={handleSubmit(onSubmits)}
							className="flex flex-col gap-5">
							<div className="flex flex-col gap-2">
								<div className="flex flex-col gap-5">
									<div className="flex flex-col gap-2">
										<div
											className={`w-full flex items-center bg-[#3c375269] rounded-lg p-4 focus-within:border-[#3920BA] focus-within:border-[1px] focus-within:ring-1 ${
												errors.email && "border-red-500 border-[1px]"
											}`}>
											<AtSign className="text-[#6D6980] mr-3" />
											<input
												type="email"
												{...register("email")}
												placeholder="Email"
												className={`bg-transparent text-white placeholder:text-[#6D6980] focus:outline-none outline-none w-full font-Monstrate`}
											/>
										</div>
										{errors.email && (
											<span className="text-red-500 text-sm font-Monstrate">
												{errors.email.message}
											</span>
										)}
									</div>
									<div className="flex flex-col gap-2">
										<div
											className={`w-full flex items-center bg-[#3c375269] rounded-lg p-4 focus-within:border-[#3920BA] focus-within:border-[1px] focus-within:ring-1 ${
												errors.password && "border-red-500 border-[1px]"
											}`}>
											<Lock className="text-[#6D6980] mr-3" />
											<input
												type={showPassword ? "text" : "password"}
												{...register("password")}
												placeholder="Enter your password"
												className={`bg-transparent text-white placeholder:text-[#6D6980] focus:outline-none outline-none w-full font-Monstrate`}
											/>
											<button
												type="button"
												onClick={togglePasswordVisibility}
												className="ml-2">
												{showPassword ? (
													<EyeOff className="text-[#6D6980]" />
												) : (
													<Eye className="text-[#6D6980]" />
												)}
											</button>
										</div>
										{errors.password && (
											<span className="text-red-500 text-sm font-Monstrate">
												{errors.password.message}
											</span>
										)}
									</div>
								</div>
							</div>
							<input
								type="submit"
								value={`${isSubmitting ? "Loading..." : "Log In"}`}
								className="w-full bg-[#3920BA] rounded-lg p-4 text-[16px] text-white font-normal text-center leading-tight tracking-tight cursor-pointer font-Monstrate"
								disabled={isSubmitting}
							/>
						</form>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
