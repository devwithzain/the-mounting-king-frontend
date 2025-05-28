"use client";
import { TuserProps } from "@/types";
import getUsers from "@/actions/get-users";
import { useEffect, useState } from "react";
import { TotalSales } from "@/components/admin/sales";
import { TotalOrders } from "@/components/admin/orders";
import { columns } from "@/container/admin/user/columns";
import { UserChart } from "@/components/admin/user-chart";
import { ServiceChart } from "@/components/admin/service-chart";
import { TotalProducts } from "@/components/admin/total-products";

export default function Dashboard() {
	const [users, setUsers] = useState<TuserProps[]>([]);

	useEffect(() => {
		const fetchServices = async () => {
			try {
				const response = await getUsers();
				setUsers(response);
			} catch (err) {
				console.error("Error fetching users:", err);
			}
		};
		fetchServices();
	}, []);

	const formatedUser = users.slice(0, 5).map((user) => ({
		id: user.id,
		name: user.name,
		email: user.email,
		role: user.role,
		image: user.image,
		created_at: user.created_at,
		updated_at: user.updated_at,
	}));

	return (
		<div className="flex flex-1 flex-col gap-4 p-4 pt-0 h-full justify-between">
			<div className="grid auto-rows-min gap-4 grid-cols-3">
				<div className="rounded-xl">
					<TotalProducts />
				</div>
				<div className="rounded-xl">
					<TotalSales />
				</div>
				<div className="rounded-xl">
					<TotalOrders />
				</div>
			</div>
			<div className="w-full flex gap-4 rounded-xl h-full">
				<div className="flex-1">
					<ServiceChart />
				</div>
				<div className="flex-1">
					<UserChart
						columns={columns}
						data={formatedUser}
					/>
				</div>
			</div>
		</div>
	);
}
