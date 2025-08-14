"use client";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import AlertModal from "@/components/admin/alert-modal";
import { TRequestServicesColumnProps } from "@/types";
import { Edit, MoreHorizontal, Trash } from "lucide-react";

export default function CellAction({
	data,
}: {
	data: TRequestServicesColumnProps;
}) {
	const router = useRouter();
	const [open, setOpen] = useState(false);

	const onDelete = async () => {
		try {
			await axios.delete(
				`https://themountingking.com/backend/api/requestService/${data.id}`,
			);
			toast.success("Content deleted.");
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
				onClose={() => setOpen(false)}
				onConfirm={onDelete}
			/>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="ghost"
						className="h-8 w-8 p-0">
						<span className="sr-only">Open menu</span>
						<MoreHorizontal className="h-4 w-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuLabel>Actions</DropdownMenuLabel>
					<DropdownMenuItem
						className="flex items-center gap-x-2"
						onClick={() => router.push(`/dashboard/request-a-demo/${data.id}`)}>
						<Edit className="w-4 h-4" />
						Edit
					</DropdownMenuItem>
					<DropdownMenuItem
						className="flex items-center gap-x-2"
						onClick={() => setOpen(true)}>
						<Trash className="w-4 h-4" />
						Delete
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
}
