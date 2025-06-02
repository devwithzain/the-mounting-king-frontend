"use client";
import { TbookingsProps } from "@/types";
import { useEffect, useState } from "react";
import Heading from "@/components/admin/heading";
import getBookings from "@/actions/get-bookings";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/container/admin/bookings/columns";

export default function Bookings() {
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

	const formattedBookings = bookings.map((booking) => ({
		id: booking.id,
		name: booking.name,
		email: booking.email,
		phone: booking.phone,
		totalPrice: booking.totalPrice,
		created_at: booking.created_at,
	}));

	return (
		<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
			<div className="flex gap-4 flex-col">
				<div className="flex items-center justify-between">
					<Heading
						title={`Bookings (${formattedBookings.length})`}
						description="Manage Booking for your website."
					/>
				</div>
				<Separator />
				<DataTable
					columns={columns}
					data={formattedBookings}
					searchKey="name"
				/>
			</div>
		</div>
	);
}
