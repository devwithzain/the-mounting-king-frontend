import { Metadata } from "next";
import { prismadb } from "@/lib/prismadb";
import Dashboard from "./components/dashboard";

export const metadata: Metadata = {
	title: "Admin Dashboard | The Mounting King",
	description: "Admin Dashboard | The Mounting King",
};

export default async function DashboardPage() {
	const bookings = await prismadb.bookings.findMany();

	const formatedBookings = bookings.map((booking) => ({
		id: booking.id,
		name: booking.name,
		email: booking.email,
		phone: booking.phone,
		totalPrice: booking.totalPrice,
		created_at: booking.created_at,
	}));

	return <Dashboard bookings={formatedBookings} />;
}
