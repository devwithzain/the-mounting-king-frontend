"use client";
import { TbookingsProps } from "@/types";
import { useEffect, useState } from "react";
import getBookings from "@/actions/get-bookings";
import TotalRevenue from "@/components/admin/revenue";
import { Overview } from "@/components/admin/overview";
import TotalBookings from "@/components/admin/bookings";
import TotalEmployee from "@/components/admin/employee";
import { columns } from "@/container/admin/bookings/columns";
import { getGraphRevenue } from "@/actions/get-graph-revenue";
import { CustomersChart } from "@/components/admin/customer-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
	const [bookings, setBookings] = useState<TbookingsProps[]>([]);

	useEffect(() => {
		const fetchBookings = async () => {
			try {
				const response = await getBookings();
				setBookings(response.data);
			} catch (err) {
				console.error("Error fetching bookings:", err);
			}
		};
		fetchBookings();
	}, []);

	const graphData = getGraphRevenue(bookings);

	return (
		<div className="flex flex-1 flex-col gap-4 p-4 pt-0 h-full justify-between">
			<div className="grid auto-rows-min gap-4 grid-cols-3">
				<div className="rounded-xl">
					<TotalRevenue />
				</div>
				<div className="rounded-xl">
					<TotalBookings />
				</div>
				<div className="rounded-xl">
					<TotalEmployee />
				</div>
			</div>
			<div className="w-full flex gap-4 rounded-xl h-full">
				<Card className="flex-1 flex flex-col">
					<CardHeader>
						<CardTitle>Overview</CardTitle>
					</CardHeader>
					<CardContent className="flex-1">
						<Overview data={graphData} />
					</CardContent>
				</Card>
				<Card className="flex-1">
					<CustomersChart
						columns={columns}
						data={bookings}
					/>
				</Card>
			</div>
		</div>
	);
}
