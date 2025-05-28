"use client";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import axios from "axios";
import Image from "next/image";
import toast from "react-hot-toast";
import { TuserProps } from "@/types";
import { useForm } from "react-hook-form";
import { getToken } from "@/lib/get-token";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Heading from "@/components/admin/heading";
import { getUserData } from "@/lib/current-user";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import AlertModal from "@/components/admin/alert-modal";
import { userProfileSchema, TUserProfileProps } from "@/schemas";

export default function Account() {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const token = getToken("adminAuthToken");
	const [image, setImage] = useState<string>("");
	const [imageError, setImageError] = useState<string>("");
	const [user, setUser] = useState<TuserProps | null>(null);

	const form = useForm<TUserProfileProps>({
		resolver: zodResolver(userProfileSchema),
		defaultValues: {
			name: "",
			email: "",
			image: "",
		},
	});

	const {
		formState: { isSubmitting },
		reset,
	} = form;

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				if (token) {
					const userData = await getUserData(token);
					setUser(userData);
					reset(userData);
				}
			} catch (err) {
				console.error("Error fetching user data:", err);
			}
		};
		fetchUserData();
	}, [token, reset]);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setImageError("");
		const file = e.target.files?.[0];

		if (!file) return;

		const allowedTypes = [
			"image/jpeg",
			"image/png",
			"image/jpg",
			"image/gif",
			"image/svg+xml",
		];

		if (!file.type.startsWith("image/")) {
			setImageError("File must be an image");
			return;
		}

		if (!allowedTypes.includes(file.type)) {
			setImageError("Only jpeg, png, jpg, gif, svg images are allowed");
			return;
		}

		const reader = new FileReader();
		reader.onload = () => {
			const base64 = reader.result as string;
			setImage(base64);
		};
		reader.readAsDataURL(file);
	};

	const initialData = user;
	const toastMessage = initialData && "Profile updated.";

	const onSubmits = async (data: TUserProfileProps) => {
		try {
			const formData = new FormData();
			Object.keys(data).forEach((key) => {
				if (key !== "image") {
					formData.append(key, data[key as keyof TUserProfileProps]);
				}
			});

			if (image) {
				const blob = dataURLtoBlob(image);
				formData.append("image", blob, "profile-image.png");
			}

			await axios.post(
				`https://themountingking.com/backend/api/profile/update/${user?.id}`,
				formData,
				{
					headers: {
						"Authorization": `Bearer ${token}`,
						"Accept": "application/json",
						"Content-Type": "multipart/form-data",
					},
				},
			);
			toast.success(toastMessage);
		} catch (error) {
			console.error(error);
			toast.error("Something went wrong");
		}
	};

	const dataURLtoBlob = (dataURL: string): Blob => {
		const byteString = atob(dataURL.split(",")[1]);
		const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
		const ab = new ArrayBuffer(byteString.length);
		const ia = new Uint8Array(ab);
		for (let i = 0; i < byteString.length; i++) {
			ia[i] = byteString.charCodeAt(i);
		}
		return new Blob([ab], { type: mimeString });
	};

	const onDelete = async () => {
		try {
			await axios.delete(
				`https://themountingking.com/backend/api/user/${user?.id}`,
			);
			router.push(`/dashboard/profile`);
			router.refresh();
			toast.success("Profile deleted");
		} catch (error) {
			console.error(error);
			toast.error("Something went wrong");
		} finally {
			setOpen(false);
		}
	};

	return (
		<>
			<AlertModal
				isOpen={open}
				loading={isSubmitting}
				onClose={() => setOpen(false)}
				onConfirm={onDelete}
			/>
			<div className="flex items-center justify-between px-5 py-2">
				<Heading
					title="Settings"
					description="Edit your details!"
				/>
			</div>
			<Separator />
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmits)}
					className="space-y-4 w-full p-5">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input
										placeholder="Name"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										placeholder="Email"
										type="email"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="image"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>Profile Image</FormLabel>
								<FormControl>
									<Input
										placeholder="Profile Image"
										type="file"
										accept="image/jpeg,image/png,image/jpg,image/gif,image/svg+xml"
										onChange={(e) => {
											handleFileChange(e);
											field.onChange(e.target.files);
										}}
									/>
								</FormControl>
								{imageError && (
									<p className="text-red-500 text-sm">{imageError}</p>
								)}
								<FormMessage />
							</FormItem>
						)}
					/>
					{image && (
						<Image
							src={image}
							alt="Profile Preview"
							style={{ objectFit: "cover", width: "100px", height: "100px" }}
							width={100}
							height={100}
						/>
					)}
					<Button
						disabled={isSubmitting}
						type="submit">
						Save changes
					</Button>
				</form>
			</Form>
		</>
	);
}
