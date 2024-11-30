"use client";
import axios from "axios";
import Image from "next/image";
import toast from "react-hot-toast";
import { arrowRight } from "@/public";
import { useForm } from "react-hook-form";
import { AnimatedText } from "@/components";
import { useRouter } from "next/navigation";
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
		<div className="w-full py-80 relative padding-x xm:py-10 sm:py-10 md:py-20">
			<div className="w-full h-full flex items-center justify-center">
				<div className="w-full">
					<div className="w-full flex justify-between gap-5 xm:flex-col sm:flex-col">
						<div className="w-1/2 flex flex-col gap-4 xm:w-full sm:w-full">
							<AnimatedText
								className="text-white font-HyperspaceRace heading font-black leading-tight capitalize"
								text="Contact Us For"
							/>
							<div className="w-fit bg-[url('/contactBanner.png')] bg-right bg-no-repeat bg-cover">
								<AnimatedText
									text="More Info"
									className="text-white text-center font-HyperspaceRace heading font-bold leading-tight capitalize -mt-4"
								/>
							</div>
						</div>
						<p className="w-1/2 text-white font-Monstrate text-[20px] leading-tight xm:w-full sm:w-full">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
							repellat provident cupiditate voluptatum vel incidunt odio,
							numquam totam illo reprehenderit ex nostrum fugiat inventore quae
							fuga doloremque tempore veritatis expedita quaerat, eligendi ad
							consequuntur enim.
						</p>
					</div>
					<form
						className="flex flex-col gap-8 mt-20 relative z-50"
						onSubmit={handleSubmit(onSubmits)}>
						<div className="absolute top-40 -z-10 -right-60 lg:right-0 md:-right-1/2 md:w-[350px] md:-top-1/2 h-[400px] blur-[120px] bg-gradient-to-b from-[#007DFE] via-[#2f84da] to-[#007DFE] rounded-full w-[500px] overflow-hidden xm:hidden sm:hidden" />
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
								className="group-hover:rotate-[-45deg] ease-in-out transition-all duration-300"
							/>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
