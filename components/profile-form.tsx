"use client";
import axios from "axios";
import Image from "next/image";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { placeholder } from "@/public";
import { TuserProps } from "@/types";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getToken } from "@/utils/get-token";
import { getUserData } from "@/utils/currentUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileFormSchema, TprofileFormData } from "@/types";

export default function ProfileForm() {
	const token = getToken();
	const router = useRouter();
	const [imagePreview, setImagePreview] = useState<string | null>(null);
	const [user, setUser] = useState<TuserProps>();
	useEffect(() => {
		const fetchUserData = async () => {
			const userData = await getUserData(token);
			setUser(userData);
			if (!userData) {
				router.push("/login");
			}
		};
		fetchUserData();
	});

	const deleteAccount = async () => {
		await axios
			.delete(`${process.env.NEXT_PUBLIC_API_URL}/profile/delete`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				if (response?.data?.success) {
					toast.success(response.data.success);
				}
				Cookies.remove("authToken");
			})
			.catch((err) => {
				if (err.response) {
					toast.error(err.response.data.error);
				}
			});
	};

	const {
		register,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<TprofileFormData>({
		resolver: zodResolver(profileFormSchema),
		defaultValues: {
			name: user?.name,
			email: user?.email,
		},
	});

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const previewUrl = URL.createObjectURL(file);
			setImagePreview(previewUrl);
		}
	};

	const onSubmits = async (data: TprofileFormData) => {
		await axios
			.patch(`${process.env.NEXT_PUBLIC_API_URL}/profile/update`, data, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				if (response?.data?.success) {
					toast.success(response.data.success);
				}
			})
			.catch((err) => {
				if (err.response) {
					toast.error(err.response.data.error);
				}
			});
	};

	return (
		<>
			<div className="w-full">
				<div className="w-full flex flex-col gap-10 mt-24 p-10">
					<div>
						<h1 className="text-2xl font-semibold leading-tight tracking-tight text-black">
							Profile
						</h1>
					</div>
					<div className="w-full flex justify-between gap-5">
						<form
							onSubmit={handleSubmit(onSubmits)}
							className="flex flex-col gap-5">
							<div className="flex flex-col gap-5">
								<div className="flex flex-col gap-2">
									<input
										type="text"
										{...register("name")}
										defaultValue={user?.name}
										className={`w-fit bg-[#3A364D] text-white placeholder:text-[#6D6980] rounded-lg p-4 focus:border-[#9887c9] focus:border-[1px] focus:outline-none focus:ring-1 outline-none ${
											errors.name && "border-red-500 border-[1px]"
										}`}
									/>
									{errors.name && (
										<span className="text-red-500 text-sm">
											{errors.name.message}
										</span>
									)}
								</div>
								<div className="flex flex-col gap-2">
									<input
										type="email"
										{...register("email")}
										defaultValue={user?.email}
										className={`w-fit bg-[#3A364D] text-white placeholder:text-[#6D6980] rounded-lg p-4 focus:border-[#9887c9] focus:border-[1px] focus:outline-none focus:ring-1 outline-none ${
											errors.email && "border-red-500 border-[1px]"
										}`}
									/>
									{errors.email && (
										<span className="text-red-500 text-sm">
											{errors.email.message}
										</span>
									)}
								</div>
							</div>
							<input
								type="submit"
								value={`${isSubmitting ? "Loading..." : "Save"}`}
								className="w-fit bg-[#6C54B6] rounded-lg p-4 text-[16px] text-white font-normal text-center leading-tight tracking-tight cursor-pointer"
								disabled={isSubmitting}
							/>
						</form>
						<div className="flex flex-col items-center">
							<label
								htmlFor="fileInput"
								className="cursor-pointer">
								<div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
									<Image
										src={imagePreview || placeholder}
										alt="Avatar"
										className="w-full h-full object-cover"
										width={100}
										height={100}
									/>
								</div>
							</label>
							<input
								id="fileInput"
								type="file"
								onChange={handleImageChange}
								accept="image/*"
								className="hidden"
							/>
						</div>
					</div>
					<button
						type="submit"
						className="w-fit bg-[#6C54B6] rounded-lg p-4 text-[16px] text-white font-normal text-center leading-tight tracking-tight cursor-pointer"
						onClick={deleteAccount}>
						Delete Account
					</button>
				</div>
			</div>
		</>
	);
}
