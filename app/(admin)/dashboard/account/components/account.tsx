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
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { TUserProfileProps, userProfileSchema } from "@/schemas";
import { getUserData } from "@/lib/current-user";

export default function Account() {
	const router = useRouter();
	const token = getToken("adminAuthToken");
	const [admin, setAdmin] = useState<TuserProps>();

	const form = useForm<TUserProfileProps>({
		resolver: zodResolver(userProfileSchema),
		defaultValues: admin || {
			name: "",
			email: "",
			image: "",
		},
	});

	const {
		formState: { isSubmitting },
	} = form;

	useEffect(() => {
		const fetchUserData = async () => {
			const userData = await getUserData(token);
			form.reset({
				name: userData.name,
				email: userData.email,
				image: userData.image,
			});
			setAdmin(userData);
		};
		fetchUserData();
	}, [form, token]);

	const [image, setImage] = useState<string>("");
	const [imageUrl, setImageUrl] = useState<string>("");
	const [imageError, setImageError] = useState<string>("");
	const [previewImage, setPreviewImage] = useState<string | null>(null);

	useEffect(() => {
		if (admin?.image) {
			const imageUrl = `https://api.themountingking.com/storage/${admin.image}`;
			setImageUrl(imageUrl);
			setPreviewImage(imageUrl);
		}
	}, [admin]);

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
			setPreviewImage(base64);
			setImage(base64);
		};
		reader.readAsDataURL(file);
	};

	const onSubmits = async (data: TUserProfileProps) => {
		try {
			const formData = new FormData();
			Object.keys(data).forEach((key) => {
				if (key !== "image") {
					formData.append(key, data[key as keyof TUserProfileProps]);
				}
			});

			if (image && image.startsWith("data:")) {
				const blob = dataURLtoBlob(image);
				formData.append("image", blob, "profile-image.png");
			}

			await axios.post(
				`https://api.themountingking.com/api/profile/update/${admin?.id}`,
				formData,
				{
					headers: {
						"Authorization": `Bearer ${token}`,
						"Accept": "application/json",
						"Content-Type": "multipart/form-data",
					},
				},
			);
			toast.success("Profile updated");
			router.refresh();
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				console.error(error.response);
				if (error.response.data.messages.email) {
					toast.error(error.response.data.messages.email[0]);
				} else {
					toast.error(error.response.data.messages.error);
				}
			} else {
				console.error(error);
				toast.error("An unexpected error occurred");
			}
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

	return (
		<>
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
					<div className="flex items-center gap-2">
						{(previewImage || imageUrl) && (
							<Image
								src={previewImage || imageUrl}
								alt="Profile"
								className="w-40 h-40 object-cover"
								width={160}
								height={160}
							/>
						)}
					</div>
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
