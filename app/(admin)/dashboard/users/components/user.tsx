"use client";
import { TuserProps } from "@/types";
import getUsers from "@/actions/get-users";
import { useEffect, useState } from "react";
import Heading from "@/components/admin/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/container/admin/user/columns";

export default function UserListings() {
	const [data, setData] = useState<TuserProps[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await getUsers();
				setData(response.data);
			} catch (err) {
				console.error("Error fetching products:", err);
			}
		};
		fetchProducts();
	});

	return (
		<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
			<div className="flex gap-4 flex-col">
				<div className="flex items-center justify-between">
					<Heading
						title={`Users (${data.length})`}
						description="Manage Users for your website."
					/>
				</div>
				<Separator />
				<DataTable
					columns={columns}
					data={data}
					searchKey="name"
				/>
			</div>
		</div>
	);
}
