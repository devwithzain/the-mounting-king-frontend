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
import { Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import getProduct from "@/actions/get-product";
import { Button } from "@/components/ui/button";
import Heading from "@/components/admin/heading";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import AlertModal from "@/components/admin/alert-modal";
import { productsColumnSchema, TproductsColumnProps } from "@/schemas";

export default function ProductForm({
	slug,
}: {
	slug: { id: string; new: string };
}) {
	const productId = slug.id;
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const [image, setImage] = useState<string[]>([]);
	const [imageError, setImageError] = useState<string>("");
	const [products, setProducts] = useState<TproductsColumnProps | null>(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				if (productId) {
					const response = await getProduct(productId);
					setProducts(response.data);
				}
			} catch (err) {
				console.error("Error fetching products:", err);
			}
		};
		fetchProducts();
	}, [productId]);

	const formatedProduct = products
		? {
				title: products.title,
				price: products.price,
				color: products.color,
				size: products.size,
				description: products.description,
				category: products.category,
				shortDescription: products.shortDescription,
		  }
		: null;

	const form = useForm<TproductsColumnProps>({
		resolver: zodResolver(productsColumnSchema),
		defaultValues: formatedProduct || {
			size: "",
			price: "",
			color: "",
			title: "",
			image: "",
			category: "",
			description: "",
			shortDescription: "",
		},
	});

	useEffect(() => {
		if (products) {
			form.reset({
				title: products.title,
				price: products.price,
				color: products.color,
				size: products.size,
				description: products.description,
				category: products.category,
				shortDescription: products.shortDescription,
				image: products.image || [],
			});
		}
	}, [form, products, form.reset]);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setImageError("");
		const files = Array.from(e.target.files || []);
		const allowedTypes = [
			"image/jpeg",
			"image/png",
			"image/jpg",
			"image/gif",
			"image/svg+xml",
		];

		for (const file of files) {
			if (!file.type.startsWith("image/")) {
				setImageError("Each file must be an image");
				return;
			}

			if (!allowedTypes.includes(file.type)) {
				setImageError("Only jpeg, png, jpg, gif, svg image are allowed");
				return;
			}
		}

		files.forEach((file) => {
			const reader = new FileReader();
			reader.onload = () => {
				const base64 = reader.result as string;
				setImage((prevImage) => [...prevImage, base64]);
			};
			reader.readAsDataURL(file);
		});
	};

	const {
		formState: { isSubmitting },
	} = form;

	const initialData = formatedProduct;
	const action = initialData ? "Save changes" : "Create";
	const title = initialData ? "Edit product" : "Create product";
	const description = initialData ? "Edit product" : "Add a new product";
	const toastMessage = initialData ? "Product updated." : "Product created.";

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

	const onSubmits = async (data: TproductsColumnProps) => {
		if (image.length === 0) {
			setImageError("At least one image is required");
			return;
		}

		const formData = new FormData();
		formData.append("title", data.title);
		formData.append("shortDescription", data.shortDescription);
		formData.append("description", data.description);
		formData.append("category", data.category);
		formData.append("price", data.price);
		formData.append("color", data.color);
		formData.append("size", data.size);

		image.forEach((image, index) => {
			const blob = dataURLtoBlob(image);
			formData.append(`image[${index}]`, blob, `image-${index}.png`);
		});

		try {
			if (initialData) {
				await axios.post(
					`https://themountingking.com/backend/api/product/${productId}`,
					formData,
					{
						headers: { "Content-Type": "multipart/form-data" },
					},
				);
			} else {
				await axios.post(
					`https://themountingking.com/backend/api/product`,
					formData,
					{
						headers: { "Content-Type": "multipart/form-data" },
					},
				);
			}
			toast.success(toastMessage);
			router.push(`/dashboard/products`);
		} catch (error) {
			console.error(error);
			toast.error("Something went wrong");
		}
	};

	const onDelete = async () => {
		try {
			await axios.delete(
				`https://themountingking.com/backend/api/product/${productId}`,
			);
			toast.success("Service deleted");
			router.push(`/dashboard/products`);
			router.refresh();
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
					title={title}
					description={description}
				/>
				{initialData && (
					<Button
						disabled={isSubmitting}
						variant="destructive"
						size="sm"
						onClick={() => setOpen(true)}>
						<Trash className="h-4 w-4" />
					</Button>
				)}
			</div>
			<Separator />
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmits)}
					className="space-y-4 w-full p-5">
					<FormField
						control={form.control}
						name="title"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Title</FormLabel>
								<FormControl>
									<Input
										placeholder="Title"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="shortDescription"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Short Description</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Short Description"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="description"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Description</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Description"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="w-full flex items-center justify-between gap-2">
						<FormField
							control={form.control}
							name="category"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Category</FormLabel>
									<FormControl>
										<Input
											placeholder="Category"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="price"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Price</FormLabel>
									<FormControl>
										<Input
											placeholder="Price"
											type="number"
											min="0"
											step="0.01"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="size"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Size</FormLabel>
									<FormControl>
										<Input
											placeholder="Size"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="color"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Color</FormLabel>
									<FormControl>
										<Input
											placeholder="Color"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name="image"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>Image</FormLabel>
								<FormControl>
									<Input
										placeholder="Image"
										type="file"
										multiple
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
					{image.map((image, index) => (
						<Image
							key={index}
							src={image}
							alt={`Preview ${index}`}
							style={{ objectFit: "cover" }}
							width={250}
							height={250}
						/>
					))}
					<Button
						disabled={isSubmitting}
						type="submit">
						{action}
					</Button>
				</form>
			</Form>
		</>
	);
}
