"use client";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import Heading from "@/components/admin/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TRequestServicesColumnProps } from "@/types";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/container/admin/request-a-demo/columns";

export default function RequestADemoListings({
	data,
}: {
	data: TRequestServicesColumnProps[];
}) {
	const router = useRouter();

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
