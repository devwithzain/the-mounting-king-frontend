import axios from "axios";
import toast from "react-hot-toast";
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

	// const deleteAccount = async () => {
	// 	await axios
	// 		.delete(`https://themountingking.com/backend/api/profile/delete`, {
	// 			headers: {
	// 				Authorization: `Bearer ${token}`,
	// 			},
	// 		})
	// 		.then((response) => {
	// 			if (response?.data?.success) {
	// 				toast.success(response.data.success);
	// 			}
	// 			Cookies.remove("authToken");
	// 		})
	// 		.catch((err) => {
	// 			if (err.response) {
	// 				toast.error(err.response.data.error);
	// 			}
	// 		});
	// };

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

	const onSubmits = async (data: TprofileFormData) => {
		await axios
			.put(`https://themountingking.com/backend/api/profile/update`, data, {
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
			<div className="w-full padding-x padding-y">
				<div className="w-full flex flex-col gap-10 pt-28">
					<div>
						<h1 className="text-5xl font-Monstrate font-semibold leading-tight tracking-tight text-black">
							Profile Setting
						</h1>
					</div>
					<div className="w-full">
						<form
							onSubmit={handleSubmit(onSubmits)}
							className="w-full flex flex-col gap-5">
							<div className="w-full flex flex-col gap-5">
								<div className="w-full flex flex-col gap-2">
									<input
										type="text"
										{...register("name")}
										defaultValue={user?.name}
										className={`w-full p-5 rounded-lg bg-white/20 border border-white backdrop-blur-[5px] placeholder:text-white text-black outline-none  focus:border-[#9887c9] focus:border-[1px] focus:outline-none focus:ring-1 ${
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
										className={`w-full p-5 rounded-lg bg-white/20 border border-white backdrop-blur-[5px] placeholder:text-white text-black outline-none  focus:border-[#9887c9] focus:border-[1px] focus:outline-none focus:ring-1 ${
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
								value={`${isSubmitting ? "Loading..." : "Update"}`}
								className="bg-[#6C54B6] rounded-lg p-4 text-[16px] text-white font-normal text-center leading-tight tracking-tight cursor-pointer"
								disabled={isSubmitting}
							/>
						</form>
					</div>
					{/* <button
						type="submit"
						className="w-fit bg-[#6C54B6] rounded-lg p-4 text-[16px] text-white font-normal text-center leading-tight tracking-tight cursor-pointer"
						onClick={deleteAccount}>
						Delete Account
					</button> */}
				</div>
			</div>
		</>
	);
}
