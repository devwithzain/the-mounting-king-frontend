import { Metadata } from "next";
import Dashboard from "./components/dashboard";

export const metadata: Metadata = {
	title: "The Mounting King - Admin Dashboard",
	description: "The Mounting King Admin Dashboard",
};

export default function DashboardPage() {
	return (
		<>
			<Dashboard />
		</>
	);
}
