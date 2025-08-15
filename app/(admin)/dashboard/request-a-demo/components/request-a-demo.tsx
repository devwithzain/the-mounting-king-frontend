"use client";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Heading from "@/components/admin/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import getRequestServices from "@/actions/get-requestServices";
import { columns } from "@/container/admin/request-a-demo/columns";

export default function RequestADemoListings() {
	const router = useRouter();
	const [data, setData] = useState<any[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await getRequestServices();
				setData(response.data);
			} catch (err) {
				console.error("Error fetching products:", err);
			}
		};
		fetchProducts();
	}, []);

	return (
		<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
			<div className="flex items-center justify-between">
				<div className="flex items-center justify-between">
					<Heading
						title={`Request A Demo Page`}
						description="Manage Request A Demo Page content for your website."
					/>
				</div>
				<Button
					className="flex items-center gap-x-2"
					onClick={() => router.push(`/dashboard/request-a-demo/new`)}>
					<Plus className="w-4 h-4" />
					Add new
				</Button>
			</div>
			<Separator />
			<div className="flex gap-4 flex-col">
				<DataTable
					columns={columns}
					data={data}
					searchKey="title"
				/>
			</div>
		</div>
	);
}
