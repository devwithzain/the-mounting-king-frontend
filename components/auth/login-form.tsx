"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { fromImage } from "@/public";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import useLoginModal from "@/hooks/use-login-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import useRegisterModal from "@/hooks/use-register-modal";
import { loginFormSchema, TloginFormData } from "@/schemas";
import { AtSign, Eye, EyeOff, Loader2, Lock, X } from "lucide-react";

export default function LoginForm({ onClose }: { onClose: () => void }) {
	const router = useRouter();

	const loginModal = useLoginModal();
	const registerModal = useRegisterModal();
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
			.post(`https://api.themountingking.com/api/login`, data)
			.then((response) => {
				if (response?.data?.success) {
					if (response.data.user.role == "user") {
						toast.success(response.data.success);
						const { access_token } = response.data;
						Cookies.set("authToken", access_token, { expires: 1 });
						loginModal.onClose();
						router.refresh();
					} else if (response.data.user.role == "admin") {
						toast.success(response.data.success);
						const { access_token } = response.data;
						Cookies.set("adminAuthToken", access_token, { expires: 1 });
						loginModal.onClose();
						router.push("/dashboard");
					}
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
			className="w-[50%] bg-[#04031b] rounded-xl py-5 h-[80vh] relative">
			<div className="absolute top-4 right-4">
				<button
					className="w-fit bg-[#2f1d88] text-white py-2 px-4 text-lg rounded-lg"
					onClick={onClose}>
					<X />
				</button>
			</div>
			<div className="w-full h-full flex justify-between items-center">
				<div className="w-1/2 h-full pointer-events-none pl-5">
					<Image
						src={fromImage}
						alt="fromImage"
						className="w-full h-full object-cover rounded-lg"
					/>
				</div>
				<div className="w-1/2 flex items-center justify-center">
					<div className="w-full px-10 flex justify-center flex-col gap-8">
						<div className="flex flex-col gap-4">
							<h1 className="subHeading text-white font-bold leading-tight tracking-tight montserrat">
								LogIn
							</h1>
							<div className="flex items-center gap-2">
								<p className="text-sm text-[#ADABB8] font-normal leading-tight tracking-tight montserrat">
									Don&apos;t have an account?
								</p>
								<button
									onClick={() => {
										loginModal.onClose();
										registerModal.onOpen();
									}}
									className="text-sm text-[#9887c9] font-normal leading-tight tracking-tight underline montserrat cursor-pointer">
									Create
								</button>
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
												className={`bg-transparent text-white placeholder:text-[#6D6980] focus:outline-none outline-none w-full montserrat`}
											/>
										</div>
										{errors.email && (
											<span className="text-red-500 text-sm montserrat">
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
												className={`bg-transparent text-white placeholder:text-[#6D6980] focus:outline-none outline-none w-full montserrat`}
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
											<span className="text-red-500 text-sm montserrat">
												{errors.password.message}
											</span>
										)}
									</div>
								</div>
							</div>
							<button
								type="submit"
								className="w-full bg-[#2f1d88] rounded-lg p-4 text-[16px] text-white font-normal text-center leading-tight tracking-tight cursor-pointer montserrat"
								disabled={isSubmitting}>
								{isSubmitting ? (
									<Loader2 className="animate-spin mx-auto" />
								) : (
									"Log In"
								)}
							</button>
						</form>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
