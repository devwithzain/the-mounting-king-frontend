"use client";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TemployeesColumnProps } from "@/types";
import { Button } from "@/components/ui/button";
import Heading from "@/components/admin/heading";
import getEmployees from "@/actions/get-employees";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/container/admin/employees/columns";

export default function EmployeeListings() {
	const router = useRouter();
	const [data, setData] = useState<TemployeesColumnProps[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await getEmployees();
				setData(response.data);
			} catch (err) {
				console.error("Error fetching products:", err);
			}
		};

		fetchProducts();
	});

	return (
		<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
			<div className="flex items-center justify-between">
				<Heading
					title={`Employees (${data.length})`}
					description="Manage Employees for your website."
				/>
				<Button
					className="flex items-center gap-x-2"
					onClick={() => router.push(`/dashboard/employees/new`)}>
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
