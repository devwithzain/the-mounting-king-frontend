"use client";
import axios from "axios";
import Image from "next/image";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { arrowRight, heroCloud } from "@/public";
import { zodResolver } from "@hookform/resolvers/zod";
import { stepsFormSchema, TstepsFormData } from "@/types";

export default function ContactForm() {
	const router = useRouter();

	const form = useForm<TstepsFormData>({
		resolver: zodResolver(stepsFormSchema),
	});

	const {
		handleSubmit,
		register,
		formState: { isSubmitting, errors },
	} = form;

	const onSubmits = async (data: TstepsFormData) => {
		try {
			const response = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}/contact-us`,
				data,
			);
			if (response.data.success) {
				toast.success(response.data.success);
				router.push("/checkout");
			}
		} catch (err) {
			if (axios.isAxiosError(err) && err.response) {
				toast.error(err.response.data.message);
			} else {
				toast.error("An error occurred");
			}
		}
	};

	return (
		<div className="w-full py-80 relative bg-gradient-to-b from-[#6A9BBE] via-[#00497C] to-[#6A9BBE]">
			<div className="absolute -top-60">
				<Image
					alt="heroCloudImg"
					src={heroCloud}
					className="w-full h-full object-cover rotate-180"
				/>
			</div>
			<div className="w-full h-full flex items-center justify-center">
				<div className="w-full">
					<div className="w-full flex flex-col gap-5 px-40">
						<h1 className="text-white flex-1 font-HyperspaceRace text-[98px] font-black leading-[100px] capitalize">
							Contact Us <br /> For More Info
						</h1>
						<p className="text-white flex-1 font-Monstrate text-[20px] leading-normal">
							It is a long established fact that a reader will be distracted by{" "}
							<br />
							the readable content of a page when looking at its layout.
						</p>
					</div>
					<form
						className="flex flex-col gap-8 mt-20 px-40"
						onSubmit={handleSubmit(onSubmits)}>
						<input
							{...register("name")}
							type="name"
							placeholder="Name"
							className="w-full p-5 rounded-lg bg-white/20 border border-white backdrop-blur-[5px] placeholder:text-white text-white outline-none"
							required
						/>
						{errors.name && (
							<span className="text-red-500 text-sm">
								{errors.name.message?.toString()}
							</span>
						)}
						<input
							{...register("email")}
							type="email"
							placeholder="Email"
							className="w-full p-5 rounded-lg bg-white/20 border border-white backdrop-blur-[5px] placeholder:text-white text-white outline-none"
							required
						/>
						{errors.email && (
							<span className="text-red-500 text-sm">
								{errors.email.message}
							</span>
						)}
						<input
							{...register("phone")}
							type="text"
							placeholder="Phone"
							className="w-full p-5 rounded-lg bg-white/20 border border-white backdrop-blur-[5px] placeholder:text-white text-white outline-none"
							required
						/>
						{errors.phone && (
							<span className="text-red-500 text-sm">
								{errors.phone.message?.toString()}
							</span>
						)}
						<input
							{...register("postcode")}
							type="text"
							placeholder="Post code"
							className="w-full p-5 rounded-lg bg-white/20 border border-white backdrop-blur-[5px] placeholder:text-white text-white outline-none"
							required
						/>
						{errors.postcode && (
							<span className="text-red-500 text-sm">
								{errors.postcode.message?.toString()}
							</span>
						)}
						<input
							{...register("tvsize")}
							type="text"
							placeholder="Tv Size"
							className="w-full p-5 rounded-lg bg-white/20 border border-white backdrop-blur-[5px] placeholder:text-white text-white outline-none"
							required
						/>
						{errors.tvsize && (
							<span className="text-red-500 text-sm">
								{errors.tvsize.message?.toString()}
							</span>
						)}
						<textarea
							{...register("specialRequest")}
							rows={10}
							placeholder="Special Request"
							className="w-full p-5 rounded-lg bg-white/20 border border-white backdrop-blur-[5px] placeholder:text-white text-white outline-none"
						/>
						{errors.specialRequest && (
							<span className="text-red-500 text-sm">
								{errors.specialRequest.message?.toString()}
							</span>
						)}
						<button
							disabled={isSubmitting}
							type="submit"
							className={`w-fit group flex items-center gap-3 text-[#0E0E30] font-Monstrate text-[20px] font-normal leading-tight tracking-tight px-6 py-3 rounded-lg ${
								isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-[#F99A03]"
							}`}>
							<span className="w-fit text-white font-Monstrate text-[20px] font-normal leading-tight tracking-tight">
								{isSubmitting ? "Submitting..." : "Submit"}
							</span>
							<Image
								src={arrowRight}
								alt="arrowRightImg"
								width={30}
								height={30}
								className="group-hover:translate-x-2 ease-in-out transition-all duration-300"
							/>
						</button>
					</form>
				</div>
			</div>
			<div className="flex flex-col gap-5">
				<div className="absolute -bottom-60">
					<Image
						alt="heroCloudImg"
						src={heroCloud}
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
	);
}
