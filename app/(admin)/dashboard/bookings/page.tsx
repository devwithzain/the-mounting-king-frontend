import { Metadata } from "next";
import Bookings from "./components/bookings";

export const metadata: Metadata = {
	title: "Bookings | The Mounting King Admin Dashboard",
	description: "Bookings | The Mounting King Admin Dashboard",
};

export default function BookingsPage() {
	return (
		<>
			<Bookings />
		</>
	);
}
