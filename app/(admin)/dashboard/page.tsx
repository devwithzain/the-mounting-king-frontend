import { Metadata } from "next";
import Dashboard from "./components/dashboard";

export const metadata: Metadata = {
	title: "Admin Dashboard | The Mounting King",
	description: "Admin Dashboard | The Mounting King",
};

export default async function DashboardPage() {
	return <Dashboard />;
}
