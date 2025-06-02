"use client";
import { TuserProps } from "@/types";
import { TotalSales } from "@/components/admin/sales";
import { TotalOrders } from "@/components/admin/orders";
import { columns } from "@/container/admin/user/columns";
import { UserChart } from "@/components/admin/user-chart";
import { ServiceChart } from "@/components/admin/service-chart";
import { TotalBookings } from "@/components/admin/total-bookings";

export default function Dashboard({ data }: { data: TuserProps[] }) {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4 pt-0 h-full justify-between">
			<div className="grid auto-rows-min gap-4 grid-cols-3">
				<div className="rounded-xl">
					<TotalBookings />
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
						data={data}
					/>
				</div>
			</div>
		</div>
	);
}
